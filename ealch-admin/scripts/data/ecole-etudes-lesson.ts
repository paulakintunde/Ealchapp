// a2.31.l1 « L'école & les études » — the lesson.
//
// 26 sections, six acts, one quiz, one lesson. Every section is a mission: the
// renderer numbers one per section and the design distinction between missions
// and sections does not exist (a2.07 verified it on a device).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE SECTION COUNT, AND THE ONE PLACE THIS BUILD DIFFERS FROM ITS PROMPT
// ══════════════════════════════════════════════════════════════════════════
//
// The prompt asks for 24 sections including the roundup, and gets there by
// telling this build to "take the merge" of `reviewDeck` into `progressCheck`.
// THIS LESSON HAS NO reviewDeck, so there is no merge to take and the
// instruction resolves to nothing.
//
// 26 is inside the measured range and needs no apology. A2-BUILD-DOCTRINE §F
// was CORRECTED ON 2026-08-16 against all 70 shipped lessons: the A2 range is
// 23 to 32 with a median of 24, ten of the 29 A2 lessons exceed 24, and a2.13
// ships 32. The correction names a2.07 at 25 and a2.29 at 25 as INSIDE the
// range. The old "19 to 24" line the prompt and the design both quote is an A1
// figure that was never the A2 ceiling.
//
// Two sections earn the difference:
//
//   s24-check        the progressCheck that shows the dossier assembled. It is
//                    the payoff of the whole through-line, and cutting it to
//                    hit a number derived from a merge this lesson cannot make
//                    would have left the document filling up and never shown
//                    full.
//   s05-credentials  added AFTER A MEASUREMENT, not by preference. Eighteen of
//                    this build's imports carry `voiceflash` and `review` and
//                    NOT `flashcard`, so no deck in the product can serve them
//                    and a deckTranche release of any of them draws nothing.
//                    Nine are named here by `itemId`, four in s08-subjects, and
//                    five were dropped from the import list outright. Without
//                    it, eighteen imported cards would have been declared,
//                    resolved and drawn by nothing, which is a1.08's failure
//                    exactly (invariants §1).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE UNTESTED-REPETITION SET, AND WHY THIS UNIT IS NOT DEVICE-GATED
// ══════════════════════════════════════════════════════════════════════════
//
// Collation 1.10: the genuinely untested set is `scene`, `scenario`,
// `reading`, `dictation` and `table`. This lesson uses ONE of each of the first
// four and ZERO `table`. Blocking step 4 names a2.07, a2.28, a2.29 and a2.32;
// a2.31 is explicitly unblocked, and this file keeps it that way.
//
// `tapTable` is what the band actually uses (123 sections against `table`'s
// zero across 70 lessons), and BOTH tapTables here sit IN THE FLOW at
// layer 'core'. Neither goes to a `sheet`: `ReferenceSheet.tsx` handles
// `teach`, `letterGrid` and `table` only, `cheatSheet` is the known casualty
// in that position, and nobody has device-checked `tapTable` there. The prompt
// offers two safe routes and this is the first of them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE FIVE FIELDS THAT DRAW NOTHING (41-DEAD-FIELDS-WARNING.md)
// ══════════════════════════════════════════════════════════════════════════
//
// a2.07 shipped, published at rollout 10 and passed 4,195 tests with 33 blank
// lines in it. None of the five is here:
//
//   `sub` on a groupDrill ITEM   -> `note`      (sub IS legal on a cardDeck CARD)
//   `itemIds` on a cardDeck      -> deckTranche (only `practice` reads itemIds)
//   `canDo` on the Lesson        -> belongs to the unit
//   `track` on the Lesson        -> dropped
//   `teaches` on the Lesson      -> `grammarIntroduced` + `grammarAssumed`
//
// `pnpm -C ealch-admin typecheck` is the only check that sees a field the
// renderer does not read, and it is run as part of this build.

import type { Lesson, LessonSection, LessonDrill, SectionAudio } from '../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, REFRAME, E,
  LAYER_1, LAYER_2, LAYER_3, LAYER_4,
  REPAIR_IDS, REPAIR_UNIT, LADDER_IDS, LADDER_UNIT, RUNG_1, RUNG_2, RUNG_3,
  TENSE_UNIT, TIME_UNIT, INTERVIEW_UNIT,
  ALL_ROWS, IMPORT_IDS, DICTEE_IDS, PASSER_AS_PASS_WRONG,
} from './ecole-etudes-corpus.ts';
import { ECOLE_TERMS } from './ecole-etudes-terms.ts';

/** NOT `as const`. A readonly `speeds` tuple is not assignable to
 *  `SectionAudio['speeds']`, which is a mutable `number[]`, and the admin
 *  typecheck is the only check in this project that says so. */
const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT I — THE BOX YOU CANNOT FILL
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.2's A2 register: breakdown, not rudeness. Nobody is impolite.
 *  The learner types the only name their qualification has and the form cannot
 *  act on it. LessonSection is a UNION and only the scene variant has `beats`,
 *  so the const is typed through Extract rather than as a bare array. */
const SCENE_BEATS: Extract<LessonSection, { type: 'scene' }>['beats'] = [
  {
    kind: 'narration',
    text: 'An online application form, open on a laptop. Twelve fields done, one left. It says: Dernier diplôme obtenu.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: 'Bachelor of Science',
    en: 'Bachelor of Science',
    stage: 'You type the only name it has ever had.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'narration',
    text: 'The field turns red. Underneath, in small grey letters: Valeur non reconnue. Choisissez dans la liste.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'The list',
    fr: 'Bac, Bac +2, Bac +3, Bac +5',
    en: 'Bac, Bac +2, Bac +3, Bac +5',
    stage: 'Four options. Your qualification is not one of them.',
    size: 'md',
    audio: AUDIO,
  },
  {
    kind: 'choice',
    prompt: 'The form will not take the name. What do you give it?',
    size: 'lg',
    options: [
      { fr: 'Type the name again, in capitals', en: 'Type the name again, in capitals', outcome: 'breaks' },
      { fr: 'Give the level and the length instead', en: 'Give the level and the length instead', outcome: 'works' },
    ],
    followUp: {
      works: 'Bac +3. The form takes it, because that is a thing it knows how to count.',
      breaks: 'It goes red again. The name was never the problem.',
    },
  },
  {
    kind: 'break',
    heading: 'It is not asking what yours is called',
    body: 'It is asking how far you went and how long it took. The name of your qualification means nothing here, and saying it louder does not give it a meaning. What the form counts is years after the bac.',
    wrong: {
      fr: 'Bachelor of Science',
      ipa: '/ba.tʃə.lɔʁ ɔf saj.ɑ̃s/',
      respell: '[ba-chuh-LOR of sa-YAHⁿSS]',
      en: 'Bachelor of Science',
    },
    right: {
      fr: "C'est l'équivalent d'une licence. J'ai fait trois ans après le bac.",
      ipa: '/sɛ le.ki.va.lɑ̃ dyn li.sɑ̃s ʒe fɛ tʁwa zɑ̃ a.pʁɛ lə bak/',
      respell: "[seh lay-kee-va-LAHⁿ dün lee-SAHⁿSS zhay FEH trwa-ZAHⁿ a-PREH luh BAK]",
      en: "It is the equivalent of a licence. I did three years after the bac.",
    },
    coach: 'Two sentences. A level, and a number of years. That is the whole dossier in its shortest form.',
    size: 'lg',
    audio: AUDIO,
  },
  {
    kind: 'resolve',
    text: 'The form accepts it and moves on. Nobody learned the name of your degree, and nobody needed to.',
    size: 'md',
  },
];

const S01_SCENE: LessonSection = {
  type: 'scene',
  id: 's01-scene',
  render: 'screens',
  layer: 'core',
  title: 'The box that would not take it',
  setting: { place: 'A kitchen table', city: 'Nantes', time: 'Sunday evening', ambience: 'quiet, one laptop' },
  beats: SCENE_BEATS,
  closing: { text: 'They will not know the name of your diploma. This lesson is what you say instead.', size: 'md' },
  audio: AUDIO,
  terms: ['dossier', 'hedge'],
};

const S02_GOALS: LessonSection = {
  type: 'goals',
  id: 's02-goals',
  layer: 'core',
  title: 'By the end of this lesson',
  goals: [
    { t: 'Place any French school level, and your own', s: `Line one of the dossier: ${LAYER_1}` },
    { t: 'Say what you studied, and for how long', s: `Line two: ${LAYER_2}` },
    { t: 'Report a result without inverting it', s: `Line three: ${LAYER_3}` },
    { t: 'Say it so a French speaker can place you', s: `Line four: ${LAYER_4}` },
  ],
  audio: AUDIO,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT II — THE LADDER
 * ══════════════════════════════════════════════════════════════════════════ */

const S03_LADDER: LessonSection = {
  type: 'cardDeck',
  id: 's03-ladder',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Five rungs, and what each one ends in',
  hint: 'Swipe. A rung is named by where it sits, not by what it is called.',
  cards: [
    {
      label: '3 to 6',
      head: 'la maternelle',
      fr: 'la maternelle',
      sub: 'la ma-tehr-NEL',
      body: 'Preschool, and in France almost everybody goes. It is part of the school system rather than childcare, which is what la garderie is.',
    },
    {
      label: '6 to 11',
      head: "l'école primaire",
      fr: "l'école primaire",
      sub: 'lay-KOL pree-MEHR',
      body: 'Five years, and it ends with no exam at all. Nothing on your dossier will ever refer to it.',
    },
    {
      label: '11 to 15',
      head: 'le collège',
      fr: 'le collège',
      sub: 'luh ko-LEHZH',
      body: 'Not a college. It is the four years that follow primary school, and it ends in le brevet, which nobody outside France has heard of.',
    },
    {
      label: '15 to 18',
      head: 'le lycée',
      fr: 'le lycée',
      sub: 'luh lee-SAY',
      body: 'Three years, and it ends in the bac. This is the rung everything else is counted from, which is why the next card is the one that matters.',
    },
    {
      label: '18 onward',
      head: "l'université",
      fr: "l'université",
      sub: 'lü-nee-vehr-see-TAY',
      body: 'Counted in years after the bac and not by the name of the qualification. Three years is a licence, five is a master.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rung', 'dossier'],
};

/** REQUIRED LAYOUT 3: the ladder on one screen as ONE SCALE, with the French
 *  rungs and the learner's own system on the same axis. Six rows, which is the
 *  measured `tapTable` ceiling (a2.12), and short headers, because a2.16 found
 *  the headers carry a glyph budget. */
const S04_MAP: LessonSection = {
  type: 'tapTable',
  id: 's04-map',
  layer: 'core',
  title: 'One scale, both systems',
  cols: ['France', 'Age', 'Yours'],
  rows: [
    {
      cells: ['maternelle', '3-6', 'preschool'],
      say: 'la maternelle',
      detail: {
        title: 'The one rung that maps cleanly',
        body: 'Nothing on a form will ever ask about it. It is here so the scale starts where the French one starts.',
        say: 'la maternelle',
      },
    },
    {
      cells: ['primaire', '6-11', 'primary'],
      say: "l'école primaire",
      detail: {
        title: 'Five years, no exam',
        body: 'The only rung with no certificate at the end. If your own system tests at eleven, that is a difference nobody here will expect.',
        say: "l'école primaire",
      },
    },
    {
      cells: ['collège', '11-15', 'middle'],
      say: 'le collège',
      detail: {
        title: 'The word that costs people most',
        body: 'A collège is for eleven-year-olds. Saying you went to college means you went to middle school, and the person writing it down will believe you.',
        say: 'le collège',
      },
    },
    {
      cells: ['lycée', '15-18', 'high'],
      say: 'le lycée',
      detail: {
        title: 'Where the counting starts',
        body: 'Everything above this is measured in years after the bac. That is the number a French form wants, and it is the number you can always give.',
        say: 'le lycée',
      },
    },
    {
      cells: ['bac +3', '18-21', 'bachelor'],
      say: 'Ça correspond à une licence.',
      detail: {
        title: 'Three years past the bac',
        body: 'A licence. If your own three-year degree has a different name, this is the line it lands on, and the name does not matter.',
        say: 'Ça correspond à une licence.',
      },
    },
    {
      cells: ['bac +5', '21-23', 'master'],
      say: "C'est l'équivalent d'un master.",
      detail: {
        title: 'Five years past the bac',
        body: 'A master. Two more after the licence. Beyond that is a doctorat, and by then everybody uses the same word anyway.',
        say: "C'est l'équivalent d'un master.",
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rung', 'dossier'],
};

/** THE SECTION THAT MAKES EIGHTEEN IMPORTS REACHABLE, and the act's production
 *  beat. Doctrine: every act must end in production, not in more nouns, and act
 *  2 was two reception screens and a trap without it.
 *
 *  IT EXISTS BECAUSE OF A MEASURED DEFECT. Eighteen of this build's imports
 *  carry `voiceflash` and `review` and NOT `flashcard`, so NO DECK IN THE
 *  PRODUCT CAN SERVE THEM and a `deckTranche` release of any of them is a line
 *  that looks like it works and does nothing. a2.29 found the same shape on
 *  four rows and reported it; this build found it on eighteen, which is too
 *  many to leave as a footnote.
 *
 *  `groupDrill` items take an `itemId`, so naming them here puts them ON A
 *  SCREEN — which is what doctrine §E actually requires ("did the learner see
 *  it", not "does this id resolve"). Nine of the eighteen land here, four in
 *  s08-subjects, and the remaining five were DROPPED from the import list
 *  rather than released into a deck that cannot draw them.
 *
 *  `sub` on a groupDrill ITEM draws nothing. Every second line here is `note`. */
const S05_CREDENTIALS: LessonSection = {
  type: 'groupDrill',
  id: 's05-credentials',
  layer: 'core',
  size: 'lg',
  title: 'Name yours',
  groups: [
    {
      label: 'Les diplômes',
      items: [
        { fr: "l'université", itemId: 'fr.a1.ecole.181', note: 'Where all of these come from. Counted in years after the bac.' },
        { fr: 'le diplôme', itemId: 'fr.a1.ecole.187', note: 'The general word. A form will use it before it uses any of the others.' },
        { fr: 'le baccalauréat', itemId: 'fr.a2.examens-et-diplomes.060', note: 'In France: the exam at eighteen. This is the row glossed that way.' },
        { fr: 'un baccalauréat', itemId: 'fr.a2.rp-travail-etudes.039', note: "In Quebec: a three-year degree. Same word, and the corpus glosses this row as a bachelor's." },
        { fr: 'une maîtrise', itemId: 'fr.a2.rp-travail-etudes.040', note: "The Quebec word for a master's. France says un master." },
        { fr: 'un doctorat', itemId: 'fr.a2.rp-travail-etudes.041', note: 'The one word everybody uses the same way.' },
      ],
    },
    {
      label: 'Les papiers',
      items: [
        { fr: 'un relevé de notes', itemId: 'fr.a2.examens-et-diplomes.081', note: 'Your marks, subject by subject. The first thing a registrar asks for.' },
        { fr: 'une attestation', itemId: 'fr.a2.examens-et-diplomes.062', note: 'Proof you attended, which is not the same as proof you finished.' },
        { fr: 'une équivalence de diplôme', itemId: 'fr.a2.rp-travail-etudes.042', note: 'The formal version of what this lesson teaches you to say out loud.' },
      ],
      check: {
        q: 'One French word is two different qualifications. Which?',
        opts: ['un doctorat', 'une maîtrise', 'un baccalauréat'],
        correct: 2,
        why: 'In France the bac is the exam at eighteen. In Quebec it is a three-year university degree. The word alone will not tell you which.',
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rung', 'dossier'],
};

/** COLLATION C3, PAUL-SETTLED: at most ONE cardDeck card naming Quebec
 *  divergence, as colour, and NOTHING ON IT IS EVER THE ANSWER TO A SCORED
 *  QUESTION. This is that one card, at layer 'more', so a learner on the core
 *  path walks past it. No quiz question, no drill, no dictée item and no
 *  practice id touches anything on this screen, and the test asserts it. */
const S06_QUEBEC: LessonSection = {
  type: 'cardDeck',
  id: 's06-quebec',
  render: 'deck',
  layer: 'more',
  size: 'lg',
  title: 'Quebec runs a different ladder',
  hint: 'Colour, not an answer. Nothing here is tested.',
  cards: [
    {
      label: 'Between the two',
      head: 'le cégep',
      fr: 'un cégep',
      sub: 'uhⁿ say-ZHEP',
      body: 'Quebec puts two years between school and university that France does not have. You leave school a year earlier and pick them up there. It ends in un DEC, and la session is what France calls le semestre.',
    },
    {
      label: 'One word, two credentials',
      head: 'le baccalauréat',
      fr: 'le baccalauréat',
      sub: 'luh ba-ka-loh-ray-AH',
      body: 'In France the bac is the exam you sit at eighteen. In Quebec un baccalauréat is a three-year university degree. Both are published in this corpus, glossed differently, and the word alone will not tell you which one somebody means.',
    },
  ],
  audio: AUDIO,
  terms: ['rung'],
};

/** THE A2 TRAP HAS ONE SHAPE and the stacked one hides a gate, the audio and
 *  the sub-mission number. `lesson-contract.test.ts` has enforced
 *  rule > cards > audio > drill since 2026-08-13 with `swipe`, an audio spec,
 *  a `say` and a GATED drill step, and it caught both of a2.17's. `size` comes
 *  OFF a stepped trapDrill. */
const S07_PLACE: LessonSection = {
  type: 'trapDrill',
  id: 's07-place',
  layer: 'core',
  swipe: true,
  title: 'Which rung is that',
  rule: {
    title: 'The name will not tell you. The age will.',
    body: 'Every one of these words has an English word that looks like it and sits somewhere else on the scale. Do not translate the name. Ask how old you are when you leave it, and count from the bac.',
  },
  cards: [
    { promptLabel: 'I went to college at sixteen', promptSound: "Je suis allé au collège à seize ans.", fr: 'Je suis allé au lycée à seize ans.', ipa: '/ʒə sɥi za.le o li.se a sɛz ɑ̃/', tip: 'A collège is for eleven-year-olds. Sixteen is le lycée.' },
    { promptLabel: 'I finished high school', promptSound: "J'ai fini le collège.", fr: "J'ai fini le lycée.", ipa: '/ʒe fi.ni lə li.se/', tip: 'High school is le lycée, every time.' },
    { promptLabel: 'I have a three-year degree', promptSound: 'un baccalauréat', fr: 'une licence', ipa: '/yn li.sɑ̃s/', tip: 'In France the bac is at eighteen. Three years past it is une licence.' },
    { promptLabel: 'I did two more years after that', promptSound: 'un doctorat', fr: 'un master', ipa: '/œ̃ mas.tɛʁ/', tip: 'Bac +5. A doctorat is three years further still.' },
    { promptLabel: 'I started at six', promptSound: 'le collège', fr: "l'école primaire", ipa: '/le.kɔl pʁi.mɛʁ/', tip: 'Six to eleven. No exam at the end of it.' },
  ],
  drill: [
    { promptSay: "J'ai commencé à onze ans.", opts: ['le collège', 'le lycée', "l'université"], correct: 0 },
    { promptSay: "J'ai fini à dix-huit ans, avec le bac.", opts: ["l'école primaire", 'le lycée', 'le collège'], correct: 1 },
    { promptSay: "J'ai fait trois ans après le bac.", opts: ['un master', 'le brevet', 'une licence'], correct: 2 },
    { promptSay: "J'ai fait cinq ans après le bac.", opts: ['un master', 'une licence', 'le lycée'], correct: 0 },
    { promptSay: "J'ai commencé à six ans.", opts: ['le collège', "l'école primaire", 'le lycée'], correct: 1 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Count, do not translate' },
    { label: 'Five names', kind: 'cards', title: 'What English hands you' },
    { label: 'Hear them', kind: 'audio', title: 'Wrong and right, side by side' },
    { label: 'Now you place it', kind: 'drill', title: 'Five in a row', gate: true },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rung', 'dossier'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT III — WHAT YOU DID THERE  (the heaviest act, six sections)
 * ══════════════════════════════════════════════════════════════════════════ */

const S08_SUBJECTS: LessonSection = {
  type: 'groupDrill',
  id: 's08-subjects',
  layer: 'core',
  size: 'lg',
  title: 'Find the ones you did',
  groups: [
    {
      label: 'Les sciences',
      items: [
        { fr: 'les mathématiques', itemId: 'fr.a1.ecole.130', note: 'Everybody says les maths.' },
        { fr: 'la physique', itemId: 'fr.a1.ecole.135', note: 'La physique is the subject. Not a person.' },
        { fr: 'la chimie', itemId: 'fr.a1.ecole.136', note: 'Feminine, so faire de la chimie.' },
        { fr: 'la biologie', itemId: 'fr.a1.ecole.137', note: 'Often shortened to la SVT in school.' },
        { fr: 'les sciences', itemId: 'fr.a1.ecole.134', note: 'Plural, so faire des sciences.' },
      ],
    },
    {
      label: 'Les langues',
      items: [
        { fr: 'le français', itemId: 'fr.a1.ecole.131', note: 'A subject as well as a language.' },
        { fr: "l'anglais", itemId: 'fr.a1.ecole.138', note: "Vowel start, so faire de l'anglais." },
        { fr: "l'espagnol", itemId: 'fr.a1.ecole.139', note: "Same shape: faire de l'espagnol." },
      ],
    },
    {
      label: 'Les humanités',
      items: [
        { fr: "l'histoire", itemId: 'fr.a1.ecole.132', note: 'Feminine, and it starts with a vowel.' },
        { fr: 'la géographie', itemId: 'fr.a1.ecole.133', note: 'Paired with history in French schools.' },
        { fr: 'la musique', itemId: 'fr.a1.ecole.140', note: 'Faire de la musique also means to play.' },
      ],
    },
    {
      label: 'Le reste',
      items: [
        { fr: "l'éducation physique", itemId: 'fr.a1.ecole.142', note: 'Everybody says le sport.' },
        { fr: "l'informatique", itemId: 'fr.a1.ecole.143', note: 'Computing, and also the field you can study.' },
      ],
    },
    {
      label: 'Après le bac',
      items: [
        { fr: 'le droit', itemId: 'fr.b1.matieres.068', note: 'A field, not a school subject. It takes the plain article: j\'ai étudié le droit.' },
        { fr: "un domaine d'études", itemId: 'fr.a2.rp-travail-etudes.037', note: 'What a form calls the thing you specialised in.' },
        { fr: 'étudier', itemId: 'fr.a1.ecole.190', note: 'A subject you sat in front of.' },
        { fr: 'enseigner', itemId: 'fr.a1.ecole.191', note: 'What somebody does to you. The next section is the whole contrast.' },
      ],
      check: {
        q: 'Which of these needs faire DES rather than faire DE LA?',
        opts: ['la chimie', 'les mathématiques', "l'histoire"],
        correct: 1,
        why: 'Les mathématiques is plural, so de + les gives des. The other two are feminine singular.',
      },
    },
  ],
  audio: AUDIO,
  terms: ['dossier'],
};

/** ANCHORED ON fr.a2.matieres.011, WHICH STATES THE RULE AS A RULE. The prompt
 *  requires this lesson to make that row reachable and to drill the gender and
 *  plural variation around it, NOT to restate it in the author's own words. The
 *  first example IS the row. A test asserts the id. */
const S09_FAIREDE: LessonSection = {
  type: 'examples',
  id: 's09-fairede',
  layer: 'core',
  title: 'Doing a subject',
  examples: [
    { fr: "Pour une matière, on utilise « faire de » : faire des maths, faire de l'anglais.", en: 'For a school subject you use faire de: faire des maths, faire de l\'anglais.', note: 'The corpus already says this, at fr.a2.matieres.011. It is the rule, not an example of one.' },
    { fr: 'Je fais de la chimie.', en: 'I do chemistry.', note: 'Feminine singular. De la.' },
    { fr: "Je fais de l'anglais.", en: 'I do English.', note: "Starts with a vowel. De l'." },
    { fr: 'Je fais du dessin.', en: 'I do art.', note: 'Masculine singular. De + le gives du.' },
    { fr: 'Je fais des maths.', en: 'I do maths.', note: 'Plural. De + les gives des, and this is the one people get wrong.' },
    { fr: "J'ai fait des maths pendant trois ans.", en: 'I did maths for three years.', note: `Past, because it is over. ${TENSE_UNIT} gave you this and it is the only tense this lesson uses.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['span', 'dossier'],
};

/** THE ONE THREE-WAY CONTRAST NOTHING IN THE CORPUS WRITES DOWN. All three
 *  headwords exist and all three are `ecole` rows; the contrast between them is
 *  written nowhere. `commonErrors` NEEDS `swipe: true` or it draws a blank
 *  screen, and it wants one error per screen at `lg`. */
const S10_THREE: LessonSection = {
  type: 'commonErrors',
  id: 's10-three',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Three verbs English merges into one',
  errors: [
    {
      wrong: "J'ai appris la médecine à l'université.",
      right: "J'ai étudié la médecine à l'université.",
      why: 'Étudier is a subject you sat down in front of. Apprendre is a skill you came away able to do. A degree is the first one.',
    },
    {
      wrong: "J'ai étudié à nager.",
      right: "J'ai appris à nager.",
      why: 'Apprendre is the one that takes à and an action. You do not study to swim, you learn to.',
    },
    {
      wrong: 'Mon professeur a étudié les maths à ma classe.',
      right: 'Mon professeur a enseigné les maths à ma classe.',
      why: 'Enseigner is what somebody does TO you. The subject is what they teach, and the class is who they teach it to.',
    },
    {
      wrong: "J'ai enseigné le français pendant trois ans à l'école.",
      right: "J'ai étudié le français pendant trois ans à l'école.",
      why: 'Only wrong if you were the pupil. Enseigner puts you at the front of the room, which is a different dossier entirely.',
    },
  ],
  audio: AUDIO,
  terms: ['dossier'],
};

const S11_FORTEN: LessonSection = {
  type: 'examples',
  id: 's11-forten',
  layer: 'core',
  title: 'How good you were at it',
  examples: [
    { fr: 'Je suis fort en géographie.', en: 'I am good at geography.', note: 'The top of the scale, and the corpus already had it at fr.a2.matieres.009.' },
    { fr: 'Je suis moyen en anglais.', en: 'I am average at English.', note: 'The middle, and the one people actually say about themselves.' },
    { fr: 'Je suis nul en maths.', en: 'I am hopeless at maths.', note: 'The bottom. It sounds harsher in English than it does in French; nobody takes offence.' },
    { fr: "J'ai toujours été fort en langues.", en: 'I have always been good at languages.', note: 'Still the passé composé, because toujours here means up to now.' },
    { fr: 'Elle est forte en chimie.', en: 'She is good at chemistry.', note: 'Fort agrees like any other describing word. Forte for a woman.' },
  ],
  audio: AUDIO,
  terms: ['strength', 'dossier'],
};

/** `depuis` IS a2.18's, at seq 14, uncontested in collation C5. It appears
 *  ONCE, on the third card, through the IMPORTED row fr.a2.matieres.010, and
 *  this section neither teaches it nor claims it. What this lesson owns is the
 *  other two, because both are finished spans and a finished span is what the
 *  passé composé is for. */
const S12_HOWLONG: LessonSection = {
  type: 'cardDeck',
  id: 's12-howlong',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Three ways to say how long',
  hint: 'Two of these are yours. The third belongs to an earlier lesson.',
  cards: [
    {
      label: 'The stretch',
      head: 'pendant trois ans',
      fr: "J'ai fait des maths pendant trois ans.",
      sub: 'pahⁿ-DAHⁿ trwa-ZAHⁿ',
      body: 'How long you were in it, and it is over. This is the one you want for almost every line of a dossier.',
    },
    {
      label: 'The finish',
      head: 'en trois ans',
      fr: "J'ai fini ma licence en trois ans.",
      sub: 'ahⁿ trwa-ZAHⁿ',
      body: 'How long the whole thing took to complete. Use it when the point is that you finished, and on time.',
    },
    {
      label: 'Not this one',
      head: 'depuis deux ans',
      fr: "J'étudie l'espagnol depuis deux ans.",
      sub: 'duh-PWEE deu-ZAHⁿ',
      body: `Still going, so it takes the present. ${TIME_UNIT} taught this at seq 14 and owns it. It is here so you can see it is the odd one out, and it is the wrong one for a finished course of study.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['span', 'dossier'],
};

const S13_SAY: LessonSection = {
  type: 'groupDrill',
  id: 's13-say',
  layer: 'core',
  size: 'lg',
  title: 'Two lines, joined',
  groups: [
    {
      label: 'The subject and the stretch. Out loud, no pauses.',
      items: [
        { fr: "J'ai fait de la chimie pendant deux ans.", en: 'I did chemistry for two years.', note: 'Feminine singular, so de la. Two years is still a stretch.' },
        { fr: "J'ai fait des maths pendant cinq ans.", en: 'I did maths for five years.', note: 'Plural, so des. This is the shape people get wrong under pressure.' },
        { fr: "J'ai fait de l'anglais pendant sept ans.", en: 'I did English for seven years.', note: "Vowel start, so de l'. Seven years is ordinary in a French school." },
        { fr: "J'ai étudié le droit à l'université.", en: 'I studied law at university.', note: 'A field rather than a school subject takes the plain article, not faire de.' },
      ],
      check: {
        q: 'Two lines are done. Which line of the dossier is still missing?',
        opts: ['how it went', 'what level it was', 'where you live'],
        correct: 0,
        why: `${LAYER_3}. You have said what and how long. Nobody yet knows whether you finished it or how you did.`,
      },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dossier', 'span'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT IV — HOW IT WENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE UNIT'S SIGNATURE TRAP, and REQUIRED LAYOUT 2: `j'ai passé mon examen`
 *  and `j'ai réussi mon examen` sit SIDE BY SIDE as the first two cards, each
 *  with its English above it in `promptLabel`, so the inversion is visible in
 *  one glance. It cannot be taught in prose.
 *
 *  Documented at B1 only (fr.b1.universite.008) and once in the SONS band as a
 *  bare headword with no teaching (fr.sons.faux-amis.014). Nothing at A2
 *  explains it, and it is the only item in the whole band that inverts the
 *  learner's meaning while staying perfectly grammatical. */
const S14_PASSER: LessonSection = {
  type: 'trapDrill',
  id: 's14-passer',
  layer: 'core',
  swipe: true,
  title: 'Passer does not mean passed',
  rule: {
    title: 'Sitting it and getting it are two different verbs',
    body: 'Passer un examen is the day you turn up and do it. Réussir un examen is the letter that comes afterwards. English uses one word for both, so what you produce says you were in the room, and nobody has reason to doubt it.',
  },
  cards: [
    { promptLabel: 'I sat my exam in June', promptSound: "J'ai passé mon examen en juin.", fr: "J'ai passé mon examen en juin.", ipa: '/ʒe pa.se mɔ̃ nɛɡ.za.mɛ̃ ɑ̃ ʒɥɛ̃/', tip: 'Correct, and it says nothing at all about the result.' },
    { promptLabel: 'I passed my exam', promptSound: "J'ai réussi mon examen.", fr: "J'ai réussi mon examen.", ipa: '/ʒe ʁe.y.si mɔ̃ nɛɡ.za.mɛ̃/', tip: 'Réussir. This is the one that means you got it.' },
    { promptLabel: 'I failed my chemistry exam', promptSound: "J'ai passé mon examen de chimie.", fr: "J'ai raté mon examen de chimie.", ipa: '/ʒe ʁa.te mɔ̃ nɛɡ.za.mɛ̃ də ʃi.mi/', tip: 'Rater, or échouer à. Passer would have said you simply turned up.' },
    { promptLabel: 'I passed first time', promptSound: "J'ai passé du premier coup.", fr: "J'ai réussi du premier coup.", ipa: '/ʒe ʁe.y.si dy pʁə.mje ku/', tip: 'Du premier coup only makes sense with réussir. With passer it means nothing.' },
    { promptLabel: 'Did you sit a final exam?', promptSound: 'Vous avez réussi un examen final ?', fr: 'Vous avez passé un examen final ?', ipa: '/vu za.ve pa.se œ̃ nɛɡ.za.mɛ̃ fi.nal/', tip: 'The registrar asks with passer, because they want to know what you did, not how it went. That comes next.' },
  ],
  drill: [
    { promptSay: 'You want to say you got the exam.', opts: ["J'ai passé mon examen.", "J'ai réussi mon examen.", "J'ai fait mon examen."], correct: 1 },
    { promptSay: 'You want to say you sat it, and not how it went.', opts: ["J'ai passé mon examen.", "J'ai réussi mon examen.", "J'ai raté mon examen."], correct: 0 },
    { promptSay: 'You want to say you failed it.', opts: ["J'ai passé mon examen.", "J'ai réussi mon examen.", "J'ai raté mon examen."], correct: 2 },
    { promptSay: "J'ai passé mon examen.", opts: ['They sat it.', 'They passed it.', 'They failed it.'], correct: 0 },
    { promptSay: 'You want to say you got it first time.', opts: ["J'ai passé du premier coup.", "J'ai réussi du premier coup.", "J'ai raté du premier coup."], correct: 1 },
  ],
  steps: [
    { label: 'The rule', kind: 'rule', title: 'Two verbs, one English word' },
    { label: 'Five pairs', kind: 'cards', title: 'Side by side' },
    { label: 'Hear them', kind: 'audio', title: 'The two that sound like an answer' },
    { label: 'Now you choose', kind: 'drill', title: 'Five in a row', gate: true },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sit', 'outOfTwenty'],
};

/** Six rows, short headers. a2.12 measured `tapTable` capping at six rows and
 *  a2.16 found the headers carry a glyph budget. In the flow at layer 'core',
 *  never in a sheet. */
const S15_MARKS: LessonSection = {
  type: 'tapTable',
  id: 's15-marks',
  layer: 'core',
  title: 'Marks run to twenty',
  cols: ['Mark', 'What it is', 'Said as'],
  rows: [
    {
      cells: ['16-20', 'rare', 'très bien'],
      say: "J'ai eu une mention très bien.",
      detail: { title: 'Almost nobody', body: 'Sixteen is remembered. Twenty is not awarded. If you translate a high percentage straight across you will claim something nobody claims.', say: "J'ai eu une mention très bien." },
    },
    {
      cells: ['14-16', 'good', 'bien'],
      say: "J'ai eu une mention bien.",
      detail: { title: 'A strong result', body: 'Fourteen out of twenty is a genuinely good mark and it carries a mention on the paper.', say: "J'ai eu une mention bien." },
    },
    {
      cells: ['12-14', 'solid', 'assez bien'],
      say: "J'ai eu douze sur vingt.",
      detail: { title: 'Comfortably through', body: 'The lowest mention. Above the line and not by accident.', say: "J'ai eu douze sur vingt." },
    },
    {
      cells: ['10-12', 'a pass', 'la moyenne'],
      say: "J'ai eu la moyenne.",
      detail: { title: 'The line', body: 'Ten is the pass. Avoir la moyenne says you cleared it and claims nothing more, which is often exactly what you want.', say: "J'ai eu la moyenne." },
    },
    {
      cells: ['8-10', 'just under', 'juste en dessous'],
      say: "Je n'ai pas eu la moyenne.",
      detail: { title: 'Under the line', body: 'Close, and still a fail. The negative of avoir la moyenne is the ordinary way to say it.', say: "Je n'ai pas eu la moyenne." },
    },
    {
      cells: ['0-8', 'a fail', 'raté'],
      say: "J'ai raté mon examen.",
      detail: { title: 'A fail', body: 'Rater or échouer à. Not passer, which would have said you turned up and nothing else.', say: "J'ai raté mon examen." },
    },
  ],
  audio: AUDIO,
  terms: ['outOfTwenty', 'mention'],
};

const S16_OUTCOME: LessonSection = {
  type: 'examples',
  id: 's16-outcome',
  layer: 'core',
  title: 'How it finished',
  examples: [
    { fr: "J'ai obtenu mon diplôme en juin.", en: 'I got my diploma in June.', note: 'Obtenir is the verb a form expects. Avoir works and sounds lighter.' },
    { fr: "J'ai eu quatorze sur vingt.", en: 'I got fourteen out of twenty.', note: 'The number first, then sur vingt. Never a percentage.' },
    { fr: "J'ai eu la moyenne.", en: 'I got a pass mark.', note: 'Over ten. It claims nothing else, and that is why people use it.' },
    { fr: "J'ai redoublé une année.", en: 'I repeated a year.', note: 'Ordinary in France and not a confession. The corpus already had redoubler, at fr.a1.ecole.111.' },
    { fr: "J'ai arrêté mes études après deux ans.", en: 'I stopped studying after two years.', note: 'Plain and neutral. It says what happened without apologising for it.' },
    { fr: "J'ai eu une mention bien.", en: 'I got a distinction.', note: 'The word goes on the diploma itself, so it is worth saying.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['outOfTwenty', 'mention'],
};

const S17_ERRORS: LessonSection = {
  type: 'commonErrors',
  id: 's17-errors',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Five ways the account goes wrong',
  errors: [
    {
      wrong: PASSER_AS_PASS_WRONG,
      right: "J'ai réussi mon examen, donc j'ai mon diplôme.",
      why: 'Passer says you sat it. As a reason for having the diploma it does not follow, and the sentence is grammatical enough that nobody will query it.',
    },
    {
      wrong: 'Bachelor of Science',
      right: "C'est l'équivalent d'une licence.",
      why: 'The name has no meaning here. Give the level and the number of years, which is what is being written down.',
    },
    {
      wrong: "J'ai fait de les maths pendant trois ans.",
      right: "J'ai fait des maths pendant trois ans.",
      why: 'De + les is always des. fr.a2.matieres.011 states the rule; this is the form it produces when the subject is plural.',
    },
    {
      wrong: "J'ai eu soixante-dix pour cent.",
      right: "J'ai eu quatorze sur vingt.",
      why: 'A percentage lands with nothing attached. The scale runs to twenty and ten is the pass, so give the number people can place.',
    },
    {
      wrong: "Je suis allé au collège pendant quatre ans, de dix-huit à vingt-deux ans.",
      right: "Je suis allé à l'université pendant quatre ans.",
      why: 'A collège is for eleven-year-olds. This sentence says you started secondary school at eighteen, and the person writing it down will believe it.',
    },
  ],
  audio: AUDIO,
  terms: ['sit', 'rung'],
};

/** `listening.hideLines` LANDED (MissionRich.tsx:1976). With the flag true the
 *  line card keeps its PlayDot and replaces the text with a placeholder,
 *  revealing after every question is answered. Without it, every listening
 *  section in the product is answerable by reading.
 *
 *  Collation 7.2: these lines are authored to STAND ALONE, without this
 *  lesson's framing, so a2.35 (Bilan A2) can lift them as a mixed-situation CO
 *  set. Questions are written to the `co_mcq` shape: four options is the exam
 *  form, three is what this renderer takes, one right, and distractors that are
 *  TRUE OF THE PASSAGE but do not answer the question.
 *
 *  IMPARFAIT EXPOSURE 1 OF 2, receptive, unanalysed, as a set opening. */
const S18_LISTEN: LessonSection = {
  type: 'listening',
  id: 's18-listen',
  layer: 'core',
  hideLines: true,
  title: 'Somebody else gives theirs',
  lines: [
    { fr: "Quand j'étais petit, j'ai détesté l'école.", en: 'When I was small, I hated school.' },
    { fr: "J'ai fait mon lycée à Bordeaux, et j'ai eu mon bac à dix-huit ans.", en: 'I did my high school in Bordeaux, and I got my bac at eighteen.' },
    { fr: "Après, j'ai fait trois ans de droit à l'université.", en: 'After that, I did three years of law at university.', },
    { fr: "J'ai redoublé la deuxième année, donc ça m'a pris quatre ans.", en: 'I repeated the second year, so it took me four years.' },
    { fr: "J'ai eu ma licence avec une mention assez bien.", en: 'I got my licence with a lower distinction.' },
    { fr: "Je suis nul en langues, mais j'ai bien réussi en droit.", en: 'I am hopeless at languages, but I did well in law.' },
  ],
  questions: [
    {
      q: 'How long did the university degree actually take?',
      opts: ['three years', 'four years', 'eighteen years'],
      correct: 1,
      why: 'Three years is what a licence normally takes, and he says so. He also says he repeated one, which makes four.',
    },
    {
      q: 'What did he get at eighteen?',
      opts: ['his bac', 'his licence', 'his mention'],
      correct: 0,
      why: 'The bac comes at the end of the lycée, at eighteen. The licence came three years later.',
    },
    {
      q: 'Which subject was he weak at?',
      opts: ['law', 'he does not say', 'languages'],
      correct: 2,
      why: 'Nul en langues. He says the opposite about law, which is why the other option is tempting.',
    },
    {
      q: 'You did not catch the fourth line. What do you say?',
      opts: ["Plus lentement, s'il vous plaît.", 'Je ne sais pas.', "D'accord."],
      correct: 0,
      why: `${REPAIR_UNIT} authored six ways to say this, ordered by what each one costs you. Speed was the problem, and this is the first rung that names the fault.`,
    },
  ],
  audio: AUDIO,
  terms: ['repairMove', 'outOfTwenty'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT V — SAYING IT SO IT LANDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE OWN, and REQUIRED LAYOUT 1: the learner's own credential and its French
 *  hedge belong ON ONE SCREEN, adjacent, with the hedge visible as the bridge
 *  between them. Separating them turns the lesson into a list of nouns. Every
 *  card here carries both halves.
 *
 *  This section also carries the band's two citations, because this unit's
 *  register is stable and one reference is the lightest correct use:
 *  a2.29's three rung names, quoted VERBATIM per clause 1 of its contract, and
 *  a2.07's repair block, quoted by unit id. ZERO rung rows, ZERO softener rows
 *  and ZERO repair rows are authored by this build; the ids are released
 *  through `deckTranche`, which is the mechanism that works — `itemIds` on a
 *  cardDeck draws nothing. */
const S19_EQUIV: LessonSection = {
  type: 'cardDeck',
  id: 's19-equiv',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Four ways to make it placeable',
  hint: 'Swipe. Each card is your qualification on the left and theirs on the right.',
  cards: [
    {
      label: 'The plainest one',
      head: 'ça correspond à',
      fr: 'Ça correspond à une licence.',
      sub: 'sa ko-res-POHⁿ AH',
      body: 'Your three-year degree, and the French word for the level it sits at. This one works for anything and it is the one to reach for first.',
    },
    {
      label: 'A little more formal',
      head: "c'est l'équivalent de",
      fr: "C'est l'équivalent d'un master.",
      sub: 'seh lay-kee-va-LAHⁿ DUH',
      body: 'Your postgraduate qualification, given as the French one it matches. Use it on a form or with somebody writing things down.',
    },
    {
      label: 'When there is no match',
      head: 'chez nous, on appelle ça',
      fr: 'Chez nous, on appelle ça autrement.',
      sub: 'shay NOO ohⁿ-na-PEL SA',
      body: 'Your own system named as your own, without pretending it maps. Say it and then give the years, because the years always map.',
    },
    {
      label: 'The soft one',
      head: 'à peu près comme',
      fr: "C'est à peu près comme le bac.",
      sub: 'ah peu PREH KOM',
      body: 'Your school-leaving certificate, placed near theirs without claiming to be it. À peu près buys you the inexactness out loud, so nobody has to guess whether you meant it.',
    },
    {
      label: 'And if you lose the thread',
      head: `${LADDER_UNIT} and ${REPAIR_UNIT}, in one card`,
      fr: 'Vous pouvez répéter, s\'il vous plaît ?',
      sub: 'voo poo-VAY ray-pay-TAY seel voo PLEH',
      body: `${REPAIR_UNIT} taught six ways to ask again, ordered by cost. ${LADDER_UNIT} taught three rungs for when the answer is the problem: ${RUNG_1} ${RUNG_2} ${RUNG_3}`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hedge', 'repairMove', 'dossier'],
};

/** A reading passage is ONE BLOCK. `PassagePage` splits on /(?<=[.!?»])\s+/,
 *  so an authored newline is silently discarded; this text carries none.
 *
 *  A glossary key of FIVE OR MORE WORDS can never match (MAX_GLOSS_WORDS is
 *  four) and longest-match-first means a short entry inside a longer one
 *  underlines nothing. Every key here is one or two words and each appears in
 *  the text verbatim.
 *
 *  `reading.questions` render as a Press that toggles the answer into view.
 *  Tap to reveal: nothing is typed and nothing is scored, which is fine here
 *  because the job is model-text deconstruction rather than assessment. The
 *  lesson never claims otherwise.
 *
 *  IMPARFAIT EXPOSURE 2 OF 2, receptive, unanalysed, glossed as a set opening
 *  the learner will meet again later. No form is given and no paradigm shown. */
const S20_READ: LessonSection = {
  type: 'reading',
  id: 's20-read',
  layer: 'core',
  questionsInModal: true,
  title: 'The same account, written down',
  text: "Quand j'étais petite, j'ai voulu devenir médecin. J'ai fait mes trois ans de lycée à Nantes et j'ai eu mon bac à dix-sept ans. Après le bac, j'ai fait deux ans de médecine et j'ai raté le concours de deuxième année. J'ai arrêté, et j'ai recommencé en biologie. J'ai obtenu ma licence en trois ans, avec une mention assez bien. Je suis nulle en chimie et j'ai redoublé une seule matière. Aujourd'hui, quand on me demande mon niveau, je réponds que ça correspond à une licence, et que ça m'a pris cinq ans en tout. Personne ne connaît le nom de mon diplôme. Tout le monde comprend cinq ans.",
  glossary: [
    { word: "j'étais petite", en: 'when I was small', note: 'A set opening for a childhood memory, learned whole. You will meet the form it belongs to in a later lesson; here it is just the phrase.' },
    { word: 'le concours', en: 'the competitive exam', note: 'Not an ordinary exam. A fixed number of places, and you are ranked against everybody else.' },
    // `une mention`, not `la mention`: a glossary key is matched against the
    // passage's own tokens by the real `segmentSentence`, and the passage says
    // « avec une mention assez bien ». A key the passage does not contain
    // underlines nothing, and `glossary-resolves.test.ts` reads the whole seed
    // for exactly this.
    { word: 'une mention', en: 'a distinction', note: 'Printed on the diploma. Assez bien is the lowest of the three.' },
    { word: 'redoublé', en: 'repeated', note: 'Repeating one subject rather than a whole year is possible at university.' },
    { word: 'ça correspond', en: 'that comes out at', note: 'The hedge, doing its job in somebody else\'s sentence.' },
    { word: 'en tout', en: 'in total', note: 'The number at the end. It is the part everybody understands.' },
  ],
  questions: [
    { q: 'How many years did the whole thing take?', a: 'Five. Two on medicine, then three on the biology licence.' },
    { q: 'Why did she stop medicine?', a: 'She failed the concours at the end of the second year. It is a ranked exam, not a pass mark.' },
    { q: 'What does she say now when somebody asks her level?', a: 'Ça correspond à une licence, and then the number of years. Not the name of the qualification.' },
    { q: 'The last two sentences make one point. What is it?', a: 'The name carries nothing and the number carries everything. That is the whole reason for the hedge.' },
  ],
  audio: AUDIO,
  terms: ['hedge', 'mention', 'dossier'],
};

/** THE INTERVIEW BOUNDARY, HELD. a2.30 owns the interview and this build read
 *  its shipped s20-interview before writing this. That one is a recruitment
 *  conversation: an interviewer with a CV, forming an opinion, and four moves
 *  the learner delivers. THIS one is a registrar with a form, RECORDING what
 *  the learner did, and no turn asks anything an employer would ask.
 *
 *  TWO OF THE SIX TURNS HAVE THE LEARNER ASKING. The prompt flags TEF Canada
 *  EO section A ("ask questions to get information") as a real fit this unit
 *  was under-exploiting, and it costs one turn design decision.
 *
 *  Every turn carries `alts` and a `userEn` — `scenario.logic.test.ts` requires
 *  two alts and a userEn on every role-play turn, which caught a2.03.
 *
 *  ZERO `Scenario.exam`. Collation 1.12 and Paul's decision item 4. */
const S21_REGISTRY: LessonSection = {
  type: 'scenario',
  id: 's21-registry',
  layer: 'core',
  title: 'At the registrar, all four lines',
  setting: 'A university admissions office in Lille. She has a form on screen and four boxes left to fill.',
  turns: [
    {
      ai: 'Bonjour. Quel est votre dernier diplôme ?',
      en: 'Hello. What is your most recent qualification?',
      user: "Bonjour. C'est l'équivalent d'une licence.",
      userEn: "Hello. It's the equivalent of a licence. (Line 1: the ladder)",
      alts: [
        { fr: 'Bonjour. Ça correspond à une licence.', en: 'Hello. That comes out at a licence.' },
        { fr: "Bonjour. J'ai fait trois ans après le bac.", en: 'Hello. I did three years after the bac.' },
      ],
    },
    {
      ai: "D'accord. Vous avez étudié quoi, exactement ?",
      en: 'All right. What did you study, exactly?',
      user: "J'ai étudié le droit à l'université.",
      userEn: 'I studied law at university. (Line 2: the content)',
      alts: [
        { fr: "J'ai fait des maths pendant trois ans.", en: 'I did maths for three years.' },
        { fr: "J'ai fait de la chimie et de la biologie.", en: 'I did chemistry and biology.' },
      ],
    },
    {
      ai: 'Vous avez fait ça pendant combien de temps ?',
      en: 'How long did you do that for?',
      user: "J'ai fini ma licence en trois ans.",
      userEn: 'I finished my licence in three years. (Still line 1: the years are what count)',
      alts: [
        { fr: "J'ai fait trois ans après le bac.", en: 'I did three years after the bac.' },
        { fr: "J'ai redoublé une année, donc quatre ans.", en: 'I repeated a year, so four years.' },
      ],
    },
    {
      ai: 'Et vous avez obtenu la mention ?',
      en: 'And did you get the distinction?',
      user: "J'ai eu une mention assez bien.",
      userEn: 'I got a lower distinction. (Line 3: the outcome)',
      alts: [
        { fr: "J'ai eu la moyenne.", en: 'I got a pass mark.' },
        { fr: "J'ai eu quatorze sur vingt.", en: 'I got fourteen out of twenty.' },
      ],
    },
    {
      ai: 'Très bien. Je note « équivalent licence ».',
      en: "Very good. I'll write down licence equivalent.",
      user: "Il vous faut un relevé de notes ?",
      userEn: 'Do you need a transcript? (You ask. It is the fastest way to find out what is missing.)',
      alts: [
        { fr: 'Il vous faut le diplôme original ?', en: 'Do you need the original diploma?' },
        { fr: "Qu'est-ce qu'il vous faut encore ?", en: 'What else do you need?' },
      ],
    },
    {
      ai: "Oui, et une attestation. On va demander une équivalence.",
      en: 'Yes, and a certificate of attendance. We are going to apply for an equivalency.',
      user: "Ça prend combien de temps ?",
      userEn: 'How long does that take? (You ask again. Nobody volunteers this.)',
      alts: [
        { fr: "Je peux vous les envoyer quand ?", en: 'When can I send them to you?' },
        { fr: "Vous pouvez me l'écrire, s'il vous plaît ?", en: 'Could you write it down for me, please?' },
      ],
    },
  ],
  audio: AUDIO,
  terms: ['registrar', 'dossier', 'hedge'],
};

/** THE ONLY SURFACE IN THE PRODUCT THAT CAN TEST A SPELLING. The quiz fold
 *  strips accents, case, punctuation, hyphens, both apostrophes and ALL
 *  whitespace, so `baccalaureat` passes a typeIn keyed on `baccalauréat` and so
 *  does `Baccalauréat`. The dictée tile bank is what is left.
 *
 *  Corrections §4: `dicteeMode()` switches to WORD tiles above 16 letters and
 *  word mode hands every real word over pre-spelled, so a lesson about spelling
 *  a credential needs LETTER mode. Every id here is checked through the REAL
 *  `dicteeMode` in the batch, not counted by eye.
 *
 *  And every id is an AUTHORED row, because the two the prompt names —
 *  `le baccalauréat` and `un relevé de notes` — carry voiceflash and review and
 *  NOT `dictation`. A dictée naming them would drill nothing. */
const S22_DICTATION: LessonSection = {
  type: 'dictation',
  id: 's22-dictation',
  layer: 'core',
  title: 'Spell it for the form',
  itemIds: [...DICTEE_IDS],
  audio: AUDIO,
  terms: ['hedge', 'mention'],
};

/** `practice` IS MANDATORY: `lesson-contract.test.ts:505` fails any
 *  non-assessment lesson with no practice section, an empty `practice.itemIds`
 *  or an empty `Lesson.itemIds`.
 *
 *  And `skill` MUST be 'speak'. `LessonSection.tsx` `case 'practice'` renders
 *  `<PracticeVFView itemIds title onPlay playingId onGrade />` and NEVER PASSES
 *  `skill`. A `skill: 'write'` section does not draw a weak writing surface; it
 *  draws a Voice Flash speaking pass and passes every validator. Every authored
 *  skill value other than 'speak' is silently wrong today.
 *
 *  Doctrine §E: every item named here must carry `voiceflash`, checked against
 *  POSTGRES and not the seed. All six are authored rows carrying it. */
const S23_SPEAK: LessonSection = {
  type: 'practice',
  id: 's23-speak',
  layer: 'core',
  skill: 'speak',
  title: 'All four lines, out loud',
  itemIds: [E(51), E(50), E(36), E(20), E(31), E(47)],
  audio: AUDIO,
  terms: ['dossier'],
};

const S24_CHECK: LessonSection = {
  type: 'progressCheck',
  id: 's24-check',
  layer: 'core',
  title: 'The dossier, filled in',
  body: 'Say the four lines out loud, once, about your own education. Nothing here is listening, so this one is on you: the point is to find out whether you can get from the level to the equivalence without stopping. If you dry up it will be on line four, and the fix is to have the number of years ready before you start talking.',
  stats: [
    { k: 'Line 1', v: 'You place the level, in years after the bac' },
    { k: 'Line 2', v: 'You name what you studied, with faire de or the plain article' },
    { k: 'Line 3', v: 'You report the result, out of twenty, without inverting it' },
    { k: 'Line 4', v: 'You give the equivalence, so they can write something down' },
  ],
  audio: AUDIO,
  terms: ['dossier', 'hedge'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT VI — CHECK AND CLOSE
 *
 *  ONE QUIZ. A second `quiz` section is silently never rendered
 *  (`lessonPager.logic.ts` appends exactly one via
 *  `sections.find(s => s.type === 'quiz')`), and the temptation is real in a
 *  unit with four distinct acts of content.
 *
 *  32 questions, rounds form, four rounds of eight, each round tied to one act,
 *  with `roundFailThreshold` set. mcq is 11 of 32, under the half ceiling.
 *
 *  Each round names `targets`, and `drillForRound` fires the drill of the FIRST
 *  RESOLVING TARGET ONLY and then stops. A drill named in second place is dead
 *  content: a1.05 shipped two such drills. Every teaching drill here is the
 *  first resolving target of exactly one round, and the test asserts it.
 *
 *  DO NOT HAND-RANDOMISE: `LessonRich` permutes quiz options at runtime.
 *  Mission options ARE hand-randomised, because `MissionRich` renders authored
 *  order.
 *
 *  NO QUESTION TURNS ON an accent, a cedilla, a capital, a hyphen, an
 *  apostrophe, word division or a comma. `fold()` strips every one of them.
 *  Every `errorSpot` carries `prompt` as well as `q`, because a1.16 shipped two
 *  unanswerable questions by putting the sentence in only one of them. Every
 *  question carries a `why`.
 *
 *  NO IMPARFAIT FORM appears in any question, option, accept[] entry or why.
 * ══════════════════════════════════════════════════════════════════════════ */

const S25_QUIZ: LessonSection = {
  type: 'quiz',
  id: 's25-quiz',
  layer: 'core',
  title: 'The exam',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-ladder',
      label: 'The ladder and the map',
      targets: ['translates-the-name'],
      questions: [
        { format: 'mcq', q: 'A French eleven-year-old starts which one?', opts: ['le collège', 'le lycée', "l'université"], correct: 0, why: 'Le collège runs from eleven to fifteen. Le lycée starts at fifteen.', ref: 's04-map' },
        { format: 'mcq', q: 'What does bac +3 mean?', opts: ['three years of the bac', 'three years after the bac', 'the third try at the bac'], correct: 1, why: 'Everything above the lycée is counted in years past the bac. Three of them is a licence.', ref: 's04-map' },
        { format: 'mcq', q: 'Somebody says they went to college. In French that means they were', opts: ['about twelve', 'about nineteen', 'about sixteen'], correct: 0, why: 'Un collège takes eleven- to fifteen-year-olds. It is the word that costs people most.', ref: 's07-place' },
        { format: 'mcq', q: 'Which rung ends with no exam at all?', opts: ['le lycée', 'le collège', "l'école primaire"], correct: 2, why: 'Primary school ends with nothing on paper. Le collège ends in le brevet and le lycée in the bac.', ref: 's03-ladder' },
        { format: 'typeIn', q: 'Three years after the bac. Write the qualification, with its article.', answer: 'une licence', accept: ['une licence', 'la licence'], why: 'Bac +3. Two more years past it would be un master.', ref: 's04-map' },
        { format: 'typeIn', q: 'Five years after the bac. Write the qualification, with its article.', answer: 'un master', accept: ['un master', 'le master'], why: 'Bac +5. A doctorat is three years further still.', ref: 's04-map' },
        { format: 'listenChoose', q: 'Listen. Which rung is being described?', say: "J'ai commencé à quinze ans et j'ai fini avec le bac.", opts: ['le lycée', 'le collège', "l'école primaire"], correct: 0, why: 'Fifteen to eighteen, ending in the bac. That is le lycée every time.', ref: 's03-ladder' },
        { format: 'listenChoose', q: 'Listen. What is she claiming?', say: 'Ça correspond à une licence.', opts: ['she has a licence', 'she is studying for a licence', 'her qualification is at that level'], correct: 2, why: 'Ça correspond à places her own qualification on the French scale. It does not say she holds the French one.', ref: 's19-equiv' },
      ],
    },
    {
      id: 'r2-subjects',
      label: 'What you studied',
      targets: ['de-les'],
      questions: [
        { format: 'typeIn', q: 'Complete: Je fais ___ maths. (two words)', answer: 'des maths', accept: ['des maths'], why: 'Les mathématiques is plural, so de + les gives des. fr.a2.matieres.011 states the rule.', ref: 's09-fairede' },
        { format: 'typeIn', q: 'Complete: Je fais ___ chimie. (three words)', answer: 'de la chimie', accept: ['de la chimie'], why: 'Feminine singular takes de la. The vowel rule has not kicked in, because chimie starts with a consonant.', ref: 's09-fairede' },
        { format: 'typeIn', q: 'Complete: Je fais ___ anglais. (three words)', answer: "de l'anglais", accept: ["de l'anglais", 'de l anglais'], why: "Anglais starts with a vowel, so de l'. Fold strips the apostrophe, which is why the question asks for the words rather than the mark.", ref: 's09-fairede' },
        { format: 'errorSpot', q: 'One thing is wrong. Write it out corrected.', prompt: "J'ai fait de les maths pendant trois ans.", answer: "J'ai fait des maths pendant trois ans.", accept: ["J'ai fait des maths pendant trois ans"], why: 'De + les is always des, never de les. This is the form the rule row produces for a plural subject.', ref: 's17-errors' },
        { format: 'errorSpot', q: 'The verb is wrong. Write it out corrected.', prompt: "J'ai appris la médecine à l'université.", answer: "J'ai étudié la médecine à l'université.", accept: ["J'ai étudié la médecine à l'université", "J'ai etudie la medecine a l'universite"], why: 'Étudier is a subject you sat in front of. Apprendre is a skill you came away able to do.', ref: 's10-three' },
        { format: 'errorSpot', q: 'The verb puts you in the wrong chair. Write it out corrected.', prompt: 'Mon professeur a étudié les maths à ma classe.', answer: 'Mon professeur a enseigné les maths à ma classe.', accept: ['Mon professeur a enseigné les maths à ma classe', 'Mon professeur a enseigne les maths a ma classe'], why: 'Enseigner is what somebody does to you. A teacher who étudie is a pupil.', ref: 's10-three' },
        { format: 'mcq', q: 'Which one puts you at the front of the room?', opts: ["j'ai étudié", "j'ai appris", "j'ai enseigné"], correct: 2, why: 'Enseigner. The other two put you in a seat.', ref: 's10-three' },
        { format: 'mcq', q: 'Which is the middle of the three-point scale?', opts: ['nul en', 'moyen en', 'fort en'], correct: 1, why: 'Fort en is the top and nul en is the bottom. Moyen en is what people actually say about themselves.', ref: 's11-forten' },
      ],
    },
    {
      id: 'r3-passer',
      label: 'How it went',
      targets: ['passer-means-passed'],
      questions: [
        { format: 'errorSpot', q: 'This says the wrong thing. Write it out so it means you got it.', prompt: "J'ai passé mon examen.", answer: "J'ai réussi mon examen.", accept: ["J'ai réussi mon examen", "J'ai reussi mon examen"], why: 'Passer says you sat it. Réussir is the one that means you got it, and nothing about passer implies a result.', ref: 's14-passer' },
        { format: 'errorSpot', q: 'The reason does not follow. Write it out corrected.', prompt: PASSER_AS_PASS_WRONG, answer: "J'ai réussi mon examen, donc j'ai mon diplôme.", accept: ["J'ai réussi mon examen, donc j'ai mon diplôme", "J'ai reussi mon examen donc j'ai mon diplome"], why: 'Turning up does not get you the diploma. Only réussir does, and the sentence is grammatical enough that nobody queries it.', ref: 's17-errors' },
        { format: 'errorSpot', q: 'The verb is too neutral for a fail. Write it out corrected.', prompt: "J'ai passé mon examen de chimie, mais je n'ai pas eu la moyenne.", answer: "J'ai raté mon examen de chimie.", accept: ["J'ai raté mon examen de chimie", "J'ai rate mon examen de chimie"], why: 'Rater, or échouer à. Passer would have said you simply attended.', ref: 's14-passer' },
        { format: 'errorSpot', q: 'The scale is wrong. Write it out corrected.', prompt: "J'ai eu soixante-dix pour cent.", answer: "J'ai eu quatorze sur vingt.", accept: ["J'ai eu quatorze sur vingt"], why: 'A percentage carries nothing here. Marks run to twenty and ten is the pass.', ref: 's17-errors' },
        { format: 'typeIn', q: 'You cleared ten out of twenty and want to claim nothing more. Write the four-word sentence.', answer: "J'ai eu la moyenne.", accept: ["J'ai eu la moyenne", 'jai eu la moyenne'], why: 'Avoir la moyenne says you passed and stops there, which is often exactly what you want.', ref: 's15-marks' },
        { format: 'typeIn', q: 'Write the two words that follow a mark. Fourteen ___.', answer: 'sur vingt', accept: ['sur vingt'], why: 'The number, then sur vingt. Never a percentage and never out of a hundred.', ref: 's15-marks' },
        { format: 'mcq', q: 'Which sentence says nothing about the result?', opts: ["J'ai réussi mon examen.", "J'ai passé mon examen.", "J'ai raté mon examen."], correct: 1, why: 'Passer reports attendance. The other two report an outcome.', ref: 's14-passer' },
        { format: 'mcq', q: 'A mention appears where?', opts: ['on the diploma itself', 'in the exam room', 'on the timetable'], correct: 0, why: 'Assez bien, bien and très bien are printed on the paper, which is why they are worth saying out loud.', ref: 's15-marks' },
      ],
    },
    {
      id: 'r4-account',
      label: 'The whole account',
      targets: ['no-equivalence'],
      questions: [
        { format: 'typeIn', q: 'The plainest hedge, three words. Complete: ___ à une licence.', answer: 'ça correspond', accept: ['ça correspond', 'ca correspond'], why: 'Ça correspond à is the one to reach for first. It works for any qualification.', ref: 's19-equiv' },
        { format: 'typeIn', q: 'Write the three words for a finished stretch of three years. ___ trois ans.', answer: 'pendant', accept: ['pendant'], why: 'Pendant is the stretch you were in it. En trois ans is how long it took to finish.', ref: 's12-howlong' },
        { format: 'typeIn', q: 'The registrar asks what you studied. Answer in four words about law.', answer: "J'ai étudié le droit.", accept: ["J'ai étudié le droit", "J'ai etudie le droit"], why: 'A field takes the plain article, not faire de. Faire de is for school subjects.', ref: 's13-say' },
        { format: 'speak', q: 'Line one, out loud: « J\'ai fait trois ans après le bac. »', target: "J'ai fait trois ans après le bac.", why: 'The years are the part that always maps. The name never does.', ref: 's24-check' },
        { format: 'speak', q: 'Line four, out loud: « Ça correspond à une licence. »', target: 'Ça correspond à une licence.', why: 'Ça correspond à, and then the French level. That is the whole move, in four words plus the level.', ref: 's19-equiv' },
        { format: 'mcq', q: 'Which one is the registrar asking for?', opts: ['the name of your qualification', 'the level and the number of years', 'the name of your school'], correct: 1, why: 'The name has nothing behind it here. The level and the years are what goes in the box.', ref: 's21-registry' },
        { format: 'mcq', q: 'Your qualification has no French match at all. What do you say?', opts: ["C'est l'équivalent d'une licence.", "J'ai un Bachelor of Science.", 'Chez nous, on appelle ça autrement.'], correct: 2, why: 'Name it as your own and then give the years. Claiming a match that does not exist is worse than admitting there is none.', ref: 's19-equiv' },
        { format: 'mcq', q: 'You missed what the registrar just asked. Which is the cheapest thing to say?', opts: ['Pardon ?', "Vous pouvez me l'écrire, s'il vous plaît ?", 'Je ne sais pas.'], correct: 0, why: `${REPAIR_UNIT} ordered its six by what each one costs you. Pardon gives away nothing; asking them to write it down concedes the spoken channel has failed.`, ref: 's19-equiv' },
      ],
    },
  ],
  audio: AUDIO,
  terms: ['dossier', 'hedge'],
};

const S26_ROUNDUP: LessonSection = {
  type: 'roundup',
  id: 's26-roundup',
  layer: 'core',
  title: 'What you can do now',
  body: 'They will not know the name of your diploma. Say what it was and how long it took. You came in able to name school subjects, because the corpus had them and this lesson only put them in your hands. You leave able to give a stranger four lines they can write down: the level, the content, the result and what it comes out at here. Nobody learned the name of your qualification, and nobody needed to.',
  points: [
    `${LAYER_1}: five rungs, and everything above the lycée is counted in years after the bac`,
    `${LAYER_2}: faire de for a school subject, the plain article for a field`,
    `${LAYER_3}: out of twenty, ten is the pass, and passer is not passed`,
    `${LAYER_4}: four hedges, and the years always map even when the name does not`,
    `And if you lose what they asked, ${REPAIR_UNIT} gave you six ways to ask again`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['dossier', 'hedge'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DRILLS
 *
 *  `drillForRound` fires the drill of the FIRST RESOLVING TARGET ONLY. Each of
 *  these is the first target of exactly one round.
 *
 *  `LessonDrill.format` is a LITERAL UNION, not string, so the array is typed
 *  rather than inferred.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DRILLS: LessonDrill[] = [
  {
    id: 'd-rungs',
    title: 'Place it on the scale',
    format: 'sort',
    buckets: ['le collège', 'le lycée', 'bac +3', 'bac +5'],
    items: [E(51), E(46), E(21), E(20)],
    coach: 'Count from the bac. The name of the qualification is not the question.',
  },
  {
    id: 'd-dele',
    title: 'De + les is des',
    format: 'mcq',
    q: 'Which one is right?',
    opts: ["J'ai fait de les maths.", "J'ai fait des maths."],
    correct: 1,
    why: 'De + les is always des. fr.a2.matieres.011 states the rule and this is the plural it produces.',
  },
  {
    id: 'd-passer',
    title: 'Sat it, or got it',
    format: 'mcq',
    q: 'You want to say you got the exam. Which one?',
    opts: ["J'ai passé mon examen.", "J'ai réussi mon examen."],
    correct: 1,
    why: 'Passer is the day you turned up. Réussir is the result.',
  },
  {
    id: 'd-hedge',
    title: 'Make it placeable',
    format: 'flashcard',
    items: [E(16), E(17), E(18), E(19), E(20), E(21)],
    coach: 'Give the level and the years. The name of your qualification is not going in the box.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LESSON
 * ══════════════════════════════════════════════════════════════════════════ */

export const SECTIONS: LessonSection[] = [
  S01_SCENE, S02_GOALS,
  S03_LADDER, S04_MAP, S05_CREDENTIALS, S06_QUEBEC, S07_PLACE,
  S08_SUBJECTS, S09_FAIREDE, S10_THREE, S11_FORTEN, S12_HOWLONG, S13_SAY,
  S14_PASSER, S15_MARKS, S16_OUTCOME, S17_ERRORS, S18_LISTEN,
  S19_EQUIV, S20_READ, S21_REGISTRY, S22_DICTATION, S23_SPEAK, S24_CHECK,
  S25_QUIZ, S26_ROUNDUP,
];

/** Every id the lesson can put in front of a learner: what it authored, plus
 *  every id any section names, any deckTranche releases and any LessonDrill
 *  lists. The merge pulls every one of these out of Postgres, because the seed
 *  is a CUT and four of the import themes hold zero seed rows. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...IMPORT_IDS])];

/** Tranches release every taught item exactly once and nothing untaught, and no
 *  tranche releases an item the acts before it have not shown. Act 1 releases
 *  nothing: the scene teaches no vocabulary. */
export const DECK_TRANCHE: string[][] = [
  // act 1 — the scene shows the failure, and hands over no cards
  [],
  // act 2 — the ladder and the map
  [
    'fr.a1.ecole.065', 'fr.a1.ecole.066', 'fr.a1.ecole.063', 'fr.a1.ecole.064',
    E(24), E(25), E(27), E(28), E(51)],
  // act 3 — the subjects, faire de, the three verbs, the strength scale, the spans
  [
    'fr.a1.ecole.130', 'fr.a1.ecole.131', 'fr.a1.ecole.132', 'fr.a1.ecole.133', 'fr.a1.ecole.134',
    'fr.a1.ecole.135', 'fr.a1.ecole.136', 'fr.a1.ecole.137', 'fr.a1.ecole.138', 'fr.a1.ecole.139',
    'fr.a1.ecole.140', 'fr.a1.ecole.142', 'fr.a1.ecole.143',
    'fr.a2.matieres.011', 'fr.a2.matieres.009', 'fr.a2.matieres.010',
     'fr.a1.ecole.051',
    'fr.b1.matieres.022',  'fr.a2.disciplines.003',
    'fr.a2.rp-travail-etudes.001',
    E(39), E(40), E(41), E(42), E(43), E(44), E(45), E(46), E(50)],
  // act 4 — the trap, the marks, the outcome
  [
    E(29), E(30), E(31), E(32), E(33),
    E(26), E(34), E(35), E(36), E(37), E(38), E(47), E(48), E(49),
    'fr.a1.ecole.111', 'fr.a1.ecole.112', 'fr.a2.ecole.008', 'fr.a2.ecole.009',
    'fr.a1.ecole.058', 'fr.a1.ecole.117', 'fr.a1.ecole.060',
    'fr.a1.ecole.109', 'fr.a1.ecole.110',
     'fr.a2.examens-et-diplomes.021',
    'fr.a1.ecole.013', 'fr.a1.ecole.115', 'fr.a1.ecole.116',
    'fr.a1.ecole.017', 'fr.a1.ecole.018', 'fr.a1.ecole.016'],
  // act 5 — the hedge, the registrar's half, the citations
  [
    E(16), E(17), E(18), E(19), E(20), E(21), E(22), E(23),
    E(52), E(53), E(54), E(55), E(56), E(57), E(58), E(59), E(60), E(61),
    E(62), E(63), E(64), E(65), E(66), E(67), E(68), E(69), E(70), E(71),
    E(72), E(73), E(74), E(75), E(76),
    'fr.a2.examens-et-diplomes.033', 'fr.a2.examens-et-diplomes.017',
    'fr.a2.examens-et-diplomes.018',
     'fr.a2.examens-et-diplomes.013',
    ...REPAIR_IDS, ...LADDER_IDS],
  // act 6 — the quiz and the roundup release nothing new
  []];

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.title,
  level: 'a2',
  tag: 'A2 · LEÇON 30',
  intro: 'A form asks for your last qualification and the only name you have for it is not one it recognises. This lesson is the four lines you give instead: what level it was, what you studied, how it went, and what that comes out at here.',
  skill: 'PO',
  // NOT `teaches`, NOT `canDo`, NOT `track`. All three draw nothing on a Lesson
  // and a2.07 shipped all three. `canDo` belongs to the unit.
  grammarAssumed: [TENSE_UNIT, TIME_UNIT, 'a2.01', 'a1.03', 'a2.19'],
  grammarIntroduced: [
    'faire de + school subject',
    'fort / moyen / nul en',
    'pendant and en for a finished span',
    'the equivalence hedge',
  ],
  // THE IMPARFAIT IS IN NEITHER LIST, deliberately. It appears twice in this
  // lesson, receptively, as an unanalysed chunk, and a lesson that claims a
  // tense it does not teach corrupts the curriculum checkability the two-list
  // design exists for.
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Quatre lignes, et personne n'a besoin du nom de votre diplôme.",
    minutes: 34,
    difficulty: 3,
    glyph: '🎓',
    screens: 94,
  },
  reframe: REFRAME,
  acts: [
    {
      id: 'act1',
      title: 'The box you cannot fill',
      sections: ['s01-scene', 's02-goals'],
      milestone: 'You have seen your own instinct fail on a real form field',
      estScreens: 10,
      restPoints: ['s02-goals'],
    },
    {
      id: 'act2',
      title: 'The ladder',
      sections: ['s03-ladder', 's04-map', 's05-credentials', 's06-quebec', 's07-place'],
      milestone: 'You can place any French school level, and your own, on one scale',
      estScreens: 24,
      restPoints: ['s04-map', 's05-credentials', 's07-place'],
    },
    {
      id: 'act3',
      title: 'What you did there',
      sections: ['s08-subjects', 's09-fairede', 's10-three', 's11-forten', 's12-howlong', 's13-say'],
      milestone: 'You can name what you studied and say how long you did it for',
      estScreens: 24,
      restPoints: ['s10-three', 's13-say'],
    },
    {
      id: 'act4',
      title: 'How it went',
      sections: ['s14-passer', 's15-marks', 's16-outcome', 's17-errors', 's18-listen'],
      milestone: 'You can report a result out of twenty without inverting it',
      estScreens: 20,
      restPoints: ['s15-marks', 's18-listen'],
    },
    {
      id: 'act5',
      title: 'Saying it so it lands',
      sections: ['s19-equiv', 's20-read', 's21-registry', 's22-dictation', 's23-speak', 's24-check'],
      milestone: 'You gave the whole account aloud, including the equivalence',
      estScreens: 22,
      restPoints: ['s21-registry', 's24-check'],
    },
    {
      id: 'act6',
      title: 'Check and close',
      sections: ['s25-quiz', 's26-roundup'],
      milestone: 'Thirty-two questions, and the four lines one last time',
      estScreens: 8,
      restPoints: ['s26-roundup'],
    },
  ],
  errorTriggers: [
    {
      id: 'translates-the-name',
      description: 'Gives the name of their own qualification instead of its level and length.',
      detectOn: ['s01-scene', 's04-map', 's17-errors', 's19-equiv'],
      drill: 'd-rungs',
    },
    {
      id: 'de-les',
      description: 'Writes de les for a plural subject instead of des.',
      detectOn: ['s09-fairede', 's13-say', 's17-errors'],
      drill: 'd-dele',
    },
    {
      id: 'passer-means-passed',
      description: 'Uses passer un examen to mean passed it. Grammatical, and it inverts the meaning.',
      detectOn: ['s14-passer', 's15-marks', 's17-errors'],
      drill: 'd-passer',
    },
    {
      id: 'no-equivalence',
      description: 'Stops after the qualification name, leaving the listener unable to place them.',
      detectOn: ['s19-equiv', 's21-registry', 's24-check'],
      drill: 'd-hedge',
    },
  ],
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  terms: ECOLE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  // `LessonAudio` is NOT `SectionAudio`. It takes `defaultLang`, not `lang`,
  // and it has no `mode`. The admin typecheck is the only check that sees the
  // difference; `validateLesson` tolerates the unknown key and carries it into
  // Postgres, into seed.json and into the OTA snapshot, where nothing reads it.
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    coachVoice: 'coach-en-warm',
    // NOT modelPlayback, wrongThenRight, perSentenceReplay, scoreOn, autoplay
    // or maxPlays. All six validate, publish and are read by NO renderer
    // (collation §3.5). The seed already authors 31 of them.
  },
};
