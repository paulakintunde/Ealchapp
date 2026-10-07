// c1.22.l1 « Traduire des idées » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (decisions 1-40,
// the wave 2 notes, the wave 5 review lessons, the wave 6 brief). Structural
// models: b2.33 « Traduire sans calquer » (`../b2/traduire-sans-calquer-*`,
// recapped once in act 1, never re-taught) and the reviewed C1 workshop c1.11
// (`./rapports-comptes-rendus-*`). Skill PE; no exam task (no mediation task
// type exists).
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (the French side
//   of a translation done well, or a reviser's note, original, about 170 to
//   210 words) and ONE MOVE of the translator, in the same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`;
//                          its FIRST question is always « Devine le sens »;
//                          the English source is quoted in the questions.
//     2. NOTICE THE MOVE   a `tapTable`, `cardDeck` or `examples`.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, listening, dictation).
//     4. USE IT            « Pour ta traduction », always the same groupDrill
//                          shape: an English line and two French versions.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the ONE recap of b2.33; act 12 is the production act (the task and
//   the closing sections). The Fondation Arcelle case runs from act 1 to act
//   11; the task translates ANOTHER text (Fiona's schoolyard op-ed), so the
//   model cannot be copied.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Juste mais faux              6  scene + Odile's revision note · a
//                                       translation with no calque that
//                                       still betrays; ONE recap (B2 33)
//    2  L’idée avant les mots        6  the library paragraph · déverbaliser,
//                                       noun stacks become clauses (cardDeck,
//                                       commonErrors)
//    3  Atténuer comme l’auteur      6  the pilot evaluation · English hedges
//                                       at the same certainty (tapTable,
//                                       trapDrill)
//    4  La retenue anglaise          6  Fiona's email · understatement,
//                                       judged from context (examples,
//                                       listening)
//    5  Le fil du paragraphe         6  the Sunday paragraph · topic sentence
//                                       vs announced path (cardDeck,
//                                       commonErrors)
//    6  Expliciter                   6  the rents brief · implicit links
//                                       spelled out; over-explaining
//                                       (examples, trapDrill)
//    7  Alléger                      6  the speech of thanks · doublets and
//                                       padding (tapTable, dictation)
//    8  L’équivalence culturelle     6  the charity run · idioms, units,
//                                       holidays (tapTable, commonErrors)
//    9  Résumer en traduisant        6  the newsletter summary · thesis,
//                                       thread, attribution (cardDeck,
//                                       listening)
//   10  Changer de public            6  one sentence, three audiences
//                                       (tapTable, trapDrill)
//   11  Relire en traducteur         6  Odile's revision · faux sens,
//                                       contresens, non-sens, omission, ajout
//                                       (cardDeck, hacks)
//   12  Ta traduction               11  the model op-ed · plan, role play,
//                                       TASK, quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11 + 11). Corpus: 139 authored rows
//   (.2200-.2338) in twelve blocks plus 12 reused seed rows (nine of B2 33,
//   two of B2 22, one of C1 6). 12 readings (one per act) and 2
//   listenings. Quiz: 11 rounds of 8. Eleven error triggers, eleven drills,
//   five reference sheets, eleven terms, four tapTables (decision 16).
//   Chapter artwork: `traduire-idees-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Garde ce que le texte fait à son lecteur : l’idée, sa force, son fil ;
//     pour le reste, écris en français. »
//   EN: Keep what the text does to its reader: the idea, its strength, its
//   thread; for the rest, write in French.
//
//   ONE METAPHOR, THE SAME CARGO IN ANOTHER BOAT: idea, force and thread
//   are unloaded and reloaded whole; word order, word classes, idioms and
//   units are the boat. It is NOT « translate the idea, not the sentence »
//   (b2.33 rejected it: nothing is dropped, except in act 9's declared
//   summary), nor « move away from the English » (b2.33's act 11 stands).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    idea-level reformulation (déverbaliser); English hedging and
//           understatement rendered at the same force; paragraph logic
//           (topic sentence vs announced path); explicitation and
//           implicitation; cultural equivalence (idioms, units, holidays);
//           summary across languages; register shifts across audiences;
//           the translator's revision (faux sens, contresens, non-sens,
//           omission, ajout); the translation task.
//   QUOTES  the reframe of lesson 33 in B2 (imported, never retyped) and
//           its rows by id; rows of lesson 22 in B2 and lesson 6 in C1.
//   LEAVES  calques, faux amis, transposition, modulation, étoffement, -ing,
//           numbers and typography to lesson 33 in B2; academic hedging to
//           lesson 22 in B2; politeness and litote in speech to lesson 6 in
//           C1; reprise to lesson 5 in C1; registers to lesson 25 in B1;
//           individual high-level faux amis (opportunité, impacter…) to
//           c1.18, NOT cited (unpublished, same wave).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use tu between colleagues (Odile, Malik)
//   and vous in the documents. Natural, unsimplified C1 French; English
//   authored on every learner string (`en`, or a final « EN: »), never on
//   an answer. Every `say` is French. Citations by trail position in
//   French, never a raw id. Typographic ’ in every authored French string.
//   Usage verdicts sourced (corpus §A.7); where both renderings are correct
//   French, the lesson presents a precision choice, never a rule. Mission
//   answer slots spread by `balanceSlots()` (options and index rotated
//   together, no text changed), the quiz by `spreadSlots()`; no `why` names
//   a position.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. READING LENGTH: the anchor texts run 170 to 210 words (the act 9
//      summary 134, by design), under the C1 note's 300 to 500. Each also
//      carries a translator's note. Lengthen to about 280 before the gate?
//   2. « A BIT OF A PROBLEM »: the lesson gives no fixed equivalent; act 4
//      shows the context deciding between « un petit problème » and « un
//      vrai problème ». Keep this context-first framing?
//   3. PARAGRAPH LOGIC (act 5) is taught as a TENDENCY of French expository
//      writing (Vinay and Darbelnet on articulations), never a law, with the
//      order of ideas always kept. Accept the framing?
//   4. RUBRIC: six criteria, 20 points (decision 14 pattern), model answer
//      about 300 words. Keep the grid?
//   5. The roundup names no next lesson by number (c1.23 is drafted in the
//      same wave). Add « la leçon 23 du C1 » if it publishes with this one?
//   6. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  NOTE_ODILE_TEXT, BIBLIO_TEXT, ETUDE_TEXT, COURRIEL_TEXT, PARAGRAPHE_TEXT, LOYERS_TEXT,
  MERCIS_TEXT, COURSE_TEXT, RESUME_TEXT, ARBRES_TEXT, RELECTURE_TEXT, MODELE_TEXT, TASK_SOURCE_EN,
  B233_REFRAME, B233_REFRAME_EN, B222_REFRAME,
  B233_RULE, B233_CALQUE, B233_CLASSE, B233_COTE, B233_VERBE, B233_TON, B233_LITTERAL,
  B233_RELIRE, B233_LIRE, B222_SUGGERER, B222_MESURE, C106_PERMIS,
  REGISTRES_UNIT, ACADEMIQUE_UNIT, CALQUES_UNIT, ELLIPSE_UNIT, NUANCER_UNIT,
  REGISTRES_REF, ACADEMIQUE_REF, CALQUES_REF, ELLIPSE_REF, NUANCER_REF,
} from './traduire-idees-corpus.ts';
import { TRADUIRE_IDEES_TERMS } from './traduire-idees-terms.ts';

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

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`c1.22: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.22: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.22: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
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

/** THE « USE IT » BEAT: an English line, two French versions. */
function pourTaTraduction(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ta traduction', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — JUSTE MAIS FAUX
 *
 *  The problem: Malik's translation of Fiona's email has no calque and no
 *  error, and the director still misreads the request. Then ONE recap of
 *  lesson 33 in B2, rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

const WRONG_A1 = {
  fr: 'Cela dit, nous pourrions éventuellement revoir le calendrier.',
  ipa: '/sə.la di nu pu.ʁjɔ̃ e.vɑ̃.tɥɛl.mɑ̃ ʁə.vwaʁ lə ka.lɑ̃.dʁi.je/',
  respell: '[suh-la DEE | noo poo-RYOHⁿ ay-vahⁿ-twel-MAHⁿ | ruh-VWAR luh ka-lahⁿ-dree-YAY]',
  en: 'That said, we might want to revisit the timeline.',
};

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une traduction sans faute', frSub: 'Le courriel de Fiona',
  setting: { place: 'Service de traduction, Fondation Arcelle', city: 'Montréal', time: '9 h 10', ambience: 'deux écrans côte à côte, l’anglais à gauche, le français à droite, un café qui refroidit' },
  beats: [
    { kind: 'narration', text: 'Montréal, Fondation Arcelle, qui étudie la vie en ville. Tu entres au service de traduction : le bureau de Toronto écrit en anglais, tu fais passer ses textes en français. Odile Vézina, la réviseure, te montre une version de ton collègue Malik.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Odile', fr: 'Lis la traduction de Malik. Pas un calque, pas une faute.', en: 'Read Malik’s translation. Not one calque, not one mistake.', respell: '[lee la tra-dük-SYOHⁿ duh ma-LEEK | pa-zuhⁿ KALK | pa-zünn FOHT]', stage: 'Elle fait pivoter l’écran vers toi.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'C’est vrai, tout est correct. Où est le problème, alors.', en: 'It’s true, it’s all correct. So where is the problem.', respell: '[seh VREH | too-teh ko-REKT | oo eh luh pro-BLEMM | al-LOR]', stage: 'Tu relis la dernière phrase deux fois.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Odile', fr: 'La directrice l’a lue et elle a cru qu’on pouvait attendre l’automne. Fiona voulait le contraire.', en: 'The director read it and thought we could wait until autumn. Fiona wanted the opposite.', respell: '[la dee-rek-TREESS la LÜ | ay el a KRÜ | kohⁿ poo-veh a-tahⁿdr loh-TOHNN | fyo-NA voo-leh luh kohⁿ-TREHR]', stage: 'Elle souligne une phrase en anglais : « That said, we might want to revisit the timeline. »', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Odile te demande de reprendre cette seule phrase, en gardant ce que Fiona voulait dire à son lecteur.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle version envoies-tu ?', size: 'lg',
      options: [
        { fr: WRONG_A1.fr, respell: WRONG_A1.respell, en: WRONG_A1.en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(2201)).fr, respell: rsOf(E(2201)), en: src(E(2201)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'La directrice lit « il conviendrait toutefois de revoir le calendrier » et inscrit le point à la réunion de lundi. La politesse de Fiona est intacte, et sa demande arrive entière.',
        breaks: 'La directrice lit une hypothèse lointaine et classe le courriel. Trois semaines plus tard, Fiona écrit de nouveau, beaucoup moins poliment.',
      },
    },
    {
      kind: 'break', heading: 'Les mots, ou ce qu’ils font',
      body: `${Cap(CALQUES_REF)} t’a appris à chasser le calque. Ici, il n’y en a pas, et la phrase échoue quand même : elle a perdu sa force. EN: No calque here, and the sentence still fails: it lost its force.`,
      wrong: WRONG_A1,
      right: { fr: src(E(2201)).fr, ipa: ipaOf(E(2201)), respell: rsOf(E(2201)), en: src(E(2201)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend à traduire des idées : la phrase entière, la force des précautions et de la retenue, le fil d’un paragraphe, les liens, les références, le résumé et le public. À la fin, tu traduiras une tribune de Fiona.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['force'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Traduire l’idée et sa force', s: 'Actes 2 à 4 : déverbaliser, les précautions, la retenue anglaise' },
    { t: 'Garder le fil', s: 'Actes 5 à 7 : le paragraphe, expliciter, alléger' },
    { t: 'Penser au lecteur', s: 'Actes 8 à 10 : les références culturelles, le résumé, le public' },
    { t: 'Relire et traduire un texte entier', s: 'Actes 11 et 12 : la relecture, puis ta traduction' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'La note d’Odile', frSub: 'Une traduction propre qui se trompe',
  text: NOTE_ODILE_TEXT,
  glossary: [
    { word: 'enchaîne', en: 'strings together', note: 'Met à la suite, l’une après l’autre.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « la directrice l’a lue de travers ». Que veut dire « de travers » ici ?', a: 'Mal, dans un sens qui n’est pas le bon : elle a compris autre chose que ce que Fiona voulait dire.' },
    { q: 'Pourquoi Odile dit-elle que la version de Malik est « propre » ?', a: 'Elle n’a ni calque, ni faute, et sa ponctuation est française.' },
    { q: 'Qu’est-ce que la phrase de Malik a perdu ?', a: 'Sa force : chez Fiona, la tournure polie est une demande ferme ; en français, « nous pourrions éventuellement » sonne comme une hypothèse lointaine.' },
    { q: 'Quel problème Odile voit-elle dans les trois phrases courtes ?', a: 'L’anglais les enchaîne sans liaison et le lecteur voit la cause ; en français, il ne voit qu’une liste. Le fil s’est perdu.' },
    { q: 'Que reproche Odile à « sans aucun doute » pour « arguably » ?', a: 'Cela rend Fiona plus sûre qu’elle ne l’est : la certitude a changé.' },
    { q: 'Que propose Odile, et pourquoi ?', a: '« Il conviendrait toutefois de revoir le calendrier » : la politesse reste, la demande arrive.' },
  ],
  audio: REC('rec-c1-22-note'), say: REFRAME, terms: ['force', 'paragraphe'],
};

/** THE ONE RECAP of lesson 33 in B2: rows reused by id, its reframe imported. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: `${Cap(CALQUES_REF)}, en un rappel`,
  groups: [
    grp('Sans calquer', [
      it(B233_RULE, 'la règle de la leçon'),
      it(B233_CALQUE, 'le calque'),
      it(B233_LITTERAL, 'quand le mot à mot est juste'),
    ], chk(`${Cap(CALQUES_REF)} jugeait une traduction à une question. Laquelle ?`, ['Un francophone l’aurait-il écrit ainsi ?', 'Chaque mot anglais a-t-il son mot français ?'], 0,
      `« ${B233_REFRAME} » Cette leçon garde la question et va plus loin : au-delà des mots, l’idée, la force et le fil. EN: ${B233_REFRAME_EN}`)),
    grp('Les procédés', [
      it(B233_CLASSE, 'la transposition'),
      it(B233_COTE, 'la modulation'),
      it(B233_VERBE, 'l’étoffement'),
      it(B233_TON, 'le ton'),
    ], chk('Ces procédés travaillent surtout à l’échelle...', ['du mot et de la phrase', 'du texte entier et de son lecteur'], 0,
      'Au B2, tu réparais des mots et des phrases. Au C1, tu traduis un raisonnement entier, pour un lecteur précis. EN: from words and sentences to whole texts.')),
  ],
  audio: AUDIO, say: REFRAME, terms: ['force'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Une collègue anglophone demande quelque chose, très poliment', fr: src(E(2206)).fr, en: src(E(2206)).en },
    { situation: 'Ta traduction est correcte, mais on la comprend mal', fr: src(E(2208)).fr, en: src(E(2208)).en },
    { situation: 'Avant de livrer, tu te poses une seule question', fr: src(E(2203)).fr, en: src(E(2203)).en },
    { situation: 'Un rapport traduit sera lu par une décideuse', fr: src(E(2207)).fr, en: src(E(2207)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['force'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le problème', 'Pourquoi la version de Malik a-t-elle échoué ?', ['Elle a perdu la force de la demande.', 'Elle contenait un calque.', 'Elle avait des fautes d’accord.'], 0,
    'Tout était correct ; c’est la force qui manquait. EN: correct, but the force was lost.'),
  ctl('Les trois choses', 'Un texte porte à son lecteur...', ['une idée, une force et un fil', 'des mots, une ponctuation et une longueur', 'un auteur, une date et un titre'], 0,
    'Ce sont les trois choses à garder ; le reste peut changer. EN: idea, force, thread.'),
  ctl('La mission', 'À la fin de la leçon, tu vas...', ['corriger une liste de faux amis', 'traduire une tribune anglaise en français naturel', 'écrire un résumé en anglais'], 1,
    'Un texte de Fiona, de 200 à 300 mots, à rendre en français. EN: an op-ed into natural French.'),
], ['force']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Juste mais faux',
    opener: {
      line: 'Pas un calque, pas une faute, et pourtant la directrice se trompe : ici tu découvres ce qu’un texte fait à son lecteur. EN: Not one calque, not one mistake, and still the director gets it wrong: here you find out what a text does to its reader.',
      imageRef: 'lessons/traduire-idees/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’une traduction sans faute peut trahir l’idée, la force ou le fil du texte. EN: You know a flawless translation can still betray the idea, the force or the thread.',
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L’IDÉE AVANT LES MOTS
 *
 *  TEXT: the French version of Fiona's library paragraph. MOVE: read to the
 *  full stop, close the English, say the idea (déverbaliser); noun stacks
 *  become clauses; one sentence may become two.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Ouvrir la bibliothèque le soir', frSub: 'Un paragraphe dense, deux paragraphes clairs',
  text: BIBLIO_TEXT,
  glossary: [
    { word: 'exigus', en: 'cramped', note: 'Trop petits pour le nombre de personnes qui y vivent.' },
  ],
  questions: [
    { q: 'Devine le sens : « Tout n’est pas réglé pour autant ». Que veut dire « pour autant » ici ?', a: 'Malgré cela : le succès n’empêche pas qu’il reste des problèmes.' },
    { q: 'D’où venait l’idée d’ouvrir le soir ?', a: 'Des familles du quartier : beaucoup de parents travaillent tard.' },
    { q: 'Qu’est-ce qui a surpris les bibliothécaires ?', a: 'Les nouveaux visiteurs : quatre sur dix ont moins de vingt-cinq ans et viennent étudier seuls.' },
    { q: 'Comment le texte explique-t-il ce succès auprès des jeunes ?', a: 'Les logements du quartier sont exigus ; il est difficile d’y trouver un coin tranquille.' },
    { q: 'Que dit la note du traducteur de l’original ?', a: 'Un seul paragraphe de six phrases denses, dont une alignait cinq noms ; le français a pris deux paragraphes et des verbes.' },
    { q: 'Le traducteur a-t-il supprimé une idée ?', a: 'Non : il a changé la forme (paragraphes, verbes), pas le contenu.' },
  ],
  audio: REC('rec-c1-22-biblio'), say: REFRAME, terms: ['deverbaliser'],
};

const A2_METHODE: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a2-methode', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-methode',
  title: 'Lire, fermer, dire, vérifier', frSub: 'Déverbaliser',
  hint: 'Quatre cartes. Regarde ce qui reste quand l’anglais disparaît.',
  audio: AUDIO, say: REFRAME, terms: ['deverbaliser'],
  cards: [
    { head: 'Lire jusqu’au point', label: 'comprendre', fr: src(E(2209)).fr, sub: rsOf(E(2209)),
      body: 'Une phrase anglaise se comprend entière : le verbe principal arrive parfois tard. Ne traduis pas en lisant. EN: understand the whole sentence before translating.' },
    { head: 'Dire l’idée', label: 'déverbaliser', fr: src(E(2210)).fr, sub: rsOf(E(2210)),
      body: 'L’anglais fermé, tu dis l’idée simplement, comme à une collègue. C’est ce qu’on appelle déverbaliser. EN: say the idea with the English out of sight.' },
    { head: 'Un nom empilé, un verbe', label: 'reformuler', fr: src(E(2217)).fr, sub: rsOf(E(2217)),
      body: '« Low-income tenant displacement » : cinq mots sans verbe. Le français préfère souvent une proposition : qui fait quoi. EN: a noun stack often becomes a clause.' },
    { head: 'Rien ne manque', label: 'vérifier', fr: src(E(2219)).fr, sub: rsOf(E(2219)),
      body: 'Puis tu reprends l’anglais : chaque idée doit être là, et rien de plus. EN: then check every idea against the source.' },
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Cinq noms, une phrase', frSub: 'De nouveaux exemples',
  groups: [
    grp('Des groupes nominaux anglais, rendus en français', [
      it(E(2211), 'Rent-driven household out-migration'),
      it(E(2213), 'Transit-poor neighbourhoods'),
      it(E(2212), 'Evening opening … family demand'),
    ], chk('Qu’ont fait ces trois traductions ?', ['Elles ont dit l’idée avec un verbe.', 'Elles ont gardé l’ordre des mots anglais.'], 0,
      'Chassés, desservis, demandaient : un verbe dit qui fait quoi. EN: a verb says who does what.')),
    ctl('Une phrase, deux phrases', 'L’anglais tient une idée longue en une phrase. Peux-tu en faire deux en français ?', ['Oui, si toutes les idées restent.', 'Non, jamais.'], 0,
      'La forme change ; le contenu reste entier. EN: yes, as long as nothing is lost.'),
    ctl('Le bon moment', 'Quand traduis-tu une phrase longue ?', ['quand tu l’as comprise jusqu’au point', 'mot par mot, en lisant'], 0,
      'Comprendre d’abord, écrire ensuite. EN: understand first.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['deverbaliser'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a2-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre traductions qui suivent les mots',
  errors: [
    { wrong: 'La migration de sortie des ménages motivée par les loyers depuis le centre s’accélère.', right: src(E(2211)).fr,
      why: 'On veut garder chaque mot de l’anglais, dans son ordre. Le français obtenu est correct mais illisible : dis l’idée, avec un verbe. EN: every word kept, the idea lost.' },
    { wrong: 'Les quartiers pauvres en transport en commun sont aussi pauvres en revenu.', right: src(E(2213)).fr,
      why: 'Le jeu de mots anglais (transit-poor, income-poor) ne passe pas ; l’idée, elle, passe très bien. EN: the wordplay does not carry, the idea does.' },
    { wrong: 'L’ouverture du soir sera maintenue suite à la demande familiale.', right: src(E(2212)).fr,
      why: 'Des noms en série, une « demande familiale » qui n’existe pas : remets des gens et un verbe. EN: put people and a verb back.' },
    { wrong: 'Le risque est le déplacement des locataires à faible revenu.', right: src(E(2217)).fr,
      why: 'Correct, mais « déplacement » est trop vague en français ; l’idée est qu’ils perdent leur logement. EN: say what actually happens to them.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['deverbaliser'],
};

const A2_VERSION = pourTaTraduction('a2-version', 'Une phrase de Fiona', [
  grp('« Low-income tenant displacement risk is rising. »', [
    free('Le risque de déplacement des locataires à faible revenu augmente.', 'Low-income tenant displacement risk is rising.', 'les mots, dans l’ordre'),
    free('Les locataires modestes risquent de plus en plus de perdre leur logement.', 'Low-income tenant displacement risk is rising.', 'l’idée'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'Un sujet, un verbe, une idée claire : le lecteur comprend d’un coup. EN: subject, verb, clear idea.')),
  grp('Ta méthode', [
    it(E(2218), 'la liberté'),
    it(E(2214), 'le piège'),
  ], chk('Tu bloques sur une phrase de quarante mots. Tu...', ['fermes l’anglais et dis l’idée en deux phrases', 'traduis chaque mot puis remets de l’ordre'], 0,
    'Déverbaliser, puis vérifier que rien ne manque. EN: deverbalise, then check.')),
], ['deverbaliser']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La méthode', 'Déverbaliser, c’est...', ['garder l’idée et lâcher les mots anglais', 'supprimer les idées difficiles', 'traduire plus vite'], 0,
    'L’idée reste entière ; seule la forme change. EN: keep the idea, drop the words.'),
  ctl('Le groupe nominal', 'Cinq noms anglais d’affilée deviennent souvent...', ['une proposition avec un verbe', 'cinq noms français dans le même ordre'], 0,
    'Le verbe dit qui fait quoi. EN: a clause with a verb.'),
  ctl('Le contrôle', 'Après avoir écrit l’idée, tu...', ['vérifies dans l’anglais que rien ne manque', 'envoies sans relire', 'ajoutes un exemple'], 0,
    'Rien d’oublié, rien d’ajouté. EN: nothing missing.'),
], ['deverbaliser']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’idée avant les mots',
    opener: {
      line: 'Cinq noms anglais d’affilée, et aucune phrase française ne les suit : ici tu fermes l’anglais pour dire l’idée. EN: Five English nouns in a row, and no French sentence can follow them: here you close the English and say the idea.',
      imageRef: 'lessons/traduire-idees/act02.jpg',
    },
    sections: [],
    milestone: 'Tu comprends une phrase anglaise entière, puis tu dis son idée en français, avec un verbe. EN: You understand a whole English sentence, then say its idea in French, with a verb.',
    estScreens: 33, restPoints: ['a2-methode'],
  },
  sections: [A2_LECTURE, A2_METHODE, A2_TRIER, A2_ERREURS, A2_VERSION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — ATTÉNUER COMME L’AUTEUR
 *
 *  TEXT: the pilot evaluation, hedged as the English was. MOVE: each English
 *  hedge at the same degree of certainty; one French hedge where English
 *  stacks three. Lesson 22 in B2 owns the French hedges; lesson 6 in C1
 *  owns hedging in speech.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Ce que disent les chiffres', frSub: 'Prudent comme l’original',
  text: ETUDE_TEXT,
  glossary: [
    { word: 'gonflé', en: 'inflated', note: 'Rendu plus grand qu’il ne l’est vraiment.' },
  ],
  questions: [
    { q: 'Devine le sens : « une piste que l’étude ne permet pas d’isoler ». Que veut dire « isoler » ici ?', a: 'Séparer un facteur des autres pour mesurer son effet seul.' },
    { q: 'Le texte affirme-t-il que les horaires expliquent la hausse ?', a: 'Non : les données « semblent indiquer » un lien ; c’est une hypothèse prudente.' },
    { q: 'Quelles deux raisons invitent à la prudence ?', a: 'La période des examens, qui a pu gonfler les chiffres, et la gratuité des ateliers, introduite au même moment.' },
    { q: 'Comment le traducteur a-t-il rendu « arguably » ?', a: '« On peut soutenir que » : une thèse défendable, pas une certitude.' },
    { q: 'Que dit la note du traducteur des précautions anglaises ?', a: 'L’anglais les empilait ; il en a gardé une par idée, au même degré de certitude.' },
    { q: 'La conclusion est-elle plus sûre ou moins sûre que l’original ?', a: 'Ni l’un ni l’autre : « ne permettent pas de conclure sur le long terme » garde la prudence de Fiona.' },
  ],
  audio: REC('rec-c1-22-etude'), say: REFRAME, terms: ['attenuation', 'force'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-force',
  title: 'Six précautions anglaises', frSub: 'Le même degré de certitude',
  cols: ['Anglais', 'Français', 'Ce que ça dit'],
  rows: [
    { cells: ['arguably', 'on peut soutenir que', 'une thèse défendable'],
      say: src(E(2221)).fr,
      detail: { title: 'Arguably', body: 'Le Larousse propose « on pourrait dire » ou « on peut soutenir que ». « Sans aucun doute » force la certitude ; « sans doute » la rapproche de « probablement ». EN: a defensible claim, not a certainty.', say: src(E(2222)).fr } },
    { cells: ['tend to', 'avoir tendance à', 'souvent, pas toujours'],
      say: src(E(2223)).fr,
      detail: { title: 'Tend to', body: 'Une régularité, pas une loi. Ne traduis pas par « venir toujours ». EN: a tendency, not a rule.', say: src(E(2224)).fr } },
    { cells: ['would seem to suggest', 'semble indiquer', 'une hypothèse'],
      say: src(E(2220)).fr,
      detail: { title: 'Would seem to suggest', body: 'Trois précautions en anglais, une seule suffit en français pour le même degré de prudence. EN: one French hedge for three English ones.', say: src(B222_SUGGERER).fr } },
    { cells: ['to some extent', 'dans une certaine mesure', 'en partie'],
      say: src(E(2225)).fr,
      detail: { title: 'To some extent', body: `L’expression vient de ${ACADEMIQUE_REF} ; tu la connais déjà. Ici, tu la reconnais derrière l’anglais. EN: already known; recognise it behind the English.`, say: src(B222_MESURE).fr } },
    { cells: ['it may be worth', 'il serait peut-être utile de', 'une suggestion prudente'],
      say: src(E(2228)).fr,
      detail: { title: 'It may be worth', body: 'Une suggestion, pas un ordre. Le conditionnel et « peut-être » gardent la retenue. EN: a cautious suggestion.', say: src(E(2228)).fr } },
    { cells: ['inconclusive', 'ne permettent pas de conclure', 'aucune preuve'],
      say: src(E(2229)).fr,
      detail: { title: 'Inconclusive', body: 'Un adjectif anglais, une tournure française avec un verbe. Le sens : on ne peut rien affirmer. EN: nothing can be claimed.', say: src(E(2230)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['attenuation'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Ni plus sûr, ni moins sûr', frSub: 'De nouvelles phrases',
  groups: [
    grp('Une hypothèse, rendue comme hypothèse', [
      it(E(2226), 'deux précautions, une seule'),
      it(E(2230), 'ce que l’étude ne dit pas'),
      it(C106_PERMIS, `vu dans ${NUANCER_REF}`),
    ], chk('« The data may possibly suggest a link. » Laquelle garde la certitude ?', ['Les données semblent indiquer un lien.', 'Les données prouvent un lien.', 'Les données pourraient peut-être éventuellement suggérer un lien.'], 0,
      'Une précaution, bien placée : ni preuve, ni brouillard. EN: one hedge, well placed.')),
    ctl('Arguably', '« Arguably, the hours mattered most. » Laquelle force la certitude ?', ['Sans aucun doute, les horaires ont compté le plus.', 'On peut soutenir que les horaires ont compté le plus.'], 0,
      '« Sans aucun doute » transforme une thèse défendable en évidence. EN: it overstates.'),
    ctl('Le contraire', '« It is clear that the pilot worked. » Laquelle affaiblit l’original ?', ['Il se pourrait que l’essai ait fonctionné.', 'Il est clair que l’essai a fonctionné.'], 0,
      'L’auteure était sûre ; ne lui prête pas un doute. EN: do not add doubt either.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['attenuation', 'force'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a3-piege', layer: 'core', swipe: true,
  title: 'Six précautions mal dosées',
  rule: {
    title: 'Le même degré de certitude',
    body: 'Une précaution traduite trop fort fait mentir l’auteur ; trois précautions traduites mot à mot noient sa phrase. Vise le même degré de certitude, souvent avec une seule précaution. EN: The same certainty, often with a single hedge.',
  },
  cards: [
    { promptLabel: 'trop sûr', promptSound: 'Sans aucun doute, la gratuité a joué un rôle.',
      fr: src(E(2221)).fr, ipa: ipaOf(E(2221)),
      tip: '« Arguably » propose une thèse ; il ne la prouve pas. EN: arguably is not certainty.' },
    { promptLabel: 'trois précautions', promptSound: 'Il se pourrait peut-être éventuellement que la météo ait faussé les chiffres.',
      fr: src(E(2226)).fr, ipa: ipaOf(E(2226)),
      tip: 'Une seule tournure porte le doute. EN: one hedge carries the doubt.' },
    { promptLabel: 'une loi', promptSound: 'Les jeunes lecteurs viennent toujours le soir.',
      fr: src(E(2223)).fr, ipa: ipaOf(E(2223)),
      tip: '« Tend to » dit une régularité, pas « toujours ». EN: a tendency.' },
    { promptLabel: 'un ordre', promptSound: 'Il faut revoir la méthode.',
      fr: src(E(2228)).fr, ipa: ipaOf(E(2228)),
      tip: '« It may be worth » suggère ; il n’ordonne pas. EN: a suggestion.' },
    { promptLabel: 'une preuve', promptSound: 'Ces résultats prouvent un lien avec les horaires.',
      fr: src(E(2220)).fr, ipa: ipaOf(E(2220)),
      tip: '« Would seem to suggest » : une hypothèse, une seule précaution en français. EN: a hypothesis.' },
    { promptLabel: 'le brouillard', promptSound: 'Ces chiffres ne semblent peut-être pas vraiment permettre de conclure.',
      fr: src(E(2229)).fr, ipa: ipaOf(E(2229)),
      tip: 'L’anglais était net : « inconclusive ». Le français aussi. EN: crisp source, crisp French.' },
  ],
  drill: [
    { promptSay: '« Arguably » : … que la gratuité a joué un rôle.', opts: ['On peut soutenir', 'Il est évident'], correct: 0 },
    { promptSay: '« Younger readers tend to come » : les jeunes lecteurs … venir le soir.', opts: ['ont tendance à', 'doivent'], correct: 0 },
    { promptSay: '« would seem to suggest » : ces résultats … un lien.', opts: ['semblent indiquer', 'démontrent'], correct: 0 },
    { promptSay: '« It may be worth » : il … peut-être utile de revoir la méthode.', opts: ['serait', 'faut'], correct: 0 },
    { promptSay: '« inconclusive » : ces chiffres ne permettent pas de … .', opts: ['conclure', 'commencer'], correct: 0 },
    { promptSay: '« To some extent » : dans une certaine … .', opts: ['mesure', 'façon de parler'], correct: 0 },
    { promptSay: 'Trois précautions anglaises : en français, souvent … .', opts: ['une seule', 'trois aussi'], correct: 0 },
    { promptSay: 'Je garde le degré de … de l’auteur.', opts: ['certitude', 'politesse'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le même degré de certitude' },
    { label: 'Six cartes', kind: 'cards', title: 'Trop sûr, trop flou' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six versions justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-22-piege-attenuer'), say: REFRAME, terms: ['attenuation'],
};

const A3_VERSION = pourTaTraduction('a3-version', 'Une conclusion de Fiona', [
  grp('« The pilot was, to some extent, a success. »', [
    free('L’essai a été un succès complet.', 'The pilot was, to some extent, a success.', 'trop sûr'),
    free('Dans une certaine mesure, l’essai a été un succès.', 'The pilot was, to some extent, a success.', 'la même prudence'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'Fiona nuance ; ta traduction aussi. EN: she qualifies, so do you.')),
  grp('Ta règle', [
    it(E(2231), 'ni plus ni moins'),
  ], chk(`${Cap(ACADEMIQUE_REF)} t’a donné les précautions françaises. Ici, tu apprends à...`, ['les choisir pour rendre celles de l’anglais', 'en ajouter partout'], 0,
    `« ${B222_REFRAME} » Le traducteur ajoute : jamais plus sûr, ni moins sûr, que l’auteur. EN: never surer, nor less sure, than the author.`)),
], ['attenuation']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Arguably', '« Arguably » se rend bien par...', ['on peut soutenir que', 'sans aucun doute', 'il est faux que'], 0,
    'Une thèse défendable (Larousse). EN: one can argue that.'),
  ctl('Le dosage', '« may possibly suggest » : combien de précautions en français ?', ['souvent une seule', 'toujours trois'], 0,
    'Le même degré de certitude, sans brouillard. EN: often just one.'),
  ctl('Le principe', 'Le traducteur rend...', ['le degré de certitude de l’auteur', 'sa propre opinion', 'la version la plus prudente possible'], 0,
    'Ni plus, ni moins. EN: the author’s certainty.'),
], ['attenuation']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Atténuer comme l’auteur',
    opener: {
      line: 'Fiona n’affirme rien qu’elle ne puisse prouver : ici tu rends ses précautions, ni plus fortes, ni plus faibles. EN: Fiona claims nothing she cannot prove: here you render her hedges, no stronger and no weaker.',
      imageRef: 'lessons/traduire-idees/act03.jpg',
    },
    sections: [],
    milestone: 'Tu rends une précaution anglaise au même degré de certitude, souvent avec une seule tournure française. EN: You render an English hedge at the same degree of certainty, often with a single French phrase.',
    estScreens: 34, restPoints: ['a3-table'],
  },
  sections: [A3_LECTURE, A3_TABLE, A3_TRIER, A3_PIEGE, A3_VERSION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA RETENUE ANGLAISE
 *
 *  TEXT: Fiona's email, rendered with its real force. MOVE: keep the French
 *  litote when it reads the same; convey the real force when it would be
 *  read literally; the context decides. Lesson 6 in C1 owns understatement
 *  in speech.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Le courriel de Fiona', frSub: 'Poli, et pourtant ferme',
  text: COURRIEL_TEXT,
  glossary: [
    { word: 'peu judicieux', en: 'unwise', note: 'Pas très sensé, mal choisi.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’accueil réservé aux ateliers ». Que veut dire « accueil » ici ?', a: 'La façon dont le public a reçu les ateliers : s’il les a appréciés.' },
    { q: 'Quelle litote anglaise le traducteur a-t-il gardée telle quelle ?', a: '« Nous ne sommes pas mécontents » : la litote existe en français et produit le même effet.' },
    { q: 'Pourquoi « un vrai problème » et pas « un petit problème » ?', a: 'Parce que Fiona annonce ensuite l’annulation de deux ateliers : le problème est sérieux.' },
    { q: 'Que veut vraiment dire Fiona sur le calendrier ?', a: 'Elle le refuse : elle propose d’avancer l’enquête à mai.' },
    { q: 'La version française est-elle impolie ?', a: 'Non : « me paraît peu judicieux », « je proposerais », « il conviendrait » gardent la politesse.' },
    { q: 'Qu’est-ce qui a guidé le traducteur ?', a: 'La suite du courriel : elle montre la vraie force des phrases retenues.' },
  ],
  audio: REC('rec-c1-22-courriel'), say: REFRAME, terms: ['retenue', 'force'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core',
  title: 'Garder ou rendre la force', frSub: 'Le contexte décide',
  examples: [
    ex(E(2238), 'La litote existe en français et dit la même chose : on la garde.'),
    ex(E(2235), 'Même mécanisme en français : « pas mal du tout » est un compliment.'),
    ex(E(2233), 'Si le problème est vraiment petit, le mot à mot convient.'),
    ex(E(2234), 'Si la suite montre que c’est grave, on rend la gravité, poliment.'),
    ex(E(2232), 'La retenue peut rester ; c’est la suite qui dira s’il s’agit d’un refus.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['retenue'],
};

/** THE EAR MISSION: Odile's voice message, eight lines, one take. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Le message d’Odile', frSub: 'Un message vocal, une écoute',
  lines: [ln(E(2240)), ln(E(2241)), ln(E(2242)), ln(E(2243)), ln(E(2244)), ln(E(2245)), ln(E(2246)), ln(E(2247))],
  questions: [
    { q: 'De quoi parle Odile ?', opts: ['du courriel de Fiona', 'd’un rapport sur les loyers', 'de la course de la Fondation'], correct: 0,
      why: 'Elle le dit dès la première phrase. EN: Fiona’s email.' },
    { q: 'Qu’est-ce qui montre que le problème de budget est sérieux ?', opts: ['Fiona annule deux ateliers juste après.', 'Fiona écrit en majuscules.', 'Odile n’en sait rien.'], correct: 0,
      why: 'La phrase suivante donne la vraie force. EN: the next sentence.' },
    { q: 'Que risque-t-on avec « un petit problème » ?', opts: ['que la directrice croie que tout va bien', 'que Fiona se fâche contre Odile'], correct: 0,
      why: 'Le lecteur français prendrait la retenue au pied de la lettre. EN: read literally.' },
    { q: 'Que conseille Odile ?', opts: ['garder la politesse et rendre la gravité', 'traduire mot à mot', 'supprimer la phrase'], correct: 0,
      why: 'La force, oui ; la brutalité, non. EN: keep politeness, convey gravity.' },
    { q: 'Que veut dire « pas entièrement convaincue » chez Fiona, selon Odile ?', opts: ['un refus poli', 'un accord enthousiaste'], correct: 0,
      why: 'Odile connaît Fiona et lit la suite : c’est un non. EN: a polite no.' },
  ],
  audio: REC('rec-c1-22-odile'), say: REFRAME, terms: ['retenue'],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-trier', layer: 'core', size: 'lg',
  title: 'Garder ou défaire la litote', frSub: 'De nouveaux contextes',
  groups: [
    grp('Des litotes qui passent telles quelles', [
      it(E(2235), 'not bad at all'),
      it(E(2236), 'not the happiest of ideas'),
    ], chk('Pourquoi garder ces litotes ?', ['Le français les lit avec la même force.', 'Il est interdit de les changer.'], 0,
      'Même mécanisme, même effet : rien à défaire. EN: same effect in French.')),
    ctl('Le contexte', '« The venue is a bit small. » La phrase suivante : « We will have to turn half the guests away. » Tu écris...', ['La salle est nettement trop petite.', 'La salle est un peu petite.'], 0,
      'Refuser la moitié des invités : la salle est bien trop petite. La suite décide. EN: the next sentence decides.'),
    ctl('L’autre contexte', '« The venue is a bit small. » La suite : « but it will feel cosy. » Tu écris...', ['La salle est un peu petite.', 'La salle est nettement trop petite.'], 0,
      'Ici, le problème est vraiment léger : le mot à mot convient. EN: here it is truly minor.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['retenue'],
};

const A4_VERSION = pourTaTraduction('a4-version', 'La réponse sur le budget', [
  grp('« The budget is a bit of a problem: we will have to cancel two workshops. »', [
    free('Le budget pose un petit problème : nous devrons annuler deux ateliers.', 'The budget is a bit of a problem: we will have to cancel two workshops.', 'la retenue prise au mot'),
    free('Le budget pose un vrai problème : nous devrons annuler deux ateliers.', 'The budget is a bit of a problem: we will have to cancel two workshops.', 'la force rendue'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'Deux ateliers annulés : le lecteur français doit entendre la gravité. EN: convey the gravity.')),
  grp('Ta méthode', [
    it(E(2239), 'avant de choisir'),
  ], chk('Avant de choisir la force d’une phrase retenue, tu...', ['lis la suite du texte', 'choisis la version la plus forte'], 0,
    'La suite dit ce que la retenue voulait dire. EN: read on.')),
], ['retenue']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La litote', '« We are not unhappy » se rend par...', ['nous ne sommes pas mécontents', 'nous sommes ravis', 'nous sommes tristes'], 0,
    'La litote existe en français : on la garde. EN: keep it.'),
  ctl('Le guide', 'Pour décider de la force d’une phrase retenue, tu regardes...', ['le contexte, souvent la phrase suivante', 'la longueur de la phrase'], 0,
    'Le contexte dit ce que l’auteur voulait dire. EN: the context.'),
  ctl('La limite', 'Rendre la force, c’est...', ['dire la gravité en restant poli', 'devenir brutal', 'ajouter un avis'], 0,
    'La politesse de l’auteur fait aussi partie du texte. EN: firm, still polite.'),
], ['retenue']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La retenue anglaise',
    opener: {
      line: '« A bit of a problem » peut annoncer deux ateliers annulés : ici tu lis la retenue anglaise et tu choisis la force juste. EN: “A bit of a problem” can announce two cancelled workshops: here you read English understatement and choose the right strength.',
      imageRef: 'lessons/traduire-idees/act04.jpg',
    },
    sections: [],
    milestone: 'Tu gardes une litote quand le français la lit pareil, et tu rends la vraie force quand le contexte l’exige. EN: You keep an understatement when French reads it the same way, and convey its real force when the context requires it.',
    estScreens: 34, restPoints: ['a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_ECOUTE, A4_TRIER, A4_VERSION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE FIL DU PARAGRAPHE
 *
 *  TEXT: the Sunday-opening paragraph, signposted. MOVE: the order of ideas
 *  and the thesis kept; the announcement and the articulations written in.
 *  A tendency of French expository prose, never a law.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'Pourquoi ouvrir le dimanche', frSub: 'Un chemin annoncé',
  text: PARAGRAPHE_TEXT,
  glossary: [
    { word: 'à titre d’essai', en: 'on a trial basis', note: 'Pour voir si cela marche, sans engagement définitif.' },
  ],
  questions: [
    { q: 'Devine le sens : « qui en assure la surveillance ». Que veut dire « en assurer la surveillance » ?', a: 'Se charger de surveiller les locaux.' },
    { q: 'Quelle phrase annonce le chemin du paragraphe ?', a: '« Trois raisons expliquent la proposition de l’équipe. »' },
    { q: 'Quels mots marquent les trois raisons ?', a: '« La première », « La deuxième, plus décisive », « Reste une dernière raison ».' },
    { q: 'Que fait le mot « Or » dans le texte ?', a: 'Il introduit un fait qui relance l’argument : ces horaires ne conviennent toujours pas aux familles.' },
    { q: 'Où l’anglais plaçait-il sa conclusion ?', a: 'En tête, dans sa phrase principale ; le français la donne à la fin, après « C’est pourquoi ».' },
    { q: 'Le traducteur a-t-il changé la thèse ou l’ordre des raisons ?', a: 'Non : il a ajouté des repères, sans toucher aux idées.' },
  ],
  audio: REC('rec-c1-22-paragraphe'), say: REFRAME, terms: ['paragraphe'],
};

const A5_REPERES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a5-reperes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-fil',
  title: 'Les repères du lecteur français', frSub: 'Annoncer, numéroter, articuler',
  hint: 'Quatre cartes. Regarde ce qui guide le lecteur.',
  audio: AUDIO, say: REFRAME, terms: ['paragraphe'],
  cards: [
    { head: 'Annoncer le chemin', label: 'l’annonce', fr: src(E(2250)).fr, sub: rsOf(E(2250)),
      body: 'L’anglais commence souvent par sa conclusion. Un lecteur français d’essai aime souvent savoir d’abord combien d’étapes l’attendent. EN: announce the path.' },
    { head: 'Numéroter', label: 'les étapes', fr: src(E(2252)).fr, sub: rsOf(E(2252)),
      body: '« Second, and more importantly » devient « La deuxième, plus décisive » : la hiérarchie reste, le repère s’ajoute. EN: number and rank.' },
    { head: 'Relancer', label: 'or', fr: src(E(2256)).fr, sub: rsOf(E(2256)),
      body: '« Or » introduit un fait qui fait avancer le raisonnement. L’anglais dit souvent « but », ou rien. EN: or moves the argument on.' },
    { head: 'Conclure', label: 'la conséquence', fr: src(E(2257)).fr, sub: rsOf(E(2257)),
      body: '« Hence » ou une simple juxtaposition : en français, la conséquence s’écrit. EN: write the consequence.' },
  ],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-trier', layer: 'core', size: 'lg',
  title: 'Le même fil, d’autres repères', frSub: 'Un autre paragraphe : les jardins partagés',
  groups: [
    grp('Trois phrases anglaises, traduites dans l’ordre', [
      free('Les jardins partagés coûtent peu.', 'Community gardens are cheap.', 'une idée'),
      free('Ils rapprochent les voisins.', 'They bring neighbours together.', 'une deuxième idée'),
      free('Ils rafraîchissent les cours bétonnées.', 'They cool down concrete yards.', 'une troisième idée'),
    ], chk('Que manque-t-il à ces trois phrases pour un lecteur français ?', ['une annonce et des repères', 'des exemples chiffrés', 'un autre ordre des idées'], 0,
      'Les idées et leur ordre sont bons ; il manque le chemin : « Les jardins partagés présentent trois avantages… ». EN: signposts.')),
    ctl('L’ordre', 'Pour ajouter des repères, faut-il changer l’ordre des idées ?', ['Non, seulement les rendre visibles.', 'Oui, toujours.'], 0,
      'Le fil reste le même ; seuls ses repères changent. EN: same thread.'),
    ctl('La conclusion', 'Le paragraphe anglais ouvre sur « Gardens are the obvious choice. » En français, tu peux...', ['annoncer la question et conclure par cette idée', 'supprimer cette phrase'], 0,
      'La thèse reste ; elle peut arriver au bout du chemin. EN: the thesis can come at the end.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['paragraphe'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre fils qui cassent',
  errors: [
    { wrong: 'Ouvrir le dimanche est la prochaine étape logique. Le coût est faible. Les familles sont libres. Le lieu est chauffé.', right: 'Trois raisons expliquent ce choix. La première tient au coût ; la deuxième, plus décisive, aux horaires des familles ; reste le lieu, déjà chauffé.',
      why: 'Chaque phrase est juste, et le lecteur français reçoit une liste. Annonce le chemin et marque les liens. EN: correct sentences, but a list.' },
    { wrong: 'D’abord, le coût. Ensuite, le coût aussi. Enfin, cependant, néanmoins, les horaires.', right: 'La première raison tient au coût. La deuxième, plus décisive, tient aux horaires.',
      why: 'On veut bien faire et on empile les connecteurs. Un repère par étape suffit. EN: one signpost per step.' },
    { wrong: 'C’est pourquoi nous proposons d’ouvrir tous les jours jusqu’à minuit.', right: src(E(2257)).fr,
      why: 'En réorganisant, on change la proposition de l’auteur. Les repères changent ; la thèse, jamais. EN: never change the thesis.' },
    { wrong: 'Or, les familles sont libres le dimanche, or la bibliothèque est fermée, or c’est dommage.', right: 'Or ces horaires ne conviennent pas aux familles ; le dimanche, au contraire, elles sont libres.',
      why: '« Or » relance une fois ; répété, il ne relance plus rien. EN: or works once.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['paragraphe'],
};

const A5_VERSION = pourTaTraduction('a5-version', 'Le début d’un paragraphe', [
  grp('« Sunday opening is the next logical step. Costs are low. Families are free. »', [
    free('Ouvrir le dimanche est la prochaine étape logique. Les coûts sont faibles. Les familles sont libres.', 'Sunday opening is the next logical step. Costs are low. Families are free.', 'l’ordre anglais, sans repère'),
    free('Ouvrir le dimanche est la suite logique, pour deux raisons : le coût est faible, et les familles sont libres ce jour-là.', 'Sunday opening is the next logical step. Costs are low. Families are free.', 'le même fil, avec ses repères'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'La thèse, puis ses raisons annoncées et liées : le lecteur suit sans effort. EN: thesis, then linked reasons.')),
  grp('Ta règle', [
    it(E(2254), 'le principe'),
    it(E(2258), 'la limite'),
  ], chk('Tu ajoutes des repères. Tu peux aussi...', ['changer la thèse si elle te paraît faible', 'garder la thèse et l’ordre des idées'], 1,
    'Le fil appartient à l’auteur ; tu n’ajoutes que des panneaux. EN: the thread is the author’s.')),
], ['paragraphe']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’anglais', 'Un paragraphe anglais part souvent...', ['de son idée principale', 'd’une citation', 'd’une question'], 0,
    'La phrase principale d’abord. EN: from its main idea.'),
  ctl('Le français', 'Un lecteur français d’essai attend souvent...', ['qu’on annonce le chemin et qu’on marque les liens', 'des phrases plus courtes que l’anglais'], 0,
    'Une tendance de l’écrit français, pas une loi. EN: signposts.'),
  ctl('La limite', 'En ajoutant des repères, tu ne touches jamais à...', ['la thèse et l’ordre des idées', 'la ponctuation', 'la longueur'], 0,
    'Le fil reste celui de l’auteur. EN: the thesis and the order.'),
], ['paragraphe']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le fil du paragraphe',
    opener: {
      line: 'Trois phrases anglaises côte à côte font un raisonnement, trois phrases françaises font une liste : ici tu rends le fil visible. EN: Three English sentences side by side make an argument, three French ones make a list: here you make the thread visible.',
      imageRef: 'lessons/traduire-idees/act05.jpg',
    },
    sections: [],
    milestone: 'Tu gardes l’ordre et la thèse d’un paragraphe anglais, et tu ajoutes les repères qu’attend un lecteur français. EN: You keep the order and thesis of an English paragraph and add the signposts a French reader expects.',
    estScreens: 33, restPoints: ['a5-reperes'],
  },
  sections: [A5_LECTURE, A5_REPERES, A5_TRIER, A5_ERREURS, A5_VERSION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — EXPLICITER
 *
 *  TEXT: the rents brief. MOVE: what English leaves implicit (juxtaposition,
 *  « and » meaning « but », an absolute construction, an acronym) spelled
 *  out; no idea added; over-explaining named.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Le quartier qui se vide de ses enfants', frSub: 'Les liens, écrits',
  text: LOYERS_TEXT,
  glossary: [
    { word: 'à l’étroit', en: 'cramped, short of space', note: 'Dans un espace trop petit pour tout le monde.' },
  ],
  questions: [
    { q: 'Devine le sens : « le financement n’a jamais suivi ». Que veut dire « suivre » ici ?', a: 'Arriver après la décision, comme prévu : l’argent n’est jamais venu.' },
    { q: 'Quel lien « si bien que » rend-il visible ?', a: 'La conséquence : les familles sont parties parce que les loyers ont augmenté.' },
    { q: 'Que disait l’anglais à la place de « mais » ?', a: '« and » : « The project was approved and the funding never came. » Le sens était une opposition.' },
    { q: 'Comment le traducteur a-t-il rendu « With a new council in place » ?', a: '« Comme le conseil d’arrondissement avait changé » : la cause, écrite.' },
    { q: 'Le traducteur a-t-il ajouté une idée ?', a: 'Non : il a écrit des liens que l’anglais laissait deviner, rien de plus.' },
    { q: 'Quelle phrase explique en partie le succès de l’ouverture du soir ?', a: 'Les enfants, faute de place à la maison, font leurs devoirs à la bibliothèque.' },
  ],
  audio: REC('rec-c1-22-loyers'), say: REFRAME, terms: ['explicitation'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a6-exemples', layer: 'core',
  title: 'Ce que l’anglais laisse deviner', frSub: 'Quatre explicitations',
  examples: [
    ex(E(2259), 'Deux phrases côte à côte : le français écrit la conséquence.'),
    ex(E(2260), '« And » veut dire « mais » : le français le dit.'),
    ex(E(2261), 'Une construction absolue : le français écrit la cause.'),
    ex(E(2262), 'Un sigle connu des lecteurs anglais : le français l’explique, une fois.'),
    ex(E(2268), 'Deux faits liés : « faute de » dit la cause en trois mots.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['explicitation'],
};

const A6_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a6-trier', layer: 'core', size: 'lg',
  title: 'Quel lien manque', frSub: 'De nouvelles paires',
  groups: [
    grp('Deux faits, un lien à écrire', [
      it(E(2267), 'Prices went up; sales went down.'),
      it(E(2269), 'The March agreement'),
    ], chk('« Prices went up; sales went down. » Quel lien le français écrit-il ?', ['un lien de cause', 'une opposition', 'aucun'], 0,
      '« Donc » dit la conséquence que l’anglais laissait deviner. EN: cause.')),
    ctl('Le « and »', '« She applied and was turned down. » Le sens du « and » ?', ['mais', 'donc', 'parce que'], 0,
      'Elle a postulé, mais on l’a refusée : une opposition. EN: but.'),
    ctl('Le sigle', 'Un texte pour un public québécois cite « the NHS ». Tu écris...', ['le service public de santé britannique (NHS)', 'le NHS, sans rien d’autre'], 0,
      'Ton lecteur ne connaît pas forcément le sigle : explique-le une fois. EN: explain it once.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['explicitation'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Trop peu, trop expliqué',
  rule: {
    title: 'Montrer ce qui était là',
    body: 'Expliciter, c’est écrire le lien ou l’information que le lecteur anglais tirait du contexte. Ajouter une idée, un jugement ou une explication inutile, c’est trahir dans l’autre sens. EN: Show what was there; add nothing else.',
  },
  cards: [
    { promptLabel: 'une liste', promptSound: 'Les loyers ont augmenté. Les familles sont parties.',
      fr: src(E(2259)).fr, ipa: ipaOf(E(2259)),
      tip: 'Le lien de cause était dans l’anglais ; écris-le. EN: write the cause.' },
    { promptLabel: 'un « et » trompeur', promptSound: 'Le projet a été approuvé et le financement n’a jamais suivi.',
      fr: src(E(2260)).fr, ipa: ipaOf(E(2260)),
      tip: 'C’est une opposition : « mais ». EN: but.' },
    { promptLabel: 'une tournure calquée', promptSound: 'Avec un nouveau conseil en place, le dossier a été rouvert.',
      fr: src(E(2261)).fr, ipa: ipaOf(E(2261)),
      tip: 'Correct, mais flou : dis la cause. EN: state the cause.' },
    { promptLabel: 'un ajout', promptSound: 'Les loyers ont augmenté à cause de la cupidité des propriétaires, si bien que les familles sont parties.',
      fr: src(E(2259)).fr, ipa: ipaOf(E(2259)),
      tip: 'La « cupidité » n’est pas dans l’anglais : c’est une idée ajoutée. EN: an added judgement.' },
    { promptLabel: 'trop expliqué', promptSound: 'Faute de bénévoles, c’est-à-dire de personnes qui donnent leur temps gratuitement, l’atelier a fermé.',
      fr: src(E(2268)).fr, ipa: ipaOf(E(2268)),
      tip: 'Ton lecteur sait ce qu’est un bénévole. EN: no need to explain that.' },
    { promptLabel: 'un sigle muet', promptSound: 'Le NHS a publié un rapport.',
      fr: 'Le service public de santé britannique (NHS) a publié un rapport.', ipa: '/lə sɛʁ.vis py.blik də sɑ̃.te bʁi.ta.nik a py.bli.je œ̃ ʁa.pɔʁ/',
      tip: 'Une explication, une fois, pour un lecteur qui ne connaît pas le sigle. EN: explain the acronym once.' },
  ],
  drill: [
    { promptSay: '« Rents rose. Families left. » : les loyers ont augmenté, … les familles sont parties.', opts: ['si bien que', 'bien que'], correct: 0 },
    { promptSay: '« approved and the funding never came » : approuvé, … le financement n’a jamais suivi.', opts: ['mais', 'donc'], correct: 0 },
    { promptSay: '« With a new council in place » : … le conseil avait changé.', opts: ['Comme', 'Malgré que'], correct: 0 },
    { promptSay: '« Volunteers dropped out and the workshop closed » : … de bénévoles, l’atelier a fermé.', opts: ['Faute', 'Grâce'], correct: 0 },
    { promptSay: 'Expliciter, c’est montrer une idée qui était … .', opts: ['déjà là', 'absente'], correct: 0 },
    { promptSay: 'Ajouter un jugement que l’auteur n’a pas écrit, c’est un … .', opts: ['ajout', 'lien'], correct: 0 },
    { promptSay: 'Un sigle inconnu du lecteur s’explique … .', opts: ['une fois', 'à chaque phrase'], correct: 0 },
    { promptSay: '« Prices went up; sales went down » : les prix ont augmenté, et les ventes ont … baissé.', opts: ['donc', 'pourtant'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Montrer ce qui était là' },
    { label: 'Six cartes', kind: 'cards', title: 'Trop peu, trop expliqué' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six versions justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-22-piege-expliciter'), say: REFRAME, terms: ['explicitation'],
};

const A6_VERSION = pourTaTraduction('a6-version', 'Deux phrases de Fiona', [
  grp('« Fees went up. Attendance dropped. »', [
    free('Les tarifs ont augmenté. La fréquentation a baissé.', 'Fees went up. Attendance dropped.', 'deux phrases, aucun lien'),
    free('La hausse des tarifs a fait baisser la fréquentation.', 'Fees went up. Attendance dropped.', 'le lien, écrit'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'L’enchaînement est dans l’anglais ; le français l’écrit. EN: the link is written.')),
  grp('Ta limite', [
    it(E(2265), 'aucune idée en plus'),
    it(E(2266), 'trop expliquer'),
  ], chk('Tu ajoutes « à cause de la hausse injuste des tarifs ». C’est...', ['un ajout : « injuste » n’est pas dans l’anglais', 'une bonne explicitation'], 0,
    'Le jugement est le tien, pas celui de l’auteure. EN: your judgement, not hers.')),
], ['explicitation']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le procédé', 'Expliciter, c’est...', ['écrire ce que le contexte disait déjà', 'ajouter ses propres idées', 'traduire plus long'], 0,
    'Rendre visible ce qui était implicite. EN: spell out the implicit.'),
  ctl('Le « and »', 'Un « and » anglais peut vouloir dire...', ['mais', 'toujours « et »'], 0,
    'Le sens décide, pas le mot. EN: sometimes but.'),
  ctl('La faute inverse', 'Expliquer ce que le lecteur sait déjà, c’est...', ['trop expliquer', 'une explicitation réussie', 'une omission'], 0,
    'Trop expliquer, c’est aussi trahir. EN: over-explaining.'),
], ['explicitation']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Expliciter',
    opener: {
      line: '« Rents rose. Families left. » Le lecteur anglais voit la cause, le lecteur français deux faits : ici tu écris le lien. EN: “Rents rose. Families left.” The English reader sees the cause, the French reader two facts: here you write the link.',
      imageRef: 'lessons/traduire-idees/act06.jpg',
    },
    sections: [],
    milestone: 'Tu écris les liens et les informations que l’anglais laissait au contexte, sans ajouter une seule idée. EN: You write out the links and information English left to the context, without adding a single idea.',
    estScreens: 34, restPoints: ['a6-trier'],
  },
  sections: [A6_LECTURE, A6_EXEMPLES, A6_TRIER, A6_PIEGE, A6_VERSION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — ALLÉGER
 *
 *  TEXT: the speech of thanks. MOVE: implicitation: English doublets and
 *  padding said once; English repetition becomes a French reprise (lesson 5
 *  in C1); never an idea dropped.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Le mot d’ouverture', frSub: 'Un mot quand un mot suffit',
  text: MERCIS_TEXT,
  glossary: [
    { word: 'aussitôt', en: 'immediately', note: 'Tout de suite, sans attendre.' },
  ],
  questions: [
    { q: 'Devine le sens : « nous avons réservé ce soir une salle plus grande ». Que veut dire « réserver » ici ?', a: 'Retenir la salle à l’avance pour être sûr de l’avoir.' },
    { q: 'Comment le traducteur a-t-il rendu « each and every one of you » ?', a: '« Chacun d’entre vous » : un seul tour suffit.' },
    { q: 'Que sont devenus « the end result » et « our future plans » ?', a: '« Le résultat » et « nos projets » : le français ne double pas ce qu’un mot dit déjà.' },
    { q: 'Et « due to the fact that » ?', a: '« Comme » : un mot pour une cause.' },
    { q: 'Une idée de l’original a-t-elle disparu ?', a: 'Non : chaque remerciement, chaque fait et chaque promesse est là.' },
    { q: 'Que dit la note sur la règle suivie ?', a: 'Chaque idée gardée, mais un seul mot quand un seul suffisait.' },
  ],
  audio: REC('rec-c1-22-mercis'), say: REFRAME, terms: ['implicitation'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-table', layer: 'core', sheetId: 'sheet-fil',
  title: 'Six lourdeurs anglaises', frSub: 'Dites une seule fois',
  cols: ['Anglais', 'Français', 'Pourquoi'],
  rows: [
    { cells: ['each and every one of you', 'chacun d’entre vous', 'un doublet'],
      say: src(E(2270)).fr,
      detail: { title: 'Each and every', body: 'Le Larousse rend « each (and every) one of us » par « chacun d’entre nous (sans exception) ». Si l’insistance compte, « sans exception » la garde. EN: one word, or sans exception for emphasis.', say: src(E(2271)).fr } },
    { cells: ['first and foremost', 'avant tout', 'un doublet'],
      say: src(E(2272)).fr,
      detail: { title: 'First and foremost', body: 'Le Larousse propose « d’abord et surtout » ; « avant tout » dit la même priorité en deux mots. EN: priority, said once.', say: src(E(2272)).fr } },
    { cells: ['the end result', 'le résultat', 'une redondance'],
      say: src(E(2273)).fr,
      detail: { title: 'End result', body: 'Un résultat est déjà une fin. EN: a result is already the end.', say: src(E(2273)).fr } },
    { cells: ['our future plans', 'nos projets', 'une redondance'],
      say: src(E(2274)).fr,
      detail: { title: 'Future plans', body: 'Un projet regarde déjà vers l’avenir. EN: plans are already future.', say: src(E(2274)).fr } },
    { cells: ['at this point in time', 'actuellement', 'un détour'],
      say: src(E(2275)).fr,
      detail: { title: 'At this point in time', body: 'Cinq mots anglais, un mot français. Ici « actuellement » a son vrai sens : en ce moment. EN: currently.', say: src(E(2275)).fr } },
    { cells: ['due to the fact that', 'comme, parce que', 'un détour'],
      say: src(E(2277)).fr,
      detail: { title: 'Due to the fact that', body: 'Une cause en un mot. De même, « in the event that » devient « si ». EN: one word for a cause.', say: src(E(2276)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['implicitation'],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-trier', layer: 'core', size: 'lg',
  title: 'Alléger sans perdre', frSub: 'De nouvelles phrases',
  groups: [
    grp('Des phrases allégées', [
      it(E(2276), 'in the event that'),
      it(E(2277), 'due to the fact that'),
      it(E(2275), 'at this point in time'),
    ], chk('Qu’ont en commun ces trois traductions ?', ['Elles disent tout, en moins de mots.', 'Elles ont perdu une idée.'], 0,
      'Le contenu est entier ; seule la lourdeur est partie. EN: same content, fewer words.')),
    ctl('La répétition', 'L’anglais répète « the library » dans trois phrases de suite. En français, tu...', ['reprends par « elle », « le lieu », « l’établissement »', 'répètes « la bibliothèque » trois fois'], 0,
      `La reprise, vue dans ${ELLIPSE_REF}, évite la répétition que l’anglais tolère mieux. EN: use a reprise.`),
    ctl('La limite', '« We thank each and every volunteer, without exception. » Tu supprimes « sans exception » ?', ['Non, l’insistance fait partie du sens.', 'Oui, toujours.'], 0,
      'Alléger, ce n’est pas perdre l’insistance voulue. EN: keep intended emphasis.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['implicitation'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a7-dictee', layer: 'core',
  title: 'Écris les phrases allégées', frSub: 'Ce que tu entends, en français soigné',
  itemIds: [...dicteeFor(7), ...dicteeFor(6)],
  audio: AUDIO, say: REFRAME, terms: ['implicitation'],
};

const A7_VERSION = pourTaTraduction('a7-version', 'Le mot de Fiona', [
  grp('« The end result of our joint efforts surprised each and every one of us. »', [
    free('Le résultat final de nos efforts conjoints a surpris chacun et chacune d’entre nous, tous.', 'The end result of our joint efforts surprised each and every one of us.', 'tout doublé'),
    free('Le résultat de nos efforts communs nous a tous surpris.', 'The end result of our joint efforts surprised each and every one of us.', 'allégé, entier'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'Chaque idée y est, sans doublet. EN: every idea, no doublets.')),
  grp('Ta règle', [
    it(E(2280), 'la limite'),
    it(E(2279), 'le principe'),
  ], chk('Alléger une phrase, c’est...', ['retirer les mots qui répètent une idée', 'retirer les idées difficiles'], 0,
    'On retire des mots, jamais des idées. EN: words, never ideas.')),
], ['implicitation']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le doublet', '« each and every one of you » se rend souvent par...', ['chacun d’entre vous', 'chacun et chaque un de vous'], 0,
    'Un seul tour suffit (Larousse). EN: chacun d’entre vous.'),
  ctl('Le procédé', 'L’implicitation laisse au contexte...', ['ce qu’il dit déjà', 'les idées importantes', 'les chiffres'], 0,
    'L’inverse de l’explicitation. EN: what the context says.'),
  ctl('La limite', 'Alléger peut-il supprimer une idée ?', ['jamais', 'oui, si elle est longue'], 0,
    'Rien de l’idée ne se perd. EN: never.'),
], ['implicitation']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Alléger',
    opener: {
      line: '« Each and every », « the end result », « at this point in time » : ici tu dis une seule fois ce que l’anglais dit deux fois. EN: “Each and every”, “the end result”, “at this point in time”: here you say once what English says twice.',
      imageRef: 'lessons/traduire-idees/act07.jpg',
    },
    sections: [],
    milestone: 'Tu allèges les doublets et les détours de l’anglais sans perdre une idée ni une insistance voulue. EN: You lighten English doublets and padding without losing an idea or an intended emphasis.',
    estScreens: 33, restPoints: ['a7-table'],
  },
  sections: [A7_LECTURE, A7_TABLE, A7_TRIER, A7_DICTEE, A7_VERSION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — L’ÉQUIVALENCE CULTURELLE
 *
 *  TEXT: the charity-run newsletter item. MOVE: a reference is translated
 *  by its effect: keep, explain, replace, generalise; units converted.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Une course pour la bibliothèque', frSub: 'Des milles, des degrés, des images',
  text: COURSE_TEXT,
  glossary: [
    { word: 'solidaire', en: 'charity (adj.), fundraising', note: 'Organisée pour soutenir une cause.' },
  ],
  questions: [
    { q: 'Devine le sens : « Les organisateurs refusent de s’engager ». Que veut dire « s’engager » ici ?', a: 'Promettre un chiffre précis.' },
    { q: 'Qu’est devenu « three miles » ?', a: '« Environ cinq kilomètres » : un mille vaut environ 1,6 kilomètre.' },
    { q: 'Et « over ninety degrees » ?', a: '« Plus de trente degrés » : 90 °F font environ 32 °C.' },
    { q: 'Pourquoi « un ordre de grandeur » pour « a ballpark figure » ?', a: 'L’image de baseball ne parle pas au lecteur ; l’expression française fait le même travail : donner un chiffre approximatif.' },
    { q: 'Quelles images le traducteur a-t-il gardées ?', a: 'La partie émergée de l’iceberg et la case départ : le français les partage avec l’anglais.' },
    { q: 'Pourquoi n’explique-t-il pas l’Action de grâce ?', a: 'Un lecteur québécois connaît cette fête : rien ne gêne la compréhension.' },
  ],
  audio: REC('rec-c1-22-course'), say: REFRAME, terms: ['equivalence'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-table', layer: 'core', sheetId: 'sheet-culture',
  title: 'Six références, quatre gestes', frSub: 'Garder, expliquer, remplacer, généraliser',
  cols: ['Anglais', 'Français', 'Geste'],
  rows: [
    { cells: ['a ballpark figure', 'un ordre de grandeur', 'remplacer'],
      say: src(E(2282)).fr,
      detail: { title: 'A ballpark figure', body: 'L’Office québécois rattache l’expression aux amateurs de baseball qui devinaient le nombre de spectateurs ; il propose « estimation grossière » et « chiffre approximatif ». Le Larousse donne aussi « ordre de grandeur ». EN: replace the baseball image.', say: src(E(2283)).fr } },
    { cells: ['back to square one', 'revenir à la case départ', 'garder l’image'],
      say: src(E(2285)).fr,
      detail: { title: 'Back to square one', body: 'Le français a une image de jeu de société qui fait exactement le même travail (Larousse). EN: a shared image.', say: src(E(2285)).fr } },
    { cells: ['the tip of the iceberg', 'la partie émergée de l’iceberg', 'garder l’image'],
      say: src(E(2284)).fr,
      detail: { title: 'The tip of the iceberg', body: 'Même image, un mot différent : « émergée » plutôt que « pointe » (Larousse). EN: same image, French wording.', say: src(E(2284)).fr } },
    { cells: ['three miles', 'environ cinq kilomètres', 'convertir'],
      say: src(E(2286)).fr,
      detail: { title: 'Les unités', body: 'Un mille vaut environ 1,6 kilomètre. Arrondis comme l’anglais arrondit : « environ ». EN: convert and round as the source does.', say: src(E(2292)).fr } },
    { cells: ['over ninety degrees', 'plus de trente degrés', 'convertir'],
      say: src(E(2287)).fr,
      detail: { title: 'Les degrés', body: '90 °F font environ 32 °C. Ton lecteur pense en Celsius. EN: Fahrenheit to Celsius.', say: src(E(2287)).fr } },
    { cells: ['Thanksgiving (au Canada)', 'l’Action de grâce', 'garder'],
      say: src(E(2288)).fr,
      detail: { title: 'Une fête', body: 'Au Canada, la fête porte un nom français que le lecteur connaît : rien à expliquer. Pour un lecteur en France, une courte précision peut aider. EN: keep it, explain only if needed.', say: src(E(2291)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['equivalence'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Quel geste ici', frSub: 'De nouvelles références',
  groups: [
    grp('Quatre gestes', [
      it(E(2289), 'la méthode'),
      it(E(2291), 'la limite'),
    ], chk('« The garden covers two acres. » Pour un lecteur en France, tu...', ['convertis : « un peu moins d’un hectare »', 'gardes « deux acres » sans y penser'], 0,
      'L’acre ne dit rien à un lecteur en France ; deux acres font environ 0,8 hectare. Arrondis comme l’anglais arrondit. EN: convert the unit.')),
    ctl('L’image partagée', '« We’re back to square one. » Tu...', ['gardes l’image : la case départ', 'écris « nous sommes revenus au carré un »'], 0,
      'Le français a la même image, sous sa forme à lui. EN: the shared French image.'),
    ctl('L’image étrangère', '« a ballpark figure » : tu...', ['remplaces par « un ordre de grandeur »', 'écris « un chiffre de stade de baseball »'], 0,
      'L’image ne parle pas ; l’effet, si. EN: replace it.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['equivalence'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a8-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre références mal passées',
  errors: [
    { wrong: 'Donnez-nous un chiffre de terrain de baseball.', right: src(E(2282)).fr,
      why: 'On veut garder l’image, par fidélité. Mais le lecteur ne la reconnaît pas : garde l’effet. EN: keep the effect, not the image.' },
    { wrong: 'La course fait trois milles.', right: src(E(2286)).fr,
      why: 'Le chiffre est exact, mais ton lecteur ne visualise pas un mille. EN: your reader thinks in kilometres.' },
    { wrong: 'Il faisait plus de quatre-vingt-dix degrés.', right: src(E(2287)).fr,
      why: 'En Celsius, quatre-vingt-dix degrés, c’est presque l’ébullition. Convertis. EN: convert to Celsius.' },
    { wrong: 'Le jour de l’Action de grâce, une fête canadienne où l’on remercie pour les récoltes en mangeant de la dinde, la bibliothèque sera fermée.', right: src(E(2288)).fr,
      why: 'Pour un lecteur québécois, cette explication est inutile et un peu condescendante. EN: no need to explain a known holiday.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['equivalence'],
};

const A8_VERSION = pourTaTraduction('a8-version', 'Une phrase de la course', [
  grp('« Without new funding, we will be back to square one by the winter. »', [
    free('Sans nouveau financement, nous serons de retour au carré numéro un d’ici l’hiver.', 'Without new funding, we will be back to square one by the winter.', 'l’image, mot à mot'),
    free('Sans nouveaux fonds, nous reviendrons à la case départ d’ici l’hiver.', 'Without new funding, we will be back to square one by the winter.', 'l’image française'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'La case départ fait le même travail, et le lecteur la connaît. EN: the French image.')),
  grp('Ta règle', [
    it(E(2290), 'le principe'),
  ], chk('Face à une référence culturelle, tu te demandes d’abord...', ['ce qu’elle fait au lecteur anglais', 'comment la traduire mot à mot'], 0,
    'Puis tu choisis : garder, expliquer, remplacer, généraliser. EN: its effect first.')),
], ['equivalence']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le principe', 'Une référence culturelle se traduit par...', ['l’effet qu’elle produit', 'les mots qui la composent', 'une note de bas de page'], 0,
    'Le même effet sur ton lecteur. EN: its effect.'),
  ctl('Les gestes', 'Les quatre gestes sont...', ['garder, expliquer, remplacer, généraliser', 'traduire, couper, ajouter, répéter'], 0,
    'Selon ce que ton lecteur connaît. EN: keep, explain, replace, generalise.'),
  ctl('La limite', 'Tu expliques une référence...', ['seulement si elle gêne la compréhension', 'toujours, par prudence'], 0,
    'Trop expliquer reste une faute. EN: only if needed.'),
], ['equivalence']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'L’équivalence culturelle',
    opener: {
      line: 'Un stade de baseball, trois milles, quatre-vingt-dix degrés : ici tu fais passer chaque référence par l’effet qu’elle produit. EN: A baseball park, three miles, ninety degrees: here you carry each reference across by the effect it has.',
      imageRef: 'lessons/traduire-idees/act08.jpg',
    },
    sections: [],
    milestone: 'Tu choisis, pour chaque référence, de la garder, l’expliquer, la remplacer ou la généraliser, selon ton lecteur. EN: For each reference you choose to keep, explain, replace or generalise it, according to your reader.',
    estScreens: 34, restPoints: ['a8-table'],
  },
  sections: [A8_LECTURE, A8_TABLE, A8_TRIER, A8_ERREURS, A8_VERSION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — RÉSUMER EN TRADUISANT
 *
 *  TEXT: the newsletter summary of Fiona's long English article. MOVE:
 *  thesis and thread kept, examples dropped, every idea attributed, no
 *  opinion. The one place in the lesson where content is reduced, by design.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Le résumé pour l’infolettre', frSub: 'Six cents mots anglais, cent vingt mots français',
  text: RESUME_TEXT,
  glossary: [
    { word: 'canicule', en: 'heatwave', note: 'Une période de très forte chaleur qui dure plusieurs jours.' },
  ],
  questions: [
    { q: 'Devine le sens : « Ces positions … n’engagent pas la Fondation ». Que veut dire « engager » ici ?', a: 'Lier, rendre responsable : la Fondation ne prend pas ces positions à son compte.' },
    { q: 'Quelle est la thèse de Fiona Kerr ?', a: 'Les bibliothèques de quartier sont devenues des refuges, un rôle qui mérite d’être financé.' },
    { q: 'Quels mots attribuent les idées à l’auteure ?', a: '« Selon Fiona Kerr », « L’auteure soutient que », « Elle s’appuie sur », « Elle formule ».' },
    { q: 'Qu’est-ce qui a disparu de l’article original ?', a: 'Les exemples étrangers et le souvenir personnel qui l’ouvrait.' },
    { q: 'Le résumé donne-t-il l’avis de la rédaction ?', a: 'Non : il précise même que ces positions sont celles de l’auteure.' },
    { q: 'Combien de propositions le résumé garde-t-il ?', a: 'Deux : les plans d’urgence en cas de canicule et les horaires élargis là où les logements sont petits.' },
  ],
  audio: REC('rec-c1-22-resume'), say: REFRAME, terms: ['resume'],
};

const A9_ETAPES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-etapes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-culture',
  title: 'Résumer d’une langue à l’autre', frSub: 'Quatre gestes',
  hint: 'Quatre cartes. Regarde ce qui reste et ce qui tombe.',
  audio: AUDIO, say: REFRAME, terms: ['resume'],
  cards: [
    { head: 'Repérer dans l’anglais', label: 'la thèse et le plan', fr: src(E(2295)).fr, sub: rsOf(E(2295)),
      body: 'Avant d’écrire, souligne dans l’anglais la thèse, les arguments et leur ordre. EN: find the thesis and the plan first.' },
    { head: 'Écrire en français', label: 'directement', fr: src(E(2298)).fr, sub: rsOf(E(2298)),
      body: 'Traduire tout puis couper donne un français haché. Écris le résumé directement en français. EN: write the summary in French from the start.' },
    { head: 'Laisser tomber', label: 'les détails', fr: src(E(2296)).fr, sub: rsOf(E(2296)),
      body: 'Les exemples, les anecdotes et les répétitions tombent ; les idées restent. EN: drop the details.' },
    { head: 'Attribuer', label: 'selon l’auteure', fr: src(E(2293)).fr, sub: rsOf(E(2293)),
      body: 'Chaque idée appartient à l’auteure : « selon », « l’auteure soutient que ». Ton avis n’y entre pas. EN: attribute every idea.' },
  ],
};

/** THE EAR MISSION: Malik's voice message, eight lines, one take. */
const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a9-ecoute', layer: 'core', hideLines: true,
  title: 'Le message de Malik', frSub: 'Une commande de résumé',
  lines: [ln(E(2300)), ln(E(2301)), ln(E(2302)), ln(E(2303)), ln(E(2304)), ln(E(2305)), ln(E(2306)), ln(E(2307))],
  questions: [
    { q: 'Pour quand Malik veut-il le résumé ?', opts: ['pour l’infolettre de jeudi', 'pour la réunion de lundi', 'pour la fin du mois'], correct: 0,
      why: 'L’infolettre de jeudi. EN: Thursday’s newsletter.' },
    { q: 'Quelle longueur demande-t-il ?', opts: ['cent vingt mots au plus', 'une traduction complète', 'deux pages'], correct: 0,
      why: 'Un résumé, pas une traduction complète. EN: 120 words at most.' },
    { q: 'Que faut-il garder ?', opts: ['l’argument central et les deux propositions', 'le souvenir de la grand-mère'], correct: 0,
      why: 'La thèse et les propositions ; l’anecdote tombe. EN: argument and proposals.' },
    { q: 'Que demande-t-il de préciser ?', opts: ['que ce sont les idées de Fiona, pas celles de la Fondation', 'le nombre de visiteurs par jour'], correct: 0,
      why: 'Attribuer chaque idée à l’auteure. EN: attribute the ideas.' },
    { q: 'Que pense Malik du souvenir de la grand-mère ?', opts: ['Il est joli, mais trop long.', 'Il est essentiel.', 'Il est faux.'], correct: 0,
      why: '« C’est joli, mais trop long. » EN: nice but too long.' },
  ],
  audio: REC('rec-c1-22-malik'), say: REFRAME, terms: ['resume'],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'Le meilleur début de résumé', frSub: 'Un autre article : les pistes cyclables',
  groups: [
    grp('Trois débuts possibles', [
      free('Selon l’auteur, les pistes cyclables profitent d’abord aux commerces de quartier.', 'The author argues that bike lanes benefit local shops first.', 'la thèse, attribuée'),
      free('Les pistes cyclables profitent d’abord aux commerces de quartier, ce qui est évident.', 'Bike lanes benefit local shops first, which is obvious.', 'un avis ajouté'),
      free('L’auteur raconte qu’il a acheté son premier vélo à douze ans.', 'The author tells how he bought his first bike at twelve.', 'une anecdote'),
    ], chk('Lequel ouvre bien le résumé ?', ['le premier', 'le deuxième', 'le troisième'], 0,
      'La thèse, attribuée, sans avis ni anecdote. EN: the thesis, attributed.')),
    ctl('L’ordre', 'Le résumé garde-t-il l’ordre des arguments de l’auteur ?', ['Oui, c’est son fil.', 'Non, on les classe à son goût.'], 0,
      'Le fil reste le sien. EN: keep the author’s order.'),
    ctl('La méthode', 'Pour résumer un article anglais en français, tu...', ['repères la thèse en anglais et écris directement en français', 'traduis tout, puis coupes'], 0,
      'Un résumé écrit, pas une traduction coupée. EN: write it in French.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['resume'],
};

const A9_VERSION = pourTaTraduction('a9-version', 'La dernière phrase du résumé', [
  grp('« The views expressed are the author’s own. »', [
    free('Les vues exprimées sont celles de l’auteure elle-même.', 'The views expressed are the author’s own.', 'mot à mot, un peu raide'),
    free('Les opinions exprimées n’engagent que leur auteure.', 'The views expressed are the author’s own.', 'la formule française'),
  ], chk('Laquelle sert ton résumé ?', ['la seconde', 'la première'], 0,
    '« N’engagent que leur auteure » est la formule qu’un lecteur français attend dans ce cas. EN: the usual French formula.')),
  grp('Ta règle', [
    it(E(2297), 'aucun avis'),
    it(E(2294), 'attribuer'),
  ], chk('Dans un résumé traduit, « je pense que » a sa place...', ['nulle part', 'dans la conclusion'], 0,
    'Le résumé rend l’auteure, pas toi. EN: nowhere.')),
], ['resume']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Ce qu’on garde', 'Un résumé traduit garde...', ['la thèse, les arguments et leur ordre', 'les exemples et les anecdotes', 'l’avis du traducteur'], 0,
    'L’idée et le fil, sans les détails. EN: thesis and thread.'),
  ctl('Attribuer', 'Chaque idée du résumé est...', ['attribuée à l’auteur', 'présentée comme un fait'], 0,
    'Selon l’auteure, l’auteure soutient que. EN: attributed.'),
  ctl('La méthode', 'Le résumé s’écrit...', ['directement en français', 'en anglais, puis traduit'], 0,
    'Tu résumes dans l’autre langue. EN: straight into French.'),
], ['resume']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Résumer en traduisant',
    opener: {
      line: 'Six cents mots anglais, cent vingt mots français : ici tu gardes l’idée et le fil, et tu laisses le reste. EN: Six hundred English words, a hundred and twenty French ones: here you keep the idea and the thread and leave the rest.',
      imageRef: 'lessons/traduire-idees/act09.jpg',
    },
    sections: [],
    milestone: 'Tu résumes un texte anglais directement en français, thèse et fil gardés, chaque idée attribuée. EN: You summarise an English text straight into French, thesis and thread kept, every idea attributed.',
    estScreens: 34, restPoints: ['a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_ETAPES, A9_ECOUTE, A9_TRIER, A9_VERSION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — CHANGER DE PUBLIC
 *
 *  TEXT: one English sentence, three French audiences. MOVE: vocabulary,
 *  length and distance change; the substance never does. Lesson 25 in B1
 *  owns the registers.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Une phrase, trois publics', frSub: 'Les arbres des rues',
  text: ARBRES_TEXT,
  glossary: [
    { word: 'condescendant', en: 'condescending', note: 'Qui traite l’autre comme s’il savait moins que lui.' },
  ],
  questions: [
    { q: 'Devine le sens : « les arbres d’alignement ». Qu’est-ce que c’est, d’après le texte ?', a: 'Les arbres plantés en ligne le long des rues.' },
    { q: 'Pourquoi ne pas expliquer les termes techniques aux urbanistes ?', a: 'Ce sont leurs mots ; les expliquer leur paraîtrait condescendant.' },
    { q: 'Que change la version pour les habitants ?', a: 'Plus de mot de spécialiste, une image concrète, le vouvoiement.' },
    { q: 'Pourquoi le tutoiement sur le compte des adolescents ?', a: 'Parce que ce compte l’emploie déjà : le public l’attend.' },
    { q: 'Qu’est-ce qui ne change dans aucune version ?', a: 'Le fait : les arbres des rues réduisent la chaleur en ville.' },
    { q: 'Que n’a-t-on pas le droit de faire ?', a: 'Promettre plus que la source, par exemple dire que les arbres « suppriment » la chaleur.' },
  ],
  audio: REC('rec-c1-22-arbres'), say: REFRAME, terms: ['public'],
};

const A10_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a10-table', layer: 'core', sheetId: 'sheet-culture',
  title: 'Trois publics, un fait', frSub: 'Ce qui change, ce qui reste',
  cols: ['Public', 'Mots', 'Distance'],
  rows: [
    { cells: ['urbanistes', 'termes techniques', 'vous, impersonnel'],
      say: src(E(2309)).fr,
      detail: { title: 'Pour des spécialistes', body: '« Arbres d’alignement », « îlot de chaleur urbain » : leurs mots, sans explication. EN: their own terms.', say: src(E(2309)).fr } },
    { cells: ['habitants', 'mots courants', 'vous'],
      say: src(E(2310)).fr,
      detail: { title: 'Pour le grand public', body: 'Une image concrète, aucun jargon ; un terme technique s’explique ou se remplace. EN: concrete, no jargon.', say: src(E(2313)).fr } },
    { cells: ['adolescents', 'phrases courtes', 'tu, si le compte tutoie'],
      say: src(E(2311)).fr,
      detail: { title: 'Pour un compte jeunesse', body: 'Une phrase courte, un lien avec leur vie, le tutoiement que la marque emploie déjà. EN: short, personal, tu.', say: src(E(2317)).fr } },
    { cells: ['partenaires', 'formules soignées', 'vous'],
      say: src(E(2316)).fr,
      detail: { title: 'Pour des partenaires', body: 'Le registre d’un communiqué : « Nous vous invitons à découvrir… ». EN: formal invitation.', say: src(E(2316)).fr } },
    { cells: ['tous', 'le même fait', 'jamais plus que la source'],
      say: src(E(2308)).fr,
      detail: { title: 'Ce qui ne change pas', body: 'Aucune version ne promet plus que la note de recherche : « réduisent » ne devient pas « suppriment ». EN: never promise more than the source.', say: src(E(2318)).fr } },
    { cells: ['ta question', 'pour qui ?', 'pour quoi faire ?'],
      say: src(E(2315)).fr,
      detail: { title: 'Avant de traduire', body: `${Cap(REGISTRES_REF)} t’a donné trois registres. Ici, c’est le public qui choisit, pas la langue de départ. EN: the audience chooses the register.`, say: src(E(2312)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['public'],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a10-trier', layer: 'core', size: 'lg',
  title: 'Quelle version pour quel public', frSub: 'Une autre phrase : le recyclage',
  groups: [
    grp('« Contamination rates in curbside recycling remain high. »', [
      free('Les taux de contamination de la collecte sélective restent élevés.', 'Contamination rates in curbside recycling remain high.', 'pour des spécialistes'),
      free('Trop de déchets se retrouvent encore dans le mauvais bac.', 'Contamination rates in curbside recycling remain high.', 'pour le grand public'),
    ], chk('Laquelle choisis-tu pour l’infolettre des habitants ?', ['la seconde', 'la première'], 0,
      'Le même fait, sans le terme technique. EN: same fact, no jargon.')),
    ctl('Le tutoiement', 'Le compte jeunesse de la Fondation tutoie déjà ses abonnés. Ta traduction...', ['tutoie aussi', 'vouvoie, par prudence'], 0,
      'Le public attend la voix qu’il connaît. EN: match the account’s voice.'),
    ctl('La limite', 'Pour faire simple, tu écris « Les arbres suppriment la chaleur en ville. » C’est...', ['une promesse que la source ne fait pas', 'une bonne simplification'], 0,
      'Simplifier, oui ; exagérer, non. EN: an overstatement.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['public'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six versions mal ajustées',
  rule: {
    title: 'Le public change, le fond reste',
    body: 'Tu ajustes les mots, la longueur et la distance à ton lecteur. Tu ne changes jamais ce que dit la source, et tu ne promets jamais plus qu’elle. EN: Adjust words, length and distance; never the substance.',
  },
  cards: [
    { promptLabel: 'trop technique', promptSound: 'Pour les habitants : les arbres d’alignement atténuent l’effet d’îlot de chaleur urbain.',
      fr: src(E(2310)).fr, ipa: ipaOf(E(2310)),
      tip: 'Le grand public n’a pas ces mots ; donne une image. EN: an image, not jargon.' },
    { promptLabel: 'condescendant', promptSound: 'Pour des urbanistes : les arbres, ces grandes plantes, rendent la ville moins chaude.',
      fr: src(E(2309)).fr, ipa: ipaOf(E(2309)),
      tip: 'Des spécialistes attendent leurs termes. EN: use their terms.' },
    { promptLabel: 'mauvaise distance', promptSound: 'Pour le compte jeunesse : nous vous invitons à découvrir le rapport complet.',
      fr: src(E(2317)).fr, ipa: ipaOf(E(2317)),
      tip: 'Ce compte tutoie : garde sa voix. EN: the account says tu.' },
    { promptLabel: 'trop familier', promptSound: 'Pour des partenaires : va voir le rapport, il est trop bien.',
      fr: src(E(2316)).fr, ipa: ipaOf(E(2316)),
      tip: 'Un partenaire attend un registre soigné. EN: formal register.' },
    { promptLabel: 'une promesse', promptSound: 'Plus d’arbres dans ta rue, et fini la chaleur en été.',
      fr: src(E(2311)).fr, ipa: ipaOf(E(2311)),
      tip: 'Moins de chaleur, pas la fin de la chaleur. EN: less heat, not none.' },
    { promptLabel: 'la langue de départ', promptSound: 'Le texte anglais est familier, donc la traduction doit l’être pour tous.',
      fr: src(E(2318)).fr, ipa: ipaOf(E(2318)),
      tip: 'C’est le public visé qui choisit le registre. EN: the audience decides.' },
  ],
  drill: [
    { promptSay: 'Pour des urbanistes : les arbres d’… atténuent l’îlot de chaleur.', opts: ['alignement', 'ombre douce'], correct: 0 },
    { promptSay: 'Pour le grand public : les arbres plantés le long des rues … la ville.', opts: ['rafraîchissent', 'suppriment'], correct: 0 },
    { promptSay: 'Pour le compte jeunesse : … le rapport complet en ligne.', opts: ['Découvre', 'Découvrez'], correct: 0 },
    { promptSay: 'Pour des partenaires : nous vous … à découvrir le rapport.', opts: ['invitons', 'conseillons grave'], correct: 0 },
    { promptSay: 'Le public change, le … reste.', opts: ['contenu', 'registre'], correct: 0 },
    { promptSay: 'Le registre suit le … .', opts: ['public', 'texte anglais'], correct: 0 },
    { promptSay: 'Pour le grand public, un terme technique s’explique ou se … .', opts: ['remplace', 'répète'], correct: 0 },
    { promptSay: 'Avant de traduire : pour qui, et pour … faire ?', opts: ['quoi', 'qui'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le public change, le fond reste' },
    { label: 'Six cartes', kind: 'cards', title: 'Six versions mal ajustées' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six versions justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-22-piege-public'), say: REFRAME, terms: ['public'],
};

const A10_VERSION = pourTaTraduction('a10-version', 'L’appel final du rapport', [
  grp('« Read the full report online. » (infolettre des habitants)', [
    free('Lis le rapport complet en ligne.', 'Read the full report online.', 'le tutoiement'),
    free('Nous vous invitons à lire le rapport complet en ligne.', 'Read the full report online.', 'le vouvoiement de l’infolettre'),
  ], chk('L’infolettre vouvoie ses lecteurs. Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'Le même appel, dans la voix de l’infolettre. EN: the newsletter’s voice.')),
  grp('Ta règle', [
    it(E(2314), 'ce qui change, ce qui reste'),
  ], chk('Changer de public, c’est changer...', ['les mots, la longueur et la distance', 'les faits'], 0,
    'Jamais le fond. EN: never the facts.')),
], ['public']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La question', 'Avant de traduire pour un public, tu demandes...', ['pour qui, et pour quoi faire', 'combien de mots l’anglais compte'], 0,
    'Le public décide du registre. EN: for whom, to do what.'),
  ctl('Ce qui reste', 'D’une version à l’autre, ce qui ne change jamais, c’est...', ['le fond', 'le vocabulaire', 'la longueur'], 0,
    'Le fait reste le même. EN: the substance.'),
  ctl('La faute', 'Promettre plus que la source pour faire simple, c’est...', ['une infidélité', 'une adaptation réussie'], 0,
    'Simplifier sans exagérer. EN: unfaithful.'),
], ['public']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Changer de public',
    opener: {
      line: 'Les mêmes arbres, pour des urbanistes, des habitants et des adolescents : ici tu ajustes la voix, jamais le fond. EN: The same trees, for planners, residents and teenagers: here you adjust the voice, never the substance.',
      imageRef: 'lessons/traduire-idees/act10.jpg',
    },
    sections: [],
    milestone: 'Tu adaptes une même idée à trois publics en changeant les mots, la longueur et la distance, jamais le fond. EN: You adapt one idea to three audiences by changing words, length and distance, never the substance.',
    estScreens: 34, restPoints: ['a10-table'],
  },
  sections: [A10_LECTURE, A10_TABLE, A10_TRIER, A10_PIEGE, A10_VERSION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — RELIRE EN TRADUCTEUR
 *
 *  TEXT: Odile's revision of a draft. MOVE: name the fault (faux sens,
 *  contresens, non-sens, omission, ajout) and reread twice: with the English
 *  for the meaning, without it for the French.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'La relecture d’Odile', frSub: 'Deux lectures, cinq fautes',
  text: RELECTURE_TEXT,
  glossary: [
    { word: 'engage la Fondation', en: 'commits the Foundation', note: 'La rend responsable d’une position qu’elle n’a pas prise.' },
  ],
  questions: [
    { q: 'Devine le sens : « né d’un participe anglais suivi de trop près ». Que veut dire « suivre de trop près » ici ?', a: 'Copier la construction anglaise au lieu de la reformuler.' },
    { q: 'Pourquoi « la fréquentation a doublé » est-il grave ?', a: 'L’anglais dit « environ un tiers » : c’est un contresens sur le chiffre.' },
    { q: 'Quelle faute Odile appelle-t-elle un faux sens ?', a: '« Les usagers sensibles » pour « vulnerable users » : pas faux, mais pas le sens précis.' },
    { q: 'Qu’est-ce que l’omission a fait perdre ?', a: 'L’explication de la venue des jeunes : les logements exigus.' },
    { q: 'Pourquoi l’ajout est-il dangereux ?', a: 'Il prête à Fiona un jugement qu’elle n’a pas écrit et engage la Fondation.' },
    { q: 'À quoi sert la deuxième lecture, sans l’anglais ?', a: 'À entendre le français comme le lecteur : elle a trouvé le non-sens.' },
  ],
  audio: REC('rec-c1-22-relecture'), say: REFRAME, terms: ['contresens'],
};

const A11_FAUTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-fautes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-relire',
  title: 'Cinq fautes de sens', frSub: 'Les nommer pour les trouver',
  hint: 'Quatre cartes. Chaque faute a son nom et sa lecture.',
  audio: AUDIO, say: REFRAME, terms: ['contresens'],
  cards: [
    { head: 'Le contresens', label: 'le plus grave', fr: src(E(2320)).fr, sub: rsOf(E(2320)),
      body: 'La traduction dit le contraire ou autre chose que l’original : « doublé » pour « un tiers ». À chercher en premier. EN: the meaning is contradicted.' },
    { head: 'Le faux sens', label: 'le sens précis', fr: src(E(2319)).fr, sub: rsOf(E(2319)),
      body: 'Le Larousse : interpréter de manière erronée le sens précis d’un mot. Proche, mais pas juste. EN: the precise meaning missed.' },
    { head: 'Le non-sens', label: 'rien à comprendre', fr: src(E(2321)).fr, sub: rsOf(E(2321)),
      body: 'Une phrase française qui ne veut rien dire, souvent née d’une construction anglaise suivie de trop près. EN: no meaning at all.' },
    { head: 'L’omission, l’ajout', label: 'trop peu, trop', fr: src(E(2322)).fr, sub: rsOf(E(2322)),
      body: 'Une idée perdue, ou une idée inventée : les deux trahissent l’auteure. EN: an idea lost, or added.' },
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a11-trier', layer: 'core', size: 'lg',
  title: 'Nomme la faute', frSub: 'De nouvelles versions',
  groups: [
    grp('Les questions de la première lecture', [
      it(E(2327), 'la force'),
      it(E(2328), 'l’exactitude'),
      it(E(2329), 'un exemple'),
    ], chk('« Attendance fell slightly » traduit par « la fréquentation a nettement augmenté ». C’est...', ['un contresens', 'un faux sens', 'une omission'], 0,
      'Le sens est inversé. EN: a contresens.')),
    ctl('Le faux sens', '« a sensible proposal » traduit par « une proposition sensible ». C’est...', ['un faux sens', 'un ajout'], 0,
      'Sensible, en anglais, veut dire raisonnable : le sens précis est manqué. EN: the wrong shade.'),
    ctl('L’ajout', 'Tu écris « ce qui prouve l’échec de la Ville » ; l’anglais n’en dit rien. C’est...', ['un ajout', 'une explicitation'], 0,
      'Une idée nouvelle, pas un lien qui était là. EN: an addition.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['contresens'],
};

const A11_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a11-hacks', layer: 'core', title: 'Trois astuces de réviseure',
  hacks: [
    { hack: 'Compte les idées : une par phrase anglaise, cochée dans ta version.', why: 'Une omission se voit mal à la lecture et très bien au comptage. EN: count the ideas to catch omissions.' },
    { hack: 'Vérifie à part chaque chiffre, chaque nom et chaque date.', why: 'Un contresens sur un chiffre est le plus coûteux et le plus facile à éviter. EN: check figures separately.' },
    { hack: 'Laisse reposer ta version, puis relis-la sans l’anglais, à voix haute.', why: `${Cap(CALQUES_REF)} te le conseillait déjà ; au C1, cette lecture attrape aussi les non-sens et les liens absents. EN: rest, then read aloud without the English.` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['contresens'],
};

const A11_VERSION = pourTaTraduction('a11-version', 'Ta dernière relecture', [
  grp('« Attendance rose by about a third. »', [
    free('La fréquentation a doublé.', 'Attendance rose by about a third.', 'un contresens sur le chiffre'),
    free('La fréquentation a augmenté d’environ un tiers.', 'Attendance rose by about a third.', 'le chiffre exact'),
  ], chk('Laquelle sert ta traduction ?', ['la seconde', 'la première'], 0,
    'Un chiffre se vérifie à part, toujours. EN: check every figure.')),
  grp('Ta méthode', [
    it(E(2324), 'avec l’anglais'),
    it(E(2325), 'sans l’anglais'),
    it(B233_RELIRE, `vu dans ${CALQUES_REF}`),
  ], chk('La première relecture, avec l’anglais, protège surtout...', ['le sens', 'le style'], 0,
    'La seconde protège le lecteur. EN: the first protects meaning.')),
], ['contresens']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le plus grave', 'Quelle faute dit le contraire de l’original ?', ['le contresens', 'le faux sens', 'le non-sens'], 0,
    'Le sens inversé ou autre. EN: contresens.'),
  ctl('Le non-sens', 'Une phrase qui ne veut rien dire en français est...', ['un non-sens', 'une omission'], 0,
    'Souvent née d’une construction anglaise copiée. EN: a non-sens.'),
  ctl('La méthode', 'Les deux relectures se font...', ['avec l’anglais, puis sans lui', 'deux fois avec l’anglais'], 0,
    'Le sens d’abord, le français ensuite. EN: with, then without.'),
], ['contresens']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Relire en traducteur',
    opener: {
      line: 'Un tiers devenu le double, une idée perdue, une autre inventée : ici tu relis deux fois, avec l’anglais et sans lui. EN: A third turned into double, one idea lost, another invented: here you reread twice, with the English and without it.',
      imageRef: 'lessons/traduire-idees/act11.jpg',
    },
    sections: [],
    milestone: 'Tu nommes et tu corriges les fautes de sens, et tu relis toujours deux fois. EN: You name and fix meaning errors, and you always reread twice.',
    estScreens: 32, restPoints: ['a11-fautes'],
  },
  sections: [A11_LECTURE, A11_FAUTES, A11_TRIER, A11_HACKS, A11_VERSION, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TA TRADUCTION
 *
 *  The production act. The model is the French version of Fiona's library
 *  op-ed; the graded task translates ANOTHER op-ed (schoolyards), printed
 *  in the brief in its original English.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a12-modele', layer: 'core', questionsInModal: true,
  title: 'Gardons les lumières allumées', frSub: 'Une tribune traduite',
  text: MODELE_TEXT,
  glossary: [
    { word: 'appellent toutefois la prudence', en: 'call for caution, however', note: 'Invitent à ne pas conclure trop vite.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’essai a coïncidé avec la période des examens ». Que veut dire « coïncider » ici ?', a: 'Avoir lieu au même moment.' },
    { q: 'Quelle précaution traduit « arguably » ?', a: '« On peut soutenir que ».' },
    { q: 'Où la retenue anglaise a-t-elle été rendue avec sa vraie force ?', a: '« Le budget pose un vrai problème » : deux ateliers ont déjà été annulés.' },
    { q: 'Quels repères guident le lecteur dans la demande à la Ville ?', a: '« C’est pourquoi », « deux choses », « D’abord », « Ensuite ».' },
    { q: 'Quelles références ont été adaptées ?', a: 'Les degrés (plus de trente degrés) et l’image de la case départ.' },
    { q: 'Le texte français se lit-il comme une traduction ?', a: 'Non : il se lit comme une tribune écrite en français, et chaque idée de Fiona y est.' },
  ],
  audio: REC('rec-c1-22-modele'), say: REFRAME, terms: ['force', 'paragraphe'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-methode',
  title: 'Cinq étapes pour ta traduction',
  steps: [
    '1. Lis tout le texte ; repère la thèse, le ton et le plan. EN: read it all; find thesis, tone, plan.',
    '2. Traduis idée par idée, l’anglais fermé, puis vérifie que rien ne manque. EN: idea by idea, then check.',
    '3. Dose chaque précaution et chaque retenue comme l’auteure ; lis la suite avant de choisir. EN: match the force.',
    '4. Écris les liens et les repères ; allège les doublets ; adapte les références et les unités. EN: links, lightness, references.',
    '5. Relis deux fois : avec l’anglais pour le sens, sans lui pour le français. EN: two readings.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['deverbaliser', 'contresens'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu traduiras des idées',
  cases: [
    { situation: 'Une tribune anglaise doit paraître dans un journal francophone', fr: src(E(2333)).fr, en: src(E(2333)).en },
    { situation: 'Une auteure prudente avance une thèse', fr: src(E(2334)).fr, en: src(E(2334)).en },
    { situation: 'Un texte anglais aligne ses arguments sans liaison', fr: src(E(2335)).fr, en: src(E(2335)).en },
    { situation: 'Le texte cite des milles, des degrés Fahrenheit et du baseball', fr: src(E(2336)).fr, en: src(E(2336)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['equivalence', 'force'],
};

/** USE IT, out loud. Typographic ’ only. */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Odile te confie la tribune',
  setting: 'Le lendemain, au service de traduction. Odile te confie la tribune de Fiona sur les cours d’école, qui doit paraître en français la semaine prochaine, et te demande comment tu comptes t’y prendre.',
  turns: [
    {
      ai: 'Par quoi commences-tu ?', en: 'What do you start with?',
      user: src(E(2331)).fr, userEn: 'I read the whole text before writing a line. (Thesis, tone and plan first.)',
      alts: [
        { fr: src(E(2332)).fr, en: src(E(2332)).en },
        { fr: 'Par une lecture complète, pour savoir où Fiona veut aller.', en: 'With a full reading, to know where Fiona is heading.' },
      ],
    },
    {
      ai: 'Fiona écrit « arguably the cheapest policy ». Tu mets « sans aucun doute » ?', en: 'Fiona writes “arguably the cheapest policy”. Will you put “sans aucun doute”?',
      user: 'Non : j’écris « on peut soutenir que » ; je garde son degré de certitude.', userEn: 'No: I write “on peut soutenir que”; I keep her degree of certainty. (Hedging at the same force.)',
      alts: [
        { fr: src(E(2334)).fr, en: src(E(2334)).en },
        { fr: 'Non, ce serait la rendre plus sûre qu’elle ne l’est.', en: 'No, that would make her surer than she is.' },
      ],
    },
    {
      ai: 'Et « not a failure », pour le projet pilote ?', en: 'And “not a failure”, for the pilot?',
      user: 'Je garde la litote : « ce n’est pas un échec » produit le même effet en français.', userEn: 'I keep the understatement: “ce n’est pas un échec” has the same effect in French. (Understatement kept.)',
      alts: [
        { fr: 'La litote passe telle quelle : le projet pilote n’a pas été un échec.', en: 'The understatement carries over: the pilot was not a failure.' },
        { fr: 'Je la garde, puisque la suite montre un succès mesuré.', en: 'I keep it, since what follows shows a measured success.' },
      ],
    },
    {
      ai: '« Families came. Teenagers came. » Tu gardes ces phrases courtes ?', en: '“Families came. Teenagers came.” Will you keep those short sentences?',
      user: src(E(2335)).fr, userEn: 'I add the links French expects. (The thread made visible.)',
      alts: [
        { fr: 'Je peux garder le rythme, mais j’écris ce que ces phrases prouvent.', en: 'I can keep the rhythm, but I write what those sentences prove.' },
        { fr: 'Je les relie : les familles sont venues, les adolescents aussi.', en: 'I link them: families came, and so did teenagers.' },
      ],
    },
    {
      ai: 'Et le « ninety-degree day », le « ballpark figure » ?', en: 'And the “ninety-degree day”, the “ballpark figure”?',
      user: src(E(2336)).fr, userEn: 'I explain what my reader cannot know. (Units converted, images replaced.)',
      alts: [
        { fr: 'Plus de trente degrés, et un ordre de grandeur.', en: 'Over thirty degrees, and an order of magnitude.' },
        { fr: 'Je convertis en Celsius et je remplace l’image du baseball.', en: 'I convert to Celsius and replace the baseball image.' },
      ],
    },
    {
      ai: 'Tu me l’envoies dès que c’est fini ?', en: 'Will you send it as soon as it is finished?',
      user: src(E(2337)).fr, userEn: 'I reread with the English, then without it. (Two readings first.)',
      alts: [
        { fr: 'Après deux relectures : une avec l’anglais, une sans.', en: 'After two readings: one with the English, one without.' },
        { fr: 'Pas avant d’avoir vérifié chaque chiffre et chaque idée.', en: 'Not before checking every figure and every idea.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['force', 'contresens'],
};

/** THE GRADED TASK: Fiona's op-ed, rendered as natural French. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'La tribune sur les cours d’école', frSub: 'Mission écrite',
  brief: `La Fondation Arcelle publiera la semaine prochaine, dans un quotidien montréalais, la version française de cette tribune de Fiona Kerr. Odile te la confie. Voici le texte original, en anglais ; les chiffres sont inventés pour l’exercice. ${TASK_SOURCE_EN}`,
  briefEn: 'The Fondation Arcelle will publish the French version of this op-ed by Fiona Kerr in a Montréal daily next week. Odile hands it to you. The original English text is printed here so you can translate with it in front of you; every figure in it is invented for the exercise.',
  produce: 'Écris la version française de la tribune, de 250 à 400 mots, pour des lecteurs québécois. Garde chaque idée, la force de chaque précaution et de chaque retenue, et le fil de l’argument ; écris les liens et les repères qu’attend un lecteur français, allège les doublets, adapte les unités et les images.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'fidelite', label: 'Toutes les idées, rien de plus', maxPoints: 4, descriptors: [
        '4 : Chaque idée de l’original est là (thèse, projet pilote, objections, chaleur, rénovations, coût, proposition, conclusion), sans omission, sans ajout, et chaque chiffre est exact.',
        '3 : Une idée secondaire manque ou un détail est ajouté, sans changer le sens.',
        '2 : Une idée importante manque, ou un chiffre est faux, ou un ajout change le propos.',
        '1 : Plusieurs contresens ou omissions : le lecteur ne reçoit plus le texte de l’auteure.',
      ] },
      { key: 'force', label: 'La même force', maxPoints: 4, descriptors: [
        '4 : Les précautions (arguably, by most accounts, seems reasonable) et les retenues (not a failure, not without merit, a bit of a headache) sont rendues au même degré ; la proposition finale reste une suggestion polie et ferme.',
        '3 : Une précaution ou une retenue est un peu trop forte ou trop faible.',
        '2 : Plusieurs forces changent : l’auteure devient catégorique, ou au contraire hésitante.',
        '1 : Le ton et la certitude de l’original sont perdus.',
      ] },
      { key: 'fil', label: 'Le fil de l’argument', maxPoints: 3, descriptors: [
        '3 : L’ordre des idées est gardé ; les liens implicites (projet pilote réussi, objections réelles mais solubles, chaleur, donc rénovations) sont écrits avec des repères justes et sans empilement.',
        '2 : Le fil se suit, mais un lien manque ou un connecteur est mal choisi.',
        '1 : Une suite de phrases sans liens, ou un ordre bouleversé.',
      ] },
      { key: 'reformulation', label: 'Un français qui n’est pas une traduction', maxPoints: 3, descriptors: [
        '3 : Les phrases sont reformulées à partir de l’idée ; aucun calque de mot, de phrase ou d’expression ; les doublets anglais (each and every) sont allégés.',
        '2 : Quelques tournures suivent l’anglais de trop près.',
        '1 : Le texte suit l’ordre des mots anglais presque partout.',
      ] },
      { key: 'culture', label: 'Les références et le lecteur', maxPoints: 3, descriptors: [
        '3 : Les degrés sont convertis, l’image du baseball remplacée (ordre de grandeur, estimation), la case départ trouvée (ou une tournure française équivalente : repartir à zéro), le registre d’une tribune de quotidien respecté.',
        '2 : Une référence reste opaque, ou une explication est inutile.',
        '1 : Plusieurs références passent mot à mot.',
      ] },
      { key: 'langue', label: 'Une langue sûre', maxPoints: 3, descriptors: [
        '3 : Presque aucune erreur ; typographie française (espaces, guillemets, nombres).',
        '2 : Quelques erreurs qui ne gênent pas la lecture.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Ouvrons les cours d’école.',
    'On peut soutenir que…',
    'Le projet pilote n’a pas été un échec : …',
    'Les réserves des centres de services scolaires ne sont pas sans fondement.',
    'Or…',
    'C’est pourquoi…',
    'Un ordre de grandeur : …',
    'Nous proposons que la Ville…',
  ],
  modelAnswer: 'Ouvrons les cours d’école. Chaque fin de semaine, la Ville met sous clé son plus vaste réseau d’espaces publics. Du vendredi soir au lundi matin, les cours d’école restent vides, derrière leurs clôtures, dans les quartiers mêmes qui comptent le moins de parcs. On peut soutenir que les ouvrir serait la politique d’espaces verts la moins coûteuse à la portée de la Ville. Le projet pilote mené l’été dernier dans trois écoles n’a pas été un échec, de l’avis de la plupart des observateurs : les familles sont venues, les adolescents aussi, et les plaintes ont été rares. Les réserves des centres de services scolaires, il faut le reconnaître, ne sont pas sans fondement. L’assurance pose un vrai casse-tête, et il faut bien que quelqu’un ferme les grilles le soir. Mais ce sont des problèmes d’organisation, non de principe, et d’autres villes les ont réglés. Comme les étés sont de plus en plus chauds, l’argument devient plus difficile à écarter. Par une journée à plus de trente degrés, une cour asphaltée sans ombre ne sert pas à grand-chose ; une cour plantée d’arbres, avec une fontaine, devient un refuge. C’est pourquoi toute école rénovée à partir de maintenant devrait être conçue pour accueillir le public la fin de semaine. Combien cela coûterait-il ? Personne n’a encore de réponse précise, mais un ordre de grandeur de cinquante mille dollars par école, pour l’ombre et les fontaines, paraît raisonnable. Nous proposons que la Ville commence par les vingt écoles les plus éloignées d’un parc, et qu’elle dresse un bilan au bout d’un an. Ne rien faire nous ramènerait à la case départ : des enfants sans endroit où jouer, à quelques centaines de mètres d’une cour fermée à clé. Fiona Kerr, directrice de la recherche, Fondation Arcelle.',
  modelAnswerEn: 'Open the schoolyards. Every weekend, the city locks up its largest network of public space. From Friday evening to Monday morning, schoolyards sit empty behind their fences, in the very neighbourhoods that have the fewest parks. Arguably, opening them would be the cheapest green-space policy within the city’s reach. The pilot run last summer in three schools was not a failure, in the view of most observers: families came, so did teenagers, and complaints were rare. The school service centres’ reservations, it must be said, are not without merit. Insurance is a real headache, and someone does have to lock the gates at night. But these are problems of organisation, not of principle, and other cities have solved them. As summers are getting hotter, the case is becoming harder to dismiss. On a day of over thirty degrees, an asphalt yard with no shade is of little use; a yard planted with trees, with a fountain, becomes a refuge. That is why every school renovated from now on should be designed to welcome the public at weekends. How much would it cost? Nobody has a precise answer yet, but a ballpark figure of fifty thousand dollars per school, for shade and fountains, seems reasonable. We propose that the city start with the twenty schools furthest from a park, and review the results after a year. Doing nothing would take us back to square one: children with nowhere to play, a few hundred metres from a locked yard. Fiona Kerr, Director of Research, Fondation Arcelle.',
  watchFor: [
    { pattern: 'An idea, a figure or the conclusion left out (the three-school pilot, the insurance objection, the twenty schools, the one-year review, the closing image).', criterion: 'fidelite', feedback: 'Compte les idées de l’anglais, une par phrase, et coche-les dans ta version : il en manque une.', ref: 'a11-hacks' },
    { pattern: 'A figure changed (fifty thousand, twenty schools, three schools, one year) or a judgement added that Fiona does not make.', criterion: 'fidelite', feedback: 'Vérifie chaque chiffre à part, et retire tout jugement qui n’est pas dans l’original.', ref: 'a11-fautes' },
    { pattern: '« arguably » rendered as certainty (sans aucun doute, évidemment) or dropped; « seems reasonable » turned into « est raisonnable ».', criterion: 'force', feedback: 'Fiona propose une thèse défendable : « on peut soutenir que », « paraît raisonnable ».', ref: 'a3-table' },
    { pattern: 'Understatement read literally where the context shows real force (« a bit of a headache » as « un petit souci » when it is a real obstacle), or « not a failure » inflated into « un grand succès ».', criterion: 'force', feedback: 'Garde la litote quand elle passe ; sinon rends la vraie force, sans l’exagérer.', ref: 'a4-exemples' },
    { pattern: 'The final proposal turned into an order (« la Ville doit ») or into a vague wish. « Nous suggérerions que » is correct French and is NOT penalised.', criterion: 'force', feedback: 'Une proposition polie et ferme : « nous proposons que la Ville commence par… ».', ref: 'a1-scene' },
    { pattern: 'The short juxtaposed sentences translated as a bare list, with no link to what they prove; or connectors stacked.', criterion: 'fil', feedback: 'Écris ce que ces phrases prouvent, avec un repère par étape : les familles sont venues, les adolescents aussi.', ref: 'a5-reperes' },
    { pattern: 'Implicit links not written (« With the summers getting hotter » left as a bare participle; no « c’est pourquoi » before the renovation proposal).', criterion: 'fil', feedback: 'Écris la cause et la conséquence que l’anglais laissait deviner.', ref: 'a6-exemples' },
    { pattern: 'Word-for-word structure: noun stacks kept (« politique d’espace vert la moins chère disponible »), English word order, « each and every » doubled.', criterion: 'reformulation', feedback: 'Ferme l’anglais, dis l’idée, puis écris-la ; un seul mot quand un seul suffit.', ref: 'a2-methode' },
    { pattern: '« ninety-degree day » left in Fahrenheit; « ballpark figure » translated literally; « back at square one » rendered word for word (« la case un »).', criterion: 'culture', feedback: 'Plus de trente degrés ; un ordre de grandeur ; la case départ.', ref: 'a8-table' },
    { pattern: 'Explanations a Montréal reader does not need, or a register too familiar for an op-ed in a daily.', criterion: 'culture', feedback: 'N’explique que ce qui gêne la compréhension, et garde le registre d’une tribune.', ref: 'a10-table' },
    { pattern: 'French typography errors: no space before the colon, straight quotes, 50,000 with a comma, « 50 000$ » without the space.', criterion: 'langue', feedback: 'Une espace avant les deux-points, des guillemets français, 50 000 $.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'TARGET MOVES (grade these, not closeness to the English): (1) idea-level reformulation, not English word order; (2) « arguably » at the same force (on peut soutenir que, on pourrait dire que); « by most accounts » attributed (de l’avis de la plupart); « seems reasonable » kept hedged (paraît, semble raisonnable); (3) understatement handled by context: « not a failure » and « not without merit » may stay as French litotes; « a bit of a headache » may be rendered as a real difficulty (casse-tête, vrai problème) or kept light, both acceptable if the next sentence still reads as a solvable obstacle; (4) the thread: the juxtaposed « Families came. Teenagers came. » linked or framed, a cause written for « With the summers getting hotter », a consequence marker before the renovation proposal; (5) implicitation: « each and every school » → toute école / chaque école; (6) cultural equivalence: 90 °F → plus de trente degrés (or environ 32 degrés); « ballpark figure » → ordre de grandeur, estimation, chiffre approximatif; « back at square one » → la case départ, or repartir à zéro / tout serait à recommencer (Larousse gives both); (7) the proposal as a polite firm suggestion (nous proposons que, nous suggérons que, nous suggérerions que + subjonctif).',
    'DO NOT REWARD LITERALNESS. A version that follows the English word for word with no calque is NOT a top answer: cap « reformulation » at 2 and « fil » at 2 when the French keeps the English sentence order and juxtapositions throughout. Conversely, never penalise a reordering inside a paragraph that keeps every idea and the argument’s order.',
    'Do not penalise a correct literal rendering where it is natural (lesson 33 in B2: if the literal sentence is natural, keep it): « Les familles sont venues » is fine.',
    'Word count: 250 to 400, 10% tolerance (225 to 440) before « fidelite » loses a point. The signature does not count.',
    'Québec readers: « fin de semaine » and « week-end » both accepted; « commission scolaire » or « centre de services scolaire » both accepted for « school boards »; « soccer » not required. Do not mark France or Québec vocabulary as errors.',
    'Over-translation: an explanation the reader does not need (what an asphalt yard is, what Thanksgiving is) counts under « culture », one point at most.',
    'Individual faux amis (opportunité, éventuellement, définitivement…) count under « reformulation » only if they distort the meaning; they belong to other lessons.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['force', 'paragraphe'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis les gestes du traducteur à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['deverbaliser'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-force',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'l’idée', v: 'lire jusqu’au point, fermer l’anglais, dire, vérifier', say: src(E(2209)).fr,
      detail: { title: 'Déverbaliser', body: 'Un groupe nominal empilé devient une proposition avec un verbe. EN: idea first, then words.', say: src(E(2217)).fr } },
    { k: 'la force', v: 'le même degré de certitude, la retenue lue dans son contexte', say: src(E(2231)).fr,
      detail: { title: 'Ni plus, ni moins', body: 'On peut soutenir que, avoir tendance à, semble indiquer ; la litote gardée quand elle passe. EN: same certainty, same strength.', say: src(E(2221)).fr } },
    { k: 'le fil', v: 'l’ordre des idées gardé, les repères ajoutés', say: src(E(2254)).fr,
      detail: { title: 'Annoncer, articuler', body: 'Trois raisons, la première, or, c’est pourquoi. EN: keep the order, add signposts.', say: src(E(2250)).fr } },
    { k: 'expliciter, alléger', v: 'écrire les liens, dire une fois ce qui est doublé', say: src(E(2259)).fr,
      detail: { title: 'Ni trop, ni trop peu', body: 'Si bien que, mais, comme ; chacun, le résultat, actuellement. EN: write the link, drop the doublet.', say: src(E(2270)).fr } },
    { k: 'le lecteur', v: 'références, unités, public, résumé', say: src(E(2282)).fr,
      detail: { title: 'Pour qui, pour quoi faire', body: 'Garder, expliquer, remplacer, généraliser ; vous ou tu selon le public ; un résumé attribué. EN: the reader decides.', say: src(E(2308)).fr } },
    { k: 'relire', v: 'avec l’anglais pour le sens, sans lui pour le français', say: src(E(2324)).fr,
      detail: { title: 'Cinq fautes', body: 'Faux sens, contresens, non-sens, omission, ajout. EN: two readings catch them.', say: src(E(2325)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['force', 'contresens'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne traduis plus des mots mais des idées. Tu comprends une phrase anglaise entière avant de la dire en français ; tu rends ses précautions et sa retenue au même degré de force ; tu gardes le fil d’un paragraphe en ajoutant les repères qu’attend un lecteur français ; tu écris les liens que l’anglais laisse deviner et tu allèges ce qu’il dit deux fois ; tu fais passer une référence par son effet ; tu résumes d’une langue à l’autre et tu adaptes un texte à son public. Le piège qui reste : traduire juste et pourtant changer la force. Avant de livrer ta prochaine traduction, relis seulement les verbes et les adverbes de certitude, et compare-les un par un à l’anglais. EN: Before delivering your next translation, reread only the certainty words and compare each one with the English.',
  stats: [
    { k: 'L’idée', v: 'déverbaliser, reformuler' },
    { k: 'La force', v: 'précautions, retenue' },
    { k: 'Le fil', v: 'repères, liens, allègement' },
    { k: 'Le lecteur', v: 'références, public, résumé' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11, each
 *  targeting a distinct errorTrigger. Typed answers are one-word completions
 *  or one-word repairs of a lesson sentence, with the natural variants
 *  listed (fold() compares the WHOLE answer). The authored slots are then
 *  spread by `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_REGLE = 'Un mot trahit la règle de la leçon. Écris la phrase juste. EN: One word betrays the lesson’s rule; write the right sentence.';
const ES_FORCE = 'Cette phrase a perdu la force d’une demande polie mais ferme. Écris une version qui la rend. EN: This sentence lost the force of a polite but firm request; write a version that conveys it.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_REGLE): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const C1 = 'Complète. Un mot.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-force', label: 'Juste mais faux', targets: ['traduction-sans-force'],
      questions: [
        mc('Pourquoi la version de Malik a-t-elle trompé la directrice ?', ['Elle a perdu la force de la demande de Fiona.', 'Elle contenait trois calques.', 'Elle était trop longue.'], 0, 'Tout était correct ; la force manquait. EN: the force was lost.', 'a1-scene'),
        mc('Un texte porte à son lecteur trois choses à garder :', ['une idée, une force et un fil', 'des mots, des virgules et des paragraphes', 'un titre, une date et une signature'], 0, 'Le reste peut changer. EN: idea, force, thread.', 'a1-check'),
        mc('« That said, we might want to revisit the timeline. » (une demande ferme) Quelle version garde la force ?', [src(E(2201)).fr, WRONG_A1.fr, 'Cela dit, revoir le calendrier serait peut-être envisageable un jour.'], 0, 'La politesse reste, la demande arrive. EN: polite and firm.', 'a1-scene'),
        tI('Complète la règle. Un mot.', 'Garde ce que le texte fait à son … .', 'lecteur', 'Tout se juge à l’effet sur le lecteur. EN: reader.', 'a1-scene'),
        tI(C1, 'Je traduis la …, pas seulement les mots.', 'demande', 'Ce que Fiona veut obtenir. EN: request.', 'a1-usages', ['pensée', 'force', 'intention', 'requête']),
        tI(C1, 'Une phrase juste ne suffit pas : il faut un … juste.', 'texte', 'Le texte entier, avec sa force et son fil. EN: text.', 'a1-usages', ['paragraphe']),
        eS(WRONG_A1.fr, src(E(2201)).fr, '« Nous pourrions éventuellement » sonne comme une hypothèse lointaine. EN: make it a request.', 'a1-lecture',
          ['Cela dit, il conviendrait de revoir le calendrier.', 'Il faudrait toutefois revoir le calendrier.', 'Toutefois, il conviendrait de revoir le calendrier.', 'Il conviendrait cependant de revoir le calendrier.',
           'Il conviendrait néanmoins de revoir le calendrier.', 'Cela dit, il faudrait revoir le calendrier.', 'Il faudrait cependant revoir le calendrier.', 'Il faudrait néanmoins revoir le calendrier.',
           'Cela dit, il serait bon de revoir le calendrier.', 'Cela dit, nous devrions revoir le calendrier.', 'Nous devrions toutefois revoir le calendrier.', 'Il y aurait toutefois lieu de revoir le calendrier.'], ES_FORCE),
        lC('Écoute. Cette phrase dit-elle une demande ou une hypothèse lointaine ?', src(E(2201)).fr, ['une demande, dite poliment', 'une hypothèse lointaine'], 0, 'Le conditionnel de politesse porte une demande. EN: a polite request.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-idee', label: 'L’idée avant les mots', targets: ['mot-a-mot'],
      questions: [
        mc('Déverbaliser, c’est...', ['garder l’idée et lâcher les mots anglais', 'supprimer les détails', 'traduire mot à mot puis corriger'], 0, 'L’idée reste entière. EN: keep the idea.', 'a2-methode'),
        mc('« Transit-poor neighbourhoods are also income-poor. » Laquelle est la plus naturelle ?', [src(E(2213)).fr, 'Les quartiers pauvres en transport sont aussi pauvres en revenu.', 'Les quartiers transit-pauvres sont aussi revenu-pauvres.'], 0, 'L’idée passe ; le jeu de mots, non. EN: the idea carries.', 'a2-erreurs'),
        mc('Une phrase anglaise très longue peut devenir...', ['deux phrases françaises, si rien ne se perd', 'une phrase française qui laisse tomber une idée'], 0, 'La forme change, le contenu reste. EN: two sentences, nothing lost.', 'a2-trier'),
        tI(C1, 'Je lis la phrase jusqu’au …, puis je ferme l’anglais.', 'point', 'Comprendre la phrase entière d’abord. EN: full stop.', 'a2-methode', ['bout']),
        tI(C1, 'J’écris l’idée, puis je vérifie qu’il ne … rien.', 'manque', 'Le contrôle final. EN: nothing missing.', 'a2-methode'),
        tI(C1, 'Les quartiers les plus mal … par les transports sont aussi les plus pauvres.', 'desservis', 'Un participe pour l’adjectif anglais composé. EN: served.', 'a2-trier'),
        eS('J’écris l’idée, puis je vérifie qu’il ne manque aucun mot.', src(E(2219)).fr, 'On vérifie les idées, pas les mots. EN: ideas, not words.', 'a2-methode', ['J’écris l’idée, puis je vérifie qu’il ne manque aucune idée.', 'J’écris l’idée, puis je vérifie que rien ne manque.']),
        lC('Écoute. Cette phrase garde-t-elle l’ordre des mots anglais ?', src(E(2211)).fr, ['Non : elle dit l’idée avec un verbe.', 'Oui : mot pour mot.'], 0, 'Cinq noms anglais sont devenus une phrase. EN: a clause.', 'a2-trier'),
      ],
    },
    {
      id: 'r3-attenuer', label: 'Atténuer comme l’auteur', targets: ['certitude-faussee'],
      questions: [
        mc('« Arguably, free admission played a part. »', [src(E(2221)).fr, 'Sans aucun doute, la gratuité a joué un rôle.', 'La gratuité n’a joué aucun rôle.'], 0, 'Une thèse défendable (Larousse). EN: arguably.', 'a3-table'),
        mc('« These results would seem to suggest a link. » Laquelle garde la certitude ?', [src(E(2220)).fr, 'Ces résultats prouvent un lien.', 'Ces résultats sembleraient peut-être pouvoir suggérer un lien.'], 0, 'Une précaution, bien placée. EN: one hedge.', 'a3-piege'),
        mc('« Younger readers tend to come in the evening. »', [src(E(2223)).fr, 'Les jeunes lecteurs viennent toujours le soir.'], 0, 'Une tendance, pas une loi. EN: tend to.', 'a3-table'),
        tI(C1, '« It may be worth revisiting the method » : il … peut-être utile de revoir la méthode.', 'serait', 'Le conditionnel garde la prudence. EN: would be.', 'a3-table', ['est']),
        tI(C1, '« To some extent » : dans une certaine … .', 'mesure', `Vu dans ${ACADEMIQUE_REF}. EN: extent.`, 'a3-table'),
        tI(C1, 'Je garde le degré de … de l’auteur.', 'certitude', 'Ni plus, ni moins. EN: certainty.', 'a3-version'),
        eS('Je garde le degré de certitude de l’auteur, ou un peu plus.', src(E(2231)).fr, 'Jamais plus sûr que l’auteur. EN: no more, no less.', 'a3-piege', ['Je garde le degré de certitude de l’auteur.']),
        lC('Écoute. Cette phrase affirme-t-elle un fait prouvé ?', src(E(2230)).fr, ['Non : elle ouvre une piste.', 'Oui : elle prouve un lien.'], 0, 'L’étude ne prouve rien. EN: a lead, not proof.', 'a3-trier'),
      ],
    },
    {
      id: 'r4-retenue', label: 'La retenue anglaise', targets: ['retenue-litterale'],
      questions: [
        mc('« We are not unhappy with the results. »', [src(E(2238)).fr, 'Nous sommes ravis des résultats.', 'Nous sommes mécontents des résultats.'], 0, 'La litote passe telle quelle. EN: keep it.', 'a4-exemples'),
        mc('« The budget is a bit of a problem: we will have to cancel two workshops. » Le problème est...', ['un vrai problème', 'un petit problème'], 0, 'Deux ateliers annulés : c’est sérieux. EN: a real problem.', 'a4-ecoute'),
        mc('Pour choisir la force d’une phrase retenue, tu regardes d’abord...', ['le contexte, souvent la phrase suivante', 'la longueur de la phrase', 'la première traduction du dictionnaire'], 0, 'La suite dit la vraie force. EN: the context.', 'a4-version'),
        tI(C1, 'Ce n’est pas … du tout. (Not bad at all.)', 'mal', 'Même litote en français. EN: bad.', 'a4-exemples'),
        tI(C1, 'Garde sa politesse, mais rends la … .', 'gravité', 'La force, sans brutalité. EN: gravity.', 'a4-ecoute', ['force']),
        tI(C1, 'Je lis la phrase … avant de choisir la force.', 'suivante', 'Le contexte décide. EN: next.', 'a4-version'),
        eS('Le français a ses propres litotes : défais-les toujours.', 'Le français a ses propres litotes : garde-les quand elles produisent le même effet.', 'On ne défait une litote que si le lecteur la lirait autrement. EN: keep them when they work.', 'a4-exemples',
          ['Le français a ses propres litotes : garde-les.', 'Le français a ses propres litotes : garde-les souvent.']),
        lC('Écoute. Que veut dire Odile ?', src(E(2243)).fr, ['C’est un problème sérieux, dit poliment.', 'C’est un problème sans importance.'], 0, 'La retenue de Fiona cache un vrai problème. EN: serious, said politely.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-fil', label: 'Le fil du paragraphe', targets: ['liste-sans-fil'],
      questions: [
        mc('Un paragraphe anglais part souvent...', ['de son idée principale', 'd’une anecdote', 'd’une question'], 0, 'La phrase principale d’abord. EN: topic sentence.', 'a5-lecture'),
        mc('« There are three reasons for this choice. » Laquelle annonce le chemin ?', [src(E(2250)).fr, 'Ce choix. Trois raisons.'], 0, 'Une phrase d’annonce complète. EN: announce.', 'a5-reperes'),
        mc('En ajoutant des repères, tu changes...', ['seulement la visibilité des liens', 'la thèse de l’auteur', 'l’ordre des arguments'], 0, 'Le fil reste le même. EN: only the signposts.', 'a5-erreurs'),
        tI(C1, '… ces horaires ne conviennent pas aux familles. (But these hours do not suit families.)', 'Or', '« Or » relance l’argument. EN: but, yet.', 'a5-reperes', ['Mais', 'Pourtant']),
        tI(C1, 'C’est … nous proposons d’ouvrir le dimanche.', 'pourquoi', 'La conséquence, écrite. EN: why.', 'a5-reperes'),
        tI(C1, 'La deuxième, plus …, tient aux horaires. (Second, and more importantly…)', 'décisive', 'La hiérarchie reste. EN: decisive.', 'a5-reperes', ['importante', 'déterminante']),
        eS('Je change l’ordre des idées, et je rends les liens visibles.', src(E(2254)).fr, 'L’ordre appartient à l’auteur. EN: keep the order.', 'a5-trier', ['Je garde l’ordre des idées, et je rends les liens visibles.']),
        lC('Écoute. Cette phrase annonce-t-elle un plan ?', src(E(2250)).fr, ['Oui : trois raisons vont suivre.', 'Non : elle conclut.'], 0, 'Elle annonce le chemin. EN: it announces.', 'a5-reperes'),
      ],
    },
    {
      id: 'r6-expliciter', label: 'Expliciter', targets: ['lien-implicite'],
      questions: [
        mc('« Rents rose. Families left. » Laquelle écrit le lien que l’anglais laisse deviner ?', [src(E(2259)).fr, 'Les loyers ont augmenté. Les familles sont parties.', 'Les loyers ont augmenté parce que les familles sont parties.'], 0, 'La conséquence, dans le bon sens. EN: the consequence.', 'a6-exemples'),
        mc('« The project was approved and the funding never came. » Le « and » veut dire...', ['mais', 'donc', 'parce que'], 0, 'Une opposition. EN: but.', 'a6-trier'),
        mc('Expliquer à ton lecteur ce qu’est un bénévole, c’est...', ['trop expliquer', 'une bonne explicitation'], 0, 'Il le sait déjà. EN: over-explaining.', 'a6-piege'),
        tI('Complète. Deux mots.', 'Les loyers ont augmenté, … que les familles sont parties.', 'si bien', 'Une conséquence. EN: so that.', 'a6-exemples', ['de sorte']),
        tI(C1, '… de bénévoles, l’atelier a fermé.', 'Faute', 'La cause, en un mot. EN: for lack of.', 'a6-exemples'),
        tI(C1, 'Les prix ont augmenté, et les ventes ont … baissé.', 'donc', 'La conséquence, écrite. EN: so.', 'a6-trier', ['alors']),
        eS('J’ajoute une idée : je montre celle qui était là.', src(E(2265)).fr, 'Expliciter n’ajoute rien. EN: add no idea.', 'a6-version'),
        lC('Écoute. Quel lien la phrase écrit-elle ?', src(E(2261)).fr, ['la cause', 'l’opposition'], 0, '« Comme » introduit la cause. EN: cause.', 'a6-exemples'),
      ],
    },
    {
      id: 'r7-alleger', label: 'Alléger', targets: ['doublet-garde'],
      questions: [
        mc('« Each and every one of you has received the file. »', [src(E(2270)).fr, 'Chacun et chaque un de vous a reçu le dossier.'], 0, 'Un seul tour (Larousse). EN: chacun.', 'a7-table'),
        mc('« Our future plans remain the same. »', [src(E(2274)).fr, 'Nos projets futurs pour l’avenir restent les mêmes.'], 0, 'Un projet regarde déjà l’avenir. EN: plans.', 'a7-table'),
        mc('Alléger une phrase peut-il supprimer une idée ?', ['Jamais.', 'Oui, si elle est secondaire.'], 0, 'Des mots, jamais des idées. EN: never.', 'a7-version'),
        tI(C1, '« The end result surprised everyone » : le … a surpris tout le monde.', 'résultat', 'Un résultat est déjà une fin. EN: result.', 'a7-table'),
        tI(C1, '« At this point in time, no date has been set » : …, aucune date n’est fixée.', 'Actuellement', 'Un mot pour cinq. EN: currently.', 'a7-table', ['Aujourd’hui', 'Présentement']),
        tI(C1, '« In the event that the meeting is cancelled » : … la réunion est annulée, nous vous préviendrons.', 'Si', 'Une condition en un mot. EN: if.', 'a7-trier'),
        eS('Le français double ce qu’un seul mot dit déjà.', src(E(2278)).fr, 'Il ne double pas. EN: French does not say it twice.', 'a7-table'),
        lC('Écoute. Cette phrase contient-elle un doublet ?', src(E(2273)).fr, ['Non : « le résultat » suffit.', 'Oui : elle dit deux fois la même chose.'], 0, 'Le doublet anglais est tombé. EN: no doublet.', 'a7-table'),
      ],
    },
    {
      id: 'r8-equivalence', label: 'L’équivalence culturelle', targets: ['reference-opaque'],
      questions: [
        mc('« Give us a ballpark figure. »', [src(E(2282)).fr, 'Donnez-nous un chiffre de stade de baseball.'], 0, 'L’effet, pas l’image (OQLF, Larousse). EN: approximate figure.', 'a8-table'),
        mc('« We are back to square one. »', [src(E(2285)).fr, 'Nous sommes revenus au carré un.'], 0, 'L’image française (Larousse). EN: case départ.', 'a8-table'),
        mc('« It was over ninety degrees. » (Fahrenheit) Pour un lecteur québécois :', [src(E(2287)).fr, 'Il faisait plus de quatre-vingt-dix degrés.'], 0, '90 °F font environ 32 °C. EN: convert.', 'a8-erreurs'),
        tI(C1, 'Ce n’est que la partie … de l’iceberg.', 'émergée', 'La forme française de l’image (Larousse). EN: visible part.', 'a8-table', ['visible']),
        tI(C1, 'La course fait environ cinq … . (about three miles)', 'kilomètres', 'Un mille vaut environ 1,6 kilomètre. EN: kilometres.', 'a8-table', ['km']),
        tI(C1, 'Une référence culturelle se traduit par l’… qu’elle produit.', 'effet', 'Le même effet sur ton lecteur. EN: effect.', 'a8-version'),
        eS('Je garde, j’explique, je remplace ou je traduis mot à mot.', src(E(2289)).fr, 'Le quatrième geste est de généraliser. EN: generalise.', 'a8-trier'),
        lC('Écoute. Quel geste le traducteur a-t-il fait ?', src(E(2284)).fr, ['Il a gardé une image que le français partage.', 'Il a remplacé l’image par un chiffre.'], 0, 'Même image, mots français. EN: a shared image.', 'a8-table'),
      ],
    },
    {
      id: 'r9-resume', label: 'Résumer en traduisant', targets: ['resume-infidele'],
      questions: [
        mc('Un résumé traduit garde...', ['la thèse, les arguments et leur ordre', 'les exemples et les anecdotes', 'l’avis du traducteur'], 0, 'L’idée et le fil. EN: thesis and thread.', 'a9-etapes'),
        mc('Quel début de résumé est juste ?', [src(E(2293)).fr, 'Les bibliothèques sont devenues des refuges, et c’est une excellente chose.', 'L’auteure se souvient de sa grand-mère.'], 0, 'La thèse, attribuée, sans avis. EN: attributed thesis.', 'a9-trier'),
        mc('Pour résumer un article anglais en français, tu...', ['écris directement en français', 'traduis tout, puis coupes'], 0, 'Un résumé écrit, pas une traduction coupée. EN: write in French.', 'a9-etapes'),
        tI(C1, 'L’auteure … que ce rôle mérite d’être financé. (argues)', 'soutient', 'Un verbe qui attribue. EN: argues.', 'a9-etapes', ['estime', 'affirme', 'avance', 'considère', 'pense']),
        tI(C1, 'Un résumé traduit ne donne jamais mon … .', 'avis', 'Le résumé rend l’auteure. EN: opinion.', 'a9-version', ['opinion']),
        tI(C1, 'Ces positions sont celles de l’auteure et n’… pas la Fondation.', 'engagent', 'La formule française attendue. EN: commit.', 'a9-version'),
        eS('Je garde les exemples et les anecdotes.', src(E(2296)).fr, 'Les détails tombent. EN: drop them.', 'a9-etapes', ['Je laisse tomber les exemples et les anecdotes.', 'Je supprime les exemples et les anecdotes.']),
        lC('Écoute. Que demande Malik ?', src(E(2303)).fr, ['un résumé de cent vingt mots au plus', 'une traduction complète'], 0, 'Un résumé, pas une traduction. EN: a summary.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-public', label: 'Changer de public', targets: ['public-ignore'],
      questions: [
        mc('Pour des urbanistes, « Street trees reduce the urban heat island effect » :', [src(E(2309)).fr, src(E(2311)).fr], 0, 'Leurs termes, sans explication. EN: experts’ terms.', 'a10-table'),
        mc('Pour le compte jeunesse, qui tutoie déjà :', [src(E(2317)).fr, src(E(2316)).fr], 0, 'La voix du compte. EN: tu.', 'a10-piege'),
        mc('D’une version à l’autre, qu’est-ce qui ne change jamais ?', ['le fond', 'le vocabulaire', 'la longueur'], 0, 'Le fait reste le même. EN: the substance.', 'a10-table'),
        tI(C1, 'Le registre suit le …, pas la langue de départ.', 'public', 'Le public choisit. EN: audience.', 'a10-table', ['lecteur']),
        tI(C1, 'Les arbres plantés le long des rues … la ville.', 'rafraîchissent', 'Une image concrète pour le grand public. EN: cool.', 'a10-table'),
        tI(C1, 'Pour le grand public, un terme technique s’explique ou se … .', 'remplace', 'Pas de jargon. EN: is replaced.', 'a10-table'),
        eS('Plus d’arbres dans ta rue, et plus aucune chaleur en été.', src(E(2311)).fr, 'Moins de chaleur, pas la fin de la chaleur : ne promets pas plus que la source. EN: never overstate.', 'a10-piege', ['Plus d’arbres dans ta rue, et moins de chaleur en été.']),
        lC('Écoute. À quel public s’adresse cette phrase ?', src(E(2316)).fr, ['des lecteurs qu’on vouvoie', 'un compte jeunesse qui tutoie'], 0, '« Nous vous invitons » : le vouvoiement. EN: vous.', 'a10-table'),
      ],
    },
    {
      id: 'r11-relire', label: 'Relire en traducteur', targets: ['relecture-unique'],
      questions: [
        mc('« Attendance fell slightly » traduit par « la fréquentation a nettement augmenté » :', ['un contresens', 'un faux sens', 'un ajout'], 0, 'Le sens est inversé. EN: contresens.', 'a11-fautes'),
        mc('« vulnerable users » traduit par « les usagers sensibles » :', ['un faux sens', 'un contresens', 'une omission'], 0, 'Proche, mais pas le sens précis. EN: faux sens.', 'a11-lecture'),
        mc('Une phrase française qui ne veut rien dire :', ['un non-sens', 'un faux sens'], 0, 'Souvent une construction copiée. EN: non-sens.', 'a11-fautes'),
        tI(C1, 'Il manque une idée : c’est une … .', 'omission', 'Une idée perdue. EN: omission.', 'a11-fautes'),
        tI(C1, 'Deux relectures : avec l’anglais pour le …, sans l’anglais pour le français.', 'sens', 'La première protège le sens. EN: meaning.', 'a11-version'),
        tI(C1, 'Une traduction se juge à l’… qu’elle produit sur son lecteur.', 'effet', 'Le critère de la leçon. EN: effect.', 'a11-lecture'),
        eS('Je relis avec l’anglais, puis avec lui encore.', src(E(2337)).fr, 'La deuxième lecture se fait sans l’anglais. EN: then without it.', 'a11-version'),
        lC('Écoute. Cette version garde-t-elle la force de « arguably » ?', src(E(2221)).fr, ['Oui : une thèse défendable.', 'Non : elle force la certitude.'], 0, '« On peut soutenir que » garde la prudence. EN: same force.', 'a11-trier'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text. */
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
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'garder l’idée, lâcher les mots anglais', back: 'déverbaliser', say: src(E(2209)).fr },
    { front: 'arguably', back: 'on peut soutenir que', say: src(E(2221)).fr },
    { front: 'tend to', back: 'avoir tendance à', say: src(E(2223)).fr },
    { front: 'we are not unhappy', back: 'nous ne sommes pas mécontents', say: src(E(2238)).fr },
    { front: 'annoncer le chemin d’un paragraphe', back: 'trois raisons expliquent…', say: src(E(2250)).fr },
    { front: 'écrire le lien que l’anglais laisse deviner', back: 'expliciter', say: src(E(2259)).fr },
    { front: 'each and every one of you', back: 'chacun d’entre vous', say: src(E(2270)).fr },
    { front: 'a ballpark figure', back: 'un ordre de grandeur', say: src(E(2282)).fr },
    { front: 'une traduction qui dit le contraire', back: 'un contresens', say: src(E(2320)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Traduire des idées, en résumé',
  body: `${REFRAME} Tu comprends avant d’écrire, tu rends la force des précautions et de la retenue, tu gardes le fil en ajoutant des repères, tu écris les liens implicites et tu allèges les doublets, tu fais passer chaque référence par son effet, tu résumes et tu adaptes au public, puis tu relis deux fois. La suite du parcours C1 reste dans la médiation : écrire pour un lecteur précis, avec tact, dans le monde du travail. EN: Next, the C1 trail stays with mediation: writing for a specific reader, with tact, at work.`,
  points: [
    'L’idée : lire, fermer l’anglais, dire, vérifier.',
    'La force : le même degré de certitude ; la retenue lue dans son contexte.',
    'Le fil : l’ordre gardé, les liens écrits, les doublets allégés.',
    'Le lecteur : références, public, résumé ; deux relectures.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['force', 'contresens'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ta traduction',
    opener: {
      line: 'Une tribune anglaise, un quotidien montréalais, une semaine : à toi de rendre l’idée, la force et le fil de Fiona en français. EN: An English op-ed, a Montréal daily, one week: your turn to carry Fiona’s idea, force and thread into French.',
      imageRef: 'lessons/traduire-idees/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as traduit une tribune entière en français naturel et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You translated a whole op-ed into natural French and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-modele', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-attenuer', 'a12-quiz/r6-expliciter', 'a12-quiz/r9-resume'],
  },
  sections: [
    A12_MODELE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-force', title: 'Ce que le texte fait', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : ce sont les réflexes du traducteur d’idées. EN: say each line aloud.', items: [E(2203), E(2204), E(2205), E(2206), E(2207), E(2208)], audio: AUDIO },
  { id: 'd-idee', title: 'L’idée d’abord', format: 'flashcard' as const, coach: 'Lis chaque paire : l’anglais au dos, l’idée en français devant. EN: read each pair.', items: [E(2209), E(2210), E(2211), E(2213), E(2217), E(2219)], audio: AUDIO },
  { id: 'd-attenuer', title: 'Le même degré de certitude', format: 'mcq' as const, coach: 'Une précaution anglaise, une précaution française, même force. EN: same certainty.', q: '« Arguably » : … que la gratuité a joué un rôle.', opts: ['On peut soutenir', 'Il est certain'], correct: 0, why: 'Une thèse défendable, pas une certitude. EN: arguably.', items: [E(2220), E(2221), E(2223), E(2225), E(2228), E(2231)], audio: AUDIO },
  { id: 'd-retenue', title: 'La retenue, lue dans son contexte', format: 'mcq' as const, coach: 'Lis la suite avant de choisir la force. EN: read on first.', q: '« The budget is a bit of a problem: we will cancel two workshops. » Le budget pose un … problème.', opts: ['vrai', 'petit'], correct: 0, why: 'Deux ateliers annulés : c’est sérieux. EN: a real problem.', items: [E(2232), E(2234), E(2235), E(2236), E(2238), E(2239)], audio: AUDIO },
  { id: 'd-fil', title: 'Les repères du paragraphe', format: 'flashcard' as const, coach: 'Dis chaque repère à voix haute : annoncer, numéroter, relancer, conclure. EN: say each signpost.', items: [E(2250), E(2251), E(2252), E(2253), E(2256), E(2257)], audio: AUDIO },
  { id: 'd-expliciter', title: 'Écrire le lien', format: 'mcq' as const, coach: 'Le lien était dans l’anglais ; écris-le. EN: write the link.', q: '« Rents rose. Families left. » Les loyers ont augmenté, … les familles sont parties.', opts: ['si bien que', 'bien que'], correct: 0, why: 'Une conséquence. EN: so that.', items: [E(2259), E(2260), E(2261), E(2267), E(2268), E(2269)], audio: AUDIO },
  { id: 'd-alleger', title: 'Un mot quand un mot suffit', format: 'flashcard' as const, coach: 'Lis chaque paire : la lourdeur anglaise au dos, le français allégé devant. EN: read each pair.', items: [E(2270), E(2271), E(2272), E(2273), E(2274), E(2275)], audio: AUDIO },
  { id: 'd-equivalence', title: 'Le même effet', format: 'mcq' as const, coach: 'Une référence se traduit par son effet. EN: translate the effect.', q: '« a ballpark figure » :', opts: ['un ordre de grandeur', 'un chiffre de baseball'], correct: 0, why: 'L’image ne parle pas ; l’effet, si. EN: approximate figure.', items: [E(2282), E(2283), E(2284), E(2285), E(2286), E(2287)], audio: AUDIO },
  { id: 'd-resume', title: 'Résumer et attribuer', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : la méthode du résumé traduit. EN: the summary method.', items: [E(2293), E(2294), E(2295), E(2296), E(2297), E(2298)], audio: AUDIO },
  { id: 'd-public', title: 'La voix du public', format: 'mcq' as const, coach: 'Le public choisit le registre. EN: the audience decides.', q: 'Le compte jeunesse tutoie. « Read the full report online. »', opts: ['Découvre le rapport complet en ligne.', 'Nous vous invitons à découvrir le rapport complet.'], correct: 0, why: 'La voix du compte : tu. EN: tu.', items: [E(2308), E(2309), E(2310), E(2311), E(2316), E(2317)], audio: AUDIO },
  { id: 'd-relire', title: 'Deux relectures', format: 'flashcard' as const, coach: 'Dis chaque question à voix haute : la grille du réviseur. EN: the reviser’s questions.', items: [E(2322), E(2323), E(2324), E(2325), E(2327), E(2328)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'traduction-sans-force', description: 'Produces a correct, calque-free translation that changes what the text does to its reader: a firm request read as a remote possibility.', detectOn: ['a1-scene', 'a1-rappel', 'a1-check', 'a12-mission'], drill: 'd-force', retest: 'd-force' },
  { id: 'mot-a-mot', description: 'Follows the English word order and keeps noun stacks instead of saying the idea with a verb.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-idee', retest: 'd-idee' },
  { id: 'certitude-faussee', description: 'Renders an English hedge stronger or weaker than the original, or translates three stacked hedges word for word.', detectOn: ['a3-trier', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-attenuer', retest: 'd-attenuer' },
  { id: 'retenue-litterale', description: 'Takes English understatement literally when the context shows real force, or undoes a litote French reads the same way.', detectOn: ['a4-ecoute', 'a4-trier', 'a4-check', 'a12-mission'], drill: 'd-retenue', retest: 'd-retenue' },
  { id: 'liste-sans-fil', description: 'Translates a topic-sentence paragraph as a bare list, with no announcement or articulation, or changes the order of ideas.', detectOn: ['a5-trier', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-fil', retest: 'd-fil' },
  { id: 'lien-implicite', description: 'Leaves implicit English links unwritten (juxtaposition, and meaning but, absolute constructions), or adds ideas and explanations the reader does not need.', detectOn: ['a6-trier', 'a6-piege', 'a6-check', 'a12-mission'], drill: 'd-expliciter', retest: 'd-expliciter' },
  { id: 'doublet-garde', description: 'Keeps English doublets and padding (each and every, end result, at this point in time) or drops an idea while lightening.', detectOn: ['a7-trier', 'a7-dictee', 'a7-check', 'a12-mission'], drill: 'd-alleger', retest: 'd-alleger' },
  { id: 'reference-opaque', description: 'Carries a cultural reference word for word (ballpark figure, miles, Fahrenheit) or explains what the reader already knows.', detectOn: ['a8-trier', 'a8-erreurs', 'a8-check', 'a12-mission'], drill: 'd-equivalence', retest: 'd-equivalence' },
  { id: 'resume-infidele', description: 'Summarises by translating then cutting, keeps anecdotes, drops attribution or adds an opinion.', detectOn: ['a9-ecoute', 'a9-trier', 'a9-check'], drill: 'd-resume', retest: 'd-resume' },
  { id: 'public-ignore', description: 'Keeps the source register for every audience, explains terms to experts, uses vous where the account says tu, or promises more than the source.', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-public', retest: 'd-public' },
  { id: 'relecture-unique', description: 'Rereads once, with the English only, and misses contresens, faux sens, non-sens, omissions and additions.', detectOn: ['a11-trier', 'a11-version', 'a11-check', 'a12-mission'], drill: 'd-relire', retest: 'd-relire' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-methode', 'Traduire une idée', ['déverbaliser', 'les cinq étapes', 'ce que tu gardes, ce qui change'], [
    teach('sheet-methode-teach', 'L’idée, la force, le fil',
      `${Cap(CALQUES_REF)} jugeait une traduction à une question : « ${B233_REFRAME} » Au C1, la question s’élargit au texte entier. Un texte porte une idée, une force (certitude, fermeté, politesse) et un fil (l’ordre du raisonnement). Tu gardes les trois ; l’ordre des mots, la classe des mots, le nombre de phrases, les images et les unités peuvent changer. EN: Keep idea, force and thread; the rest may change.`),
    table('sheet-methode-table', 'Les cinq étapes', ['Étape', 'Ce que tu fais', 'La question à te poser'], [
      ['1. Lire', 'tout le texte, puis chaque phrase jusqu’au point', 'Quelle est la thèse, quel est le ton ?'],
      ['2. Déverbaliser', 'fermer l’anglais, dire l’idée, l’écrire', 'Comment un francophone le dirait-il ?'],
      ['3. Doser', 'précautions et retenue au même degré', 'Est-ce aussi sûr, aussi ferme ?'],
      ['4. Relier, alléger, adapter', 'repères, liens, doublets, références', 'Mon lecteur suit-il sans effort ?'],
      ['5. Relire deux fois', 'avec l’anglais, puis sans lui', 'Rien d’oublié, rien d’ajouté ?'],
    ]),
  ]),
  sheet('sheet-force', 'La force d’un texte', ['les précautions anglaises', 'la retenue et la litote', 'le contexte décide'], [
    teach('sheet-force-teach', 'Ni plus sûr, ni moins sûr',
      `Les précautions françaises viennent de ${ACADEMIQUE_REF} ; la politesse et la litote à l’oral, de ${NUANCER_REF}. Ici, tu les choisis pour rendre celles de l’anglais. Quand l’anglais empile les précautions, une seule suffit souvent ; c’est un choix de précision. Quand l’anglais dit moins pour dire autant, garde la litote si le français la lit pareil ; sinon, rends la vraie force, poliment, d’après le contexte. EN: Same certainty, same strength; the context decides.`),
    table('sheet-force-attenuer', 'Les précautions', ['Anglais', 'Français', 'Piège'], [
      ['arguably', 'on peut soutenir que, on pourrait dire que (Larousse)', 'sans aucun doute : trop sûr'],
      ['tend to', 'avoir tendance à', 'toujours : une loi'],
      ['would seem to suggest, may possibly suggest', 'semble indiquer', 'trois précautions mot à mot'],
      ['to some extent', 'dans une certaine mesure', 'complètement'],
      ['it may be worth', 'il serait peut-être utile de', 'il faut : un ordre'],
      ['inconclusive', 'ne permettent pas de conclure', 'prouvent le contraire'],
    ]),
    table('sheet-force-retenue', 'La retenue', ['Anglais', 'Si le français la lit pareil', 'Si le contexte montre plus'], [
      ['not bad at all', 'pas mal du tout', ''],
      ['we are not unhappy', 'nous ne sommes pas mécontents', ''],
      ['a bit of a problem', 'un petit problème', 'un vrai problème'],
      ['not entirely convinced', 'pas entièrement convaincue', 'pas convaincue (un refus poli)'],
      ['not the happiest of ideas', 'pas l’idée la plus heureuse', 'une mauvaise idée, dite poliment'],
    ]),
  ]),
  sheet('sheet-fil', 'Le fil du texte', ['le paragraphe', 'expliciter', 'alléger'], [
    teach('sheet-fil-teach', 'Garder l’ordre, montrer les liens',
      `Un paragraphe anglais part souvent de son idée principale et juxtapose ses arguments. Un lecteur français d’essai ou de rapport attend souvent qu’on annonce le chemin et qu’on marque les articulations : c’est une tendance, pas une loi. Vinay et Darbelnet appellent explicitation le fait d’écrire ce que le contexte disait déjà, et implicitation le procédé inverse. Ce que l’anglais répète d’une phrase à l’autre se reprend, comme ${ELLIPSE_REF} te l’a montré. EN: Keep the order; show the links; say once what English says twice.`),
    table('sheet-fil-reperes', 'Les repères', ['Rôle', 'Repère', 'Exemple'], [
      ['annoncer', 'trois raisons expliquent…', 'Trois raisons expliquent ce choix.'],
      ['numéroter', 'la première, la deuxième, reste…', 'La deuxième, plus décisive, tient aux horaires.'],
      ['relancer', 'or', 'Or ces horaires ne conviennent pas aux familles.'],
      ['conclure', 'c’est pourquoi', 'C’est pourquoi nous proposons d’ouvrir le dimanche.'],
    ]),
    table('sheet-fil-liens', 'Expliciter, alléger', ['Anglais', 'Français', 'Procédé'], [
      ['Rents rose. Families left.', 'Les loyers ont augmenté, si bien que les familles sont parties.', 'explicitation'],
      ['approved and the funding never came', 'approuvé, mais le financement n’a jamais suivi', 'explicitation'],
      ['With a new council in place, …', 'Comme le conseil avait changé, …', 'explicitation'],
      ['each and every one of you', 'chacun d’entre vous (sans exception)', 'implicitation'],
      ['the end result, our future plans', 'le résultat, nos projets', 'implicitation'],
      ['at this point in time, due to the fact that', 'actuellement, comme', 'implicitation'],
    ]),
  ]),
  sheet('sheet-culture', 'Le lecteur et son monde', ['les références culturelles', 'les publics', 'le résumé traduit'], [
    teach('sheet-culture-teach', 'Pour qui, et pour quoi faire',
      `Une référence se traduit par l’effet qu’elle produit : garder, expliquer, remplacer ou généraliser, selon ce que ton lecteur connaît. Le public choisit le registre : ${REGISTRES_REF} t’a donné trois registres, et ici la même idée change de mots, de longueur et de distance selon le lecteur, jamais de fond. Un résumé traduit garde la thèse, les arguments et leur ordre, attribue chaque idée et ne donne jamais ton avis. EN: The reader decides: references, register and summary.`),
    table('sheet-culture-gestes', 'Quatre gestes', ['Geste', 'Quand', 'Exemple'], [
      ['garder', 'le lecteur connaît la référence ou l’image', 'l’Action de grâce ; la case départ ; la partie émergée de l’iceberg'],
      ['expliquer', 'un sigle ou un nom inconnu', 'le service public de santé britannique (NHS)'],
      ['remplacer', 'l’image ne parle pas', 'a ballpark figure : un ordre de grandeur, une estimation grossière (OQLF)'],
      ['généraliser ou convertir', 'une mesure ou une comparaison étrangère', 'three miles : environ cinq kilomètres ; ninety degrees : plus de trente degrés'],
    ]),
    table('sheet-culture-publics', 'Trois publics', ['Public', 'Exemple', 'Distance'], [
      ['urbanistes', 'Les arbres d’alignement atténuent l’effet d’îlot de chaleur urbain.', 'termes techniques, vous'],
      ['grand public', 'Les arbres plantés le long des rues rafraîchissent la ville.', 'image concrète, vous'],
      ['compte jeunesse', 'Plus d’arbres dans ta rue, c’est moins de chaleur en été.', 'phrase courte, tu'],
    ]),
  ]),
  sheet('sheet-relire', 'Relire une traduction', ['cinq fautes de sens', 'deux relectures', 'les questions du réviseur'], [
    teach('sheet-relire-teach', 'Deux relectures',
      `Première lecture, avec l’anglais : chaque idée, chaque chiffre, chaque nom, la même force. Deuxième lecture, sans l’anglais, de préférence à voix haute : le français se lit-il comme un texte écrit en français ? ${Cap(CALQUES_REF)} te faisait déjà cacher l’anglais ; au C1, tu cherches aussi les fautes de sens. EN: With the English for meaning, without it for the French.`),
    table('sheet-relire-fautes', 'Cinq fautes de sens', ['Faute', 'Ce que c’est', 'Exemple'], [
      ['le contresens', 'dire le contraire ou autre chose que l’original', 'rose by about a third : « a doublé »'],
      ['le faux sens', 'manquer le sens précis d’un mot (Larousse)', 'vulnerable users : « les usagers sensibles »'],
      ['le non-sens', 'une phrase qui ne veut rien dire', 'un participe anglais suivi de trop près'],
      ['l’omission', 'une idée perdue', 'la phrase sur les logements exigus disparue'],
      ['l’ajout', 'une idée inventée', '« ce qui prouve l’échec des politiques du logement »'],
    ]),
    table('sheet-relire-questions', 'Les questions du réviseur', ['Question', 'Si la réponse est non'], [
      ['Chaque idée de l’anglais est-elle là ?', 'compte les idées, phrase par phrase'],
      ['Chaque chiffre et chaque nom sont-ils exacts ?', 'vérifie-les à part'],
      ['La force est-elle la même ?', 'compare les mots de certitude un par un'],
      ['Le français se lit-il seul ?', 'relis sans l’anglais, à voix haute'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz is
 *  left to spreadSlots. */
function balanceSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const used: Record<number, number[]> = {};
  const recent: number[] = [];
  const visit = (node: unknown): void => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(visit); return; }
    const o = node as { opts?: unknown; correct?: unknown };
    if (Array.isArray(o.opts) && typeof o.correct === 'number') {
      const opts = o.opts as string[];
      const n = opts.length;
      const u = (used[n] ??= new Array(n).fill(0));
      const order = [...Array(n).keys()].sort((a, b) => u[a] - u[b] || a - b);
      const blocked = recent.length >= 2 && recent[recent.length - 1] === recent[recent.length - 2] ? recent[recent.length - 1] : -1;
      const target = order.find((k) => k !== blocked) ?? order[0];
      const shift = (target - (o.correct as number) + n) % n;
      o.opts = opts.map((_, i) => opts[(i - shift + n) % n]);
      o.correct = target;
      u[target]++;
      recent.push(target);
    }
    for (const v of Object.values(node as Record<string, unknown>)) visit(v);
  };
  for (const s of sections) if (s.type !== 'quiz') visit(s);
  for (const d of drills) visit(d);
}
balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-22-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c1-22-note': 'Odile’s revision note (act 1), ONE VOICE, one take, a reviser in her fifties, Québec French, precise and kind. The English sentences (« That said, we might want to revisit the timeline », « arguably ») read in a natural Canadian English accent, at the same pace, as quotations. The signature « Odile » quick.',
  'rec-c1-22-biblio': 'The library paragraph (act 2), ONE VOICE, one take, a calm narrator, Québec French. Figures in full (vingt-deux heures, vingt-cinq ans). The translator’s note in a slightly lighter tone; the English noun stack read as a quotation.',
  'rec-c1-22-etude': 'The pilot evaluation (act 3), ONE VOICE, one take, an analyst, Québec French, measured. Every hedge (semblent indiquer, il se pourrait que, on peut soutenir que) at natural weight, never stressed. English quotations in the note in a Canadian English accent.',
  'rec-c1-22-piege-attenuer': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-22-courriel': 'Fiona’s email in French (act 4), ONE VOICE, one take, a woman in her forties, Québec French with a light English-Canadian colour is acceptable, courteous and firm. « Le budget, en revanche, pose un vrai problème » slightly slower. The translator’s note neutral.',
  'rec-c1-22-odile': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order. Odile (as act 1) leaving a voice message, Québec French, relaxed, conversational speed. « a bit of a problem » in natural English inside the French line. The learner hears it once: no pause longer than the punctuation gives.',
  'rec-c1-22-paragraphe': 'The Sunday paragraph (act 5), ONE VOICE, one take, a confident writer, Québec French. A small beat after each repère (La première, La deuxième, Or, Reste, C’est pourquoi). Times in full (treize à dix-sept heures).',
  'rec-c1-22-loyers': 'The rents brief (act 6), ONE VOICE, one take, the analyst (as act 3). The written links (si bien que, mais, comme, faute de) at natural weight. English quotations in the note in a Canadian English accent.',
  'rec-c1-22-piege-expliciter': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-22-mercis': 'The speech of thanks (act 7), ONE VOICE, one take, a foundation director addressing a room, Québec French, warm. The translator’s note in a lighter tone; the English phrases read as quotations.',
  'rec-c1-22-course': 'The charity-run item (act 8), ONE VOICE, one take, a cheerful newsletter voice, Québec French. Numbers in full (cinq kilomètres, trente degrés, neuf heures). English idioms in the note in a Canadian English accent.',
  'rec-c1-22-resume': 'The newsletter summary (act 9), ONE VOICE, one take, neutral, Québec French. « Fiona Kerr » pronounced as in English. The editorial note slightly quicker.',
  'rec-c1-22-malik': 'REQUIRED FOR THE EAR MISSION (act 9): eight lines, ONE TAKE, ONE VOICE, in authored order. Malik, a man in his thirties, Québec French, friendly and hurried, voice message. The learner hears it once: no pause longer than the punctuation gives.',
  'rec-c1-22-arbres': 'One sentence, three audiences (act 10), ONE VOICE, one take, neutral narrator, Québec French. Each of the three French versions read in its own register: crisp for the planners, warm for residents, lively and direct for the youth account. The English sentence in a Canadian English accent.',
  'rec-c1-22-piege-public': 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.',
  'rec-c1-22-relecture': 'Odile’s revision (act 11), ONE VOICE, one take, Odile (as act 1), precise. « Première lecture », « Deuxième lecture », « Paragraphe 1 »… as headings. The non-sens quoted flatly, without mockery.',
  'rec-c1-22-modele': 'The model op-ed (act 12), ONE VOICE, one take, a confident columnist, Québec French. « C’est pourquoi », « D’abord », « Ensuite » with a beat. Figures in full. The signature quicker.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 22',
  intro: 'At B2 you learned to translate without calques: words, sentences and expressions, transposition, modulation and tone. At C1 you translate ideas. You read a whole English sentence before saying its idea in French; you render English hedging (arguably, tend to, may suggest) and understatement (not entirely convinced, a bit of a problem) at the same strength, reading the context; you turn a topic-sentence paragraph into one a French reader can follow, writing the links English leaves implicit and lightening what it says twice; you carry idioms, units and references across by their effect; you summarise an English text straight into French and adapt one idea to three audiences; and you revise for contresens, faux sens, non-sens, omissions and additions. You finish by translating a 240-word English op-ed into natural French.',
  skill: 'PE',
  grammarAssumed: [REGISTRES_UNIT, ACADEMIQUE_UNIT, CALQUES_UNIT, ELLIPSE_UNIT, NUANCER_UNIT],
  grammarIntroduced: [
    'Idea-level reformulation (déverbalisation): English noun stacks rendered as French clauses with a verb; one English sentence may become two French ones, nothing lost',
    'English hedging rendered at the same degree of certainty: arguably → on peut soutenir que, tend to → avoir tendance à, would seem to suggest → semble indiquer, it may be worth → il serait peut-être utile de; one French hedge for stacked English hedges',
    'English understatement: the French litote kept when it reads the same (pas mal du tout, pas mécontents), the real force conveyed politely when the context shows it (a bit of a problem → un vrai problème)',
    'Paragraph logic: the English topic-sentence paragraph turned into a signposted French one (annonce, la première / la deuxième, or, c’est pourquoi), the order of ideas kept; explicitation of implicit links and implicitation of doublets and padding (each and every, end result, at this point in time, due to the fact that)',
    'Cultural equivalence (keep, explain, replace, generalise: a ballpark figure → un ordre de grandeur, back to square one → la case départ, miles, Fahrenheit); summary translation with attribution; register shifts across audiences; revision for contresens, faux sens, non-sens, omission and ajout',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B2, tu as appris à traduire sans calquer : les mots, les phrases, les expressions, la transposition, la modulation et le ton. Au C1, tu traduis des idées. Tu comprends une phrase anglaise entière avant de dire son idée en français ; tu rends les précautions et la retenue anglaises avec la même force, d’après le contexte ; tu fais d’un paragraphe anglais un paragraphe qu’un lecteur français suit sans effort, en écrivant les liens implicites et en allégeant ce que l’anglais dit deux fois ; tu fais passer les images, les unités et les références par leur effet ; tu résumes d’une langue à l’autre et tu adaptes une idée à trois publics ; puis tu relis en traducteur. À la fin, tu traduis une tribune anglaise de 240 mots.',
    minutes: 175,
    difficulty: 4,
    glyph: 'idée',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: TRADUIRE_IDEES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (B1 build log, 2026-09-25). Kept, as every lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, TASK_SOURCE_EN, B233_LIRE };
export const lessonWithoutTask = (): Lesson => LESSON;
