// c1.03.l1 « La concordance littéraire »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, RECOGNITION variant) with the
// C1 rules of C1-BUILD-LOG.md. Structural model: b2.09 « Reconnaître le
// subjonctif littéraire » (`../b2/subjonctif-litteraire-*`): same helpers,
// same act rhythm (SPOT → MAP → UNDERSTAND, then « Dans un texte » and the
// gated check), same quiz shape, same closing act ending on a written task.
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.09 does).
//
// RECOGNITION ONLY (C1 brief: « recognition stays recognition »). NOTHING asks
// the learner to produce an imparfait or plus-que-parfait du subjonctif or an
// inverted literary form: no conjugation card, no gap or option set whose job
// is to supply one, no error-spot or typeIn whose answer holds one, no
// flashcard or reviewDeck BACK that is one, no scenario `user` line in it, no
// speak practice on it. Typed answers are modern rewrites, infinitives or
// meanings. The corpus enforces it in the drills (corpus §A.9).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene, story, reading, examples), name (cardDeck,
//   tapTable, focus), spot and map (groupDrill, gated), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the forms INSIDE A TEXT of
//   50 to 70 words (« Dans un texte »), then the gated act check.
//
//    1  La note et l’écart          7  a classic page and its modern twin;
//                                       ONE recap card (lessons 5, 6, 8 and
//                                       9 in B2); the NEW list announced
//    2  La grille                   7  simultaneity, posteriority,
//                                       anteriority under a present and a
//                                       past main verb; Corneille, Horace
//    3  Le moment de l’action       7  fût partie / partît, eût terminé /
//                                       terminât, avant que
//    4  Je voudrais qu’il vînt      7  a conditional main clause (present,
//                                       past, second form)
//    5  Eût-il su                   7  hypothetical inversion; n’eût été
//    6  Fût-il roi                  7  concessive inversion; dussé-je, si
//                                       riche fût-il, serait-il ministre;
//                                       dût-il and aussi… soit-il recapped
//    7  La discordance qui parle    7  an imparfait du subjonctif after a
//                                       present (conditional sense); a
//                                       présent after a past (still true)
//    8  Aujourd’hui                 8  the norm (OQLF, Grevisse), partial
//                                       concordance, the solemn fût of the
//                                       press
//    9  L’effet                     8  solemnity, irony, pastiche
//   10  Lire une page entière       7  one whole page, every form
//   11  Présente la page           11  model, plan, role play, TASK, quiz
//
//   TOTAL 83 missions, 11 acts (7,7,7,7,7,7,7,8,8,7,11). Corpus: 150
//   authored rows (.1800-.1982) in eleven blocks (53 literary lines, 52 map
//   cards, 20 rule cards, 25 modern sentences) plus 16 reused rows, released
//   act by act through `deckTranche` (map cards, rule cards and modern rows
//   only). Quiz: 11 rounds of 8 (one per act 1 to 10, plus one round on the
//   task page). Chapter artwork: `concordance-litteraire-image-prompts.md`,
//   eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le verbe principal donne la note, le subjonctif la suit : quand il s’en
//   écarte, l’écart a un sens. »
//   EN: The main verb gives the note and the subjunctive follows it: when it
//   strays, the gap means something.
//
//   ONE METAPHOR, LE DIAPASON: the main verb strikes the note, the subjunctive
//   tunes to it, and a string left off the note is heard. It is NOT « the
//   sequence is compulsory » (OQLF admits the présent) and NOT « the présent
//   in a book is a mistake ». Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the full concordance grid of a literary text (simultaneity,
//           posteriority, anteriority), the conditional main clause,
//           hypothetical and concessive inversion (eût-il su, n’eût été,
//           fût-il roi, dussé-je, si riche fût-il, serait-il), the deliberate
//           break in the sequence and its meaning, modern practice in prose
//           and press, and the register effect (solemnity, irony, pastiche).
//   QUOTES  the reframes of lessons 3, 5, 9 and 16 in B2 and 21 in B1,
//           re-exported from their corpus files; rows of lessons 9 and 16 in
//           B2 reused BY ID (corpus §F).
//   LEAVES  the forms themselves and their basic map (lesson 9 in B2, act 1
//           recap only); the passé antérieur and « à peine eut-il… que » (to
//           c1.02, written in parallel, never cited by position); producing
//           any literary form (never, by decision).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   C1: unsimplified French; English authored on every learner string (an
//   `en` field or a final `EN: `), never on an answer. tu in every
//   instruction; characters use what the situation needs. Every `say` is
//   French. No spaced « ? » or « ! » in any scene or story bubble. Curly ’
//   in every authored string; the scenario embeds no reused row. Other
//   lessons cited by trail position in words, never by raw id, only
//   published positions, no C1 lesson cited. Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()`, as b2.09 does (no text
//   changes; no `why` names a position). Tag « C1 · LEÇON 3 ».
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE CORNEILLE EXTRACT (Horace III, 6, vv. 1021-1026) is quoted word
//      for word from the Marty-Laveaux 1862 text on Wikisource, original
//      spelling « c’étoit » kept and glossed. Keep the old spelling?
//      (Pre-review 2026-10-01: text, verse numbers and page 327 verified
//      word for word on Wikisource; the year line now says « créée en 1640,
//      imprimée en 1641 ». The spelling choice stays Paul's.)
//   2. GREVISSE is named without a paragraph number. Pre-review decision:
//      no reliable online § reference found, so the NAME ONLY is kept.
//   3. « Serait-il ministre, la règle vaudrait pour lui » (concessive
//      inversion with the conditional) is taught for recognition as « style
//      soutenu, encore vivant ». Keep, or drop to the sheet only?
//      (Pre-review: the construction is attested, « Le voudrait-il, il ne
//      pourrait mieux réussir », and the label is accurate. Paul's call.)
//   4. `Lesson.skill` is 'CE', as b2.09. The task is a written presentation
//      (220 to 320 words, modern French) of a printed original page.
//   5. RULE CARDS THAT NAME A FORM carry `flashcard` ONLY (as b2.09's open
//      question 2). Keep?
//   6. Up to 4 tapTables per lesson at C1 (decision 16): this lesson has 3
//      (acts 2, 6, 8), one per act.
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
  LECTURE_DEUX_PAGES, LECTURE_HORACE, LECTURE_PASSEUR, LECTURE_HORTENSE, LECTURE_TILLEULS, LECTURE_LISETTE,
  LECTURE_MODELE, EXTRAIT_TACHE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B209_REFRAME, B209_REFRAME_EN, B205_REFRAME, B205_REFRAME_EN, B203_REFRAME, B203_REFRAME_EN,
  B216_REFRAME, B216_REFRAME_EN, B121_REFRAME, B121_REFRAME_EN,
  SI_UNIT, SUBJPASSE_UNIT, SUBJIND_UNIT, PS_UNIT, SL_UNIT, CONCESSION_UNIT, INVERSION_UNIT,
  SI_REF, SUBJPASSE_REF, SUBJIND_REF, PS_REF, SL_REF, CONCESSION_REF, INVERSION_REF,
} from './concordance-litteraire-corpus.ts';
import { CL_TERMS } from './concordance-litteraire-terms.ts';

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
  if (!r) throw new Error(`c1.03: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.03: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`c1.03: no respell on ${id}`);
  return `[${r.respell}]`;
}

const LIT = (n: number) => `fr.b2.litterature.${n}`;
const CONC = 'fr.b2.connecteurs-logiques.2072';

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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 50 to
 *  70 words with the forms inside it; the questions SPOT, MAP and
 *  UNDERSTAND, the answers behind the modal. Same title every time. */
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
 *  ACT 1: LA NOTE ET L’ÉCART
 *
 *  Meet the question. A reading club compares an 1890 novel and its modern
 *  rewrite; Malik takes the modern « qu’il revienne » for a mistake. The
 *  failing instinct says « faute ». ONE recap card, then the NEW list. NO
 *  « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le club de lecture',
  frSub: 'Deux romans, une même phrase',
  setting: { place: 'La bibliothèque du quartier', city: 'Montréal', time: '19 h', ambience: 'des chaises en cercle, deux piles de livres, la neige derrière les vitres' },
  beats: [
    {
      kind: 'narration',
      text: 'Montréal, un mardi soir de novembre. Ton club de lecture compare un roman de 1890 et la réécriture qu’une romancière vient d’en publier. Malik lit à voix haute une phrase de l’ancien livre.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Malik',
      fr: fr(E(1800)), en: en(E(1800)), respell: rsOf(E(1800)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Malik',
      fr: 'Dans le livre récent, elle écrit qu’il revienne. Elle a oublié la concordance.',
      en: 'In the new book she writes qu’il revienne. She has forgotten the sequence of tenses.',
      respell: '[dahⁿ luh leevr ray-SAHⁿ | el ay-KREE | keel ruh-VYENN | el a oo-blee-AY | la kohⁿ-kor-DAHⁿS]',
      stage: 'Souhaitait est au passé. Le vieux livre accorde le subjonctif à cette note ; le nouveau, non.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Odile, qui anime le club, se tourne vers toi. Elle ne dit rien : elle attend ta réponse.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Que réponds-tu à Malik.',
      size: 'lg',
      options: [
        { fr: fr(E(1802)), respell: rsOf(E(1802)), en: en(E(1802)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1803)), respell: rsOf(E(1803)), en: en(E(1803)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Odile sourit : l’OQLF admet le présent après un passé, et la plupart des romanciers l’écrivent. Malik relit les deux pages autrement : la même histoire, deux siècles.',
        breaks: 'Malik écrit « faute » dans la marge. Odile lui montre que l’OQLF admet ce présent : la romancière n’a rien oublié, elle a choisi son siècle.',
      },
    },
    {
      kind: 'break',
      heading: 'Pas une faute : une autre note',
      body: 'Le roman de 1890 accorde le subjonctif au verbe principal : souhaitait, puis revînt. La romancière écrit revienne, comme l’usage moderne le permet. Personne ne se trompe. EN: The classic novel tunes the subjunctive to the main verb; the modern one follows today’s usage.',
      wrong: { fr: fr(E(1802)), ipa: ipaOf(E(1802)), respell: rsOf(E(1802)), en: en(E(1802)) },
      right: { fr: fr(E(1803)), ipa: ipaOf(E(1803)), respell: rsOf(E(1803)), en: en(E(1803)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `${Cap(SL_REF)} t’a appris à traduire qu’il vînt par qu’il vienne. Ici, tu vas plus loin : la grille complète des moments, le conditionnel principal, deux inversions, et ce que veut dire un auteur qui quitte la note.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['concordance', 'norme'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Lire chaque subjonctif selon le moment qu’il dit', s: 'Actes 2 à 4 : la grille, le moment, le conditionnel' },
    { t: 'Comprendre eût-il su et fût-il roi', s: 'Actes 5 et 6 : l’hypothèse, la concession' },
    { t: 'Dire ce que veut un auteur qui quitte la note', s: 'Actes 7 à 9 : la discordance, l’usage, l’effet' },
    { t: 'Présenter une page entière à ton club', s: 'Actes 10 et 11 : la page, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** ONE recap card (the first), then the NEW list announced. */
const A1_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-grille',
  title: 'Ce que tu sais, ce qui vient',
  frSub: 'Un rappel, puis trois nouveautés',
  hint: 'Quatre cartes. La première est un rappel ; les trois autres, la suite.',
  audio: REC('rec-c1-03-rappel'),
  say: REFRAME,
  terms: ['concordance'],
  cards: [
    {
      head: 'Ce que le B2 t’a donné', label: 'le rappel',
      fr: fr(LIT(1326)), sub: rsOf(LIT(1326)),
      body: `${Cap(SUBJPASSE_REF)} et ${SUBJIND_REF} : le subjonctif et son horloge. ${Cap(PS_REF)} : le passé simple. ${Cap(SL_REF)} : les formes du livre et leur traduction. EN: You already read and map the forms.`,
    },
    {
      head: 'La grille complète', label: 'actes 2 et 3',
      fr: fr(E(1823)), sub: rsOf(E(1823)),
      body: 'Même moment, plus tard, ou avant : chaque temps du subjonctif dit un moment par rapport au verbe principal. EN: Each subjunctive tense marks a moment relative to the main verb.',
    },
    {
      head: 'Le conditionnel principal', label: 'acte 4',
      fr: fr(E(1853)), sub: rsOf(E(1853)),
      body: 'Je voudrais, il aurait fallu : un conditionnel donne aussi une note passée au livre. EN: A conditional main verb also gives the book a past note.',
    },
    {
      head: 'Deux inversions', label: 'actes 5 et 6',
      fr: fr(E(1808)), sub: rsOf(E(1808)),
      body: 'Eût-il su, fût-il roi : le verbe passe devant, et la phrase dit si ou même si. EN: An inverted verb says if or even if.',
    },
  ],
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Madame Ferrand, deux fois',
  frSub: 'La même page, à un siècle d’écart',
  text: LECTURE_DEUX_PAGES,
  glossary: [
    { word: 'inquiétude', en: 'worry', note: 'Le souci d’une mère pour un fils au loin.' },
  ],
  questions: [
    { q: 'Devine le sens : « comme si elles eussent caché quelque chose ». Que soupçonne Madame Ferrand ?', a: 'Que les lettres lui cachent quelque chose, peut-être une mauvaise nouvelle. Après comme si, eussent caché se lit avaient caché, comme dans la seconde version.' },
    { q: 'Globale : qu’est-ce qui change d’une version à l’autre ?', a: 'Seulement les formes du livre : les subjonctifs, eût fallu (aurait fallu) et la forme après comme si ; l’histoire, l’ordre et les mots restent les mêmes.' },
    { q: 'Repère les quatre imparfaits du subjonctif de la première version et leur forme dans la seconde.', a: 'revînt / revienne, tombât / tombe, prévînt / prévienne, écrivît / écrive.' },
    { q: 'Pourquoi « qu’il ne tombât » devient-il « qu’il tombe », sans ne ?', a: 'Ce ne n’est pas une négation : c’est le ne explétif après craindre que, facultatif aujourd’hui.' },
    { q: 'Inférence : que veut dire « elles ne sonnent simplement pas dans le même siècle » ?', a: 'Que la différence est de registre, pas de correction : la concordance stricte date le texte.' },
  ],
  audio: REC('rec-c1-03-deux-pages'),
  say: REFRAME,
  terms: ['concordance', 'registre'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Le connu, puis le nouveau',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp(Cap(SL_REF), [
      it(LIT(1315), 'partît : le livre'),
      it(LIT(1316), 'parte : aujourd’hui'),
      it(LIT(1324), 'eût reçu : le livre'),
      it(LIT(1325), 'ait reçu : aujourd’hui'),
    ], chk('Dans ces quatre phrases, le verbe principal est…',
      ['au passé', 'au présent', 'au futur'], 0,
      `Voulais, doutions : une note passée. Le B2 disait : « ${B209_REFRAME} » EN: ${B209_REFRAME_EN}`)),
    grp('Ce que cette leçon ajoute', [
      it(E(1806), 'pût, après ne croyais pas'),
      it(E(1807), 'puisse, aujourd’hui'),
      it(E(1810), 'eût-il parlé, en tête'),
      it(E(1811), 's’il avait parlé'),
    ], chk('« Eût-il parlé plus tôt » : que veut dire cette forme en tête de phrase ?',
      ['s’il avait parlé plus tôt', 'il a parlé plus tôt', 'qu’il ait parlé plus tôt'], 0,
      'Le verbe passe devant et si disparaît : une hypothèse sur le passé. EN: if he had spoken sooner.')),
    ctl('Le roman d’aujourd’hui', '« Elle souhaitait qu’il revienne. » Dans un roman récent, cette phrase est…',
      ['correcte', 'fautive'], 0,
      'L’usage moderne garde le présent, et l’OQLF l’admet. EN: correct today.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'hypothese'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où tu vas la rencontrer',
  cases: [
    { situation: 'Tu lis un roman du XIXe siècle', fr: fr(E(1812)), en: en(E(1812)) },
    { situation: 'Tu lis un article solennel', fr: fr(E(1813)), en: en(E(1813)) },
    { situation: 'Tu lis un pastiche pour rire', fr: fr(E(1814)), en: en(E(1814)) },
    { situation: 'Tu discutes d’un roman récent', fr: fr(E(1803)), en: en(E(1803)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La note', 'Dans un roman classique, le temps du subjonctif dépend…',
    ['du verbe principal', 'du sujet', 'de la longueur de la phrase'], 0,
    'Le verbe principal donne la note. EN: the main verb sets it.'),
  ctl('L’usage', '« Je voulais qu’il parte », à l’écrit aujourd’hui, c’est…',
    ['admis', 'une faute'], 0,
    'L’OQLF admet le présent après un passé. EN: accepted.'),
  ctl('Ta tâche', 'Dans cette leçon, ces formes, tu dois…',
    ['les reconnaître, les traduire et dire leur effet', 'les écrire dans tes textes'], 0,
    'Tu lis et tu expliques ; tu ne produis pas. EN: read and explain, never produce.'),
], ['concordance', 'norme']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La note et l’écart',
    opener: {
      line: 'Un ami croit voir une faute dans un roman récent : ici tu découvres que la concordance est une note, et qu’on peut choisir de ne pas la suivre. EN: A friend sees a mistake in a recent novel: here you find that concordance is a note, and that a writer may choose not to follow it.',
      imageRef: 'lessons/concordance-litteraire/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais ce que le B2 t’a donné et ce que cette leçon ajoute, et tu ne prends plus le présent d’un roman récent pour une faute. EN: You know what B2 gave you and what comes next, and no longer take a modern novel’s present for a mistake.',
    estScreens: 32, restPoints: ['a1-rappel'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_RAPPEL, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA GRILLE
 *
 *  Simultaneity, posteriority, anteriority under a present and a past main
 *  verb. Corneille's « Qu’il mourût » opens it: two subjunctives tuned to
 *  « vouliez », and an inversion that act 5 will name.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a2-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Qu’il mourût',
  frSub: 'Corneille, Horace, acte III, scène 6',
  text: LECTURE_HORACE,
  glossary: [
    { word: 'c’étoit', en: 'it was (old spelling of c’était)', note: 'Orthographe du XVIIe siècle : oi pour ai.' },
  ],
  questions: [
    { q: 'Devine le sens : « Il eût avec honneur laissé mes cheveux gris ». Que veut dire le père ?', a: 'Que la mort de son fils aurait honoré sa vieillesse. Eût laissé, sans « que » devant, se lit aurait laissé.' },
    { q: 'Globale : que reproche le vieil Horace à son fils ?', a: 'D’avoir fui le combat au lieu de mourir en se battant.' },
    { q: 'Repère les trois imparfaits du subjonctif et le verbe qui leur donne la note.', a: 'fît, mourût, secourût : la note vient de vouliez, à l’imparfait, dans la question de Julie.' },
    { q: 'Sa mort, dans « qu’il mourût », serait-elle avant ou après la question ?', a: 'Après, ou au même moment que le combat : c’est ce qu’on aurait voulu qu’il fasse. D’où l’imparfait du subjonctif.' },
    { q: 'Que veut dire « N’eût-il que d’un moment reculé sa défaite » ?', a: 'S’il n’avait fait que retarder un moment sa défaite. Le verbe passe devant : une hypothèse, que l’acte 5 explique.' },
  ],
  audio: REC('rec-c1-03-horace'),
  say: REFRAME,
  terms: ['concordance', 'simultane'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-grille',
  title: 'Quatre cases, une grille',
  frSub: 'Le verbe principal et le moment',
  hint: 'Quatre cartes. Deux sous un présent, deux sous un passé.',
  audio: REC('rec-c1-03-grille'),
  say: REFRAME,
  terms: ['simultane', 'anteriorite'],
  cards: [
    {
      head: 'Présent, même moment ou après', label: 'je doute',
      fr: fr(E(1819)), sub: rsOf(E(1819)),
      body: 'Sous un présent, le présent du subjonctif dit le même moment ou la suite. Ici, le livre et toi écrivez pareil. EN: Under a present, the present subjunctive: same moment or later.',
    },
    {
      head: 'Présent, avant', label: Cap(SUBJPASSE_REF),
      fr: fr(E(1820)), sub: rsOf(E(1820)),
      body: `« ${B205_REFRAME} » Sous un présent, rien ne change entre le livre et aujourd’hui. EN: ${B205_REFRAME_EN}`,
    },
    {
      head: 'Passé, même moment ou après', label: 'je doutais',
      fr: fr(E(1821)), sub: rsOf(E(1821)),
      body: 'Sous un passé, le livre met l’imparfait du subjonctif pour le même moment, et aussi pour la suite : elle attendait qu’il revînt le lendemain. EN: Under a past, the imperfect subjunctive for the same moment or later.',
    },
    {
      head: 'Passé, avant', label: 'je doutais',
      fr: fr(E(1823)), sub: rsOf(E(1823)),
      body: 'Pour ce qui était déjà fait, le livre met le plus-que-parfait du subjonctif. Aujourd’hui : qu’il soit venu. EN: Already done before a past: the pluperfect subjunctive.',
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-grille',
  title: 'La grille, case par case',
  cols: ['Verbe principal', 'Moment', 'Dans le livre'],
  rows: [
    { cells: ['je doute', 'même moment, après', 'qu’il vienne'], say: fr(E(1819)),
      detail: { title: 'Présent, même moment', body: 'Le présent du subjonctif, partout. EN: present subjunctive everywhere.', say: fr(E(1867)) } },
    { cells: ['je doute', 'avant', 'qu’il soit venu'], say: fr(E(1820)),
      detail: { title: 'Présent, avant', body: 'Le subjonctif passé, partout. EN: past subjunctive everywhere.', say: fr(E(1820)) } },
    { cells: ['je doutais', 'même moment', 'qu’il vînt'], say: fr(E(1821)),
      detail: { title: 'Passé, même moment', body: 'L’imparfait du subjonctif ; aujourd’hui, qu’il vienne. EN: imperfect subjunctive; today the present.', say: fr(E(1822)) } },
    { cells: ['elle attendait', 'après', 'qu’il revînt'], say: fr(E(1825)),
      detail: { title: 'Passé, après', body: 'Encore l’imparfait du subjonctif : la suite ne change pas la forme. EN: the imperfect for later too.', say: fr(E(1826)) } },
    { cells: ['je doutais', 'avant', 'qu’il fût venu'], say: fr(E(1823)),
      detail: { title: 'Passé, avant', body: 'Le plus-que-parfait du subjonctif ; aujourd’hui, qu’il soit venu. EN: pluperfect subjunctive; today the past.', say: fr(E(1824)) } },
    { cells: ['je voudrais', 'même moment, après', 'qu’il vînt'], say: fr(E(1853)),
      detail: { title: 'Conditionnel', body: 'Il compte comme un passé : l’acte 4 le détaille. EN: a conditional counts as a past (act 4).', say: fr(E(1854)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simultane', 'anteriorite'],
};

const A2_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Avant, ou pas encore',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Même moment ou plus tard', [
      it(E(1821), 'vînt : ce soir-là'),
      it(E(1825), 'revînt : le lendemain'),
      it(E(1833), 'partît : trop tard'),
      it(E(1815), 'fît : Corneille'),
    ], chk('Dans la troisième phrase, la lettre est-elle déjà partie ?',
      ['non, on craint qu’elle parte trop tard', 'oui, elle est partie'], 0,
      'Partît regarde la suite : la lettre n’est pas encore partie. EN: not yet gone.')),
    grp('Avant le verbe principal', [
      it(E(1823), 'fût venu : la veille'),
      it(E(1831), 'fût partie : déjà'),
      it(LIT(1324), 'eût reçu'),
      it(E(1824), 'soit venu, aujourd’hui'),
    ], chk('Dans ces phrases, l’action au subjonctif…',
      ['était déjà faite', 'venait plus tard', 'se passait au même moment'], 0,
      'Eût ou fût et un participe : avant le verbe principal. EN: already done.')),
    ctl('Corneille', '« Qu’il mourût », répond le vieil Horace. Cette mort serait…',
      ['ce qu’on attendait de lui dans le combat', 'déjà arrivée au moment de la question'], 0,
      'L’imparfait du subjonctif ne regarde pas avant : il dit ce qu’on aurait voulu. EN: what was expected, not done.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simultane', 'anteriorite'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quand, exactement',
  frSub: 'Huit phrases, une seule oreille',
  lines: [
    ln(E(1819)), ln(E(1820)), ln(E(1821)), ln(E(1823)),
    ln(E(1825)), ln(E(1831)), ln(E(1833)), ln(E(1829)),
  ],
  questions: [
    { q: 'Première phrase : de quel soir parle-t-on ?', opts: ['de ce soir', 'd’hier soir'], correct: 0, why: 'Le présent du subjonctif sous un présent : maintenant ou plus tard. EN: tonight.' },
    { q: 'Deuxième phrase : quand serait-il venu ?', opts: ['hier', 'ce soir', 'demain'], correct: 0, why: 'Soit venu : avant le doute, hier. EN: yesterday.' },
    { q: 'Quatrième phrase : sa venue est-elle antérieure au doute ?', opts: ['oui, la veille', 'non, le même soir'], correct: 0, why: 'Fût venu : déjà fait. EN: yes, the day before.' },
    { q: 'Sixième phrase : que craint-on pour la lettre ?', opts: ['qu’elle soit déjà partie', 'qu’elle parte trop tard'], correct: 0, why: 'Fût partie : déjà fait. EN: that it had already gone.' },
    { q: 'Septième phrase : et maintenant, que craint-on ?', opts: ['qu’elle parte trop tard', 'qu’elle soit déjà partie'], correct: 0, why: 'Partît : la suite. EN: that it would leave too late.' },
  ],
  audio: REC('rec-c1-03-grille-ecoute'),
  say: REFRAME,
  terms: ['simultane', 'anteriorite'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Le moment, pas l’habit',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Vînt n’est pas déjà venu',
    body: 'Qu’il vînt dit le même moment ou la suite : aujourd’hui, qu’il vienne. Seul qu’il fût venu regarde avant : qu’il soit venu. Le ne du livre, lui, ne nie rien. EN: vînt is same moment or later; only fût venu looks back.',
  },
  cards: [
    { promptLabel: 'reculé de trop', promptSound: 'Je doutais qu’il soit venu ce soir-là.', fr: fr(E(1822)), ipa: ipaOf(E(1822)), tip: 'Vînt : le même soir que le doute, donc vienne. EN: vienne.' },
    { promptLabel: 'l’avant oublié', promptSound: 'Je doutais qu’il vienne la veille.', fr: fr(E(1824)), ipa: ipaOf(E(1824)), tip: 'Fût venu, la veille : déjà fait, soit venu. EN: soit venu.' },
    { promptLabel: 'l’indicatif', promptSound: 'On craignait que la lettre partait trop tard.', fr: fr(E(1834)), ipa: ipaOf(E(1834)), tip: 'Craindre que garde le subjonctif : parte. EN: parte.' },
    { promptLabel: 'le futur', promptSound: 'Elle attendait qu’il reviendrait le lendemain.', fr: fr(E(1826)), ipa: ipaOf(E(1826)), tip: 'Attendre que : le subjonctif, même pour la suite. EN: revienne.' },
    { promptLabel: 'le ne pris pour une négation', promptSound: 'On craignait que la lettre ne soit pas déjà partie.', fr: fr(E(1832)), ipa: ipaOf(E(1832)), tip: 'Ne fût partie : on craignait qu’elle soit partie. EN: no negation.' },
    { promptLabel: 'Corneille modernisé de travers', promptSound: 'Que vouliez-vous qu’il a fait contre trois ?', fr: fr(E(1816)), ipa: ipaOf(E(1816)), tip: 'Fît, après vouloir que : fasse. EN: fasse.' },
  ],
  drill: [
    { promptSay: '« qu’il vînt », après je doutais : aujourd’hui…', opts: ['qu’il vienne', 'qu’il soit venu'], correct: 0 },
    { promptSay: '« qu’il fût venu la veille » : aujourd’hui…', opts: ['qu’il soit venu la veille', 'qu’il vienne la veille'], correct: 0 },
    { promptSay: '« Elle attendait qu’il revînt le lendemain. » Le retour est…', opts: ['à venir', 'déjà fait'], correct: 0 },
    { promptSay: '« On craignait que la lettre ne fût déjà partie. » La crainte porte sur…', opts: ['un départ déjà fait', 'un départ à venir'], correct: 0 },
    { promptSay: 'Sous un verbe principal au présent, le livre et toi…', opts: ['écrivez pareil', 'écrivez différemment'], correct: 0 },
    { promptSay: '« Qu’il mourût. » Mourût vient de…', opts: ['mourir', 'murer'], correct: 0 },
    { promptSay: 'Dans « qu’elle ne partît trop tard », le ne…', opts: ['ne nie rien', 'est une négation'], correct: 0 },
    { promptSay: 'Imparfait du subjonctif : même moment ou…', opts: ['plus tard', 'avant'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Vînt n’est pas déjà venu' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’on recule de travers' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-03-piege-grille'),
  say: REFRAME,
  terms: ['simultane', 'anteriorite'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Sous un passé', 'Même moment ou plus tard, sous un passé, le livre met…',
    ['l’imparfait du subjonctif', 'le plus-que-parfait du subjonctif'], 0,
    'Vînt, revînt. EN: the imperfect subjunctive.'),
  ctl('Avant', 'Pour ce qui était déjà fait, le livre met…',
    ['le plus-que-parfait du subjonctif', 'l’imparfait du subjonctif'], 0,
    'Fût venu, eût reçu. EN: the pluperfect subjunctive.'),
  ctl('Sous un présent', 'Sous un présent, entre le livre et aujourd’hui…',
    ['rien ne change', 'tout change'], 0,
    'Je doute qu’il vienne, qu’il soit venu : partout. EN: nothing changes.'),
], ['simultane', 'anteriorite']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La grille',
    opener: {
      line: 'Que vouliez-vous qu’il fît contre trois : ici tu lis chaque subjonctif selon le moment qu’il dit, avant, pendant ou après. EN: What would you have had him do against three: here you read each subjunctive by the moment it marks, before, during or after.',
      imageRef: 'lessons/concordance-litteraire/act02.jpg',
    },
    sections: [],
    milestone: 'Tu places chaque subjonctif d’un texte classique dans la grille : sous un présent ou un passé, avant, en même temps ou après. EN: You can place every subjunctive of a classic text in the grid.',
    estScreens: 40, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_LECTURE, A2_CARTES, A2_TABLE, A2_REPERER, A2_ECOUTE, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LE MOMENT DE L’ACTION
 *
 *  The same verb in two tenses says two moments: fût partie / partît, eût
 *  terminé / terminât, eût cessé / cessât; avant que looks forward. A
 *  translation workshop in Geneva.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'L’atelier de traduction',
  frSub: 'Genève, un samedi matin',
  setting: 'Genève, un atelier de traduction littéraire. Sacha traduit vers l’anglais une page de 1885 ; Nadia, qui anime l’atelier, l’arrête sur chaque subjonctif.',
  bubbles: [
    { from: 'narrator', fr: 'Sacha bute sur deux phrases presque pareilles.', en: 'Sacha stumbles on two almost identical sentences.' },
    { from: 'user', fr: fr(E(1835)), en: en(E(1835)) },
    { from: 'coach', fr: 'Fût partie : quand il s’étonne, elle est déjà loin. Traduis had left.', en: 'Fût partie: when he is surprised, she is already gone. Translate had left.', warn: 'Déjà fait' },
    { from: 'user', fr: fr(E(1837)), en: en(E(1837)) },
    { from: 'coach', fr: 'Partît, avec chaque soir : une habitude, au même moment que l’étonnement.', en: 'Partît, with every evening: a habit, at the same moment as the surprise.', warn: 'Le même moment' },
    { from: 'user', fr: fr(E(1845)), en: en(E(1845)) },
    { from: 'coach', fr: 'Avant que regarde la suite : quand elle part, personne ne sait encore rien.', en: 'Avant que looks ahead: when she leaves, nobody knows anything yet.', warn: 'Plus tard' },
  ],
  closing: { fr: 'Le temps du subjonctif dit le moment ; le traducteur doit l’entendre.', en: 'The subjunctive’s tense marks the moment; the translator must hear it.' },
  audio: REC('rec-c1-03-atelier'),
  say: REFRAME,
  terms: ['anteriorite', 'simultane'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-grille',
  title: 'Un verbe, deux moments',
  frSub: 'Le résultat ou l’action',
  hint: 'Quatre cartes, deux paires. Cherche ce qui est déjà fait.',
  audio: REC('rec-c1-03-moment'),
  say: REFRAME,
  terms: ['anteriorite', 'simultane'],
  cards: [
    {
      head: 'Fût partie : déjà loin', label: 'le plus-que-parfait',
      fr: fr(E(1835)), sub: rsOf(E(1835)),
      body: 'Le départ a eu lieu avant l’étonnement. En anglais : had left. Aujourd’hui : qu’elle soit partie. EN: The leaving came before the surprise.',
    },
    {
      head: 'Partît : chaque soir', label: 'l’imparfait',
      fr: fr(E(1837)), sub: rsOf(E(1837)),
      body: 'Le départ se répète au moment même où il s’étonne. Aujourd’hui : qu’elle parte. EN: The leaving happens at the same time as the surprise.',
    },
    {
      head: 'Eût terminé : le résultat', label: 'le plus-que-parfait',
      fr: fr(E(1839)), sub: rsOf(E(1839)),
      body: 'À midi, le travail doit être fini : le livre regarde le résultat. Aujourd’hui : qu’il ait terminé. EN: The result by noon.',
    },
    {
      head: 'Terminât : l’action', label: 'l’imparfait',
      fr: fr(E(1841)), sub: rsOf(E(1841)),
      body: 'On regarde l’action elle-même, à venir. Les deux phrases sont justes ; elles ne disent pas la même chose. EN: The action itself, still to come.',
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Déjà fait, puis aujourd’hui',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Déjà fait', [
      it(E(1835), 'fût partie'),
      it(E(1839), 'eût terminé'),
      it(E(1847), 'eût aimé'),
      it(E(1849), 'eût cessé'),
    ], chk('Dans la troisième phrase, quand l’a-t-elle aimé ?',
      ['avant, jadis', 'au moment du récit', 'plus tard'], 0,
      'Eût aimé et jadis : un amour fini avant le récit. EN: before, long ago.')),
    grp('Aujourd’hui', [
      it(E(1836), 'soit partie'),
      it(E(1840), 'ait terminé'),
      it(E(1848), 'l’ait aimé'),
      it(E(1850), 'ait cessé'),
    ], chk('Quel temps a pris la place du plus-que-parfait du subjonctif ?',
      ['le subjonctif passé', 'le présent du subjonctif', 'le plus-que-parfait de l’indicatif'], 0,
      'Le subjonctif passé, l’horloge du B2. EN: the past subjunctive.')),
    ctl('Le choix', '« On attendit que la pluie cessât » ou « que la pluie eût cessé » : laquelle insiste sur la pluie déjà finie ?',
      ['eût cessé', 'cessât'], 0,
      'Le temps composé regarde le résultat. EN: eût cessé.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre traductions à reprendre',
  errors: [
    {
      wrong: 'Il s’est étonné qu’elle est partie sans un mot.',
      right: fr(E(1836)),
      why: 'Normal : elle est vraiment partie, alors l’indicatif semble logique. Mais s’étonner que garde le subjonctif : soit partie. EN: s’étonner que keeps the subjunctive.',
    },
    {
      wrong: 'Elle a quitté la ville avant que la nouvelle est connue.',
      right: fr(E(1846)),
      why: 'Normal : en anglais, before the news was known prend un indicatif. Avant que garde le subjonctif : soit connue. EN: avant que takes the subjunctive.',
    },
    {
      wrong: 'On a attendu que la pluie a cessé pour sortir.',
      right: fr(E(1850)),
      why: 'Normal : on pense à until it had stopped. Attendre que garde le subjonctif : ait cessé. EN: attendre que takes the subjunctive.',
    },
    {
      wrong: 'Il s’étonnait qu’elle partait chaque soir sans un mot.',
      right: fr(E(1838)),
      why: 'Normal : partît ressemble à un imparfait de l’indicatif. C’est un subjonctif : aujourd’hui, parte. EN: partît is a subjunctive: parte.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite', 'simultane'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Avant que, puis le résultat',
  frSub: 'Trois paires, le livre et toi',
  examples: [
    ex(E(1845), 'le livre : la nouvelle viendra après'),
    ex(E(1846), 'aujourd’hui : soit connue'),
    ex(E(1849), 'le livre : la pluie déjà finie'),
    ex(E(1850), 'aujourd’hui : ait cessé'),
    ex(E(1851), 'le livre : l’arrêt lui-même'),
    ex(E(1852), 'aujourd’hui : cesse'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['anteriorite', 'simultane'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Repérer : le retour de Léon', TEXTE_A3, [
  { q: 'Range les subjonctifs : même moment ou plus tard, et déjà fait.', a: 'Même moment ou plus tard : fût (ouverte), vînt, fût (le fils), vérifiât, fût signé. Déjà fait : eût reconnu, eût cessé.' },
  { q: 'Dis en français d’aujourd’hui : « Il attendit qu’on l’eût reconnu pour parler. »', a: 'Il a attendu qu’on l’ait reconnu pour parler.' },
  { q: 'Pourquoi « que tout fût signé » et non « eût été signé » ?', a: 'Le notaire veut que tout soit signé avant la nuit, une action encore à venir : l’imparfait du subjonctif suffit.' },
  { q: 'Inférence : pourquoi le jardinier doute-t-il ?', a: 'Léon a longtemps été absent : personne ne le reconnaît plus, et on craint un imposteur.' },
], 'rec-c1-03-texte-a3', ['anteriorite', 'simultane']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Fût partie', '« Il s’étonna qu’elle fût partie. » Quand il s’étonne, elle…',
    ['est déjà partie', 'part à ce moment-là'], 0,
    'Le temps composé : déjà fait. EN: already gone.'),
  ctl('Avant que', '« avant que la nouvelle fût connue » : la nouvelle est…',
    ['encore inconnue', 'déjà connue'], 0,
    'Avant que regarde la suite. EN: not yet known.'),
  ctl('Deux justes', '« qu’il terminât » et « qu’il eût terminé » sont…',
    ['justes toutes les deux, avec deux sens', 'deux façons de dire la même chose'], 0,
    'L’action ou le résultat. EN: both right, two meanings.'),
], ['anteriorite', 'simultane']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le moment de l’action',
    opener: {
      line: 'Elle était déjà partie, ou elle partait chaque soir : ici tu entends le moment que dit chaque subjonctif, comme un traducteur. EN: She had already left, or she left every evening: here you hear the moment each subjunctive marks, like a translator.',
      imageRef: 'lessons/concordance-litteraire/act03.jpg',
    },
    sections: [],
    milestone: 'Tu distingues le résultat de l’action dans un subjonctif littéraire, et tu le rends par le bon temps d’aujourd’hui. EN: You can tell result from action in a literary subjunctive and map it.',
    estScreens: 36, restPoints: ['a3-cartes', 'a3-erreurs'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_ERREURS, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: JE VOUDRAIS QU’IL VÎNT
 *
 *  A conditional main clause: present (voudrais, serait bon, aimerais),
 *  past (aurait fallu, aurait voulu) and the second form as main verb (eût
 *  été juste). A publishing house in Brussels: a reissue keeps the author's
 *  note; a retelling modernises it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La réédition',
  frSub: 'Une maison d’édition à Bruxelles',
  setting: 'Bruxelles, une petite maison d’édition. Inès relit les épreuves d’une réédition ; Tom, stagiaire, voudrait moderniser chaque subjonctif.',
  bubbles: [
    { from: 'narrator', fr: 'Tom a souligné toutes les phrases au conditionnel.', en: 'Tom has underlined every sentence with a conditional.' },
    { from: 'user', fr: fr(E(1853)), en: en(E(1853)) },
    { from: 'coach', fr: 'Voudrais est un conditionnel. Dans ce livre, il donne une note passée : vînt.', en: 'Voudrais is a conditional. In this book it gives a past note: vînt.', warn: 'Le conditionnel compte comme un passé' },
    { from: 'user', fr: fr(E(1859)), en: en(E(1859)) },
    { from: 'coach', fr: 'Un conditionnel passé, même règle. Toi, en le racontant, tu dirais prévienne.', en: 'A past conditional, same rule. Telling it yourself, you would say prévienne.', warn: 'Aujourd’hui : le présent' },
    { from: 'user', fr: 'Alors je modernise tout, pour les lecteurs.', en: 'Then I modernise everything, for the readers.' },
    { from: 'coach', fr: 'Pas dans une réédition : on garde la note de l’auteur. Dans un résumé, oui.', en: 'Not in a reissue: we keep the author’s note. In a summary, yes.', warn: 'Le texte reste le texte' },
  ],
  closing: { fr: 'Je voudrais, il aurait fallu : le livre entend un passé, toi un présent.', en: 'Je voudrais, il aurait fallu: the book hears a past, you hear a present.' },
  audio: REC('rec-c1-03-edition'),
  say: REFRAME,
  terms: ['conditionnel'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-grille',
  title: 'Quatre conditionnels devant',
  frSub: 'Le conditionnel principal',
  hint: 'Quatre cartes. La dernière commence par une forme du livre.',
  audio: REC('rec-c1-03-conditionnel'),
  say: REFRAME,
  terms: ['conditionnel', 'concordance'],
  cards: [
    {
      head: 'Je voudrais qu’il vînt', label: 'le conditionnel présent',
      fr: fr(E(1853)), sub: rsOf(E(1853)),
      body: `${Cap(SL_REF)} t’a montré il faudrait qu’il vînt : le conditionnel compte comme un passé. Voici toute la famille, présent, passé, deuxième forme. Aujourd’hui : qu’il vienne. EN: A conditional counts as a past; here is the whole family.`,
    },
    {
      head: 'Il serait bon que', label: 'une tournure impersonnelle',
      fr: fr(E(1855)), sub: rsOf(E(1855)),
      body: 'Il serait bon, il faudrait, il vaudrait mieux : même note. Le livre écrit sût, tu lis sache. EN: The same with impersonal conditionals.',
    },
    {
      head: 'Il aurait fallu que', label: 'le conditionnel passé',
      fr: fr(E(1859)), sub: rsOf(E(1859)),
      body: 'Un regret sur le passé : prévînt pour le même moment, fût restée pour ce qui aurait dû être déjà fait. EN: A past conditional: imperfect, or pluperfect for what should already have happened.',
    },
    {
      head: 'Il eût été juste que', label: 'la deuxième forme',
      fr: fr(E(1863)), sub: rsOf(E(1863)),
      body: 'Eût été, sans « que » devant : le conditionnel passé à l’ancienne, lui aussi principal. Aujourd’hui : il aurait été juste qu’on la consulte. EN: The second form as the main verb.',
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un conditionnel, puis aujourd’hui',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Un conditionnel devant', [
      it(E(1853), 'voudrais, puis vînt'),
      it(E(1855), 'serait bon, puis sût'),
      it(E(1857), 'aimerais, puis répondît'),
      it(E(1869), 'souhaiterais, puis laissât'),
    ], chk('Dans ces phrases, qu’est-ce qui donne la note passée ?',
      ['le conditionnel du verbe principal', 'le que', 'le sujet de la subordonnée'], 0,
      'Voudrais, serait, aimerais : des conditionnels, comptés comme des passés. EN: the conditional main verb.')),
    grp('Aujourd’hui', [
      it(E(1854), 'vienne'),
      it(E(1856), 'sache'),
      it(E(1858), 'réponde'),
      it(E(1870), 'laisse'),
    ], chk('Après un conditionnel, aujourd’hui, tu mets…',
      ['le présent du subjonctif', 'un conditionnel', 'l’imparfait du subjonctif'], 0,
      'Après je voudrais que, il serait bon que, jamais de conditionnel : le présent du subjonctif. EN: the present subjunctive.')),
    ctl('Le regret', '« Il aurait voulu qu’elle fût restée. » Est-elle restée ?',
      ['non, il le regrette', 'oui, elle est restée'], 0,
      'Un conditionnel passé : ce qui ne s’est pas fait. EN: no, he regrets it.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conditionnel'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le conditionnel à l’oreille',
  frSub: 'Huit phrases, le livre et toi',
  lines: [
    ln(LIT(1320)), ln(LIT(1321)), ln(E(1853)), ln(E(1855)),
    ln(E(1859)), ln(E(1861)), ln(E(1867)), ln(E(1868)),
  ],
  questions: [
    { q: 'Première phrase : quand faudrait-il qu’il vienne ?', opts: ['demain', 'hier'], correct: 0, why: 'Le conditionnel parle de l’avenir ; vînt aussi. EN: tomorrow.' },
    { q: 'Deuxième phrase : dit-elle autre chose que la première ?', opts: ['non, la même chose', 'oui, le contraire'], correct: 0, why: 'Même sens, forme d’aujourd’hui. EN: the same.' },
    { q: 'Cinquième phrase : l’a-t-on prévenu ?', opts: ['non, et c’est un regret', 'oui, à temps'], correct: 0, why: 'Il aurait fallu : ce n’a pas été fait. EN: no.' },
    { q: 'Sixième phrase : est-elle restée ?', opts: ['non', 'oui'], correct: 0, why: 'Il aurait voulu : un souhait non réalisé. EN: no.' },
    { q: 'Dernière phrase : avant quel jour faudrait-il en parler ?', opts: ['lundi', 'vendredi', 'dimanche'], correct: 0, why: 'Avant lundi. EN: Monday.' },
  ],
  audio: REC('rec-c1-03-conditionnel-ecoute'),
  say: REFRAME,
  terms: ['conditionnel'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le conditionnel ne passe pas le que',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Après vouloir que, pas de conditionnel',
    body: 'Le conditionnel donne la note ; il ne descend pas dans une subordonnée au subjonctif. Je voudrais qu’il vînt devient je voudrais qu’il vienne, jamais qu’il viendrait. EN: The conditional sets the note but never enters the que clause.',
  },
  cards: [
    { promptLabel: 'le conditionnel recopié', promptSound: 'Je voudrais qu’il viendrait dès demain.', fr: fr(E(1854)), ipa: ipaOf(E(1854)), tip: 'Vînt : le présent du subjonctif, vienne. EN: vienne.' },
    { promptLabel: 'l’indicatif', promptSound: 'Il serait bon que chacun le sait.', fr: fr(E(1856)), ipa: ipaOf(E(1856)), tip: 'Il serait bon que : subjonctif, sache. EN: sache.' },
    { promptLabel: 'deux conditionnels', promptSound: 'J’aimerais qu’elle me répondrait.', fr: fr(E(1858)), ipa: ipaOf(E(1858)), tip: 'Répondît : réponde. EN: réponde.' },
    { promptLabel: 'le passé composé', promptSound: 'Il aurait fallu qu’on l’a prévenu.', fr: fr(E(1860)), ipa: ipaOf(E(1860)), tip: 'Prévînt : prévienne. EN: prévienne.' },
    { promptLabel: 'la deuxième forme mal lue', promptSound: 'Il ait été juste qu’on la consulte.', fr: fr(E(1864)), ipa: ipaOf(E(1864)), tip: 'Eût été, sans « que » devant : aurait été. EN: aurait été.' },
    { promptLabel: 'le futur', promptSound: 'Je souhaiterais qu’on me laissera seul.', fr: fr(E(1870)), ipa: ipaOf(E(1870)), tip: 'Laissât : laisse. EN: laisse.' },
  ],
  drill: [
    { promptSay: '« Je voudrais qu’il vînt. » Aujourd’hui : qu’il…', opts: ['vienne', 'viendrait'], correct: 0 },
    { promptSay: '« Il serait bon que chacun le sût. » Sût vient de…', opts: ['savoir', 'suivre'], correct: 0 },
    { promptSay: 'Dans un livre, après un conditionnel, le subjonctif est…', opts: ['à l’imparfait', 'au futur'], correct: 0 },
    { promptSay: '« Il aurait fallu qu’on le prévînt. » L’a-t-on prévenu ?', opts: ['non', 'oui'], correct: 0 },
    { promptSay: '« Il eût été juste qu’on la consultât. » Eût été se lit…', opts: ['aurait été', 'ait été'], correct: 0 },
    { promptSay: '« Il aurait voulu qu’elle fût restée. » Aujourd’hui : qu’elle…', opts: ['soit restée', 'resterait'], correct: 0 },
    { promptSay: 'Après « je voudrais que », dans ta bouche…', opts: ['le présent du subjonctif', 'le conditionnel'], correct: 0 },
    { promptSay: 'Le conditionnel est formé sur les terminaisons…', opts: ['de l’imparfait', 'du passé simple'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Après vouloir que, pas de conditionnel' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le conditionnel fait déraper' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-03-piege-conditionnel'),
  say: REFRAME,
  terms: ['conditionnel'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Repérer : la lettre du maire', TEXTE_A4, [
  { q: 'Relève les verbes principaux au conditionnel et le subjonctif qui suit chacun.', a: 'serait bon… consultât ; eût été juste… prévînt ; aurait voulu… fût prise ; souhaiterait… vînt.' },
  { q: 'Dis en français d’aujourd’hui : « Il eût été juste qu’on les prévînt plus tôt. »', a: 'Il aurait été juste qu’on les prévienne plus tôt.' },
  { q: 'Pourquoi « que la décision fût prise » et non « eût été prise » ?', a: 'Le maire regrette le moment de la décision, une action, pas un résultat déjà acquis : l’imparfait du subjonctif.' },
  { q: 'Inférence : qu’obtient le maire en allant voir le préfet ?', a: 'Un an de répit : l’école reste ouverte, la politesse soignée de sa lettre a payé.' },
], 'rec-c1-03-texte-a4', ['conditionnel']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La note', 'Pour la concordance classique, un conditionnel principal compte comme…',
    ['un passé', 'un présent', 'un futur'], 0,
    'Je voudrais qu’il vînt. EN: a past.'),
  ctl('Aujourd’hui', '« Je voudrais qu’il vînt. » Dans ta bouche…',
    ['je voudrais qu’il vienne', 'je voudrais qu’il viendrait'], 0,
    'Après vouloir que, jamais de conditionnel. EN: vienne.'),
  ctl('La réédition', 'Une réédition d’un roman classique…',
    ['garde la note de l’auteur', 'modernise chaque subjonctif'], 0,
    'Le texte reste le texte ; tu modernises en le racontant. EN: keeps the author’s forms.'),
], ['conditionnel']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Je voudrais qu’il vînt',
    opener: {
      line: 'Un stagiaire veut moderniser un roman : ici tu comprends pourquoi un conditionnel appelle, dans un livre, l’imparfait du subjonctif. EN: An intern wants to modernise a novel: here you see why a conditional calls for the imperfect subjunctive in a book.',
      imageRef: 'lessons/concordance-litteraire/act04.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais la concordance après un conditionnel, présent ou passé, et tu dis toujours le présent du subjonctif d’aujourd’hui. EN: You can read the sequence after a conditional and map it to today’s present subjunctive.',
    estScreens: 38, restPoints: ['a4-cartes', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_PIEGE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: EÛT-IL SU
 *
 *  Hypothetical inversion: eût-il su = s'il avait su; fût-il arrivé, eût-on
 *  écouté; n'eût été = sans. The pair si + plus-que-parfait / conditionnel
 *  passé of lesson 3 in B2 in literary dress. A ferryman's memory.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le passeur',
  frSub: 'Un souvenir de famille',
  text: LECTURE_PASSEUR,
  glossary: [
    { word: 'passeur', en: 'ferryman', note: 'Celui qui fait traverser la rivière en barque.' },
  ],
  questions: [
    { q: 'Devine le sens : « il arriva trop tard, exprès, je crois ». Que laisse entendre la narratrice ?', a: 'Qu’il a fait exprès d’arriver en retard : il ne voulait pas serrer la main du préfet qui inaugurait le pont.' },
    { q: 'Globale : que raconte ce souvenir ?', a: 'La fin du métier d’un passeur quand on construit un pont, et sa fierté jusqu’au bout.' },
    { q: 'Repère trois inversions et dis-les avec si.', a: 'Eût-il su (s’il avait su), fût-il arrivé (s’il était arrivé), eût-on écouté (si on avait écouté).' },
    { q: 'Et « N’eût été son entêtement » ?', a: 'Sans son entêtement : n’eût été se lit si ce n’avait été, une locution figée.' },
    { q: 'Inférence : pourquoi la barque pourrit-elle à l’endroit même où il l’avait amarrée ?', a: 'Le métier s’arrête net, le dernier soir ; la barque abandonnée sous le pont dit ce que le progrès a laissé derrière lui.' },
  ],
  audio: REC('rec-c1-03-passeur'),
  say: REFRAME,
  terms: ['hypothese'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-inversion',
  title: 'Le verbe devant, si disparaît',
  frSub: 'L’hypothèse par inversion',
  hint: 'Quatre cartes. Cherche la virgule, puis la conséquence.',
  audio: REC('rec-c1-03-hypothese'),
  say: REFRAME,
  terms: ['hypothese'],
  cards: [
    {
      head: 'Eût-il su', label: Cap(SI_REF),
      fr: fr(E(1871)), sub: rsOf(E(1871)),
      body: `« ${B203_REFRAME} » L’inversion dit la même chose sans si : eût-il su, s’il avait su. EN: ${B203_REFRAME_EN}`,
    },
    {
      head: 'Fût-il arrivé', label: 'avec être',
      fr: fr(E(1877)), sub: rsOf(E(1877)),
      body: 'Les verbes qui prennent être prennent fût : fût-il arrivé, s’il était arrivé. Ici, une hypothèse : la suite en tire la conséquence. EN: être verbs take fût.',
    },
    {
      head: 'N’eût été', label: 'une locution figée',
      fr: fr(E(1875)), sub: rsOf(E(1875)),
      body: 'N’eût été sa fatigue : si ce n’avait été sa fatigue, donc sans sa fatigue. Un nom suit, jamais un verbe. EN: N’eût été plus a noun means without.',
    },
    {
      head: 'Eût-on écouté', label: 'avec on',
      fr: fr(E(1883)), sub: rsOf(E(1883)),
      body: `On passe derrière le verbe aussi : eût-on écouté, si on avait écouté. ${Cap(INVERSION_REF)} disait : « ${B121_REFRAME} » EN: ${B121_REFRAME_EN}`,
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'L’inversion, puis si',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le verbe devant', [
      it(E(1871), 'eût-il su'),
      it(E(1873), 'eût-elle insisté'),
      it(E(1877), 'fût-il arrivé'),
      it(E(1883), 'eût-on écouté'),
    ], chk('Dans ces phrases, ce qui suit la virgule est…',
      ['la conséquence, qui ne s’est pas réalisée', 'une question', 'un fait raconté'], 0,
      'Une hypothèse sur le passé, puis ce qui en aurait découlé. EN: the unreal consequence.')),
    grp('Avec si', [
      it(E(1872), 's’il avait su'),
      it(E(1874), 'si elle avait insisté'),
      it(E(1878), 's’il était arrivé'),
      it(E(1884), 'si on avait écouté'),
    ], chk('Après si, aujourd’hui, quel temps ?',
      ['le plus-que-parfait', 'le conditionnel passé', 'le subjonctif passé'], 0,
      'Jamais de conditionnel après si : avait su. EN: the pluperfect.')),
    ctl('Le sens', '« Eût-elle insisté, on l’eût écoutée. » A-t-elle insisté ?',
      ['non', 'oui'], 0,
      'Une hypothèse irréelle : elle n’a pas insisté. EN: no.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre lectures ratées',
  errors: [
    {
      wrong: 'S’il aurait su la vérité, il serait resté.',
      right: fr(E(1872)),
      why: 'Normal : eût se lit souvent aurait. Mais l’inversion remplace si, et après si, jamais de conditionnel : s’il avait su. EN: after si, the pluperfect.',
    },
    {
      wrong: 'Il a su la vérité, et il est resté.',
      right: fr(E(1872)),
      why: 'Normal : eût-il ressemble à eut-il, un passé simple. Mais le chapeau et la virgule font une hypothèse : il ne savait pas, il n’est pas resté. EN: a hypothesis, not a fact.',
    },
    {
      wrong: 'Sans qu’il soit fatigué, il aurait continué.',
      right: fr(E(1876)),
      why: 'Normal : n’eût été ressemble à une proposition. C’est une locution suivie d’un nom : sans sa fatigue. EN: n’eût été plus a noun.',
    },
    {
      wrong: 'Si on avait écouté les anciens, le village n’avait pas été noyé.',
      right: fr(E(1884)),
      why: 'Normal : n’eût pas été ressemble au plus-que-parfait. Dans la conséquence, c’est un conditionnel passé : n’aurait pas été. EN: the consequence takes the past conditional.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'La même hypothèse, trois habits',
  frSub: 'Avec si, sans si, aujourd’hui',
  examples: [
    ex(LIT(1301), `${SL_REF} : si, puis eût su`),
    ex(LIT(1302), 'aujourd’hui : s’il l’avait su'),
    ex(E(1871), 'sans si : eût-il su'),
    ex(E(1872), 'aujourd’hui : s’il avait su'),
    ex(E(1810), 'l’acte 1 : eût-il parlé'),
    ex(E(1881), 'une phrase d’aujourd’hui'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Comprendre : la lettre de Claire', TEXTE_A5, [
  { q: 'Relève les hypothèses par inversion et dis-les avec si.', a: 'Eût-elle répondu (si elle avait répondu), eût-on su (si on avait su). N’eût été la fierté de son père : sans la fierté de son père.' },
  { q: 'Dis en français d’aujourd’hui : « Eût-elle répondu à la lettre, tout eût été différent. »', a: 'Si elle avait répondu à la lettre, tout aurait été différent.' },
  { q: 'Claire a-t-elle répondu ? Qui l’a poussée à écrire ?', a: 'Non, et personne ne l’a poussée : chaque inversion dit ce qui ne s’est pas passé.' },
  { q: 'Inférence : que montre la dernière phrase ?', a: 'Le regret qui dure : la lettre est restée dans un tiroir, gardée mais jamais envoyée.' },
], 'rec-c1-03-texte-a5', ['hypothese']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La forme', '« Eût-il su », en tête de phrase, veut dire…',
    ['s’il avait su', 'il a su', 'qu’il ait su'], 0,
    'L’inversion remplace si. EN: if he had known.'),
  ctl('N’eût été', '« N’eût été sa fatigue » veut dire…',
    ['sans sa fatigue', 'malgré sa fatigue'], 0,
    'Si ce n’avait été : sans. EN: without.'),
  ctl('Le fait', 'Après « eût-il su… », ce qui est dit…',
    ['ne s’est pas réalisé', 's’est réalisé'], 0,
    'Un irréel du passé. EN: it did not happen.'),
], ['hypothese']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Eût-il su',
    opener: {
      line: 'Eût-il su ce que le pont ferait à son métier : ici tu lis l’hypothèse sans si, le verbe en tête de phrase. EN: Had he known what the bridge would do to his trade: here you read the hypothesis without si, the verb first.',
      imageRef: 'lessons/concordance-litteraire/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais eût-il su, fût-il arrivé et n’eût été, et tu les dis avec si ou sans. EN: You can read hypothetical inversion and say it with si or sans.',
    estScreens: 38, restPoints: ['a5-cartes', 'a5-erreurs'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_ERREURS, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: FÛT-IL ROI
 *
 *  Concessive inversion: fût-il roi = même s'il était roi; l'eût-il voulu;
 *  dussé-je (dût-il recapped from lesson 9 in B2); si riche fût-il (aussi…
 *  soit-il recapped from lesson 16 in B2); serait-il ministre. The rest of
 *  the sentence decides between si and même si. An evening class in Dakar.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le cours du soir',
  frSub: 'Dakar, la salle 12',
  setting: 'Dakar, un cours du soir de littérature. Awa lit un roman ancien à voix haute ; Monsieur Diallo, le professeur, l’arrête sur chaque inversion.',
  bubbles: [
    { from: 'narrator', fr: 'Awa croit que chaque inversion veut dire si.', en: 'Awa thinks every inversion means si.' },
    { from: 'user', fr: fr(E(1889)), en: en(E(1889)) },
    { from: 'coach', fr: 'Regarde la suite : il devrait attendre quand même. Fût-il roi, c’est même s’il était roi.', en: 'Look at the rest: he would have to wait anyway. Fût-il roi means even if he were king.', warn: 'La suite décide' },
    { from: 'user', fr: fr(E(1896)), en: en(E(1896)) },
    { from: 'coach', fr: 'Dussé-je, c’est le dût-il que tu connais, avec je : même si je devais.', en: 'Dussé-je is the dût-il you know, with je: even if I had to.', warn: 'Devoir, à la première personne' },
    { from: 'user', fr: fr(CONC), en: en(CONC) },
    { from: 'coach', fr: 'Ça, c’est le B2. Un roman ancien écrirait : si pratique fût-il.', en: 'That is B2. An old novel would write: si pratique fût-il.', warn: 'Aussi… soit-il, au passé du livre' },
  ],
  closing: { fr: 'Même forme, deux sens : la suite de la phrase choisit entre si et même si.', en: 'Same form, two meanings: the rest of the sentence chooses between si and même si.' },
  audio: REC('rec-c1-03-dakar'),
  say: REFRAME,
  terms: ['concession', 'hypothese'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-inversion',
  title: 'Quatre concessions inversées',
  frSub: 'Même si, sans même si',
  hint: 'Quatre cartes. Cherche ce qui arrive quand même.',
  audio: REC('rec-c1-03-concession'),
  say: REFRAME,
  terms: ['concession'],
  cards: [
    {
      head: 'Fût-il roi', label: 'même s’il était roi',
      fr: fr(E(1889)), sub: rsOf(E(1889)),
      body: 'La suite va contre ce qu’on attendrait : un roi devrait attendre quand même. C’est une concession, pas une hypothèse. EN: The rest runs against expectation: a concession.',
    },
    {
      head: 'L’eût-il voulu', label: 'même s’il l’avait voulu',
      fr: fr(E(1893)), sub: rsOf(E(1893)),
      body: 'La forme d’une hypothèse, le sens d’une concession : qu’il le veuille ou non, il ne pouvait pas partir. EN: The form of a hypothesis, the meaning of a concession.',
    },
    {
      head: 'Dussé-je', label: Cap(SL_REF),
      fr: fr(E(1896)), sub: rsOf(E(1896)),
      body: 'Le dût-il du B2, avec je : le e devient é pour la prononciation (dussè-je en orthographe rectifiée). Même si je devais attendre dix ans. EN: Dût-il with je: even if I had to.',
    },
    {
      head: 'Serait-il ministre', label: 'le conditionnel',
      fr: fr(E(1898)), sub: rsOf(E(1898)),
      body: 'La même concession avec un conditionnel au lieu du subjonctif. Style soutenu, encore vivant à l’écrit. EN: The same concession with a conditional; formal, still alive in writing.',
    },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-inversion',
  title: 'Six inversions, six traductions',
  cols: ['Tu lis', 'Ça remplace', 'Aujourd’hui'],
  rows: [
    { cells: ['eût-il su', 'si', 's’il avait su'], say: fr(E(1871)),
      detail: { title: 'L’hypothèse', body: 'La suite tire la conséquence. EN: the rest draws the consequence.', say: fr(E(1872)) } },
    { cells: ['fût-il roi', 'même si', 'même s’il était roi'], say: fr(E(1889)),
      detail: { title: 'La concession', body: 'La suite va contre l’attente. EN: the rest runs against expectation.', say: fr(E(1890)) } },
    { cells: ['dussé-je', 'même si', 'même si je devais'], say: fr(E(1896)),
      detail: { title: 'Devoir, avec je', body: 'Le dût-il du B2 à la première personne. EN: dût-il with je.', say: fr(E(1897)) } },
    { cells: ['si riche fût-il', 'aussi… que', 'aussi riche qu’il soit'], say: fr(E(1901)),
      detail: { title: 'Le degré', body: `Le aussi… soit-il de ${CONCESSION_REF}, au passé du livre. EN: the B2 form in book past.`, say: fr(CONC) } },
    { cells: ['serait-il ministre', 'même si', 'même s’il était ministre'], say: fr(E(1898)),
      detail: { title: 'Au conditionnel', body: 'Soutenu, sans subjonctif littéraire. EN: formal, no literary subjunctive.', say: fr(E(1899)) } },
    { cells: ['n’eût été sa fatigue', 'sans', 'sans sa fatigue'], say: fr(E(1875)),
      detail: { title: 'La locution', body: 'Un nom suit : si ce n’avait été. EN: a noun follows.', say: fr(E(1876)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession', 'hypothese'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Si ou même si',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('La même forme, deux sens', [
      it(E(1871), 'la suite en découle'),
      it(E(1889), 'la suite va contre'),
      it(E(1893), 'il ne pouvait pas, de toute façon'),
      it(E(1877), 'la suite en découle'),
    ], chk('« Fût-il roi, il devrait attendre son tour. » La phrase dit…',
      ['même s’il était roi', 's’il était roi, alors'], 0,
      'Il attendrait quand même : une concession. EN: even if he were king.')),
    grp('Aujourd’hui', [
      it(E(1890), 'même s’il était roi'),
      it(E(1894), 'même s’il l’avait voulu'),
      it(E(1897), 'même si je devais'),
      it(E(1899), 'même s’il était ministre'),
    ], chk('Après même si, quel temps ?',
      ['l’imparfait ou le plus-que-parfait de l’indicatif', 'le subjonctif', 'le conditionnel'], 0,
      'Même si se construit comme si : jamais de subjonctif ni de conditionnel. EN: indicative after même si.')),
    ctl(Cap(CONCESSION_REF), `« ${fr(CONC)} » Cette forme…`,
      ['est encore courante à l’écrit soigné', 'n’existe que dans les romans anciens'], 0,
      `« ${B216_REFRAME} » EN: ${B216_REFRAME_EN}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Même si, comme si',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Même si se construit comme si',
    body: 'Quand tu rends fût-il roi par même si, garde l’indicatif : même s’il était roi. Ni conditionnel, ni subjonctif, ni futur après même si. EN: même si takes the indicative, like si.',
  },
  cards: [
    { promptLabel: 'le conditionnel', promptSound: 'Même s’il serait roi, il devrait attendre son tour.', fr: fr(E(1890)), ipa: ipaOf(E(1890)), tip: 'Même si, puis l’imparfait : était. EN: était.' },
    { promptLabel: 'le conditionnel passé', promptSound: 'Même s’il l’aurait voulu, il n’aurait pas pu partir.', fr: fr(E(1894)), ipa: ipaOf(E(1894)), tip: 'L’eût-il voulu : même s’il l’avait voulu. EN: avait voulu.' },
    { promptLabel: 'le subjonctif', promptSound: 'Même si je doive attendre dix ans, je ne renoncerai pas.', fr: fr(E(1897)), ipa: ipaOf(E(1897)), tip: 'Dussé-je : même si je devais. EN: devais.' },
    { promptLabel: 'le futur', promptSound: 'Même s’il sera ministre, la règle vaudrait pour lui.', fr: fr(E(1899)), ipa: ipaOf(E(1899)), tip: 'Serait-il : même s’il était. EN: était.' },
    { promptLabel: 'aussi sans que', promptSound: 'Aussi riche il soit, il vivait simplement.', fr: fr(E(1902)), ipa: ipaOf(E(1902)), tip: 'Aussi… qu’il soit, ou aussi riche soit-il. EN: aussi riche qu’il soit.' },
    { promptLabel: 'le subjonctif après même si', promptSound: 'Même si elle soit excellente, l’offre ne me tenterait pas.', fr: fr(E(1892)), ipa: ipaOf(E(1892)), tip: 'Même si : était. EN: était.' },
  ],
  drill: [
    { promptSay: '« Fût-il roi, il devrait attendre. » C’est…', opts: ['une concession', 'une hypothèse'], correct: 0 },
    { promptSay: '« Eût-il su, il fût resté. » C’est…', opts: ['une hypothèse', 'une concession'], correct: 0 },
    { promptSay: '« Dussé-je attendre dix ans » : aujourd’hui, même si je…', opts: ['devais attendre dix ans', 'devrais attendre dix ans'], correct: 0 },
    { promptSay: 'Dussé-je vient de…', opts: ['devoir', 'dire'], correct: 0 },
    { promptSay: '« Si riche fût-il, il vivait simplement. » Il était…', opts: ['riche, et pourtant simple', 'pauvre'], correct: 0 },
    { promptSay: '« L’eût-il voulu, il n’aurait pas pu partir. » A-t-il pu partir ?', opts: ['non', 'oui'], correct: 0 },
    { promptSay: '« Serait-il ministre » se lit…', opts: ['même s’il était ministre', 's’il est ministre'], correct: 0 },
    { promptSay: 'Après même si, on met…', opts: ['l’indicatif', 'le subjonctif'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Même si se construit comme si' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que même si n’accepte pas' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes versions' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-03-piege-concession'),
  say: REFRAME,
  terms: ['concession'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Comprendre : le vieux Bastien', TEXTE_A6, [
  { q: 'Relève les inversions et dis si chacune est une hypothèse ou une concession.', a: 'Fût-il fatigué (concession : même s’il était fatigué), dût-il en mourir (concession), si riche fût-il devenu (concession), l’eût-on supplié (concession : même si on l’avait supplié).' },
  { q: 'Dis en français d’aujourd’hui : « L’eût-on supplié à genoux, il n’eût pas vendu son champ. »', a: 'Même si on l’avait supplié à genoux, il n’aurait pas vendu son champ.' },
  { q: 'Pourquoi tant de concessions pour un seul homme ?', a: 'Chacune montre qu’aucun obstacle ne le fait céder : la fatigue, la maladie, la richesse, les prières.' },
  { q: 'Inférence : que dit la fin sur Bastien ?', a: 'Que son entêtement n’était pas de l’égoïsme : il refuse de vendre, mais donne son champ à l’école.' },
], 'rec-c1-03-texte-a6', ['concession']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le sens', '« Fût-il roi » veut dire…',
    ['même s’il était roi', 's’il était roi, donc'], 0,
    'Une concession. EN: even if he were king.'),
  ctl('Le choix', 'Entre hypothèse et concession, qui décide ?',
    ['la suite de la phrase', 'la forme du verbe'], 0,
    'La forme est la même ; la suite choisit. EN: the rest of the sentence.'),
  ctl('Aujourd’hui', 'Après même si, on met…',
    ['l’indicatif', 'le subjonctif', 'le conditionnel'], 0,
    'Même s’il était. EN: the indicative.'),
], ['concession']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Fût-il roi',
    opener: {
      line: 'Fût-il roi, il devrait attendre son tour : ici tu reconnais la même inversion quand elle veut dire même si. EN: Even if he were king he would wait his turn: here you recognise the same inversion when it means even if.',
      imageRef: 'lessons/concordance-litteraire/act06.jpg',
    },
    sections: [],
    milestone: 'Tu sépares l’hypothèse de la concession par la suite de la phrase, et tu dis chaque inversion avec si, même si ou aussi… que. EN: You can tell hypothesis from concession and map each inversion.',
    estScreens: 40, restPoints: ['a6-cartes', 'a6-construire'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TABLE, A6_CONSTRUIRE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LA DISCORDANCE QUI PARLE
 *
 *  A writer who knows the rule and leaves it on purpose: an imparfait (or
 *  plus-que-parfait) du subjonctif after a present with a conditional
 *  meaning; a présent after a past for what still holds, or comes after,
 *  the moment of writing. Tante Hortense's letters.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les lettres de tante Hortense',
  frSub: 'Une règle, pliée exprès',
  text: LECTURE_HORTENSE,
  glossary: [
    { word: 'détour', en: 'turn (of a sentence)', note: 'À chaque détour de phrase : à tout moment, presque dans chaque phrase.' },
  ],
  questions: [
    { q: 'Devine le sens : « à chaque détour de phrase ». Que dit le narrateur du style de sa tante ?', a: 'Qu’elle employait l’imparfait du subjonctif presque dans chaque phrase.' },
    { q: 'Globale : qu’a fini par comprendre le narrateur ?', a: 'Que les écarts de sa tante n’étaient pas des distractions : elle pliait la règle quand le sens le demandait.' },
    { q: 'Dans « Je ne crois pas que ton frère le fît », pourquoi l’imparfait après un présent ?', a: 'Il porte le sens d’un conditionnel : je ne crois pas qu’il le ferait.' },
    { q: 'Et « voulut que vous soyez libres », pourquoi le présent après un passé ?', a: 'La liberté dure encore au moment où elle écrit : le présent la rattache à aujourd’hui.' },
    { q: 'Que veut dire la dernière phrase, « Il n’est pas sûr que je l’eusse compris » ?', a: 'Que je ne l’aurais peut-être pas compris : eusse compris vaut un conditionnel passé. Le narrateur imite sa tante.' },
  ],
  audio: REC('rec-c1-03-hortense'),
  say: REFRAME,
  terms: ['discordance'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecarts',
  title: 'Deux écarts qui parlent',
  frSub: 'Un autre sens, un autre moment',
  hint: 'Quatre cartes. Les deux premières disent un conditionnel ; les deux autres, aujourd’hui.',
  audio: REC('rec-c1-03-ecarts'),
  say: REFRAME,
  terms: ['discordance', 'conditionnel'],
  cards: [
    {
      head: 'Un imparfait après un présent', label: 'un conditionnel déguisé',
      fr: fr(E(1907)), sub: rsOf(E(1907)),
      body: 'Je ne crois pas, au présent, puis fît : l’écart dit un conditionnel, qu’il le ferait. Une nuance de la langue soignée. EN: An imperfect subjunctive after a present can carry a conditional meaning.',
    },
    {
      head: 'La condition le confirme', label: 'si…',
      fr: fr(E(1909)), sub: rsOf(E(1909)),
      body: 'Cherche la condition, dite ou sous-entendue : si on le lui proposait. Elle prouve que acceptât vaut accepterait. EN: The condition shows the conditional meaning.',
    },
    {
      head: 'Un présent après un passé', label: 'ce qui dure',
      fr: fr(E(1915)), sub: rsOf(E(1915)),
      body: 'Voulut, puis soient : l’auteur quitte la note parce que la liberté dure encore quand il écrit. EN: A present after a past for what still holds now.',
    },
    {
      head: 'Après aujourd’hui', label: 'ce qui vient',
      fr: fr(E(1912)), sub: rsOf(E(1912)),
      body: 'Demain se compte à partir du moment où l’on écrit : le présent du subjonctif, même dans un texte soigné. EN: What comes after the moment of writing takes the present.',
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'L’écart et son sens',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Un conditionnel déguisé', [
      it(E(1907), 'fît, après crois'),
      it(E(1908), 'ferait'),
      it(E(1909), 'acceptât, après n’est pas sûr'),
      it(E(1910), 'accepterait'),
    ], chk('Dans ces phrases, fît et acceptât veulent dire…',
      ['ferait, accepterait', 'a fait, a accepté', 'avait fait, avait accepté'], 0,
      'Un imparfait du subjonctif après un présent : le sens d’un conditionnel. EN: would do, would accept.')),
    grp('Ce qui dure, ce qui vient', [
      it(E(1914), 'fussent : la note du livre'),
      it(E(1915), 'soient : et ils le sont'),
      it(E(1912), 'soyez : demain'),
    ], chk('Dans la deuxième phrase, pourquoi soient après voulut ?',
      ['la liberté dure encore quand on écrit', 'l’auteur a oublié la règle'], 0,
      'Le présent rattache le fait au moment de l’écriture. EN: it still holds.')),
    ctl('La dernière phrase', '« Il n’est pas sûr que je l’eusse compris. » Eusse compris veut dire…',
      ['que je l’aurais compris', 'que je l’avais compris'], 0,
      'Un plus-que-parfait du subjonctif après un présent : un conditionnel passé. EN: that I would have understood it.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discordance'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Faute ou choix',
  frSub: 'Huit phrases, une seule oreille',
  lines: [
    ln(E(1907)), ln(E(1908)), ln(E(1909)), ln(E(1910)),
    ln(E(1912)), ln(E(1914)), ln(E(1915)), ln(E(1916)),
  ],
  questions: [
    { q: 'Première phrase : parle-t-on de ce que le frère a fait ?', opts: ['non, de ce qu’il ferait', 'oui, de ce qu’il a fait'], correct: 0, why: 'Fît après un présent : un conditionnel. EN: what he would do.' },
    { q: 'Deuxième phrase : dit-elle la même chose que la première ?', opts: ['oui, en français d’aujourd’hui', 'non, le contraire'], correct: 0, why: 'Ferait : même sens. EN: the same.' },
    { q: 'Troisième phrase : lui a-t-on déjà proposé quelque chose ?', opts: ['pas encore : c’est une condition', 'oui, et elle a refusé'], correct: 0, why: 'Si on le lui proposait : une condition. EN: not yet.' },
    { q: 'Cinquième phrase : quand faut-il être là ?', opts: ['demain', 'hier', 'ce soir'], correct: 0, why: 'Demain : après le moment présent. EN: tomorrow.' },
    { q: 'Septième phrase : les enfants sont-ils libres aujourd’hui ?', opts: ['oui', 'non'], correct: 0, why: 'Et ils le sont : au présent. EN: yes.' },
  ],
  audio: REC('rec-c1-03-ecarts-ecoute'),
  say: REFRAME,
  terms: ['discordance'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre jugements trop rapides',
  errors: [
    {
      wrong: 'Fît après je ne crois pas : une faute de l’auteur.',
      right: 'Fît après je ne crois pas : un conditionnel, il le ferait.',
      why: 'Normal : la grille veut un présent sous un présent. Mais un auteur soigné peut choisir l’imparfait pour dire un conditionnel. EN: a deliberate conditional, not a mistake.',
    },
    {
      wrong: 'Soyez après voulut : la concordance est oubliée.',
      right: 'Soyez après voulut : la liberté dure encore.',
      why: 'Normal : sous un passé, le livre attend fussiez. Mais le présent rattache le fait au moment où l’on écrit. EN: the present ties the fact to now.',
    },
    {
      wrong: 'Eusse compris : je l’avais compris.',
      right: 'Eusse compris : je l’aurais compris.',
      why: 'Normal : eusse compris ressemble à un plus-que-parfait. Après il n’est pas sûr que, au présent, il vaut un conditionnel passé. EN: would have understood.',
    },
    {
      wrong: 'Le directeur a exigé que vous fussiez là demain.',
      right: fr(E(1912)),
      why: 'Normal : on veut suivre la note du passé. Mais demain vient après le moment où l’on écrit : le présent, même à l’écrit soigné. EN: tomorrow takes the present.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discordance'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Comprendre : la plaque de l’école', TEXTE_A7, [
  { q: 'Pourquoi la plaque écrit-elle fussent après voulut, mais soit après exigea ?', a: 'Fussent suit la note du passé ; soit quitte la note parce que l’entrée est toujours gratuite au moment où l’on lit.' },
  { q: 'Dis en français d’aujourd’hui : « Le fondateur voulut que ses élèves fussent instruits. »', a: 'Le fondateur a voulu que ses élèves soient instruits.' },
  { q: 'Que veut dire « il ne croit pas que le fondateur acceptât les écrans, s’il revenait » ?', a: 'Qu’il ne les accepterait pas : acceptât, après un présent et avec une condition, vaut un conditionnel.' },
  { q: 'Inférence : que pense le professeur des écrans en classe ?', a: 'Il les regarde avec réserve, et se sert du fondateur pour le dire sans le dire.' },
], 'rec-c1-03-texte-a7', ['discordance']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le conditionnel', '« Je ne crois pas qu’il le fît » veut dire…',
    ['qu’il ne le ferait pas', 'qu’il ne l’a pas fait'], 0,
    'Fît après un présent : un conditionnel. EN: he would not do it.'),
  ctl('Le présent', 'Un présent du subjonctif après un passé, dans un texte soigné, peut dire…',
    ['que le fait dure encore aujourd’hui', 'que l’auteur se trompe forcément'], 0,
    'Un autre moment : celui de l’écriture. EN: it still holds.'),
  ctl('La méthode', 'Devant un écart, tu demandes d’abord…',
    ['ce qu’il ajoute au sens', 'qui l’a imprimé'], 0,
    'L’écart a un sens. EN: what it adds.'),
], ['discordance']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La discordance qui parle',
    opener: {
      line: 'Une tante écrit fît après un présent et soyez après un passé : ici tu comprends qu’un écart peut être un choix, et ce qu’il dit. EN: An aunt writes fît after a present and soyez after a past: here you see that a break can be a choice, and what it says.',
      imageRef: 'lessons/concordance-litteraire/act07.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une discordance voulue, tu dis si elle exprime un conditionnel ou un autre moment, et tu ne la prends plus pour une faute. EN: You can read a deliberate break and say what it means.',
    estScreens: 38, restPoints: ['a7-cartes', 'a7-ecoute'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: AUJOURD’HUI, DANS LA PROSE ET LA PRESSE
 *
 *  The norm (OQLF: imparfait in principle, présent admitted; Grevisse: the
 *  imparfait du subjonctif has left speech, writing keeps être and avoir in
 *  the 3rd person), partial concordance, the solemn fût of a news story,
 *  speech never. A newsroom: L'Écho de Vercelin (invented).
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'La rédaction',
  frSub: 'L’Écho de Vercelin, 18 h',
  setting: 'La rédaction de L’Écho de Vercelin, un quotidien régional. Yanis, jeune journaliste, relit son article avec Hélène, la secrétaire de rédaction.',
  bubbles: [
    { from: 'narrator', fr: 'Yanis a écrit une phrase très solennelle sur le conseil municipal.', en: 'Yanis has written a very solemn sentence about the town council.' },
    { from: 'user', fr: fr(E(1927)), en: en(E(1927)) },
    { from: 'coach', fr: 'Fût, dans un article : c’est voulu, pour le poids. Garde-le, mais le reste au passé composé.', en: 'Fût in an article: it is deliberate, for weight. Keep it, but put the rest in the passé composé.', warn: 'La presse, pour la solennité' },
    { from: 'user', fr: fr(E(1935)), en: en(E(1935)) },
    { from: 'coach', fr: 'Une concordance partielle : on eût dit, puis qu’il parle. Beaucoup d’auteurs font ainsi.', en: 'Partial concordance: on eût dit, then qu’il parle. Many writers do this.', warn: 'Le présent est admis' },
    { from: 'user', fr: 'Donc en réunion, je peux dire qu’il fût d’accord.', en: 'So in a meeting I can say qu’il fût d’accord.' },
    { from: 'coach', fr: 'Seulement pour faire rire la rédaction.', en: 'Only to make the newsroom laugh.', warn: 'À l’oral, presque jamais' },
  ],
  closing: { fr: 'L’usage moderne garde le présent ; la forme rare, quand elle reste, est un choix.', en: 'Modern usage keeps the present; the rare form, when it stays, is a choice.' },
  audio: REC('rec-c1-03-redaction'),
  say: REFRAME,
  terms: ['norme', 'registre'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-norme',
  title: 'Ce que disent les références',
  frSub: 'La norme et l’usage',
  hint: 'Quatre cartes, de la règle à la conversation.',
  audio: REC('rec-c1-03-norme'),
  say: REFRAME,
  terms: ['norme'],
  cards: [
    {
      head: 'La règle de principe', label: 'l’OQLF',
      fr: fr(E(1931)), sub: rsOf(E(1931)),
      body: 'Après un passé ou un conditionnel, l’imparfait du subjonctif reste la règle de principe ; le présent et le passé du subjonctif sont admis. Certains correcteurs tiennent encore à la règle stricte. EN: The imperfect in principle; the present is accepted.',
    },
    {
      head: 'La concordance partielle', label: 'Grevisse',
      fr: fr(E(1930)), sub: rsOf(E(1930)),
      body: 'Grevisse constate que l’écrit garde l’imparfait du subjonctif surtout pour être et avoir, et à la troisième personne du singulier. EN: Writing keeps it mainly for être, avoir and the third person.',
    },
    {
      head: 'La presse', label: 'pour la solennité',
      fr: fr(E(1927)), sub: rsOf(E(1927)),
      body: 'Un journaliste garde parfois un fût isolé pour donner du poids, au milieu d’un article au passé composé. EN: A journalist may keep one fût for weight.',
    },
    {
      head: 'La conversation', label: 'presque jamais',
      fr: fr(E(1932)), sub: rsOf(E(1932)),
      body: 'À l’oral, on dit qu’il vienne, même après un passé. Qu’il vînt, dit à voix haute, imite les livres ou vise une solennité appuyée. EN: Speech almost always uses the present.',
    },
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-norme',
  title: 'Six textes, six usages',
  cols: ['Où', 'Concordance stricte ?', 'Ce que tu lis'],
  rows: [
    { cells: ['un roman classique', 'oui', 'qu’il revînt'], say: fr(E(1800)),
      detail: { title: 'Le roman classique', body: 'Chaque subjonctif suit la note. EN: every subjunctive follows the note.', say: fr(E(1812)) } },
    { cells: ['un roman d’aujourd’hui', 'non, le présent', 'qu’il parte'], say: fr(E(1929)),
      detail: { title: 'Le roman récent', body: 'L’usage moderne, admis par l’OQLF. EN: modern usage.', say: fr(E(1803)) } },
    { cells: ['un auteur qui aime la concordance', 'en partie', 'fût, eût'], say: fr(E(1925)),
      detail: { title: 'La concordance partielle', body: 'Être et avoir gardés, le reste au présent. EN: être and avoir kept.', say: fr(E(1926)) } },
    { cells: ['la presse', 'parfois, pour le poids', 'ne fût pas signé'], say: fr(E(1927)),
      detail: { title: 'La presse', body: 'Un fût isolé, solennel. EN: one solemn fût.', say: fr(E(1928)) } },
    { cells: ['un discours', 'parfois', 'que la paix fût rendue'], say: fr(E(1953)),
      detail: { title: 'Le discours', body: 'La forme rare élève le ton. EN: it raises the tone.', say: fr(E(1954)) } },
    { cells: ['une conversation', 'presque jamais', 'qu’il vienne'], say: fr(E(1867)),
      detail: { title: 'L’oral', body: 'Le présent, presque toujours. EN: almost always the present.', say: fr(E(1937)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['norme', 'registre'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Stricte, partielle ou moderne',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Trois usages', [
      it(E(1800), 'stricte : revînt'),
      it(E(1925), 'partielle : vienne, puis fût'),
      it(E(1935), 'partielle : on eût dit, puis parle'),
      it(E(1929), 'moderne : parte'),
    ], chk('« Il fallait qu’elle vienne, bien que ce fût risqué. » L’auteur…',
      ['garde fût mais écrit vienne', 'suit partout la concordance', 'n’emploie aucune forme rare'], 0,
      'Une concordance partielle : la forme la plus courante est gardée. EN: partial concordance.')),
    grp('Aujourd’hui', [
      it(E(1926), 'soit'),
      it(E(1928), 'ne soit pas signé'),
      it(E(1934), 'ait raison'),
      it(E(1936), 'aurait dit'),
    ], chk('Que deviennent ces formes rares ?',
      ['un présent du subjonctif, ou un conditionnel passé pour on eût dit', 'rien ne change'], 0,
      'Imparfait : présent ; deuxième forme : conditionnel passé. EN: present, or past conditional.')),
    ctl('L’oral', '« Il fallait qu’il vînt », dit sérieusement en réunion, sonne…',
      ['comique ou très affecté', 'naturel'], 0,
      'À l’oral, l’imparfait du subjonctif ne s’entend plus guère, sinon par jeu. EN: comic or affected.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['norme'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Six phrases d’aujourd’hui',
  frSub: 'Ce que deviennent les formes rares',
  examples: [
    ex(E(1926), 'la concordance partielle, modernisée'),
    ex(E(1928), 'l’article, au passé composé'),
    ex(E(1934), 'eût : ait'),
    ex(E(1936), 'on eût dit : on aurait dit'),
    ex(E(1929), 'un roman récent'),
    ex(E(1937), 'un compte rendu de réunion'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['norme'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris la phrase d’aujourd’hui',
  frSub: 'Cinq phrases, sans forme rare',
  itemIds: [...dicteeFor(8), E(1867)],
  audio: AUDIO,
  say: REFRAME,
  terms: ['norme'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Repérer : un article d’aujourd’hui', TEXTE_A8, [
  { q: 'Relève les subjonctifs et classe-les : forme rare ou forme d’aujourd’hui.', a: 'Aujourd’hui : soit retenu, revienne. Formes rares : écoutât (dans la citation), fût attendue.' },
  { q: 'Pourquoi la présidente dit-elle « Il eût fallu qu’on nous écoutât » ?', a: 'Pour la solennité : l’article le souligne, « non sans solennité ». À l’oral, la forme rare se remarque.' },
  { q: 'Dis en français d’aujourd’hui : « Bien que la décision fût attendue, la salle a accueilli l’annonce en silence. »', a: 'Bien que la décision soit attendue, la salle a accueilli l’annonce en silence. (Bien qu’elle ait été attendue est aussi possible.)' },
  { q: 'Inférence : que pense le journaliste de la présidente ?', a: 'Il note son ton solennel avec un léger sourire : « non sans solennité » prend ses distances.' },
], 'rec-c1-03-texte-a8', ['norme', 'registre']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La norme', 'Après un verbe principal au passé, l’OQLF…',
    ['admet le présent du subjonctif', 'interdit le présent du subjonctif'], 0,
    'L’imparfait en principe, le présent admis. EN: accepts the present.'),
  ctl('L’usage', 'Les formes que l’écrit garde le plus sont…',
    ['qu’il fût, qu’il eût', 'que nous fussions, qu’ils vinssent'], 0,
    'Être et avoir, à la troisième personne. EN: fût and eût.'),
  ctl('L’oral', 'À l’oral, l’imparfait du subjonctif…',
    ['est rare, et souvent un jeu', 'est courant'], 0,
    'Le présent, presque toujours. EN: rare, often in jest.'),
], ['norme']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Aujourd’hui',
    opener: {
      line: 'Un jeune journaliste écrit fût dans un article : ici tu sais ce que dit la norme, ce que font les auteurs d’aujourd’hui et ce que la forme rare ajoute. EN: A young journalist writes fût in an article: here you learn the norm, modern practice and what the rare form adds.',
      imageRef: 'lessons/concordance-litteraire/act08.jpg',
    },
    sections: [],
    milestone: 'Tu sais que le présent est admis, que l’écrit garde surtout fût et eût, et qu’un fût dans la presse est un choix de ton. EN: You know the norm, partial concordance and the solemn fût of the press.',
    estScreens: 40, restPoints: ['a8-cartes', 'a8-exemples'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_TABLE, A8_CONSTRUIRE, A8_EXEMPLES, A8_DICTEE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: L’EFFET
 *
 *  What the rare form does today: solemnity (a speech, an epitaph), irony (a
 *  style too grand for its subject), pastiche (a period imitated). The
 *  « nuit des Tilleuls », a mock-epic residents' meeting.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La nuit des Tilleuls',
  frSub: 'Une chronique à la manière de 1880',
  text: LECTURE_TILLEULS,
  glossary: [
    { word: 'syndic', en: 'property manager', note: 'Celui qui gère l’immeuble pour les copropriétaires.' },
  ],
  questions: [
    { q: 'Devine le sens : « l’usage barbare des locataires du troisième ». Qu’ont-ils fait de si grave ?', a: 'Ils sortent les poubelles le mercredi matin : barbare grossit un petit désaccord, et c’est drôle.' },
    { q: 'Globale : que raconte cette chronique ?', a: 'Une réunion de copropriété en pleine nuit, convoquée pour fixer le jour des poubelles.' },
    { q: 'Repère quatre formes rares et dis-les aujourd’hui.', a: 'fussent sorties (soient sorties), réunît (réunisse), descendît (descende), se réglât (se règle), se fût refermée (se soit refermée), eût tenu (aurait tenu), eût préféré (aurait préféré).' },
    { q: '« Fût-il deux heures du matin » : hypothèse ou concession ?', a: 'Une concession : même s’il avait été deux heures du matin, elle aurait tenu séance.' },
    { q: 'Ton : pourquoi « comme d’une bataille » à la fin ?', a: 'Le style épique pour une affaire de poubelles : l’ironie est tendre, l’immeuble en rit encore.' },
  ],
  audio: REC('rec-c1-03-tilleuls'),
  say: REFRAME,
  terms: ['pastiche', 'registre'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lecture',
  title: 'Trois effets, un test',
  frSub: 'Solennité, ironie, pastiche',
  hint: 'Quatre cartes. La dernière te donne le test.',
  audio: REC('rec-c1-03-effets'),
  say: REFRAME,
  terms: ['registre', 'pastiche'],
  cards: [
    {
      head: 'La solennité', label: 'un discours',
      fr: fr(E(1953)), sub: rsOf(E(1953)),
      body: 'Le sujet est grave et la forme rare l’élève encore : un discours, une plaque, un éloge. Ici, pas d’ironie. EN: A grave subject raised by the rare form.',
    },
    {
      head: 'L’ironie', label: 'le style trop grand',
      fr: fr(E(1945)), sub: rsOf(E(1945)),
      body: 'Un chien qui aboie, traité comme un décret royal : le décalage fait sourire. EN: A tiny subject in a grand style.',
    },
    {
      head: 'Le pastiche', label: 'un siècle imité',
      fr: fr(E(1943)), sub: rsOf(E(1943)),
      body: 'L’auteur reprend toute la concordance d’un roman de 1880 pour raconter la vie d’aujourd’hui. On joue avec un style, sans le copier mot pour mot. EN: A whole period style imitated for play.',
    },
    {
      head: 'Le test', label: 'le sujet et le style',
      fr: fr(E(1949)), sub: rsOf(E(1949)),
      body: 'Compare le sujet et le style. S’ils sont à la même hauteur, c’est solennel ; si le style est trop grand, c’est ironique. EN: Compare subject and style.',
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Grave ou drôle',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le sujet et le style', [
      it(E(1953), 'la paix d’un pays'),
      it(E(1945), 'un chien qui aboie'),
      it(E(1943), 'un dessert'),
      it(E(1947), 'une photocopieuse'),
    ], chk('« Que la paix fût rendue à ce pays » : l’effet est…',
      ['solennel', 'comique'], 0,
      'Le sujet est à la hauteur du style. EN: solemn.')),
    grp('Ce que tu en dis', [
      it(E(1949), 'l’ironie'),
      it(E(1950), 'le poids'),
      it(E(1951), 'le pastiche'),
      it(E(1952), 'la règle'),
    ], chk('Pour parler d’un pastiche, tu dis…',
      ['le style imite un siècle passé pour en jouer', 'l’auteur ne sait pas écrire au présent'], 0,
      'Le pastiche est un jeu voulu. EN: a deliberate play on a style.')),
    ctl('La chute', '« Il fallut que l’on se rendît à l’évidence : la photocopieuse était en panne. » Qu’est-ce qui fait rire ?',
      ['la chute banale après un début tragique', 'la forme rendît elle-même'], 0,
      'Le décalage entre la forme et le sujet. EN: the bathos.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'pastiche'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Grave ou drôle, à l’oreille',
  frSub: 'Huit phrases, un seul ton',
  lines: [
    ln(E(1943)), ln(E(1945)), ln(E(1947)), ln(E(1953)),
    ln(E(1949)), ln(E(1950)), ln(E(1951)), ln(E(1927)),
  ],
  questions: [
    { q: 'Première phrase : de quoi parle-t-on avec tant de dignité ?', opts: ['d’un dessert', 'd’un roi', 'd’un mariage'], correct: 0, why: 'Un dessert : le style est trop grand. EN: a dessert.' },
    { q: 'Deuxième phrase : qui devait se taire ?', opts: ['le chien du voisin', 'le voisin', 'le conseil'], correct: 0, why: 'Le chien, après vingt-deux heures. EN: the dog.' },
    { q: 'Troisième phrase : quelle était l’évidence ?', opts: ['une machine en panne', 'une défaite'], correct: 0, why: 'La photocopieuse : une chute comique. EN: a broken machine.' },
    { q: 'Quatrième phrase : le ton est…', opts: ['grave', 'moqueur'], correct: 0, why: 'La paix d’un pays : un sujet grave. EN: grave.' },
    { q: 'Dernière phrase : qui a déploré ?', opts: ['la mairie', 'le journal', 'le voisin'], correct: 0, why: 'La mairie. EN: the town hall.' },
  ],
  audio: REC('rec-c1-03-effets-ecoute'),
  say: REFRAME,
  terms: ['registre'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'L’effet, pas l’erreur',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Le sujet dit l’effet',
    body: 'Une forme rare dans un texte d’aujourd’hui n’est ni une faute ni un ornement vide : regarde le sujet. Grave, c’est solennel ; petit, c’est ironique ; tout un style imité, c’est un pastiche. EN: The subject tells you the effect.',
  },
  cards: [
    { promptLabel: 'le pastiche pris pour une erreur', promptSound: 'L’auteur ne sait pas que cette forme est vieillie.', fr: fr(E(1951)), ipa: ipaOf(E(1951)), tip: 'Il le sait très bien : il imite exprès. EN: deliberate imitation.' },
    { promptLabel: 'l’ironie prise au sérieux', promptSound: 'Le style est grand parce que la situation est grave.', fr: fr(E(1949)), ipa: ipaOf(E(1949)), tip: 'La situation est petite : c’est le décalage qui compte. EN: the gap is the point.' },
    { promptLabel: 'la forme jugée vide', promptSound: 'La forme rare ne change rien à la phrase.', fr: fr(E(1950)), ipa: ipaOf(E(1950)), tip: 'Elle change le ton. EN: it changes the tone.' },
    { promptLabel: 'un seul effet pour tout', promptSound: 'La forme rare est toujours comique.', fr: fr(E(1952)), ipa: ipaOf(E(1952)), tip: 'Solennelle, ironique ou pastiche : le contexte décide. EN: three effects.' },
    { promptLabel: 'la modernisation de travers', promptSound: 'Il a fallu que l’on s’est rendu à l’évidence.', fr: fr(E(1948)), ipa: ipaOf(E(1948)), tip: 'Rendît : rende, un subjonctif. EN: rende.' },
    { promptLabel: 'l’indicatif', promptSound: 'Le conseil a exigé que le chien du voisin cessait d’aboyer après vingt-deux heures.', fr: fr(E(1946)), ipa: ipaOf(E(1946)), tip: 'Exiger que : cesse. EN: cesse.' },
  ],
  drill: [
    { promptSay: 'Un chien qui aboie, traité comme un décret : l’effet est…', opts: ['ironique', 'solennel'], correct: 0 },
    { promptSay: 'La paix d’un pays, au subjonctif littéraire : l’effet est…', opts: ['solennel', 'ironique'], correct: 0 },
    { promptSay: 'Toute une page à la manière de 1880 sur une réunion d’immeuble, c’est…', opts: ['un pastiche', 'une erreur'], correct: 0 },
    { promptSay: 'Pour trouver l’effet, tu compares…', opts: ['le sujet et le style', 'les terminaisons'], correct: 0 },
    { promptSay: '« Il fallut que l’on se rendît à l’évidence » : aujourd’hui…', opts: ['il a fallu qu’on se rende à l’évidence', 'il a fallu qu’on s’est rendu à l’évidence'], correct: 0 },
    { promptSay: 'La chute « la photocopieuse était en panne » fait…', opts: ['sourire', 'peur'], correct: 0 },
    { promptSay: 'Un fût dans un éloge funèbre est plutôt…', opts: ['solennel', 'comique'], correct: 0 },
    { promptSay: 'Une forme rare dans un texte récent est…', opts: ['un choix de ton', 'forcément une faute'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le sujet dit l’effet' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qu’on lit de travers' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six bonnes lectures' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-03-piege-effets'),
  say: REFRAME,
  terms: ['registre', 'pastiche'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-lecture',
  title: 'L’effet en quatre lignes',
  frSub: 'Ce qu’il faut retenir',
  points: [
    'Sujet grave, forme rare : la solennité. EN: grave subject, rare form: solemnity.',
    'Petit sujet, grand style : l’ironie, souvent tendre. EN: small subject, grand style: irony.',
    'Tout un style d’époque imité : le pastiche. EN: a whole period style imitated: pastiche.',
    'Une seule forme rare dans un texte moderne : cherche le mot qu’elle met en relief. EN: one rare form: find what it highlights.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['registre', 'pastiche'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Comprendre : la paix de la vallée', TEXTE_A9, [
  { q: 'Relève les formes rares et dis-les aujourd’hui.', a: 'fût rendue (soit rendue), se parlassent (se parlent), fût reconstruit (soit reconstruit), sonnât (sonne).' },
  { q: 'Ce texte est-il ironique, solennel ou un pastiche ?', a: 'Solennel : le sujet, la paix entre deux villages après une crue, est à la hauteur du style.' },
  { q: 'Que met en relief la phrase « Que la paix fût rendue à la vallée, voilà ce que tous espéraient » ?', a: 'Le souhait commun : placé en tête et repris par voilà, il devient presque une prière.' },
  { q: 'Inférence : pourquoi le vieux maire veut-il qu’on sonne les cloches ?', a: 'Pour fêter la réconciliation autant que le pont : les cloches réunissent les deux villages.' },
], 'rec-c1-03-texte-a9', ['registre']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’ironie', 'Un style trop grand pour un petit sujet crée…',
    ['de l’ironie', 'de la solennité'], 0,
    'Le décalage fait sourire. EN: irony.'),
  ctl('Le pastiche', 'Un pastiche…',
    ['imite un style pour en jouer', 'copie un texte mot pour mot'], 0,
    'Un jeu avec un style. EN: imitation for play.'),
  ctl('Le test', 'Pour trouver l’effet, tu regardes d’abord…',
    ['le sujet', 'la ponctuation'], 0,
    'Le sujet dit l’effet. EN: the subject.'),
], ['registre', 'pastiche']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'L’effet',
    opener: {
      line: 'Une réunion d’immeuble racontée comme une bataille de 1880 : ici tu dis ce que fait la forme rare, solennité, ironie ou pastiche. EN: A residents’ meeting told like an 1880 battle: here you say what the rare form does.',
      imageRef: 'lessons/concordance-litteraire/act09.jpg',
    },
    sections: [],
    milestone: 'Tu dis si une concordance stricte est solennelle, ironique ou un pastiche, et tu le prouves par le sujet. EN: You can name the effect of a strict concordance and prove it.',
    estScreens: 40, restPoints: ['a9-cartes', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_ECOUTE, A9_PIEGE, A9_FOCUS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LIRE UNE PAGE ENTIÈRE
 *
 *  One page with everything: strict concordance (simultaneous and prior),
 *  two hypothetical inversions, one spoken présent, and a modern ending.
 *  Lisette's summer at the mountain inn.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’été de Lisette',
  frSub: 'Une page, toutes les formes',
  text: LECTURE_LISETTE,
  glossary: [
    { word: 'marcheurs', en: 'hikers', note: 'Ceux qui traversent le col à pied.' },
  ],
  questions: [
    { q: 'Devine le sens : « elle écoutait comme si elles fussent venues d’un autre monde ». Que ressent Lisette ?', a: 'Que la vallée lui semble lointaine, presque étrangère : comme si elles étaient venues d’ailleurs.' },
    { q: 'Globale : que raconte cette page ?', a: 'Un été de jeunesse dans une auberge de montagne, une rencontre manquée et une auberge vendue l’hiver suivant.' },
    { q: 'Repère trois imparfaits du subjonctif (même moment ou après) et deux plus-que-parfaits du subjonctif.', a: 'Imparfaits : finît, fût levée, fussent dressées, détestât, racontât, revînt. Plus-que-parfaits : fussent venues (après comme si : étaient venues) et eût trouvé (avant qu’elle eût trouvé le courage : le résultat, jamais atteint).' },
    { q: 'Les deux inversions : hypothèse ou concession ?', a: 'Deux hypothèses : fût-il resté (s’il était resté), eût-elle su (si elle avait su). Ni l’une ni l’autre ne s’est réalisée.' },
    { q: 'Quelle phrase quitte la note, et pourquoi ?', a: '« Je voudrais que tu reviennes » : une parole de la tante, au présent de celle qui parle. À la fin, Lisette adulte parle aussi au présent d’aujourd’hui.' },
  ],
  audio: REC('rec-c1-03-lisette'),
  say: REFRAME,
  terms: ['concordance', 'discordance'],
};

const A10_TYPES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-types',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-lecture',
  title: 'Quatre questions à la page',
  frSub: 'La note, le moment, l’inversion, l’écart',
  hint: 'Quatre cartes, quatre questions, dans l’ordre.',
  audio: REC('rec-c1-03-lire'),
  say: REFRAME,
  terms: ['concordance', 'hypothese'],
  cards: [
    {
      head: 'Quelle note ?', label: 'le verbe principal',
      fr: fr(E(1961)), sub: rsOf(E(1961)),
      body: 'Cherche le verbe principal : ici eût voulu, une deuxième forme. Il donne la note, et finît la suit. EN: Find the main verb first.',
    },
    {
      head: 'Quel moment ?', label: 'avant ou pas',
      fr: fr(E(1965)), sub: rsOf(E(1965)),
      body: 'Racontât : au même moment que il fallait. Un temps composé aurait regardé avant. EN: Same moment, or before?',
    },
    {
      head: 'Quelle inversion ?', label: 'si ou même si',
      fr: fr(E(1963)), sub: rsOf(E(1963)),
      body: 'La suite tire la conséquence : une hypothèse. Il n’est pas resté, elle ne lui a pas parlé. EN: Hypothesis or concession?',
    },
    {
      head: 'Quel écart ?', label: 'ce qu’il dit',
      fr: fr(E(1968)), sub: rsOf(E(1968)),
      body: 'La phrase de la tante quitte la note : une voix au présent, plus proche que tout le récit. EN: What does the break say?',
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'La page, phrase par phrase',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Trois phrases de la page', [
      it(E(1961), 'eût voulu, puis finît'),
      it(E(1963), 'fût-il resté'),
      it(E(1965), 'il fallait, puis racontât'),
    ], chk('« Fût-il resté une heure de plus, elle lui eût parlé. » Lui a-t-elle parlé ?',
      ['non', 'oui'], 0,
      'Une hypothèse irréelle : il est reparti. EN: no.')),
    grp('Ce que tu en dis', [
      it(E(1967), 'la concordance du récit'),
      it(E(1968), 'la parole de la tante'),
      it(E(1969), 'l’inversion'),
    ], chk('Pourquoi la tante dit-elle « que tu reviennes », au présent ?',
      ['c’est une parole, au présent de celle qui parle', 'l’autrice s’est trompée'], 0,
      'Une voix au présent, dans un récit au passé. EN: it is speech.')),
    ctl('La fin', '« il aurait fallu qu’elle parle » : pourquoi le français d’aujourd’hui ?',
      ['Lisette raconte aujourd’hui, adulte', 'c’est une citation du vieux roman'], 0,
      'Le récit rejoint le présent : la note change avec lui. EN: the adult narrator speaks today.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'discordance'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La page à la radio',
  frSub: 'Huit phrases sur Lisette',
  lines: [
    ln(E(1961)), ln(E(1962)), ln(E(1963)), ln(E(1964)),
    ln(E(1965)), ln(E(1966)), ln(E(1967)), ln(E(1969)),
  ],
  questions: [
    { q: 'Première phrase : que souhaitait-elle ?', opts: ['un été sans fin', 'partir avant la fin de l’été'], correct: 0, why: 'Que l’été ne finisse jamais. EN: an endless summer.' },
    { q: 'Troisième phrase : est-il resté ?', opts: ['non', 'oui'], correct: 0, why: 'Une hypothèse irréelle. EN: no.' },
    { q: 'Cinquième phrase : que fallait-il lui raconter ?', opts: ['les nouvelles de la vallée', 'des contes de montagne'], correct: 0, why: 'Les nouvelles de la vallée. EN: the valley news.' },
    { q: 'Septième phrase : pourquoi garder la concordance ?', opts: ['pour donner du poids au récit', 'pour faire rire'], correct: 0, why: 'Le poids, pas l’ironie. EN: weight.' },
    { q: 'Dernière phrase : que fait l’inversion ?', opts: ['elle rend l’hypothèse plus solennelle', 'elle pose une question'], correct: 0, why: 'Une hypothèse, plus solennelle. EN: more solemn.' },
  ],
  audio: REC('rec-c1-03-lisette-ecoute'),
  say: REFRAME,
  terms: ['concordance'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-lecture',
  title: 'Devant une page classique',
  frSub: 'Quatre gestes, dans l’ordre',
  points: [
    'Lis une fois pour le sens, sans t’arrêter sur les formes. EN: read once for meaning.',
    'Pour chaque subjonctif : quelle note, quel moment, quelle traduction. EN: note, moment, map.',
    'Pour chaque inversion : si ou même si, d’après la suite. EN: si or même si.',
    'Pour chaque écart : quel sens ou quel moment il ajoute, et l’effet du tout. EN: what each break adds, and the overall effect.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'discordance'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Comprendre : l’atelier du peintre', TEXTE_A10, [
  { q: 'Relève les formes rares et classe-les : concordance, inversion, écart.', a: 'Concordance : fût (silencieux), complimentât, ouvrît. Inversion : eût-on fait tomber (hypothèse), il eût posé. Écart : « que vous gardiez », une parole au présent.' },
  { q: 'Dis en français d’aujourd’hui : « Eût-on fait tomber un pinceau, il eût posé sa palette pour la journée. »', a: 'Si on avait fait tomber un pinceau, il aurait posé sa palette pour la journée.' },
  { q: 'Pourquoi « que vous gardiez » et non une forme rare ?', a: 'C’est sa parole, dite au présent : elle sonne plus proche, et c’est la dernière.' },
  { q: 'Inférence : pourquoi cette dernière phrase émeut-elle ?', a: 'Le peintre exigeant laisse enfin voir son affection : c’est son dernier jour, et il parle de transmission.' },
], 'rec-c1-03-texte-a10', ['concordance', 'discordance']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La première question', 'Devant un subjonctif, tu cherches d’abord…',
    ['le verbe principal', 'la fin du paragraphe'], 0,
    'Il donne la note. EN: the main verb.'),
  ctl('L’inversion', 'Pour choisir entre si et même si, tu regardes…',
    ['la suite de la phrase', 'le premier mot'], 0,
    'La suite décide. EN: the rest of the sentence.'),
  ctl('L’écart', 'Une parole au présent dans un récit en concordance…',
    ['sonne plus proche', 'est une faute'], 0,
    'Une voix d’aujourd’hui dans un récit d’autrefois. EN: it sounds closer.'),
], ['concordance', 'discordance']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Lire une page entière',
    opener: {
      line: 'Un été dans une auberge de montagne, raconté avec toutes les formes du livre : ici tu lis une page entière, note, moment, inversion et écart. EN: A summer at a mountain inn told with every book form: here you read a whole page.',
      imageRef: 'lessons/concordance-litteraire/act10.jpg',
    },
    sections: [],
    milestone: 'Tu lis une page classique entière : chaque subjonctif, chaque inversion, chaque écart, et l’effet de l’ensemble. EN: You can read a whole classic page, every form and its effect.',
    estScreens: 38, restPoints: ['a10-types', 'a10-ecoute'],
  },
  sections: [A10_LECTURE, A10_TYPES, A10_CONSTRUIRE, A10_ECOUTE, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: PRÉSENTE LA PAGE
 *
 *  Model (a reading-club presentation of Lisette's page), plan, role play,
 *  the TASK (present an original page to the club, in modern French), speak
 *  practice on modern rows, cheat sheet, progress, quiz, review, roundup.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La présentation d’Odile',
  frSub: 'Une page, présentée au club',
  text: LECTURE_MODELE,
  questions: [
    { q: 'Quelles formes Odile cite-t-elle, et comment les explique-t-elle ?', a: 'fussent dressées, revînt, fût-il resté, eût-elle su : elle les cite entre guillemets, puis les dit en français d’aujourd’hui.' },
    { q: 'Emploie-t-elle elle-même une forme rare ?', a: 'Non : elle cite les formes du livre et parle au présent du subjonctif (soient dressées, revienne).' },
    { q: 'Quel écart relève-t-elle, et quel sens lui donne-t-elle ?', a: 'La parole de la tante au présent : une voix qui traverse le temps.' },
    { q: 'Comment finit-elle ?', a: 'Par son avis (un texte proche du conte) et une question au club.' },
  ],
  audio: REC('rec-c1-03-modele'),
  say: REFRAME,
  terms: ['concordance', 'discordance'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-lecture',
  title: 'Cinq étapes avant de présenter',
  frSub: 'De la page au club',
  steps: [
    'Lis la page une fois pour le sens : qui, où, que se passe-t-il. EN: read once for meaning.',
    'Souligne chaque subjonctif rare et chaque inversion, et note le verbe principal. EN: underline every form and its main verb.',
    'Pour chacun : le moment, la traduction, et si ou même si pour les inversions. EN: moment, map, si or même si.',
    'Cherche l’écart, s’il y en a un : quel sens, quel moment, quelle voix. EN: find the break and what it says.',
    'Écris pour le club : une salutation, la présentation, ton avis, une question. EN: write for the club.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'hypothese'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Quatre phrases pour ta présentation',
  cases: [
    { situation: 'Tu ouvres la présentation', fr: fr(E(1976)), en: en(E(1976)) },
    { situation: 'Tu décris le style', fr: fr(E(1977)), en: en(E(1977)) },
    { situation: 'Tu relèves l’écart', fr: fr(E(1978)), en: en(E(1978)) },
    { situation: 'Tu donnes ton avis', fr: fr(E(1982)), en: en(E(1982)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discordance'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Explique la page à Zoé',
  frSub: 'Six tours, à voix haute',
  setting: 'Ton amie Zoé prépare un oral sur un roman classique et t’appelle : elle bute sur la concordance et les inversions. Tu lui expliques en français d’aujourd’hui, sans jamais employer les formes rares.',
  turns: [
    {
      ai: 'Salut ! Dans mon roman, il y a « je voudrais qu’il vînt ». Pourquoi pas « qu’il vienne » ?', en: 'Hi! My novel has « je voudrais qu’il vînt ». Why not « qu’il vienne »?',
      user: 'Pour l’auteur, le conditionnel compte comme un passé. Aujourd’hui, on dit qu’il vienne.',
      userEn: 'For the author, the conditional counts as a past. Today we say qu’il vienne. (The conditional main clause.)',
      alts: [
        { fr: 'C’est la concordance classique ; en français moderne, qu’il vienne.', en: 'It is classical concordance; in modern French, qu’il vienne.' },
        { fr: 'Ça veut juste dire : je voudrais qu’il vienne.', en: 'It just means: I would like him to come.' },
      ],
    },
    {
      ai: 'Et « je doutais qu’il fût venu la veille » ?', en: 'And « je doutais qu’il fût venu la veille »?',
      user: 'Sa venue est antérieure au doute : je doutais qu’il soit venu la veille.',
      userEn: 'His coming is earlier than the doubt: I doubted he had come the day before. (Anteriority: the past subjunctive today.)',
      alts: [
        { fr: 'C’est déjà fait au moment du doute : qu’il soit venu.', en: 'It is already done when the doubt arises: qu’il soit venu.' },
        { fr: 'Je n’étais pas sûr qu’il soit venu la veille.', en: 'I was not sure he had come the day before. (Another doubt verb, same tense.)' },
      ],
    },
    {
      ai: 'Là, j’ai « Eût-il su la vérité, il fût resté ». Je ne comprends rien.', en: 'Here I have « Eût-il su la vérité, il fût resté ». I understand nothing.',
      user: 'C’est une hypothèse : s’il avait su la vérité, il serait resté. Il ne savait pas.',
      userEn: 'It is a hypothesis: if he had known the truth, he would have stayed. He did not know. (Hypothetical inversion.)',
      alts: [
        { fr: 'Le verbe passe devant et si disparaît : s’il avait su.', en: 'The verb moves forward and si disappears: s’il avait su.' },
        { fr: 'Il n’a pas su la vérité, donc il n’est pas resté.', en: 'He did not learn the truth, so he did not stay.' },
      ],
    },
    {
      ai: 'Et « Fût-il roi, il devrait attendre son tour », c’est pareil ?', en: 'And « Fût-il roi, il devrait attendre son tour », is it the same?',
      user: 'Non, là c’est une concession : même s’il était roi, il devrait attendre.',
      userEn: 'No, that is a concession: even if he were king, he would have to wait. (The rest of the sentence decides.)',
      alts: [
        { fr: 'La suite va contre l’attente : c’est même si, pas si.', en: 'The rest runs against expectation: it is même si, not si.' },
        { fr: 'Ça veut dire : roi ou pas, il attend son tour.', en: 'It means: king or not, he waits his turn.' },
      ],
    },
    {
      ai: 'Mon prof dit que l’autrice « quitte la concordance » à la fin. C’est une faute ?', en: 'My teacher says the author « leaves the concordance » at the end. Is that a mistake?',
      user: 'Non, c’est un choix : une parole au présent sonne plus proche que le récit.',
      userEn: 'No, it is a choice: a line of speech in the present sounds closer than the narrative. (A deliberate break.)',
      alts: [
        { fr: 'C’est voulu : l’écart dit un autre moment, celui de la personne qui parle.', en: 'It is deliberate: the break marks another moment, the speaker’s.' },
        { fr: 'Pas du tout, l’OQLF admet même le présent après un passé.', en: 'Not at all, OQLF even accepts the present after a past.' },
      ],
    },
    {
      ai: 'Bon, et moi, j’écris comme ça dans mon oral ?', en: 'Right, and should I write like that in my talk?',
      user: 'Cite les phrases du livre, mais explique-les en français d’aujourd’hui.',
      userEn: 'Quote the book’s sentences, but explain them in today’s French. (Recognise, never produce.)',
      alts: [
        { fr: 'Garde les formes rares pour les citations.', en: 'Keep the rare forms for quotations.' },
        { fr: 'Non : tu cites, puis tu traduis.', en: 'No: you quote, then you translate.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'concession'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Présente cette page à ton club',
  frSub: 'Mission écrite, format C1',
  brief: `Ton club de lecture t’a confié une page d’un récit écrit à la manière classique. Tu la présentes par écrit avant la réunion, comme Odile l’a fait pour Lisette. Voici la page (texte original écrit pour la leçon) : « ${EXTRAIT_TACHE} »`,
  briefEn: 'Your reading club has given you a page written in classical style. You present it in writing before the meeting, as Odile did for Lisette. The page is printed in the brief (an original text written for the lesson).',
  produce: 'Écris une présentation de 220 à 320 mots, en français d’aujourd’hui : résume la page, cite au moins quatre formes rares (dont les deux inversions) et dis chacune en français d’aujourd’hui, explique le moment ou le sens de chacune, relève l’écart et ce qu’il dit, puis donne ton avis sur l’effet du style et pose une question au club.',
  responseSpec: { kind: 'text', minWords: 220, maxWords: 340 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : La page est résumée sans contresens, au moins quatre formes rares sont citées et expliquées, l’écart est relevé, et tu finis par un avis et une question au club. Entre 220 et 320 mots.',
          '2 : La présentation est là, mais il manque l’écart, ou l’avis, ou une des deux inversions, ou la longueur sort un peu des limites.',
          '1 : Un résumé seul, sans analyse des formes, ou une copie de la page.',
        ],
      },
      {
        key: 'lecture',
        label: 'Lecture des formes',
        maxPoints: 4,
        descriptors: [
          '4 : Chaque forme citée a la bonne traduction : il aurait fallu que quelqu’un prenne, qu’on l’accuse, bien que la salle soit pleine, que son nom figure, si on avait écouté, la ligne aurait été sauvée, même si elle était, qu’on note. Aucune forme rare n’est employée hors citation.',
          '3 : Une ou deux erreurs de forme, mais chaque mode et chaque moment est juste (le ne explétif, gardé ou omis, n’est pas une erreur).',
          '2 : Plusieurs erreurs : un indicatif après un déclencheur, un conditionnel après si ou même si, ou une inversion lue comme un fait.',
          '1 : Les formes sont mal lues ou recopiées sans traduction.',
        ],
      },
      {
        key: 'analyse',
        label: 'Analyse : moment, inversion, écart',
        maxPoints: 3,
        descriptors: [
          '3 : Tu distingues l’hypothèse (eût-on écouté) de la concession (fût-elle la dernière voix), tu dis pourquoi la phrase de Madame Lenoir est au présent, et tu nommes l’effet du style (solennité, gravité).',
          '2 : Une des trois choses manque ou reste vague.',
          '1 : Les formes sont traduites, mais rien n’est expliqué.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 2,
        descriptors: [
          '2 : Une présentation écrite pour un club : un registre soutenu mais naturel, des citations entre guillemets, ta voix au présent.',
          '1 : Le texte imite le style du livre, ou devient une liste de notes sans phrases.',
        ],
      },
    ],
  },
  scaffold: [
    'Bonsoir à tous.',
    'Je vous présente',
    'L’auteur garde',
    'c’est-à-dire',
    'Ce n’est pas une hypothèse :',
    'Une seule phrase s’écarte',
    'Selon moi,',
    'Qu’en pensez-vous ?',
  ],
  modelAnswer: 'Bonsoir à tous. Je vous présente une page sur la fermeture d’une petite gare, à Montclaret. L’auteur garde la concordance classique dans tout le récit. Dès la première phrase, « il eût fallu que quelqu’un prît la parole » veut dire : il aurait fallu que quelqu’un prenne la parole. Personne ne le fait. Le chef de gare « craignait qu’on ne l’accusât », c’est-à-dire qu’il avait peur qu’on l’accuse ; le ne n’est pas une négation. « Bien que la salle fût pleine, personne ne voulut que son nom figurât au procès-verbal » : bien que la salle soit pleine, personne n’a voulu que son nom figure dans le compte rendu. Deux inversions donnent au texte sa gravité. « Eût-on écouté les cheminots, la ligne eût été sauvée » est une hypothèse : si on avait écouté les cheminots, la ligne aurait été sauvée. On ne les a pas écoutés. En revanche, « Fût-elle la dernière voix du village » n’est pas une hypothèse : c’est une concession, même si elle était la dernière voix, et le mot « pourtant » le confirme. Une seule phrase s’écarte de la concordance, et ce n’est pas un hasard : Madame Lenoir dit « Je voudrais que mes petits-enfants puissent encore prendre le train ». C’est une parole, au présent de celle qui parle, tournée vers l’avenir ; elle sonne plus vivante que tout le récit, et c’est elle qu’on encadre. Selon moi, ce choix donne à la page la solennité d’un monument : le passé est figé dans ses formes rares, et une seule voix reste au présent. Qu’en pensez-vous ? Aurait-il fallu que l’auteur écrive toute la page au présent ?\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : résumé, quatre formes et plus, l’écart, un avis, une question.\n2. Lecture : prît, prenne ; accusât, accuse ; fût, soit ; figurât, figure ; eût-on écouté, si on avait écouté ; eût été sauvée, aurait été sauvée ; fût-elle, même si elle était.\n3. Analyse : hypothèse et concession séparées par la suite ; l’écart expliqué ; l’effet nommé.\n4. Registre : citations entre guillemets, voix au présent, aucune forme rare hors citation.',
  modelAnswerEn: 'Good evening, everyone. I am presenting a page about the closure of a small station in Montclaret. The author keeps classical concordance throughout. In the first sentence, the literary form means someone should have spoken up. Nobody does. The stationmaster feared being accused; the ne is not a negation. Although the room was full, nobody wanted their name in the minutes. Two inversions give the text its gravity. The first is a hypothesis: if the railway workers had been listened to, the line would have been saved. They were not. The second is not a hypothesis but a concession, even if she were the village’s last voice, and pourtant confirms it. Only one sentence breaks the concordance, and not by chance: Madame Lenoir’s line, in the present of the speaker, turned to the future; it sounds more alive than the whole story, and it is the one that gets framed. In my view, this gives the page the solemnity of a monument: the past is frozen in its rare forms, and a single voice stays in the present. What do you think? Should the author have written the whole page in the present? The marker’s notes (not counted): task, accurate mapping of every form, hypothesis and concession told apart, the break explained, register.',
  watchFor: [
    { pattern: 'A rare form used outside a quotation (il eût fallu, qu’il fût) in the learner’s own sentences.', criterion: 'registre', feedback: 'Tu présentes au club : cite les formes rares entre guillemets, puis parle au français d’aujourd’hui.', ref: 'a11-scenario' },
    { pattern: 'An imperfect subjunctive mapped to a past subjunctive (qu’il ait pris la parole for qu’il prît la parole).', criterion: 'lecture', feedback: 'Prît dit le même moment : il aurait fallu que quelqu’un prenne la parole.', ref: 'a2-piege' },
    { pattern: 'An indicative after a trigger in the modern version (bien que la salle était pleine, qu’on l’accusait).', criterion: 'lecture', feedback: 'Bien que, craindre que, vouloir que gardent le subjonctif : soit, accuse, figure.', ref: 'a3-erreurs' },
    { pattern: 'The ne after craignait read as a negation (il avait peur qu’on ne l’accuse pas).', criterion: 'lecture', feedback: 'Ce ne ne nie rien : il avait peur qu’on l’accuse.', ref: 'a2-piege' },
    { pattern: 'A conditional after si or même si (si on aurait écouté, même si elle serait).', criterion: 'lecture', feedback: 'Après si et même si, l’indicatif : si on avait écouté, même si elle était.', ref: 'a6-piege' },
    { pattern: 'The concession read as a hypothesis (s’il était la dernière voix, elle parla), or both inversions called hypotheses.', criterion: 'analyse', feedback: 'Regarde la suite : pourtant montre que fût-elle veut dire même si.', ref: 'a6-construire' },
    { pattern: 'The hypothesis read as a fact (on a écouté les cheminots et la ligne a été sauvée).', criterion: 'analyse', feedback: 'Eût-on écouté : on ne les a pas écoutés. L’inversion dit ce qui ne s’est pas passé.', ref: 'a5-erreurs' },
    { pattern: 'Madame Lenoir’s present subjunctive called a mistake, or not noticed.', criterion: 'analyse', feedback: 'Puissent quitte la note exprès : c’est une parole, au présent de celle qui parle.', ref: 'a7-cartes' },
    { pattern: 'No effect named, or the strict concordance called a mistake or old-fashioned only.', criterion: 'analyse', feedback: 'Dis ce que fait le style : la solennité d’un récit grave, et une voix au présent qui ressort.', ref: 'a9-focus' },
    { pattern: 'The verb behind a form lost (figurât read as figurer au passé, accusât as accuser au futur).', criterion: 'lecture', feedback: 'Remonte au verbe : figurât, figurer ; accusât, accuser ; puis dis le présent du subjonctif.', ref: 'a10-types' },
    { pattern: 'A summary only, no quotation, or fewer than four forms explained.', criterion: 'tache', feedback: 'Cite au moins quatre formes, dont les deux inversions, et dis chacune en français d’aujourd’hui.', ref: 'a11-plan' },
    { pattern: 'No greeting, no opinion, no question to the club; or a body outside 220 to 320 words.', criterion: 'tache', feedback: 'C’est une présentation au club : salue, donne ton avis, pose une question.', ref: 'a11-usages' },
  ],
  graderNotes: [
    'Count the words of the presentation body only: the greeting line and quotations of more than one sentence do not count. 220 to 320 with 10% tolerance (198 to 352) before criterion « tache » loses a point. responseSpec allows 340.',
    'THIS IS A RECOGNITION LESSON: the learner is never asked to produce an imperfect or pluperfect subjunctive or an inverted literary form. Such forms are expected INSIDE QUOTATION MARKS; used in the learner’s own sentences they are an error under « registre ». Never suggest a literary form in feedback.',
    'Accept the present or the past subjunctive for « bien que la salle fût pleine » (soit, ait été). Penalise a past subjunctive under « lecture » only when it turns a pending action into a finished one (qu’il ait pris la parole for prît).',
    'Accept the ne explétif or its absence after craindre que and avoir peur que (qu’on ne l’accuse, qu’on l’accuse). A real negation there is an error.',
    'Accept the passé composé or the present of narration in the summary, as long as the choice is consistent.',
    'Accept « si l’on avait écouté » or « si on avait écouté »; « même si elle était » or « bien qu’elle soit » for the concession; « compte rendu » or « procès-verbal ».',
    'Writer gender is unknown: judge agreements referring to the writer for internal consistency only.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 9 du B2 »), never by id, and never a C1 lesson by position.',
  ],
};

/** Say the modern versions out loud. Every id carries `voiceflash`, so no row
 *  holding a literary form can reach it (corpus §A.9). */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis-le aujourd’hui, à voix haute',
  frSub: 'Le livre, dit en français d’aujourd’hui',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-norme',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la grille', v: 'même moment ou après : imparfait ; avant : plus-que-parfait', say: fr(E(1822)),
      detail: { title: 'La grille', body: 'Sous un passé, le moment choisit le temps. EN: under a past, the moment picks the tense.', say: fr(E(1824)) } },
    { k: 'le conditionnel', v: 'compte comme un passé : je voudrais qu’il vînt', say: fr(E(1854)),
      detail: { title: 'Le conditionnel', body: 'Aujourd’hui : je voudrais qu’il vienne. EN: today, the present.', say: fr(E(1867)) } },
    { k: 'l’hypothèse', v: 'eût-il su : s’il avait su', say: fr(E(1872)),
      detail: { title: 'L’hypothèse', body: 'La suite tire la conséquence. EN: the rest draws the consequence.', say: fr(E(1874)) } },
    { k: 'la concession', v: 'fût-il roi : même s’il était roi', say: fr(E(1890)),
      detail: { title: 'La concession', body: 'La suite va contre l’attente. EN: the rest runs against expectation.', say: fr(E(1897)) } },
    { k: 'l’écart', v: 'un conditionnel déguisé, ou un autre moment', say: fr(E(1908)),
      detail: { title: 'La discordance', body: 'Un choix, pas forcément une faute. EN: a choice.', say: fr(E(1912)) } },
    { k: 'aujourd’hui', v: 'présent admis ; fût, eût gardés ; effet de ton', say: fr(E(1929)),
      detail: { title: 'L’usage', body: 'Solennité, ironie, pastiche. EN: solemnity, irony, pastiche.', say: fr(E(1926)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'norme'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu lis la concordance d’un texte classique case par case : sous un présent, sous un passé, sous un conditionnel, au même moment, plus tard ou avant. Tu reconnais eût-il su et fût-il roi, et la suite de la phrase te dit s’il faut lire si ou même si. Tu sais qu’un auteur peut quitter la note exprès, pour dire un conditionnel ou un autre moment, que l’OQLF admet le présent et qu’une forme rare, aujourd’hui, est un choix de ton. Le piège qui reste, c’est de reculer d’un cran de trop : qu’il vînt n’est pas qu’il soit venu, et une inversion n’est pas toujours une hypothèse. Avant ta prochaine lecture, prends une page de roman classique, entoure chaque verbe principal, et écris au-dessus de chaque subjonctif : même moment, après ou avant. EN: Circle every main verb in a classic page and mark each subjunctive same moment, later or before.',
  stats: [
    { k: 'La grille', v: 'même moment ou après, ou avant' },
    { k: 'Le conditionnel', v: 'compte comme un passé' },
    { k: 'L’inversion', v: 'si ou même si, selon la suite' },
    { k: 'L’écart', v: 'un sens, un moment, un ton' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight. Every question tests RECOGNITION: the
 *  moment, the meaning, si or même si, the effect, or how a writer would put
 *  it today. No option set supplies a literary form to complete a gap, and
 *  no typed answer contains one. `fold()` strips accents, commas,
 *  apostrophes and hyphens, so every typed answer turns on the mood, the
 *  tense or the word, never on an accent. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas dans cette version d’aujourd’hui. Écris la phrase correcte. EN: One form is wrong in this modern version; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const TODAY = 'Dis-la en français d’aujourd’hui.';

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-ecart', label: 'La note et l’écart', targets: ['ecart-pris-pour-faute'],
      questions: [
        mc('« Elle souhaitait qu’il revienne », dans un roman de 2020, c’est…', ['l’usage moderne, admis', 'une faute de concordance', 'une forme du XIXe siècle'], 0, 'L’OQLF admet le présent après un passé. EN: modern, accepted usage.', 'a1-scene'),
        mc('Dans un roman classique, le temps du subjonctif dépend…', ['du temps du verbe principal', 'du sujet de la phrase', 'de la longueur de la phrase'], 0, 'Le verbe principal donne la note. EN: the main verb’s tense.', 'a1-check'),
        mc('La concordance stricte, aujourd’hui, est surtout…', ['une marque de registre soutenu', 'une règle obligatoire partout', 'une faute'], 0, 'Elle date le texte ou élève le ton. EN: a register marker.', 'a1-lecture'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1800)), fr(E(1801)), 'Revînt : revienne. EN: revienne.', 'a1-rappel'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1806)), fr(E(1807)), 'Pût : puisse. EN: puisse.', 'a1-reperer', ['Je ne croyais pas qu’il pourrait revenir.']),
        eS('Madame Ferrand souhaitait que son fils revient avant l’hiver.', 'Madame Ferrand souhaitait que son fils revienne avant l’hiver.', 'Souhaiter que garde le subjonctif : revienne. EN: revienne.', 'a1-lecture'),
        lC('Écoute. Cette phrase vient plutôt…', fr(E(1800)), ['d’un roman ancien', 'd’une conversation'], 0, 'Revînt : la forme du livre. EN: an old novel.', 'a1-usages'),
        lC('Écoute. Que veut dire la phrase ?', fr(E(1810)), ['s’il avait parlé plus tôt, tout aurait changé', 'il a parlé tôt, et tout a changé'], 0, 'Une hypothèse sur le passé. EN: if he had spoken sooner.', 'a1-reperer'),
      ],
    },
    {
      id: 'r2-grille', label: 'La grille', targets: ['grille-confondue'],
      questions: [
        mc('« Je doutais qu’il vînt ce soir-là. » Sa venue est…', ['au même moment que le doute', 'antérieure au doute'], 0, 'Vînt : le même moment. EN: same moment.', 'a2-cartes'),
        mc('« Je doutais qu’il fût venu la veille. » Sa venue est…', ['antérieure au doute', 'au même moment que le doute'], 0, 'Fût venu : avant. EN: before.', 'a2-cartes'),
        mc('Sous un verbe principal au présent, le livre et le français d’aujourd’hui…', ['écrivent pareil', 'écrivent différemment'], 0, 'Je doute qu’il vienne, partout. EN: the same.', 'a2-table'),
        mc('« Elle attendait qu’il revînt le lendemain. » Pourquoi l’imparfait du subjonctif pour un retour plus tard ?', ['il sert au même moment et à la suite', 'le retour est déjà fait', 'c’est une erreur de l’auteur'], 0, 'L’imparfait couvre aussi la suite. EN: same moment or later.', 'a2-table'),
        tI(`Corneille. ${TODAY}`, fr(E(1815)), fr(E(1816)), 'Fît : fasse. EN: fasse.', 'a2-lecture', ['Qu’est-ce que vous vouliez qu’il fasse contre trois ?']),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1823)), fr(E(1824)), 'Fût venu : soit venu. EN: soit venu.', 'a2-piege'),
        eS('On craignait que la lettre partait trop tard.', fr(E(1834)), 'Craindre que garde le subjonctif : parte. EN: parte.', 'a2-piege', ['On craignait que la lettre ne parte trop tard.']),
        lC('Écoute. La lettre est-elle déjà partie ?', fr(E(1831)), ['on craint que oui', 'non, elle partira plus tard'], 0, 'Fût partie : déjà fait. EN: feared already gone.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-moment', label: 'Le moment de l’action', targets: ['moment-perdu'],
      questions: [
        mc('« Il s’étonna qu’elle fût partie. » Quand il s’étonne, elle…', ['est déjà partie', 'est en train de partir', 'partira plus tard'], 0, 'Le temps composé : déjà fait. EN: already gone.', 'a3-cartes'),
        mc('« qu’il terminât » et « qu’il eût terminé » disent…', ['l’action, puis le résultat', 'exactement la même chose'], 0, 'Deux moments, deux sens. EN: action, then result.', 'a3-cartes'),
        mc('« avant que la nouvelle fût connue » : à ce moment-là, la nouvelle…', ['n’est pas encore connue', 'est déjà connue'], 0, 'Avant que regarde la suite. EN: not yet known.', 'a3-exemples'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1835)), fr(E(1836)), 'Fût partie : soit partie ; s’étonna : s’est étonné. EN: soit partie.', 'a3-construire', ['Il s’étonna qu’elle soit partie sans un mot.']),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1849)), fr(E(1850)), 'Eût cessé : ait cessé. EN: ait cessé.', 'a3-construire', ['On attendit que la pluie ait cessé pour sortir.']),
        eS('Il s’étonnait qu’elle partait chaque soir sans un mot.', fr(E(1838)), 'S’étonner que : parte. EN: parte.', 'a3-erreurs'),
        eS('Elle a quitté la ville avant que la nouvelle est connue.', fr(E(1846)), 'Avant que : soit connue. EN: soit connue.', 'a3-erreurs', ['Elle a quitté la ville avant que la nouvelle ne soit connue.']),
        lC('Écoute. La pluie est-elle finie au moment de sortir ?', fr(E(1849)), ['oui, déjà', 'non, pas encore'], 0, 'Eût cessé : le résultat. EN: yes.', 'a3-exemples'),
      ],
    },
    {
      id: 'r4-conditionnel', label: 'Je voudrais qu’il vînt', targets: ['conditionnel-recopie'],
      questions: [
        mc('« Je voudrais qu’il vînt. » Pourquoi vînt ?', ['le conditionnel compte comme un passé', 'il est déjà venu', 'vouloir exige toujours cette forme'], 0, 'La note du conditionnel. EN: a conditional counts as a past.', 'a4-cartes'),
        mc('« Il aurait voulu qu’elle fût restée. » Est-elle restée ?', ['non', 'oui'], 0, 'Un regret. EN: no.', 'a4-construire'),
        mc('« Il eût été juste qu’on la consultât. » Eût été se lit…', ['aurait été', 'ait été', 'avait été'], 0, 'La deuxième forme : conditionnel passé. EN: aurait été.', 'a4-cartes'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1853)), fr(E(1854)), 'Vînt : vienne. EN: vienne.', 'a4-construire'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1859)), fr(E(1860)), 'Prévînt : prévienne. EN: prévienne.', 'a4-piege'),
        eS('Je voudrais qu’il viendrait dès demain.', fr(E(1854)), 'Après vouloir que, le subjonctif, jamais le conditionnel. EN: vienne.', 'a4-piege'),
        eS('Il serait bon que chacun le sait.', fr(E(1856)), 'Il serait bon que : sache. EN: sache.', 'a4-piege'),
        lC('Écoute. A-t-on prévenu cet homme ?', fr(E(1859)), ['non, il aurait fallu', 'oui, à temps'], 0, 'Un conditionnel passé de regret. EN: no.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-hypothese', label: 'Eût-il su', targets: ['inversion-hypothese'],
      questions: [
        mc('« Eût-il su la vérité, il fût resté. » Aujourd’hui…', ['s’il avait su la vérité, il serait resté', 's’il aurait su la vérité, il serait resté', 'il a su la vérité et il est resté'], 0, 'L’inversion remplace si. EN: if he had known.', 'a5-cartes'),
        mc('« N’eût été sa fatigue » veut dire…', ['sans sa fatigue', 'malgré sa fatigue', 'grâce à sa fatigue'], 0, 'Si ce n’avait été : sans. EN: without.', 'a5-cartes'),
        mc('« Eût-elle insisté, on l’eût écoutée. » A-t-elle insisté ?', ['non', 'oui'], 0, 'Un irréel du passé. EN: no.', 'a5-construire'),
        mc('Dans « Eût-on écouté les anciens », on est…', ['le sujet, placé après le verbe', 'un complément'], 0, 'L’inversion déplace le sujet. EN: the subject.', 'a5-cartes'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1873)), fr(E(1874)), 'Eût-elle insisté : si elle avait insisté ; eût écoutée : aurait écoutée. EN: si elle avait insisté.', 'a5-construire', ['Si elle avait insisté, ils l’auraient écoutée.']),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1877)), fr(E(1878)), 'Fût-il arrivé : s’il était arrivé. EN: s’il était arrivé.', 'a5-construire'),
        eS('S’il aurait su la vérité, il serait resté.', fr(E(1872)), 'Après si, le plus-que-parfait. EN: avait su.', 'a5-erreurs'),
        lC('Écoute. Le village a-t-il été noyé ?', fr(E(1883)), ['oui', 'non'], 0, 'N’eût pas été noyé : il l’a été, parce qu’on n’a pas écouté. EN: yes.', 'a5-lecture'),
      ],
    },
    {
      id: 'r6-concession', label: 'Fût-il roi', targets: ['concession-prise-pour-hypothese'],
      questions: [
        mc('« Fût-il roi, il devrait attendre son tour. » La phrase dit…', ['même s’il était roi', 's’il était roi, donc', 'parce qu’il est roi'], 0, 'Une concession. EN: even if he were king.', 'a6-cartes'),
        mc('Entre hypothèse et concession, ce qui décide, c’est…', ['la suite de la phrase', 'la forme du verbe inversé'], 0, 'La forme est la même. EN: the rest of the sentence.', 'a6-construire'),
        mc('« Dussé-je attendre dix ans » vient de…', ['devoir', 'dire', 'durer'], 0, 'Dussé-je : devoir, je. EN: devoir.', 'a6-cartes'),
        mc('« Si riche fût-il, il vivait simplement. » Il était…', ['riche, et vivait pourtant simplement', 'pauvre, et vivait simplement'], 0, 'Aussi riche qu’il soit. EN: rich, yet simple.', 'a6-table'),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1889)), fr(E(1890)), 'Fût-il roi : même s’il était roi. EN: même s’il était roi.', 'a6-construire', ['Même s’il était le roi, il devrait attendre son tour.']),
        tI(`Une phrase soignée. ${TODAY}`, fr(E(1896)), fr(E(1897)), 'Dussé-je : même si je devais. EN: même si je devais.', 'a6-piege'),
        eS('Même s’il serait roi, il devrait attendre son tour.', fr(E(1890)), 'Après même si, l’imparfait. EN: était.', 'a6-piege'),
        lC('Écoute. A-t-il pu partir ?', fr(E(1893)), ['non', 'oui'], 0, 'Même s’il l’avait voulu, il n’aurait pas pu. EN: no.', 'a6-cartes'),
      ],
    },
    {
      id: 'r7-discordance', label: 'La discordance', targets: ['discordance-prise-pour-faute'],
      questions: [
        mc('« Je ne crois pas qu’il le fît sans y être forcé. » Fît veut dire…', ['qu’il le ferait', 'qu’il l’a fait', 'qu’il l’avait fait'], 0, 'Un conditionnel déguisé. EN: he would do it.', 'a7-cartes'),
        mc('« Ton père voulut toujours que vous soyez libres, et vous l’êtes. » Pourquoi soyez ?', ['la liberté dure au moment où l’on écrit', 'l’auteur a oublié la concordance'], 0, 'Un autre moment. EN: it still holds.', 'a7-lecture'),
        mc('« Il n’est pas sûr que je l’eusse compris. » Eusse compris veut dire…', ['que je l’aurais compris', 'que je l’avais compris'], 0, 'Un conditionnel passé. EN: would have understood.', 'a7-construire'),
        mc('Une discordance, chez un bon auteur, c’est souvent…', ['un choix qui dit un autre sens ou un autre moment', 'une faute de frappe'], 0, 'L’écart a un sens. EN: a choice.', 'a7-erreurs'),
        tI(`Une phrase soignée. ${TODAY}`, fr(E(1907)), fr(E(1908)), 'Fît : ferait. EN: ferait.', 'a7-cartes', ['Je ne crois pas qu’il le fasse sans y être forcé.']),
        tI(`Une phrase soignée. ${TODAY}`, fr(E(1909)), fr(E(1910)), 'Acceptât : accepterait. EN: accepterait.', 'a7-construire'),
        eS('Le directeur a exigé que vous étiez là demain.', fr(E(1912)), 'Exiger que : soyez. EN: soyez.', 'a7-cartes'),
        lC('Écoute. Les enfants sont-ils libres aujourd’hui ?', fr(E(1915)), ['oui', 'non'], 0, 'Et ils le sont. EN: yes.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-usage', label: 'Aujourd’hui', targets: ['usage-moderne-ignore'],
      questions: [
        mc('Après un verbe principal au passé, l’OQLF…', ['admet le présent du subjonctif', 'exige l’imparfait du subjonctif', 'interdit le subjonctif'], 0, 'L’imparfait en principe, le présent admis. EN: accepts the present.', 'a8-cartes'),
        mc('« Il fallait qu’elle vienne, bien que ce fût risqué. » C’est…', ['une concordance partielle', 'une concordance stricte', 'une faute'], 0, 'Fût gardé, vienne ailleurs. EN: partial.', 'a8-construire'),
        mc('Quelles formes l’écrit garde-t-il le plus souvent ?', ['qu’il fût, qu’il eût', 'que nous fussions', 'qu’ils vinssent'], 0, 'Être et avoir, à la troisième personne. EN: fût and eût.', 'a8-cartes'),
        mc('Dans un article, « ne fût pas signé » donne…', ['de la solennité', 'un ton familier'], 0, 'Un fût isolé, pour le poids. EN: solemnity.', 'a8-histoire'),
        tI(`Un article. ${TODAY}`, fr(E(1927)), fr(E(1928)), 'Fût : soit ; déplora : a déploré. EN: ne soit pas signé.', 'a8-exemples', ['La mairie a déploré que l’accord n’ait pas été signé à temps.', 'La mairie déplora que l’accord ne soit pas signé à temps.', 'La mairie déplora que l’accord n’ait pas été signé à temps.']),
        tI(`Une phrase de roman. ${TODAY}`, fr(E(1933)), fr(E(1934)), 'Eût : ait ; écouta : a écouté. EN: ait raison.', 'a8-exemples', ['Bien qu’il ait eu raison, personne ne l’a écouté.', 'Bien qu’il ait raison, personne ne l’écouta.', 'Bien qu’il ait eu raison, personne ne l’écouta.']),
        eS('Bien qu’il a raison, personne ne l’a écouté.', fr(E(1934)), 'Bien que : ait. EN: ait.', 'a8-exemples', ['Bien qu’il ait eu raison, personne ne l’a écouté.']),
        lC('Écoute. Cette phrase garde-t-elle toutes les formes du livre ?', fr(E(1935)), ['non, seulement on eût dit', 'oui, toutes'], 0, 'Qu’il parle, au présent. EN: only on eût dit.', 'a8-construire'),
      ],
    },
    {
      id: 'r9-effet', label: 'L’effet', targets: ['effet-manque'],
      questions: [
        mc('Un dessert servi « avec la plus grande dignité », au subjonctif littéraire : l’effet est…', ['ironique', 'tragique', 'neutre'], 0, 'Le style trop grand. EN: ironic.', 'a9-cartes'),
        mc('« Que la paix fût rendue à ce pays » : l’effet est…', ['solennel', 'comique'], 0, 'Un sujet grave. EN: solemn.', 'a9-cartes'),
        mc('Un pastiche, c’est…', ['l’imitation d’un style pour en jouer', 'une copie frauduleuse'], 0, 'Un jeu avec un style. EN: playful imitation.', 'a9-focus'),
        mc('Pour reconnaître l’ironie, tu compares…', ['le style et le sujet', 'la longueur des phrases'], 0, 'Le décalage. EN: style and subject.', 'a9-construire'),
        tI(`Une phrase de pastiche. ${TODAY}`, fr(E(1945)), fr(E(1946)), 'Cessât : cesse ; exigea : a exigé. EN: cesse.', 'a9-construire', ['Le conseil exigea que le chien du voisin cesse d’aboyer après vingt-deux heures.']),
        tI(`Une phrase de pastiche. ${TODAY}`, fr(E(1947)), fr(E(1948)), 'Rendît : rende ; fallut : a fallu. EN: rende.', 'a9-piege', ['Il a fallu que l’on se rende à l’évidence : la photocopieuse était en panne.', 'Il fallut qu’on se rende à l’évidence : la photocopieuse était en panne.', 'Il fallut que l’on se rende à l’évidence : la photocopieuse était en panne.']),
        eS('Le conseil a exigé que le chien du voisin cessait d’aboyer après vingt-deux heures.', fr(E(1946)), 'Exiger que : cesse. EN: cesse.', 'a9-piege'),
        lC('Écoute. Le ton de cette phrase est…', fr(E(1953)), ['grave', 'moqueur'], 0, 'La paix d’un pays. EN: grave.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-page', label: 'Une page entière', targets: ['page-mal-lue'],
      questions: [
        mc('Dans la page de Lisette, « Fût-il resté une heure de plus » est…', ['une hypothèse', 'une concession'], 0, 'La suite en tire la conséquence. EN: a hypothesis.', 'a10-lecture'),
        mc('Pourquoi la tante dit-elle « que tu reviennes », au présent ?', ['c’est une parole, au présent de celle qui parle', 'l’autrice oublie la concordance'], 0, 'Une voix au présent. EN: it is speech.', 'a10-construire'),
        mc('Dans la page de Lisette, « Elle attendit qu’il revînt. » Le garçon est-il revenu ?', ['non', 'oui'], 0, 'Il ne revint pas. EN: no.', 'a10-lecture'),
        mc('Pourquoi la dernière phrase dit-elle « il aurait fallu qu’elle parle » ?', ['Lisette raconte aujourd’hui, en français moderne', 'c’est une erreur'], 0, 'Le récit rejoint le présent. EN: the adult speaks today.', 'a10-construire'),
        tI(`Une phrase de la page. ${TODAY}`, fr(E(1961)), fr(E(1962)), 'Eût voulu : aurait voulu ; finît : finisse. EN: finisse.', 'a10-types'),
        tI(`Une phrase de la page. ${TODAY}`, fr(E(1963)), fr(E(1964)), 'Fût-il resté : s’il était resté. EN: s’il était resté.', 'a10-types'),
        eS('Il fallait qu’on lui racontait les nouvelles de la vallée.', fr(E(1966)), 'Il fallait que : raconte. EN: raconte.', 'a10-ecoute'),
        lC('Écoute. Pourquoi la narration garde-t-elle la concordance ?', fr(E(1967)), ['pour donner du poids au récit', 'pour faire rire'], 0, 'Le poids. EN: weight.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-gare', label: 'La page de la gare', targets: ['tache-lecture'],
      questions: [
        mc('Dans la page de la gare, « il eût fallu que quelqu’un prît la parole » se lit…', ['il aurait fallu que quelqu’un prenne la parole', 'il a fallu que quelqu’un ait pris la parole', 'il fallait que quelqu’un prenait la parole'], 0, 'Eût fallu : aurait fallu ; prît : prenne. EN: someone should have spoken.', 'a11-mission'),
        mc('« Eût-on écouté les cheminots, la ligne eût été sauvée. » C’est…', ['une hypothèse', 'une concession'], 0, 'La suite en tire la conséquence. EN: a hypothesis.', 'a11-mission'),
        mc('« Fût-elle la dernière voix du village, Madame Lenoir parla pourtant. » C’est…', ['une concession', 'une hypothèse'], 0, 'Pourtant le confirme : même si. EN: a concession.', 'a11-mission'),
        mc('Quelle phrase de la page quitte la concordance ?', ['la phrase citée de Madame Lenoir', 'la phrase sur le chef de gare', 'la phrase sur la salle pleine'], 0, 'Puissent : une parole au présent. EN: Madame Lenoir’s line.', 'a11-lecture'),
        tI(`Une phrase de la page. ${TODAY}`, 'Bien que la salle fût pleine, personne ne voulut que son nom figurât au procès-verbal.', 'Bien que la salle soit pleine, personne n’a voulu que son nom figure au procès-verbal.', 'Fût : soit ; voulut : a voulu ; figurât : figure. EN: soit, figure.', 'a11-plan', ['Bien que la salle soit pleine, personne ne voulait que son nom figure au procès-verbal.', 'Bien que la salle ait été pleine, personne n’a voulu que son nom figure au procès-verbal.', 'Bien que la salle soit pleine, personne ne voulut que son nom figure au procès-verbal.']),
        tI('Donne l’infinitif du verbe à chapeau.', '« … qu’on ne l’accusât d’avoir laissé faire »', 'accuser', 'Accusât : accuser, avec -ât. EN: accuser.', 'a11-plan'),
        eS('Le chef de gare craignait qu’on l’accusait d’avoir laissé faire.', 'Le chef de gare craignait qu’on l’accuse d’avoir laissé faire.', 'Craindre que : accuse, avec ou sans ne. EN: accuse.', 'a11-mission', ['Le chef de gare craignait qu’on ne l’accuse d’avoir laissé faire.']),
        lC('Écoute. Que dit l’inversion ?', fr(E(1979)), ['s’il avait plu, la fête n’aurait pas eu lieu', 'il a plu, et la fête a été annulée'], 0, 'Une hypothèse irréelle : il n’a pas plu. EN: if it had rained.', 'a11-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.09 does. */
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
    { front: 'sous un passé, même moment ou après', back: 'l’imparfait du subjonctif ; aujourd’hui, le présent', say: fr(E(1822)) },
    { front: 'sous un passé, avant', back: 'le plus-que-parfait du subjonctif ; aujourd’hui, le passé', say: fr(E(1824)) },
    { front: 'eût terminé ou terminât', back: 'le résultat, puis l’action', say: fr(E(1840)) },
    { front: 'un conditionnel principal', back: 'compte comme un passé', say: fr(E(1854)) },
    { front: 'eût-il su, en tête', back: 's’il avait su', say: fr(E(1872)) },
    { front: 'fût-il roi', back: 'même s’il était roi', say: fr(E(1890)) },
    { front: 'un imparfait après un présent', back: 'souvent un conditionnel', say: fr(E(1908)) },
    { front: 'un présent après un passé', back: 'ce qui dure ou vient après aujourd’hui', say: fr(E(1912)) },
    { front: 'une forme rare aujourd’hui', back: 'solennité, ironie ou pastiche', say: fr(E(1950)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le diapason',
  body: `${REFRAME} Tu avais les formes et leur traduction depuis ${SL_REF}, l’horloge de ${SUBJPASSE_REF} et le aussi… soit-il de ${CONCESSION_REF}. Tu lis maintenant la concordance entière d’un texte classique, le conditionnel principal, les deux inversions, l’écart voulu et l’effet d’une forme rare. La suite du C1 garde ce regard : chaque structure de la langue soignée a un sens et un effet, et tu apprends à les nommer. EN: Next in C1, the same eye on other formal structures: each has a meaning and an effect.`,
  points: [
    'Sous un passé : même moment ou après, l’imparfait ; avant, le plus-que-parfait.',
    'Un conditionnel principal compte comme un passé.',
    'Eût-il su : si. Fût-il roi : même si. La suite décide.',
    'Un écart voulu dit un autre sens ou un autre moment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concordance', 'discordance'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Présente la page',
    opener: {
      line: 'Ton club de lecture te confie une page à la manière classique : ici tu la présentes en français d’aujourd’hui, puis tu passes l’examen. EN: Your reading club gives you a classical-style page: here you present it in today’s French, then sit the exam.',
      imageRef: 'lessons/concordance-litteraire/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as présenté une page classique en français d’aujourd’hui et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You presented a classic page in today’s French and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-conditionnel', 'a11-quiz/r8-usage', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`. Recognition only.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-ecart', title: 'Le livre ou aujourd’hui', format: 'sort' as const, coach: 'Deux piles : la phrase suit la note du livre, ou l’usage d’aujourd’hui. EN: sort book forms from modern ones.', buckets: ['le livre', 'aujourd’hui'], items: [E(1800), E(1806), E(1810), E(1801), E(1807), E(1811)], audio: AUDIO },
  { id: 'd-grille', title: 'Le moment', format: 'mcq' as const, coach: 'Sous un passé, cherche le moment : même moment ou après, l’imparfait ; avant, le plus-que-parfait. EN: same moment or before?', q: '« Je doutais qu’il fût venu la veille. » Sa venue est…', opts: ['antérieure au doute', 'au même moment'], correct: 0, why: 'Fût venu : déjà fait. EN: before.', items: [E(1822), E(1824), E(1826), E(1830), E(1832), E(1834)], audio: AUDIO },
  { id: 'd-moment', title: 'Le résultat ou l’action', format: 'flashcard' as const, coach: 'Lis chaque phrase d’aujourd’hui et dis si elle regarde un résultat ou une action. EN: result or action?', items: [E(1836), E(1838), E(1840), E(1842), E(1850), E(1852)], audio: AUDIO },
  { id: 'd-conditionnel', title: 'Après un conditionnel', format: 'mcq' as const, coach: 'Le conditionnel donne la note ; il ne descend jamais dans une subordonnée au subjonctif. EN: never a conditional after vouloir que.', q: '« Je voudrais qu’il vînt. » Aujourd’hui…', opts: ['je voudrais qu’il vienne', 'je voudrais qu’il viendrait'], correct: 0, why: 'Le présent du subjonctif. EN: vienne.', items: [E(1854), E(1856), E(1858), E(1860), E(1862), E(1870)], audio: AUDIO },
  { id: 'd-hypothese', title: 'Si ou même si', format: 'sort' as const, coach: 'Deux piles : la suite tire la conséquence (si), ou va contre l’attente (même si). EN: sort hypotheses from concessions.', buckets: ['une hypothèse', 'une concession'], items: [E(1871), E(1873), E(1877), E(1889), E(1891), E(1893)], audio: AUDIO },
  { id: 'd-concession', title: 'Même si, aujourd’hui', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : même si, puis l’indicatif. EN: même si plus the indicative.', items: [E(1890), E(1892), E(1894), E(1897), E(1899), E(1902)], audio: AUDIO },
  { id: 'd-discordance', title: 'L’écart et son sens', format: 'mcq' as const, coach: 'Un écart voulu dit un conditionnel ou un autre moment. Cherche la condition, ou le moment de l’écriture. EN: what does the break say?', q: '« Je ne crois pas qu’il le fît sans y être forcé. » Fît veut dire…', opts: ['qu’il le ferait', 'qu’il l’a fait'], correct: 0, why: 'Un conditionnel déguisé. EN: he would do it.', items: [E(1908), E(1910), E(1912), E(1915), E(1913), E(1916)], audio: AUDIO },
  { id: 'd-usage', title: 'L’usage d’aujourd’hui', format: 'flashcard' as const, coach: 'Lis chaque phrase d’aujourd’hui : le présent est admis, la forme rare est un choix. EN: the present is accepted.', items: [E(1926), E(1928), E(1929), E(1934), E(1936), E(1937)], audio: AUDIO },
  { id: 'd-effet', title: 'Grave ou drôle', format: 'mcq' as const, coach: 'Compare le sujet et le style : à la même hauteur, solennel ; trop grand, ironique. EN: compare subject and style.', q: 'Un chien qui aboie, traité comme un décret royal : l’effet est…', opts: ['ironique', 'solennel'], correct: 0, why: 'Le style trop grand. EN: ironic.', items: [E(1944), E(1946), E(1948), E(1949), E(1950), E(1954)], audio: AUDIO },
  { id: 'd-page', title: 'La page, dite aujourd’hui', format: 'flashcard' as const, coach: 'Lis chaque phrase comme si tu présentais la page au club. EN: read each line as in your presentation.', items: [E(1962), E(1964), E(1966), E(1967), E(1968), E(1969)], audio: AUDIO },
  { id: 'd-tache', title: 'Ta présentation', format: 'flashcard' as const, coach: 'Six phrases pour présenter une page : dis-les à voix haute. EN: six presentation lines, aloud.', items: [E(1976), E(1977), E(1978), E(1980), E(1981), E(1982)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'ecart-pris-pour-faute', description: 'Takes a modern novel’s present subjunctive after a past verb for a mistake, or thinks strict concordance is compulsory today.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-ecart', retest: 'd-ecart' },
  { id: 'grille-confondue', description: 'Reads an imperfect subjunctive as anterior (vînt as « had come ») or a pluperfect subjunctive as simultaneous.', detectOn: ['a2-reperer', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-grille', retest: 'd-grille' },
  { id: 'moment-perdu', description: 'Cannot tell result from action (eût terminé / terminât, fût partie / partît), or reads avant que as a past fact.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check'], drill: 'd-moment', retest: 'd-moment' },
  { id: 'conditionnel-recopie', description: 'Puts a conditional in the que clause when modernising (je voudrais qu’il viendrait), or misses that a conditional main verb brings the book’s imperfect subjunctive.', detectOn: ['a4-construire', 'a4-piege', 'a4-check'], drill: 'd-conditionnel', retest: 'd-conditionnel' },
  { id: 'inversion-hypothese', description: 'Reads eût-il su as a fact or as a question, or puts a conditional after si when mapping it.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-hypothese', retest: 'd-hypothese' },
  { id: 'concession-prise-pour-hypothese', description: 'Reads concessive inversion (fût-il roi) as a hypothesis, or puts a conditional or subjunctive after même si.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-concession', retest: 'd-concession' },
  { id: 'discordance-prise-pour-faute', description: 'Calls a deliberate break in the sequence a mistake, missing its conditional meaning or its link to the moment of writing.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-discordance', retest: 'd-discordance' },
  { id: 'usage-moderne-ignore', description: 'Ignores modern usage: refuses the accepted present, misses partial concordance, or treats a solemn fût in the press as normal speech.', detectOn: ['a8-construire', 'a8-check'], drill: 'd-usage', retest: 'd-usage' },
  { id: 'effet-manque', description: 'Reads a rare form in a modern text only for its meaning, missing whether it is solemn, ironic or pastiche.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-effet', retest: 'd-effet' },
  { id: 'page-mal-lue', description: 'On a whole page, loses track of which subjunctive is anterior, which inversion is a hypothesis, or why one line leaves the concordance.', detectOn: ['a10-lecture', 'a10-construire', 'a10-check'], drill: 'd-page', retest: 'd-page' },
  { id: 'tache-lecture', description: 'In the task page, mis-maps a form, confuses the hypothesis with the concession, or misses Madame Lenoir’s present.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-tache', retest: 'd-tache' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. No text changes; no `why` names a position. As b2.09
 *  does. */
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
  sheet('sheet-grille', 'La grille de la concordance', ['sous un présent', 'sous un passé', 'sous un conditionnel', 'le moment'], [
    teach('sheet-grille-teach', 'Le verbe principal donne la note',
      `${REFRAME} Dans un texte classique, le temps du subjonctif dépend du verbe principal et du moment de l’action. Sous un présent ou un futur : présent du subjonctif pour le même moment ou la suite, subjonctif passé pour ce qui est déjà fait, dans le livre comme aujourd’hui. Sous un passé ou un conditionnel : imparfait du subjonctif pour le même moment ou la suite, plus-que-parfait du subjonctif pour ce qui est déjà fait. Aujourd’hui, on dit le présent ou le subjonctif passé partout. EN: ${REFRAME_EN}`),
    table('sheet-grille-table', 'La grille', ['Verbe principal', 'Même moment ou après', 'Avant'], [
      ['je doute (présent)', 'qu’il vienne', 'qu’il soit venu'],
      ['je doutais (passé), dans le livre', 'qu’il vînt', 'qu’il fût venu'],
      ['je doutais (passé), aujourd’hui', 'qu’il vienne', 'qu’il soit venu'],
      ['je voudrais (conditionnel), dans le livre', 'qu’il vînt', 'qu’il fût venu'],
      ['je voudrais (conditionnel), aujourd’hui', 'qu’il vienne', 'qu’il soit venu'],
    ]),
    table('sheet-grille-moment', 'Le résultat ou l’action', ['Dans le livre', 'Ce que ça dit', 'Aujourd’hui'], [
      ['qu’elle fût partie', 'déjà partie', 'qu’elle soit partie'],
      ['qu’elle partît', 'au même moment, ou après', 'qu’elle parte'],
      ['qu’il eût terminé avant midi', 'le résultat à midi', 'qu’il ait terminé'],
      ['qu’il terminât avant midi', 'l’action, à venir', 'qu’il termine'],
      ['avant que la nouvelle fût connue', 'pas encore connue', 'avant qu’elle soit connue'],
    ]),
  ]),
  sheet('sheet-inversion', 'Les deux inversions', ['l’hypothèse', 'la concession', 'les formes figées'], [
    teach('sheet-inversion-teach', 'Si ou même si : la suite décide',
      `En tête de phrase, eût-il su, fût-il arrivé, fût-il roi placent le verbe avant le sujet, et la conjonction disparaît. Si la suite tire la conséquence, c’est une hypothèse : eût-il su, il fût resté (s’il avait su, il serait resté). Si la suite va contre l’attente, c’est une concession : fût-il roi, il devrait attendre (même s’il était roi). Dût-il et fût-ce viennent de ${SL_REF}, aussi… soit-il de ${CONCESSION_REF}. Après si et même si, aujourd’hui, l’indicatif. EN: the rest of the sentence decides between if and even if.`),
    table('sheet-inversion-table', 'Tu lis, tu dis', ['Tu lis', 'C’est', 'Aujourd’hui'], [
      ['eût-il su la vérité, il fût resté', 'une hypothèse', 's’il avait su, il serait resté'],
      ['fût-il arrivé plus tôt, il l’eût trouvée', 'une hypothèse', 's’il était arrivé plus tôt, il l’aurait trouvée'],
      ['n’eût été sa fatigue', 'une locution', 'sans sa fatigue'],
      ['fût-il roi, il devrait attendre', 'une concession', 'même s’il était roi'],
      ['dussé-je attendre dix ans', 'une concession', 'même si je devais attendre dix ans'],
      ['si riche fût-il', 'une concession de degré', 'aussi riche qu’il soit'],
      ['serait-il ministre', 'une concession, au conditionnel', 'même s’il était ministre'],
    ]),
  ]),
  sheet('sheet-ecarts', 'Les écarts qui parlent', ['un conditionnel déguisé', 'un autre moment'], [
    teach('sheet-ecarts-teach', 'Quand l’auteur quitte la note',
      'Un auteur qui connaît la concordance peut s’en écarter exprès. Un imparfait ou un plus-que-parfait du subjonctif après un présent peut porter le sens d’un conditionnel : je ne crois pas qu’il le fît (qu’il le ferait), il n’est pas sûr que je l’eusse compris (que je l’aurais compris). Un présent du subjonctif après un passé peut rattacher le fait au moment où l’on écrit : ce qui dure encore, ou ce qui vient après. Cherche la condition, ou le moment de l’écriture. EN: a deliberate break expresses a conditional or the moment of writing.'),
    table('sheet-ecarts-table', 'Trois écarts', ['Tu lis', 'Ce que dit l’écart', 'Aujourd’hui'], [
      ['je ne crois pas qu’il le fît', 'un conditionnel', 'qu’il le ferait'],
      ['il n’est pas sûr que je l’eusse compris', 'un conditionnel passé', 'que je l’aurais compris'],
      ['il voulut que vous soyez libres, et vous l’êtes', 'ce qui dure', 'il a voulu que vous soyez libres'],
      ['il a exigé que vous soyez là demain', 'ce qui vient après', 'que vous soyez là demain'],
    ]),
  ]),
  sheet('sheet-norme', 'La norme et l’usage', ['l’OQLF', 'Grevisse', 'la presse', 'l’oral'], [
    teach('sheet-norme-teach', 'Ce que disent les références',
      'L’OQLF donne l’imparfait du subjonctif comme règle de principe après un verbe principal au passé ou au conditionnel, et admet le présent ou le passé du subjonctif. Les avis restent partagés : certains correcteurs exigent encore la règle stricte dans l’écrit très soutenu, d’autres, avec l’usage, la tiennent pour facultative. Grevisse constate que l’imparfait du subjonctif a quitté l’oral et que l’écrit le garde surtout pour être et avoir, et à la troisième personne du singulier des autres verbes. La plupart des auteurs d’aujourd’hui écrivent le présent ; certains gardent fût et eût ; la presse garde parfois un fût pour la solennité. À l’oral, presque jamais. EN: the present is accepted; the rare forms survive in writing as a choice.'),
    table('sheet-norme-table', 'Qui fait quoi', ['Texte', 'Concordance stricte ?', 'Exemple'], [
      ['un roman classique', 'oui', 'elle souhaitait qu’il revînt'],
      ['un roman d’aujourd’hui', 'non, le présent', 'elle voulait qu’il parte'],
      ['un auteur qui aime la concordance', 'en partie : fût, eût', 'il fallait qu’elle vienne, bien que ce fût risqué'],
      ['la presse', 'parfois, pour le poids', 'la mairie déplora que l’accord ne fût pas signé'],
      ['une conversation', 'presque jamais, sinon par jeu', 'il fallait qu’il vienne'],
    ]),
  ]),
  sheet('sheet-lecture', 'Lire et présenter une page', ['l’effet', 'les quatre questions', 'la liste de contrôle'], [
    teach('sheet-lecture-teach', 'Le sens, la grille, l’effet',
      'Lis la page une fois pour le sens. Pour chaque subjonctif, demande la note, le moment et la traduction ; pour chaque inversion, si ou même si ; pour chaque écart, le sens ou le moment qu’il ajoute. Puis nomme l’effet du style : solennité quand le sujet est grave, ironie quand le style est trop grand, pastiche quand tout un siècle est imité. Quand tu présentes, cite les formes rares entre guillemets et parle en français d’aujourd’hui. EN: meaning, grid, effect; quote the rare forms, speak today’s French.'),
    table('sheet-lecture-effets', 'Trois effets', ['Effet', 'Le signe', 'Exemple'], [
      ['la solennité', 'un sujet grave', 'que la paix fût rendue à ce pays'],
      ['l’ironie', 'un style trop grand pour le sujet', 'que le chien du voisin cessât d’aboyer'],
      ['le pastiche', 'tout un style d’époque imité', 'la nuit des Tilleuls'],
    ]),
    table('sheet-lecture-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque forme rare est entre guillemets', 'Tu cites, tu ne l’emploies pas'],
      ['Chaque traduction garde le moment', 'Qu’il vînt : qu’il vienne, pas qu’il soit venu'],
      ['Chaque inversion est classée', 'Si ou même si, d’après la suite'],
      ['L’écart est expliqué', 'Un conditionnel, ou un autre moment'],
      ['L’effet est nommé', 'Solennité, ironie ou pastiche'],
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
 *  released ONCE, and only ids a flashcard drill can reach. A literary line
 *  has no flashcard drill, so it is never released (corpus §A.9). */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-03-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural C1 speed.';
const TEXTE = (what: string) => `${what}, one voice, read as a page of a book at an unhurried literary pace. Every literary form is read exactly as written, never modernised and never stressed.`;
const TRAP = (what: string) => `The audio step plays each card's CORRECT version (${what}). Six lines, one voice. The wrong versions in promptSound are NEVER spoken.`;
const DECK = (what: string) => `The four ${what} cards. One voice, the tone of a patient teacher; literary lines read with no emphasis on the form.`;
const REC_DESC: Record<string, string> = {
  'rec-c1-03-rappel': DECK('recap and preview (act 1)'),
  'rec-c1-03-deux-pages': 'The two versions of Madame Ferrand’s page (act 1), one female voice, one take. The 1890 version read with a slightly more formal, slower delivery; the modern version in the same voice at a natural pace, so the ear hears that only the forms change.',
  'rec-c1-03-horace': 'Corneille, Horace III, 6, vv. 1021-1026 (act 2). Two voices: JULIE (a young woman, restrained) and LE VIEIL HORACE (an old man, fierce then bitter). Classical alexandrines with the verse line breaks respected; « Qu’il mourût » completes Julie’s line and is delivered as a single blow. The source line and the closing note are read by a neutral narrator.',
  'rec-c1-03-grille': DECK('grid (act 2)'),
  'rec-c1-03-grille-ecoute': `${ONE_TAKE} Eight lines, present and past main verbs mixed; no subjunctive form may be stressed, so the learner listens for the moment.`,
  'rec-c1-03-piege-grille': TRAP('modern versions with the right moment'),
  'rec-c1-03-atelier': 'Sacha and Nadia in a Geneva translation workshop (act 3), two voices: Sacha reading the literary lines carefully, Nadia brisk and precise. Swiss French, one take.',
  'rec-c1-03-moment': DECK('result-or-action (act 3)'),
  'rec-c1-03-edition': 'Inès and Tom at a Brussels publisher (act 4), two voices: Tom eager, Inès amused and firm. Belgian French, one take.',
  'rec-c1-03-conditionnel': DECK('conditional main clause (act 4)'),
  'rec-c1-03-conditionnel-ecoute': `${ONE_TAKE} Eight lines, literary and modern mixed (lines one and two are the same sentence in both forms); read every line with the same intonation.`,
  'rec-c1-03-piege-conditionnel': TRAP('present subjunctive or past conditional'),
  'rec-c1-03-passeur': 'The ferryman memory (act 5), one warm older female voice, one take, quietly amused. Each inverted hypothesis is read with a light suspension before the comma.',
  'rec-c1-03-hypothese': DECK('hypothetical inversion (act 5)'),
  'rec-c1-03-dakar': 'Awa and Monsieur Diallo in a Dakar evening class (act 6), two voices: Awa reading slowly, the teacher patient and warm. One take.',
  'rec-c1-03-concession': DECK('concessive inversion (act 6)'),
  'rec-c1-03-piege-concession': TRAP('même si with the indicative'),
  'rec-c1-03-hortense': 'Tante Hortense’s letters (act 7), one male narrator voice, one take, reflective. The two quoted lines from the letters are read in a slightly older, precise voice, clearly as quotations.',
  'rec-c1-03-ecarts': DECK('deliberate-break (act 7)'),
  'rec-c1-03-ecarts-ecoute': `${ONE_TAKE} Eight lines; read the literary and modern versions with the same intonation so the meaning, not the form, carries the questions.`,
  'rec-c1-03-redaction': 'Yanis and Hélène in a regional newsroom (act 8), two voices: Yanis young and keen, Hélène experienced and dry. Yanis reads his solemn sentence a little too proudly. One take.',
  'rec-c1-03-norme': DECK('norm-and-usage (act 8)'),
  'rec-c1-03-tilleuls': 'The « nuit des Tilleuls » chronicle (act 9), one male voice, one take, mock-solemn: the grand sentences read with straight-faced gravity, the small details (pantoufles, poubelles) deadpan.',
  'rec-c1-03-effets': DECK('effect (act 9)'),
  'rec-c1-03-effets-ecoute': `${ONE_TAKE} Eight lines; the grave line (la paix) is read gravely, the ironic lines with the same gravity, so the learner hears that the irony is in the subject, not the voice.`,
  'rec-c1-03-piege-effets': TRAP('the right reading of the effect, or the modern sentence'),
  'rec-c1-03-lisette': 'Lisette’s summer (act 10), one female voice, one take, gentle and nostalgic. The aunt’s line « Je voudrais que tu reviennes l’an prochain » is spoken simply, closer to the listener; the last sentence lighter, with a smile.',
  'rec-c1-03-lire': DECK('four-questions (act 10)'),
  'rec-c1-03-lisette-ecoute': `${ONE_TAKE} Eight lines read like a radio reading; no line dramatised.`,
  'rec-c1-03-modele': 'Odile’s presentation to the reading club (act 11), one female voice, one take, natural and engaged, as spoken to a small group. The quotations are marked by a slight change of tone; everything else is today’s French.',
  'rec-c1-03-texte-a3': TEXTE('Léon’s return (act 3)'),
  'rec-c1-03-texte-a4': TEXTE('The mayor’s letter (act 4)'),
  'rec-c1-03-texte-a5': TEXTE('Claire’s letter (act 5)'),
  'rec-c1-03-texte-a6': TEXTE('Old Bastien (act 6)'),
  'rec-c1-03-texte-a7': TEXTE('The school plaque (act 7), the plaque’s inscription read slightly more formally'),
  'rec-c1-03-texte-a8': TEXTE('A news story (act 8), read as a radio news item, the quoted line with audible solemnity'),
  'rec-c1-03-texte-a9': TEXTE('The peace of the valley (act 9), grave and unhurried'),
  'rec-c1-03-texte-a10': TEXTE('The painter’s studio (act 10), his last line spoken softly'),
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 3',
  intro: 'In B2 you learned to recognise the literary subjunctive and map it to today’s forms. This lesson goes past that. You read the whole sequence of tenses of a classic text: under a present, a past or a conditional main verb, for the same moment, a later one or an earlier one. You meet hypothetical and concessive inversion (eût-il su, fût-il roi) and learn that the rest of the sentence decides between if and even if. You see that a writer can break the sequence on purpose, to express a conditional or another moment; what the references say (OQLF accepts the present, the rare forms survive mainly in writing); and what a strict sequence does to a modern text: solemnity, irony or pastiche. Recognition only: you never produce the forms. The task: present an original classical-style page to your reading club in 220 to 320 words of today’s French.',
  skill: 'CE',
  grammarAssumed: [SUBJPASSE_UNIT, SUBJIND_UNIT, PS_UNIT, SL_UNIT, SI_UNIT, CONCESSION_UNIT, INVERSION_UNIT],
  grammarIntroduced: [
    'The full classical sequence of tenses in the subjunctive for recognition: present or past subjunctive under a present main verb; imperfect subjunctive for simultaneity and posteriority and pluperfect subjunctive for anteriority under a past main verb',
    'The tense choice as a statement about the moment of the action: result versus action (eût terminé / terminât, fût partie / partît), and avant que looking forward',
    'A conditional main clause (je voudrais, il serait bon, il aurait fallu, il eût été juste) counted as a past in classical usage, mapped to today’s present subjunctive',
    'Hypothetical inversion read as si plus pluperfect (eût-il su, fût-il arrivé, eût-on écouté) and the fixed phrase n’eût été (sans)',
    'Concessive inversion read as même si (fût-il roi, l’eût-il voulu, dussé-je, si riche fût-il, serait-il ministre), told apart from hypothesis by the rest of the sentence',
    'Deliberate breaks in the sequence and their meaning: an imperfect or pluperfect subjunctive after a present with a conditional sense; a present subjunctive after a past for what still holds or comes after the moment of writing',
    'Modern practice and norm: OQLF’s principle and accepted present, partial concordance keeping fût and eût, the solemn fût of the press, rare in speech',
    'The register effect of a strict sequence in a modern text: solemnity, irony, pastiche',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Le B2 t’a appris à reconnaître le subjonctif littéraire. Ici, tu lis la concordance entière d’un texte classique : sous un présent, un passé ou un conditionnel, au même moment, plus tard ou avant. Tu reconnais eût-il su et fût-il roi, tu comprends pourquoi un auteur quitte parfois la note, ce que disent les références, et l’effet d’une forme rare aujourd’hui. Tu ne produis jamais ces formes. À la fin, tu présentes à ton club de lecture, en 220 à 320 mots, une page écrite à la manière classique.',
    minutes: 160,
    difficulty: 5,
    glyph: 'vînt',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CL_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1, B2 and C1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** The lesson as the validators run it (`task` is a schema type, so nothing
 *  is removed; kept for the house tests that call it). */
export function lessonWithoutTask(): Lesson { return LESSON; }

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE, ...ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id)];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, EXTRAIT_TACHE, dicteeFor };
