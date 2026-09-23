// b1.03.l1 « Passé composé ou imparfait : les bases » — the lesson. DRAFT.
//
// Nothing here is imported, merged into seed.json or published. `sections` is
// typed `DraftSection[]` because it carries one `task` section, which is not in
// schema.ts yet (_task-section.ts). Validators run on a copy with the task
// filtered out (scratch script, see the draft report).
//
// ══════════════════════════════════════════════════════════════════════════
//  SECTIONS (27, ceiling 30; the A2 house shape is 24)
// ══════════════════════════════════════════════════════════════════════════
//
//  Act 1  Le décor et l'action
//    s01-scene        scene        Montréal police counter, a bike theft told all in PC
//    s02-goals        goals
//    s03-ecoute       listening    10 lines, hideLines: the statement read back, noticing first
//  Act 2  Le film
//    s04-deja         cardDeck     what the learner already has (b1.01, b1.02, a2.05, a2.21 quoted)
//    s05-film         cardDeck     THE METAPHOR: le film, le décor, l'action
//    s06-ligne        cardDeck     the timeline, in words: bands, dots, closed segments
//    s07-lentilles    examples     nine seed rows, each split into décor and action
//    s08-trier        groupDrill   MEANING drill: décor or action?
//  Act 3  Quand l'action coupe le décor
//    s09-coupure      cardDeck     ongoing action interrupted (quand, pendant que)
//    s10-formes       examples     interruption, two backgrounds, a chain of events
//    s11-tableau      tapTable     the six shapes (the one tapTable, six rows)
//    s12-histoires    groupDrill   MEANING drill: same words, different story
//  Act 4  Les pièges
//    s13-duree        cardDeck     bounded duration takes PC, however long
//    s14-meme-verbe   examples     one verb, both tenses, one story
//    s15-indices      trapDrill    cues not rules: a counterexample for every cue
//    s16-erreurs      commonErrors (includes être auxiliary + agreement)
//  Act 5  Lire et raconter
//    s17-lecture      reading      164 words, Lyon, a phone stolen on the tram
//    s18-annoter      groupDrill   the annotation: which verbs are décor, which move the story
//    s19-flash        flashcards   FORM: build it from the English
//    s20-dictee       dictation    FORM
//    s21-assurance    scenario     MEANING: the insurance call, six turns
//    s22-parler       practice     speak
//    s23-mission      task         DRAFT TYPE: 80-120 word narrative of an unexpected event
//    s24-bilan        progressCheck
//  Act 6  L'examen
//    s25-quiz         quiz         4 rounds x 6 = 24 questions, one per error trigger
//    s26-revision     reviewDeck
//    s27-resume       roundup
//
//  Reference sheet `sheet-film` (teach + the one table), five remediation
//  drills, four error triggers, five terms.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « L'imparfait pose le décor. Le passé composé fait avancer le film. »
//   EN: The imparfait sets the scene. The passé composé moves the film forward.
//
//   One metaphor, used everywhere: LE FILM (décor / action / coupure). Not the
//   stage. corpus §D says why.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//  OWNS: choosing between imparfait and passé composé by the verb's job in the
//  story: décor vs action; an ongoing action cut by an event (quand, pendant
//  que); two simultaneous backgrounds; a chain of events; bounded duration
//  (PC however long); the same verb in both tenses; time words as cues, each
//  with a counterexample (soudain, tout à coup, un jour, tous les jours,
//  d'habitude, pendant que, quand).
//
//  QUOTES ONLY, ALL IMPORTED: b1.01 reframe « Pars de nous, coupe -ons,
//  ajoute la fin. » and b1.02 reframe « À l'imparfait, on regarde le passé. On
//  ne le compte pas. » (both drafts written in parallel; imported from their
//  corpus files); a2.05 and a2.21 reframes (the PC with avoir / être,
//  agreement), a2.23 reframe (pronominals take être).
//
//  LEAVES TO b1.04: verbs that change meaning between the tenses (savoir,
//  connaître, vouloir, pouvoir, avoir). None is contrasted here.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//  SETTLED BY PAUL, 2026-09-22, and applied in this version:
//   - THEME is `recits-au-passe` (existing, empty); ids .201-.281 (corpus §A).
//   - The learner is addressed as « tu » in all instruction and coach copy;
//     characters keep what the situation needs (the officer and the insurance
//     agent say « vous » to the learner's character).
//   - Every `say` is French, spoken by a fr-FR voice (audio lang fr-FR,
//     coachVoice 'coach-fr-FR').
//   - A2 reframes: English original, then a French rendering (« FR: »).
//   - A2 citations use the house English trail label (« lesson 16 in A2 »).
//   - Task word count excludes greeting and sign-off.
//   - The « possible ? » cue drills stay. 27 sections is acceptable.
//
//  STILL OPEN:
//  1. b1.01 / b1.02 REFRAMES are imported from drafts that are still moving.
//     b1.02's « on ne le compte pas » is reused as this lesson's hinge (the
//     passé composé is what you count). If b1.02 changes that line, s04-deja
//     and s13-duree need a reread.
//  2. REGIONAL. « à l'urgence » (Québec) in .244 and « une dépanneuse » in the
//     model answer. The Lyon reading uses « commissariat ». OK to mix like this?
//  3. B1 CITATIONS. b1.* units are not in the seed, so they are labelled in
//     French from the plan (« la leçon 1 du B1 »). Should they switch to the
//     English trail label like A2 once the units exist?
//  4. RECORDINGS. Studio briefs for s03 (listening) and s17 (reading). Is a
//     recorded reading wanted at B1?

import type { Lesson, LessonDrill, LessonSection, SectionAudio, ReferenceSheet } from '../../../../ealch-v2/src/content/schema.ts';
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, REFRAME, REFRAME_EN, E, Cap,
  ALL_ROWS, IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, DICTEE_IDS,
  READING_TEXT,
  A205_REFRAME, A221_REFRAME, A223_REFRAME, A205_REFRAME_FR, A221_REFRAME_FR, A223_REFRAME_FR,
  B101_REFRAME, B101_REFRAME_EN, B102_REFRAME, B102_REFRAME_EN,
  IMP_FORM_UNIT, IMP_USE_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PARTICIPLE_UNIT,
  PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT, TIME_PREP_UNIT,
  IMP_FORM_REF, IMP_USE_REF, PC_AVOIR_REF, PC_ETRE_REF, PRONOMINAL_PC_REF,
} from './pc-imparfait-corpus.ts';
import { PC_IMPARFAIT_TERMS } from './pc-imparfait-terms.ts';

/** Not `as const`: `SectionAudio['speeds']` is a mutable number[]. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — LE DÉCOR ET L'ACTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** The breakdown: every verb in the passé composé, so the officer hears a list
 *  of steps and cannot tell what was going on from what happened. Nobody is
 *  rude; the statement is simply wrong about WHEN.
 *
 *  NO SPACED ? OR ! IN ANY BUBBLE (the bubble loses its last word on a Pixel 6).
 *  French spacing is kept everywhere else. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: "Un poste de police sur l'avenue du Mont-Royal, à Montréal. Mardi, 17 h 40. Ton vélo a disparu devant un café. L'agente Tremblay ouvre un formulaire.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: "L'agente Tremblay",
    fr: "Racontez-moi ce qui s'est passé.",
    en: 'Tell me what happened.',
    respell: '[ra-kohⁿ-tay-MWA suh kee seh pa-SAY]',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    speaker: 'Toi',
    fr: "J'ai lu le journal. Il a plu. Quelqu'un a pris mon vélo.",
    en: 'I read the paper. It rained. Someone took my bike.',
    respell: '[zhay lü luh zhoor-NAL | eel a PLÜ | kehl-KUHⁿ a pree mohⁿ vay-LOH]',
    stage: "Trois verbes au passé composé. Pour l'agente, ce sont trois étapes, l'une après l'autre.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: "L'agente Tremblay",
    fr: "D'abord le journal, ensuite la pluie, puis le vol. Dans cet ordre-là?",
    en: 'First the paper, then the rain, then the theft. In that order?',
    respell: '[da-BOR luh zhoor-NAL | ahⁿ-SWEET la PLÜEE | pwee luh VOL]',
    stage: "Elle ne sait pas si le vol est arrivé pendant ta lecture ou après.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: "Non. Il pleuvait déjà quand tu es arrivé, et tu lisais encore quand le vélo a disparu. Mais tes phrases racontent une liste d'étapes.",
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'Tu recommences. Quelle phrase dit que le vol a coupé ta lecture ?',
    size: 'lg',
    options: [
      { fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.", respell: '[zhay lü luh zhoor-NAL pwee kehl-KUHⁿ a PREE mohⁿ vay-LOH]', en: 'I read the paper, then someone took my bike.', outcome: 'breaks', audio: AUDIO },
      { fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", respell: '[zhuh lee-ZEH luh zhoor-NAL kahⁿ kehl-KUHⁿ a PREE mohⁿ vay-LOH]', en: 'I was reading the paper when someone took my bike.', outcome: 'works', audio: AUDIO },
    ],
    followUp: {
      works: "L'agente écrit : « pendant la lecture ». Elle sait maintenant à quelle heure regarder les caméras du café.",
      breaks: "L'agente écrit : « après la lecture ». Elle va regarder les caméras à la mauvaise heure.",
    },
  },
  {
    kind: 'break',
    heading: 'Tout était au passé composé',
    // 41 words with the EN line. Core cap 45.
    body: "Au passé composé, chaque verbe est une étape, et les étapes se suivent. L'agente a donc entendu une liste. L'imparfait dit ce qui se passait déjà. EN: In the passé composé every verb is a step; the imparfait says what was already going on.",
    wrong: {
      fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.",
      ipa: '/ʒe ly lə ʒuʁ.nal pɥi kɛl.kœ̃ a pʁi mɔ̃ ve.lo/',
      respell: '[zhay lü luh zhoor-NAL pwee kehl-KUHⁿ a PREE mohⁿ vay-LOH]',
      en: 'I read the paper, then someone took my bike.',
    },
    right: {
      fr: "Je lisais le journal quand quelqu'un a pris mon vélo.",
      ipa: '/ʒə li.zɛ lə ʒuʁ.nal kɑ̃ kɛl.kœ̃ a pʁi mɔ̃ ve.lo/',
      respell: '[zhuh lee-ZEH luh zhoor-NAL kahⁿ kehl-KUHⁿ a PREE mohⁿ vay-LOH]',
      en: 'I was reading the paper when someone took my bike.',
    },
    coach: `${REFRAME} EN: ${REFRAME_EN}`,
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: "La déclaration est corrigée. Il manque encore le décor : la pluie, la terrasse vide, le vélo attaché. C'est le sujet de cette leçon.",
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'Une déclaration au poste',
  frSub: 'Le vélo volé',
  setting: { place: 'Poste de police, avenue du Mont-Royal', city: 'Montréal', time: '17 h 40', ambience: 'un comptoir, un téléphone qui sonne, la pluie dehors' },
  beats: SCENE_BEATS,
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: "Séparer le décor et l'action", s: 'Acte 2 : le film et la ligne du temps' },
    { t: 'Raconter une action coupée', s: 'Acte 3 : quand, pendant que' },
    { t: 'Choisir le temps pour une longue durée', s: 'Acte 4 : dix ans, mais fini' },
    { t: 'Écrire un court récit au passé', s: 'Acte 5 : ta mission écrite' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** NOTICING FIRST (brief: "meet the grammar in a text before the rule").
 *  The officer reads the corrected statement back. Ten lines, hideLines, and
 *  the questions are about WHEN things happened, which only the tenses say.
 *  Correct indices 0,1,2,0,1. */
const S03_ECOUTE: LessonSection = {
  type: 'listening',
  id: 's03-ecoute',
  layer: 'core',
  hideLines: true,
  title: "L'agente relit la déclaration",
  lines: [
    { fr: 'Donc, mardi après-midi, vous étiez dans un café, rue Saint-Viateur.', en: 'So, on Tuesday afternoon, you were in a café on rue Saint-Viateur.' },
    { fr: 'Il pleuvait et la terrasse était vide.', en: 'It was raining and the terrace was empty.' },
    { fr: 'Votre vélo était attaché devant la vitrine.', en: 'Your bike was locked up in front of the window.' },
    { fr: 'Vous lisiez le journal près de la fenêtre.', en: 'You were reading the paper near the window.' },
    { fr: 'Vers seize heures, un homme en noir est passé devant le café.', en: 'Around four, a man in black walked past the café.' },
    { fr: "Il s'est arrêté et il a regardé votre vélo.", en: 'He stopped and looked at your bike.' },
    { fr: 'Pendant que vous lisiez, il a coupé le cadenas.', en: 'While you were reading, he cut the lock.' },
    { fr: "Il est parti vers l'avenue du Parc.", en: 'He left towards avenue du Parc.' },
    { fr: "Quand vous êtes sorti, le vélo n'était plus là.", en: 'When you came out, the bike was gone.' },
    { fr: 'Vous avez appelé la police tout de suite.', en: 'You called the police straight away.' },
  ],
  questions: [
    {
      q: "Quand l'homme est passé, est-ce qu'il pleuvait ?",
      opts: ['Oui, la pluie continuait.', 'Non, la pluie était finie.', 'On ne sait pas.'],
      correct: 0,
      why: "« Il pleuvait » : la pluie est le décor. Elle continue pendant toute l'histoire.",
    },
    {
      q: 'Le vol est arrivé...',
      opts: ['après la lecture', 'pendant la lecture', 'avant la lecture'],
      correct: 1,
      why: "« Pendant que vous lisiez, il a coupé le cadenas. » La lecture est le décor, le vol la coupe.",
    },
    {
      q: "Lignes 5 à 8 : combien d'actions fait l'homme ?",
      opts: ['une', 'deux', 'cinq'],
      correct: 2,
      why: "Il est passé, il s'est arrêté, il a regardé, il a coupé, il est parti : cinq étapes, au passé composé.",
    },
    {
      q: '« Votre vélo était attaché. » Quelqu\'un attache le vélo à ce moment-là ?',
      opts: ["Non, c'est un état : le décor.", "Oui, c'est une action."],
      correct: 0,
      why: "Le vélo était déjà attaché. C'est la situation, pas une étape de l'histoire.",
    },
    {
      q: '« Le vélo n\'était plus là. » Qu\'est-ce que ça dit ?',
      opts: ['ce que tu as fait', 'la situation que tu as trouvée'],
      correct: 1,
      why: "Tu sors (l'action) et tu découvres une situation (le décor). L'imparfait décrit ce que tu vois.",
    },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-03-ecoute' },
  say: REFRAME,
  terms: ['decor', 'action'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — LE FILM
 * ══════════════════════════════════════════════════════════════════════════ */

/** WHAT THE LEARNER ALREADY HAS. Quoted, not re-taught, and every quotation
 *  is imported: b1.01 and b1.02 from the parallel drafts (open question 1),
 *  the A2 lines from their corpora, English original then a French rendering. */
const S04_DEJA: LessonSection = {
  type: 'cardDeck',
  id: 's04-deja',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  hint: 'Cinq cartes. Tu connais déjà les deux formes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
  cards: [
    {
      head: "L'imparfait : la forme",
      label: Cap(IMP_FORM_REF),
      fr: 'je lisais · il pleuvait',
      sub: '[zhuh lee-ZEH] · [eel pluh-VEH]',
      body: `« ${B101_REFRAME} » C'est ${IMP_FORM_REF}. EN: ${B101_REFRAME_EN}`,
    },
    {
      head: "L'imparfait : les emplois",
      label: Cap(IMP_USE_REF),
      fr: "il faisait froid · j'avais vingt ans",
      sub: '[eel fuh-zeh FRWA] · [zha-veh vehⁿ-TAHⁿ]',
      body: `« ${B102_REFRAME} » Habitude, état, météo, heure, âge : c'est déjà le décor. EN: ${B102_REFRAME_EN}`,
    },
    {
      head: 'Le passé composé avec avoir',
      label: Cap(PC_AVOIR_REF),
      fr: "j'ai lu · je n'ai pas lu",
      sub: '[zhay LÜ] · [zhuh nay pa LÜ]',
      body: `« ${A205_REFRAME} » FR: ${A205_REFRAME_FR}`,
    },
    {
      head: 'Le passé composé avec être',
      label: Cap(PC_ETRE_REF),
      fr: 'je suis sortie · nous sommes arrivés',
      sub: '[zhuh swee sor-TEE] · [noo som za-ree-VAY]',
      body: `« ${A221_REFRAME} » FR: ${A221_REFRAME_FR}`,
    },
    {
      head: 'Aujourd\'hui : les deux ensemble',
      label: 'la nouvelle question',
      body: "Tu sais faire les deux formes. La question n'est plus « comment ? » mais « lequel ? ». EN: You can build both; now the question is which one.",
    },
  ],
};

/** THE METAPHOR. Four cards, and the fourth is the reframe. */
const S05_FILM: LessonSection = {
  type: 'cardDeck',
  id: 's05-film',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Une histoire, c\'est un film',
  frSub: 'Le décor et l\'action',
  hint: 'Quatre cartes. Regarde ton histoire comme un film.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-03-film' },
  say: REFRAME,
  terms: ['decor', 'action'],
  cards: [
    {
      head: 'Le décor',
      label: "l'imparfait",
      fr: 'Il pleuvait et la terrasse était vide.',
      sub: '[eel pluh-VEH ay la teh-RASS ay-teh VEED]',
      body: "Le film commence. On voit la pluie, la terrasse. Tout est déjà là, et rien n'avance encore. EN: The set: everything is there, nothing in the story moves yet.",
    },
    {
      head: "L'action",
      label: 'le passé composé',
      fr: "On m'a volé mon vélo.",
      sub: '[ohⁿ ma vo-LAY mohⁿ vay-LOH]',
      body: "Maintenant, il se passe quelque chose. Après cette phrase, la situation a changé. EN: Something happens, and afterwards things are different.",
    },
    {
      head: 'Le test',
      label: 'deux questions',
      fr: "Qu'est-ce qui se passait ? · Qu'est-ce qui s'est passé ?",
      body: "Le verbe répond à la première question ? C'est le décor. À la deuxième ? C'est l'action. EN: What was going on is décor; what happened is action.",
    },
    {
      head: 'Le film en entier',
      label: 'la phrase à garder',
      fr: REFRAME,
      body: `EN: ${REFRAME_EN}`,
    },
  ],
};

/** THE TIMELINE, IN WORDS. No image needed: bands, dots, closed segments. */
const S06_LIGNE: LessonSection = {
  type: 'cardDeck',
  id: 's06-ligne',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La ligne du temps, en mots',
  hint: 'Cinq cartes. Imagine une ligne, de gauche à droite.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'coupure'],
  cards: [
    {
      head: 'Une ligne et des points',
      label: "l'action",
      body: "Trace une ligne de gauche à droite : c'est le temps. Chaque action au passé composé est un point sur la ligne. Les points se suivent. EN: Each passé composé action is a dot on the line.",
    },
    {
      head: 'Le décor est une bande',
      label: 'le décor',
      body: "L'imparfait est une longue bande sous les points. Elle a commencé avant et elle continue après. On ne voit pas ses bords. EN: The imparfait is a band under the dots, with no edges in view.",
    },
    {
      head: 'Un point sur une bande',
      label: 'la coupure',
      fr: 'Je dormais quand le téléphone a sonné.',
      sub: '[zhuh dor-MEH kahⁿ luh tay-lay-FON a so-NAY]',
      body: "La bande : je dormais. Le point : le téléphone a sonné, au milieu de la bande. EN: A dot landing on a band is the interruption.",
    },
    {
      head: 'Deux bandes, aucun point',
      label: 'deux décors',
      fr: 'Pendant que je lisais, il regardait la télé.',
      sub: '[pahⁿ-dahⁿ kuh zhuh lee-ZEH eel ruh-gar-deh la tay-LAY]',
      body: "Deux choses en même temps, et rien n'arrive. Deux imparfaits. EN: Two bands, no dot: two backgrounds at once.",
    },
    {
      head: 'Un segment fermé',
      label: 'une durée fermée',
      fr: "J'ai habité à Lyon pendant dix ans.",
      sub: '[zhay a-bee-TAY a LYOHⁿ pahⁿ-dahⁿ dee-ZAHⁿ]',
      body: "Dix ans, avec un début et une fin : un segment fermé, pas une bande. Donc passé composé. EN: A bounded stretch is a closed segment.",
    },
  ],
};

/** Nine published rows, each carrying both lenses. `fr` is the row verbatim. */
const S07_LENTILLES: LessonSection = {
  type: 'examples',
  id: 's07-lentilles',
  layer: 'core',
  title: 'Deux temps dans une phrase',
  examples: [
    { fr: 'Quand nous sommes arrivés, la terrasse était déjà pleine.', en: 'When we arrived, the terrace was already full.', note: "arrivés : l'action · était pleine : le décor qu'on trouve" },
    { fr: "Il faisait froid, alors nous avons préféré rester à l'intérieur.", en: 'It was cold, so we preferred to stay inside.', note: "le froid : le décor · la décision : l'action" },
    { fr: "Quand nous avons emménagé, l'appartement était en mauvais état.", en: 'When we moved in, the apartment was in bad condition.', note: "le déménagement : l'action · l'état : le décor" },
    { fr: "J'ai perdu mes clés parce que j'étais pressé ce matin.", en: 'I lost my keys because I was in a hurry this morning.', note: "la cause est un état : le décor" },
    { fr: 'Comme il pleuvait, il a préféré prendre le métro plutôt que marcher.', en: 'Since it was raining, he preferred to take the subway rather than walk.', note: "comme + décor, puis l'action" },
    { fr: 'Comme il était en retard, il a sauté le petit déjeuner ce matin.', en: 'Since he was late, he skipped breakfast this morning.', note: "le retard : le décor · le petit déjeuner sauté : l'action" },
    { fr: 'Je me suis dépêché ce matin parce que j\'étais en retard.', en: 'I hurried this morning because I was late.', note: "l'action d'abord, le décor après : l'ordre ne change rien" },
    { fr: "Quand elle a gagné le tournoi, toute l'équipe était fière.", en: 'When she won the tournament, the whole team was proud.', note: "la victoire : l'action · la fierté : le nouvel état" },
    { fr: 'Elle avait très mal à la gorge et elle est allée voir le médecin.', en: 'Her throat hurt a lot and she went to see the doctor.', note: "la douleur : le décor · la visite : l'action" },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** MEANING DRILL after the form. Check indices 0,1,1. */
const S08_TRIER: LessonSection = {
  type: 'groupDrill',
  id: 's08-trier',
  layer: 'core',
  size: 'lg',
  title: 'Décor ou action ?',
  groups: [
    {
      label: 'Le décor : ce qui se passait',
      items: [
        { fr: 'Il pleuvait et la terrasse était vide.', itemId: E(3), note: 'la météo, un lieu', en: 'It was raining and the terrace was empty.' },
        { fr: 'Mon vélo était attaché devant le café.', itemId: E(5), note: 'un état', en: 'My bike was locked up outside the café.' },
        { fr: 'Il neigeait et les rues étaient vides.', itemId: E(22), note: 'deux décors', en: 'It was snowing and the streets were empty.' },
        { fr: 'Tous les jours, je prenais le même bus.', itemId: E(64), note: 'une habitude', en: 'Every day, I took the same bus.' },
      ],
      check: {
        q: 'Dans ces quatre phrases, est-ce que quelque chose de nouveau arrive ?',
        opts: ['Non, elles décrivent la situation.', 'Oui, chaque verbe est une étape.'],
        correct: 0,
        why: "Rien ne change entre le début et la fin de chaque phrase. C'est le décor du film.",
      },
    },
    {
      label: "L'action : ce qui s'est passé",
      items: [
        { fr: "On m'a volé mon vélo.", itemId: E(1), note: 'une étape', en: 'My bike was stolen.' },
        { fr: 'Je me suis levé, je me suis habillé et je suis sorti.', itemId: E(30), note: 'trois étapes', en: 'I got up, I got dressed and I went out.' },
        { fr: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.", itemId: E(32), note: "d'abord, puis", en: 'First I called the police, then I filled in a form.' },
        { fr: "Un jour, j'ai trouvé un portefeuille dans le métro.", itemId: E(62), note: 'un seul moment', en: 'One day, I found a wallet in the metro.' },
      ],
      check: {
        q: 'On change l\'ordre des verbes de la deuxième phrase. Que se passe-t-il ?',
        opts: ["Rien, l'ordre ne compte pas.", "L'histoire change : je sors avant de me lever.", 'Le temps des verbes change.'],
        correct: 1,
        why: "Les actions au passé composé se suivent. Changer l'ordre, c'est changer l'histoire.",
      },
    },
    {
      label: 'Et maintenant, toi',
      items: [],
      check: {
        q: "Un ami raconte : « Quand je suis arrivé à la fête, tout le monde ___ . » La fête avait déjà commencé.",
        opts: ['a dansé', 'dansait'],
        correct: 1,
        why: "La danse avait commencé avant ton ami et elle continue : c'est le décor qu'il trouve. « A dansé » voudrait dire : ils ont dansé après son arrivée.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — QUAND L'ACTION COUPE LE DÉCOR
 * ══════════════════════════════════════════════════════════════════════════ */

const S09_COUPURE: LessonSection = {
  type: 'cardDeck',
  id: 's09-coupure',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: "Quand l'action coupe le décor",
  hint: 'Quatre cartes. Une bande, puis un point qui la coupe.',
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-03-coupure' },
  say: REFRAME,
  terms: ['coupure', 'decor', 'action'],
  cards: [
    {
      head: 'quand + action',
      label: 'le point coupe la bande',
      fr: 'Je dormais quand le téléphone a sonné.',
      sub: '[zhuh dor-MEH kahⁿ luh tay-lay-FON a so-NAY]',
      body: "Je dormais : le sommeil a commencé avant. Le téléphone a sonné : un moment précis qui le coupe. EN: The imparfait was already running; the passé composé cuts in.",
    },
    {
      head: 'pendant que + décor',
      label: "la bande d'abord",
      fr: 'Pendant que je cuisinais, il est arrivé.',
      sub: '[pahⁿ-dahⁿ kuh zhuh kwee-zee-NEH eel eh-ta-ree-VAY]',
      body: "Pendant que ouvre souvent le décor : je cuisinais. L'action arrive au milieu : il est arrivé. EN: pendant que usually opens the background.",
    },
    {
      head: "l'ordre peut changer",
      label: 'les temps ne bougent pas',
      fr: 'Il est arrivé pendant que je cuisinais.',
      sub: '[eel eh-ta-ree-VAY pahⁿ-dahⁿ kuh zhuh kwee-zee-NEH]',
      body: "Le décor peut venir avant ou après. Le temps de chaque verbe reste le même. EN: The clauses can swap; the tenses stay.",
    },
    {
      head: 'une panne',
      label: 'la même forme',
      fr: 'Il conduisait quand sa voiture est tombée en panne.',
      sub: '[eel kohⁿ-dwee-ZEH kahⁿ sa vwa-TÜR eh tohⁿ-BAY ahⁿ PAN]',
      body: "Un trajet en cours, une panne qui le coupe. Avec être, tombée s'accorde avec la voiture. EN: Same shape; note the agreement with être.",
    },
  ],
};

/** Three story shapes, and quand/pendant que in more than one of them. */
const S10_FORMES: LessonSection = {
  type: 'examples',
  id: 's10-formes',
  layer: 'core',
  title: "Trois formes d'histoire",
  examples: [
    { fr: "Nous mangions quand la lumière s'est éteinte.", en: 'We were eating when the light went out.', note: 'la coupure : une bande, un point' },
    { fr: "Elle traversait la rue quand elle a vu l'accident.", en: 'She was crossing the street when she saw the accident.', note: 'la coupure, encore' },
    { fr: 'Pendant que tu étais au travail, le facteur est passé.', en: 'While you were at work, the mail carrier came by.', note: 'pendant que + un état, puis une action' },
    { fr: "Pendant que nous attendions l'addition, nous avons parlé de nos projets.", en: 'While we were waiting for the bill, we talked about our plans.', note: "l'attente : le décor · la conversation : l'action" },
    { fr: "La sauce a réduit pendant qu'on préparait les légumes.", en: 'The sauce reduced while we were preparing the vegetables.', note: "l'action d'abord, le décor après" },
    { fr: 'Les enfants jouaient pendant que les parents parlaient.', en: 'The children were playing while the parents were talking.', note: 'deux décors, aucune action' },
    { fr: "Elle s'est levée, elle a pris un café et elle est partie.", en: 'She got up, had a coffee and left.', note: 'une suite : trois points' },
    { fr: "Il est entré, il a regardé autour de lui et il s'est assis.", en: 'He came in, looked around and sat down.', note: 'une suite, encore' },
    { fr: "Nous avons fait les courses ensemble, ensuite nous avons cuisiné.", en: 'We did the shopping together, then we cooked.', note: 'ensuite : le point suivant' },
    { fr: "J'ai coupé les légumes puis je les ai fait cuire.", en: 'I cut the vegetables then I cooked them.', note: 'puis : le point suivant' },
    { fr: "Quand le téléphone a sonné, j'ai répondu.", en: 'When the phone rang, I answered.', note: "quand + deux actions : d'abord l'une, puis l'autre" },
    { fr: 'Nous avons discuté avec le syndic quand le chauffage est tombé en panne.', en: 'We talked with the building manager when the heating broke down.', note: 'deux actions : la panne, puis la discussion' },
    { fr: "Tout à coup, la lumière s'est éteinte.", en: 'Suddenly, the light went out.', note: 'tout à coup + une action : le cas normal' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['coupure', 'action'],
};

/** THE ONE tapTable. Six rows (the Pixel 6 ceiling), three short columns. */
const S11_TABLEAU: LessonSection = {
  type: 'tapTable',
  id: 's11-tableau',
  layer: 'core',
  title: 'Six formes, un écran',
  cols: ['Forme', 'Sur la ligne', 'Temps'],
  rows: [
    {
      cells: ['le décor', 'une bande', 'imparfait'],
      say: 'Il pleuvait et la terrasse était vide.',
      detail: { title: 'Le décor', body: "Ce qui se passait déjà : lieu, météo, état, habitude. EN: What was already going on.", say: 'Il neigeait et les rues étaient vides.' },
    },
    {
      cells: ['une action', 'un point', 'passé composé'],
      say: "On m'a volé mon vélo.",
      detail: { title: "L'action", body: "Ce qui arrive et change la situation. EN: What happened and changed things.", say: "Un jour, j'ai trouvé un portefeuille dans le métro." },
    },
    {
      cells: ['la coupure', 'un point sur une bande', 'les deux'],
      say: 'Je dormais quand le téléphone a sonné.',
      detail: { title: 'La coupure', body: "La bande à l'imparfait, le point au passé composé. Souvent avec quand ou pendant que. EN: Ongoing imparfait, interrupting passé composé.", say: 'Pendant que je cuisinais, il est arrivé.' },
    },
    {
      cells: ['deux décors', 'deux bandes', 'imparfait'],
      say: 'Pendant que je lisais, il regardait la télé.',
      detail: { title: 'Deux décors', body: "Deux choses en même temps, sans action. EN: Two backgrounds at once.", say: 'Les enfants jouaient pendant que les parents parlaient.' },
    },
    {
      cells: ['une suite', 'des points', 'passé composé'],
      say: 'Je me suis levé, je me suis habillé et je suis sorti.',
      detail: { title: 'Une suite', body: "Des actions l'une après l'autre. L'ordre des verbes est l'ordre de l'histoire. EN: A chain of events, in order.", say: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire." },
    },
    {
      cells: ['durée fermée', 'un segment', 'passé composé'],
      say: "J'ai habité à Lyon pendant dix ans.",
      detail: { title: 'Une durée fermée', body: "Une durée donnée, et finie. Longue ou courte, passé composé. EN: Stated and over, however long.", say: 'Il a plu toute la journée.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'coupure', 'duree'],
};

/** MEANING DRILL: same words, a different story. Check indices 1,1,0. */
const S12_HISTOIRES: LessonSection = {
  type: 'groupDrill',
  id: 's12-histoires',
  layer: 'core',
  size: 'lg',
  title: 'Mêmes mots, autre histoire',
  groups: [
    {
      label: 'Le vol et la lecture',
      items: [
        { fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.", itemId: E(4), note: 'deux points : le vol après la lecture', en: 'I read the paper, then someone took my bike.' },
        { fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", itemId: E(2), note: 'une bande et un point : le vol pendant la lecture', en: 'I was reading the paper when someone took my bike.' },
      ],
      check: {
        q: "Tu es l'agente. Quelle phrase dit que le voleur est venu pendant la lecture ?",
        opts: ['la première', 'la deuxième'],
        correct: 1,
        why: "« Je lisais » : la lecture continue quand le vol arrive. Dans la première, la lecture est finie.",
      },
    },
    {
      label: 'Le téléphone',
      items: [
        { fr: 'Je dormais quand le téléphone a sonné.', itemId: E(10), note: 'je dormais encore', en: 'I was sleeping when the phone rang.' },
        { fr: "Quand le téléphone a sonné, j'ai répondu.", itemId: E(70), note: "d'abord la sonnerie, puis la réponse", en: 'When the phone rang, I answered.' },
      ],
      check: {
        q: "« Quand le téléphone a sonné, j'ai répondu. » Est-ce que je dormais ?",
        opts: ["Oui, c'est dit dans la phrase.", "La phrase ne le dit pas : ce sont deux actions."],
        correct: 1,
        why: "Quand + passé composé + passé composé : une action, puis l'autre. Rien ne dit ce qui se passait avant.",
      },
    },
    {
      label: 'En même temps',
      items: [
        { fr: 'Pendant que je lisais, il regardait la télé.', itemId: E(20), note: 'deux bandes', en: 'While I was reading, he was watching TV.' },
        { fr: "Pendant que tu as fait les courses, j'ai rangé la cuisine.", itemId: E(69), note: 'deux tâches finies', en: 'While you did the shopping, I tidied the kitchen.' },
      ],
      check: {
        q: "« Pendant que tu as fait les courses, j'ai rangé la cuisine. » Pourquoi le passé composé ?",
        opts: ['Les deux tâches sont finies : on les compte.', 'Pendant que demande toujours le passé composé.', "C'est une faute."],
        correct: 0,
        why: "Les deux tâches sont faites et finies. Pendant que annonce souvent le décor, mais pas toujours.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['coupure', 'indice'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — LES PIÈGES
 * ══════════════════════════════════════════════════════════════════════════ */

const S13_DUREE: LessonSection = {
  type: 'cardDeck',
  id: 's13-duree',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Long, mais fermé',
  hint: 'Cinq cartes. La longueur ne décide pas.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree', 'decor'],
  cards: [
    {
      head: 'Dix ans, et fini',
      label: 'une durée fermée',
      fr: "J'ai habité à Lyon pendant dix ans.",
      sub: '[zhay a-bee-TAY a LYOHⁿ pahⁿ-dahⁿ dee-ZAHⁿ]',
      body: "Dix ans, c'est long. Mais la phrase donne la durée, et c'est terminé : un segment fermé. EN: Long, but stated and over: passé composé.",
    },
    {
      head: 'Lyon comme décor',
      label: 'une durée ouverte',
      fr: "J'habitais à Lyon quand j'ai rencontré Claire.",
      sub: '[zha-bee-TEH a LYOHⁿ kahⁿ zhay rahⁿ-kohⁿ-tray KLEHR]',
      body: "Ici, Lyon est le décor d'une autre action, la rencontre. La phrase ne dit pas combien de temps. EN: No stated length, and it frames another event: imparfait.",
    },
    {
      head: 'La météo aussi',
      label: 'toute la journée',
      fr: 'Il a plu toute la journée.',
      sub: '[eel a PLÜ toot la zhoor-NAY]',
      body: "La pluie est souvent le décor. Mais toute la journée ferme la durée. EN: Weather is usually décor; a closed duration makes it an event.",
    },
    {
      head: 'Avec un autre verbe',
      label: 'deux ans, fermés',
      fr: 'Elle a vécu à Lyon pendant deux ans.',
      body: "Le verbe change, la règle non. Deux heures ou deux ans : si c'est fermé, passé composé. EN: Same pattern with vivre.",
    },
    {
      head: 'Le passé qu\'on compte',
      label: Cap(IMP_USE_REF),
      body: `« ${B102_REFRAME} » Avec une durée fermée, on compte : dix ans, deux heures. Donc passé composé. EN: A counted stretch of time takes the passé composé.`,
    },
  ],
};

const S14_MEME_VERBE: LessonSection = {
  type: 'examples',
  id: 's14-meme-verbe',
  layer: 'core',
  title: 'Un verbe, deux temps',
  examples: [
    { fr: "Je marchais seul, puis nous avons marché ensemble jusqu'au métro.", en: 'I was walking alone, then we walked together to the metro.', note: "marchais : le décor · avons marché : l'action, jusqu'au métro" },
    { fr: "Il pleuvait quand je suis parti, et il a plu jusqu'au soir.", en: 'It was raining when I left, and it rained until evening.', note: 'pleuvait : le décor du départ · a plu : fermé, jusqu\'au soir' },
    { fr: 'Il pleuvait quand je suis sorti.', en: 'It was raining when I went out.', note: 'la pluie : une bande' },
    { fr: 'Il a plu toute la journée.', en: 'It rained all day.', note: 'la pluie : un segment fermé' },
    { fr: 'La semaine dernière, il a fait très froid.', en: 'Last week, it was very cold.', note: 'la météo au passé composé : une semaine, finie' },
    { fr: "Nous avons attendu deux heures à l'urgence.", en: 'We waited two hours at the emergency room.', note: 'deux heures, fermées' },
    { fr: "J'ai fait des maths pendant trois ans.", en: 'I did maths for three years.', note: 'trois ans, fermés' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree', 'decor', 'action'],
};

/** CUES, NOT RULES. Every card is a counterexample to the naive rule in
 *  `promptSound`. The audio step plays each card's `fr`, which is always good
 *  French. The drill mixes usual cases with « possible ? » checks, because for
 *  a counterexample the point is that the other tense is POSSIBLE, not that it
 *  is the only answer. Correct indices 1,0,0,1,1,0,1,0. */
const S15_INDICES: LessonSection = {
  type: 'trapDrill',
  id: 's15-indices',
  layer: 'core',
  swipe: true,
  title: 'Un indice, pas une règle',
  rule: {
    title: 'Le mot aide, le rôle décide',
    body: "Soudain, un jour, tous les jours, d'habitude : ces mots aident, mais ils ne choisissent pas le temps. Le rôle du verbe dans l'histoire décide. EN: Time words are clues; the verb's job in the story decides.",
  },
  cards: [
    { promptLabel: 'soudain', promptSound: 'soudain, donc toujours une action', fr: "Soudain, il faisait noir et on n'entendait plus rien.", ipa: '/su.dɛ̃ il fə.zɛ nwaʁ e ɔ̃ nɑ̃.tɑ̃.dɛ ply ʁjɛ̃/', tip: "Ici, soudain montre un nouveau décor : le noir, le silence. Ça dure. EN: A sudden new state is still décor." },
    { promptLabel: 'tout à coup', promptSound: 'tout à coup, donc toujours une action', fr: "Tout à coup, je n'avais plus envie de rire.", ipa: '/tu.ta.ku ʒə na.vɛ ply.zɑ̃.vi də ʁiʁ/', tip: "Un sentiment nouveau, qui dure. Le cas normal existe aussi : Tout à coup, la porte a claqué. EN: A new feeling that lasts." },
    { promptLabel: 'un jour', promptSound: 'un jour, donc toujours une action', fr: "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus.", ipa: '/œ̃ ʒuʁ di.vɛʁ il fə.zɛ mwɛ̃ vɛ̃ e tu lə mɔ̃d a.tɑ̃.dɛ lə bys/', tip: "Un jour d'hiver ouvre le décor : le froid, l'attente. L'action viendra après. EN: « Un jour » can open a scene." },
    { promptLabel: 'tous les jours', promptSound: 'tous les jours, donc toujours le décor', fr: "Tous les jours pendant un mois, j'ai couru.", ipa: '/tu le ʒuʁ pɑ̃.dɑ̃.tœ̃ mwa ʒe ku.ʁy/', tip: "Un mois, fermé et fini : on compte. Passé composé. EN: A habit inside a closed period can be counted." },
    { promptLabel: "d'habitude", promptSound: "d'habitude, donc toujours le décor", fr: "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus.", ipa: '/sə ma.tɛ̃.la ʒe fɛ kɔm da.bi.tyd ʒe pʁi lə bys/', tip: "Ce matin-là, une seule fois : une action. D'habitude compare, il ne décide pas. EN: One morning, one event." },
    { promptLabel: 'pendant que', promptSound: "pendant que, donc toujours l'imparfait", fr: "Pendant que tu as fait les courses, j'ai rangé la cuisine.", ipa: '/pɑ̃.dɑ̃ kə ty a fɛ le kuʁs ʒe ʁɑ̃.ʒe la kɥi.zin/', tip: "Deux tâches finies, en même temps. On les compte : passé composé. EN: Two completed tasks side by side." },
  ],
  drill: [
    { promptSay: 'Soudain, le téléphone ... .', opts: ['sonnait', 'a sonné'], correct: 1 },
    { promptSay: 'Tous les jours, je ... le même bus.', opts: ['prenais', 'ai pris'], correct: 0 },
    { promptSay: '« Soudain, il faisait noir. » Possible ?', opts: ['oui', 'non'], correct: 0 },
    { promptSay: "Tous les jours pendant un mois, j'... .", opts: ['courais', 'ai couru'], correct: 1 },
    { promptSay: "Un jour, j'... un portefeuille dans le métro.", opts: ['trouvais', 'ai trouvé'], correct: 1 },
    { promptSay: "D'habitude, il ... à huit heures.", opts: ['arrivait', 'est arrivé'], correct: 0 },
    { promptSay: "« Pendant que tu as fait les courses, j'ai rangé la cuisine. » Possible ?", opts: ['non', 'oui'], correct: 1 },
    { promptSay: 'Pendant que je ..., il regardait la télé.', opts: ['lisais', 'ai lu'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot aide, le rôle décide' },
    { label: 'Six exceptions', kind: 'cards', title: 'Chaque indice a son contre-exemple' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-03-indices' },
  say: REFRAME,
  terms: ['indice'],
};

/** `swipe: true` is mandatory on commonErrors (a blank screen without it).
 *  Each `why` says why the wrong version was reasonable, then gives the EN
 *  line the B1 rule asks for. */
const S16_ERREURS: LessonSection = {
  type: 'commonErrors',
  id: 's16-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Les cinq erreurs fréquentes',
  errors: [
    {
      wrong: 'Il a plu et la terrasse a été vide.',
      right: 'Il pleuvait et la terrasse était vide.',
      why: "Normal : en anglais, it rained va partout. Mais ici rien n'arrive, c'est le décor. EN: Nothing happens here, so it is décor.",
    },
    {
      wrong: 'Je dormais quand le téléphone sonnait.',
      right: 'Je dormais quand le téléphone a sonné.',
      why: "Deux imparfaits, c'est deux bandes, et personne ne coupe. Le téléphone est le point. EN: The ringing is the event that cuts in.",
    },
    {
      wrong: "J'habitais à Lyon pendant dix ans.",
      right: "J'ai habité à Lyon pendant dix ans.",
      why: "Normal : dix ans, c'est long. Mais la durée est donnée et finie. EN: A stated, finished duration takes the passé composé.",
    },
    {
      wrong: 'Ce matin-là, je me levais, je m\'habillais et je sortais.',
      right: 'Ce matin-là, je me suis levée, je me suis habillée et je suis sortie.',
      why: `Pour une habitude, l'imparfait va bien. Pour un seul matin, ce sont trois actions. ${Cap(PRONOMINAL_PC_REF)} : « ${A223_REFRAME} » FR: ${A223_REFRAME_FR}`,
    },
    {
      wrong: "Quand je suis sorti, le vélo n'était plus là. (Awa)",
      right: "Quand je suis sortie, le vélo n'était plus là.",
      why: `Avec être, le participe s'accorde. ${Cap(PC_ETRE_REF)} : « ${A221_REFRAME} » FR: ${A221_REFRAME_FR}`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'coupure', 'duree'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — LIRE ET RACONTER
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE READING (164 words, brief range 140-200). One block: PassagePage splits
 *  on sentence ends and drops authored newlines. Every glossary key appears in
 *  `text` verbatim and is at most four words. The annotation itself is
 *  s18-annoter; the questions here ask the learner to mark the verbs. */
const S17_LECTURE: LessonSection = {
  type: 'reading',
  id: 's17-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le tram de 16 h',
  frSub: 'Lis et repère les verbes',
  text: READING_TEXT,
  glossary: [
    { word: 'place Bellecour', en: 'Place Bellecour', note: 'Une grande place au centre de Lyon.' },
    { word: 'personne ne parlait', en: 'nobody was talking', note: 'personne ne... : nobody. Un décor : ça dure.' },
    { word: 'à moitié', en: 'half', note: 'Elle dormait à moitié : she was half asleep.' },
    { word: "l'arrêt suivant", en: 'the next stop', note: 'Un arrêt de tram ou de bus.' },
    { word: 'le bouton rouge', en: 'the red button', note: "Le bouton pour demander l'arrêt." },
    { word: 'le pont', en: 'the bridge', note: 'Lyon a beaucoup de ponts, sur le Rhône et la Saône.' },
    { word: 'au commissariat', en: 'to the police station', note: 'En France. Au Québec, on dit plutôt le poste de police.' },
  ],
  questions: [
    { q: 'Relève les verbes des cinq premières phrases. Décor ou action ?', a: "Tous au décor : c'était, faisait, pleuvait, attendait, écoutait, pensait, regardaient, parlait. Rien n'arrive encore." },
    { q: "Quel est le premier verbe qui fait avancer l'histoire ?", a: "« Le tram est arrivé ». Après, la situation change : Awa monte." },
    { q: "« Pendant qu'elle dormait à moitié, un homme s'est assis. » Quelle forme ?", a: "La coupure : une bande (dormait) et un point (s'est assis)." },
    { q: '« Il n\'était plus dans sa poche. » Pourquoi l\'imparfait ?', a: "C'est la situation qu'Awa découvre : un état, pas une action." },
    { q: "« L'homme courait déjà vers le pont. » Décor ou action ?", a: "Le décor : Awa voit l'homme en train de courir. Ça a commencé avant et ça continue." },
  ],
  audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-b1-03-lecture' },
  say: REFRAME,
  terms: ['decor', 'action', 'coupure'],
};

/** THE ANNOTATION. The reading's verbs, sorted by job. Items are quotations
 *  of READING_TEXT, so no itemId. Check indices 2,1,0. */
const S18_ANNOTER: LessonSection = {
  type: 'groupDrill',
  id: 's18-annoter',
  layer: 'core',
  size: 'lg',
  title: 'Annote le texte',
  groups: [
    {
      label: 'Le début du texte',
      items: [
        { fr: 'Il faisait froid et il pleuvait un peu.', note: 'faisait, pleuvait : le décor', en: 'It was cold and raining a little.' },
        { fr: 'Awa attendait le tram place Bellecour.', note: 'attendait : le décor', en: 'Awa was waiting for the tram at Place Bellecour.' },
        { fr: 'Le tram est arrivé avec dix minutes de retard.', note: "est arrivé : l'action", en: 'The tram arrived ten minutes late.' },
      ],
      check: {
        q: "Dans ces trois phrases, où commence l'histoire ?",
        opts: ['Il faisait froid', 'Awa attendait', 'Le tram est arrivé'],
        correct: 2,
        why: "Avant le tram, tout est décor. Le tram est arrivé : c'est le premier point sur la ligne.",
      },
    },
    {
      label: 'Le milieu du texte',
      items: [
        { fr: "Pendant qu'elle dormait à moitié, un homme s'est assis à côté d'elle.", note: 'la coupure', en: 'While she was half asleep, a man sat down next to her.' },
        { fr: "À l'arrêt suivant, il est descendu très vite.", note: "est descendu : l'action", en: 'At the next stop, he got off very quickly.' },
      ],
      check: {
        q: 'Combien de verbes du décor dans ces deux phrases ?',
        opts: ['zéro', 'un', 'deux'],
        correct: 1,
        why: "Un seul : dormait. S'est assis et est descendu sont deux actions.",
      },
    },
    {
      label: 'La fin du texte',
      items: [
        { fr: "Awa a cherché son téléphone pour changer de musique, mais il n'était plus dans sa poche.", note: "a cherché : l'action · n'était plus : ce qu'elle trouve", en: 'Awa looked for her phone to change the music, but it was no longer in her pocket.' },
        { fr: "L'homme courait déjà vers le pont.", note: 'courait : une image, pas une étape', en: 'The man was already running towards the bridge.' },
      ],
      check: {
        q: "« L'homme courait déjà. » Pourquoi l'imparfait, au milieu des actions ?",
        opts: ["Awa le voit en train de courir : c'est une image du décor.", 'Parce que déjà demande toujours l\'imparfait.', "C'est une erreur du texte."],
        correct: 0,
        why: "Quand Awa descend, l'homme court déjà : ça a commencé avant. Déjà est un indice, pas une règle.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'indice'],
};

/** FORM, from the English. Meaning comes back in s21 and s23. */
const S19_FLASH: LessonSection = {
  type: 'flashcards',
  id: 's19-flash',
  layer: 'core',
  title: "Depuis l'anglais",
  cards: [
    { front: 'My bike was stolen.', back: "On m'a volé mon vélo.", say: "On m'a volé mon vélo." },
    { front: 'I was reading the paper when someone took my bike.', back: "Je lisais le journal quand quelqu'un a pris mon vélo.", say: "Je lisais le journal quand quelqu'un a pris mon vélo." },
    { front: 'It was raining and the terrace was empty.', back: 'Il pleuvait et la terrasse était vide.', say: 'Il pleuvait et la terrasse était vide.' },
    { front: 'I was sleeping when the phone rang.', back: 'Je dormais quand le téléphone a sonné.', say: 'Je dormais quand le téléphone a sonné.' },
    { front: 'While I was cooking, he arrived.', back: 'Pendant que je cuisinais, il est arrivé.', say: 'Pendant que je cuisinais, il est arrivé.' },
    { front: 'While I was reading, he was watching TV.', back: 'Pendant que je lisais, il regardait la télé.', say: 'Pendant que je lisais, il regardait la télé.' },
    { front: 'I got up, I got dressed and I went out.', back: 'Je me suis levé, je me suis habillé et je suis sorti.', say: 'Je me suis levé, je me suis habillé et je suis sorti.' },
    { front: 'I lived in Lyon for ten years.', back: "J'ai habité à Lyon pendant dix ans.", say: "J'ai habité à Lyon pendant dix ans." },
    { front: 'It rained all day.', back: 'Il a plu toute la journée.', say: 'Il a plu toute la journée.' },
    { front: 'Suddenly, the phone rang.', back: 'Soudain, le téléphone a sonné.', say: 'Soudain, le téléphone a sonné.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['coupure', 'duree'],
};

const S20_DICTEE: LessonSection = {
  type: 'dictation',
  id: 's20-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** MEANING, OUT LOUD. The insurance call the day after the theft. Two `alts`
 *  and a `userEn` on every turn. Turn 6's second alt is the imparfait of
 *  habit, which is a correct answer to the same question with another lens. */
const S21_ASSURANCE: LessonSection = {
  type: 'scenario',
  id: 's21-assurance',
  layer: 'core',
  title: "Au téléphone avec l'assurance",
  setting: "Le lendemain. Tu appelles ton assurance pour le vélo volé. L'agente est patiente, mais elle veut savoir dans quel ordre tout s'est passé.",
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
        { fr: 'Je lisais le journal à l\'intérieur.', en: 'I was reading the paper inside.' },
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

/** Every id here carries `voiceflash`. The two rule cards (.080, .081) are
 *  flashcard-only and the imported rows mostly lack voiceflash, so only
 *  fr.a2.ecole.045 is imported here. */
const S22_PARLER: LessonSection = {
  type: 'practice',
  id: 's22-parler',
  layer: 'core',
  title: 'Dis-le à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.ecole.045',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** THE TASK (draft type, _task-section.ts). The unit outcome is tested here:
 *  narrate a coherent past episode by separating setting, habit, state and
 *  completed event. */
const S23_MISSION: TaskSection = {
  type: 'task',
  id: 's23-mission',
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
      ref: 's08-trier',
    },
    {
      pattern: "One-off events in the imparfait, so the story never moves (le moteur s'éteignait, j'appelais une dépanneuse).",
      criterion: 'temps',
      feedback: "Ces verbes font avancer l'histoire : ce sont des actions, au passé composé.",
      ref: 's12-histoires',
    },
    {
      pattern: 'The interruption with both verbs in one tense (je conduisais quand la voiture faisait un bruit; j\'ai conduit quand la voiture a fait un bruit), or no quand / pendant que clause at all.',
      criterion: 'temps',
      feedback: "Dans la coupure, la bande est à l'imparfait et le point au passé composé : je conduisais quand la voiture a fait un bruit.",
      ref: 's09-coupure',
    },
    {
      pattern: "A stated, finished duration in the imparfait (j'attendais deux heures, j'habitais là pendant dix ans).",
      criterion: 'temps',
      feedback: "Deux heures, et c'est fini : une durée fermée prend le passé composé, même si elle est longue.",
      ref: 's13-duree',
    },
    {
      pattern: "A cue word used as a trigger: imparfait forced after d'habitude or tous les jours for a one-off event, or every verb after soudain forced into the passé composé.",
      criterion: 'temps',
      feedback: 'Soudain ou d\'habitude sont des indices, pas des règles. Demande-toi : décor ou action ?',
      ref: 's15-indices',
    },
    {
      pattern: "Wrong auxiliary: j'ai sorti (intransitive), j'ai arrivé, j'ai tombé, je m'ai levé.",
      criterion: 'formes',
      feedback: 'Sortir, arriver, tomber et les verbes pronominaux prennent être : je suis sortie, je me suis levée.',
      ref: 's16-erreurs',
    },
    {
      pattern: 'Missing or wrong agreement after être, judged against the narrator the text itself sets up (a woman writing « je suis sorti », « nous sommes arrivé »).',
      criterion: 'formes',
      feedback: "Avec être, le participe s'accorde avec le sujet : je suis arrivée, nous sommes arrivés.",
      ref: 's16-erreurs',
    },
    {
      pattern: "Imparfait form errors: wrong stem or ending (je conduiais, il faisais, nous mangions written mangions/mangeons confusion, j'étai).",
      criterion: 'formes',
      feedback: "Revois la forme de l'imparfait : le radical de nous au présent, puis -ais, -ais, -ait, -ions, -iez, -aient.",
      ref: 's04-deja',
    },
    {
      pattern: 'A list of sentences with no connectors, or a story that stops at the problem with no ending.',
      criterion: 'recit',
      feedback: "Guide ton lecteur : d'abord, ensuite, alors, finalement. Et raconte comment ça s'est fini.",
      ref: 's17-lecture',
    },
    {
      pattern: 'Under 80 words, no unexpected event (panne, rencontre, oubli), or the text is not in the past.',
      criterion: 'tache',
      feedback: 'Relis la mission : un imprévu, au passé, de 80 à 120 mots, avec une fin.',
      ref: 's23-mission',
    },
  ],
  graderNotes: [
    'Judge tense by FUNCTION in this text, not by surface cues. A verb after « soudain » can legitimately be imparfait if it describes a new state that lasts (« Soudain, il faisait noir »); do not mark it wrong.',
    'Count imparfait and passé composé verbs separately for the checklist: at least 3 each. Auxiliary + participle is one passé composé verb.',
    'The interruption requirement is met by « quand » or « pendant que » with one ongoing imparfait and one passé composé event, in either clause order. « Quand » + two passés composés is a sequence, not an interruption.',
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance (72-132) before criterion « tache » loses its point.',
    'Narrator gender is unknown: judge être agreement for internal consistency only.',
    'Do not score the meaning-shift verbs of b1.04 (savoir, connaître, vouloir, pouvoir, avoir) as errors in either tense.',
    'Accept regional vocabulary (dépanneuse / remorqueuse, char in Québec, taxi-brousse in West Africa).',
    'Feedback language: simple French (B1), one short English gloss allowed per comment.',
  ],
};

const S24_BILAN: LessonSection = {
  type: 'progressCheck',
  id: 's24-bilan',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais séparer le décor et l'action, raconter une action coupée, et donner une durée fermée au passé composé. Le piège qui reste, c'est l'indice pris pour une règle : soudain ne force rien. Relis ta mission écrite. Souligne chaque verbe et écris à côté : décor ou action. Si les deux listes racontent la même histoire que ton texte, la leçon a marché. EN: Underline every verb in your task and label it; if the labels tell your story, the lesson landed.",
  stats: [
    { k: 'Le décor', v: "l'imparfait : ce qui se passait" },
    { k: "L'action", v: "le passé composé : ce qui s'est passé" },
    { k: 'La coupure', v: 'une bande, un point' },
    { k: 'Durée fermée', v: 'passé composé, même si longue' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT VI — L'EXAMEN
 * ══════════════════════════════════════════════════════════════════════════ */

/** ONE QUIZ, four rounds of six, one error trigger each. typeIn and errorSpot
 *  carry `prompt`; listenChoose carries `say`. No answer depends on a comma
 *  (fold strips them). Authored correct slots over mcq/listenChoose:
 *  0 x4, 1 x5, 2 x4 of 13 (38%, cap 40). */
const S25_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's25-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-decor',
      label: "Le décor ou l'action",
      targets: ['tout-au-pc'],
      questions: [
        { format: 'mcq', q: 'Complète avec pleuvoir : « Il ___ et la terrasse était vide. »', opts: ['pleuvait', 'a plu', 'pleut'], correct: 0, why: "Rien n'arrive : c'est le décor, à l'imparfait.", ref: 's08-trier' },
        { format: 'typeIn', q: 'Mets le verbe au bon temps et écris la phrase.', prompt: 'Mon vélo (être) attaché devant le café.', answer: 'Mon vélo était attaché devant le café.', accept: ['Mon vélo était attaché devant le café', 'Mon vélo était attaché devant le café.'], why: "Un état, pas une étape : l'imparfait.", ref: 's08-trier' },
        { format: 'errorSpot', q: 'Le décor est raconté comme une action. Corrige la phrase.', prompt: 'Quand nous sommes arrivés, la terrasse a été déjà pleine.', answer: 'Quand nous sommes arrivés, la terrasse était déjà pleine.', accept: ['Quand nous sommes arrivés, la terrasse était déjà pleine.', 'Quand nous sommes arrivés la terrasse était déjà pleine'], why: "La terrasse était pleine avant l'arrivée : c'est le décor qu'on trouve.", ref: 's07-lentilles' },
        { format: 'listenChoose', q: "Écoute. Cette phrase fait-elle avancer l'histoire ?", say: 'Il neigeait et les rues étaient vides.', opts: ["Oui, c'est une action.", "Non, c'est le décor."], correct: 1, why: 'Deux imparfaits, deux bandes : la neige et les rues vides. Rien ne change.', ref: 's06-ligne' },
        { format: 'mcq', q: "Quelle phrase dit à l'agente que le vol a coupé la lecture ?", opts: ["J'ai lu le journal quand quelqu'un prenait mon vélo.", "J'ai lu le journal, puis quelqu'un a pris mon vélo.", "Je lisais le journal quand quelqu'un a pris mon vélo."], correct: 2, why: 'La lecture est la bande, le vol est le point qui la coupe.', ref: 's01-scene' },
        { format: 'typeIn', q: 'Mets les deux verbes au bon temps et écris la phrase.', prompt: 'Il (pleuvoir) quand je (sortir).', answer: 'Il pleuvait quand je suis sorti.', accept: ['Il pleuvait quand je suis sorti', 'Il pleuvait quand je suis sortie', 'Il pleuvait quand je suis sorti.', 'Il pleuvait quand je suis sortie.'], why: 'La pluie est le décor, la sortie est une action avec être.', ref: 's14-meme-verbe' },
      ],
    },
    {
      id: 'r2-action',
      label: "L'action qui coupe",
      targets: ['tout-a-limparfait'],
      questions: [
        { format: 'typeIn', q: 'Mets les deux verbes au bon temps et écris la phrase.', prompt: 'Je (dormir) quand le téléphone (sonner).', answer: 'Je dormais quand le téléphone a sonné.', accept: ['Je dormais quand le téléphone a sonné', 'Je dormais quand le téléphone a sonné.'], why: 'Je dormais : la bande. Le téléphone a sonné : le point.', ref: 's09-coupure' },
        { format: 'errorSpot', q: 'Personne ne coupe le décor. Corrige le deuxième verbe.', prompt: "Nous mangions quand la lumière s'éteignait.", answer: "Nous mangions quand la lumière s'est éteinte.", accept: ["Nous mangions quand la lumière s'est éteinte.", "Nous mangions quand la lumière s'est éteinte"], why: "La lumière s'éteint à un moment précis : c'est le point qui coupe le repas.", ref: 's09-coupure' },
        { format: 'mcq', q: '« Pendant que je cuisinais, il ___ . »', opts: ['arrivait', 'arrive', 'est arrivé'], correct: 2, why: "Il arrive à un moment précis, pendant le décor : le passé composé.", ref: 's09-coupure' },
        { format: 'mcq', q: "« Awa est montée, elle a trouvé une place et elle a fermé les yeux. » Combien d'actions ?", opts: ['trois', 'deux', 'une'], correct: 0, why: "Trois passés composés, trois points, dans l'ordre.", ref: 's18-annoter' },
        { format: 'listenChoose', q: 'Écoute. Est-ce que je dormais quand le téléphone a sonné ?', say: "Quand le téléphone a sonné, j'ai répondu.", opts: ["Oui, c'est dit.", "Ce n'est pas dit : ce sont deux actions."], correct: 1, why: 'Deux passés composés : la sonnerie, puis la réponse. Rien sur le sommeil.', ref: 's12-histoires' },
        { format: 'errorSpot', q: 'Un seul matin, trois étapes. Corrige les trois verbes.', prompt: "Ce matin-là, je me levais, je m'habillais et je sortais.", answer: 'Ce matin-là, je me suis levé, je me suis habillé et je suis sorti.', accept: ['Ce matin-là, je me suis levé, je me suis habillé et je suis sorti.', 'Ce matin-là, je me suis levée, je me suis habillée et je suis sortie.', 'Ce matin-là je me suis levé je me suis habillé et je suis sorti', 'Ce matin-là je me suis levée je me suis habillée et je suis sortie'], why: 'Trois actions qui se suivent, une seule fois : le passé composé, avec être.', ref: 's16-erreurs' },
      ],
    },
    {
      id: 'r3-indices',
      label: 'Des indices, pas des règles',
      targets: ['indice-regle'],
      questions: [
        { format: 'mcq', q: '« Soudain, il faisait noir. » Cette phrase est...', opts: ['impossible : soudain demande le passé composé', 'possible : elle décrit le nouveau décor'], correct: 1, why: "Soudain annonce souvent une action, pas toujours. Ici, c'est un nouveau décor qui dure.", ref: 's15-indices' },
        { format: 'typeIn', q: 'Mets le verbe au bon temps et écris la phrase.', prompt: 'Tous les jours pendant un mois, je (courir).', answer: "Tous les jours pendant un mois, j'ai couru.", accept: ["Tous les jours pendant un mois, j'ai couru", "Tous les jours pendant un mois, j'ai couru."], why: "Un mois, fermé et fini : on compte. Tous les jours n'y change rien.", ref: 's15-indices' },
        { format: 'mcq', q: '« Tous les jours, je ___ le même bus. »', opts: ['prenais', 'ai pris'], correct: 0, why: "Une habitude sans limite donnée : le décor, à l'imparfait.", ref: 's15-indices' },
        { format: 'errorSpot', q: 'Une seule fois, ce matin-là. Corrige le premier verbe.', prompt: "Ce matin-là, je prenais le bus, puis j'ai marché jusqu'au bureau.", answer: "Ce matin-là, j'ai pris le bus, puis j'ai marché jusqu'au bureau.", accept: ["Ce matin-là, j'ai pris le bus, puis j'ai marché jusqu'au bureau.", "Ce matin-là j'ai pris le bus puis j'ai marché jusqu'au bureau"], why: 'Puis enchaîne deux étapes. Les deux sont des actions.', ref: 's15-indices' },
        { format: 'mcq', q: "Qu'est-ce qui décide le temps du verbe ?", opts: ['la longueur de la phrase', 'un mot comme soudain', "le rôle du verbe dans l'histoire"], correct: 2, why: "Les mots de temps sont des indices. Le rôle du verbe décide : décor ou action.", ref: 's15-indices' },
        { format: 'listenChoose', q: 'Écoute. Il se passe quelque chose de nouveau ?', say: "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus.", opts: ["Non, c'est le décor.", 'Oui, une action.'], correct: 0, why: "Un jour ouvre le décor ici : le froid et l'attente. L'action viendra après.", ref: 's15-indices' },
      ],
    },
    {
      id: 'r4-duree',
      label: 'Long, mais fermé',
      targets: ['duree-longue'],
      questions: [
        { format: 'typeIn', q: 'Mets le verbe au bon temps et écris la phrase.', prompt: "J'(habiter) à Lyon pendant dix ans.", answer: "J'ai habité à Lyon pendant dix ans.", accept: ["J'ai habité à Lyon pendant dix ans", "J'ai habité à Lyon pendant dix ans."], why: 'Dix ans, donnés et finis : une durée fermée.', ref: 's13-duree' },
        { format: 'mcq', q: "« J'___ à Lyon quand j'ai rencontré Claire. »", opts: ['ai habité', 'habitais', 'habite'], correct: 1, why: "Lyon est le décor de la rencontre, sans durée donnée : l'imparfait.", ref: 's13-duree' },
        { format: 'errorSpot', q: 'La durée est fermée. Corrige la phrase.', prompt: "Nous attendions deux heures à l'urgence.", answer: "Nous avons attendu deux heures à l'urgence.", accept: ["Nous avons attendu deux heures à l'urgence.", "Nous avons attendu deux heures à l'urgence", 'Nous avons attendu deux heures aux urgences.'], why: 'Deux heures, et fini : le passé composé.', ref: 's13-duree' },
        { format: 'mcq', q: '« La semaine dernière, il a fait très froid. » Pourquoi le passé composé pour la météo ?', opts: ['La météo est toujours au passé composé.', 'Une semaine, fermée et finie.', "C'est une erreur."], correct: 1, why: "La météo est souvent le décor, mais ici la durée est fermée : une semaine.", ref: 's14-meme-verbe' },
        { format: 'typeIn', q: 'Mets les deux verbes au bon temps et écris la phrase.', prompt: "Il (pleuvoir) quand je suis parti, et il (pleuvoir) jusqu'au soir.", answer: "Il pleuvait quand je suis parti, et il a plu jusqu'au soir.", accept: ["Il pleuvait quand je suis parti, et il a plu jusqu'au soir.", "Il pleuvait quand je suis parti et il a plu jusqu'au soir"], why: "Le même verbe deux fois : d'abord le décor du départ, puis une durée fermée.", ref: 's14-meme-verbe' },
        { format: 'mcq', q: '« Elle a vécu à Lyon pendant deux ans. » Elle y vit encore ?', opts: ['Oui', 'On ne sait pas', "Non, c'est fini"], correct: 2, why: 'Le passé composé avec une durée : la période est fermée.', ref: 's13-duree' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const S26_REVISION: LessonSection = {
  type: 'reviewDeck',
  id: 's26-revision',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'le décor', back: "l'imparfait", say: 'Il pleuvait et la terrasse était vide.' },
    { front: "l'action", back: 'le passé composé', say: "On m'a volé mon vélo." },
    { front: 'la coupure', back: 'imparfait + passé composé', say: 'Je dormais quand le téléphone a sonné.' },
    { front: 'deux décors', back: 'deux imparfaits', say: 'Pendant que je lisais, il regardait la télé.' },
    { front: 'une suite', back: 'des passés composés', say: 'Je me suis levé, je me suis habillé et je suis sorti.' },
    { front: 'une durée fermée', back: 'le passé composé', say: "J'ai habité à Lyon pendant dix ans." },
    { front: 'soudain', back: 'un indice, pas une règle', say: "Soudain, il faisait noir et on n'entendait plus rien." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** `points` capped at four on a core screen. b1.04 is named as next. */
const S27_RESUME: LessonSection = {
  type: 'roundup',
  id: 's27-resume',
  layer: 'core',
  title: 'Le film, en résumé',
  body: `${REFRAME} Tu choisis le temps par le rôle du verbe : ce qui se passait, ou ce qui s'est passé. La prochaine leçon garde ce film et ajoute des verbes qui changent de sens selon le temps, comme savoir ou connaître. EN: Next lesson, verbs whose meaning shifts with the tense.`,
  points: [
    "Le décor : l'imparfait. L'action : le passé composé.",
    "La coupure : une bande à l'imparfait, un point au passé composé.",
    'Une durée fermée prend le passé composé, même longue.',
    'Soudain, tous les jours, d\'habitude : des indices, pas des règles.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'indice'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFERENCE SHEET: the one `table`, layer deep, render sheet.
 * ══════════════════════════════════════════════════════════════════════════ */

const SHEET_FILM: ReferenceSheet = {
  id: 'sheet-film',
  title: 'Le décor et l\'action, sur une page',
  layer: 'deep',
  contains: ['les six formes', 'les indices et leurs contre-exemples'],
  sections: [
    {
      type: 'teach',
      id: 'sheet-teach',
      layer: 'deep',
      render: 'sheet',
      title: 'Comment lire cette page',
      body: `${REFRAME} Pour chaque verbe, pose une question : est-ce que ça se passait déjà (le décor), ou est-ce que ça s'est passé et a changé la situation (l'action) ? Les mots de temps aident, mais ils ne décident pas. Une durée donnée et finie prend le passé composé, même si elle est longue. EN: ${REFRAME_EN} Ask of each verb whether it was going on or whether it happened; time words are clues, and a stated finished duration takes the passé composé.`,
    },
    {
      type: 'table',
      id: 'sheet-table',
      layer: 'deep',
      render: 'sheet',
      title: 'Les six formes',
      cols: ['Forme', 'Temps', 'Exemple'],
      rows: [
        ['le décor', 'imparfait', 'Il pleuvait et la terrasse était vide.'],
        ['une action', 'passé composé', "On m'a volé mon vélo."],
        ['la coupure', 'imparfait + passé composé', 'Je dormais quand le téléphone a sonné.'],
        ['deux décors', 'imparfait + imparfait', 'Pendant que je lisais, il regardait la télé.'],
        ['une suite', 'passé composé x 3', 'Je me suis levé, je me suis habillé et je suis sorti.'],
        ['durée fermée', 'passé composé', "J'ai habité à Lyon pendant dix ans."],
      ],
    },
    {
      type: 'table',
      id: 'sheet-indices',
      layer: 'deep',
      render: 'sheet',
      title: 'Les indices et leurs contre-exemples',
      cols: ['Indice', 'Souvent', 'Mais aussi'],
      rows: [
        ['soudain', 'Soudain, le téléphone a sonné.', "Soudain, il faisait noir et on n'entendait plus rien."],
        ['tout à coup', 'Tout à coup, la porte a claqué.', "Tout à coup, je n'avais plus envie de rire."],
        ['un jour', "Un jour, j'ai trouvé un portefeuille dans le métro.", "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus."],
        ['tous les jours', 'Tous les jours, je prenais le même bus.', "Tous les jours pendant un mois, j'ai couru."],
        ["d'habitude", "D'habitude, il arrivait à huit heures.", "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus."],
        ['pendant que', 'Pendant que je lisais, il regardait la télé.', "Pendant que tu as fait les courses, j'ai rangé la cuisine."],
      ],
    },
  ],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS. Not in `sections`. Each quiz round's first target
 *  resolves to exactly one of these.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILLS: LessonDrill[] = [
  {
    id: 'd-decor',
    title: 'Décor ou action',
    format: 'sort' as const,
    coach: "Deux piles. Pour chaque phrase, demande-toi : ça se passait déjà, ou ça s'est passé ?",
    buckets: ['le décor', "l'action"],
    items: [E(3), E(5), E(22), E(1), E(30), E(62)],
    audio: AUDIO,
  },
  {
    id: 'd-action',
    title: 'Le point qui coupe',
    format: 'mcq' as const,
    coach: 'Une bande à l\'imparfait, puis un moment précis qui la coupe.',
    q: 'Je dormais quand le téléphone ... .',
    opts: ['sonnait', 'a sonné'],
    correct: 1,
    why: "Le téléphone sonne à un moment précis : c'est le point, au passé composé.",
    items: [E(10), E(11), E(12), E(14)],
    audio: AUDIO,
  },
  {
    id: 'd-coupure',
    title: 'La coupure, encore une fois',
    format: 'mcq' as const,
    coach: 'Pendant que ouvre souvent le décor.',
    q: 'Pendant que je ..., il est arrivé.',
    opts: ['ai cuisiné', 'cuisinais'],
    correct: 1,
    why: "La cuisine est en cours quand il arrive : c'est la bande, à l'imparfait.",
    items: [E(11), E(2)],
    audio: AUDIO,
  },
  {
    id: 'd-indice',
    title: 'Indice et contre-exemple',
    format: 'flashcard' as const,
    coach: 'Chaque indice a un cas normal et un contre-exemple. Lis les deux.',
    items: [E(60), E(61), E(71), E(68), E(62), E(63), E(64), E(65), E(66), E(67), E(69), E(81)],
    audio: AUDIO,
  },
  {
    id: 'd-duree',
    title: 'Long, mais fermé',
    format: 'mcq' as const,
    coach: 'La longueur ne compte pas. Demande-toi si la durée est donnée et finie.',
    q: "J'... à Lyon pendant dix ans.",
    opts: ['habitais', 'ai habité'],
    correct: 1,
    why: 'Dix ans, donnés et finis : une durée fermée, au passé composé.',
    items: [E(40), E(41), E(42), 'fr.a2.ecole.045', 'fr.b1.heure-et-date.017'],
    audio: AUDIO,
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: DraftSection[] = [
  S01_SCENE, S02_GOALS, S03_ECOUTE,
  S04_DEJA, S05_FILM, S06_LIGNE, S07_LENTILLES, S08_TRIER,
  S09_COUPURE, S10_FORMES, S11_TABLEAU, S12_HISTOIRES,
  S13_DUREE, S14_MEME_VERBE, S15_INDICES, S16_ERREURS,
  S17_LECTURE, S18_ANNOTER, S19_FLASH, S20_DICTEE, S21_ASSURANCE, S22_PARLER, S23_MISSION, S24_BILAN,
  S25_QUIZ, S26_REVISION, S27_RESUME,
];

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** One slice per act. Only rows with `flashcard`; every row released once,
 *  in the act that first shows it. NOT_DECK_ABLE rows are named, never
 *  released. */
export const DECK_TRANCHE: string[][] = [
  // act 1: the scene
  [E(1), E(2), E(3), E(4), E(5), E(6)],
  // act 2: the film, the timeline, the lenses
  [
    E(80), E(10), E(20), E(22), E(30), E(32), E(40), E(62), E(64),
    'fr.b1.cafe.083', 'fr.b1.cafe.096', 'fr.b1.maison.067', 'fr.a2.objets.106',
    'fr.b1.routines.080', 'fr.b1.routines.092', 'fr.a2.routines.061', 'fr.b1.sports-et-loisirs.086',
  ],
  // act 3: interruption, two backgrounds, sequences
  [
    E(11), E(12), E(13), E(14), E(15), E(21), E(31), E(33), E(69), E(70),
    'fr.b1.cafe.085', 'fr.a2.routines.063', 'fr.a2.cuisine.042', 'fr.b1.maison.073',
  ],
  // act 4: duration, same verb, cues
  [
    E(41), E(42), E(43), E(44), E(50), E(51),
    E(60), E(61), E(63), E(65), E(66), E(67), E(68), E(71), E(81),
    'fr.a2.ecole.045', 'fr.b1.heure-et-date.017', 'fr.a2.heure-et-date.138',
  ],
  // act 5: production releases nothing new
  [],
  // act 6: the quiz releases nothing new
  [],
];

/** The lesson as the schema sees it, task included. Typed through
 *  `Omit<Lesson,'sections'>` because `sections` holds the draft union. */
export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: 'b1',
  tag: 'B1 · LEÇON 03',
  intro: 'You can build the imparfait and the passé composé. This lesson is about choosing between them. Think of a story as a film: the imparfait paints the set, what was already going on, and the passé composé is each thing that happens and moves the film forward. Time words like soudain or tous les jours help, but they do not decide.',
  skill: 'PE',
  grammarAssumed: [
    IMP_FORM_UNIT, IMP_USE_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PARTICIPLE_UNIT,
    PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT, TIME_PREP_UNIT,
  ],
  grammarIntroduced: [
    'Aspectual choice between imparfait and passé composé by narrative function: background (setting, states, ongoing actions) against foreground events that advance the story',
    'The interruption frame: an ongoing imparfait action cut by a passé composé event, with quand or pendant que, in either clause order',
    'Two simultaneous backgrounds in the imparfait, and a chain of completed events in the passé composé',
    'Bounded duration (pendant dix ans, toute la journée) takes the passé composé regardless of length',
    'The same verb in both tenses within one narrative',
    'Temporal adverbials (soudain, tout à coup, un jour, tous les jours, d\'habitude, pendant que) as probabilistic cues rather than triggers, each with a counterexample',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais former l'imparfait et le passé composé. Cette leçon t'apprend à choisir. Une histoire, c'est un film : l'imparfait pose le décor, ce qui se passait déjà, et le passé composé fait avancer le film, action après action. Les mots comme soudain ou tous les jours aident, mais ils ne décident pas.",
    minutes: 40,
    difficulty: 3,
    glyph: '◐',
    screens: 128,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: "Le décor et l'action",
      sections: ['s01-scene', 's02-goals', 's03-ecoute'],
      milestone: "Tu as entendu une déclaration fausse et la même, corrigée. La différence, c'est le décor.",
      estScreens: 18,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'Le film',
      sections: ['s04-deja', 's05-film', 's06-ligne', 's07-lentilles', 's08-trier'],
      milestone: "Tu sais dire si un verbe est le décor ou l'action.",
      estScreens: 28,
      restPoints: ['s06-ligne'],
    },
    {
      id: 'act3',
      title: "Quand l'action coupe le décor",
      sections: ['s09-coupure', 's10-formes', 's11-tableau', 's12-histoires'],
      milestone: 'Tu racontes une action coupée, deux décors et une suite.',
      estScreens: 26,
      restPoints: ['s11-tableau'],
    },
    {
      id: 'act4',
      title: 'Les pièges',
      sections: ['s13-duree', 's14-meme-verbe', 's15-indices', 's16-erreurs'],
      milestone: "Dix ans peuvent être fermés, et soudain ne décide rien.",
      estScreens: 26,
      restPoints: ['s15-indices'],
    },
    {
      id: 'act5',
      title: 'Lire et raconter',
      sections: ['s17-lecture', 's18-annoter', 's19-flash', 's20-dictee', 's21-assurance', 's22-parler', 's23-mission', 's24-bilan'],
      milestone: 'Tu as écrit ton propre récit, décor et actions séparés.',
      estScreens: 34,
      restPoints: ['s18-annoter', 's21-assurance'],
    },
    {
      id: 'act6',
      title: "L'examen",
      sections: ['s25-quiz', 's26-revision', 's27-resume'],
      milestone: 'Vingt-quatre questions, et le film une dernière fois.',
      estScreens: 30,
      restPoints: ['s26-revision'],
    },
  ],
  errorTriggers: [
    {
      id: 'tout-au-pc',
      description: "Tells the whole episode in the passé composé, so the setting and states become a list of steps.",
      detectOn: ['s01-scene', 's08-trier', 's16-erreurs', 's23-mission'],
      drill: 'd-decor',
      retest: 'd-coupure',
    },
    {
      id: 'tout-a-limparfait',
      description: 'Puts one-off events in the imparfait, so the story never moves forward.',
      detectOn: ['s09-coupure', 's12-histoires', 's18-annoter', 's23-mission'],
      drill: 'd-action',
      retest: 'd-coupure',
    },
    {
      id: 'indice-regle',
      description: 'Treats a time word (soudain, tous les jours, d\'habitude, pendant que) as a rule that fixes the tense.',
      detectOn: ['s15-indices', 's12-histoires', 's23-mission'],
      drill: 'd-indice',
    },
    {
      id: 'duree-longue',
      description: 'Uses the imparfait for a stated, finished duration because it was long.',
      detectOn: ['s13-duree', 's16-erreurs', 's23-mission'],
      drill: 'd-duree',
      retest: 'd-duree',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: [SHEET_FILM],
  terms: PC_IMPARFAIT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: [
      { id: 'rec-b1-03-ecoute', desc: "The officer reads the statement back. ONE VOICE, ONE TAKE, ten lines in order, Québec accent, calm and procedural. The imparfait lines (2, 3, 4, 9) are read as description, even pace; the passé composé lines (5 to 8) slightly more clipped, as a sequence. Do not stress the verb endings: the learner must hear the tense, not a performance of it." },
      { id: 'rec-b1-03-film', desc: 'Four cards. Card 1 (décor) read slowly and evenly; card 2 (action) read as a single event. The reframe on card 4 read as one breath, with the full stop between the two sentences audible.' },
      { id: 'rec-b1-03-coupure', desc: 'Interruption cards. Read the imparfait clause with a level, continuing intonation and the passé composé clause as a falling, completed one. Card 3 is card 2 with the clauses swapped: identical tenses and identical pace, or the card contradicts itself.' },
      { id: 'rec-b1-03-indices', desc: 'Six counterexamples. Read each as ordinary narrative, never as a trick: the point of the card is that the sentence is normal French.' },
      { id: 'rec-b1-03-lecture', desc: 'The Lyon reading, France accent, one take, natural storytelling pace. The descriptive first five sentences at an even pace; from « Le tram est arrivé » the narration picks up slightly. No pause is inserted between décor and action beyond what the punctuation gives.' },
    ],
  },
};

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];

/** The task, exported so the review and a future renderer can read it alone. */
export const TASK = S23_MISSION;
export { IMPORTED };
