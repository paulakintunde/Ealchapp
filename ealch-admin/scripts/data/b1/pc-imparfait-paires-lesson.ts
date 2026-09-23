// b1.04.l1 « Passé composé ou imparfait : les paires » (DRAFT) - the lesson.
//
// DRAFT ONLY. Not imported, not merged into seed.json, not published. The
// capstone of B1 Unit 1 (band header « Imperfect and past contrast »):
// assumes b1.01 (formation), b1.02 (uses) and b1.03 (background vs event,
// cues as cues) are taught.
//
// ══════════════════════════════════════════════════════════════════════════
//  SECTIONS (24: 23 in the schema union + 1 draft `task`; ceiling is 30)
// ══════════════════════════════════════════════════════════════════════════
//
//   ACT 1  La scène
//     s01-scene     scene          Montréal: Nadia (from Lausanne) « je devais
//                                  venir... j'ai dû partir »; you relay it to
//                                  the manager and pick devais vs dû
//     s02-goals     goals
//     s03-lire      reading        Dakar to Québec, 150 words, NOTICING FIRST:
//                                  seven pairs in a text before any rule
//   ACT 2  Les paires  (the Owns)
//     s04-savoir    cardDeck       savais / su, connaissais / connu (+ bounded
//                                  connu), a2.14's reframe quoted
//     s05-modaux    cardDeck       pouvais / pu / n'ai pas pu,
//                                  voulais / voulu / n'ai pas voulu
//     s06-devoir    cardDeck       devais / dû / il a dû oublier (supposition)
//     s07-etats     cardDeck       avais peur / eu peur, était / a été malade,
//                                  fallait / a fallu, croyais que, pensais que
//     s08-ecoute    listening      Abidjan phone call, 12 lines, hideLines
//     s09-sens      groupDrill     MEANING BEFORE FORM: did it happen?
//     s10-table     tapTable       six pairs, one screen (6 rows, the cap)
//   ACT 3  Les indices, revus
//     s11-indices   cardDeck       hier + both tenses, pendant + PC and its
//                                  habit counterexample, depuis + imparfait
//                                  (RECOGNITION ONLY), depuis + présent
//     s12-choix     examples       speaker's choice: décor or event, both right
//     s13-piege     trapDrill      the English reflex (knew / could / had to)
//     s14-flash     flashcards     from the meaning to the form
//   ACT 4  Ce que tu as vraiment dit  (error analysis)
//     s15-erreurs   commonErrors   grammatical, but says something unintended
//     s16-analyse   groupDrill     what the listener understands
//     s17-dictee    dictation
//   ACT 5  Production
//     s18-parler    scenario       explaining the week to Martin
//     s19-tache     task (DRAFT)   audio, 60-120 s: a plan that went wrong
//     s20-dire      practice       speak
//     s21-bilan     progressCheck
//   ACT 6  L'examen
//     s22-quiz      quiz           4 rounds, 28 questions
//     s23-revue     reviewDeck
//     s24-fin       roundup
//
//   Reference sheet `sheet-paires` (teach + table of all nine pairs + teach on
//   the cues). Four remediation drills, four error triggers.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un seul verbe, deux temps : deux sens. »
//   EN: One verb, two tenses: two meanings.
//   The question that picks the meaning (THE_TEST): « Un état, ou quelque
//   chose qui arrive ? »
//
//   Verbatim on screen in s01, s02, s06, s10, s13, s21, s24, and spoken
//   (`say`, French) on every section. corpus §B has the rejected ones.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS: the meaning-shift pairs (savoir, connaître, pouvoir, vouloir,
//   devoir incl. the supposition « il a dû », avoir peur, être malade,
//   falloir, croire/penser que), the cues revisited with both tenses, the
//   speaker's choice, and error analysis of grammatical-but-unintended tense.
//
//   QUOTES ONLY: b1.03's reframe (s11, s24), b1.01's and b1.02's (sheet),
//   all three IMPORTED from their corpus files (corpus §C). a2.14's reframe, imported (s04). a2.20's
//   participles and a2.13's modals are assumed, not re-taught: no form of
//   the passé composé or imparfait is drilled for its own sake.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. REFRAME OVERLAP. b1.03 hangs on « L'imparfait pose le décor. Le passé
//      composé fait avancer le film. » (imported, quoted in s11 and s24).
//      This one says « un état / quelque chose arrive », the same idea aimed
//      at the verbs whose ENGLISH changes. Learner-facing labels follow
//      b1.03's: « le décor » and « l'action », never « événement ». Keep both
//      reframes, or let b1.04 reuse b1.03's?
//   2. SETTLED: `say` is French (the reframe), fr-FR coach voice. The
//      voice id `coach-fr-FR` is a guess: SectionNarration has no lang
//      field and LessonAudio.coachVoice is free text. Confirm the real id.
//   3. SETTLED: .604 and .606 are reglossed separately and reused here.
//      Was: TWO SHIPPED GLOSSES CONTRADICT THIS LESSON. fr.a2.verbes.604 « J'ai su
//      la réponse. » = « I knew the answer. » and .606 « J'ai voulu partir. »
//      = « I wanted to leave. ». Not imported. Regloss to « I got the
//      answer. » / « I tried to leave. »? (.608 « I knew his brother. » is
//      imported: readable as the bounded sense, but borderline.)
//   4. a2.14's corpus says the meaning shift belongs to a2.05. It does not;
//      a2.05 never teaches it. That comment should point here.
//   5. SETTLED: theme `recits-au-passe`, ids .301-.334.
//   6. B1 CITATIONS. B1 units have no seq, so `unitRef` cannot label them.
//      They are cited by French title (« la leçon « ... » »). A2 units are
//      cited as « la leçon 8 de l'A2 », built from the same seq unitRef uses.
//   7. SCENE BUBBLES carry no question mark: the brief bans a spaced ? and
//      French typography requires the space, so every question in the scene
//      lives in narration or the choice prompt instead.
//   8. « j'ai cru que » (momentary false belief) is correct French and is
//      deliberately NOT taught as an error; only je croyais / je pensais are
//      taught. Worth a line somewhere, or leave for B2?
//   9. TASK RUBRIC is French-only (the learner reads it before speaking).
//      Should descriptors carry an EN gloss like the grammar prose?
//  10. VALIDATION. The scratch run drops `s19-tache` from `sections` AND from
//      act 5's section list, because validateLesson rejects an act naming a
//      section it cannot see. The act join will need the schema change too.

import type { Lesson, LessonSection, LessonDrill, SectionAudio, ReferenceSheet } from '../../../../ealch-v2/src/content/schema.ts';
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LESSON_TITLE, E, REFRAME, REFRAME_EN, THE_TEST,
  ALL_ROWS, IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, DICTEE_IDS, SPEAKABLE_IDS, SPEAKABLE_IMPORTS,
  A214_REFRAME, SAVOIR_CONNAITRE_UNIT, SAVOIR_CONNAITRE_REF, MODAUX_UNIT, MODAUX_REF,
  PARTICIPES_UNIT, PARTICIPES_REF, PC_UNIT, PC_ETRE_UNIT,
  B101_REFRAME, B102_REFRAME, B103_REFRAME, B101_REF, B102_REF, B103_REF,
} from './pc-imparfait-paires-corpus.ts';
import { PAIRES_TERMS } from './pc-imparfait-paires-terms.ts';

function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/** NOT `as const`: a readonly `speeds` tuple is not assignable to
 *  SectionAudio['speeds']. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 - LA SCÈNE
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE BREAKDOWN IS devais AGAINST dû. The listener hears « je devais
 *  venir », maps it to English « I had to come », and reports that Nadia
 *  came. Nobody is rude, nothing is mispronounced; the wrong fact travels.
 *
 *  NO QUESTION MARK OR EXCLAMATION MARK IN ANY BUBBLE (the brief). Martin's
 *  question lives in the narration. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: "Montréal, un mardi, à l'heure du dîner. Au Québec, le dîner, c'est le repas de midi. Nadia, une collègue de Lausanne, s'assoit à côté de toi. Ce matin, elle n'était pas à la réunion de neuf heures.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Nadia',
    fr: 'Désolée pour ce matin. Je devais venir à la réunion.',
    en: 'Sorry about this morning. I was supposed to come to the meeting.',
    respell: '[day-zoh-LAY poor suh mah-TEHⁿ · zhuh duh-VEH vuh-NEER ah lah ray-ü-NYOHⁿ]',
    stage: 'Elle a l\'air fatiguée.',
    size: 'md',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-04-scene' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Nadia',
    fr: "Mais l'école de mon fils a appelé à huit heures, et j'ai dû partir.",
    en: "But my son's school called at eight, and I had to leave.",
    respell: '[meh lay-KOL duh mohⁿ FEESS ah ah-PLAY ah üee-TUHR · ay ZHAY DÜ par-TEER]',
    stage: 'Elle regarde son téléphone. Le repas continue.',
    size: 'md',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-04-scene' },
  },
  {
    kind: 'narration',
    text: "Tu as entendu je devais, et dans ta tête, c'est I had to. Une heure plus tard, Martin, le chef d'équipe, passe à ton bureau. Il veut savoir si Nadia était à la réunion.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'Tu réponds à Martin. Quelle phrase dis-tu ?',
    size: 'lg',
    options: [
      { fr: 'Elle a dû venir, mais elle est partie tôt.', respell: '[el ah DÜ vuh-NEER · meh el eh par-TEE TOH]', en: 'She had to come, but she left early.', outcome: 'breaks', audio: AUDIO },
      { fr: 'Elle devait venir, mais elle a dû partir.', respell: '[el duh-VEH vuh-NEER · meh el ah DÜ par-TEER]', en: 'She was supposed to come, but she had to leave.', outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: "Martin écrit : absente, une urgence. C'est exactement ce qui s'est passé.",
      breaks: "Martin écrit : présente, partie tôt. Il va demander à Nadia le compte rendu d'une réunion où elle n'était pas.",
    },
  },
  {
    kind: 'break',
    heading: "je devais n'est pas I had to",
    // 39 words, French then the EN gloss. Core cap is 45.
    body: "je devais, c'est le plan : on ne sait pas si c'est arrivé. j'ai dû, c'est arrivé : elle est partie. L'anglais dit I had to pour les deux. EN: devais is the plan, outcome open; dû is what actually happened.",
    wrong: {
      fr: 'Elle a dû venir.',
      ipa: '/ɛl a dy və.niʁ/',
      respell: '[el ah DÜ vuh-NEER]',
      en: 'She had to come, and came. Or: she must have come.',
    },
    right: {
      fr: 'Elle devait venir.',
      ipa: '/ɛl də.vɛ və.niʁ/',
      respell: '[el duh-VEH vuh-NEER]',
      en: 'She was supposed to come.',
    },
    coach: `${REFRAME} Le plan de Nadia est un état. Son départ, c'est ce qui arrive.`,
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: "Un seul petit mot, et Martin avait une information fausse. La grammaire était correcte dans les deux phrases. C'est le sens qui a changé.",
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'Je devais venir',
  frSub: 'Une réunion manquée',
  setting: { place: "La cafétéria d'un bureau d'ingénieurs", city: 'Montréal', time: '12 h 15', ambience: 'des plateaux, des conversations, une machine à café' },
  beats: SCENE_BEATS,
  closing: { text: `${REFRAME} EN: ${REFRAME_EN}`, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'etat', 'moment'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'À la fin de la leçon',
  frSub: REFRAME,
  goals: [
    { t: 'Dire ce qui est arrivé, pas seulement le plan', s: "je devais ou j'ai dû : la paire de la scène" },
    { t: "Choisir entre je savais et j'ai su", s: 'et connaître, pouvoir, vouloir, avoir peur, être malade' },
    { t: 'Lire hier et pendant comme des indices', s: 'souvent, les deux temps sont possibles' },
    { t: 'Raconter un plan raté, à voix haute', s: 'une à deux minutes, à la fin de la leçon' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** NOTICING FIRST (the brief): seven pairs in 150 words, before any rule.
 *  `questionsInModal` so the questions cannot be answered by scanning.
 *
 *  Every glossary key appears in `text` VERBATIM and none is five words or
 *  more. One block: PassagePage splits on sentence ends, so no newline. */
const S03_LIRE: LessonSection = {
  type: 'reading',
  id: 's03-lire',
  layer: 'core',
  questionsInModal: true,
  title: 'De Dakar à Québec',
  frSub: 'Lis, puis réponds',
  text: "L'année dernière, je devais partir à Québec en septembre. Je voulais arriver avant l'hiver, parce que j'avais un peu peur du froid. Je ne connaissais personne là-bas, sauf une amie de mon oncle. Mais en août, j'ai su que mon visa n'était pas prêt. J'ai voulu appeler l'ambassade, mais la ligne était toujours occupée. Finalement, j'ai pu partir en novembre. À l'aéroport, il faisait moins vingt, et j'ai eu peur, je l'avoue. Je croyais que je n'allais jamais m'habituer. Mais le premier soir, j'ai connu Mathieu, le voisin d'en bas. Il habitait dans l'immeuble depuis dix ans et il savait tout : où acheter des bottes, comment prendre le bus. Il a dû me trouver un peu perdue, parce qu'il m'a invitée à souper. Je n'ai pas pu refuser.",
  glossary: [
    { word: "l'ambassade", en: 'the embassy', note: 'Le bureau du Canada à Dakar, pour les visas.' },
    { word: 'occupée', en: 'busy (a phone line)', note: 'La ligne sonne occupé : quelqu\'un parle déjà.' },
    { word: 'moins vingt', en: 'minus twenty', note: 'Moins vingt degrés. Normal en novembre à Québec.' },
    { word: "je l'avoue", en: 'I admit it', note: 'De avouer : dire une chose un peu difficile à dire.' },
    { word: "m'habituer", en: 'get used to it', note: "De s'habituer : trouver une chose normale, avec le temps." },
    { word: "d'en bas", en: 'downstairs', note: "Le voisin d'en bas habite à l'étage en dessous." },
    { word: 'des bottes', en: 'boots', note: "Pour la neige. Au Québec, on dit aussi des bottes d'hiver." },
    { word: 'souper', en: 'to have dinner', note: 'Au Québec, le souper est le repas du soir.' },
  ],
  questions: [
    { q: 'La narratrice est-elle partie en septembre ?', a: "Non. je devais partir en septembre, c'est le plan. Ce qui est arrivé : j'ai pu partir en novembre." },
    { q: "« J'ai voulu appeler l'ambassade. » A-t-elle essayé ?", a: "Oui. j'ai voulu = j'ai essayé. Elle a appelé, mais la ligne était occupée." },
    { q: 'Connaissait-elle Mathieu avant son arrivée ?', a: "Non. j'ai connu Mathieu = je l'ai rencontré, le premier soir." },
    { q: '« Il a dû me trouver un peu perdue. » Mathieu l\'a dit ?', a: "Non. C'est une supposition : il a dû = probablement. Elle le devine, parce qu'il l'invite." },
    { q: 'Trouve deux états et deux choses qui arrivent.', a: "États : j'avais peur du froid, je ne connaissais personne, il savait tout. Ce qui arrive : j'ai su, j'ai eu peur, j'ai connu Mathieu." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat', 'moment'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 - LES PAIRES  (the Owns)
 * ══════════════════════════════════════════════════════════════════════════ */

/** a2.14's reframe QUOTED, IMPORTED: it still picks the verb. What is new is
 *  that the tense now picks the meaning. Every card body ends with EN. */
const S04_SAVOIR: LessonSection = {
  type: 'cardDeck',
  id: 's04-savoir',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Savoir, connaître',
  frSub: "je savais, j'ai su",
  hint: 'Cinq cartes. Demande-toi : un état, ou quelque chose qui arrive ?',
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat', 'moment'],
  cards: [
    {
      head: 'Le test que tu connais',
      label: Cap(SAVOIR_CONNAITRE_REF),
      fr: 'savoir · connaître',
      body: `« ${A214_REFRAME} » Ce test choisit toujours le verbe. Nouveau : le temps change le sens. EN: That test still picks the verb; now the tense changes the meaning too.`,
    },
    {
      head: 'je savais',
      label: 'un état : tu le savais déjà',
      fr: "Je savais qu'elle partait.",
      sub: '[zhuh sah-VEH kel par-TEH]',
      body: "Le savoir était là, avant. Rien ne change dans la phrase. EN: The knowledge was already there. Nothing happens.",
    },
    {
      head: "j'ai su",
      label: "quelque chose arrive : tu l'apprends",
      fr: "Hier soir, j'ai su qu'elle partait.",
      sub: '[YEHR SWAHR · ZHAY SÜ kel par-TEH]',
      body: "À un moment précis, la nouvelle arrive. En anglais, ce n'est pas I knew. EN: At one moment the news reached you: I found out.",
    },
    {
      head: 'je connaissais',
      label: 'un état : tu la connaissais déjà',
      fr: 'Je connaissais déjà sa sœur.',
      sub: '[zhuh koh-neh-SEH day-ZHAH sah SUHR]',
      body: "Tu la connaissais avant l'histoire. Aucune rencontre dans la phrase. EN: You knew her before the story starts. No meeting happens.",
    },
    {
      head: "j'ai connu",
      label: 'la rencontre, ou une période finie',
      fr: "J'ai connu sa sœur à Dakar. / Il a connu des hivers très durs.",
      sub: '[ZHAY koh-NÜ sah SUHR ah dah-KAR]',
      body: "Première phrase : la rencontre a lieu. Deuxième : une période vue en entier, et finie. EN: I met her; and he went through hard winters, now over.",
    },
  ],
};

const S05_MODAUX: LessonSection = {
  type: 'cardDeck',
  id: 's05-modaux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Pouvoir, vouloir',
  frSub: "je pouvais, j'ai pu",
  hint: `Six cartes. Les verbes de ${MODAUX_REF}, au passé.`,
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'etat', 'moment'],
  cards: [
    {
      head: 'je pouvais',
      label: "c'était possible",
      fr: "Je pouvais venir, mais je n'avais pas envie.",
      sub: '[zhuh poo-VEH vuh-NEER · meh zhuh nah-VEH pah ahⁿ-VEE]',
      body: "je pouvais = j'étais capable. Es-tu venu ? Le verbe ne le dit pas. Ici, c'est la suite qui répond : non. EN: I was able to; the rest of the sentence says whether I came.",
    },
    {
      head: "j'ai pu",
      label: "tu as réussi",
      fr: "Finalement, j'ai pu venir.",
      sub: '[fee-nahl-MAHⁿ · ZHAY PÜ vuh-NEER]',
      body: "j'ai pu = j'ai réussi. Tu es venu, c'est sûr. EN: I managed to, and I came.",
    },
    {
      head: "je n'ai pas pu",
      label: "ça n'a pas marché",
      fr: "Je n'ai pas pu venir.",
      sub: '[zhuh nay pah PÜ vuh-NEER]',
      body: "Tu voulais, ou tu as essayé, et ça n'a pas marché. Tu n'es pas venu. EN: I failed to come.",
    },
    {
      head: 'je voulais',
      label: 'une envie, un projet',
      fr: "Je voulais t'appeler.",
      sub: '[zhuh voo-LEH tah-PLAY]',
      body: "Une envie. Souvent, on ne l'a pas fait, mais le verbe ne le dit pas. EN: A wish or a plan; the verb leaves the outcome open.",
    },
    {
      head: "j'ai voulu",
      label: 'tu as essayé',
      fr: "J'ai voulu t'appeler, mais ton téléphone était éteint.",
      sub: '[ZHAY voo-LÜ tah-PLAY]',
      body: "Ici, tu as pris le téléphone. j'ai voulu = j'ai essayé, ou j'ai décidé. EN: You actually tried. It can also mean I decided.",
    },
    {
      head: "il n'a pas voulu",
      label: 'un refus',
      fr: "Il n'a pas voulu signer.",
      sub: '[eel nah pah voo-LÜ see-NYAY]',
      body: "Pas une absence d'envie : un refus. Il a dit non, à un moment précis. EN: Not a lack of wish: he refused.",
    },
  ],
};

/** THE SCENE'S PAIR gets its own mission, and the supposition (« il a dû
 *  oublier ») is the third reading learners never expect. */
const S06_DEVOIR: LessonSection = {
  type: 'cardDeck',
  id: 's06-devoir',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Devoir',
  frSub: "je devais, j'ai dû",
  hint: REFRAME,
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-04-devoir' },
  say: REFRAME,
  terms: ['resultat'],
  cards: [
    {
      head: 'je devais',
      label: 'le plan, fait ou pas',
      fr: 'Je devais venir à la réunion.',
      sub: '[zhuh duh-VEH vuh-NEER ah lah ray-ü-NYOHⁿ]',
      body: "Un plan, une obligation. Es-tu venu ? Peut-être, peut-être pas. EN: Supposed to, or had to; whether you came is still open.",
    },
    {
      head: "j'ai dû",
      label: "obligé, et c'est fait",
      fr: "J'ai dû partir à huit heures.",
      sub: '[ZHAY DÜ par-TEER ah üee-TUHR]',
      body: "Une obligation, et tu es parti. EN: I had to, and I did.",
    },
    {
      head: 'il a dû',
      label: 'une supposition',
      fr: 'Il a dû oublier.',
      sub: '[eel ah DÜ oo-blee-AY]',
      body: "Autre sens : tu ne l'as pas vu, mais tu en es presque sûr. EN: A guess about the past: he must have forgotten.",
    },
    {
      head: 'la phrase de Nadia',
      label: 'le plan, puis ce qui arrive',
      fr: "Je devais venir, mais j'ai dû partir.",
      sub: '[zhuh duh-VEH vuh-NEER · meh ZHAY DÜ par-TEER]',
      body: "Deux temps, deux informations : le plan, puis ce qui s'est passé. EN: The plan, then what actually happened.",
    },
  ],
};

const S07_ETATS: LessonSection = {
  type: 'cardDeck',
  id: 's07-etats',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Peur, malade, falloir, croire',
  frSub: "j'avais peur, j'ai eu peur",
  hint: 'Six cartes. Même question à chaque fois.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat', 'moment', 'faux'],
  cards: [
    {
      head: "j'avais peur",
      label: 'un état qui dure',
      fr: "J'avais peur du chien.",
      sub: '[zhah-VEH PUHR dü SHYEHⁿ]',
      body: "La peur dure : avant, pendant, peut-être après. EN: A lasting fear of the dog.",
    },
    {
      head: "j'ai eu peur",
      label: 'la peur commence',
      fr: "Quand le chien a aboyé, j'ai eu peur.",
      sub: '[kahⁿ luh SHYEHⁿ ah ah-bwah-YAY · ZHAY Ü PUHR]',
      body: "La peur arrive à un moment : quand le chien aboie. EN: I got scared, at that moment.",
    },
    {
      head: 'il était malade',
      label: 'le décor du jour',
      fr: 'Ce jour-là, il était malade.',
      sub: '[suh zhoor-LAH · eel ay-TEH ma-LAD]',
      body: "On décrit la situation. On ne dit pas quand ça a commencé. EN: His state that day; when it started is not the point.",
    },
    {
      head: 'il a été malade',
      label: 'ça commence, ou une période finie',
      fr: 'Il a été malade après le repas.',
      sub: '[eel ah ay-TAY ma-LAD a-PREH luh ruh-PAH]',
      body: "Il est tombé malade, ou il a été malade un temps, et c'est fini. EN: He fell ill, or was ill for a period now over.",
    },
    {
      head: 'il fallait · il a fallu',
      label: 'le besoin, puis le besoin rempli',
      fr: 'Il fallait partir tôt. / Il a fallu partir tôt.',
      sub: '[eel fah-LEH par-TEER TOH] · [eel ah fah-LÜ par-TEER TOH]',
      body: "il fallait : c'était nécessaire, fait ou pas. il a fallu : nécessaire, et on l'a fait. EN: fallait states the need; a fallu says it was met.",
    },
    {
      head: 'je croyais que',
      label: "une idée d'avant, fausse",
      fr: "Je croyais que c'était fermé.",
      sub: '[zhuh krwah-YEH kuh say-TEH fehr-MAY]',
      body: "Tu le croyais, et ensuite tu as appris que c'était faux. Pareil avec je pensais que. EN: I thought so, and later found out I was wrong.",
    },
  ],
};

/** 12 LINES (the brief: 8 to 14). `hideLines: true`, or it is a reading
 *  exercise with a play button: ListeningView prints fr AND en otherwise.
 *
 *  CORRECT INDICES 1, 2, 0, 1, 2: scattered, never the same slot twice in a
 *  row. Mission options are NOT shuffled at runtime. */
const S08_ECOUTE: LessonSection = {
  type: 'listening',
  id: 's08-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le mariage à Abidjan',
  frSub: 'Écoute Awa et Koffi',
  lines: [
    { fr: 'Koffi, on t\'a attendu samedi. Tu devais venir au mariage.', en: 'Koffi, we waited for you on Saturday. You were supposed to come to the wedding.' },
    { fr: 'Je sais. Je voulais venir, vraiment.', en: 'I know. I wanted to come, really.' },
    { fr: 'Mon costume était prêt depuis une semaine.', en: 'My suit had been ready for a week.' },
    { fr: 'Mais vendredi soir, mon patron a appelé.', en: 'But on Friday evening my boss called.' },
    { fr: "J'ai dû aller à Yamoussoukro pour un client.", en: 'I had to go to Yamoussoukro for a client.' },
    { fr: 'Tu ne pouvais pas dire non ?', en: "Couldn't you say no?" },
    { fr: "J'ai voulu dire non. Il n'a pas voulu écouter.", en: 'I tried to say no. He refused to listen.' },
    { fr: 'Et le client, tu l\'as vu ?', en: 'And the client, did you see him?' },
    { fr: "Non. Il a dû oublier le rendez-vous. Il n'était pas là.", en: "No. He must have forgotten the appointment. He wasn't there." },
    { fr: "Donc tu n'as pas pu venir, et pour rien.", en: "So you couldn't come, and for nothing." },
    { fr: "Voilà. Et hier, j'ai su que la fête était magnifique.", en: 'Exactly. And yesterday I found out the party was wonderful.' },
    { fr: 'Elle était magnifique. La prochaine fois, tu viens.', en: 'It was wonderful. Next time, you come.' },
  ],
  questions: [
    {
      q: 'Koffi est-il allé au mariage ?',
      opts: ['Oui, mais en retard.', 'Non.', 'On ne sait pas.'],
      correct: 1,
      why: "tu devais venir ne dit rien. C'est tu n'as pas pu venir qui ferme la question. EN: devais leaves it open; n'as pas pu closes it.",
    },
    {
      q: "« J'ai voulu dire non. » Qu'a fait Koffi ?",
      opts: ['Il a eu envie de dire non, sans rien dire.', 'Il a dit oui tout de suite.', 'Il a essayé de dire non.'],
      correct: 2,
      why: "j'ai voulu = j'ai essayé. Il a parlé à son patron, et le patron a refusé. EN: He actually tried.",
    },
    {
      q: '« Il a dû oublier le rendez-vous. » Ça veut dire :',
      opts: ['Il a probablement oublié.', 'Il était obligé d\'oublier.', 'Il devait oublier.'],
      correct: 0,
      why: "il a dû + verbe peut être une supposition. Koffi ne sait pas, il devine. EN: must have forgotten.",
    },
    {
      q: 'Quand Koffi a-t-il appris que la fête était belle ?',
      opts: ['Samedi soir.', 'Hier.', 'Vendredi soir.'],
      correct: 1,
      why: "Et hier, j'ai su : la nouvelle arrive hier. EN: j'ai su marks the moment he found out.",
    },
    {
      q: '« Mon costume était prêt depuis une semaine. » Le costume :',
      opts: ['a été acheté samedi.', 'est devenu prêt vendredi.', 'était déjà prêt, depuis une semaine.'],
      correct: 2,
      why: "depuis + imparfait : un état qui durait déjà à ce moment-là. À reconnaître, pas à produire. EN: It had been ready for a week.",
    },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-04-ecoute' },
  say: REFRAME,
  terms: ['resultat', 'moment'],
};

/** MEANING BEFORE FORM (the brief): the learner reads the sentence and says
 *  what happened, before any drill asks for a form.
 *
 *  `note`, not `sub`: GroupDrillView builds the second line from note.
 *  Every item's `fr` is its row verbatim. Checks: 2, 0, 1. */
const S09_SENS: LessonSection = {
  type: 'groupDrill',
  id: 's09-sens',
  layer: 'core',
  size: 'lg',
  title: "Est-ce que c'est arrivé ?",
  frSub: 'Le sens avant la forme',
  groups: [
    {
      label: 'Le plan, ou ce qui est arrivé',
      items: [
        { fr: 'Je devais venir à la réunion.', itemId: E(312), note: 'venu ? on ne sait pas', en: 'I was supposed to come to the meeting.' },
        { fr: "J'ai dû partir à huit heures.", itemId: E(313), note: 'parti, oui', en: 'I had to leave at eight.' },
        { fr: "Je voulais t'appeler.", itemId: E(309), note: 'appelé ? on ne sait pas', en: 'I wanted to call you.' },
        { fr: "Finalement, j'ai pu venir.", itemId: E(307), note: 'venu, oui', en: 'In the end I managed to come.' },
        { fr: "J'ai oublié mon sac réutilisable, alors j'ai dû en acheter un.", itemId: 'fr.a2.marche.128', note: 'acheté, oui', en: 'I forgot my reusable bag, so I had to buy one.' },
      ],
      check: {
        q: 'Élodie dit : Je devais passer te voir. Est-elle passée ?',
        opts: ["Oui, c'est sûr.", "Non, c'est sûr.", 'La phrase ne le dit pas.'],
        correct: 2,
        why: "je devais donne le plan, pas le résultat. Pour savoir, il faut la suite. EN: devais gives the plan, not the outcome.",
      },
    },
    {
      label: 'Savoir ou apprendre, connaître ou rencontrer',
      items: [
        { fr: "Je savais qu'elle partait.", itemId: E(301), note: 'tu le savais déjà', en: 'I knew she was leaving.' },
        { fr: "Hier soir, j'ai su qu'elle partait.", itemId: E(302), note: 'tu l\'as appris hier soir', en: 'Last night I found out she was leaving.' },
        { fr: 'Je connaissais déjà sa sœur.', itemId: E(303), note: 'avant l\'histoire', en: 'I already knew her sister.' },
        { fr: "J'ai connu sa sœur à Dakar.", itemId: E(304), note: 'la rencontre', en: 'I met her sister in Dakar.' },
      ],
      check: {
        q: "Tu veux dire : I met him in Lausanne. Quelle phrase ?",
        opts: ["Je l'ai connu à Lausanne.", 'Je le connaissais à Lausanne.'],
        correct: 0,
        why: "La rencontre, c'est quelque chose qui arrive : passé composé. La deuxième phrase dit que tu le connaissais déjà là-bas. EN: met is an event.",
      },
    },
    {
      label: 'Un état, ou un moment',
      items: [
        { fr: "J'avais peur du chien.", itemId: E(315), note: 'la peur dure', en: 'I was scared of the dog.' },
        { fr: "Quand le chien a aboyé, j'ai eu peur.", itemId: E(316), note: 'la peur commence', en: 'When the dog barked, I got scared.' },
        { fr: 'Ce jour-là, il était malade.', itemId: E(317), note: 'le décor', en: 'That day he was ill.' },
        { fr: 'Il a été malade après le repas.', itemId: E(318), note: 'ça commence', en: 'He fell ill after the meal.' },
      ],
      check: {
        q: 'I got scared when the lights went out. Quel verbe ?',
        opts: ["j'avais peur", "j'ai eu peur"],
        correct: 1,
        why: "got scared : la peur commence à un moment précis. EN: The fear starts, so passé composé.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'etat', 'moment'],
};

/** SIX ROWS, THE CEILING. Three columns, short cells (roughly twelve
 *  characters of bodySm fit per column on a Pixel 6). être malade, falloir
 *  and croire live in the reference sheet. */
const S10_TABLE: LessonSection = {
  type: 'tapTable',
  id: 's10-table',
  layer: 'core',
  title: 'Six paires, un écran',
  frSub: 'Touche une ligne',
  cols: ['Verbe', 'Imparfait', 'Passé composé'],
  rows: [
    {
      cells: ['savoir', 'je savais', "j'ai su"],
      say: "Je savais qu'elle partait.",
      detail: { title: 'savoir', body: `${REFRAME} je savais : tu le savais déjà. j'ai su : tu l'as appris. EN: knew against found out.`, say: "Hier soir, j'ai su qu'elle partait." },
    },
    {
      cells: ['connaître', 'je connaissais', "j'ai connu"],
      say: 'Je connaissais déjà sa sœur.',
      detail: { title: 'connaître', body: "je connaissais : tu la connaissais déjà. j'ai connu : la rencontre, ou une période finie. EN: knew against met, or went through.", say: "J'ai connu sa sœur à Dakar." },
    },
    {
      cells: ['pouvoir', 'je pouvais', "j'ai pu"],
      say: "Je pouvais venir, mais je n'avais pas envie.",
      detail: { title: 'pouvoir', body: "je pouvais : c'était possible, résultat ouvert. j'ai pu : tu as réussi. je n'ai pas pu : échec. EN: was able, managed to, failed to.", say: "Finalement, j'ai pu venir." },
    },
    {
      cells: ['vouloir', 'je voulais', "j'ai voulu"],
      say: "Je voulais t'appeler.",
      detail: { title: 'vouloir', body: "je voulais : une envie. j'ai voulu : tu as essayé, ou décidé. je n'ai pas voulu : un refus. EN: wanted, tried, refused.", say: "Il n'a pas voulu signer." },
    },
    {
      cells: ['devoir', 'je devais', "j'ai dû"],
      say: 'Je devais venir à la réunion.',
      detail: { title: 'devoir', body: "je devais : le plan, fait ou pas. j'ai dû : obligé, et fait. il a dû oublier : une supposition. EN: supposed to, had to and did, must have.", say: "Je devais venir, mais j'ai dû partir." },
    },
    {
      cells: ['avoir peur', "j'avais peur", "j'ai eu peur"],
      say: "J'avais peur du chien.",
      detail: { title: 'avoir peur', body: "j'avais peur : la peur dure. j'ai eu peur : elle commence. EN: was scared against got scared.", say: "Quand le chien a aboyé, j'ai eu peur." },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat', 'moment', 'resultat'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 - LES INDICES, REVUS
 * ══════════════════════════════════════════════════════════════════════════ */

/** b1.03 OWNS THE CUES. This mission revisits them at depth: every cue it
 *  shows comes with its counterexample (the brief).
 *
 *  depuis + imparfait is RECOGNITION ONLY. No typed question, no dictée,
 *  no practice line, and the task does not ask for it.
 *
 *  b1.03's reframe is quoted verbatim, imported (corpus §C). */
const S11_INDICES: LessonSection = {
  type: 'cardDeck',
  id: 's11-indices',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Hier, pendant, depuis',
  frSub: 'Des indices, pas des règles',
  hint: 'Sept cartes. Le même mot avec les deux temps.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice'],
  cards: [
    {
      head: 'Ce que tu sais déjà',
      label: Cap(B103_REF),
      body: `« ${B103_REFRAME} » Ici, on regarde les indices de plus près. EN: The previous lesson's rule, now tested against time words.`,
    },
    {
      head: 'hier + imparfait',
      label: 'la pluie en décor',
      fr: 'Hier, il pleuvait.',
      sub: '[YEHR · eel pluh-VEH]',
      body: "hier ne choisit pas le temps. Ici, la pluie est le décor : on attend la suite. EN: hier does not pick the tense; here the rain is background.",
    },
    {
      head: 'hier + passé composé',
      label: 'la pluie comme un fait',
      fr: 'Hier, il a plu.',
      sub: '[YEHR · eel ah PLÜ]',
      body: "Même mot, autre temps. Les deux phrases sont correctes. EN: Same word, other tense, both correct: the rain is reported as an event.",
    },
    {
      head: 'pendant + durée',
      label: 'une durée finie',
      fr: 'Il a lu pendant deux heures.',
      sub: '[eel ah LÜ pahⁿ-DAHⁿ duh ZUHR]',
      body: "Une durée avec un début et une fin : en général, le passé composé. EN: A closed length of time usually takes the passé composé.",
    },
    {
      head: 'et le contre-exemple',
      label: 'une habitude',
      fr: 'Tous les soirs, il lisait pendant deux heures.',
      sub: '[too lay SWAHR · eel lee-ZEH pahⁿ-DAHⁿ duh ZUHR]',
      body: "Même pendant, mais tous les soirs : une habitude, donc l'imparfait. EN: A habit brings the imparfait back. The meaning beats the cue.",
    },
    {
      head: 'depuis + imparfait',
      label: 'à reconnaître seulement',
      fr: 'Il habitait à Québec depuis deux ans quand il a rencontré Léa.',
      body: "Un état qui durait déjà, jusqu'à un moment du passé. Tu dois le comprendre, pas encore le dire. EN: He had been living there. Recognise it; you do not need to produce it yet.",
    },
    {
      head: 'depuis + présent',
      label: 'tu connais déjà',
      fr: 'Je le connais depuis longtemps.',
      body: "Au présent, l'état dure encore aujourd'hui. À l'imparfait, il durait à ce moment-là. EN: Present: still true now. Imparfait: true back then.",
    },
  ],
};

/** THE SPEAKER'S CHOICE. Both versions of each pair are right. The notes say
 *  what the choice SHOWS, never which is correct. Two published a2 rows make
 *  the same point about the same rain. */
const S12_CHOIX: LessonSection = {
  type: 'examples',
  id: 's12-choix',
  layer: 'core',
  title: 'Décor ou action',
  frSub: "C'est ton choix",
  examples: [
    { fr: 'Ce soir-là, il neigeait.', en: 'That evening it was snowing.', note: 'le décor : on attend la suite de l\'histoire' },
    { fr: 'Ce soir-là, il a neigé.', en: 'That evening it snowed.', note: 'un fait de la soirée : correct aussi' },
    { fr: 'Comme il pleuvait, nous avons annulé la randonnée.', en: 'Since it was raining, we cancelled the hike.', note: 'la pluie en décor, l\'annulation en action' },
    { fr: "Il a plu, donc nous sommes restés à l'intérieur.", en: 'It rained, so we stayed inside.', note: 'la même pluie, racontée comme un fait' },
    { fr: 'Ce jour-là, il était malade.', en: 'That day he was ill.', note: 'on montre la situation' },
    { fr: 'Il a été malade après le repas.', en: 'He fell ill after the meal.', note: 'on montre le moment où ça commence' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['choix', 'indice'],
};

/** THE ENGLISH REFLEX. English has one past for knew / could / had to /
 *  wanted, so the learner picks by habit. `promptSound` is the reflex (a
 *  grammatical sentence that says the wrong thing), `fr` the intended one.
 *
 *  lesson-contract shape: rule > cards > audio > drill, `swipe`, an audio
 *  spec, a `say`, a GATED drill step, and no `size` on a stepped trapDrill.
 *
 *  DRILL CORRECT INDICES 1,0,0,1,1,0,1,0: never the same slot three times
 *  running. Mission options are not shuffled. */
const S13_PIEGE: LessonSection = {
  type: 'trapDrill',
  id: 's13-piege',
  layer: 'core',
  swipe: true,
  title: "L'anglais ne choisit pas",
  frSub: 'knew, could, had to',
  rule: {
    title: 'Un mot anglais, deux phrases françaises',
    // 41 words.
    body: `I knew, I could, I had to : l'anglais a une seule forme. Le français en a deux, avec deux sens. ${REFRAME} EN: English has one form; ask which meaning you want.`,
  },
  cards: [
    { promptLabel: 'Tu le savais depuis longtemps.', promptSound: "J'ai su qu'il mentait.", fr: "Je savais qu'il mentait.", ipa: '/ʒə sa.vɛ kil mɑ̃.tɛ/', tip: "Rien n'arrive : tu le savais déjà. EN: No news arrives; you already knew." },
    { promptLabel: 'Obligé, et tu es parti.', promptSound: 'Je devais partir.', fr: "J'ai dû partir.", ipa: '/ʒe dy paʁ.tiʁ/', tip: "je devais ne dit pas que tu es parti. EN: devais does not say you left." },
    { promptLabel: 'La porte était bloquée, et tu es entré.', promptSound: 'Je pouvais entrer.', fr: "J'ai pu entrer.", ipa: '/ʒe py ɑ̃.tʁe/', tip: "Tu as réussi : j'ai pu. EN: You managed it." },
    { promptLabel: 'Il a dit non.', promptSound: 'Il ne voulait pas signer.', fr: "Il n'a pas voulu signer.", ipa: '/il na pa vu.ly si.ɲe/', tip: "Le refus est un moment. ne voulait pas décrit seulement son envie. EN: The refusal is an event." },
    { promptLabel: 'La peur arrive, tout à coup.', promptSound: "J'avais peur.", fr: "J'ai eu peur.", ipa: '/ʒe y pœʁ/', tip: "La peur commence à un moment. EN: I got scared." },
    { promptLabel: 'La première rencontre, à Dakar.', promptSound: 'Je connaissais sa sœur à Dakar.', fr: "J'ai connu sa sœur à Dakar.", ipa: '/ʒe kɔ.ny sa sœʁ a da.kaʁ/', tip: "La rencontre a lieu à Dakar. EN: I met her there." },
  ],
  drill: [
    { promptSay: "Hier soir, j'... que tu déménageais. (tu l'as appris hier)", opts: ['savais', 'ai su'], correct: 1 },
    { promptSay: 'Je ... venir, mais finalement je suis resté.', opts: ['devais', 'ai dû'], correct: 0 },
    { promptSay: 'Quand elle est entrée, il ... déjà la réponse.', opts: ['savait', 'a su'], correct: 0 },
    { promptSay: "La porte était bloquée, mais j'... entrer par la fenêtre.", opts: ['pouvais', 'ai pu'], correct: 1 },
    { promptSay: "Il ... oublier : il n'est pas venu.", opts: ['devait', 'a dû'], correct: 1 },
    { promptSay: "Enfant, j'... peur du noir.", opts: ['avais', 'ai eu'], correct: 0 },
    { promptSay: "J'... Mathieu à une fête, en 2019.", opts: ['connaissais', 'ai connu'], correct: 1 },
    { promptSay: 'À cette époque, je ... tout le quartier.', opts: ['connaissais', 'ai connu'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un mot anglais, deux phrases françaises' },
    { label: 'Six phrases', kind: 'cards', title: 'Le réflexe, puis la bonne phrase' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-04-piege' },
  say: REFRAME,
  terms: ['etat', 'moment'],
};

/** FROM THE MEANING TO THE FORM, which is the direction production runs. */
const S14_FLASH: LessonSection = {
  type: 'flashcards',
  id: 's14-flash',
  layer: 'core',
  title: 'Du sens à la forme',
  frSub: 'Lis le sens, dis la forme',
  cards: [
    { front: 'I found out (savoir)', back: "j'ai su", say: "Hier soir, j'ai su qu'elle partait." },
    { front: 'I already knew (savoir)', back: 'je savais', say: "Je savais qu'elle partait." },
    { front: 'I met her (connaître)', back: "j'ai connu sa sœur", say: "J'ai connu sa sœur à Dakar." },
    { front: 'I managed to come (pouvoir)', back: "j'ai pu venir", say: "Finalement, j'ai pu venir." },
    { front: "I couldn't come, and didn't (pouvoir)", back: "je n'ai pas pu venir", say: "Je n'ai pas pu venir." },
    { front: 'I tried to call (vouloir)', back: "j'ai voulu appeler", say: "J'ai voulu t'appeler, mais ton téléphone était éteint." },
    { front: 'He refused to sign (vouloir)', back: "il n'a pas voulu signer", say: "Il n'a pas voulu signer." },
    { front: 'I was supposed to come (devoir)', back: 'je devais venir', say: 'Je devais venir à la réunion.' },
    { front: 'He must have forgotten (devoir)', back: 'il a dû oublier', say: 'Il a dû oublier.' },
    { front: 'I got scared (avoir peur)', back: "j'ai eu peur", say: "Quand le chien a aboyé, j'ai eu peur." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['moment', 'resultat'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 - CE QUE TU AS VRAIMENT DIT  (error analysis)
 * ══════════════════════════════════════════════════════════════════════════ */

/** EVERY `wrong` HERE IS GRAMMATICAL. That is the point: the sentence is
 *  correct French and says something the speaker did not mean. Each `why`
 *  says what the listener hears, then glosses. `swipe: true` is mandatory
 *  (MissionSection branches on it; without it the screen is blank). */
const S15_ERREURS: LessonSection = {
  type: 'commonErrors',
  id: 's15-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Correct, mais pas ce que tu voulais dire',
  errors: [
    {
      wrong: 'Samedi, je devais travailler.',
      right: "Samedi, j'ai dû travailler.",
      why: "Tu veux dire que tu as travaillé. Avec je devais, ton ami peut croire que tu étais libre finalement. EN: devais does not say you worked; dû does.",
    },
    {
      wrong: "J'ai su qu'il était marié.",
      right: "Je savais qu'il était marié.",
      why: "Tu le savais depuis le début. j'ai su dit que tu l'as appris à un moment, et on va te demander quand. EN: su means you found out at some point.",
    },
    {
      wrong: "Je l'ai connu pendant dix ans.",
      right: 'Je le connais depuis longtemps.',
      why: "Tu parles d'un ami d'aujourd'hui. Le passé composé avec pendant ferme la période : on comprend qu'il est parti, ou mort. EN: A closed period suggests the friendship is over.",
    },
    {
      wrong: "Quand j'étais petit, j'ai eu peur des chiens.",
      right: "Quand j'étais petit, j'avais peur des chiens.",
      why: "Tu parles de toute ton enfance. j'ai eu peur raconte une seule fois, un moment précis. EN: eu peur is one fright; childhood fear is a state.",
    },
    {
      wrong: "Je voulais t'aider, alors j'ai appelé ton frère.",
      right: "J'ai voulu t'aider, alors j'ai appelé ton frère.",
      why: "Les deux sont possibles ici, mais j'ai voulu montre mieux que tu as agi. je voulais met l'accent sur l'envie. EN: Both work; voulu stresses the attempt, voulais the wish.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'moment'],
};

/** WHAT THE LISTENER UNDERSTANDS. Four learners, four sentences that are
 *  grammatical and misleading. Checks 1, 0, 2, 0. No itemId: these lines are
 *  learner errors, not corpus rows, and must never become cards. */
const S16_ANALYSE: LessonSection = {
  type: 'groupDrill',
  id: 's16-analyse',
  layer: 'core',
  size: 'lg',
  title: 'Ce que l\'autre comprend',
  frSub: 'Analyse quatre phrases',
  groups: [
    {
      label: 'Maya, à Bruxelles',
      items: [{ fr: "Je devais t'appeler hier.", note: 'Maya voulait dire : je t\'ai appelé, c\'était une obligation.' }],
      check: {
        q: "Qu'est-ce que Léo comprend ?",
        opts: ['Maya a appelé.', "Maya n'a peut-être pas appelé.", 'Maya va appeler demain.'],
        correct: 1,
        why: "je devais laisse la question ouverte. Pour dire l'appel, Maya dit : j'ai dû t'appeler. EN: devais leaves the call in doubt.",
      },
    },
    {
      label: 'Sam, à Toronto',
      items: [{ fr: "J'ai connu ta mère pendant vingt ans.", note: 'Sam voulait dire : je connais ta mère depuis vingt ans.' }],
      check: {
        q: 'Que laisse entendre la phrase de Sam ?',
        opts: ['La relation est finie.', 'Ils se sont rencontrés il y a vingt ans.', 'Ils se connaissent encore.'],
        correct: 0,
        why: "Une période fermée au passé composé : c'est fini. Pour une amitié qui continue : je la connais depuis vingt ans. EN: It sounds over.",
      },
    },
    {
      label: 'Omar, à Dakar',
      items: [{ fr: 'Je ne voulais pas signer.', note: 'Omar voulait dire : j\'ai refusé de signer.' }],
      check: {
        q: 'Quelle phrase dit le refus ?',
        opts: ['Je ne voulais pas signer.', 'Je ne devais pas signer.', "Je n'ai pas voulu signer."],
        correct: 2,
        why: "je ne voulais pas décrit l'envie. je n'ai pas voulu dit le refus, à un moment précis. EN: n'ai pas voulu is the refusal.",
      },
    },
    {
      label: 'Inès, à Genève',
      items: [{ fr: 'Il devait oublier la clé.', note: 'Inès voulait dire : il a probablement oublié la clé.' }],
      check: {
        q: 'Quelle phrase dit la supposition ?',
        opts: ['Il a dû oublier la clé.', 'Il devait oublier la clé.', 'Il oubliait la clé.'],
        correct: 0,
        why: "La supposition sur un fait passé, c'est il a dû. il devait oublier ressemble à un plan bizarre. EN: must have forgotten is a dû.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'moment'],
};

const S17_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's17-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Six phrases',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 - PRODUCTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** Two alts and a userEn on every turn (scenario.logic.test.ts, seed-wide).
 *  No conditional and no subjunctive in any line the learner says. */
const S18_PARLER: LessonSection = {
  type: 'scenario',
  id: 's18-parler',
  layer: 'core',
  title: 'Explique ta semaine à Martin',
  frSub: 'Six échanges',
  setting: "Montréal, le vendredi. Martin, le chef d'équipe, fait le point sur la semaine avec toi. Il tutoie tout le monde.",
  turns: [
    {
      ai: "Nadia m'a dit que tu étais absent jeudi. Qu'est-ce qui s'est passé ?",
      en: 'Nadia told me you were away on Thursday. What happened?',
      user: "Je devais venir, mais j'ai dû aller chez le médecin.",
      userEn: 'I was supposed to come, but I had to go to the doctor. (The plan, then what happened.)',
      alts: [
        { fr: "J'ai dû aller chez le médecin.", en: 'I had to go to the doctor.' },
        { fr: "Je devais venir, mais je n'ai pas pu.", en: "I was supposed to come, but I couldn't." },
      ],
    },
    {
      ai: 'Et le rapport ? Tu devais me l\'envoyer mercredi.',
      en: 'And the report? You were supposed to send it to me on Wednesday.',
      user: "J'ai voulu l'envoyer, mais le serveur ne marchait pas.",
      userEn: 'I tried to send it, but the server was down. (voulu: you tried.)',
      alts: [
        { fr: "Je n'ai pas pu l'envoyer. Le serveur ne marchait pas.", en: "I couldn't send it. The server was down." },
        { fr: "J'ai voulu te l'envoyer, mais il y avait un problème.", en: 'I tried to send it to you, but there was a problem.' },
      ],
    },
    {
      ai: 'Tu savais que le client voulait une autre date ?',
      en: 'Did you know the client wanted another date?',
      user: "Non, je ne le savais pas. Je l'ai su ce matin.",
      userEn: "No, I didn't know. I found out this morning. (savais, then su.)",
      alts: [
        { fr: "Non. Je l'ai su ce matin.", en: 'No. I found out this morning.' },
        { fr: "Non, je l'ai appris ce matin.", en: 'No, I learned it this morning.' },
      ],
    },
    {
      ai: "Et Julie n'est pas venue non plus.",
      en: "And Julie didn't come either.",
      user: "Elle a dû oublier. Elle n'a pas répondu à mes messages.",
      userEn: "She must have forgotten. She didn't answer my messages. (a dû: a guess.)",
      alts: [
        { fr: 'Elle a dû oublier la réunion.', en: 'She must have forgotten the meeting.' },
        { fr: 'Je ne sais pas. Elle a dû oublier.', en: "I don't know. She must have forgotten." },
      ],
    },
    {
      ai: 'Et la présentation de vendredi, ça s\'est bien passé ?',
      en: "And Friday's presentation, did it go well?",
      user: "Oui. J'avais un peu peur, mais j'ai pu tout finir.",
      userEn: 'Yes. I was a bit scared, but I managed to finish everything. (A state, then something that happened.)',
      alts: [
        { fr: "Oui, j'ai pu tout présenter.", en: 'Yes, I managed to present everything.' },
        { fr: "Oui. J'avais peur, mais ça s'est bien passé.", en: 'Yes. I was scared, but it went well.' },
      ],
    },
    {
      ai: 'Parfait. Merci pour les explications.',
      en: 'Perfect. Thanks for explaining.',
      user: 'De rien. La prochaine fois, je te préviens avant.',
      userEn: "You're welcome. Next time I'll let you know beforehand.",
      alts: [
        { fr: 'Pas de problème. Je te préviens la prochaine fois.', en: "No problem. I'll let you know next time." },
        { fr: 'Merci à toi. Bonne fin de semaine.', en: 'Thanks to you. Have a good weekend.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'etat', 'moment'],
};

/** THE LESSON OUTCOME, TESTED OPENLY. Draft `task` type (_task-section.ts):
 *  not in schema.ts, rendered by nothing yet. Formative: criteria shown
 *  BEFORE speaking, `ref` on every watchFor so feedback can send the
 *  learner back to the section that fixes it.
 *
 *  THE MODEL ANSWER is ~150 words, which is about 70 seconds at a B1
 *  learner's pace. Five meaning-shift verbs, deliberately: devais, voulais,
 *  su, voulu, pu, n'a pas voulu, a dû (supposition). */
const S19_TACHE: TaskSection = {
  type: 'task',
  id: 's19-tache',
  title: 'Raconte un plan raté',
  frSub: 'Ta tâche, à voix haute',
  brief: "Pense à un jour où un plan n'a pas marché : un voyage, un rendez-vous, un déménagement, une réunion. Tu le racontes à voix haute, comme à un collègue, pendant une à deux minutes.",
  briefEn: 'Think of a day when a plan went wrong. Tell it out loud, as you would to a colleague, in one to two minutes.',
  produce: "Raconte ce plan raté : sépare le décor et l'action, et utilise au moins trois verbes des paires, choisis pour leur sens.",
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 120 },
  rubric: {
    criteria: [
      {
        key: 'paires',
        label: 'Les verbes des paires, choisis pour le sens',
        maxPoints: 4,
        descriptors: [
          '0 : aucun verbe des paires, ou un seul.',
          '1 : deux verbes des paires, ou trois dont un dit autre chose que ton histoire.',
          '2 : trois verbes des paires, et le temps de chacun dit ce que tu veux dire.',
          '3 : trois ou plus, bien choisis, dont au moins une paire complète (je devais puis j\'ai dû, par exemple).',
          '4 : quatre ou plus, bien choisis, et au moins un sens que l\'anglais ne montre pas : j\'ai su, j\'ai voulu, il a dû (supposition).',
        ],
      },
      {
        key: 'decor',
        label: "Le décor et l'action",
        maxPoints: 4,
        descriptors: [
          "0 : tout au même temps. On ne voit pas ce qui arrive.",
          "1 : quelques verbes au bon temps, mais le décor et l'action se mélangent.",
          "2 : le décor à l'imparfait et l'action au passé composé, la plupart du temps.",
          "3 : la séparation est claire du début à la fin, et l'histoire avance.",
          "4 : clair partout, et tu utilises un indice (hier, pendant, ce jour-là) sans le traiter comme une règle.",
        ],
      },
      {
        key: 'formes',
        label: 'Les formes',
        maxPoints: 3,
        descriptors: [
          "0 : beaucoup de formes fausses : auxiliaire, participe ou terminaison.",
          "1 : des erreurs sur les participes des paires (pouvu, devu, connaissé).",
          "2 : quelques erreurs, mais elles ne changent pas le sens.",
          "3 : les formes sont justes, ou presque.",
        ],
      },
      {
        key: 'fil',
        label: 'Le fil et la fin',
        maxPoints: 3,
        descriptors: [
          "0 : des phrases sans ordre, et pas de fin.",
          "1 : un ordre, mais on ne sait pas comment le plan finit.",
          "2 : un ordre clair, des mots de liaison (mais, alors, finalement), et une fin.",
          "3 : clair, facile à suivre, et la fin dit ce que le plan est devenu.",
        ],
      },
    ],
  },
  scaffold: ['Ce jour-là, ...', 'Je devais ...', 'Je voulais ...', 'Mais ...', 'Alors ...', 'Finalement, ...'],
  modelAnswer: "C'était en février, l'année dernière. Je travaillais à Ottawa et je devais aller à Montréal pour une présentation importante. Je voulais prendre le train de sept heures, parce que la présentation commençait à dix heures. Ce matin-là, il neigeait beaucoup. À la gare, j'ai su que le train était annulé. J'ai voulu louer une voiture, mais il n'y en avait plus. J'avais un peu peur, parce que le client était très exigeant. Alors j'ai appelé ma collègue Nadia. Elle pouvait présenter à ma place, mais elle ne connaissait pas bien le dossier. Finalement, j'ai pu faire la présentation en vidéo, depuis un café de la gare. Le client n'a pas voulu rester pour les questions : il est parti à onze heures. Mais le lendemain, il a signé le contrat. Il a dû aimer la présentation.",
  modelAnswerEn: "It was in February last year. I was working in Ottawa and I was supposed to go to Montreal for an important presentation. I wanted to take the seven o'clock train, because the presentation started at ten. That morning it was snowing heavily. At the station I found out the train was cancelled. I tried to rent a car, but there were none left. I was a bit scared, because the client was very demanding. So I called my colleague Nadia. She could have presented in my place, but she didn't know the file well. In the end I managed to give the presentation by video, from a café in the station. The client refused to stay for the questions: he left at eleven. But the next day he signed the contract. He must have liked the presentation.",
  watchFor: [
    { pattern: "je devais / il devait used as if the thing happened, with nothing after it saying what happened", criterion: 'paires', feedback: "Avec je devais, on ne sait pas si c'est arrivé. Si c'est arrivé, dis j'ai dû, ou raconte la suite.", ref: 's06-devoir' },
    { pattern: "j'ai su for something the speaker already knew before the story", criterion: 'paires', feedback: "j'ai su veut dire : je l'ai appris à ce moment-là. Si tu le savais déjà, dis je savais.", ref: 's04-savoir' },
    { pattern: "je voulais / je pouvais where the story then shows an actual attempt or success, and the speaker meant it happened", criterion: 'paires', feedback: "Tu as essayé ou réussi ? Dis j'ai voulu, j'ai pu. je voulais et je pouvais laissent la question ouverte.", ref: 's05-modaux' },
    { pattern: "je l'ai connu(e) pendant + duration for a relationship that still continues", criterion: 'paires', feedback: "Le passé composé ferme la période. Pour une relation qui continue : je le connais depuis...", ref: 's15-erreurs' },
    { pattern: "background (weather, time, lasting feelings, what was going on) in passé composé throughout, or every event in imparfait so the story never moves", criterion: 'decor', feedback: "Sépare le décor (imparfait) et ce qui arrive (passé composé), pour que l'histoire avance.", ref: 's12-choix' },
    { pattern: "a time word treated as a switch: hier or pendant forcing one tense against the meaning", criterion: 'decor', feedback: "hier et pendant sont des indices, pas des règles. Choisis le temps pour le sens.", ref: 's11-indices' },
    { pattern: "wrong participle or auxiliary on a pair verb: pouvu, devu, voulé, connaissé, je suis dû, j'ai été peur", criterion: 'formes', feedback: "Revois les participes : pu, dû, voulu, su, connu, eu, été.", ref: 's10-table' },
    { pattern: "the story stops with no outcome: the listener cannot tell whether the plan was saved or lost", criterion: 'fil', feedback: "Dis comment ça finit : finalement, au bout du compte, le lendemain.", ref: 's18-parler' },
  ],
  graderNotes: [
    'Grading is transcript-based. The response is transcribed by speech-to-text and graded on the transcript only. Pronunciation, accent and fluency are not scored.',
    'Never mark a transcription artefact as a form error: je savais / il savait, a / à, é / ai endings and missing accents are homophones or STT noise, not learner mistakes.',
    'A meaning-shift verb counts only when its tense matches the meaning the story gives it. Count distinct verbs, not tokens: je devais twice is one.',
    'Décor or event is a speaker\'s choice (s12-choix). Accept a tense that differs from the model whenever the story supports it; only mark a tense wrong when it says something the story contradicts.',
    'depuis + imparfait is recognition-only in this lesson. Do not require it; accept it if correct.',
    'Do not require or reward the conditional, subjunctive or plus-que-parfait. Accept them if correct.',
    'Under 60 seconds: cap `fil` at 1. Over 120 seconds: grade the first 120 seconds.',
  ],
};

/** `skill: 'speak'` needs voiceflash on every item: authored rows except
 *  the recognition-only .327, plus a2.20's seven participle rows. */
const S20_DIRE: LessonSection = {
  type: 'practice',
  id: 's20-dire',
  layer: 'core',
  title: 'Dis les paires, à voix haute',
  frSub: 'Répète et compare',
  skill: 'speak',
  itemIds: [...SPEAKABLE_IDS, ...SPEAKABLE_IMPORTS],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat', 'moment'],
};

const S21_BILAN: LessonSection = {
  type: 'progressCheck',
  id: 's21-bilan',
  layer: 'core',
  title: 'Où tu en es',
  // progressCheck is passage prose: exempt from the 45-word core cap.
  body: `${REFRAME} Tu sais maintenant que je devais ne dit pas si c'est arrivé, que j'ai su veut dire je l'ai appris, et que hier ne choisit pas le temps pour toi. Le plus difficile : personne ne te corrigera, parce que ta phrase est grammaticale. Relis les cartes de devoir et de vouloir, et dis chaque phrase en anglais sans regarder. EN: The hard part is that nobody will correct you, because the sentence is grammatical. Say each pair in English before moving on.`,
  stats: [
    { k: 'Paires', v: 'neuf verbes, deux sens chacun' },
    { k: 'La question', v: THE_TEST },
    { k: 'Les indices', v: 'hier, pendant, depuis : pas des règles' },
    { k: 'Ton choix', v: 'décor ou action, les deux sont justes' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 - L'EXAMEN
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ. 28 questions in four rounds (7/8/7/6).
 *
 *    mcq 15 · typeIn 7 · errorSpot 3 · listenChoose 3  (closed: 18)
 *
 *  CORRECT SLOTS over closed questions: 0 x6, 1 x6, 2 x6 (quiz-spread caps
 *  any slot at 40%). The quiz shuffles at runtime anyway.
 *
 *  Every typeIn and errorSpot carries `prompt` (the brief), every
 *  listenChoose carries `say`. No accepted answer depends on a comma:
 *  fold() strips them. depuis + imparfait is tested by recognition (mcq)
 *  only. */
const S22_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's22-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-savoir',
      label: 'Savoir, connaître',
      targets: ['knew-found'],
      questions: [
        { format: 'mcq', q: "Tu l'as appris hier soir. Hier soir, j'___ qu'elle partait.", opts: ['savais', 'ai su', 'connaissais'], correct: 1, why: "La nouvelle arrive hier soir : j'ai su. EN: found out.", ref: 's04-savoir' },
        { format: 'typeIn', q: 'Tu le savais depuis longtemps. Écris le verbe savoir.', prompt: "Je ___ qu'il mentait.", answer: 'savais', accept: ['savais', 'je savais'], why: "Un état : tu le savais déjà. EN: knew all along.", ref: 's04-savoir' },
        { format: 'mcq', q: "J'ai connu sa sœur à Dakar. Qu'est-ce qui s'est passé à Dakar ?", opts: ["Tu l'as rencontrée.", 'Tu la connaissais déjà.', 'Tu as appris son nom.'], correct: 0, why: "j'ai connu : la rencontre a lieu. EN: met.", ref: 's04-savoir' },
        { format: 'errorSpot', q: 'Tu la connaissais avant la fête. Réécris la phrase.', prompt: "À la fête, j'ai connu sa sœur.", answer: 'À la fête, je connaissais déjà sa sœur.', accept: ['À la fête, je connaissais déjà sa sœur.', 'À la fête, je connaissais sa sœur.', 'À la fête je connaissais déjà sa sœur', 'À la fête je connaissais sa sœur'], why: "Pas de rencontre : un état. EN: No meeting, so connaissais.", ref: 's09-sens' },
        { format: 'listenChoose', q: 'Écoute. La personne a-t-elle appris quelque chose à ce moment-là ?', say: "Ce matin, j'ai su que le bureau fermait.", opts: ['Oui', 'Non'], correct: 0, why: "j'ai su : la nouvelle arrive ce matin. EN: found out this morning.", ref: 's04-savoir' },
        { format: 'typeIn', q: 'I met him in 2019. Complète avec connaître.', prompt: "Je l'___ en 2019.", answer: 'ai connu', accept: ['ai connu', "je l'ai connu"], why: "La rencontre est un moment : passé composé. EN: met.", ref: 's04-savoir' },
        { format: 'mcq', q: 'Tu la savais avant la question. Quelle phrase ?', opts: ["J'ai su la réponse tout de suite.", 'Je savais déjà la réponse.'], correct: 1, why: "déjà, avant : un état. j'ai su dirait que tu l'as trouvée à ce moment. EN: knew already.", ref: 's09-sens' },
      ],
    },
    {
      id: 'r2-resultat',
      label: 'Pouvoir, vouloir, devoir',
      targets: ['outcome-open'],
      questions: [
        { format: 'mcq', q: 'Je devais venir à la réunion. La personne est-elle venue ?', opts: ['Oui.', 'Non.', 'On ne sait pas.'], correct: 2, why: "je devais : le plan. Le résultat n'est pas dans la phrase. EN: outcome open.", ref: 's06-devoir' },
        { format: 'mcq', q: "J'ai dû partir à huit heures. La personne est-elle partie ?", opts: ['Oui.', 'Non.', 'On ne sait pas.'], correct: 0, why: "j'ai dû : obligé, et c'est fait. EN: had to, and did.", ref: 's06-devoir' },
        { format: 'typeIn', q: 'Tu as réussi à venir. Complète avec pouvoir.', prompt: "Finalement, j'___ venir.", answer: 'ai pu', accept: ['ai pu', "j'ai pu"], why: "j'ai pu = j'ai réussi. EN: managed to.", ref: 's05-modaux' },
        { format: 'errorSpot', q: 'Tu as travaillé samedi, par obligation. Corrige.', prompt: 'Samedi, je devais travailler.', answer: "Samedi, j'ai dû travailler.", accept: ["Samedi, j'ai dû travailler.", "Samedi j'ai dû travailler", "Samedi, j'ai du travailler."], why: "je devais ne dit pas que tu as travaillé. EN: dû says you did.", ref: 's15-erreurs' },
        { format: 'mcq', q: 'Il a dû oublier. Ça veut dire :', opts: ['He had to forget.', 'He was supposed to forget.', 'He must have forgotten.'], correct: 2, why: "il a dû + verbe : une supposition sur le passé. EN: must have.", ref: 's06-devoir' },
        { format: 'listenChoose', q: 'Écoute. La personne a-t-elle réussi ?', say: "Je n'ai pas pu entrer.", opts: ['Oui', 'Non'], correct: 1, why: "je n'ai pas pu : ça n'a pas marché. EN: failed to get in.", ref: 's05-modaux' },
        { format: 'typeIn', q: 'He refused to sign. Complète avec vouloir.', prompt: "Il n'a pas ___ signer.", answer: 'voulu', accept: ['voulu'], why: "je n'ai pas voulu : un refus. EN: refused.", ref: 's05-modaux' },
        { format: 'mcq', q: 'Quelle phrase dit que tu as essayé ?', opts: ["Je voulais t'aider.", "Je devais t'aider.", "J'ai voulu t'aider."], correct: 2, why: "j'ai voulu : tu as essayé. je voulais met l'accent sur l'envie. EN: tried.", ref: 's05-modaux' },
      ],
    },
    {
      id: 'r3-etat',
      label: 'Peur, malade, falloir, croire',
      targets: ['state-moment'],
      questions: [
        { format: 'mcq', q: "Quand le chien a aboyé, j'___ peur.", opts: ['avais', 'ai eu'], correct: 1, why: "La peur commence quand le chien aboie. EN: got scared.", ref: 's07-etats' },
        { format: 'typeIn', q: 'Enfant, tu avais toujours peur du noir. Complète avec avoir.', prompt: "Enfant, j'___ peur du noir.", answer: 'avais', accept: ['avais', "j'avais"], why: "Toute l'enfance : un état. EN: was scared, as a state.", ref: 's07-etats' },
        { format: 'mcq', q: 'Il a été malade après le repas. Ça veut dire :', opts: ['He fell ill after the meal.', 'He used to be ill after meals.', 'He was ill before the meal.'], correct: 0, why: "Ça commence après le repas. EN: fell ill.", ref: 's07-etats' },
        { format: 'errorSpot', q: 'Tu parles de toute ton enfance. Corrige.', prompt: "Quand j'étais petit, j'ai eu peur des chiens.", answer: "Quand j'étais petit, j'avais peur des chiens.", accept: ["Quand j'étais petit, j'avais peur des chiens.", "Quand j'étais petit j'avais peur des chiens", "Quand j'étais petite, j'avais peur des chiens."], why: "j'ai eu peur raconte une seule fois. EN: childhood fear is a state.", ref: 's15-erreurs' },
        { format: 'mcq', q: "Je croyais que c'était fermé. Et en réalité ?", opts: ["C'était fermé.", 'On ne sait pas.', "Ce n'était pas fermé."], correct: 2, why: "je croyais que : une idée d'avant, fausse. EN: I thought, wrongly.", ref: 's07-etats' },
        { format: 'typeIn', q: "C'était nécessaire, et on l'a fait. Complète avec falloir.", prompt: 'Il ___ partir tôt.', answer: 'a fallu', accept: ['a fallu', 'il a fallu'], why: "il a fallu : le besoin, et c'est fait. EN: had to, and did.", ref: 's07-etats' },
        { format: 'listenChoose', q: 'Écoute. Un état, ou quelque chose qui arrive ?', say: 'Ce jour-là, il était malade.', opts: ['Un état', 'Quelque chose qui arrive'], correct: 0, why: "il était malade : la situation du jour. EN: a state.", ref: 's07-etats' },
      ],
    },
    {
      id: 'r4-indices',
      label: 'Les indices',
      targets: ['cue-rule'],
      questions: [
        { format: 'mcq', q: 'Avec hier, il faut toujours le passé composé.', opts: ['Vrai', 'Faux'], correct: 1, why: "Hier, il pleuvait est correct : la pluie en décor. EN: hier is a clue, not a rule.", ref: 's11-indices' },
        { format: 'mcq', q: 'Quelle phrase est correcte ?', opts: ['Hier, il pleuvait.', 'Hier, il a plu.', 'Les deux.'], correct: 2, why: "Les deux : décor ou fait, c'est ton choix. EN: both.", ref: 's12-choix' },
        { format: 'mcq', q: 'Tous les soirs, il lisait pendant deux heures. Pourquoi l\'imparfait ?', opts: ['À cause de pendant.', "C'est une habitude.", "C'est une erreur."], correct: 1, why: "tous les soirs : une habitude. Le sens décide, pas pendant. EN: a habit.", ref: 's11-indices' },
        { format: 'typeIn', q: 'Une seule fois, deux heures. Complète avec lire.', prompt: 'Il ___ pendant deux heures.', answer: 'a lu', accept: ['a lu', 'il a lu'], why: "Une durée finie, une fois : passé composé. EN: read, once.", ref: 's11-indices' },
        { format: 'mcq', q: 'Il habitait à Québec depuis deux ans quand il a rencontré Léa. Ça veut dire :', opts: ['He had been living in Quebec City for two years when he met Léa.', 'He lived in Quebec City for two years, then met Léa.', 'He still lives in Quebec City.'], correct: 0, why: "depuis + imparfait : un état qui durait à ce moment-là. EN: had been living.", ref: 's11-indices' },
        { format: 'mcq', q: 'Ce soir-là, il neigeait. / Ce soir-là, il a neigé. Une des deux est fausse ?', opts: ['La première.', 'La deuxième.', "Aucune : c'est un choix."], correct: 2, why: "Décor ou action : les deux sont correctes. EN: a choice of style.", ref: 's12-choix' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const S23_REVUE: LessonSection = {
  type: 'reviewDeck',
  id: 's23-revue',
  layer: 'core',
  title: 'Les paires, une dernière fois',
  cards: [
    { front: 'I found out', back: "j'ai su", say: "Hier soir, j'ai su qu'elle partait." },
    { front: 'I met her', back: "j'ai connu sa sœur", say: "J'ai connu sa sœur à Dakar." },
    { front: 'I managed to come', back: "j'ai pu venir", say: "Finalement, j'ai pu venir." },
    { front: 'I tried to call', back: "j'ai voulu appeler", say: "J'ai voulu t'appeler, mais ton téléphone était éteint." },
    { front: 'He refused', back: "il n'a pas voulu", say: "Il n'a pas voulu signer." },
    { front: 'I was supposed to come', back: 'je devais venir', say: 'Je devais venir à la réunion.' },
    { front: 'He must have forgotten', back: 'il a dû oublier', say: 'Il a dû oublier.' },
    { front: 'I got scared', back: "j'ai eu peur", say: "Quand le chien a aboyé, j'ai eu peur." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** `points` capped at FOUR on a core screen. roundup body is passage prose. */
const S24_FIN: LessonSection = {
  type: 'roundup',
  id: 's24-fin',
  layer: 'core',
  title: 'Même verbe, autre histoire',
  body: `${REFRAME} ${Cap(B103_REF)} disait : « ${B103_REFRAME} » Ici, la même idée change le verbe anglais : knew ou found out, was supposed to ou had to. Avant de parler, pose une seule question : un état, ou quelque chose qui arrive ? EN: One question before you speak: a state, or something that happens?`,
  points: [
    "je devais, je pouvais, je voulais : le résultat reste ouvert.",
    "j'ai su, j'ai connu, j'ai eu peur : un moment, et un autre mot anglais.",
    "hier, pendant, depuis : des indices, pas des règles.",
    'Décor ou action : souvent, les deux sont justes.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etat', 'moment', 'choix'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET  (layer deep, render sheet: the only place a `table`
 *  may live). Quotes b1.01 and b1.02 (imported, corpus §C).
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_PAIRES: ReferenceSheet = {
  id: 'sheet-paires',
  title: 'Les neuf paires',
  layer: 'deep',
  contains: ['les neuf verbes', 'les indices', 'le choix du narrateur'],
  sections: [
    {
      type: 'teach',
      id: 'sheet-lire',
      layer: 'deep',
      render: 'sheet',
      title: 'Comment lire cette page',
      body: `${REFRAME} Tu sais former l'imparfait (${B101_REF} : « ${B101_REFRAME} ») et tu sais quand l'utiliser (${B102_REF} : « ${B102_REFRAME} »). Ces neuf verbes vont plus loin : leur sens change avec le temps, et le verbe anglais change aussi. Lis chaque ligne comme une question : un état, ou quelque chose qui arrive ? Les participes sont ceux de ${PARTICIPES_REF}. EN: These nine verbs change meaning with the tense, and so does the English verb.`,
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: 'Imparfait ou passé composé : le sens',
      cols: ['Verbe', 'Imparfait : un état', 'Passé composé : il arrive'],
      rows: [
        ['savoir', 'je savais · I knew', "j'ai su · I found out"],
        ['connaître', 'je connaissais · I knew', "j'ai connu · I met, went through"],
        ['pouvoir', 'je pouvais · I was able (open)', "j'ai pu · I managed · je n'ai pas pu · I failed"],
        ['vouloir', 'je voulais · I wanted (open)', "j'ai voulu · I tried, decided · je n'ai pas voulu · I refused"],
        ['devoir', 'je devais · I was supposed to (open)', "j'ai dû · I had to, and did · il a dû · he must have"],
        ['avoir peur', "j'avais peur · I was scared", "j'ai eu peur · I got scared"],
        ['être malade', 'il était malade · he was ill', 'il a été malade · he fell ill, was ill (over)'],
        ['falloir', 'il fallait · it was necessary (open)', 'il a fallu · it was necessary, and done'],
        ['croire, penser', 'je croyais que · I thought (wrongly)', "j'ai cru que · I thought for a moment"],
      ],
    },
    {
      type: 'teach',
      id: 'sheet-indices',
      layer: 'deep',
      render: 'sheet',
      title: 'Les indices',
      body: "hier, ce jour-là : les deux temps sont possibles, selon ce que tu montres. pendant + durée : souvent le passé composé (il a lu pendant deux heures), mais l'imparfait revient pour une habitude (tous les soirs, il lisait pendant deux heures). depuis + imparfait : un état qui durait jusqu'à un moment du passé (il habitait à Québec depuis deux ans quand...). À reconnaître. depuis + présent : c'est encore vrai aujourd'hui. EN: Time words are clues; the meaning decides.",
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REMEDIATION DRILLS  (not in `sections`; each is the first resolving
 *  target of exactly one quiz round, so none is dead)
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-savoir',
    title: 'Savoir ou apprendre',
    format: 'sort' as const,
    coach: `${THE_TEST} Deux tas : ce que tu savais déjà, et ce qui arrive.`,
    buckets: ['un état', 'quelque chose arrive'],
    items: [E(301), E(302), E(303), E(304), 'fr.b1.cafe.094', 'fr.a2.verbes.608', 'fr.a2.verbes.604'],
    audio: AUDIO,
  },
  {
    id: 'd-resultat',
    title: "Est-ce que c'est arrivé ?",
    format: 'mcq' as const,
    coach: "Cherche le résultat. À l'imparfait, il n'est pas dans le verbe.",
    q: 'Je devais venir. La personne est-elle venue ?',
    opts: ['Oui.', 'On ne sait pas.', 'Non.'],
    correct: 1,
    why: "je devais donne le plan. Pour le résultat, il faut j'ai dû, je n'ai pas pu, ou la suite de l'histoire. EN: devais leaves the outcome open.",
    items: [E(312), E(313), E(306), E(307), E(308), 'fr.a2.verbes.605', 'fr.a2.verbes.606', 'fr.a2.verbes.607', 'fr.a2.marche.128'],
    audio: AUDIO,
  },
  {
    id: 'd-moment',
    title: 'La peur dure, ou elle commence',
    format: 'flashcard' as const,
    coach: 'Lis la carte, puis dis : un état, ou un moment ?',
    items: [E(315), E(316), E(317), E(318), E(319), E(320), 'fr.a2.verbes.619', 'fr.a2.verbes.618'],
    audio: AUDIO,
  },
  {
    id: 'd-indice',
    title: 'Un indice, pas une règle',
    format: 'mcq' as const,
    coach: 'Le mot de temps aide. Le sens décide.',
    q: 'Avec hier, faut-il toujours le passé composé ?',
    opts: ['Oui, toujours.', 'Non : Hier, il pleuvait est correct.'],
    correct: 1,
    why: "hier va avec les deux temps. La pluie peut être le décor ou un fait. EN: hier is a clue, not a rule.",
    items: [E(323), E(324), E(325), E(326), 'fr.a1.heure-et-date.048', 'fr.a2.heure-et-date.103'],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: DraftSection[] = [
  S01_SCENE, S02_GOALS, S03_LIRE,
  S04_SAVOIR, S05_MODAUX, S06_DEVOIR, S07_ETATS, S08_ECOUTE, S09_SENS, S10_TABLE,
  S11_INDICES, S12_CHOIX, S13_PIEGE, S14_FLASH,
  S15_ERREURS, S16_ANALYSE, S17_DICTEE,
  S18_PARLER, S19_TACHE, S20_DIRE, S21_BILAN,
  S22_QUIZ, S23_REVUE, S24_FIN,
];

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** One slice per act. Every authored row released exactly once; imports
 *  released only where they carry flashcard. `fr.a2.famille.012` is
 *  dictation-only and is NAMED (term example), never released. */
export const DECK_TRANCHE: string[][] = [
  // act 1: the scene's pair
  [E(312), E(313), E(330), E(331)],
  // act 2: the pairs
  [
    E(301), E(302), E(303), E(304), E(305),
    E(306), E(307), E(308), E(309), E(310), E(311), E(334),
    E(314),
    E(315), E(316), E(317), E(318), E(319), E(320), E(321), E(322),
    ...IMPORTED.participles, 'fr.b1.cafe.094', 'fr.a2.marche.128',
  ],
  // act 3: the cues and the speaker's choice
  [
    E(323), E(324), E(325), E(326), E(327), E(328), E(329),
    'fr.a1.heure-et-date.048', 'fr.a2.heure-et-date.103',
    'fr.a2.sports-et-loisirs.061', 'fr.a2.cafe.060', 'fr.a2.heure-et-date.106',
  ],
  // act 4: the error-analysis rows
  [E(332), E(333)],
  // act 5: production releases nothing new
  [],
  // act 6: the quiz and the roundup release nothing new
  [],
];

export type DraftLesson = Omit<Lesson, 'sections'> & { sections: DraftSection[] };

export const LESSON: DraftLesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: LESSON_TITLE,
  level: 'b1',
  tag: 'B1 · LEÇON 04',
  intro: "In English, I knew, I could and I had to each have one past form. In French they have two, and the two do not mean the same thing: je devais venir does not say you came, and j'ai su is not I knew but I found out. This lesson takes nine of these verbs, one pair at a time, and ends with you telling the story of a plan that went wrong.",
  // PO: the lesson outcome is a spoken retelling (the task), and the scenario
  // and practice are spoken. The quiz is reception-weighted.
  skill: 'PO',
  grammarAssumed: [
    'b1.01', 'b1.02', 'b1.03',
    PC_UNIT, PC_ETRE_UNIT, PARTICIPES_UNIT, MODAUX_UNIT, SAVOIR_CONNAITRE_UNIT,
  ],
  grammarIntroduced: [
    'The aspectual meaning shift of savoir and connaître: imparfait for a state of knowing, passé composé for the moment of finding out or meeting, and connaître in the passé composé for a bounded period',
    'pouvoir, vouloir and devoir in the imparfait leave the outcome unasserted; in the passé composé they assert it (managed, tried or decided, had to and did), and in the negative they assert failure or refusal',
    'Epistemic devoir in the passé composé (il a dû oublier) as a supposition about a past event',
    'Inchoative passé composé of states: avoir peur, être malade, and falloir as need met against need stated',
    'croire que and penser que in the imparfait for a belief later found false',
    'Temporal adverbials (hier, pendant + duration) as cues compatible with both tenses, with habit overriding pendant',
    'depuis + imparfait for a state continuing up to a past reference point, for recognition',
    'Tense choice for a single fact as a narrative, not grammatical, decision (background or foreground)',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "En anglais, I knew, I could et I had to n'ont qu'une forme au passé. En français, ils en ont deux, et elles ne disent pas la même chose. Neuf verbes, une paire à la fois, puis tu racontes un plan raté.",
    minutes: 40,
    difficulty: 4,
    glyph: '⇄',
    screens: 104,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: 'La scène',
      sections: ['s01-scene', 's02-goals', 's03-lire'],
      milestone: 'Tu as vu une phrase correcte transmettre une information fausse, et tu as lu les paires dans un texte',
      estScreens: 16,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'Les paires',
      sections: ['s04-savoir', 's05-modaux', 's06-devoir', 's07-etats', 's08-ecoute', 's09-sens', 's10-table'],
      milestone: 'Tu sais dire si une phrase au passé dit un état, ou quelque chose qui arrive',
      estScreens: 34,
      restPoints: ['s06-devoir', 's08-ecoute'],
    },
    {
      id: 'act3',
      title: 'Les indices, revus',
      sections: ['s11-indices', 's12-choix', 's13-piege', 's14-flash'],
      milestone: 'hier et pendant sont des indices pour toi, pas des règles',
      estScreens: 22,
      restPoints: ['s12-choix'],
    },
    {
      id: 'act4',
      title: 'Ce que tu as vraiment dit',
      sections: ['s15-erreurs', 's16-analyse', 's17-dictee'],
      milestone: 'Tu entends ce que ta phrase dit, pas seulement si elle est correcte',
      estScreens: 14,
      restPoints: ['s16-analyse'],
    },
    {
      id: 'act5',
      title: 'Production',
      sections: ['s18-parler', 's19-tache', 's20-dire', 's21-bilan'],
      milestone: 'Tu as raconté un plan raté à voix haute, avec les paires choisies pour le sens',
      estScreens: 12,
      restPoints: ['s19-tache'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s22-quiz', 's23-revue', 's24-fin'],
      milestone: 'Vingt-huit questions, et les paires une dernière fois',
      estScreens: 10,
      restPoints: ['s23-revue'],
    },
  ],
  errorTriggers: [
    {
      id: 'knew-found',
      description: "Uses j'ai su or j'ai connu for knowledge or acquaintance that already existed, or je savais / je connaissais for the moment of finding out or meeting.",
      detectOn: ['s04-savoir', 's09-sens', 's13-piege'],
      drill: 'd-savoir',
      retest: 'd-savoir',
    },
    {
      id: 'outcome-open',
      description: 'Reads je devais, je pouvais or je voulais as if the outcome happened, or uses them to report an outcome that did happen.',
      detectOn: ['s01-scene', 's05-modaux', 's06-devoir', 's16-analyse'],
      drill: 'd-resultat',
      retest: 'd-resultat',
    },
    {
      id: 'state-moment',
      description: 'Uses the passé composé for a lasting state (fear, illness, need) or the imparfait for the moment it starts.',
      detectOn: ['s07-etats', 's09-sens', 's15-erreurs'],
      drill: 'd-moment',
    },
    {
      id: 'cue-rule',
      description: 'Treats hier, pendant or depuis as a switch that fixes the tense, whatever the meaning.',
      detectOn: ['s11-indices', 's12-choix'],
      drill: 'd-indice',
      retest: 'd-indice',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_PAIRES],
  terms: PAIRES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // fr-FR coach voice (Paul, 2026-09-22): `say` is French at B1.
    coachVoice: 'coach-fr-FR',
    recorded: [
      { id: 'rec-b1-04-scene', desc: "Nadia's two lines, ONE TAKE, a Swiss French speaker (Vaud). Tired, apologetic, not dramatic. « je devais » and « j'ai dû » get no extra stress: the learner has to hear the difference in the words, not in a performance." },
      { id: 'rec-b1-04-devoir', desc: 'The four devoir cards, one take per card. « Il a dû oublier » is read as a shrug, a guess, never as an obligation: the intonation is part of what the card teaches.' },
      { id: 'rec-b1-04-ecoute', desc: 'Awa and Koffi, a phone call, two Ivorian French speakers (Abidjan), recorded together in one take so the turns sound like a conversation. Natural pace. Koffi slightly embarrassed.' },
      { id: 'rec-b1-04-piege', desc: 'The audio step plays each card\'s fr, the INTENDED sentence. Read the promptSound lines at the same pace and intonation: both are grammatical, and the trap is meaning, not sound.' },
    ],
  },
};

/** Named so the merge and a future test agree on which imports are reachable
 *  by being named rather than released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
