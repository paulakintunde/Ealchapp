// a1.26.l1 "La maison": the lesson body.
//
// Reads every French string, transcription and gloss from maison-corpus.ts and
// restates none of them.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THE HERO IS s04-split AND IT IS A tapTable WITH THREE ROWS AND TWO COLUMNS.
// chambre, pièce and salle ON ONE SCREEN, with the English on the left and the
// French on the right. That is the reframe made visible: English collapses three
// words into one, and a learner who meets the three on separate cards learns
// three synonyms instead of one decision. `tapTable` is NOT in `ownsLayout()`
// (LessonPager.tsx:162) and renders inside a scrolling page; three by two fits a
// Pixel 6 without scrolling. The batch, the merge and the test all assert that a
// single section carries all three.
//
// s05-bath IS THE SECOND PAIR AND GETS ITS OWN TWO COLUMNS. la salle de bain
// against les toilettes is the scene's hinge, and split across two cards it is
// two unremarkable room names. Two columns, one screen, asserted.
//
// NO groupDrill CARRIES `size`. A groupDrill owns the viewport at `xl` and not
// otherwise, and `xl` is unusable here: `density.logic.ts` reads it as a
// TWELVE-WORD CAP ON EVERY STRING IN THE SECTION, and every check below carries
// a `why` that teaches the rule rather than naming it. Every control page
// carries `items: []` explicitly.
//
// NO FLOOR PLAN, NO DIAGRAM, NO IMAGE. No component draws a plan, no section
// type positions anything spatially, and `imageRef` resolves through a
// statically enumerated registry in lessonImages.ts that `lesson-contract.test.ts`
// does NOT check. An unregistered ref draws a blank box and nothing goes red. So
// there is none, and the batch, the merge and the test all assert there is none.
//
// THE REFERENCE SHEET CONTAINS NO cheatSheet. A `cheatSheet` nested inside a
// reference sheet renders its title and nothing else, which a1.13 already ships
// as a defect. Both sheets below use `table` and `teach` only.
//
// ── The dictée cannot test this lesson, and that is measured ───────────────
//
// `DICTEE_LETTER_LIMIT` is 16. The SHORTEST row in theme maison carrying a
// `dictation` drill is « La cuisine est à côté du salon. » at 24 letters. All
// seventeen land in WORD mode, so there is no letters-mode target at any length.
//
// `wordDecoys` returns `["et","le"]` for every target, so word mode hands the
// learner each content word pre-spelled and adds two generic function words as
// noise. Tapping a tile marked `chambre` is not choosing between chambre and
// cuisine. THE DICTÉE HERE DOES NOT TEST THE ROOM DISTINCTION and is not where
// this lesson is proved; the quiz and s04-split are. It is kept because the rows
// exist, carry the drill, and put the room words in front of the learner once
// more. Named here so nobody "fixes" it by adding a target that cannot help.
//
// ── The quiz renderer does NOT shuffle ─────────────────────────────────────
//
// Verified in LessonPager.tsx:802-831 and QuizRoundsView.tsx:204-224. A lesson
// declaring `rounds` renders through `QuizRoundsView`, whose `McqCard` maps
// `opts` in AUTHORED ORDER. `QuizDeckView` in LessonRich.tsx does shuffle and
// only ever sees pre-v2 lessons carrying no rounds. So the authored `correct`
// index below IS the position the learner sees, on every attempt, and the spread
// is real randomisation rather than a formality. See QUIZ_SLOT_SPREAD.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { MAISON_TERMS, REFRAME } from './maison-terms.ts';
import {
  APPLIANCES, BATH_PAIR, BED_AND_BATH, BY_ROOM, CHORES, COMPOUND_APPLIANCES, DWELLINGS,
  EAR_PAIR, FURNITURE, OBJECTS, ROOMS, SIMPLE_APPLIANCES, STRUCTURE, TABLEWARE,
  THE_THREE_ROOM_WORDS, enOf, frOf, glossOf, idOf, ipaOf, sub,
} from './maison-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen, or named by a drill or a term. a1.08
 * shipped 43 itemIds named by nothing at all, released to spaced repetition and
 * drawn by no component, and it was invisible until a check asked "did the
 * learner see it" rather than "does this id resolve".                        */

const id = (fr: string) => idOf(fr);

/** The three-way split, and the sentence that puts the counting one to work. */
const THREE_IDS = [id('la chambre'), id('les pièces')];
const PIECES_SENTENCES = ['fr.a1.maison.157', 'fr.a1.maison.158'];

const BATH_IDS = [id(BATH_PAIR.bath), id(BATH_PAIR.toilet)];
const ROOM_IDS = ROOMS.map(id);
const DWELLING_IDS = DWELLINGS.map(id);
const STRUCTURE_IDS = STRUCTURE.map(id);
const FURNITURE_IDS = FURNITURE.map(id);
const BED_BATH_IDS = BED_AND_BATH.map(id);
const APPLIANCE_IDS = APPLIANCES.map(id);
const TABLEWARE_IDS = TABLEWARE.map(id);
const OBJECT_IDS = OBJECTS.map(id);
const CHORE_IDS = CHORES.map(id);

/** The corpus already carrying a1.21's rule on this lesson's nouns, written by
 *  nobody teaching either. Act 4 is built on these and teaches no preposition. */
const WHERE_WILD = [
  'fr.a1.maison.005', // Il y a une table dans le salon.
  'fr.a1.maison.124', // La cuisine est à côté du salon.
  'fr.a1.maison.125', // Il y a un grand lit dans la chambre.
  'fr.a1.maison.129', // Le salon a deux fenêtres et une porte.
  'fr.a1.maison.131', // Les rideaux sont bleus dans le salon.
  'fr.a1.maison.134', // La salle de bain est au bout du couloir.
  'fr.a1.maison.137', // Le chat dort sur le grand lit blanc.
  'fr.a1.maison.141', // Il y a un canapé dans le salon.
  'fr.a1.maison.144', // Nous avons deux chambres et une salle de bains.
  'fr.a1.maison.145', // Le frigo est vide.
  'fr.a1.maison.152', // Le lit est près de la fenêtre.
  'fr.a1.maison.155', // La salle de bains est au premier étage.
];

const ITEM_IDS = [
  ...new Set([
    ...THREE_IDS, ...PIECES_SENTENCES,
    ...BATH_IDS, ...ROOM_IDS, ...DWELLING_IDS,
    ...STRUCTURE_IDS, ...FURNITURE_IDS, ...BED_BATH_IDS,
    ...APPLIANCE_IDS, ...TABLEWARE_IDS, ...OBJECT_IDS, ...CHORE_IDS,
    ...WHERE_WILD,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs.
 *
 *  NOT ONE SENTENCE IS IN HERE, and that is measured rather than chosen: no
 *  published SENTENCE in theme `maison` carries `voiceflash`. The rows that do
 *  are the words and the three chore phrases. Checked against Postgres by the
 *  batch, not against the seed. */
const SPEAK_IDS = [
  ...ROOM_IDS, id('les pièces'), ...DWELLING_IDS, ...FURNITURE_IDS, ...APPLIANCE_IDS, ...CHORE_IDS,
];

/** The dictée. Every target is in WORD mode because every target in this theme
 *  is; see the header. Chosen so that what the learner sequences is at least a
 *  sentence about a room rather than about anything else. */
const DICTATION_IDS = [
  'fr.a1.maison.124', // La cuisine est à côté du salon.
  'fr.a1.maison.125', // Il y a un grand lit dans la chambre.
  'fr.a1.maison.129', // Le salon a deux fenêtres et une porte.
  'fr.a1.maison.134', // La salle de bain est au bout du couloir.
  'fr.a1.maison.137', // Le chat dort sur le grand lit blanc.
];

const CHAMBRE = THE_THREE_ROOM_WORDS[0];
const PIECES = THE_THREE_ROOM_WORDS[1];
const SALLE = THE_THREE_ROOM_WORDS[2];

/* ─── The scene ────────────────────────────────────────────────────────────
 *
 * An A1 scene opens on somebody being MISREAD AS A PERSON. Every word is
 * correct, nobody is corrected, nobody is annoyed, and the plan simply does not
 * happen. Here the learner asks for the room with the bath in it, is told where
 * it is, and is offered a towel: they have become the guest who wants a wash
 * between the starter and the main.
 *
 * The rejected alternative was the flat listing, where « 3 pièces » is read as
 * three bedrooms. It is a sharper fact and a duller scene, because nothing about
 * it is about the person. The fact survives in s18-reading.
 *
 * Every beat has its own `size` and its own `audio`, and the break body is 34
 * words, inside the 24 to 40 the shipped scenes run.                          */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Dinner at Claire\'s, your third month in Nantes. Eight people, a long table, and you have followed most of the last hour.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'Between the starter and the main you need the toilet. You have had this sentence ready since your first week of classes.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Claire',
    fr: 'Tu cherches quelque chose ?',
    en: 'Are you looking for something?',
    stage: 'She is stacking the starter plates and half turned away. Nothing rides on this.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You need the toilet. Which line comes out?',
    options: [
      {
        fr: `Où est ${BATH_PAIR.bath} ?`,
        respell: `[oo eh ${sub(BATH_PAIR.bath).replace(/^\[|\]$/g, '')}]`,
        en: 'the room every course taught you to ask for',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: `Où sont ${BATH_PAIR.toilet} ?`,
        respell: `[oo sohⁿ ${sub(BATH_PAIR.toilet).replace(/^\[|\]$/g, '')}]`,
        en: 'the room with the toilet in it',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Watch the other one, because it is understood perfectly and it still costs you something.',
      breaks: 'One room off. She understands you completely. Watch what she offers you next.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: `Où est ${BATH_PAIR.bath} ?`,
    en: '(Understood. Every word real. The wrong room)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Claire',
    fr: 'Bien sûr, au fond du couloir. Prends une serviette si tu veux.',
    en: 'Of course, at the end of the hall. Take a towel if you like.',
    stage: 'She is being kind. She heard exactly what you asked for and answered it, and now she thinks you want a wash.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Nothing went wrong, and you are being handed a towel',
    // 34 words. The shipped scene breaks run 24 to 40 here.
    body: 'She understood you. She was not correcting you and she was not judging you. In her house the bath and the toilet are two rooms, and you asked for the one with the bath in it.',
    wrong: {
      fr: `Où est ${BATH_PAIR.bath} ?`,
      ipa: `/u ɛ ${ipaOf(BATH_PAIR.bath).replace(/^\/|\/$/g, '')}/`,
      respell: `[oo eh ${sub(BATH_PAIR.bath).replace(/^\[|\]$/g, '')}]`,
      en: 'Understood, and it is the wrong room',
    },
    right: {
      fr: `Où sont ${BATH_PAIR.toilet} ?`,
      ipa: `/u sɔ̃ ${ipaOf(BATH_PAIR.toilet).replace(/^\/|\/$/g, '')}/`,
      respell: `[oo sohⁿ ${sub(BATH_PAIR.toilet).replace(/^\[|\]$/g, '')}]`,
      en: 'Where is the toilet',
    },
    coach: `${REFRAME} English has one word for both of those rooms and French has two, and the choice was made before you spoke.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-26-bath' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'The next time, at Marc\'s',
    fr: `Où sont ${BATH_PAIR.toilet} ?`,
    en: 'Where is the toilet?',
    stage: 'One room different, and it is the only word in the sentence that was ever carrying anything.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Marc',
    fr: 'Juste à côté, la porte à droite.',
    en: 'Right next door, the door on the right.',
    stage: 'No towel, no detour, and neither of you thinks about it again.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-scene' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One room, and it was not something you could work out in the moment. The next half hour is about the words that decide it.',
  },
];

/* ─── Sections ─────────────────────────────────────────────────────────────*/

const SECTIONS: LessonSection[] = [
  /* ── Act 1: which room is it ───────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Towel At The Dinner Party',
    frSub: 'La salle de bain ou les toilettes ?',
    render: 'screens',
    layer: 'core',
    terms: ['twoRooms', 'whichRoom'],
    say: {
      text: 'Every word correct, the wrong room, and somebody hands you a towel. Watch which word did it.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A long table in a flat that smells of the oven',
      city: 'Nantes',
      time: 'Saturday, half past nine',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the next half hour.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is a choice rather than a list.',
    goals: [
      { t: 'Pick the right word for a room', s: 'English says room for three different French words, and you choose before you speak rather than after.' },
      { t: 'Name every room in a home', s: 'Twelve of them, plus what you call the place itself, and the two rooms English keeps confusing.' },
      { t: 'Name what is in each room', s: 'Furniture, machines and the things you reach for, learned in the room they live in rather than as a list.' },
      { t: 'Say where something is', s: 'Using the words the last unit already gave you. Nothing new here, and now you have something to put in the sentence.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-three',
    title: 'One English Word, Three French Ones',
    frSub: 'Chambre, pièce, salle',
    hint: 'Five cards before any room list.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whichRoom'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-three' },
    say: 'Five cards before any list, because the list is unusable until this decision is made.',
    cards: [
      {
        label: 'the problem',
        head: 'English lets you off and French does not',
        fr: `${CHAMBRE.fr} · ${PIECES.fr} · ${SALLE.fr}`,
        sub: `${sub(CHAMBRE.fr)} · ${sub(PIECES.fr)} · ${sub(SALLE.fr)}`,
        body: 'In English you say room and the rest of the sentence works out which one you meant. French makes you decide first, and the three words are not interchangeable in any direction. This is the whole lesson and everything after it is vocabulary.',
      },
      {
        label: 'the one that means bedroom',
        head: CHAMBRE.fr,
        fr: frOf(id(CHAMBRE.fr)),
        sub: `${sub(CHAMBRE.fr)} · ${glossOf(CHAMBRE.fr)}`,
        body: `${CHAMBRE.use} Say it about the room with the sofa in it and your listener will picture a bed.`,
      },
      {
        label: 'the one you count with',
        head: PIECES.fr,
        fr: frOf('fr.a1.maison.157'),
        sub: enOf('fr.a1.maison.157'),
        body: `${PIECES.use} It is on every listing you will ever read, and it is the one nobody teaches you.`,
      },
      {
        label: 'the one that never comes alone',
        head: SALLE.fr,
        fr: `${BATH_PAIR.bath} · la salle à manger`,
        sub: `${sub(BATH_PAIR.bath)} · ${sub('la salle à manger')}`,
        body: `${SALLE.use} You will meet it a dozen times and almost never on its own, so learn it attached to the room rather than as a word in its own right.`,
      },
      {
        label: 'what to do about it',
        head: 'Reach for the room, not the word',
        body: `The fix is not to memorise three definitions. It is to stop translating. Picture the room you mean and the French word for THAT room is the one you want. ${REFRAME}`,
      },
    ],
  },

  {
    // THE HERO. Three rows, two columns, all three words on ONE screen. Split
    // across three cards this becomes three synonyms, which is the failure this
    // section exists to prevent. The batch, the merge and the test all assert
    // that a single section carries all three.
    type: 'tapTable',
    id: 's04-split',
    title: 'Three Words, One Screen',
    frSub: 'Le mot « room » en français',
    layer: 'core',
    terms: ['whichRoom'],
    sheetId: 'sheet.a1.26.rooms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-26-three' },
    say: 'English on the left, French on the right. Three rows, and they are three different rooms rather than three ways of saying one.',
    cols: ['what you mean in English', 'the French word'],
    rows: THE_THREE_ROOM_WORDS.map((w) => ({
      cells: [w.english, w.fr],
      say: w.fr,
      detail: {
        title: w.english,
        body: `${w.fr} ${sub(w.fr)} ${w.use}`,
        say: w.fr,
      },
    })),
  },

  /* ── Act 2: the rooms ──────────────────────────────────────────────────── */

  {
    // THE SECOND PAIR. Two columns, one screen, for the same reason as s04: the
    // scene turns on the difference and split across two cards it is two
    // unremarkable room names.
    type: 'tapTable',
    id: 's05-bath',
    title: 'The Bath Is Not The Toilet',
    frSub: 'Deux pièces, pas une',
    layer: 'core',
    terms: ['twoRooms'],
    sheetId: 'sheet.a1.26.rooms',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-26-bath' },
    say: 'Two rooms, two names, and in most French homes two doors. This is the one from the scene.',
    cols: ['the room with the bath', 'the room with the toilet'],
    rows: [
      {
        cells: [BATH_PAIR.bath, BATH_PAIR.toilet],
        say: `${BATH_PAIR.bath}, ${BATH_PAIR.toilet}`,
        detail: {
          title: 'Two doors, usually',
          body: `${BATH_PAIR.bath} ${sub(BATH_PAIR.bath)} has the bath and the basin. `
            + `${BATH_PAIR.toilet} ${sub(BATH_PAIR.toilet)} has the toilet. Ask for the first when you want `
            + 'the second and you will be shown the first.',
          say: `${BATH_PAIR.bath}, ${BATH_PAIR.toilet}`,
        },
      },
      {
        cells: [`la douche · la baignoire · le lavabo`, 'always plural, no singular'],
        say: 'la douche, la baignoire, le lavabo',
        detail: {
          title: 'What is in each, and the s that never goes away',
          body: `${sub('la douche')} ${sub('la baignoire')} ${sub('le lavabo')} are behind the first door. `
            + `Behind the second there is one thing, and its name is already plural: ${BATH_PAIR.toilet} has no `
            + 'singular at all for a room.',
          say: `la douche, la baignoire, le lavabo`,
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's06-rooms',
    title: 'The Rooms, One Door At A Time',
    frSub: 'Les pièces de la maison',
    hint: 'Twelve rooms and the place they are in.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['roomByRoom', 'whichRoom'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-rooms' },
    say: 'Walk through once. Every card names the room and the little word that goes with it.',
    cards: [
      {
        label: 'where you live',
        head: 'The place itself',
        fr: `${frOf(id('la maison'))} · ${frOf(id("l'appartement"))} · ${frOf(id('le studio'))}`,
        sub: `${sub('la maison')} · ${sub("l'appartement")} · ${sub('le studio')}`,
        body: 'A house, a flat, and the one-room flat that is a studio in both languages. Three of these you already met in the gender lesson, where they were the worked examples rather than the point.',
      },
      {
        label: 'where you sit and where you eat',
        head: `${frOf(id('le salon'))} · ${frOf(id('la cuisine'))} · ${frOf(id('la salle à manger'))}`,
        fr: frOf('fr.a1.maison.141'),
        sub: enOf('fr.a1.maison.141'),
        body: 'The living room, the kitchen and the dining room. Note that the kitchen word also means cooking as an activity, so « j\'aime la cuisine » is about food rather than about a room.',
      },
      {
        label: 'where you sleep and wash',
        head: `${frOf(id('la chambre'))} · ${BATH_PAIR.bath} · ${BATH_PAIR.toilet}`,
        fr: frOf('fr.a1.maison.144'),
        sub: enOf('fr.a1.maison.144'),
        body: 'The bedroom and the two rooms from the scene. This sentence is a published one and it counts the bedrooms and the bathroom separately, which is exactly how somebody would describe a flat to you.',
      },
      {
        label: 'the ones between and around',
        head: `${frOf(id('le couloir'))} · ${frOf(id('la cave'))} · ${frOf(id('le grenier'))}`,
        fr: frOf('fr.a1.maison.134'),
        sub: enOf('fr.a1.maison.134'),
        body: 'The hallway, the cellar and the attic. The hallway is worth having early because it is how everybody gives directions inside a home, as this published sentence does.',
      },
      {
        label: 'outside, still yours',
        head: `${frOf(id('le jardin'))} · ${frOf(id('le balcon'))} · ${frOf(id('le garage'))}`,
        fr: `${frOf(id('le jardin'))} · ${frOf(id('le balcon'))} · ${frOf(id('le garage'))}`,
        sub: `${sub('le jardin')} · ${sub('le balcon')} · ${sub('le garage')}`,
        body: 'The garden, the balcony and the garage. All three are the le kind, which is a coincidence rather than a rule, and it is worth saying so out loud before anybody starts counting.',
      },
      {
        label: 'counting them',
        head: `And how many ${PIECES.fr} that is`,
        fr: frOf('fr.a1.maison.158'),
        sub: enOf('fr.a1.maison.158'),
        body: `${PIECES.use} That is why a « trois pièces » is smaller than it sounds to an English ear.`,
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's07-bank',
    title: 'Every Room, Banked',
    frSub: 'Le vocabulaire des pièces',
    layer: 'core',
    terms: ['whichRoom', 'roomByRoom'],
    sheetId: 'sheet.a1.26.rooms',
    say: 'Three decks. Every card carries its little word, because a room without one is half a card.',
    themes: [
      {
        title: 'the rooms you spend the day in',
        cards: ['le salon', 'la cuisine', 'la salle à manger', 'la chambre'].map((w) => ({
          fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w),
        })),
      },
      {
        title: 'the rooms you pass through',
        cards: [BATH_PAIR.bath, BATH_PAIR.toilet, 'le couloir', 'la cave', 'le grenier'].map((w) => ({
          fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w),
        })),
      },
      {
        title: 'the place, and the outside of it',
        cards: ['la maison', "l'appartement", 'le studio', 'le jardin', 'le balcon', 'le garage', 'les pièces'].map((w) => ({
          fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w),
        })),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's08-check',
    title: 'Now Without The Deck',
    frSub: 'Sans les cartes',
    layer: 'core',
    terms: ['whichRoom', 'twoRooms'],
    say: 'Four questions and nothing to look at. This is the one that tells you whether the three words landed.',
    groups: [
      {
        label: 'the three that English collapses',
        items: THE_THREE_ROOM_WORDS.map((w) => ({
          fr: w.fr, itemId: w.fr === SALLE.fr ? undefined : id(w.fr), respell: sub(w.fr), en: w.english,
        })).filter((x) => x.itemId !== undefined) as { fr: string; itemId: string; respell: string; en: string }[],
        check: {
          q: 'A friend says their flat has quatre pièces. What have they just told you?',
          opts: [
            'It has four bedrooms',
            'It has four rooms in total, not counting the kitchen or bathroom',
            'It has four floors',
            'It has four beds',
          ],
          correct: 1,
          why: 'Four rooms in total, and the kitchen and the bathroom are not among them. This is why a French flat sounds bigger in the listing than it turns out to be: the number counts rooms you live in, not doors.',
        },
      },
      {
        label: 'the bedroom word',
        items: [],
        check: {
          q: 'You are sitting on the sofa and want to say this room is nice. Which word?',
          opts: ['cette chambre', 'cette salle', 'cette pièce', 'cette maison'],
          correct: 2,
          why: 'cette pièce. The room you are standing in is a pièce. Chambre would tell them you are in a bedroom, and salle does not stand on its own like that. This is the reframe doing its work: picture the room, then choose.',
        },
      },
      {
        label: 'the two rooms from the scene',
        items: [BATH_PAIR.bath, BATH_PAIR.toilet].map((w) => ({
          fr: w, itemId: id(w), respell: sub(w), en: glossOf(w),
        })),
        check: {
          q: 'You need the toilet in somebody\'s flat. What do you ask for?',
          opts: [
            'la salle de bain',
            'la chambre',
            'la toilette',
            'les toilettes',
          ],
          correct: 3,
          why: 'les toilettes, and it is plural every time. The first option gets you the room with the bath in it, which is a different door. There is no singular « la toilette » for the room, so the s is not optional.',
        },
      },
      {
        label: 'the whole habit',
        items: [],
        check: {
          q: 'You are about to say the word room in French. What should you do first?',
          opts: [
            'Work out whether it is the le kind or the la kind',
            'Say pièce, which always works',
            'Picture the actual room and pick the word for that room',
            'Use salle and add what happens in it',
          ],
          correct: 2,
          why: `${REFRAME} The gender question comes after and is stored with the word anyway. Pièce does not always work: it is wrong for a bedroom and wrong inside salle de bain.`,
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    swipe: true,
    size: 'lg',
    id: 's09-errors',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['whichRoom', 'twoRooms'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-26-traps' },
    say: `${REFRAME} Five things an English speaker says in their first month, one per screen.`,
    errors: [
      {
        wrong: `Asking for « ${BATH_PAIR.bath} » when you need the toilet`,
        right: `Asking for « ${BATH_PAIR.toilet} »`,
        why: 'The one from the opening scene, and the one that costs the most because it is understood completely and sends you to the wrong door. In most French homes these are two rooms.',
      },
      {
        wrong: 'Using « chambre » for the room you are sitting in',
        right: 'Using « pièce » for a room, or « salon » for the living room',
        why: 'Chambre is a bedroom and only a bedroom. Said about a living room it does not read as a small mistake, it reads as a different room, and the person you are talking to will picture a bed.',
      },
      {
        wrong: 'Saying « salle » on its own to mean a room',
        right: 'Saying « salle de bain » or « salle à manger », or using « pièce »',
        why: 'Salle almost never stands alone in a home. It arrives attached to what happens in the room, and a bare salle sounds like the beginning of a sentence somebody forgot to finish.',
      },
      {
        wrong: 'Saying « la toilette » for the room',
        right: `Saying « ${BATH_PAIR.toilet} »`,
        why: 'This one is always plural. The singular exists as a word and means something else entirely, closer to getting dressed and made up, so dropping the s changes the subject rather than sounding careless.',
      },
      {
        wrong: 'Hearing « trois pièces » and expecting three bedrooms',
        right: 'Hearing three rooms in total, kitchen and bathroom not included',
        why: 'Not a speaking mistake and it will still cost you an afternoon. Every flat listing counts this way, so a trois pièces is usually two bedrooms and a living room.',
      },
    ],
  },

  /* ── Act 3: what is in each room ───────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's10-furniture',
    title: 'The Furniture',
    frSub: 'Les meubles',
    hint: 'Eleven pieces, grouped by where they are.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['roomByRoom'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-furniture' },
    say: 'Grouped by the room rather than by the alphabet, because that is how you will meet them.',
    cards: [
      {
        label: 'the living room',
        head: `${frOf(id('le canapé'))} · ${frOf(id('le fauteuil'))} · ${frOf(id('la table'))}`,
        fr: frOf('fr.a1.maison.141'),
        sub: enOf('fr.a1.maison.141'),
        body: 'A sofa seats several people and an armchair seats one, which is the same split English makes. The table here is the plain one; the low one in front of the sofa has its own name and is not in this lesson.',
      },
      {
        label: 'the bedroom',
        head: `${frOf(id('le lit'))} · ${frOf(id("l'armoire"))} · ${frOf(id('la lampe'))}`,
        fr: frOf('fr.a1.maison.125'),
        sub: enOf('fr.a1.maison.125'),
        body: 'A bed, a wardrobe and a lamp. French homes rarely have built-in wardrobes, so the freestanding one is the ordinary word rather than a special case.',
      },
      {
        label: 'soft things',
        head: `${frOf(id('la couverture'))} · ${frOf(id("l'oreiller"))} · ${frOf(id('le tapis'))}`,
        fr: frOf('fr.a1.maison.137'),
        sub: enOf('fr.a1.maison.137'),
        body: 'A blanket, a pillow and a rug. The rug word is the one to be careful with: it is a rug on the floor, not a carpet fitted wall to wall, which is a different word again.',
      },
      {
        label: 'things that hold things',
        head: `${frOf(id("l'étagère"))} · ${frOf(id('le placard'))} · ${frOf(id('la chaise'))}`,
        fr: `${frOf(id("l'étagère"))} · ${frOf(id('le placard'))} · ${frOf(id('la chaise'))}`,
        sub: `${sub("l'étagère")} · ${sub('le placard')} · ${sub('la chaise')}`,
        body: 'A shelf, a cupboard and a chair. The cupboard word covers a kitchen cupboard and a clothes cupboard both, so it will turn up in two of the rooms you have just learned.',
      },
      {
        label: 'the window and what covers it',
        head: `${frOf(id('la fenêtre'))} · ${frOf(id('le rideau'))}`,
        fr: frOf('fr.a1.maison.131'),
        sub: enOf('fr.a1.maison.131'),
        body: 'A window and the curtains on it. Notice the curtains are plural in the published sentence and that the colour agrees with them, which is the colours lesson still holding two units later.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's11-byroom',
    title: 'Which Room Does It Live In',
    frSub: 'Chaque chose à sa place',
    layer: 'core',
    terms: ['roomByRoom'],
    sheetId: 'sheet.a1.26.byroom',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-26-furniture' },
    say: 'Four rooms and what is in each. Tap a row to hear the room and the things in it.',
    cols: ['the room', 'what is in it'],
    rows: BY_ROOM.map((r) => ({
      cells: [r.room, r.things.slice(0, 3).join(' · ')],
      say: r.room,
      detail: {
        title: glossOf(r.room),
        body: `${r.room} ${sub(r.room)} holds ${r.things.slice(0, 4).map((t) => `${t} ${sub(t)}`).join(', ')}. `
          + 'One room, one set, and you have stood in it.',
        say: r.things.join(', '),
      },
    })),
  },

  {
    type: 'vocabThemes',
    id: 's12-things',
    title: 'The Rest Of The House, Banked',
    frSub: 'Le reste du vocabulaire',
    layer: 'core',
    terms: ['roomByRoom', 'machinesAreMasculine'],
    sheetId: 'sheet.a1.26.byroom',
    say: 'Four decks. The shell of the place, the machines, what goes on the table, and what you reach for.',
    themes: [
      {
        title: 'the shell of the place',
        cards: STRUCTURE.map((w) => ({ fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w) })),
      },
      {
        title: 'the machines',
        cards: APPLIANCES.map((w) => ({ fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w) })),
      },
      {
        title: 'what goes on the table',
        cards: TABLEWARE.map((w) => ({ fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w) })),
      },
      {
        title: 'what you reach for, and what you do',
        cards: [...OBJECTS, ...BED_AND_BATH, ...CHORES].map((w) => ({
          fr: w, sub: `${sub(w).replace(/^\[|\]$/g, '')} · ${glossOf(w)}`, en: glossOf(w),
        })),
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's13-sort',
    title: 'Put It In Its Room',
    frSub: 'Dans quelle pièce ?',
    layer: 'core',
    terms: ['roomByRoom'],
    say: 'Four rooms and one question about each. Nothing here is about the little word in front.',
    groups: BY_ROOM.slice(0, 3).map((r, i) => ({
      label: r.room,
      items: r.things.slice(0, 4).map((t) => ({ fr: t, itemId: id(t), respell: sub(t), en: glossOf(t) })),
      check: [
        {
          q: 'Three of those wash, cook or cool. Which one holds the plates you are about to use?',
          opts: [frOf(id('le frigo')), frOf(id('le four')), frOf(id("l'assiette")), frOf(id('le placard'))],
          correct: 3,
          why: 'le placard. It is the cupboard, and it is the one word here that turns up in more than one room: the same word covers a kitchen cupboard and a clothes cupboard, so you will meet it again in the bedroom.',
        },
        {
          q: 'You are describing your bedroom and want to say where your clothes go. Which one?',
          opts: [frOf(id("l'armoire")), frOf(id('le lit')), frOf(id('la lampe')), frOf(id('la couverture'))],
          correct: 0,
          why: 'l\'armoire. A freestanding wardrobe, and the ordinary word rather than a special case: built-in wardrobes are uncommon in French homes, so this is what most people actually have.',
        },
        {
          q: 'Which of these would you NOT expect to find in a salon?',
          opts: [frOf(id('le canapé')), frOf(id('le lavabo')), frOf(id('le tapis')), frOf(id('le fauteuil'))],
          correct: 1,
          why: 'le lavabo, the washbasin, which lives behind the bathroom door. The other three are the living room set, and grouping them that way is what makes them stick.',
        },
      ][i],
    })).concat([
      {
        label: 'the whole idea',
        items: [],
        check: {
          q: 'What is the point of learning these words room by room rather than as one list?',
          opts: [
            'The rooms are easier to spell',
            'Each room is a short set you can walk through in your head',
            'It puts the le words and the la words together',
            'It is the order a dictionary uses',
          ],
          correct: 1,
          why: 'Each room is a short set you can walk through. Sixty words about a house is a list nobody remembers; the same sixty sorted into four rooms is four sets, and you have stood in all four of them.',
        },
      },
    ]),
  },

  {
    type: 'cardDeck',
    id: 's14-machines',
    title: 'The One Time You Can Work It Out',
    frSub: 'Les appareils',
    hint: 'Four cards, and one rule that actually predicts.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['machinesAreMasculine'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-machines' },
    say: 'A1 has told you many times that you cannot work this out. Here is the one place you can.',
    cards: [
      {
        label: 'the rule',
        head: 'A machine named after its job is the le kind',
        fr: COMPOUND_APPLIANCES.join(' · '),
        sub: COMPOUND_APPLIANCES.map((w) => sub(w)).join(' · '),
        body: 'French names a machine by gluing what it does onto what it does it to. Washes-dishes, dries-laundry, micro-waves. Every one of those is the le kind, and you can apply that to a machine you have never met before.',
      },
      {
        label: 'why it works',
        head: 'The glue is what decides it',
        fr: `${frOf(id('le lave-vaisselle'))} · ${frOf(id('le sèche-linge'))}`,
        sub: `${sub('le lave-vaisselle')} · ${sub('le sèche-linge')}`,
        body: 'Nothing about dishes or laundry comes into it. The word is built as a unit and the unit is the le kind regardless of what is inside it, which is why this is a rule rather than a pattern you have noticed.',
      },
      {
        label: 'where it stops',
        head: 'And the two that are not built that way',
        fr: SIMPLE_APPLIANCES.join(' · '),
        sub: SIMPLE_APPLIANCES.map((w) => sub(w)).join(' · '),
        body: `${frOf(id('la machine à laver'))} is a machine for washing rather than a wash-thing, and ${frOf(id('la cuisinière'))} is not glued together either. Both are the la kind and both have to be stored, which is what makes the rule above a rule rather than a coincidence.`,
      },
      {
        label: 'the rest of the kitchen',
        head: `${frOf(id('le frigo'))} · ${frOf(id('le four'))}`,
        fr: frOf('fr.a1.maison.145'),
        sub: enOf('fr.a1.maison.145'),
        body: 'Neither of these is a compound, so neither is covered, and both happen to be the le kind anyway. Store them. The published sentence is the one everybody says at some point on a Sunday evening.',
      },
    ],
  },

  /* ── Act 4: saying where it is ─────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's15-already',
    title: 'You Already Have This One',
    frSub: 'Vous savez déjà le dire',
    hint: 'Four cards and none of them is new.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['youAlreadyHaveThis'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-26-where' },
    // NOT ONE CARD TEACHES A PREPOSITION. a1.21 owns them and this lesson is
    // forbidden from taking them back. Every card here shows a PUBLISHED
    // sentence in which a1.21's rule is already at work on a1.26's nouns, and
    // the teaching point is the NOUN.
    say: 'The last unit gave you all of this. What is new is that you now have something to put in the sentence.',
    cards: [
      {
        label: 'what changed',
        head: 'Last unit you could say where nothing was',
        fr: frOf('fr.a1.maison.152'),
        sub: enOf('fr.a1.maison.152'),
        body: 'You finished the last unit able to say where a thing is and with almost no things to say it about. This sentence is that unit\'s work and this unit\'s words, and nothing in it is being taught to you twice.',
      },
      {
        label: 'a room inside a room',
        head: 'Rooms sit next to rooms',
        fr: frOf('fr.a1.maison.124'),
        sub: enOf('fr.a1.maison.124'),
        body: 'Two of the rooms you have just learned, in a published sentence that nobody wrote to teach you anything. The only work left in a sentence like this is picking the right room word, which is what the first act was for.',
      },
      {
        label: 'the hallway is how people give directions',
        head: 'Down the hall, on the right',
        fr: frOf('fr.a1.maison.134'),
        sub: enOf('fr.a1.maison.134'),
        body: 'This is the sentence Claire said in the scene, more or less, and it is how anybody in a French home will tell you where something is. The hallway word is doing most of the work.',
      },
      {
        label: 'what is in a room',
        head: 'And there is a sofa in it',
        fr: `${frOf('fr.a1.maison.005')} ${frOf('fr.a1.maison.141')}`,
        sub: `${enOf('fr.a1.maison.005')} · ${enOf('fr.a1.maison.141')}`,
        body: 'The frame for saying something exists somewhere came from the pronouns unit and you have been using it for weather ever since. Here it is with furniture in it, which is the only thing that has changed.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's16-listen',
    title: 'The One Pair Your Ear Can Do',
    frSub: "À l'oreille",
    layer: 'core',
    terms: ['roomByRoom'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-26-ear' },
    // THE ONLY genuine ear work in this lesson. The room names are not
    // confusable with each other: salon, balcon and plafond share a nasal and
    // nothing else, and an ear question on them would test whether audio played.
    // le sol against le seau is a real vowel contrast with two corpus rows
    // behind it, both carrying voiceflash.
    say: 'One pair worth listening hard to, and one word whose spelling tells you nothing at all.',
    lines: [
      { fr: `${EAR_PAIR.a} · ${sub(EAR_PAIR.a).replace(/^\[|\]$/g, '')}`, en: 'the floor, an open o that stops' },
      { fr: `${EAR_PAIR.b} · ${sub(EAR_PAIR.b).replace(/^\[|\]$/g, '')}`, en: 'the bucket, a closed o that runs on' },
      { fr: `la poêle · ${sub('la table').replace(/^\[|\]$/g, '')}`, en: 'not a pair, just a warning: see the question below' },
    ],
    questions: [
      {
        q: 'le sol and le seau. What separates them?',
        opts: [
          'nothing, they are the same',
          'the first has a short open vowel and a consonant after it, the second does not',
          'the second is longer',
          'the little word in front',
        ],
        correct: 1,
        why: 'The first ends on a consonant and the second does not. Le sol stops on an l; le seau is an open syllable that just ends. The little word in front is the same on both, so it cannot help you here.',
      },
      {
        q: 'You hear a word that sounds like pwal. How is it spelled?',
        opts: ['pouale', 'poile', 'poêle', 'poile'],
        correct: 2,
        why: 'poêle, with a circumflex on the e. It is the frying pan, and the spelling predicts the sound so badly that this is the one word in the lesson worth meeting written down before you meet it spoken.',
      },
      {
        q: 'Is there any point listening carefully to tell salon from balcon?',
        opts: [
          'Yes, they are close',
          'Yes, at speed',
          'No. They share one sound at the end and nothing else',
          'Only for a native speaker',
        ],
        correct: 2,
        why: 'No. They both end in a nasal and are otherwise nothing alike, so telling them apart is not a skill worth building. The hard part of this lesson happens before you speak rather than while you listen.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's17-drill',
    title: 'Where Is It?',
    frSub: 'Où est-ce ?',
    layer: 'core',
    terms: ['youAlreadyHaveThis', 'roomByRoom'],
    // Every check here asks about the ROOM or the OBJECT. Not one asks the
    // learner to choose a preposition: that is a1.21's lesson and taking it back
    // here is what the test forbids.
    say: 'Three questions, and every one of them is about which room rather than about the small word.',
    groups: [
      {
        label: 'in the published corpus',
        items: [],
        check: {
          q: '« La cuisine est à côté du salon. » Which two rooms is this about?',
          opts: [
            'the bedroom and the bathroom',
            'the kitchen and the living room',
            'the hallway and the cellar',
            'the dining room and the kitchen',
          ],
          correct: 1,
          why: 'The kitchen and the living room. Both are rooms you learned in act 2, and the sentence itself was published long before this lesson existed, which is what makes it worth reading.',
        },
      },
      {
        label: 'the room from the scene',
        items: [],
        check: {
          q: '« La salle de bain est au bout du couloir. » Where is it?',
          opts: [
            'next to the kitchen',
            'upstairs',
            'at the end of the hallway',
            'behind the living room',
          ],
          correct: 2,
          why: 'At the end of the hallway, which is the sentence Claire more or less said in the scene. The hallway word is how people give directions inside a home, so it is worth more than its length suggests.',
        },
      },
      {
        label: 'and one about the thing rather than the room',
        items: [],
        check: {
          q: '« Le lit est près de la fenêtre. » What is being described?',
          opts: [
            'where the window is',
            'where the bed is',
            'how big the bedroom is',
            'what colour the curtains are',
          ],
          correct: 1,
          why: 'Where the bed is. The window is the reference point rather than the subject, which is the shape almost every sentence like this takes: the thing you are placing comes first.',
        },
      },
    ],
  },

  {
    type: 'reading',
    id: 's18-reading',
    title: 'The Listing',
    frSub: "L'annonce",
    layer: 'core',
    terms: ['whichRoom', 'twoRooms', 'roomByRoom'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'A flat listing, four lines of it, and one number that means something different from what it looks like.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'A flat is advertised online and the whole description is four short lines, every one of which needs a word from this lesson to read properly. '
      + `« ${frOf('fr.a1.maison.157')} » `
      + 'That is the first line and it is the one that catches English speakers out, because the number counts the rooms you live in and leaves out the kitchen and the bathroom entirely. '
      + `« ${frOf('fr.a1.maison.144')} » `
      + 'The second line spells out what those rooms actually are, and it counts the bedrooms separately from the room with the bath in it. '
      + `« ${frOf('fr.a1.maison.155')} » `
      + 'The third line tells you which floor that room is on, which matters more than it sounds because the toilet is very often not in the same place. '
      + `« ${frOf('fr.a1.maison.129')} »`,
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE.
    // No entry here is a prefix or substring of another.
    glossary: [
      { word: 'trois pièces', en: 'three rooms', note: 'The counting word. Three rooms in total, and the kitchen and bathroom are not among them.' },
      { word: 'deux chambres', en: 'two bedrooms', note: 'Bedrooms specifically. This is the word that only ever means a room with a bed in it.' },
      { word: 'salle de bains', en: 'the bathroom', note: 'The room with the bath. Written with an s here and without one on the card, and both are correct French.' },
      { word: 'au premier étage', en: 'on the first floor', note: 'Which floor the room is on. The toilet is often on a different one, which is why the listing bothers to say.' },
    ],
    questions: [
      { q: 'The listing says trois pièces and then two bedrooms and a bathroom. Is that a contradiction?', a: 'No. The three rooms are the rooms you live in, which here means two bedrooms and a living room. The kitchen and the bathroom are not counted in that number at all, which is why the second line has to spell them out separately. An English listing would have said two bedrooms and stopped.' },
      { q: 'Why would a listing bother saying which floor the bathroom is on?', a: 'Because in a lot of French homes the room with the bath and the room with the toilet are two different rooms, and they are not necessarily near each other. Knowing where one of them is does not tell you where the other one is, which is exactly the problem the opening scene turned on.' },
      { q: 'The last line counts windows and a door. What is it telling you?', a: 'How much light the room gets and how it is laid out. Two windows and one door is a description a French listing gives about a living room as a matter of course, and reading it needs the words for the shell of a room rather than for its furniture.' },
    ],
  },

  /* ── Act 5: production ─────────────────────────────────────────────────── */

  {
    type: 'flashcards',
    id: 's19-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Every room front names which kind of room, because room on its own is the question rather than the prompt.',
    cards: [
      ...THE_THREE_ROOM_WORDS.map((w) => ({ front: w.english, back: w.fr, say: w.fr })),
      ...ROOMS.filter((w) => w !== 'la chambre').map((w) => ({ front: glossOf(w), back: w, say: w })),
      ...DWELLINGS.map((w) => ({ front: glossOf(w), back: w, say: w })),
      ...FURNITURE.map((w) => ({ front: glossOf(w), back: w, say: w })),
      ...APPLIANCES.map((w) => ({ front: glossOf(w), back: w, say: w })),
      ...TABLEWARE.map((w) => ({ front: glossOf(w), back: w, say: w })),
      ...CHORES.map((w) => ({ front: glossOf(w), back: w, say: w })),
    ],
  },

  {
    type: 'dictation',
    id: 's20-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // EVERY TARGET IS IN WORD MODE and there is no alternative: the shortest
    // dictation row in this theme is 24 letters and DICTEE_LETTER_LIMIT is 16.
    // wordDecoys returns ["et","le"], so this section does NOT test which room
    // word the learner picks. See the file header. It is here because the rows
    // exist and put the room words in front of the learner once more.
    say: 'Five lines, each one about a room you have just learned.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's21-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // `practice.skill` is authored and read by no component: PracticeVFView
    // takes itemIds and nothing else. NOT ONE SENTENCE IS IN HERE, and that is
    // measured rather than chosen: no published SENTENCE in theme maison
    // carries voiceflash. Checked against POSTGRES by the batch.
    say: 'The rooms, the furniture, the machines and the three things you do. Every one of them scored.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's22-scenario',
    title: 'Showing Somebody Round',
    frSub: "La visite de l'appartement",
    layer: 'core',
    terms: ['whichRoom', 'twoRooms'],
    say: 'One exchange and you hold up your half. Every turn asks you for a room by name.',
    setting: 'A friend of a friend is looking at your flat because they might take it over. You are walking them through it.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. Apostrophes are STRAIGHT
    // throughout: the suite fails a conversation that mixes straight and
    // typographic apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Merci de me recevoir. Il fait combien de pièces, exactement ?',
        en: 'Thanks for having me. How many rooms is it, exactly?',
        user: 'Il fait trois pièces.',
        userEn: 'It is a three-room flat.',
        alts: [
          { fr: 'Trois pièces.', en: 'Three rooms.' },
          { fr: 'Il fait trois pièces, plus la cuisine.', en: 'Three rooms, plus the kitchen.' },
        ],
      },
      {
        ai: 'D accord. Et on dort où ?',
        en: 'Right. And where do you sleep?',
        user: 'Il y a deux chambres.',
        userEn: 'There are two bedrooms.',
        alts: [
          { fr: 'Deux chambres.', en: 'Two bedrooms.' },
          { fr: 'Il y a deux chambres, au fond.', en: 'There are two bedrooms, at the back.' },
        ],
      },
      {
        ai: 'Et pour se laver ?',
        en: 'And for washing?',
        user: 'La salle de bain est au bout du couloir.',
        userEn: 'The bathroom is at the end of the hallway.',
        alts: [
          { fr: 'Au bout du couloir.', en: 'At the end of the hallway.' },
          { fr: 'La salle de bain est juste là.', en: 'The bathroom is right there.' },
        ],
      },
      {
        ai: 'Ah, et les toilettes sont dedans ?',
        en: 'Ah, and is the toilet in there?',
        user: 'Non, les toilettes sont à côté.',
        userEn: 'No, the toilet is next door.',
        alts: [
          { fr: 'Non, à côté.', en: 'No, next door.' },
          { fr: 'Non, les toilettes sont séparées.', en: 'No, the toilet is separate.' },
        ],
      },
      {
        ai: 'Parfait. Et la cuisine, elle est équipée ?',
        en: 'Perfect. And is the kitchen fitted?',
        user: 'Oui, il y a un four et un lave-vaisselle.',
        userEn: 'Yes, there is an oven and a dishwasher.',
        alts: [
          { fr: 'Oui, avec un four.', en: 'Yes, with an oven.' },
          { fr: 'Oui, il y a un frigo et un four.', en: 'Yes, there is a fridge and an oven.' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's23-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['whichRoom', 'twoRooms', 'machinesAreMasculine'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'The room you sleep in.', back: `${CHAMBRE.fr} ${sub(CHAMBRE.fr)} A bedroom and nothing else.`, say: CHAMBRE.fr },
      { front: 'Rooms, when a listing is counting them.', back: `${PIECES.fr} ${sub(PIECES.fr)} Kitchen and bathroom not included.`, say: PIECES.fr },
      { front: 'The word that only turns up attached to something.', back: `${SALLE.fr} ${sub(SALLE.fr)} salle de bain, salle à manger.`, say: SALLE.fr },
      { front: 'You need the toilet in somebody\'s home.', back: `${BATH_PAIR.toilet} ${sub(BATH_PAIR.toilet)} Always plural.`, say: BATH_PAIR.toilet },
      { front: 'The room with the bath in it.', back: `${BATH_PAIR.bath} ${sub(BATH_PAIR.bath)} A different door from the last card.`, say: BATH_PAIR.bath },
      { front: 'The living room.', back: `${frOf(id('le salon'))} ${sub('le salon')}`, say: frOf(id('le salon')) },
      { front: 'The kitchen, and also cooking.', back: `${frOf(id('la cuisine'))} ${sub('la cuisine')} One word, two jobs.`, say: frOf(id('la cuisine')) },
      { front: 'The hallway, which is how people give you directions.', back: `${frOf(id('le couloir'))} ${sub('le couloir')}`, say: frOf(id('le couloir')) },
      { front: 'Where the clothes go, freestanding.', back: `${frOf(id("l'armoire"))} ${sub("l'armoire")}`, say: frOf(id("l'armoire")) },
      { front: 'The sofa, and the chair for one person.', back: `${frOf(id('le canapé'))} · ${frOf(id('le fauteuil'))} ${sub('le canapé')} ${sub('le fauteuil')}`, say: `${frOf(id('le canapé'))}, ${frOf(id('le fauteuil'))}` },
      { front: 'A machine named after its job. Which kind of word is it?', back: 'The le kind, every time. lave-vaisselle, sèche-linge, micro-ondes.', say: COMPOUND_APPLIANCES.join(', ') },
      { front: 'And the washing machine?', back: `${frOf(id('la machine à laver'))} ${sub('la machine à laver')} Not a compound, so the rule does not reach it.`, say: frOf(id('la machine à laver')) },
      { front: 'The floor, and the bucket.', back: `${EAR_PAIR.a} · ${EAR_PAIR.b} ${sub(EAR_PAIR.a)} ${sub(EAR_PAIR.b)}`, say: `${EAR_PAIR.a}, ${EAR_PAIR.b}` },
      { front: 'To do the dishes, to make the bed, to set the table.', back: CHORES.join(' · '), say: CHORES.join(', ') },
      { front: 'You are about to say the word room. What do you do?', back: REFRAME, say: `${CHAMBRE.fr}, ${PIECES.fr}` },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'progressCheck',
    id: 's24-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched somebody be handed a towel over one room name, and nothing said in that scene was hard. Since then you have taken the one English word that covers three French ones and learned which is which, named every room in a home, sorted the furniture and the machines into the rooms they live in rather than into a list, found the one place in this whole level where you can work out a word you have never met, and read a flat listing whose main number does not mean what it looks like. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's25-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // EVERY QUESTION ABOUT WHICH ROOM WORD CARRIES A SITUATION IN THE STEM.
    // "Which word means room?" has no answer; "You need the toilet in somebody's
    // flat, what do you ask for?" has exactly one. The batch, the merge and the
    // test all check that no stem is a bare translation prompt.
    //
    // NOT ONE CORRECT ANSWER IS A PREPOSITION. a1.21 owns sur, sous, dans,
    // devant, derrière, à côté de, entre and chez, and a quiz answer is the
    // strongest possible claim to own something. Asserted.
    //
    // THE `correct` INDEX IS THE POSITION THE LEARNER SEES. QuizRoundsView does
    // not shuffle (LessonPager.tsx:802-831, QuizRoundsView.tsx:204-224), so the
    // spread below is real. Measured across the 25 shipped A1 lessons the band
    // sits at 24/29/26/21 percent and a1.01 is on the 40 percent cap; this
    // lesson targets no slot above 30 and none below 15. See QUIZ_SLOT_SPREAD.
    rounds: [
      {
        id: 'r1-which-room',
        label: 'Which room word',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round.
        targets: ['err-wrong-room-word', 'err-salle-alone'],
        say: 'The decision everything else rests on.',
        questions: [
          {
            q: 'You are in somebody\'s living room and want to say this room is lovely. Which word?',
            format: 'mcq',
            opts: ['cette chambre', 'cette pièce', 'cette salle', 'cette maison'],
            correct: 1,
            why: `cette pièce. The room you are standing in is a pièce. Chambre would tell them you are in a bedroom and salle does not stand alone. ${REFRAME}`,
            ref: 's04-split',
          },
          {
            q: 'A listing says « quatre pièces ». What does the number count?',
            format: 'mcq',
            opts: [
              'Only the bedrooms, and nothing else at all',
              'Every room in the flat, kitchen and bathroom included',
              'How many floors the building has above ground',
              'Rooms you live in, not the kitchen or bathroom',
            ],
            correct: 3,
            why: 'Rooms you live in, with the kitchen and the bathroom left out. This is why a French flat sounds bigger in the advert than it turns out to be, and it is the number every listing leads with.',
            ref: 's18-reading',
          },
          {
            q: 'Write the French for the room you sleep in, with its little word.',
            format: 'typeIn',
            accept: ['la chambre', 'chambre'],
            answer: 'la chambre',
            why: 'la chambre. A bedroom and only a bedroom, which is the single most useful thing to know about it: it is not a general word for a room and using it as one puts a bed in the picture.',
            ref: 's03-three',
          },
          {
            q: 'Somebody says « J\'ai une grande chambre. » What have they got?',
            format: 'mcq',
            opts: [
              'A big bedroom',
              'A big living room',
              'A big flat',
              'A big house',
            ],
            correct: 0,
            why: 'A big bedroom. Chambre never widens out to mean a room in general, so there is no reading of this sentence in which they are talking about anything else.',
            ref: 's03-three',
          },
          {
            q: 'This sentence is wrong. Fix it: « Je suis dans la salle. »',
            format: 'errorSpot',
            accept: ['Je suis dans la pièce.', 'je suis dans la piece', 'Je suis dans la pièce'],
            answer: 'Je suis dans la pièce.',
            why: 'salle does not stand on its own for a room in a home. It arrives attached to what happens there, as in salle de bain or salle à manger, so the word for the room you are simply in is pièce.',
            ref: 's03-three',
          },
        ],
      },
      {
        id: 'r2-bath-toilet',
        label: 'The two rooms',
        targets: ['err-bath-for-toilet'],
        say: 'The one from the scene.',
        questions: [
          {
            q: 'You are at a dinner party and you need the toilet. What do you ask for?',
            format: 'mcq',
            opts: [
              'les toilettes',
              'la salle de bain',
              'la toilette',
              'la chambre de bain',
            ],
            correct: 0,
            why: 'les toilettes. The second option is the room with the bath in it, which is a different door and is how the opening scene ends with a towel. The last option is not French at all.',
            ref: 's05-bath',
          },
          {
            q: 'Why is asking for « la salle de bain » a problem when you need the toilet?',
            format: 'mcq',
            opts: [
              'It is much too formal for a friend\'s house',
              'In most French homes they are two rooms',
              'It is the wrong little word in front of it',
              'It only works in a hotel or a hospital',
            ],
            correct: 1,
            why: 'They are usually two rooms. You will be shown the one with the bath in it, because that is what you asked for and there is no reason for anybody to think you meant something else.',
            ref: 's01-scene',
          },
          {
            q: 'Write the French for the toilet, as a room, with its little word.',
            format: 'typeIn',
            accept: ['les toilettes', 'toilettes'],
            answer: 'les toilettes',
            why: 'les toilettes, plural every time. There is no singular of this one for the room, so the s is not optional and dropping it changes the word into something about getting dressed.',
            ref: 's05-bath',
          },
          {
            q: 'This is wrong. Fix it: « Où est la toilette ? »',
            format: 'errorSpot',
            accept: ['Où sont les toilettes ?', 'ou sont les toilettes', 'Où sont les toilettes'],
            answer: 'Où sont les toilettes ?',
            why: 'The room is always plural, so the verb moves with it. This is the only room in the lesson that behaves this way and it is the one you will need most urgently.',
            ref: 's05-bath',
          },
        ],
      },
      {
        id: 'r3-the-rooms',
        label: 'The rooms',
        targets: ['err-room-vocab'],
        say: 'Twelve doors.',
        questions: [
          {
            q: 'Which of these is the living room?',
            format: 'mcq',
            opts: ['la cuisine', 'le couloir', 'le salon', 'la cave'],
            correct: 2,
            why: 'le salon. The others are the kitchen, the hallway and the cellar, and all four are rooms you walked through in act two.',
            ref: 's06-rooms',
          },
          {
            q: 'Somebody tells you something is « au bout du couloir ». Which part of the home is that?',
            format: 'mcq',
            opts: ['the hallway', 'the garden', 'the attic', 'the cellar'],
            correct: 0,
            why: 'The hallway. It is worth more than its length suggests, because it is how anybody in a French home will tell you where a room is, including the one you need.',
            ref: 's06-rooms',
          },
          {
            q: 'Say the French for the kitchen.',
            format: 'speak',
            target: 'la cuisine',
            accept: ['la cuisine', 'cuisine'],
            answer: 'la cuisine',
            why: 'la cuisine. The same word means cooking as an activity, so « j\'aime la cuisine » is about food rather than about a room, and context does all the work of separating them.',
            ref: 's06-rooms',
          },
          {
            q: 'Write the French for the dining room.',
            format: 'typeIn',
            accept: ['la salle à manger', 'la salle a manger', 'salle à manger', 'salle a manger'],
            answer: 'la salle à manger',
            why: 'la salle à manger, the room for eating in. This is salle doing what it always does: arriving attached to what happens in the room rather than standing on its own.',
            ref: 's06-rooms',
          },
        ],
      },
      {
        id: 'r4-in-each-room',
        label: 'What is in each room',
        targets: ['err-object-room'],
        say: 'Sorted by where it lives.',
        questions: [
          {
            q: 'Which of these would you expect to find in a chambre?',
            format: 'mcq',
            opts: ['le lavabo', 'le four', "l'armoire", 'le canapé'],
            correct: 2,
            why: 'l\'armoire, the wardrobe. The others belong to the bathroom, the kitchen and the living room, and sorting them that way is what makes sixty words into four short sets.',
            ref: 's11-byroom',
          },
          {
            q: 'Write the French for the bed, with its little word.',
            format: 'typeIn',
            accept: ['le lit', 'lit'],
            answer: 'le lit',
            why: 'le lit. Short, the le kind, and the anchor of the bedroom set: almost everything else in that room is described by where it sits in relation to it.',
            ref: 's10-furniture',
          },
          {
            q: 'You hear « Les rideaux sont bleus dans le salon. » What is blue?',
            format: 'listenChoose',
            opts: ['the walls', 'the curtains', 'the sofa', 'the rug'],
            correct: 1,
            why: 'The curtains. Note that they are plural and that the colour has agreed with them, which is the colours lesson still doing its work two units later without being mentioned.',
            ref: 's10-furniture',
          },
          {
            q: 'Write the French for the armchair, the one that seats a single person.',
            format: 'typeIn',
            accept: ['le fauteuil', 'fauteuil'],
            answer: 'le fauteuil',
            why: 'le fauteuil seats one and le canapé seats several, which is the same split English makes between an armchair and a sofa. La chaise is a plain chair with no arms at all.',
            ref: 's10-furniture',
          },
        ],
      },
      {
        id: 'r5-machines',
        label: 'The machines',
        targets: ['err-compound-gender'],
        say: 'The one rule in this lesson that predicts.',
        questions: [
          {
            q: 'You meet a machine called « le lave-linge » for the first time. Which little word does it take?',
            format: 'mcq',
            opts: ['le', 'la', "l'", 'les'],
            correct: 0,
            why: 'le. It is a verb glued onto a noun, washes-laundry, and every machine named that way is the le kind. This is the one word in the whole lesson you can get right without having met it.',
            ref: 's14-machines',
          },
          {
            q: 'Why is it « la machine à laver » rather than le?',
            format: 'mcq',
            opts: [
              'It is bigger than all of the other ones',
              'It is not built as a verb glued to a noun',
              'It is an older word than the others are',
              'It is used in a different room of the house',
            ],
            correct: 1,
            why: 'It is not a compound. It is a machine for washing rather than a wash-thing, so the rule never reaches it and the word has to be stored like every other one.',
            ref: 's14-machines',
          },
          {
            q: 'Write the French for the dishwasher, with its little word.',
            format: 'typeIn',
            accept: ['le lave-vaisselle', 'lave-vaisselle'],
            answer: 'le lave-vaisselle',
            why: 'le lave-vaisselle. Washes-dishes, glued together, so the le kind by the rule rather than by memory.',
            ref: 's14-machines',
          },
          {
            q: 'You hear a kitchen machine named. Which one dries laundry?',
            format: 'listenChoose',
            opts: ['le lave-vaisselle', 'le micro-ondes', 'le sèche-linge', 'la cuisinière'],
            correct: 2,
            why: 'le sèche-linge, dries-laundry. All three of the first options are compounds and all three are the le kind; only the last one is not built that way, and it is the la kind.',
            ref: 's14-machines',
          },
        ],
      },
      {
        id: 'r6-where-it-is',
        label: 'Saying where it is',
        targets: ['err-where-with-rooms'],
        say: 'Last unit\'s rule on this unit\'s words.',
        questions: [
          {
            q: '« La cuisine est à côté du salon. » Which two rooms?',
            format: 'mcq',
            opts: [
              'the bathroom and the bedroom',
              'the hallway and the cellar',
              'the dining room and the garden',
              'the kitchen and the living room',
            ],
            correct: 3,
            why: 'The kitchen and the living room. The sentence was published long before this lesson and needed nothing from it except the two room names, which is what act four is for.',
            ref: 's17-drill',
          },
          {
            q: 'Say this out loud: there is a sofa in the living room.',
            format: 'speak',
            target: 'Il y a un canapé dans le salon.',
            accept: ['Il y a un canapé dans le salon.', 'il y a un canape dans le salon'],
            answer: 'Il y a un canapé dans le salon.',
            why: 'The frame for saying something exists came from the pronouns unit and you have been using it for weather ever since. All that has changed is that there is furniture in it now.',
            ref: 's15-already',
          },
          {
            q: 'Fix this: « Le lit est près de la fenêtre dans la salle. »',
            format: 'errorSpot',
            accept: ['Le lit est près de la fenêtre dans la chambre.', 'le lit est pres de la fenetre dans la chambre'],
            answer: 'Le lit est près de la fenêtre dans la chambre.',
            why: 'A bed is in a chambre. Salle does not stand alone, and the rest of the sentence was already right: the words for where a thing is came from the last unit and have not changed.',
            ref: 's15-already',
          },
          {
            q: 'What is genuinely new in this lesson about saying where something is?',
            format: 'mcq',
            opts: [
              'The words for where a thing is have changed',
              'How the little words join up to the room name',
              'The order the words go in inside the sentence',
              'Nothing, except what there is to say it about',
            ],
            correct: 3,
            why: 'Nothing about the saying, and everything about what there is to say. The last unit gave you the whole system and almost nothing to point it at; this one filled the sentence in.',
            ref: 's15-already',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's26-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can pick the right word for a room before you speak rather than translating and hoping, name every room in a home including the two English keeps confusing, name what is in each of them because you learned them room by room rather than as a list, and say where any of it is using a system you already had. The habit underneath all of that is worth keeping past this lesson: when one English word covers several French ones, the fix is never to pick a favourite and use it everywhere. It is to stop translating and reach for the thing itself. You will meet the same shape again with food, with the body and with the words for time, and each time the answer is the same one.',
    points: [
      `${REFRAME} Chambre is a bedroom, pièce is a room you count, salle arrives attached to what happens in it.`,
      'The bath and the toilet are two rooms with two names, and the toilet is always plural.',
      'A machine named after its job is the le kind, and that stops the moment the name is not glued together.',
      'Saying where a thing is came from the last unit and has not changed. What changed is that you have things to say it about.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the array
 * directly above, and a display string is validated against nothing, so the
 * first mission added would have left the card confidently wrong with the whole
 * suite still green. It throws rather than degrades.                          */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's24-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.26.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Rooms learned', v: String(ROOMS.length) },
    { k: 'Words banked', v: String(ITEM_IDS.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit
 * that "the weight belongs on the room distinction and the room-by-room
 * organisation, not on the object inventory", and the count bears it out: TWO
 * sections list words (s07-bank, s12-things) while NINE make the learner decide
 * (s04-split, s05-bath, s08-check, s11-byroom, s13-sort, s16-listen, s17-drill,
 * plus the drills behind the quiz).
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Which room is it',
    sections: ['s01-scene', 's02-goals', 's03-three', 's04-split'],
    milestone: 'You have watched somebody be handed a towel over one room name.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The rooms',
    sections: ['s05-bath', 's06-rooms', 's07-bank', 's08-check', 's09-errors'],
    milestone: 'Every room in a home, and the two doors English keeps putting behind one word.',
    estScreens: 30,
    restPoints: ['s06-rooms/halfway', 's09-errors/halfway'],
  },
  {
    id: 'act3',
    title: 'What is in each room',
    sections: ['s10-furniture', 's11-byroom', 's12-things', 's13-sort', 's14-machines'],
    milestone: 'The furniture and the machines, sorted by the room they live in.',
    estScreens: 30,
    restPoints: ['s10-furniture/halfway', 's13-sort/halfway'],
  },
  {
    id: 'act4',
    title: 'Saying where it is',
    sections: ['s15-already', 's16-listen', 's17-drill', 's18-reading'],
    milestone: 'The last unit\'s rule with this unit\'s words in it, and a listing you can read.',
    estScreens: 22,
    restPoints: ['s15-already/halfway'],
  },
  {
    id: 'act5',
    title: 'Use it',
    sections: ['s19-flash', 's20-dictation', 's21-speak', 's22-scenario', 's23-review'],
    milestone: 'Said out loud, written down, and used in a conversation with somebody else in it.',
    estScreens: 64,
    restPoints: ['s19-flash/halfway', 's21-speak/halfway', 's23-review/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s24-progress', 's25-quiz', 's26-roundup'],
    milestone: 'Lesson complete. Everything here carries straight into talking about anybody\'s home.',
    estScreens: 34,
    restPoints: ['s25-quiz/after-r2', 's25-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 5 and 6 release nothing new; they apply and test what acts 1
 * to 4 handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one word. The first tranche
 * to name an id keeps it, which is also the pedagogically right answer: an item
 * belongs to the act that taught it.                                          */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const i of ids) {
    if (released.has(i)) continue;
    released.add(i);
    out.push(i);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1: the two room words that have corpus rows, and the sentence s03-three
  // shows the counting one working. `la salle` has no row and is never released.
  once([...THREE_IDS, 'fr.a1.maison.157']),
  // Act 2: the rest of the rooms, the two from the scene, the places you live
  // in, and the second pièces sentence s06-rooms puts on a card.
  once([...BATH_IDS, ...ROOM_IDS, ...DWELLING_IDS, 'fr.a1.maison.158']),
  // Act 3: everything inside the rooms. s10-furniture, s11-byroom, s12-things
  // and s14-machines put every one of these on a screen.
  once([
    ...FURNITURE_IDS, ...STRUCTURE_IDS, ...BED_BATH_IDS,
    ...APPLIANCE_IDS, ...TABLEWARE_IDS, ...OBJECT_IDS, ...CHORE_IDS,
  ]),
  // Act 4: the published sentences act 4 is built on, every one of which is
  // shown on a card, in the drill or in the reading passage.
  once([...WHERE_WILD]),
  // Act 5: nothing new. It uses what acts 1 to 4 handed over.
  [],
  // Act 6: nothing new.
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in the
 *  test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((x) => !released.has(x));
  if (never.length) {
    throw new Error(`a1.26.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((x) => !taught.has(x));
  if (stray.length) {
    throw new Error(`a1.26.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third.
 *
 * `err-wrong-room-word` and `err-salle-alone` look like one error and are two.
 * The first is reaching for chambre when you mean any room, which is a
 * translation habit. The second is using salle as though it were a free-standing
 * noun, which is a fact about that one word. A learner who has fixed the first
 * still makes the second.                                                     */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-room-word',
    description: 'Reaches for chambre for any room, because a bilingual list gave it as the translation of room. Produces a perfectly grammatical sentence about a bedroom the speaker is not in.',
    detectOn: ['s03-three', 's04-split', 's08-check', 's25-quiz/r1-which-room'],
    drill: 'drill-room-word',
    retest: 'retest-room-word',
  },
  {
    id: 'err-salle-alone',
    description: 'Uses salle as a free-standing word for a room, on the strength of having met it in salle de bain. Sounds like the start of a sentence that was not finished.',
    detectOn: ['s03-three', 's09-errors', 's25-quiz/r1-which-room'],
    drill: 'drill-salle',
    retest: 'retest-salle',
  },
  {
    id: 'err-bath-for-toilet',
    description: 'Asks for la salle de bain when they need the toilet, or says la toilette in the singular. The error the opening scene is built on, and the most expensive one here because it is understood perfectly and sends the speaker to the wrong door.',
    detectOn: ['s01-scene', 's05-bath', 's08-check', 's09-errors', 's25-quiz/r2-bath-toilet'],
    drill: 'drill-bath',
    retest: 'retest-bath',
  },
  {
    id: 'err-room-vocab',
    description: 'Has the three-way distinction and does not yet have the room names, so the right word is chosen and the wrong room is named. Costs fluency rather than meaning.',
    detectOn: ['s06-rooms', 's07-bank', 's08-check', 's25-quiz/r3-the-rooms'],
    drill: 'drill-rooms',
    retest: 'retest-rooms',
  },
  {
    id: 'err-object-room',
    description: 'Learns the furniture as one undifferentiated list and cannot retrieve it under time pressure, because there is no room to walk through in their head.',
    detectOn: ['s11-byroom', 's13-sort', 's25-quiz/r4-in-each-room'],
    drill: 'drill-by-room',
    retest: 'retest-by-room',
  },
  {
    id: 'err-compound-gender',
    description: 'Either misses that a machine named after its job is predictable and stores every appliance separately, or over-applies it and makes la machine à laver masculine.',
    detectOn: ['s14-machines', 's25-quiz/r5-machines'],
    drill: 'drill-machines',
    retest: 'retest-machines',
  },
  {
    id: 'err-where-with-rooms',
    description: 'Believes the last unit\'s system has changed because the nouns are new, and hesitates over a sentence they could already build. Costs confidence rather than accuracy.',
    detectOn: ['s15-already', 's17-drill', 's25-quiz/r6-where-it-is'],
    drill: 'drill-where',
    retest: 'retest-where',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-room-word',
    title: 'Which room word?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    buckets: ['a room with a bed in it', 'a room you count'],
    items: [id('la chambre'), id('les pièces'), id('le salon'), id('la cuisine')],
    coach: 'Only one of these is a bedroom. The others are rooms you would count in a listing, and the word for those is pièces. Sort by the room you are picturing, not by the English word you started from.',
  },
  {
    id: 'retest-room-word',
    title: 'One more time',
    format: 'mcq',
    q: 'You are in a friend\'s living room. What word for this room?',
    opts: ['chambre', 'pièce', 'salle'],
    correct: 1,
    why: 'pièce. The room you are standing in is a pièce unless it has a bed in it, and salle would need something attached to it before it meant anything.',
  },
  {
    id: 'drill-salle',
    title: 'Salle never comes alone',
    format: 'flashcard',
    pairs: [
      ['the bathroom', BATH_PAIR.bath],
      ['the dining room', 'la salle à manger'],
      ['a room, just a room', PIECES.fr],
    ] as [string, string][],
    coach: 'Two of these three attach salle to what happens in the room. The third does not use salle at all, because there is nothing to attach it to.',
  },
  {
    id: 'retest-salle',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is not something anybody says?',
    opts: ['la salle de bain', 'la salle à manger', 'la salle'],
    correct: 2,
    why: 'la salle on its own. In a home it always arrives attached to what happens in the room, and a bare salle sounds like an unfinished sentence.',
  },
  {
    id: 'drill-bath',
    title: 'Which door?',
    format: 'sort',
    buckets: ['the bath is in here', 'the toilet is in here'],
    items: [id(BATH_PAIR.bath), id(BATH_PAIR.toilet), id('la douche'), id('la baignoire')],
    coach: 'The shower and the bath are behind one door. The toilet is behind the other, and its name is plural. Getting this wrong is understood perfectly and gets you shown the wrong room.',
  },
  {
    id: 'retest-bath',
    title: 'One more time',
    format: 'mcq',
    q: 'You need the toilet. Which do you ask for?',
    opts: ['la salle de bain', 'les toilettes', 'la toilette'],
    correct: 1,
    why: 'les toilettes, plural. The first is the room with the bath in it and the third is not a room at all.',
  },
  {
    id: 'drill-rooms',
    title: 'Name the room',
    format: 'flashcard',
    pairs: ROOMS.map((w) => [glossOf(w), w] as [string, string]),
    coach: 'Twelve rooms with their little words attached. If a room comes back without its little word you have stored half of it, which the gender lesson warned you about a long time ago.',
  },
  {
    id: 'retest-rooms',
    title: 'One more time',
    format: 'mcq',
    q: 'Which one is the hallway?',
    opts: ['le grenier', 'la cave', 'le couloir', 'le balcon'],
    correct: 2,
    why: 'le couloir. The others are the attic, the cellar and the balcony, and the hallway is the one you will hear most because it is how people give directions indoors.',
  },
  {
    id: 'drill-by-room',
    title: 'Put it in its room',
    format: 'sort',
    buckets: ['la cuisine', 'la chambre', 'le salon'],
    items: [
      id('le frigo'), id('le four'),
      id('le lit'), id("l'armoire"),
      id('le canapé'), id('le fauteuil'),
    ],
    coach: 'Two per room. Learning them in the room they live in gives you three short sets you can walk through, instead of one long list you have to search.',
  },
  {
    id: 'retest-by-room',
    title: 'One more time',
    format: 'mcq',
    q: 'Where does l\'armoire live?',
    opts: ['la cuisine', 'la chambre', 'la salle de bain'],
    correct: 1,
    why: 'la chambre. It is a freestanding wardrobe and it is where the clothes go, which in a French home is usually the ordinary arrangement rather than a built-in cupboard.',
  },
  {
    id: 'drill-machines',
    title: 'Glued together, or not?',
    format: 'sort',
    buckets: ['named after its job, so the le kind', 'not built that way, so stored'],
    items: [
      id('le lave-vaisselle'), id('le sèche-linge'), id('le micro-ondes'),
      id('la machine à laver'), id('la cuisinière'),
    ],
    coach: 'Three of these five are a verb glued onto a noun and all three are the le kind. The other two are not built that way, and both happen to be the la kind. Sort by how the word is built, not by what the machine does.',
  },
  {
    id: 'retest-machines',
    title: 'One more time',
    format: 'mcq',
    q: 'A machine called le lave-linge. Why is it le?',
    opts: ['because it is big', 'because it is a verb glued onto a noun', 'because it is in the kitchen'],
    correct: 1,
    why: 'Because of how the word is built. Washes-laundry, glued into one unit, and every machine named that way is the le kind whatever it does.',
  },
  {
    id: 'drill-where',
    title: 'Last unit, this unit\'s words',
    format: 'flashcard',
    pairs: [
      ['The bed is near the window.', frOf('fr.a1.maison.152')],
      ['The kitchen is next to the living room.', frOf('fr.a1.maison.124')],
      ['There is a sofa in the living room.', frOf('fr.a1.maison.141')],
      ['The bathroom is at the end of the hallway.', frOf('fr.a1.maison.134')],
    ] as [string, string][],
    coach: 'Nothing in any of these is new except the nouns. The words for where a thing is came from the last unit and have not changed, so the only decision left is which room you mean.',
  },
  {
    id: 'retest-where',
    title: 'One more time',
    format: 'mcq',
    q: 'What is new in this lesson about saying where something is?',
    opts: ['the small words', 'nothing, only what there is to say it about', 'the word order'],
    correct: 1,
    why: 'Only the nouns. The last unit gave you the whole system with almost nothing to point it at, and this one filled the sentence in.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * NO cheatSheet SECTION. A `cheatSheet` nested inside a reference sheet renders
 * its title and nothing else, which a1.13 already ships as a defect. Both sheets
 * use `table` and `teach`, which do render.
 *
 * SHORT CELLS ONLY. SheetTable sizes a column at max(110, 320 / cols), so a full
 * sentence in a three-column table lands in a 110-wide cell and can only be read
 * by dragging sideways. The reasons live in the prose below each table.        */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.26.rooms',
    title: 'Every room, and the three words for room',
    layer: 'deep',
    contains: ['chambre, pièce and salle', 'The twelve rooms', 'The bath and the toilet'],
    sections: [
      {
        type: 'table',
        id: 'sheet-rooms-three',
        title: 'The word English does not have',
        layer: 'deep',
        cols: ['English', 'French', 'when'],
        rows: THE_THREE_ROOM_WORDS.map((w) => [w.english.replace(/^"|"$/g, ''), w.fr, w.fr === CHAMBRE.fr ? 'a bed in it' : w.fr === PIECES.fr ? 'counting them' : 'attached only']),
      },
      {
        type: 'table',
        id: 'sheet-rooms-list',
        title: 'The rooms',
        layer: 'deep',
        cols: ['the room', 'what it is'],
        rows: ROOMS.map((w) => [w, glossOf(w)]),
      },
      {
        type: 'teach',
        id: 'sheet-rooms-why',
        title: 'Why this is three words and not one',
        layer: 'deep',
        body:
          'English uses room for a bedroom, for a room you are counting, for a room in a museum and for a room '
          + 'named after what happens in it, and lets the sentence around it work out which was meant. French '
          + 'decides first. A chambre has a bed in it and never means anything else, so calling a living room '
          + 'a chambre does not read as an approximation, it reads as a different room. A pièce is a room as a '
          + 'unit, which is why every flat listing is written in them: trois pièces counts the rooms you live '
          + 'in and leaves out the kitchen and the bathroom, so it is smaller than an English ear expects. A '
          + 'salle is named by what happens in it and almost never stands alone in a home, arriving instead as '
          + 'salle de bain or salle à manger. The practical version of all of this is not three definitions to '
          + 'memorise. It is to stop translating: picture the room you actually mean, and the French word for '
          + 'that room is the one you want. The other thing worth carrying out of this lesson is that the room '
          + 'with the bath in it and the room with the toilet in it are two different rooms in most French '
          + 'homes, with two different names, and that the second of them is always plural. There is no '
          + 'singular of it for a room at all.',
      },
    ],
  },
  {
    id: 'sheet.a1.26.byroom',
    title: 'What is in each room',
    layer: 'deep',
    contains: ['The furniture by room', 'The machines', 'The one predictable rule'],
    sections: [
      {
        type: 'table',
        id: 'sheet-byroom-table',
        title: 'Room by room',
        layer: 'deep',
        cols: ['the room', 'what is in it'],
        rows: BY_ROOM.map((r) => [r.room, r.things.slice(0, 3).join(', ')]),
      },
      {
        type: 'table',
        id: 'sheet-byroom-machines',
        title: 'The machines, and how they are built',
        layer: 'deep',
        cols: ['the machine', 'built how'],
        rows: [
          ...COMPOUND_APPLIANCES.map((w) => [w, 'verb plus noun, so le']),
          ...SIMPLE_APPLIANCES.map((w) => [w, 'not a compound, so stored']),
        ],
      },
      {
        type: 'teach',
        id: 'sheet-byroom-why',
        title: 'Learn them in the room, and the one rule that predicts',
        layer: 'deep',
        body:
          'Sixty words about a house is a list and nobody remembers a list. The same sixty sorted into the '
          + 'rooms they belong to is four short sets, each of which you can walk through in your head because '
          + 'you have stood in the room. The fridge, the oven and the plates belong together because they are '
          + 'in one place, not because they start with the same letter, and this is also the order in which '
          + 'you will actually meet them: nobody hands you a whole house at once, they show you one room at a '
          + 'time. The second thing on this sheet is the only place in the whole of A1 where you can work out '
          + 'a word you have never met. French names a machine by gluing what it does onto what it does it to, '
          + 'and the result is always the le kind: le lave-vaisselle washes dishes, le sèche-linge dries '
          + 'laundry, le micro-ondes does the waves, and a lave-linge you have never seen before is the le '
          + 'kind before anybody tells you. The rule stops the moment the name is not glued together. La '
          + 'machine à laver is a machine for washing rather than a wash-thing, and la cuisinière is not built '
          + 'that way either, so both are the la kind and both have to be stored like every other noun in this '
          + 'level. That boundary is what makes it a rule rather than a coincidence you have noticed.',
      },
    ],
  },
];

export const MAISON_LESSON: Lesson = {
  id: 'a1.26.l1',
  unitId: 'a1.26',
  // The lesson's index WITHIN its unit, not its place in the track.
  seq: 1,
  title: 'La maison',
  level: 'a1',
  // TWENTY-NINE, from unit.seq. missions.ts derives the eyebrow at render time
  // as `${level} · LEÇON ${unit.seq}`, and a1.26 sits at seq 29. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 29',
  intro:
    'English says room and lets the sentence sort out which one. French makes you choose first, and there are three words to choose between. This is how to pick the right one, name every room in a home, and name what is in each of them.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  version: 1,

  grammarAssumed: [
    'Noun gender, and that the little word in front is the choice gender makes, introduced in a1.03',
    'le, la, l\' and les, and the elision of le and la in front of a vowel, introduced in a1.04',
    'Impersonal il, in il y a, introduced in a1.05',
    'The present of avoir, introduced in a1.07',
    'un, une and des, introduced in a1.11',
    'Adjective agreement and adjective placement, introduced in a1.13, a1.14 and a1.16',
    'The possessive adjectives, introduced in a1.17',
    'The prepositions of place sur, sous, dans, devant, derrière and à côté de, and the contraction of à and de with the definite article, introduced in a1.21',
  ],
  grammarIntroduced: [
    'The lexical split of English "room" into chambre, pièce and salle, and the semantic conditions on each',
    'chambre as restricted to a sleeping room, against English "room" as unrestricted',
    'pièce as the countable unit of a dwelling, and the French convention of counting rooms excluding kitchen and bathroom',
    'salle as bound in compounds and not free-standing in a domestic register',
    'les toilettes as a plurale tantum in its room sense, against the singular la toilette which is not a room',
    'The gender of verb-plus-noun appliance compounds as invariably masculine, and the boundary at non-compound names',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'The House',
    subFr: 'La maison',
    introFr: 'Un seul mot anglais, trois mots français, et le choix se fait avant de parler.',
    minutes: 28,
    difficulty: 2,
    glyph: '🏠',
    screens: 206,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: MAISON_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-26-maison.test.ts, because a constraint on
    // how something is recorded becomes invisible the moment the clip is
    // delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-26-three',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. « la chambre », « les pièces » and « la salle » ARE '
          + 'ONE TAKE, one voice, one pace, read straight through with no gap and no reset. The claim the whole '
          + 'lesson rests on is that these are three different rooms rather than three ways of saying one word, '
          + 'and three separate recordings are three performances: a reader who records them in separate '
          + 'sessions will give one of them more weight and the learner will hear that weight as a difference '
          + 'in importance rather than in meaning. '
          + 'KEEP THE NASAL IN « chambre » CLOSED. It is /ʃɑ̃bʁ/ with a nasal vowel and NO n sound behind it: '
          + 'the app respells it lah SHAHⁿBR deliberately, and a reader who lets an n out of it teaches a '
          + 'sound that is not in the word. '
          + 'Then, in the same take, the two whole sentences: « Notre appartement a trois pièces. » and '
          + '« Il y a cinq pièces dans la maison. »',
        clipIds: [
          'la chambre', 'les pièces', 'la salle', 'chambre-pieces-salle-triple',
          'Notre appartement a trois pièces.', 'Il y a cinq pièces dans la maison.',
        ],
      },
      {
        id: 'rec-a1-26-bath',
        desc:
          '« la salle de bain » AND « les toilettes » ADJACENT IN ONE TAKE, one voice. This is the pair the '
          + 'opening scene turns on and the learner has to hear them as two rooms rather than as two registers '
          + 'of one. Read both plainly and at the same pace: any hint that the second is more colloquial or '
          + 'more delicate than the first invents a difference the language does not have. Both are the '
          + 'ordinary words. '
          + 'GIVE « les toilettes » ITS PLURAL FULLY. The s is silent but the les is not, and a reader who '
          + 'lets it slide toward « la toilette » is recording the error the lesson is about. '
          + 'Then, in the same take: « Où est la salle de bain ? » and « Où sont les toilettes ? », so the '
          + 'learner hears the verb move with the plural.',
        clipIds: [
          'la salle de bain', 'les toilettes', 'bain-toilettes-pair',
          'Où est la salle de bain ?', 'Où sont les toilettes ?',
        ],
      },
      {
        id: 'rec-a1-26-ear',
        desc:
          '« le sol » AND « le seau » ADJACENT, ONE TAKE, AND THIS IS THE ONLY GENUINE EAR CONTRAST IN THE '
          + 'LESSON. The two differ in the vowel and in whether the syllable closes, and a gap of even a few '
          + 'seconds between the two recordings lets the reader reset their vowel. Read them back to back, at '
          + 'the same pitch, with the same little word in front of both. '
          + 'ALSO IN THIS TAKE: « la poêle », which is /pwal/. THIS IS NOT A TYPO AND MUST NOT BE '
          + '"CORRECTED" LATER. The oê spelling predicts the sound so badly that the whole reason the word is '
          + 'in this lesson is that a learner has to be told. Anybody reading it as a spelling pronunciation '
          + 'is recording the trap rather than the word. '
          + 'NEVER RECORD « salle » IN ISOLATION. There is no clip anywhere in this lesson of salle on its '
          + 'own, deliberately: it does not occur alone in a home and a clip of it teaches a word the learner '
          + 'will never need by itself. If a request for one arrives, it is a mistake in the request.',
        clipIds: ['le sol', 'le seau', 'sol-seau-pair', 'la poêle'],
      },
      {
        id: 'rec-a1-26-rooms',
        desc:
          'THE TWELVE ROOMS, EACH READ WITH ITS LITTLE WORD ATTACHED AND NEVER WITHOUT IT. Read as ONE LIST '
          + 'in one take at an even pace, because the learner is being asked to store the little word as part '
          + 'of the room and a pause between the two teaches the opposite. '
          + 'EVERY NASAL CLOSED, and there are five of them in this list: la maison, le salon, le jardin, le '
          + 'balcon and la salle à manger. All five are respelled with a superscript in the app and all five '
          + 'were shipped wrong until this build. A reader who lets an n out of any of them undoes the repair. '
          + 'Then the four published sentences: « Il y a un canapé dans le salon. », « Nous avons deux '
          + 'chambres et une salle de bains. », « La salle de bain est au bout du couloir. », « Le salon a '
          + 'deux fenêtres et une porte. »',
        clipIds: [
          ...ROOMS,
          'les-douze-pieces',
          'Il y a un canapé dans le salon.',
          'Nous avons deux chambres et une salle de bains.',
          'La salle de bain est au bout du couloir.',
          'Le salon a deux fenêtres et une porte.',
        ],
      },
      {
        id: 'rec-a1-26-furniture',
        desc:
          'The furniture, read GROUPED BY ROOM rather than as one alphabetical run, with a clear beat between '
          + 'groups. The whole organising idea of act three is that these come in room-sized sets, and a flat '
          + 'list of eleven read at one pace destroys it. Living room, then bedroom, then the soft things, '
          + 'then the things that hold things. '
          + 'Then the three published sentences in the same take: « Il y a un grand lit dans la chambre. », '
          + '« Le chat dort sur le grand lit blanc. », « Les rideaux sont bleus dans le salon. »',
        clipIds: [
          ...FURNITURE,
          'salon-set', 'chambre-set',
          'Il y a un grand lit dans la chambre.',
          'Le chat dort sur le grand lit blanc.',
          'Les rideaux sont bleus dans le salon.',
        ],
      },
      {
        id: 'rec-a1-26-machines',
        desc:
          'THE THREE COMPOUNDS FIRST, TOGETHER, AS A GROUP: « le lave-vaisselle », « le sèche-linge », « le '
          + 'micro-ondes ». Then a beat. Then the two that are not compounds: « la machine à laver », « la '
          + 'cuisinière ». The grouping IS the teaching, and reading all five as one list makes the rule '
          + 'invisible. '
          + 'EACH COMPOUND READ AS ONE WORD, not as two words with a hyphen between them. lave-vaisselle is '
          + 'one unit and the whole point is that the unit is what carries the gender; a reader who pauses at '
          + 'the hyphen is arguing with the lesson. '
          + '« le sèche-linge » ENDS IN A NASAL, respelled luh sehsh-LAⁿZH, and it was one of the rows this '
          + 'build repaired. Keep it closed. '
          + 'Then « Le frigo est vide. »',
        clipIds: [
          ...COMPOUND_APPLIANCES, 'compounds-group',
          ...SIMPLE_APPLIANCES, 'not-compounds-group',
          'le frigo', 'le four', 'Le frigo est vide.',
        ],
      },
      {
        id: 'rec-a1-26-where',
        desc:
          'The four published sentences act four is built on, read PLAINLY and at ordinary conversational '
          + 'pace: « Le lit est près de la fenêtre. », « La cuisine est à côté du salon. », « La salle de bain '
          + 'est au bout du couloir. », « Il y a une table dans le salon. » '
          + 'DO NOT STRESS THE SMALL WORDS. près de, à côté du, au bout du and dans belong to the previous '
          + 'unit and are deliberately not taught here, so a reader who leans on them turns act four into a '
          + 'preposition lesson, which is exactly what this lesson is forbidden from being. The NOUNS carry '
          + 'the weight in every one of these.',
        clipIds: [
          'Le lit est près de la fenêtre.',
          'La cuisine est à côté du salon.',
          'La salle de bain est au bout du couloir.',
          'Il y a une table dans le salon.',
        ],
      },
      {
        id: 'rec-a1-26-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read '
          + 'EVERY wrong version PLAINLY and at ordinary pace rather than comically, because a learner saying '
          + 'them does not hesitate either. « Où est la salle de bain ? » is a perfectly ordinary French '
          + 'sentence and sounds like one, which is the entire point: nothing about it signals an error, which '
          + 'is why it survives and why it costs. « la toilette » in the singular should be read with no '
          + 'special emphasis on the missing s, because the learner cannot hear it and pretending otherwise '
          + 'teaches a signal that is not there.',
        clipIds: [
          'trap-salle-de-bain', 'trap-chambre-for-room', 'trap-salle-alone',
          'trap-la-toilette', 'trap-trois-pieces',
        ],
      },
      {
        id: 'rec-a1-26-scene',
        desc:
          'The opening scene, French bubbles only. Claire is hosting a dinner, in her thirties, warm and '
          + 'slightly busy. HER OFFER OF A TOWEL MUST BE COMPLETELY UNREMARKABLE AND GENUINELY HELPFUL. She '
          + 'has not noticed an error and she is not making a point: she heard a request for the room with the '
          + 'bath in it and answered it, and offering a towel is simply what you do for somebody who wants to '
          + 'wash. Any hint of amusement or correction in her voice turns the scene into a telling-off and '
          + 'loses the whole point, which is that nothing visibly went wrong. '
          + 'Marc\'s single line at the end is a different speaker and should be flatter and quicker: it is '
          + 'the version where nothing happens, and it should sound like nothing happening.',
        clipIds: [
          'Tu cherches quelque chose ?',
          'Bien sûr, au fond du couloir. Prends une serviette si tu veux.',
          'Juste à côté, la porte à droite.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const MAISON_ITEM_IDS = ITEM_IDS;
export const MAISON_SPEAK_IDS = SPEAK_IDS;
export const MAISON_DICTATION_IDS = DICTATION_IDS;
export const MAISON_TRANCHES = DECK_TRANCHE;
export const MAISON_ROOM_IDS = ROOM_IDS;
export const MAISON_WHERE_WILD = WHERE_WILD;

/** The hero contrast and the second pair, named so the batch, the merge and the
 *  test all assert the LAYOUT rather than only the content. */
export const THREE_WAY_SECTION = 's04-split';
export const BATH_PAIR_SECTION = 's05-bath';

/** Every target lands in WORD mode and there is no alternative. Exported so the
 *  test asserts the measured fact rather than an aspiration. */
export const DICTEE_IS_ALL_WORD_MODE = true;

/** Measured across the 25 shipped A1 lessons: 24.3 / 28.9 / 26.0 / 20.9 percent,
 *  with a1.01 sitting exactly on the 40 percent cap. QuizRoundsView does NOT
 *  shuffle, so the authored index is the position the learner sees. This lesson
 *  holds every slot between these bounds and the test asserts it. */
export const QUIZ_SLOT_SPREAD = { maxShare: 0.30, minShare: 0.15 };

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * FOUR THINGS THIS BUILD FOUND AND DID NOT FIX, because none is its to fix.
 * All four were measured on 2026-08-07 by scripts/_maison_residue.ts, against
 * the POST-MERGE seed.
 *
 * 1. THREE OF THIS LESSON'S WORDS HAVE A SECOND COPY IN THEME `famille`, and
 *    those copies still carry the pre-repair respelling:
 *
 *        fr.a1.famille.095  « la maison »   lah meh-ZOHN   (maison: lah meh-ZOHⁿ)
 *        fr.a1.famille.121  « le salon »    luh sah-LOHN   (maison: luh sah-LOHⁿ)
 *        fr.a1.famille.123  « la chambre »  lah SHAHNBR    (maison: lah SHAHⁿBR)
 *
 *    `flashhub-coverage.test.ts` keys on `fr` PER THEME, so these are two cards
 *    in two decks rather than one card served twice, and neither is a defect in
 *    that sense. But a learner who reaches both decks sees two transcriptions of
 *    the same word, one of which this build has now repaired.
 *
 *    NOT REPAIRED HERE ON PURPOSE. `famille` is a1.15's theme, a1.15 ships its
 *    own test over its own respellings, and reaching into another lesson's
 *    asserted content to change three rows is how two builds end up disagreeing
 *    about who owns a transcription. It is a1.15's call, and this is the note
 *    that tells whoever makes it. Same shape as a1.22's finding about `le
 *    Canada` and `la France` in quebec-et-francophonie.
 *
 * 2. THE a2, b1 AND b2 BANDS OF THEME `maison` ARE STILL UN-MIGRATED. The a1
 *    band is now clean: not one row this lesson displays carries a plain nasal
 *    or a word-internal one, verified through the real hasPlainNasalFor plus a
 *    by-name check for the ten the checker cannot see. Above a1 the theme still
 *    holds broken nasals, including one that is word-internal in a word this
 *    lesson teaches:
 *
 *        fr.a2.maison.023  « ranger sa chambre »  rahn-ZHAY sah SHAHNBR
 *
 *    That row carries the error twice and is invisible to the shared checker.
 *    It belongs to whichever A2 unit claims the theme.
 *
 * 3. THE /œʁ/ DEBT IS CORPUS-WIDE. 117 rows write it as -TUHR or -TUR rather
 *    than the house EUR, across metiers, deplacements, transport and a dozen
 *    other themes. Three rows inside theme maison are repaired here (.049, .050,
 *    .093) and the rest are left. See WIDER_DEBT_NOT_TOUCHED in maison-corpus.ts.
 *
 * 4. THE ROUNDS QUIZ DOES NOT SHUFFLE ITS OPTIONS, AND a1.22's TEST SAYS IT
 *    DOES. `a1-22-pays.test.ts:854` reads "QuizDeckView shuffles the options of
 *    every closed question, per question, per attempt". QuizDeckView does. It is
 *    in LessonRich.tsx and it renders the pre-v2 flat deck. Every v2 lesson
 *    declares `rounds` and therefore takes the QuizRoundsView branch at
 *    LessonPager.tsx:811, whose McqCard maps `opts` in authored order with no
 *    shuffle anywhere in the file.
 *
 *    SO EVERY SHIPPED A1 LESSON RENDERS ITS QUIZ OPTIONS IN AUTHORED ORDER.
 *    Measured across the 25 that shipped before this one, the correct answer
 *    sits at slot 0/1/2/3 in 24.3/28.9/26.0/20.9 percent of closed questions,
 *    and a1.01 sits exactly on the 40 percent cap. That is a live product
 *    question rather than a bug in any one lesson, and the fix is either to
 *    shuffle in QuizRoundsView the way QuizDeckView already does, or to hold
 *    every lesson to a spread. This lesson does the second and asserts it. The
 *    first would be better and is not a lesson build's call.                  */
export const MAISON_HANDOVER_NEXT_FREE_ID = 'fr.a1.maison.159';
