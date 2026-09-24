// b1.02.l1 « L'imparfait : les emplois » — the lesson. REBUILD v2, DRAFT.
//
// Built to RICH-LESSON-STANDARD.md (binding) on top of B1-PILOT-BRIEF.md, and
// to the shape Paul approved on the phone for b1.01. Not imported, not merged
// into seed.json, not published. The `task` section is the draft type in
// `_task-section.ts`, not in schema.ts, so `sections` is `DraftSection[]`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · authored rows released at the checkpoint)
// ══════════════════════════════════════════════════════════════════════════
//
//   Default rhythm per act: meet (scene / story / reading), name (cardDeck,
//   examples or tapTable), build (groupDrill, gated), choose (listening with
//   meaning questions, hideLines), trap (stepped trapDrill or commonErrors),
//   check (control-page groupDrill, gated).
//
//    1  Le souvenir              7   scene, goals, b1.01 recall, the letter,
//                                    noticing, the six uses (tapTable), check
//    2  L'habitude               8   tous les samedis, d'habitude, chaque été,
//                                    souvent, le samedi; cues that fail
//    3  Avant et maintenant      7   avant, autrefois, à l'époque against
//                                    maintenant; avant de + verbe
//    4  Les états                8   être, avoir peur/faim/envie, savoir,
//                                    connaître, vouloir, pouvoir, devoir
//    5  Le décor                 7   il y avait, c'était, places, people
//    6  La météo, l'heure, l'âge 8   il faisait, il neigeait, il était minuit,
//                                    j'avais douze ans
//    7  L'action en cours        6   PREVIEW only: b1.03 owns the interruption
//    8  La politesse             8   je voulais, je venais, je me demandais si
//    9  Les pièges anglais       7   would, used to, was -ing, and the two
//                                    « would » that are NOT the imparfait
//   10  Tout ensemble           10   long reading, interview, TASK, speaking,
//                                    recap, progressCheck, QUIZ, review, roundup
//
//   TOTAL 76 missions, 10 acts, 177 authored rows + 81 imports.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (unchanged; b1.03 and b1.04 import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « À l'imparfait, on regarde le passé. On ne le compte pas. »
//   EN: In the imparfait you look at the past. You do not count it.
//
//   It carries habit, state, scenery, weather, time and age. It does NOT carry
//   the polite imparfait, and act 8 says so on screen instead of stretching it.
//   It avoids « décor contre action », which is b1.03's contrast.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    WHEN the imparfait is the right tense, act by act above, and the
//           English traps would / used to / was -ing.
//   QUOTES  b1.01's reframe (act 1, imported), and its forms (imported by id,
//           never re-authored). a2.13 for je voudrais, a2.14 for savoir and
//           connaître, a2.05 for the passé composé of a counted period.
//   LEAVES  the passé composé contrast to b1.03 and b1.04. Act 7 previews the
//           action in progress, names b1.03 and stops; two rows (.850, .851)
//           are the only interruption sentences in the lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu everywhere in instruction, coach, drill and task copy; characters use
//   what the situation needs (vous to a landlord, a teacher, a recruiter).
//   Every learner-facing French string that is not a title, a label or an
//   answer carries English (`en`, or a final « EN: » sentence). Every `say` is
//   French, spoken fr-FR. Theme `recits-au-passe`. A2 citations are resolved
//   through the shipped seq and read in French (« la leçon 16 du niveau A2 »).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. B1 units still have no seq in seed.json, so b1.01 and b1.03 are cited
//      as « la leçon précédente / suivante ». Sequence the B1 trail?
//   2. This lesson imports 45 of b1.01's rows by id rather than re-authoring
//      the forms. If the two drafts are ever imported apart, those ids dangle.
//   3. Two tapTables in the flow (act 1's six uses, act 6's weather/time/age).
//      The old one-tapTable rule was written for 24-mission lessons.
//   4. The task is written (PE). b1.01's was written too. Should one of the
//      four pilot lessons carry a spoken task instead?
//   5. Act 9 teaches that a polite « would » and a conditional « would » are
//      not the imparfait. The conditional itself is not taught anywhere yet.
//   6. Validators run with the task filtered out and its id removed from its
//      act (`lessonWithoutTask`). When `task` enters the schema, that goes.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, B, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, COUNTEREXAMPLE_IDS, dicteeFor,
  B101_REFRAME, B101_REFRAME_EN, B101_REF, B101_UNIT, B103_REF, B103_UNIT,
  PC_UNIT, PC_ETRE_UNIT, MODAL_UNIT, SAVOIR_UNIT, PRONOMINAL_UNIT, Y_EN_UNIT, METEO_UNIT, HEURE_UNIT,
  PC_REF, MODAL_REF, SAVOIR_REF, METEO_REF, HEURE_REF,
} from './imparfait-usage-corpus.ts';
import { ALL_ROWS as B101_ROWS } from './imparfait-formation-corpus.ts';
import { IMPARFAIT_USAGE_TERMS } from './imparfait-usage-terms.ts';

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
const ROW = new Map<string, SrcItem>([...ALL_ROWS, ...B101_ROWS].map((r) => [r.id, r]));

/** An item's fr/en, from this corpus, b1.01's or the seed. Throws on a typo,
 *  so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.02: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note?: string) => ({ fr: src(id).fr, en: src(id).en, ...(note ? { note } : {}) });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** Every id a `practice: speak` section may name: voiceflash only, and never
 *  a counterexample (the mic would score a present-tense model of a past
 *  lesson). b1.01's rows all carry voiceflash; most seed imports do not. */
const SPEAK_IDS = [
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash') && !COUNTEREXAMPLE_IDS.includes(r.id)).map((r) => r.id),
  ...IMPORTED.b101Forms,
  'fr.a2.pronoms-essentiels.333', 'fr.sons.elision.035', 'fr.sons.mots-essentiels.056', 'fr.sons.jours-et-mois.129',
].filter((id) => !NOT_SPEAKABLE.includes(id));

/** The act check: control pages only, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return { type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause', groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE SOUVENIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** BREAKDOWN, NOT RUDENESS. The learner knows the forms (b1.01) and still
 *  tells the story in the present, then in the passé composé, and the
 *  colleague hears a shop that is still open and a single afternoon on the
 *  ice. Nobody corrects anybody. NO « ? » OR « ! » IN ANY BUBBLE. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le lac, tous les samedis',
  frSub: 'Un souvenir qui tombe à plat',
  setting: { place: 'La cafétéria du bureau', city: 'Montréal', time: '12 h 15', ambience: 'des plateaux, une machine à café, la neige dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, lundi midi. Tu manges avec Sophie, une nouvelle collègue. Tu as grandi à North Hatley, un petit village des Cantons-de-l'Est. EN: Lunch with a new colleague; you grew up in a small village in the Eastern Townships.",
      size: 'md',
      audio: AUDIO,
    },
    { kind: 'bubble', from: 'them', speaker: 'Sophie', fr: "North Hatley? C'était comment, chez toi?", en: 'North Hatley? What was it like where you grew up?', respell: '[say-teh koh-MAHⁿ shay TWAH]', stage: 'Elle pose sa fourchette. EN: She puts down her fork.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: "C'est un petit village. Il y a une épicerie et un lac.", en: "It's a small village. There's a grocery store and a lake.", respell: '[seh tuhⁿ puh-tee vee-LAZH]', stage: "Tu parles au présent. Pour Sophie, c'est le village d'aujourd'hui. EN: In the present, so she hears today.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Sophie', fr: 'Ah, tu y retournes souvent?', en: 'Oh, do you go back often?', respell: '[tü ee ruh-TOORN soo-VAHⁿ]', stage: "L'épicerie a fermé il y a vingt ans. EN: The shop closed twenty years ago.", size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: "Non. L'hiver, on a patiné sur le lac.", en: 'No. In winter, we skated on the lake.', respell: '[ohⁿ-nah pa-tee-NAY sür luh LAK]', stage: 'Tu essaies le passé composé. Sophie entend une seule sortie. EN: She hears one single outing.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Sophie', fr: 'Ah oui? Et après?', en: 'Oh yes? And then what?', respell: '[ah WEE · ay ah-PREH]', stage: "Elle attend la suite de l'histoire. EN: She waits for the rest of the story.", size: 'md', audio: AUDIO },
    {
      kind: 'choice',
      prompt: "Encore une fois. Tu veux dire : chaque samedi, tout l'hiver, pendant des années. Tu dis quoi ? EN: Every Saturday, all winter, for years. Which sentence?",
      size: 'lg',
      options: [
        { fr: 'Tous les samedis, on a patiné sur le lac.', respell: '[too lay sam-DEE ohⁿ-nah pa-tee-NAY sür luh LAK]', en: 'Every Saturday, we skated on the lake.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Tous les samedis, on patinait sur le lac.', respell: '[too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK]', en: 'Every Saturday, we would skate on the lake.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Sophie sourit : « Moi aussi, à Chicoutimi. » Elle voit la scène. EN: She can see it.",
        breaks: "Sophie hoche la tête. Elle entend une liste finie, pas un souvenir. EN: She hears a closed list, not a memory.",
      },
    },
    {
      kind: 'break',
      heading: 'Tu as compté au lieu de regarder',
      body: "Le passé composé compte et ferme : c'est arrivé, c'est fini. L'imparfait ouvre une fenêtre : tu vois l'hiver, et le samedi revient. EN: The passé composé counts and closes; the imparfait opens a window where Saturday keeps coming back.",
      wrong: { fr: 'Tous les samedis, on a patiné sur le lac.', ipa: '/tu le sam.di ɔ̃.na pa.ti.ne syʁ lə lak/', respell: '[too lay sam-DEE ohⁿ-nah pa-tee-NAY sür luh LAK]', en: 'Every Saturday, we skated on the lake.' },
      right: { fr: 'Tous les samedis, on patinait sur le lac.', ipa: '/tu le sam.di ɔ̃ pa.ti.nɛ syʁ lə lak/', respell: '[too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK]', en: 'Every Saturday, we would skate on the lake.' },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg',
      audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Personne ne t'a corrigé. Sophie a changé de sujet, et le souvenir est resté dans ta tête. EN: Nobody corrected you; the memory stayed in your head.",
      size: 'md',
    },
  ],
  closing: { text: 'Deux essais, deux temps, et aucun ne montrait le souvenir. EN: Two tries, two tenses, no memory.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude', 'decor'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  frSub: 'Dix étapes',
  goals: [
    { t: 'Raconter une habitude du passé', s: "Acte 2 : tous les samedis, d'habitude, chaque été" },
    { t: 'Comparer avant et maintenant', s: 'Acte 3 : autrefois, à l’époque' },
    { t: 'Dire comment tu étais et ce que tu sentais', s: 'Acte 4 : les états' },
    { t: 'Décrire un lieu, la météo, l’heure et l’âge', s: 'Actes 5 et 6 : le décor' },
    { t: 'Demander quelque chose avec douceur', s: 'Acte 8 : je voulais vous demander' },
    { t: 'Ne pas traduire would et used to mot à mot', s: 'Acte 9 : le piège anglais' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** b1.01 RECALL, ONE MISSION. Its reframe is IMPORTED, never retyped. The
 *  forms on these cards are b1.01's own rows, imported by id. */
const A1_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les formes, en trente secondes',
  frSub: 'Un rappel, pas une leçon',
  hint: 'Trois cartes. Tu sais déjà tout ça.',
  audio: REC('rec-b1-02-rappel'),
  say: `${B101_REFRAME} Et maintenant, quand ?`,
  terms: ['habitude'],
  cards: [
    {
      head: `La phrase de ${B101_REF}`,
      label: 'la recette',
      fr: 'nous parlons · je parlais',
      sub: '[noo par-LOHⁿ] · [zhuh par-LEH]',
      body: `« ${B101_REFRAME} » EN: ${B101_REFRAME_EN} Ici, on ne refait pas les formes : on apprend quand les utiliser.`,
    },
    {
      head: 'Les fins',
      label: 'quatre sonnent pareil',
      fr: 'je parlais · nous parlions · vous parliez',
      sub: '[zhuh par-LEH] · [noo par-LYOHⁿ] · [voo par-LYAY]',
      body: 'je, tu, il, ils : la même fin à l’oreille. nous et vous : un i en plus. EN: four forms sound the same; nous and vous add an i.',
    },
    {
      head: 'La seule exception',
      label: 'être',
      fr: "j'étais · nous étions",
      sub: '[zhay-TEH] · [noo-zay-TYOHⁿ]',
      body: 'être part de ét-. Tous les autres verbes partent de nous. EN: être starts from ét-; every other verb from the nous form.',
    },
  ],
};

/** B1 INPUT: the text comes BEFORE the rule. ~150 words, one block (the
 *  renderer discards authored newlines). Every use this lesson owns appears in
 *  it, plus one present-tense « Aujourd'hui » hinge and the softened request
 *  act 8 will teach. NO passé composé: b1.03 has not happened yet.
 *  Glossary keys appear in `text` verbatim and are four words or fewer. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Une lettre de Montréal à Bruxelles',
  frSub: 'Benoît écrit à son ancienne propriétaire',
  text: "Chère Madame Peeters, vous vous souvenez peut-être de moi. En 2006, j'habitais dans votre appartement, rue du Page, à Ixelles. J'avais vingt-deux ans et j'étais étudiant. L'appartement était petit, mais il y avait une grande fenêtre sur la rue et beaucoup de lumière. En hiver, il faisait froid et il pleuvait presque tous les jours. Le chauffage faisait un bruit terrible la nuit ! Au début, je ne connaissais personne à Bruxelles. Je travaillais le soir dans un café et je rentrais souvent à minuit. Tous les dimanches, j'allais au marché de la place Flagey et j'achetais des gaufres pour les voisins. D'habitude, vous preniez le café avec nous dans la cour. Aujourd'hui, j'habite à Montréal avec ma famille. Nous venons à Bruxelles en mai, et je me demandais si nous pouvions passer vous dire bonjour. Bien à vous, Benoît Lemaire",
  glossary: [
    { word: 'Ixelles', en: 'Ixelles', note: 'Une commune de Bruxelles, avec beaucoup d’étudiants.' },
    { word: 'Le chauffage', en: 'the heating', note: 'Les radiateurs, l’eau chaude dans les tuyaux.' },
    { word: 'un bruit', en: 'a noise' },
    { word: 'je rentrais', en: 'I would come home', note: 'rentrer : revenir à la maison. Ici, une habitude.' },
    { word: 'des gaufres', en: 'waffles', note: 'Belges, bien sûr.' },
    { word: 'la cour', en: 'the courtyard', note: 'L’espace derrière l’immeuble.' },
    { word: 'je me demandais si', en: 'I was wondering if', note: 'Une demande polie. Le sens est présent.' },
    { word: 'Bien à vous', en: 'Kind regards', note: 'Pour finir une lettre un peu formelle.' },
  ],
  questions: [
    { q: 'Quel âge avait Benoît en 2006 ?', a: 'Vingt-deux ans. « J’avais vingt-deux ans » : l’âge au passé, c’est avoir à l’imparfait. EN: age takes avoir.' },
    { q: 'Qu’est-ce qu’il faisait tous les dimanches ?', a: 'Il allait au marché de la place Flagey et il achetait des gaufres. Ça revenait chaque semaine. EN: a weekly habit.' },
    { q: 'Trouve deux phrases qui décrivent l’appartement.', a: '« L’appartement était petit » et « il y avait une grande fenêtre sur la rue ». Rien ne se passe : c’est le décor. EN: scenery, not action.' },
    { q: '« Je me demandais si nous pouvions passer. » Benoît parle de 2006 ?', a: 'Non, il parle de maintenant. L’imparfait rend la demande plus douce. EN: present meaning, softer form.' },
  ],
  audio: REC('rec-b1-02-lettre'),
  say: 'Lis la lettre en entier. Tu vas retrouver six emplois dedans.',
  terms: ['habitude', 'decor', 'poli'],
};

/** NOTICING before the rule: the learner sorts the letter's own verbs by what
 *  they DO. Group 3 is a control page. Correct indices scattered 1, 0, 1. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Dans la lettre, qui fait quoi ?',
  frSub: 'Repérer avant la règle',
  groups: [
    grp('Ce qui revenait', [
      { fr: "Tous les dimanches, j'allais au marché.", note: 'chaque semaine', en: 'Every Sunday, I went to the market.' },
      { fr: 'Je rentrais souvent à minuit.', note: 'souvent', en: 'I often came home at midnight.' },
      { fr: "D'habitude, vous preniez le café avec nous.", note: "d'habitude", en: 'You usually had coffee with us.' },
    ], chk('Ces trois phrases racontent quoi ? EN: What do these three tell?', ['une seule fois', 'une chose qui revenait', 'une chose vraie aujourd’hui'], 1, 'Chaque dimanche, souvent, d’habitude : on ne compte pas les fois. EN: no count, and none needed.')),
    grp('Comment c’était', [
      { fr: "L'appartement était petit.", note: 'un lieu', en: 'The flat was small.' },
      { fr: 'Il y avait une grande fenêtre.', note: 'un lieu', en: 'There was a big window.' },
      { fr: 'Il faisait froid.', note: 'la météo', en: 'It was cold.' },
      { fr: "J'avais vingt-deux ans.", note: 'l’âge', en: 'I was twenty-two.' },
    ], chk('Ici, est-ce que quelque chose se passe ? EN: Is anything happening here?', ['Non, on regarde le décor.', 'Oui, une action commence.', 'Oui, une action finit.'], 0, 'Rien ne commence et rien ne finit. C’est une photo. EN: it is a photo.')),
    ctl('Et la dernière phrase', '« Je me demandais si nous pouvions passer. » Benoît se demande ça quand ? EN: When is he wondering?', ['en 2006', 'maintenant, en écrivant', 'en mai, à Bruxelles'], 1, 'La forme est passée, le sens est présent. C’est l’acte 8. EN: past form, present meaning.'),
  ],
  audio: AUDIO,
  say: `Trie les verbes de la lettre. ${REFRAME}`,
  terms: ['habitude', 'decor', 'poli'],
};

/** THE MAP OF THE LESSON, ONE SCREEN. Six rows is the Pixel 6 ceiling for a
 *  tapTable, and the seventh use (the action in progress) is act 7's preview,
 *  so six is also the count of what this lesson fully owns. The full table,
 *  with the cues and the seventh row, lives in the sheet. */
const A1_PANORAMA: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a1-panorama',
  layer: 'core',
  title: 'Six emplois, un seul temps',
  frSub: 'La carte de la leçon',
  sheetId: 'sheet-emplois',
  cols: ['Emploi', 'Exemple'],
  rows: [
    { cells: ['une habitude', 'On patinait.'], say: 'Tous les samedis, on patinait sur le lac.', detail: { title: 'Une habitude', body: 'Une action qui revenait, sans nombre. Acte 2. EN: a repeated action with no count.', say: 'Tous les samedis, on patinait sur le lac.' } },
    { cells: ['avant / maintenant', "Avant, j'habitais ici."], say: "Avant, j'habitais à Bruxelles.", detail: { title: 'Deux époques', body: 'Avant, autrefois, à l’époque ouvrent le passé. Acte 3. EN: those words open the past.', say: "Avant, j'habitais à Bruxelles." } },
    { cells: ['un état', "J'étais fatigué."], say: "J'étais fatigué et j'avais froid.", detail: { title: 'Un état, un sentiment', body: 'Comment tu étais, ce que tu sentais, ce que tu savais. Acte 4. EN: how you were, felt or knew.', say: "J'étais fatigué et j'avais froid." } },
    { cells: ['le décor', 'Il y avait un jardin.'], say: 'Il y avait un jardin derrière la maison.', detail: { title: 'Le décor', body: 'Le lieu, les gens, les objets autour du souvenir. Acte 5. EN: the place, people and things.', say: 'Il y avait un jardin derrière la maison.' } },
    { cells: ['la météo, l’heure', 'Il faisait froid.'], say: 'Il faisait froid.', detail: { title: 'La météo, l’heure, l’âge', body: 'il faisait, il neigeait, il était minuit, j’avais douze ans. Acte 6. EN: weather, clock time and age.', say: 'Il était minuit.' } },
    { cells: ['la politesse', 'Je voulais vous demander...'], say: 'Je voulais vous demander un petit service.', detail: { title: 'La politesse', body: 'Forme passée, sens présent. Le seul emploi qui ne regarde pas le passé. Acte 8. EN: the one use that is not about the past.', say: 'Je voulais vous demander un petit service.' } },
  ],
  audio: AUDIO,
  say: `Voilà la carte. ${REFRAME}`,
  terms: ['habitude', 'decor', 'poli'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', 'Une photo de 1998, un village. « Il ... une épicerie. » Elle a fermé en 2005. EN: The shop closed in 2005.', ['y a', 'y avait', 'y a eu'], 1, 'Le village d’avant : il y avait. Le présent dirait qu’elle est encore là. EN: the present would mean it is still open.'),
  ctl('Compter ou regarder', '« Tous les samedis, on ... sur le lac. » Des années de samedis. EN: Years of Saturdays.', ['a patiné', 'patinait'], 1, 'On ne compte pas les samedis : imparfait. EN: no count, so the imparfait.'),
  ctl('Attention', '« Avant de dormir, je lis. » Ce verbe est au présent ou à l’imparfait ? EN: Present or imparfait?', ['au présent', 'à l’imparfait'], 0, 'C’est une habitude d’aujourd’hui. Le mot avant ne décide rien. EN: avant is not a switch.'),
], ['habitude', 'indice']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le souvenir',
    opener: { line: 'Tu sais fabriquer l’imparfait. Ici, tu vas voir à quoi il sert, et pourquoi ton souvenir tombe à plat sans lui. EN: You can build the imparfait; now you find out what it is for.', imageRef: 'lessons/imparfait-usage/act01.jpg' },
    sections: [],
    milestone: 'Tu as vu un souvenir tomber à plat, et tu as la carte des six emplois. EN: You watched a memory fall flat and you have the map.',
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_RAPPEL, A1_LECTURE, A1_REPERER, A1_PANORAMA, A1_CHECK],
  imports: [B(1440), B(1460), B(1461), B(1462), B(1463), 'fr.sons.elision.035'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — L'HABITUDE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET IT, as a conversation this time: a grandmother and her grandson, so
 *  the habit sentences arrive in someone's mouth before they arrive as a rule.
 *  `story` bubbles avoid « ? » and « ! » like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le samedi de grand-maman',
  frSub: 'Chicoutimi, dans les années soixante-dix',
  setting: 'Chicoutimi. Louise, 74 ans, montre une vieille photo à son petit-fils Marc. EN: Louise shows her grandson an old photo.',
  bubbles: [
    { from: 'user', fr: 'C’est qui, sur la photo, grand-maman', en: 'Who is that in the photo, grandma?' },
    { from: 'coach', fr: 'C’est moi, à dix-huit ans. Tous les samedis, mon père faisait des crêpes.', en: 'That’s me at eighteen. Every Saturday, my father made crepes.' },
    { from: 'user', fr: 'Tous les samedis, vraiment', en: 'Every Saturday, really?' },
    { from: 'coach', fr: 'Oui. D’habitude, on se levait à six heures, même l’hiver.', en: 'Yes. We usually got up at six, even in winter.' },
    { from: 'coach', fr: 'Après, le dimanche, on mangeait chez ma tante.', en: 'Then on Sundays we ate at my aunt’s.' },
    { from: 'user', fr: 'Et l’été', en: 'And in summer?' },
    { from: 'coach', fr: 'Chaque été, on allait au Lac-Saint-Jean. Une fois par mois, on descendait à Québec.', en: 'Every summer we went to Lac-Saint-Jean. Once a month we went down to Quebec City.' },
    { from: 'narrator', fr: 'Louise raconte vingt ans de samedis. Elle n’en compte aucun.', en: 'Louise is telling twenty years of Saturdays. She counts none of them.' },
  ],
  closing: { fr: 'Tous ces verbes sont à l’imparfait, et aucun ne dit combien de fois.', en: 'All these verbs are in the imparfait, and none says how many times.' },
  audio: REC('rec-b1-02-louise'),
  say: 'Écoute Louise. Compte les fois, si tu peux.',
  terms: ['habitude', 'quebec'],
};

/** NAME IT: the cues, one per card, each with a real sentence under it. The
 *  full cue list and its limits live in the sheet. */
const A2_INDICES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-indices',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les mots qui annoncent une habitude',
  frSub: 'Six indices',
  hint: 'Six cartes. Chaque mot, puis une phrase.',
  sheetId: 'sheet-indices',
  audio: REC('rec-b1-02-indices'),
  say: REFRAME,
  terms: ['habitude', 'indice'],
  cards: [
    { head: 'tous les samedis', label: 'chaque semaine', fr: 'Tous les samedis, mon père faisait des crêpes.', sub: '[too lay sam-DEE mohⁿ pehr fuh-zeh day KREHP]', body: 'Le samedi revient toute l’année. Tu regardes l’année, pas les samedis. EN: you look at the year, not at the Saturdays.' },
    { head: "d'habitude", label: 'normalement', fr: "D'habitude, on se levait à six heures.", sub: '[da-bee-TÜD ohⁿ suh luh-VEH ah see-ZUHR]', body: 'D’habitude dit : c’était normal, presque tous les jours. EN: usually, nearly every day.' },
    { head: 'chaque été', label: 'chaque année', fr: 'Chaque été, on allait au Lac-Saint-Jean.', sub: '[shah-kay-TAY ohⁿ-nah-LEH oh lak sehⁿ ZHAHⁿ]', body: 'Des étés, pendant des années. Combien exactement ? Ce n’est pas la question. EN: the number is not the point.' },
    { head: 'souvent', label: 'beaucoup de fois', fr: 'Souvent, on jouait dehors jusqu’à la nuit.', sub: '[soo-VAHⁿ ohⁿ zhoo-EH duh-or zhüs-kah lah NWEE]', body: 'Souvent, mais sans nombre. EN: often, with no number.' },
    { head: 'le samedi', label: 'le + un jour', fr: 'Le samedi, ma mère travaillait à l’hôpital.', sub: '[luh sam-DEE mah mehr trah-vah-YEH ah loh-pee-TAL]', body: 'le samedi, sans « tous les », veut déjà dire chaque samedi. EN: le samedi alone already means every Saturday.' },
    { head: 'de temps en temps', label: 'pas souvent, mais régulier', fr: 'De temps en temps, on allait au cinéma.', sub: '[duh tahⁿ-zahⁿ TAHⁿ ohⁿ-nah-leh oh see-nay-MAH]', body: 'Rare, mais répété : encore une habitude. EN: rare but repeated, still a habit.' },
  ],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'La même idée, huit fois',
  frSub: 'Des habitudes',
  examples: [
    ex(E(124), 'tous les matins'),
    ex(E(123), 'le + un jour'),
    ex(E(128), 'toujours'),
    ex(E(129), 'jamais : c’est aussi une habitude'),
    ex(E(131), 'une fois par mois'),
    ex(E(134), 'on se voyait : pronominal'),
    ex('fr.b1.routines.075', 'toujours, dans l’enfance'),
    ex('fr.b1.cafe.092', 'quand elle travaillait : une période'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude'],
};

/** BUILD IT: three gated groups, from the cue to the form. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'De l’indice à la forme',
  frSub: 'Construire',
  groups: [
    grp('Avec je et on', [
      it(E(124), 'prendre'),
      it(E(129), 'manger, négatif'),
      it(E(121), 'jouer'),
      it(E(133), 'aller'),
    ], chk('« Tous les matins, je ... l’autobus. » (prendre) EN: Which form?', ['prends', 'prenais', 'ai pris'], 1, 'Tous les matins, pendant des années : prenais. EN: a habit.')),
    grp('Avec il, elle, ils', [
      it(E(118), 'faire'),
      it(E(122), 'travailler'),
      it(E(125), 'appeler'),
      it(E(135), 'raconter'),
    ], chk('« Le samedi, ma mère ... à l’hôpital. » (travailler) EN: Which form?', ['travaillait', 'a travaillé', 'travaille'], 0, 'le samedi = chaque samedi, et c’est fini : travaillait. EN: every Saturday, and it is over.')),
    grp('Avec nous et on', [
      it(E(1512), 'aller'),
      it(E(120), 'aller, au Lac-Saint-Jean'),
      it(E(126), 'de temps en temps'),
      it(E(132), 'le vendredi soir'),
    ], chk('« Chaque été, nous ... chez ma grand-mère. » (aller) EN: Which form?', ['allons', 'sommes allés', 'allions'], 2, 'nous allons donne all-, puis -ions. EN: the nous stem plus -ions.')),
  ],
  audio: AUDIO,
  say: 'À toi. Lis l’indice, puis choisis la forme.',
  terms: ['habitude', 'indice'],
};

/** CHOOSE IT, by ear. `hideLines` or the questions are answerable by reading.
 *  Correct indices: 1, 0, 2, 1, 0. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dix phrases, une enfance',
  frSub: 'Écoute et choisis',
  lines: [
    ln(E(118)), ln(E(119)), ln(E(123)), ln(E(127)), ln(E(128)),
    ln(E(130)), ln(E(133)), ln(E(136)), ln(E(135)), ln(E(129)),
  ],
  questions: [
    { q: 'La première phrase : une fois, ou chaque semaine ? EN: Once, or every week?', opts: ['une fois', 'chaque semaine'], correct: 1, why: 'Tous les samedis : une habitude. EN: a habit.' },
    { q: 'Phrase 6 : « Chaque hiver, la rivière gelait. » C’est quoi ? EN: What is it?', opts: ['une habitude, et la météo', 'une seule journée de gel', 'une action qui commence'], correct: 0, why: 'Chaque hiver : ça revenait, et c’est le temps qu’il faisait. EN: repeated, and weather.' },
    { q: 'Phrase 8 : « Chaque été, nous allons au Lac-Saint-Jean. » Avant ou aujourd’hui ? EN: Before or today?', opts: ['avant seulement', 'on ne sait pas', 'aujourd’hui encore'], correct: 2, why: 'nous allons est au présent : c’est encore vrai. EN: present tense, still true.' },
    { q: 'Phrase 10 : « Je ne mangeais jamais le matin. » Combien de fois ? EN: How many times?', opts: ['une seule', 'aucune, et ça durait'], correct: 1, why: 'jamais, pendant toute une période : imparfait. EN: never, over a whole period.' },
    { q: 'Dans ces dix phrases, combien sont au présent ? EN: How many are in the present?', opts: ['une', 'trois', 'aucune'], correct: 0, why: 'Une seule, la huitième. Les autres regardent le passé. EN: only the eighth.' },
  ],
  audio: REC('rec-b1-02-enfance'),
  say: 'Écoute. Les phrases arrivent une par une.',
  terms: ['habitude', 'indice'],
};

/** TRAP IT: the cue is not a trigger. Two cards put the SAME cue on a present
 *  verb, two put a count in a closed period. b1.03 is named, not taught. */
const A2_LIMITES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-limites',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quand l’indice ne suffit pas',
  frSub: 'Le sens décide',
  hint: 'Quatre cartes. Même mot, autre temps.',
  sheetId: 'sheet-indices',
  audio: AUDIO,
  say: 'Attention : un mot ne choisit pas le temps.',
  terms: ['indice'],
  cards: [
    { head: 'chaque été, au présent', label: 'encore vrai', fr: 'Chaque été, nous allons au Lac-Saint-Jean.', sub: '[shah-kay-TAY noo-zah-LOHⁿ oh lak sehⁿ ZHAHⁿ]', body: 'La famille y va encore. Même indice, présent. EN: the family still goes; same cue, present tense.' },
    { head: 'le samedi, au présent', label: 'encore vrai', fr: 'Le samedi, je travaille encore au café.', sub: '[luh sam-DEE zhuh trah-VAHY ahⁿ-kor oh kah-FAY]', body: 'encore te le dit : c’est aujourd’hui. EN: encore tells you it is today.' },
    { head: 'et quand tu comptes', label: 'un été précis', fr: 'Cet été-là, je suis allé trois fois au lac.', sub: '[seh-tay-tay-LAH zhuh swee-zah-LAY trwah fwah oh LAK]', body: 'Trois fois, un été fini : passé composé. EN: a count inside a closed summer.' },
    { head: 'une période fermée', label: 'et comptée', fr: 'L’été dernier, j’ai visité Québec deux fois.', sub: '[lay-tay dehr-NYAY zhay vee-zee-tay kay-bek duh FWAH]', body: `Deux fois, l’été dernier : fini. ${Cap(B103_REF)} explique ce choix. EN: the next lesson explains this choice.` },
  ],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'La dictée',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: 'Écoute, puis écris. Les fins se ressemblent.',
  terms: ['habitude'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le sens', '« Quand j’étais petite, je ... du lait tous les matins. » (boire) EN: Which form?', ['ai bu', 'buvais', 'bois'], 1, 'Tous les matins, dans l’enfance : buvais. EN: a childhood habit.'),
  ctl('L’indice', 'Quel mot NE choisit PAS le temps du verbe ? EN: Which word does not pick the tense?', ['d’habitude', 'aucun des deux', 'chaque été'], 1, 'Aucun des deux. Ils aident, le sens décide. EN: neither; they are clues.'),
  ctl('Compter', '« ... , je suis allé deux fois au chalet. » Quel début va avec ce verbe ? EN: Which opening fits?', ['Tous les hivers', 'Cet hiver-là'], 1, 'Deux fois, dans un hiver précis : passé composé. EN: a count in a closed winter.'),
], ['habitude', 'indice']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'L’habitude',
    opener: { line: 'Vingt ans de samedis dans une seule phrase : voilà ce que l’imparfait fait, et ce qu’aucun autre temps ne fait. EN: Twenty years of Saturdays in one sentence, which no other tense can do.', imageRef: 'lessons/imparfait-usage/act02.jpg' },
    sections: [],
    milestone: 'Tu racontes une habitude sans compter les fois. EN: You can tell a habit without counting.',
    estScreens: 40, restPoints: ['a2-exemples', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_INDICES, A2_EXEMPLES, A2_CONSTRUIRE, A2_ECOUTE, A2_LIMITES, A2_DICTEE, A2_CHECK],
  imports: ['fr.b1.routines.075', 'fr.b1.cafe.092', 'fr.b1.cuisine.087', 'fr.b1.sports-et-loisirs.076', 'fr.a2.salutations.043', 'fr.sons.jours-et-mois.129', 'fr.sons.mots-essentiels.056', 'fr.a2.routines.004', 'fr.a2.pronoms-essentiels.333', B(1457), B(1468)],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — AVANT ET MAINTENANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le quartier a changé',
  frSub: 'Un texte de 2026, sur 1995',
  text: "Mon père est né dans ce quartier. À l'époque, il n'y avait pas de tour, pas de café avec du wifi, pas de piste cyclable. Il y avait une école, une église et deux dépanneurs. Autrefois, les voisins se parlaient plus : les portes restaient ouvertes l'été, et les enfants jouaient dans la rue jusqu'à la nuit. Dans les années quatre-vingt-dix, on écrivait encore des lettres, et tout coûtait moins cher. Mon père travaillait à l'usine, de l'autre côté du pont. Il partait à six heures et revenait à cinq heures. Aujourd'hui, l'usine est fermée. Il y a un grand centre commercial à la place, et mon père prend le métro pour aller voir ses petits-enfants. Il dit que le quartier est plus joli maintenant, mais qu'avant, il connaissait tout le monde.",
  glossary: [
    { word: 'pas de tour', en: 'no tower block' },
    { word: 'piste cyclable', en: 'bike lane' },
    { word: 'restaient ouvertes', en: 'stayed open', note: 'rester à l’imparfait : une habitude.' },
    { word: "à l'usine", en: 'at the factory' },
    { word: "de l'autre côté", en: 'on the other side' },
    { word: 'à la place', en: 'instead', note: 'Là où était l’usine.' },
  ],
  questions: [
    { q: 'Cite deux choses qu’il n’y avait pas à l’époque.', a: 'Pas de tour, pas de café avec du wifi, pas de piste cyclable. « Il n’y avait pas » : le décor d’avant. EN: the setting back then.' },
    { q: 'Pourquoi « l’usine est fermée » est au présent ?', a: 'Parce que c’est vrai aujourd’hui. Le texte change d’époque avec « Aujourd’hui ». EN: the text switches era.' },
    { q: 'Trouve la phrase qui compare les deux époques.', a: '« Il dit que le quartier est plus joli maintenant, mais qu’avant, il connaissait tout le monde. » EN: present for now, imparfait for before.' },
  ],
  audio: REC('rec-b1-02-quartier'),
  say: 'Lis. Le texte change d’époque une seule fois.',
  terms: ['avant', 'decor'],
};

const A3_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-mots',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les mots qui ouvrent le passé',
  frSub: 'Avant, autrefois, à l’époque',
  hint: 'Cinq cartes. Cinq façons de dire avant.',
  sheetId: 'sheet-indices',
  audio: REC('rec-b1-02-avant'),
  say: REFRAME,
  terms: ['avant'],
  cards: [
    { head: 'avant', label: 'le plus simple', fr: 'Avant, je fumais. Maintenant, je cours.', sub: '[ah-VAHⁿ zhuh fü-MEH · mehⁿt-NAHⁿ zhuh KOOR]', body: 'Une phrase, deux époques : imparfait, puis présent. EN: one sentence, two eras.' },
    { head: 'autrefois', label: 'il y a longtemps', fr: 'Autrefois, le village avait une seule école.', sub: '[oh-truh-FWAH luh vee-LAZH ah-VEH ün suhl ay-KOL]', body: 'Autrefois est plus loin dans le temps, et un peu plus écrit. EN: further back, and a little more formal.' },
    { head: "à l'époque", label: 'à ce moment-là', fr: "À l'époque, il n'y avait pas de téléphone portable.", sub: '[ah lay-POK eel nyah-VEH pah duh tay-lay-fon por-TAHBL]', body: 'À l’époque montre un moment précis, souvent celui dont on parle. EN: at that particular time.' },
    { head: 'dans les années...', label: 'une décennie', fr: 'Dans les années quatre-vingt-dix, on écrivait des lettres.', sub: '[dahⁿ lay-zah-NAY katr-vehⁿ-DEES ohⁿ-nay-kree-VEH day LEHTR]', body: 'Une décennie entière : on ne compte pas les lettres. EN: a whole decade, no count.' },
    { head: 'il y a vingt ans', label: 'compter en arrière', fr: 'Il y a vingt ans, je travaillais à Bruxelles.', sub: '[eel-yah vehⁿ-TAHⁿ zhuh trah-vah-YEH ah brü-SELL]', body: 'il y a + une durée : le point de départ du souvenir. EN: il y a plus a duration sets the starting point.' },
  ],
};

const A3_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-paires',
  layer: 'core',
  title: 'Deux époques, deux temps',
  frSub: 'Avant contre maintenant',
  examples: [
    ex(E(157), 'avant : imparfait'),
    ex(E(158), 'maintenant : présent'),
    ex(E(153), 'la maison, avant'),
    ex(E(154), 'la maison, aujourd’hui'),
    ex('fr.b1.routines.074', 'les deux dans une phrase'),
    ex('fr.a2.heure-et-date.109', 'il y a cinq ans'),
    ex(E(152), 'avant + un nom'),
    ex(E(151), 'attention : avant de + verbe'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avant', 'indice'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mets chaque phrase à son époque',
  frSub: 'Construire',
  groups: [
    grp('Avant', [
      it(E(142), 'autrefois'),
      it(E(143), 'à l’époque'),
      it(E(146), 'à cette époque-là'),
      it(E(147), 'avant'),
    ], chk('« Autrefois, le village ... une seule école. » (avoir) EN: Which form?', ['a', 'avait', 'a eu'], 1, 'Autrefois ouvre le passé, et c’est une description : avait. EN: description in the past.')),
    grp('Maintenant', [
      it(E(148), 'maintenant'),
      it(E(154), 'aujourd’hui'),
      it(E(158), 'maintenant'),
      it(B(1462), 'maintenant, chez b1.01'),
    ], chk('« Maintenant, tout le monde ... avec son téléphone. » (payer) EN: Which form?', ['payait', 'paie', 'a payé'], 1, 'Maintenant ramène le présent. EN: maintenant brings back the present.')),
    grp('Les deux dans une phrase', [
      it(E(141), 'avant, puis maintenant'),
      it(E(149), 'il y a vingt ans'),
      it(E(150), 'quand j’avais vingt ans'),
      it(E(155), 'autrefois, les voisins'),
    ], chk('Dans « Avant, je fumais. Maintenant, je cours. », qu’est-ce qui change ? EN: What changes?', ['le sujet', 'l’époque, donc le temps', 'rien du tout'], 1, 'Même personne, deux époques, deux temps. EN: same person, two eras, two tenses.')),
  ],
  audio: AUDIO,
  say: 'Range chaque phrase : avant, ou maintenant.',
  terms: ['avant'],
};

/** TRAP IT: « avant » is not a switch. Three real traps, and the drill is
 *  gated. Correct indices: 1, 0, 1, 0, 1, 1, 0, 1. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Avant ne veut pas toujours dire imparfait',
  frSub: 'Le piège',
  rule: {
    title: 'Regarde ce qui suit avant',
    body: 'Avant tout seul ouvre le passé. Mais avant de + verbe veut dire « juste avant de faire ça », et le temps vient du sens de la phrase. EN: avant alone opens the past; avant de + verb does not.',
  },
  cards: [
    { promptLabel: 'Back then I lived in Brussels.', promptSound: "Avant, j'habite à Bruxelles.", fr: "Avant, j'habitais à Bruxelles.", ipa: '/a.vɑ̃ ʒa.bi.tɛ a bʁy.sɛl/', tip: 'Avant ouvre le passé : le verbe suit. EN: avant opens the past, the verb follows.' },
    { promptLabel: 'Before leaving, I turn off the light.', promptSound: "Avant de partir, j'éteignais la lumière.", fr: "Avant de partir, j'éteins la lumière.", ipa: '/a.vɑ̃ də paʁ.tiʁ ʒe.tɛ̃ la ly.mjɛʁ/', tip: 'Avant de + verbe : ici, c’est une habitude d’aujourd’hui. EN: this is a habit today.' },
    { promptLabel: 'Now everybody pays by phone.', promptSound: 'Maintenant, tout le monde payait avec son téléphone.', fr: 'Maintenant, tout le monde paie avec son téléphone.', ipa: '/mɛ̃t.nɑ̃ tu lə mɔ̃d pɛ a.vɛk sɔ̃ te.le.fɔn/', tip: 'Maintenant ferme le passé et ramène le présent. EN: maintenant brings the present back.' },
    { promptLabel: 'Twenty years ago I worked in Brussels.', promptSound: 'Il y a vingt ans, je travaille à Bruxelles.', fr: 'Il y a vingt ans, je travaillais à Bruxelles.', ipa: '/i.lja vɛ̃.tɑ̃ ʒə tʁa.va.jɛ a bʁy.sɛl/', tip: 'il y a + durée : un point dans le passé. EN: il y a plus a duration is a point in the past.' },
    { promptLabel: 'Before the move, we lived near the park.', promptSound: 'Avant le déménagement, nous habitons près du parc.', fr: 'Avant le déménagement, nous habitions près du parc.', ipa: '/a.vɑ̃ lə de.me.naʒ.mɑ̃ nu.za.bi.tjɔ̃ pʁɛ dy paʁk/', tip: 'Avant + un nom : encore le passé. EN: avant plus a noun is still the past.' },
    { promptLabel: 'Today the house is blue.', promptSound: "Aujourd'hui, la maison était bleue.", fr: "Aujourd'hui, la maison est bleue.", ipa: '/o.ʒuʁ.dɥi la mɛ.zɔ̃.nɛ blø/', tip: 'Aujourd’hui : présent, même dans un texte sur le passé. EN: today takes the present, even inside a past text.' },
  ],
  drill: [
    { promptSay: 'Avant, on ... en argent comptant. (payer)', opts: ['paie', 'payait'], correct: 1 },
    { promptSay: 'Avant de manger, je ... les mains. (se laver)', opts: ['me lave', 'me lavais'], correct: 0 },
    { promptSay: 'À l’époque, il n’y ... pas de portable.', opts: ['a', 'avait'], correct: 1 },
    { promptSay: 'Maintenant, je ... le métro. (prendre)', opts: ['prends', 'prenais'], correct: 0 },
    { promptSay: 'Autrefois, les voisins se ... plus. (parler)', opts: ['parlent', 'parlaient'], correct: 1 },
    { promptSay: 'Il y a vingt ans, je ... à Bruxelles. (travailler)', opts: ['travaille', 'travaillais'], correct: 1 },
    { promptSay: 'Aujourd’hui, la maison ... bleue. (être)', opts: ['est', 'était'], correct: 0 },
    { promptSay: 'Avant le déménagement, nous ... près du parc. (habiter)', opts: ['habitons', 'habitions'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Regarde ce qui suit avant' },
    { label: 'Six phrases', kind: 'cards', title: 'Le faux, puis le vrai' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-02-piege-avant'),
  say: 'Un mot ne décide pas. Regarde ce qui vient après.',
  terms: ['avant', 'indice'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avant, ou aujourd’hui ?',
  frSub: 'Huit phrases',
  lines: [
    ln(E(141)), ln(E(144)), ln(E(148)), ln(E(156)),
    ln(E(157)), ln(E(158)), ln(E(145)), ln(E(151)),
  ],
  questions: [
    { q: 'Phrase 1 : combien d’époques ? EN: How many eras?', opts: ['une', 'deux'], correct: 1, why: 'Avant, je fumais. Maintenant, je cours. EN: two eras in one sentence.' },
    { q: 'Phrase 3 : avant ou aujourd’hui ? EN: Before or today?', opts: ['aujourd’hui', 'avant'], correct: 0, why: 'Maintenant + paie : le présent. EN: present tense.' },
    { q: 'Phrase 5 et phrase 6 : qu’est-ce qui change ? EN: What changes?', opts: ['le moyen de transport seulement', 'l’époque et le temps du verbe', 'rien'], correct: 1, why: 'Avant, je prenais le bus. Maintenant, je prends le métro. EN: era and tense.' },
    { q: 'Phrase 8 : « Avant de partir, j’éteins la lumière. » C’est quand ? EN: When is it?', opts: ['dans le passé', 'aujourd’hui, chaque fois'], correct: 1, why: 'avant de + verbe : ici, une habitude d’aujourd’hui. EN: a habit today.' },
  ],
  audio: REC('rec-b1-02-epoques'),
  say: 'Écoute bien le premier mot de chaque phrase.',
  terms: ['avant', 'indice'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le mot', 'Quel mot ramène le présent ? EN: Which word brings the present back?', ['autrefois', 'maintenant', 'à l’époque'], 1, 'maintenant et aujourd’hui ferment le passé. EN: maintenant and aujourd’hui close the past.'),
  ctl('Le piège', '« Avant de dormir, je ... un peu. » (lire) Habitude d’aujourd’hui. EN: A habit today.', ['lisais', 'lis'], 1, 'avant de + verbe ne met rien au passé. EN: avant de does not send it to the past.'),
  ctl('Les deux', '« Avant, nous ... près du parc, maintenant nous habitons en ville. » (habiter) EN: Which form?', ['habitions', 'habitons'], 0, 'La première moitié est au passé, la seconde au présent. EN: past then present.'),
], ['avant', 'indice']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Avant et maintenant',
    opener: { line: 'Un quartier, deux époques : tu apprends à passer de l’une à l’autre en un seul mot. EN: One neighbourhood, two eras, and the single word that switches between them.', imageRef: 'lessons/imparfait-usage/act03.jpg' },
    sections: [],
    milestone: 'Tu compares avant et maintenant sans te tromper de temps. EN: You can compare then and now without slipping tense.',
    estScreens: 36, restPoints: ['a3-paires', 'a3-piege'],
  },
  sections: [A3_LECTURE, A3_MOTS, A3_PAIRES, A3_CONSTRUIRE, A3_PIEGE, A3_ECOUTE, A3_CHECK],
  imports: ['fr.b1.routines.074', 'fr.b1.routines.078', 'fr.a2.heure-et-date.109', 'fr.a2.metiers.009', 'fr.b1.routines.059'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LES ÉTATS ET LES SENTIMENTS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La première semaine',
  frSub: 'Dakar, puis Montréal',
  setting: 'Awa raconte à Julien sa première semaine au Canada, il y a dix ans. EN: Awa tells Julien about her first week in Canada.',
  bubbles: [
    { from: 'user', fr: 'Ta première semaine ici, c’était dur', en: 'Was your first week here hard?' },
    { from: 'coach', fr: 'J’étais fatiguée tout le temps, et j’avais froid dans l’appartement.', en: 'I was tired all the time, and I was cold in the flat.' },
    { from: 'coach', fr: 'Je ne connaissais personne et je ne savais pas prendre le métro.', en: 'I knew nobody and I did not know how to take the metro.' },
    { from: 'user', fr: 'Tu voulais repartir', en: 'Did you want to go back?' },
    { from: 'coach', fr: 'Oui. Je voulais repartir, mais je ne pouvais pas : mon frère m’attendait ici.', en: 'Yes. I wanted to go back, but I could not: my brother was waiting for me here.' },
    { from: 'coach', fr: 'Et puis, un matin, j’avais moins peur. C’est tout.', en: 'And then, one morning, I was less afraid. That is all.' },
    { from: 'narrator', fr: 'Aucun de ces verbes ne raconte une action. Ils disent tous comment elle était.', en: 'None of these verbs tells an action; they all say how she was.' },
  ],
  closing: { fr: 'Fatiguée, froid, personne, peur : ce sont des états, et les états durent.', en: 'Tired, cold, nobody, afraid: these are states, and states last.' },
  audio: REC('rec-b1-02-awa'),
  say: 'Écoute Awa. Cherche ce qui dure.',
  terms: ['etat'],
};

/** NAME IT: the state verbs. Six cards, each one verb family, with b1.01's
 *  forms imported under them. The full list lives in the sheet. */
const A4_VERBES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-verbes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les verbes qui disent un état',
  frSub: 'être, avoir, savoir, connaître, vouloir, pouvoir',
  hint: 'Six cartes. Six verbes qui durent.',
  sheetId: 'sheet-etats',
  audio: REC('rec-b1-02-etats'),
  say: REFRAME,
  terms: ['etat'],
  cards: [
    { head: 'être', label: 'comment tu étais', fr: "J'étais fatigué et j'avais froid.", sub: '[zhay-TEH fa-tee-GAY ay zha-VEH FRWAH]', body: 'être à l’imparfait décrit une personne, un lieu, une situation. EN: être describes a person, a place, a situation.' },
    { head: 'avoir', label: 'ce que tu sentais', fr: 'Il avait peur du noir.', sub: '[ee-lah-VEH puhr dü NWAR]', body: 'avoir peur, avoir faim, avoir froid, avoir envie : en français, tu AS le sentiment. EN: French has the feeling, it is not it.' },
    { head: 'savoir', label: 'dans ta tête', fr: 'Je savais que la route était fermée.', sub: '[zhuh sah-VEH kuh lah ROOT ay-teh fehr-MAY]', body: `savoir dure : personne ne « commence » à savoir. ${Cap(SAVOIR_REF)} l’a présenté au présent. EN: knowing lasts.` },
    { head: 'connaître', label: 'les gens, les lieux', fr: 'Elle connaissait bien la ville.', sub: '[el koh-neh-SEH byehⁿ lah VEEL]', body: 'connaître marche comme savoir : un état, jamais une action. EN: connaître behaves like savoir.' },
    { head: 'vouloir', label: 'ce que tu voulais', fr: 'Ma sœur voulait devenir pilote.', sub: '[mah SUHR voo-LEH duh-vuh-NEER pee-LOT]', body: `vouloir à l’imparfait dit un désir qui durait. ${Cap(MODAL_REF)} l’a donné au présent. EN: a wish that lasted.` },
    { head: 'pouvoir, devoir', label: 'ce qui était possible', fr: 'Nous devions rentrer avant huit heures.', sub: '[noo duh-VYOHⁿ rahⁿ-tray ah-vahⁿ wee-TUHR]', body: 'pouvoir et devoir décrivent une situation, pas un moment. EN: they describe a situation, not a moment.' },
  ],
};

const A4_AVOIR: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-avoir',
  layer: 'core',
  title: 'En français, tu AS le sentiment',
  frSub: 'avoir + un nom',
  examples: [
    ex(E(160), 'avoir peur'),
    ex(E(161), 'avoir faim'),
    ex(E(162), 'avoir soif'),
    ex(E(163), 'avoir sommeil'),
    ex(E(175), 'avoir envie'),
    ex(E(176), 'avoir besoin'),
    ex(E(159), 'et avoir froid, à côté de être'),
    ex('fr.a2.corps.017', 'avoir souvent des otites'),
  ],
  audio: AUDIO,
  say: 'En anglais, tu ES ; en français, tu AS.',
  terms: ['etat'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dis comment c’était',
  frSub: 'Construire',
  groups: [
    grp('Le corps et les sentiments', [
      it(E(159), 'être + avoir'),
      it(E(169), 'détester'),
      it(E(172), 'être content'),
      it(E(173), 'être triste'),
    ], chk('« Elle ... triste ce jour-là. » (être) EN: Which form?', ['a été', 'était', 'est'], 1, 'Un état, un jour précis : était. EN: a state, so the imparfait.')),
    grp('La tête : savoir, croire, penser', [
      it(E(164), 'savoir'),
      it(E(170), 'penser à'),
      it(E(171), 'croire'),
      it(E(165), 'connaître'),
    ], chk('« Je ... qu’il habitait ici. » (croire) EN: Which form?', ['croyais', 'ai cru', 'crois'], 0, 'croire, penser, savoir : des états qui durent. EN: verbs of the mind last.')),
    grp('Vouloir, pouvoir, devoir', [
      it(E(166), 'ne pas vouloir'),
      it(E(167), 'pouvoir'),
      it(E(168), 'devoir'),
      it(B(450), 'vouloir, chez b1.01'),
    ], chk('« Nous ... rentrer avant huit heures. » (devoir) EN: Which form?', ['devons', 'devions', 'avons dû'], 1, 'Une règle qui durait pendant toute l’enfance. EN: a rule that lasted.')),
  ],
  audio: AUDIO,
  say: 'Choisis la forme, puis dis la phrase à voix haute.',
  terms: ['etat'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'État, ou action ?',
  frSub: 'Dix phrases',
  lines: [
    ln(E(159)), ln(E(160)), ln(E(164)), ln(E(166)), ln(E(172)),
    ln(E(174)), ln(E(177)), ln(E(178)), ln(E(175)), ln(E(167)),
  ],
  questions: [
    { q: 'Phrase 2 : « Il avait peur du noir. » Quel verbe entends-tu ? EN: Which verb?', opts: ['être', 'avoir'], correct: 1, why: 'avoir peur. En anglais, he WAS afraid. EN: French uses avoir.' },
    { q: 'Phrase 3 : « Je savais que la route était fermée. » Combien d’états ? EN: How many states?', opts: ['un', 'deux'], correct: 1, why: 'savais, et était : deux états dans une phrase. EN: two states.' },
    { q: 'Phrase 7 : « Elle se sentait seule. » C’est quoi ? EN: What is it?', opts: ['une action courte', 'un sentiment qui durait'], correct: 1, why: 'se sentir : un état, pas un moment. EN: a state, not a moment.' },
    { q: 'Phrase 9 : « J’avais envie d’un café. » Ça veut dire quoi ? EN: What does it mean?', opts: ['I felt like a coffee.', 'I had a coffee.'], correct: 0, why: 'avoir envie de : le désir, pas le café. EN: the wish, not the drink.' },
    { q: 'Dans ces dix phrases, y a-t-il une action qui commence et qui finit ? EN: Any action with a start and an end?', opts: ['oui, deux', 'aucune'], correct: 1, why: 'Ce sont tous des états. C’est pour ça qu’ils sont à l’imparfait. EN: all states.' },
  ],
  audio: REC('rec-b1-02-etats-ecoute'),
  say: 'Écoute. Rien ne commence, rien ne finit.',
  terms: ['etat'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs très logiques',
  frSub: 'Et pourquoi elles arrivent',
  errors: [
    { wrong: "J'étais froid.", right: "J'avais froid.", why: 'Logique : l’anglais dit I was cold. En français, tu as froid, tu as faim, tu as peur. EN: French uses avoir for these feelings.' },
    { wrong: 'Elle a été triste ce jour-là.', right: 'Elle était triste ce jour-là.', why: 'Pas impossible, mais le passé composé dit « elle est devenue triste ». Pour l’état, imparfait. EN: the passé composé makes it a change, not a state.' },
    { wrong: 'Je ne connais personne quand je suis arrivée.', right: 'Je ne connaissais personne quand je suis arrivée.', why: 'Le présent parle d’aujourd’hui. L’état, lui, était vrai à ce moment-là. EN: the present talks about today.' },
    { wrong: 'Je savais nager à cinq ans, et après j’ai su.', right: 'Je savais nager à cinq ans.', why: 'savoir ne « commence » pas. Pour dire le moment, on change de verbe : j’ai appris. EN: knowing has no start; use apprendre for that.' },
  ],
  audio: AUDIO,
  say: 'Ces quatre erreurs viennent toutes de l’anglais.',
  terms: ['etat'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-flash',
  layer: 'core',
  title: 'De l’anglais au français',
  frSub: 'Dix cartes',
  cards: [
    { front: 'I was tired and I was cold.', back: "J'étais fatigué et j'avais froid.", say: "J'étais fatigué et j'avais froid." },
    { front: 'He was afraid of the dark.', back: 'Il avait peur du noir.', say: 'Il avait peur du noir.' },
    { front: 'She was hungry all the time.', back: 'Elle avait faim tout le temps.', say: 'Elle avait faim tout le temps.' },
    { front: 'I knew the road was closed.', back: 'Je savais que la route était fermée.', say: 'Je savais que la route était fermée.' },
    { front: 'She knew the city well.', back: 'Elle connaissait bien la ville.', say: 'Elle connaissait bien la ville.' },
    { front: 'I did not want to leave.', back: 'Je ne voulais pas partir.', say: 'Je ne voulais pas partir.' },
    { front: 'We had to be home before eight.', back: 'Nous devions rentrer avant huit heures.', say: 'Nous devions rentrer avant huit heures.' },
    { front: 'They were proud of their son.', back: 'Ils étaient fiers de leur fils.', say: 'Ils étaient fiers de leur fils.' },
    { front: 'I felt like having a coffee.', back: "J'avais envie d'un café.", say: "J'avais envie d'un café." },
    { front: 'She felt lonely.', back: 'Elle se sentait seule.', say: 'Elle se sentait seule.' },
  ],
  audio: AUDIO,
  say: 'Lis l’anglais, dis le français, puis retourne la carte.',
  terms: ['etat'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le bon verbe', '« Ce matin-là, j’... froid et j’... peur. » EN: Which verb twice?', ['étais', 'avais'], 1, 'avoir froid, avoir peur. Deux fois avoir. EN: avoir both times.'),
  ctl('L’état', '« Quand je suis arrivée, je ne ... personne. » (connaître) EN: Which form?', ['connaissais', 'connais', 'ai connu'], 0, 'Un état, à ce moment-là : connaissais. EN: a state at that time.'),
  ctl('Le sens', 'Quel verbe N’EST PAS un état ? EN: Which one is not a state?', ['savoir', 'vouloir', 'tomber'], 2, 'tomber est une action : ça commence et ça finit. EN: falling starts and ends.'),
], ['etat']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Les états',
    opener: { line: 'Fatigué, perdu, content : les mots qui disent comment tu étais ne racontent rien, et c’est exactement leur travail. EN: Tired, lost, glad: words that say how you were, not what happened.', imageRef: 'lessons/imparfait-usage/act04.jpg' },
    sections: [],
    milestone: 'Tu dis comment tu étais et ce que tu sentais, avec le bon verbe. EN: You can say how you were and what you felt, with the right verb.',
    estScreens: 40, restPoints: ['a4-avoir', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_VERBES, A4_AVOIR, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_FLASH, A4_CHECK],
  imports: [B(450), B(451), B(452), B(469), B(472), 'fr.a2.corps.017', 'fr.a2.ecole.013', 'fr.a2.animaux.010'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE DÉCOR
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La maison de Mame',
  frSub: 'Une description, à Dakar',
  text: "La maison de ma grand-mère était au bout d'une rue de sable. Elle était basse, peinte en bleu clair, et il y avait un grand manguier dans la cour. Le salon donnait sur la cour, et les fenêtres étaient toujours ouvertes. Il y avait trois chambres, une cuisine au fond, et pas d'ascenseur : la maison n'avait qu'un étage. Le matin, ça sentait le pain chaud et le café. On entendait les voisins, la radio, les enfants dans la rue. Ma grand-mère portait toujours un foulard bleu et elle connaissait tout le monde dans le quartier. Le soir, il faisait encore trente degrés, et on mangeait dehors. Ce n'était pas grand, mais c'était chez nous. Aujourd'hui, la maison est vendue, et la rue est goudronnée.",
  glossary: [
    { word: 'de sable', en: 'of sand', note: 'La rue n’était pas goudronnée.' },
    { word: 'basse', en: 'low', note: 'Le contraire de haute. Ici, un seul étage.' },
    { word: 'un grand manguier', en: 'a big mango tree' },
    { word: 'au fond', en: 'at the back' },
    { word: 'un foulard', en: 'a headscarf' },
    { word: 'goudronnée', en: 'paved' },
  ],
  questions: [
    { q: 'Combien de chambres il y avait ?', a: 'Trois. « Il y avait trois chambres » : le décor se dit avec il y avait. EN: scenery uses il y avait.' },
    { q: 'Qu’est-ce qu’on entendait le matin ?', a: 'Les voisins, la radio, les enfants dans la rue. Les bruits font partie du décor. EN: sounds are part of the scenery.' },
    { q: 'Pourquoi la dernière phrase est au présent ?', a: 'Parce qu’elle parle d’aujourd’hui : la maison est vendue, la rue est goudronnée. EN: the last line is about today.' },
  ],
  audio: REC('rec-b1-02-mame'),
  say: 'Lis. Rien ne se passe dans ce texte, et c’est voulu.',
  terms: ['decor'],
};

const A5_OUTILS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-outils',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les deux outils du décor',
  frSub: 'il y avait et c’était',
  hint: 'Cinq cartes. Deux formes font presque tout.',
  sheetId: 'sheet-decor',
  audio: REC('rec-b1-02-decor'),
  say: REFRAME,
  terms: ['decor'],
  cards: [
    { head: 'il y avait', label: 'ce qui existait', fr: 'Il y avait un jardin derrière la maison.', sub: '[eel ee ah-VEH uhⁿ zhar-DEHⁿ deh-ryehr lah meh-ZOHⁿ]', body: 'il y a devient il y avait. Une chose ou plusieurs : la forme ne bouge pas. EN: there was and there were are the same form.' },
    { head: 'il n’y avait pas', label: 'ce qui manquait', fr: "Il n'y avait pas d'ascenseur.", sub: '[eel nyah-VEH pah dah-sahⁿ-SUHR]', body: 'Le décor, c’est aussi ce qui n’existait pas encore. EN: scenery includes what was missing.' },
    { head: "c'était", label: 'ce que c’était', fr: "C'était une vieille maison en pierre.", sub: '[say-teh-tün vyehy meh-zohⁿ ahⁿ PYEHR]', body: 'c’était présente la chose. Avec un nom, presque toujours c’était et pas il était. EN: c’était introduces the thing.' },
    { head: 'était, étaient', label: 'comment c’était', fr: 'Les rues étaient étroites et tranquilles.', sub: '[lay RÜ ay-teh-tay-TRWAT ay trahⁿ-KEEL]', body: 'Avec un adjectif, être fait tout le travail. EN: with an adjective, être does the work.' },
    { head: 'les autres verbes', label: 'le décor bouge un peu', fr: 'Le salon donnait sur la rue.', sub: '[luh sah-LOHⁿ doh-NEH sür lah RÜ]', body: 'donner sur, se trouver, ressembler à : eux aussi décrivent. EN: these verbs describe too.' },
  ],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Un lieu, en huit phrases',
  frSub: 'Le décor',
  examples: [
    ex(E(800), 'la maison'),
    ex(E(805), 'les pièces'),
    ex(E(806), 'les couleurs'),
    ex(E(807), 'devant la porte'),
    ex(E(815), 'où c’était'),
    ex(E(811), 'l’impression générale'),
    ex(B(1450), 'l’arbre, chez b1.01'),
    ex(E(819), 'et la phrase qui ferme'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis le décor',
  frSub: 'Construire',
  groups: [
    grp('Ce qui existait', [
      it(E(801), 'il y avait'),
      it(E(805), 'plusieurs choses'),
      it(E(814), 'ce qui manquait'),
      it(E(817), 'à Abidjan'),
    ], chk('« Derrière la maison, il y ... un jardin et deux arbres. » EN: Which form?', ['avaient', 'avait'], 1, 'il y avait ne change jamais, même avec plusieurs choses. EN: always singular.')),
    grp('Comment c’était', [
      it(E(800), 'grande'),
      it(E(802), 'étroites'),
      it(E(806), 'jaunes'),
      it(E(818), 'hautes'),
    ], chk('« Les murs ... jaunes. » (être) EN: Which form?', ['était', 'étaient', 'sont'], 1, 'Les murs : pluriel, donc étaient. EN: plural subject.')),
    grp('Les gens et les bruits', [
      it(E(808), 'une personne'),
      it(E(809), 'un portrait'),
      it(E(812), 'ce qu’on entendait'),
      it(E(813), 'ce que ça sentait'),
    ], chk('« On ... les enfants dans la cour. » (entendre) EN: Which form?', ['entend', 'entendait', 'a entendu'], 1, 'Un bruit de fond, pas un moment : entendait. EN: background, so the imparfait.')),
  ],
  audio: AUDIO,
  say: 'Construis la maison, phrase par phrase.',
  terms: ['decor'],
};

const A5_GENS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a5-gens',
  layer: 'core',
  title: 'Où ça sert, vraiment',
  frSub: 'Quatre situations',
  cases: [
    { situation: 'Décrire une photo à quelqu’un. EN: describing a photo.', fr: "C'était une vieille maison en pierre.", en: 'It was an old stone house.' },
    { situation: 'Parler d’un ancien appartement à un ami. EN: talking about an old flat.', fr: "Il n'y avait pas d'ascenseur.", en: 'There was no lift.' },
    { situation: 'Décrire quelqu’un dont tu te souviens. EN: describing someone you remember.', fr: 'Ma grand-mère portait toujours un foulard bleu.', en: 'My grandmother always wore a blue headscarf.' },
    { situation: 'Expliquer pourquoi tu aimais un endroit. EN: saying why you liked a place.', fr: "C'était petit, mais c'était chez nous.", en: 'It was small, but it was home.' },
  ],
  audio: AUDIO,
  say: 'Voilà où tu vas t’en servir, dès cette semaine.',
  terms: ['decor'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Dessine la maison dans ta tête',
  frSub: 'Huit phrases',
  lines: [
    ln(E(803)), ln(E(801)), ln(E(805)), ln(E(814)),
    ln(E(812)), ln(E(813)), ln(E(816)), ln(E(819)),
  ],
  questions: [
    { q: 'Est-ce qu’il y avait un ascenseur ? EN: Was there a lift?', opts: ['oui', 'non'], correct: 1, why: 'Il n’y avait pas d’ascenseur. EN: there was none.' },
    { q: 'Combien de chambres ? EN: How many bedrooms?', opts: ['deux', 'trois', 'on ne dit pas'], correct: 1, why: 'Il y avait trois chambres à l’étage. EN: three, upstairs.' },
    { q: 'Phrase 6 : qu’est-ce qu’on sentait le matin ? EN: What could you smell?', opts: ['le café', 'le pain chaud'], correct: 1, why: 'Ça sentait le pain chaud le matin. EN: warm bread.' },
    { q: 'La dernière phrase donne quoi ? EN: What does the last line give?', opts: ['une taille et un sentiment', 'une date'], correct: 0, why: 'C’était petit, mais c’était chez nous. EN: size and feeling.' },
  ],
  audio: REC('rec-b1-02-maison-ecoute'),
  say: 'Écoute et construis la maison dans ta tête.',
  terms: ['decor'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La forme', '« Dans la cour, il y ... deux arbres et un banc. » EN: Which form?', ['avait', 'avaient'], 0, 'il y avait reste au singulier, toujours. EN: always singular.'),
  ctl('Le choix', 'Pour présenter la maison : « ... une vieille maison. » EN: To introduce it:', ['C’était', 'Elle était'], 0, 'Avec un nom, on dit c’était. Elle était va avec un adjectif. EN: c’était with a noun.'),
  ctl('Le sens', 'Tu décris ta chambre d’enfant. La maison a été vendue. EN: The house has been sold.', ['Ma chambre est bleue.', 'Ma chambre était bleue.'], 1, 'Le présent dirait qu’elle est encore à toi. EN: the present would mean it is still yours.'),
], ['decor']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le décor',
    opener: { line: 'Une maison, une rue, une odeur de pain : tu apprends à poser un décor où rien ne se passe encore. EN: A house, a street, the smell of bread: setting a scene where nothing happens yet.', imageRef: 'lessons/imparfait-usage/act05.jpg' },
    sections: [],
    milestone: 'Tu décris un lieu et les gens qui étaient dedans. EN: You can describe a place and the people in it.',
    estScreens: 34, restPoints: ['a5-exemples', 'a5-ecoute'],
  },
  sections: [A5_LECTURE, A5_OUTILS, A5_EXEMPLES, A5_CONSTRUIRE, A5_GENS, A5_ECOUTE, A5_CHECK],
  imports: [B(1450), B(1464), B(522), B(537), 'fr.b1.nombres.004', 'fr.b1.nombres.009', 'fr.b1.cafe.013', 'fr.b1.metiers.008', 'fr.a1.heure-et-date.051'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA MÉTÉO, L'HEURE ET L'ÂGE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_METEO: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-meteo',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le temps qu’il faisait',
  frSub: 'La météo du souvenir',
  hint: 'Six cartes. Toujours avec il.',
  sheetId: 'sheet-decor',
  audio: REC('rec-b1-02-meteo'),
  say: REFRAME,
  terms: ['meteo'],
  cards: [
    { head: 'il faisait', label: 'le plus courant', fr: 'Il faisait froid.', sub: '[eel fuh-zeh FRWAH]', body: `il fait devient il faisait. On dit [fuh-ZEH], jamais [feh-ZEH]. ${Cap(METEO_REF)} a donné le présent. EN: il fait becomes il faisait.` },
    { head: 'il neigeait, il pleuvait', label: 'un verbe tout seul', fr: 'Il pleuvait depuis le matin.', sub: '[eel pluh-VEH duh-pwee luh ma-TEHⁿ]', body: 'neiger et pleuvoir n’ont que il. La neige tombait, et tu regardais. EN: these verbs only ever take il.' },
    { head: 'il y avait', label: 'du vent, de la neige', fr: 'Il y avait du vent.', sub: '[eel ee ah-VEH dü VAHⁿ]', body: 'Pour le vent, la neige, le brouillard : il y avait. EN: for wind, snow and fog, use il y avait.' },
    { head: 'les degrés', label: 'combien il faisait', fr: 'Il faisait moins vingt en janvier.', sub: '[eel fuh-zeh mwehⁿ VEHⁿ ahⁿ zhahⁿ-VYAY]', body: 'Au Québec, moins vingt est une phrase d’hiver ordinaire. EN: an ordinary winter sentence in Quebec.' },
    { head: 'le ciel, la lumière', label: 'avec être', fr: 'Le ciel était gris.', sub: '[luh syeh-lay-TEH GREE]', body: 'Le ciel, la lumière, la nuit : être suffit. EN: with the sky or the light, être is enough.' },
    { head: 'et ça revenait', label: 'météo + habitude', fr: 'Il gelait tous les matins.', sub: '[eel zhuh-LEH too lay ma-TEHⁿ]', body: 'La météo et l’habitude tiennent dans la même phrase. EN: weather and habit fit in one sentence.' },
  ],
};

/** THE ONE PARADIGM SCREEN OF THE ACT. Six rows is the Pixel 6 ceiling. */
const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  title: 'Du présent au passé',
  frSub: 'Six formes à connaître',
  sheetId: 'sheet-decor',
  cols: ['Aujourd’hui', 'Dans le souvenir'],
  rows: [
    { cells: ['il fait froid', 'il faisait froid'], say: 'Il faisait froid.', detail: { title: 'il faisait', body: 'La forme la plus utile de tout l’acte. [fuh-ZEH]. EN: the most useful form in the act.', say: 'Il faisait froid.' } },
    { cells: ['il neige', 'il neigeait'], say: 'Il neigeait.', detail: { title: 'il neigeait', body: 'neiger garde un e devant a : neigeait. EN: neiger keeps the e before a.', say: 'Il neigeait.' } },
    { cells: ['il pleut', 'il pleuvait'], say: 'Il pleuvait depuis le matin.', detail: { title: 'il pleuvait', body: 'pleuvoir : une seule forme au passé, il pleuvait. EN: one form only.', say: 'Il pleuvait depuis le matin.' } },
    { cells: ['il y a', 'il y avait'], say: 'Il y avait du vent.', detail: { title: 'il y avait', body: 'Pour le vent, la neige, les gens, les objets. EN: for wind, snow, people and things.', say: 'Il y avait du vent.' } },
    { cells: ['il est minuit', 'il était minuit'], say: 'Il était minuit.', detail: { title: 'il était', body: `L’heure au passé : il était. ${Cap(HEURE_REF)} a donné le présent. EN: clock time in the past.`, say: 'Il était minuit.' } },
    { cells: ['j’ai douze ans', 'j’avais douze ans'], say: "J'avais douze ans.", detail: { title: 'avoir + ans', body: 'L’âge se dit avec avoir, jamais avec être. EN: age takes avoir, never être.', say: "J'avais douze ans." } },
  ],
  audio: AUDIO,
  say: 'Six formes. Tu les connais déjà au présent.',
  terms: ['meteo', 'heureAge'],
};

const A6_AGE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-age',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'L’heure et l’âge',
  frSub: 'Il était minuit, j’avais douze ans',
  hint: 'Cinq cartes. Deux verbes, deux jobs.',
  audio: REC('rec-b1-02-age'),
  say: REFRAME,
  terms: ['heureAge'],
  cards: [
    { head: 'il était + heure', label: 'l’heure', fr: 'Il était minuit.', sub: '[ee-lay-TEH mee-NWEE]', body: 'Toujours il était, jamais il avait. EN: clock time always takes il était.' },
    { head: 'et le moment', label: 'tard, tôt, midi', fr: 'Il était déjà tard.', sub: '[ee-lay-TEH day-zhah TAR]', body: 'tard, tôt, midi : la même forme. EN: same form for late, early and noon.' },
    { head: 'avoir + ans', label: 'l’âge', fr: "J'avais douze ans.", sub: '[zha-VEH doo-ZAHⁿ]', body: 'En anglais, I WAS twelve. En français, j’AVAIS douze ans. EN: English is, French has.' },
    { head: 'comparer deux âges', label: 'de plus, de moins', fr: 'Mon frère avait deux ans de plus que moi.', sub: '[mohⁿ freh-rah-VEH duh-zahⁿ duh plüs kuh MWAH]', body: 'avoir + ans + de plus que : la comparaison garde avoir. EN: the comparison keeps avoir.' },
    { head: 'la date, l’année', label: 'c’était, on était', fr: "C'était un mardi.", sub: '[say-teh-tuhⁿ mar-DEE]', body: 'c’était pour un jour ou une saison, on était en + année. EN: c’était for a day or a season.' },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le temps, l’heure, l’âge',
  frSub: 'Construire',
  groups: [
    grp('La météo', [
      it(E(821), 'il faisait beau'),
      it(E(820), 'il pleuvait'),
      it(E(823), 'les degrés'),
      it(E(824), 'le ciel'),
    ], chk('« Ce jour-là, il ... beau. » (faire) EN: Which form?', ['fait', 'faisait', 'a fait'], 1, 'La météo autour du souvenir : faisait. EN: weather around a memory.')),
    grp('L’heure', [
      it(E(829), 'minuit'),
      it(E(830), 'sept heures'),
      it(E(831), 'tard'),
      it(E(832), 'midi'),
    ], chk('« ... minuit quand le téléphone a sonné. » EN: Which opening?', ['Il avait', 'Il était', 'C’était'], 1, 'L’heure : il était. EN: clock time.')),
    grp('L’âge', [
      it(E(1505), 'douze ans'),
      it(E(833), 'trente ans'),
      it(E(834), 'comparer'),
      it(E(839), 'quand j’avais dix ans'),
    ], chk('« Quand j’... dix ans, on a déménagé. » EN: Which form?', ['étais', 'avais'], 1, 'L’âge se dit avec avoir. EN: age takes avoir.')),
  ],
  audio: AUDIO,
  say: 'Trois familles, trois formes.',
  terms: ['meteo', 'heureAge'],
};

/** TRAP IT: the age trap and the weather trap, both straight from English.
 *  Correct indices: 1, 0, 1, 1, 0, 1, 0, 0. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'J’étais douze ans',
  frSub: 'Le piège de l’âge',
  rule: {
    title: 'En français, tu AS un âge',
    body: 'L’anglais dit I was twelve, et le français dit j’avais douze ans. Même chose pour la météo : il faisait, avec faire. EN: French has an age; and the weather uses faire.',
  },
  cards: [
    { promptLabel: 'I was twelve.', promptSound: "J'étais douze ans.", fr: "J'avais douze ans.", ipa: '/ʒa.vɛ du.zɑ̃/', tip: 'avoir + ans, toujours. EN: always avoir plus ans.' },
    { promptLabel: 'She was thirty at the time.', promptSound: "Elle était trente ans à l'époque.", fr: "Elle avait trente ans à l'époque.", ipa: '/ɛ.la.vɛ tʁɑ̃.tɑ̃ a le.pɔk/', tip: 'Même règle, toutes les personnes. EN: same rule for every person.' },
    { promptLabel: 'It was cold.', promptSound: 'Il était froid.', fr: 'Il faisait froid.', ipa: '/il fə.zɛ fʁwa/', tip: 'Le temps qu’il fait se dit avec faire. Il était froid parlerait d’un objet. EN: weather uses faire.' },
    { promptLabel: 'It was midnight.', promptSound: 'Il avait minuit.', fr: 'Il était minuit.', ipa: '/i.le.tɛ mi.nɥi/', tip: 'L’heure, elle, prend être. EN: clock time takes être.' },
    { promptLabel: 'It was windy.', promptSound: 'Il faisait du vent fort.', fr: 'Il y avait du vent.', ipa: '/i.li.ja.vɛ dy vɑ̃/', tip: 'Pour le vent, la neige : il y avait. EN: wind and snow take il y avait.' },
    { promptLabel: 'My brother was two years older.', promptSound: 'Mon frère était deux ans plus vieux.', fr: 'Mon frère avait deux ans de plus que moi.', ipa: '/mɔ̃ fʁɛ.ʁa.vɛ dø.zɑ̃ də plys kə mwa/', tip: 'La comparaison d’âge garde avoir. EN: age comparison keeps avoir.' },
  ],
  drill: [
    { promptSay: "Quand j'... dix ans, j'apprenais le violon.", opts: ['étais', 'avais'], correct: 1 },
    { promptSay: 'Il ... froid dans l’appartement.', opts: ['faisait', 'était'], correct: 0 },
    { promptSay: 'Il ... minuit et demi.', opts: ['avait', 'était'], correct: 1 },
    { promptSay: 'Elle ... trente ans à l’époque.', opts: ['était', 'avait'], correct: 1 },
    { promptSay: 'Il y ... du vent toute la nuit.', opts: ['avait', 'faisait'], correct: 0 },
    { promptSay: 'Le ciel ... gris.', opts: ['avait', 'était'], correct: 1 },
    { promptSay: 'Il ... moins vingt en janvier.', opts: ['faisait', 'était'], correct: 0 },
    { promptSay: 'Mon frère ... deux ans de plus que moi.', opts: ['avait', 'était'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'En français, tu AS un âge' },
    { label: 'Six phrases', kind: 'cards', title: 'L’anglais, puis le français' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-02-piege-age'),
  say: 'Trois petits mots, trois habitudes anglaises à casser.',
  terms: ['heureAge', 'meteo'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un hiver, un été',
  frSub: 'Huit phrases',
  lines: [
    ln(E(823)), ln(E(826)), ln(E(827)), ln(E(816)),
    ln(E(828)), ln(E(825)), ln(E(830)), ln(E(836)),
  ],
  questions: [
    { q: 'Phrase 1 : il faisait combien ? EN: What was the temperature?', opts: ['moins vingt', 'moins trente'], correct: 0, why: 'Il faisait moins vingt en janvier. EN: minus twenty.' },
    { q: 'Phrase 5 : on est où ? EN: Where are we?', opts: ['au Québec', 'à Abidjan'], correct: 1, why: 'Il faisait trente degrés à Abidjan. EN: Abidjan.' },
    { q: 'Phrase 6 : « Il faisait nuit à cinq heures. » Quelle saison ? EN: Which season?', opts: ['l’été', 'l’hiver'], correct: 1, why: 'La nuit à cinq heures : l’hiver. EN: dark at five means winter.' },
    { q: 'Phrase 8 : « On était en 2006. » Ça dit quoi ? EN: What does it give?', opts: ['l’heure', 'l’année'], correct: 1, why: 'on était en + année. EN: the year.' },
  ],
  audio: REC('rec-b1-02-meteo-ecoute'),
  say: 'Écoute. Chaque phrase plante un décor.',
  terms: ['meteo', 'heureAge'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris le décor',
  frSub: 'La dictée',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: 'Écoute, puis écris. Attention aux petites formes.',
  terms: ['meteo'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le verbe', 'Pour la météo, quel verbe ? EN: Which verb for the weather?', ['être', 'faire', 'avoir'], 1, 'il faisait froid, chaud, beau. EN: faire does the weather.'),
  ctl('L’âge', '« Elle ... vingt ans quand elle est arrivée. » EN: Which form?', ['avait', 'était'], 0, 'L’âge : avoir. EN: age takes avoir.'),
  ctl('L’heure', '« ... sept heures du matin. » EN: Which opening?', ['Il faisait', 'Il était', 'Il avait'], 1, 'L’heure : il était. EN: clock time takes être.'),
], ['meteo', 'heureAge']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La météo, l’heure et l’âge',
    opener: { line: 'Moins vingt, minuit, douze ans : trois petites phrases que tu vas dire toute ta vie, et trois verbes différents. EN: Minus twenty, midnight, twelve years old: three sentences, three different verbs.', imageRef: 'lessons/imparfait-usage/act06.jpg' },
    sections: [],
    milestone: 'Tu dis le temps qu’il faisait, l’heure et ton âge sans hésiter. EN: You can give the weather, the time and your age without hesitating.',
    estScreens: 38, restPoints: ['a6-table', 'a6-ecoute'],
  },
  sections: [A6_METEO, A6_TABLE, A6_AGE, A6_CONSTRUIRE, A6_PIEGE, A6_ECOUTE, A6_DICTEE, A6_CHECK],
  imports: [B(1430), B(1432), B(513), B(514), B(515), B(517), B(518), B(519), 'fr.a2.heure-et-date.080', 'fr.b1.heure-et-date.039', 'fr.b1.heure-et-date.021', 'fr.b1.heure-et-date.010', 'fr.a2.heure-et-date.079'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — L'ACTION EN COURS  (PREVIEW ONLY: b1.03 owns the interruption)
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Ce qui se passait à ce moment-là',
  frSub: 'Was -ing',
  examples: [
    ex(E(840), 'je regardais'),
    ex(E(842), 'ils dormaient'),
    ex(E(845), 'elle attendait'),
    ex(E(846), 'le bébé pleurait'),
    ex(E(843), 'on écoutait'),
    ex(E(841), 'elle travaillait'),
    ex(E(847), 'ils parlaient'),
    ex(B(455), 'le bébé, chez b1.01'),
  ],
  audio: AUDIO,
  say: 'En anglais, I was doing. En français, une seule forme.',
  terms: ['enCours'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Une forme, pas deux',
  frSub: 'was -ing',
  hint: 'Quatre cartes. La dernière est une option, pas la règle.',
  audio: REC('rec-b1-02-encours'),
  say: REFRAME,
  terms: ['enCours', 'would'],
  cards: [
    { head: 'I was watching TV', label: 'la forme normale', fr: 'Je regardais la télé.', sub: '[zhuh ruh-gar-DEH lah tay-LAY]', body: 'L’anglais a deux mots, le français en a un. EN: English uses two words, French one.' },
    { head: 'la question', label: 'à ce moment-là', fr: 'Qu’est-ce que tu faisais à huit heures ?', sub: '[kes-kuh tü fuh-ZEH ah wee-TUHR]', body: 'On demande ce qui durait, pas ce qui est arrivé. EN: you ask what was going on.' },
    { head: 'plusieurs choses en même temps', label: 'le fond du tableau', fr: 'Les enfants dormaient.', sub: '[lay-zahⁿ-fahⁿ dor-MEH]', body: 'Plusieurs actions qui duraient ensemble : toutes à l’imparfait. EN: several ongoing actions, all in the imparfait.' },
    { head: 'être en train de', label: 'possible, mais marqué', fr: "J'étais en train de cuisiner.", sub: '[zhay-teh-zahⁿ trehⁿ duh kwee-zee-NAY]', body: 'Ce n’est pas faux, mais ça insiste : « au beau milieu de ». Par défaut, l’imparfait simple suffit. EN: correct but emphatic; the plain imparfait is the default.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qu’est-ce qui se passait ?',
  frSub: 'Construire',
  groups: [
    grp('À huit heures, hier soir', [
      it(E(840), 'la télé'),
      it(E(844), 'le souper'),
      it(E(843), 'la radio'),
      it(E(842), 'les enfants'),
    ], chk('« Hier à huit heures, je ... le souper. » (préparer) EN: Which form?', ['ai préparé', 'préparais', 'prépare'], 1, 'Ce qui durait à ce moment-là : préparais. EN: what was going on then.')),
    grp('Dehors', [
      it(E(845), 'attendre'),
      it(E(841), 'travailler'),
      it(E(846), 'pleurer'),
      it(E(847), 'parler'),
    ], chk('« Elle ... l’autobus depuis vingt minutes. » (attendre) EN: Which form?', ['attendait', 'a attendu'], 0, 'Ça durait encore : attendait. EN: it was still going on.')),
    ctl('Et la forme longue', 'Tu veux dire « I was cooking », normalement. Quelle phrase ? EN: Which one is the default?', ["J'étais en train de cuisiner.", 'Je cuisinais.'], 1, 'Les deux sont correctes. La deuxième est la forme normale. EN: both are correct; the second is the default.'),
  ],
  audio: AUDIO,
  say: 'Une seule forme fait tout le travail.',
  terms: ['enCours'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Hier soir, à huit heures',
  frSub: 'Huit phrases',
  lines: [
    ln(E(840)), ln(E(841)), ln(E(842)), ln(E(843)),
    ln(E(844)), ln(E(845)), ln(E(846)), ln(E(849)),
  ],
  questions: [
    { q: 'Est-ce que ces actions sont finies ? EN: Are these actions finished?', opts: ['oui, toutes', 'non, elles duraient'], correct: 1, why: 'On les regarde en cours, pas à la fin. EN: seen in progress.' },
    { q: 'Phrase 6 : elle faisait quoi ? EN: What was she doing?', opts: ['elle attendait l’autobus', 'elle prenait l’autobus'], correct: 0, why: 'Elle attendait l’autobus. EN: waiting for it.' },
    { q: 'Phrase 8 : « J’étais en train de cuisiner. » Ça insiste sur quoi ? EN: What does it stress?', opts: ['le milieu de l’action', 'la fin de l’action'], correct: 0, why: 'en train de : au beau milieu. EN: right in the middle.' },
    { q: 'Combien de ces huit phrases disent une action finie ? EN: How many are finished actions?', opts: ['aucune', 'trois'], correct: 0, why: 'Aucune. C’est tout l’acte. EN: none, and that is the whole act.' },
  ],
  audio: REC('rec-b1-02-encours-ecoute'),
  say: 'Écoute. Rien ne se termine dans ces phrases.',
  terms: ['enCours'],
};

/** THE PREVIEW, AND THE LINE THIS LESSON STOPS AT. Two cards, and the second
 *  says in so many words that b1.03 owns what happens next. */
const A7_APERCU: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-apercu',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Et si quelque chose arrive ?',
  frSub: 'Un aperçu, rien de plus',
  hint: 'Deux cartes. On s’arrête juste après.',
  audio: AUDIO,
  say: `Un aperçu. ${Cap(B103_REF)} s’occupe de ça.`,
  terms: ['enCours'],
  cards: [
    { head: 'ce qui durait', label: 'le fond', fr: 'Je lisais dans ma chambre.', sub: '[zhuh lee-ZEH dahⁿ mah SHAHⁿBR]', body: 'Une action en cours, sans début ni fin visible. EN: an action under way, no start or end in view.' },
    { head: 'et puis, soudain', label: `c'est ${B103_REF}`, fr: 'Je lisais quand le téléphone a sonné.', sub: '[zhuh lee-ZEH kahⁿ luh tay-lay-fon ah soh-NAY]', body: `Deux temps dans une phrase : le fond à l’imparfait, l’action courte au passé composé. ${Cap(B103_REF)} explique tout ça. Ici, on s’arrête. EN: two tenses in one sentence; the next lesson owns it.` },
  ],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La forme', '« I was reading. » En français, le plus simple : EN: The simplest French:', ['Je lisais.', "J'étais en train de lire."], 0, 'Une seule forme, et elle suffit. EN: one form is enough.'),
  ctl('Le sens', '« À minuit, il ... encore. » (travailler) EN: Which form?', ['travaillait', 'a travaillé'], 0, 'Ça durait à minuit. EN: still going on at midnight.'),
  ctl('La limite', 'Dans « Je lisais quand le téléphone a sonné », quel temps raconte l’action courte ? EN: Which tense tells the short action?', ['l’imparfait', 'le passé composé'], 1, 'C’est le sujet de la leçon suivante. EN: that is the next lesson.'),
], ['enCours']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'L’action en cours',
    opener: { line: 'Hier soir, à huit heures, tu faisais quelque chose : voilà la forme qui le dit, sans raconter la fin. EN: Last night at eight you were doing something; here is the form that says so.', imageRef: 'lessons/imparfait-usage/act07.jpg' },
    sections: [],
    milestone: 'Tu dis ce qui se passait à un moment précis, sans en raconter la fin. EN: You can say what was going on at a given moment.',
    estScreens: 28, restPoints: ['a7-construire'],
  },
  sections: [A7_EXEMPLES, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_APERCU, A7_CHECK],
  imports: [B(455), B(1435), B(523)],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LA POLITESSE
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE SECOND SCENE OF THE LESSON, and the only one where the learner's
 *  French is CORRECT and still lands badly: the present tense is not rude in
 *  a grammar book and is abrupt at a counter. */
const A8_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a8-scene',
  render: 'screens',
  layer: 'core',
  title: 'À la porte du propriétaire',
  frSub: 'Correct, et trop direct',
  setting: { place: 'Un immeuble, rue de Flandre', city: 'Bruxelles', time: '18 h 40', ambience: 'une cage d’escalier, une minuterie qui claque' },
  beats: [
    { kind: 'narration', text: 'Tu cherches un appartement à Bruxelles. Tu montes deux étages et tu sonnes chez la propriétaire. EN: You ring at the landlady’s door about a flat.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mme Peeters', fr: 'Bonjour, c’est pour quoi', en: 'Hello, what is it about?', respell: '[bohⁿ-ZHOOR seh poor KWAH]', stage: 'Elle tient la porte à moitié ouverte. EN: She holds the door half open.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'Je viens pour l’appartement. Je veux vous demander le prix.', en: "I've come about the flat. I want to ask you the price.", respell: '[zhuh vyehⁿ poor lah-par-tuh-MAHⁿ]', stage: 'Tout est correct. Et pourtant, elle recule un peu. EN: Every word is correct, and she steps back.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Mme Peeters', fr: 'Ah. Vous avez rendez-vous', en: 'Oh. Do you have an appointment?', respell: '[voo-zah-vay rahⁿ-day-VOO]', stage: 'Le ton a changé. EN: Her tone has changed.', size: 'md', audio: AUDIO },
    {
      kind: 'choice',
      prompt: 'Tu recommences, plus doucement. Tu dis quoi ? EN: You start again, more gently. What do you say?',
      size: 'lg',
      options: [
        { fr: 'Je veux vous demander le prix.', respell: '[zhuh vuh voo duh-mahⁿ-DAY luh PREE]', en: 'I want to ask you the price.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Je voulais vous demander le prix.', respell: '[zhuh voo-LEH voo duh-mahⁿ-DAY luh PREE]', en: 'I wanted to ask you the price.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Elle ouvre la porte en grand : « Entrez, je vous montre. » EN: She opens the door wide.',
        breaks: 'Elle répond le prix, vite, et referme. EN: She gives the price, fast, and closes the door.',
      },
    },
    {
      kind: 'break',
      heading: 'Le présent n’est pas impoli, il est nu',
      body: 'Je veux est correct et direct. Je voulais dit la même chose, mais recule d’un pas : tu laisses à l’autre la place de dire non. EN: je veux is correct and blunt; je voulais steps back and leaves room to refuse.',
      wrong: { fr: 'Je veux vous demander le prix.', ipa: '/ʒə vø vu də.mɑ̃.de lə pʁi/', respell: '[zhuh vuh voo duh-mahⁿ-DAY luh PREE]', en: 'I want to ask you the price.' },
      right: { fr: 'Je voulais vous demander le prix.', ipa: '/ʒə vu.lɛ vu də.mɑ̃.de lə pʁi/', respell: '[zhuh voo-LEH voo duh-mahⁿ-DAY luh PREE]', en: 'I wanted to ask you the price.' },
      coach: 'Forme passée, sens présent. Tu demandes maintenant. EN: Past form, present meaning; you are asking now.',
      size: 'lg',
      audio: AUDIO,
    },
    { kind: 'resolve', text: 'Deux syllabes de plus, et la porte s’ouvre. C’est tout l’acte. EN: Two more syllables, and the door opens.', size: 'md' },
  ],
  closing: { text: 'Le seul emploi de cette leçon qui ne parle pas du passé. EN: The one use in this lesson that is not about the past.', size: 'md' },
  audio: AUDIO,
  say: 'Regarde bien : la phrase directe est correcte, et elle ferme la porte.',
  terms: ['poli'],
};

const A8_FORMULES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-formules',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre formules à connaître par cœur',
  frSub: 'Je voulais, je venais, je me demandais si',
  hint: 'Cinq cartes. Les quatre premières sont à retenir entières.',
  sheetId: 'sheet-poli',
  audio: REC('rec-b1-02-poli'),
  say: 'Quatre formules. Tu les diras chaque semaine.',
  terms: ['poli'],
  cards: [
    { head: 'je voulais vous demander', label: 'la plus utile', fr: 'Je voulais vous demander un petit service.', sub: '[zhuh voo-LEH voo duh-mahⁿ-DAY uhⁿ puh-tee sehr-VEES]', body: 'La demande la plus courante, au travail comme chez le médecin. EN: the most common softened request.' },
    { head: 'je venais pour', label: 'à la porte, au guichet', fr: "Je venais pour l'appartement.", sub: '[zhuh vuh-NEH poor lah-par-tuh-MAHⁿ]', body: 'Tu es là maintenant. Personne n’entend un passé. EN: you are there now; nobody hears a past.' },
    { head: 'je me demandais si', label: 'dans un courriel', fr: 'Je me demandais si vous étiez libre jeudi.', sub: '[zhuh muh duh-mahⁿ-DEH see voo-zay-tyay leebr zhuh-DEE]', body: 'Après si, garde l’imparfait : si vous étiez, si vous pouviez, si vous aviez. EN: after si, keep the imparfait.' },
    { head: 'je voulais savoir si', label: 'au téléphone', fr: 'Je voulais savoir si le poste était à temps plein.', sub: '[zhuh voo-LEH sah-vwar see luh pos-tay-teh-tah tahⁿ PLEHⁿ]', body: 'Une question devient une demande, et la porte reste ouverte. EN: a question becomes a request.' },
    { head: 'et je voudrais ?', label: 'aussi poli', fr: 'Je voudrais vous demander un service.', sub: '[zhuh voo-DREH voo duh-mahⁿ-day uhⁿ sehr-VEES]', body: `Le conditionnel est aussi poli. ${Cap(MODAL_REF)} te l’a donné. Les deux marchent ; je voulais est un peu plus modeste. EN: the conditional is equally polite.` },
  ],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Huit demandes, huit situations',
  frSub: 'La politesse au quotidien',
  examples: [
    ex(E(858), 'au téléphone, pour une annonce'),
    ex(E(857), 'à l’accueil'),
    ex(E(863), 'au restaurant'),
    ex(E(864), 'au bureau de poste'),
    ex(E(861), 'à ton patron'),
    ex(E(865), 'à quelqu’un qui t’a aidé'),
    ex(E(860), 'à un ami : tu, et la même forme'),
    ex(E(866), 'à un ancien professeur'),
  ],
  audio: AUDIO,
  say: 'Même forme, huit situations.',
  terms: ['poli'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Adoucis la demande',
  frSub: 'Construire',
  groups: [
    grp('De je veux à je voulais', [
      it(E(868), 'direct'),
      it(E(859), 'plus doux'),
      it(E(856), 'plus doux'),
      it(E(865), 'plus doux'),
    ], chk('« Je ... vous demander un conseil. » Tu veux être poli. EN: You want to be polite.', ['veux', 'voulais'], 1, 'voulais recule d’un pas. EN: voulais steps back.')),
    grp('Avec si', [
      it(E(854), 'si + imparfait'),
      it(E(855), 'si vous aviez'),
      it(E(861), 'si je pouvais'),
      it(E(862), 'si la chambre était'),
    ], chk('« Je me demandais si vous ... libre jeudi. » (être) EN: Which form?', ['êtes', 'étiez'], 1, 'Après je me demandais si, l’imparfait continue. EN: the imparfait continues after si.')),
    ctl('Le vrai passé', '« Hier soir, je voulais dormir tôt. » C’est une demande ? EN: Is this a request?', ['oui, c’est poli', 'non, c’est un vrai passé'], 1, 'Ici, je voulais raconte hier soir. Le contexte fait la différence. EN: context decides.'),
  ],
  audio: AUDIO,
  say: 'Rends chaque phrase plus douce.',
  terms: ['poli'],
};

/** PRODUCTION INSIDE THE ACT: the phone call the formulas exist for. Two alts
 *  and a userEn on every turn. The learner uses vous, because that is what the
 *  situation needs. */
const A8_PARLER: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a8-parler',
  layer: 'core',
  title: 'Le coup de téléphone',
  frSub: 'Tu appelles pour une chambre',
  setting: 'Tu appelles une propriétaire à Bruxelles au sujet d’une chambre. Elle est pressée, mais gentille. EN: You phone a landlady about a room.',
  turns: [
    {
      ai: 'Allô, oui ?',
      en: 'Hello?',
      user: 'Bonjour, je téléphonais au sujet de la chambre.',
      userEn: 'Hello, I am calling about the room. (Past form, present meaning: you are calling now.)',
      alts: [
        { fr: 'Bonjour, j’appelais pour l’annonce.', en: 'Hello, I am calling about the ad.' },
        { fr: 'Bonjour, je venais pour la chambre.', en: "Hello, I've come about the room." },
      ],
    },
    {
      ai: 'Ah oui, la chambre. Elle est toujours libre.',
      en: 'Oh yes, the room. It is still free.',
      user: 'Je voulais savoir si elle était meublée.',
      userEn: 'I wanted to know if it was furnished. (After voulais savoir si, the imparfait continues.)',
      alts: [
        { fr: 'Je me demandais si elle était meublée.', en: 'I was wondering if it was furnished.' },
        { fr: 'Je voulais vous demander si elle était meublée.', en: 'I wanted to ask you if it was furnished.' },
      ],
    },
    {
      ai: 'Oui, avec un lit et un bureau. Vous êtes étudiant ?',
      en: 'Yes, with a bed and a desk. Are you a student?',
      user: 'Oui. Avant, j’habitais à Montréal, et je commence mes cours en septembre.',
      userEn: 'Yes. I used to live in Montreal, and I start my classes in September. (avant plus the imparfait, then the present.)',
      alts: [
        { fr: 'Oui, j’étais étudiant à Montréal l’année dernière.', en: 'Yes, I was a student in Montreal last year.' },
        { fr: 'Oui. À Montréal, j’habitais chez mon frère.', en: 'Yes. In Montreal I lived at my brother’s.' },
      ],
    },
    {
      ai: 'Très bien. Vous voulez la visiter ?',
      en: 'Very good. Do you want to see it?',
      user: 'Oui, je me demandais si vous étiez libre jeudi.',
      userEn: 'Yes, I was wondering if you were free on Thursday. (The softest way to propose a day.)',
      alts: [
        { fr: 'Je voulais vous demander si jeudi était possible.', en: 'I wanted to ask you if Thursday was possible.' },
        { fr: 'Je me demandais si je pouvais venir jeudi.', en: 'I was wondering if I could come on Thursday.' },
      ],
    },
    {
      ai: 'Jeudi, c’est difficile. Vendredi, plutôt.',
      en: 'Thursday is difficult. Friday, rather.',
      user: 'Vendredi, c’est parfait. Je voulais aussi savoir si le chauffage était compris.',
      userEn: 'Friday is perfect. I also wanted to know if the heating was included. (One more softened question.)',
      alts: [
        { fr: 'Vendredi me va. Je me demandais si le chauffage était compris.', en: 'Friday works. I was wondering if the heating was included.' },
        { fr: 'D’accord pour vendredi. Et le chauffage, il est compris ?', en: 'Friday is fine. And is the heating included?' },
      ],
    },
    {
      ai: 'Oui, tout est compris. À vendredi, alors.',
      en: 'Yes, everything is included. See you Friday then.',
      user: 'Merci beaucoup. Je voulais vous remercier pour votre patience.',
      userEn: 'Thank you very much. I wanted to thank you for your patience. (The same form closes the call.)',
      alts: [
        { fr: 'Merci beaucoup, à vendredi.', en: 'Thank you very much, see you Friday.' },
        { fr: 'Je vous remercie. À vendredi.', en: 'Thank you. See you Friday.' },
      ],
    },
  ],
  audio: AUDIO,
  say: 'À toi de parler. Reste doux, même quand tu insistes.',
  terms: ['poli'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre demandes qui tombent mal',
  frSub: 'Et comment les rattraper',
  errors: [
    { wrong: 'Je veux vous demander un service.', right: 'Je voulais vous demander un service.', why: 'Logique : en anglais, I want to ask you. En français, le présent va droit au but et ferme la porte. EN: the present is blunt here.' },
    { wrong: 'Je me demandais si vous avez mes photos.', right: 'Je me demandais si vous aviez mes photos.', why: 'La première partie est au passé, la deuxième suit. Après si, garde l’imparfait. EN: after si, keep the imparfait.' },
    { wrong: 'Je voulais un café, s’il vous plaît.', right: 'Je voudrais un café, s’il vous plaît.', why: 'Pour commander, l’usage a choisi le conditionnel. Je voulais sert à demander un service, pas un café. EN: ordering takes je voudrais.' },
    { wrong: 'Hier, je venais pour l’appartement.', right: 'Hier, je suis venu pour l’appartement.', why: 'Logique : la formule polie est bien je venais. Mais avec hier, tu racontes un vrai passé, et la formule polie ne prend jamais de date. EN: with hier you are telling a real past, so the passé composé.' },
  ],
  audio: AUDIO,
  say: 'Quatre erreurs, et la dernière est la plus fine.',
  terms: ['poli'],
};

const A8_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a8-flash',
  layer: 'core',
  title: 'Les formules, par cœur',
  frSub: 'Huit cartes',
  cards: [
    { front: 'I wanted to ask you a small favour.', back: 'Je voulais vous demander un petit service.', say: 'Je voulais vous demander un petit service.' },
    { front: "I've come about the flat.", back: "Je venais pour l'appartement.", say: "Je venais pour l'appartement." },
    { front: 'I was wondering if you were free on Thursday.', back: 'Je me demandais si vous étiez libre jeudi.', say: 'Je me demandais si vous étiez libre jeudi.' },
    { front: 'I wanted to know if the job was full-time.', back: 'Je voulais savoir si le poste était à temps plein.', say: 'Je voulais savoir si le poste était à temps plein.' },
    { front: "I'm calling about the ad.", back: "J'appelais pour l'annonce.", say: "J'appelais pour l'annonce." },
    { front: 'I wanted to thank you for everything.', back: 'Je voulais vous remercier pour tout.', say: 'Je voulais vous remercier pour tout.' },
    { front: 'I was wondering if I could leave earlier.', back: 'Je me demandais si je pouvais partir plus tôt.', say: 'Je me demandais si je pouvais partir plus tôt.' },
    { front: "I've come to pick up a parcel.", back: 'Je venais chercher un colis.', say: 'Je venais chercher un colis.' },
  ],
  audio: AUDIO,
  say: 'Apprends-les entières. Tu ne les fabriqueras pas sur le moment.',
  terms: ['poli'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le sens', '« Je voulais vous demander un service. » La personne demande quand ? EN: When is she asking?', ['maintenant', 'hier'], 0, 'Forme passée, sens présent. EN: past form, present meaning.'),
  ctl('Après si', '« Je me demandais si vous ... le temps. » (avoir) EN: Which form?', ['avez', 'aviez'], 1, 'L’imparfait continue après si. EN: the imparfait continues.'),
  ctl('La limite', 'Tu commandes un café. Tu dis : EN: You are ordering a coffee.', ['Je voulais un café.', 'Je voudrais un café.'], 1, 'Pour commander, l’usage a choisi je voudrais. EN: ordering takes je voudrais.'),
], ['poli']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'La politesse',
    opener: { line: 'Une porte à moitié ouverte, deux syllabes en plus, et elle s’ouvre en grand : ici, l’imparfait ne parle pas du passé. EN: Two more syllables and the door opens; here the imparfait is not about the past.', imageRef: 'lessons/imparfait-usage/act08.jpg' },
    sections: [],
    milestone: 'Tu demandes quelque chose sans brusquer personne. EN: You can ask for something without being blunt.',
    estScreens: 42, restPoints: ['a8-exemples', 'a8-parler'],
  },
  sections: [A8_SCENE, A8_FORMULES, A8_EXEMPLES, A8_CONSTRUIRE, A8_PARLER, A8_ERREURS, A8_FLASH, A8_CHECK],
  imports: ['fr.b1.routines.062'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LES PIÈGES ANGLAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Would, used to, was -ing',
  frSub: 'Trois formes anglaises, un seul temps',
  hint: 'Six cartes. Les deux dernières sont des exceptions.',
  sheetId: 'sheet-poli',
  audio: REC('rec-b1-02-anglais'),
  say: REFRAME,
  terms: ['would'],
  cards: [
    { head: 'would + habitude', label: 'I would play', fr: "Quand j'étais petit, je jouais dehors tous les jours.", sub: '[kahⁿ zhay-teh puh-TEE zhuh zhoo-EH duh-or too lay ZHOOR]', body: 'Ce would raconte une habitude. En français : imparfait, pas de conditionnel. EN: this would is a habit, not a condition.' },
    { head: 'used to', label: 'I used to smoke', fr: 'Avant, je fumais.', sub: '[ah-VAHⁿ zhuh fü-MEH]', body: 'used to n’a pas de verbe en français. Avant, autrefois, et l’imparfait suffisent. EN: used to has no French verb.' },
    { head: "et j'avais l'habitude de", label: 'possible aussi', fr: "J'avais l'habitude de marcher jusqu'à l'école.", sub: '[zha-VEH lah-bee-TÜD duh mar-shay zhüs-kah lay-KOL]', body: 'Correct, mais plus lourd. On l’utilise pour insister sur la régularité. EN: correct, heavier, and it stresses the routine.' },
    { head: 'was -ing', label: 'I was watching', fr: 'Je regardais la télé.', sub: '[zhuh ruh-gar-DEH lah tay-LAY]', body: 'Une seule forme. être en train de existe, mais insiste. EN: one form; être en train de exists but is emphatic.' },
    { head: 'le would poli', label: 'et là, ce n’est pas une habitude', fr: 'Tu voulais me parler ?', sub: '[tü voo-LEH muh par-LAY]', body: 'Did you want to talk to me ? Ici, would ou did est une politesse. C’est l’acte 8. EN: this one is politeness, act 8.' },
    { head: 'le would avec si', label: 'un vrai conditionnel', fr: "Si j'avais le temps, je viendrais avec toi.", sub: '[see zha-VEH luh TAHⁿ zhuh vyehⁿ-DREH ah-vek TWAH]', body: 'Avec si, l’anglais would devient un vrai conditionnel : viendrais, pas venais. EN: with si, would really is the conditional.' },
  ],
};

const A9_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a9-astuces',
  layer: 'core',
  title: 'Trois tests de deux secondes',
  frSub: 'Pour choisir vite',
  hacks: [
    { hack: 'Remplace would par used to. Si la phrase marche encore, c’est une habitude, donc l’imparfait. EN: swap would for used to.', why: 'When I was a kid I would play = I used to play. Une habitude. Mais I would come if I could ne marche pas avec used to : c’est un conditionnel.' },
    { hack: 'Cherche un si dans la phrase anglaise. S’il y en a un, ce n’est pas l’imparfait. EN: look for an if.', why: 'If I had time, I would come : le would dépend du si. En français, viendrais.' },
    { hack: 'Demande-toi : est-ce que je peux compter les fois ? Si oui, ce n’est plus l’imparfait. EN: can you count the times?', why: 'Three times last summer se compte : passé composé. Every summer ne se compte pas : imparfait.' },
  ],
  audio: AUDIO,
  say: 'Trois tests. Deux secondes chacun.',
  terms: ['would', 'indice'],
};

/** THE ACT'S TRAP, STEPPED AND GATED.
 *  Correct indices: 1, 0, 0, 1, 0, 1, 1, 0. */
const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Ne traduis pas mot à mot',
  frSub: 'Le piège anglais',
  rule: {
    title: 'Un mot anglais, plusieurs français',
    body: 'Pour une habitude, would et used to deviennent l’imparfait. Avec si, would devient le conditionnel. Et pour être poli, l’imparfait revient. EN: habit gives the imparfait, si gives the conditional, politeness gives the imparfait again.',
  },
  cards: [
    { promptLabel: 'When I was a kid, I would play outside.', promptSound: "Quand j'étais petit, je jouerais dehors.", fr: "Quand j'étais petit, je jouais dehors tous les jours.", ipa: '/kɑ̃ ʒe.tɛ pə.ti ʒə ʒu.ɛ də.ɔʁ tu le ʒuʁ/', tip: 'Le conditionnel imagine ; il ne raconte pas une habitude. EN: the conditional imagines, it does not narrate.' },
    { promptLabel: 'I used to smoke.', promptSound: "J'utilisais à fumer.", fr: 'Avant, je fumais.', ipa: '/a.vɑ̃ ʒə fy.mɛ/', tip: 'used to n’a pas de traduction directe. EN: used to has no direct translation.' },
    { promptLabel: 'They would come every summer.', promptSound: 'Ils viendraient nous voir tous les étés.', fr: 'Ils venaient nous voir tous les étés.', ipa: '/il və.nɛ nu vwaʁ tu le.ze.te/', tip: 'tous les étés : une habitude, donc venaient. EN: every summer is a habit.' },
    { promptLabel: 'I was watching TV.', promptSound: "J'étais en train de regarder la télé, à ce moment précis.", fr: 'Je regardais la télé.', ipa: '/ʒə ʁə.ɡaʁ.dɛ la te.le/', tip: 'Pas faux, mais lourd. Par défaut, l’imparfait simple. EN: not wrong, just heavy.' },
    { promptLabel: 'If I had time, I would come with you.', promptSound: "Si j'avais le temps, je venais avec toi.", fr: "Si j'avais le temps, je viendrais avec toi.", ipa: '/si ʒa.vɛ lə tɑ̃ ʒə vjɛ̃.dʁɛ a.vɛk twa/', tip: 'Avec si, le deuxième verbe est un conditionnel. EN: with si, the second verb is conditional.' },
    { promptLabel: 'Did you want to talk to me?', promptSound: 'Est-ce que tu veux me parler, là, tout de suite ?', fr: 'Tu voulais me parler ?', ipa: '/ty vu.lɛ mə paʁ.le/', tip: 'Ici, l’imparfait est une politesse, pas un passé. EN: politeness, not a past.' },
  ],
  drill: [
    { promptSay: 'When I was young, I would swim every day. → Je ... tous les jours.', opts: ['nagerais', 'nageais'], correct: 1 },
    { promptSay: 'I used to live in Dakar. → Avant, j’... à Dakar.', opts: ['habitais', 'habiterais'], correct: 0 },
    { promptSay: 'I was reading. → Je ... .', opts: ['lisais', 'lirais'], correct: 0 },
    { promptSay: 'If I had a car, I would come. → Si j’avais une voiture, je ... .', opts: ['venais', 'viendrais'], correct: 1 },
    { promptSay: 'I would like a coffee. → Je ... un café.', opts: ['voudrais', 'voulais'], correct: 0 },
    { promptSay: 'She would call every Sunday. → Elle ... chaque dimanche.', opts: ['appellerait', 'appelait'], correct: 1 },
    { promptSay: 'Did you want to see me? → Tu ... me voir ?', opts: ['voudrais', 'voulais'], correct: 1 },
    { promptSay: 'We used to walk along the river. → On se ... le long du fleuve.', opts: ['promenait', 'promènerait'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un mot anglais, plusieurs français' },
    { label: 'Six phrases', kind: 'cards', title: 'Mot à mot, puis juste' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-02-piege-anglais'),
  say: 'Huit phrases. Regarde toujours s’il y a un si.',
  terms: ['would'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Cinq erreurs venues de l’anglais',
  frSub: 'Et pourquoi elles sont logiques',
  errors: [
    { wrong: "Quand j'étais petit, je jouerais dehors.", right: "Quand j'étais petit, je jouais dehors.", why: 'Logique : l’anglais dit would. Mais le conditionnel imagine autre chose ; il ne raconte pas une habitude. EN: would is not the conditional here.' },
    { wrong: "J'utilisais à fumer.", right: 'Avant, je fumais.', why: 'Logique : used to ressemble à utiliser. C’est un faux ami parfait. EN: used to only looks like utiliser.' },
    { wrong: "J'étais en train de manger tous les midis.", right: 'Je mangeais tous les midis.', why: 'être en train de dit « à cet instant précis ». Avec tous les midis, ça ne va pas ensemble. EN: en train de cannot mark a habit.' },
    { wrong: "Si j'avais le temps, je venais.", right: "Si j'avais le temps, je viendrais.", why: 'Logique : la première moitié est bien à l’imparfait. Mais après si, le deuxième verbe est un conditionnel. EN: the si-clause takes the imparfait, the other half does not.' },
    { wrong: 'Tous les étés, je suis allé chez ma grand-mère.', right: 'Tous les étés, j’allais chez ma grand-mère.', why: 'Pas impossible, mais on entend une liste finie d’étés. Pour l’habitude : imparfait. EN: it sounds like a closed list of summers.' },
  ],
  audio: AUDIO,
  say: 'Cinq erreurs, cinq raisons logiques.',
  terms: ['would'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisis par le sens',
  frSub: 'Le sens décide',
  groups: [
    grp('Ce sont des habitudes', [
      it(E(872), 'would play'),
      it(E(876), 'would come'),
      it(E(882), 'would talk'),
      it(E(878), 'would never lock'),
    ], chk('Ces quatre phrases répondent à quelle question ? EN: Which question do they answer?', ['Qu’est-ce qui est arrivé une fois ?', 'Qu’est-ce qui revenait ?'], 1, 'Elles racontent ce qui revenait. EN: they tell what came back.')),
    grp('Ce sont des conditionnels', [
      it(E(885), 'avec si'),
      it(E(886), 'une commande polie'),
    ], chk('Pourquoi « je viendrais » et pas « je venais » ? EN: Why the conditional?', ['parce qu’il y a un si', 'parce que c’est le passé'], 0, 'Le si change tout. EN: the si changes everything.')),
    ctl('Et celle-ci', '« Tu voulais me parler ? » C’est quoi ? EN: What is this one?', ['une habitude', 'une politesse', 'un conditionnel'], 1, 'Un imparfait poli : tu demandes maintenant. EN: a polite imparfait.'),
  ],
  audio: AUDIO,
  say: 'Trois familles. Le sens décide, toujours.',
  terms: ['would', 'poli'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Habitude, politesse ou condition ?',
  frSub: 'Huit phrases',
  lines: [
    ln(E(872)), ln(E(875)), ln(E(885)), ln(E(884)),
    ln(E(880)), ln(E(886)), ln(E(881)), ln(E(877)),
  ],
  questions: [
    { q: 'Phrase 3 : « Si j’avais le temps, je viendrais avec toi. » C’est quoi ? EN: What is it?', opts: ['une habitude', 'une condition'], correct: 1, why: 'Le si, puis un conditionnel. EN: si plus the conditional.' },
    { q: 'Phrase 4 : « Tu voulais me parler ? » C’est quoi ? EN: What is it?', opts: ['une politesse', 'un vrai passé'], correct: 0, why: 'Une façon douce de demander, maintenant. EN: a soft way of asking now.' },
    { q: 'Phrase 6 : « Je voudrais un café. » Quel temps ? EN: Which tense?', opts: ['l’imparfait', 'le conditionnel'], correct: 1, why: 'voudrais, pas voulais. EN: the conditional.' },
    { q: 'Combien de ces huit phrases racontent une habitude ? EN: How many tell a habit?', opts: ['deux', 'cinq'], correct: 1, why: 'Cinq. Les trois autres sont deux conditionnels et une politesse. EN: five habits.' },
  ],
  audio: REC('rec-b1-02-anglais-ecoute'),
  say: 'Écoute. Une seule de ces phrases dépend d’un si.',
  terms: ['would', 'poli'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le test', 'Tu peux remplacer would par used to. Alors en français, tu mets : EN: Then in French you use:', ['le conditionnel', 'l’imparfait'], 1, 'used to marche = une habitude = imparfait. EN: a habit takes the imparfait.'),
  ctl('Le si', '« If I had a car, I would come. » Le deuxième verbe est : EN: The second verb is:', ['je venais', 'je viendrais'], 1, 'Avec si, c’est un conditionnel. EN: with si, the conditional.'),
  ctl('La politesse', '« I would like a coffee. » En français : EN: In French:', ['Je voudrais un café.', 'Je voulais un café.'], 0, 'Pour commander, je voudrais. EN: ordering takes je voudrais.'),
], ['would', 'poli']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les pièges anglais',
    opener: { line: 'Would, used to, was -ing : trois façons anglaises de dire un passé, et une seule règle française à retenir. EN: Three English ways of saying the past, and one French rule.', imageRef: 'lessons/imparfait-usage/act09.jpg' },
    sections: [],
    milestone: 'Would et used to ne te piègent plus, et tu vois quand ils ne sont pas l’imparfait. EN: would and used to no longer trap you.',
    estScreens: 36, restPoints: ['a9-astuces', 'a9-erreurs'],
  },
  sections: [A9_CARTES, A9_ASTUCES, A9_PIEGE, A9_ERREURS, A9_CHOISIR, A9_ECOUTE, A9_CHECK],
  imports: [],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — TOUT ENSEMBLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux hivers',
  frSub: 'Le texte le plus long de la leçon',
  text: "Quand j'avais douze ans, nous habitions à Chicoutimi, dans une maison jaune au bout d'une rue tranquille. L'hiver, il faisait moins vingt presque tous les matins, et il neigeait de novembre à avril. Mon père déneigeait l'entrée avant le déjeuner ; ma mère préparait du chocolat chaud. Tous les samedis, mon frère et moi, nous allions à la patinoire avec les voisins. Je n'étais pas très bon, et j'avais toujours froid aux pieds, mais je ne voulais jamais rentrer. Le soir, il faisait nuit à cinq heures. On écoutait la radio, les adultes parlaient fort dans la cuisine, et le chat dormait sur le calorifère. À l'époque, je trouvais cette vie normale. Aujourd'hui, j'habite à Abidjan, il fait trente degrés, et mes enfants ne connaissent pas la neige. Quand je leur raconte ces hivers, ils me demandent si j'avais vraiment froid aux pieds.",
  glossary: [
    { word: 'au bout', en: 'at the end' },
    { word: 'déneigeait', en: 'cleared the snow', note: 'déneiger : enlever la neige. Un verbe d’ici.' },
    { word: 'la patinoire', en: 'the skating rink' },
    { word: 'le calorifère', en: 'the radiator', note: 'Au Québec, le radiateur.' },
    { word: 'je trouvais', en: 'I found', note: 'trouver + adjectif : donner son avis. Un état.' },
    { word: 'ils me demandent si', en: 'they ask me if', note: 'Ici, c’est un vrai présent : ils demandent aujourd’hui.' },
  ],
  questions: [
    { q: 'Cite trois choses qui revenaient chaque hiver.', a: 'Il neigeait, le père déneigeait l’entrée, la mère préparait du chocolat chaud, on allait à la patinoire tous les samedis. EN: repeated things.' },
    { q: 'Quels états sont décrits ?', a: '« Je n’étais pas très bon », « j’avais toujours froid aux pieds », « je ne voulais jamais rentrer », « je trouvais cette vie normale ». EN: states and feelings.' },
    { q: 'Pourquoi la fin du texte est au présent ?', a: 'Parce qu’elle parle d’aujourd’hui : Abidjan, trente degrés, les enfants. Le texte change d’époque avec Aujourd’hui. EN: the text switches era.' },
    { q: 'Trouve la demande dans la dernière phrase.', a: '« Ils me demandent si j’avais vraiment froid aux pieds. » Ce n’est pas une politesse : c’est une vraie question au présent, sur un passé. EN: a real present question about the past.' },
  ],
  audio: REC('rec-b1-02-deux-hivers'),
  say: 'Lis tout. Tu vas reconnaître les six emplois.',
  terms: ['habitude', 'decor', 'meteo'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  title: 'Quatre choses à ne pas oublier',
  frSub: 'Avant de produire',
  points: [
    'Une habitude ne se compte pas : imparfait. EN: a habit is not counted.',
    'Avant, autrefois, à l’époque ouvrent le passé ; maintenant le ferme. EN: those words open the past.',
    'L’âge se dit avec avoir, la météo avec faire, l’heure avec être. EN: age avoir, weather faire, time être.',
    'Je voulais et je me demandais si servent à demander aujourd’hui. EN: those two ask for something now.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude', 'poli'],
};

const A10_TALK: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a10-talk',
  layer: 'core',
  title: 'L’entretien d’embauche',
  frSub: 'Parler de ton ancien poste',
  setting: 'Montréal, un bureau au vingtième étage. Tu passes un entretien pour un poste dans le tourisme. Avant, tu travaillais à Bruxelles. EN: A job interview in Montreal about your old job in Brussels.',
  turns: [
    {
      ai: 'Bonjour. Parlez-moi de votre ancien poste, à Bruxelles.',
      en: 'Hello. Tell me about your previous job in Brussels.',
      user: 'Je travaillais dans une agence de voyages. Je gérais une équipe de six personnes.',
      userEn: 'I worked at a travel agency. I managed a team of six. (A job you held for years: a state.)',
      alts: [
        { fr: 'J’étais responsable d’une petite équipe dans une agence de voyages.', en: 'I was in charge of a small team at a travel agency.' },
        { fr: 'Je travaillais pour une agence de voyages, près de la gare.', en: 'I worked for a travel agency near the station.' },
      ],
    },
    {
      ai: 'Et concrètement, qu’est-ce que vous faisiez chaque semaine ?',
      en: 'And in practice, what did you do each week?',
      user: 'Tous les lundis, je préparais le rapport de la semaine.',
      userEn: 'Every Monday, I prepared the weekly report. (Every Monday: a habit.)',
      alts: [
        { fr: 'D’habitude, je préparais les rapports le lundi.', en: 'I usually prepared the reports on Mondays.' },
        { fr: 'Chaque semaine, je faisais un rapport pour la direction.', en: 'Every week I did a report for management.' },
      ],
    },
    {
      ai: 'Et l’ambiance, c’était comment ?',
      en: 'And what was the atmosphere like?',
      user: 'L’ambiance était bonne. Je connaissais bien mes collègues.',
      userEn: 'The atmosphere was good. I knew my colleagues well. (Description and a state.)',
      alts: [
        { fr: 'C’était une petite agence, et on s’entendait bien.', en: 'It was a small agency and we got on well.' },
        { fr: 'L’ambiance était très agréable, on commençait à huit heures.', en: 'The atmosphere was very pleasant; we started at eight.' },
      ],
    },
    {
      ai: 'Vous aviez quel âge quand vous avez commencé là-bas ?',
      en: 'How old were you when you started there?',
      user: 'J’avais vingt-six ans à l’époque.',
      userEn: 'I was twenty-six at the time. (Age: avoir, in the imparfait.)',
      alts: [
        { fr: 'J’avais vingt-six ans, je crois.', en: 'I was twenty-six, I think.' },
        { fr: 'À l’époque, j’avais vingt-six ans.', en: 'Back then I was twenty-six.' },
      ],
    },
    {
      ai: 'Et pourquoi est-ce que vous voulez changer ?',
      en: 'And why do you want to change?',
      user: 'Avant, je voyageais peu. Maintenant, je cherche un poste plus international.',
      userEn: 'I used to travel very little. Now I am looking for a more international job. (avant, then maintenant.)',
      alts: [
        { fr: 'À Bruxelles, je restais au bureau. Maintenant, je veux voyager.', en: 'In Brussels I stayed in the office. Now I want to travel.' },
        { fr: 'Avant, je travaillais surtout seul. Maintenant, je veux une grande équipe.', en: 'I used to work mostly alone. Now I want a big team.' },
      ],
    },
    {
      ai: 'Très bien. Vous avez des questions pour nous ?',
      en: 'Very good. Do you have any questions for us?',
      user: 'Oui. Je voulais savoir si le poste était à temps plein.',
      userEn: 'Yes. I wanted to know if the job was full-time. (Present meaning, softer form.)',
      alts: [
        { fr: 'Je me demandais si vous cherchiez quelqu’un pour l’été.', en: 'I was wondering if you were looking for someone for the summer.' },
        { fr: 'Je voulais vous demander si je pouvais commencer en mai.', en: 'I wanted to ask you if I could start in May.' },
      ],
    },
  ],
  audio: AUDIO,
  say: 'Six tours. Parle de ton ancien travail comme d’un décor.',
  terms: ['avant', 'poli'],
};

/** THE GRADED TASK. DRAFT TYPE (`_task-section.ts`), filtered out before
 *  validateLesson and validateDensity. Placed in the final production act, as
 *  the standard asks. */
const A10_TASK: TaskSection = {
  type: 'task',
  id: 'a10-task',
  title: 'Ton souvenir, par écrit',
  frSub: 'La tâche',
  brief: "Tu écris à une personne de ton passé : un ancien professeur, ou un ancien propriétaire. Tu décris un lieu où tu habitais et une habitude de cette époque. À la fin, tu lui demandes quelque chose, poliment. Dans ta lettre, tu dis vous à cette personne.",
  briefEn: 'You write to someone from your past, a former teacher or landlord: describe a place you lived and a habit from that time, then ask them for something politely.',
  produce: "Écris 90 à 130 mots : le lieu, la météo, ton âge, une habitude de la semaine, un état, puis une demande polie à l'imparfait.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'emplois',
        label: "L'imparfait au bon endroit",
        maxPoints: 4,
        descriptors: [
          '0 : presque pas d’imparfait. Les habitudes et le décor sont au présent ou au passé composé.',
          '1 : quelques imparfaits, mais la plupart des habitudes ou du décor sont à un autre temps.',
          '2 : l’imparfait est là, mais une habitude ou le décor passe souvent au passé composé ou au présent.',
          '3 : l’imparfait est bien choisi presque partout. Une ou deux hésitations.',
          '4 : chaque habitude, état et détail du décor est à l’imparfait. Le présent sert seulement pour aujourd’hui.',
        ],
      },
      {
        key: 'description',
        label: 'Une description riche',
        maxPoints: 3,
        descriptors: [
          '0 : pas de description, seulement une liste.',
          '1 : un ou deux éléments (le lieu, ou l’âge), sans détails.',
          '2 : le lieu, la météo, l’âge et une habitude sont là, mais simplement.',
          '3 : le lieu, la météo, l’âge, une habitude et un état sont là, avec des détails précis : des gens, des couleurs, des bruits.',
        ],
      },
      {
        key: 'formes',
        label: 'Des formes correctes',
        maxPoints: 4,
        descriptors: [
          '0 : les formes sont presque toujours fausses.',
          '1 : beaucoup de fins fausses (-ait pour je, -ions oublié) ou de bases fausses.',
          '2 : des erreurs régulières, par exemple j’étais douze ans, ou nous étaions.',
          '3 : une ou deux erreurs de forme, et le sens reste clair.',
          '4 : toutes les formes sont correctes, être compris (j’étais), l’âge avec avoir et la météo avec faire.',
        ],
      },
      {
        key: 'demande',
        label: 'La demande polie',
        maxPoints: 3,
        descriptors: [
          '0 : pas de demande, ou un ordre (Envoyez-moi...).',
          '1 : une demande directe au présent (Je veux..., Vous pouvez... ?).',
          '2 : une demande polie, mais pas à l’imparfait (je voudrais), ou si suivi du présent (si vous avez).',
          '3 : Je voulais vous demander... ou Je me demandais si... avec l’imparfait après si, et une demande qui va avec la personne.',
        ],
      },
      {
        key: 'consigne',
        label: 'La consigne',
        maxPoints: 2,
        descriptors: [
          '0 : moins de 60 mots, ou le texte ne répond pas à la tâche.',
          '1 : un élément manque (la demande, la météo, l’âge, l’état ou l’habitude), ou le texte sort de 90 à 130 mots.',
          '2 : tout est là, adressé à une personne, entre 90 et 130 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'Quand j’avais ... ans,',
    'À l’époque, j’habitais ...',
    'Il y avait ...',
    'L’hiver, il faisait ...',
    'Tous les samedis, ...',
    'D’habitude, ...',
    'J’étais ... , mais ...',
    'Je voulais vous demander si ...',
    'Je me demandais si ...',
  ],
  modelAnswer: "Chère Madame Gagnon, quand j'avais dix ans, j'habitais à Chicoutimi, tout près de votre école. Notre maison était jaune, et il y avait une grande cour derrière. L'hiver, il faisait moins vingt et il neigeait presque tous les matins. Tous les samedis, mon frère et moi, nous allions à la patinoire avec les voisins. Ma mère préparait du chocolat chaud et mon père déneigeait l'entrée avant le déjeuner. J'étais timide et j'avais toujours froid aux pieds, mais je ne voulais jamais rentrer. À l'époque, je trouvais cette vie normale. Aujourd'hui, j'habite à Abidjan. Je me demandais si vous aviez encore des photos de notre classe.",
  modelAnswerEn: "Dear Madame Gagnon, when I was ten, I lived in Chicoutimi, very close to your school. Our house was yellow, and there was a big yard behind it. In winter it was minus twenty and it snowed almost every morning. Every Saturday, my brother and I would go to the rink with the neighbours. My mother made hot chocolate and my father cleared the snow from the driveway before breakfast. I was shy and my feet were always cold, but I never wanted to go home. Back then, I found that life normal. Today I live in Abidjan. I was wondering if you still had photos of our class.",
  watchFor: [
    { pattern: 'passé composé for a repeated weekly habit (« tous les samedis, on a patiné »)', criterion: 'emplois', feedback: 'Une habitude revient : on ne compte pas. Mets ce verbe à l’imparfait.', ref: 'a2-indices' },
    { pattern: 'present tense for a place or a habit that belongs to the past (« Avant, j’habite »)', criterion: 'emplois', feedback: 'Avant, à l’époque : le verbe suit dans le passé.', ref: 'a3-piege' },
    { pattern: 'conditionnel for an English « would » habit (« je jouerais », « on irait »)', criterion: 'emplois', feedback: 'Ici, would est une habitude : imparfait, pas conditionnel.', ref: 'a9-piege' },
    { pattern: '« être en train de » for every background action', criterion: 'emplois', feedback: 'Pas faux, mais lourd. Par défaut, l’imparfait simple : je lisais.', ref: 'a7-cartes' },
    { pattern: "« j'étais X ans » for age, or « il était froid » for the weather", criterion: 'formes', feedback: 'L’âge se dit avec avoir, la météo avec faire : j’avais dix ans, il faisait froid.', ref: 'a6-piege' },
    { pattern: 'wrong stem or ending (« je finisais », « nous étaions », « il faisais »)', criterion: 'formes', feedback: 'Revois la base de nous et les fins : -ais, -ait, -ions.', ref: 'a1-rappel' },
    { pattern: 'only one or two description elements (no weather, or no age)', criterion: 'description', feedback: 'Ajoute la météo et ton âge : il faisait..., j’avais... ans.', ref: 'a5-outils' },
    { pattern: 'no state at all: only actions and places', criterion: 'description', feedback: 'Dis aussi comment tu étais : j’étais timide, j’avais froid.', ref: 'a4-verbes' },
    { pattern: 'request in the present (« je veux », « vous pouvez ? ») or as an order', criterion: 'demande', feedback: 'Plus doux : je voulais vous demander..., je me demandais si...', ref: 'a8-formules' },
    { pattern: '« je me demandais si » followed by the present (« si vous avez »)', criterion: 'demande', feedback: 'Après je me demandais si, garde l’imparfait : si vous aviez, si vous pouviez.', ref: 'a8-construire' },
    { pattern: 'under 90 or over 130 words, or no request at the end', criterion: 'consigne', feedback: 'Vérifie la longueur, et finis par une demande.', ref: 'a10-task' },
  ],
  graderNotes: [
    'B1 learner. A single completed event in the passé composé (« j’ai déménagé en 2010 ») is correct French and b1.03 content: do not penalise it under `emplois` if it is right.',
    'Québec, Belgian and West African vocabulary (dépanneur, souper, déneiger, patinoire, calorifère, maquis) is correct French. Never mark it as an error.',
    '`je voudrais` as the softener is polite and correct, but it is not the imparfait the task asks for: 2 of 3 on `demande`, and no deduction under `formes`.',
    'The model answer is 105 words. Length is judged on the learner text only, salutation and signature included.',
    'Sequence of tenses after « je voulais savoir si / je me demandais si » (imparfait in the si-clause) is the target; a conditional there (« si vous pourriez ») is a form error.',
    'Accept any francophone setting. The task never requires a Canadian winter.',
  ],
};

const A10_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a10-parler',
  layer: 'core',
  title: 'Dis-les à voix haute',
  frSub: 'Toute la leçon, en parlant',
  skill: 'speak',
  itemIds: SPEAK_IDS,
  audio: AUDIO,
  say: 'Dis chaque phrase. Le micro écoute.',
  terms: ['habitude', 'decor', 'poli'],
};

const A10_RECAP: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a10-recap',
  layer: 'core',
  title: 'La leçon sur une page',
  frSub: 'À regarder avant l’examen',
  rows: [
    { k: 'une habitude', v: 'Tous les samedis, on patinait.', say: 'Tous les samedis, on patinait sur le lac.', detail: { title: 'Sans compter', body: 'Tous les samedis, d’habitude, chaque été, souvent, le samedi. EN: the habit cues.', say: 'Chaque été, on allait au lac.' } },
    { k: 'avant / maintenant', v: "Avant, j'habitais à Bruxelles.", say: "Avant, j'habitais à Bruxelles. Maintenant, j'habite à Montréal.", detail: { title: 'Deux époques', body: 'Avant, autrefois, à l’époque. Et avant de + verbe ne compte pas. EN: avant de is not an era.', say: 'Autrefois, le village avait une seule école.' } },
    { k: 'un état', v: "J'étais fatigué, j'avais froid.", say: "J'étais fatigué et j'avais froid.", detail: { title: 'Ce qui dure', body: 'être, avoir peur, savoir, connaître, vouloir, pouvoir, devoir. EN: the state verbs.', say: 'Je connaissais tout le monde dans le village.' } },
    { k: 'le décor', v: 'Il y avait un jardin.', say: 'Il y avait un jardin derrière la maison.', detail: { title: 'Deux outils', body: 'il y avait pour ce qui existait, c’était pour présenter. EN: il y avait and c’était.', say: "C'était une vieille maison en pierre." } },
    { k: 'la météo, l’heure, l’âge', v: 'Il faisait froid. Il était minuit.', say: 'Il faisait froid. Il était minuit.', detail: { title: 'Trois verbes', body: 'la météo avec faire, l’heure avec être, l’âge avec avoir. EN: faire, être, avoir.', say: "J'avais douze ans." } },
    { k: 'la politesse', v: 'Je voulais vous demander...', say: 'Je voulais vous demander un petit service.', detail: { title: 'Forme passée, sens présent', body: 'je voulais, je venais, je me demandais si + imparfait. EN: the four formulas.', say: 'Je me demandais si vous étiez libre jeudi.' } },
  ],
  audio: AUDIO,
  say: 'Six lignes. C’est toute la leçon.',
  terms: ['habitude', 'decor', 'poli'],
};

const A10_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a10-progress',
  layer: 'core',
  title: 'Où tu en es',
  frSub: 'Avant l’examen',
  body: "Tu sais maintenant quand l’imparfait arrive tout seul : une habitude, deux époques, un état, un décor, la météo, l’heure, l’âge, et une demande polie. Le point à surveiller, c’est l’habitude : au passé composé, personne ne te corrige, on te comprend, mais on n’entend pas un souvenir. Relis ton texte : chaque tous les samedis, chaque d’habitude, le verbe est bien à l’imparfait ? Alors la leçon a marché. EN: Nobody corrects a habit told in the passé composé; they simply stop hearing a memory.",
  stats: [
    { k: 'Emplois', v: 'six, plus un aperçu' },
    { k: 'Le choix', v: 'le sens, pas le mot indice' },
    { k: 'Would, used to', v: 'l’imparfait, sauf avec si' },
    { k: 'L’âge', v: 'avoir : j’avais douze ans' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ: ten rounds of eight, one per act ──────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ => ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ => ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A10_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a10-quiz',
  layer: 'core',
  title: 'L’examen',
  frSub: 'Dix parties, une par acte',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-habitude', label: 'L’habitude', targets: ['habit-pc'],
      questions: [
        tI('Écris le verbe à la bonne forme. EN: Write the right form.', 'Tous les samedis, on ___ sur le lac. (patiner)', 'patinait', 'Une habitude : on ne compte pas les samedis. EN: a habit.', 'a2-indices'),
        tI('Écris le verbe. EN: Write the verb.', 'D’habitude, on se ___ à six heures. (lever)', 'levait', 'D’habitude annonce une habitude. EN: d’habitude marks a habit.', 'a2-indices'),
        mc('Un souvenir d’enfance qui revenait chaque année. EN: A childhood habit.', ['Chaque été, nous sommes allés chez ma grand-mère.', 'Chaque été, nous allions chez ma grand-mère.', 'Chaque été, nous irions chez ma grand-mère.'], 1, 'Des étés, pendant des années : imparfait. EN: many summers.', 'a2-construire'),
        eS('Le samedi, ma mère a travaillé à l’hôpital pendant dix ans.', 'Le samedi, ma mère travaillait à l’hôpital pendant dix ans.', 'le samedi = chaque samedi : imparfait. EN: every Saturday.', 'a2-indices'),
        mc('« Il portait toujours la même veste. » Combien de fois ? EN: How many times?', ['une seule', 'on ne compte pas'], 1, 'toujours, sans nombre. EN: always, with no count.', 'a2-exemples'),
        lC('Écoute. Habitude, ou une seule fois ? EN: Habit or once?', 'Après l’école, on allait au dépanneur.', ['une seule fois', 'on ne sait pas', 'une habitude'], 2, 'on allait, sans nombre. EN: a habit.', 'a2-ecoute'),
        tI('Écris le verbe. EN: Write the verb.', 'Toutes les semaines, il ___ sa sœur. (appeler)', 'appelait', 'Toutes les semaines : une habitude. EN: every week.', 'a2-construire'),
        mc('Quelle phrase raconte une habitude d’enfance ? EN: Which one is a childhood habit?', ['Hier, j’ai joué dehors.', 'Demain, je jouerai dehors.', 'Quand j’étais petit, je jouais dehors tous les jours.'], 2, 'Quand j’étais petit + tous les jours. EN: childhood plus every day.', 'a2-exemples'),
      ],
    },
    {
      id: 'r2-indices', label: 'L’indice ne décide pas', targets: ['indice-auto'],
      questions: [
        mc('« Chaque été, nous allons au Lac-Saint-Jean. » Pourquoi le présent ? EN: Why the present?', ['c’est une erreur', 'la famille y va encore', 'chaque été prend toujours le présent'], 1, 'Encore vrai aujourd’hui. EN: still true today.', 'a2-limites'),
        mc('« Cet été-là, je suis allé trois fois au lac. » Pourquoi le passé composé ? EN: Why the passé composé?', ['on compte, dans un été fini', 'le lac est loin', 'c’est une erreur'], 0, 'Trois fois, période fermée. EN: a count in a closed period.', 'a2-limites'),
        tI('Même indice, mais c’est encore vrai. Écris le verbe. EN: Still true today.', 'Le samedi, je ___ encore au café. (travailler)', 'travaille', 'encore : aujourd’hui, donc présent. EN: encore means today.', 'a2-limites'),
        eS('L’été dernier, je visitais Québec deux fois.', 'L’été dernier, j’ai visité Québec deux fois.', 'Deux fois, dans un été fini : passé composé. EN: counted and closed.', 'a2-limites'),
        mc('Quel mot choisit le temps du verbe ? EN: Which word picks the tense?', ['d’habitude', 'chaque été', 'aucun'], 2, 'Aucun. Ils aident, le sens décide. EN: none; the meaning decides.', 'a2-check'),
        lC('Écoute. Avant, ou aujourd’hui ? EN: Before or today?', 'D’habitude, nous dînons vers vingt heures.', ['avant', 'aujourd’hui'], 1, 'nous dînons est au présent. EN: present tense.', 'a2-limites'),
        tI('Écris le verbe. EN: Write the verb.', 'Chaque hiver, la rivière ___. (geler)', 'gelait', 'Chaque hiver, dans le passé : gelait. EN: every winter, in the past.', 'a2-ecoute'),
        mc('« Une fois par mois, on descendait à Québec. » C’est quoi ? EN: What is it?', ['une seule descente', 'un projet pour demain', 'une habitude régulière'], 2, 'Une fois par mois, répété : habitude. EN: repeated, so a habit.', 'a2-indices'),
      ],
    },
    {
      id: 'r3-epoques', label: 'Avant et maintenant', targets: ['avant-present'],
      questions: [
        tI('Écris le verbe. EN: Write the verb.', 'Avant, j’___ à Bruxelles. (habiter)', 'habitais', 'Avant ouvre le passé. EN: avant opens the past.', 'a3-mots'),
        tI('Écris le verbe. EN: Write the verb.', 'Maintenant, je ___ le métro. (prendre)', 'prends', 'Maintenant ramène le présent. EN: maintenant brings the present.', 'a3-paires'),
        eS('À l’époque, il n’y a pas de téléphone portable.', 'À l’époque, il n’y avait pas de téléphone portable.', 'À l’époque : le passé. EN: back then.', 'a3-mots'),
        mc('« Avant de partir, j’éteins la lumière. » C’est quand ? EN: When is it?', ['dans le passé', 'une seule fois, hier', 'aujourd’hui, chaque fois'], 2, 'avant de + verbe ne met rien au passé. EN: avant de is not an era.', 'a3-piege'),
        mc('Quel mot ferme le passé ? EN: Which word closes the past?', ['autrefois', 'aujourd’hui', 'à l’époque'], 1, 'aujourd’hui et maintenant ramènent le présent. EN: they bring the present back.', 'a3-check'),
        tI('Écris le verbe. EN: Write the verb.', 'Dans les années quatre-vingt-dix, on ___ des lettres. (écrire)', 'écrivait', 'Une décennie entière. EN: a whole decade.', 'a3-mots'),
        lC('Écoute. Combien d’époques ? EN: How many eras?', 'Avant, je fumais. Maintenant, je cours.', ['une', 'trois', 'deux'], 2, 'Deux : imparfait, puis présent. EN: two.', 'a3-ecoute'),
        eS('Il y a vingt ans, je travaille à Bruxelles.', 'Il y a vingt ans, je travaillais à Bruxelles.', 'il y a + durée : un point dans le passé. EN: a point in the past.', 'a3-piege'),
      ],
    },
    {
      id: 'r4-etats', label: 'Les états', targets: ['etat-pc'],
      questions: [
        tI('Écris le verbe. EN: Write the verb.', 'Il ___ peur du noir. (avoir)', 'avait', 'avoir peur : un état. EN: a state.', 'a4-verbes'),
        tI('Écris le verbe. EN: Write the verb.', 'Je ___ que la route était fermée. (savoir)', 'savais', 'savoir dure. EN: knowing lasts.', 'a4-verbes'),
        eS("Quand je suis arrivée, je ne connais personne.", 'Quand je suis arrivée, je ne connaissais personne.', 'L’état était vrai à ce moment-là. EN: the state held then.', 'a4-erreurs'),
        mc('« I was cold. » En français : EN: In French:', ["J'étais froid.", 'Je faisais froid.', "J'avais froid."], 2, 'avoir froid, avoir faim, avoir peur. EN: French uses avoir.', 'a4-erreurs'),
        mc('Quel verbe n’est PAS un état ? EN: Which is not a state?', ['vouloir', 'tomber', 'connaître'], 1, 'tomber commence et finit. EN: falling starts and ends.', 'a4-check'),
        tI('Écris le verbe. EN: Write the verb.', 'Nous ___ rentrer avant huit heures. (devoir)', 'devions', 'Une règle qui durait. EN: a rule that lasted.', 'a4-construire'),
        lC('Écoute. État, ou action finie ? EN: State or finished action?', 'Elle se sentait seule.', ['un état', 'une action finie'], 0, 'se sentir : un état. EN: a state.', 'a4-ecoute'),
        mc('« Elle a été triste ce jour-là. » Qu’est-ce que ça change ? EN: What changes?', ['ça dit qu’elle est devenue triste', 'rien du tout'], 0, 'Le passé composé fait un changement, pas un état. EN: it marks a change.', 'a4-erreurs'),
      ],
    },
    {
      id: 'r5-decor', label: 'Le décor', targets: ['decor-present'],
      questions: [
        tI('Écris le verbe. EN: Write the verb.', 'Il y ___ un jardin derrière la maison. (avoir)', 'avait', 'il y avait, toujours au singulier. EN: always singular.', 'a5-outils'),
        eS('Dans la cour, il y avaient deux arbres.', 'Dans la cour, il y avait deux arbres.', 'il y avait ne change jamais. EN: never plural.', 'a5-construire'),
        mc('Pour présenter la maison : EN: To introduce the house:', ['C’était une vieille maison.', 'Elle avait une vieille maison.'], 0, 'c’était présente la chose. EN: c’était introduces it.', 'a5-outils'),
        tI('Écris le verbe. EN: Write the verb.', 'Les murs ___ jaunes. (être)', 'étaient', 'Les murs : pluriel. EN: plural subject.', 'a5-construire'),
        mc('La maison a été vendue. Tu décris ta chambre : EN: The house has been sold.', ['Ma chambre est bleue.', 'Ma chambre a été bleue.', 'Ma chambre était bleue.'], 2, 'Le présent dirait qu’elle est encore à toi. EN: the present means still yours.', 'a5-check'),
        lC('Écoute. Qu’est-ce qui manquait ? EN: What was missing?', "Il n'y avait pas d'ascenseur.", ['un ascenseur', 'une cour'], 0, 'Pas d’ascenseur. EN: no lift.', 'a5-ecoute'),
        tI('Écris le verbe. EN: Write the verb.', 'On ___ les enfants dans la cour. (entendre)', 'entendait', 'Un bruit de fond. EN: background sound.', 'a5-construire'),
        mc('Quelle phrase n’appartient PAS au décor ? EN: Which one is not scenery?', ['Les rues étaient étroites.', 'J’ai ouvert la porte.', 'Il y avait un manguier.'], 1, 'Ouvrir la porte est une action courte. EN: a short action.', 'a5-exemples'),
      ],
    },
    {
      id: 'r6-meteo', label: 'La météo', targets: ['meteo-verbe'],
      questions: [
        tI('Écris le verbe. EN: Write the verb.', 'Il ___ froid. (faire)', 'faisait', 'La météo prend faire. EN: weather takes faire.', 'a6-meteo'),
        eS('Il était froid dans l’appartement.', 'Il faisait froid dans l’appartement.', 'Pour le temps qu’il fait : faire. EN: weather uses faire.', 'a6-piege'),
        tI('Écris le verbe. EN: Write the verb.', 'Il ___ depuis le matin. (pleuvoir)', 'pleuvait', 'pleuvoir n’a que il. EN: only il.', 'a6-meteo'),
        mc('« ... du vent toute la nuit. » EN: Which opening?', ['Il faisait', 'Il était', 'Il y avait'], 2, 'Le vent et la neige : il y avait. EN: wind takes il y avait.', 'a6-table'),
        tI('Écris le verbe. EN: Write the verb.', 'Le ciel ___ gris. (être)', 'était', 'Le ciel, la lumière : être. EN: the sky takes être.', 'a6-meteo'),
        lC('Écoute. Quelle saison ? EN: Which season?', 'Il faisait nuit à cinq heures.', ['l’hiver', 'l’été'], 0, 'Nuit à cinq heures : l’hiver. EN: winter.', 'a6-ecoute'),
        mc('« Il neigeait de novembre à avril. » C’est quoi ? EN: What is it?', ['une seule tempête', 'la météo de toute une saison'], 1, 'Toute une saison, sans compter. EN: a whole season.', 'a6-meteo'),
        tI('Écris le verbe. EN: Write the verb.', 'Il ___ moins vingt en janvier. (faire)', 'faisait', 'Les degrés aussi passent par faire. EN: degrees take faire too.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-age', label: 'L’heure et l’âge', targets: ['age-etre'],
      questions: [
        tI('Écris le verbe. EN: Write the verb.', 'J’___ douze ans. (avoir)', 'avais', 'L’âge prend avoir. EN: age takes avoir.', 'a6-age'),
        eS("J'étais douze ans quand on a déménagé.", "J'avais douze ans quand on a déménagé.", 'En français, tu AS un âge. EN: French has an age.', 'a6-piege'),
        tI('Écris le verbe. EN: Write the verb.', 'Il ___ minuit. (être)', 'était', 'L’heure prend être. EN: clock time takes être.', 'a6-age'),
        mc('« Mon frère ... deux ans de plus que moi. » EN: Which verb?', ['était', 'faisait', 'avait'], 2, 'La comparaison d’âge garde avoir. EN: age comparison keeps avoir.', 'a6-age'),
        tI('Écris les deux mots qui manquent. EN: Write the two missing words.', 'Elle ___ trente ans à l’époque. (avoir)', 'avait', 'Toutes les personnes, même règle. EN: same rule everywhere.', 'a6-construire'),
        lC('Écoute. Qu’est-ce que la phrase donne ? EN: What does it give?', 'On était en 2006.', ['l’heure', 'l’année'], 1, 'on était en + année. EN: the year.', 'a6-ecoute'),
        mc('« ... un mardi. » EN: Which opening?', ['C’était', 'Il avait'], 0, 'c’était pour un jour, une saison. EN: c’était for a day.', 'a6-age'),
        mc('Trois verbes, trois emplois. Lequel va avec l’heure ? EN: Which one goes with the time?', ['faire', 'être', 'avoir'], 1, 'il était sept heures. EN: il était.', 'a6-check'),
      ],
    },
    {
      id: 'r8-encours', label: 'L’action en cours', targets: ['encours-entrain'],
      questions: [
        tI('Écris le verbe. EN: Write the verb.', 'Hier à huit heures, je ___ le souper. (préparer)', 'préparais', 'Ce qui durait à ce moment-là. EN: what was going on.', 'a7-construire'),
        mc('« I was watching TV. » Le plus naturel : EN: The most natural:', ["J'étais en train de regarder la télé.", 'Je regardais la télé.', "J'ai regardé la télé."], 1, 'La forme simple est la forme normale. EN: the plain form is the default.', 'a7-cartes'),
        tI('Écris le verbe. EN: Write the verb.', 'Les enfants ___. (dormir)', 'dormaient', 'Plusieurs actions qui duraient. EN: several ongoing actions.', 'a7-exemples'),
        eS("J'étais en train de manger tous les midis.", 'Je mangeais tous les midis.', 'en train de ne va pas avec une habitude. EN: en train de cannot mark a habit.', 'a9-erreurs'),
        mc('« Je lisais quand le téléphone a sonné. » Quel temps raconte l’action courte ? EN: Which tense tells the short action?', ['l’imparfait', 'le présent', 'le passé composé'], 2, 'C’est le sujet de la leçon suivante. EN: that is the next lesson.', 'a7-apercu'),
        lC('Écoute. C’est fini, ou ça durait ? EN: Finished, or going on?', 'Elle attendait l’autobus.', ['ça durait', 'c’est fini'], 0, 'attendait : en cours. EN: still going on.', 'a7-ecoute'),
        tI('Écris le verbe. EN: Write the verb.', 'Qu’est-ce que tu ___ à huit heures ? (faire)', 'faisais', 'On demande ce qui durait. EN: you ask what was going on.', 'a7-cartes'),
        mc('« J’étais en train de cuisiner. » Ça insiste sur quoi ? EN: What does it stress?', ['le milieu de l’action', 'la fin'], 0, 'Au beau milieu. EN: right in the middle.', 'a7-cartes'),
      ],
    },
    {
      id: 'r9-poli', label: 'La politesse', targets: ['poli-direct'],
      questions: [
        mc('« Je voulais vous demander un service. » La personne demande quand ? EN: When is she asking?', ['maintenant', 'hier'], 0, 'Forme passée, sens présent. EN: past form, present meaning.', 'a8-formules'),
        eS('Je veux vous demander un conseil.', 'Je voulais vous demander un conseil.', 'voulais recule d’un pas. EN: voulais steps back.', 'a8-construire'),
        tI('Écris le verbe. EN: Write the verb.', 'Je me ___ si vous étiez libre jeudi. (demander)', 'demandais', 'La formule polie la plus utile à l’écrit. EN: the most useful written formula.', 'a8-formules'),
        tI('Écris le verbe. EN: Write the verb.', 'Je me demandais si vous ___ le temps. (avoir)', 'aviez', 'Après si, l’imparfait continue. EN: the imparfait continues after si.', 'a8-construire'),
        mc('Tu commandes un café. Tu dis : EN: You order a coffee.', ['Je voulais un café.', 'Je venais un café.', 'Je voudrais un café.'], 2, 'Pour commander, je voudrais. EN: ordering takes je voudrais.', 'a8-erreurs'),
        lC('Écoute. C’est une demande, ou un vrai passé ? EN: A request, or a real past?', 'Hier soir, je voulais dormir tôt.', ['une demande', 'un vrai passé'], 1, 'hier soir : un vrai passé. EN: hier soir makes it a real past.', 'a8-construire'),
        mc('À la porte, pour un appartement : EN: At the door, about a flat:', ["Je venais pour l'appartement.", "Je viens pour l'appartement, je veux le prix."], 0, 'La formule polie, sans ajouter je veux. EN: the polite formula.', 'a8-scene'),
        eS('Je me demandais si vous avez encore mes photos.', 'Je me demandais si vous aviez encore mes photos.', 'La deuxième moitié suit la première. EN: the second half follows the first.', 'a8-erreurs'),
      ],
    },
    {
      id: 'r10-anglais', label: 'Les pièges anglais', targets: ['would-cond'],
      questions: [
        eS("Quand j'étais petit, je jouerais dehors.", "Quand j'étais petit, je jouais dehors.", 'Ce would est une habitude. EN: a habitual would.', 'a9-piege'),
        mc('« I used to smoke. » EN: In French:', ["J'utilisais à fumer.", 'Avant, je fumais.'], 1, 'used to n’a pas de verbe français. EN: no French verb for used to.', 'a9-cartes'),
        tI('Écris le verbe. EN: Write the verb.', 'Si j’avais le temps, je ___ avec toi. (venir)', 'viendrais', 'Avec si, c’est un conditionnel. EN: with si, the conditional.', 'a9-piege'),
        mc('« They would come every summer. » EN: In French:', ['Ils viendraient nous voir tous les étés.', 'Ils sont venus nous voir tous les étés.', 'Ils venaient nous voir tous les étés.'], 2, 'tous les étés : une habitude. EN: a habit.', 'a9-cartes'),
        tI('Écris le verbe. EN: Write the verb.', 'Elle ___ chaque dimanche. (appeler, « would call »)', 'appelait', 'Une habitude, donc l’imparfait. EN: a habit.', 'a9-choisir'),
        mc('« Did you want to see me? » EN: In French:', ['Tu voulais me voir ?', 'Tu voudrais me voir ?'], 0, 'Un imparfait poli. EN: a polite imparfait.', 'a9-choisir'),
        lC('Écoute. Habitude, ou condition ? EN: Habit or condition?', "Si j'avais le temps, je viendrais avec toi.", ['une habitude', 'une condition'], 1, 'Le si change tout. EN: the si changes everything.', 'a9-ecoute'),
        mc('Le test le plus rapide pour would : EN: The fastest test for would:', ['remplacer par used to', 'compter les syllabes'], 0, 'Si used to marche, c’est l’imparfait. EN: if used to works, use the imparfait.', 'a9-astuces'),
      ],
    },
  ],
  audio: AUDIO,
  say: 'L’examen. Dix parties, une par acte.',
};

const A10_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a10-review',
  layer: 'core',
  title: 'Une dernière fois',
  frSub: 'Douze phrases',
  cards: [
    { front: 'une habitude : chaque samedi', back: 'Tous les samedis, on patinait sur le lac.', say: 'Tous les samedis, on patinait sur le lac.' },
    { front: 'avant / maintenant', back: "Avant, j'habitais à Bruxelles.", say: "Avant, j'habitais à Bruxelles." },
    { front: 'un état : fatigué, froid', back: "J'étais fatigué et j'avais froid.", say: "J'étais fatigué et j'avais froid." },
    { front: 'un sentiment : la peur', back: 'Il avait peur du noir.', say: 'Il avait peur du noir.' },
    { front: 'le décor : un jardin', back: 'Il y avait un jardin derrière la maison.', say: 'Il y avait un jardin derrière la maison.' },
    { front: 'présenter : une vieille maison', back: "C'était une vieille maison en pierre.", say: "C'était une vieille maison en pierre." },
    { front: 'la météo : le froid', back: 'Il faisait froid.', say: 'Il faisait froid.' },
    { front: 'la météo : la neige', back: 'Il neigeait.', say: 'Il neigeait.' },
    { front: 'l’heure : minuit', back: 'Il était minuit.', say: 'Il était minuit.' },
    { front: 'l’âge : douze', back: "J'avais douze ans.", say: "J'avais douze ans." },
    { front: 'en cours : la télé', back: 'Je regardais la télé.', say: 'Je regardais la télé.' },
    { front: 'poli : un petit service', back: 'Je voulais vous demander un petit service.', say: 'Je voulais vous demander un petit service.' },
  ],
  audio: AUDIO,
  say: 'Une dernière fois, les phrases clés.',
};

const A10_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a10-roundup',
  layer: 'core',
  title: 'On regarde, on ne compte pas',
  frSub: 'Pour finir',
  body: `${REFRAME} Une habitude, deux époques, un état, un décor, la météo, l’heure, l’âge : dans chaque cas, tu regardes un moment du passé sans le compter. La politesse est l’exception : forme passée, sens présent. ${Cap(B103_REF)} met l’imparfait à côté du passé composé, et là, une action courte arrive dans le décor. EN: ${REFRAME_EN} Politeness is the one exception, and the next lesson brings the passé composé into the picture.`,
  points: [
    'Un indice aide, le sens décide. EN: the cue helps, the meaning decides.',
    'Would et used to, pour une habitude : imparfait. Avec si : conditionnel. EN: habit yes, si no.',
    'L’âge avec avoir, la météo avec faire, l’heure avec être. EN: avoir, faire, être.',
    'Je voulais, je venais, je me demandais si : tu demandes maintenant. EN: those three ask now.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice', 'would'],
};

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Tout ensemble',
    opener: { line: 'Un dernier texte, un entretien, ton propre souvenir d’enfance, puis l’examen : tout ce que tu as appris tient dans une lettre. EN: One last text, an interview, your own memory, then the exam.', imageRef: 'lessons/imparfait-usage/act10.jpg' },
    sections: [],
    milestone: 'Tu as raconté ton enfance par écrit et passé l’examen. EN: You told your childhood in writing and passed the exam.',
    estScreens: 130, restPoints: ['a10-lecture', 'a10-talk', 'a10-task', 'a10-recap', 'a10-progress', 'a10-quiz/r4-etats', 'a10-quiz/r8-encours'],
  },
  sections: [A10_LECTURE, A10_FOCUS, A10_TALK, A10_TASK, A10_PARLER, A10_RECAP, A10_PROGRESS, A10_QUIZ, A10_REVIEW, A10_ROUNDUP],
  // b1.01 rows this act's closing reading, quiz and review put on screen. They
  // were named in the sections and declared nowhere, so ITEM_IDS did not hold
  // them: the lesson showed twelve forms it did not claim to teach, and no
  // tranche could ever release them. Nothing else in the four lessons does
  // this; found by the reference sweep, 2026-09-23.
  // `E` is this lesson's id builder, and b1.01's rows share the theme, so it
  // names them correctly outside this lesson's own 101-199 / 800-899 blocks.
  imports: [
    E(1416), E(1419), E(1431), E(1433), E(1434),
    E(430), E(431), E(432), E(433), E(434), E(436), E(525),
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, one per quiz round. Each is the
 *  first resolving target of exactly one round, because `drillForRound` fires
 *  the drill of the FIRST resolving target and then stops. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  {
    id: 'd-habitude', title: 'Regarder, ou compter', format: 'sort' as const,
    coach: 'Deux piles. Demande-toi : est-ce que je peux compter les fois ? EN: Can you count the times?',
    buckets: ['une habitude', 'une fois, ou un nombre'],
    items: [E(1501), E(1512), E(118), E(138), E(1502), E(131)],
    audio: AUDIO,
  },
  {
    id: 'd-indice', title: 'Le mot ne décide pas', format: 'mcq' as const,
    coach: 'Lis toute la phrase avant de choisir. EN: Read the whole sentence first.',
    q: '« Chaque été, nous ... au Lac-Saint-Jean. » La famille y va encore. EN: The family still goes.',
    opts: ['allions', 'allons', 'sommes allés'], correct: 1,
    why: 'Encore vrai aujourd’hui : présent. EN: still true, so the present.',
    items: [E(136), E(137), E(133), E(120)],
    audio: AUDIO,
  },
  {
    id: 'd-avant', title: 'Avant, ou maintenant', format: 'flashcard' as const,
    coach: 'Lis la phrase. Elle parle d’avant ou d’aujourd’hui ? Dis-la avec la bonne forme. EN: Before or today?',
    items: [E(141), E(142), E(148), E(157), E(158), E(151)],
    audio: AUDIO,
  },
  {
    id: 'd-etat', title: 'Ce qui dure', format: 'flashcard' as const,
    coach: 'Ces verbes ne racontent rien : ils décrivent. Dis-les à l’imparfait. EN: These verbs describe; say them in the imparfait.',
    items: [E(159), E(160), E(164), E(165), E(166), E(168)],
    audio: AUDIO,
  },
  {
    id: 'd-decor', title: 'il y avait, c’était', format: 'mcq' as const,
    coach: 'Deux outils, deux jobs. EN: Two tools, two jobs.',
    q: '« Dans la cour, il y ... deux arbres et un banc. » EN: Which form?',
    opts: ['avaient', 'avait'], correct: 1,
    why: 'il y avait ne change jamais, même au pluriel. EN: always singular.',
    items: [E(801), E(803), E(805), E(814), E(819), E(800)],
    audio: AUDIO,
  },
  {
    id: 'd-meteo', title: 'Le bon verbe pour la météo', format: 'mcq' as const,
    coach: 'faire pour le temps, être pour le ciel, il y avait pour le vent. EN: faire, être, il y avait.',
    q: '« Il ... froid et il y avait du vent. » EN: Which verb?',
    opts: ['était', 'faisait'], correct: 1,
    why: 'Le temps qu’il fait passe par faire. EN: weather takes faire.',
    items: [E(820), E(821), E(822), E(823), E(824), E(826)],
    audio: AUDIO,
  },
  {
    id: 'd-age', title: 'Tu AS un âge', format: 'mcq' as const,
    coach: 'L’âge avec avoir, l’heure avec être. EN: age avoir, time être.',
    q: '« Quand j’... dix ans, j’apprenais le violon. » EN: Which verb?',
    opts: ['étais', 'avais'], correct: 1,
    why: 'avoir + ans, toujours. EN: always avoir plus ans.',
    items: [E(1505), E(829), E(831), E(833), E(834), E(839)],
    audio: AUDIO,
  },
  {
    id: 'd-encours', title: 'Ce qui se passait', format: 'flashcard' as const,
    coach: 'Une seule forme pour was -ing. Dis-la vite. EN: One form for was -ing.',
    items: [E(840), E(842), E(845), E(846), E(848), E(849)],
    audio: AUDIO,
  },
  {
    id: 'd-poli', title: 'Plus doux', format: 'mcq' as const,
    coach: 'Tu demandes maintenant. Fais un pas en arrière. EN: You are asking now; step back.',
    q: 'Tu écris à ton ancien professeur. Le plus doux ? EN: Which is the softest?',
    opts: ['Je me demandais si vous aviez encore mes notes.', 'Vous avez encore mes notes ?', 'Je veux mes notes.'],
    correct: 0,
    why: 'je me demandais si + imparfait : poli et naturel. EN: polite and natural.',
    items: [E(1508), E(853), E(854), E(859), E(866), E(868)],
    audio: AUDIO,
  },
  {
    id: 'd-anglais', title: 'Would sans conditionnel', format: 'mcq' as const,
    coach: 'Remplace would par used to. Si ça marche, c’est l’imparfait. EN: Swap would for used to.',
    q: '« When I was little, I would play outside. » EN: In French:',
    opts: ["Quand j'étais petit, je jouerais dehors.", "Quand j'étais petit, je jouais dehors tous les jours.", "Quand j'étais petit, j'ai joué dehors."],
    correct: 1,
    why: 'Une habitude d’enfance : imparfait. EN: a childhood habit.',
    items: [E(872), E(875), E(874), E(876), E(885), E(886)],
    audio: AUDIO,
  },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'habit-pc', description: 'Uses the passé composé for a repeated habit, so the listener hears a closed list instead of a memory.', detectOn: ['a1-scene', 'a2-construire', 'a2-check', 'a10-task'], drill: 'd-habitude', retest: 'd-habitude' },
  { id: 'indice-auto', description: 'Treats a frequency adverbial (tous les samedis, d\'habitude, chaque été) as an automatic trigger for the imparfait.', detectOn: ['a2-limites', 'a2-check', 'a10-talk'], drill: 'd-indice', retest: 'd-indice' },
  { id: 'avant-present', description: 'Keeps the present after avant, autrefois or à l\'époque, or puts the imparfait after avant de + infinitive.', detectOn: ['a3-piege', 'a3-check', 'a10-task'], drill: 'd-avant', retest: 'd-avant' },
  { id: 'etat-pc', description: 'Puts a state or a feeling in the passé composé, or uses être where French uses avoir (froid, faim, peur).', detectOn: ['a4-erreurs', 'a4-check', 'a10-task'], drill: 'd-etat', retest: 'd-etat' },
  { id: 'decor-present', description: 'Describes a place that no longer exists in the present, or pluralises il y avait.', detectOn: ['a5-construire', 'a5-check'], drill: 'd-decor', retest: 'd-decor' },
  { id: 'meteo-verbe', description: 'Chooses the wrong verb for the weather: il était froid for il faisait froid, or faire for the wind.', detectOn: ['a6-piege', 'a6-check'], drill: 'd-meteo', retest: 'd-meteo' },
  { id: 'age-etre', description: 'Says j\'étais douze ans for an age, or il avait minuit for the clock time.', detectOn: ['a6-piege', 'a6-construire', 'a10-task'], drill: 'd-age', retest: 'd-age' },
  { id: 'encours-entrain', description: 'Uses être en train de as the default for every was -ing, including for a habit.', detectOn: ['a7-construire', 'a7-check', 'a9-erreurs'], drill: 'd-encours' },
  { id: 'poli-direct', description: 'Makes a request in the present (je veux), or drops the imparfait after je me demandais si.', detectOn: ['a8-scene', 'a8-construire', 'a8-check', 'a10-task'], drill: 'd-poli', retest: 'd-poli' },
  { id: 'would-cond', description: 'Translates habitual would with the conditionnel, looks for a verb for used to, or misses the si that makes would a real conditional.', detectOn: ['a9-piege', 'a9-erreurs', 'a9-check'], drill: 'd-anglais', retest: 'd-anglais' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and nowhere else (a `table` at layer
 *  core is refused by validateDensity). `cheatSheet` is never used inside a
 *  sheet: there it draws its title and nothing else. Every sheet is linked
 *  from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-emplois', 'Les sept emplois', ['les six emplois de la leçon', 'l’aperçu de l’action en cours', 'un exemple par emploi'], [
    teach('sheet-emplois-teach', 'Comment lire cette page', `${REFRAME} Chaque ligne est un emploi. La colonne Indices donne les mots qu’on trouve souvent avec : ce sont des aides, pas des règles. Le même mot marche au présent si la chose est encore vraie, et au passé composé si on compte les fois dans une période fermée. La dernière ligne est un aperçu : ${B103_REF} la travaille avec le passé composé. EN: ${REFRAME_EN} The cue words help; the meaning decides. The last row is a preview of the next lesson.`),
    table('sheet-emplois-table', 'L’imparfait, emploi par emploi', ['Emploi', 'Indices', 'Exemple'], [
      ['une habitude', 'tous les samedis, d’habitude, chaque été, souvent, le samedi', 'Tous les samedis, on patinait sur le lac.'],
      ['avant / maintenant', 'avant, autrefois, à l’époque, il y a vingt ans', "Avant, j'habitais à Bruxelles."],
      ['un état, un sentiment', 'être, avoir peur, savoir, connaître, vouloir, pouvoir, devoir', "J'étais fatigué et j'avais froid."],
      ['le décor', 'il y avait, c’était, était, donnait sur', 'Il y avait un jardin derrière la maison.'],
      ['la météo', 'il faisait, il neigeait, il pleuvait, il y avait du vent', 'Il faisait froid.'],
      ['l’heure, l’âge', 'il était + heure, avoir + ans', "Il était minuit. J'avais douze ans."],
      ['la politesse', 'je voulais, je venais, je me demandais si', 'Je voulais vous demander un petit service.'],
      ['une action en cours (aperçu)', 'was -ing, à ce moment-là', 'Je lisais dans ma chambre.'],
    ]),
  ]),
  sheet('sheet-indices', 'Les indices et leurs limites', ['les mots qui annoncent une habitude', 'les trois cas où ils ne décident rien'], [
    table('sheet-indices-table', 'Le même mot, trois temps', ['Indice', 'Imparfait', 'Présent', 'Passé composé'], [
      ['chaque été', 'Chaque été, on allait au lac.', 'Chaque été, nous allons au Lac-Saint-Jean.', 'Cet été-là, je suis allé trois fois au lac.'],
      ['d’habitude', "D'habitude, on se levait à six heures.", "D'habitude, nous dînons vers vingt heures.", 'Ce jour-là, on s’est levés à cinq heures.'],
      ['le samedi', 'Le samedi, ma mère travaillait à l’hôpital.', 'Le samedi, je travaille encore au café.', 'Samedi dernier, j’ai travaillé au café.'],
      ['avant', "Avant, j'habitais à Bruxelles.", "Avant de partir, j'éteins la lumière.", 'Avant de partir, j’ai éteint la lumière.'],
    ]),
    teach('sheet-indices-teach', 'Les trois questions', 'Un mot ne choisit jamais le temps. Trois questions le choisissent. Est-ce que c’est encore vrai aujourd’hui ? Alors présent. Est-ce que je peux compter les fois, dans une période fermée ? Alors passé composé. Est-ce que ça revenait, sans nombre, dans une période ouverte ? Alors imparfait. EN: still true means present; countable inside a closed period means passé composé; repeated with no count means imparfait.'),
  ]),
  sheet('sheet-etats', 'Les verbes d’état', ['être, avoir, savoir, connaître', 'vouloir, pouvoir, devoir', 'les expressions avec avoir'], [
    table('sheet-etats-table', 'Les verbes qui décrivent', ['Verbe', 'Exemple', 'Pourquoi l’imparfait'], [
      ['être', "J'étais fatigué.", 'un état du corps ou de l’esprit'],
      ['avoir', 'Il avait peur du noir.', 'un sentiment, en français avec avoir'],
      ['savoir', 'Je savais que la route était fermée.', 'savoir ne commence pas, il dure'],
      ['connaître', 'Elle connaissait bien la ville.', 'connaître les gens et les lieux, ça dure'],
      ['vouloir', 'Ma sœur voulait devenir pilote.', 'un désir qui durait'],
      ['pouvoir, devoir', 'Nous devions rentrer avant huit heures.', 'une situation, pas un moment'],
    ]),
    table('sheet-avoir-table', 'Avec avoir, jamais avec être', ['Français', 'Anglais'], [
      ['j’avais froid', 'I was cold'],
      ['j’avais faim', 'I was hungry'],
      ['j’avais soif', 'I was thirsty'],
      ['j’avais peur', 'I was afraid'],
      ['j’avais sommeil', 'I was sleepy'],
      ['j’avais douze ans', 'I was twelve'],
      ['j’avais envie d’un café', 'I felt like a coffee'],
      ['j’avais besoin d’aide', 'I needed help'],
    ]),
  ]),
  sheet('sheet-decor', 'Le décor, la météo, l’heure et l’âge', ['il y avait et c’était', 'du présent au passé', 'les trois verbes'], [
    table('sheet-decor-table', 'Du présent au passé', ['Aujourd’hui', 'Dans le souvenir', 'Exemple'], [
      ['il y a', 'il y avait', 'Il y avait un jardin derrière la maison.'],
      ['il n’y a pas', 'il n’y avait pas', "Il n'y avait pas d'ascenseur."],
      ['c’est', 'c’était', "C'était une vieille maison en pierre."],
      ['il fait froid', 'il faisait froid', 'Il faisait moins vingt en janvier.'],
      ['il neige, il pleut', 'il neigeait, il pleuvait', 'Il pleuvait depuis le matin.'],
      ['il est minuit', 'il était minuit', 'Il était sept heures du matin.'],
      ['j’ai douze ans', 'j’avais douze ans', 'Mon frère avait deux ans de plus que moi.'],
    ]),
    teach('sheet-decor-teach', 'Trois verbes, trois emplois', 'La météo passe par faire : il faisait froid, il faisait beau, il faisait moins vingt. Le vent, la neige et la pluie qui tombent passent par il y avait ou par leur propre verbe : il y avait du vent, il neigeait. L’heure passe par être : il était minuit. L’âge passe par avoir : j’avais douze ans. Ces quatre habitudes réglées, la moitié des fautes de description disparaissent. EN: weather faire, wind il y avait, time être, age avoir.'),
  ]),
  sheet('sheet-poli', 'La politesse et les pièges anglais', ['les quatre formules polies', 'would, used to, was -ing', 'quand would n’est pas l’imparfait'], [
    table('sheet-poli-table', 'Les formules polies', ['Formule', 'Situation', 'Exemple'], [
      ['je voulais vous demander', 'un service, au travail ou ailleurs', 'Je voulais vous demander un petit service.'],
      ['je voulais savoir si', 'une question, au téléphone', 'Je voulais savoir si le poste était à temps plein.'],
      ['je venais pour', 'à la porte, au guichet', "Je venais pour l'appartement."],
      ['je me demandais si', 'dans un courriel', 'Je me demandais si vous étiez libre jeudi.'],
      ['je voudrais', 'pour commander', 'Je voudrais un café.'],
    ]),
    table('sheet-anglais-table', 'Un mot anglais, plusieurs français', ['Anglais', 'Français', 'Pourquoi'], [
      ['I would play every day', 'je jouais tous les jours', 'would = une habitude'],
      ['I used to smoke', 'avant, je fumais', 'used to n’a pas de verbe français'],
      ['I used to walk to school', "j'avais l'habitude de marcher", 'possible aussi, et plus lourd'],
      ['I was watching TV', 'je regardais la télé', 'was -ing = imparfait simple'],
      ['I was in the middle of cooking', "j'étais en train de cuisiner", 'seulement pour insister'],
      ['If I had time, I would come', 'si j’avais le temps, je viendrais', 'avec si, c’est un conditionnel'],
      ['Did you want to see me?', 'tu voulais me voir ?', 'un imparfait poli'],
    ]),
  ]),
];

/** The studio's brief for every recordingId the sections name. */
const REC_DESC: Record<string, string> = {
  'rec-b1-02-rappel': 'The three recall cards. Plain reading, no stress on the endings: the learner already knows them.',
  'rec-b1-02-lettre': "Benoît's letter (act 1), one take, one male voice, Belgian French welcome. Every final -ait and -ais is a clean [ɛ], and the imparfait endings are NOT stressed.",
  'rec-b1-02-louise': 'Louise (74, Québécoise) and her grandson Marc. ONE TAKE in authored order. Louise is telling a memory, not listing facts: warm, unhurried.',
  'rec-b1-02-indices': 'The six cue cards. Each cue word, then its sentence, same pace on both. Do not stress the cue: the card already points at it.',
  'rec-b1-02-enfance': 'The ten habit lines, ONE TAKE, ONE VOICE, recorded adjacently in authored order. Line 8 is in the present and must NOT be marked: the question asks the learner to hear it.',
  'rec-b1-02-quartier': 'The neighbourhood text, one take, Québécois voice. The switch at « Aujourd’hui » is not announced by the reader.',
  'rec-b1-02-avant': 'The five avant cards. autrefois and à l’époque read at the same pace as avant, so the learner hears register, not drama.',
  'rec-b1-02-piege-avant': 'The audio step plays each card’s CORRECT sentence. The wrong promptSound versions are never recorded.',
  'rec-b1-02-epoques': 'Eight lines, one take, in order. Lines 5 and 6 are a pair (bus, then metro) and must be read identically apart from the verb.',
  'rec-b1-02-awa': 'Awa and Julien. Awa is telling something difficult without drama; the states (fatiguée, froid, peur) are not acted.',
  'rec-b1-02-etats': 'The six state-verb cards. connaissait and savais at conversational speed: these are the forms the learner will hear fastest in the wild.',
  'rec-b1-02-etats-ecoute': 'Ten state lines, ONE TAKE, ONE VOICE, in authored order.',
  'rec-b1-02-mame': 'The Dakar house description, one take, Senegalese French welcome. Slow, even, no narrative push: nothing happens in this text.',
  'rec-b1-02-decor': 'The five décor cards. il y avait as [i.li.ja.vɛ], never over-articulated into four separate words.',
  'rec-b1-02-maison-ecoute': 'Eight description lines, one take, in order.',
  'rec-b1-02-meteo': 'The six weather cards. il faisait with the schwa, [fə.zɛ], never [fɛ.zɛ]. This is the single most repeated form in the act.',
  'rec-b1-02-age': 'The five time and age cards. j’avais douze ans with the liaison [du.zɑ̃], no pause before ans.',
  'rec-b1-02-piege-age': 'The audio step plays each card’s CORRECT sentence only.',
  'rec-b1-02-meteo-ecoute': 'Eight weather and time lines, one take, in order. Line 5 (Abidjan, thirty degrees) is read with the same calm as the minus-twenty lines.',
  'rec-b1-02-encours': 'The four in-progress cards. The fourth (en train de) is read at the SAME pace as the others: the card says it is heavy, the reader must not act that out.',
  'rec-b1-02-encours-ecoute': 'Eight lines, one take, in order.',
  'rec-b1-02-poli': 'The five polite formulas. Warm, ordinary register, no pleading. je voulais and je voudrais must sound equally polite: the card says both work.',
  'rec-b1-02-anglais': 'The six trap cards, correct French only, conversational pace.',
  'rec-b1-02-piege-anglais': 'The audio step plays each card’s CORRECT sentence. viendrais and venais must be clearly distinct: that contrast is the point of the act.',
  'rec-b1-02-anglais-ecoute': 'Eight lines, one take, in order. The conditional lines (viendrais, voudrais) are not stressed.',
  'rec-b1-02-deux-hivers': 'The long closing text, one take, one voice. The reader is remembering, not performing; the switch at « Aujourd’hui » is not announced.',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

/** Releasable ids: an id with no `flashcard` drill draws no card, and the
 *  present-tense and passé composé counterexamples are never released as a
 *  model of this lesson's grammar. */
const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ALL_ROWS.some((r) => r.id === id) && !NOT_DECK_ABLE.includes(id)),
].filter((id) => !COUNTEREXAMPLE_IDS.includes(id)));

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, in the act that teaches it. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-02-[a-z0-9-]+/g) ?? [])];

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 02',
  intro: 'You can build the imparfait. This lesson is about when to reach for it: a habit that kept coming back, the way a place looked, how you felt, the weather, the time, your age, and one use that is not about the past at all, the polite request. English points the wrong way here, with would, used to and was -ing, and this lesson shows where.',
  skill: 'PE',
  grammarAssumed: [B101_UNIT, PC_UNIT, PC_ETRE_UNIT, MODAL_UNIT, SAVOIR_UNIT, PRONOMINAL_UNIT, Y_EN_UNIT, METEO_UNIT, HEURE_UNIT],
  grammarIntroduced: [
    'The imparfait for habitual and repeated past actions, with frequency adverbials (tous les samedis, d\'habitude, chaque été, souvent, le + day) treated as cues rather than triggers',
    'The avant / autrefois / à l\'époque versus maintenant frame, including avant de + infinitive as a counterexample',
    'The imparfait for past states, feelings and cognition (être, avoir peur, savoir, connaître, vouloir, pouvoir, devoir), and the avoir idioms English renders with be',
    'The imparfait for description and scenery, with il y avait and c\'était as the two anchors',
    'The imparfait for past weather (il faisait, il neigeait, il y avait du vent), clock time (il était + heure) and age (avoir + ans)',
    'The attenuative (polite) imparfait: je voulais, je venais, je me demandais si, present in reference and past in form, and the imparfait carried into the si-clause',
    'English habitual would and used to rendered by the imparfait, and was -ing defaulting to the simple imparfait rather than être en train de',
    'The two English « would » that are NOT the imparfait: the conditional after si, and je voudrais for ordering',
    'Preview only: the imparfait for an action in progress, with the interruption and the passé composé contrast left to b1.03',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Tu sais fabriquer l’imparfait. Ici, tu apprends quand il sert : une habitude, deux époques, un état, un décor, la météo, l’heure, l’âge, et une demande polie.',
    minutes: 110,
    difficulty: 3,
    glyph: 'ais',
    screens: ACTS.reduce((n, a) => n + a.act.estScreens, 0),
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: IMPARFAIT_USAGE_TERMS,
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
