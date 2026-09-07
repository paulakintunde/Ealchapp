// a1.24.l1 "Le corps", the mission journey.
//
// The corpus findings that shaped this build are in the header of
// corps-corpus.ts and are not repeated here. In one line: `corps` already held
// 293 rows and is inside SEED_CUT.themes, so this lesson imports rather than
// authors, and the three sentences it is actually built on returned pg=0.
//
// ── The teaching problem, weighted the way the canDo weights it ────────────
//
//     "name the parts of the body"          a word list. FIVE missions.
//     "say what hurts"                      one structure. SIX missions.
//     "describe how someone looks"          the same structure again. SIX.
//
// The corpus holds a hundred body parts and naming them is the cheap half.
// Abundance is what makes this lesson easy to get wrong: a deck of forty nouns
// would look generous and teach nothing the learner could not get from a
// dictionary. The two hard clauses are ONE grammatical move wearing two coats,
// and that move is the lesson:
//
//     j'ai mal à la tête        the person is in the verb, the head takes la
//     il a les yeux marron      the person is in the verb, the eyes take les
//
// English does the opposite in both, carrying the person on the noun with a
// possessive and putting the state in the verb. That inversion is the unit.
//
// ── The neighbour this lesson must not contradict ─────────────────────────
//
// a1.17 "Les adjectifs possessifs" ships at seq 20 and its own
// grammarIntroduced says, in as many words, that "a possessive occupies the
// determiner slot and excludes the definite and indefinite articles". This is
// the lesson where French takes that slot BACK, three units later, and it
// looks exactly like an inconsistency unless it is named.
//
// So the possessive is TAUGHT AS THE WRONG ANSWER here rather than omitted:
// s11-notmine is built on it, the `notYours` term names a1.17 directly, and
// POSSESSIVE_ERROR_FORMS appears in commonErrors and as quiz distractors and
// nowhere else. A contradiction a learner discovers alone is a language they
// decide is arbitrary.
//
// ── What is inherited and must not be re-taught ───────────────────────────
//
//   a1.21 already owns à + le = au, à + les = aux, and that à la and à l' do
//   not contract. Verified in its grammarIntroduced. This lesson SHOWS the four
//   shapes in one table (s09-four) and states that the learner already has them.
//   No section explains the contraction as a system.
//
//   a1.13 already owns agreement, the silent plural -s, and that marron and
//   orange never change. It even quizzes « des yeux vert foncé » in its round 6.
//   So s15-colour and s16-marron APPLY that rule to the one pair of nouns where
//   its exceptions are most visible, and neither presents it as new. a1.13's own
//   header says a1.24 is downstream and that its eye sentences are examples
//   rather than a describing-people mission, so nothing is being taken back.
//
//   a1.07 owns avoir. Every target sentence here is an avoir sentence.
//
// ── What is deliberately left to its neighbours ───────────────────────────
//
//   THE CONSULTATION is a2.28 "At the Doctor's", which declares `corps` and
//   `sante` exactly as a1.24 does. corps.202-293 is full of prescriptions,
//   waiting rooms and ultrasounds. Those rows appear in the READING passage as
//   context and are drilled by nothing. A2_CLINIC_FORMS is asserted absent from
//   every production surface.
//
//   REFLEXIVE BODY VERBS are a1.25. corps.209 "Je me lave les mains" and
//   corps.212 "Elle se brosse les dents" are exactly this shape and carry a
//   pronoun a1.25 owns. Reading context only; A1_25_REFLEXIVE_FORMS asserted.
//
//   THE OTHER ADJECTIVES are a1.14's and a1.16's. NEIGHBOUR_ADJECTIVES appears
//   in no deck, no drill and no quiz option.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   THE FRAME IS A PAIR AND LIVES ON ONE SCREEN. s08-frame and s14-look each
//   carry the English and the French on the SAME card, with the person's
//   position marked in both. Splitting them across two cards destroys the
//   teaching, because the whole point is which slot the person occupies. The
//   test asserts both strings live in one section.
//
//   NO BODY DIAGRAM. A body lesson wants a labelled figure and nothing in this
//   app can draw one. lesson-contract.test.ts contains no reference to
//   `imageRef`, so an authored diagram field is schema-valid, passes CI and
//   renders nothing. This lesson authors ZERO imageRefs and the test asserts
//   that count is zero. The head-to-toe order is carried by s09-four's table
//   and the deck order instead.
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`,
//   MissionSection takes a fallback that returned undefined and drew a BLANK
//   mission (sons.08 m22, a1.01 m5).
//
//   `reading` carries `questionsInModal: true` WITH questions, which is the
//   only path that reaches PassagePage and so the only path that draws the
//   glossary. lesson-contract fails a glossary authored without it.
//
//   The reading passage is ONE BLOCK. PassagePage splits on /(?<=[.!?»])\s+/,
//   so an authored newline is silently discarded.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page.
//
//   `size: 'xl'` is a 12-WORD CAP on every string in the section, not a font
//   choice. The three part decks are the only xl sections and every card in
//   them is one French headword, a respelling and a short gloss.
//
//   A `groupDrill` control page carries `items: []` explicitly and no `size`.
//
//   NO `cheatSheet` BLOCK INSIDE A SHEET. It draws its title and nothing else;
//   a1.13 ships that defect twice. Both sheets here use `table` and `teach`.
//
//   No `autoplay` anywhere: declared in schema.ts, implemented in no component.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { CORPS_TERMS, REFRAME } from './corps-terms.ts';
import {
  APPEARANCE, APPEARANCE_IDS, AUTHORED, HURT_IDS, LOOK_IDS, SINGULAR_EYE_ID,
  THE_FOURTEEN, THE_FOURTEEN_IDS, authoredIds, part, sub,
} from './corps-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a word list.
 *
 * Every id below is SHOWN on a screen. a1.08 shipped 43 itemIds named by
 * nothing at all, released to spaced repetition and drawn by no component, and
 * it was invisible until a check asked "did the learner see it" rather than
 * "does this id resolve". a1-24-corps.test.ts asks the first question.        */

const FACE = ['tête', 'cheveux', 'nez', 'bouche', 'dent', 'oreille'].map((b) => part(b));
const TRUNK = ['bras', 'main', 'dos', 'ventre', 'cou'].map((b) => part(b));
const LEGS = ['jambe', 'genou', 'pied'].map((b) => part(b));

/** The eyes, authored, beside the singular the corpus already had. */
const EYES_ID = authoredIds('headword')[0];        // .294 les yeux
/** Read off the authored row rather than retyped, so the liaison decision this
 *  lesson took lives in exactly one place. */
const EYES_RESPELL = AUTHORED.find((a) => a.id === EYES_ID)!.respell!;
const BLOND_RESPELL = AUTHORED.find((a) => a.fr === 'blond')!.respell!;
const FRISE_RESPELL = AUTHORED.find((a) => a.fr === 'frisé')!.respell!;
const HAIR_IDS = authoredIds('hair');              // .295 blond, .296 frisé
const INVARIABLE_IDS = [
  ...authoredIds('invariable'),                    // .297 Il a les yeux marron.
  ...authoredIds('compound'),                      // .298 ... châtain clair.
];
const CONTRACTION_ID = authoredIds('contraction')[0]; // .299 J'ai mal à l'oreille.

const PART_IDS = THE_FOURTEEN_IDS;

const ITEM_IDS = [
  ...new Set([
    ...PART_IDS,
    EYES_ID, SINGULAR_EYE_ID,
    ...HURT_IDS, CONTRACTION_ID,
    ...LOOK_IDS, ...INVARIABLE_IDS,
    ...HAIR_IDS, ...APPEARANCE_IDS,
  ]),
];

/** Items the speak drill names. Every one carries `voiceflash` in the corpus,
 *  checked against Postgres by the batch rather than against the seed. */
const SPEAK_IDS = [...PART_IDS, EYES_ID];

/** Items the dictée names. Every one carries `dictation`. The four imported
 *  rows had it already; the three authored sentences were given it, which is
 *  why they are usable here at all. */
const DICTATION_IDS = [
  'fr.a1.corps.103', 'fr.a1.corps.104', 'fr.a1.corps.105', 'fr.a1.corps.106',
  CONTRACTION_ID, ...INVARIABLE_IDS,
];

const fr = (id: string): string => {
  const a = AUTHORED.find((x) => x.id === id);
  if (a) return a.fr;
  const p = [...THE_FOURTEEN, ...APPEARANCE].find((x) => x.id === id);
  if (p) return p.fr;
  // The imported sentences, restated nowhere else in this file.
  const IMPORTED: Record<string, string> = {
    'fr.a1.corps.007': "J'ai mal à la tête.",
    'fr.a1.corps.008': 'Elle a mal au dos.',
    'fr.a1.corps.103': 'J’ai mal aux dents depuis hier soir.',
    'fr.a1.corps.104': "J'ai les yeux bleus.",
    'fr.a1.corps.105': 'Mon frère a mal au dos.',
    'fr.a1.corps.106': 'Elle a les cheveux longs.',
    'fr.a1.corps.017': "l'œil",
  };
  const s = IMPORTED[id];
  if (!s) throw new Error(`corps-lesson: no French for ${id}`);
  return s;
};

/* ─── The scene ────────────────────────────────────────────────────────────
 *
 * An A1 scene opens on somebody being MISREAD AS A PERSON, not on being
 * misunderstood. Every word correct, and the interaction still goes wrong.
 * Nobody is corrected and nobody is unkind; the plan simply does not happen.
 *
 * The learner knows `le dos`. They say the words in the English order. The
 * pharmacist understands perfectly, switches to English, and hands them the
 * wrong thing, because pointing at your own back is what somebody with no
 * French does and that is the person they have just been read as.             */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Your back has been bad for three days. There is a pharmacy on the corner and you have looked up the word.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You know it. Le dos. You have said it out loud twice on the way there.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Le pharmacien',
    fr: 'Bonjour, je peux vous aider ?',
    en: 'Hello, can I help you?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You want to say that your back hurts. Which one do you say?',
    options: [
      {
        fr: 'Mon dos fait mal.',
        respell: '[mohⁿ DOH feh MAL]',
        en: 'the one built the way English builds it',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: "J'ai mal au dos.",
        respell: '[zhay mal oh DOH]',
        en: 'the one that puts you in the verb',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Watch what the other one does, because it is the one almost everybody reaches for.',
      breaks: 'Every word in it is correct. Watch what happens anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: 'Mon dos fait mal.',
    en: '(My back makes pain)',
    stage: 'He understands you. That is not the problem.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Le pharmacien',
    fr: 'Ah. Your back. One moment, please.',
    en: 'Ah. Your back. One moment, please.',
    stage: 'He switches to English, slowly, and reaches for something behind the counter.',
    audio: { mode: 'tts', lang: 'en-GB', speeds: [1.0, 0.65] },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You had the word. You did not have the frame.',
    // 36 words. The shipped scene breaks run 24 to 40 here.
    body: 'Nothing you said was wrong as vocabulary. What marked you was the shape: English hangs the person on the noun and puts the hurting in the verb, and French does the exact opposite, every time, with no exceptions to learn.',
    wrong: {
      fr: 'Mon dos fait mal.',
      ipa: '/mɔ̃ do fɛ mal/',
      respell: '[mohⁿ DOH feh MAL]',
      en: 'My back makes pain, which is understood and is not what anybody says',
    },
    right: {
      fr: "J'ai mal au dos.",
      ipa: '/ʒe mal o do/',
      respell: '[zhay mal oh DOH]',
      en: 'I have pain at the back',
    },
    coach: `${REFRAME} That is the next twenty-five minutes.`,
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-24-frame' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: "J'ai mal au dos.",
    en: 'My back hurts.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-frame' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Le pharmacien',
    fr: "Depuis quand ? Je vais vous donner quelque chose pour ça.",
    en: 'Since when? I am going to give you something for that.',
    stage: 'He stays in French, and the conversation continues.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One sentence changed shape and the whole exchange stayed in French. The word was never the problem.',
  },
];

/* ─── Sections ─────────────────────────────────────────────────────────────*/

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the word was not the problem ──────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Word Was Not The Problem',
    frSub: 'À la pharmacie',
    render: 'screens',
    layer: 'core',
    terms: ['theFrame', 'notYours'],
    say: {
      text: 'You will know every word in this scene. Watch it go wrong anyway.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A pharmacy on a corner, late afternoon, one person ahead of you',
      city: 'Nantes',
      time: 'Thursday',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} Both halves of this lesson are that one sentence.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the middle two are the same move twice.',
    goals: [
      { t: 'Name fourteen parts of the body', s: 'Head to foot, each with the little word that belongs to it, because that word is what the rest of the lesson runs on.' },
      { t: 'Say what hurts', s: 'One frame, four shapes, and you already own three of them from the prepositions lesson.' },
      { t: 'Describe how someone looks', s: 'The same frame again, with the eyes and the hair, and the colours you already learned.' },
      { t: 'Know where mon and ma stop', s: 'You met them three lessons ago and this is the one place French takes them back off you.' },
    ],
  },

  /* ── Act 2: head to toe ───────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's03-face',
    title: 'The Head, Six Words',
    frSub: 'La tête',
    hint: 'Swipe through the six.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-parts' },
    say: 'Six words, and the little word in front of each one matters more than usual here.',
    cards: FACE.map((p) => ({
      label: p.article === 'les' ? 'always plural' : `the ${p.article} kind`,
      fr: p.fr,
      sub: p.respell,
      body: p.en,
    })),
  },

  {
    type: 'cardDeck',
    id: 's04-trunk',
    title: 'Arms, Hands, Back',
    frSub: 'Le corps',
    hint: 'Five more.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-parts' },
    say: 'Five more, and one of them is the word from the pharmacy.',
    cards: TRUNK.map((p) => ({
      label: `the ${p.article} kind`,
      fr: p.fr,
      sub: p.respell,
      body: p.en,
    })),
  },

  {
    type: 'cardDeck',
    id: 's05-legs',
    title: 'Down To The Floor',
    frSub: 'Les jambes',
    hint: 'The last three.',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-parts' },
    say: 'Three, and then you have the whole body.',
    cards: LEGS.map((p) => ({
      label: `the ${p.article} kind`,
      fr: p.fr,
      sub: p.respell,
      body: p.en,
    })),
  },

  {
    type: 'groupDrill',
    id: 's06-sort',
    title: 'Which Little Word?',
    frSub: 'Le, la ou les ?',
    layer: 'core',
    terms: ['bothPlural'],
    say: 'Sort them. The little word is the part you have to store, and it decides everything later.',
    groups: [
      {
        label: 'The le kind',
        items: THE_FOURTEEN.filter((p) => p.article === 'le').map((p) => ({
          fr: p.fr, itemId: p.id, respell: `[${p.respell}]`, en: p.en,
        })),
      },
      {
        label: 'The la kind',
        items: THE_FOURTEEN.filter((p) => p.article === 'la').map((p) => ({
          fr: p.fr, itemId: p.id, respell: `[${p.respell}]`, en: p.en,
        })),
      },
      {
        label: 'Check',
        items: [],
        check: {
          q: 'Which of these is NOT the le kind?',
          opts: ['le bras', 'le dos', 'la jambe', 'le pied'],
          correct: 2,
          why: 'la jambe. Nothing about a leg explains why it is the la kind, which is exactly why the little word has to be stored with the word rather than worked out.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's07-eyes',
    title: 'One Eye, Two Eyes',
    frSub: "L'œil et les yeux",
    hint: 'Two cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['bothPlural'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-parts' },
    say: 'These two look unrelated and they are the same word. You will almost always want the second.',
    cards: [
      {
        label: 'One of them',
        fr: fr(SINGULAR_EYE_ID),
        sub: 'LOY',
        body: 'The eye. You will hardly ever need this on its own, and it is here so the plural does not look like a different word entirely.',
      },
      {
        label: 'The pair, and what you will actually say',
        fr: fr(EYES_ID),
        sub: EYES_RESPELL,
        body: 'The eyes. Always plural, like les cheveux, and anything you say about them takes a plural ending too.',
      },
    ],
  },

  /* ── Act 3: where it hurts ────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-frame',
    title: 'The Sentence That Changed Shape',
    frSub: 'Avoir mal à',
    hint: 'Three cards, and the first one is the whole lesson.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theFrame', 'notYours'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-frame' },
    say: 'One card with both languages on it, because the whole teaching is which slot the person sits in.',
    cards: [
      {
        // THE PAIR, ON ONE SCREEN. The test asserts both strings are here.
        label: 'The same idea, built two ways',
        head: 'Where does the person go?',
        fr: "J'ai mal à la tête.",
        sub: 'My head hurts.',
        body: 'English puts the person on the noun, in my, and the hurting in the verb. French puts the person in the verb, in j\'ai, and leaves the head with its ordinary la. Same meaning, opposite build.',
      },
      {
        label: 'So the frame is fixed',
        head: 'avoir + mal + à + the body part',
        fr: fr('fr.a1.corps.008'),
        sub: 'Her back hurts.',
        body: `${REFRAME} Change the person and only the verb moves.`,
      },
      {
        label: 'And mal takes nothing',
        head: 'Never un mal, never le mal',
        fr: "J'ai mal.",
        sub: 'I am in pain.',
        body: 'Mal sits bare in this frame. Le mal exists and means something else entirely, so adding a little word in front of it changes the sentence into philosophy.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's09-four',
    title: 'The Four Shapes',
    frSub: 'À la, au, aux, à l\'',
    layer: 'core',
    terms: ['theFourShapes'],
    sheetId: 'sheet.a1.24.frame',
    say: 'You already have all four of these. Tap any row to hear it.',
    cols: ['The part', 'What you say'],
    rows: [
      {
        cells: ['la tête', 'à la tête'],
        say: "J'ai mal à la tête.",
        detail: {
          title: 'The la kind changes nothing',
          body: 'À la stays exactly as it is. This is the easy one and it is half the body.',
          say: "J'ai mal à la tête.",
        },
      },
      {
        cells: ['le dos', 'au dos'],
        say: 'Elle a mal au dos.',
        detail: {
          title: 'À plus le becomes au',
          body: 'You met this in the prepositions lesson and it has not changed. À le is never written.',
          say: 'Elle a mal au dos.',
        },
      },
      {
        cells: ['les dents', 'aux dents'],
        say: 'J’ai mal aux dents depuis hier soir.',
        detail: {
          title: 'À plus les becomes aux',
          body: 'Same rule, plural. Teeth almost always hurt in the plural, so this is the shape you will want.',
          say: 'J’ai mal aux dents depuis hier soir.',
        },
      },
      {
        cells: ["l'oreille", "à l'oreille"],
        say: fr(CONTRACTION_ID),
        detail: {
          title: "À l' changes nothing either",
          body: 'The one people expect to contract and it does not. À l\' behaves like à la, not like au.',
          say: fr(CONTRACTION_ID),
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10-contract',
    title: 'Does It Change?',
    frSub: 'Ça change ou pas ?',
    layer: 'core',
    terms: ['theFourShapes'],
    say: 'Two buckets. Only two of the four little words ever change.',
    groups: [
      {
        label: 'Changes',
        items: [
          { fr: 'le dos', itemId: part('dos').id, respell: sub('dos'), en: 'becomes au dos' },
          { fr: 'les dents', itemId: part('dent').id, respell: sub('dent'), en: 'becomes aux dents' },
        ],
      },
      {
        label: 'Stays as it is',
        items: [
          { fr: 'la tête', itemId: part('tête').id, respell: sub('tête'), en: 'stays à la tête' },
          { fr: "l'oreille", itemId: part('oreille').id, respell: sub('oreille'), en: "stays à l'oreille" },
        ],
      },
      {
        label: 'Check',
        items: [],
        check: {
          q: 'Your knee hurts. What do you say?',
          opts: ["J'ai mal à le genou.", "J'ai mal au genou.", "J'ai mal le genou.", "J'ai mal du genou."],
          correct: 1,
          why: 'au genou. Le genou is the le kind, and à plus le is written au every single time. À le genou is not something you will ever see written down.',
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's11-notmine',
    title: 'Where Mon And Ma Stop',
    frSub: 'Pas mon, pas ma',
    layer: 'core',
    swipe: true,
    size: 'lg',
    terms: ['notYours'],
    say: 'You learned these three lessons ago and they were right. Here is the one place they are not.',
    errors: [
      {
        wrong: 'Mon dos fait mal.',
        right: "J'ai mal au dos.",
        why: 'The person is already in j\'ai, so putting it on the noun as well says it twice. This is the sentence from the pharmacy and it is the most common one there is.',
      },
      {
        wrong: 'Ma tête fait mal.',
        right: "J'ai mal à la tête.",
        why: 'Same shape, same repair. The head keeps its ordinary la and you never reach for ma at all.',
      },
      {
        wrong: 'Mes yeux sont bleus.',
        right: fr('fr.a1.corps.104'),
        why: `${REFRAME} Describing works exactly like hurting, which is why this lesson is one idea and not two.`,
      },
    ],
  },

  {
    type: 'listening',
    id: 's12-hear',
    title: 'Au, À La, Or Aux?',
    frSub: 'Écoutez bien',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-24-four' },
    say: 'These three really are different sounds, unlike most of what this lesson asks of your ear.',
    lines: [
      { fr: "J'ai mal au dos.", en: 'My back hurts.' },
      { fr: "J'ai mal à la tête.", en: 'My head hurts.' },
      { fr: 'J’ai mal aux dents depuis hier soir.', en: 'I have had a toothache since last night.' },
    ],
    questions: [
      {
        q: 'In the first line, which shape did you hear?',
        opts: ['au', 'à la', 'aux', "à l'"],
        correct: 0,
        why: 'au, one syllable, because le dos is the le kind. This is one of the few things in this lesson your ear can genuinely settle.',
      },
      {
        q: 'Which of the three lines had two syllables between mal and the body part?',
        opts: ['the first', 'the second', 'the third', 'none of them'],
        correct: 1,
        why: 'The second. À la is two, au and aux are one each, so the la kind is audibly longer.',
      },
    ],
  },

  {
    type: 'examples',
    id: 's13-wild',
    title: 'The Frame, In Real Sentences',
    frSub: 'Des phrases entières',
    layer: 'core',
    terms: ['theFrame', 'theFourShapes'],
    say: 'Five sentences from the corpus. The frame does not change in any of them.',
    examples: [
      { fr: fr('fr.a1.corps.007'), en: 'I have a headache.', note: 'à la, first person.' },
      { fr: fr('fr.a1.corps.008'), en: 'Her back hurts.', note: 'au, third person. Only the verb moved.' },
      { fr: fr('fr.a1.corps.105'), en: 'My brother has a backache.', note: 'The person can be a whole noun and the frame holds.' },
      { fr: fr('fr.a1.corps.103'), en: 'I have had a toothache since last night.', note: 'aux, and you can add when.' },
      { fr: fr(CONTRACTION_ID), en: 'My ear hurts.', note: "à l', which does not contract." },
    ],
  },

  /* ── Act 4: what they look like ───────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's14-look',
    title: 'The Same Move Again',
    frSub: 'Avoir les yeux',
    hint: 'Three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['describing', 'notYours'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-look' },
    say: 'If you have the hurting frame, you already have this one. It is the same sentence.',
    cards: [
      {
        // THE PAIR AGAIN, ON ONE SCREEN.
        label: 'The same idea, built two ways',
        head: 'Where does the person go?',
        fr: fr('fr.a1.corps.104'),
        sub: 'My eyes are blue.',
        body: 'English hangs the person on the noun and puts the colour in the verb. French puts the person in j\'ai and leaves the eyes with les. You have seen this exact swap already.',
      },
      {
        label: 'Any person, any feature',
        head: 'avoir + les + the feature + the word for it',
        fr: fr('fr.a1.corps.106'),
        sub: 'She has long hair.',
        body: `${REFRAME} Nothing here is new except the words on the end.`,
      },
      {
        label: 'And hair is plural',
        head: 'les cheveux, always',
        fr: 'Elle a les cheveux frisés.',
        sub: 'She has curly hair.',
        body: 'Hair is one thing in English and many in French, so the word after it takes a plural ending you will never hear.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's15-colour',
    title: 'Colours On The Eyes And The Hair',
    frSub: 'Les couleurs',
    layer: 'core',
    terms: ['bothPlural'],
    sheetId: 'sheet.a1.24.describing',
    say: 'You did the colours already. Both of these words are plural, so every colour takes the s.',
    cols: ['What you mean', 'What you say'],
    rows: [
      {
        cells: ['blue eyes', 'les yeux bleus'],
        say: fr('fr.a1.corps.104'),
        detail: {
          title: 'The s you cannot hear',
          body: 'Bleu becomes bleus because les yeux is plural. It sounds exactly the same, which is why this is a writing decision rather than a listening one.',
          say: fr('fr.a1.corps.104'),
        },
      },
      {
        cells: ['green eyes', 'les yeux verts'],
        say: 'Il a les yeux verts.',
        detail: {
          title: 'Same again',
          body: 'Vert becomes verts. The t was already silent and the s changes nothing about the sound.',
          say: 'Il a les yeux verts.',
        },
      },
      {
        cells: ['blond hair', 'les cheveux blonds'],
        say: 'Elle a les cheveux blonds.',
        detail: {
          title: 'And on the hair',
          body: 'Blond becomes blonds for the same reason. Les cheveux is plural whether you think of hair as one thing or not.',
          say: 'Elle a les cheveux blonds.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's16-marron',
    title: 'The Two That Refuse',
    frSub: 'Marron et châtain clair',
    hint: 'Three cards, and this is the one people get wrong for years.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['leftAlone'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-invariable' },
    say: 'You met this rule with clothes. Here is where it actually costs you something.',
    cards: [
      {
        label: 'Brown eyes, and the ending that must not be there',
        head: 'marron never changes',
        fr: fr(INVARIABLE_IDS[0]),
        sub: 'He has brown eyes.',
        body: 'Les yeux is plural and marron takes nothing anyway, because marron is a chestnut being borrowed as a colour and the chestnut keeps its own shape.',
      },
      {
        label: 'Two words, so neither half moves',
        head: 'châtain clair never changes',
        fr: fr(INVARIABLE_IDS[1]),
        sub: 'She has light brown hair.',
        body: 'Once a colour is built from two words it has stopped being a plain colour, so the endings never reach it. Same idea, not a second rule.',
      },
      {
        label: 'Why this is one idea and not three',
        head: 'Borrowed things keep their shape',
        fr: 'les yeux marron · les cheveux châtain clair',
        sub: 'both of them, unchanged',
        body: 'A nut and a two word description. Neither is a plain colour word, so nothing attaches to either.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's17-hair',
    title: 'Hair, And What Is On A Face',
    frSub: 'Les cheveux et la barbe',
    hint: 'Four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-24-look' },
    say: 'Four words that finish the description, and two of them did not exist in this corpus until now.',
    cards: [
      {
        label: 'Newly written for this lesson',
        fr: fr(HAIR_IDS[0]),
        sub: BLOND_RESPELL,
        body: 'Blond, fair. Takes a plural s after les cheveux, like any ordinary colour.',
      },
      {
        label: 'Newly written for this lesson',
        fr: fr(HAIR_IDS[1]),
        sub: FRISE_RESPELL,
        body: 'Curly. Also takes the plural s, and also silent.',
      },
      {
        label: 'Already in the corpus',
        fr: fr(APPEARANCE_IDS[0]),
        sub: part('barbe').respell,
        body: 'The beard. Il a une barbe, with the un kind, because a beard is a thing you have rather than a feature everyone has.',
      },
      {
        label: 'Already in the corpus',
        fr: fr(APPEARANCE_IDS[1]),
        sub: part('moustache').respell,
        body: 'The moustache. Same shape as the beard.',
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's18-traps',
    title: 'Three Ways This Goes Wrong',
    frSub: 'Trois pièges',
    layer: 'core',
    swipe: true,
    size: 'lg',
    terms: ['leftAlone', 'bothPlural'],
    say: 'All three are things a careful learner does, which is what makes them stick.',
    errors: [
      {
        wrong: 'Il a les yeux marrons.',
        right: fr(INVARIABLE_IDS[0]),
        why: 'The s looks like being careful and it is the single most noticeable written error in this lesson. Marron is a nut and nothing attaches to it.',
      },
      {
        wrong: 'Elle a les cheveux long.',
        right: fr('fr.a1.corps.106'),
        why: 'Les cheveux is plural, so long takes the s. You cannot hear it, which is exactly why it has to be worked out rather than listened for.',
      },
      {
        wrong: 'Ses yeux sont bleus.',
        right: fr('fr.a1.corps.104'),
        why: `${REFRAME} It is understood, and it is the phrasebook sentence rather than the one anybody says.`,
      },
    ],
  },

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'Everything In One Place',
    frSub: 'Tout le vocabulaire',
    layer: 'more',
    say: 'Every word from this lesson, grouped the way you met them.',
    themes: [
      {
        title: 'The head',
        cards: FACE.map((p) => ({ fr: p.fr, sub: p.respell, en: p.en })),
      },
      {
        title: 'The body',
        cards: [...TRUNK, ...LEGS].map((p) => ({ fr: p.fr, sub: p.respell, en: p.en })),
      },
      {
        title: 'Describing someone',
        cards: [
          { fr: fr(EYES_ID), sub: EYES_RESPELL, en: 'the eyes' },
          { fr: fr(HAIR_IDS[0]), sub: BLOND_RESPELL, en: 'blond, fair' },
          { fr: fr(HAIR_IDS[1]), sub: FRISE_RESPELL, en: 'curly' },
          { fr: fr(APPEARANCE_IDS[0]), sub: part('barbe').respell, en: 'the beard' },
          { fr: fr(APPEARANCE_IDS[1]), sub: part('moustache').respell, en: 'the moustache' },
        ],
      },
    ],
  },

  /* ── Act 5: say it about someone ──────────────────────────────────────── */

  {
    type: 'reading',
    id: 's20-reading',
    title: 'The Waiting Room',
    frSub: 'Dans la salle d\'attente',
    layer: 'core',
    questionsInModal: true,
    terms: ['theFrame', 'describing'],
    say: 'One short passage. Every sentence in it uses the frame you have just learned.',
    // ONE BLOCK. PassagePage splits on sentence boundaries and discards newlines.
    text: "Il est neuf heures et la salle d'attente est pleine. Un homme attend près de la porte. Il a les cheveux blonds et il a les yeux marron. Il a mal au dos depuis trois jours. À côté de lui, une femme lit son téléphone. Elle a les cheveux longs et châtain clair, et elle porte des lunettes. Son fils a mal aux dents et il ne veut pas parler. Le médecin ouvre la porte et regarde sa liste. « Monsieur Barré ? » L'homme se lève lentement, parce que son dos ne va toujours pas bien.",
    glossary: [
      { word: 'pleine', en: 'full', note: 'The feminine of plein, agreeing with la salle.' },
      { word: 'attend', en: 'waits, is waiting', note: 'From attendre. It does not mean to attend.' },
      { word: 'se lève', en: 'gets up', note: "A1.25 owns this shape. Here it is context, not something you have to produce." },
      { word: 'lentement', en: 'slowly' },
    ],
    questions: [
      { q: 'What is wrong with the man by the door?', a: 'His back hurts, and it has for three days.' },
      { q: 'How is the woman described?', a: 'Long light brown hair, and she wears glasses.' },
      { q: 'Why will the boy not talk?', a: 'He has toothache.' },
    ],
  },

  {
    type: 'flashcards',
    id: 's21-flash',
    title: 'Flip And Recall',
    frSub: 'Révision rapide',
    layer: 'core',
    render: 'deck',
    say: 'The fourteen parts, front to back.',
    cards: THE_FOURTEEN.map((p) => ({
      front: p.fr,
      back: `${p.en} · ${p.respell}`,
      say: p.fr,
    })),
  },

  {
    type: 'dictation',
    id: 's22-dictation',
    title: 'Write What You Hear',
    frSub: 'Dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], maxPlays: 4 },
    say: 'Seven sentences. The silent endings are the whole point of this one.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's23-speak',
    title: 'Say Where It Hurts',
    frSub: 'À vous',
    layer: 'core',
    skill: 'speak',
    say: 'Say each one out loud. The frame is what is being listened for, not your accent.',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's24-scenario',
    title: 'Describing Someone At The Station',
    frSub: 'À la gare',
    layer: 'core',
    setting: 'A friend is meeting your brother off a train and has never seen him.',
    // Every `user` line is the frame this lesson taught, and every turn carries
    // `alts`, because a conversation is not a cloze test: a learner who answers
    // correctly in a different shape must be marked right rather than "not
    // quite". `stt` scores against all of them and the reveal shows them.
    turns: [
      {
        ai: 'Il ressemble à quoi, ton frère ?',
        en: 'What does your brother look like?',
        user: 'Il a les cheveux frisés et les yeux marron.',
        userEn: 'He has curly hair and brown eyes.',
        alts: [
          { fr: 'Il a les yeux marron et les cheveux frisés.', en: 'He has brown eyes and curly hair.' },
          { fr: 'Il a les cheveux frisés.', en: 'He has curly hair.' },
        ],
      },
      {
        ai: 'Et ses cheveux, ils sont longs ?',
        en: 'And his hair, is it long?',
        user: 'Non, il a les cheveux courts.',
        userEn: 'No, he has short hair.',
        alts: [
          { fr: 'Non, ils sont courts.', en: 'No, it is short.' },
          { fr: 'Non, pas longs.', en: 'No, not long.' },
        ],
      },
      {
        ai: 'Il a une barbe ?',
        en: 'Does he have a beard?',
        user: 'Oui, il a une barbe.',
        userEn: 'Yes, he has a beard.',
        alts: [
          { fr: 'Oui, une barbe et une moustache.', en: 'Yes, a beard and a moustache.' },
          { fr: 'Non, pas de barbe.', en: 'No, no beard.' },
        ],
      },
      {
        ai: 'Parfait. Et il va bien en ce moment ?',
        en: 'Perfect. And is he well at the moment?',
        user: 'Il a mal au dos depuis trois jours.',
        userEn: 'His back has hurt for three days.',
        alts: [
          { fr: 'Il a mal au dos.', en: 'His back hurts.' },
          { fr: 'Il a mal aux jambes.', en: 'His legs hurt.' },
        ],
      },
      {
        ai: 'Ah, le pauvre. Il marche lentement alors ?',
        en: 'Oh, poor thing. So he walks slowly?',
        user: 'Oui, parce qu\'il a mal au dos.',
        userEn: 'Yes, because his back hurts.',
        alts: [
          { fr: 'Oui, très lentement.', en: 'Yes, very slowly.' },
          { fr: 'Oui, il a mal.', en: 'Yes, he is in pain.' },
        ],
      },
      {
        ai: 'Compris. Je le trouverai sans problème.',
        en: 'Understood. I will find him without any trouble.',
        user: 'Merci beaucoup.',
        userEn: 'Thank you very much.',
        alts: [
          { fr: 'Merci !', en: 'Thanks!' },
          { fr: 'C\'est gentil, merci.', en: 'That is kind, thank you.' },
        ],
      },
    ],
  },

  /* ── Act 6: the exam ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's25-review',
    title: 'Before The Exam',
    frSub: 'Avant l\'examen',
    layer: 'core',
    render: 'deck',
    say: 'Six cards. Again, hard or easy on each.',
    cards: [
      { front: "J'ai mal à la tête.", back: 'My head hurts. The person is in the verb.', say: "J'ai mal à la tête." },
      { front: 'Elle a mal au dos.', back: 'Her back hurts. À plus le is au.', say: 'Elle a mal au dos.' },
      { front: fr(CONTRACTION_ID), back: "My ear hurts. À l' does not contract.", say: fr(CONTRACTION_ID) },
      { front: fr('fr.a1.corps.104'), back: 'I have blue eyes. Never mes yeux sont.', say: fr('fr.a1.corps.104') },
      { front: fr(INVARIABLE_IDS[0]), back: 'He has brown eyes. Marron takes nothing.', say: fr(INVARIABLE_IDS[0]) },
      { front: fr(INVARIABLE_IDS[1]), back: 'She has light brown hair. Neither half changes.', say: fr(INVARIABLE_IDS[1]) },
    ],
  },

  {
    type: 'progressCheck',
    id: 's26-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    layer: 'core',
    say: 'One number matters here and it is the last one.',
    body: 'You have the fourteen parts and both halves of the frame. What is left is the exam, and the only thing in it that is genuinely new is the pair of colours that refuse to change.',
    stats: [
      { k: 'Parts of the body', v: '14' },
      { k: 'Shapes of the little word', v: '4' },
      { k: 'Colours that never change', v: '2' },
    ],
  },

  {
    type: 'quiz',
    id: 's27-quiz',
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 60,
    roundFailThreshold: 60,
    say: 'Six rounds. A round you fail gives you its drill before the next one starts.',
    rounds: [
      {
        id: 'r1-the-parts',
        label: 'The parts',
        targets: ['err-wrong-part'],
        say: 'The words, quickly.',
        questions: [
          {
            q: 'Listen. Which part of the body is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'la jambe' },
            opts: ['la tête', 'le bras', 'la jambe', 'le pied'],
            correct: 2,
            why: 'la jambe, the leg. It is one of the la kind, which is worth storing now because it decides whether you say à la or au later.',
            ref: 's05-legs',
          },
          {
            q: 'Which of these is the word for the back?',
            format: 'mcq',
            opts: ['le dos', 'le cou', 'le ventre', 'la main'],
            correct: 0,
            why: 'le dos, with a silent s. It is the word from the pharmacy scene and the one this lesson opened on.',
            ref: 's04-trunk',
          },
          {
            q: 'Write the French for the tooth, with its little word.',
            format: 'typeIn',
            accept: ['la dent'],
            answer: 'la dent',
            why: 'la dent. It is the la kind, and in practice you will nearly always want it plural, as les dents.',
            ref: 's03-face',
          },
          {
            q: 'Which one of these is always plural in French?',
            format: 'mcq',
            opts: ['la bouche', 'le nez', 'le genou', 'les cheveux'],
            correct: 3,
            why: 'les cheveux. Hair is one thing in English and many in French, and les yeux behaves the same way.',
            ref: 's07-eyes',
          },
        ],
      },
      {
        id: 'r2-where-it-hurts',
        label: 'Where it hurts',
        targets: ['err-no-contraction', 'err-wrong-part'],
        say: 'The body part decides the shape.',
        questions: [
          {
            q: 'Your back hurts. Complete: J\'ai mal ___ dos.',
            format: 'mcq',
            opts: ['à le', 'au', 'à la', 'aux'],
            correct: 1,
            why: 'au. Le dos is the le kind, and à plus le is written au every time. À le dos is never written down.',
            ref: 's09-four',
          },
          {
            q: 'Your ear hurts. Write the whole sentence.',
            format: 'typeIn',
            accept: ["j'ai mal à l'oreille", "j'ai mal a l'oreille", "J'ai mal à l'oreille."],
            answer: "J'ai mal à l'oreille.",
            why: "à l'oreille, unchanged. This is the one people expect to contract, and it behaves like à la rather than like au.",
            ref: 's09-four',
          },
          {
            q: 'Fix this. « J\'ai mal à les dents. »',
            format: 'errorSpot',
            accept: ["J'ai mal aux dents.", "j'ai mal aux dents", 'aux dents'],
            answer: "J'ai mal aux dents.",
            why: 'aux dents. À plus les is aux, the same contraction you already use for going places. À les is never written.',
            ref: 's10-contract',
          },
          {
            q: 'Which of these body parts does NOT change the little word after à?',
            format: 'mcq',
            opts: ['le dos', 'les dents', 'la tête', 'le pied'],
            correct: 2,
            why: 'la tête. À la is left alone, and so is à l\'. Only le and les ever contract.',
            ref: 's10-contract',
          },
        ],
      },
      {
        id: 'r3-not-yours',
        label: 'Where mon and ma stop',
        targets: ['err-possessive', 'err-etre-for-avoir'],
        say: 'The half of this lesson that contradicts the last one.',
        questions: [
          {
            q: 'Fix this. « Mon dos fait mal. »',
            format: 'errorSpot',
            accept: ["J'ai mal au dos.", "j'ai mal au dos", 'au dos'],
            answer: "J'ai mal au dos.",
            why: 'Every word in the original is correct and the shape is English. The person belongs in the verb, and the back keeps its ordinary little word.',
            ref: 's11-notmine',
          },
          {
            q: 'Why is « Ma tête fait mal » not what people say?',
            format: 'mcq',
            opts: [
              'The person is already in the verb, so saying it twice marks the sentence',
              'Because tête is feminine and ma is wrong for it',
              'Because fait is the wrong verb for a head',
              'Because the sentence is too short to be polite',
            ],
            correct: 0,
            why: 'The person goes in the verb. Ma tête is perfectly good French in other sentences; it is this frame that will not take it.',
            ref: 's11-notmine',
          },
          {
            q: 'Which verb does this frame always use?',
            format: 'mcq',
            opts: ['être', 'faire', 'aller', 'avoir'],
            correct: 3,
            why: 'avoir. J\'ai mal, il a mal, elle a mal. Être is what English makes you expect and it is not used here at all.',
            ref: 's08-frame',
          },
          {
            q: 'Your head hurts. Write the whole sentence.',
            format: 'typeIn',
            accept: ["j'ai mal à la tête", "j'ai mal a la tete", "J'ai mal à la tête."],
            answer: "J'ai mal à la tête.",
            why: 'J\'ai mal à la tête. The la kind, so nothing contracts, and the person never appears on the noun.',
            ref: 's08-frame',
          },
        ],
      },
      {
        id: 'r4-describing',
        label: 'Describing someone',
        targets: ['err-etre-for-avoir', 'err-possessive'],
        say: 'The same move, on a face.',
        questions: [
          {
            q: 'You want to say she has green eyes. What do you write?',
            format: 'mcq',
            opts: [
              'Ses yeux sont verts.',
              'Elle a les yeux verts.',
              'Elle a ses yeux verts.',
              'Elle est les yeux verts.',
            ],
            correct: 1,
            why: 'Elle a les yeux verts. The person is in a, and the eyes keep les. The first option is understood and is the phrasebook sentence rather than the one anybody says.',
            ref: 's14-look',
          },
          {
            q: 'He has blond hair. Write the whole sentence.',
            format: 'typeIn',
            accept: ['il a les cheveux blonds', 'Il a les cheveux blonds.'],
            answer: 'Il a les cheveux blonds.',
            why: 'Il a les cheveux blonds, with the s on blonds because les cheveux is plural. You will never hear that s.',
            ref: 's15-colour',
          },
          {
            q: 'Fix this. « Mes yeux sont bleus. »',
            format: 'errorSpot',
            accept: ["J'ai les yeux bleus.", "j'ai les yeux bleus", "j'ai les yeux bleus."],
            answer: "J'ai les yeux bleus.",
            why: `${REFRAME} Describing and hurting are the same sentence with different words on the end.`,
            ref: 's14-look',
          },
          {
            q: 'Listen. What colour are the eyes?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Il a les yeux marron.' },
            opts: ['brown', 'blue', 'green', 'grey'],
            correct: 0,
            why: 'marron, brown. Nothing in the sound tells you whether an s was written, which is what makes the next round a writing problem rather than a listening one.',
            ref: 's16-marron',
          },
        ],
      },
      {
        id: 'r5-the-plural-s',
        label: 'The s you cannot hear',
        targets: ['err-singular-colour'],
        say: 'Both of these words are plural, always.',
        questions: [
          {
            q: 'Les cheveux and the word long. Write the colour word as it should appear.',
            format: 'typeIn',
            accept: ['longs'],
            answer: 'longs',
            why: 'longs, with an s, because les cheveux is plural. It sounds exactly like long and the only reason to write it is the noun in front.',
            ref: 's15-colour',
          },
          {
            q: 'How many of these are spelled correctly? « les yeux bleus », « les cheveux blonds », « les yeux vert »',
            format: 'mcq',
            opts: ['all three', 'one', 'two', 'none'],
            correct: 2,
            why: 'Two. The third needs verts, because les yeux is plural like everything else here. Nothing about the sound would have told you.',
            ref: 's15-colour',
          },
          {
            q: 'Why does the colour take an s after les yeux?',
            format: 'mcq',
            opts: [
              'Because eye colours are always plural in French',
              'Because les yeux is plural, so the word describing it matches',
              'Because the colour comes after the noun',
              'Because you can hear the s in careful speech',
            ],
            correct: 1,
            why: 'The noun is plural, so the word describing it matches. It is the rule you already met with colours, applied to a word that happens to always be plural.',
            ref: 's15-colour',
          },
          {
            q: 'She has curly hair. Write the word for curly as it should appear.',
            format: 'typeIn',
            accept: ['frisés'],
            answer: 'frisés',
            why: 'frisés. Same silent s as blonds and longs, for the same reason, on a word that did not exist in this corpus until this lesson.',
            ref: 's17-hair',
          },
        ],
      },
      {
        id: 'r6-left-alone',
        label: 'The two that refuse',
        targets: ['err-marron-agrees'],
        say: 'The last round, and you already know why.',
        questions: [
          {
            q: 'Fix this. « Il a les yeux marrons. »',
            format: 'errorSpot',
            accept: ['Il a les yeux marron.', 'il a les yeux marron', 'marron'],
            answer: 'Il a les yeux marron.',
            why: 'marron, with nothing added. The s is the most noticeable written error in this lesson and it looks exactly like being careful.',
            ref: 's16-marron',
          },
          {
            q: 'Why does marron refuse the s when bleu takes it?',
            format: 'mcq',
            opts: [
              'Because marron is longer than bleu',
              'Because marron is irregular and has to be memorised on its own',
              'Because brown is not a real colour in French',
              'Because marron is a nut being borrowed as a colour, and it keeps its own shape',
            ],
            correct: 3,
            why: 'It is a chestnut being used as a colour. You met this with clothes already, and it is one idea rather than a list of exceptions.',
            ref: 's16-marron',
          },
          {
            q: 'Say this out loud: he has brown eyes.',
            format: 'speak',
            target: 'Il a les yeux marron.',
            answer: 'Il a les yeux marron.',
            accept: ['Il a les yeux marron.', 'il a les yeux marron'],
            why: 'Nothing in the sound tells anybody whether you wrote the s, which is exactly why that error survives. Saying it and writing it are two separate skills here.',
            ref: 's16-marron',
          },
          {
            q: 'What do marron and châtain clair have in common?',
            format: 'mcq',
            opts: [
              'Both are shades of brown, so both are irregular',
              'Neither is a plain colour word, so neither ever changes',
              'Both are only used for hair',
              'Both take an s only after les cheveux',
            ],
            correct: 1,
            why: 'Neither is a plain colour word. A nut and a two word description, so the endings never reach either of them. One idea, not two things to memorise.',
            ref: 's16-marron',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's28-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    layer: 'core',
    say: 'One sentence, two jobs.',
    body: `You can name fourteen parts of the body, say which one hurts, and describe what somebody looks like. All three run on the same sentence. ${REFRAME}`,
    points: [
      'J\'ai mal au dos, and the person never appears on the noun',
      'Au and aux contract, à la and à l\' do not',
      'Les yeux and les cheveux are plural, so the colour takes a silent s',
      'Marron and châtain clair take nothing at all',
    ],
  },
];

/* ─── Acts ─────────────────────────────────────────────────────────────────*/

const ACTS: LessonAct[] = [
  {
    id: 'act1-problem',
    title: 'The Word Was Not The Problem',
    sections: ['s01-scene', 's02-goals'],
    milestone: 'You have seen the sentence this lesson exists to fix.',
    estScreens: 14,
  },
  {
    id: 'act2-parts',
    title: 'Head To Toe',
    sections: ['s03-face', 's04-trunk', 's05-legs', 's06-sort', 's07-eyes'],
    milestone: 'Fourteen parts, each with the little word that belongs to it.',
    estScreens: 22,
    restPoints: ['s05-legs/start'],
  },
  {
    id: 'act3-hurts',
    title: 'Where It Hurts',
    sections: ['s08-frame', 's09-four', 's10-contract', 's11-notmine', 's12-hear', 's13-wild'],
    milestone: 'You can say which part of you hurts, in any of the four shapes.',
    estScreens: 24,
    restPoints: ['s11-notmine/start'],
  },
  {
    id: 'act4-looks',
    title: 'What They Look Like',
    sections: ['s14-look', 's15-colour', 's16-marron', 's17-hair', 's18-traps', 's19-words'],
    milestone: 'The same frame, on a face, including the two colours that refuse it.',
    estScreens: 24,
    restPoints: ['s16-marron/start'],
  },
  {
    id: 'act5-produce',
    title: 'Say It About Someone',
    sections: ['s20-reading', 's21-flash', 's22-dictation', 's23-speak', 's24-scenario'],
    milestone: 'You have produced the frame yourself, in writing and out loud.',
    estScreens: 21,
  },
  {
    id: 'act6-exam',
    title: 'The Exam',
    sections: ['s25-review', 's26-progress', 's27-quiz', 's28-roundup'],
    milestone: 'Done. Both halves of the body lesson are one sentence.',
    estScreens: 20,
  },
];

/* ─── Tranches ─────────────────────────────────────────────────────────────
 *
 * One entry per act, index-aligned with ACTS. Every taught item is released
 * exactly once, nothing untaught is released, and no tranche releases an item
 * the acts before it have not shown.                                         */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out = ids.filter((id) => !released.has(id));
  out.forEach((id) => released.add(id));
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1 shows no corpus item: the scene is authored dialogue.
  once([]),
  // Act 2 taught the parts, the eyes and the singular beside them.
  once([...PART_IDS, EYES_ID, SINGULAR_EYE_ID]),
  // Act 3 taught the frame and all four contractions.
  once([...HURT_IDS, CONTRACTION_ID]),
  // Act 4 taught describing, the invariable pair and the hair words.
  once([...LOOK_IDS, ...INVARIABLE_IDS, ...HAIR_IDS, ...APPEARANCE_IDS]),
  // Acts 5 and 6 practise what is already released.
  once([]),
  once([]),
];

/* ─── Error triggers and drills ────────────────────────────────────────────
 *
 * `drillForRound` fires the drill of the FIRST resolving target only, then
 * stops. So each teaching drill is the first target of exactly ONE round, and
 * a1-24-corps.test.ts asserts that by name. a1.05 shipped two drills that were
 * named in second place and were therefore dead content.                     */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-part',
    description: 'Names the wrong body part, or the right one with the wrong little word.',
    detectOn: ['s06-sort', 's27-quiz/r1-the-parts'],
    drill: 'drill-parts',
    retest: 'drill-parts-retest',
  },
  {
    id: 'err-no-contraction',
    description: 'Writes à le or à les instead of au or aux.',
    detectOn: ['s10-contract', 's27-quiz/r2-where-it-hurts'],
    drill: 'drill-contraction',
    retest: 'drill-contraction-retest',
  },
  {
    id: 'err-possessive',
    description: 'Uses mon, ma, mes or ses on the body part instead of the definite article.',
    detectOn: ['s11-notmine', 's27-quiz/r3-not-yours'],
    drill: 'drill-possessive',
    retest: 'drill-possessive-retest',
  },
  {
    id: 'err-etre-for-avoir',
    description: 'Builds the frame with être or faire instead of avoir.',
    detectOn: ['s08-frame', 's14-look', 's27-quiz/r4-describing'],
    drill: 'drill-avoir',
    retest: 'drill-avoir-retest',
  },
  {
    id: 'err-singular-colour',
    description: 'Leaves the colour singular after les yeux or les cheveux.',
    detectOn: ['s15-colour', 's27-quiz/r5-the-plural-s'],
    drill: 'drill-plural',
    retest: 'drill-plural-retest',
  },
  {
    id: 'err-marron-agrees',
    description: 'Adds an ending to marron or to châtain clair.',
    detectOn: ['s16-marron', 's18-traps', 's27-quiz/r6-left-alone'],
    drill: 'drill-invariable',
    retest: 'drill-invariable-retest',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-parts',
    title: 'The little word, again',
    format: 'sort',
    buckets: ['le', 'la', 'les'],
    items: PART_IDS,
    coach: 'Sort them once more. The little word is the part that decides everything downstream.',
  },
  {
    id: 'drill-parts-retest',
    title: 'One check',
    format: 'mcq',
    q: 'Which one is the la kind?',
    opts: ['le cou', 'la main', 'le nez', 'le pied'],
    correct: 1,
    why: 'la main. There is nothing about a hand that explains it, which is why it is stored rather than worked out.',
  },
  {
    id: 'drill-contraction',
    title: 'Only two of the four move',
    format: 'sort',
    buckets: ['contracts', 'stays as it is'],
    items: [part('dos').id, part('dent').id, part('tête').id, part('oreille').id],
    coach: 'À plus le is au and à plus les is aux. À la and à l\' are left alone.',
  },
  {
    id: 'drill-contraction-retest',
    title: 'One check',
    format: 'mcq',
    q: 'Complete: J\'ai mal ___ pied.',
    opts: ['à le', 'au', 'à la', "à l'"],
    correct: 1,
    why: 'au pied. Le pied is the le kind, so à le is written au.',
  },
  {
    id: 'drill-possessive',
    title: 'The person is in the verb',
    format: 'errorSpot',
    items: [...HURT_IDS, ...LOOK_IDS],
    coach: `${REFRAME} Read each one and find the sentence that put the person in the wrong place.`,
  },
  {
    id: 'drill-possessive-retest',
    title: 'One check',
    format: 'mcq',
    q: 'Which one is what people actually say?',
    opts: ['Ma tête fait mal.', 'Ma tête a mal.', "J'ai mal à la tête.", 'Je suis mal à la tête.'],
    correct: 2,
    why: "J'ai mal à la tête. The person is in j'ai and the head keeps la.",
  },
  {
    id: 'drill-avoir',
    title: 'Always avoir',
    format: 'flashcard',
    items: [...HURT_IDS, ...LOOK_IDS],
    coach: 'Every sentence in this lesson is an avoir sentence. Être is what English makes you expect.',
  },
  {
    id: 'drill-avoir-retest',
    title: 'One check',
    format: 'mcq',
    q: 'She has blue eyes. Which verb do you need?',
    opts: ['être', 'avoir', 'faire', 'aller'],
    correct: 1,
    why: 'avoir. Elle a les yeux bleus, not elle est.',
  },
  {
    id: 'drill-plural',
    title: 'The s you cannot hear',
    format: 'typeIn',
    items: [...LOOK_IDS],
    coach: 'Les yeux and les cheveux are plural, so whatever follows takes an s you will never hear.',
  },
  {
    id: 'drill-plural-retest',
    title: 'One check',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['Elle a les cheveux long.', 'Elle a les cheveux longs.', 'Elle a le cheveu long.', 'Elle a les cheveu longs.'],
    correct: 1,
    why: 'les cheveux longs. Both words are plural and neither plural is audible.',
  },
  {
    id: 'drill-invariable',
    title: 'The two that refuse',
    format: 'flashcard',
    items: INVARIABLE_IDS,
    coach: 'A nut and a two word description. Neither is a plain colour word, so nothing attaches to either.',
  },
  {
    id: 'drill-invariable-retest',
    title: 'One check',
    format: 'mcq',
    q: 'Brown eyes. Which one?',
    opts: ['les yeux marrons', 'les yeux marron', 'les yeux marronnes', 'les yeux marronne'],
    correct: 1,
    why: 'les yeux marron, with nothing added, whatever the noun in front of it is doing.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * layer 'deep', which is the one place a table is allowed. NO `cheatSheet`
 * block: inside a sheet it draws its title and nothing else, and a1.13 ships
 * that defect twice.                                                         */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.24.frame',
    title: 'Saying what hurts',
    layer: 'deep',
    contains: ['The frame', 'All four shapes', 'The fourteen parts'],
    sections: [
      {
        type: 'teach',
        id: 'sheet-frame-teach',
        title: 'The frame',
        layer: 'deep',
        body: `${REFRAME} avoir + mal + à + the body part, and the body part keeps whichever little word it always had. Change the person and only the verb moves: j'ai mal, tu as mal, il a mal, elle a mal, nous avons mal.`,
      },
      {
        type: 'table',
        id: 'sheet-frame-table',
        title: 'The four shapes',
        layer: 'deep',
        cols: ['The part', 'After à', 'Example'],
        rows: [
          ['la tête', 'à la tête', "J'ai mal à la tête."],
          ['le dos', 'au dos', 'Elle a mal au dos.'],
          ['les dents', 'aux dents', "J'ai mal aux dents."],
          ["l'oreille", "à l'oreille", fr(CONTRACTION_ID)],
        ],
      },
      {
        type: 'table',
        id: 'sheet-frame-parts',
        title: 'The fourteen parts',
        layer: 'deep',
        cols: ['French', 'Say it', 'English'],
        rows: THE_FOURTEEN.map((p) => [p.fr, p.respell, p.en]),
      },
    ],
  },
  {
    id: 'sheet.a1.24.describing',
    title: 'Describing someone',
    layer: 'deep',
    contains: ['The frame again', 'Colours that change', 'Colours that do not'],
    sections: [
      {
        type: 'teach',
        id: 'sheet-desc-teach',
        title: 'The same frame',
        layer: 'deep',
        body: 'avoir + les + the feature + the word for it. Les yeux and les cheveux are both plural, so anything after them takes an s you cannot hear. Never mes yeux sont, never ses cheveux sont.',
      },
      {
        type: 'table',
        id: 'sheet-desc-table',
        title: 'What changes and what does not',
        layer: 'deep',
        cols: ['Colour', 'After les yeux', 'Changes?'],
        rows: [
          ['bleu', 'les yeux bleus', 'yes, silent s'],
          ['vert', 'les yeux verts', 'yes, silent s'],
          ['blond', 'les cheveux blonds', 'yes, silent s'],
          ['marron', 'les yeux marron', 'no, never'],
          ['châtain clair', 'les cheveux châtain clair', 'no, never'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-desc-neighbours',
        title: 'Words you will meet next door',
        layer: 'deep',
        body: 'La fièvre and la douleur sit in this same theme and belong to the doctor lesson rather than this one. Grand, petit, jeune and vieux belong to the adjectives lessons. None of them is taught here and all of them are waiting.',
      },
    ],
  },
];

/* ─── The lesson ───────────────────────────────────────────────────────────*/

export const CORPS_LESSON: Lesson = {
  id: 'a1.24.l1',
  unitId: 'a1.24',
  seq: 1,
  title: 'Le corps',
  level: 'a1',
  // Matches the unit's spine seq of 27, which is what every shipped A1 lesson
  // does (a1.20 seq 23 / LEÇON 23, a1.22 seq 25 / LEÇON 25). The middot is
  // U+00B7.
  tag: 'A1 · LEÇON 27',
  intro:
    'You already know the words for the body. What stops the sentence working is the shape around them, '
    + 'and it is one shape that covers both saying what hurts and describing how someone looks.',
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,

  grammarAssumed: [
    'Noun gender, and that the little word in front follows it, introduced in a1.03',
    "le, la, l' and les, introduced in a1.04",
    'The full present of avoir, introduced in a1.07',
    'Adjective agreement, the silent plural -s, and the invariable colours marron and orange, introduced in a1.13',
    'The possessive adjectives mon, ma, mes and their determiner slot, introduced in a1.17',
    'The contraction of à with the definite article: à + le = au, à + les = aux, and that à la and à l\' do not contract, introduced in a1.21',
  ],
  grammarIntroduced: [
    'The avoir mal à frame: an inalienable body part taking a definite article where English takes a possessive',
    'The same frame for physical description: avoir + definite article + feature + adjective',
    'That the possessive is excluded from both frames, which bounds the rule a1.17 introduced',
    'Plural agreement on les yeux and les cheveux, both of which are plural-only nouns',
    'Invariable colour adjectives applied to a person: marron and the compound châtain clair',
  ],

  features: ['voiceflash'],

  overview: {
    titleEn: 'The Body',
    subFr: 'Le corps',
    introFr:
      'Vous connaissez déjà les mots du corps. Ce qui bloque la phrase, c\'est la forme autour d\'eux, '
      + 'et c\'est une seule forme pour dire où vous avez mal et pour décrire quelqu\'un.',
    minutes: 26,
    difficulty: 2,
    glyph: 'Corps',
    screens: 125,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: CORPS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en',
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-a1-24-frame',
        desc:
          'The frame, ONE TAKE, ONE VOICE: "Mon dos fait mal." immediately followed by "J\'ai mal au dos." '
          + 'The learner must hear these AS A CONTRAST. Recorded apart they become two performances and the '
          + 'learner compares delivery instead of grammar, which loses the whole scene.',
        clipIds: ['mon-dos-fait-mal', 'jai-mal-au-dos'],
      },
      {
        id: 'rec-a1-24-four',
        desc:
          'The four shapes, ONE TAKE, in this order and adjacent: "à la tête", "au dos", "aux dents", '
          + '"à l\'oreille". This is the only genuinely audible distinction in the lesson and the whole '
          + 'listening mission rests on the four being separable by ear in a single voice.',
        clipIds: ['a-la-tete', 'au-dos', 'aux-dents', 'a-l-oreille'],
      },
      {
        id: 'rec-a1-24-parts',
        desc:
          'The fourteen parts, each with its article, read at an even pace. NEVER record a part without its '
          + 'article: the article is what the rest of the lesson runs on and a bare noun teaches the wrong '
          + 'storage. "les yeux" is [lay ZYUH], WITH the liaison, which is the decision this lesson took '
          + 'against fr.a1.mots-essentiels.002 and must not be silently normalised back.',
        clipIds: THE_FOURTEEN.map((p) => p.bare),
      },
      {
        id: 'rec-a1-24-look',
        desc:
          'The describing frame: "J\'ai les yeux bleus." and "Elle a les cheveux longs." Adjacent in one take '
          + 'so the shared shape is audible across two different people.',
        clipIds: ['jai-les-yeux-bleus', 'elle-a-les-cheveux-longs'],
      },
      {
        id: 'rec-a1-24-invariable',
        desc:
          'ADJACENT IN THE SAME TAKE, and this constraint cannot be recovered later: "les yeux bleus" then '
          + '"les yeux marron". The teaching is that the second adds nothing where the first added an s, and '
          + 'the learner needs both side by side to trust that the sound is identical.',
        clipIds: ['les-yeux-bleus', 'les-yeux-marron'],
      },
    ],
  },
};

/* ─── Handover ─────────────────────────────────────────────────────────────*/

export const CORPS_ITEM_IDS = ITEM_IDS;
export const CORPS_SPEAK_IDS = SPEAK_IDS;
export const CORPS_DICTATION_IDS = DICTATION_IDS;
export const CORPS_TRANCHES = DECK_TRANCHE;
export const CORPS_PART_IDS = PART_IDS;
export const CORPS_SECTION_IDS = SECTIONS.map((s) => (s as { id?: string }).id ?? '');
export const CORPS_ACT_IDS = ACTS.map((a) => a.id);
export const CORPS_DRILL_IDS = DRILLS.map((d) => d.id);
export const CORPS_TRIGGER_IDS = ERROR_TRIGGERS.map((t) => t.id);
export const CORPS_SHEET_IDS = SHEETS.map((s) => s.id);
/** The rounds, in order, with the drill each one actually fires. */
export const CORPS_ROUND_FIRST_TARGET = (
  SECTIONS.find((s) => s.type === 'quiz') as { rounds?: { id: string; targets?: string[] }[] }
).rounds!.map((r) => ({ round: r.id, firstTarget: r.targets?.[0] ?? null }));
export const CORPS_HANDOVER_NEXT_FREE_ID = 'fr.a1.corps.300';
