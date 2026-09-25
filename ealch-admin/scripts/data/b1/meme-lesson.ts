// b1.24.l1 « Les emplois de même » : the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.20 does.
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
//    1  Le même que toi            7   the map; comme is not as
//    2  Le, la, les mêmes          8   same + noun, and the agreement
//    3  Le même ... que            8   que, the same thing as, aussi (a2.08)
//    4  Le même, tout seul         7   the pronoun: c'est le même, les mêmes
//    5  Moi-même                   8   emphasis, fais-le toi-même, soi-même,
//                                      and the reflexive trap
//    6  Même, c'est even           7   même Paul, même en hiver, même moi
//    7  La place de même           7   il a même ri, il ne m'a même pas
//    8  Avant ou après le nom      7   le même jour / le jour même, ici même
//    9  Quand même                 8   anyway, the reproach, the ONE même si
//                                      pointer (to b1.32)
//   10  En même temps, de même     7   tout de même, à même (recognition)
//   11  Comparer deux choses      11   model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts, 438 estimated screens. Corpus: 180 authored
//   rows in eleven blocks (.1000-.1179) plus 17 reused seed rows, 197 item
//   ids in all, 189 of them released act by act through `deckTranche` (the
//   other 8 are the seed rows with no flashcard drill, listed as
//   NOT_DECK_ABLE). Quiz: 11 rounds of 8 (33 mcq, 27 typeIn, 17 errorSpot,
//   11 listenChoose). Eleven error triggers, eleven drills, five reference
//   sheets reached from 19 missions by `sheetId`, eleven terms. Three
//   tapTables (acts 3, 5, 8). Section mix: 29 groupDrill, 9 cardDeck, 4
//   reading, 4 listening, 3 story, 5 commonErrors, 3 trapDrill, 3
//   dictation. Chapter artwork: `meme-image-prompts.md`, 11 prompts, one
//   per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Même dit que rien ne change, même là. »
//   EN: Même says that nothing changes, even there.
//
//   ONE METAPHOR, THE IDENTICAL PAIR. Même always says that nothing changes:
//   between two things (le même sac), between a person and a stand-in
//   (moi-même: nobody else), between the rule and the case that should have
//   escaped it (même Paul: no exception), between a day and the day already
//   named (le jour même), between an obstacle and the result (quand même).
//   The line uses even-même in its own second half. It is NOT « même =
//   same »: acts 6, 7 and 9 have no « same » in their English.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    le / la / les même(s) + noun and the agreement; le même ... que
//           and la même chose que; le même as a pronoun; moi-même to
//           soi-même and the reflexive contrast; même = even and its place,
//           including ne ... même pas; même before and after the noun (le
//           jour même, ici même, la bonté même); quand même, including the
//           spoken « Quand même ! »; en même temps, de même, tout de même,
//           and à même for recognition. No A1 or A2 lesson introduces any of
//           them (seed grammarIntroduced, measured 2026-09-25).
//   QUOTES  a2.08's reframe (« Pick the middle word and keep the frame »)
//           where le même que meets aussi ... que; a2.33's (« A noun after
//           it means it points. No noun means it replaces ») where le même
//           stands alone; b1.20's French reframe where même slips into ne
//           ... pas. a1.05 is cited for the stressed pronouns.
//   LEAVES  the comparative and superlative to a2.08; celui to a2.33; le
//           mien to a2.34; the pronominal verbs to a2.22; ne ... pas to
//           a1.18; « même si » to b1.32 (named ONCE, on a9-quand, through a
//           seed row, as recognition); register as a topic to b1.25. The
//           subjunctive (b1.14 to b1.16) is in no authored French string.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Hugo's forum post says « vous » to nobody in
//   particular, the café waitress says « vous »). Every learner surface
//   that explains something carries English (`en`, or a final « EN: »),
//   and NO ANSWER ever does. Every `say` is French, spoken fr-FR. Theme
//   `comparaisons`, existing (corpus §A.1). A1 and A2 citations use the
//   English trail label; b1.* ones are French from the plan. Setting:
//   Montréal and Québec City mostly, with Sherbrooke, Laval, Liège and
//   Geneva; characters recur only inside this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. NOBODY OWNS THE STRESSED PRONOUNS. a1.05 names moi, toi, lui, eux on
//      its sheet-stressed as « out of scope until the stressed set gets its
//      own lesson », and no A1 or A2 unit introduces them. Act 5 builds
//      moi-même on them as KNOWN forms (they are everywhere: et toi, avec
//      moi, moi non plus). Is that acceptable, or does A2 need the missing
//      lesson?
//   2. « Même si » is named ONCE (a9-quand, card 4, through the seed row
//      fr.b1.maison.079) and sent to b1.32. It already appears in ten B1
//      lessons. Keep the single pointer, or say nothing at all?
//   3. « Quand même ! » as indignation is taught for RECEPTION and spoken
//      production among friends, and marked as too strong for writing
//      (a9-erreurs, a9-focus). Is that the right B1 step, given b1.25 owns
//      register?
//   4. à même is RECOGNITION only (a card, a listening line, a check). Keep
//      it at that?
//   5. THREE tapTables (acts 3, 5, 8), one per act, six rows each. Confirm.
//   6. Two DB-only twins (corpus DB_ONLY_TWINS: the bare phrases « quand
//      même » and « tout de même »). Dedupe at import or keep both?
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion, QuizRound,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  JUMELLES_TEXT, FORUM_TEXT, DEJAVU_TEXT, OFFRES_TEXT,
  A208_REFRAME, A208_REFRAME_FR, A233_REFRAME, A233_REFRAME_FR, B120_REFRAME,
  PRONOMS_SUJETS_UNIT, NEGATION_UNIT, ACCORD_UNIT, COMPARATIFS_UNIT, PRONOMINAUX_UNIT,
  DEMONSTRATIFS_UNIT, POSSESSIFS_UNIT, PC_AVOIR_UNIT, ORDRE_PRONOMS_UNIT, NEGATION_AVANCEE_UNIT,
  PRONOMS_SUJETS_REF, NEGATION_REF, ACCORD_REF, COMPARATIFS_REF, PRONOMINAUX_REF, DEMONSTRATIFS_REF,
  NEGATION_AVANCEE_REF, REGISTRE_REF, CONCESSION_REF,
} from './meme-corpus.ts';
import { MEME_TERMS } from './meme-terms.ts';

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
  if (!r) throw new Error(`b1.24: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.24: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.24: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
/** A useCases row copied from its row. */
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
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

/** The six-card trapDrill steps, identical in every trap of this lesson. */
const TRAP_STEPS = (rule: string, drillTitle = 'Huit phrases') => [
  { label: 'La règle', kind: 'rule' as const, title: rule },
  { label: 'Six cartes', kind: 'cards' as const, title: 'Ce que la forme fausse raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill' as const, title: drillTitle, gate: true },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: LE MÊME QUE TOI
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner translates « as » with comme. The colleague hears a
 *  remark about shared taste, not an alert, and walks off with the wrong
 *  computer. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const WRONG_COMME = "J'ai le même ordinateur comme toi.";
const WRONG_COMME_RS = '[zhay luh mem or-dee-na-TUHR kom TWA]';

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Deux ordinateurs gris',
  frSub: 'Un lundi matin, boulevard Saint-Laurent',
  setting: { place: 'Un espace de coworking, boulevard Saint-Laurent', city: 'Montréal', time: '9 h 10', ambience: 'une grande table, deux ordinateurs pareils, du café' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un lundi matin, dans un espace de coworking du boulevard Saint-Laurent. Sur la grande table, deux ordinateurs gris, exactement pareils. Ta collègue Élodie arrive, pressée, et prend le tien.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Élodie',
      fr: 'Bon matin. Je prends mon ordinateur et je file en réunion.',
      en: "Morning. I'm grabbing my computer and heading to a meeting.",
      respell: '[bohⁿ ma-TEHⁿ | zhuh prahⁿ mohⁿ-nor-dee-na-TUHR | ay zhuh feel ahⁿ ray-ü-NYOHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: WRONG_COMME,
      en: 'I have the same computer like you.',
      respell: WRONG_COMME_RS,
      stage: 'Tu penses : the same computer as you. Tu as traduit as par comme.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Élodie',
      fr: 'Oui, on a les mêmes goûts, toi et moi. Allez, j’y vais.',
      en: 'Yes, we have the same taste, you and me. Right, I am off.',
      respell: '[wee | ohⁿ-na lay mem GOO | twa ay MWA | a-LAY | zhee VAY]',
      stage: 'Elle a entendu une remarque sur vos goûts. Pas une alerte.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Élodie part avec ton ordinateur. Le sien est toujours sur la table. Ta phrase ressemblait à une remarque sur vos goûts, pas à « attends, c'est le mien ».",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase compare bien les deux ordinateurs ?',
      size: 'lg',
      options: [
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'works', audio: AUDIO },
        { fr: WRONG_COMME, respell: WRONG_COMME_RS, en: 'I have the same computer like you.', outcome: 'breaks', audio: AUDIO },
      ],
      followUp: {
        works: "Élodie s'arrête et regarde les deux ordinateurs. Même modèle, même couleur. Elle repose le tien, et vous collez une étiquette dessus.",
        breaks: "Élodie sourit, répète « comme toi », et part. Tu cours derrière elle jusqu'à l'ascenseur.",
      },
    },
    {
      kind: 'break',
      heading: 'Le même ... que, jamais comme',
      body: "Comme compare deux façons de faire. Après le même, le français compare avec que : le même ordinateur que toi. EN: after le même, French compares with que, never comme.",
      wrong: {
        fr: WRONG_COMME,
        ipa: '/ʒe lə mɛm ɔʁ.di.na.tœʁ kɔm twa/',
        respell: WRONG_COMME_RS,
        en: 'I have the same computer like you.',
      },
      right: {
        fr: fr(E(1000)),
        ipa: ipaOf(E(1000)),
        respell: rsOf(E(1000)),
        en: src(E(1000)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "L'étiquette est collée. Mais même fait bien plus que comparer : il dit aussi myself, even, ce jour-là et anyway. C'est le sujet de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeque', 'pareil'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire que deux choses sont pareilles', s: 'Actes 2 à 4 : le même, les mêmes, le même que, c’est le même' },
    { t: 'Insister et surprendre', s: 'Actes 5 à 7 : moi-même, même Paul, il ne m’a même pas répondu' },
    { t: 'Dire exactement quand, et malgré quoi', s: 'Actes 8 à 10 : le jour même, quand même, en même temps' },
    { t: 'Comparer deux choses par écrit', s: 'Acte 11 : ta comparaison, avec plusieurs même' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: twins, where même does five different jobs. */
const A1_JUMELLES: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-jumelles',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux jumelles',
  frSub: 'Lis, et compte les même',
  text: JUMELLES_TEXT,
  glossary: [
    { word: 'jumelles', en: 'twin sisters', note: 'Deux sœurs nées le même jour, de la même mère.' },
    { word: 'confondaient', en: 'mixed up', note: 'Ils prenaient l’une pour l’autre.' },
    { word: 'infirmière', en: 'nurse', note: 'Elle travaille à l’hôpital, souvent la nuit.' },
    { word: 'entreprise', en: 'company, business', note: 'Zoé l’a créée : c’est la sienne.' },
    { word: 'pareilles', en: 'identical, alike', note: 'Tout à fait semblables.' },
  ],
  questions: [
    { q: "Qu'est-ce que Chloé et Zoé ont de pareil ?", a: 'Le même âge, les mêmes yeux verts, la même voix, la même rue et les mêmes goûts. Ici, même veut dire same.' },
    { q: '« même les professeurs les confondaient » : ici, même veut dire...', a: "even. Même les professeurs se trompaient : on ne l'attendait pas d'eux." },
    { q: "Qui a créé l'entreprise de Zoé ?", a: "Zoé : « elle-même, sans aucune aide ». Elle-même dit : elle, et personne d'autre." },
    { q: 'Quand ont-elles acheté le manteau ?', a: '« le jour même de leur anniversaire » : ce jour-là exactement.' },
    { q: 'Pourquoi « elles l’ont gardé quand même » ?', a: 'Il y avait un obstacle : deux manteaux pareils. Elles l’ont gardé malgré ça.' },
  ],
  audio: REC('rec-b1-24-jumelles'),
  say: REFRAME,
  terms: ['pareil', 'even'],
};

/** BUILD: same, against the four other jobs. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Même, same, et le reste',
  groups: [
    grp('Pareil, pas un autre', [
      it(E(1001), 'une couleur, pas deux'),
      it(E(1003), 'le même, dans une négation'),
      it(E(1011), 'les mêmes, au pluriel'),
      it(E(1014), 'un seul modèle'),
    ], chk(
      'Dans ces quatre phrases, même se trouve...',
      ['entre un article et un nom', 'juste après le verbe'], 0,
      'Le, la, les + même + nom : ici, même veut dire same. EN: article, même, noun: same.')),
    grp('Même fait autre chose', [
      it(E(1004), 'even : on n’attendait pas Paul'),
      it(E(1005), 'myself : sans aide'),
      it(E(1006), 'ce jour-là, exactement'),
      it(E(1007), 'malgré la pluie'),
    ], chk(
      'Dans ces quatre phrases, peux-tu traduire même par same ?',
      ['Oui, toujours.', 'Non, jamais.'], 1,
      'Ici, même dit even, myself, that very, anyway. EN: here même is never same.')),
    ctl('Au café', '« Je prends la même chose. » Que dis-tu au serveur ?',
      ['Je veux autre chose.', 'Je veux ce que l’autre a pris.', 'Je ne veux rien.'], 1,
      'La même chose : rien ne change entre sa commande et la tienne. EN: the same order as the other person.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pareil'],
};

/** NAME, gently: six même with their job beside them. */
const A1_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-exemples',
  layer: 'core',
  sheetId: 'sheet-meme',
  title: 'Six phrases, six même',
  examples: [
    ex('fr.a1.cafe.085', 'au café : la même chose, sans rien changer.'),
    ex('fr.a2.prepositions-essentielles.140', 'la même porte : une seule, pas deux.'),
    ex(E(1009), 'la même idée : deux têtes, une idée.'),
    ex(E(1010), 'le même que moi : on compare avec que.'),
    ex(E(1012), 'le même bureau : un seul endroit.'),
    ex(E(1013), 'même pas : even, dans une négation.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pareil', 'memeque'],
};

/** CHOOSE: where the right même costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le bon même compte',
  cases: [
    uc('Tu récupères ton ordinateur au coworking', E(1000)),
    uc('Tu racontes une réunion où Paul ne vient jamais', E(1004)),
    uc('Tu expliques que tu as fait la réparation sans aide', E(1005)),
    uc('Tu racontes une sortie malgré la pluie', E(1007)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pareil', 'even'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Comparer', '« I have the same computer as you. » Que dis-tu ?',
    [fr(E(1000)), WRONG_COMME], 0,
    'Après le même : que, jamais comme. EN: que, never comme.'),
  ctl('Même Paul', '« Même Paul est venu. » Ici, même veut dire...',
    ['same', 'myself', 'even'], 2,
    "Paul ne vient jamais : même ajoute le cas qu'on n'attendait pas. EN: even."),
  ctl('Le jour même', '« Elle est partie le jour même. » Quand est-elle partie ?',
    ['un autre jour', 'ce jour-là exactement'], 1,
    'Après le nom, même dit : exactement celui-là. EN: that very day.'),
], ['pareil', 'even']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le même que toi',
    opener: {
      line: "Deux ordinateurs pareils, et ta phrase n'alerte personne : ici tu découvres les cinq métiers de même. EN: Two identical computers, and your sentence alerts nobody: here you meet the five jobs of même.",
      imageRef: 'lessons/meme/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais même quand il veut dire same, myself, even, that very ou anyway, et tu dis le même que. EN: You can tell même's five meanings apart, and you say le même que.",
    estScreens: 28, restPoints: ['a1-jumelles'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_JUMELLES, A1_REPERER, A1_EXEMPLES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LE, LA, LES MÊMES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a new neighbour in Limoilou. Story bubbles avoid « ? » and « ! ». */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'La même rue',
  frSub: 'Nadia te présente le quartier',
  setting: "Tu viens d'emménager à Québec, dans le quartier Limoilou. Ta voisine Nadia te fait faire le tour de la rue un samedi matin.",
  bubbles: [
    { from: 'narrator', fr: 'Nadia montre la rue du doigt, fière de son quartier.', en: 'Nadia points down the street, proud of her neighbourhood.' },
    { from: 'coach', fr: 'Ici, tout le monde a les mêmes habitudes. Tu vas voir.', en: 'Round here everyone has the same habits. You will see.' },
    { from: 'user', fr: fr(E(1022)), en: src(E(1022)).en, warn: 'le même : masculin, singulier' },
    { from: 'coach', fr: 'Et la boulangerie du coin, tu y vas le matin, j’imagine.', en: 'And the corner bakery, you go there in the morning, I imagine.' },
    { from: 'user', fr: 'Oui, et j’achète toujours la même baguette.', en: 'Yes, and I always buy the same baguette.', warn: 'la même : féminin, et même ne change pas' },
    { from: 'coach', fr: 'Tu vois. On aime les mêmes endroits, toi et moi.', en: 'You see. We like the same places, you and me.' },
    { from: 'user', fr: fr(E(1023)), en: src(E(1023)).en, warn: 'les mêmes : un s au pluriel' },
    { from: 'narrator', fr: 'Nadia rit. Trois phrases, trois même, et une seule chose change : le nombre.', en: 'Nadia laughs. Three sentences, three même, and only one thing changes: number.' },
  ],
  closing: { fr: 'Le même, la même, les mêmes : même suit le nom qu’il accompagne.', en: 'Le même, la même, les mêmes: même follows the noun it goes with.' },
  audio: REC('rec-b1-24-voisines'),
  say: REFRAME,
  terms: ['accord'],
};

const A2_ACCORD: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-accord',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-meme',
  title: 'Même prend le nombre du nom',
  frSub: 'le même, la même, les mêmes',
  hint: 'Quatre cartes. Regarde la fin de même.',
  audio: REC('rec-b1-24-accord'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    {
      head: 'Au masculin', label: 'le même',
      fr: fr(E(1015)), sub: rsOf(E(1015)),
      body: 'Le même devant un nom masculin singulier. Rien de plus. EN: masculine singular.',
    },
    {
      head: 'Au féminin', label: 'la même',
      fr: fr(E(1016)), sub: rsOf(E(1016)),
      body: "L'article change, même ne change pas : il finit déjà par e. EN: the article changes, même does not.",
    },
    {
      head: 'Au pluriel', label: 'les mêmes',
      fr: fr(E(1017)), sub: rsOf(E(1017)),
      body: 'Un s à mêmes, comme à un adjectif. Devant une voyelle, il se lie en z : les mêmes horaires. EN: plural s, with a z liaison before a vowel.',
    },
    {
      head: 'Comme un adjectif', label: Cap(ACCORD_REF),
      fr: 'le même âge · la même heure',
      sub: '[luh meh-MAZH] · [la meh-MUHR]',
      body: `${Cap(ACCORD_REF)} t'a appris l'accord des adjectifs. Même suit la même règle, et devant une voyelle, il s'enchaîne. EN: même agrees like any adjective.`,
    },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Accorde même',
  groups: [
    grp('Un nom au singulier', [
      it(E(1019), 'la rue : féminin'),
      it(E(1020), "l'âge : masculin"),
      it(E(1026), "l'heure : féminin"),
      it(E(1028), 'le numéro : masculin'),
    ], chk(
      'Même change-t-il entre le même et la même ?',
      ['Non, seul l’article change.', 'Oui, il prend un e.'], 0,
      "Même finit déjà par e : seul l'article change. EN: only the article changes.")),
    grp('Un nom au pluriel', [
      it(E(1018), 'les yeux'),
      it(E(1025), 'les erreurs'),
      it(E(1027), 'les chiffres'),
      it(E(1029), 'les livres'),
    ], chk(
      'Qu’ajoutes-tu à même au pluriel ?',
      ['un e', 'rien', 'un s'], 2,
      'Un s : les mêmes, comme un adjectif. EN: an s.')),
    ctl('La liaison', '« les mêmes erreurs » : entends-tu le s de mêmes ?',
      ['Non, jamais.', 'Oui, comme un z.'], 1,
      'Devant une voyelle, le s se lie en z. EN: a z liaison before a vowel.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-meme',
  title: 'Le nom décide',
  examples: [
    ex(E(1021), 'la robe : la même, sans rien ajouter.'),
    ex(E(1030), 'le prix : le même partout.'),
    ex(E(1031), 'la voix : féminin singulier.'),
    ex('fr.a2.heure-et-date.145', 'le même jour, chaque mois.'),
    ex('fr.a1.famille.173', 'les mêmes vêtements : un s.'),
    ex(E(1002), 'les mêmes chaussures : un s, et pas de liaison.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

/** CHOOSE: the noun, not the subject, decides. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le nom, pas le sujet',
  groups: [
    grp('Ce qui est pareil', [
      it(E(1018), 'les yeux'),
      it(E(1020), "l'âge"),
      it(E(1031), 'la voix'),
      it(E(1023), 'les goûts'),
    ], chk(
      '« Ils ont le même âge. » Qu’est-ce qui est pareil ?',
      ['leur prénom', 'leur âge', 'leur adresse'], 1,
      'Même porte sur le nom qui le suit : âge. EN: même is about the noun after it.')),
    grp('Singulier ou pluriel', [
      it(E(1025), 'plusieurs erreurs'),
      it(E(1027), 'plusieurs chiffres'),
      it(E(1030), 'un seul prix'),
      it(E(1028), 'un seul numéro'),
    ], chk(
      'Tu parles de tes heures de travail. Que dis-tu ?',
      ['les mêmes horaires', 'le même horaires'], 0,
      'Horaires est au pluriel : les mêmes. EN: plural noun, plural même.')),
    ctl('Le sens', '« On se voit à la même heure demain. » Tu viens...',
      ['à une autre heure', "à l'heure d'aujourd'hui"], 1,
      "La même heure : celle d'aujourd'hui, sans changement. EN: same time as today."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'pareil'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre accords ratés',
  errors: [
    {
      wrong: 'Nous avons les même chaussures.',
      right: fr(E(1002)),
      why: "Normal : à l'oral, le s ne s'entend pas. Mais à l'écrit, même prend un s au pluriel. EN: the plural s is silent, but you write it.",
    },
    {
      wrong: 'Elles portent la mêmes robe.',
      right: fr(E(1021)),
      why: "Tu as pensé à elles, au pluriel. Mais même s'accorde avec robe : une robe, la même. EN: même agrees with the noun, not the subject.",
    },
    {
      wrong: 'Tu as même téléphone que moi.',
      right: fr(E(1010)),
      why: "En anglais, the same garde the. En français aussi : le même. Sans article, même devient even. EN: keep the article, or même turns into even.",
    },
    {
      wrong: 'Je prends toujours la même autobus.',
      right: fr(E(1022)),
      why: "Autobus finit par une voyelle et sonne féminin, mais il est masculin : le même autobus. EN: autobus is masculine.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris le même que tu entends',
  frSub: 'Attention au s muet',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le pluriel', '« Ils lisent les ... livres. »',
    ['même', 'mêmes'], 1,
    'Livres est au pluriel : mêmes. EN: plural s.'),
  ctl('Le féminin', '« Mes deux sœurs ont la ... voix. »',
    ['même', 'mêmes'], 0,
    'Une voix : la même, sans s. EN: one voice, no s.'),
  ctl("L'article", '« Tu as ... même téléphone que moi. »',
    ['un', 'le', 'du'], 1,
    'Same garde son article : le même. EN: the same is le même.'),
], ['accord']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le, la, les mêmes',
    opener: {
      line: "Une rue, une boulangerie, des habitudes : ici tu apprends à accorder même avec ce qui est pareil. EN: One street, one bakery, shared habits: here you learn to make même agree with what is the same.",
      imageRef: 'lessons/meme/act02.jpg',
    },
    sections: [],
    milestone: "Tu dis le même, la même, les mêmes, et tu écris le s que l'oreille n'entend pas. EN: You can say le même, la même, les mêmes, and write the s the ear cannot hear.",
    estScreens: 30, restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_ACCORD, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LE MÊME ... QUE
 *
 *  a2.08 owns aussi ... que. It is quoted, never re-taught: aussi goes
 *  before an adjective, le même before a noun.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Pareil, et comparé à quoi',
  frSub: 'Écoute ce qui vient après que',
  lines: [
    ln(E(1032)), ln(E(1033)), ln(E(1036)), ln(E(1037)), ln(E(1043)),
    ln(E(1044)), ln(E(1045)), ln(E(1040)), ln(E(1049)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui est pareil ?', opts: ['la voiture', 'le voisin'], correct: 0, why: 'La même voiture : que présente le voisin, avec qui on compare. EN: the car is the same.' },
    { q: 'Les deux phrases sur la valise : laquelle dit la même taille ?', opts: ['la première', 'la seconde', 'les deux'], correct: 2, why: 'Aussi grande que et la même taille que disent presque la même chose. EN: both.' },
    { q: 'Lui et son frère : qui est le plus grand ?', opts: ['le frère', 'lui', 'personne, ils sont pareils'], correct: 2, why: 'La même taille : aucun des deux. EN: neither.' },
    { q: '« du même avis que toi » : sommes-nous d’accord ?', opts: ['Oui.', 'Non.'], correct: 0, why: 'Le même avis : on pense pareil. EN: we agree.' },
    { q: 'Dernière phrase : que commande-t-elle ?', opts: ['autre chose que moi', 'la même chose que moi'], correct: 1, why: 'La même chose que moi : rien ne change. EN: what I order.' },
  ],
  audio: REC('rec-b1-24-que-ecoute'),
  say: REFRAME,
  terms: ['memeque'],
};

const A3_QUE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-que',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-meme',
  title: 'Même devant, que après',
  frSub: 'le même ... que',
  hint: 'Quatre cartes. Regarde le mot après le nom.',
  audio: REC('rec-b1-24-que'),
  say: REFRAME,
  terms: ['memeque'],
  cards: [
    {
      head: 'Le cadre', label: 'le même ... que',
      fr: fr(E(1032)), sub: rsOf(E(1032)),
      body: "Même va devant le nom, et que présente ce qu'on compare : son voisin. EN: même before the noun, que before what you compare.",
    },
    {
      head: 'Avec chose', label: 'la même chose que',
      fr: fr(E(1033)), sub: rsOf(E(1033)),
      body: 'Chose est féminin : la même chose. Au café, c’est la phrase la plus utile. EN: chose is feminine.',
    },
    {
      head: 'Aussi, pour un adjectif', label: Cap(COMPARATIFS_REF),
      fr: fr(E(1043)), sub: rsOf(E(1043)),
      body: `« ${A208_REFRAME} » En français : « ${A208_REFRAME_FR} » Aussi va devant un adjectif, le même devant un nom. EN: aussi before an adjective, le même before a noun.`,
    },
    {
      head: 'Un adjectif ou un nom', label: 'aussi grand · la même taille',
      fr: 'aussi grand que · la même taille que',
      sub: '[oh-see GRAHⁿ kuh] · [la mem TAHY kuh]',
      body: 'Grand est un adjectif : aussi grand que. Taille est un nom : la même taille que. Le sens est presque le même. EN: same meaning, two frames.',
    },
  ],
};

const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-meme',
  title: 'Un nom ou un adjectif',
  cols: ['Tu compares', 'Avec un nom', 'Avec un adjectif'],
  rows: [
    { cells: ['la taille', 'la même taille que', 'aussi grand que'], say: fr(E(1044)),
      detail: { title: 'La taille', body: 'Taille est un nom, grand est un adjectif. EN: noun or adjective.', say: fr(E(1043)) } },
    { cells: ["l'âge", 'le même âge que', 'aussi vieux que'], say: fr(E(1034)),
      detail: { title: "L'âge", body: 'On dit le même âge que moi bien plus souvent que aussi vieux. EN: le même âge is the natural choice.', say: fr(E(1020)) } },
    { cells: ['le prix', 'le même prix que', 'aussi cher que'], say: fr(E(1030)),
      detail: { title: 'Le prix', body: "Le même prix partout : aucun magasin n'est moins cher. EN: no shop is cheaper.", say: fr(E(1030)) } },
    { cells: ['une personne', 'le même accent que', 'aussi drôle que'], say: fr(E(1040)),
      detail: { title: 'Une personne', body: 'Un trait qui est un nom : le même ... que. Une qualité : aussi ... que. EN: a noun takes le même, a quality takes aussi.', say: fr(E(1040)) } },
    { cells: ['une chose', 'la même chose que', 'pas d’adjectif'], say: fr(E(1033)),
      detail: { title: 'La même chose', body: 'Sans nom précis, la même chose que. EN: the same thing as.', say: fr(E(1042)) } },
    { cells: ['un problème', 'le même problème que', 'aussi grave que'], say: fr(E(1048)),
      detail: { title: 'Un problème', body: "Le même problème que l'an passé : rien n'a été réparé. EN: nothing was fixed.", say: fr(E(1048)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeque'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte le même ... que',
  groups: [
    grp('Le même, un nom, que', [
      it(E(1032), 'que, devant son voisin'),
      it(E(1037), 'que, devant la mienne'),
      it(E(1039), 'la même, devant une voyelle'),
      it(E(1045), 'du même : de + le même'),
    ], chk(
      'Quel mot présente ce que tu compares ?',
      ['comme', 'que', 'aussi'], 1,
      'Que, toujours, après le même. EN: que.')),
    grp('La même chose que', [
      it(E(1033), 'au café'),
      it(E(1047), 'le bloc entier'),
      it('fr.a1.cafe.115', 'elle et lui'),
      it(E(1049), 'toujours pareil'),
    ], chk(
      '« la même chose que lui » : pourquoi lui et pas il ?',
      ['parce qu’après que, on met moi, toi, lui', 'parce que lui est plus poli'], 0,
      `Après que, sans verbe, on prend moi, toi, lui : ${Cap(PRONOMS_SUJETS_REF)} te les a montrés. EN: after que, stressed pronouns.`)),
    ctl('Nom ou adjectif', 'Ton frère et toi mesurez 1,80 m. Que dis-tu ?',
      ["J'ai la même taille que mon frère.", "J'ai aussi grand que mon frère."], 0,
      'Taille est un nom : la même taille que. EN: a noun, so la même.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeque'],
};

const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour the same as',
  cards: [
    { front: 'the same car as her neighbour', back: 'la même voiture que son voisin', say: fr(E(1032)) },
    { front: 'the same thing as you', back: 'la même chose que toi', say: fr(E(1033)) },
    { front: 'the same age as me', back: 'le même âge que moi', say: fr(E(1034)) },
    { front: 'the same size as mine', back: 'la même taille que la mienne', say: fr(E(1037)) },
    { front: 'the same accent as her mother', back: 'le même accent que sa mère', say: fr(E(1040)) },
    { front: 'of the same opinion as you', back: 'du même avis que toi', say: fr(E(1045)) },
    { front: 'it is not the same thing', back: "ce n'est pas la même chose", say: fr(E(1041)) },
    { front: 'same for me', back: "c'est la même chose pour moi", say: fr(E(1042)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeque'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Pareil, ou pas pareil',
  groups: [
    grp('Pareil ou différent', [
      it(E(1041), 'différent'),
      it(E(1042), 'pareil'),
      it('fr.b1.routines.070', 'différent : deux moments de la semaine'),
      it('fr.a2.heure-et-date.256', 'pareil : une seule année'),
    ], chk(
      "« Ce n'est pas la même chose. » Tu dis que les deux choses sont...",
      ['pareilles', 'différentes'], 1,
      'Pas la même : elles sont différentes. EN: not the same.')),
    grp('Que compare deux moments', [
      it(E(1035), 'cette année et l’an dernier'),
      it(E(1048), 'cette année et l’an passé'),
      it(E(1034), 'lui et moi'),
      it(E(1044), 'lui et son frère'),
    ], chk(
      "« Nous avons les mêmes horaires que l'an dernier. » Les horaires ont-ils changé ?",
      ['Non.', 'Oui.'], 0,
      "Les mêmes : rien n'a changé depuis l'an dernier. EN: no change.")),
    ctl('Aussi ou le même', '« Il est ... grand que son frère. »',
      ['le même', 'aussi'], 1,
      'Grand est un adjectif : aussi. EN: an adjective, so aussi.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeque'],
};

/** TRAP, stepped: comme, aussi, the missing article, the subject pronoun. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Que, jamais comme',
  rule: {
    title: 'Que, jamais comme',
    body: "Après le même, on compare avec que. Comme compare deux façons de faire, et aussi va devant un adjectif. Après que, prends moi, toi, lui. EN: le même ... que, never comme or aussi, then a stressed pronoun.",
  },
  cards: [
    { promptLabel: 'comme au lieu de que', promptSound: WRONG_COMME, fr: fr(E(1000)), ipa: ipaOf(E(1000)), tip: 'Que présente ce qu’on compare. EN: que, not comme.' },
    { promptLabel: 'que oublié', promptSound: 'Je suis du même avis toi.', fr: fr(E(1045)), ipa: ipaOf(E(1045)), tip: 'Le même attend son que. EN: le même needs que.' },
    { promptLabel: 'même sans article', promptSound: 'Je veux même chose que toi.', fr: fr(E(1033)), ipa: ipaOf(E(1033)), tip: 'La même chose, avec son article. EN: keep la.' },
    { promptLabel: 'comme après la voiture', promptSound: 'Elle a la même voiture comme son voisin.', fr: fr(E(1032)), ipa: ipaOf(E(1032)), tip: 'Toujours que. EN: que again.' },
    { promptLabel: 'aussi devant un nom', promptSound: 'Ta valise a aussi taille que la mienne.', fr: fr(E(1037)), ipa: ipaOf(E(1037)), tip: 'Taille est un nom : la même taille. EN: a noun takes la même.' },
    { promptLabel: 'je au lieu de moi', promptSound: 'Il a le même âge que je.', fr: fr(E(1034)), ipa: ipaOf(E(1034)), tip: 'Après que, sans verbe : moi. EN: moi, not je.' },
  ],
  drill: [
    { promptSay: "J'ai le même ordinateur ... toi.", opts: ['comme', 'que'], correct: 1 },
    { promptSay: 'Il est ... grand que son frère.', opts: ['aussi', 'le même'], correct: 0 },
    { promptSay: 'Je veux ... chose que toi.', opts: ['même', 'la même', 'aussi'], correct: 1 },
    { promptSay: 'Il a le même âge que ... .', opts: ['moi', 'je'], correct: 0 },
    { promptSay: 'Ta valise a ... taille que la mienne.', opts: ['aussi', 'autant', 'la même'], correct: 2 },
    { promptSay: "On a le même problème ... l'an passé.", opts: ['que', 'comme', 'de'], correct: 0 },
    { promptSay: 'Elle parle avec ... accent que sa mère.', opts: ['aussi', 'le même'], correct: 1 },
    { promptSay: "Nous avons ... horaires que l'an dernier.", opts: ['les mêmes', 'le même', 'la même'], correct: 0 },
  ],
  steps: TRAP_STEPS('Que, jamais comme'),
  audio: REC('rec-b1-24-piege-que'),
  say: REFRAME,
  terms: ['memeque'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('As', '« the same age as me »',
    ['le même âge comme moi', 'le même âge que moi'], 1,
    'Que, et moi. EN: que, then moi.'),
  ctl('Aussi', '« as tall as » : quel mot ?',
    ['aussi', 'le même'], 0,
    'Tall est un adjectif : aussi grand que. EN: aussi.'),
  ctl('La chose', "« I'll have the same thing as her. »",
    ['Je prends même chose qu’elle.', 'Je prends la même que elle.', 'Je prends la même chose qu’elle.'], 2,
    'La même chose que, et que devient qu’ devant elle. EN: la même chose qu’elle.'),
], ['memeque']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le même ... que',
    opener: {
      line: "Ta valise et la mienne ont la même taille : ici tu apprends le mot qui présente ce qu'on compare. EN: Your case and mine are the same size: here you learn the word that introduces what you compare.",
      imageRef: 'lessons/meme/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis le même ... que et la même chose que, et tu sais quand prendre aussi. EN: You can say le même ... que and la même chose que, and you know when aussi is the word.",
    estScreens: 38, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_QUE, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LE MÊME, TOUT SEUL
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_FORUM: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-forum',
  layer: 'core',
  questionsInModal: true,
  title: 'Je cherche le même',
  frSub: 'Un message sur un forum de Liège',
  text: FORUM_TEXT,
  glossary: [
    { word: 'rapporté', en: 'brought back', note: 'Rendu aux objets trouvés.' },
    { word: 'ressemblent', en: 'look like', note: 'Ils sont presque pareils, sans l’être.' },
    { word: 'rachète', en: 'buy (second-hand)', note: 'Acheter un objet que quelqu’un a déjà.' },
    { word: 'volontiers', en: 'gladly', note: 'Avec plaisir.' },
    { word: 'usé', en: 'worn', note: 'Un peu abîmé par le temps.' },
  ],
  questions: [
    { q: 'Que cherche Hugo ?', a: '« le même » : le même manteau. Le nom est déjà dit au début, alors le même le remplace.' },
    { q: '« ce ne sont pas les mêmes » : les mêmes quoi ?', a: 'Les mêmes manteaux. Pluriel, parce que les manteaux trouvés sont plusieurs.' },
    { q: 'Pourquoi « la couleur n’est pas la même » ?', a: 'Couleur est féminin : la même.' },
    { q: '« Même un modèle un peu usé m’intéresse » : ici, même veut dire...', a: 'even. Hugo accepte le cas qu’on n’attendait pas.' },
  ],
  audio: REC('rec-b1-24-forum'),
  say: REFRAME,
  terms: ['pronom'],
};

const A4_PRONOM: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-pronom',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-meme',
  title: 'Le nom est déjà dit',
  frSub: "c'est le même, ce sont les mêmes",
  hint: 'Quatre cartes. Cherche le nom qui manque.',
  audio: REC('rec-b1-24-pronom'),
  say: REFRAME,
  terms: ['pronom'],
  cards: [
    {
      head: 'Sans nom après', label: 'le même',
      fr: fr(E(1050)), sub: rsOf(E(1050)),
      body: 'On a déjà parlé du manteau. Le même le remplace, avec son article. EN: le même replaces a noun already said.',
    },
    {
      head: 'Au pluriel', label: 'les mêmes',
      fr: fr(E(1051)), sub: rsOf(E(1051)),
      body: "Plusieurs choses : les mêmes. Le s ne s'entend pas. EN: plural, silent s.",
    },
    {
      head: 'Comme celui', label: Cap(DEMONSTRATIFS_REF),
      fr: fr(E(1063)), sub: rsOf(E(1063)),
      body: `« ${A233_REFRAME} » En français : « ${A233_REFRAME_FR} » Le même fait pareil. EN: le même replaces too.`,
    },
    {
      head: 'Une personne', label: 'toujours la même',
      fr: fr(E(1060)), sub: rsOf(E(1060)),
      body: "Pour une personne, le même dit qu'elle n'a pas changé. EN: for a person, le même means unchanged.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le même remplace le nom',
  groups: [
    grp('Sans nom après', [
      it(E(1053), 'le même : un sac, en bleu'),
      it(E(1054), 'les mêmes : des chaussures'),
      it(E(1062), 'la même : une tasse'),
      it(E(1057), 'la même que moi'),
    ], chk(
      '« Je voudrais le même, en bleu. » Tu parles d’un sac. Pourquoi le et pas la ?',
      ['parce que sac est masculin', 'parce que le même ne change jamais'], 0,
      "L'article suit le nom remplacé : un sac, le même. EN: the article follows the noun it replaces.")),
    grp('Pareil ou pas', [
      it(E(1052), 'pas la même'),
      it(E(1055), 'les deux sacs'),
      it(E(1059), 'les deux chambres'),
      it('fr.a2.hebergement.082', 'le même problème, encore'),
    ], chk(
      '« Ce sont les mêmes. » Combien de choses compares-tu ?',
      ['une seule', 'au moins deux'], 1,
      'Les mêmes : au moins deux choses pareilles. EN: at least two.')),
    ctl("L'article", '« Tu as un beau stylo. J’ai ... . »',
      ['le même', 'même'], 0,
      'Le même, avec son article. EN: keep the article.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-meme',
  title: 'Le même, sans son nom',
  examples: [
    ex(E(1056), 'les mêmes : des personnes, toujours les mêmes.'),
    ex(E(1061), 'le même : il n’a pas changé.'),
    ex(E(1063), 'celui-ci et l’autre : le même.'),
    ex('fr.a2.hebergement.090', 'le même bruit, deux nuits de suite.'),
    ex(E(1064), 'les mêmes : le pronom au pluriel.'),
    ex(E(1052), 'pas la même : une chose féminine.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Une chose ou une personne',
  groups: [
    grp('Chose ou personne', [
      it(E(1056), 'des personnes'),
      it(E(1060), 'une personne'),
      it(E(1061), 'une personne'),
      it(E(1051), 'des choses'),
    ], chk(
      '« Ce sont toujours les mêmes qui parlent. » Les mêmes, ce sont...',
      ['des personnes', 'des objets', 'des mots'], 0,
      'Qui parlent : des personnes. EN: people.')),
    grp('Masculin ou féminin', [
      it(E(1053), 'un sac'),
      it(E(1062), 'une tasse'),
      it(E(1052), 'une clé'),
      it(E(1050), 'un stylo'),
    ], chk(
      'Tu montres une valise. « Je veux ... . »',
      ['le même', 'la même'], 1,
      'Une valise : la même. EN: feminine noun.')),
    ctl('Le sens', "« Tu n'as pas changé, tu es toujours la même. » C'est...",
      ['un reproche', 'un compliment, en général', 'une question'], 1,
      'Le plus souvent, un compliment : tu es restée comme avant. EN: usually a compliment.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre même sans leur nom',
  errors: [
    {
      wrong: "Tu as un beau manteau. J'ai même.",
      right: "Tu as un beau manteau. J'ai le même.",
      why: "Normal : the same one se dit vite. Mais sans article, même seul ne veut rien dire ici. EN: keep the article: le même.",
    },
    {
      wrong: 'Ce sont les même.',
      right: fr(E(1051)),
      why: "On n'entend pas le s, mais le pluriel l'exige. EN: write the plural s.",
    },
    {
      wrong: 'Un sac ? Je voudrais la même, en bleu.',
      right: 'Un sac ? Je voudrais le même, en bleu.',
      why: "Tu as pensé à une couleur, ou à une chose. Mais le mot remplacé est sac : le même. EN: the article follows the replaced noun.",
    },
    {
      wrong: "Celui-ci, c'est le même comme l'autre.",
      right: fr(E(1063)),
      why: 'Même tout seul, le même compare avec que. EN: still que, never comme.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronom', 'memeque'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le pronom', '« Tu as un beau manteau. J’ai ... . »',
    ['le même', 'même', 'un même'], 0,
    'Le même, avec son article. EN: le même.'),
  ctl('Le pluriel', '« Ce sont les ... . »',
    ['même', 'mêmes'], 1,
    'Plusieurs choses : mêmes. EN: plural s.'),
  ctl('Une personne', '« Il est resté le même. »',
    ["Il n'a pas changé.", 'Il a changé.'], 0,
    'Le même : rien ne change. EN: unchanged.'),
], ['pronom']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le même, tout seul',
    opener: {
      line: "Tu as perdu ton manteau et tu veux le même : ici tu apprends à dire le même sans répéter le nom. EN: You lost your coat and you want the same one: here you learn to say le même without repeating the noun.",
      imageRef: 'lessons/meme/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis c'est le même, ce sont les mêmes, et tu choisis l'article du nom remplacé. EN: You can say c'est le même and ce sont les mêmes, with the article of the noun they replace.",
    estScreens: 28, restPoints: ['a4-exemples'],
  },
  sections: [A4_FORUM, A4_PRONOM, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: MOI-MÊME
 *
 *  Built on the stressed pronouns as KNOWN forms (open question 1). The
 *  trap is the reflexive: « I hurt myself » is je me suis blessé (a2.22).
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'La bibliothèque en kit',
  frSub: 'Mathieu passe voir',
  setting: 'Un samedi, à Laval. Tu as monté une bibliothèque en kit et repeint le salon. Ton ami Mathieu passe voir le résultat.',
  bubbles: [
    { from: 'narrator', fr: 'Mathieu regarde la bibliothèque, bien droite contre le mur.', en: 'Mathieu looks at the bookcase, standing straight against the wall.' },
    { from: 'coach', fr: 'Elle est belle. Tu as payé quelqu’un pour la monter, je suppose.', en: 'It is nice. You paid someone to put it together, I suppose.' },
    { from: 'user', fr: fr(E(1065)), en: src(E(1065)).en, warn: 'moi-même : moi, et personne d’autre' },
    { from: 'coach', fr: 'Et la peinture du salon, c’est le propriétaire qui l’a faite.', en: 'And the living-room paint, the landlord did that.' },
    { from: 'user', fr: 'Non, nous l’avons faite nous-mêmes, avec ma sœur.', en: 'No, we did it ourselves, my sister and I.', warn: 'nous-mêmes : un s, comme nous' },
    { from: 'coach', fr: 'Moi, je paie toujours quelqu’un. Je ne sais rien faire.', en: 'I always pay someone. I cannot do anything.' },
    { from: 'user', fr: 'On apprend vite quand on le fait soi-même.', en: 'You learn fast when you do it yourself.', warn: 'soi-même : avec on' },
    { from: 'narrator', fr: 'Mathieu repart avec une boîte à outils prêtée. Il va essayer lui-même.', en: 'Mathieu leaves with a borrowed toolbox. He is going to try himself.' },
  ],
  closing: { fr: 'Moi-même, nous-mêmes, soi-même : la personne elle-même, sans aide.', en: 'Moi-même, nous-mêmes, soi-même: the person themself, with no help.' },
  audio: REC('rec-b1-24-meuble'),
  say: REFRAME,
  terms: ['soi'],
};

const A5_SOI: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-soi',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-soi',
  title: 'Moi, et personne d’autre',
  frSub: 'moi-même, toi-même, soi-même',
  hint: 'Quatre cartes. Enlève même : la phrase tient-elle encore ?',
  audio: REC('rec-b1-24-soi'),
  say: REFRAME,
  terms: ['soi'],
  cards: [
    {
      head: 'Sans aide', label: 'moi-même',
      fr: fr(E(1065)), sub: rsOf(E(1065)),
      body: "Moi-même insiste : c'est moi, pas un autre. La phrase est complète sans lui. EN: moi-même adds emphasis; the sentence works without it.",
    },
    {
      head: 'Le conseil', label: 'fais-le toi-même',
      fr: fr(E(1066)), sub: rsOf(E(1066)),
      body: "À l'impératif, toi-même dit : ne compte sur personne. Un peu sec, parfois. EN: do it yourself, and sometimes a little curt.",
    },
    {
      head: 'La série', label: Cap(PRONOMS_SUJETS_REF),
      fr: 'moi-même · toi-même · lui-même · elle-même',
      sub: '[mwa-MEM] · [twa-MEM] · [lwee-MEM] · [ehl-MEM]',
      body: `${Cap(PRONOMS_SUJETS_REF)} t'a montré moi, toi, lui, elle. Ajoute un trait d'union et même. Au pluriel : nous-mêmes, eux-mêmes. EN: stressed pronoun, hyphen, même.`,
    },
    {
      head: 'Avec on', label: 'soi-même',
      fr: fr(E(1074)), sub: rsOf(E(1074)),
      body: 'Avec on ou chacun, on dit soi-même. EN: with on, use soi-même.',
    },
  ],
};

const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-soi',
  title: 'Toute la série',
  cols: ['Pronom', 'Forme', 'Exemple'],
  rows: [
    { cells: ['je', 'moi-même', "je l'ai fait moi-même"], say: fr(E(1065)),
      detail: { title: 'moi-même', body: "Moi, et personne d'autre. EN: me, nobody else.", say: fr(E(1080)) } },
    { cells: ['tu', 'toi-même', 'fais-le toi-même'], say: fr(E(1066)),
      detail: { title: 'toi-même', body: "Le conseil, ou l'ordre. EN: advice, or an order.", say: fr(E(1083)) } },
    { cells: ['il, elle', 'lui-même, elle-même', 'elle fait son pain elle-même'], say: fr(E(1068)),
      detail: { title: 'lui-même, elle-même', body: 'Aussi après un nom : le directeur lui-même. EN: also after a noun.', say: fr(E(1078)) } },
    { cells: ['nous', 'nous-mêmes', 'nous avons peint la cuisine nous-mêmes'], say: fr(E(1069)),
      detail: { title: 'nous-mêmes', body: 'Un s, parce que nous est pluriel. EN: plural s.', say: fr(E(1069)) } },
    { cells: ['vous', 'vous-même, vous-mêmes', 'vous pouvez vérifier vous-même'], say: fr(E(1070)),
      detail: { title: 'vous-même', body: "Sans s pour une seule personne, avec s pour plusieurs. EN: no s for one person you call vous.", say: fr(E(1070)) } },
    { cells: ['ils, elles, on', 'eux-mêmes, elles-mêmes, soi-même', 'ils ont tout organisé eux-mêmes'], say: fr(E(1071)),
      detail: { title: 'eux-mêmes, soi-même', body: 'Eux-mêmes au pluriel, soi-même avec on. EN: eux-mêmes; soi-même with on.', say: fr(E(1074)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soi'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le pronom, le trait, même',
  groups: [
    grp('Le pronom et même', [
      it(E(1067), 'lui-même : il'),
      it(E(1068), 'elle-même : elle'),
      it(E(1071), 'eux-mêmes : ils'),
      it(E(1072), 'elles-mêmes : elles'),
    ], chk(
      'Quel pronom vient avant le trait d’union ?',
      ['le pronom sujet : il, ils', 'le pronom tonique : lui, eux'], 1,
      'Lui-même, eux-mêmes : la forme tonique. EN: the stressed form.')),
    grp('Où le mettre', [
      it(E(1065), 'à la fin'),
      it(E(1078), 'après le nom'),
      it(E(1080), 'après c’est'),
      it(E(1082), 'après pas'),
    ], chk(
      '« Je l’ai fait moi-même. » Peux-tu enlever moi-même ?',
      ['Oui, la phrase reste juste.', 'Non, elle devient fausse.'], 0,
      "Moi-même ajoute l'insistance. Sans lui, la phrase est complète. EN: it is emphasis only.")),
    ctl('Le pluriel', '« Nous avons peint la cuisine ... . »',
      ['nous-même', 'nous-mêmes'], 1,
      'Nous est pluriel : nous-mêmes. EN: plural s.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soi'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Me, ou moi-même',
  groups: [
    grp('Le verbe pronominal ou l’insistance', [
      it(E(1076), 'pronominal : me'),
      it(E(1077), 'pronominal, et insistance'),
      it(E(1065), 'insistance seule'),
      it('fr.a2.rp-etiquette.002', 'au téléphone : c’est moi'),
    ], chk(
      '« I cut myself. » Que dis-tu ?',
      ['Je me suis coupé.', "J'ai coupé moi-même."], 0,
      `Le verbe pronominal dit déjà myself : ${Cap(PRONOMINAUX_REF)}. EN: the reflexive already says myself.`)),
    grp('Sans aide', [
      it(E(1069), 'nous, sans peintre'),
      it(E(1070), 'vous, sans demander'),
      it(E(1079), 'toi, sans passer par moi'),
      it(E(1083), 'toi, sans me croire'),
    ], chk(
      '« Vérifie toi-même. » Que veux-tu dire ?',
      ['Je vais vérifier pour toi.', 'Ne me crois pas sur parole : regarde.'], 1,
      'Toi-même : toi, pas moi à ta place. EN: see for yourself.')),
    ctl('Au téléphone', "On t'appelle : « Je voudrais parler à Nadia Roy. » C'est toi. Que dis-tu ?",
      ["C'est moi-même.", "C'est lui-même.", "C'est même moi."], 0,
      "C'est moi-même : la personne demandée, en personne. EN: speaking."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soi'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Me d’abord, moi-même en plus',
  rule: {
    title: 'Me d’abord, moi-même en plus',
    body: "Pour I hurt myself, le français a le verbe pronominal : je me suis blessé. Moi-même n'y remplace rien : il ajoute sans aide ou en personne. Et il garde son trait d'union. EN: the reflexive does myself; moi-même only adds emphasis.",
  },
  cards: [
    { promptLabel: 'moi-même au lieu de me', promptSound: "J'ai coupé moi-même.", fr: fr(E(1076)), ipa: ipaOf(E(1076)), tip: 'Se couper est pronominal : je me suis coupé. EN: reflexive verb.' },
    { promptLabel: 'le sujet au lieu du tonique', promptSound: 'Il a construit sa maison il-même.', fr: fr(E(1067)), ipa: ipaOf(E(1067)), tip: 'Lui-même, jamais il-même. EN: lui-même.' },
    { promptLabel: 'nous-mêmes sans s', promptSound: 'Nous avons peint la cuisine nous-même.', fr: fr(E(1069)), ipa: ipaOf(E(1069)), tip: 'Nous est pluriel : nous-mêmes. EN: plural s.' },
    { promptLabel: 'moi-même avec on', promptSound: 'On doit parfois se défendre moi-même.', fr: fr(E(1074)), ipa: ipaOf(E(1074)), tip: 'Avec on : soi-même. EN: on takes soi-même.' },
    { promptLabel: 'ils au lieu de eux', promptSound: 'Ils ont tout organisé ils-mêmes.', fr: fr(E(1071)), ipa: ipaOf(E(1071)), tip: 'Eux-mêmes : la forme tonique. EN: eux-mêmes.' },
    { promptLabel: 'tu au lieu de toi', promptSound: 'Fais-le tu-même.', fr: fr(E(1066)), ipa: ipaOf(E(1066)), tip: 'Toi-même, toujours. EN: toi-même.' },
  ],
  drill: [
    { promptSay: 'I cut myself : Je ... suis coupé.', opts: ['moi-même', 'me'], correct: 1 },
    { promptSay: 'Il a construit sa maison ... .', opts: ['lui-même', 'il-même', 'soi-même'], correct: 0 },
    { promptSay: 'Nous avons peint la cuisine ... .', opts: ['nous-même', 'nous-mêmes'], correct: 1 },
    { promptSay: 'On doit parfois se défendre ... .', opts: ['moi-même', 'lui-même', 'soi-même'], correct: 2 },
    { promptSay: 'Fais-le ... .', opts: ['toi-même', 'tu-même'], correct: 0 },
    { promptSay: 'Ils ont tout organisé ... .', opts: ['ils-mêmes', 'eux-mêmes', 'leur-même'], correct: 1 },
    { promptSay: "C'est le directeur ... qui m'a appelé.", opts: ['lui-même', 'même'], correct: 0 },
    { promptSay: 'Elle fait son pain ... .', opts: ['soi-même', 'elle-même'], correct: 1 },
  ],
  steps: TRAP_STEPS('Me d’abord, moi-même en plus'),
  audio: REC('rec-b1-24-piege-soi'),
  say: REFRAME,
  terms: ['soi'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris le pronom et son trait d’union',
  frSub: 'moi-même, nous-mêmes',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['soi'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le réfléchi', '« She hurt herself. »',
    ['Elle a blessé elle-même.', "Elle s'est blessée."], 1,
    'Le verbe pronominal suffit. EN: the reflexive.'),
  ctl('Avec on', '« On apprend mieux quand on le fait ... . »',
    ['soi-même', 'moi-même', 'lui-même'], 0,
    'Avec on : soi-même. EN: soi-même.'),
  ctl('Le pluriel', '« Ils ont réglé ça ... . »',
    ['eux-même', 'eux-mêmes'], 1,
    'Eux est pluriel : eux-mêmes. EN: plural s.'),
], ['soi']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Moi-même',
    opener: {
      line: "Tu as monté la bibliothèque sans aide, et tu veux le dire : ici tu apprends moi-même, toi-même et soi-même. EN: You built the bookcase with no help and want to say so: here you learn moi-même, toi-même and soi-même.",
      imageRef: 'lessons/meme/act05.jpg',
    },
    sections: [],
    milestone: "Tu insistes avec moi-même ou nous-mêmes, et tu gardes me pour je me suis coupé. EN: You can insist with moi-même or nous-mêmes, and keep me for je me suis coupé.",
    estScreens: 36, restPoints: ['a5-tableau', 'a5-choisir'],
  },
  sections: [A5_HISTOIRE, A5_SOI, A5_TABLEAU, A5_CONSTRUIRE, A5_CHOISIR, A5_PIEGE, A5_DICTEE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: MÊME, C'EST EVEN
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le cas qui surprend',
  frSub: 'Écoute ce qui vient après même',
  lines: [
    ln(E(1084)), ln(E(1085)), ln(E(1086)), ln(E(1088)), ln(E(1089)),
    ln(E(1092)), ln(E(1094)), ln(E(1096)), ln(E(1098)),
  ],
  questions: [
    { q: 'Deuxième phrase : qui est venu ?', opts: ['toute la famille, et même mon oncle', 'seulement mon oncle'], correct: 0, why: 'Même mon oncle : lui aussi, en plus des autres. EN: everyone, uncle included.' },
    { q: 'Troisième phrase : quel jour surprend ?', opts: ['le lundi', 'le dimanche', 'le samedi'], correct: 1, why: 'Même le dimanche : le jour où on ne travaille pas. EN: Sunday.' },
    { q: 'Les enfants ont-ils compris ?', opts: ['Non', 'Oui, et on ne s’y attendait pas'], correct: 1, why: 'Même les enfants : eux aussi. EN: yes, surprisingly.' },
    { q: 'Fait-il du vélo en hiver ?', opts: ['Non, jamais.', 'Seulement en été.', 'Oui, même en hiver.'], correct: 2, why: 'Même en hiver : la saison la plus dure. EN: even in winter.' },
    { q: 'Le voisin a-t-il prêté sa voiture ?', opts: ['Oui', 'Non'], correct: 0, why: 'Il a même prêté : le geste surprend. EN: yes.' },
  ],
  audio: REC('rec-b1-24-even-ecoute'),
  say: REFRAME,
  terms: ['even'],
};

const A6_MEME: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-meme',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adverbe',
  title: 'Même ajoute le cas surprenant',
  frSub: 'même = even',
  hint: 'Quatre cartes. Cherche ce qui surprend.',
  audio: REC('rec-b1-24-even'),
  say: REFRAME,
  terms: ['even'],
  cards: [
    {
      head: 'Le cas qu’on n’attendait pas', label: 'même + nom',
      fr: fr(E(1004)), sub: rsOf(E(1004)),
      body: 'Paul ne vient jamais. Ce matin, tout le monde est venu, et Paul aussi. Même ajoute le cas le plus surprenant. EN: même adds the least expected case.',
    },
    {
      head: 'Avec un moment', label: 'même + complément',
      fr: fr(E(1086)), sub: rsOf(E(1086)),
      body: 'Il travaille la semaine, et le dimanche aussi. Même se met devant ce qui surprend. EN: before the surprising time or place.',
    },
    {
      head: 'Avec un pronom', label: 'même moi',
      fr: fr(E(1089)), sub: rsOf(E(1089)),
      body: 'Devant un pronom, prends la forme tonique : même moi, même toi, même lui. EN: use the stressed pronoun.',
    },
    {
      head: 'En fin de liste', label: 'et même',
      fr: fr(E(1087)), sub: rsOf(E(1087)),
      body: 'Et même ajoute un dernier élément, le plus fort. EN: and even, at the end of a list.',
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Même devant la surprise',
  groups: [
    grp('Même + nom ou pronom', [
      it(E(1084), 'le chat'),
      it(E(1088), 'les enfants'),
      it(E(1098), 'le patron'),
      it(E(1089), 'moi, forme tonique'),
    ], chk(
      '« Même le chat a peur. » Qui d’autre a peur ?',
      ['personne', 'tout le monde, et le chat en plus'], 1,
      'Même ajoute le chat à tous les autres. EN: the cat too.')),
    grp('Même + moment ou lieu', [
      it(E(1092), 'en hiver'),
      it(E(1093), 'à Montréal'),
      it(E(1094), 'après la fermeture'),
      it(E(1095), 'le soir'),
    ], chk(
      'Où va même dans « Même en hiver, il fait du vélo » ?',
      ['devant le complément qui surprend', 'à la fin de la phrase', 'après le verbe'], 0,
      'Juste devant en hiver. EN: right before the surprise.')),
    ctl('Le pronom', '« ... , je sais faire ça. » (even I)',
      ['Même je', 'Même moi'], 1,
      'Même moi : la forme tonique. EN: même moi.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['even'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-adverbe',
  title: 'Six fois even',
  examples: [
    ex(E(1085), 'même mon oncle : le dernier de la liste.'),
    ex(E(1091), 'on a même eu : même dans un temps composé.'),
    ex(E(1096), 'm’a même prêté : le geste surprend.'),
    ex('fr.b1.conflits-reconciliation.006', 'même quand : devant une phrase entière.'),
    ex('fr.b1.entraide.002', 'même dans : les pires moments aussi.'),
    ex(E(1097), 'et même : le dernier élément, le plus fort.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['even'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Same ou even',
  groups: [
    grp('Same ou even', [
      it(E(1004), 'even'),
      it(E(1012), 'same'),
      it(E(1086), 'even'),
      it(E(1030), 'same'),
    ], chk(
      "« Même le patron était d'accord. » Même veut dire...",
      ['even', 'same'], 0,
      "Même devant l'article : even. EN: before the article, even.")),
    grp('Ce qui surprend', [
      it(E(1087), "l'arabe"),
      it(E(1093), 'le froid à Montréal'),
      it(E(1095), 'les messages du soir'),
      it(E(1096), 'la voiture'),
    ], chk(
      "« Elle parle trois langues, et même un peu d'arabe. » Qu'est-ce qui surprend ?",
      ["l'arabe", 'les trois langues', 'rien'], 0,
      "Et même : le dernier élément, l'arabe. EN: the Arabic.")),
    ctl('Avec ou sans article', '« le même patron » ou « même le patron » : laquelle dit even ?',
      ['le même patron', 'même le patron'], 1,
      "Même devant l'article : even. Entre l'article et le nom : same. EN: même before the article means even."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['even', 'pareil'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre façons de rater even',
  errors: [
    {
      wrong: 'Aussi Paul est venu ce matin.',
      right: fr(E(1004)),
      why: "Normal : even et also se ressemblent. Mais aussi en tête de phrase ne dit pas la surprise. EN: aussi does not mean even.",
    },
    {
      wrong: 'Même je sais faire ça.',
      right: fr(E(1089)),
      why: 'Devant même, le pronom prend sa forme tonique : même moi, puis je. EN: même moi, not même je.',
    },
    {
      wrong: 'Le même Paul est venu ce matin.',
      right: fr(E(1004)),
      why: "Avec l'article, le même veut dire same : le Paul d'hier. Pour even, pas d'article. EN: le même means same.",
    },
    {
      wrong: "Même le chat a peur de l'orage aussi.",
      right: fr(E(1084)),
      why: 'Même contient déjà aussi : ajouter aussi, c’est le dire deux fois. EN: même already includes also.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['even'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le sens', '« Même Paul est venu. »',
    ['Paul est venu lui aussi, contre toute attente.', 'Paul est venu le même jour.'], 0,
    'Même : la surprise. EN: even Paul.'),
  ctl('Le pronom', '« even you »',
    ['même tu', 'même toi'], 1,
    'Même toi. EN: stressed pronoun.'),
  ctl('Sans article', '« même le patron » veut dire...',
    ['even the boss', 'the same boss'], 0,
    "Même devant l'article : even. EN: even."),
], ['even']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Même, c’est even',
    opener: {
      line: "Tout le monde est venu, et même Paul : ici tu apprends le même qui ajoute le cas qu'on n'attendait pas. EN: Everyone came, even Paul: here you learn the même that adds the case nobody expected.",
      imageRef: 'lessons/meme/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis même Paul, même en hiver, même moi, et tu ne le confonds plus avec le même. EN: You can say même Paul, même en hiver, même moi, and never mix it up with le même.",
    estScreens: 30, restPoints: ['a6-construire'],
  },
  sections: [A6_ECOUTE, A6_MEME, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LA PLACE DE MÊME
 *
 *  ne ... pas is a1.18's; the compound-tense slot is b1.20's (quoted).
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le nouveau collègue',
  frSub: 'Une première journée à Genève',
  setting: "Au bureau, à Genève, un lundi soir. Ta collègue Nadia raconte la première journée du nouveau, qui l'a beaucoup surprise.",
  bubbles: [
    { from: 'narrator', fr: 'Nadia pose son café et soupire.', en: 'Nadia puts down her coffee and sighs.' },
    { from: 'coach', fr: fr(E(1099)), en: src(E(1099)).en, warn: 'même pas : le geste attendu manque' },
    { from: 'user', fr: 'Il était peut-être timide.', en: 'Maybe he was shy.' },
    { from: 'coach', fr: fr(E(1111)), en: src(E(1111)).en, warn: 'même pas, entre a et regardé' },
    { from: 'user', fr: 'Et à la réunion, il a parlé.', en: 'And in the meeting, he spoke.' },
    { from: 'coach', fr: 'Oui, et il a même fait rire le directeur.', en: 'Yes, and he even made the director laugh.', warn: 'a même fait : entre a et fait' },
    { from: 'user', fr: 'Alors il n’est pas si froid.', en: 'So he is not that cold.' },
    { from: 'narrator', fr: 'Nadia réfléchit. Chaque fois, même se trouvait juste avant ce qui la surprenait.', en: 'Nadia thinks. Each time, même sat right before what surprised her.' },
  ],
  closing: { fr: 'Il n’a même pas regardé, il a même fait rire : même va juste avant ce qui surprend.', en: 'He did not even look, he even made people laugh: même goes right before the surprise.' },
  audio: REC('rec-b1-24-collegue'),
  say: REFRAME,
  terms: ['place'],
};

const A7_PLACE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-place',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adverbe',
  title: 'Même devant ce qu’il vise',
  frSub: 'la place de même',
  hint: 'Quatre cartes. Déplace même, et le sens change.',
  audio: REC('rec-b1-24-place'),
  say: REFRAME,
  terms: ['place'],
  cards: [
    {
      head: 'Qui surprend, ou quoi', label: 'deux places',
      fr: `${fr(E(1104))} · ${fr(E(1105))}`,
      sub: `${rsOf(E(1104))} · ${rsOf(E(1105))}`,
      body: "Dans la première, c'est mon père qui surprend. Dans la seconde, c'est le rire. EN: même goes before what surprises.",
    },
    {
      head: 'Au passé composé', label: Cap(NEGATION_AVANCEE_REF),
      fr: fr(E(1102)), sub: rsOf(E(1102)),
      body: `${Cap(NEGATION_AVANCEE_REF)} disait : « ${B120_REFRAME} » Pour les mots courts, la place est entre l'auxiliaire et le participe. Même y va aussi. EN: between the auxiliary and the participle.`,
    },
    {
      head: 'Not even', label: 'ne ... même pas',
      fr: fr(E(1099)), sub: rsOf(E(1099)),
      body: `${Cap(NEGATION_REF)} t'a donné ne ... pas. Même se glisse juste avant pas. EN: même slips in right before pas.`,
    },
    {
      head: 'Avec un infinitif', label: 'peut même y aller',
      fr: fr(E(1113)), sub: rsOf(E(1113)),
      body: 'Avec un verbe et un infinitif, même suit le verbe conjugué. EN: right after the conjugated verb.',
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mets même à sa place',
  groups: [
    grp('Ne ... même pas', [
      it(E(1100), 'au passé composé'),
      it(E(1101), 'au présent'),
      it(E(1107), 'avec un pronom'),
      it(E(1114), 'avec en'),
    ], chk(
      'Où va même dans ne ... pas ?',
      ['avant ne', 'après pas', 'juste avant pas'], 2,
      'Ne ... même pas : même juste avant pas. EN: right before pas.')),
    grp('Entre l’auxiliaire et le participe', [
      it(E(1102), 'a même pleuré'),
      it(E(1103), 'avons même dansé'),
      it(E(1110), 'a même appelé'),
      it(E(1091), 'a même eu'),
    ], chk(
      '« Il a même pleuré. » Où est même ?',
      ['entre a et pleuré', 'après le participe'], 0,
      "Entre l'auxiliaire et le participe, comme pas. EN: between a and pleuré.")),
    ctl('Le sujet', '« Even you are late. »',
      ['Toi, tu es même en retard.', 'Même toi, tu es en retard.'], 1,
      'Même devant ce qui surprend : toi. EN: même before toi.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces pour placer même',
  hacks: [
    { hack: 'Cherche le mot qui surprend, et mets même juste devant.', why: 'Même mon père : le père surprend. A même ri : le rire surprend. EN: même points at the surprise.' },
    { hack: 'Au passé composé, mets même là où tu mettrais pas.', why: "Il n'a pas ri, il a même ri : la même place. EN: même takes pas's slot." },
    { hack: 'Dans ne ... même pas, dis même pas comme un seul bloc.', why: "Il ne m'a même pas dit bonjour : même pas se dit d'un seul souffle. EN: say même pas as one block." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le sens bouge avec même',
  groups: [
    grp('Qui ou quoi surprend', [
      it(E(1104), 'le père'),
      it(E(1105), 'le rire'),
      it(E(1112), 'toi'),
      it(E(1113), 'aller à pied'),
    ], chk(
      "« Mon père a même ri. » Qu'est-ce qui surprend ?",
      ['mon père, parmi les autres', 'le rire, parmi ses réactions'], 1,
      'Même devant ri : le rire. EN: the laugh.')),
    grp('Le geste qui manque', [
      it(E(1099), 'bonjour'),
      it(E(1108), 'un essai'),
      it(E(1109), 'une conversation'),
      it(E(1111), 'le menu'),
    ], chk(
      "« Tu n'as même pas essayé. » C'est...",
      ['un reproche', 'un compliment'], 0,
      "Même pas : le minimum n'a pas été fait. EN: a reproach."),
    ),
    ctl('Le choix', 'Tout le monde a ri, ton père aussi, et il ne rit jamais. Que dis-tu ?',
      ['Mon père a même ri.', 'Même mon père a ri.'], 1,
      'Le père surprend : même mon père. EN: even my father.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Même à la mauvaise place',
  rule: {
    title: 'Même devant ce qu’il vise',
    body: "Au passé composé, même va entre l'auxiliaire et le participe. Dans une négation, il va juste avant pas. Devant un pronom, prends moi, toi, lui. EN: between auxiliary and participle; right before pas; stressed pronouns.",
  },
  cards: [
    { promptLabel: 'même pas après le participe', promptSound: "Il ne m'a dit même pas bonjour.", fr: fr(E(1099)), ipa: ipaOf(E(1099)), tip: 'Même pas reste avant le participe, comme pas seul. EN: before the participle.' },
    { promptLabel: 'même à la fin', promptSound: 'Il a pleuré même.', fr: fr(E(1102)), ipa: ipaOf(E(1102)), tip: 'Même entre a et pleuré. EN: between a and pleuré.' },
    { promptLabel: 'même après le participe', promptSound: 'Nous avons dansé même.', fr: fr(E(1103)), ipa: ipaOf(E(1103)), tip: 'Avons même dansé. EN: before the participle.' },
    { promptLabel: 'même tu', promptSound: 'Même tu, tu es en retard.', fr: fr(E(1112)), ipa: ipaOf(E(1112)), tip: 'Même toi. EN: stressed pronoun.' },
    { promptLabel: 'même avant ne', promptSound: "Je même n'ai pas eu le temps de manger.", fr: fr(E(1100)), ipa: ipaOf(E(1100)), tip: 'Ne, puis même pas. EN: ne first.' },
    { promptLabel: 'ne coupé de pas', promptSound: 'Il veut ne même pas en parler.', fr: fr(E(1109)), ipa: ipaOf(E(1109)), tip: 'Ne va devant veut, même pas après. EN: ne before the conjugated verb.' },
  ],
  drill: [
    { promptSay: 'Il a ... pleuré.', opts: ['pas même', 'même'], correct: 1 },
    { promptSay: "Je n'ai ... eu le temps de manger.", opts: ['même pas', 'même'], correct: 0 },
    { promptSay: '... toi, tu es en retard.', opts: ['Le même', 'Même'], correct: 1 },
    { promptSay: 'Nous avons ... dansé.', opts: ['même', 'le même'], correct: 0 },
    { promptSay: "Tu n'as ... essayé.", opts: ['pas même rien', 'même pas'], correct: 1 },
    { promptSay: 'On peut ... y aller à pied.', opts: ['le même', 'même'], correct: 1 },
    { promptSay: '... mon père a ri.', opts: ['Même', 'Le même'], correct: 0 },
    { promptSay: 'Elle ne sait ... où il habite.', opts: ['même', 'même pas'], correct: 1 },
  ],
  steps: TRAP_STEPS('Même devant ce qu’il vise'),
  audio: REC('rec-b1-24-piege-place'),
  say: REFRAME,
  terms: ['place'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Au passé composé', '« He even cried. »',
    ['Il a pleuré même.', 'Il a même pleuré.'], 1,
    'Entre a et pleuré. EN: il a même pleuré.'),
  ctl('Not even', "« She didn't even look at me. »",
    ["Elle ne m'a même pas regardé.", "Elle ne m'a pas regardé même."], 0,
    'Ne ... même pas. EN: même before pas.'),
  ctl('Le sujet', '« Even my father laughed. »',
    ['Mon père a ri même.', 'Même mon père a ri.', 'Le même père a ri.'], 1,
    'Même devant mon père. EN: même mon père.'),
], ['place']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La place de même',
    opener: {
      line: "Il ne t'a même pas dit bonjour, puis il a même fait rire tout le monde : ici tu apprends où mettre même. EN: He did not even say hello, then he even made everyone laugh: here you learn where même goes.",
      imageRef: 'lessons/meme/act07.jpg',
    },
    sections: [],
    milestone: "Tu places même devant ce qui surprend, au passé composé et dans ne ... même pas. EN: You can put même before the surprise, in the passé composé and in ne ... même pas.",
    estScreens: 30, restPoints: ['a7-hacks'],
  },
  sections: [A7_HISTOIRE, A7_PLACE, A7_CONSTRUIRE, A7_HACKS, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: AVANT OU APRÈS LE NOM
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_DEJAVU: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-dejavu',
  layer: 'core',
  questionsInModal: true,
  title: 'Un déjà-vu à Liège',
  frSub: 'Lis, et regarde où est même',
  text: DEJAVU_TEXT,
  glossary: [
    { word: 'serveuse', en: 'waitress', note: 'Elle apporte les boissons au café.' },
    { word: 'déjà-vu', en: 'déjà vu', note: 'L’impression d’avoir déjà vécu un moment.' },
    { word: 'la veille', en: 'the day before', note: 'Le jour d’avant.' },
    { word: 'ticket', en: 'receipt', note: 'Le petit papier de la caisse.' },
    { word: 'me joue des tours', en: 'is playing tricks on me', note: 'Ma mémoire me trompe.' },
  ],
  questions: [
    { q: 'Qu’est-ce qui est pareil dans le café ?', a: 'La même serveuse, la même table, la même chanson : même devant le nom, pour dire pareil.' },
    { q: '« ici même » : où était-il assis ?', a: 'À cette table exactement. Après ici, même insiste : ici, pas ailleurs.' },
    { q: 'Quand a-t-il raconté l’histoire à sa sœur ?', a: '« Le soir même » : le soir de ce mardi, pas un autre.' },
    { q: '« Je ne me souvenais même pas d’être venu » : qu’est-ce que ça dit ?', a: 'Il avait tout oublié. Même pas renforce la négation.' },
    { q: '« Le café lui-même n’a rien de spécial » : de quoi parle-t-on ?', a: 'Du café, le lieu, et de rien d’autre.' },
  ],
  audio: REC('rec-b1-24-dejavu'),
  say: REFRAME,
  terms: ['apres', 'pareil'],
};

const A8_PLACE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-place',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-place',
  title: 'Devant : pareil. Après : exactement.',
  frSub: 'le même jour, le jour même',
  hint: 'Quatre cartes. Regarde de quel côté du nom est même.',
  audio: REC('rec-b1-24-avant-apres'),
  say: REFRAME,
  terms: ['apres'],
  cards: [
    {
      head: 'Devant le nom : pareil', label: 'le même jour',
      fr: fr(E(1117)), sub: rsOf(E(1117)),
      body: 'Deux arrivées tombent sur un jour identique. Devant le nom, même compare. EN: before the noun, même compares.',
    },
    {
      head: 'Après le nom : exactement', label: 'le jour même',
      fr: fr(E(1116)), sub: rsOf(E(1116)),
      body: 'Un seul jour, déjà nommé : ce jour-là, pas un autre. Après le nom, même insiste. EN: after the noun, that very day.',
    },
    {
      head: 'Après un lieu ou un moment', label: 'ici même',
      fr: 'ici même · aujourd’hui même',
      sub: '[ee-see MEM] · [oh-zhoor-dwee MEM]',
      body: "Même après ici ou aujourd'hui : exactement ici, sans attendre. EN: right here, this very day.",
    },
    {
      head: 'Après une qualité', label: 'la bonté même',
      fr: fr(E(1118)), sub: rsOf(E(1118)),
      body: "La bonté même : la bonté en personne. On le lit plus qu'on ne le dit. EN: kindness itself; more written than said.",
    },
  ],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-place',
  title: 'Six paires, deux sens',
  cols: ['Avant le nom', 'Après le nom', 'La différence'],
  rows: [
    { cells: ['le même jour', 'le jour même', 'pareil / ce jour-là'], say: fr(E(1117)),
      detail: { title: 'Le jour', body: 'Le même jour compare deux choses. Le jour même désigne un jour déjà nommé. EN: same day, or that very day.', say: fr(E(1116)) } },
    { cells: ['le même soir', 'le soir même', 'pareil / ce soir-là'], say: fr(E(1126)),
      detail: { title: 'Le soir', body: 'Le soir même : sans attendre le lendemain. EN: without waiting till the next day.', say: fr(E(1121)) } },
    { cells: ['la même ville', 'la ville même', 'pareille / le centre'], say: fr(E(1122)),
      detail: { title: 'La ville', body: 'La ville même : dans la ville, pas en banlieue. EN: the town itself.', say: fr(E(1123)) } },
    { cells: ['les mêmes mots', 'les mots mêmes', 'pareils / ces mots exacts'], say: fr(E(1127)),
      detail: { title: 'Les mots', body: 'Les mots mêmes : cités exactement. Très écrit. EN: the very words; formal.', say: fr(E(1127)) } },
    { cells: ['le même médecin', 'le médecin lui-même', 'pareil / en personne'], say: fr(E(1129)),
      detail: { title: 'Le médecin', body: 'Pour une personne, on dit plutôt lui-même : le médecin lui-même. EN: for a person, use lui-même.', say: fr(E(1130)) } },
    { cells: ['la même époque', "à l'époque même", 'pareille / ce moment-là'], say: fr('fr.b1.heure-et-date.039'),
      detail: { title: "L'époque", body: "À la même époque : un an avant, au même moment de l'année. EN: at the same time of year.", say: fr('fr.b1.heure-et-date.039') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Même de chaque côté du nom',
  groups: [
    grp('Après le nom', [
      it(E(1116), 'le jour même'),
      it(E(1121), 'le soir même'),
      it(E(1123), 'la ville même'),
      it(E(1125), 'la patience même'),
    ], chk(
      'Dans ces phrases, même est...',
      ['devant le nom', 'après le nom'], 1,
      'Après le nom : exactement celui-là. EN: after the noun.')),
    grp('Devant le nom', [
      it(E(1117), 'le même jour que moi'),
      it(E(1122), 'la même ville'),
      it(E(1129), 'le même médecin'),
      it('fr.b1.heure-et-date.039', 'à la même époque'),
    ], chk(
      'Et ici, même dit...',
      ['pareil', 'exactement celui-là'], 0,
      'Devant le nom : pareil. EN: same.')),
    ctl('La vitesse', "Tu as eu l'entrevue lundi. On t'a répondu lundi, sans attendre. Quelle phrase insiste sur la vitesse ?",
      ["On m'a répondu un autre jour.", "On m'a répondu le jour même."], 1,
      'Le jour même : ce jour-là, pas plus tard. EN: that very day.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Pareil ou exactement',
  groups: [
    grp('Pareil ou exactement', [
      it(E(1117), 'pareil'),
      it(E(1116), 'exactement'),
      it(E(1122), 'pareil'),
      it(E(1123), 'exactement'),
    ], chk(
      '« Ils habitent dans la ville même. » Où habitent-ils ?',
      ['en ville, pas en banlieue', 'dans une ville pareille à la nôtre'], 0,
      'La ville même : la ville elle-même. EN: in the town itself.')),
    grp('Une qualité en personne', [
      it(E(1118), 'la bonté'),
      it(E(1125), 'la patience'),
      it(E(1130), 'le médecin'),
      it(E(1128), 'le jour de l’entrevue'),
    ], chk(
      "« C'est la bonté même. » Tu dis que cette personne est...",
      ['toujours pareille', 'très gentille', 'un peu naïve'], 1,
      'La bonté même : la gentillesse en personne. EN: very kind.')),
    ctl('Ici même', '« Rendez-vous ici même. »',
      ['ici, exactement', 'dans un endroit pareil'], 0,
      'Ici même : ici, pas ailleurs. EN: right here.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre même du mauvais côté',
  errors: [
    {
      wrong: "Elle a signé le contrat le même jour de l'entrevue.",
      right: fr(E(1128)),
      why: "Normal : en anglais, on the same day as. Mais pour un jour déjà nommé, même va après : le jour même de. EN: the very day of is le jour même de.",
    },
    {
      wrong: 'Rendez-vous même ici, à midi.',
      right: fr(E(1119)),
      why: 'Même ici veut dire even here. Pour right here, même va après : ici même. EN: ici même means right here.',
    },
    {
      wrong: 'Il est arrivé le jour même que moi.',
      right: fr(E(1117)),
      why: 'Pour comparer avec que, même va devant : le même jour que moi. EN: comparing takes le même ... que.',
    },
    {
      wrong: "C'est la même bonté.",
      right: fr(E(1118)),
      why: 'La même bonté compare deux bontés. Pour la qualité en personne, même va après. EN: la bonté même is kindness itself.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['apres'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le jour', '« that very day »',
    ['le même jour', 'le jour même'], 1,
    'Après le nom : le jour même. EN: le jour même.'),
  ctl('Comparer', '« on the same day as me »',
    ['le même jour que moi', 'le jour même que moi'], 0,
    'Pour comparer : le même ... que. EN: le même jour que.'),
  ctl('Right here', '« right here »',
    ['même ici', 'le même ici', 'ici même'], 2,
    'Ici même. EN: ici même.'),
], ['apres']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Avant ou après le nom',
    opener: {
      line: "La même table, et tu étais assis ici même hier : ici tu apprends que même change de sens en changeant de côté. EN: The same table, and you sat right here yesterday: here you learn that même changes meaning when it changes side.",
      imageRef: 'lessons/meme/act08.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre le même jour et le jour même, et tu dis ici même. EN: You can choose between le même jour and le jour même, and say ici même.",
    estScreens: 32, restPoints: ['a8-tableau'],
  },
  sections: [A8_DEJAVU, A8_PLACE, A8_TABLEAU, A8_CONSTRUIRE, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: QUAND MÊME
 *
 *  The ONE mention of « même si » lives on a9-quand, card 4, through a seed
 *  row, and sends the learner to b1.32.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Malgré tout',
  frSub: 'Écoute l’obstacle, puis le résultat',
  lines: [
    ln(E(1133)), ln(E(1134)), ln(E(1135)), ln(E(1139)), ln(E(1141)),
    ln(E(1136)), ln(E(1138)), ln(E(1143)), ln(E(1145)),
  ],
  questions: [
    { q: 'Première phrase : est-il venu ?', opts: ['Oui, malgré la fatigue.', 'Non, il était fatigué.'], correct: 0, why: 'Quand même : la fatigue ne change rien. EN: he came anyway.' },
    { q: 'Achète-t-on l’objet cher ?', opts: ['Non', 'Oui'], correct: 1, why: 'Je l’achète quand même. EN: yes.' },
    { q: '« Merci quand même » : as-tu eu ce que tu voulais ?', opts: ['Oui, tout.', 'Non, mais tu remercies.'], correct: 1, why: 'On remercie malgré le refus. EN: thanks anyway.' },
    { q: '« Quand même ! », dit seul : la personne est...', opts: ['indignée', 'contente', 'fatiguée'], correct: 0, why: 'Dit seul, avec force : un reproche. EN: indignant.' },
    { q: 'Dernière phrase : ont-ils gagné ?', opts: ['Oui', 'Non, mais ils se sont amusés.', 'On ne sait pas.'], correct: 1, why: 'On a perdu, mais amusés quand même. EN: they lost.' },
  ],
  audio: REC('rec-b1-24-quand-ecoute'),
  say: REFRAME,
  terms: ['quandmeme'],
};

const A9_QUAND: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-quand',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-expressions',
  title: 'L’obstacle ne change rien',
  frSub: 'quand même',
  hint: 'Quatre cartes. Trouve l’obstacle.',
  audio: REC('rec-b1-24-quand'),
  say: REFRAME,
  terms: ['quandmeme'],
  cards: [
    {
      head: 'Malgré l’obstacle', label: 'quand même',
      fr: fr(E(1133)), sub: rsOf(E(1133)),
      body: 'La fatigue était un obstacle, et il est venu. Quand même dit : le résultat ne change pas. EN: anyway, despite the obstacle.',
    },
    {
      head: 'À la fin, ou après le verbe', label: 'sa place',
      fr: fr(E(1142)), sub: rsOf(E(1142)),
      body: 'Souvent à la fin de la phrase. Il peut aussi suivre le verbe conjugué : je suis quand même content. EN: at the end, or right after the verb.',
    },
    {
      head: 'Un reproche doux', label: 'tu pourrais quand même',
      fr: fr(E(1143)), sub: rsOf(E(1143)),
      body: 'Avec pourrais, quand même devient un reproche : au moins ça. EN: with pourrais, a mild reproach.',
    },
    {
      head: 'Même si, pour plus tard', label: Cap(CONCESSION_REF),
      fr: fr('fr.b1.maison.079'),
      sub: '[ehl pray-FEHR uhⁿ-na-par-tuh-MAHⁿ KALM | mem see luh lwa-YAY eh plü-zay-luh-VAY]',
      body: `Tu vas croiser même si. C'est une autre idée, la concession, et ${CONCESSION_REF} la construira. Ici, reconnais-le, et garde quand même. EN: recognise même si; a later lesson builds it.`,
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Où va quand même',
  groups: [
    grp('À la fin', [
      it(E(1134), 'l’achat'),
      it(E(1139), 'le départ'),
      it(E(1141), 'le repas'),
      it('fr.a2.famille.012', 'le mariage'),
    ], chk(
      'Dans ces phrases, où est quand même ?',
      ['au début', 'à la fin', 'avant le sujet'], 1,
      'À la fin, après le résultat. EN: at the end.')),
    grp('Après le verbe', [
      it(E(1142), 'suis quand même'),
      it(E(1147), 'as quand même'),
      it(E(1137), 'est quand même'),
      it(E(1143), 'pourrais quand même'),
    ], chk(
      '« Tu as quand même réussi. » Où est quand même ?',
      ['entre as et réussi', 'à la fin'], 0,
      "Entre l'auxiliaire et le participe. EN: between as and réussi.")),
    ctl("L'obstacle", "« Il pleut, mais on part quand même. » Quel est l'obstacle ?",
      ['le départ', 'la pluie'], 1,
      'La pluie. Le départ, c’est le résultat. EN: the rain.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quandmeme'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-expressions',
  title: 'Quand même, et le ton',
  points: [
    'Quand même : un obstacle, et le résultat ne change pas. EN: an obstacle, and the same result.',
    'Sa place : à la fin, ou juste après le verbe conjugué. EN: at the end, or after the verb.',
    "« Quand même ! » dit seul, avec force : un reproche, à l'oral, entre proches. EN: said alone and sharply, a reproach among friends.",
    `Dans une lettre, préfère tout de même. ${Cap(REGISTRE_REF)} parlera du registre. EN: in a letter, prefer tout de même.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quandmeme', 'expressions'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Anyway, ou reproche',
  groups: [
    grp('Anyway ou reproche', [
      it(E(1134), 'anyway'),
      it(E(1136), 'reproche'),
      it(E(1139), 'anyway'),
      it(E(1143), 'reproche'),
    ], chk(
      "« Tu exagères quand même. » C'est...",
      ['un reproche', 'un compliment', 'une question'], 0,
      'Tu exagères : un reproche, adouci. EN: a reproach.')),
    grp('Un obstacle, un résultat', [
      it(E(1141), 'pas faim, mais mangé'),
      it(E(1144), 'long, mais bien'),
      it(E(1145), 'perdu, mais amusés'),
      it(E(1147), 'difficile, mais réussi'),
    ], chk(
      '« Le film était long, mais bien quand même. » Le film était-il bien ?',
      ['Non', 'Oui, malgré sa longueur'], 1,
      'Long : l’obstacle. Bien : le résultat. EN: good, despite the length.')),
    ctl('Le ton', 'Ton voisin met la musique à fond à deux heures du matin. Tu lui dis...',
      ['Quand même, il est deux heures du matin.', 'Merci quand même.'], 0,
      'Quand même en tête : le reproche. EN: a reproach.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quandmeme'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre quand même mal posés',
  errors: [
    {
      wrong: 'Quand même il pleut, on part.',
      right: fr(E(1139)),
      why: "Normal : en anglais, even though ouvre la phrase. Quand même ne présente pas l'obstacle : il suit le résultat. EN: quand même follows the result.",
    },
    {
      wrong: 'Il était fatigué, mais il est venu même.',
      right: fr(E(1133)),
      why: 'Même seul, à la fin, ne veut pas dire anyway. Il faut le bloc entier : quand même. EN: anyway is quand même, the whole block.',
    },
    {
      wrong: 'Merci même.',
      right: fr(E(1135)),
      why: 'Pour remercier malgré un refus, la formule est figée : merci quand même. EN: a fixed phrase.',
    },
    {
      wrong: "Madame, j'ai quand même payé le loyer, quand même !",
      right: "Madame, j'ai tout de même payé le loyer.",
      why: "Entre amis, à l'oral, « quand même ! » passe. Dans un courriel, c'est trop fort : tout de même, une fois. EN: in writing, tout de même, once.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['quandmeme'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a9-dictee',
  layer: 'core',
  title: 'Écris l’obstacle et le résultat',
  frSub: 'quand même, en deux mots',
  itemIds: dicteeFor(9),
  audio: AUDIO,
  say: REFRAME,
  terms: ['quandmeme'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le sens', '« anyway »',
    ['même', 'quand même'], 1,
    'Le bloc entier. EN: quand même.'),
  ctl('La place', "« C'est cher, mais je l'achète ... . »",
    ['quand même', 'le même'], 0,
    'À la fin : quand même. EN: at the end.'),
  ctl('Le ton', '« Quand même ! » dit seul, c’est...',
    ['un merci', 'un reproche', 'une question'], 1,
    'Un reproche, à l’oral. EN: a reproach.'),
], ['quandmeme']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Quand même',
    opener: {
      line: "Il pleut, et vous sortez : ici tu apprends à dire que l'obstacle ne change rien. EN: It is raining and you go out: here you learn to say the obstacle changes nothing.",
      imageRef: 'lessons/meme/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis quand même à sa place, et tu entends le reproche dans « Quand même ! ». EN: You can place quand même and hear the reproach in Quand même!",
    estScreens: 34, restPoints: ['a9-focus'],
  },
  sections: [A9_ECOUTE, A9_QUAND, A9_CONSTRUIRE, A9_FOCUS, A9_CHOISIR, A9_ERREURS, A9_DICTEE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: EN MÊME TEMPS, DE MÊME, TOUT DE MÊME, À MÊME
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des blocs figés',
  frSub: 'Écoute le petit mot devant même',
  lines: [
    ln(E(1148)), ln(E(1149)), ln(E(1150)), ln(E(1151)), ln(E(1152)),
    ln(E(1153)), ln(E(1154)), ln(E(1155)), ln(E(1156)), ln(E(1164)),
  ],
  questions: [
    { q: 'Première phrase : peut-on écouter et écrire ensemble ?', opts: ['Oui', 'Non, pas en même temps'], correct: 1, why: 'En même temps : au même moment. EN: not at the same time.' },
    { q: '« j’ai fait de même » : qu’as-tu fait ?', opts: ['la même chose : dire merci', 'autre chose'], correct: 0, why: 'De même : pareil. EN: the same.' },
    { q: '« Il en va de même pour les loyers » : les loyers...', opts: ['sont différents', 'suivent la même règle'], correct: 1, why: 'Il en va de même : la même règle vaut. EN: the same goes.' },
    { q: '« Ne bois pas à même la bouteille » : tu dois boire...', opts: ['dans un verre', 'à la bouteille'], correct: 0, why: 'À même : directement. On te dit de prendre un verre. EN: use a glass.' },
    { q: '« Moi de même » répond à...', opts: ['Au revoir.', 'Enchanté.', 'Merci quand même.'], correct: 1, why: 'Enchanté. Moi de même : moi aussi. EN: likewise.' },
  ],
  audio: REC('rec-b1-24-expr-ecoute'),
  say: REFRAME,
  terms: ['expressions'],
};

const A10_EXPR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-expr',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-expressions',
  title: 'Quatre blocs à apprendre entiers',
  frSub: 'en même temps, de même, tout de même, à même',
  hint: 'Quatre cartes. Chaque bloc a son petit mot devant.',
  audio: REC('rec-b1-24-expr'),
  say: REFRAME,
  terms: ['expressions'],
  cards: [
    {
      head: 'Au même moment', label: 'en même temps',
      fr: fr(E(1149)), sub: rsOf(E(1149)),
      body: 'Deux choses au même moment. Aussi pour deux sentiments : drôle et, en même temps, triste. EN: at the same time, also for two feelings.',
    },
    {
      head: 'Pareil', label: 'de même',
      fr: fr(E(1151)), sub: rsOf(E(1151)),
      body: 'Faire de même : faire la même chose. Moi de même répond à Enchanté. EN: likewise.',
    },
    {
      head: 'Quand même, en plus soigné', label: 'tout de même',
      fr: fr(E(1154)), sub: rsOf(E(1154)),
      body: "Le sens de quand même, un peu plus soigné. Bien à l'écrit. EN: same as quand même, a little more formal.",
    },
    {
      head: 'Directement sur', label: 'à même',
      fr: fr(E(1156)), sub: rsOf(E(1156)),
      body: "À même le sol : sans rien entre les deux. Reconnais-le ; tu n'as pas besoin de l'écrire. EN: directly on; for recognition.",
    },
  ],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  sheetId: 'sheet-expressions',
  title: 'Les blocs en contexte',
  examples: [
    ex(E(1148), 'en même temps : deux actions à la fois.'),
    ex(E(1150), 'en même temps : deux sentiments à la fois.'),
    ex('fr.b1.bureau.005', 'plusieurs dossiers en même temps.'),
    ex(E(1152), 'il en va de même : la même règle vaut.'),
    ex(E(1153), 'tout de même : écrit, soigné.'),
    ex(E(1158), 'de la même façon : pareil, pour une méthode.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le bon petit mot',
  groups: [
    grp('Le moment', [
      it(E(1148), 'deux actions'),
      it(E(1149), 'deux arrivées'),
      it('fr.a2.verbes.826', 'deux réveils'),
      it(E(1150), 'deux sentiments'),
    ], chk(
      '« at the same time »',
      ['au même temps', 'en même temps', 'à la même temps'], 1,
      'En même temps, avec en : un bloc figé. EN: always en.')),
    grp('Pareil', [
      it(E(1151), 'faire de même'),
      it(E(1152), 'il en va de même'),
      it(E(1164), 'moi de même'),
      it(E(1159), 'la même chose'),
    ], chk(
      "« Elle a dit merci, et j'ai fait de même. » Qu'as-tu fait ?",
      ['rien', 'j’ai dit merci aussi'], 1,
      'De même : la même chose. EN: the same thing.')),
    ctl('À même', '« Il dormait à même le sol. » Il dormait...',
      ['sur le sol, sans matelas', 'dans le même lit'], 0,
      'À même le sol : directement dessus. EN: right on the floor.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A10_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a10-cartes',
  layer: 'core',
  title: 'Huit blocs figés',
  cards: [
    { front: 'at the same time', back: 'en même temps', say: fr(E(1149)) },
    { front: 'likewise (answering Enchanté)', back: 'moi de même', say: fr(E(1164)) },
    { front: 'I did the same', back: "j'ai fait de même", say: fr(E(1151)) },
    { front: 'the same goes for', back: 'il en va de même pour', say: fr(E(1152)) },
    { front: 'all the same (written)', back: 'tout de même', say: fr(E(1154)) },
    { front: 'straight from the bottle', back: 'à même la bouteille', say: fr(E(1155)) },
    { front: 'in the same way', back: 'de la même façon', say: fr(E(1158)) },
    { front: 'I think the same', back: 'je pense la même chose', say: fr(E(1159)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le bloc qui convient',
  groups: [
    grp("À l'oral ou à l'écrit", [
      it(E(1135), 'oral'),
      it(E(1153), 'écrit'),
      it(E(1152), 'écrit'),
      it(E(1136), 'oral'),
    ], chk(
      'Dans un courriel au propriétaire, lequel sonne le plus soigné ?',
      ['quand même', 'tout de même'], 1,
      'Les deux sont justes ; tout de même sonne plus soigné. EN: tout de même is more careful.')),
    grp('Un moment ou une façon', [
      it(E(1149), 'un moment'),
      it(E(1158), 'une façon'),
      it(E(1150), 'un moment'),
      it(E(1151), 'une façon'),
    ], chk(
      '« De la même façon, on peut payer en ligne. » Ça veut dire...',
      ['avec la même méthode', 'au même moment'], 0,
      'La même façon : la même méthode. EN: in the same way.')),
    ctl('Enchanté', "Quelqu'un te dit « Enchanté ». Tu réponds...",
      ['Moi de même.', 'Moi-même.', 'Quand même.'], 0,
      'Moi de même : moi aussi. EN: likewise.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expressions'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le bloc', '« at the same time »',
    ['en même temps', 'au même temps'], 0,
    'Avec en. EN: en même temps.'),
  ctl('Tout de même', 'Tout de même veut dire...',
    ['en même temps', 'la même chose que quand même'], 1,
    'Quand même, plus soigné. EN: all the same.'),
  ctl('À même', '« à même le sol »',
    ['sur un autre sol', 'directement sur le sol'], 1,
    'Directement dessus. EN: right on the floor.'),
], ['expressions']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'En même temps, de même',
    opener: {
      line: "Deux personnes arrivent en même temps et se disent « Moi de même » : ici tu apprends les blocs figés avec même. EN: Two people arrive at the same time and say « Moi de même »: here you learn the fixed blocks with même.",
      imageRef: 'lessons/meme/act10.jpg',
    },
    sections: [],
    milestone: "Tu dis en même temps, de même et tout de même, et tu reconnais à même. EN: You can say en même temps, de même and tout de même, and recognise à même.",
    estScreens: 32, restPoints: ['a10-exemples'],
  },
  sections: [A10_ECOUTE, A10_EXPR, A10_EXEMPLES, A10_CONSTRUIRE, A10_CARTES, A10_CHOISIR, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: COMPARER DEUX CHOSES
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux offres, une semaine',
  frSub: 'La forme que tu vas écrire',
  text: OFFRES_TEXT,
  glossary: [
    { word: "offres d'emploi", en: 'job offers', note: 'Une entreprise te propose un poste.' },
    { word: 'tâches', en: 'duties, tasks', note: 'Le travail à faire chaque jour.' },
    { word: 'traverser le fleuve', en: 'cross the river', note: 'Entre Québec et Lévis, il y a le Saint-Laurent.' },
    { word: 'entrevue', en: 'job interview', note: "Au Québec, l'entrevue ; en France, l'entretien." },
    { word: 'Au fond', en: 'all things considered', note: 'Quand on réfléchit bien.' },
  ],
  questions: [
    { q: 'Qu’est-ce qui est pareil dans les deux offres ?', a: 'Le même niveau, presque le même salaire, les mêmes tâches.' },
    { q: 'Qu’est-ce qui surprend chez la directrice de Lévis ?', a: 'Elle a appelé elle-même, le jour même de l’entrevue.' },
    { q: '« La première ne m’a même pas répondu » : c’est un bon point ?', a: 'Non. Même pas insiste : elle n’a pas fait le minimum.' },
    { q: 'Quel est le choix de Mathieu, et malgré quoi ?', a: 'Lévis, quand même : malgré le fleuve à traverser tous les jours.' },
    { q: 'Dans quel ordre avance le texte ?', a: 'Ce qui est pareil, puis ce qui change, puis la surprise, puis le choix.' },
  ],
  audio: REC('rec-b1-24-offres'),
  say: REFRAME,
  terms: ['comparer', 'pareil'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour comparer',
  steps: [
    '1. Nomme les deux choses ou les deux personnes. EN: name the two things.',
    '2. Dis ce qui est pareil : le même, la même, les mêmes, et le même ... que. EN: say what is the same.',
    '3. Dis ce qui change, avec un détail qui surprend : même, ou ne ... même pas. EN: what changes, with a surprise.',
    '4. Ajoute un détail précis : le jour même, lui-même, elle-même. EN: add one precise detail.',
    "5. Termine par ton choix, avec quand même s'il y a un obstacle. EN: end with your choice.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['comparer'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc("Tu compares deux offres d'emploi pour un ami", E(1165)),
    uc('Tu décris deux appartements à ta famille', E(1168)),
    uc('Tu parles de deux jumeaux que tu connais', E(1173)),
    uc('Tu expliques ton choix malgré un défaut', E(1167)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['comparer'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Mathieu hésite',
  setting: "Le soir, Mathieu t'appelle. Il hésite encore entre les deux offres et veut ton avis. Il parle vite et il te tutoie.",
  turns: [
    {
      ai: 'Salut. Tu as lu mon message sur les deux offres ?',
      en: 'Hi. Did you read my message about the two offers?',
      user: fr(E(1165)),
      userEn: 'Both offers have the same salary. (le même + noun.)',
      alts: [
        { fr: 'Oui, le salaire est presque le même.', en: 'Yes, the salary is almost the same. (le même as a pronoun: also right.)' },
        { fr: 'Oui, et ce sont les mêmes tâches.', en: 'Yes, and they are the same duties.' },
      ],
    },
    {
      ai: 'Mais le travail, c’est pareil ?',
      en: 'But the work, is it the same?',
      user: fr(E(1166)),
      userEn: 'It is not the same job at all. (pas du tout le même.)',
      alts: [
        { fr: 'Non, ce ne sont pas les mêmes équipes.', en: 'No, they are not the same teams.' },
        { fr: "Pas vraiment, ce n'est pas la même vie.", en: 'Not really, it is not the same life.' },
      ],
    },
    {
      ai: 'Québec, c’est tout près de chez moi.',
      en: 'Québec is really close to my place.',
      user: 'Oui, tu pourrais même y aller à pied.',
      userEn: 'Yes, you could even walk there. (même = even, after the conjugated verb.)',
      alts: [
        { fr: "C'est à Québec même, à dix minutes.", en: 'It is in Québec itself, ten minutes away. (même after the noun: also right.)' },
        { fr: 'Même en hiver, tu pourrais y aller à pied.', en: 'Even in winter you could walk there.' },
      ],
    },
    {
      ai: 'La directrice de Lévis m’a appelé elle-même.',
      en: 'The director in Lévis called me herself.',
      user: "Et le jour même de l'entrevue, en plus.",
      userEn: 'And on the very day of the interview, too. (le jour même: that very day.)',
      alts: [
        { fr: 'Elle-même ? C’est un bon signe.', en: 'Herself? That is a good sign.' },
        { fr: "L'autre ne t'a même pas répondu.", en: 'The other one did not even answer you. (ne ... même pas.)' },
      ],
    },
    {
      ai: 'Mais il faut traverser le fleuve tous les jours.',
      en: 'But you have to cross the river every day.',
      user: 'Oui, mais moi, je choisirais Lévis quand même.',
      userEn: 'Yes, but I would choose Lévis anyway. (quand même: despite the obstacle.)',
      alts: [
        { fr: "C'est plus loin, mais c'est quand même la meilleure offre.", en: 'It is further, but it is still the best offer.' },
        { fr: 'Tu pourras lire dans le traversier, en même temps.', en: 'You will be able to read on the ferry at the same time. (en même temps.)' },
      ],
    },
    {
      ai: 'Merci. Je te rappelle demain pour te dire.',
      en: 'Thanks. I will call you back tomorrow to tell you.',
      user: 'Avec plaisir. Et décide toi-même, surtout.',
      userEn: 'My pleasure. And above all, decide for yourself. (toi-même: you and nobody else.)',
      alts: [
        { fr: "De rien. C'est à toi de choisir, toi-même.", en: 'You are welcome. It is up to you to choose, yourself.' },
        { fr: 'Bonne soirée. Moi, je prendrais Lévis quand même.', en: 'Have a good evening. I would take Lévis all the same.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['comparer', 'soi'],
};

/** THE GRADED TASK: a written comparison using several emplois of même. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Compare deux choses',
  frSub: 'Mission écrite',
  brief: "Tu hésites entre deux choses, ou tu connais deux personnes qui se ressemblent : deux appartements, deux offres, deux amis, des jumeaux. Écris un court texte pour les comparer. Dis ce qui est pareil, ce qui change, et ce que tu choisis.",
  briefEn: 'You are torn between two things, or you know two people who look alike: two flats, two offers, two friends, twins. Write a short text comparing them. Say what is the same, what changes, and what you choose.',
  produce: "Écris une comparaison de 80 à 120 mots, avec au moins quatre emplois différents de même : le même (+ nom) ou le même ... que, un pronom en -même, même au sens de even (ou ne ... même pas), et quand même ou le jour même.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'emplois',
        label: 'Plusieurs emplois de même',
        maxPoints: 4,
        descriptors: [
          '4 : Au moins quatre emplois différents de même, et chacun dit la bonne chose : pareil, sans aide, la surprise, le moment exact, malgré.',
          '3 : Trois emplois différents, bien choisis, ou quatre avec une petite confusion.',
          '2 : Deux emplois seulement, ou même utilisé presque toujours pour dire pareil.',
          '1 : Un seul emploi, ou même utilisé là où il ne veut rien dire.',
        ],
      },
      {
        key: 'formes',
        label: 'Des formes justes',
        maxPoints: 3,
        descriptors: [
          "3 : Même bien accordé, que après le même, le trait d'union dans moi-même, et même à sa place.",
          '2 : Une ou deux erreurs de forme, mais on comprend tout.',
          '1 : Plusieurs erreurs : comme au lieu de que, même sans article, même mal placé.',
        ],
      },
      {
        key: 'comparaison',
        label: 'Une vraie comparaison',
        maxPoints: 3,
        descriptors: [
          '3 : Ce qui est pareil, puis ce qui change, puis un choix clair. Le lecteur sait ce que tu préfères.',
          '2 : Pareil et différent sont là, mais le choix manque ou arrive sans raison.',
          '1 : Une liste de détails, sans comparaison ni choix.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Deux choses ou deux personnes nommées, entre 80 et 120 mots.',
          '1 : Il manque un élément : une seule chose, pas de choix, ou moins de 80 mots.',
        ],
      },
    ],
  },
  scaffold: [
    "J'ai comparé deux...",
    'Les deux ont le même...',
    'Ce sont les mêmes...',
    "Mais ce n'est pas du tout la même...",
    'Même...',
    "... ne m'a même pas...",
    'Le jour même,',
    '... quand même.',
  ],
  modelAnswer: "J'ai visité deux appartements dans le même quartier, à Montréal, le même jour. Ils ont la même surface et presque le même loyer. Les fenêtres et le plancher sont les mêmes. Mais ce n'est pas du tout la même vie. Le premier est au rez-de-chaussée : il est sombre, même à midi. Le second est au troisième étage, avec un balcon. Le propriétaire du second m'a fait visiter lui-même, et il a même repeint la cuisine. Le premier ne m'a même pas montré la cave. Le second est un peu plus cher, mais je le prends quand même. J'ai signé le bail le soir même.",
  modelAnswerEn: "I visited two flats in the same neighbourhood in Montréal, on the same day. They have the same floor area and almost the same rent. The windows and the floor are the same. But it is not the same life at all. The first is on the ground floor: it is dark, even at noon. The second is on the third floor, with a balcony. The owner of the second showed me round himself, and he even repainted the kitchen. The first owner did not even show me the basement. The second is a little more expensive, but I am taking it anyway. I signed the lease that very evening.",
  watchFor: [
    {
      pattern: 'comme or aussi after le même (le même loyer comme l’autre, aussi prix que).',
      criterion: 'formes',
      feedback: "Après le même, compare avec que : le même loyer que l'autre.",
      ref: 'a3-piege',
    },
    {
      pattern: 'même not agreed with a plural noun (les même fenêtres), or with the subject instead of the noun.',
      criterion: 'formes',
      feedback: 'Même prend le nombre du nom : les mêmes fenêtres.',
      ref: 'a2-erreurs',
    },
    {
      pattern: 'The article dropped before same-même, so it reads as even (ils ont même loyer).',
      criterion: 'formes',
      feedback: 'Pour same, garde l’article : le même loyer.',
      ref: 'a4-erreurs',
    },
    {
      pattern: 'moi-même in place of a reflexive (j’ai blessé moi-même), a subject pronoun before -même (il-même), or no hyphen.',
      criterion: 'formes',
      feedback: 'Lui-même, avec la forme tonique et un trait d’union. Pour myself après un verbe pronominal : je me suis...',
      ref: 'a5-piege',
    },
    {
      pattern: 'aussi used for even (aussi le propriétaire est venu), or même je.',
      criterion: 'emplois',
      feedback: 'Pour even : même le propriétaire, même moi.',
      ref: 'a6-erreurs',
    },
    {
      pattern: 'even-même in the wrong place (il a repeint même la cuisine where the surprise is the repainting, il ne m’a pas même montré, même at the very end).',
      criterion: 'formes',
      feedback: 'Même juste avant ce qui surprend : il a même repeint, il ne m’a même pas montré.',
      ref: 'a7-piege',
    },
    {
      pattern: 'le même jour where the learner means that very day (j’ai signé le même jour de la visite).',
      criterion: 'emplois',
      feedback: 'Pour un jour déjà nommé : le jour même de la visite.',
      ref: 'a8-erreurs',
    },
    {
      pattern: 'quand même opening the clause like even though, or même alone for anyway.',
      criterion: 'emplois',
      feedback: 'Quand même suit le résultat : je le prends quand même.',
      ref: 'a9-erreurs',
    },
    {
      pattern: 'Calques of the fixed blocks (au même temps, moi-même for likewise).',
      criterion: 'formes',
      feedback: 'Les blocs sont figés : en même temps, moi de même.',
      ref: 'a10-construire',
    },
    {
      pattern: 'A list of details with no « same / different / choice » structure.',
      criterion: 'comparaison',
      feedback: 'Commence par ce qui est pareil, puis ce qui change, et finis par ton choix.',
      ref: 'a11-plan',
    },
    {
      pattern: 'Under 80 words, only one thing described, or no choice.',
      criterion: 'tache',
      feedback: 'Relis la mission : deux choses, un choix, entre 80 et 120 mots.',
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'Word count covers the whole text; there is no greeting or sign-off to exclude. Allow 10% tolerance (72 to 132) before criterion « tache » loses its point.',
    "« Different emplois » means different JOBS of même: same (+ noun or que), the pronoun le même, -même, even (including ne ... même pas), after-the-noun (le jour même, ici même), quand même / tout de même, en même temps / de même. Two uses of le même + noun count once.",
    "« même si » is concession and belongs to b1.32. It is NOT taught here: do not count it toward the four emplois, and do not mark a correct one as an error.",
    'Do not mark the comparative (plus, moins, aussi ... que) or the superlative; they are a2.08 and welcome in a comparison.',
    "« pas même » (il ne m'a pas même répondu) is correct but literary; accept it without reward, and do not mark it under « formes ».",
    'The subjunctive is not taught before b1.14: if a learner writes one correctly, do not mark it; if incorrectly, mark it under « formes » only when it blocks meaning.',
    'Accept regional vocabulary (entrevue / entretien, logement / appart, char in Québec for a car, traversier / ferry).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['comparer', 'pareil'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tous tes même à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pareil', 'even'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-meme',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le même + nom', v: "pareil, avec l'accord", say: fr(E(1002)),
      detail: { title: 'Pareil', body: 'Le même, la même, les mêmes : même prend le nombre du nom. EN: même agrees in number.', say: fr(E(1019)) } },
    { k: 'le même ... que', v: 'que, jamais comme', say: fr(E(1032)),
      detail: { title: 'Comparer', body: "Que présente ce qu'on compare. EN: que, never comme.", say: fr(E(1033)) } },
    { k: 'moi-même', v: "moi, et personne d'autre", say: fr(E(1065)),
      detail: { title: 'Insister', body: "Le pronom tonique, un trait d'union, même. EN: stressed pronoun, hyphen, même.", say: fr(E(1066)) } },
    { k: 'même = even', v: 'devant ce qui surprend', say: fr(E(1004)),
      detail: { title: 'Even', body: "Même Paul, il a même ri, il ne m'a même pas dit bonjour. EN: before what surprises.", say: fr(E(1099)) } },
    { k: 'le jour même', v: 'après le nom : exactement', say: fr(E(1116)),
      detail: { title: 'Exactement', body: 'Devant le nom : pareil. Après : ce jour-là. EN: after the noun, that very one.', say: fr(E(1117)) } },
    { k: 'quand même', v: "malgré l'obstacle", say: fr(E(1133)),
      detail: { title: 'Anyway', body: "À la fin, ou après le verbe. Tout de même à l'écrit. EN: at the end; tout de même in writing.", say: fr(E(1154)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pareil', 'even', 'apres'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu dis que deux choses sont pareilles, avec l'accord et avec que. Tu insistes avec moi-même, tu surprends avec même Paul et ne ... même pas, tu dis exactement quand avec le jour même, et tu passes l'obstacle avec quand même. Le piège qui reste est le plus discret : un comme qui se glisse après le même, parce que l'anglais dit as. Avant l'examen, relis ta comparaison et entoure chaque même. À côté, écris son métier : same, myself, even, that very ou anyway. Si tu vois le même sans que, ou avec comme, corrige. EN: Circle every même and label its job; fix any le même followed by comme.",
  stats: [
    { k: 'Pareil', v: 'le même, les mêmes, le même que' },
    { k: 'Insister', v: 'moi-même, soi-même' },
    { k: 'Surprendre', v: 'même Paul, même pas' },
    { k: 'Malgré', v: 'quand même, tout de même' },
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
    { front: 'pareil, devant un nom', back: 'le même, la même, les mêmes', say: fr(E(1002)) },
    { front: 'the same as', back: 'le même ... que', say: fr(E(1032)) },
    { front: 'the same one, sans nom', back: "c'est le même", say: fr(E(1050)) },
    { front: 'sans aide', back: 'moi-même, toi-même, soi-même', say: fr(E(1065)) },
    { front: 'le cas inattendu', back: 'même Paul, même moi', say: fr(E(1004)) },
    { front: 'not even', back: 'ne ... même pas', say: fr(E(1099)) },
    { front: 'that very day', back: 'le jour même', say: fr(E(1116)) },
    { front: "malgré l'obstacle", back: 'quand même', say: fr(E(1133)) },
    { front: 'at the same time', back: 'en même temps', say: fr(E(1149)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Même, en résumé',
  body: `${REFRAME} Deux choses pareilles, une personne sans remplaçant, une règle sans exception, un jour déjà nommé, un résultat malgré l'obstacle : c'est toujours la même idée. La prochaine leçon, ${REGISTRE_REF}, parle du registre : quand dire quand même et quand écrire tout de même, et bien plus. EN: Next lesson: register, and how to choose the right level of language.`,
  points: [
    'Le même + nom, accordé, et que pour comparer.',
    'Moi-même insiste ; le verbe pronominal dit myself.',
    'Même devant ce qui surprend : même Paul, il a même ri.',
    'Devant le nom : pareil. Après : exactement.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pareil', 'place', 'apres'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight, one per act from act 1 to act 10 plus
 *  an integration round on comparing. Each round targets a distinct
 *  errorTrigger. `fold()` strips accents, commas, apostrophes and hyphens,
 *  so every typed answer differs from its prompt by a WORD or an agreement
 *  letter (que against comme, mêmes against même, lui against il). Every
 *  typeIn and errorSpot carries `prompt`, every listenChoose carries `say`.
 *
 *  Authored option order is permuted by `spread()` so the numeric answers
 *  cycle over the slots (validateDensity quiz-spread, 40% cap). LessonRich
 *  reshuffles at runtime anyway; no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

type Round = QuizRound;

/** Move each closed question's answer by swapping two options, so the
 *  answers cycle over the slots per option count: two-option questions
 *  alternate 0/1, three-option ones run 2,0,2,1 (slot 2 is fed only by
 *  three-option questions, so it gets the larger share). The option set and
 *  the answer string are unchanged. */
function spread(rounds: Round[]): Round[] {
  const seen: Record<number, number> = {};
  const THREE = [2, 0, 2, 1];
  return rounds.map((r) => ({
    ...r,
    questions: r.questions.map((q) => {
      const qq = q as QQ & { opts?: string[]; correct?: number };
      if (!Array.isArray(qq.opts) || typeof qq.correct !== 'number') return q;
      const n = qq.opts.length;
      const k = (seen[n] = (seen[n] ?? -1) + 1);
      const target = n === 3 ? THREE[k % 4] : k % n;
      const opts = [...qq.opts];
      [opts[qq.correct], opts[target]] = [opts[target], opts[qq.correct]];
      return { ...qq, opts, correct: target } as QQ;
    }),
  }));
}

const ROUNDS: Round[] = [
  {
    id: 'r1-sens', label: 'Les métiers de même', targets: ['un-seul-sens'],
    questions: [
      mc('« Même Paul est venu. » Même veut dire...', ['same', 'even', 'myself'], 1, 'Paul ne vient jamais : even. EN: even.', 'a1-reperer'),
      mc('« Je l’ai réparé moi-même. » Qui l’a réparé ?', ['moi, sans aide', 'un réparateur', 'Paul'], 0, 'Moi-même : moi, et personne d’autre. EN: I did.', 'a1-reperer'),
      mc('« Il pleuvait, mais on est sortis quand même. » Sommes-nous sortis ?', ['Non', 'Oui, malgré la pluie'], 1, 'Quand même : malgré la pluie. EN: yes.', 'a1-jumelles'),
      tI('Traduis avec le même.', 'I have the same computer as you.', fr(E(1000)), 'Le même ... que. EN: le même ... que.', 'a1-scene'),
      tI('Dis-le avec même, pour even.', "Paul aussi est venu ce matin, et on ne l'attendait pas.", fr(E(1004)), 'Même Paul. EN: even Paul.', 'a1-reperer'),
      eS(WRONG_COMME, fr(E(1000)), 'Après le même : que. EN: que, not comme.', 'a1-scene'),
      eS('Nous avons les même chaussures.', fr(E(1002)), 'Pluriel : mêmes. EN: plural s.', 'a1-exemples'),
      lC('Écoute. Ici, même veut dire...', fr(E(1006)), ['that very day', 'the same day', 'even'], 0, 'Le jour même : ce jour-là. EN: that very day.', 'a1-jumelles'),
    ],
  },
  {
    id: 'r2-accord', label: 'Le, la, les mêmes', targets: ['accord-oublie'],
    questions: [
      mc('« Ils lisent les ... livres. »', ['même', 'mêmes'], 1, 'Livres : mêmes. EN: plural.', 'a2-construire'),
      mc('« Mes deux sœurs ont la ... voix. »', ['même', 'mêmes'], 0, 'Une voix : même. EN: singular.', 'a2-exemples'),
      mc('« les mêmes erreurs » : le s de mêmes...', ['ne s’entend jamais', 'se lie en z devant erreurs', 'se prononce s'], 1, 'Liaison en z. EN: z liaison.', 'a2-accord'),
      tI('Mets au pluriel.', 'Il a le même goût.', 'Ils ont les mêmes goûts.', 'Les mêmes goûts : un s à chaque mot. EN: plural everywhere.', 'a2-construire'),
      tI('Parle d’une rue.', 'Nous habitons dans le même quartier.', fr(E(1019)), 'Une rue : la même. EN: la même rue.', 'a2-accord'),
      tI('Complète avec même, bien accordé.', 'Tu fais toujours les ... erreurs.', fr(E(1025)), 'Erreurs : mêmes. EN: plural.', 'a2-construire'),
      eS('Elles portent la mêmes robe.', fr(E(1021)), 'Une robe : la même. EN: agree with the noun.', 'a2-erreurs'),
      lC('Écoute. Le nom après même est-il au pluriel ?', fr(E(1023)), ['oui', 'non'], 0, 'Les mêmes goûts. EN: plural.', 'a2-dictee'),
    ],
  },
  {
    id: 'r3-que', label: 'Le même ... que', targets: ['meme-comme'],
    questions: [
      mc('« the same car as her neighbour »', ['la même voiture comme son voisin', 'la même voiture que son voisin', 'aussi voiture que son voisin'], 1, 'Que. EN: que.', 'a3-que'),
      mc('« Il est ... grand que son frère. »', ['aussi', 'le même'], 0, 'Un adjectif : aussi. EN: aussi.', 'a3-que'),
      mc('« Il a le même âge que ... . »', ['je', 'moi', 'me'], 1, 'Après que : moi. EN: moi.', 'a3-construire'),
      tI('Dis-le avec la même taille.', 'Ta valise est aussi grande que la mienne.', fr(E(1037)), 'Taille est un nom : la même taille que. EN: la même taille que.', 'a3-tableau'),
      tI('Traduis.', 'I want the same thing as you.', fr(E(1033)), 'La même chose que toi. EN: la même chose que.', 'a3-que'),
      tI('Complète.', "On a le même problème ... l'an passé.", fr(E(1048)), 'Que. EN: que.', 'a3-construire'),
      eS('Elle a la même voiture comme son voisin.', fr(E(1032)), 'Que, jamais comme. EN: que.', 'a3-piege'),
      lC('Écoute. Qu’est-ce que les deux frères ont de pareil ?', fr(E(1044)), ['la taille', "l'âge", 'la voix'], 0, 'La même taille. EN: height.', 'a3-ecoute'),
    ],
  },
  {
    id: 'r4-pronom', label: 'Le même, tout seul', targets: ['meme-sans-article'],
    questions: [
      mc('« Tu as un beau manteau. J’ai ... . »', ['même', 'le même', 'un même'], 1, 'Le même. EN: le même.', 'a4-pronom'),
      mc('« Ce sont toujours les mêmes qui parlent. » Les mêmes, ce sont...', ['des objets', 'des jours', 'des personnes'], 2, 'Qui parlent : des personnes. EN: people.', 'a4-choisir'),
      mc('Tu montres une valise : « Je voudrais ... en bleu. »', ['la même', 'le même'], 0, 'Une valise : la même. EN: feminine.', 'a4-construire'),
      tI('Remplace le nom par le même.', "J'ai le même manteau.", "J'ai le même.", 'Le nom est déjà dit. EN: drop the noun.', 'a4-pronom'),
      tI('Remplace le nom.', 'Ce sont les mêmes chaussures.', fr(E(1051)), 'Les mêmes. EN: les mêmes.', 'a4-construire'),
      eS('Ce sont les même.', fr(E(1051)), 'Pluriel : mêmes. EN: plural s.', 'a4-erreurs'),
      eS("Celui-ci, c'est le même comme l'autre.", fr(E(1063)), 'Que, même sans nom. EN: que.', 'a4-erreurs'),
      lC('Écoute. Cette personne a-t-elle changé ?', fr(E(1060)), ['oui, beaucoup', 'non, pas du tout'], 1, 'Toujours la même. EN: no.', 'a4-choisir'),
    ],
  },
  {
    id: 'r5-soi', label: 'Moi-même', targets: ['soi-au-lieu-de-se'],
    questions: [
      mc('« I cut myself. »', ["J'ai coupé moi-même.", 'Je me suis coupé.'], 1, 'Le verbe pronominal. EN: reflexive.', 'a5-choisir'),
      mc('Avec on : « On doit se défendre ... . »', ['moi-même', 'lui-même', 'soi-même'], 2, 'Soi-même. EN: soi-même.', 'a5-soi'),
      mc('« nous-mêmes » prend un s parce que...', ['nous est pluriel', "c'est un verbe", 'même est toujours au pluriel'], 0, 'Nous : pluriel. EN: plural.', 'a5-tableau'),
      tI('Insiste : sans aide.', "J'ai fait le gâteau.", "J'ai fait le gâteau moi-même.", 'Moi-même à la fin. EN: moi-même at the end.', 'a5-soi'),
      tI('Mets au pluriel : ils.', 'Il a tout organisé lui-même.', fr(E(1071)), 'Eux-mêmes. EN: eux-mêmes.', 'a5-tableau'),
      tI("Dis-le à un ami, à l'impératif.", 'Tu dois le faire sans moi.', fr(E(1066)), 'Fais-le toi-même. EN: do it yourself.', 'a5-soi'),
      eS('Il a construit sa maison il-même.', fr(E(1067)), 'Lui-même. EN: lui-même.', 'a5-piege'),
      lC('Écoute. Qui a peint la cuisine ?', fr(E(1069)), ['un peintre', 'nous, sans aide'], 1, 'Nous-mêmes. EN: we did.', 'a5-histoire'),
    ],
  },
  {
    id: 'r6-even', label: 'Même, c’est even', targets: ['even-traduit'],
    questions: [
      mc('« Even the children understood. »', ['Même les enfants ont compris.', 'Les mêmes enfants ont compris.', 'Aussi les enfants ont compris.'], 0, "Même devant l'article. EN: même les enfants.", 'a6-meme'),
      mc('« even me »', ['même je', 'même moi'], 1, 'Même moi. EN: stressed pronoun.', 'a6-construire'),
      mc("« Elle parle trois langues, et même un peu d'arabe. » Qu'est-ce qui surprend ?", ['les trois langues', 'le français', "l'arabe"], 2, "L'arabe. EN: the Arabic.", 'a6-choisir'),
      tI('Dis-le avec même.', "Le chat aussi a peur de l'orage, et ça surprend.", fr(E(1084)), 'Même le chat. EN: even the cat.', 'a6-meme'),
      tI('Ajoute même devant le complément.', 'Il travaille le dimanche.', fr(E(1086)), 'Même le dimanche. EN: even on Sundays.', 'a6-construire'),
      eS('Aussi Paul est venu ce matin.', fr(E(1004)), 'Même Paul. EN: même, not aussi.', 'a6-erreurs'),
      eS("Même le chat a peur de l'orage aussi.", fr(E(1084)), 'Même suffit. EN: drop aussi.', 'a6-erreurs'),
      lC('Écoute. Fait-il du vélo en hiver ?', fr(E(1092)), ['oui', 'non'], 0, 'Même en hiver. EN: yes.', 'a6-ecoute'),
    ],
  },
  {
    id: 'r7-place', label: 'La place de même', targets: ['meme-mal-place'],
    questions: [
      mc('« He even cried. »', ['Il a pleuré même.', 'Il a même pleuré.', 'Même il a pleuré.'], 1, 'Entre a et pleuré. EN: between.', 'a7-place'),
      mc("« She doesn't even know where he lives. »", ['Elle ne sait même pas où il habite.', 'Elle ne sait pas où il habite même.'], 0, 'Même pas. EN: même pas.', 'a7-construire'),
      mc("« Mon père a même ri. » Qu'est-ce qui surprend ?", ['le père', 'le rire'], 1, 'Même devant ri. EN: the laugh.', 'a7-choisir'),
      tI('Ajoute même.', "Il ne m'a pas dit bonjour.", fr(E(1099)), 'Même avant pas. EN: même pas.', 'a7-place'),
      tI('Ajoute même.', 'Nous avons dansé.', fr(E(1103)), 'Avons même dansé. EN: between.', 'a7-construire'),
      tI('Ajoute même.', "Tu n'as pas essayé.", fr(E(1108)), "N'as même pas. EN: même pas.", 'a7-piege'),
      eS("Je même n'ai pas eu le temps de manger.", fr(E(1100)), 'Ne, puis même pas. EN: ne first.', 'a7-piege'),
      lC("Écoute. Qu'est-ce qui surprend ?", fr(E(1104)), ['que mon père, lui aussi, a ri', 'le rire, plus que le reste'], 0, 'Même mon père. EN: the father.', 'a7-choisir'),
    ],
  },
  {
    id: 'r8-avant-apres', label: 'Avant ou après le nom', targets: ['avant-apres'],
    questions: [
      mc('« that very evening »', ['le même soir', 'le soir même'], 1, 'Après le nom. EN: le soir même.', 'a8-tableau'),
      mc('« on the same day as me »', ['le jour même que moi', 'le même jour que moi'], 1, 'Pour comparer, devant. EN: le même jour que.', 'a8-place'),
      mc("« C'est la bonté même. » Cette personne est...", ['très gentille', 'toujours pareille', 'méchante'], 0, 'La bonté en personne. EN: very kind.', 'a8-choisir'),
      tI('Dis « right here ».', 'Rendez-vous ici, exactement ici, à midi.', fr(E(1119)), 'Ici même. EN: ici même.', 'a8-place'),
      tI('Insiste sur le jour déjà nommé.', "Elle a signé le contrat ce jour-là, le jour de l'entrevue.", fr(E(1128)), 'Le jour même de. EN: the very day of.', 'a8-tableau'),
      eS('Il est arrivé le jour même que moi.', fr(E(1117)), 'Le même jour que. EN: comparing.', 'a8-erreurs'),
      eS('Rendez-vous même ici, à midi.', fr(E(1119)), 'Ici même. EN: right here.', 'a8-erreurs'),
      lC('Écoute. Quand le colis est-il arrivé ?', fr(E(1121)), ['le lendemain', 'une semaine après', 'ce soir-là exactement'], 2, 'Le soir même. EN: that evening.', 'a8-dejavu'),
    ],
  },
  {
    id: 'r9-quand', label: 'Quand même', targets: ['quand-meme-place'],
    questions: [
      mc('« anyway »', ['même', 'quand même', 'le même'], 1, 'Quand même. EN: quand même.', 'a9-quand'),
      mc("« Tu exagères quand même. » C'est...", ['un reproche', 'un merci'], 0, 'Un reproche. EN: reproach.', 'a9-choisir'),
      mc('Tu refuses une offre gentiment. Tu dis...', ['Merci même.', 'Merci quand même.'], 1, 'Merci quand même. EN: thanks anyway.', 'a9-erreurs'),
      tI('Ajoute quand même.', 'Il était fatigué, mais il est venu.', fr(E(1133)), 'À la fin. EN: at the end.', 'a9-quand'),
      tI('Ajoute quand même après le verbe.', "Je suis content d'être venu.", fr(E(1142)), 'Suis quand même. EN: after the verb.', 'a9-construire'),
      eS('Quand même il pleut, on part.', fr(E(1139)), 'Quand même suit le résultat. EN: after the result.', 'a9-erreurs'),
      eS('Il était fatigué, mais il est venu même.', fr(E(1133)), 'Le bloc entier : quand même. EN: quand même.', 'a9-erreurs'),
      lC('Écoute. La personne est...', fr(E(1138)), ['contente', 'indignée', 'polie'], 1, 'Quand même ! : un reproche. EN: indignant.', 'a9-ecoute'),
    ],
  },
  {
    id: 'r10-blocs', label: 'Les blocs figés', targets: ['bloc-calque'],
    questions: [
      mc('« at the same time »', ['au même temps', 'en même temps', 'à la même temps'], 1, 'En même temps. EN: en.', 'a10-expr'),
      mc('« Enchanté. » Tu réponds...', ['Moi de même.', 'Moi-même.'], 0, 'Moi de même. EN: likewise.', 'a10-choisir'),
      mc('« à même le sol » veut dire...', ['sur le même sol', 'directement sur le sol', 'même le sol'], 1, 'Directement. EN: directly on.', 'a10-expr'),
      tI('Dis-le avec en même temps.', 'Ils sont arrivés au même moment.', fr(E(1149)), 'En même temps. EN: at the same time.', 'a10-expr'),
      tI('Dis-le avec de même.', "Elle a dit merci, et j'ai fait la même chose.", fr(E(1151)), 'Fait de même. EN: did the same.', 'a10-construire'),
      tI('Écris-le plus soigné, avec tout de même.', 'Il a quand même accepté.', fr(E(1154)), 'Tout de même. EN: tout de même.', 'a10-choisir'),
      eS('Je ne peux pas écouter et écrire au même temps.', fr(E(1148)), 'En même temps. EN: en.', 'a10-cartes'),
      lC('Écoute. Où dormait-il ?', fr(E(1156)), ['dans un lit', 'directement sur le sol'], 1, 'À même le sol. EN: on the floor.', 'a10-ecoute'),
    ],
  },
  {
    id: 'r11-comparer', label: 'Comparer', targets: ['comparaison-plate'],
    questions: [
      mc('Pour comparer, par quoi commences-tu ?', ['ce qui change', 'ce qui est pareil', 'ton choix'], 1, 'Ce qui est pareil. EN: the same first.', 'a11-plan'),
      mc('« Les deux offres ont le même salaire. » Le salaire est...', ['identique', 'différent'], 0, 'Le même : identique. EN: identical.', 'a11-lecture'),
      mc('Quelle phrase dit ton choix malgré un défaut ?', ['Je la préfère quand même.', 'Je la préfère le même.', 'Je la préfère même.'], 0, 'Quand même. EN: anyway.', 'a11-cheat'),
      tI('Rends la phrase précise avec le même.', 'Les deux appartements ont une surface pareille.', fr(E(1168)), 'La même surface. EN: la même surface.', 'a11-lecture'),
      tI('Dis-le avec ne ... même pas.', "La première entreprise ne m'a pas répondu.", "La première entreprise ne m'a même pas répondu.", 'Même avant pas. EN: même pas.', 'a11-lecture'),
      eS("Ce sont des jumeaux, mais ils n'ont pas le même caractères.", fr(E(1173)), 'Un caractère : le même. EN: singular.', 'a11-usages'),
      eS("La propriétaire lui-même m'a fait visiter.", fr(E(1172)), 'Une femme : elle-même. EN: elle-même.', 'a11-scenario'),
      lC('Écoute. Choisit-il la seconde offre ?', fr(E(1167)), ['oui, malgré la distance', 'non, elle est trop loin'], 0, 'Quand même. EN: yes.', 'a11-cheat'),
    ],
  },
];

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: spread(ROUNDS),
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Comparer deux choses',
    opener: {
      line: "Deux offres, deux appartements, deux jumeaux : à toi d'écrire ce qui est pareil, ce qui change, et ton choix. EN: Two offers, two flats, two twins: your turn to write what is the same, what changes, and your choice.",
      imageRef: 'lessons/meme/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta propre comparaison et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own comparison and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-que', 'a11-quiz/r6-even', 'a11-quiz/r9-quand'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-meme', 'Même, tous ses emplois', ['les emplois', "l'accord et que", 'le même seul', 'comparer'], [
    teach('sheet-meme-teach', 'Rien ne change',
      `${REFRAME} Deux choses pareilles, une personne sans remplaçant, une règle sans exception, un jour déjà nommé, un résultat malgré l'obstacle : même dit toujours que rien ne change. EN: même always says nothing changes.`),
    table('sheet-meme-emplois', 'Les emplois de même', ['Emploi', 'Sens', 'Exemple'], [
      ['le même + nom', 'same', "J'ai le même ordinateur que toi."],
      ['le même, sans nom', 'the same one', "C'est le même."],
      ['moi-même, toi-même', 'myself, yourself', "Je l'ai fait moi-même."],
      ['même + nom ou pronom', 'even', 'Même Paul est venu.'],
      ['ne ... même pas', 'not even', "Il ne m'a même pas dit bonjour."],
      ['nom + même', 'that very', 'Elle est partie le jour même.'],
      ['quand même', 'anyway', 'On est sortis quand même.'],
      ['en même temps', 'at the same time', 'Ils sont arrivés en même temps.'],
    ]),
    table('sheet-meme-accord', "L'accord et que", ['Forme', 'Exemple'], [
      ['le même + nom masculin', 'le même quartier'],
      ['la même + nom féminin', 'la même rue'],
      ['les mêmes + nom pluriel', 'les mêmes horaires (liaison en z)'],
      ['le même ... que', 'la même voiture que son voisin'],
      ['la même chose que', 'Je veux la même chose que toi.'],
      [`aussi + adjectif + que (${COMPARATIFS_REF})`, 'Il est aussi grand que son frère.'],
      [`le même seul, comme celui (${DEMONSTRATIFS_REF})`, 'Ce sont les mêmes.'],
    ]),
    table('sheet-meme-comparer', 'Comparer : la liste de contrôle', ['À vérifier', 'Comment'], [
      ['Ce qui est pareil', 'le même, la même, les mêmes'],
      ['Que, jamais comme', 'le même loyer que l’autre'],
      ["L'accord", 'les mêmes fenêtres'],
      ['Une surprise', 'même, ou ne ... même pas'],
      ['Un détail précis', 'le jour même, lui-même'],
      ['Ton choix', 'je le prends quand même'],
    ]),
  ]),
  sheet('sheet-soi', 'Moi-même, toi-même', ['la série', "le trait d'union", 'me ou moi-même'], [
    teach('sheet-soi-teach', 'Le pronom tonique, un trait, même',
      `${Cap(PRONOMS_SUJETS_REF)} t'a montré moi, toi, lui, elle, nous, vous, eux, elles. Pour insister, ajoute un trait d'union et même. Au pluriel, même prend un s. Avec on ou chacun : soi-même. EN: stressed pronoun, hyphen, même; plural s; soi-même with on.`),
    table('sheet-soi-table', 'Toute la série', ['Sujet', 'Forme', 'Exemple'], [
      ['je', 'moi-même', "Je l'ai fait moi-même."],
      ['tu', 'toi-même', 'Fais-le toi-même.'],
      ['il', 'lui-même', 'Il a construit sa maison lui-même.'],
      ['elle', 'elle-même', 'Elle fait son pain elle-même.'],
      ['nous', 'nous-mêmes', 'Nous avons peint la cuisine nous-mêmes.'],
      ['vous', 'vous-même, vous-mêmes', 'Vous pouvez vérifier vous-même.'],
      ['ils', 'eux-mêmes', 'Ils ont tout organisé eux-mêmes.'],
      ['elles', 'elles-mêmes', 'Elles ont réglé le problème elles-mêmes.'],
      ['on, chacun', 'soi-même', 'On doit parfois se défendre soi-même.'],
    ]),
    teach('sheet-soi-reflechi', 'Me, ou moi-même',
      `Pour I hurt myself, le français a le verbe pronominal : je me suis blessé. ${Cap(PRONOMINAUX_REF)} te l'a appris. Moi-même ne remplace jamais me : il ajoute sans aide ou en personne. Elle s'est présentée elle-même : le verbe pronominal, plus l'insistance. EN: the reflexive says myself; moi-même only adds emphasis.`),
  ]),
  sheet('sheet-adverbe', 'Même = even', ['le sens', 'la place', 'ne ... même pas'], [
    teach('sheet-adverbe-teach', 'Le cas qu’on n’attendait pas',
      "Sans article devant lui, même peut vouloir dire even. Il ajoute le cas le plus surprenant : même Paul, même le dimanche, même en hiver. Devant un pronom, prends la forme tonique : même moi. Même contient déjà aussi : ne les mets pas ensemble. EN: même without an article can mean even; use stressed pronouns after it; never add aussi."),
    table('sheet-adverbe-place', 'La place de même', ['Structure', 'Exemple'], [
      ['même + nom sujet', 'Même mon père a ri.'],
      ['verbe + même + complément', 'Il travaille même le dimanche.'],
      ['auxiliaire + même + participe', 'Mon père a même ri.'],
      ['ne + verbe + même pas', 'Elle ne sait même pas où il habite.'],
      ['ne + auxiliaire + même pas + participe', "Il ne m'a même pas dit bonjour."],
      ['verbe + même + infinitif', 'On peut même y aller à pied.'],
      ['même + pronom tonique', 'Même moi, je sais faire ça.'],
      ['et même, en fin de liste', "Trois langues, et même un peu d'arabe."],
    ]),
  ]),
  sheet('sheet-place', 'Avant ou après le nom', ['le même jour', 'le jour même', 'ici même'], [
    teach('sheet-place-teach', 'Devant : pareil. Après : exactement.',
      "Devant le nom, même compare deux choses : le même jour, la même ville. Après le nom, même désigne une seule chose déjà nommée : le jour même, la ville même, ici même. Après une qualité, il veut dire en personne : la bonté même. Pour une personne, on dit plutôt lui-même ou elle-même. EN: before the noun, same; after it, that very one."),
    table('sheet-place-table', 'Les paires', ['Avant le nom', 'Après le nom'], [
      ['le même jour que moi', 'le jour même de l’entrevue'],
      ['le même soir', 'le soir même'],
      ['la même ville', 'la ville même, pas la banlieue'],
      ['les mêmes mots', 'les mots mêmes du ministre'],
      ['le même médecin', 'le médecin lui-même'],
      ['au même endroit', 'ici même, là même'],
      ['la même bonté', 'la bonté même'],
    ]),
  ]),
  sheet('sheet-expressions', 'Quand même et les blocs figés', ['quand même', 'tout de même', 'en même temps', 'de même, à même'], [
    teach('sheet-expressions-teach', "Quand même : l'obstacle ne change rien",
      "Quand même dit que le résultat ne change pas, malgré un obstacle : il pleut, mais on part quand même. Il se met à la fin, ou juste après le verbe conjugué. Dit seul et avec force, « Quand même ! » est un reproche, à l'oral. À l'écrit, tout de même sonne plus soigné. EN: quand même means anyway; alone it is a spoken reproach; tout de même is the written choice."),
    table('sheet-expressions-table', 'Les blocs figés', ['Bloc', 'Sens', 'Exemple'], [
      ['quand même', 'anyway, all the same', 'Merci quand même.'],
      ['tout de même', 'all the same (soigné)', 'Il a tout de même accepté.'],
      ['en même temps', 'at the same time', 'Ils sont arrivés en même temps.'],
      ['de même', 'likewise', "J'ai fait de même."],
      ['il en va de même pour', 'the same goes for', 'Il en va de même pour les loyers.'],
      ['moi de même', 'likewise (Enchanté)', 'Moi de même.'],
      ['de la même façon', 'in the same way', 'De la même façon, on peut payer en ligne.'],
      ['à même (à reconnaître)', 'directly on', 'Il dormait à même le sol.'],
    ]),
    table('sheet-expressions-registre', "L'oral et l'écrit", ['À l’oral', 'À l’écrit'], [
      ['Quand même !', 'Cela me surprend beaucoup.'],
      ['Tu exagères quand même.', 'Cela me semble excessif.'],
      ["C'est quand même cher.", "C'est tout de même cher."],
      ['Il est venu quand même.', 'Il est tout de même venu.'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-sens', title: 'Same ou even', format: 'sort' as const, coach: "Deux piles. Y a-t-il un article devant même ? Alors c'est same. Sinon, cherche la surprise. EN: sort by meaning.", buckets: ['pareil (same)', 'la surprise (even)'], items: [E(1001), E(1004), E(1003), E(1086), E(1012), E(1088)], audio: AUDIO },
  { id: 'd-accord', title: 'Le s de mêmes', format: 'mcq' as const, coach: 'Même prend le nombre du nom. EN: même agrees with the noun.', q: 'Ils lisent les ... livres.', opts: ['même', 'mêmes'], correct: 1, why: 'Livres : mêmes. EN: plural.', items: [E(1015), E(1016), E(1017), E(1018), E(1025), E(1029)], audio: AUDIO },
  { id: 'd-que', title: 'Que, jamais comme', format: 'mcq' as const, coach: 'Après le même, on compare avec que. EN: le même ... que.', q: "J'ai le même ordinateur ... toi.", opts: ['que', 'comme'], correct: 0, why: 'Que. EN: que.', items: [E(1000), E(1032), E(1033), E(1037), E(1040), E(1045)], audio: AUDIO },
  { id: 'd-pronom', title: 'Le même, avec son article', format: 'mcq' as const, coach: "Sans nom après, garde l'article du nom remplacé. EN: keep the article.", q: "Tu as un beau manteau. J'ai ... .", opts: ['même', 'le même'], correct: 1, why: 'Le même. EN: le même.', items: [E(1050), E(1051), E(1052), E(1053), E(1060), E(1063)], audio: AUDIO },
  { id: 'd-soi', title: 'Me, ou moi-même', format: 'mcq' as const, coach: "Le verbe pronominal dit déjà myself. Moi-même insiste. EN: reflexive first.", q: 'I cut myself : Je ... suis coupé.', opts: ['me', 'moi-même'], correct: 0, why: 'Me. EN: me.', items: [E(1065), E(1066), E(1067), E(1069), E(1071), E(1076)], audio: AUDIO },
  { id: 'd-even', title: 'Même, sans article', format: 'mcq' as const, coach: "Pour even, même se met devant l'article. EN: même before the article.", q: "... le chat a peur de l'orage. (even)", opts: ['Le même', 'Même'], correct: 1, why: 'Même le chat. EN: even the cat.', items: [E(1084), E(1086), E(1088), E(1089), E(1092), E(1096)], audio: AUDIO },
  { id: 'd-place', title: 'Même à sa place', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et montre ce qui surprend. EN: read each aloud and point at the surprise.', items: [E(1099), E(1100), E(1102), E(1105), E(1108), E(1113)], audio: AUDIO },
  { id: 'd-avant-apres', title: 'Pareil ou exactement', format: 'sort' as const, coach: 'Deux piles : même devant le nom, ou après. EN: before or after the noun.', buckets: ['pareil : le même jour', 'exactement : le jour même'], items: [E(1117), E(1116), E(1122), E(1123), E(1129), E(1121)], audio: AUDIO },
  { id: 'd-quand', title: 'Le bloc entier', format: 'mcq' as const, coach: "Anyway, c'est quand même, après le résultat. EN: quand même, after the result.", q: 'Il était fatigué, mais il est venu ... .', opts: ['quand même', 'même'], correct: 0, why: 'Quand même. EN: quand même.', items: [E(1133), E(1134), E(1135), E(1139), E(1141), E(1142)], audio: AUDIO },
  { id: 'd-blocs', title: 'Les blocs figés', format: 'flashcard' as const, coach: 'Lis chaque bloc entier, avec son petit mot devant. EN: read each fixed block whole.', items: [E(1148), E(1149), E(1151), E(1152), E(1154), E(1164)], audio: AUDIO },
  { id: 'd-comparer', title: 'Pareil, différent, choix', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis : pareil, différent, ou choix. EN: label each one.', items: [E(1165), E(1166), E(1167), E(1168), E(1171), E(1173)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'un-seul-sens', description: 'Reads every même as same, so même Paul or quand même is misunderstood and the article is dropped or added at random.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-sens', retest: 'd-sens' },
  { id: 'accord-oublie', description: 'Leaves même without its s before a plural noun, or agrees it with the subject instead of the noun, because the s is silent.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'meme-comme', description: 'Translates the same as with comme or aussi, or puts je after que, following the English as.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-que', retest: 'd-que' },
  { id: 'meme-sans-article', description: 'Says j’ai même or picks the article of the wrong noun when le même stands alone, treating it as a bare adverb.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-pronom', retest: 'd-pronom' },
  { id: 'soi-au-lieu-de-se', description: 'Uses moi-même where a reflexive verb is needed (j’ai coupé moi-même), puts a subject pronoun before -même, or drops the hyphen or the plural s.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-soi', retest: 'd-soi' },
  { id: 'even-traduit', description: 'Renders even with aussi or le même, puts a subject pronoun after même, or doubles même with aussi.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-even', retest: 'd-even' },
  { id: 'meme-mal-place', description: 'Puts even-même at the end of the clause, after the participle or before ne, instead of right before what it targets.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-place', retest: 'd-place' },
  { id: 'avant-apres', description: 'Uses le même jour for that very day, or le jour même with que, confusing même before and after the noun.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-avant-apres', retest: 'd-avant-apres' },
  { id: 'quand-meme-place', description: 'Opens the clause with quand même as if it were even though, or uses même alone for anyway.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-quand', retest: 'd-quand' },
  { id: 'bloc-calque', description: 'Calques the fixed blocks from English (au même temps, moi-même for likewise) or reads à même as the same.', detectOn: ['a10-construire', 'a10-choisir', 'a10-check', 'a11-mission'], drill: 'd-blocs', retest: 'd-blocs' },
  { id: 'comparaison-plate', description: 'Writes a comparison as a list of details, with pareil or comme everywhere and no choice at the end.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-comparer', retest: 'd-comparer' },
];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-24-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-24-jumelles': "The twins text (act 1), ONE VOICE, one take, a warm Québécoise voice reading a short magazine portrait aloud: amused, unhurried. Every même is plain [mɛm], never stressed for teaching; « même les professeurs » and « même la nuit » get the ordinary lift of a surprise, nothing more. Keep the liaison in « les mêmes yeux ».",
  'rec-b1-24-voisines': "The street tour (act 2), two voices: Nadia, a cheerful Québécoise in her forties, and the learner, relaxed. The three même lines must sound identical in melody so the ear hears that only the article and the silent s change. « le même autobus » runs as one group, meh-mo-to-BÜS.",
  'rec-b1-24-accord': "The four agreement cards, one voice. Card three: the z liaison in « les mêmes horaires » must be clearly audible. Card four holds two phrases across a middot; leave a clear beat.",
  'rec-b1-24-que-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): nine lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « que » after the noun is never stressed. Lines three and four (aussi grande que / la même taille que) are read with the same melody, so the learner compares meaning, not intonation.",
  'rec-b1-24-que': 'The four le même que cards, one voice, plain delivery. Card four has two phrases across a middot; a clear beat between them.',
  'rec-b1-24-piege-que': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound (comme, aussi, je) are never spoken.",
  'rec-b1-24-forum': "Hugo's forum post (act 4), ONE VOICE, one take, a young Belgian (Liège) voice reading his own message aloud, slightly hopeful. « le même » and « les mêmes » are unstressed; « Même un modèle un peu usé » has the small lift of a concession.",
  'rec-b1-24-pronom': 'The four pronoun cards. Card one « C\'est le même » ends on a falling MEM, as a statement, never as a question.',
  'rec-b1-24-meuble': "The bookcase visit (act 5), two voices: Mathieu, easy-going, Québécois, and the learner, quietly proud. « moi-même », « nous-mêmes » and « soi-même » carry ordinary final stress on MEM, never an extra push.",
  'rec-b1-24-soi': 'The four -même cards. Card three lists four forms across middots; read them as a list, with a beat between each.',
  'rec-b1-24-piege-soi': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-24-even-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): nine lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The word after même (le chat, le dimanche, moi, en hiver) carries the surprise with a natural rise; même itself stays unstressed.',
  'rec-b1-24-even': 'The four even cards, one voice. On card four, « et même un peu d\'arabe » is the last item of a list: a small pause before « et même ».',
  'rec-b1-24-collegue': "The Geneva office (act 7), two voices: Nadia, dry and a little offended, Swiss French welcome, and the learner, conciliatory. « même pas » is said as one block with no break, as the lesson teaches.",
  'rec-b1-24-place': 'The four placement cards. Card one holds two sentences across a middot: read them with the SAME melody so only the position of même differs.',
  'rec-b1-24-piege-place': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-24-dejavu': "The déjà-vu story (act 8), ONE VOICE, one take, a Belgian man in his thirties telling a slightly puzzling story to a friend. The waitress's line in quotation marks may be read with a light change of voice. « ici même » and « le soir même » end their groups on MEM.",
  'rec-b1-24-avant-apres': 'The four before/after cards. Cards one and two are a pair: same pace and melody, so the learner hears the position of même move.',
  'rec-b1-24-quand-ecoute': "REQUIRED FOR THE EAR MISSION (act 9): nine lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Line seven (« Quand même ! ») is INDIGNANT: short, sharp, falling, the way someone reacts to a neighbour's music at 2 a.m. The other lines are neutral.",
  'rec-b1-24-quand': 'The four quand même cards. Card four (même si) is recognition only: read it at the same pace as the others, with no teaching emphasis.',
  'rec-b1-24-expr-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): ten lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The little word before même (en, de, tout de, à) must be audible; never swallow « en » in « en même temps ».',
  'rec-b1-24-expr': 'The four fixed-block cards, one voice, plain delivery.',
  'rec-b1-24-offres': "Mathieu's comparison (act 11), ONE VOICE, one take, a Québécois man in his thirties thinking aloud, calm and undecided until the last sentence, which lands with quiet resolve. The four moves (same, different, surprise, choice) are audible as four blocks.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 24',
  intro: 'You have been using même for a while, mostly as the same. French asks much more of it: it also means myself, even, that very, and, in quand même, anyway. This lesson takes each job in turn, with its agreement and its place, shows how même changes meaning when it moves around a noun, and ends with you comparing two things using several of them.',
  skill: 'PE',
  grammarAssumed: [
    PRONOMS_SUJETS_UNIT, NEGATION_UNIT, ACCORD_UNIT, PC_AVOIR_UNIT, COMPARATIFS_UNIT,
    PRONOMINAUX_UNIT, DEMONSTRATIFS_UNIT, POSSESSIFS_UNIT, ORDRE_PRONOMS_UNIT, NEGATION_AVANCEE_UNIT,
  ],
  grammarIntroduced: [
    'même as an identity adjective between article and noun (le même, la même, les mêmes), agreeing in number, with the z liaison before a vowel',
    'le même ... que and la même chose que as the comparison of identity, contrasted with aussi + adjective + que, with a stressed pronoun after que',
    'le même, la même, les mêmes as pronouns replacing a noun already given, taking that noun\'s article, and applied to a person who has not changed',
    'The emphatic pronouns moi-même to eux-mêmes and soi-même with on, distinguished from the reflexive pronoun of a pronominal verb',
    'même as a focusing adverb meaning even, before a noun phrase, a pronoun in its stressed form or a complement, and et même at the end of a list',
    'The placement of focusing même: before its target, between auxiliary and participle, and in ne ... même pas',
    'même after a noun, a place or a time adverb meaning that very (le jour même, ici même, aujourd\'hui même) and after a quality noun (la bonté même), against même before the noun',
    'quand même as a concessive adverb (anyway, all the same), its placement, its reproachful use with the conditional, and the spoken exclamation « Quand même ! »',
    'The fixed expressions en même temps, de même, il en va de même, moi de même, tout de même (written register), de la même façon, and à même for recognition',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu utilises même depuis longtemps, surtout pour dire pareil. Le français lui demande bien plus : il veut aussi dire moi-même, even, ce jour-là exactement, et, dans quand même, malgré tout. Cette leçon prend chaque emploi à son tour, avec son accord et sa place, et se termine par ta propre comparaison.",
    minutes: 125,
    difficulty: 3,
    glyph: 'même',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: MEME_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, JUMELLES_TEXT, FORUM_TEXT, DEJAVU_TEXT, OFFRES_TEXT, dicteeFor };
