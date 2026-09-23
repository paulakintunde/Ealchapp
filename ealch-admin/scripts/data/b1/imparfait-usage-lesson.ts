// b1.02.l1 « L'imparfait : les emplois » — the lesson. DRAFT.
//
// Nothing here is imported into Postgres, merged into seed.json or published.
// Paul reviews b1.01-b1.04 first; the other B1-C2 lessons follow what he
// approves.
//
// ══════════════════════════════════════════════════════════════════════════
//  SECTIONS (25: the A2 house shape of 24, plus the new B1 `task`)
// ══════════════════════════════════════════════════════════════════════════
//
//   ACT 1  Le souvenir
//     s01-scene       scene          Montréal cafeteria; present, then passé
//                                    composé, for a childhood habit
//     s02-goals       goals
//     s03-rappel      cardDeck       b1.01 recall, ONE mission, reframe quoted
//   ACT 2  Lire d'abord  (noticing before the rule)
//     s04-lire        reading        Benoît's letter to his old Brussels
//                                    landlady, ~155 words, every use in it
//     s05-reperer     groupDrill     sort the letter's verbs by job
//     s06-emplois     tapTable       six uses, one screen (6 rows, the ceiling)
//   ACT 3  Les emplois  (the Owns)
//     s07-habitude    cardDeck       habit cues + two counterexamples
//     s08-avant       examples       avant / autrefois / à l'époque vs maintenant
//     s09-etat        examples       states and feelings
//     s10-decor       cardDeck       description, weather, clock time, age
//     s11-ecoute      listening      a summer in Abidjan, 10 lines, hideLines
//     s12-cours       cardDeck       action in progress: PREVIEW, b1.03 owns it
//     s13-poli        cardDeck       polite imparfait, present meaning
//     s14-choisir     groupDrill     meaning before form: pick by sense
//   ACT 4  Le piège anglais
//     s15-piege       trapDrill      would / used to / was -ing (stepped)
//     s16-erreurs     commonErrors
//     s17-dictee      dictation
//     s18-cartes      flashcards     build from the English
//   ACT 5  À vous
//     s19-entretien   scenario       job interview, Montréal, old job in Brussels
//     s20-parler      practice       speak
//     s21-tache       task (DRAFT)   70-110 words: a place, a routine, a
//                                    softened request
//     s22-bilan       progressCheck
//   ACT 6  L'examen
//     s23-quiz        quiz           4 rounds x 6
//     s24-revue       reviewDeck
//     s25-fin         roundup
//
//   Sheet: sheet-emplois (teach + table, layer deep, render sheet).
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « À l'imparfait, on regarde le passé. On ne le compte pas. »
//   EN: In the imparfait you look at the past. You do not count it.
//
//   It covers habit, state, scenery, weather, time and age. It does NOT cover
//   the polite imparfait, and s13-poli says so on screen rather than stretching
//   the line. It avoids « décor vs action », which is b1.03's contrast.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS: when the imparfait is chosen on its own: habit and repetition,
//   states and feelings, description, weather, clock time and age, the polite
//   imparfait (present in meaning, past in form), and the avant / maintenant
//   frame. The English trap: would and used to for a habit, and was -ing,
//   which defaults to the plain imparfait rather than être en train de.
//
//   QUOTES ONLY:
//     b1.01  formation. One recall mission (s03-rappel), its reframe quoted
//            through B101_REFRAME, imported from imparfait-formation-corpus.ts.
//     b1.03  the interruption / passé composé contrast. Named in s07 card 6,
//            s12-cours and the roundup, then left alone.
//     a2.05, a2.21  passé composé (the scene's wrong try, the counted summer).
//     a2.13  vouloir and je voudrais (s13-poli card 5).
//     a2.14  savoir / connaître (s09-etat).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   SETTLED BY PAUL, 2026-09-22 (applied in this draft):
//     - theme `recits-au-passe` (existing, empty); ids keep .101-.199
//     - the learner is addressed as TU in all instruction, coach, drill,
//       task-brief and term copy; vous stays only where a character speaks
//       politely (s13-poli, s19-entretien, the task's request, the letter)
//     - every `say` is French, voiced fr-FR (coachVoice 'coach-fr-FR');
//       English glosses stay on screen only
//     - Lesson.title French, overview.titleEn English; unspaced « ? » in
//       bubbles kept until the renderer fix; EN glosses kept on quiz whys;
//       Québec words glossed (term `quebec`); rubric stays French;
//       `je voudrais` scoring (2/3) confirmed
//
//   STILL OPEN:
//   Q1. B1 units have no seq in seed.json, so b1.01 and b1.03 are cited as
//       « la leçon précédente / suivante » rather than by number.
//   Q2. fr-FR TTS for a Québécois, Belgian and Ivorian cast: do the
//       recorded briefs (audio.recorded) ask for regional voices, as drafted?

import type { Lesson, LessonSection, LessonDrill, SectionAudio, ReferenceSheet } from '../../../../ealch-v2/src/content/schema.ts';
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, REFRAME, REFRAME_EN, E,
  ALL_ROWS, REUSED_IDS, DICTEE_IDS, SPEAKABLE_IDS,
  B101_REFRAME, B101_REF, B101_UNIT, B103_REF,
  PC_UNIT, PC_ETRE_UNIT, MODAL_UNIT, MODAL_REF, SAVOIR_UNIT, SAVOIR_REF, PRONOMINAL_UNIT, Y_EN_UNIT,
} from './imparfait-usage-corpus.ts';
import { IMPARFAIT_USAGE_TERMS } from './imparfait-usage-terms.ts';

function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/** NOT `as const`: a readonly `speeds` tuple is not assignable to SectionAudio. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE SOUVENIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** The breakdown: an anglophone Québécois (North Hatley, Cantons-de-l'Est)
 *  describes their childhood village to a new colleague. First try in the
 *  PRESENT, so she hears « today »; second try in the PASSÉ COMPOSÉ, so she
 *  hears one outing and waits for the story. Nobody corrects anyone.
 *
 *  NO SPACED « ? » OR « ! » IN ANY BUBBLE (the bubble loses its last word). */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: "Montréal, un lundi midi. À la cafétéria du bureau, tu manges avec Sophie, une nouvelle collègue. Tu as grandi à North Hatley, un petit village des Cantons-de-l'Est.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Sophie',
    fr: "North Hatley? C'était comment, ton enfance là-bas?",
    en: 'North Hatley? What was your childhood like there?',
    stage: 'Elle pose sa fourchette. Elle veut vraiment savoir.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'Toi',
    fr: "C'est un petit village. Il y a une épicerie et un lac.",
    en: "It's a small village. There's a grocery store and a lake.",
    stage: 'Tu parles au présent. Pour Sophie, tu parles du village aujourd\'hui.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Sophie',
    fr: 'Ah, tu y retournes souvent?',
    en: 'Oh, do you go back often?',
    stage: "Elle a compris le présent. L'épicerie a fermé il y a vingt ans.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'Toi',
    fr: "Non. L'hiver, on a patiné sur le lac.",
    en: 'No. In winter, we skated on the lake.',
    respell: '[nohⁿ · lee-VEHR ohⁿ-nah pa-tee-NAY sür luh LAK]',
    stage: 'Tu essaies le passé composé. Sophie entend une seule sortie, un jour précis.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Sophie',
    fr: 'Ah oui? Et après?',
    en: 'Oh yes? And then what?',
    stage: 'Elle attend une histoire. Tu voulais lui montrer un souvenir.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: "Encore une fois. Tu veux dire : chaque samedi, tout l'hiver, pendant des années. Tu dis quoi ?",
    size: 'lg',
    options: [
      { fr: 'Tous les samedis, on a patiné sur le lac.', respell: '[too lay sam-DEE ohⁿ-nah pa-tee-NAY sür luh LAK]', en: 'Every Saturday, we skated on the lake.', outcome: 'breaks', audio: AUDIO },
      { fr: 'Tous les samedis, on patinait sur le lac.', respell: '[too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK]', en: 'Every Saturday, we would skate on the lake.', outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: "Sophie sourit : « Moi aussi, à Chicoutimi. » Elle voit la scène : le lac, le froid, et un samedi qui revient.",
      breaks: "Sophie hoche la tête. Elle entend une liste finie, pas un souvenir. Deux minutes plus tard, elle parle d'autre chose.",
    },
  },
  {
    kind: 'break',
    heading: 'Tu as compté au lieu de regarder',
    // French 25 words + EN gloss 19 words = 44. Core cap is 45.
    body: "Le passé composé compte et ferme : c'est arrivé, c'est fini. L'imparfait ouvre une fenêtre : on voit l'hiver, et le samedi revient. EN: The passé composé counts and closes; the imparfait opens a window where Saturday keeps coming back.",
    wrong: {
      fr: 'Tous les samedis, on a patiné sur le lac.',
      ipa: '/tu le sam.di ɔ̃.na pa.ti.ne syʁ lə lak/',
      respell: '[too lay sam-DEE ohⁿ-nah pa-tee-NAY sür luh LAK]',
      en: 'Every Saturday, we skated on the lake.',
    },
    right: {
      fr: 'Tous les samedis, on patinait sur le lac.',
      ipa: '/tu le sam.di ɔ̃ pa.ti.nɛ syʁ lə lak/',
      respell: '[too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK]',
      en: 'Every Saturday, we would skate on the lake.',
    },
    coach: `${REFRAME} (${REFRAME_EN})`,
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: "Personne ne t'a corrigé. Sophie a juste changé de sujet. C'est pour ça que cette erreur reste longtemps.",
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le lac, tous les samedis',
  frSub: 'Un souvenir qui ne passe pas',
  setting: { place: 'La cafétéria du bureau', city: 'Montréal', time: '12 h 15', ambience: 'des plateaux, une machine à café, la neige dehors' },
  beats: SCENE_BEATS,
  closing: { text: 'Deux essais, deux temps, et aucun ne montrait le souvenir.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude', 'decor'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Raconter une habitude du passé', s: "Acte 3 : tous les samedis, d'habitude, chaque été" },
    { t: "Décrire un lieu, la météo, l'heure et l'âge", s: "Acte 3 : le décor d'un souvenir" },
    { t: 'Ne pas traduire would et used to mot à mot', s: 'Acte 4 : le piège anglais' },
    { t: 'Demander quelque chose avec douceur', s: 'Acte 3, puis ton texte en acte 5' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** b1.01 RECALL, ONE MISSION, NOT A RE-TEACH. Its reframe is quoted through an
 *  imported constant so the quote cannot drift. */
const S03_RAPPEL: LessonSection = {
  type: 'cardDeck',
  id: 's03-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les formes, en trente secondes',
  frSub: 'Un rappel',
  hint: 'Trois cartes. Un rappel, pas une leçon.',
  audio: AUDIO,
  say: REFRAME,
  cards: [
    {
      head: `Ce que dit ${B101_REF}`,
      label: 'rappel',
      fr: 'nous finissons · je finissais',
      sub: '[noo fee-nee-SOHⁿ] · [zhuh fee-nee-SEH]',
      body: `« ${B101_REFRAME} » C'est la phrase de ${B101_REF}. Ici, on ne la refait pas : on l'utilise. EN: That is the last lesson's line; here we use it, we do not redo it.`,
    },
    {
      head: 'Les fins',
      label: 'trois sons seulement',
      fr: 'je parlais · nous parlions · vous parliez',
      sub: '[zhuh par-LEH] · [noo par-LYOHⁿ] · [voo par-LYAY]',
      body: "Je, tu, il, ils : la même fin à l'oreille. Nous et vous : un i en plus. EN: je, tu, il and ils sound the same; nous and vous add an i.",
    },
    {
      head: 'Une seule exception',
      label: 'être',
      fr: "j'étais · nous étions",
      sub: '[zhay-TEH] · [noo-zay-TYOHⁿ]',
      body: "être ne part pas de nous : il part de ét-. Tous les autres verbes suivent la règle. EN: être starts from ét-; every other verb follows the rule.",
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LIRE D'ABORD  (noticing before the rule)
 * ══════════════════════════════════════════════════════════════════════════ */

/** B1 INPUT: ONE LONG TEXT BEFORE THE RULE. ~155 words, one block (PassagePage
 *  discards newlines). Every use the lesson owns appears in it at least once,
 *  plus a present-tense « Aujourd'hui » line as the then/now hinge, and it
 *  closes on the softened request the task will ask for.
 *
 *  No passé composé anywhere in the letter: b1.03 has not happened yet.
 *  Glossary keys all appear in `text` verbatim and are four words or fewer. */
const S04_LIRE: LessonSection = {
  type: 'reading',
  id: 's04-lire',
  layer: 'core',
  questionsInModal: true,
  title: 'Une lettre de Montréal à Bruxelles',
  frSub: 'Benoît écrit à son ancienne propriétaire',
  text: "Chère Madame Peeters, vous vous souvenez peut-être de moi. En 2006, j'habitais dans votre appartement, rue du Page, à Ixelles. J'avais vingt-deux ans et j'étais étudiant. L'appartement était petit, mais il y avait une grande fenêtre sur la rue et beaucoup de lumière. En hiver, il faisait froid et il pleuvait presque tous les jours. Le chauffage faisait un bruit terrible la nuit ! Au début, je ne connaissais personne à Bruxelles. Je travaillais le soir dans un café et je rentrais souvent à minuit. Tous les dimanches, j'allais au marché de la place Flagey et j'achetais des gaufres pour les voisins. D'habitude, vous preniez le café avec nous dans la cour. Aujourd'hui, j'habite à Montréal avec ma famille. Nous venons à Bruxelles en mai, et je me demandais si nous pouvions passer vous dire bonjour. Bien à vous, Benoît Lemaire",
  glossary: [
    { word: 'Ixelles', en: 'Ixelles', note: 'Une commune de Bruxelles, avec beaucoup d\'étudiants.' },
    { word: 'Le chauffage', en: 'the heating', note: 'Le radiateur, l\'eau chaude dans les tuyaux.' },
    { word: 'un bruit', en: 'a noise' },
    { word: 'je rentrais', en: 'I would come home', note: 'rentrer : revenir à la maison. Ici, une habitude.' },
    { word: 'des gaufres', en: 'waffles', note: 'Belges, bien sûr.' },
    { word: 'la cour', en: 'the courtyard', note: "L'espace derrière l'immeuble." },
    { word: 'je me demandais si', en: 'I was wondering if', note: 'Une demande polie. Le sens est présent.' },
    { word: 'Bien à vous', en: 'Kind regards', note: 'Pour finir une lettre un peu formelle.' },
  ],
  questions: [
    { q: 'Quel âge avait Benoît en 2006 ?', a: "Vingt-deux ans. « J'avais vingt-deux ans » : l'âge au passé, c'est avoir à l'imparfait." },
    { q: "Qu'est-ce qu'il faisait tous les dimanches ?", a: 'Il allait au marché de la place Flagey et il achetait des gaufres. Ça revenait chaque semaine : imparfait.' },
    { q: "Trouve deux phrases qui décrivent l'appartement.", a: "« L'appartement était petit » et « il y avait une grande fenêtre sur la rue ». Rien ne se passe : c'est le décor." },
    { q: '« Je me demandais si nous pouvions passer. » Benoît parle de 2006 ?', a: "Non, il parle de maintenant. Il demande aujourd'hui, et l'imparfait rend la demande plus douce." },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-02-lettre' },
  say: REFRAME,
  terms: ['habitude', 'decor', 'poli'],
};

/** NOTICING: the learner sorts the letter's own verbs by what they do, before
 *  any rule card. Group 3 is a control page (items: []). Correct indices
 *  scattered: 1, 0, 1. */
const S05_REPERER: LessonSection = {
  type: 'groupDrill',
  id: 's05-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Dans la lettre, qui fait quoi ?',
  frSub: 'Repérer',
  groups: [
    {
      label: 'Ce qui revenait',
      items: [
        { fr: "Tous les dimanches, j'allais au marché.", note: 'chaque semaine', en: 'Every Sunday, I went to the market.' },
        { fr: 'Je rentrais souvent à minuit.', note: 'souvent', en: 'I often came home at midnight.' },
        { fr: "D'habitude, vous preniez le café avec nous.", note: "d'habitude", en: 'You usually had coffee with us.' },
      ],
      check: {
        q: 'Ces trois phrases racontent quoi ?',
        opts: ['une seule fois', 'une chose qui revenait', "une chose vraie aujourd'hui"],
        correct: 1,
        why: "Chaque dimanche, souvent, d'habitude : on ne sait pas combien de fois, et ce n'est pas important. EN: No count, and none needed.",
      },
    },
    {
      label: "Comment c'était",
      items: [
        { fr: "L'appartement était petit.", note: 'un lieu', en: 'The flat was small.' },
        { fr: 'Il y avait une grande fenêtre.', note: 'un lieu', en: 'There was a big window.' },
        { fr: 'Il faisait froid.', note: 'la météo', en: 'It was cold.' },
        { fr: "J'avais vingt-deux ans.", note: "l'âge", en: 'I was twenty-two.' },
      ],
      check: {
        q: 'Ici, est-ce que quelque chose se passe ?',
        opts: ['Non, on regarde le décor.', 'Oui, une action commence.', 'Oui, une action finit.'],
        correct: 0,
        why: "Rien ne commence et rien ne finit. On regarde, comme sur une photo. EN: Nothing starts or ends; it is a photo.",
      },
    },
    {
      label: 'Et la dernière phrase',
      items: [],
      check: {
        q: '« Je me demandais si nous pouvions passer. » Benoît se demande ça quand ?',
        opts: ['en 2006', 'maintenant, en écrivant', 'en mai, à Bruxelles'],
        correct: 1,
        why: "Il se le demande en écrivant la lettre. La forme est passée, le sens est présent. EN: Past form, present meaning.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude', 'decor', 'poli'],
};

/** THE SIX USES, ONE MISSION. tapTable, six rows (the Pixel 6 ceiling). The
 *  seventh use, the action in progress, is s12-cours's preview, so six rows is
 *  also the honest count of what this lesson fully owns. Two columns: every
 *  example fits on one line of a two-column row. */
const S06_EMPLOIS: LessonSection = {
  type: 'tapTable',
  id: 's06-emplois',
  layer: 'core',
  title: 'Six emplois, un seul temps',
  frSub: 'La carte',
  cols: ['Emploi', 'Exemple'],
  rows: [
    {
      cells: ['une habitude', 'On patinait.'],
      say: 'Tous les samedis, on patinait sur le lac.',
      detail: { title: 'Une habitude', body: "Une action qui revenait, sans nombre. Indices : tous les samedis, d'habitude, chaque été, souvent. EN: A repeated action with no count.", say: 'Tous les samedis, on patinait sur le lac.' },
    },
    {
      cells: ['un état', "J'étais fatigué."],
      say: "J'étais fatigué et j'avais froid.",
      detail: { title: 'Un état, un sentiment', body: 'Comment on était, ce qu\'on sentait, ce qu\'on savait. Être, avoir peur, savoir, connaître. EN: How you were, felt or knew.', say: "J'étais fatigué et j'avais froid." },
    },
    {
      cells: ['le décor', 'Il y avait un jardin.'],
      say: 'Il y avait un jardin derrière la maison.',
      detail: { title: 'Le décor', body: "Le lieu, les gens, les objets. Il y avait, c'était, la maison était. EN: The place, people and things in the picture.", say: 'Il y avait un jardin derrière la maison.' },
    },
    {
      cells: ['la météo', 'Il faisait froid.'],
      say: 'Il faisait froid.',
      detail: { title: 'La météo', body: 'Il faisait froid, il neigeait, il pleuvait. Le temps qu\'il faisait autour du souvenir. EN: The weather around the memory.', say: 'Il neigeait.' },
    },
    {
      cells: ["l'heure, l'âge", "J'avais douze ans."],
      say: "J'avais douze ans.",
      detail: { title: "L'heure et l'âge", body: "Il était minuit. J'avais douze ans, avec avoir, jamais être. EN: Clock time with être, age with avoir.", say: 'Il était minuit.' },
    },
    {
      cells: ['la politesse', 'Je voulais vous demander...'],
      say: 'Je voulais vous demander un petit service.',
      detail: { title: 'La politesse', body: "Forme passée, sens présent. Tu demandes maintenant, avec douceur. EN: Past in form, present in meaning, softer.", say: 'Je voulais vous demander un petit service.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude', 'decor', 'poli'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES EMPLOIS  (the Owns)
 * ══════════════════════════════════════════════════════════════════════════ */

/** HABIT, WITH THE CUE SHOWN FAILING TWICE. Cards 5 and 6 are the brief's
 *  « at least one counterexample for each cue »: the same marker with a
 *  present verb (still true), and a counted, closed summer in the passé
 *  composé, which is b1.03's ground and is named, not taught. */
const S07_HABITUDE: LessonSection = {
  type: 'cardDeck',
  id: 's07-habitude',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui revenait',
  frSub: "L'habitude",
  hint: 'Six cartes. Les deux dernières montrent les limites.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-02-habitude' },
  say: REFRAME,
  terms: ['habitude', 'indice', 'quebec'],
  cards: [
    {
      head: 'tous les samedis',
      label: 'chaque semaine',
      fr: 'Tous les samedis, on patinait sur le lac.',
      sub: '[too lay sam-DEE ohⁿ pa-tee-NEH sür luh LAK]',
      body: "Le samedi revient tout l'hiver. On ne compte pas les samedis : on regarde l'hiver entier. EN: You look at the whole winter, you do not count Saturdays.",
    },
    {
      head: "d'habitude",
      label: 'normalement',
      fr: "D'habitude, mon père se levait à cinq heures.",
      sub: '[da-bee-TÜD mohⁿ PEHR suh luh-VEH ah sehⁿ-KUHR]',
      body: "D'habitude dit : c'était normal, tous les jours. Un verbe pronominal marche pareil : se levait. EN: Usually, every day; pronominal verbs work the same way.",
    },
    {
      head: 'chaque été',
      label: 'chaque année',
      fr: 'Chaque été, nous allions chez ma grand-mère à Abidjan.',
      sub: '[shah-kay-TAY noo-zah-LYOHⁿ shay mah grahⁿ-MEHR ah ah-bee-DJAHⁿ]',
      body: "Des étés, pendant des années. Combien exactement ? Ce n'est pas la question. EN: Many summers, and the number is not the point.",
    },
    {
      head: 'souvent',
      label: 'beaucoup de fois',
      fr: "On allait souvent au dépanneur après l'école.",
      sub: '[ohⁿ-nah-LEH soo-VAHⁿ oh day-pah-NUHR ah-preh lay-KOL]',
      body: "Souvent, mais sans nombre. Au Québec, le dépanneur, c'est le petit magasin du coin. EN: Often, with no number. A dépanneur is a Québec corner store.",
    },
    {
      head: 'un indice, pas une règle',
      label: 'même mot, présent',
      fr: "D'habitude, nous dînons vers vingt heures.",
      sub: '[da-bee-TÜD noo dee-NOHⁿ vehr vehⁿ-TUHR]',
      body: "Même mot, verbe au présent : c'est encore vrai aujourd'hui. Le mot aide, mais c'est le sens qui choisit. EN: Same cue, present tense, because it is still true. The meaning decides.",
    },
    {
      head: 'et quand on compte',
      label: 'un été précis',
      fr: 'Cet été-là, je suis allé trois fois au lac.',
      sub: '[seh-tay-tay-LAH zhuh swee-zah-LAY trwah fwah oh LAK]',
      body: `Ici on compte : trois fois, un été précis et fini. Alors, passé composé. ${Cap(B103_REF)} explique pourquoi. EN: A count in a closed period takes the passé composé; next lesson explains.`,
    },
  ],
};

/** THEN / NOW. avant, autrefois and à l'époque open the past; maintenant
 *  brings the present back, often in the same sentence. The last example is
 *  the counterexample for avant: `avant de` + infinitive is not an era. */
const S08_AVANT: LessonSection = {
  type: 'examples',
  id: 's08-avant',
  layer: 'core',
  title: 'Avant, et maintenant',
  frSub: "Deux époques",
  examples: [
    { fr: "Avant, j'habitais à Bruxelles. Maintenant, j'habite à Montréal.", en: 'I used to live in Brussels. Now I live in Montreal.', note: 'avant : imparfait ; maintenant : présent' },
    { fr: 'Autrefois, le village avait une seule école.', en: 'In the old days, the village had only one school.', note: 'autrefois : il y a longtemps' },
    { fr: "À l'époque, il n'y avait pas de téléphone portable.", en: 'Back then, there were no cell phones.', note: "à l'époque : à ce moment de la vie" },
    { fr: 'Autrefois, nous prenions le petit déjeuner ensemble tous les jours.', en: 'In the past, we used to have breakfast together every day.', note: 'une époque et une habitude, ensemble' },
    { fr: 'Autrefois, il se réveillait sans réveil, mais maintenant il en a besoin.', en: 'In the past he woke up without an alarm; now he needs one.', note: 'les deux époques, dans une phrase' },
    { fr: "Avant de partir, j'éteins la lumière.", en: 'Before leaving, I turn off the light.', note: "attention : avant de + verbe, ce n'est pas une époque" },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avant', 'indice'],
};

/** STATES AND FEELINGS. savoir / connaître are a2.14's verbs and their
 *  imparfait is the cleanest state in French: nobody « was knowing ». */
const S09_ETAT: LessonSection = {
  type: 'examples',
  id: 's09-etat',
  layer: 'core',
  title: 'Comment on était',
  frSub: 'Les états et les sentiments',
  examples: [
    { fr: "J'étais fatigué et j'avais froid.", en: 'I was tired and I was cold.', note: 'le corps' },
    { fr: 'Il avait peur du noir.', en: 'He was afraid of the dark.', note: 'un sentiment, avec avoir' },
    { fr: 'Je savais que la route était fermée.', en: 'I knew the road was closed.', note: `savoir, vu dans ${SAVOIR_REF}` },
    { fr: 'Je connaissais tout le monde dans le village.', en: 'I knew everyone in the village.', note: 'connaître : un état qui dure' },
    { fr: "Quand j'étais petite, j'aimais beaucoup l'école.", en: 'When I was little, I really liked school.', note: 'aimer : un sentiment' },
    { fr: 'Ma sœur voulait devenir pilote.', en: 'My sister wanted to become a pilot.', note: 'vouloir : un désir qui dure' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat'],
};

/** SCENERY, WEATHER, CLOCK TIME, AGE. Age is the one with a form trap:
 *  English « I was twelve » invites `j'étais douze ans`. */
const S10_DECOR: LessonSection = {
  type: 'cardDeck',
  id: 's10-decor',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le décor du souvenir',
  frSub: "Le lieu, la météo, l'heure, l'âge",
  hint: 'Sept cartes. Rien ne se passe sur aucune.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-02-decor' },
  say: REFRAME,
  terms: ['decor'],
  cards: [
    { head: 'le lieu', label: 'être', fr: 'La maison était grande et un peu froide.', sub: '[lah meh-ZOHⁿ ay-teh GRAHⁿD ay uhⁿ puh FRWAD]', body: "Une description : comment était la maison. EN: What the house was like." },
    { head: 'ce qu\'il y avait', label: 'il y a → il y avait', fr: 'Il y avait un jardin derrière la maison.', sub: '[ee-lee-yah-VEH uhⁿ zhar-DEHⁿ deh-RYEHR lah meh-ZOHⁿ]', body: 'Il y avait marche pour une chose ou pour plusieurs. EN: il y avait means there was and there were.' },
    { head: 'et les gens', label: 'une foule', fr: 'Il y avait une centaine de spectateurs.', sub: '[ee-lee-yah-VEH ün sahⁿ-TENN duh spek-tah-TUHR]', body: "Le décor, c'est aussi les gens autour. EN: The scenery includes the people." },
    { head: 'la météo', label: 'faire', fr: 'Il faisait froid.', sub: '[eel fuh-ZEH FRWAH]', body: "Au présent : il fait froid. Au passé, dans un souvenir : il faisait froid. EN: il fait becomes il faisait." },
    { head: 'la météo', label: 'un verbe seul', fr: 'Il neigeait.', sub: '[eel neh-ZHEH]', body: "Neiger, pleuvoir : il neigeait, il pleuvait. La neige tombait, et on regardait. EN: It was snowing, and you were watching." },
    { head: "l'heure", label: 'être', fr: 'Il était minuit.', sub: '[ee-lay-TEH mee-NWEE]', body: "L'heure au passé : il était. Il était huit heures, il était tard. EN: Clock time takes il était." },
    { head: "l'âge", label: 'avoir, pas être', fr: "J'avais douze ans.", sub: '[zha-VEH doo-ZAHⁿ]', body: "En anglais, I was twelve. En français, on a un âge : j'avais douze ans. Jamais j'étais douze ans. EN: French has an age, it is not one." },
  ],
};

/** B1 LISTENING: 10 lines, one speaker, hideLines. Awa tells a colleague in
 *  Montréal about her summers in Abidjan. The questions ask what each line
 *  DOES (habit, state, scenery, now), not only what it says. Correct indices:
 *  1, 1, 0, 2, 0. */
const S11_ECOUTE: LessonSection = {
  type: 'listening',
  id: 's11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un été à Abidjan',
  frSub: 'Awa raconte',
  lines: [
    { fr: "Chaque été, j'allais chez ma grand-mère, à Abidjan.", en: "Every summer, I went to my grandmother's in Abidjan." },
    { fr: "J'avais douze ans la première fois.", en: 'I was twelve the first time.' },
    { fr: 'Sa maison était au bord de la lagune.', en: 'Her house was on the edge of the lagoon.' },
    { fr: 'Il y avait un grand manguier dans la cour.', en: 'There was a big mango tree in the yard.' },
    { fr: 'Il faisait très chaud, même le soir.', en: 'It was very hot, even in the evening.' },
    { fr: 'Le matin, je me levais tôt pour aller au marché avec elle.', en: 'In the morning, I got up early to go to the market with her.' },
    { fr: 'Elle connaissait tous les vendeurs.', en: 'She knew all the stallholders.' },
    { fr: "Moi, j'étais un peu timide.", en: 'I was a bit shy.' },
    { fr: 'Le soir, on mangeait dehors et mon oncle racontait des histoires.', en: 'In the evening, we ate outside and my uncle told stories.' },
    { fr: 'Maintenant, ma grand-mère habite chez ma tante, à Montréal.', en: 'Now my grandmother lives with my aunt in Montreal.' },
  ],
  questions: [
    { q: 'Awa allait à Abidjan combien de fois ?', opts: ['une seule fois', 'chaque été', 'on ne sait pas du tout'], correct: 1, why: 'Chaque été, et le verbe est à l\'imparfait : une habitude. EN: Every summer, a habit.' },
    { q: 'Quelle phrase décrit un lieu ?', opts: ['Le matin, je me levais tôt.', 'Il y avait un grand manguier dans la cour.', 'Elle connaissait tous les vendeurs.'], correct: 1, why: "Le manguier, la cour : on regarde le décor. EN: That line is scenery." },
    { q: '« Elle connaissait tous les vendeurs. » C\'est quoi ?', opts: ['un état', 'une habitude', 'une action finie'], correct: 0, why: 'Connaître, c\'est un état : ça dure. EN: Knowing is a state.' },
    { q: 'Quel temps faisait-il ?', opts: ['Il pleuvait tout le temps.', 'Il faisait frais le soir.', 'Il faisait très chaud.'], correct: 2, why: 'Il faisait très chaud, même le soir. EN: Hot, even at night.' },
    { q: 'La dernière phrase est au présent. Pourquoi ?', opts: ["C'est vrai aujourd'hui.", "C'est une erreur.", "C'est une phrase polie."], correct: 0, why: "Maintenant : on revient à aujourd'hui, donc au présent. EN: maintenant brings back the present." },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-02-ecoute' },
  say: REFRAME,
  terms: ['habitude', 'decor', 'avant'],
};

/** THE SEVENTH USE, AS A PREVIEW ONLY. The brief: « name it and stop ».
 *  Card 2 is the one place this lesson prints an interruption, and it says in
 *  so many words that the next lesson owns it. */
const S12_COURS: LessonSection = {
  type: 'cardDeck',
  id: 's12-cours',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: "Une action en cours",
  frSub: 'Un aperçu',
  hint: 'Deux cartes. La deuxième, c\'est pour la prochaine fois.',
  audio: AUDIO,
  say: REFRAME,
  cards: [
    {
      head: 'ce qui se passait',
      label: 'I was reading',
      fr: 'Je lisais dans ma chambre.',
      sub: '[zhuh lee-ZEH dahⁿ mah SHAHⁿBR]',
      body: "Une action qui durait à ce moment-là. On ne voit ni le début ni la fin. EN: An action under way; no start, no end in view.",
    },
    {
      head: 'et puis quelque chose arrive',
      label: `c'est ${B103_REF}`,
      fr: 'Je lisais quand le téléphone a sonné.',
      sub: '[zhuh lee-ZEH kahⁿ luh tay-lay-FON ah soh-NAY]',
      body: `Deux temps dans une phrase. C'est le sujet de ${B103_REF}. Ici, on s'arrête là. EN: Two tenses in one sentence; that is the next lesson, so we stop here.`,
    },
  ],
};

/** THE POLITE IMPARFAIT: present in meaning, past in form. The reframe does
 *  not cover it and card 2 says so. Card 5 sets it beside `je voudrais`, which
 *  a2.13 taught, so the learner is not told the conditional is wrong. */
const S13_POLI: LessonSection = {
  type: 'cardDeck',
  id: 's13-poli',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Un pas en arrière',
  frSub: "L'imparfait poli",
  hint: 'Cinq cartes. Ici, personne ne parle du passé.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-02-poli' },
  say: REFRAME,
  terms: ['poli'],
  cards: [
    {
      head: 'direct',
      label: 'présent',
      fr: 'Je veux vous demander un service.',
      sub: '[zhuh vuh voo duh-mahⁿ-DAY uhⁿ sehr-VEES]',
      body: 'Correct, mais un peu sec avec un propriétaire ou un professeur. EN: Correct, but a bit blunt.',
    },
    {
      head: 'plus doux',
      label: 'forme passée, sens présent',
      fr: 'Je voulais vous demander un petit service.',
      sub: '[zhuh voo-LEH voo duh-mahⁿ-DAY uhⁿ puh-tee sehr-VEES]',
      body: "Tu demandes maintenant. L'imparfait fait un pas en arrière. C'est le seul emploi où on ne regarde pas le passé. EN: You ask now; this is the one use that is not about the past.",
    },
    {
      head: 'à la porte',
      label: 'au téléphone aussi',
      fr: "Je venais pour l'appartement.",
      sub: '[zhuh vuh-NEH poor lah-par-tuh-MAHⁿ]',
      body: "Tu es à la porte, maintenant. Personne n'entend un passé : on entend « je viens pour ». EN: You are at the door now; it means I've come about the flat.",
    },
    {
      head: 'dans un courriel',
      label: 'si + imparfait',
      fr: 'Je me demandais si vous étiez libre jeudi.',
      sub: '[zhuh muh duh-mahⁿ-DEH see voo-zay-TYAY LEEBR zhuh-DEE]',
      body: "Après je me demandais si, on garde l'imparfait : si vous étiez, si vous pouviez. EN: After je me demandais si, keep the imparfait.",
    },
    {
      head: 'et je voudrais ?',
      label: 'aussi poli',
      fr: 'Je voudrais vous demander un service.',
      sub: '[zhuh voo-DREH voo duh-mahⁿ-DAY uhⁿ sehr-VEES]',
      body: `Aussi poli. Tu le connais depuis ${MODAL_REF}. Les deux sont bons ; je voulais est un peu plus modeste. EN: Equally polite; je voulais is slightly humbler.`,
    },
  ],
};

/** MEANING BEFORE FORM: every group asks the learner to choose a tense because
 *  of what the sentence MEANS. Group 4 hands over `grimper`, which the lesson
 *  never shows, as the generalisation check. Correct indices: 1, 1, 0, 2. */
const S14_CHOISIR: LessonSection = {
  type: 'groupDrill',
  id: 's14-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisir par le sens',
  frSub: 'Le sens décide',
  groups: [
    {
      label: 'Même indice, deux temps',
      items: [
        { fr: 'Chaque été, nous allions chez ma grand-mère à Abidjan.', itemId: E(103), note: 'fini : elle habite à Montréal maintenant', en: "Every summer, we went to my grandmother's." },
        { fr: 'Chaque été, nous allons au Lac-Saint-Jean.', itemId: E(133), note: 'encore vrai', en: 'Every summer, we go to Lac-Saint-Jean.' },
        { fr: "Quand j'étais enfant, je cuisinais avec ma mère chaque dimanche.", itemId: 'fr.b1.cuisine.087', note: "chaque dimanche, et quand j'étais enfant", en: 'When I was a child, I cooked with my mother every Sunday.' },
        { fr: 'Quand j\'étais plus jeune, je jouais au football tous les week-ends.', itemId: 'fr.b1.sports-et-loisirs.076', note: 'tous les week-ends, à une époque', en: 'When I was younger, I played football every weekend.' },
      ],
      check: {
        q: 'Les deux premières phrases ont le même indice. Laquelle parle d\'aujourd\'hui ?',
        opts: ['la première', 'la deuxième'],
        correct: 1,
        why: "Chaque été ne choisit pas le temps. Le sens choisit : encore vrai, présent ; fini, imparfait. EN: The cue does not pick the tense; the meaning does.",
      },
    },
    {
      label: 'Décrire une chambre qui n\'existe plus',
      items: [],
      check: {
        q: "Tu décris ta chambre d'enfant. La maison a été vendue. Tu dis :",
        opts: ['Ma chambre a été bleue.', 'Ma chambre était bleue.', 'Ma chambre est bleue.'],
        correct: 1,
        why: "Un décor du passé : était. Est dirait qu'elle est encore bleue. EN: est would say it is still blue.",
      },
    },
    {
      label: 'Demander avec douceur',
      items: [],
      check: {
        q: 'Tu appelles un propriétaire pour un appartement. Tu veux être poli.',
        opts: ["Je voulais savoir si l'appartement était libre.", "J'ai voulu savoir si l'appartement était libre.", "Je vais vouloir savoir si l'appartement est libre."],
        correct: 0,
        why: "Je voulais : une demande de maintenant, plus douce. J'ai voulu raconte une envie finie. EN: j'ai voulu tells a finished wish, not a request.",
      },
    },
    {
      label: "Un verbe que tu n'as pas vu ici",
      items: [],
      check: {
        q: "Quand j'étais petit, je ... aux arbres. (grimper, « I used to climb trees »)",
        opts: ['ai grimpé', 'grimperais', 'grimpais'],
        correct: 2,
        why: "Une habitude d'enfance : imparfait. Nous grimpons, donc grimp- et -ais. EN: A childhood habit; nous grimpons gives grimp- + -ais.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice', 'habitude', 'poli'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE PIÈGE ANGLAIS
 * ══════════════════════════════════════════════════════════════════════════ */

/** would / used to / was -ing. Card 6 is the counterexample for « would »:
 *  a POLITE would is not a habit, so « would → imparfait » is a cue, not a
 *  rule. Card 4 does not call « être en train de » wrong: it is marked, and
 *  the default for « was -ing » is the plain imparfait.
 *
 *  Drill correct indices: 1, 0, 0, 1, 0, 1, 0, 1 (never three in a row). */
const S15_PIEGE: LessonSection = {
  type: 'trapDrill',
  id: 's15-piege',
  layer: 'core',
  swipe: true,
  title: 'Would, used to, was -ing',
  frSub: 'Le piège anglais',
  rule: {
    title: 'Pas mot à mot',
    // 32 words incl. the EN line.
    body: "Would et used to disent souvent une habitude. En français : l'imparfait, sans conditionnel ni verbe spécial. Was -ing aussi. EN: would, used to and was -ing usually all become the imparfait.",
  },
  cards: [
    { promptLabel: 'When I was a kid, I would play outside every day.', promptSound: "Quand j'étais petit, je jouerais dehors tous les jours.", fr: "Quand j'étais petit, je jouais dehors tous les jours.", ipa: '/kɑ̃ ʒe.tɛ pə.ti ʒə ʒu.ɛ də.ɔʁ tu le ʒuʁ/', tip: "Ici, would est une habitude. Le conditionnel imagine ; il ne raconte pas. EN: This would is a habit, not a condition." },
    { promptLabel: 'I used to smoke.', promptSound: "J'utilisais à fumer.", fr: 'Avant, je fumais.', ipa: '/a.vɑ̃ ʒə fy.mɛ/', tip: "Used to n'a pas de verbe en français. Avant et l'imparfait suffisent. EN: used to has no French verb." },
    { promptLabel: 'I used to walk to school.', promptSound: "J'ai marché jusqu'à l'école.", fr: "J'avais l'habitude de marcher jusqu'à l'école.", ipa: '/ʒa.vɛ la.bi.tyd də maʁ.ʃe ʒys.ka le.kɔl/', tip: "Possible aussi : avoir l'habitude de. Le passé composé ferait une seule marche. EN: avoir l'habitude de works; the passé composé makes it one walk." },
    { promptLabel: 'I was watching TV.', promptSound: "J'étais en train de regarder la télé.", fr: 'Je regardais la télé.', ipa: '/ʒə ʁə.ɡaʁ.dɛ la te.le/', tip: "Pas faux, mais lourd. Par défaut, l'imparfait simple. EN: Not wrong, just heavy; the plain imparfait is the default." },
    { promptLabel: 'Every summer, we would go to the lake.', promptSound: 'Chaque été, on irait au lac.', fr: 'Chaque été, on allait au lac.', ipa: '/ʃa.ke.te ɔ̃.na.lɛ o lak/', tip: 'Chaque été et would : une habitude. On allait. EN: A habit, so on allait.' },
    { promptLabel: "I'd like to ask you something. (poli)", promptSound: 'Je demanderais quelque chose.', fr: 'Je voulais vous demander un petit service.', ipa: '/ʒə vu.lɛ vu də.mɑ̃.de œ̃ pə.ti sɛʁ.vis/', tip: "Ce would-là est poli, pas une habitude. Je voulais ou je voudrais. EN: This would is politeness, not habit." },
  ],
  drill: [
    { promptSay: "Quand j'étais petit, je ... au foot. (would play)", opts: ['jouerais', 'jouais'], correct: 1 },
    { promptSay: 'Avant, il ... beaucoup. (used to smoke)', opts: ['fumait', 'a fumé'], correct: 0 },
    { promptSay: 'À dix heures, je ... la télé. (was watching)', opts: ['regardais', 'ai regardé'], correct: 0 },
    { promptSay: "Chaque hiver, on ... sur le lac. (would skate)", opts: ['patinerait', 'patinait'], correct: 1 },
    { promptSay: 'Je ... vous demander un service. (poli)', opts: ['voulais', 'ai voulu'], correct: 0 },
    { promptSay: 'Tous les dimanches, ma mère ... des crêpes. (would make)', opts: ['ferait', 'faisait'], correct: 1 },
    { promptSay: "Nous ... à Dakar à l'époque. (used to live)", opts: ['habitions', 'habiterions'], correct: 0 },
    { promptSay: 'Il ... peur du noir. (was afraid)', opts: ['a eu', 'avait'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Pas mot à mot' },
    { label: 'Six phrases', kind: 'cards', title: "L'anglais, puis le français" },
    { label: 'Écoute', kind: 'audio', title: 'Le bon français, à voix haute' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-02-piege' },
  say: REFRAME,
  terms: ['would', 'indice'],
};

/** swipe: true is mandatory on commonErrors (a blank screen otherwise). Each
 *  `why` says why the wrong version was a reasonable thing to say. */
const S16_ERREURS: LessonSection = {
  type: 'commonErrors',
  id: 's16-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Les cinq erreurs fréquentes',
  frSub: 'Et pourquoi elles sont logiques',
  errors: [
    {
      wrong: "Quand j'étais petit, je jouerais dehors.",
      right: "Quand j'étais petit, je jouais dehors.",
      why: "Logique : l'anglais dit would. Mais le conditionnel imagine ; il ne raconte pas une habitude. EN: Would suggests the conditional, but a habit takes the imparfait.",
    },
    {
      wrong: "J'étais douze ans.",
      right: "J'avais douze ans.",
      why: "Logique : l'anglais dit I was. En français, on a un âge. EN: English uses be; French uses avoir for age.",
    },
    {
      wrong: 'Tous les samedis, on a patiné sur le lac.',
      right: 'Tous les samedis, on patinait sur le lac.',
      why: "Pas impossible, mais on entend une liste finie. Pour un souvenir qui revient : imparfait. EN: Possible, but it sounds like a closed list, not a memory.",
    },
    {
      wrong: "Avant, j'habite à Bruxelles.",
      right: "Avant, j'habitais à Bruxelles.",
      why: "Logique : en anglais parlé, on raconte parfois au présent. Mais avant ouvre le passé. EN: avant opens the past, so the verb follows it there.",
    },
    {
      wrong: 'Il a fait froid et il a neigé.',
      right: 'Il faisait froid et il neigeait.',
      why: "Pour le décor d'un souvenir, l'imparfait. Le passé composé ferait le bilan de la journée. EN: For scenery, the imparfait; the passé composé sums up the day.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['would', 'avant'],
};

/** Short rows only (everything carrying `dictation`). */
const S17_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's17-dictee',
  layer: 'core',
  title: "Écrire ce qu'on entend",
  frSub: 'La dictée',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor'],
};

/** Build from the English: the direction production actually runs in. */
const S18_CARTES: LessonSection = {
  type: 'flashcards',
  id: 's18-cartes',
  layer: 'core',
  title: "De l'anglais au français",
  frSub: 'Les cartes',
  cards: [
    { front: 'I was twelve.', back: "J'avais douze ans.", say: "J'avais douze ans." },
    { front: 'It was snowing.', back: 'Il neigeait.', say: 'Il neigeait.' },
    { front: 'It was midnight.', back: 'Il était minuit.', say: 'Il était minuit.' },
    { front: 'I used to smoke.', back: 'Avant, je fumais.', say: 'Avant, je fumais.' },
    { front: 'When I was a kid, I would play outside every day.', back: "Quand j'étais petit, je jouais dehors tous les jours.", say: "Quand j'étais petit, je jouais dehors tous les jours." },
    { front: 'There was a garden behind the house.', back: 'Il y avait un jardin derrière la maison.', say: 'Il y avait un jardin derrière la maison.' },
    { front: 'I knew everyone in the village.', back: 'Je connaissais tout le monde dans le village.', say: 'Je connaissais tout le monde dans le village.' },
    { front: 'He was afraid of the dark.', back: 'Il avait peur du noir.', say: 'Il avait peur du noir.' },
    { front: "I've come about the flat.", back: "Je venais pour l'appartement.", say: "Je venais pour l'appartement." },
    { front: 'I was wondering if you were free on Thursday.', back: 'Je me demandais si vous étiez libre jeudi.', say: 'Je me demandais si vous étiez libre jeudi.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['would', 'poli'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — À VOUS
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE JOB-INTERVIEW OPENER, AS PRODUCTION. The brief offered it as an
 *  alternative scene; here it is the scenario, so the lesson covers both.
 *  Two alts and a userEn on every turn. The last turn is the softened
 *  question every interview ends on. One `ai` line uses the passé composé
 *  (« quand vous avez commencé »): the learner hears it and never has to
 *  produce it. */
const S19_ENTRETIEN: LessonSection = {
  type: 'scenario',
  id: 's19-entretien',
  layer: 'core',
  title: "L'entretien d'embauche",
  frSub: 'Ton ancien poste',
  setting: "Montréal, un bureau au 20e étage. Tu passes un entretien pour un poste dans le tourisme. Avant, tu travaillais à Bruxelles. La recruteuse est gentille, mais elle veut des détails.",
  turns: [
    {
      ai: 'Bonjour. Parlez-moi de votre ancien poste, à Bruxelles.',
      en: 'Hello. Tell me about your previous job, in Brussels.',
      user: 'Je travaillais dans une agence de voyages. Je gérais une équipe de six personnes.',
      userEn: 'I worked at a travel agency. I managed a team of six. (A job you had for years: a state, so the imparfait.)',
      alts: [
        { fr: "J'étais responsable d'une petite équipe dans une agence de voyages.", en: 'I was in charge of a small team at a travel agency.' },
        { fr: 'Je travaillais pour une agence de voyages, à Bruxelles.', en: 'I worked for a travel agency in Brussels.' },
      ],
    },
    {
      ai: "Et concrètement, qu'est-ce que vous faisiez chaque semaine ?",
      en: 'And in practice, what did you do each week?',
      user: 'Tous les lundis, je préparais le rapport de la semaine.',
      userEn: 'Every Monday, I prepared the weekly report. (Every Monday: a habit.)',
      alts: [
        { fr: "D'habitude, je préparais les rapports le lundi.", en: 'I usually prepared the reports on Mondays.' },
        { fr: 'Chaque semaine, je faisais un rapport pour la direction.', en: 'Every week, I did a report for management.' },
      ],
    },
    {
      ai: "Et l'ambiance, c'était comment ?",
      en: 'And what was the atmosphere like?',
      user: "L'ambiance était bonne. Je connaissais bien mes collègues.",
      userEn: 'The atmosphere was good. I knew my colleagues well. (Description and a state.)',
      alts: [
        { fr: "C'était une bonne équipe. On s'entendait bien.", en: 'It was a good team. We got on well.' },
        { fr: "L'ambiance était très agréable.", en: 'The atmosphere was very pleasant.' },
      ],
    },
    {
      ai: 'Vous aviez quel âge quand vous avez commencé là-bas ?',
      en: 'How old were you when you started there?',
      user: "J'avais vingt-six ans.",
      userEn: 'I was twenty-six. (Age: avoir, in the imparfait.)',
      alts: [
        { fr: "À l'époque, j'avais vingt-six ans.", en: 'Back then, I was twenty-six.' },
        { fr: "J'avais vingt-six ans, je crois.", en: 'I was twenty-six, I think.' },
      ],
    },
    {
      ai: 'Et pourquoi est-ce que vous voulez changer ?',
      en: 'And why do you want to change?',
      user: 'Avant, je voyageais peu. Maintenant, je cherche un poste plus international.',
      userEn: 'Before, I rarely travelled. Now I am looking for a more international job. (avant, then maintenant.)',
      alts: [
        { fr: 'À Bruxelles, je restais au bureau. Maintenant, je veux voyager.', en: 'In Brussels, I stayed in the office. Now I want to travel.' },
        { fr: 'Avant, je travaillais surtout seul. Maintenant, je veux une grande équipe.', en: 'I used to work mostly alone. Now I want a big team.' },
      ],
    },
    {
      ai: 'Très bien. Vous avez des questions pour nous ?',
      en: 'Very good. Do you have any questions for us?',
      user: 'Oui. Je voulais savoir si le poste était à temps plein.',
      userEn: 'Yes. I wanted to know if the job was full-time. (Present meaning, softer form, and était follows voulais.)',
      alts: [
        { fr: 'Oui, je me demandais si le poste était à temps plein.', en: 'Yes, I was wondering if the job was full-time.' },
        { fr: 'Je voulais vous demander si je pouvais travailler de la maison le vendredi.', en: 'I wanted to ask if I could work from home on Fridays.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['avant', 'poli'],
};

/** skill: 'speak' needs voiceflash on every item it names. */
const S20_PARLER: LessonSection = {
  type: 'practice',
  id: 's20-parler',
  layer: 'core',
  title: 'À voix haute',
  frSub: 'Dire les phrases',
  skill: 'speak',
  itemIds: SPEAKABLE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['habitude', 'decor'],
};

/** THE B1 TASK. DRAFT TYPE (`_task-section.ts`), not in schema.ts, filtered
 *  out before validateLesson / validateDensity. */
const S21_TACHE: TaskSection = {
  type: 'task',
  id: 's21-tache',
  title: 'Ton souvenir, par écrit',
  frSub: 'La tâche',
  brief: "Tu écris à une personne de ton passé : un ancien professeur, ou un ancien propriétaire. Tu décris un lieu où tu habitais et une habitude de cette époque. À la fin, tu lui demandes quelque chose, poliment. Dans ta lettre, tu dis vous à cette personne.",
  briefEn: 'You write to someone from your past, a former teacher or landlord: describe a place you lived and a habit from that time, then ask them for something politely.',
  produce: "Écris 70 à 110 mots : le lieu, la météo, ton âge, une habitude de la semaine, puis une demande polie à l'imparfait.",
  responseSpec: { kind: 'text', minWords: 70, maxWords: 110 },
  rubric: {
    criteria: [
      {
        key: 'emplois',
        label: "L'imparfait au bon endroit",
        maxPoints: 4,
        descriptors: [
          "0 : presque pas d'imparfait. Les habitudes et le décor sont au présent ou au passé composé.",
          "1 : quelques imparfaits, mais la plupart des habitudes ou du décor sont à un autre temps.",
          "2 : l'imparfait est là, mais une habitude ou le décor passe souvent au passé composé ou au présent.",
          "3 : l'imparfait est bien choisi presque partout. Une ou deux hésitations.",
          "4 : chaque habitude, état et détail du décor est à l'imparfait. Le présent sert seulement pour aujourd'hui.",
        ],
      },
      {
        key: 'description',
        label: 'Une description riche',
        maxPoints: 3,
        descriptors: [
          '0 : pas de description, seulement une liste.',
          "1 : un ou deux éléments (le lieu, ou l'âge), sans détails.",
          "2 : le lieu, la météo, l'âge et une habitude sont là, mais simplement.",
          "3 : le lieu, la météo, l'âge et une habitude sont là, avec des détails précis : des gens, des couleurs, des bruits.",
        ],
      },
      {
        key: 'formes',
        label: 'Des formes correctes',
        maxPoints: 4,
        descriptors: [
          '0 : les formes sont presque toujours fausses.',
          '1 : beaucoup de fins fausses (-ait pour je, -ions oublié) ou de bases fausses.',
          "2 : des erreurs régulières, par exemple j'étais douze ans, ou nous étaions.",
          '3 : une ou deux erreurs de forme, et le sens reste clair.',
          "4 : toutes les formes sont correctes, être compris (j'étais), et l'âge avec avoir.",
        ],
      },
      {
        key: 'demande',
        label: 'La demande polie',
        maxPoints: 3,
        descriptors: [
          "0 : pas de demande, ou un ordre (Envoyez-moi...).",
          '1 : une demande directe au présent (Je veux..., Vous pouvez... ?).',
          "2 : une demande polie, mais pas à l'imparfait (je voudrais), ou si suivi du présent (si vous avez).",
          "3 : Je voulais vous demander... ou Je me demandais si... avec l'imparfait après si, et une demande naturelle pour cette personne.",
        ],
      },
      {
        key: 'consigne',
        label: 'La consigne',
        maxPoints: 2,
        descriptors: [
          '0 : moins de 50 mots, ou le texte ne répond pas à la tâche.',
          '1 : un élément manque (la demande, la météo, l\'âge ou l\'habitude), ou le texte sort de 70 à 110 mots.',
          '2 : tout est là, adressé à une personne, entre 70 et 110 mots.',
        ],
      },
    ],
  },
  scaffold: [
    "Quand j'avais ... ans,",
    "À l'époque, j'habitais ...",
    'Il y avait ...',
    "L'hiver, il faisait ...",
    'Tous les samedis, ...',
    "D'habitude, ...",
    'Je voulais vous demander si ...',
    'Je me demandais si ...',
  ],
  modelAnswer: "Chère Madame Gagnon, quand j'avais dix ans, j'habitais à Chicoutimi, tout près de votre école. Notre maison était petite, mais il y avait une grande cour derrière. L'hiver, il faisait très froid et il neigeait souvent. Tous les samedis matin, mon frère et moi, nous allions à la patinoire avec les voisins. Ma mère préparait du chocolat chaud et mon père déneigeait l'entrée. J'étais timide, mais je connaissais tout le monde dans la rue. C'était une vie simple et j'étais heureux. Je me demandais si vous aviez encore des photos de notre classe. Merci beaucoup, Daniel",
  modelAnswerEn: "Dear Madame Gagnon, when I was ten, I lived in Chicoutimi, very close to your school. Our house was small, but there was a big yard behind it. In winter it was very cold and it often snowed. Every Saturday morning, my brother and I would go to the rink with the neighbours. My mother made hot chocolate and my father cleared the snow from the driveway. I was shy, but I knew everyone on the street. It was a simple life and I was happy. I was wondering if you still had photos of our class. Thank you very much, Daniel",
  watchFor: [
    { pattern: 'passé composé for a repeated weekly habit (« tous les samedis, on a patiné »)', criterion: 'emplois', feedback: "Une habitude revient : on ne compte pas. Mets ce verbe à l'imparfait.", ref: 's07-habitude' },
    { pattern: 'conditionnel for an English « would » habit (« je jouerais », « on irait »)', criterion: 'emplois', feedback: 'Ici, would est une habitude : imparfait, pas conditionnel.', ref: 's15-piege' },
    { pattern: 'present tense for a place or a habit that belongs to the past (« Avant, j\'habite »)', criterion: 'emplois', feedback: "Avant, à l'époque : le verbe suit dans le passé.", ref: 's08-avant' },
    { pattern: '« être en train de » for every background action', criterion: 'emplois', feedback: "Pas faux, mais lourd. Par défaut, l'imparfait simple : je lisais.", ref: 's15-piege' },
    { pattern: "« j'étais X ans » for age", criterion: 'formes', feedback: "L'âge se dit avec avoir : j'avais dix ans.", ref: 's10-decor' },
    { pattern: 'wrong stem or ending (« je finisais », « nous étaions », « il faisais »)', criterion: 'formes', feedback: 'Revois la base de nous et les fins : -ais, -ait, -ions.', ref: 's03-rappel' },
    { pattern: 'only one or two description elements (no weather, or no age)', criterion: 'description', feedback: "Ajoute la météo et ton âge : il faisait..., j'avais... ans.", ref: 's10-decor' },
    { pattern: 'request in the present (« je veux », « vous pouvez ? ») or as an order', criterion: 'demande', feedback: 'Plus doux : je voulais vous demander..., je me demandais si...', ref: 's13-poli' },
    { pattern: '« je me demandais si » followed by the present (« si vous avez »)', criterion: 'demande', feedback: "Après je me demandais si, garde l'imparfait : si vous aviez, si vous pouviez.", ref: 's13-poli' },
    { pattern: 'under 70 or over 110 words, or no request at the end', criterion: 'consigne', feedback: 'Vérifie la longueur, et finis par une demande.', ref: 's21-tache' },
  ],
  graderNotes: [
    'B1 learner. A single completed event in the passé composé (« j\'ai déménagé en 2010 ») is correct French and b1.03 content: do not penalise it under `emplois` if it is right.',
    'Québec, Belgian and West African vocabulary (dépanneur, déneiger, patinoire, septante, maquis) is correct French. Never mark it as an error.',
    "`je voudrais` as the softener is polite and correct, but it is not the imparfait the task asks for: 2 of 3 on `demande`, and no deduction under `formes`.",
    'The model answer is 96 words. Length is judged on the learner text only, salutation and signature included.',
    'Sequence of tenses after « je voulais savoir si / je me demandais si » (imparfait in the si-clause) is the target; a conditional there (« si vous pourriez ») is a form error.',
  ],
};

const S22_BILAN: LessonSection = {
  type: 'progressCheck',
  id: 's22-bilan',
  layer: 'core',
  title: 'Où tu en es',
  frSub: 'Le bilan',
  body: "Tu sais maintenant quand l'imparfait arrive seul : une habitude, un état, le décor, la météo, l'heure, l'âge, et une demande polie. Le point à vérifier, c'est l'habitude. Au passé composé, personne ne te corrige : on te comprend, mais on n'entend pas un souvenir. Relis ton texte de la tâche. Chaque tous les samedis, chaque d'habitude : le verbe est à l'imparfait ? Alors la leçon a marché. EN: You know when the imparfait stands alone. Check your habits: nobody corrects the passé composé, they just stop hearing a memory.",
  stats: [
    { k: 'Emplois', v: 'six, et un septième en aperçu' },
    { k: 'Le choix', v: 'le sens, pas le mot indice' },
    { k: 'Would, used to', v: "l'imparfait, sauf un would poli" },
    { k: "L'âge", v: "avoir : j'avais douze ans" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — L'EXAMEN
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ. 24 questions in four rounds of six, each round the first
 *  resolving target of exactly one errorTrigger.
 *
 *    typeIn 7 · mcq 10 · errorSpot 5 · listenChoose 2
 *
 *  Every typeIn and errorSpot carries `prompt`; both listenChoose carry `say`.
 *  No answer depends on a comma (fold() strips them). Closed-question correct
 *  slots: 0 ×4, 1 ×4, 2 ×4 (33% each, under the 40% spread cap). */
const S23_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's23-quiz',
  layer: 'core',
  title: "L'examen",
  frSub: 'Vingt-quatre questions',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-habitude',
      label: 'Ce qui revenait',
      targets: ['habit-pc'],
      questions: [
        { format: 'typeIn', q: 'Écris le verbe à la bonne forme.', prompt: 'Tous les samedis, on ___ sur le lac. (patiner)', answer: 'patinait', accept: ['patinait'], why: "Une habitude : chaque samedi, sans compter. EN: A habit, not a count.", ref: 's07-habitude' },
        { format: 'mcq', q: "Un souvenir d'enfance qui revenait chaque année. Quelle phrase ?", opts: ['Chaque été, nous sommes allés chez ma grand-mère.', 'Chaque été, nous allions chez ma grand-mère.', 'Chaque été, nous irions chez ma grand-mère.'], correct: 1, why: "Chaque été, pendant des années : imparfait. EN: Many summers, so the imparfait.", ref: 's07-habitude' },
        { format: 'errorSpot', q: 'Un verbe ne va pas pour une habitude. Réécris la phrase.', prompt: "D'habitude, mon père s'est levé à cinq heures.", answer: "D'habitude, mon père se levait à cinq heures.", accept: ["D'habitude, mon père se levait à cinq heures.", "D'habitude, mon père se levait à cinq heures", "D'habitude mon père se levait à cinq heures"], why: "D'habitude annonce une habitude : se levait. EN: A habit, so se levait.", ref: 's07-habitude' },
        { format: 'mcq', q: '« Cet été-là, je suis allé trois fois au lac. » Pourquoi le passé composé ?', opts: ['On compte : trois fois, un été précis.', 'Parce que le lac est loin.', "C'est une erreur."], correct: 0, why: `On compte dans une période finie. ${Cap(B103_REF)} explique ça. EN: A count in a closed period.`, ref: 's07-habitude' },
        { format: 'listenChoose', q: 'Écoute. Une habitude ou une seule fois ?', say: "On allait souvent au dépanneur après l'école.", opts: ['une seule fois', 'une habitude'], correct: 1, why: "Souvent et allait : une habitude. EN: souvent plus the imparfait, a habit.", ref: 's07-habitude' },
        { format: 'typeIn', q: 'Écris le verbe à la bonne forme.', prompt: "Quand j'étais petit, je ___ dehors tous les jours. (jouer)", answer: 'jouais', accept: ['jouais'], why: "Tous les jours, pendant l'enfance : jouais. EN: Every day in childhood.", ref: 's07-habitude' },
      ],
    },
    {
      id: 'r2-would',
      label: 'Would et used to',
      targets: ['would-cond'],
      questions: [
        { format: 'errorSpot', q: 'Cette phrase traduit would mot à mot. Réécris-la.', prompt: "Quand j'étais petit, je jouerais dehors.", answer: "Quand j'étais petit, je jouais dehors.", accept: ["Quand j'étais petit, je jouais dehors.", "Quand j'étais petit, je jouais dehors", "Quand j'étais petit je jouais dehors"], why: "Ce would est une habitude : jouais. EN: A habit would takes the imparfait.", ref: 's15-piege' },
        { format: 'mcq', q: '« When I was a kid, I would read every night. »', opts: ["Quand j'étais petit, je lirais tous les soirs.", "Quand j'étais petit, j'ai lu tous les soirs.", "Quand j'étais petit, je lisais tous les soirs."], correct: 2, why: "Tous les soirs, une habitude : lisais. EN: A habit, so lisais.", ref: 's15-piege' },
        { format: 'typeIn', q: '« I used to smoke. » Écris la phrase.', prompt: 'Avant, je ___. (fumer)', answer: 'fumais', accept: ['fumais'], why: "Used to : avant et l'imparfait. EN: used to becomes avant + imparfait.", ref: 's15-piege' },
        { format: 'mcq', q: '« I was watching TV. » Le plus naturel ?', opts: ["J'étais en train de regarder la télé.", "J'ai regardé la télé.", 'Je regardais la télé.'], correct: 2, why: "La première est possible mais lourde. Par défaut, l'imparfait simple. EN: The plain imparfait is the default.", ref: 's15-piege' },
        { format: 'mcq', q: '« I would like to ask you something. » Ici, would veut dire...', opts: ['une habitude', 'la politesse', 'le futur'], correct: 1, why: "Un would poli : je voulais ou je voudrais. Pas une habitude. EN: A polite would, not a habit.", ref: 's15-piege' },
        { format: 'typeIn', q: 'Écris le verbe. (« we would skate »)', prompt: 'Chaque hiver, on ___ sur le lac. (patiner)', answer: 'patinait', accept: ['patinait'], why: "Chaque hiver et would : une habitude. EN: A habit.", ref: 's15-piege' },
      ],
    },
    {
      id: 'r3-decor',
      label: 'Le décor',
      targets: ['present-past'],
      questions: [
        { format: 'typeIn', q: "L'âge, au passé. Écris le verbe.", prompt: "J'___ douze ans. (avoir)", answer: 'avais', accept: ['avais'], why: "L'âge : avoir. J'avais douze ans. EN: Age takes avoir.", ref: 's10-decor' },
        { format: 'errorSpot', q: "Un mot ne va pas. Réécris la phrase.", prompt: "J'étais douze ans.", answer: "J'avais douze ans.", accept: ["J'avais douze ans.", "J'avais douze ans"], why: "En anglais, I was twelve. En français, on a un âge. EN: French uses avoir.", ref: 's10-decor' },
        { format: 'mcq', q: "Tu décris la maison de ton enfance. Elle n'existe plus.", opts: ['La maison est grande.', 'La maison a été grande.', 'La maison était grande.'], correct: 2, why: "Un décor du passé : était. EN: Past scenery takes était.", ref: 's10-decor' },
        { format: 'listenChoose', q: 'Écoute. Qu\'est-ce que la phrase décrit ?', say: 'Il neigeait.', opts: ['la météo', "l'heure", 'une habitude'], correct: 0, why: "Il neigeait : la météo du souvenir. EN: The weather.", ref: 's10-decor' },
        { format: 'typeIn', q: "L'heure, au passé. Écris le verbe.", prompt: 'Il ___ minuit. (être)', answer: 'était', accept: ['était'], why: "L'heure : il était. EN: Clock time takes il était.", ref: 's10-decor' },
        { format: 'errorSpot', q: 'Avant ouvre le passé. Réécris la phrase.', prompt: "Avant, j'habite à Bruxelles.", answer: "Avant, j'habitais à Bruxelles.", accept: ["Avant, j'habitais à Bruxelles.", "Avant, j'habitais à Bruxelles", "Avant j'habitais à Bruxelles"], why: "Avant : une autre époque, donc imparfait. EN: avant sends the verb into the past.", ref: 's08-avant' },
      ],
    },
    {
      id: 'r4-poli',
      label: 'La politesse',
      targets: ['polite-literal'],
      questions: [
        { format: 'mcq', q: '« Je voulais vous demander un petit service. » La personne demande quand ?', opts: ['maintenant', 'hier', 'demain'], correct: 0, why: "Forme passée, sens présent. EN: Past form, present meaning.", ref: 's13-poli' },
        { format: 'mcq', q: 'Tu téléphones à un propriétaire. Le plus doux ?', opts: ["Je veux savoir si l'appartement est libre.", "Je voulais savoir si l'appartement était libre.", "J'ai voulu savoir si l'appartement était libre."], correct: 1, why: "Je voulais : plus doux. J'ai voulu raconte une envie finie. EN: j'ai voulu tells a finished wish.", ref: 's13-poli' },
        { format: 'typeIn', q: 'Écris le verbe.', prompt: 'Je me ___ si vous étiez libre jeudi. (demander)', answer: 'demandais', accept: ['demandais'], why: "Je me demandais si : une question polie. EN: A polite way to ask.", ref: 's13-poli' },
        { format: 'errorSpot', q: "C'est trop direct. Réécris à l'imparfait.", prompt: 'Je veux vous demander un service.', answer: 'Je voulais vous demander un service.', accept: ['Je voulais vous demander un service.', 'Je voulais vous demander un service'], why: "Je voulais : même sens, plus doux. EN: Same meaning, softer.", ref: 's13-poli' },
        { format: 'mcq', q: "« Je venais pour l'appartement. » Qu'est-ce que la personne dit ?", opts: ["I've come about the flat.", 'I came for the flat last week.', 'I used to come to the flat.'], correct: 0, why: "Elle est à la porte, maintenant. EN: She is at the door now.", ref: 's13-poli' },
        { format: 'mcq', q: "Quelle phrase n'est PAS une demande polie ?", opts: ['Je me demandais si vous pouviez m\'aider.', 'Je voulais vous demander un conseil.', 'Ma sœur voulait devenir pilote.'], correct: 2, why: "Ma sœur voulait : un vrai passé, un désir d'enfance. EN: That one is a real past wish.", ref: 's09-etat' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const S24_REVUE: LessonSection = {
  type: 'reviewDeck',
  id: 's24-revue',
  layer: 'core',
  title: 'Une dernière fois',
  frSub: 'Révision',
  cards: [
    { front: 'une habitude : chaque samedi (patiner)', back: 'Tous les samedis, on patinait sur le lac.', say: 'Tous les samedis, on patinait sur le lac.' },
    { front: 'un état : fatigué, froid', back: "J'étais fatigué et j'avais froid.", say: "J'étais fatigué et j'avais froid." },
    { front: 'le décor : un jardin', back: 'Il y avait un jardin derrière la maison.', say: 'Il y avait un jardin derrière la maison.' },
    { front: 'la météo : la neige', back: 'Il neigeait.', say: 'Il neigeait.' },
    { front: "l'âge : douze", back: "J'avais douze ans.", say: "J'avais douze ans." },
    { front: 'avant / maintenant : Bruxelles, Montréal', back: "Avant, j'habitais à Bruxelles. Maintenant, j'habite à Montréal.", say: "Avant, j'habitais à Bruxelles. Maintenant, j'habite à Montréal." },
    { front: 'I used to smoke.', back: 'Avant, je fumais.', say: 'Avant, je fumais.' },
    { front: 'poli : un petit service', back: 'Je voulais vous demander un petit service.', say: 'Je voulais vous demander un petit service.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const S25_FIN: LessonSection = {
  type: 'roundup',
  id: 's25-fin',
  layer: 'core',
  title: 'On regarde, on ne compte pas',
  frSub: 'Pour finir',
  body: `${REFRAME} Une habitude, un état, le décor, la météo, l'heure, l'âge : dans chaque cas, on regarde un moment du passé sans compter. La politesse est l'exception : forme passée, sens présent. ${Cap(B103_REF)} met l'imparfait à côté du passé composé, et là, une action arrive dans le décor. EN: ${REFRAME_EN} Politeness is the one exception. Next lesson puts the passé composé into the picture.`,
  points: [
    'Un indice aide, le sens décide : tous les samedis marche aussi au présent.',
    "Would et used to d'habitude : imparfait. Un would poli : je voulais.",
    "L'âge avec avoir : j'avais douze ans.",
    'Avant, imparfait. Maintenant, présent.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice', 'would'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET
 *
 *  The ONE `table`, at layer deep / render sheet (a core table is refused by
 *  validateDensity). No cheatSheet: inside a sheet it draws only its title.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_EMPLOIS: ReferenceSheet = {
  id: 'sheet-emplois',
  title: "Les emplois de l'imparfait",
  layer: 'deep',
  contains: ['les six emplois', 'les indices et leurs limites', "l'aperçu de l'action en cours"],
  sections: [
    {
      type: 'teach',
      id: 'sheet-teach',
      layer: 'deep',
      render: 'sheet',
      title: 'Comment lire cette page',
      body: `Chaque ligne est un emploi. La colonne Indices donne des mots qu'on trouve souvent avec cet emploi : ce sont des aides, pas des règles. Le même mot marche au présent si la chose est encore vraie, et au passé composé si on compte les fois dans une période finie. La dernière ligne est un aperçu : ${B103_REF} la travaille avec le passé composé. EN: Each row is one use. The cue words help but never decide; the meaning does. The last row is a preview of the next lesson.`,
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: "L'imparfait, emploi par emploi",
      cols: ['Emploi', 'Indices', 'Exemple'],
      rows: [
        ['une habitude', "tous les samedis, d'habitude, chaque été, souvent", 'Tous les samedis, on patinait sur le lac.'],
        ['avant / maintenant', "avant, autrefois, à l'époque", "Avant, j'habitais à Bruxelles."],
        ['un état, un sentiment', 'être, avoir peur, savoir, connaître, aimer', 'Je connaissais tout le monde.'],
        ['le décor', "il y avait, c'était", 'Il y avait un jardin derrière la maison.'],
        ['la météo', 'faire, neiger, pleuvoir', 'Il faisait froid. Il neigeait.'],
        ["l'heure, l'âge", 'il était + heure ; avoir + ans', "Il était minuit. J'avais douze ans."],
        ['la politesse', 'je voulais, je venais, je me demandais si', 'Je voulais vous demander un petit service.'],
        ['action en cours (aperçu)', 'was -ing', 'Je lisais dans ma chambre.'],
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS (not in `sections`)
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-habitude',
    title: 'Regarder ou compter',
    format: 'sort' as const,
    coach: 'Deux tas. Demande-toi : on regarde une habitude, ou on compte les fois ?',
    buckets: ['une habitude', 'une fois, ou un nombre précis'],
    items: [E(101), E(103), E(142), 'fr.b1.routines.075', 'fr.b1.routines.082', E(134)],
    audio: AUDIO,
  },
  {
    id: 'd-habitude-check',
    title: 'Encore une',
    format: 'mcq' as const,
    coach: 'Une seule question. Le sens d\'abord, puis la forme.',
    q: 'Tous les dimanches, ma grand-mère ... des crêpes.',
    opts: ['a fait', 'faisait', 'ferait'],
    correct: 1,
    why: "Tous les dimanches, pendant des années : une habitude. Faisait. EN: A habit.",
    items: [E(101), E(102)],
    audio: AUDIO,
  },
  {
    id: 'd-would',
    title: 'Would sans conditionnel',
    format: 'mcq' as const,
    coach: 'Would raconte une habitude ? Alors, imparfait.',
    q: '« When I was little, I would play outside. »',
    opts: ["Quand j'étais petit, je jouerais dehors.", "Quand j'étais petit, je jouais dehors.", "Quand j'étais petit, j'ai joué dehors."],
    correct: 1,
    why: "Une habitude d'enfance : jouais. EN: A childhood habit takes the imparfait.",
    items: [E(128), E(129), E(130), E(142)],
    audio: AUDIO,
  },
  {
    id: 'd-decor',
    title: 'Le décor, carte par carte',
    format: 'flashcard' as const,
    coach: "Lis l'anglais, dis le français. Rien ne se passe : on regarde.",
    items: [E(113), E(114), E(116), E(117), E(119), E(120), 'fr.b1.heure-et-date.039'],
    audio: AUDIO,
  },
  {
    id: 'd-poli',
    title: 'Plus doux',
    format: 'mcq' as const,
    coach: 'Tu demandes maintenant. Fais un petit pas en arrière.',
    q: 'Tu écris à ton ancien professeur. Le plus doux ?',
    opts: ['Je me demandais si vous aviez encore mes notes.', 'Vous avez encore mes notes ?', 'Je veux mes notes.'],
    correct: 0,
    why: "Je me demandais si + imparfait : poli et naturel. EN: Polite and natural.",
    items: [E(124), E(125), E(126), E(127)],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: DraftSection[] = [
  S01_SCENE, S02_GOALS, S03_RAPPEL,
  S04_LIRE, S05_REPERER, S06_EMPLOIS,
  S07_HABITUDE, S08_AVANT, S09_ETAT, S10_DECOR, S11_ECOUTE, S12_COURS, S13_POLI, S14_CHOISIR,
  S15_PIEGE, S16_ERREURS, S17_DICTEE, S18_CARTES,
  S19_ENTRETIEN, S20_PARLER, S21_TACHE, S22_BILAN,
  S23_QUIZ, S24_REVUE, S25_FIN,
];

/** Everything the lesson authors, plus every reused id it names. Seed-checked
 *  only; the import merge must pull the reused rows out of Postgres. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...REUSED_IDS])];

/** One slice per act, released at the act's checkpoint. Only rows with a
 *  `flashcard` drill are released; NOT_DECK_ABLE rows are named, never
 *  released. No slice releases a row the acts up to it have not shown. */
export const DECK_TRANCHE: string[][] = [
  // act 1: the scene's two lines
  [E(101), E(136)],
  // act 2: the five other tapTable examples
  [E(108), E(114), E(116), E(120), E(124)],
  // act 3: the Owns, and the reused rows it names
  [
    E(102), E(103), E(104), E(105), E(106), E(107), E(109), E(110), E(111), E(112),
    E(113), E(115), E(117), E(118), E(119), E(121), E(122), E(123), E(125), E(126), E(127),
    E(133), E(134), E(135), E(137),
    'fr.b1.routines.078', 'fr.b1.cuisine.087', 'fr.b1.sports-et-loisirs.076',
    'fr.b1.nombres.009', 'fr.a2.routines.004',
  ],
  // act 4: the trap
  [E(128), E(129), E(130), E(131), E(132), E(142)],
  // act 5: the interview and the task formula
  [E(138), E(139), E(140), E(141), E(143), E(144), E(145)],
  // act 6: nothing new
  [],
];

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: "L'imparfait : les emplois",
  level: 'b1',
  tag: 'B1 · LEÇON 02',
  intro: "You can build the imparfait. This lesson is about when to reach for it on its own: a habit that kept coming back, how you felt, what the place looked like, the weather, the time, your age, and one use that is not about the past at all, the polite request. The English words would and used to point the wrong way, and this lesson shows where.",
  skill: 'PE',
  grammarAssumed: [B101_UNIT, PC_UNIT, PC_ETRE_UNIT, MODAL_UNIT, SAVOIR_UNIT, PRONOMINAL_UNIT, Y_EN_UNIT],
  grammarIntroduced: [
    'The imparfait for habitual and repeated past actions, with frequency adverbials (tous les samedis, d\'habitude, chaque été, souvent) treated as cues rather than triggers',
    'The imparfait for past states, feelings and cognition (être, avoir peur, savoir, connaître, aimer, vouloir)',
    'The imparfait for description and scenery, including il y avait and c\'était',
    'The imparfait for past weather (il faisait, il neigeait), clock time (il était + heure) and age (avoir + ans)',
    'The attenuative (polite) imparfait: je voulais, je venais, je me demandais si + imparfait, present in reference and past in form',
    'The avant / autrefois / à l\'époque versus maintenant frame, and avant de + infinitive as a non-temporal-frame counterexample',
    'English would (habitual) and used to rendered by the imparfait, and was -ing defaulting to the simple imparfait rather than être en train de',
    'Preview only: the imparfait for an action in progress, with the interruption left to b1.03',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais former l'imparfait. Ici, tu apprends quand l'utiliser : une habitude, un état, le décor, la météo, l'heure, l'âge, et une demande polie.",
    minutes: 40,
    difficulty: 3,
    glyph: '⟲',
    screens: 104,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: 'Le souvenir',
      sections: ['s01-scene', 's02-goals', 's03-rappel'],
      milestone: 'Tu as vu un souvenir tomber à plat, et tu as les formes sous la main',
      estScreens: 16,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: "Lire d'abord",
      sections: ['s04-lire', 's05-reperer', 's06-emplois'],
      milestone: 'Tu as trouvé six emplois dans une vraie lettre avant de voir la règle',
      estScreens: 18,
      restPoints: ['s05-reperer'],
    },
    {
      id: 'act3',
      title: 'Les emplois',
      sections: ['s07-habitude', 's08-avant', 's09-etat', 's10-decor', 's11-ecoute', 's12-cours', 's13-poli', 's14-choisir'],
      milestone: 'Tu choisis le temps par le sens, même avec un verbe jamais vu',
      estScreens: 40,
      restPoints: ['s09-etat', 's12-cours'],
    },
    {
      id: 'act4',
      title: 'Le piège anglais',
      sections: ['s15-piege', 's16-erreurs', 's17-dictee', 's18-cartes'],
      milestone: 'Would et used to ne te piègent plus',
      estScreens: 16,
      restPoints: ['s16-erreurs'],
    },
    {
      id: 'act5',
      title: 'À toi',
      sections: ['s19-entretien', 's20-parler', 's21-tache', 's22-bilan'],
      milestone: 'Tu as parlé de ton ancien poste et écrit ton propre souvenir',
      estScreens: 14,
      restPoints: ['s20-parler'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s23-quiz', 's24-revue', 's25-fin'],
      milestone: 'Vingt-quatre questions, puis les phrases clés une dernière fois',
      estScreens: 12,
      restPoints: ['s24-revue'],
    },
  ],
  errorTriggers: [
    {
      id: 'habit-pc',
      description: 'Uses the passé composé for a repeated past habit, so the listener hears a closed list instead of a memory.',
      detectOn: ['s01-scene', 's07-habitude', 's14-choisir'],
      drill: 'd-habitude',
      retest: 'd-habitude-check',
    },
    {
      id: 'would-cond',
      description: 'Translates habitual would with the conditionnel, or looks for a verb for used to.',
      detectOn: ['s15-piege', 's16-erreurs'],
      drill: 'd-would',
      retest: 'd-would',
    },
    {
      id: 'present-past',
      description: 'Describes a past place, weather, time or age in the present, or says j\'étais for an age.',
      detectOn: ['s08-avant', 's10-decor', 's16-erreurs'],
      drill: 'd-decor',
    },
    {
      id: 'polite-literal',
      description: 'Reads je voulais as a real past, or makes a request bluntly in the present.',
      detectOn: ['s13-poli', 's14-choisir', 's19-entretien'],
      drill: 'd-poli',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_EMPLOIS],
  terms: IMPARFAIT_USAGE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul 2026-09-22: every `say` is French and voiced fr-FR.
    coachVoice: 'coach-fr-FR',
    recorded: [
      { id: 'rec-b1-02-lettre', desc: "Benoît's letter, read as a letter: one take, one voice, a Belgian or neutral French reader. The imparfait endings must NOT be stressed; the learner has to notice them, not be shown them." },
      { id: 'rec-b1-02-habitude', desc: 'The six habit cards, one take per card. Cards 5 and 6 are counterexamples and are read with exactly the same intonation as cards 1-4, so the difference lives in the verb and nowhere else.' },
      { id: 'rec-b1-02-decor', desc: 'Seven short description cards, read as a memory being looked at: slow, even, no drama. Il faisait is fuh-ZEH, never fay-ZEH.' },
      { id: 'rec-b1-02-ecoute', desc: "Awa's ten lines, ONE TAKE, ONE VOICE, recorded adjacently in authored order. An Ivorian or West African French voice if available. Natural conversational pace; the last line (present tense) must not be marked." },
      { id: 'rec-b1-02-poli', desc: "The polite cards. Je veux and je voulais are read in the same neutral voice: the softness is in the form, and a reader who adds warmth to the second teaches that tone does the work." },
      { id: 'rec-b1-02-piege', desc: "The audio step plays each card's correct fr. Read at conversational pace; the wrong promptSound versions are never recorded." },
    ],
  },
};
