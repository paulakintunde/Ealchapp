// b2.08.l1 « Reconnaître le passé simple »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape) under the B2 rules of
// B2-BUILD-LOG.md, RECOGNITION variant: every act runs SPOT (find the form in
// an extract) → MAP (to its infinitive, its person, and the passé composé a
// speaker would use today) → UNDERSTAND (questions on the extract).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.01 and b2.22 do).
//
// RECOGNITION ONLY (Paul, 2026-09-27). NOTHING asks the learner to produce a
// passé simple form: no conjugation card, no gap or option set whose job is
// to supply one, no error-spot or typeIn whose answer holds one, no flashcard
// or reviewDeck BACK that is one, no scenario `user` line in it, no speak
// practice on it. Typed answers are infinitives or passé composé rewrites.
// The corpus enforces it in the drills (corpus §A.3).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene, story, reading, examples), name (cardDeck,
//   tapTable, hacks), spot and map (groupDrill, gated), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the form INSIDE A TEXT of
//   60 to 120 words (« Dans un texte »: find, map, rewrite, understand), then
//   the gated act check.
//
//    1  La page du conte           6   meet the form in a tale; retell it in
//                                       the passé composé, not the imparfait
//    2  Où vit le passé simple     6   tale, novel, history book, press
//                                       retrospective, biography; never talk
//    3  -a, -èrent                 7   every -er verb; je -ai, nous -âmes;
//                                       parla / parlait / parlera
//    4  -it, -irent                7   -ir and -re verbs; the present twin
//                                       (il finit, il dit)
//    5  -ut, -urent                7   pouvoir, devoir, lire, recevoir…; the
//                                       participle key
//    6  -int, -inrent              6   venir, tenir and family; vint / vingt
//    7  Les irréguliers            8   fut, eut, fit, vint, prit, dit, vit,
//                                       put, dut, mit, naquit, mourut; eut fini
//    8  La personne                6   3rd person; -rent; je and nous in
//                                       memoirs; tu and vous almost never
//    9  Premier plan, décor        7   passé simple foreground, imparfait
//                                       background (lessons 3 and 4 in B1)
//   10  Aujourd'hui, tu dirais     8   the rewrite: only the passé simple
//                                       moves; être, word order, the incise
//   11  Comprendre l'extrait       7   narrator, tone, inference, point of view
//                                       (lessons 37 in B1 and 24 in B2)
//   12  Raconte-le à un ami        11  model, plan, role play, TASK, quiz
//
//   TOTAL 86 missions, 12 acts (6,6,7,7,7,6,8,6,7,8,7,11). Corpus: 178
//   authored rows (.1000-.1198) in twelve blocks (71 passé simple lines, 67
//   map cards, 14 rule cards, 26 plain sentences) plus 10 reused seed rows,
//   released act by act through `deckTranche` (map cards and plain rows only).
//   Quiz: 11 rounds of 8 (one per act 1 to 11 with acts 1-2, 3, 4, 5-6
//   grouped as the plan says, a B1 recycling round, an exam-format round).
//   Chapter artwork: `passe-simple-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b2.09 may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le passé simple, c’est le passé composé des livres : tu le lis, tu ne
//   le dis pas. »
//   EN: The passé simple is the passé composé of books: you read it, you do
//   not say it.
//
//   ONE METAPHOR, LE LIVRE ET LA BOUCHE: the same job (moving the story
//   forward) done on the page by the passé simple and in the mouth by the
//   passé composé. The learner's move is always the translation from one to
//   the other. It is NOT an old tense and NOT the imparfait of books.
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    recognising the passé simple: where it lives, the four ending
//           families, the participle key, the twelve irregulars and the
//           look-alikes, the person, its foreground role beside the
//           imparfait, the rewrite in the passé composé (être verbs, word
//           order, the incise), and a first reading of a literary page for
//           narrator, tone, inference and point of view.
//   QUOTES  the reframes of lessons 3, 4, 21 and 37 in B1 and lessons 1 and
//           24 in B2, re-exported from their corpus files; rows of lessons 3,
//           21 in B1 and 24 in B2 reused BY ID.
//   LEAVES  producing the passé simple (never, by decision); the passé
//           antérieur beyond one recognition card (act 7); the literary
//           subjunctive to the next recognition lesson of the B2 (named in
//           words only, since its position is not yet occupied); narrative
//           voice and literary analysis in depth to the literature lesson of
//           Unit 6 (same reason).
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
//   cited by trail position in words, never by raw id, and only positions
//   that exist (B1 1-39, B2 1-8, B2 22-26). Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()`, as b2.01 does (no text
//   changes; no `why` names a position).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE `sentence` DRILL ON PASSÉ SIMPLE LINES. A row needs at least one
//      drill, and every other drill kind would, somewhere in the app, show
//      the English and ask for the French (voiceflash, review, an EN → FR
//      vocab deck) or ask for the spelling (dictation). The word-tile
//      builder gives every word, so it asks for order, not form. The 71
//      lines are therefore visible in the sentence hub under « La
//      littérature ». Acceptable, or should the pipeline allow a row that is
//      named in a lesson but reachable by no drill?
//   2. THE MAP CARDS ARE `cardType: 'grammar'` so the flashcard screen logs
//      them as « recognise »; their front is the passé simple line and their
//      answer the passé composé. They also carry voiceflash and review,
//      which PRACTISE THE PASSÉ COMPOSÉ rewrite (the lesson's goal). Keep?
//   3. `Lesson.skill` is 'CE': the lesson remediates reading, as b1.37 set
//      it. The task is a written retelling graded on a 4-criterion rubric.
//      'PE' instead?
//   4. REAL FACTS in four passages (Champlain 1608 and 1663, the Berlin Wall,
//      the Tennis Court Oath, July 1969): a fact check before publish, as
//      b2.23's were. No real literary quotation is used anywhere.
//   5. THE TASK brief prints the passé simple extract (124 words), since
//      `task` has no source field; the retelling is 150 to 220 words.
//   6. The passé antérieur (« quand il eut fini ») gets ONE card and one
//      trap line in act 7, mapped to « quand il a fini ». Enough?
//   7. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' kept (inert).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_CONTE, LECTURE_MANUEL, LECTURE_BIOGRAPHIE, LECTURE_ROMAN, LECTURE_RETRO, LECTURE_EXTRAIT,
  LECTURE_MODELE, EXTRAIT_TACHE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B103_REFRAME, B103_REFRAME_EN, B104_REFRAME, B104_REFRAME_EN, B121_REFRAME, B121_REFRAME_EN,
  B137_REFRAME, B137_REFRAME_EN, B201_REFRAME, B201_REFRAME_EN, B224_REFRAME, B224_REFRAME_EN,
  PC_IMP_UNIT, PAIRES_UNIT, INVERSION_UNIT, LECTURE_B1_UNIT, PQP_UNIT,
  PC_IMP_REF, PAIRES_REF, DISCOURS_REF, INVERSION_REF, LECTURE_B1_REF, PQP_REF, CRITIQUE_REF,
  PASSE_B1_RANGE_REF,
} from './passe-simple-corpus.ts';
import { PS_TERMS } from './passe-simple-terms.ts';

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
  if (!r) throw new Error(`b2.08: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.08: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.08: no respell on ${id}`);
  return `[${r.respell}]`;
}

const RP = (n: number) => `fr.b1.recits-au-passe.${n}`;
const LS = (n: number) => `fr.b1.langue-soignee.${n}`;
const SC = 'fr.b2.strategies-de-comprehension.1507';

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

/** THE « IN A TEXT » BEAT that closes acts 3 to 11: one paragraph of 60 to
 *  120 words with the passé simple inside it. The questions always SPOT
 *  (find the forms), MAP (infinitive, person, passé composé rewrite) and
 *  UNDERSTAND; the answers sit behind the modal. Same title every time, so a
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
 *  ACT 1: LA PAGE DU CONTE
 *
 *  Meet the form. A friend reads « Il entra, regarda autour de lui et
 *  s'assit » and you retell it. The failing instinct reads the -a and -it
 *  endings as a habit (the imparfait). NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le club de lecture',
  frSub: 'Trois verbes que tu n’as jamais dits',
  setting: { place: 'Bibliothèque du Plateau', city: 'Montréal', time: '19 h 30', ambience: 'des chaises en cercle, des tasses de thé, la neige derrière les vitres' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un mardi soir. Ton club de lecture a choisi un recueil de contes. Inès lit à voix haute la première page, et Marc arrive en retard, le manteau couvert de neige.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: fr(E(1002)), en: en(E(1002)), respell: rsOf(E(1002)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: 'Marc a raté le début. Tu peux lui raconter ce que fait le voyageur.',
      en: 'Marc missed the beginning. You can tell him what the traveller does.',
      respell: '[MARK a ra-TAY luh day-BÜ | tü peu lwee ra-kohⁿ-TAY | suh kuh FEH luh vwa-ya-ZHUHR]',
      stage: 'Tu n’as jamais dit entra, regarda, s’assit. Tu dois pourtant les faire passer à Marc.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Marc s'assoit à côté de toi. Il attend. Tu veux lui dire ce que le voyageur a fait ce soir-là, dans l'ordre.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit ce qui s’est passé ce soir-là.',
      size: 'lg',
      options: [
        { fr: fr(E(1003)), respell: rsOf(E(1003)), en: en(E(1003)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(RP(233)), respell: rsOf(RP(233)), en: en(RP(233)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Marc hoche la tête : un homme est entré, il a regardé, il s’est assis. Trois gestes, un seul soir, et il suit enfin l’histoire.',
        breaks: 'Marc croit que le voyageur venait là tous les soirs. Pour lui, c’est une habitude, et il ne comprend plus pourquoi Rose lui ouvre comme à un inconnu.',
      },
    },
    {
      kind: 'break',
      heading: 'Le passé composé des livres',
      body: "Entra, regarda, s'assit : c'est le passé simple. Il fait avancer le récit, comme le passé composé quand tu parles. Tu le lis, et tu le traduis. EN: The passé simple moves the story on, like the passé composé in speech.",
      wrong: { fr: fr(E(1003)), ipa: ipaOf(E(1003)), respell: rsOf(E(1003)), en: en(E(1003)) },
      right: { fr: fr(RP(233)), ipa: ipaOf(RP(233)), respell: rsOf(RP(233)), en: en(RP(233)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Au B1, tu racontais au passé composé. Dans les livres, le même rôle revient à un autre temps. Cette leçon t'apprend à le reconnaître et à le traduire, jamais à le produire.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['ecrit', 'aujourdhui'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Repérer le passé simple et savoir où il vit', s: 'Actes 1 et 2 : le conte, le manuel, la presse, jamais la conversation' },
    { t: 'Retrouver le verbe derrière chaque forme', s: 'Actes 3 à 8 : les quatre finales, les irréguliers, la personne' },
    { t: 'Raconter le texte au passé composé', s: 'Actes 9 et 10 : le premier plan, le décor, la traduction' },
    { t: 'Comprendre une page de roman', s: 'Actes 11 et 12 : le narrateur, le ton, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le meunier et la graine',
  frSub: 'Un conte, lu jusqu’au bout',
  text: LECTURE_CONTE,
  glossary: [
    { word: 'meunier', en: 'miller', note: 'Celui qui fait tourner le moulin et transforme le grain en farine.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « le fleuve déborda et emporta la roue du moulin ». Qu’arrive-t-il au moulin ?', a: "Le fleuve est sorti de son lit et a arraché la roue : le moulin ne peut plus tourner. Déborda, c'est déborder ; emporta, c'est emporter." },
    { q: 'Globale : de quoi parle ce conte, en une phrase ?', a: "D'un cadeau mystérieux qu'on ne doit ouvrir qu'au pire moment, et qui sauve finalement tout un village." },
    { q: 'Repère trois verbes qui font avancer l’histoire le soir de l’arrivée, et donne leur infinitif.', a: "frappa (frapper), ouvrit (ouvrir), offrit (offrir), entra (entrer), regarda (regarder), s'assit (s'asseoir), sortit (sortir), posa (poser)." },
    { q: 'Détail : pourquoi Rose attend-elle sept ans avant d’ouvrir la boîte ?', a: "Le voyageur a demandé de ne l'ouvrir que le jour où ils auraient tout perdu. Ce jour arrive quand le fleuve emporte la roue." },
    { q: 'Inférence : que laisse entendre la dernière phrase sur le voyageur ?', a: "Qu'il savait depuis le début ce qui arriverait : il revient voir que son cadeau a sauvé le village, et il sourit." },
  ],
  audio: REC('rec-b2-08-conte'),
  say: REFRAME,
  terms: ['ecrit', 'infinitif'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère, puis traduis',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Les verbes qui avancent', [
      it(E(1000), 'frappa : frapper'),
      it(E(1001), 'ouvrit, offrit : ouvrir, offrir'),
      it(E(1012), 'cacha : cacher'),
      it(E(1006), 'déborda, emporta : deux événements'),
    ], chk('Ces quatre phrases racontent…',
      ['des événements, l’un après l’autre', 'une habitude', 'un décor qui dure'], 0,
      'Chaque verbe est un pas du récit, comme au passé composé. EN: each verb is a step of the story.')),
    grp('Le même récit, à voix haute', [
      it(E(1004), 'frappa devient a frappé'),
      it(E(1005), 'ouvrit, offrit : a ouvert, a offert'),
      it(E(1007), 'deux verbes, deux passés composés'),
      it(E(1011), 'voulut devient a voulu'),
    ], chk('Dans ces versions, quel temps a pris la place du passé simple ?',
      ['le passé composé', 'l’imparfait', 'le présent'], 0,
      'Le passé composé fait à l’oral ce que le passé simple fait à l’écrit. EN: the passé composé does the same job in speech.')),
    ctl('Le réflexe', 'Tu lis « Rose cacha la boîte sous son lit ». Que fais-tu d’abord ?',
      ['tu retrouves le verbe : cacher', 'tu apprends la forme par cœur', 'tu la répètes à voix haute'], 0,
      'Enlève la finale, retrouve l’infinitif : le sens suit. EN: find the infinitive first.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif', 'aujourdhui'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où tu vas le rencontrer',
  cases: [
    { situation: 'Tu lis un conte à ta nièce', fr: fr(E(1000)), en: en(E(1000)) },
    { situation: 'Tu révises un examen d’histoire', fr: fr(E(1015)), en: en(E(1015)) },
    { situation: 'Tu lis la biographie d’une romancière', fr: fr(E(1018)), en: en(E(1018)) },
    { situation: 'Tu lis un grand reportage dans le journal', fr: fr(E(1017)), en: en(E(1017)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ecrit'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le rôle', '« Il entra, regarda autour de lui et s’assit. » Ces verbes disent…',
    ['trois actions, une fois, dans l’ordre', 'une habitude du voyageur'], 0,
    'Trois pas du récit, un seul soir. EN: three steps, one evening.'),
  ctl('La traduction', 'Pour raconter ce conte à un ami, tu dis…',
    ['il est entré, il a regardé', 'il entrait, il regardait', 'il entra, il regarda'], 0,
    'À l’oral, le passé composé. EN: in speech, the passé composé.'),
  ctl('Ta tâche', 'Dans cette leçon, le passé simple, tu dois…',
    ['le reconnaître et le traduire', 'l’écrire dans tes messages'], 0,
    'Tu le lis ; tu ne le produis jamais. EN: you read it, you never produce it.'),
], ['ecrit']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La page du conte',
    opener: {
      line: "Une amie lit un conte, et trois verbes t'échappent : ici tu découvres le temps que les livres utilisent pour raconter. EN: A friend reads a tale and three verbs slip past you: here you meet the tense books use to tell a story.",
      imageRef: 'lessons/passe-simple/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères un passé simple dans un conte et tu le racontes au passé composé, sans en faire une habitude. EN: You can spot a passé simple in a tale and retell it in the passé composé.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: OÙ VIT LE PASSÉ SIMPLE
 *
 *  Tale, novel, history textbook, press retrospective, biography. Never in
 *  conversation, however old the memory. Tom learns it from crime novels and
 *  says it aloud.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Tom parle comme un roman',
  frSub: 'La pause café',
  setting: "Montréal, la pause café au bureau. Tom apprend le français dans des romans policiers ; il raconte son samedi à sa collègue Julie.",
  bubbles: [
    { from: 'narrator', fr: 'Tom a lu trois romans policiers ce mois-ci.', en: 'Tom has read three crime novels this month.' },
    { from: 'user', fr: "Samedi, je pris le métro et j'allai au marché Jean-Talon.", en: 'On Saturday I took the metro and went to the Jean-Talon market.' },
    { from: 'coach', fr: "Tu parles comme un roman de mon grand-père. Ici, on dit : j'ai pris le métro, je suis allé au marché.", en: 'You sound like one of my grandfather’s novels. Here we say: I took the metro, I went to the market.', warn: "À l'oral : passé composé" },
    { from: 'user', fr: 'Pourtant, dans mon livre, tout est écrit comme ça : il entra, il regarda.', en: 'But in my book everything is written like that: he came in, he looked.' },
    { from: 'coach', fr: "Le narrateur écrit comme ça. Mais quand le détective parle, il dit : je suis entré, j'ai regardé.", en: 'The narrator writes like that. But when the detective speaks, he says: I came in, I looked.', warn: 'Le narrateur écrit, le personnage parle' },
    { from: 'user', fr: 'Donc je le lis, mais je ne le dis pas.', en: 'So I read it, but I do not say it.' },
    { from: 'coach', fr: 'Voilà. Raconte-moi ton marché, au passé composé cette fois.', en: 'That is it. Tell me about your market trip, in the passé composé this time.' },
  ],
  closing: { fr: REFRAME, en: REFRAME_EN },
  audio: REC('rec-b2-08-tom'),
  say: REFRAME,
  terms: ['ecrit'],
};

const A2_GENRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-genres',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-usages',
  title: 'Quatre textes, un même temps',
  frSub: 'Là où l’on raconte par écrit',
  hint: 'Quatre cartes. Regarde qui écrit, pas quand.',
  audio: REC('rec-b2-08-genres'),
  say: REFRAME,
  terms: ['ecrit'],
  cards: [
    {
      head: 'Le conte', label: 'il était une fois',
      fr: fr(E(1020)), sub: rsOf(E(1020)),
      body: "Le conte s'ouvre sur un imparfait (il était une fois), puis tout ce qui arrive passe au passé simple. C'est souvent là que tu l'as entendu enfant. EN: Tales open with the imparfait, then every event is in the passé simple.",
    },
    {
      head: 'Le livre d’histoire', label: 'le manuel',
      fr: fr(E(1015)), sub: rsOf(E(1015)),
      body: "Les manuels et les ouvrages d'histoire racontent les grands faits au passé simple. Le professeur, lui, dit en classe : Champlain a fondé Québec. EN: History books use the passé simple; the teacher, speaking, uses the passé composé.",
    },
    {
      head: 'La biographie', label: 'une vie racontée',
      fr: fr(E(1018)), sub: rsOf(E(1018)),
      body: "Naquit, mourut, devint, publia : une biographie aligne les étapes d'une vie finie. C'est un des textes où tu rencontreras le plus d'irréguliers. EN: Biographies line up the stages of a finished life.",
    },
    {
      head: 'La presse', label: 'la rétrospective',
      fr: fr(E(1025)), sub: rsOf(E(1025)),
      body: "Un grand article qui revient sur un événement passé peut passer au passé simple, pour donner au récit la distance d'un livre. Le flash d'information, lui, reste au passé composé. EN: Press retrospectives may use it; the news bulletin never does.",
    },
  ],
};

const A2_MANUEL: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-manuel',
  layer: 'core',
  questionsInModal: true,
  title: 'Une page de manuel',
  frSub: 'La fondation de Québec',
  text: LECTURE_MANUEL,
  glossary: [
    { word: 'scorbut', en: 'scurvy', note: 'Une maladie due au manque de fruits et de légumes frais, fréquente sur les navires.' },
    { word: 'poste de traite', en: 'trading post', note: 'Un lieu où l’on échangeait des marchandises contre des fourrures.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’hiver 1608-1609, qui faillit tout arrêter ». Que s’est-il presque passé ?', a: "La colonie a failli disparaître : faillit, c'est faillir, et faillir + infinitif veut dire presque. La colonie a presque été abandonnée." },
    { q: 'Globale : quel genre de texte est-ce, et pour qui est-il écrit ?', a: "Une page de manuel d'histoire, écrite pour des élèves qui préparent un examen : elle raconte, puis donne les dates à retenir." },
    { q: 'Repère deux verbes au passé simple et deux à l’imparfait. Que fait chaque groupe ?', a: "Passé simple : fonda, fit construire, fut, moururent, renonça, changèrent… les faits qui se suivent. Imparfait : cherchait, venaient, augmentait, dépendait… la situation qui dure." },
    { q: 'Détail : que retient le texte pour l’année 1663 ?', a: "Louis XIV fait de la Nouvelle-France une province royale, et les colons arrivent par centaines." },
    { q: 'Et toi, en classe, comment dirais-tu la première date ?', a: "En 1608, Champlain a fondé Québec. À l'oral, le passé composé." },
  ],
  audio: REC('rec-b2-08-manuel'),
  say: REFRAME,
  terms: ['ecrit', 'decor'],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-usages',
  title: 'Six endroits, une seule exception',
  cols: ['Où', 'Passé simple ?', 'Ce que tu lis'],
  rows: [
    { cells: ['un conte', 'oui', 'le renard s’approcha'], say: fr(E(1020)),
      detail: { title: 'Le conte', body: "Tous les événements, du premier au dernier. Le décor reste à l'imparfait. EN: every event of the tale.", say: fr(E(1000)) } },
    { cells: ['un roman', 'oui, souvent', 'il entra, regarda'], say: fr(E(1002)),
      detail: { title: 'Le roman', body: "La plupart des romans racontent au passé simple, même aujourd'hui. Certains choisissent le passé composé ou le présent. EN: most novels, even contemporary ones.", say: fr(E(1148)) } },
    { cells: ['un manuel d’histoire', 'oui', 'Champlain fonda Québec'], say: fr(E(1015)),
      detail: { title: 'Le manuel', body: "Les dates et les faits, dans l'ordre. En classe, le professeur les dit au passé composé. EN: facts in order, said aloud in the passé composé.", say: fr(E(1016)) } },
    { cells: ['une biographie', 'oui', 'elle naquit à Liège'], say: fr(E(1018)),
      detail: { title: 'La biographie', body: "Une vie finie, étape par étape : naquit, devint, mourut. EN: a finished life, step by step.", say: fr(E(1117)) } },
    { cells: ['la presse', 'parfois', 'la foule envahit la place'], say: fr(E(1017)),
      detail: { title: 'La presse', body: "Dans une rétrospective ou un grand reportage, oui. Dans un article sur l'actualité du jour, non. EN: in retrospectives, not in daily news.", say: fr(E(1162)) } },
    { cells: ['une conversation', 'jamais', 'on a mangé chez Karim'], say: fr(E(1021)),
      detail: { title: 'La conversation', body: "Jamais, même pour un souvenir de cinquante ans. Le passé simple à l'oral sonne comme un livre qu'on récite. EN: never in speech, however old the memory.", say: fr(E(1029)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ecrit'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Écrit pour être lu, ou dit à voix haute',
  frSub: 'Deux piles',
  groups: [
    grp('Écrit pour être lu', [
      it(E(1017), 'un grand reportage'),
      it(E(1027), 'une biographie'),
      it(E(1025), 'une rétrospective'),
      it(E(1020), 'un conte'),
    ], chk('Où trouves-tu ces quatre phrases ?',
      ['dans un texte écrit', 'dans une conversation'], 0,
      'Un récit écrit, fini, raconté à distance. EN: written narrative.')),
    grp('Dit à voix haute', [
      it(E(1021), 'un souvenir d’hier soir'),
      it(RP(1095), 'une amie parle d’un livre'),
      it(E(1029), 'un grand-père qui raconte'),
      it('fr.b1.litterature.003', 'une conversation sur un roman'),
    ], chk('Et ces quatre-là, quel temps pour les faits ?',
      ['le passé composé', 'le passé simple'], 0,
      'À l’oral, toujours le passé composé. EN: always the passé composé in speech.')),
    ctl('Le piège', 'Ta grand-mère raconte à table son mariage de 1955. Elle dit…',
      ['nous nous sommes mariés en juin', 'nous nous mariâmes en juin'], 0,
      'Le temps qui passe ne change rien : elle parle, donc passé composé. EN: distance does not decide; speaking does.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ecrit'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’exception', 'Où ne rencontres-tu jamais le passé simple ?',
    ['dans une conversation', 'dans un manuel', 'dans une biographie'], 0,
    'Jamais à l’oral. EN: never in speech.'),
  ctl('La distance', 'Un roman publié cette année peut-il être au passé simple ?',
    ['oui', 'non, c’est un temps ancien'], 0,
    'C’est le temps normal du récit écrit, aujourd’hui encore. EN: still the normal written narrative tense.'),
  ctl('Le personnage', 'Dans un roman, quand un personnage parle entre guillemets, il dit…',
    ['j’ai pris le train', 'je pris le train'], 0,
    'Le narrateur écrit, le personnage parle. EN: characters speak in the passé composé.'),
], ['ecrit']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Où vit le passé simple',
    opener: {
      line: "Un conte, un manuel, une biographie, jamais une conversation : ici tu apprends où ce temps t'attend. EN: A tale, a textbook, a biography, never a conversation: here you learn where this tense is waiting for you.",
      imageRef: 'lessons/passe-simple/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais dans quels textes tu rencontreras le passé simple, et tu ne le mets plus jamais dans ta bouche. EN: You know which texts use the passé simple, and you never put it in your mouth.",
    estScreens: 32, restPoints: ['a2-manuel'],
  },
  sections: [A2_HISTOIRE, A2_GENRES, A2_MANUEL, A2_TABLE, A2_TRIER, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: -A, -ÈRENT
 *
 *  Every -er verb. Il -a, ils -èrent; je -ai and nous -âmes in memoirs.
 *  The trap is the trio parla / parlait / parlera.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Le carnet du grand-père',
  frSub: 'Dakar, un soir',
  setting: "Dakar. Awa lit à sa grand-mère le carnet de voyage que son grand-père a écrit en 1962, sur la route de Tombouctou.",
  bubbles: [
    { from: 'narrator', fr: 'Awa ouvre le carnet à la première page.', en: 'Awa opens the notebook at the first page.' },
    { from: 'user', fr: fr(E(1040)), en: en(E(1040)) },
    { from: 'coach', fr: "Arrivâmes, c'est arriver avec nous. Ton grand-père écrivait comme dans les livres.", en: 'Arrivâmes is arriver with nous. Your grandfather wrote the way books do.', warn: '-âmes : nous' },
    { from: 'user', fr: fr(E(1038)), en: en(E(1038)) },
    { from: 'coach', fr: "Demandai, avec je : il a demandé son chemin, tout simplement.", en: 'Demandai, with je: he asked the way, that is all.', warn: '-ai : je' },
    { from: 'user', fr: fr(E(1036)), en: en(E(1036)) },
    { from: 'coach', fr: "Marchèrent : ils ont marché. Tu entends le r à la fin, c'est le pluriel.", en: 'Marchèrent: they walked. You hear the r at the end: that is the plural.', warn: '-èrent : ils' },
  ],
  closing: { fr: "Enlève la finale, ajoute -er, et le verbe revient.", en: 'Take off the ending, add -er, and the verb comes back.' },
  audio: REC('rec-b2-08-carnet'),
  say: REFRAME,
  terms: ['finale', 'personne'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-terminaisons',
  title: 'Les verbes en -er',
  frSub: 'Une finale, un seul groupe',
  hint: 'Quatre cartes. La dernière est un piège.',
  audio: REC('rec-b2-08-er'),
  say: REFRAME,
  terms: ['finale', 'infinitif'],
  cards: [
    {
      head: 'Il, elle : -a', label: 'le singulier',
      fr: fr(E(1030)), sub: rsOf(E(1030)),
      body: "Parla, ferma, regarda : une finale en -a tout court. Enlève-la, ajoute -er, et tu as l'infinitif. Tous les verbes en -er, même aller : il alla. EN: -a in the singular, for every -er verb.",
    },
    {
      head: 'Ils, elles : -èrent', label: 'le pluriel',
      fr: fr(E(1032)), sub: rsOf(E(1032)),
      body: "Rentrèrent, marchèrent : le pluriel garde le -er de l'infinitif et ajoute -ent. À l'oreille, le r final s'entend. EN: -èrent in the plural; the r is heard.",
    },
    {
      head: 'Je : -ai ; nous : -âmes', label: 'les souvenirs',
      fr: fr(E(1038)), sub: rsOf(E(1038)),
      body: "Dans un journal ou un récit de voyage, tu liras je demandai, nous arrivâmes. Le -âmes n'existe qu'à l'écrit. EN: je -ai and nous -âmes appear in memoirs.",
    },
    {
      head: 'Trois temps qui se ressemblent', label: 'le piège',
      fr: 'il parla · il parlait · il parlera',
      sub: '[eel par-LA] · [eel par-LEH] · [eel par-luh-RA]',
      body: "Parla, passé simple : un événement. Parlait, imparfait : une habitude ou un décor. Parlera, futur : le r de l'infinitif est resté. EN: parla, parlait, parlera are three different tenses.",
    },
  ],
};

const A3_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le verbe, puis la personne',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Retrouve l’infinitif', [
      it(E(1030), 'parla, ferma'),
      it(E(1034), 'regarda, pensa'),
      it(E(1045), 's’arrêta : un pronominal'),
      it(E(1012), 'cacha'),
    ], chk('Pensa, dans la deuxième phrase, vient de…',
      ['penser', 'pendre', 'pousser'], 0,
      'Pens-a, puis -er : penser. EN: pensa is penser.')),
    grp('Qui fait l’action', [
      it(E(1032), 'rentrèrent : ils'),
      it(E(1036), 'marchèrent : ils'),
      it(E(1038), 'demandai : je'),
      it(E(1040), 'arrivâmes : nous'),
    ], chk('Marchèrent : qui marche ?',
      ['ils ou elles', 'il ou elle', 'nous'], 0,
      '-èrent, c’est toujours le pluriel de la troisième personne. EN: -èrent is always third person plural.')),
    ctl('Aujourd’hui', '« Elle regarda la mer. » Pour le raconter, tu dis…',
      ['elle a regardé la mer', 'elle regardait la mer', 'elle regardera la mer'], 0,
      'Un événement du récit : passé composé. EN: an event, so the passé composé.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif', 'personne'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Parla, parlait ou parlera',
  frSub: 'Huit phrases, trois temps',
  lines: [
    ln(E(1030)), ln(E(1043)), ln(E(1044)), ln(E(1032)),
    ln(E(1036)), ln(E(1045)), ln(E(1034)), ln(E(1038)),
  ],
  questions: [
    { q: 'Première phrase : combien de fois a-t-il parlé ainsi ?', opts: ['une fois, dans le récit', 'souvent, par habitude'], correct: 0, why: 'Parla : un événement. EN: one event.' },
    { q: 'Deuxième phrase : est-ce un événement ou une habitude ?', opts: ['une habitude', 'un événement'], correct: 0, why: 'Parlait et souvent : l’imparfait de l’habitude. EN: a habit.' },
    { q: 'Troisième phrase : quand parlera-t-il ?', opts: ['demain', 'hier'], correct: 0, why: 'Parlera garde le r : c’est le futur. EN: the future.' },
    { q: 'Quatrième phrase : combien d’enfants rentrent ?', opts: ['plusieurs', 'un seul'], correct: 0, why: 'Rentrèrent : ils. EN: plural.' },
    { q: 'Huitième phrase : qui demande son chemin ?', opts: ['le narrateur', 'un berger', 'les enfants'], correct: 0, why: 'Demandai : je, le narrateur. EN: the narrator.' },
  ],
  audio: REC('rec-b2-08-er-ecoute'),
  say: REFRAME,
  terms: ['finale'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Mal lu, mal raconté',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'La finale décide du temps',
    body: "Un -a tout court, c'est le passé simple : un événement, que tu racontes au passé composé. Un -ait, c'est l'imparfait. Un -era, c'est le futur. Lis la fin du verbe avant de traduire. EN: -a is the passé simple, -ait the imparfait, -era the future.",
  },
  cards: [
    { promptLabel: 'lu comme un imparfait', promptSound: 'Il parlait longtemps, puis il fermait les yeux.', fr: fr(E(1031)), ipa: ipaOf(E(1031)), tip: 'Parla, ferma : deux événements, pas une habitude. EN: two events.' },
    { promptLabel: 'lu comme un futur', promptSound: 'Les enfants rentreront avant la nuit.', fr: fr(E(1033)), ipa: ipaOf(E(1033)), tip: 'Rentrèrent est un passé : le futur dirait rentreront. EN: past, not future.' },
    { promptLabel: 'lu comme un présent', promptSound: 'Elle regarde la mer et pense à son frère.', fr: fr(E(1035)), ipa: ipaOf(E(1035)), tip: 'Regarda n’a pas de e : c’est le passé simple. EN: no final e, so past.' },
    { promptLabel: 'je lu au futur', promptSound: 'Je demanderai mon chemin à un berger.', fr: fr(E(1039)), ipa: ipaOf(E(1039)), tip: 'Demandai sans r : le futur serait demanderai. EN: no r, not the future.' },
    { promptLabel: 'nous lu au présent', promptSound: 'Nous arrivons à Tombouctou au lever du jour.', fr: fr(E(1041)), ipa: ipaOf(E(1041)), tip: 'Arrivâmes : le passé, avec nous. EN: past, with nous.' },
    { promptLabel: 'pronominal oublié', promptSound: 'Le train a arrêté en pleine campagne.', fr: fr(E(1046)), ipa: ipaOf(E(1046)), tip: 'S’arrêta : pronominal, donc être aujourd’hui. EN: pronominal, so être.' },
  ],
  drill: [
    { promptSay: '« Il parla longtemps. » Aujourd’hui, il … longtemps.', opts: ['a parlé', 'parlait'], correct: 0 },
    { promptSay: '« Ils marchèrent. » Aujourd’hui, ils …', opts: ['ont marché', 'marcheront'], correct: 0 },
    { promptSay: '« Je demandai. » Aujourd’hui, j’…', opts: ['ai demandé', 'demanderai'], correct: 0 },
    { promptSay: '« Nous arrivâmes. » Aujourd’hui, nous …', opts: ['sommes arrivés', 'arrivons'], correct: 0 },
    { promptSay: '« Il parlera. » C’est…', opts: ['le futur', 'le passé simple'], correct: 0 },
    { promptSay: '« Elle pensa à son frère. » L’infinitif est…', opts: ['penser', 'pendre'], correct: 0 },
    { promptSay: '« Le train s’arrêta. » Aujourd’hui, le train …', opts: ['s’est arrêté', 'a arrêté'], correct: 0 },
    { promptSay: '« Il parlait souvent. » C’est…', opts: ['l’imparfait', 'le passé simple'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La finale décide du temps' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’œil lit trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-08-piege-er'),
  say: REFRAME,
  terms: ['finale', 'aujourdhui'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Repérer : la route de Tombouctou', TEXTE_A3, [
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "arrivâmes (arriver), salua (saluer), chargea (charger), marcha (marcher), se leva (se lever), nous abritâmes (s'abriter), mangeâmes (manger), demandai (demander), éclata (éclater), montra (montrer)." },
  { q: 'Qui fait l’action dans « nous nous abritâmes » ? Et dans « je demandai » ?', a: "Nous : le groupe de voyageurs. Je : le narrateur. Un récit de voyage, donc la première personne." },
  { q: 'Raconte au passé composé : « Il nous salua, chargea nos sacs sur un chameau et marcha devant nous sans un mot. »', a: "Il nous a salués, il a chargé nos sacs sur un chameau et il a marché devant nous sans un mot." },
  { q: 'Pourquoi « attendait » et « brillaient » ne sont-ils pas au passé simple ?', a: "Ce sont des décors : le guide attendait déjà, les étoiles brillaient toute la nuit. L'imparfait ne change pas quand tu racontes." },
  { q: 'Pourquoi le guide éclate-t-il de rire ?', a: "Il ne risque pas de se perdre : il se guide aux étoiles. Le texte le montre avec un geste, sans le dire." },
], 'rec-b2-08-texte-a3', ['finale', 'infinitif']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La finale', 'Un verbe en -er, avec il, au passé simple, finit par…',
    ['-a', '-ait', '-era'], 0,
    'Parla, regarda. EN: -a.'),
  ctl('Le pluriel', 'Chantèrent : qui chante ?',
    ['ils ou elles', 'il ou elle'], 0,
    '-èrent : le pluriel. EN: plural.'),
  ctl('L’infinitif', 'Chargea vient de…',
    ['charger', 'changer'], 0,
    'Charge-a, puis -er. EN: charger.'),
], ['finale']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: '-a, -èrent',
    opener: {
      line: "Parla, regarda, marchèrent : ici tu reconnais d'un coup d'œil tous les verbes en -er. EN: Parla, regarda, marchèrent: here you learn to spot every -er verb at a glance.",
      imageRef: 'lessons/passe-simple/act03.jpg',
    },
    sections: [],
    milestone: "Tu retrouves l'infinitif et la personne de n'importe quel verbe en -er au passé simple, sans le confondre avec l'imparfait ou le futur. EN: You can map any -er verb in the passé simple to its infinitive and person.",
    estScreens: 36, restPoints: ['a3-reperer', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_REPERER, A3_ECOUTE, A3_PIEGE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: -IT, -IRENT
 *
 *  The -ir verbs and nearly every -re verb. The present twin: il finit, il
 *  dit. The participle key works for partir, not for répondre.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Six phrases en -it',
  frSub: 'Lis, puis cherche le verbe',
  examples: [
    ex(E(1050), 'partit : partir'),
    ex(E(1052), 'répondit : répondre'),
    ex(E(1054), 'descendirent : descendre, au pluriel'),
    ex(E(1056), 'attendit : attendre'),
    ex(E(1058), 'choisirent : choisir, au pluriel'),
    ex(E(1065), 'perdirent : perdre, au pluriel'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['finale', 'infinitif'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-terminaisons',
  title: 'Les verbes en -ir et en -re',
  frSub: 'Une deuxième famille',
  hint: 'Quatre cartes. La quatrième cache un présent.',
  audio: REC('rec-b2-08-it'),
  say: REFRAME,
  terms: ['finale', 'sosie'],
  cards: [
    {
      head: '-it : les verbes en -ir', label: 'partir, finir, choisir',
      fr: fr(E(1050)), sub: rsOf(E(1050)),
      body: "Il partit, il finit, il choisit : la finale ressemble au participe (parti, fini, choisi). Si tu connais le participe, tu reconnais la forme. EN: -it, close to the participle.",
    },
    {
      head: '-it aussi : les verbes en -re', label: 'attendre, répondre',
      fr: fr(E(1056)), sub: rsOf(E(1056)),
      body: "Il attendit, il répondit, il descendit : même finale. Mais le participe finit en -u (attendu, répondu) : ici, cherche plutôt l'infinitif en -re. EN: -re verbs also take -it, but their participle is in -u.",
    },
    {
      head: '-irent : le pluriel', label: 'ils, elles',
      fr: fr(E(1058)), sub: rsOf(E(1058)),
      body: "Choisirent, descendirent, perdirent : le pluriel ajoute -rent. Tu entends le r final, comme dans marchèrent. EN: -irent in the plural.",
    },
    {
      head: 'Le sosie du présent', label: 'il finit',
      fr: fr(E(1062)), sub: rsOf(E(1062)),
      body: "Il finit, il choisit, il dit : au singulier, le passé simple de ces verbes a la même forme que le présent. Tous les soirs dit le présent ; un récit au passé dit le passé simple. EN: some forms are identical to the present; context decides.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le verbe, et le temps',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Retrouve le verbe', [
      it(E(1050), 'partit'),
      it(E(1052), 'répondit'),
      it(E(1054), 'descendirent'),
      it(E(1065), 'perdirent'),
    ], chk('Descendirent, dans la troisième phrase, vient de…',
      ['descendre', 'descendir', 'décider'], 0,
      'Descend-irent : descendre, un verbe en -re. EN: descendre.')),
    grp('Présent ou passé simple', [
      it(E(1060), 'finit, puis plia'),
      it(E(1062), 'tous les soirs'),
      it(E(1056), 'attendit la nuit'),
      it(E(1058), 'choisirent'),
    ], chk('« Tous les soirs, il finit son travail à six heures. » Finit est…',
      ['un présent', 'un passé simple'], 0,
      'Tous les soirs, et aucun autre passé autour : c’est le présent. EN: a present habit.')),
    ctl('Aujourd’hui', '« Ils perdirent tout dans l’incendie. » Pour le raconter, tu dis…',
      ['ils ont tout perdu', 'ils ont perdu tout', 'ils perdaient tout'], 0,
      'Tout se place entre ont et perdu. EN: tout goes between the two words.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sosie', 'infinitif'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre traductions ratées',
  errors: [
    {
      wrong: "Elle a réponde d'une voix calme.",
      right: fr(E(1053)),
      why: "Normal : répondit fait penser à un participe en -i, et réponde existe au subjonctif. Mais le participe de répondre est répondu. EN: répondit looks like an -i participle, but it is répondu.",
    },
    {
      wrong: "Il a parti à l'aube sans dire au revoir.",
      right: fr(E(1051)),
      why: "Normal : partit ne montre pas d'auxiliaire, et avoir est le plus fréquent. Mais partir prend être au passé composé. EN: partir takes être.",
    },
    {
      wrong: 'Les soldats descendaient vers la rivière.',
      right: fr(E(1055)),
      why: "Normal : -irent et -aient se ressemblent à l'œil. Mais descendirent est un seul mouvement, pas un décor. EN: -irent is one event, not a background.",
    },
    {
      wrong: "Ils ont perdu tout dans l'incendie.",
      right: fr(E(1066)),
      why: "Normal : dans le livre, tout vient après le verbe. Au passé composé, tout se glisse entre ont et perdu. EN: tout moves between the two words.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'participe'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris la version d’aujourd’hui',
  frSub: 'Le passé composé, sous la dictée',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Repérer : le prince et la clé', TEXTE_A4, [
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "attendit (attendre), sortit (sortir), tendit (tendre), prit (prendre), ouvrit (ouvrir), descendit (descendre), entendit (entendre), suivit (suivre), leva (lever), sourit (sourire), dit (dire)." },
  { q: 'Sourit et dit peuvent être des présents. Comment sais-tu que ce sont des passés simples ?', a: "Tous les verbes autour sont au passé simple, et le récit est au passé : ils continuent la suite des événements." },
  { q: 'Raconte au passé composé : « Il la prit sans un mot, ouvrit la porte et descendit l’escalier. »', a: "Il l'a prise sans un mot, il a ouvert la porte et il a descendu l'escalier. Prise s'accorde avec la (la clé) ; descendre + l'escalier prend avoir." },
  { q: 'Pourquoi la jeune fille dit-elle « Vous en avez mis, du temps » au passé composé ?', a: "Elle parle. Même dans un conte, un personnage qui parle emploie le passé composé." },
], 'rec-b2-08-texte-a4', ['sosie', 'infinitif']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La finale', 'Partit, répondit, attendit : quelle famille ?',
    ['-it, pour les verbes en -ir et en -re', '-a, pour les verbes en -er'], 0,
    'La même finale, deux groupes. EN: -it for -ir and -re verbs.'),
  ctl('Le sosie', '« Il dit qu’il reviendrait. » Dans un roman, dit est…',
    ['un passé simple', 'un présent'], 0,
    'Reviendrait montre qu’on est au passé. EN: reviendrait marks the past.'),
  ctl('L’auxiliaire', '« Il partit. » Aujourd’hui…',
    ['il est parti', 'il a parti'], 0,
    'Partir prend être. EN: être.'),
], ['finale', 'sosie']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: '-it, -irent',
    opener: {
      line: "Il partit, il répondit, il finit : ici tu reconnais la deuxième famille, et le présent qui se cache dedans. EN: Il partit, il répondit, il finit: here you meet the second family, and the present hiding inside it.",
      imageRef: 'lessons/passe-simple/act04.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les verbes en -ir et en -re au passé simple, et tu sais quand il finit est un présent. EN: You can recognise -ir and -re verbs, and tell when il finit is a present.",
    estScreens: 34, restPoints: ['a4-cartes', 'a4-erreurs'],
  },
  sections: [A4_EXEMPLES, A4_CARTES, A4_CONSTRUIRE, A4_ERREURS, A4_DICTEE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: -UT, -URENT
 *
 *  Pouvoir, devoir, vouloir, lire, croire, recevoir, vivre, se taire. The
 *  participle key: put / pu, lut / lu, reçut / reçu.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le commentaire de Noé',
  frSub: 'Genève, une leçon particulière',
  setting: "Genève. Noé prépare un commentaire de texte pour le lycée. Sa répétitrice, Mme Aubert, l'aide à lire une page de roman.",
  bubbles: [
    { from: 'narrator', fr: 'Noé bute sur la troisième ligne du texte.', en: 'Noé gets stuck on the third line of the text.' },
    { from: 'user', fr: fr(E(1076)), en: en(E(1076)) },
    { from: 'coach', fr: "Pense au participe que tu connais. Elle a lu, elle s'est tue : lut, c'est lire ; se tut, c'est se taire.", en: 'Think of the participle you know. She read, she fell silent: lut is lire; se tut is se taire.', warn: 'Lu, lut : même son' },
    { from: 'user', fr: fr(E(1080)), en: en(E(1080)) },
    { from: 'coach', fr: "Reçu, reçut. Tu vois, le passé simple ajoute souvent un t au participe.", en: 'Reçu, reçut. You see, the passé simple often just adds a t to the participle.', warn: 'Reçu, reçut' },
    { from: 'user', fr: fr(E(1078)), en: en(E(1078)) },
    { from: 'coach', fr: "Cru : personne n'a cru son histoire. Rien à voir avec croître.", en: 'Cru: nobody believed his story. Nothing to do with croître.', warn: 'Crut : croire' },
  ],
  closing: { fr: 'Entends le participe, et tu retrouves le verbe.', en: 'Hear the participle, and you find the verb.' },
  audio: REC('rec-b2-08-noe'),
  say: REFRAME,
  terms: ['participe', 'infinitif'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-terminaisons',
  title: 'La famille en -ut',
  frSub: 'Des verbes courts, très fréquents',
  hint: 'Quatre cartes. Écoute le participe dans chacune.',
  audio: REC('rec-b2-08-ut'),
  say: REFRAME,
  terms: ['finale', 'participe'],
  cards: [
    {
      head: 'Pouvoir, devoir', label: 'pu, dû',
      fr: fr(E(1070)), sub: rsOf(E(1070)),
      body: "Il put, il dut : un participe en -u, un t de plus. Ces deux verbes disent souvent ce qui a été possible ou obligé, une fois. EN: put is pouvoir, dut is devoir.",
    },
    {
      head: 'Lire, croire, se taire', label: 'lu, cru, tu',
      fr: fr(E(1076)), sub: rsOf(E(1076)),
      body: "Elle lut, il crut, elle se tut. Trois verbes que les romans adorent : on lit une lettre, on croit une histoire, on se tait. EN: lut, crut, se tut: lire, croire, se taire.",
    },
    {
      head: 'Recevoir, vivre', label: 'reçu, vécu',
      fr: fr(E(1082)), sub: rsOf(E(1082)),
      body: "Il reçut, elle vécut. Vécut ne ressemble pas à vivre, mais il ressemble à vécu. Garde ce réflexe : le participe d'abord. EN: vécut is vivre; think of vécu.",
    },
    {
      head: '-urent : le pluriel', label: 'ils, elles',
      fr: fr(E(1074)), sub: rsOf(E(1074)),
      body: "Voulurent, purent, lurent : le pluriel ajoute -rent, et le r s'entend. La phrase mélange deux familles : voulurent, puis empêcha. EN: -urent in the plural.",
    },
  ],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  sheetId: 'sheet-terminaisons',
  title: 'Trois réflexes devant une forme inconnue',
  hacks: [
    { hack: 'Écoute le participe : lut et lu, put et pu, prit et pris, eut et eu.', why: "Pour la plupart des verbes en -ir, en -oir et les irréguliers courants, le passé simple sonne comme le participe. EN: the participle usually gives the verb away." },
    { hack: 'Enlève la finale et ajoute -er. Si un verbe connu apparaît, c’est gagné.', why: "Tous les verbes en -er font -a ou -èrent, sans exception. Regarda, regard-, regarder. EN: every -er verb works this way." },
    { hack: 'Regarde les verbes voisins. Un passé simple arrive rarement seul.', why: "Dans un récit, les événements se suivent. Si les verbes autour sont au passé simple, la forme douteuse l'est sans doute aussi. EN: its neighbours tell you the tense." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'infinitif'],
};

const A5_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le participe te guide',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Retrouve le verbe', [
      it(E(1070), 'put : pu, pouvoir'),
      it(E(1072), 'dut : dû, devoir'),
      it(E(1076), 'lut : lu, lire'),
      it(E(1080), 'reçut : reçu, recevoir'),
    ], chk('Dut, dans la deuxième phrase, vient de…',
      ['devoir', 'dire', 'durer'], 0,
      'Dû, dut : devoir. EN: devoir.')),
    grp('La version d’aujourd’hui', [
      it(E(1071), 'rien entre a et pu'),
      it(E(1073), 'a dû'),
      it(E(1077), 's’est tue : être et l’accord'),
      it(E(1079), 'n’a cru'),
    ], chk('« Il n’a rien pu dire. » Où va rien ?',
      ['entre a et pu', 'après dire'], 0,
      'Comme pas et jamais, rien se glisse au milieu. EN: rien goes in the middle.')),
    ctl('Crut', '« Personne ne crut son histoire. » Crut vient de…',
      ['croire', 'croître', 'crier'], 0,
      'Cru, crut : croire. EN: croire.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe', 'aujourdhui'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce qui est arrivé, à l’oreille',
  frSub: 'Huit phrases',
  lines: [
    ln(E(1070)), ln(E(1072)), ln(E(1074)), ln(E(1076)),
    ln(E(1078)), ln(E(1080)), ln(E(1082)), ln(E(1086)),
  ],
  questions: [
    { q: 'Première phrase : a-t-il réussi à parler ?', opts: ['non', 'oui'], correct: 0, why: 'Il ne put rien dire : il n’a rien pu dire. EN: he could not.' },
    { q: 'Deuxième phrase : comment a-t-elle quitté la ville ?', opts: ['en secret', 'en train', 'en colère'], correct: 0, why: 'Elle dut quitter la ville en secret. EN: in secret.' },
    { q: 'Troisième phrase : sont-ils partis ?', opts: ['non, la tempête les en a empêchés', 'oui, malgré la tempête'], correct: 0, why: 'Voulurent, mais empêcha. EN: the storm stopped them.' },
    { q: 'Sixième phrase : quand la réponse est-elle arrivée ?', opts: ['trois semaines plus tard', 'le lendemain'], correct: 0, why: 'Reçut, trois semaines plus tard. EN: three weeks later.' },
    { q: 'Dernière phrase : ce temps-là, c’est…', opts: ['le passé composé, à l’oral', 'le passé simple'], correct: 0, why: 'N’a pas pu, a dû : quelqu’un qui parle. EN: someone speaking.' },
  ],
  audio: REC('rec-b2-08-ut-ecoute'),
  say: REFRAME,
  terms: ['participe'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Repérer : la lettre de Claire', TEXTE_A5, [
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "reçut (recevoir), put (pouvoir), posa (poser), attendit (attendre), lut (lire), dut (devoir), relut (relire), but (boire), courut (courir)." },
  { q: 'Voulait et avait cru ne sont pas au passé simple. Que font-ils dans le texte ?', a: "Voulait, à l'imparfait, dit ce que contient la lettre, une situation. Avait cru, au plus-que-parfait (la leçon 1 du B2), recule avant la lettre : vingt ans d'erreur." },
  { q: 'Raconte la dernière phrase au passé composé.', a: "Elle a relu la lettre, elle a bu un verre d'eau et elle a couru jusqu'à la gare." },
  { q: 'Pourquoi Claire doit-elle s’asseoir ?', a: "Le choc : pendant vingt ans, elle a cru que son frère la détestait, et il veut la revoir. Le texte ne nomme pas l'émotion, il la montre." },
], 'rec-b2-08-texte-a5', ['participe', 'infinitif']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La clé', 'Il reçut, il put, il lut : que cherches-tu pour trouver le verbe ?',
    ['le participe que tu connais', 'la première lettre'], 0,
    'Reçu, pu, lu. EN: the participle.'),
  ctl('Vécut', 'Vécut vient de…',
    ['vivre', 'voir', 'vaincre'], 0,
    'Vécu, vécut : vivre. EN: vivre.'),
  ctl('Aujourd’hui', '« Elle dut partir. » Pour le raconter…',
    ['elle a dû partir', 'elle devait partir', 'elle doit partir'], 0,
    'Une obligation qui a eu lieu, une fois. EN: a one-off obligation.'),
], ['participe']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: '-ut, -urent',
    opener: {
      line: "Il put, elle lut, il reçut : ici tu découvres que le participe que tu connais trahit presque toujours le verbe. EN: Il put, elle lut, il reçut: here you find that the participle you know nearly always gives the verb away.",
      imageRef: 'lessons/passe-simple/act05.jpg',
    },
    sections: [],
    milestone: "Tu retrouves pouvoir, devoir, lire, croire, recevoir et vivre derrière leur passé simple, grâce au participe. EN: You can find the verb behind -ut forms by thinking of the participle.",
    estScreens: 34, restPoints: ['a5-hacks', 'a5-ecoute'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_HACKS, A5_REPERER, A5_ECOUTE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: -INT, -INRENT
 *
 *  Venir, tenir and their family. Vint sounds like vingt; devint is not
 *  devient. Venir takes être today, tenir takes avoir.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq phrases, une petite famille',
  frSub: 'Venir, tenir, et leurs cousins',
  examples: [
    ex(E(1090), 'vint : venir'),
    ex(E(1092), 'revinrent : revenir, au pluriel'),
    ex(E(1094), 'tint : tenir'),
    ex(E(1096), 'devint : devenir'),
    ex(E(1098), 'souvins : se souvenir, avec je'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['finale', 'infinitif'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-terminaisons',
  title: 'La famille en -int',
  frSub: 'Deux verbes, beaucoup de cousins',
  hint: 'Quatre cartes. Écoute bien la première.',
  audio: REC('rec-b2-08-int'),
  say: REFRAME,
  terms: ['finale', 'sosie'],
  cards: [
    {
      head: 'Venir : il vint', label: 'être aujourd’hui',
      fr: fr(E(1090)), sub: rsOf(E(1090)),
      body: "Vint ne ressemble pas au participe venu. Retiens-le tel quel. À l'oreille, il sonne comme le nombre vingt. EN: vint is venir; it sounds like vingt.",
    },
    {
      head: 'Tenir : il tint', label: 'avoir aujourd’hui',
      fr: fr(E(1094)), sub: rsOf(E(1094)),
      body: "Même finale, mais tenir prend avoir : elle a tenu sa promesse. Venir, lui, prend être : il est venu. EN: tenir takes avoir, venir takes être.",
    },
    {
      head: 'Les cousins', label: 'devenir, revenir, se souvenir',
      fr: fr(E(1096)), sub: rsOf(E(1096)),
      body: "Devint, revint, se souvint, obtint, retint. Ne confonds pas devint avec le présent devient : le passé simple n'a pas de e. EN: devint (past) is not devient (present).",
    },
    {
      head: '-inrent : le pluriel', label: 'ils, elles',
      fr: fr(E(1092)), sub: rsOf(E(1092)),
      body: "Revinrent, vinrent, tinrent : le pluriel ajoute -rent. Aujourd'hui : ils sont revenus. EN: -inrent in the plural.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Venir ou tenir, puis aujourd’hui',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Retrouve le verbe', [
      it(E(1090), 'vint : venir'),
      it(E(1092), 'revinrent : revenir'),
      it(E(1096), 'devint : devenir'),
      it(E(1098), 'souvins : se souvenir'),
    ], chk('Devint, dans la troisième phrase, vient de…',
      ['devenir', 'deviner', 'devoir'], 0,
      'Dev-int : devenir, un cousin de venir. EN: devenir.')),
    grp('La version d’aujourd’hui', [
      it(E(1091), 'est venu'),
      it(E(1093), 'sont revenus'),
      it(E(1095), 'a tenu'),
      it(E(1097), 'est devenu'),
    ], chk('« Elle tint sa promesse. » Aujourd’hui…',
      ['elle a tenu sa promesse', 'elle est tenue sa promesse'], 0,
      'Tenir prend avoir. EN: tenir takes avoir.')),
    ctl('À l’oreille', '« Un inconnu vint frapper à notre porte. » Vint se prononce comme…',
      ['vingt', 'vent'], 0,
      'Vint et vingt : le même son. Le sens tranche. EN: vint sounds like vingt.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif', 'aujourdhui'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Vint, vingt, devint, devient',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Un son, deux sens',
    body: "Vint sonne comme vingt ; devint ressemble à devient. Le passé simple de venir n'a ni g ni e. Aujourd'hui, venir et ses cousins prennent être ; tenir prend avoir. EN: vint is not vingt, devint is not devient; venir takes être, tenir avoir.",
  },
  cards: [
    { promptLabel: 'vint lu vingt', promptSound: 'Un soir, vingt inconnus ont frappé à notre porte.', fr: fr(E(1091)), ipa: ipaOf(E(1091)), tip: 'Un inconnu vint : un seul homme, qui est venu. EN: one man came.' },
    { promptLabel: 'devint lu au présent', promptSound: 'Il devient le plus grand peintre de sa génération.', fr: fr(E(1097)), ipa: ipaOf(E(1097)), tip: 'Devint, sans e : c’est du passé. EN: no e, so past.' },
    { promptLabel: 'avoir au lieu d’être', promptSound: 'Ils ont revenu au village après la guerre.', fr: fr(E(1093)), ipa: ipaOf(E(1093)), tip: 'Revenir, comme venir : être. EN: revenir takes être.' },
    { promptLabel: 'être au lieu d’avoir', promptSound: 'Elle est tenue sa promesse jusqu’au bout.', fr: fr(E(1095)), ipa: ipaOf(E(1095)), tip: 'Tenir une promesse : avoir. EN: tenir takes avoir.' },
    { promptLabel: 'souvins lu au présent', promptSound: 'Je me souviens alors de la boîte.', fr: fr(E(1099)), ipa: ipaOf(E(1099)), tip: 'Souvins, sans e : un souvenir qui revient d’un coup, au passé. EN: past, not present.' },
    { promptLabel: 'le nombre mal écrit', promptSound: 'Il avait vint ans quand il est venu à Montréal.', fr: fr(E(1101)), ipa: ipaOf(E(1101)), tip: 'Le nombre s’écrit vingt, avec g et t. EN: the number is vingt.' },
  ],
  drill: [
    { promptSay: '« Un inconnu vint. » Aujourd’hui, un inconnu …', opts: ['est venu', 'a venu'], correct: 0 },
    { promptSay: '« Ils revinrent. » Aujourd’hui, ils …', opts: ['sont revenus', 'reviennent'], correct: 0 },
    { promptSay: '« Elle tint sa promesse. » Aujourd’hui, elle …', opts: ['a tenu', 'est tenue'], correct: 0 },
    { promptSay: '« Il devint peintre. » Aujourd’hui, il …', opts: ['est devenu', 'devient'], correct: 0 },
    { promptSay: '« Je me souvins. » Aujourd’hui, je …', opts: ['me suis souvenu', 'me souviens'], correct: 0 },
    { promptSay: '« Il avait vingt ans. » Vingt est…', opts: ['un nombre', 'un verbe'], correct: 0 },
    { promptSay: '« Ils vinrent le chercher. » Combien sont-ils ?', opts: ['plusieurs', 'un seul'], correct: 0 },
    { promptSay: '« Vint » vient de…', opts: ['venir', 'vaincre'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un son, deux sens' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que l’oreille confond' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-08-piege-int'),
  say: REFRAME,
  terms: ['sosie', 'aujourdhui'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Repérer : les loups de l’hiver', TEXTE_A6, [
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "revinrent (revenir), prit (prendre), vint (venir), tint (tenir), vinrent (venir), trouvèrent (trouver), devint (devenir)." },
  { q: 'Descendaient et tournaient ne sont pas au passé simple. Pourquoi ?', a: "C'est une habitude, chaque nuit : l'imparfait. Les événements de ce soir-là, eux, sont au passé simple." },
  { q: 'Raconte au passé composé : « Un soir, le vieux Joseph prit son fusil et vint s’asseoir devant la bergerie. »', a: "Un soir, le vieux Joseph a pris son fusil et il est venu s'asseoir devant la bergerie." },
  { q: 'Joseph est-il vraiment un héros ? Que laisse entendre le texte ?', a: "Pas tout à fait : on le trouve endormi. Les moutons sont là, mais on ne sait pas s'il les a protégés. Le texte sourit de son héros." },
], 'rec-b2-08-texte-a6', ['finale', 'infinitif']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La famille', '-int, -inrent : quels verbes ?',
    ['venir, tenir et leurs composés', 'tous les verbes en -ir'], 0,
    'Une petite famille, très fréquente. EN: only venir and tenir families.'),
  ctl('Le sosie', 'Devint, c’est…',
    ['le passé simple de devenir', 'le présent de devenir'], 0,
    'Le présent serait devient. EN: devient is the present.'),
  ctl('L’auxiliaire', '« Ils revinrent. » Aujourd’hui…',
    ['ils sont revenus', 'ils ont revenu'], 0,
    'Revenir prend être. EN: être.'),
], ['finale', 'sosie']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: '-int, -inrent',
    opener: {
      line: "Un inconnu vint frapper à la porte, et ce n'étaient pas vingt personnes : ici tu reconnais venir, tenir et leur famille. EN: A stranger came knocking, not twenty people: here you meet venir, tenir and their family.",
      imageRef: 'lessons/passe-simple/act06.jpg',
    },
    sections: [],
    milestone: "Tu reconnais vint, tint, devint et revinrent, et tu ne les confonds plus avec vingt ni avec le présent. EN: You can recognise the venir and tenir forms and their look-alikes.",
    estScreens: 32, restPoints: ['a6-construire'],
  },
  sections: [A6_EXEMPLES, A6_CARTES, A6_CONSTRUIRE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LES IRRÉGULIERS
 *
 *  The twelve forms that carry most narrative text, read in a biography.
 *  Fut / fit, eut, il vit (voir or vivre), naquit, mourut; eut fini as a
 *  single recognition card.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La vie d’Hortense Vallier',
  frSub: 'Une biographie',
  text: LECTURE_BIOGRAPHIE,
  glossary: [
    { word: 'imprimerie', en: 'printing works', note: 'Un atelier où l’on imprime des livres et des journaux.' },
  ],
  questions: [
    { q: 'Devine le sens : « Le succès vint très vite. » Que s’est-il passé ?', a: "Le succès est arrivé rapidement. Vint, c'est venir : le succès est venu." },
    { q: 'Globale : quel genre de texte est-ce ? Qu’est-ce qui te le montre ?', a: "Une biographie : une vie racontée de la naissance (naquit) à la mort (mourut), avec des dates, au passé simple." },
    { q: 'Repère six formes irrégulières et donne leur infinitif.', a: "naquit (naître), prit (prendre), fut (être), dut (devoir), eut (avoir), vit (voir), dit (dire), vint (venir), revint (revenir), fit (faire), mit (mettre), put (pouvoir), mourut (mourir)." },
    { q: 'Pourquoi le texte dit-il « la maison où elle était née » et non « où elle naquit » ?', a: "La naissance recule avant la mort, qui sert de repère : c'est un plus-que-parfait, comme dans la leçon 1 du B2." },
    { q: 'Inférence : pourquoi Hortense quitte-t-elle Paris au sommet du succès ?', a: "Le texte ne le dit pas, mais la dernière phrase le laisse entendre : elle a toujours su qu'elle reviendrait au fleuve de son enfance." },
  ],
  audio: REC('rec-b2-08-biographie'),
  say: REFRAME,
  terms: ['irregulier', 'infinitif'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-irreguliers',
  title: 'Six irréguliers à reconnaître d’un coup d’œil',
  cols: ['Tu lis', 'Le verbe', 'Aujourd’hui'],
  rows: [
    { cells: ['fut, furent', 'être', 'a été, ont été'], say: fr(E(1105)),
      detail: { title: 'fut', body: "Avec u : être. Ce fut une longue nuit devient ça a été une longue nuit. EN: fut is être.", say: fr(E(1106)) } },
    { cells: ['eut, eurent', 'avoir', 'a eu, ont eu'], say: fr(E(1107)),
      detail: { title: 'eut', body: "Eut sonne comme le participe eu. Il eut peur devient il a eu peur. EN: eut is avoir.", say: fr(E(1108)) } },
    { cells: ['fit, firent', 'faire', 'a fait, ont fait'], say: fr(E(1109)),
      detail: { title: 'fit', body: "Avec i : faire. Une seule lettre le sépare de fut. EN: fit is faire.", say: fr(E(1110)) } },
    { cells: ['prit, prirent', 'prendre', 'a pris, ont pris'], say: fr(E(1111)),
      detail: { title: 'prit', body: "Comme le participe pris. Même famille : apprit, comprit, surprit. EN: prit is prendre.", say: fr(E(1112)) } },
    { cells: ['naquit', 'naître', 'est né'], say: fr(E(1117)),
      detail: { title: 'naquit', body: "Ne ressemble à rien : apprends à le reconnaître. Il ouvre presque toutes les biographies. EN: naquit is naître.", say: fr(E(1118)) } },
    { cells: ['mourut', 'mourir', 'est mort'], say: fr(E(1119)),
      detail: { title: 'mourut', body: "La fin de toutes les biographies. Aujourd'hui, être et le participe mort. EN: mourut is mourir.", say: fr(E(1120)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irregulier', 'aujourdhui'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Six formes, six verbes',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Être, avoir, faire, prendre', [
      it(E(1105), 'fut : être'),
      it(E(1107), 'eut : avoir'),
      it(E(1109), 'fit : faire'),
      it(E(1111), 'prit : prendre'),
    ], chk('Eut, dans la deuxième phrase, vient de…',
      ['avoir', 'être'], 0,
      'Eu, eut : avoir peur. EN: avoir.')),
    grp('Voir, mettre, naître, mourir', [
      it(E(1113), 'vit : voir'),
      it(E(1115), 'mit : mettre'),
      it(E(1117), 'naquit : naître'),
      it(E(1119), 'mourut : mourir'),
    ], chk('Mourut, aujourd’hui, devient…',
      ['est mort', 'a mouru', 'mourait'], 0,
      'Mourir prend être, participe mort. EN: est mort.')),
    ctl('Le pluriel', '« Ils furent les premiers à traverser le désert. » Furent vient de…',
      ['être', 'faire'], 0,
      'Fut, furent : être. EN: être.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irregulier', 'infinitif'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit formes, huit verbes',
  frSub: 'Tu lis la forme, tu retrouves le verbe',
  cards: [
    { front: 'il fut', back: 'être : il a été', say: fr(E(1106)) },
    { front: 'il eut', back: 'avoir : il a eu', say: fr(E(1108)) },
    { front: 'elle fit', back: 'faire : elle a fait', say: fr(E(1110)) },
    { front: 'il prit', back: 'prendre : il a pris', say: fr(E(1112)) },
    { front: 'elle vit', back: 'voir : elle a vu', say: fr(E(1114)) },
    { front: 'il mit', back: 'mettre : il a mis', say: fr(E(1116)) },
    { front: 'elle naquit', back: 'naître : elle est née', say: fr(E(1118)) },
    { front: 'il mourut', back: 'mourir : il est mort', say: fr(E(1120)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irregulier'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Neuf phrases irrégulières',
  frSub: 'Écoute, puis réponds sur le sens',
  lines: [
    ln(E(1105)), ln(E(1107)), ln(E(1109)), ln(E(1111)), ln(E(1113)),
    ln(E(1115)), ln(E(1117)), ln(E(1119)), ln(E(1124)),
  ],
  questions: [
    { q: 'Première phrase : la nuit a-t-elle été courte ?', opts: ['non, longue', 'oui'], correct: 0, why: 'Une longue nuit. EN: a long night.' },
    { q: 'Deuxième phrase : qu’a-t-il fait après avoir eu peur ?', opts: ['il a reculé', 'il a crié', 'il est parti'], correct: 0, why: 'Recula : il a reculé. EN: he stepped back.' },
    { q: 'Quatrième phrase : pour quelle ville ?', opts: ['Lyon', 'Lille'], correct: 0, why: 'Le premier train pour Lyon. EN: Lyon.' },
    { q: 'Septième phrase : en quelle année est-elle née ?', opts: ['en 1932', 'en 1952'], correct: 0, why: 'Naquit en 1932. EN: 1932.' },
    { q: 'Dernière phrase : qu’ont-ils traversé les premiers ?', opts: ['le désert', 'la mer'], correct: 0, why: 'Furent les premiers à traverser le désert. EN: the desert.' },
  ],
  audio: REC('rec-b2-08-irreg-ecoute'),
  say: REFRAME,
  terms: ['irregulier'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre formes mal reconnues',
  errors: [
    {
      wrong: 'Elle a été ses valises en silence.',
      right: fr(E(1110)),
      why: "Normal : fit et fut ne diffèrent que d'une lettre. Fit, avec i, vient de faire : on fait ses valises. EN: fit is faire, not être.",
    },
    {
      wrong: 'Il a été peur et il a reculé.',
      right: fr(E(1108)),
      why: "Normal : eut ressemble à un petit mot d'être. Mais eut, c'est avoir, comme dans avoir peur. EN: eut is avoir.",
    },
    {
      wrong: 'Elle vivait la lumière au bout du couloir.',
      right: fr(E(1114)),
      why: "Normal : vit peut venir de vivre. Mais on ne vit pas une lumière : avec ce complément, c'est voir. EN: with this object, vit is voir.",
    },
    {
      wrong: 'Elle a naquit à Saint-Louis du Sénégal en 1932.',
      right: fr(E(1118)),
      why: "Normal : on garde la forme du livre et on ajoute un auxiliaire. Aujourd'hui, naître prend être et le participe né. EN: naître becomes est née.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irregulier', 'sosie'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Repérer : l’incendie de la grange', TEXTE_A7, [
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "fut (être, deux fois), vit (voir), fit (faire, deux fois), prit (prendre), dit (dire), vinrent (venir), mirent (mettre), eut (avoir), remercia (remercier)." },
  { q: 'Dans « Ils mirent deux heures à éteindre le feu », que veut dire mettre ?', a: "Prendre du temps : il leur a fallu deux heures. Aujourd'hui : ils ont mis deux heures." },
  { q: 'Raconte la dernière phrase au passé composé.', a: "Le lendemain, le maire a fait un discours et il a remercié Paul devant tout le village." },
  { q: 'Pourquoi le maire remercie-t-il Paul ?', a: "Paul a vu la fumée le premier et a prévenu les pompiers : grâce à lui, personne n'a été blessé." },
], 'rec-b2-08-texte-a7', ['irregulier', 'infinitif']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Fut ou fit', 'Fut vient de…',
    ['être', 'faire'], 0,
    'Avec u : être. EN: être.'),
  ctl('Il vit', '« Il vit à Tunis depuis dix ans. » Vit vient de…',
    ['vivre, au présent', 'voir, au passé simple'], 0,
    'Un lieu et depuis : vivre. EN: vivre.'),
  ctl('Eut fini', '« Quand il eut fini, il se leva. » Aujourd’hui…',
    ['quand il a fini, il s’est levé', 'quand il a été fini, il s’est levé'], 0,
    'Eut fini recule d’un cran ; à l’oral, quand il a fini suffit. EN: quand il a fini.'),
], ['irregulier', 'sosie']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les irréguliers',
    opener: {
      line: "Elle naquit, elle fut, elle fit, elle mourut : ici tu lis une vie entière et tu reconnais les douze formes qui portent les récits. EN: She was born, was, did, died: here you read a whole life and learn the twelve forms that carry stories.",
      imageRef: 'lessons/passe-simple/act07.jpg',
    },
    sections: [],
    milestone: "Tu reconnais fut, eut, fit, vint, prit, dit, vit, put, dut, mit, naquit et mourut, et tu ne confonds plus fut et fit. EN: You can recognise the twelve frequent irregular forms.",
    estScreens: 42, restPoints: ['a7-table', 'a7-ecoute'],
  },
  sections: [A7_LECTURE, A7_TABLE, A7_CONSTRUIRE, A7_FLASH, A7_ECOUTE, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: LA PERSONNE
 *
 *  Il, elle, ils, elles carry almost everything; -rent is always third
 *  person plural; je and nous in memoirs; tu and vous almost never.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Qui fait quoi',
  frSub: 'Lausanne, sur le palier',
  setting: "Lausanne. Chloé lit un roman d'amour sur le palier et demande de l'aide à son voisin, M. Bertrand, ancien professeur de français.",
  bubbles: [
    { from: 'narrator', fr: 'Chloé tend le livre ouvert à M. Bertrand.', en: 'Chloé hands the open book to M. Bertrand.' },
    { from: 'user', fr: fr(E(1130)), en: en(E(1130)) },
    { from: 'coach', fr: "Regardèrent : -rent, c'est ils. Deux personnes qui se regardent, sans rien dire.", en: 'Regardèrent: -rent means ils. Two people looking at each other without a word.', warn: '-rent : ils ou elles' },
    { from: 'user', fr: fr(E(1134)), en: en(E(1134)) },
    { from: 'coach', fr: "Partîmes : nous. Le narrateur était du voyage. Le -îmes, tu ne le liras que dans les souvenirs.", en: 'Partîmes: nous. The narrator was on the trip. You will only read -îmes in memoirs.', warn: '-îmes : nous' },
    { from: 'user', fr: fr(E(1139)), en: en(E(1139)) },
    { from: 'coach', fr: "Compris, avec je : le participe a la même forme. C'est le sujet qui te dit la personne.", en: 'Compris, with je: the participle looks the same. The subject tells you the person.', warn: 'Je : regarde le sujet' },
  ],
  closing: { fr: 'Il, elle, ils, elles : presque tout le passé simple.', en: 'Il, elle, ils, elles: almost all of the passé simple.' },
  audio: REC('rec-b2-08-palier'),
  say: REFRAME,
  terms: ['personne'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Qui parle, qui agit',
  frSub: 'La personne du passé simple',
  hint: 'Quatre cartes. La dernière est presque vide.',
  audio: REC('rec-b2-08-personne'),
  say: REFRAME,
  terms: ['personne', 'finale'],
  cards: [
    {
      head: 'La troisième personne partout', label: 'il, elle',
      fr: fr(E(1137)), sub: rsOf(E(1137)),
      body: "Un récit parle de quelqu'un d'autre : il, elle, le voyageur, la romancière. C'est la personne que tu liras neuf fois sur dix. EN: the third person, nine times out of ten.",
    },
    {
      head: '-rent : ils ou elles', label: 'le pluriel',
      fr: fr(E(1132)), sub: rsOf(E(1132)),
      body: "Parlèrent, sortirent, voulurent, vinrent : toutes les familles finissent par -rent au pluriel. Tu entends le r. EN: -rent is always third person plural, and the r is heard.",
    },
    {
      head: 'Je et nous : les souvenirs', label: 'le narrateur',
      fr: fr(E(1134)), sub: rsOf(E(1134)),
      body: "Dans un récit de voyage ou un roman à la première personne : je compris, nous partîmes. Avec je, la forme ressemble souvent au participe : le sujet te guide. EN: je and nous appear in first-person narratives.",
    },
    {
      head: 'Tu et vous : presque jamais', label: 'la rareté',
      fr: 'tu parlas · vous parlâtes',
      sub: '[tü par-LA] · [voo par-LAT]',
      body: "Tu les verras rarement, dans une lettre ancienne ou une pièce de théâtre classique. Tu peux les reconnaître ; tu n'en auras presque jamais besoin. EN: tu and vous forms are very rare.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve la personne',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Il, elle, ils, elles', [
      it(E(1130), 'regardèrent : ils'),
      it(E(1132), 'sortirent : elles'),
      it(E(1137), 'chanta, chantèrent'),
      it(E(1124), 'furent : ils'),
    ], chk('Chantèrent, dans la troisième phrase : qui chante ?',
      ['elles', 'il'], 0,
      '-èrent : le pluriel, donc elles. Il, c’est chanta. EN: elles.')),
    grp('Je et nous', [
      it(E(1134), 'partîmes : nous'),
      it(E(1139), 'compris : je'),
      it(E(1040), 'arrivâmes : nous'),
      it(E(1038), 'demandai : je'),
    ], chk('Partîmes : quelle personne ?',
      ['nous', 'ils', 'vous'], 0,
      '-îmes, -âmes : nous. EN: nous.')),
    ctl('À l’oreille', '« Il chanta » et « ils chantèrent » : entends-tu la différence ?',
      ['oui, le r de -èrent se prononce', 'non, c’est le même son'], 0,
      'Chanta [ta], chantèrent [tɛʁ] : le pluriel s’entend. EN: the plural is audible.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['personne'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Cinq personnes, racontées aujourd’hui',
  frSub: 'Le sujet ne change pas, le temps oui',
  examples: [
    ex(E(1131), 'ils : se sont regardés, avec l’accord'),
    ex(E(1133), 'elles : sont sorties, féminin pluriel'),
    ex(E(1135), 'nous : sommes partis'),
    ex(E(1138), 'il, puis elles : deux sujets'),
    ex(E(1140), 'je : j’ai compris'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['personne', 'aujourdhui'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Repérer : le train pour Genève', TEXTE_A8, [
  { q: 'Qui fait l’action : rencontrèrent, descendit (deux fois), marchèrent, revirent, vis, devînmes, racontèrent ?', a: "rencontrèrent : ils ; descendit : elle, puis il ; marchèrent : ils ; revirent : ils ; vis : je ; devînmes : nous ; racontèrent : ils." },
  { q: 'Pourquoi le texte passe-t-il soudain à je ?', a: "Le narrateur entre dans l'histoire : c'était leur voisin, un témoin. Le récit à la troisième personne devient un souvenir." },
  { q: 'Raconte au passé composé : « Nous devînmes amis quelques mois plus tard, et ils me racontèrent la suite. »', a: "Nous sommes devenus amis quelques mois plus tard, et ils m'ont raconté la suite." },
  { q: 'Lisait et faisait semblant : quel rôle jouent ces imparfaits ?', a: "Le décor de la rencontre : ce qui se passait déjà dans le train. Ils ne changent pas quand tu racontes." },
], 'rec-b2-08-texte-a8', ['personne']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('-rent', 'Voulurent, finirent, vinrent : quelle personne ?',
    ['ils ou elles', 'il ou elle'], 0,
    '-rent : toujours le pluriel. EN: always plural.'),
  ctl('Les souvenirs', 'Où trouves-tu nous arrivâmes ?',
    ['dans un récit de voyage', 'dans une conversation'], 0,
    'Un souvenir écrit. EN: a written memoir.'),
  ctl('Tu et vous', 'Les formes avec tu et vous, au passé simple, sont…',
    ['très rares', 'aussi fréquentes que il'], 0,
    'Tu les reconnais, sans en avoir besoin. EN: very rare.'),
], ['personne']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La personne',
    opener: {
      line: "Ils se regardèrent, nous partîmes, je compris : ici tu apprends à savoir, à chaque forme, qui agit. EN: They looked, we left, I understood: here you learn to tell, from each form, who is acting.",
      imageRef: 'lessons/passe-simple/act08.jpg',
    },
    sections: [],
    milestone: "Tu sais qui fait l'action dans chaque passé simple, et tu sais que -rent veut toujours dire ils ou elles. EN: You can tell the person of every passé simple form.",
    estScreens: 30, restPoints: ['a8-construire'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: PREMIER PLAN, ARRIÈRE-PLAN
 *
 *  The passé simple carries the events; the imparfait keeps the background,
 *  exactly as in lessons 3 and 4 in B1. A long but closed moment (resta
 *  longtemps) is still foreground.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre',
  frSub: 'Une page de roman',
  text: LECTURE_ROMAN,
  glossary: [
    { word: "l'appentis", en: 'the lean-to', note: 'Un petit abri adossé à la maison, pour le bois ou les outils.' },
  ],
  questions: [
    { q: 'Devine le sens : « Madeleine la reconnut aussitôt. » Qu’a-t-elle reconnu, et pourquoi est-ce important ?', a: "L'écriture sur l'enveloppe. Reconnut, c'est reconnaître : elle sait tout de suite qui a écrit, avant même d'ouvrir." },
    { q: 'Globale : que raconte cette page, en une phrase ?', a: "Une mère reçoit, un matin de pluie, une lettre de son fils absent depuis dix ans, qui annonce son retour." },
    { q: 'Sépare le décor et les événements dans les trois premières phrases.', a: "Décor : pleuvait, dormait, brillait, préparait, ne connaissait pas. Événements : arriva, frappa." },
    { q: 'Inférence : qui a écrit la lettre ? Qu’est-ce qui te le montre ?', a: "Son fils : elle monte dans sa chambre, vide depuis dix ans, et la prépare pour son retour. Le texte ne le nomme jamais." },
    { q: 'Point de vue : pourquoi le narrateur écrit-il « Elle ne pleura pas » ?', a: "Il montre sa retenue : l'émotion passe par les gestes (ouvrir les fenêtres, faire la poussière), pas par les larmes." },
  ],
  audio: REC('rec-b2-08-roman'),
  say: REFRAME,
  terms: ['premier', 'decor'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-recit',
  title: 'Deux plans, deux temps',
  frSub: 'Ce que tu sais déjà, dans un livre',
  hint: 'Quatre cartes. La première vient du B1.',
  audio: REC('rec-b2-08-plans'),
  say: REFRAME,
  terms: ['premier', 'decor'],
  cards: [
    {
      head: 'Ce que tu sais déjà', label: Cap(PC_IMP_REF),
      fr: fr(RP(203)), sub: rsOf(RP(203)),
      body: `« ${B103_REFRAME} » Dans un roman, le passé simple prend le rôle du passé composé ; l'imparfait garde le sien. EN: ${B103_REFRAME_EN}`,
    },
    {
      head: 'Le décor', label: 'l’imparfait',
      fr: fr(E(1147)), sub: rsOf(E(1147)),
      body: "La maison dormait, une lampe brillait : rien ne commence ni ne finit. Quand tu racontes, ces verbes ne bougent pas. EN: the background stays in the imparfait.",
    },
    {
      head: 'L’événement qui coupe', label: 'lorsque, quand',
      fr: fr(E(1150)), sub: rsOf(E(1150)),
      body: "Elle lisait : le décor. On sonna : l'événement qui coupe. C'est la coupure du B1, avec un passé simple à la place du passé composé. EN: the interruption, with the passé simple as the event.",
    },
    {
      head: 'Un verbe, deux sens', label: Cap(PAIRES_REF),
      fr: 'il savait · il sut',
      sub: '[eel sa-VEH] · [eel SÜ]',
      body: `« ${B104_REFRAME} » Il savait : il était au courant. Il sut : il l'a appris, d'un coup. Comme savais et ai su. EN: ${B104_REFRAME_EN}`,
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Premier plan ou décor',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Événement ou décor', [
      it(E(1148), 'claqua : un événement'),
      it(E(1147), 'dormait, brillait : le décor'),
      it(E(1154), 'se tut, entra : deux événements'),
      it(E(1153), 'était, restaient : le décor'),
    ], chk('« Le village était silencieux et les volets restaient fermés. » Ces verbes…',
      ['posent le décor', 'font avancer l’histoire'], 0,
      'Rien n’arrive : c’est l’arrière-plan. EN: nothing happens: background.')),
    grp('Les deux ensemble', [
      it(E(1145), 'pleuvait, puis arriva'),
      it(E(1150), 'lisait, puis sonna'),
      it(E(1156), 'resta longtemps'),
      it(RP(1037), 'la même chose au passé composé'),
    ], chk('« Elle resta longtemps immobile. » C’est long : est-ce du décor ?',
      ['non, un moment fermé : premier plan', 'oui, c’est long, donc décor'], 0,
      'La durée ne décide pas : le moment a une fin, il fait avancer l’histoire. EN: closed, so foreground.')),
    ctl('Aujourd’hui', '« Il pleuvait quand la lettre arriva. » Pour le raconter, que changes-tu ?',
      ['arriva seulement', 'les deux verbes', 'pleuvait seulement'], 0,
      'Le décor reste ; seul le passé simple devient passé composé. EN: only arriva changes.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['premier', 'decor'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce qui dure, ce qui arrive',
  frSub: 'Neuf phrases',
  lines: [
    ln(E(1145)), ln(E(1147)), ln(E(1148)), ln(E(1150)), ln(E(1153)),
    ln(E(1154)), ln(E(1156)), ln(RP(203)), ln(RP(1011)),
  ],
  questions: [
    { q: 'Première phrase : depuis combien de jours pleut-il ?', opts: ['trois', 'deux', 'dix'], correct: 0, why: 'Il pleuvait depuis trois jours. EN: three days.' },
    { q: 'Troisième phrase : est-ce un décor ou un événement ?', opts: ['un événement', 'un décor'], correct: 0, why: 'Soudain, claqua : ça arrive d’un coup. EN: an event.' },
    { q: 'Quatrième phrase : que faisait-elle quand on a sonné ?', opts: ['elle lisait', 'elle dormait'], correct: 0, why: 'Elle lisait : le décor, coupé par la sonnette. EN: she was reading.' },
    { q: 'Sixième phrase : pourquoi tout le monde se tait-il ?', opts: ['le maire entre', 'la porte claque'], correct: 0, why: 'Se tut quand le maire entra. EN: the mayor came in.' },
    { q: 'Deux dernières phrases : quel temps entends-tu ?', opts: ['l’imparfait, le décor', 'le passé simple'], correct: 0, why: 'Pleuvait, faisait : le décor du B1. EN: the imparfait.' },
  ],
  audio: REC('rec-b2-08-plans-ecoute'),
  say: REFRAME,
  terms: ['premier', 'decor'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le décor ne se change pas',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Un seul temps bouge',
    body: "Quand tu racontes un roman, seul le passé simple devient passé composé. L'imparfait reste le décor, le plus-que-parfait reste ce qui était déjà fait. Un moment long mais fermé reste un événement. EN: only the passé simple moves; the imparfait and the plus-que-parfait stay.",
  },
  cards: [
    { promptLabel: 'décor changé', promptSound: 'Il a plu depuis trois jours quand la lettre est arrivée.', fr: fr(E(1146)), ipa: ipaOf(E(1146)), tip: 'Pleuvait est le décor : il reste. EN: the background stays.' },
    { promptLabel: 'événement lu en décor', promptSound: 'Soudain, la porte claquait.', fr: fr(E(1149)), ipa: ipaOf(E(1149)), tip: 'Soudain annonce un événement : a claqué. EN: soudain means an event.' },
    { promptLabel: 'coupure aplatie', promptSound: "Elle a lu près de la fenêtre lorsqu'on a sonné.", fr: fr(E(1151)), ipa: ipaOf(E(1151)), tip: 'Lisait était déjà en cours : il reste. EN: lisait stays.' },
    { promptLabel: 'deux événements lus en décor', promptSound: 'Tout le monde se taisait quand le maire entrait.', fr: fr(E(1155)), ipa: ipaOf(E(1155)), tip: 'Se tut, entra : deux événements, l’un après l’autre. EN: two events.' },
    { promptLabel: 'durée lue en décor', promptSound: 'Elle restait longtemps immobile sur le seuil.', fr: fr(E(1157)), ipa: ipaOf(E(1157)), tip: 'Long, mais fermé : est restée. EN: long but closed.' },
    { promptLabel: 'plus-que-parfait changé', promptSound: 'Quand elle est arrivée, le train est parti.', fr: fr(E(1167)), ipa: ipaOf(E(1167)), tip: 'Était parti : déjà fait avant son arrivée, il reste. EN: the plus-que-parfait stays.' },
  ],
  drill: [
    { promptSay: '« Il pleuvait quand la lettre arriva. » Aujourd’hui, il …', opts: ['pleuvait', 'a plu'], correct: 0 },
    { promptSay: '« Quand la lettre arriva. » Aujourd’hui, la lettre …', opts: ['est arrivée', 'arrivait'], correct: 0 },
    { promptSay: '« Soudain, la porte claqua. » Aujourd’hui, la porte …', opts: ['a claqué', 'claquait'], correct: 0 },
    { promptSay: '« Elle lisait lorsqu’on sonna. » Lisait, c’est…', opts: ['le décor', 'l’événement'], correct: 0 },
    { promptSay: '« Elle resta longtemps immobile. » Aujourd’hui, elle …', opts: ['est restée', 'restait'], correct: 0 },
    { promptSay: '« La maison dormait. » C’est…', opts: ['le décor', 'un événement'], correct: 0 },
    { promptSay: '« Tout le monde se tut. » Aujourd’hui, tout le monde …', opts: ['s’est tu', 'se taisait'], correct: 0 },
    { promptSay: '« Le train était parti. » Aujourd’hui…', opts: ['rien ne change', 'il est parti'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un seul temps bouge' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main change trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-08-piege-plans'),
  say: REFRAME,
  terms: ['premier', 'decor', 'aujourdhui'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Trier : le concert', TEXTE_A9, [
  { q: 'Sépare le décor et les événements.', a: "Décor : était, accordaient, parlait, portait, tenait, bougeait. Événements : s'éteignirent, entra, salua, ferma, commença, s'éleva, resta, se leva." },
  { q: 'Quel mot fait passer du décor à l’action ?', a: "Soudain : juste après, les lumières s'éteignirent, et le récit avance." },
  { q: 'Raconte au passé composé : « Il salua, ferma les yeux et commença à jouer. »', a: "Il a salué, il a fermé les yeux et il a commencé à jouer." },
  { q: 'Que montre « la salle resta silencieuse un long moment » ?', a: "L'émotion du public : il ne peut pas applaudir tout de suite. Le silence dit plus que les applaudissements qui suivent." },
], 'rec-b2-08-texte-a9', ['premier', 'decor']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Les rôles', 'Dans un roman, le passé simple…',
    ['fait avancer l’histoire', 'pose le décor'], 0,
    'Le premier plan. EN: the foreground.'),
  ctl('Le décor', 'Quand tu racontes un roman, les imparfaits…',
    ['restent à l’imparfait', 'passent au passé composé'], 0,
    'Le décor ne bouge pas. EN: they stay.'),
  ctl('La durée', '« Il attendit trois heures. » C’est…',
    ['un événement, long mais fermé', 'un décor'], 0,
    'Trois heures, et c’est fini : premier plan. EN: closed, so foreground.'),
], ['premier', 'decor']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Premier plan, décor',
    opener: {
      line: "Il pleuvait quand la lettre arriva : ici tu retrouves le décor et l'action du B1, dans une page de roman. EN: It was raining when the letter arrived: here you meet B1's background and action again, on a novel's page.",
      imageRef: 'lessons/passe-simple/act09.jpg',
    },
    sections: [],
    milestone: "Tu sépares, dans une page de roman, les événements au passé simple du décor à l'imparfait, et tu ne touches qu'aux premiers pour raconter. EN: You can separate foreground from background in a novel and retell it correctly.",
    estScreens: 38, restPoints: ['a9-cartes', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_TRIER, A9_ECOUTE, A9_PIEGE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: AUJOURD'HUI, TU DIRAIS
 *
 *  The rewrite: only the passé simple moves. Être verbs, the place of rien,
 *  tout, enfin, and the incise (répondit-il → a-t-il répondu, lesson 21 in
 *  B1). The plus-que-parfait of lesson 1 in B2 stays.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La nuit du 9 novembre',
  frSub: 'Une rétrospective de presse',
  text: LECTURE_RETRO,
  glossary: [
    { word: 'en vigueur', en: 'in force', note: 'Une mesure en vigueur s’applique déjà.' },
  ],
  questions: [
    { q: 'Devine le sens : « Les gardes ne surent pas quoi faire. » Surent vient de quel verbe, et que veut dire la phrase ?', a: "Savoir. Les gardes n'ont pas su quoi faire : sans ordre, ils étaient perdus." },
    { q: 'Globale : pourquoi ce journaliste raconte-t-il au passé simple ?', a: "C'est une rétrospective : il revient sur un événement historique et lui donne la distance d'un récit." },
    { q: 'Repère la seule phrase au passé composé. Qui la dit, et pourquoi ce temps ?', a: "« Je me suis réveillée dans un autre pays » : une Berlinoise qui parle aujourd'hui. Une personne qui parle emploie le passé composé." },
    { q: 'Raconte à un ami, au passé composé : « Il consulta ses notes, hésita, puis répondit. »', a: "Il a consulté ses notes, il a hésité, puis il a répondu." },
    { q: 'Point de vue : pourquoi l’article dit-il que le mur tomba « cette nuit-là », alors que la démolition dura des mois ?', a: "Pour ceux qui étaient là, la frontière a disparu cette nuit-là. Le journaliste choisit le point de vue des témoins, pas le calendrier des travaux." },
  ],
  audio: REC('rec-b2-08-retro'),
  say: REFRAME,
  terms: ['aujourdhui', 'ecrit'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-table',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Ce qui change, ce qui reste',
  cols: ['Dans le livre', 'Aujourd’hui', 'Pourquoi'],
  rows: [
    { cells: ['frappa', 'a frappé', 'passé simple : passé composé'], say: fr(E(1004)),
      detail: { title: 'Le passé simple change', body: "C'est le seul temps qui bouge : il devient passé composé. EN: the only tense that moves.", say: fr(E(1031)) } },
    { cells: ['il pleuvait', 'il pleuvait', 'le décor reste'], say: fr(E(1146)),
      detail: { title: 'L’imparfait reste', body: "Le décor ne bouge pas : pleuvait, dormait, lisait. EN: the imparfait stays.", say: fr(E(1151)) } },
    { cells: ['était parti', 'était parti', 'le plus-que-parfait reste'], say: fr(E(1167)),
      detail: { title: 'Le plus-que-parfait reste', body: `Ce qui était déjà fait reste en arrière, comme dans ${PQP_REF}. EN: the plus-que-parfait stays.`, say: fr(E(1195)) } },
    { cells: ['naquit, vint, tomba', 'est née, est venu, est tombé', 'être et l’accord'], say: fr(E(1161)),
      detail: { title: 'Les verbes avec être', body: "Naître, mourir, venir, partir, arriver, tomber et les pronominaux prennent être, avec l'accord. EN: être verbs agree.", say: fr(E(1019)) } },
    { cells: ['ne dit rien', 'n’a rien dit', 'rien, tout, enfin au milieu'], say: fr(E(1171)),
      detail: { title: 'Les petits mots', body: "Rien, tout, enfin, jamais se glissent entre l'auxiliaire et le participe. EN: short words go between the two parts.", say: fr(E(1066)) } },
    { cells: ['répondit-il', 'a-t-il répondu', 'l’incise garde l’inversion'], say: fr(E(1165)),
      detail: { title: 'L’incise', body: `${Cap(INVERSION_REF)} : l'incise inverse le sujet. Au passé composé, l'inversion se fait avec l'auxiliaire, et le t sépare les voyelles. EN: the incise inverts the auxiliary.`, say: fr(LS(1152)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Raconte-le aujourd’hui',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Un seul temps change', [
      it(E(1161), 'tomba : est tombé'),
      it(E(1163), 'franchirent : ont franchi'),
      it(E(1167), 'était parti ne bouge pas'),
      it(E(1173), 'se leva : s’est levée'),
    ], chk('Dans la troisième phrase, quel verbe n’a pas changé ?',
      ['était parti', 'est arrivée'], 0,
      'Le plus-que-parfait reste tel quel. EN: the plus-que-parfait stays.')),
    grp('Les petits mots au milieu', [
      it(E(1071), 'rien : n’a rien pu'),
      it(E(1066), 'tout : ont tout perdu'),
      it(E(1171), 'rien : n’a rien dit'),
      it(E(1195), 'enfin : a enfin compris'),
    ], chk('« On comprit enfin. » Aujourd’hui…',
      ['on a enfin compris', 'on enfin a compris'], 0,
      'Enfin se glisse entre a et compris. EN: enfin goes in the middle.')),
    ctl('L’incise', '« Je ne sais pas », répondit-il. Aujourd’hui, l’incise devient…',
      ['a-t-il répondu', 'il a répondu-t-il'], 0,
      'L’inversion porte sur l’auxiliaire : a-t-il. EN: the auxiliary is inverted.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Les incises, au présent et au passé',
  frSub: 'Ce que la leçon 21 du B1 t’a donné',
  examples: [
    ex(LS(1155), 'dit-elle : une incise au présent'),
    ex(LS(1152), 'avoue-t-elle : le t entre deux voyelles'),
    ex(E(1165), 'répondit-il devient a-t-il répondu'),
    ex(E(1175), 'trouvèrent devient ont trouvé ; fermée reste'),
    ex(E(1169), 'la règle des verbes avec être'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre traductions à reprendre',
  errors: [
    {
      wrong: 'Des milliers de Berlinois ont franchirent la frontière cette nuit-là.',
      right: fr(E(1163)),
      why: "Normal : on garde la forme du livre et on ajoute l'auxiliaire. Mais le passé composé a son propre participe : franchi. EN: use the participle, not the book's form.",
    },
    {
      wrong: 'La romancière a né à Liège en 1921 et elle a mouru à Paris en 2004.',
      right: fr(E(1019)),
      why: "Normal : avoir est l'auxiliaire le plus fréquent. Mais naître et mourir prennent être, avec l'accord. EN: naître and mourir take être.",
    },
    {
      wrong: "Il n'a dit rien et il est sorti.",
      right: fr(E(1171)),
      why: "Normal : dans le livre, rien suit le verbe (il ne dit rien). Au passé composé, rien se glisse entre a et dit. EN: rien moves between the two words.",
    },
    {
      wrong: 'Quand elle est arrivée, le train est parti.',
      right: fr(E(1167)),
      why: "Normal : on a pris l'habitude de tout changer. Mais était parti est un plus-que-parfait : le train était déjà parti. Le changer inverse l'ordre des faits. EN: changing it reverses the order of events.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'participe'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris la version d’aujourd’hui',
  frSub: 'Cinq phrases au passé composé',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Réécrire : le serment du Jeu de paume', TEXTE_A10, [
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "trouvèrent (trouver), renoncèrent (renoncer), se réunirent (se réunir), jurèrent (jurer), resta (rester)." },
  { q: 'Jouait et fermée ne sont pas au passé simple. Que font-ils ?', a: "Jouait est une habitude (d'ordinaire) : le décor. Fermée n'est pas un verbe conjugué : c'est l'état de la porte." },
  { q: 'Raconte tout le texte à un ami, au passé composé.', a: "Le 20 juin 1789, les députés du tiers état ont trouvé la porte de leur salle fermée. Ils n'ont pas renoncé : ils se sont réunis dans une salle voisine, où l'on jouait d'ordinaire au jeu de paume. Là, ils ont juré de ne pas se séparer avant d'avoir donné une constitution à la France. Ce serment est resté dans l'histoire sous le nom de serment du Jeu de paume." },
  { q: 'Pourquoi ce serment compte-t-il ?', a: "Les députés refusent de se laisser arrêter par une porte fermée : ils décident de donner eux-mêmes une constitution au pays." },
], 'rec-b2-08-texte-a10', ['aujourdhui', 'decor']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La règle', 'Pour raconter un livre au passé composé, tu changes…',
    ['seulement les passés simples', 'tous les verbes du passé'], 0,
    'Un seul temps bouge. EN: only one tense moves.'),
  ctl('L’auxiliaire', '« Elle naquit. » Aujourd’hui…',
    ['elle est née', 'elle a né', 'elle a naquit'], 0,
    'Naître prend être. EN: être.'),
  ctl('L’incise', '« Oui », dit-il, dans un récit au passé. Aujourd’hui…',
    ['« Oui », a-t-il dit.', '« Oui », il a dit-il.'], 0,
    'L’inversion se fait avec l’auxiliaire. EN: invert the auxiliary.'),
], ['aujourdhui']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Aujourd’hui, tu dirais',
    opener: {
      line: "Le mur tomba cette nuit-là, et tu dois le raconter à un ami : ici tu passes du livre à la conversation, sans perdre un fait. EN: The Wall fell that night and you have to tell a friend: here you go from the book to speech without losing a fact.",
      imageRef: 'lessons/passe-simple/act10.jpg',
    },
    sections: [],
    milestone: "Tu racontes au passé composé un texte au passé simple : le bon auxiliaire, les petits mots au milieu, l'incise, et rien d'autre ne change. EN: You can retell a passé simple text in the passé composé accurately.",
    estScreens: 40, restPoints: ['a10-table', 'a10-exemples'],
  },
  sections: [A10_LECTURE, A10_TABLE, A10_CONSTRUIRE, A10_EXEMPLES, A10_ERREURS, A10_DICTEE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: COMPRENDRE L'EXTRAIT
 *
 *  A literary page read the B2 way: global, detail, inference, point of
 *  view (lessons 37 in B1 and 24 in B2). The passé simple is now just the
 *  surface; the questions are about meaning.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’été de mes douze ans',
  frSub: 'Un extrait de roman, lu comme à l’examen',
  text: LECTURE_EXTRAIT,
  glossary: [
    { word: 'dépanner', en: 'to fix a broken-down car', note: 'Réparer une voiture en panne, souvent sur place.' },
  ],
  questions: [
    { q: 'Devine le sens : « le referma avec beaucoup de dignité ». Pourquoi ce détail fait-il sourire ?', a: "Le père n'a rien réparé : il referme le capot comme s'il avait tout compris. La dignité cache son impuissance." },
    { q: 'Globale : que raconte cet extrait, en une phrase ?', a: "Le premier voyage d'une famille vers la mer, raté en apparence, et ce qu'il révélait sur le père." },
    { q: 'Détail : combien de temps la famille met-elle pour arriver à la mer ?', a: "Deux jours : partis un lundi à quatre heures du matin, ils arrivent le lendemain soir, après la panne." },
    { q: 'Inférence : pourquoi le père reste-t-il longtemps face aux vagues, sans un mot ?', a: "Il voit la mer pour la première fois, lui aussi. Il est ému, pas déçu, mais il ne peut pas le dire." },
    { q: 'Point de vue : qui raconte, et depuis quand ?', a: "Le fils, devenu adulte, qui se souvient. Les derniers verbes (je ne le lui ai jamais dit, je crois) parlent depuis aujourd'hui." },
  ],
  audio: REC('rec-b2-08-extrait'),
  say: REFRAME,
  terms: ['narrateur'],
};

const A11_TYPES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-types',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-recit',
  title: 'Lire une page de roman',
  frSub: 'Quatre questions à te poser',
  hint: 'Quatre cartes. Chacune se cherche ailleurs dans le texte.',
  audio: REC('rec-b2-08-lire'),
  say: REFRAME,
  terms: ['narrateur'],
  cards: [
    {
      head: 'D’abord le sens', label: Cap(LECTURE_B1_REF),
      fr: fr(E(1180)), sub: rsOf(E(1180)),
      body: `« ${B137_REFRAME} » Qui raconte, et à quelle personne ? Réponds avant de t'arrêter sur un verbe. EN: ${B137_REFRAME_EN}`,
    },
    {
      head: 'Le ton', label: 'sérieux ou ironique',
      fr: fr(E(1182)), sub: rsOf(E(1182)),
      body: "Le narrateur peut sourire de ses personnages : avec beaucoup de dignité, comme on annonce une guerre. L'ironie dit le contraire de ce qu'elle semble dire. EN: irony says the opposite of what it seems to say.",
    },
    {
      head: 'L’inférence', label: Cap(CRITIQUE_REF),
      fr: fr(E(1183)), sub: rsOf(E(1183)),
      body: `« ${B224_REFRAME} » Un roman aussi laisse entendre plus qu'il n'écrit : cherche ce que les gestes révèlent. EN: ${B224_REFRAME_EN}`,
    },
    {
      head: 'Le point de vue', label: 'qui voit',
      fr: fr(E(1186)), sub: rsOf(E(1186)),
      body: "Le récit montre ce que voit l'enfant ; l'adulte, lui, comprend plus tard. Les deux regards n'utilisent pas les mêmes temps. EN: the child sees, the adult understands later.",
    },
  ],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le texte dit sans le dire',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Qui raconte', [
      it(E(1180), 'la première personne'),
      it(E(1181), 'la troisième personne'),
      it(E(1186), 'le regard de l’enfant'),
      it(E(1187), 'le début de l’extrait'),
    ], chk('Dans l’extrait de la mer, le narrateur est…',
      ['le fils, devenu adulte', 'le père', 'un narrateur extérieur'], 0,
      'Je, mon père, ma sœur : le fils raconte, des années plus tard. EN: the son, as an adult.')),
    grp('Le ton et l’inférence', [
      it(E(1182), 'un ton ironique'),
      it(E(1183), 'ce que le texte laisse entendre'),
      it(E(1184), 'un sourire, des yeux froids'),
      it(SC, 'un ton sérieux, en B2'),
    ], chk('« Il sourit, mais ses yeux restèrent froids. » Le texte laisse entendre que…',
      ['son sourire est faux', 'il est heureux'], 0,
      'Mais oppose le sourire aux yeux : le sourire ment. EN: the smile is false.')),
    ctl('Le temps du narrateur', '« Je ne le lui ai jamais dit. » Pourquoi un passé composé à la fin de l’extrait ?',
      ['le narrateur parle depuis aujourd’hui', 'c’est une erreur de l’auteur'], 0,
      'Le récit est au passé simple ; le commentaire d’aujourd’hui, au passé composé. EN: the present-day narrator speaks.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['narrateur'],
};

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Écouter une lecture',
  frSub: 'Huit phrases, lues comme à la radio',
  lines: [
    ln(E(1187)), ln(E(1184)), ln(E(1180)), ln(E(1182)),
    ln(E(1183)), ln(E(1186)), ln(E(1139)), ln(E(1134)),
  ],
  questions: [
    { q: 'Première phrase : qui a pris la décision ?', opts: ['le père', 'la mère', 'l’enfant'], correct: 0, why: 'Mon père décida. EN: the father.' },
    { q: 'Deuxième phrase : le sourire est-il sincère ?', opts: ['non', 'oui'], correct: 0, why: 'Ses yeux restèrent froids. EN: no.' },
    { q: 'Cinquième phrase : qu’est-ce que le père n’avait jamais vu ?', opts: ['la mer', 'la montagne', 'la ville'], correct: 0, why: 'La mer. EN: the sea.' },
    { q: 'Septième phrase : a-t-il compris son erreur à temps ?', opts: ['non, trop tard', 'oui, tout de suite'], correct: 0, why: 'Je compris trop tard. EN: too late.' },
    { q: 'Dernière phrase : qui est parti le lendemain ?', opts: ['nous', 'ils'], correct: 0, why: 'Partîmes : nous. EN: we did.' },
  ],
  audio: REC('rec-b2-08-lire-ecoute'),
  say: REFRAME,
  terms: ['narrateur', 'personne'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  sheetId: 'sheet-recit',
  title: 'Devant un extrait, à l’examen',
  frSub: 'Quatre gestes, dans l’ordre',
  points: [
    "Lis tout une fois, pour le sens : qui, où, que se passe-t-il. Ne t'arrête pas sur un verbe. EN: read once for meaning.",
    "Repère le premier plan au passé simple : c'est la suite des événements. EN: find the foreground events.",
    "Cherche ce que le texte laisse entendre : un geste, un détail, un contraste avec mais. EN: look for what is implied.",
    "Demande-toi qui raconte, et sur quel ton. Réponds à l'examen avec une citation courte. EN: identify narrator and tone; quote briefly.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['narrateur', 'premier'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Comprendre : l’interrogation surprise', TEXTE_A11, [
  { q: 'Qui raconte, et à quelle personne ?', a: "Un élève de la classe, à la première personne du pluriel : nous la remerciâmes." },
  { q: 'Relève les verbes au passé simple et donne leur infinitif.', a: "entra (entrer), posa (poser), ouvrit (ouvrir), annonça (annoncer), remerciâmes (remercier), distribua (distribuer), leva (lever), demanda (demander), répondit (répondre)." },
  { q: 'Le ton est-il sérieux ou ironique ? Cite deux expressions.', a: "Ironique : « son éternel sourire », « ravie », « nous la remerciâmes d'un silence glacial », « comme on distribue des bonbons », « très poliment »." },
  { q: 'Raconte au passé composé : « Nous la remerciâmes d’un silence glacial. »', a: "Nous l'avons remerciée d'un silence glacial. La placée avant fait l'accord : remerciée." },
], 'rec-b2-08-texte-a11', ['narrateur']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le narrateur', 'Le narrateur, c’est…',
    ['la voix qui raconte', 'l’auteur du livre'], 0,
    'Une voix inventée, pas l’auteur. EN: the voice telling, not the author.'),
  ctl('L’inférence', 'Une question d’inférence porte sur…',
    ['ce que le texte laisse entendre', 'un détail écrit mot pour mot'], 0,
    'Ce qui n’est pas écrit, mais montré. EN: what is implied.'),
  ctl('Le ton', '« Il referma le capot avec beaucoup de dignité. » Le ton est…',
    ['ironique', 'admiratif'], 0,
    'La dignité cache qu’il n’a rien réparé. EN: ironic.'),
], ['narrateur']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Comprendre l’extrait',
    opener: {
      line: "Un père, une voiture en panne, une mer qu'il n'avait jamais vue : ici tu lis une page de roman comme à l'examen. EN: A father, a broken-down car, a sea he had never seen: here you read a novel's page as you would in an exam.",
      imageRef: 'lessons/passe-simple/act11.jpg',
    },
    sections: [],
    milestone: "Tu comprends une page de roman au passé simple : le sens global, les détails, ce qu'elle laisse entendre, qui raconte et sur quel ton. EN: You can understand a literary page for meaning, inference, narrator and tone.",
    estScreens: 38, restPoints: ['a11-types', 'a11-ecoute'],
  },
  sections: [A11_LECTURE, A11_TYPES, A11_CONSTRUIRE, A11_ECOUTE, A11_FOCUS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: RACONTE-LE À UN AMI
 *
 *  Model (Léa retells the act 1 tale), plan, role play, the TASK (retell a
 *  passé simple extract in the passé composé and imparfait), speak practice
 *  on passé composé rows, cheat sheet, progress, quiz, review, roundup.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Léa',
  frSub: 'Un conte, raconté à un ami',
  text: LECTURE_MODELE,
  questions: [
    { q: 'Quel temps Léa emploie-t-elle pour les événements du conte ?', a: "Le passé composé : a frappé, a offert, a voulu, a débordé, a poussé. Aucun passé simple : elle parle à un ami." },
    { q: 'Et pour le décor ?', a: "L'imparfait, comme dans le livre : il neigeait, il avait très froid." },
    { q: 'Pourquoi « il était déjà parti » ?', a: "Un plus-que-parfait : le départ a eu lieu avant le lendemain matin. Léa l'a gardé tel quel." },
    { q: 'Léa suit-elle l’ordre du conte ?', a: "Oui, du soir d'hiver à la fin. Elle ajoute seulement son avis : ce qui l'a le plus frappée." },
  ],
  audio: REC('rec-b2-08-modele'),
  say: REFRAME,
  terms: ['aujourdhui', 'decor'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Cinq étapes avant de raconter',
  frSub: 'Du livre au message',
  steps: [
    'Lis l’extrait une fois pour le sens : qui, où, que se passe-t-il. EN: read once for meaning.',
    'Souligne les passés simples et note l’infinitif de chacun. EN: underline each passé simple and note its infinitive.',
    'Remplace chacun par le passé composé : vérifie l’auxiliaire et l’accord. EN: replace each with the passé composé.',
    'Laisse l’imparfait et le plus-que-parfait tels quels, et garde l’ordre des faits. EN: leave the other tenses, keep the order.',
    'Écris pour ton ami : une salutation, une phrase d’avis, une question pour finir. EN: write for your friend.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'infinitif'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Quatre moments où tu racontes un texte',
  cases: [
    { situation: 'Tu racontes un roman à un ami', fr: fr(E(1193)), en: en(E(1193)) },
    { situation: 'Tu présentes un exposé d’histoire', fr: fr(E(1016)), en: en(E(1016)) },
    { situation: 'Tu résumes la fin d’un livre', fr: fr(E(1195)), en: en(E(1195)) },
    { situation: 'Tu donnes ton avis au club de lecture', fr: fr(E(1198)), en: en(E(1198)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'Raconte le chapitre à Samir',
  frSub: 'Six tours, à voix haute',
  setting: 'Samir t’appelle : il n’a pas eu le temps de lire le chapitre pour le club de lecture de jeudi. Tu le lui racontes, sans jamais employer le passé simple.',
  turns: [
    {
      ai: 'Alors, ce chapitre, il commence comment ?', en: 'So, how does this chapter start?',
      user: 'Un homme est arrivé un soir dans un village où personne ne le connaissait.',
      userEn: 'A man arrived one evening in a village where nobody knew him. (The book’s passé simple, told in the passé composé; the setting in the imparfait.)',
      alts: [
        { fr: 'Au début, un inconnu est arrivé au village, un soir d’hiver.', en: 'At the start, a stranger arrived in the village one winter evening.' },
        { fr: 'Ça commence avec un homme qui arrive dans un village, un soir.', en: 'It starts with a man arriving in a village one evening. (The present of storytelling: also right.)' },
      ],
    },
    {
      ai: 'Et qu’est-ce qu’il a fait ?', en: 'And what did he do?',
      user: 'Il a frappé à toutes les portes, mais personne ne lui a ouvert.',
      userEn: 'He knocked at every door, but nobody opened. (Two events: passé composé.)',
      alts: [
        { fr: 'Il a frappé partout, et personne n’a voulu lui ouvrir.', en: 'He knocked everywhere, and nobody would open to him.' },
        { fr: 'Il a cherché un endroit pour dormir, sans succès.', en: 'He looked for somewhere to sleep, without success.' },
      ],
    },
    {
      ai: 'Il faisait quel temps, dans le livre ?', en: 'What was the weather like in the book?',
      user: 'Il neigeait, et il faisait très froid.',
      userEn: 'It was snowing, and it was very cold. (The background stays in the imparfait.)',
      alts: [
        { fr: 'Il faisait nuit, et la neige tombait depuis le matin.', en: 'It was dark, and the snow had been falling since morning.' },
        { fr: 'C’était l’hiver, il faisait un froid terrible.', en: 'It was winter, it was terribly cold.' },
      ],
    },
    {
      ai: 'J’ai vu une phrase : « Le vieux ne répondit pas. » Ça veut dire quoi ?', en: 'I saw a sentence: « Le vieux ne répondit pas. » What does it mean?',
      user: 'Ça veut dire que le vieil homme n’a pas répondu.',
      userEn: 'It means the old man did not answer. (Répondit is répondre; you retell it, you do not repeat it.)',
      alts: [
        { fr: 'Le vieux n’a rien répondu.', en: 'The old man said nothing in reply.' },
        { fr: 'Il n’a pas répondu, il est resté silencieux.', en: 'He did not answer, he stayed silent.' },
      ],
    },
    {
      ai: 'Et à la fin, on apprend pourquoi il est venu ?', en: 'And at the end, do we find out why he came?',
      user: 'Oui, à la fin, on a compris qu’il était revenu pour sa fille.',
      userEn: 'Yes, at the end we understood he had come back for his daughter. (The plus-que-parfait stays.)',
      alts: [
        { fr: 'Oui : il était revenu chercher sa fille, qu’il avait laissée là.', en: 'Yes: he had come back for the daughter he had left there.' },
        { fr: 'On l’a su à la dernière page : sa fille habitait ce village.', en: 'We found out on the last page: his daughter lived in that village.' },
      ],
    },
    {
      ai: 'Bon, je le lis quand même avant jeudi ?', en: 'Right, should I still read it before Thursday?',
      user: 'Oui, lis-le, surtout la dernière page : elle est magnifique.',
      userEn: 'Yes, read it, especially the last page: it is beautiful. (Your opinion, in the present.)',
      alts: [
        { fr: 'Oui, tu vas voir, la fin m’a vraiment touché.', en: 'Yes, you will see, the ending really moved me.' },
        { fr: 'Oui, et on en parlera jeudi, au club.', en: 'Yes, and we will talk about it on Thursday at the club.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'decor'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Raconte cette page à un ami',
  frSub: 'Mission écrite, format B2',
  brief: `Tu viens de lire cette page de roman, et elle t'a marqué. Ton amie Inès, qui ne lit pas beaucoup, te demande de quoi il s'agit. Écris-lui un message où tu lui racontes la page, dans l'ordre, comme tu le ferais à l'oral. Voici l'extrait : « ${EXTRAIT_TACHE} »`,
  briefEn: 'You have just read this page of a novel and it stayed with you. Your friend Inès, who does not read much, asks what it is about. Write her a message retelling the page, in order, the way you would say it. The extract is printed in the brief.',
  produce: "Écris un message de 150 à 220 mots qui raconte l'extrait au passé composé et à l'imparfait, sans aucun passé simple, dans l'ordre des faits, avec au moins une parole rapportée, une phrase qui donne ton avis et une question à Inès.",
  responseSpec: { kind: 'text', minWords: 150, maxWords: 240 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Tu racontes toute la page, du départ avant l'aube à la photo sur le comptoir, sans rien inventer d'important, avec ton avis et une question à Inès. Entre 150 et 220 mots.",
          "2 : L'histoire est là, mais il manque un moment clé (la gare, le café ou la photo), ou ton avis, ou la longueur sort un peu des limites.",
          "1 : Un résumé de deux ou trois phrases, ou un texte qui recopie l'extrait.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et ordre des faits',
        maxPoints: 3,
        descriptors: [
          "3 : Les faits arrivent dans l'ordre du livre. Inès comprend que le train était déjà parti avant l'arrivée de Mathieu, et que la photo avait été perdue trente ans plus tôt. Les connecteurs (alors, puis, vers midi, enfin) relient les étapes.",
          "2 : L'ordre est presque toujours respecté, mais un retour en arrière devient un événement de plus, ou un connecteur manque.",
          "1 : On ne sait plus dans quel ordre les choses se sont passées.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction de la transposition',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque passé simple est devenu un passé composé juste : le bon auxiliaire (il est descendu, il est entré, il est monté), les accords (il l'a posée), la place de enfin et de pas. L'imparfait et le plus-que-parfait sont restés. Aucun passé simple.",
          "3 : Une ou deux erreurs d'auxiliaire ou d'accord, mais tous les temps ont le bon rôle.",
          "2 : Plusieurs erreurs : un décor changé en passé composé (il a fait nuit), un plus-que-parfait changé (le train est parti), ou des participes mal formés.",
          "1 : Des passés simples restent dans le texte, ou presque tout est au même temps.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 2,
        descriptors: [
          "2 : Un message à une amie : tu, une salutation, des phrases naturelles, ni langage de SMS ni phrases de livre.",
          "1 : Le texte sonne comme un devoir recopié, ou comme une liste de SMS sans phrases.",
        ],
      },
    ],
  },
  scaffold: [
    'Salut Inès,',
    'Je viens de lire',
    'Au début,',
    'Il faisait',
    'Quand il est arrivé à la gare,',
    'Vers midi,',
    'La patronne lui a dit que',
    'À ton avis,',
  ],
  modelAnswer: "Salut Inès, je viens de lire une page qui m'a donné des frissons, je te la raconte. Un matin, Mathieu s'est levé avant l'aube. Il faisait encore nuit et le village dormait. Il a pris son sac, il a fermé la porte sans bruit et il est descendu vers la gare. Mais le train de six heures était déjà parti, alors il a attendu une heure sur le quai, puis il est monté dans le suivant. À Lyon, personne ne l'attendait. Il a marché longtemps dans des rues qu'il ne reconnaissait plus. Vers midi, il est entré dans un petit café et il a demandé un verre d'eau. La patronne l'a regardé longuement, puis elle lui a dit qu'il était le fils Berthier. Mathieu n'a pas répondu. Il a sorti une photo de sa poche et il l'a posée sur le comptoir. La femme a pâli : c'était la photo de son propre mariage, qu'elle avait perdue trente ans plus tôt. Ce qui m'a le plus frappé, c'est qu'on ne sait rien de plus. À ton avis, comment Mathieu a-t-il eu cette photo ? Bises, Léa\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : toute la page, dans l'ordre, un avis (ce qui m'a le plus frappé), une question à Inès.\n2. Cohérence : le train était déjà parti et la photo avait été perdue restent en arrière ; alors, puis, vers midi relient les étapes.\n3. Correction : quatorze passés simples devenus passés composés, avec être pour descendre, monter, entrer ; l'accord de posée (la photo) ; l'imparfait (faisait, dormait, attendait, reconnaissait) et le plus-que-parfait (était parti, avait perdue) intacts ; la parole rapportée (elle lui a dit qu'il était).\n4. Registre : un message à une amie, avec tu et une salutation, naturel, sans passé simple.",
  modelAnswerEn: "Hi Inès, I have just read a page that gave me shivers, so here it is. One morning Mathieu got up before dawn. It was still dark and the village was asleep. He took his bag, closed the door without a sound and went down to the station. But the six o'clock train had already left, so he waited an hour on the platform, then got on the next one. In Lyon nobody was waiting for him. He walked for a long time through streets he no longer recognised. Around noon he went into a little café and asked for a glass of water. The owner looked at him for a long time, then told him he was the Berthier boy. Mathieu did not answer. He took a photo out of his pocket and laid it on the counter. The woman went pale: it was the photo of her own wedding, which she had lost thirty years before. What struck me most is that we learn nothing more. What do you think, how did Mathieu get that photo? Love, Léa. The marker's notes (not counted): 1. Task: the whole page, in order, an opinion and a question. 2. Coherence: the train that had left and the lost photo stay in the past before the events. 3. Accuracy: every passé simple retold in the passé composé with the right auxiliary and agreement; the imparfait and pluperfect untouched; reported speech. 4. Register: a natural message to a friend.",
  watchFor: [
    { pattern: 'A passé simple form copied from the extract into the retelling (il se leva, il prit, dit-elle).', criterion: 'correction', feedback: 'Tu racontes à une amie : chaque passé simple devient un passé composé. Il se leva : il s’est levé.', ref: 'a10-table' },
    { pattern: 'The book form kept with an auxiliary added: il a prit, il est descendit, elle a pâlit.', criterion: 'correction', feedback: 'Remonte à l’infinitif, puis prends le participe : prendre, pris ; descendre, descendu.', ref: 'a10-erreurs' },
    { pattern: 'Avoir with a verb of movement: il a descendu vers la gare, il a entré dans le café, il a monté dans le train.', criterion: 'correction', feedback: 'Descendre, entrer, monter sans complément prennent être : il est descendu, il est entré.', ref: 'a4-erreurs' },
    { pattern: 'The background turned into events: il a fait nuit, le village a dormi, personne ne l’a attendu.', criterion: 'coherence', feedback: 'Le décor reste à l’imparfait : il faisait nuit, le village dormait.', ref: 'a9-piege' },
    { pattern: 'The plus-que-parfait changed, which reverses the order: le train est parti, qu’elle a perdue trente ans plus tôt.', criterion: 'coherence', feedback: 'Était parti et avait perdue restent : ces faits étaient déjà passés.', ref: 'a10-erreurs' },
    { pattern: 'A passé simple read as the wrong verb: fut for fit, or il vit read as vivre.', criterion: 'correction', feedback: 'Vérifie l’infinitif : fit, c’est faire ; fut, c’est être.', ref: 'a7-erreurs' },
    { pattern: 'The imparfait used for the events (il prenait son sac, il marchait vers la gare), so the story reads as a habit.', criterion: 'coherence', feedback: 'Ces gestes arrivent une fois, dans l’ordre : passé composé.', ref: 'a1-scene' },
    { pattern: 'Agreement missed after avoir with la placed before: il l’a posé sur le comptoir.', criterion: 'correction', feedback: 'La photo est reprise par la, placé avant : il l’a posée.', ref: 'a4-texte' },
    { pattern: 'Word order copied from the book: il n’a répondu pas, il a regardé longuement elle.', criterion: 'correction', feedback: 'Ne et pas entourent l’auxiliaire : il n’a pas répondu.', ref: 'a10-construire' },
    { pattern: 'The direct speech line left with its incise inverted wrongly (« Tu es le fils Berthier », a-t-elle dit enfin) or turned into il est le fils Berthier with the wrong tense.', criterion: 'correction', feedback: 'Garde les guillemets avec a-t-elle dit, ou rapporte : elle lui a dit qu’il était le fils Berthier.', ref: 'a10-exemples' },
    { pattern: 'Events skipped or invented, or the order changed (the photo before the café).', criterion: 'tache', feedback: 'Suis l’extrait pas à pas : la gare, Lyon, le café, la photo.', ref: 'a12-plan' },
    { pattern: 'No opinion, no question to Inès, no greeting; or a body outside 150 to 220 words.', criterion: 'registre', feedback: 'C’est un message à une amie : salue-la, donne ton avis, pose-lui une question.', ref: 'a12-usages' },
  ],
  graderNotes: [
    'Count the words of the message body only: the greeting line and the sign-off do not count. 150 to 220 with 10% tolerance (135 to 242) before criterion « tache » loses a point. responseSpec allows 240.',
    'THIS IS A RECOGNITION LESSON: the learner is never asked to produce the passé simple. A passé simple left in the retelling is an error under « correction » (the task is to transpose it). Never suggest a passé simple form in feedback.',
    'Accept the present of narration for the opening situation (au début, il y a un homme qui…) as in the lesson model, provided the events are then told in the passé composé. Do not accept the present for the whole retelling.',
    'Accept direct speech kept in quotation marks (« Tu es le fils Berthier », a-t-elle dit) or reported speech (elle lui a dit qu’il était le fils Berthier). Do not score the sequence of tenses in reported speech beyond that line: it is lesson 19 in B1.',
    'Accept either « il a descendu la rue » (with an object, avoir) or « il est descendu vers la gare » (être), judged against what the learner actually wrote.',
    'Accept « le train de six heures était déjà parti » or « le train était parti » (the plus-que-parfait of lesson 1 in B2); a passé composé there counts once under « coherence », not per occurrence.',
    'Writer gender is unknown: judge agreements referring to the writer for internal consistency only.',
    'Accept regional vocabulary (déjeuner and dîner in their regional senses, septante, nonante).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 1 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'decor'],
};

/** Say the retellings out loud. Every id carries `voiceflash`, so no row
 *  holding a passé simple can reach it (corpus §A.3). */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Raconte à voix haute',
  frSub: 'Le livre, dit au passé composé',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-aujourdhui',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'où', v: 'contes, romans, histoire, presse ; jamais à l’oral', say: fr(E(1016)),
      detail: { title: 'Où il vit', body: "Dans le récit écrit ; une personne qui parle dit le passé composé. EN: written narrative only.", say: fr(E(1021)) } },
    { k: 'les finales', v: '-a, -it, -ut, -int ; -rent au pluriel', say: fr(E(1031)),
      detail: { title: 'Les finales', body: "Quatre familles ; -rent veut dire ils ou elles. EN: four families; -rent is plural.", say: fr(E(1033)) } },
    { k: 'la clé', v: 'le participe : lu, lut ; pris, prit', say: fr(E(1077)),
      detail: { title: 'Le participe', body: "Le passé simple sonne souvent comme le participe. EN: it often sounds like the participle.", say: fr(E(1112)) } },
    { k: 'les irréguliers', v: 'fut, eut, fit, vint, naquit, mourut', say: fr(E(1106)),
      detail: { title: 'Les irréguliers', body: "Fut : être ; fit : faire ; vit : voir, ou vivre au présent. EN: learn to recognise them on sight.", say: fr(E(1118)) } },
    { k: 'les plans', v: 'passé simple devant, imparfait derrière', say: fr(E(1146)),
      detail: { title: 'Les plans', body: "Les événements au passé simple ; le décor à l'imparfait, qui ne bouge pas. EN: foreground and background.", say: fr(E(1151)) } },
    { k: 'aujourd’hui', v: 'passé composé ; le reste ne bouge pas', say: fr(E(1171)),
      detail: { title: 'Raconter', body: "Seul le passé simple change : l'auxiliaire, l'accord, rien au milieu, l'incise. EN: only the passé simple changes.", say: fr(E(1165)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aujourdhui', 'finale', 'irregulier'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais où vit le passé simple et où il n'entre jamais. Tu reconnais les quatre familles de finales, les douze irréguliers et leurs sosies, tu sais qui agit, tu sépares les événements du décor et tu racontes une page de livre au passé composé sans perdre un fait. Le piège qui reste, c'est la main trop rapide : elle change aussi l'imparfait et le plus-que-parfait, ou elle garde la forme du livre en ajoutant un auxiliaire (il a prit). Avant l'examen, prends une page de roman, souligne chaque passé simple et écris au-dessus son infinitif, puis sa version d'aujourd'hui. Ne touche à rien d'autre. EN: Underline every passé simple in a novel page, write its infinitive and today's version above it, and change nothing else.",
  stats: [
    { k: 'Où', v: 'le récit écrit ; jamais la conversation' },
    { k: 'Les finales', v: '-a, -it, -ut, -int ; -rent' },
    { k: 'Les plans', v: 'événement ou décor' },
    { k: 'Aujourd’hui', v: 'passé composé, et rien d’autre ne bouge' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight. Every question tests RECOGNITION: which
 *  verb, which person, event or background, what it means, how you would say
 *  it today. No option set supplies a passé simple to complete a gap, and no
 *  typed answer contains one. `fold()` strips accents, commas, apostrophes
 *  and hyphens, so every typed answer turns on the auxiliary, the participle
 *  or the word order, never on an accent. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas dans cette version d’aujourd’hui. Écris la phrase correcte. EN: One form is wrong in this modern retelling; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const RETELL = 'Raconte-la au passé composé.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-reperer', label: 'Repérer', targets: ['lu-comme-habitude'],
      questions: [
        mc('« Le voyageur entra, regarda autour de lui et s’assit. » Que raconte cette phrase ?', ['trois gestes, un seul soir', 'une habitude du voyageur', 'ce qu’il fera demain'], 0, 'Trois événements, l’un après l’autre. EN: three events in a row.', 'a1-scene'),
        mc('Où ne rencontres-tu jamais le passé simple ?', ['dans une conversation', 'dans un conte', 'dans un manuel d’histoire'], 0, 'Jamais à l’oral. EN: never in speech.', 'a2-table'),
        mc('Ta collègue raconte son voyage de 1998, à la pause. Elle dit…', ['nous sommes partis en juin', 'nous partîmes en juin'], 0, 'Elle parle : passé composé, quelle que soit la date. EN: speaking, so the passé composé.', 'a2-trier'),
        tI(`Une phrase de conte. ${RETELL}`, fr(E(1000)), fr(E(1004)), 'Frappa devient a frappé. EN: frappa becomes a frappé.', 'a1-reperer'),
        tI('Donne l’infinitif du verbe au passé simple.', fr(E(1012)), 'cacher', 'Cach-a, puis -er. EN: cacher.', 'a1-reperer'),
        eS('En 1608, Champlain a fondu Québec.', fr(E(1016)), 'Fonda vient de fonder, participe fondé. Fondu vient de fondre. EN: fonder, fondé.', 'a2-manuel'),
        lC('Écoute. Cette phrase vient…', fr(E(1017)), ['d’un texte écrit', 'd’une conversation'], 0, 'Envahit, chanta : un récit de presse. EN: a written narrative.', 'a2-trier'),
        lC('Écoute. Que fait Rose ?', fr(E(1001)), ['elle ouvre et offre une soupe', 'elle ferme la porte', 'elle part en voyage'], 0, 'Ouvrit, offrit : ouvrir, offrir. EN: she opens and offers soup.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-er', label: '-a, -èrent', targets: ['finale-er'],
      questions: [
        mc('Parlèrent : quelle personne ?', ['ils ou elles', 'il ou elle', 'nous'], 0, '-èrent : le pluriel. EN: plural.', 'a3-cartes'),
        mc('Lequel est un passé simple ?', ['il parla', 'il parlait', 'il parlera'], 0, '-a tout court. EN: -a alone.', 'a3-piege'),
        mc('« Nous arrivâmes à Tombouctou. » Qui arrive ?', ['nous', 'ils', 'je'], 0, '-âmes : nous. EN: nous.', 'a3-histoire'),
        tI('Donne l’infinitif de pensa.', fr(E(1034)), 'penser', 'Pens-a, puis -er. EN: penser.', 'a3-reperer'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1032)), fr(E(1033)), 'Rentrer prend être, accord au pluriel. EN: être, plural agreement.', 'a3-piege'),
        eS('Le train a arrêté en pleine campagne.', fr(E(1046)), 'S’arrêta : un pronominal, donc être. EN: pronominal, so être.', 'a3-piege'),
        lC('Écoute. Quel temps entends-tu ?', fr(E(1044)), ['le futur', 'le passé simple', 'l’imparfait'], 0, 'Parlera garde le r : futur. EN: future.', 'a3-ecoute'),
        lC('Écoute. Qui demande son chemin ?', fr(E(1038)), ['le narrateur', 'un berger'], 0, 'Demandai : je. EN: the narrator.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r3-it', label: '-it, -irent', targets: ['sosie-present'],
      questions: [
        mc('« Tous les soirs, il finit son travail à six heures. » Finit est…', ['un présent', 'un passé simple'], 0, 'Tous les soirs : le présent d’habitude. EN: present habit.', 'a4-cartes'),
        mc('« Le vieil homme finit sa lettre et la plia en quatre. » Finit est…', ['un passé simple', 'un présent'], 0, 'Plia, à côté, est un passé simple. EN: its neighbour is past.', 'a4-construire'),
        mc('Descendirent vient de…', ['descendre', 'descendir', 'décider'], 0, 'Un verbe en -re. EN: descendre.', 'a4-construire'),
        tI('Donne l’infinitif de répondit.', fr(E(1052)), 'répondre', 'Répond-it : répondre. EN: répondre.', 'a4-cartes'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1050)), fr(E(1051)), 'Partir prend être. EN: être.', 'a4-erreurs'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1065)), fr(E(1066)), 'Tout entre ont et perdu. EN: tout in the middle.', 'a4-erreurs'),
        eS("Elle a réponde d'une voix calme.", fr(E(1053)), 'Le participe de répondre est répondu. EN: répondu.', 'a4-erreurs'),
        lC('Écoute. Combien de personnes choisissent la route ?', fr(E(1058)), ['plusieurs', 'une seule'], 0, 'Choisirent : elles. EN: several.', 'a4-construire'),
      ],
    },
    {
      id: 'r4-ut-int', label: '-ut et -int', targets: ['finale-u-in'],
      questions: [
        mc('Dut vient de…', ['devoir', 'dire', 'durer'], 0, 'Dû, dut. EN: devoir.', 'a5-reperer'),
        mc('Crut vient de…', ['croire', 'croître', 'crier'], 0, 'Cru, crut. EN: croire.', 'a5-reperer'),
        mc('Vint, à l’oreille, sonne comme…', ['vingt', 'vent'], 0, 'Le même son que le nombre. EN: like vingt.', 'a6-piege'),
        tI('Donne l’infinitif de reçut.', fr(E(1080)), 'recevoir', 'Reçu, reçut : recevoir. EN: recevoir.', 'a5-hacks'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1070)), fr(E(1071)), 'Rien entre a et pu. EN: rien in the middle.', 'a5-reperer'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1092)), fr(E(1093)), 'Revenir prend être. EN: être.', 'a6-construire'),
        eS("Elle est tenue sa promesse jusqu'au bout.", fr(E(1095)), 'Tenir prend avoir. EN: avoir.', 'a6-piege'),
        lC('Écoute. Qu’est-il devenu ?', fr(E(1096)), ['un grand peintre', 'un grand musicien'], 0, 'Devint : devenir. EN: a great painter.', 'a6-exemples'),
      ],
    },
    {
      id: 'r5-irreguliers', label: 'Les irréguliers', targets: ['irregulier-confondu'],
      questions: [
        mc('Fut vient de…', ['être', 'faire'], 0, 'Avec u : être. EN: être.', 'a7-erreurs'),
        mc('Fit vient de…', ['faire', 'être'], 0, 'Avec i : faire. EN: faire.', 'a7-erreurs'),
        mc('« Elle vit la lumière au bout du couloir. » Vit vient de…', ['voir', 'vivre'], 0, 'On voit une lumière. EN: voir.', 'a7-erreurs'),
        mc('Naquit vient de…', ['naître', 'nager'], 0, 'Naquit ouvre les biographies. EN: naître.', 'a7-table'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1107)), fr(E(1108)), 'Eut : avoir ; recula : reculer. EN: avoir, reculer.', 'a7-construire', ['Il a eu peur et a reculé.']),
        tI(`Une phrase de biographie. ${RETELL}`, fr(E(1119)), fr(E(1120)), 'Mourir prend être. EN: être.', 'a7-table'),
        eS('Elle a été ses valises en silence.', fr(E(1110)), 'Fit, c’est faire. EN: faire.', 'a7-erreurs'),
        lC('Écoute. Qu’a-t-il pris ?', fr(E(1111)), ['le premier train', 'le dernier bus'], 0, 'Prit le premier train. EN: the first train.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r6-personne', label: 'La personne', targets: ['personne-perdue'],
      questions: [
        mc('-rent, c’est…', ['ils ou elles', 'il ou elle', 'nous'], 0, 'Toujours le pluriel. EN: always plural.', 'a8-cartes'),
        mc('« Nous partîmes le lendemain. » Qui part ?', ['nous', 'ils'], 0, '-îmes : nous. EN: nous.', 'a8-construire'),
        mc('Où trouves-tu le plus souvent je et nous au passé simple ?', ['dans des souvenirs ou un récit de voyage', 'dans un manuel d’histoire', 'dans un conte'], 0, 'Le narrateur raconte sa propre histoire. EN: first-person narratives.', 'a8-cartes'),
        mc('Quelles personnes ne rencontres-tu presque jamais ?', ['tu et vous', 'il et elle', 'ils et elles'], 0, 'Très rares. EN: very rare.', 'a8-cartes'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1130)), fr(E(1131)), 'Pronominal : être et l’accord. EN: être, agreement.', 'a8-exemples'),
        tI(`Une phrase de souvenir. ${RETELL}`, fr(E(1139)), fr(E(1140)), 'Compris : je. EN: j’ai compris.', 'a8-exemples', ["J'ai compris mon erreur trop tard."]),
        eS('Elles ont sorti ensemble du tribunal.', fr(E(1133)), 'Sortir sans complément : être, et l’accord. EN: être.', 'a8-exemples'),
        lC('Écoute. Combien de personnes chantent avec lui ?', fr(E(1137)), ['plusieurs', 'une seule'], 0, 'Chantèrent : elles. EN: several.', 'a8-construire'),
      ],
    },
    {
      id: 'r7-plans', label: 'Premier plan, décor', targets: ['plan-melange'],
      questions: [
        mc('Dans un roman, l’imparfait…', ['pose le décor', 'fait avancer l’histoire'], 0, 'L’arrière-plan. EN: the background.', 'a9-cartes'),
        mc('« Il pleuvait quand la lettre arriva. » Quel verbe change quand tu racontes ?', ['arriva', 'pleuvait', 'les deux'], 0, 'Seul le passé simple bouge. EN: only arriva.', 'a9-trier'),
        mc('« Elle resta longtemps immobile. » C’est…', ['un moment fermé : premier plan', 'un décor, parce que c’est long'], 0, 'La durée ne décide pas. EN: length does not decide.', 'a9-trier'),
        mc('« Tout le monde se tut quand le maire entra. » Les gens parlaient-ils encore quand il est entré ?', ['oui : ils se sont tus à son entrée', 'non : ils se taisaient déjà'], 0, 'Deux passés simples : l’un après l’autre. EN: two events in sequence.', 'a9-piege'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1150)), fr(E(1151)), 'Lisait reste ; sonna devient a sonné. EN: only sonna changes.', 'a9-piege'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1148)), fr(E(1149)), 'Claqua : a claqué. EN: a claqué.', 'a9-piege'),
        eS('Il a plu depuis trois jours quand la lettre est arrivée.', fr(E(1146)), 'Le décor reste à l’imparfait. EN: the background stays.', 'a9-piege'),
        lC('Écoute. Cette phrase est…', fr(E(1147)), ['un décor', 'un événement'], 0, 'Dormait, brillait. EN: background.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r8-aujourdhui', label: 'Aujourd’hui, tu dirais', targets: ['transposition-fausse'],
      questions: [
        tI(`Une phrase de presse. ${RETELL}`, fr(E(1160)), fr(E(1161)), 'Tomber prend être. EN: être.', 'a10-table'),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1170)), fr(E(1171)), 'Rien entre a et dit ; sortir prend être. EN: rien in the middle.', 'a10-construire', ["Il n'a rien dit et est sorti."]),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1164)), fr(E(1165)), 'L’incise : a-t-il répondu. EN: invert the auxiliary.', 'a10-table', ['« Je ne sais pas », il a répondu.']),
        tI(`Une phrase de roman. ${RETELL}`, fr(E(1172)), fr(E(1173)), 'Se lever : être et l’accord. EN: être, agreement.', 'a10-construire', ["Elle s'est levée et a quitté la salle."]),
        eS('La romancière a née à Liège en 1921.', 'La romancière est née à Liège en 1921.', 'Naître prend être. EN: être.', 'a10-erreurs'),
        eS('Des milliers de Berlinois ont franchirent la frontière cette nuit-là.', fr(E(1163)), 'Le participe : franchi. EN: franchi.', 'a10-erreurs'),
        mc('« Quand elle arriva, le train était parti. » Aujourd’hui…', ['Quand elle est arrivée, le train était parti.', 'Quand elle est arrivée, le train est parti.'], 0, 'Le plus-que-parfait reste : le train était déjà parti. EN: the pluperfect stays.', 'a10-erreurs'),
        lC('Écoute. Pour raconter cette phrase à un ami, que changes-tu ?', fr(E(1166)), ['arriva seulement', 'les deux verbes'], 0, 'Était parti reste. EN: only arriva.', 'a10-construire'),
      ],
    },
    {
      id: 'r9-comprendre', label: 'Comprendre l’extrait', targets: ['lecture-litterale'],
      questions: [
        mc('Dans l’extrait de la mer, qui raconte ?', ['le fils, devenu adulte', 'le père', 'la sœur'], 0, 'Je, mon père, ma sœur. EN: the son.', 'a11-lecture'),
        mc('« Il referma le capot avec beaucoup de dignité. » Le ton est…', ['ironique', 'admiratif', 'triste'], 0, 'Il n’a rien réparé. EN: ironic.', 'a11-lecture'),
        mc('Que laisse entendre la fin de l’extrait ?', ['le père n’avait jamais vu la mer', 'le père détestait la mer', 'la mère voulait partir'], 0, 'Lui non plus. EN: he had never seen it either.', 'a11-construire'),
        mc('Une question d’inférence porte sur…', ['ce que le texte laisse entendre', 'un détail écrit mot pour mot'], 0, 'Le non-dit. EN: the implied.', 'a11-types'),
        tI('Donne l’infinitif de crus.', "Je crus d'abord qu'il était déçu.", 'croire', 'Cru, crus : croire. EN: croire.', 'a11-lecture'),
        tI(`Une phrase de l’extrait. ${RETELL}`, fr(E(1187)), fr(E(1188)), 'Décida : a décidé ; irions reste. EN: only décida changes.', 'a11-construire'),
        eS('Il a sourit, mais ses yeux sont restés froids.', fr(E(1185)), 'Le participe de sourire est souri. EN: souri.', 'a11-construire'),
        lC('Écoute. Le sourire est-il sincère ?', fr(E(1184)), ['non', 'oui'], 0, 'Ses yeux restèrent froids. EN: no.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r10-recyclage', label: 'Le B1 en renfort', targets: ['recyclage-b1'],
      questions: [
        mc(`${Cap(PC_IMP_REF)} : « Il pleuvait et la terrasse était vide. » Ces verbes…`, ['posent le décor', 'font avancer l’histoire'], 0, `« ${B103_REFRAME} » EN: ${B103_REFRAME_EN}`, 'a9-cartes'),
        mc(`${Cap(PAIRES_REF)} : « Il sut la vérité le lendemain. » Sut veut dire…`, ['il l’a apprise', 'il la connaissait déjà'], 0, `« ${B104_REFRAME} » EN: ${B104_REFRAME_EN}`, 'a9-cartes'),
        mc(`${Cap(INVERSION_REF)} : dans « « Nous arrivons », dit-elle », l’inversion sert à…`, ['introduire une parole citée', 'poser une question'], 0, `« ${B121_REFRAME} » EN: ${B121_REFRAME_EN}`, 'a10-exemples'),
        mc(`${Cap(LECTURE_B1_REF)} : devant une forme inconnue dans un roman, tu…`, ['cherches d’abord le sens de la phrase', 't’arrêtes pour chercher dans le dictionnaire'], 0, `« ${B137_REFRAME} » EN: ${B137_REFRAME_EN}`, 'a1-reperer'),
        mc(`${Cap(DISCOURS_REF)} : « Il dit qu’il reviendrait. » Dans un roman, dit est…`, ['un passé simple : il a dit', 'un présent : il dit maintenant'], 0, 'Reviendrait, le futur dans le passé : on est au passé. EN: reviendrait marks the past.', 'a4-check'),
        tI(`${Cap(PC_IMP_REF)} : raconte au passé composé, sans toucher au décor.`, 'Il faisait chaud quand le voisin frappa à la porte.', 'Il faisait chaud quand le voisin a frappé à la porte.', 'Le décor reste, l’événement change. EN: only the event changes.', 'a9-trier'),
        eS('Quand le professeur est entré, les élèves ont parlé encore.', fr(RP(1037)), `${Cap(PC_IMP_REF)} : ce qui durait déjà reste à l’imparfait. EN: ongoing, so imparfait.`, 'a9-trier'),
        lC(`Écoute. ${Cap(INVERSION_REF)} : cette incise est au…`, fr(E(1164)), ['passé simple', 'présent'], 0, 'Répondit-il : le présent serait répond-il. EN: passé simple.', 'a10-table'),
      ],
    },
    {
      id: 'r11-examen', label: 'Comme à l’examen', targets: ['examen-lecture'],
      questions: [
        mc('Format DELF B2, compréhension écrite. « Le roi réunit ses conseillers et leur annonça son départ. » Que fait le roi ?', ['il annonce qu’il part', 'il annoncera son départ plus tard', 'il annonçait souvent son départ'], 0, 'Annonça : un événement, une fois. EN: one event.', 'a4-cartes'),
        mc('Format TCF. Dans « Les négociations échouèrent en 1936 », échouèrent correspond à…', ['ont échoué', 'échouaient', 'échoueront', 'échouent'], 0, '-èrent : passé simple pluriel, aujourd’hui ont échoué. EN: ont échoué.', 'a3-cartes'),
        mc('Format TCF. « Elle vécut à Tunis jusqu’à sa mort. » Aujourd’hui, elle…', ['ne vit plus', 'vit toujours à Tunis'], 0, 'Une vie finie, fermée. EN: her life is over.', 'a5-cartes'),
        mc('Format DELF B2. Dans l’extrait de la mer, pourquoi le père organise-t-il le voyage ?', ['pour voir la mer sans avouer qu’il ne la connaissait pas', 'pour faire plaisir à sa femme', 'pour rendre visite à l’oncle Marcel'], 0, 'Je compris qu’il n’avait jamais vu la mer. EN: he had never seen it.', 'a11-lecture'),
        mc('Format TCF. « Il fut nommé ambassadeur en 1962. » Fut nommé correspond à…', ['a été nommé', 'était nommé', 'sera nommé'], 0, 'Fut : être, au passé composé a été. EN: a été nommé.', 'a7-table'),
        tI('Format DELF B2, reformulation. Raconte au passé composé.', 'La guerre éclata en 1939.', 'La guerre a éclaté en 1939.', 'Éclata : éclater. EN: a éclaté.', 'a10-table'),
        tI('Format TCF. Donne l’infinitif de naquit.', 'Le poète naquit en 1802.', 'naître', 'Naquit : naître. EN: naître.', 'a7-table'),
        lC('Format TEF, compréhension orale. Écoute cette phrase d’un livre audio. Que s’est-il passé ?', 'Le soir même, la comtesse quitta le château, et on ne la revit jamais.', ['la comtesse est partie pour toujours', 'la comtesse est revenue le soir même', 'on l’a revue au château'], 0, 'Quitta, ne la revit jamais. EN: she left for good.', 'a2-genres'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.01 does. */
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
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'où vit le passé simple', back: 'dans le récit écrit, jamais à l’oral', say: fr(E(1016)) },
    { front: 'la finale -a', back: 'un verbe en -er, avec il ou elle', say: fr(E(1031)) },
    { front: 'la finale -rent', back: 'ils ou elles', say: fr(E(1033)) },
    { front: 'la clé des formes en -ut', back: 'le participe : lu, pu, reçu', say: fr(E(1077)) },
    { front: 'fut et fit', back: 'être et faire', say: fr(E(1106)) },
    { front: 'naquit et mourut', back: 'naître et mourir : est né, est mort', say: fr(E(1118)) },
    { front: 'le décor dans un roman', back: 'l’imparfait, qui ne bouge pas', say: fr(E(1146)) },
    { front: 'raconter un roman', back: 'le passé composé, et rien d’autre ne change', say: fr(E(1171)) },
    { front: 'l’incise au passé', back: 'a-t-il répondu, a-t-elle dit', say: fr(E(1165)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le livre et la bouche',
  body: `${REFRAME} Tu as repris le décor et l'action de ${PASSE_B1_RANGE_REF}, les incises de ${INVERSION_REF}, la lecture du sens de ${LECTURE_B1_REF} et le plus-que-parfait de ${PQP_REF}, et tu les retrouves maintenant dans les livres : tu repères, tu traduis, tu comprends. La suite du B2 reste dans les livres : le subjonctif littéraire, que tu apprendras lui aussi à reconnaître sans jamais le produire. EN: Next in B2 stays in books: the literary subjunctive, which you will also learn to recognise without producing it.`,
  points: [
    'Le passé simple vit dans le récit écrit, jamais à l’oral.',
    'Quatre finales, douze irréguliers, et le participe comme clé.',
    'Le passé simple devant, l’imparfait derrière.',
    'Pour raconter : passé composé, et rien d’autre ne bouge.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ecrit', 'aujourdhui'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Raconte-le à un ami',
    opener: {
      line: "Une page de roman t'a marqué, et ton amie veut savoir : ici tu la racontes avec tes mots, puis tu passes l'examen. EN: A novel page stayed with you and your friend wants to know: here you retell it in your own words, then sit the exam.",
      imageRef: 'lessons/passe-simple/act12.jpg',
    },
    sections: [],
    milestone: "Tu as raconté une page de roman au passé composé et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You retold a novel page in the passé composé and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r4-ut-int', 'a12-quiz/r8-aujourdhui', 'a12-review'],
  },
  sections: [
    A12_LECTURE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`. Recognition only:
 *  a coach asks for the verb, the person or today's version, never a form.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-reperer', title: 'Écrit ou dit', format: 'sort' as const, coach: "Deux piles : une phrase qu'on lit dans un livre, ou une phrase qu'on dit à quelqu'un. EN: sort by written narrative or speech.", buckets: ['un texte écrit', 'une conversation'], items: [E(1015), E(1017), E(1025), E(1021), E(1029), RP(1095)], audio: AUDIO },
  { id: 'd-finale-er', title: 'Les verbes en -er', format: 'mcq' as const, coach: "Enlève la finale, ajoute -er, puis dis la version d'aujourd'hui. EN: find the verb, then today's version.", q: '« Ils marchèrent jusqu’au village. » Aujourd’hui, ils…', opts: ['ont marché', 'marcheront'], correct: 0, why: '-èrent : un passé, au pluriel. EN: past plural.', items: [E(1030), E(1032), E(1034), E(1036), E(1038), E(1040)], audio: AUDIO },
  { id: 'd-sosie', title: 'Présent ou passé simple', format: 'mcq' as const, coach: "Regarde les verbes voisins et les mots de temps avant de décider. EN: check the neighbours before deciding.", q: '« Il finit sa lettre et la plia en quatre. » Finit est…', opts: ['un passé simple', 'un présent'], correct: 0, why: 'Plia, à côté, est au passé simple. EN: its neighbour is past.', items: [E(1050), E(1052), E(1056), E(1058), E(1060), E(1062)], audio: AUDIO },
  { id: 'd-finale-u-in', title: 'Le participe te guide', format: 'flashcard' as const, coach: "Lis chaque version d'aujourd'hui à voix haute et dis de quel verbe elle vient. EN: read each modern version aloud and name its verb.", items: [E(1071), E(1073), E(1077), E(1091), E(1093), E(1097)], audio: AUDIO },
  { id: 'd-irreguliers', title: 'Fut, fit, eut', format: 'mcq' as const, coach: "Une lettre change tout : u pour être, i pour faire. EN: u for être, i for faire.", q: '« Ce fut une longue nuit. » Fut vient de…', opts: ['être', 'faire'], correct: 0, why: 'Avec u : être. EN: être.', items: [E(1106), E(1108), E(1110), E(1112), E(1118), E(1120)], audio: AUDIO },
  { id: 'd-personne', title: 'Un ou plusieurs', format: 'sort' as const, coach: "Deux piles : une seule personne agit, ou plusieurs. Cherche le -rent. EN: sort by one person or several.", buckets: ['il ou elle', 'ils ou elles'], items: [E(1105), E(1111), E(1107), E(1130), E(1132), E(1124)], audio: AUDIO },
  { id: 'd-plans', title: 'Décor ou événement', format: 'sort' as const, coach: "Deux piles : ce qui durait déjà, ou ce qui arrive dans le récit. EN: sort background from events.", buckets: ['le décor', 'le premier plan'], items: [E(1147), E(1153), E(1013), E(1148), E(1154), E(1156)], audio: AUDIO },
  { id: 'd-aujourdhui', title: 'Raconte-le aujourd’hui', format: 'flashcard' as const, coach: "Lis chaque phrase d'aujourd'hui : un seul temps a changé, le reste est resté. EN: only one tense changed in each.", items: [E(1161), E(1163), E(1165), E(1167), E(1171), E(1173)], audio: AUDIO },
  { id: 'd-lecture', title: 'Ce que le texte laisse entendre', format: 'mcq' as const, coach: "Cherche le mot qui oppose deux choses : mais, pourtant. C'est souvent là que le texte parle. EN: look for the contrast.", q: '« Il sourit, mais ses yeux restèrent froids. » Le texte laisse entendre…', opts: ['que son sourire est faux', 'qu’il est heureux'], correct: 0, why: 'Mais oppose le sourire aux yeux. EN: the smile is false.', items: [E(1180), E(1182), E(1183), E(1186), E(1185), SC], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 en renfort', format: 'flashcard' as const, coach: "Six phrases du B1 : dis pour chacune ce que fait le temps, décor ou événement, parole citée. EN: say what each tense does.", items: [RP(203), RP(1011), RP(1037), RP(233), LS(1155), LS(1152)], audio: AUDIO },
  { id: 'd-examen', title: 'Le récit, raconté', format: 'flashcard' as const, coach: "Lis chaque version d'aujourd'hui à voix haute, comme si tu racontais le livre. EN: read each retelling aloud.", items: [E(1193), E(1195), E(1016), E(1019), E(1026), E(1028)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'lu-comme-habitude', description: 'Reads the passé simple as a habit or a present (retells il entra as il entrait), or uses it in speech.', detectOn: ['a1-scene', 'a1-reperer', 'a2-trier', 'a12-mission'], drill: 'd-reperer', retest: 'd-reperer' },
  { id: 'finale-er', description: 'Confuses -a and -èrent with the imparfait or the future, or loses the person of -ai and -âmes.', detectOn: ['a3-reperer', 'a3-piege', 'a3-check'], drill: 'd-finale-er', retest: 'd-finale-er' },
  { id: 'sosie-present', description: 'Takes il finit or il dit in a past narrative for a present, or builds a wrong participle from an -it form (réponde).', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a12-mission'], drill: 'd-sosie', retest: 'd-sosie' },
  { id: 'finale-u-in', description: 'Cannot find the verb behind -ut and -int forms (dut, crut, vint), hears vint as vingt, or picks the wrong auxiliary for venir and tenir.', detectOn: ['a5-reperer', 'a6-construire', 'a6-piege', 'a6-check'], drill: 'd-finale-u-in', retest: 'd-finale-u-in' },
  { id: 'irregulier-confondu', description: 'Mixes up fut and fit, reads eut as être, takes il vit as vivre in front of an object, or keeps naquit with an auxiliary.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a12-mission'], drill: 'd-irreguliers', retest: 'd-irreguliers' },
  { id: 'personne-perdue', description: 'Loses track of who acts: reads -rent as singular, or misses je and nous in a first-person narrative.', detectOn: ['a8-construire', 'a8-check'], drill: 'd-personne', retest: 'd-personne' },
  { id: 'plan-melange', description: 'Changes the imparfait background when retelling, or turns passé simple events (including long closed ones) into background.', detectOn: ['a9-trier', 'a9-piege', 'a9-check', 'a12-mission'], drill: 'd-plans', retest: 'd-plans' },
  { id: 'transposition-fausse', description: 'Retells with the book form plus an auxiliary (il a prit), the wrong auxiliary, misplaced rien or tout, a broken incise, or a changed plus-que-parfait.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a12-mission'], drill: 'd-aujourdhui', retest: 'd-aujourdhui' },
  { id: 'lecture-litterale', description: 'Reads a literary page only for its facts, missing the narrator, the irony or what the text implies.', detectOn: ['a11-lecture', 'a11-construire', 'a11-check'], drill: 'd-lecture', retest: 'd-lecture' },
  { id: 'recyclage-b1', description: 'Loses a B1 point the passé simple sits on: background against event, the meaning pairs, the incise, reading for meaning first.', detectOn: ['a9-cartes', 'a10-exemples', 'a1-reperer'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'examen-lecture', description: 'In an exam-format item, cannot map a passé simple to its meaning or modern form quickly enough to answer.', detectOn: ['a2-genres', 'a11-lecture', 'a12-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.01 does. */
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
  sheet('sheet-usages', 'Où vit le passé simple', ['les textes', 'l’oral', 'le narrateur et le personnage'], [
    teach('sheet-usages-teach', 'Un temps de la page',
      `${REFRAME} Le passé simple fait avancer les récits écrits : contes, romans, livres d'histoire, biographies, rétrospectives de presse. Il n'est pas ancien : les romans d'aujourd'hui l'emploient. Mais personne ne le dit en parlant, même pour un souvenir très lointain, et dans un roman les personnages qui parlent emploient le passé composé. EN: ${REFRAME_EN}`),
    table('sheet-usages-table', 'Où le rencontrer', ['Texte', 'Passé simple ?', 'Exemple'], [
      ['un conte', 'oui', "Un soir d'hiver, un voyageur frappa à la porte."],
      ['un roman', 'oui, le plus souvent', "Il entra, regarda autour de lui et s'assit."],
      ['un livre d’histoire', 'oui', 'En 1608, Champlain fonda Québec.'],
      ['une biographie', 'oui', 'La romancière naquit à Liège en 1921.'],
      ['une rétrospective de presse', 'souvent', 'Des milliers de Berlinois franchirent la frontière.'],
      ['une conversation, un message', 'jamais', 'Hier soir, on a mangé chez Karim.'],
    ]),
  ]),
  sheet('sheet-terminaisons', 'Les finales', ['-a et -èrent', '-it et -irent', '-ut et -urent', '-int et -inrent', 'la clé du participe'], [
    teach('sheet-terminaisons-teach', 'Quatre familles, une clé',
      "Au singulier (il, elle), le passé simple finit par -a, -it, -ut ou -int ; au pluriel (ils, elles), par -èrent, -irent, -urent ou -inrent. Tous les verbes en -er font -a. Pour les autres, pense au participe : lu et lut, pris et prit, fini et finit. Les verbes en -re font -it mais ont un participe en -u (répondit, répondu). EN: four ending families; the participle usually gives the verb away."),
    table('sheet-terminaisons-table', 'Les quatre familles', ['Famille', 'Il, elle', 'Ils, elles', 'Verbes'], [
      ['-a', 'il parla', 'ils parlèrent', 'tous les verbes en -er, aller compris'],
      ['-it', 'il partit', 'ils partirent', 'finir, partir, choisir, sortir, ouvrir'],
      ['-it', 'il répondit', 'ils répondirent', 'attendre, répondre, descendre, perdre'],
      ['-ut', 'il put', 'ils purent', 'pouvoir, devoir, vouloir, lire, croire, recevoir, vivre'],
      ['-int', 'il vint', 'ils vinrent', 'venir, tenir, devenir, revenir, se souvenir'],
    ]),
    table('sheet-terminaisons-personnes', 'Les autres personnes, à reconnaître', ['Personne', '-er', '-ir, -re', '-oir'], [
      ['je', 'je parlai', 'je partis', 'je pus'],
      ['tu (très rare)', 'tu parlas', 'tu partis', 'tu pus'],
      ['nous', 'nous parlâmes', 'nous partîmes', 'nous pûmes'],
      ['vous (très rare)', 'vous parlâtes', 'vous partîtes', 'vous pûtes'],
    ]),
  ]),
  sheet('sheet-irreguliers', 'Les irréguliers', ['les douze formes', 'les sosies', 'eut fini'], [
    teach('sheet-irreguliers-teach', 'Douze formes à reconnaître',
      "Douze formes portent une grande partie des récits. Certaines ressemblent au participe (eut et eu, prit et pris, mit et mis, dit et dit, put et pu, dut et dû) ; d'autres non (fut, fit, vint, naquit, mourut). Attention aux sosies : fut et fit, il vit (voir ou vivre), vint et vingt. EN: recognise these twelve on sight."),
    table('sheet-irreguliers-table', 'Les douze', ['Tu lis', 'Le verbe', 'Aujourd’hui'], [
      ['fut, furent', 'être', 'a été, ont été'],
      ['eut, eurent', 'avoir', 'a eu, ont eu'],
      ['fit, firent', 'faire', 'a fait, ont fait'],
      ['vint, vinrent', 'venir', 'est venu, sont venus'],
      ['prit, prirent', 'prendre', 'a pris, ont pris'],
      ['dit, dirent', 'dire', 'a dit, ont dit'],
      ['vit, virent', 'voir', 'a vu, ont vu'],
      ['put, purent', 'pouvoir', 'a pu, ont pu'],
      ['dut, durent', 'devoir', 'a dû, ont dû'],
      ['mit, mirent', 'mettre', 'a mis, ont mis'],
      ['naquit, naquirent', 'naître', 'est né, sont nés'],
      ['mourut, moururent', 'mourir', 'est mort, sont morts'],
    ]),
    table('sheet-irreguliers-sosies', 'Les sosies', ['Forme', 'Peut être', 'Le contexte'], [
      ['il finit, il dit', 'présent ou passé simple', 'tous les soirs : présent ; entre deux passés simples : passé'],
      ['il vit', 'voir au passé ou vivre au présent', 'vit la lumière : voir ; vit à Tunis : vivre'],
      ['il vint', 'venir', 'se prononce comme vingt'],
      ['il devint', 'devenir au passé', 'le présent est devient'],
      ['quand il eut fini', 'passé antérieur', 'aujourd’hui : quand il a fini'],
    ]),
  ]),
  sheet('sheet-recit', 'Lire un récit', ['premier plan et décor', 'le narrateur', 'les questions de l’examen'], [
    teach('sheet-recit-teach', 'Deux plans, une voix',
      `Dans un récit, le passé simple porte les événements (le premier plan) et l'imparfait le décor (l'arrière-plan). ${Cap(PC_IMP_REF)} disait : « ${B103_REFRAME} » Le plus-que-parfait recule avant le repère, comme dans ${PQP_REF}. Le narrateur est la voix qui raconte, à la première ou à la troisième personne ; son ton et son point de vue font partie du sens. EN: ${B103_REFRAME_EN}`),
    table('sheet-recit-plans', 'Qui fait quoi', ['Temps', 'Rôle', 'Exemple'], [
      ['passé simple', 'l’événement', 'Soudain, la porte claqua.'],
      ['imparfait', 'le décor', 'La maison dormait.'],
      ['imparfait + passé simple', 'la coupure', "Elle lisait lorsqu'on sonna."],
      ['passé simple + durée fermée', 'un événement long', 'Elle resta longtemps immobile.'],
      ['plus-que-parfait', 'avant le repère', 'Quand elle arriva, le train était parti.'],
      ['passé composé (fin de texte)', 'le narrateur, aujourd’hui', 'Je ne le lui ai jamais dit.'],
    ]),
    table('sheet-recit-questions', 'Les questions de l’examen', ['Type', 'Ce qu’on cherche', 'Où'], [
      ['globale', 'le sujet, le genre, le but', 'le texte entier'],
      ['détail', 'un fait précis', 'une phrase, souvent citée'],
      ['inférence', 'ce que le texte laisse entendre', 'les gestes, les contrastes (mais)'],
      ['point de vue, ton', 'qui raconte, et comment', 'les pronoms, les mots qui jugent'],
    ]),
  ]),
  sheet('sheet-aujourdhui', 'Raconter aujourd’hui', ['ce qui change', 'ce qui reste', 'l’auxiliaire', 'la liste de contrôle'], [
    teach('sheet-aujourdhui-teach', 'Un seul temps bouge',
      "Pour raconter un texte à l'oral ou dans un message, remplace chaque passé simple par un passé composé et ne touche à rien d'autre. Vérifie l'auxiliaire (être pour naître, mourir, venir, partir, arriver, tomber, entrer, sortir, monter, descendre et les pronominaux), l'accord, la place des petits mots (rien, tout, enfin, pas) et l'incise (répondit-il, a-t-il répondu). EN: only the passé simple changes; check auxiliary, agreement, word order and the incise."),
    table('sheet-aujourdhui-table', 'Du livre au message', ['Dans le livre', 'Aujourd’hui', 'La règle'], [
      ['il frappa', 'il a frappé', 'passé simple : passé composé'],
      ['il pleuvait', 'il pleuvait', 'l’imparfait reste'],
      ['il était parti', 'il était parti', 'le plus-que-parfait reste'],
      ['elle naquit', 'elle est née', 'être et l’accord'],
      ['il ne dit rien', 'il n’a rien dit', 'rien entre l’auxiliaire et le participe'],
      ['« Oui », répondit-il.', '« Oui », a-t-il répondu.', 'l’incise inverse l’auxiliaire'],
    ]),
    table('sheet-aujourdhui-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucun passé simple ne reste', 'Relis chaque verbe au passé'],
      ['Le participe est le bon', 'Remonte à l’infinitif : prit, prendre, pris'],
      ['L’auxiliaire est le bon', 'Être pour les verbes de mouvement et les pronominaux'],
      ['Le décor n’a pas bougé', 'Les imparfaits sont toujours là'],
      ['L’ordre des faits est le même', 'Le plus-que-parfait reste en arrière'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissions(SECTIONS, DRILL_LIST);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. A passé simple
 *  line has no flashcard drill, so it is never released (corpus §A.3). */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-08-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const TEXTE = (what: string) => `${what}, one voice, read as a page of a book at an unhurried literary pace. Every passé simple is read exactly as written, never modernised and never stressed.`;
const REC_DESC: Record<string, string> = {
  'rec-b2-08-conte': "The tale « Le meunier et la graine » (act 1), one warm storyteller voice, one take, the pace of a bedtime story. The passé simple forms are read with no emphasis: the learner is meant to notice them, not be told. Rose's line and the traveller's words in quotation marks are spoken lightly in character.",
  'rec-b2-08-tom': "Tom and Julie at the coffee machine (act 2), two voices: Tom with a light English accent reading his passé simple lines a little proudly; Julie, a Montréal colleague, amused and friendly. One take, conversational pace.",
  'rec-b2-08-genres': 'The four genre cards (act 2). One voice. Each card line is read in the register of its genre: storyteller, history teacher, biographer, radio documentary.',
  'rec-b2-08-manuel': 'The history textbook page (act 2), one clear teacher voice, one take, the pace of a lesson read aloud. Dates are read in full (mille six cent huit).',
  'rec-b2-08-carnet': "Awa reads her grandfather's travel notebook to her grandmother (act 3), two female voices, warm Dakar French. Awa reads the notebook lines slowly, as someone deciphering handwriting; the grandmother answers simply.",
  'rec-b2-08-er': 'The four -er cards (act 3). One voice. Card four reads parla, parlait, parlera with IDENTICAL rhythm and pitch, so only the endings differ.',
  'rec-b2-08-er-ecoute': `${ONE_TAKE} Eight lines. Lines one to three (parla, parlait, parlera) carry the contrast the questions ask about: read them exactly like the others.`,
  'rec-b2-08-piege-er': "The audio step plays each card's CORRECT modern retelling (passé composé). Six lines, one voice. The wrong readings in promptSound are NEVER spoken.",
  'rec-b2-08-it': 'The four -it cards (act 4). One voice. Card four (tous les soirs, il finit) is read as an ordinary present, with no hint that it could be anything else.',
  'rec-b2-08-noe': "Noé and his tutor Mme Aubert in Geneva (act 5), two voices: a teenager hesitating over the book's lines, a calm Swiss tutor. One take.",
  'rec-b2-08-ut': 'The four -ut cards (act 5). One voice. Read each form so it can be heard beside its participle: lut like lu, reçut like reçu.',
  'rec-b2-08-ut-ecoute': `${ONE_TAKE} Eight lines; the last one is in the passé composé and must sound like ordinary speech, not like a book.`,
  'rec-b2-08-int': 'The four -int cards (act 6). One voice. Card one: vint must sound exactly like vingt.',
  'rec-b2-08-piege-int': "The audio step plays each card's CORRECT modern retelling. Six lines, one voice. The wrong versions (vingt inconnus, ont revenu) are NEVER spoken.",
  'rec-b2-08-biographie': "Hortense Vallier's biography (act 7), one voice in the tone of a museum audio guide, one take. Dates in full. The final quotation from her notebooks is read a little slower.",
  'rec-b2-08-irreg-ecoute': `${ONE_TAKE} Nine lines of irregular passé simple; the questions ask about content (what, where, when), so no form may be slowed down.`,
  'rec-b2-08-palier': "Chloé and her neighbour M. Bertrand in Lausanne (act 8), two voices: a young woman reading the novel's lines, a retired teacher explaining kindly. One take.",
  'rec-b2-08-personne': 'The four person cards (act 8). One voice. Card four (tu parlas, vous parlâtes) is read as a curiosity, lightly.',
  'rec-b2-08-roman': "The novel page « La lettre » (act 9), one voice, one take, a slow and restrained literary reading. The single line of the letter is read quietly. No sob on « Elle ne pleura pas ».",
  'rec-b2-08-plans': 'The four foreground and background cards (act 9). One voice. Card four reads il savait and il sut with the same rhythm.',
  'rec-b2-08-plans-ecoute': `${ONE_TAKE} Nine lines; the last two are B1 background lines in the imparfait and must not sound different from the others.`,
  'rec-b2-08-piege-plans': "The audio step plays each card's CORRECT modern retelling. Six lines, one voice. The wrong versions (il a plu depuis, la porte claquait) are NEVER spoken.",
  'rec-b2-08-retro': "The Berlin press retrospective (act 10), one voice in the style of a radio documentary, one take. The spokesman's words and the Berlin woman's closing quotation are read by the same narrator, lightly set apart.",
  'rec-b2-08-extrait': "The memoir extract « L'été de mes douze ans » (act 11), one male voice, one take, dry and gently ironic, as a writer reading his own book. The last two sentences, in the present-day passé composé, change tone slightly: the adult speaking now.",
  'rec-b2-08-lire': 'The four reading-question cards (act 11). One voice, the tone of an exam coach.',
  'rec-b2-08-lire-ecoute': `${ONE_TAKE} Eight lines read like a radio reading of a novel; the questions are about meaning, so no line is dramatised.`,
  'rec-b2-08-modele': "Léa's message to Hugo (act 12), one young female voice, one take, read as a voice message to a friend: natural, quick, warm. It must sound like speech, because the point is that it contains no passé simple.",
  'rec-b2-08-texte-a3': TEXTE('The Timbuktu travel paragraph (act 3)'),
  'rec-b2-08-texte-a4': TEXTE('The prince and the key (act 4)'),
  'rec-b2-08-texte-a5': TEXTE("Claire's letter (act 5)"),
  'rec-b2-08-texte-a6': TEXTE('The wolves in winter (act 6)'),
  'rec-b2-08-texte-a7': TEXTE('The barn fire (act 7)'),
  'rec-b2-08-texte-a8': TEXTE('The train to Geneva (act 8)'),
  'rec-b2-08-texte-a9': TEXTE('The concert (act 9)'),
  'rec-b2-08-texte-a10': TEXTE('The Tennis Court Oath (act 10)'),
  'rec-b2-08-texte-a11': TEXTE('The surprise test, with its irony audible but never underlined (act 11)'),
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 8',
  intro: 'The passé simple is the tense French books use to move a story forward: tales, novels, history books, biographies and press retrospectives. Nobody says it aloud, and in this lesson you never have to produce it. You learn to recognise it and to translate it in your head. You find out where it lives and where it never goes, then learn the four families of endings and the participle key that unlocks most forms, the twelve irregular forms that carry most narrative, the look-alikes (il finit, il vit, vint and vingt), and who is acting. Then you read it as French narrative works: the passé simple in the foreground, the imparfait in the background. You retell a page in the passé composé without losing a fact, and read a literary extract for its narrator, tone and what it implies. The task: retell a novel page for a friend in 150 to 220 words.',
  skill: 'CE',
  grammarAssumed: [PC_IMP_UNIT, PAIRES_UNIT, INVERSION_UNIT, LECTURE_B1_UNIT, PQP_UNIT],
  grammarIntroduced: [
    'Recognition of the passé simple and its register: written narrative (tales, novels, history books, biographies, press retrospectives), never conversation',
    'The four ending families for recognition: -a / -èrent (all -er verbs), -it / -irent (-ir and most -re verbs), -ut / -urent (pouvoir, devoir, lire, croire, recevoir, vivre), -int / -inrent (venir, tenir and compounds), with the participle as the recognition key',
    'The frequent irregular forms fut, eut, fit, vint, prit, dit, vit, put, dut, mit, naquit, mourut, and the look-alikes (fut and fit, il vit as voir or vivre, vint and vingt, il finit and il dit as present or past)',
    'Person in the passé simple: third person dominance, -rent as third person plural, je and nous forms in first-person narrative, tu and vous forms as rare',
    'The passé simple as narrative foreground beside the imparfait background, including closed long events (resta longtemps) and the interruption frame',
    'Retelling a passé simple text in the passé composé: only the passé simple changes; être verbs and agreement, adverb placement (rien, tout, enfin), the incise (répondit-il becomes a-t-il répondu), the imparfait and plus-que-parfait unchanged; the passé antérieur recognised once',
    'Reading a literary extract for global meaning, detail, inference, narrator, point of view and ironic tone',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Le passé simple, c'est le temps des livres : les contes, les romans, les livres d'histoire, les biographies. Personne ne le dit, et tu n'auras jamais à le produire. Ici, tu apprends à le reconnaître, à retrouver le verbe et la personne derrière chaque forme, à séparer l'événement du décor et à raconter une page au passé composé sans perdre un fait. À la fin, tu racontes à une amie, en 150 à 220 mots, une page de roman qui t'a marqué.",
    minutes: 150,
    difficulty: 3,
    glyph: 'fut',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PS_TERMS,
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
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE, ...ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id)];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, EXTRAIT_TACHE, dicteeFor };
