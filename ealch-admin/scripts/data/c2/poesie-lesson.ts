// c2.07.l1 « Traduire la poésie » — the lesson. DRAFT, the third lesson of
// wave 2 of the C2 band, FLAGGED OPTIONAL ENRICHMENT. To RICH-LESSON-
// STANDARD.md (the workshop shape, text and task) on top of B1-BUILD-
// PLAYBOOK.md, with the C2 rules of C2-BUILD-PLAN.md and the c2.07 brief in
// C2-BUILD-LOG.md. Structural model: `c2/analyse-litteraire-lesson.ts`
// (c2.02): same helpers, same assembly, same validation shape, scaled down.
//
// Not imported, not merged into seed.json, not published. No Postgres
// WRITE was made while authoring this file; a read-only probe
// (scratch/_c207_probe*.mts, never committed) confirmed the claimed block
// is clean and the theme/sub-theme writes already landed (corpus header §A).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE — DELIBERATELY SMALL
// ══════════════════════════════════════════════════════════════════════════
//
//   SIX ACTS, NOT NINE. The brief flags this lesson optional enrichment and
//   asks for modest scope, well executed, rather than the rich standard’s
//   usual size: "if you find yourself needing significantly more... stop at
//   a smaller, complete lesson rather than over-building". Two poems, both
//   verified word for word against Wikisource (corpus §B): Verlaine’s
//   « Chanson d’automne » is read whole in act 1 and translated line by line
//   in acts 3-5; Rimbaud’s « Sensation » is met for the first time in act 6
//   and translated in full as the graded task.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Rencontrer le poème        6  Inès’s flat, correct translation; the
//                                     full « Chanson d’automne »; recap of
//                                     c1.22/c1.19; the four bagages named
//    2  Ce qui se perd, ce qui     5  le ton, le rythme, l’image, le sens
//       reste                        littéral, each illustrated and tested
//    3  Traduire ligne par ligne   5  controlled line-by-line practice on
//                                     the SAME poem’s remaining two stanzas
//    4  Choisir la meilleure       3  four literal-vs-chosen pairs, counting
//       traduction                   which keeps more
//    5  Le piège du mot à mot      3  lost without choosing, AND the reverse
//                                     trap, invented imagery for a rhyme
//    6  Ta traduction             11  Rimbaud’s « Sensation », the model, the
//                                     plan, the scenario, TASK, quiz, review
//
//   TOTAL 33 missions, 6 acts (6,5,5,3,3,11). Corpus: 89 authored rows
//   (.2200-.2288 inside the claimed .2200-.2399 block, well under half of
//   it; the remainder is free margin for the pre-review pass). Quiz: 6
//   rounds of 6 (smaller than the rich standard’s 8x8, matching the
//   brief’s "kept modest" instruction). Six error triggers, six remediation
//   drills, five reference sheets, six terms. Chapter artwork:
//   `c2-poesie-image-prompts.md`, 6 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Traduire un poème, c’est une traversée : tu ne peux pas porter tous
//   tes bagages jusqu’à l’autre rive. » EN: Translating a poem is a
//   crossing: you cannot carry all your luggage to the other shore.
//
//   ONE METAPHOR, LA TRAVERSÉE, chosen to CONTRAST with c1.22's own "same
//   cargo, another boat": prose translation keeps everything the text does
//   to its reader; poetry will not grant that. Acts 2-5 hand the learner one
//   piece of luggage at a time (ton, rythme, image, sens littéral); act 6
//   asks for a full crossing, naming what stays on the near shore.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    translating or closely paraphrasing a short French poem into
//           English: naming the four things a translation weighs (tone,
//           rhythm, imagery, literal meaning), choosing between two
//           plausible renderings of the same line, catching the word-for-
//           word trap AND its reverse (inventing imagery to force a rhyme
//           or a rhythm), and producing a full translation while naming
//           what it necessarily sacrifices.
//   QUOTES  c1.22's reframe (acts 1 and 2) and c1.19's reframe (act 1), each
//           imported from its own corpus file, never retyped.
//   LEAVES  translating prose ideas by reformulation to c1.22; naming a
//           single figure’s effect, in isolation, to c1.19; this lesson
//           starts past both, on the harder case neither owns: a poem,
//           where keeping everything is never possible.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; Castellane uses tu with his two students (a small
//   weekly workshop, not a formal seminar). French only on the learner
//   surface; English authored on every `en` field, EXCEPT the task’s own
//   produced artifact, which is English by design (translating INTO
//   English is this lesson’s whole scope). No em dash, no U+203F tie, never
//   "honnête"/"honest". Typographic ' throughout, including inside both
//   quoted poems. No spaced « ? » or « ! » in a scene or story bubble.
//   Citations by trail position in French words, never a raw id.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 33 missions across 6 acts, well below the rich standard’s usual
//      size, matching the brief’s explicit "kept modest" instruction and
//      the one surviving hint that this lesson is the wave’s first cut
//      candidate if the wave runs long. Extend before the phone review, or
//      ship at this size?
//   2. Direction is French-to-English only (never English-to-French), since
//      both the Research Plan and the Build Log brief describe the skill
//      as producing an English rendering of a French poem. The brief itself
//      allows "into English (or vice versa)" — add an English-to-French
//      half, or keep this one direction, matching the modest scope?
//   3. The graded task’s `modelAnswer` is in English (the produced
//      artifact), with no `modelAnswerEn` gloss, since the model answer IS
//      already the target language. Confirm this reading of the schema, or
//      add a French commentary line instead?
//   4. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.
//   5. No row is reused from c1.22/c1.19 by id (corpus §D): this draft
//      opened no Postgres write session, only a read-only probe. Reuse
//      specific rows by id once the pre-review pass has Postgres access, or
//      keep every example freshly authored as this draft does?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, ALL_ROWS, ROWS_BY_ACT,
  IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  POEM1, POEM1_EN, POEM1_SOURCE, POEM2, POEM2_EN, POEM2_SOURCE, MODELE_TRADUCTION,
  C122_REF, C119_REF, C122_REFRAME, C122_REFRAME_EN, C119_REFRAME, C119_REFRAME_EN,
} from './poesie-corpus.ts';
import { POESIE_TERMS } from './poesie-terms.ts';

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
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as unknown as SrcItem]));

/** An item’s fr/en. Throws on a typo, so no section can name an id that does
 *  not exist in this lesson’s own corpus. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.07: no item ${id}`);
  return r;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
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

/** THE "UNE LIGNE À LA FOIS" BEAT: a short scene between Inès, Yanis and
 *  Monsieur Castellane, refining a translation mid-lesson. */
function sceneAnalyse(id: string, title: string, bubbles: { from: 'coach' | 'user' | 'narrator'; fr: string; en: string }[]): Sec<'story'> {
  return {
    type: 'story', id, layer: 'core', title, setting: "L’atelier de traduction du mardi, chez Monsieur Castellane.",
    bubbles, closing: { fr: REFRAME, en: REFRAME_EN },
    audio: AUDIO, say: REFRAME,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — RENCONTRER LE POÈME
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Une traduction juste, et pourtant plate', frSub: "L’atelier du mardi",
  setting: { place: "L’atelier de traduction du mardi", city: '', time: '19 h', ambience: 'une petite salle, des brouillons annotés, un poème projeté au mur' },
  beats: [
    { kind: 'narration', text: "Le mardi, Inès apporte sa traduction de l’ouverture d’un poème de Verlaine, avec Yanis et Monsieur Castellane, traducteur de métier.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Inès', fr: src(E(2200)).fr, en: src(E(2200)).en, size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'M. Castellane', fr: src(E(2201)).fr, en: src(E(2201)).en, stage: 'Il repose la page, sans se moquer, mais sans se satisfaire de la version.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: `${src(E(2202)).fr} EN: ${src(E(2202)).en}`, size: 'md', audio: AUDIO },
    { kind: 'resolve', text: `${src(E(2203)).fr} EN: ${src(E(2203)).en}`, size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Nommer les quatre bagages d’une traduction', s: 'Acte 2 : le ton, le rythme, l’image, le sens littéral' },
    { t: 'Traduire une ligne à la fois, sans mot à mot', s: "Acte 3 : pratique guidée sur « Chanson d’automne »" },
    { t: 'Choisir entre deux traductions plausibles', s: 'Acte 4 : compter les bagages réellement gardés' },
    { t: "Produire ta propre traduction, en acceptant qu’aucune ne soit parfaite", s: "Actes 5 et 6 : le piège du mot à mot, puis « Sensation » de Rimbaud, en entier" },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: "Chanson d’automne", frSub: 'Verlaine, 1866, texte intégral (vérifié mot pour mot sur Wikisource, 2026-10-09)',
  text: POEM1,
  glossary: [
    { word: 'sanglots', en: 'sobs', note: 'Des pleurs bruyants et saccadés. EN: loud, broken crying.' },
    { word: 'langueur', en: 'languor', note: 'Un état de faiblesse douce, sans force ni envie. EN: a state of soft weakness, with no strength or will.' },
    { word: 'suffocant', en: 'stifling', note: 'Qui empêche de respirer librement. EN: preventing free breathing.' },
    { word: 'blême', en: 'pale, wan', note: 'D’une pâleur maladive. EN: of a sickly paleness.' },
    { word: 'deçà, delà', en: 'this way, that way', note: 'D’un côté puis de l’autre, sans direction fixe. EN: one way then the other, with no fixed direction.' },
    { word: 'pareil à', en: 'just like', note: 'Semblable à, de la même nature que. EN: similar to, of the same nature as.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : que fait le vent à la personne qui parle, dans la dernière strophe.', a: "Il l’emporte çà et là, comme une feuille morte emportée par le vent." },
    { q: 'Le ton change-t-il entre les trois strophes du poème.', a: 'Non : les trois gardent le même ton las et mélancolique, du premier sanglot à la dernière feuille.' },
    { q: 'Quel son revient le plus souvent à la fin des lignes, et que fait-il.', a: 'Le son « -on » (violons, automne, monotone) : sa répétition imite, par le son lui-même, une plainte continue.' },
  ],
  audio: REC('rec-c2-07-poeme1'), say: REFRAME, terms: ['rythme'],
};

const A1_ACQUIS: Sec<'examples'> = {
  type: 'examples', id: 'a1-acquis', layer: 'core', sheetId: 'sheet-bagages',
  title: 'Ce que tu sais déjà',
  examples: [
    { fr: C122_REFRAME, en: C122_REFRAME_EN, note: `${Cap(C122_REF)} : garder l’idée, sa force et son fil, dans un texte en prose` },
    { fr: C119_REFRAME, en: C119_REFRAME_EN, note: `${Cap(C119_REF)} : nommer l’effet d’une figure de style` },
  ],
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

const A1_BAGAGES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a1-bagages', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-bagages',
  title: 'Les quatre bagages', frSub: 'Une seule traversée',
  hint: "Quatre cartes. Aucune traduction ne les porte tous jusqu’à l’autre rive.",
  audio: REC('rec-c2-07-bagages'), say: REFRAME, terms: ['bagages'],
  cards: [
    { head: 'Le ton', label: 'bagage 1', fr: "Le climat affectif d’une ligne", sub: '[luh tohn]',
      body: "Mélancolique, ironique, tendre : un ton juste se perd souvent le premier, dans une traduction trop neutre. EN: melancholic, ironic, tender; a true tone is often the first thing lost in a too-neutral translation." },
    { head: 'Le rythme', label: 'bagage 2', fr: 'La respiration du poème', sub: '[luh reetm]',
      body: "Le compte des syllabes, les sons répétés, les lignes courtes ou longues. EN: the syllable count, the repeated sounds, the short or long lines." },
    { head: "L’image", label: 'bagage 3', fr: 'Ce que le lecteur voit ou sent', sub: '[lee-mahzh]',
      body: "Une feuille morte, un vent, un visage : jamais à remplacer par une image absente de l’original. EN: a dead leaf, a wind, a face, never to be replaced by an image absent from the original." },
    { head: 'Le sens littéral', label: 'bagage 4', fr: 'Ce que les mots disent, mot pour mot', sub: '[luh sahns lee-tay-ral]',
      body: "Le plus facile à garder seul, et le moins suffisant seul. EN: the easiest to keep alone, and the least sufficient on its own." },
  ],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl("La version d’Inès", "« Grammaticalement juste, et pourtant ça sonne comme... » une notice de médicament, est le reproche de...", ['Yanis', 'Monsieur Castellane'], 1,
    "C’est lui qui compare la version à une notice de médicament. EN: he is the one who compares the version to a medicine leaflet."),
  ctl('Les quatre bagages', 'Les quatre bagages de cette leçon sont...', ['le passé, le présent, le futur, le conditionnel', 'le ton, le rythme, l’image, le sens littéral'], 1,
    'Jamais tous les quatre à la fois jusqu’à l’autre rive. EN: never all four at once, all the way across.'),
  ctl('Le plan de la leçon', 'Cette leçon traduit...', ['un seul poème, deux fois', 'un premier poème lu en entier, un second traduit en entier'], 1,
    "« Chanson d’automne », puis « Sensation », à l’acte 6. EN: \"Chanson d’automne\", then \"Sensation\", in act 6."),
], ['bagages']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Rencontrer le poème',
    opener: {
      line: "Inès a traduit chaque mot, et pourtant quelque chose s’est perdu en chemin : ici tu lis le poème en entier et tu nommes, pour la première fois, ce qu’une traduction doit porter. EN: Inès translated every word, and yet something was lost along the way: here you read the poem in full and name, for the first time, what a translation must carry.",
      imageRef: 'lessons/c2-07-poesie/act01.jpg',
    },
    sections: [],
    milestone: "Tu as lu « Chanson d’automne » en entier et tu sais nommer les quatre bagages qu’une traduction doit peser. EN: You have read \"Chanson d’automne\" in full and can name the four things a translation must weigh.",
    estScreens: 16, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_ACQUIS, A1_BAGAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — CE QUI SE PERD, CE QUI RESTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-table', layer: 'core', sheetId: 'sheet-bagages',
  title: 'Un vers, une version littérale, ce qui se perd',
  cols: ['Vers français', 'Traduction littérale', 'Ce qui se perd'],
  rows: [
    { cells: [src(E(2213)).fr, 'The long sobs of the violins of autumn', 'le rythme : six syllabes courtes disparaissent'], say: src(E(2213)).fr,
      detail: { title: 'Un souffle court, perdu', body: `${src(E(2221)).fr} EN: ${src(E(2221)).en}`, say: src(E(2213)).fr } },
    { cells: [src(E(2212)).fr, 'Wound my heart with a monotonous languor.', "le ton : presque gardé, l’écho sonore se perd"], say: src(E(2212)).fr,
      detail: { title: "L’écho entre automne et monotone", body: `${src(E(2222)).fr} EN: ${src(E(2222)).en}`, say: src(E(2212)).fr } },
    { cells: [src(E(2214)).fr, 'Similar to the dead leaf.', 'le ton : juste, mais analytique, pas poétique'], say: src(E(2214)).fr,
      detail: { title: 'Une chute trop analytique', body: `${src(E(2223)).fr} EN: ${src(E(2223)).en}`, say: src(E(2214)).fr } },
    { cells: [src(E(2215)).fr, 'I remember bygone days and I weep;', 'presque rien : le sens littéral résiste'], say: src(E(2215)).fr,
      detail: { title: 'Le bagage le plus facile', body: 'Le sens littéral résiste souvent seul à la traversée, et c’est exactement pourquoi il ne suffit jamais seul. EN: literal meaning often survives the crossing alone, which is exactly why it is never enough alone.', say: src(E(2215)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['bagages'],
};

const A2_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-groupe', layer: 'core', size: 'lg',
  title: 'Nomme le bagage, pas seulement le mot', frSub: 'Le ton, le rythme, l’image, le sens',
  groups: [
    grp('Le ton ou le rythme', [it(E(2216)), it(E(2217))],
      chk('Le ton est...', ['son climat affectif', 'son nombre de syllabes'], 0,
        "Le rythme, lui, est la respiration du poème. EN: rhythm, meanwhile, is the poem’s breathing.")),
    grp("L’image ou le sens littéral", [it(E(2218)), it(E(2219))],
      chk("L’image est...", ['ce que les mots disent mot pour mot', 'ce que le lecteur voit ou sent'], 1,
        'Le sens littéral, lui, est exactement ce que les mots disent. EN: literal meaning, meanwhile, is exactly what the words say.')),
    ctl('Inès et sa version', 'Une version qui garde le sens mais pas le rythme...', ['est fausse', 'est juste, mais incomplète'], 1,
      'Juste et incomplète ne sont pas des contraires. EN: correct and incomplete are not opposites.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['ton', 'rythme'],
};

const A2_SCENE = sceneAnalyse('a2-scene', 'On ne porte jamais tout', [
  { from: 'user', fr: src(E(2228)).fr, en: src(E(2228)).en },
  { from: 'narrator', fr: src(E(2229)).fr, en: src(E(2229)).en },
  { from: 'coach', fr: src(E(2230)).fr, en: src(E(2230)).en },
]);
A2_SCENE.terms = ['bagages'];

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Une traduction mot à mot', 'Une traduction mot à mot garde presque toujours...', ['le rythme', 'le sens littéral'], 1,
    "Le rythme et le ton sont les premiers à se perdre. EN: rhythm and tone are the first to be lost."),
  ctl("L’image du poème", "« Similar to the dead leaf » garde l’image, mais...", ['perd tout le sens', 'sonne analytique, pas poétique'], 1,
    'Le ton se perd sans que le sens ne bouge. EN: the tone is lost without the meaning moving at all.'),
  ctl('Avant de juger une traduction', 'Avant de juger une traduction, nomme...', ['seulement ses fautes de grammaire', 'ce qu’elle garde ET ce qu’elle laisse derrière elle'], 1,
    'Les deux moitiés du jugement. EN: both halves of the judgement.'),
], ['bagages']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Ce qui se perd, ce qui reste',
    opener: {
      line: "Chaque traduction littérale de cette strophe est juste, et chacune perd quelque chose de différent : ici tu apprends à nommer exactement quoi. EN: Every literal translation of this stanza is correct, and each one loses something different: here you learn to name exactly what.",
      imageRef: 'lessons/c2-07-poesie/act02.jpg',
    },
    sections: [],
    milestone: 'Tu nommes, pour une traduction donnée, le bagage qu’elle garde et celui qu’elle laisse derrière elle. EN: You can name, for a given translation, the piece of luggage it keeps and the one it leaves behind.',
    estScreens: 14, restPoints: ['a2-table'],
  },
  sections: [A2_TABLE, A2_GROUPE, A2_SCENE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — TRADUIRE LIGNE PAR LIGNE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_INTRO: Sec<'examples'> = {
  type: 'examples', id: 'a3-intro', layer: 'core', title: 'La méthode, une ligne à la fois',
  examples: [
    ex(E(2235), 'le plan en une phrase'),
    ex(E(2250), 'ce que chaque ligne choisit'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['bagages'],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a3-table', layer: 'core', sheetId: 'sheet-ligne-par-ligne',
  title: 'Littérale contre choisie, trois lignes',
  cols: ['Vers français', 'Littérale (évite-la)', 'Choisie'],
  rows: [
    { cells: [src(E(2232)).fr, src(E(2236)).fr, src(E(2237)).fr], say: src(E(2232)).fr,
      detail: { title: "Le ton d’une défaillance", body: `${src(E(2238)).fr} EN: ${src(E(2238)).en}`, say: src(E(2232)).fr } },
    { cells: [src(E(2233)).fr, src(E(2239)).fr, src(E(2240)).fr], say: src(E(2233)).fr,
      detail: { title: 'Un mouvement flottant', body: `${src(E(2241)).fr} EN: ${src(E(2241)).en}`, say: src(E(2233)).fr } },
    { cells: [src(E(2234)).fr, src(E(2242)).fr, src(E(2243)).fr], say: src(E(2234)).fr,
      detail: { title: 'Un rythme ancien, gardé', body: `${src(E(2244)).fr} EN: ${src(E(2244)).en}`, say: src(E(2234)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['rythme', 'image'],
};

const A3_GROUPE: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-groupe', layer: 'core', size: 'lg',
  title: 'Choisis la ligne qui garde le plus', frSub: 'Compare, ne devine pas',
  groups: [
    ctl('Tout suffocant et blême', 'Entre ces deux versions, laquelle garde mieux le ton.', [src(E(2236)).fr, src(E(2237)).fr], 1,
      `${src(E(2238)).fr} EN: ${src(E(2238)).en}`),
    ctl('Au vent mauvais', "Entre ces deux versions, laquelle garde mieux l’image.", [src(E(2239)).fr, src(E(2240)).fr], 1,
      `${src(E(2241)).fr} EN: ${src(E(2241)).en}`),
    ctl('Deçà, delà', 'Entre ces deux versions, laquelle garde mieux le rythme.', [src(E(2242)).fr, src(E(2243)).fr], 1,
      `${src(E(2244)).fr} EN: ${src(E(2244)).en}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['rythme'],
};

const A3_SCENE = sceneAnalyse('a3-scene', "“Here, there” n’a aucun des sons anciens", [
  { from: 'user', fr: src(E(2247)).fr, en: src(E(2247)).en },
  { from: 'coach', fr: src(E(2248)).fr, en: src(E(2248)).en },
  { from: 'user', fr: src(E(2249)).fr, en: src(E(2249)).en },
]);
A3_SCENE.terms = ['rythme'];

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le plan en une ligne', 'Pour traduire une ligne, nomme d’abord...', ['son bagage principal', 'sa longueur en mots'], 0,
    'Puis choisis le mot anglais qui le garde. EN: then choose the English word that keeps it.'),
  ctl('Deçà, delà', '« Hither and thither » garde mieux que « here, there »...', ['le sens littéral', 'le rythme ancien et chantant'], 1,
    "L’un et l’autre disent la même chose ; un seul chante. EN: both say the same thing; only one sings."),
  ctl('Une bonne ligne', 'Une bonne ligne garde...', ['les quatre bagages à la fois', 'au moins deux bagages sur quatre'], 1,
    'Aucune ligne ne garde les quatre à la fois. EN: no line keeps all four at once.'),
], ['rythme', 'image']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Traduire ligne par ligne',
    opener: {
      line: "La même ligne admet plusieurs traductions justes ; une seule garde plus de bagages que les autres : ici tu t’entraînes à la repérer, ligne après ligne. EN: The same line admits several correct translations; only one keeps more luggage than the others: here you train to spot it, line by line.",
      imageRef: 'lessons/c2-07-poesie/act03.jpg',
    },
    sections: [],
    milestone: "Tu traduis une ligne à la fois, en nommant le bagage qu’elle garde. EN: You can translate one line at a time, naming the piece of luggage it keeps.",
    estScreens: 12, restPoints: ['a3-table'],
  },
  sections: [A3_INTRO, A3_TABLE, A3_GROUPE, A3_SCENE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — CHOISIR LA MEILLEURE TRADUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a4-choisir', layer: 'core', size: 'lg',
  title: 'Une traduction plausible, une traduction choisie', frSub: 'Compte les bagages que chacune garde',
  groups: [
    ctl('Les sanglots longs', 'Entre ces deux traductions, laquelle garde le plus de bagages.', [src(E(2252)).fr, src(E(2253)).fr], 1,
      `${src(E(2262)).fr} EN: ${src(E(2262)).en}`),
    ctl('Une langueur monotone', 'Entre ces deux traductions, laquelle garde le plus de bagages.', [src(E(2254)).fr, src(E(2255)).fr], 1,
      `${src(E(2263)).fr} EN: ${src(E(2263)).en}`),
    ctl('Des jours anciens', 'Entre ces deux traductions, laquelle garde le plus de bagages.', [src(E(2256)).fr, src(E(2257)).fr], 1,
      `${src(E(2264)).fr} EN: ${src(E(2264)).en}`),
    ctl('La feuille morte', 'Entre ces deux traductions, laquelle garde le plus de bagages.', [src(E(2258)).fr, src(E(2259)).fr], 1,
      `${src(E(2265)).fr} EN: ${src(E(2265)).en}`),
  ],
  audio: AUDIO, say: REFRAME, terms: ['bagages'],
};

const A4_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a4-focus', layer: 'core', title: 'Ce qui rend une traduction meilleure',
  points: [
    src(E(2260)).fr,
    src(E(2261)).fr,
    'Compte les bagages, jamais le registre : un mot soutenu qui ne garde rien de plus n’est pas une meilleure traduction.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['bagages'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le bon choix', 'Entre deux traductions plausibles, la meilleure est celle qui...', ['sonne la plus soutenue', 'garde le plus de bagages'], 1,
    'Le registre ne remplace jamais les bagages gardés. EN: register never replaces the luggage actually kept.'),
  ctl('Une traduction littérale', 'Une traduction littérale est...', ['fausse', 'incomplète'], 1,
    'Elle ne garde souvent qu’un seul bagage. EN: it often keeps only one piece of luggage.'),
  ctl('Avant de choisir', 'Avant de choisir entre deux traductions, il faut...', ['choisir la plus longue des deux', 'compter les bagages que chacune porte réellement'], 1,
    "La longueur ne dit rien de ce qui est gardé. EN: length says nothing about what is kept."),
], ['bagages']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Choisir la meilleure traduction',
    opener: {
      line: "Deux traductions de la même ligne, toutes deux correctes, mais une seule porte plus de bagages jusqu’à l’autre rive : ici tu apprends à choisir laquelle. EN: Two translations of the same line, both correct, but only one carries more luggage to the other shore: here you learn to choose which.",
      imageRef: 'lessons/c2-07-poesie/act04.jpg',
    },
    sections: [],
    milestone: 'Tu choisis, entre deux traductions plausibles, celle qui garde le plus de bagages. EN: You can choose, between two plausible translations, the one that keeps the most luggage.',
    estScreens: 10, restPoints: [],
  },
  sections: [A4_CHOISIR, A4_FOCUS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE PIÈGE DU MOT À MOT
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_ERRORS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-errors', layer: 'core', title: 'Le piège du mot à mot (et son inverse)',
  errors: [
    { wrong: 'of a languor monotonous', right: 'with a monotonous languor / with a weary monotony', why: "L’ordre mot-à-mot du français ne passe pas en anglais : l’adjectif anglais se place avant le nom. EN: French word order does not carry over; English puts the adjective before the noun." },
    { wrong: 'tears', right: 'sobs / sobbing', why: '« Sanglots » est plus intense qu’une simple larme ; « tears » efface cette intensité. EN: "sanglots" is more intense than a simple tear; "tears" erases that intensity.' },
    { wrong: 'this side, that side', right: 'hither and thither', why: 'Un anglais correct, mais sans aucun écho du rythme ancien et chantant de l’original. EN: correct English, but with none of the old, singing rhythm of the original.' },
    { wrong: 'the dead rose (pour obtenir une rime)', right: 'the dead leaf, même sans rime', why: "Piège inverse : inventer une image absente pour gagner une rime fait gagner un son et ajoute une image fausse. EN: the reverse trap: inventing an absent image for a rhyme wins a sound but adds a false image." },
    { wrong: 'le poème entier traduit comme un seul paragraphe de prose', right: 'six lignes courtes, gardées courtes, même en anglais', why: "Les retours à la ligne imitent, par leur brièveté, un souffle court ; les effacer perd le rythme même si chaque mot est juste. EN: the line breaks themselves imitate a short breath; erasing them loses the rhythm even if every word is correct." },
  ],
  audio: AUDIO, say: REFRAME, terms: ['piegemotamot'],
};

const A5_SCENE = sceneAnalyse('a5-scene', "Une rose qui n’existe nulle part", [
  { from: 'user', fr: src(E(2269)).fr, en: src(E(2269)).en },
  { from: 'coach', fr: src(E(2270)).fr, en: src(E(2270)).en },
  { from: 'narrator', fr: src(E(2271)).fr, en: src(E(2271)).en },
]);
A5_SCENE.terms = ['piegemotamot'];

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le piège le plus fréquent', 'Le piège le plus fréquent est...', ['une faute de grammaire', 'un bagage perdu sans qu’on l’ait choisi'], 1,
    'Presque jamais une faute : un choix qui n’a pas été fait. EN: almost never a mistake: a choice that was never made.'),
  ctl('Le piège inverse', 'Le piège inverse consiste à...', ['sacrifier le sens ou l’image pour une rime', "traduire trop littéralement"], 0,
    'Gagner un son en ajoutant une image absente. EN: winning a sound by adding an absent image.'),
  ctl('Avant de rendre une traduction', 'Avant de rendre une traduction, relis-la et nomme...', ['seulement ses fautes', 'ce que tu as gardé et ce que tu as laissé derrière toi'], 1,
    'Les deux moitiés, encore. EN: both halves, again.'),
], ['piegemotamot']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le piège du mot à mot',
    opener: {
      line: "Traduire mot à mot n’est presque jamais une faute de grammaire ; c’est un bagage perdu sans qu’on l’ait choisi, et parfois un bagage sacrifié pour en gagner un autre : ici tu apprends à repérer les deux. EN: Translating word for word is almost never a grammar mistake; it is a piece of luggage lost without ever being chosen, and sometimes one sacrificed to gain another: here you learn to spot both.",
      imageRef: 'lessons/c2-07-poesie/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais le piège du mot à mot, et son inverse : sacrifier le sens ou l’image pour une rime. EN: You can recognise the word-for-word trap, and its reverse: sacrificing meaning or imagery for a rhyme.',
    estScreens: 10, restPoints: [],
  },
  sections: [A5_ERRORS, A5_SCENE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — TA TRADUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_POEME: Sec<'reading'> = {
  type: 'reading', id: 'a6-poeme', layer: 'core', questionsInModal: true,
  title: '« Sensation »', frSub: 'Rimbaud, mars 1870 (vérifié mot pour mot sur Wikisource, 2026-10-09)',
  text: POEM2,
  glossary: [
    { word: 'picoté', en: 'pricked, tingled', note: 'Piqué légèrement, par petits points. EN: lightly pricked, in small points.' },
    { word: 'fouler', en: 'to tread', note: 'Marcher sur quelque chose en l’écrasant doucement. EN: to walk on something, gently crushing it.' },
    { word: 'menue', en: 'fine, slender', note: 'Très fine, peu épaisse. EN: very fine, thin.' },
    { word: 'bohémien', en: 'bohemian, wanderer', note: "Souvent traduit « gypsy », un mot daté en anglais contemporain : « wanderer » ou « drifter » gardent l’image sans ce risque. EN: often translated \"gypsy\", a dated word in contemporary English; \"wanderer\" or \"drifter\" keep the image without that risk." },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : que fait la personne qui parle, dans la première strophe.', a: "Elle marche pieds nus dans l’herbe, un soir d’été, en laissant le vent toucher sa tête nue." },
    { q: 'Le ton de ce poème ressemble-t-il à celui de « Chanson d’automne ».', a: "Non : ici le ton est rêveur et heureux, pas mélancolique ; le poème parle d’un bonheur à venir, pas d’un chagrin déjà là." },
    { q: 'À quoi la personne qui parle se compare-t-elle, à la fin.', a: 'À un bohémien, puis à quelqu’un d’heureux comme avec une femme : deux images de liberté et de bonheur simple.' },
  ],
  audio: REC('rec-c2-07-poeme2'), say: REFRAME, terms: ['image'],
};

const A6_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a6-plan', layer: 'core', sheetId: 'sheet-traduction',
  title: 'Quatre étapes pour ta traduction',
  steps: [
    `1. ${src(E(2280)).fr} EN: ${src(E(2280)).en}`,
    `2. ${src(E(2281)).fr} EN: ${src(E(2281)).en}`,
    `3. ${src(E(2282)).fr} EN: ${src(E(2282)).en}`,
    `4. ${src(E(2283)).fr} EN: ${src(E(2283)).en}`,
  ],
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

const A6_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a6-usages', layer: 'core', title: 'Où peser les quatre bagages',
  cases: [
    { situation: 'Tu traduis un titre de film sans perdre son ton', fr: src(E(2211)).fr, en: src(E(2211)).en },
    { situation: 'Tu choisis entre deux traductions publiées du même poème', fr: src(E(2266)).fr, en: src(E(2266)).en },
    { situation: "Tu expliques, à l’oral, ce qu’une traduction a dû sacrifier", fr: src(E(2231)).fr, en: src(E(2231)).en },
    { situation: 'Tu refuses d’inventer une image pour gagner une rime', fr: src(E(2268)).fr, en: src(E(2268)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['bagages'],
};

const A6_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a6-scenario', layer: 'core', title: "Tu t’entraînes à voix haute avec Yanis",
  setting: "Avant de rendre sa traduction, Inès répète ses choix à voix haute avec Yanis, qui joue Monsieur Castellane.",
  turns: [
    {
      ai: "Et ce dernier vers, « comme un bohémien », qu’en fais-tu.", en: 'And this last line, "comme un bohémien", what do you do with it.',
      user: src(E(2285)).fr, userEn: 'I am keeping "wander" for "bohémien": it keeps the free movement, even though the exact word disappears.',
      alts: [
        { fr: src(E(2286)).fr, en: 'I am translating "comme un bohémien" as "like a gypsy", without checking whether that word still sounds right in English today. (A choice made without checking; the register is lost without being noticed.)' },
      ],
    },
    {
      ai: 'Et la dernière ligne, « heureux comme avec une femme ».', en: 'And the final line, "heureux comme avec une femme".',
      user: "Je garde le sens littéral presque mot pour mot ici : le ton rêveur du poème porte déjà cette simplicité, inutile de la décorer.", userEn: "I am keeping the literal meaning almost word for word here: the poem’s own dreamy tone already carries this plainness, no need to decorate it. (Sometimes the literal meaning IS the chosen one.)",
      alts: [
        { fr: 'Je traduis trop littéralement toute la ligne, sans me demander si son ton reste le même en anglais.', en: 'I translate the whole line too literally, without asking whether its tone stays the same in English. (A literal choice made by default, not by judgement.)' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

/** THE GRADED TASK. A full English translation (or close paraphrase) of
 *  Rimbaud’s « Sensation », graded on holding tone, imagery and overall
 *  sense together, never on word-for-word accuracy (C2-BUILD-LOG’s c2.07
 *  brief). `modelAnswer` is in English because the produced artifact IS the
 *  English translation; it is offered as ONE possible rendering, never the
 *  only one (§L of the corpus file, and `graderNotes` below, both say so). */
const A6_MISSION: Sec<'task'> = {
  type: 'task', id: 'a6-mission', title: 'Ta traduction', frSub: 'Mission écrite',
  brief: `L’atelier du mardi te demande une traduction anglaise complète de « Sensation », de Rimbaud. Voici le poème. ${POEM2}\n\n${POEM2_SOURCE}`,
  briefEn: "The Tuesday workshop asks you for a full English translation of Rimbaud’s \"Sensation\". The poem is printed above so you can write with it in front of you.",
  produce: "Écris une traduction anglaise complète de ce poème, ou une paraphrase très proche, qui garde le ton rêveur, les images concrètes et le sens d’ensemble, en 40 à 100 mots, sans viser une seule traduction parfaite.",
  responseSpec: { kind: 'text', minWords: 40, maxWords: 100 },
  rubric: {
    criteria: [
      { key: 'ton', label: 'Le ton, reconnu et gardé', maxPoints: 4, descriptors: [
        "4 : Le ton rêveur, sensuel et heureux du poème est gardé du début à la fin, sans devenir ni clinique ni trop démonstratif.",
        '3 : Le ton est globalement gardé, avec une ou deux lignes plus neutres que l’original.',
        '2 : Le ton n’est gardé que par endroits ; plusieurs lignes sonnent clinique ou plate.',
        "1 : Le ton n’est pas traité ; la traduction se lit comme une notice, pas comme un poème.",
      ] },
      { key: 'image', label: "L’image, gardée sans invention", maxPoints: 4, descriptors: [
        "4 : Les images concrètes du poème (le blé, l’herbe, le vent, la marche) sont toutes gardées, sans qu’aucune nouvelle image soit inventée.",
        '3 : La plupart des images sont gardées, avec au plus une légère dérive de sens.',
        '2 : Plusieurs images sont perdues, ou une image absente du poème est ajoutée.',
        '1 : Les images ne sont pas traitées, ou largement inventées.',
      ] },
      { key: 'rythme', label: 'Le rythme, une forme anglaise qui respire', maxPoints: 4, descriptors: [
        '4 : La traduction garde des lignes de longueur comparable au poème, sans être réduite à un seul bloc de prose.',
        '3 : La forme générale en lignes est gardée, avec un rythme interne moins marqué que l’original.',
        '2 : La traduction est surtout en prose continue, avec peu de trace du rythme du poème.',
        '1 : Aucune trace de rythme ou de découpage en lignes.',
      ] },
      { key: 'sens', label: "Le sens d’ensemble, jamais mot à mot", maxPoints: 4, descriptors: [
        "4 : Le sens d’ensemble de chaque strophe est fidèle, sans traduction mot à mot visible nulle part.",
        '3 : Le sens d’ensemble est fidèle, avec une ou deux tournures trop littérales.',
        '2 : Le sens général se comprend, mais plusieurs lignes sont traduites mot à mot, avec un ordre de mots étrange en anglais.',
        '1 : Le sens est confus, ou largement mot à mot du début à la fin.',
      ] },
    ],
  },
  scaffold: [
    'On blue summer evenings, I will...',
    'I will not..., I will not...',
    'But a boundless love will...',
    'And I will wander..., like a...',
  ],
  modelAnswer: MODELE_TRADUCTION,
  watchFor: [
    { pattern: 'A line is translated word for word with an English word order that does not exist in natural English.', criterion: 'sens', feedback: 'Traduis le sens de la ligne entière, jamais mot après mot. EN: translate the whole line’s meaning, never word after word.', ref: 'a5-errors' },
    { pattern: 'A new image not present in the French is invented, often to force a rhyme or a rhythm.', criterion: 'image', feedback: "N’invente jamais une image absente du poème, même pour un son plus joli. EN: never invent an image absent from the poem, even for a nicer sound.", ref: 'a5-errors' },
    { pattern: 'The dreamy, sensuous tone is flattened into a clinical or purely descriptive register.', criterion: 'ton', feedback: "Relis à voix haute : le ton doit rester rêveur, pas neutre. EN: reread aloud: the tone must stay dreamy, not neutral.", ref: 'a2-table' },
    { pattern: 'The whole poem is rendered as one unbroken block of prose, with no trace of its line breaks.', criterion: 'rythme', feedback: 'Garde des lignes courtes, même en anglais : elles portent une partie du rythme. EN: keep short lines, even in English: they carry part of the rhythm.', ref: 'a3-table' },
    { pattern: '"bohémien" is rendered as the dated "gypsy" with no apparent awareness of the word’s contemporary connotations.', criterion: 'ton', feedback: '« Wanderer » ou « drifter » gardent le mouvement libre sans ce risque. EN: "wanderer" or "drifter" keep the free movement without that risk.', ref: 'a6-poeme' },
  ],
  graderNotes: [
    'Word count: 40 to 100, with 10% tolerance (36 to 110) before length costs points.',
    'This task marks what is KEPT and what is KNOWINGLY LEFT BEHIND (tone, imagery, overall sense), never metrical perfection, rhyme, or word-for-word accuracy.',
    'No single correct translation exists: accept any register (literary or plain) as long as the tone is deliberately dreamy and sensuous, not flattened by default.',
    'Accept "wanderer", "drifter", "rover" or an equivalent for "bohémien"; accept, but do not penalise beyond the ton criterion, "gypsy" if the rest of the translation is strong.',
    'Do not mark grammar beyond what interferes with comprehension; this task marks translation judgement, not English grammar.',
    'Feedback language: unsimplified C2 French, addressed as « tu », quoting the learner’s own English where useful.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

const A6_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a6-parler', layer: 'core', title: 'Dis chaque vers à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

const A6_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a6-cheat', layer: 'core', sheetId: 'sheet-bagages',
  title: 'Les quatre bagages sur un seul écran',
  rows: [
    { k: 'le ton', v: 'le climat affectif : mélancolique, rêveur, ironique', say: src(E(2212)).fr,
      detail: { title: 'Le premier perdu', body: 'Souvent le premier bagage perdu dans une traduction trop neutre. EN: often the first piece of luggage lost in a too-neutral translation.', say: src(E(2212)).fr } },
    { k: 'le rythme', v: 'la respiration : syllabes, sons répétés, lignes courtes', say: src(E(2213)).fr,
      detail: { title: 'Un souffle court', body: "Six syllabes courtes qui imitent un sanglot, par leur longueur même. EN: six short syllables imitating a sob, through their very length.", say: src(E(2213)).fr } },
    { k: "l’image", v: 'ce que le lecteur voit ou sent, jamais inventée', say: src(E(2214)).fr,
      detail: { title: 'Jamais remplacée', body: "Une image absente de l’original ne doit jamais être ajoutée, même pour une rime. EN: an image absent from the original must never be added, even for a rhyme.", say: src(E(2214)).fr } },
    { k: 'le sens littéral', v: 'ce que les mots disent, mot pour mot', say: src(E(2215)).fr,
      detail: { title: 'Facile seul, jamais suffisant', body: "Le bagage le plus facile à garder, et le moins suffisant à lui seul. EN: the easiest piece of luggage to keep, and the least sufficient on its own.", say: src(E(2215)).fr } },
    { k: 'le piège', v: 'perdu sans choisir, ou sacrifié pour une rime', say: src(E(2267)).fr,
      detail: { title: 'Le remède', body: "Nomme toujours, pour chaque ligne, ce que tu gardes et ce que tu laisses derrière toi. EN: always name, for every line, what you keep and what you leave behind.", say: src(E(2267)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['traversee'],
};

const A6_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a6-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu traduis maintenant un poème français en pesant quatre bagages à chaque ligne : le ton, le rythme, l’image et le sens littéral, en sachant qu’aucune traduction ne les porte tous jusqu’à l’autre rive. Le piège qui reste est toujours le même, dans un sens ou dans l’autre : perdre un bagage sans l’avoir choisi, ou en sacrifier un pour gagner un son. EN: You now translate a French poem by weighing four pieces of luggage at every line, knowing that no translation carries all of them across; the remaining trap, either way, is losing a piece of luggage without choosing to, or sacrificing one to win a sound.",
  stats: [
    { k: 'Le ton', v: 'le climat affectif, souvent le premier perdu' },
    { k: 'Le rythme', v: 'la respiration : syllabes et sons répétés' },
    { k: "L’image", v: 'jamais remplacée, même pour une rime' },
    { k: 'Le sens littéral', v: 'facile seul, jamais suffisant seul' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: "Une traduction garde un bagage et en perd un autre sans le choisir. Récris-la pour en garder un de plus. EN: A translation keeps one piece of luggage and loses another without choosing to; rewrite it to keep one more.", prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A6_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a6-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-bagages', label: 'Les quatre bagages', targets: ['traduction-plate'],
      questions: [
        mc("Traduire mot à mot donne une phrase...", ['fausse', 'juste, mais vide de rythme et d’image', 'toujours parfaite'], 1, "C’est exactement le problème que la version d’Inès pose à l’acte 1. EN: exactly the problem Inès’s version raises in act 1.", 'a1-check'),
        mc('Les quatre bagages de cette leçon sont...', ['le passé, le présent, le futur, le conditionnel', 'le ton, le rythme, l’image, le sens littéral'], 1, "Jamais tous les quatre à la fois jusqu’à l’autre rive. EN: never all four at once, all the way across.", 'a1-bagages'),
        mc("« Ça sonne comme une notice de médicament » est le reproche de...", ['Yanis', 'Monsieur Castellane'], 1, "C’est lui qui compare la version d’Inès à une notice. EN: he is the one who makes the comparison.", 'a1-scene'),
        mc('Le premier poème de cette leçon est de...', ['Rimbaud', 'Verlaine', 'Maupassant'], 1, "« Chanson d’automne », lue en entier à l’acte 1. EN: \"Chanson d’automne\", read in full in act 1.", 'a1-lecture'),
        tI('Complète. Un mot.', 'Traduire un poème, c’est une ... : tu ne peux pas tout porter jusqu’à l’autre rive.', 'traversée', "C’est la métaphore de toute la leçon. EN: that is the lesson’s whole metaphor.", 'a1-bagages'),
        tI('Complète. Un mot.', `${Cap(C122_REF)} t’a appris à garder l’idée, sa force et son ... .`, 'fil', "Le fil, la métaphore de la leçon qui précède. EN: the thread, the previous lesson’s own metaphor.", 'a1-acquis'),
      ],
    },
    {
      id: 'r2-perte', label: 'Ce qui se perd, ce qui reste', targets: ['ton-neglige'],
      questions: [
        mc('Une traduction mot à mot garde presque toujours...', ['le rythme', 'le sens littéral'], 1, 'Le rythme et le ton sont les premiers à se perdre. EN: rhythm and tone are the first to be lost.', 'a2-groupe'),
        mc('« Wound my heart with a monotonous languor » garde...', ['presque tout, sauf l’écho sonore automne/monotone', "rien de l’original", 'uniquement le rythme'], 0, "L’écho sonore se perd, pas le sens. EN: the sound-echo is lost, not the meaning.", 'a2-table'),
        mc('« Similar to the dead leaf » garde l’image, mais...', ['perd le sens', 'sonne analytique, pas poétique', 'perd aussi l’image'], 1, 'Le ton se perd sans que le sens ne bouge. EN: the tone is lost without the meaning moving.', 'a2-table'),
        mc('Le bagage le plus facile à garder seul est...', ['le rythme', 'le sens littéral'], 1, "Et c’est exactement pourquoi il ne suffit jamais seul. EN: and that is exactly why it is never enough alone.", 'a2-table'),
        tI('Complète. Un mot.', "Avant de juger une traduction, nomme ce qu’elle garde ET ce qu’elle laisse derrière ... .", 'elle', 'Les deux moitiés du jugement. EN: both halves of the judgement.', 'a2-check'),
        eS("Ma version garde tout.", "Ma version garde le sens, mais pas le rythme : six syllabes courtes, comme un souffle court.", "Garder le sens n’est pas garder tout. EN: keeping the meaning is not keeping everything.", 'a2-scene'),
      ],
    },
    {
      id: 'r3-ligne', label: 'Traduire ligne par ligne', targets: ['mot-a-mot'],
      questions: [
        mc('Pour traduire une ligne, nomme d’abord...', ['son bagage principal', 'sa longueur en mots'], 0, "Puis choisis le mot anglais qui le garde. EN: then choose the English word that keeps it.", 'a3-intro'),
        mc('« Faint and pale » garde mieux le ton que « suffocating » parce que...', ['il est plus court', "il garde l’idée d’une défaillance, pas un mot clinique", 'il change le sens de la ligne'], 1, "Le mot clinique efface le ton d’une défaillance. EN: the clinical word erases the tone of a swoon.", 'a3-table'),
        mc('« Hither and thither » garde mieux que « here, there »...', ['le sens littéral', 'le rythme ancien et chantant'], 1, "L’un et l’autre disent la même chose ; un seul chante. EN: both say the same thing; only one sings.", 'a3-groupe'),
        mc('Une bonne ligne garde...', ['les quatre bagages à la fois', 'au moins deux bagages sur quatre', 'un seul bagage, jamais plus'], 1, 'Aucune ligne ne garde les quatre à la fois. EN: no line keeps all four at once.', 'a3-check'),
        tI('Complète. Un mot.', '« Drift » garde l’image d’un mouvement passif et ... .', 'flottant', '« Go away » ne garde pas cette image. EN: "go away" does not keep that image.', 'a3-table'),
        eS('« Here, there » traduit « deçà, delà » sans perte.', '« Hither and thither » traduit « deçà, delà » en gardant son rythme ancien et chantant.', 'Le sens seul ne suffit pas pour cette ligne. EN: meaning alone is not enough for this line.', 'a3-scene'),
      ],
    },
    {
      id: 'r4-choisir', label: 'Choisir la meilleure traduction', targets: ['bagage-mal-compte'],
      questions: [
        mc('Entre deux traductions plausibles, la meilleure est celle qui...', ['sonne la plus soutenue', 'garde le plus de bagages', 'traduit le plus de mots possible'], 1, 'Le registre ne remplace jamais les bagages gardés. EN: register never replaces the luggage actually kept.', 'a4-focus'),
        mc('Une traduction littérale est...', ['fausse', 'incomplète'], 1, "Elle ne garde souvent qu’un seul bagage. EN: it often keeps only one piece of luggage.", 'a4-focus'),
        mc("« The long sobbing of autumn’s violins » garde mieux l’original que la version littérale parce que...", ["elle traduit plus de mots", "elle garde le rythme et l’image du sanglot", "elle ne garde rien du tout"], 1, "Même si l’ordre des mots change. EN: even though the word order changes.", "a4-choisir"),
        mc('Avant de choisir entre deux traductions, il faut...', ['choisir la plus longue des deux', 'compter les bagages que chacune porte réellement'], 1, 'La longueur ne dit rien de ce qui est gardé. EN: length says nothing about what is kept.', 'a4-check'),
        tI('Complète. Un mot.', "« A weary monotone » garde l’écho sonore que « monotonous languor » ... .", 'perd', "L’écho entre « automne » et « monotone ». EN: the echo between \"automne\" and \"monotone\".", 'a4-choisir'),
        eS("Entre deux traductions, choisis toujours la plus soutenue.", 'Entre deux traductions, choisis toujours celle qui garde le plus de bagages.', 'Le vocabulaire soutenu ne garde rien de plus par lui-même. EN: elevated vocabulary does not by itself keep anything more.', 'a4-focus'),
      ],
    },
    {
      id: 'r5-piege', label: 'Le piège du mot à mot', targets: ['image-inventee'],
      questions: [
        mc('Le piège le plus fréquent est...', ['une faute de grammaire', "un bagage perdu sans qu’on l’ait choisi"], 1, "Presque jamais une faute : un choix qui n’a pas été fait. EN: almost never a mistake: a choice that was never made.", 'a5-check'),
        mc('Le piège inverse consiste à...', ['sacrifier le sens ou l’image pour une rime', 'traduire trop littéralement'], 0, 'Gagner un son en ajoutant une image absente. EN: winning a sound by adding an absent image.', 'a5-errors'),
        mc("« The dead rose », à la place de « the dead leaf », pour une rime, est un exemple de...", ["traduction fidèle", "image inventée", "traduction littérale"], 1, "Cette rose n’existe nulle part dans le poème. EN: that rose exists nowhere in the poem.", "a5-scene"),
        mc("Traduire tout le poème comme un seul paragraphe de prose efface...", ["le sens littéral", "les retours à la ligne qui imitent un souffle court", "le nom de l’auteur"], 1, "Même si chaque mot reste juste. EN: even if every word stays correct.", "a5-errors"),
        tI('Complète. Un mot.', 'Avant de rendre une traduction, relis-la et nomme ce que tu as ... et ce que tu as laissé derrière toi.', 'gardé', 'Les deux moitiés, toujours. EN: both halves, always.', 'a5-check'),
        eS("Je choisis « the dead rose » pour obtenir une rime.", "Je garde « the dead leaf », même sans rime, parce que cette image existe dans le poème.", "Le son ne vaut jamais une image inventée. EN: a sound is never worth an invented image.", 'a5-scene'),
      ],
    },
    {
      id: 'r6-traduction', label: 'Ta traduction', targets: ['traduction-non-nommee'],
      questions: [
        mc('Le second poème de cette leçon est de...', ['Verlaine', 'Rimbaud'], 1, '« Sensation », rencontré pour la première fois à l’acte 6. EN: "Sensation", met for the first time in act 6.', 'a6-poeme'),
        mc("La mission de cette leçon demande de...", ["résumer le poème en français", "traduire le poème en entier, en anglais", "traduire seulement la première strophe"], 1, "Une traduction complète, pas un résumé. EN: a full translation, not a summary.", "a6-mission"),
        mc('« Bohémien » se traduit mieux aujourd’hui par...', ['gypsy, sans y penser', 'wanderer ou drifter'], 1, "Un mot daté contre un mot qui garde le mouvement libre sans ce risque. EN: a dated word against one that keeps the free movement without that risk.", 'a6-poeme'),
        mc("Le modèle de traduction proposé dans cette leçon est...", ["la seule traduction correcte", "une traduction possible parmi d’autres", "un exemple à ne jamais suivre"], 1, "Aucune traduction n’est la seule. EN: no translation is the only one.", "a6-mission"),
        tI('Complète. Un mot.', "Une bonne traduction nomme, pour chaque ligne, ce qu’elle a choisi de ... .", 'garder', 'Le reframe de toute la leçon. EN: the whole lesson’s reframe.', 'a6-progress'),
        lC('Écoute. Cette ligne vient-elle de « Chanson d’automne » ou de « Sensation ».', src(E(2277)).fr, ["de « Chanson d’automne »", 'de « Sensation »'], 1, "Elle vient du poème rencontré à l’acte 6. EN: it comes from the poem met in act 6.", 'a6-poeme'),
      ],
    },
  ],
};

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
spreadSlots(A6_QUIZ);

const A6_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a6-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'correct, but flat', back: 'une traduction mot à mot', say: src(E(2204)).fr },
    { front: 'the emotional climate of a line', back: 'le ton', say: src(E(2212)).fr },
    { front: "a poem’s breathing", back: 'le rythme', say: src(E(2213)).fr },
    { front: 'never replaced, even for a rhyme', back: "l’image", say: src(E(2214)).fr },
    { front: 'easiest alone, never enough alone', back: 'le sens littéral', say: src(E(2215)).fr },
    { front: 'lost without choosing to', back: 'le piège du mot à mot', say: src(E(2267)).fr },
    { front: 'invented to force a rhyme', back: 'le piège inverse', say: src(E(2270)).fr },
    { front: 'what stays on the near shore', back: 'une traversée', say: src(E(2288)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A6_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a6-roundup', layer: 'core', title: 'Traduire la poésie, en résumé',
  body: `${REFRAME} Tu traduis maintenant un poème français en nommant, à chaque ligne, le bagage que tu gardes et celui que tu laisses derrière toi, plutôt qu’en croyant pouvoir tout porter sans perte. EN: You can now translate a French poem by naming, at every line, the piece of luggage you keep and the one you leave behind, rather than believing you can carry everything across with no loss.`,
  points: [
    "Un poème ne te laisse pas garder le ton, le rythme, l’image et le sens littéral à la fois.",
    "Une traduction littérale n’est pas fausse : elle est incomplète, parce qu’elle ne garde souvent qu’un seul bagage.",
    "Inventer une image absente du poème, même pour une rime, est un piège aussi réel que le mot à mot.",
    "Aucune traduction n’est parfaite ; une bonne traduction sait nommer ce qu’elle a choisi.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['traversee', 'piegemotamot'],
};

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Ta traduction',
    opener: {
      line: "Un second poème t’attend, jamais lu dans cette leçon : ici tu le rencontres, puis tu le traduis en entier, en nommant ce que ta propre traversée laisse derrière elle. EN: A second poem awaits you, never read before in this lesson: here you meet it, then translate it in full, naming what your own crossing leaves behind.",
      imageRef: 'lessons/c2-07-poesie/act06.jpg',
    },
    sections: [],
    milestone: "Tu produis une traduction anglaise complète d’un poème français, en nommant ce qu’elle garde et ce qu’elle laisse derrière elle. EN: You can produce a full English translation of a French poem, naming what it keeps and what it leaves behind.",
    estScreens: 30, restPoints: ['a6-scenario', 'a6-mission', 'a6-cheat', 'a6-quiz'],
  },
  sections: [A6_POEME, A6_PLAN, A6_USAGES, A6_SCENARIO, A6_MISSION, A6_PARLER, A6_CHEAT, A6_PROGRESS, A6_QUIZ, A6_REVIEW, A6_ROUNDUP],
  imports: IMPORTED.act6,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its authored slots, scattered by hand (precision-nuance-lesson.ts 6.11,
 *  analyse-litteraire-lesson.ts). */
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
  for (const s of sections) if (s.type !== 'quiz' && s.type !== 'task') visit(s);
  for (const d of drills) visit(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-plate', title: 'Juste ne veut pas dire complet', format: 'mcq' as const, coach: 'Une traduction peut être grammaticalement juste et pourtant vide de rythme ou de ton. EN: a translation can be grammatically correct and yet empty of rhythm or tone.', q: 'Traduire mot à mot donne une phrase...', opts: ['fausse', 'juste, mais vide de rythme et d’image'], correct: 1, why: "Juste et complet ne sont pas synonymes. EN: correct and complete are not synonyms.", items: [E(2202), E(2203), E(2210)], audio: AUDIO },
  { id: 'd-ton', title: 'Le ton, avant le mot', format: 'mcq' as const, coach: "Nomme le climat affectif d’une ligne avant de choisir un seul mot anglais. EN: name a line’s emotional climate before choosing a single English word.", q: 'Le ton est...', opts: ['son climat affectif', 'son nombre de syllabes'], correct: 0, why: 'Le rythme, lui, est la respiration du poème. EN: rhythm, meanwhile, is the poem’s breathing.', items: [E(2212), E(2216), E(2238)], audio: AUDIO },
  { id: 'd-motamot', title: 'Mot à mot, ordre étrange', format: 'mcq' as const, coach: "Vérifie toujours l’ordre des mots anglais plutôt que de copier l’ordre français. EN: always check English word order rather than copying the French one.", q: "« Here, there » traduit « deçà, delà » en gardant...", opts: ['le rythme ancien et chantant', 'le sens, mais pas le rythme'], correct: 1, why: "« Hither and thither » garde ce rythme ; « here, there » ne le garde pas. EN: \"hither and thither\" keeps that rhythm; \"here, there\" does not.", items: [E(2234), E(2242), E(2243), E(2244)], audio: AUDIO },
  { id: 'd-bagage', title: 'Compter les bagages', format: 'mcq' as const, coach: "Entre deux traductions plausibles, compte combien de bagages chacune garde réellement. EN: between two plausible translations, count how much luggage each one actually keeps.", q: 'Entre deux traductions plausibles, la meilleure est celle qui...', opts: ['sonne la plus soutenue', 'garde le plus de bagages'], correct: 1, why: 'Le registre ne remplace jamais les bagages gardés. EN: register never replaces the luggage actually kept.', items: [E(2260), E(2261), E(2266)], audio: AUDIO },
  { id: 'd-image', title: "Jamais une image inventée", format: 'mcq' as const, coach: 'Une image absente du poème ne doit jamais être ajoutée, même pour une rime. EN: an image absent from the poem must never be added, even for a rhyme.', q: "« The dead rose », pour une rime, est un exemple de...", opts: ['traduction fidèle', 'image inventée'], correct: 1, why: "Cette rose n’existe nulle part dans le poème. EN: that rose exists nowhere in the poem.", items: [E(2268), E(2269), E(2270)], audio: AUDIO },
  { id: 'd-nommer', title: 'Nommer ce qui reste et ce qui part', format: 'flashcard' as const, coach: "Avant de rendre une traduction, nomme à voix haute ce que tu as gardé et ce que tu as laissé derrière toi. EN: before handing in a translation, name aloud what you kept and what you left behind.", items: [E(2231), E(2272), E(2287), E(2288)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'traduction-plate', description: 'Treats a grammatically correct, word-for-word translation as sufficient, with no attention to rhythm, tone or imagery.', detectOn: ['a1-check', 'a2-check', 'a6-mission'], drill: 'd-plate', retest: 'd-plate' },
  { id: 'ton-neglige', description: "Misses or flattens a line’s emotional tone while technically preserving its literal meaning.", detectOn: ['a2-groupe', 'a2-check', 'a6-mission'], drill: 'd-ton', retest: 'd-ton' },
  { id: 'mot-a-mot', description: 'Produces an English rendering with French word order or a flattened idiom, losing rhythm or naturalness.', detectOn: ['a3-groupe', 'a3-check', 'a6-mission'], drill: 'd-motamot', retest: 'd-motamot' },
  { id: 'bagage-mal-compte', description: 'Picks the less-complete of two plausible translations, judging by register or vocabulary rather than by what is actually kept.', detectOn: ['a4-choisir', 'a4-check', 'a6-mission'], drill: 'd-bagage', retest: 'd-bagage' },
  { id: 'image-inventee', description: 'Invents a new image absent from the French original, usually to force a rhyme or a rhythm.', detectOn: ['a5-errors', 'a5-check', 'a6-mission'], drill: 'd-image', retest: 'd-image' },
  { id: 'traduction-non-nommee', description: 'Hands in a final translation without being able to name what it kept and what it knowingly left behind.', detectOn: ['a6-mission'], drill: 'd-nommer', retest: 'd-nommer' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-bagages', 'Les quatre bagages', ['le ton', 'le rythme', "l’image", 'le sens littéral'], [
    teach('sheet-bagages-teach', 'Une traversée, pas un inventaire',
      "Une traduction pèse quatre bagages : le ton (le climat affectif), le rythme (la respiration du poème), l’image (ce que le lecteur voit) et le sens littéral (ce que les mots disent). Aucune traduction ne porte les quatre à la fois jusqu’à l’autre rive. EN: A translation weighs four things: tone, rhythm, imagery and literal meaning; no translation carries all four across at once."),
    table('sheet-bagages-table', 'Les quatre bagages, en un coup d’œil', ['Bagage', 'Ce qu’il pèse'], [
      ['le ton', 'Le climat affectif : mélancolique, rêveur, ironique.'],
      ['le rythme', 'Les syllabes, les sons répétés, les lignes courtes ou longues.'],
      ["l’image", 'Ce que le lecteur voit ou sent, jamais remplacée par une image absente.'],
      ['le sens littéral', 'Ce que les mots disent, mot pour mot : facile seul, jamais suffisant seul.'],
    ]),
  ]),
  sheet('sheet-ligne-par-ligne', 'Traduire ligne par ligne', ['la méthode', 'des exemples'], [
    teach('sheet-ligne-teach', 'Nommer, puis choisir',
      "Pour chaque ligne : nomme son bagage principal, puis choisis le mot anglais qui le garde, même au prix d’un autre bagage. EN: For each line: name its main piece of luggage, then choose the English word that keeps it, even at the cost of another."),
    table('sheet-ligne-table', 'Trois lignes, deux traductions', ['Littérale (évite-la)', 'Choisie'], [
      ['All suffocating and pale, when the hour strikes,', 'Faint and pale, as the hour chimes,'],
      ['And I go away in the bad wind that carries me off', 'And I drift off on the ill wind that bears me away'],
      ['Here, there,', 'Hither and thither,'],
    ]),
  ]),
  sheet('sheet-traduction', 'Le plan en quatre étapes', ['nommer le ton', 'repérer les images', 'traduire', 'relire'], [
    teach('sheet-traduction-teach', 'Avant, pendant, après',
      "Nomme le ton avant de traduire un seul mot ; repère les images et garde-les sans en inventer ; traduis strophe par strophe, jamais mot à mot ; relis et nomme ce que tu as laissé sur la rive. EN: Name the tone before translating a single word; spot the images and keep them without inventing new ones; translate stanza by stanza, never word for word; reread and name what you left on the shore."),
    table('sheet-traduction-table', 'Le plan en quatre étapes', ['Étape', 'Formule'], [
      ['nommer le ton', 'Le ton de cette strophe est...'],
      ['repérer les images', 'Les images à garder sont...'],
      ['traduire', 'Je traduis strophe par strophe, jamais mot à mot.'],
      ['relire', 'Ce que je laisse sur la rive est..., parce que...'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-07-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-c2-07-poeme1': "Verlaine’s full \"Chanson d’automne\" (act 1), ONE VOICE, one take, read slowly and evenly, letting the short lines and the repeated \"-on\" sound carry the poem’s own melancholy without added drama.",
  'rec-c2-07-bagages': 'The four-bagage cardDeck (act 1), ONE VOICE, one take, a measured, explanatory tone, each card read at the same even pace.',
  'rec-c2-07-poeme2': "Rimbaud’s full \"Sensation\" (act 6), ONE VOICE, one take, read with a warmer, unhurried pace than the Verlaine recording: this poem is dreamy and happy, not melancholic.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 07',
  intro: "At C1 you learned to translate complex ideas by reformulation, keeping everything a prose text does to its reader while changing everything else, and to name a figure of style’s effect. This lesson, flagged optional enrichment, takes on the harder case neither owns: a short poem, where keeping everything is never possible. You read Verlaine’s \"Chanson d’automne\" in full, name the four things a translation weighs (tone, rhythm, imagery, literal meaning), practise line by line, choose between two plausible renderings, catch the word-for-word trap and its reverse, then meet Rimbaud’s \"Sensation\" for the first time and translate it in full, naming what your own translation keeps and what it knowingly leaves behind.",
  grammarAssumed: ['c1.22', 'c1.19'],
  grammarIntroduced: [
    'Naming the four things a poetry translation weighs against each other: tone (the emotional climate), rhythm (the syllable count and repeated sounds), imagery (what the reader sees or feels) and literal meaning (what the words say), and that no translation keeps all four at once',
    "Translating line by line against a poem’s OWN authored examples, choosing an English rendering that keeps more of those four things over one that is merely correct",
    'Choosing between two plausible English translations of the same French line by counting what each one actually keeps, rather than by register or vocabulary alone',
    'The word-for-word trap (a correct but flat rendering that loses rhythm or tone without the translator noticing) AND its reverse (inventing an absent image to force a rhyme or a rhythm)',
    "Producing a full translation of a short poem while explicitly naming what it keeps and what it knowingly sacrifices, rather than presenting any single rendering as the one correct translation",
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au C1, tu as appris à traduire des idées complexes par reformulation, et à nommer l’effet d’une figure de style. Cette leçon, optionnelle, lit un poème de Verlaine en entier, nomme les quatre bagages qu’une traduction pèse (le ton, le rythme, l’image, le sens littéral), s’entraîne ligne par ligne, choisit entre deux traductions plausibles, repère le piège du mot à mot et son inverse, puis te demande de traduire un second poème, de Rimbaud, en entier.",
    minutes: 70,
    difficulty: 5,
    glyph: 'traversée',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: POESIE_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
