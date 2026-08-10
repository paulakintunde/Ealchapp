// a1.20.l1 "Les mots interrogatifs": the lesson body.
//
// Reads every French string, respelling and gloss from interrogatifs-corpus.ts
// and restates none of them. Before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THE HERO IS A tapTable WITH A COLUMN THAT REPEATS. s04-hero puts the seven
// openers in the left column and the SAME FOUR WORDS in the right column, seven
// times, byte for byte. That repetition is not padding: it is the entire claim
// of the lesson made visible in one screen, and it only works if the learner can
// see all seven rows at once. Seven rows of two short cells fit a Pixel 6.
// `tapTable` is NOT in `ownsLayout()` (LessonPager.tsx:162) so it renders inside
// a scrolling page, which is why every cell here is three words or fewer and the
// teaching lives in the detail modal, which is a card and can hold prose.
//
// The batch, the merge and the test all assert that ONE section carries all
// seven words with an identical tail. Split across two missions it becomes two
// unremarkable tables and the reframe has nowhere to live.
//
// THE quel TABLE HAS A SOUND COLUMN AND THE POINT IS THAT IT NEVER CHANGES.
// s09-quel-table is four rows by three columns: the written form, the noun, and
// the respelling. The third column is [KEHL] four times. A learner who does not
// believe it can tap every row and hear the same word, which is why the audio is
// on every row rather than on the section.
//
// où AGAINST ou IS A PAIR, SO IT GETS TWO COLUMNS ON ONE SCREEN. s07-ouou. The
// teaching is that the ear cannot help and only the accent can, and that is not
// visible unless both are on the same screen at the same moment.
//
// NO groupDrill CARRIES `size`. A groupDrill owns the viewport at `xl` and not
// otherwise, which is true, and `xl` is unusable here: density.logic.ts reads it
// as a TWELVE-WORD CAP ON EVERY STRING IN THE SECTION and every check in this
// lesson carries a `why` that has to teach rather than name. a1.13 and a1.17
// both made the same call and both shipped. The cost is that the drills scroll.
//
// NO IMAGE IS AUTHORED. `imageRef` resolves through a statically enumerated
// registry in `lessonImages.ts`, `lesson-contract.test.ts` does NOT check it
// despite a comment in schema.ts claiming a publish-time check, and an
// unregistered ref draws a blank box with nothing going red. The brief also
// warns against inventing a question-builder widget: no section type provides
// one and an authored field no component reads renders nothing. There is no
// image and no widget, and the batch asserts there is neither.
//
// ── What listening can and cannot carry here ──────────────────────────────
//
// `listenChoose` is much weaker in this lesson than it looks and it is used
// twice, not more. où and ou are homophones. All four shapes of quel are
// homophones. Those are the two most interesting distinctions in the lesson and
// THE EAR CANNOT REACH EITHER. What it can do is qui against que, which is /ki/
// against /kə/, and quand against comment in ordinary speech.
//
// s14-listening says out loud that the quel forms are indistinguishable, because
// a learner who is not told that spends months concluding something untrue about
// their own hearing. The batch, the merge and the test all assert that no
// listenChoose question anywhere separates où from ou or one quel form from
// another.
//
// ── The dictée, and why it is these five ──────────────────────────────────
//
// `dicteeMode` switches to WORD mode above DICTEE_LETTER_LIMIT letters, and word
// mode hands the learner each whole word as a pre-spelled tile. Tapping a tile
// marked `quel` is not choosing between quel and quelle, which is the thing act
// 3 teaches. Every target is short enough to stay in LETTERS mode and each was
// checked through the real `dicteeMode`. See DICTATION_IDS in the corpus file
// for the two rows that measured into word mode and were withdrawn.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { INTERROGATIFS_TERMS, REFRAME, REFRAME_ADJUSTMENTS } from './interrogatifs-terms.ts';
import {
  AUTHORED_PHRASE_IDS, BORROWED_FRAME, HERO, HERO_IDS, HERO_TAIL, QUEL_FORMS, THE_SEVEN,
  enOf, frOf, heroSub, heroTailSub, roleIds, sub,
} from './interrogatifs-corpus.ts';

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

/** The eight headword cards: the seven the build request asks for, plus quoi,
 *  which is the same word as que standing somewhere else. All imported. */
const HEADWORDS = [
  'fr.sons.questions.001', // qui
  'fr.sons.questions.002', // que
  'fr.sons.questions.003', // quoi
  'fr.sons.questions.004', // où
  'fr.sons.questions.005', // quand
  'fr.sons.questions.006', // comment
  'fr.sons.questions.007', // pourquoi
  'fr.sons.questions.008', // combien
];

/** The quel paradigm as headword cards, all four, all imported, all repaired to
 *  one respelling. Named individually rather than counted, because the two
 *  plurals are exactly the cells a coverage count cannot miss. */
const QUEL_HEADWORDS = [
  'fr.sons.questions.010', // quel
  'fr.sons.questions.011', // quelle
  'fr.sons.questions.031', // quels
  'fr.sons.questions.032', // quelles
];

/** The frame, borrowed from a1.19 which has not been built, and the two blocks
 *  built on it. The last two are authored: neither exists in this theme. */
const FRAME_CARDS = [
  'fr.sons.questions.014', // est-ce que
  ...AUTHORED_PHRASE_IDS, // qu'est-ce que, qu'est-ce qui
];

/** The seven hero rows. One tail, seven openers, and the tail never moves. */
const HERO_ROW_IDS = HERO_IDS;

/** The scene's two questions, one word apart. */
const SCENE_IDS = roleIds('scene');

/** Six answers, one per word, each implying exactly one question. The only
 *  material in the lesson that tests meaning rather than form. */
const ANSWER_IDS = roleIds('answer');

/** que and quoi in three positions. The third is the imported phrase. */
const QUE_POSITION_IDS = [...roleIds('que-position'), 'fr.sons.questions.045'];

/** qu'est-ce qui against qu'est-ce que. One recognition card and no drill. */
const SUBJECT_OBJECT_IDS = [...roleIds('qui-que-subject'), ...roleIds('qui-que-object')];

/** où against ou, and the two published headwords that already carry the same
 *  respelling in one theme. */
const OU_PAIR_IDS = [...roleIds('ou-pair'), 'fr.sons.accents.032', 'fr.sons.accents.031'];

/** combien de against combien d'. */
const DE_PAIR_IDS = [...roleIds('de-pair'), 'fr.sons.questions.009'];

/** The four quel cells, and the two published nouns whose gender the learner
 *  can check. Neither noun is authored. */
const QUEL_CELL_IDS = roleIds('quel-cell');
const QUEL_NOUN_IDS = ['fr.a1.deplacements.001', 'fr.a1.deplacements.055'];

/** The bare frame, once, with nothing in front of it. */
const FRAME_ID = roleIds('frame')[0];

/** parce que, which is the answer form pourquoi takes. A question word with no
 *  answer form is half a lesson, and this is the only one of the seven whose
 *  answer has a grammar of its own. */
const PARCE_QUE_ID = 'fr.sons.mots-essentiels.036';

/** The words and the frame surviving outside anything this lesson wrote. Every
 *  one is a published sentence, so the learner sees the rule firing in French
 *  nobody arranged for them. */
const IN_THE_WILD = [
  'fr.a1.questions.035', // Où est-ce que tu habites ?           the frame, published
  'fr.a1.questions.042', // Pourquoi est-ce que tu es en retard ? the frame with pourquoi
  'fr.a1.questions.030', // Est-ce que le train part à midi ?     the frame, bare
  'fr.a1.questions.031', // Où est la gare ?
  'fr.a1.questions.022', // Quand commence le cours ?
  'fr.a1.questions.050', // Comment vas-tu ?
  'fr.a1.questions.001', // Comment vous appelez-vous ?
  'fr.a1.questions.003', // Qui es-tu ?
  'fr.a1.questions.016', // Avec qui vis-tu ?
  'fr.a1.questions.011', // Combien de frères et sœurs as-tu ?
  'fr.a1.questions.018', // Combien d'enfants avez-vous ?
  'fr.a1.questions.029', // Combien de temps dure le film ?
  'fr.a1.questions.009', // Qu'est-ce que tu fais dans la vie ?
  'fr.a1.questions.089', // Que fais-tu le matin ?
  'fr.a1.questions.209', // Qu'est-ce qui se passe ici ?
  'fr.a1.questions.004', // Quel âge avez-vous ?
  'fr.a1.questions.026', // Quel jour sommes-nous ?
  'fr.a1.questions.021', // Quelle heure est-il ?
  'fr.a1.questions.076', // Quels vêtements portes-tu ce soir ?
  'fr.a1.questions.299', // Quelles langues parles-tu couramment ?
  'fr.a1.questions.077', // Est-ce que tu préfères le thé ou le café ?
  'fr.sons.questions.019', // quelle heure est-il ?    a1.12 shipped this frozen
  'fr.sons.questions.020', // à quelle heure ?         and this
  'fr.sons.questions.048', // c'est quoi ?
];

const ITEM_IDS = [
  ...new Set([
    ...HEADWORDS, ...QUEL_HEADWORDS, ...FRAME_CARDS, ...HERO_ROW_IDS, ...SCENE_IDS,
    ...ANSWER_IDS, ...QUE_POSITION_IDS, ...SUBJECT_OBJECT_IDS, ...OU_PAIR_IDS,
    ...DE_PAIR_IDS, ...QUEL_CELL_IDS, ...QUEL_NOUN_IDS, FRAME_ID, PARCE_QUE_ID,
    ...IN_THE_WILD,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission.
 *
 *  NOT ONE BARE QUESTION WORD IS IN HERE, and that is a teaching decision. « Où »
 *  on its own is not a question and cannot be right or wrong; the whole lesson
 *  is about what it is put in FRONT of. So the spoken mission is whole questions
 *  only: the seven hero rows, the two scene lines, the four quel cells, the two
 *  pairs, the three positions of que and the bare frame. Every one carries
 *  voiceflash, verified against the database in the batch and against the
 *  post-merge item set in the merge. */
const SPEAK_IDS = [
  ...HERO_ROW_IDS, ...SCENE_IDS, ...QUEL_CELL_IDS,
  ...roleIds('ou-pair'), ...roleIds('de-pair'), ...roleIds('que-position'),
  ...SUBJECT_OBJECT_IDS, FRAME_ID,
];

/** Measured, not chosen. See DICTATION_IDS in interrogatifs-corpus.ts for the
 *  two rows that landed in word mode and were withdrawn. */
import { DICTATION_IDS } from './interrogatifs-corpus.ts';

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and question words are the sharpest material on the track for it,
 * because ASKING THE WRONG ONE GETS A CONFIDENT, USEFUL-SOUNDING ANSWER.
 *
 * You are at Gare de Lyon and you want to know WHEN the train leaves. You reach
 * for the first question word you are sure of and ask where it leaves from. The
 * answer is a platform number, delivered helpfully and correctly. You thank the
 * man, you go and stand on platform 7, and the train goes at 14:12 without you.
 *
 * Nobody was wrong. Nobody was corrected. The sentence was well formed, the
 * answer was accurate, and the whole exchange was friendly. That is what makes
 * it an A1 scene rather than a trap card: the error is undetectable from the
 * inside, and the cost is real.
 *
 * The weaker beat, and it is deliberately not the one: « Combien enfants ? »
 * without the de. It is understood, it merely marks a beginner, and nothing
 * happens. A beat where nothing happens is a trap card.
 *
 * The choice beat is `Où est-ce que` against `Quand est-ce que`, which are the
 * lesson's own authored pair, so the beat, the hero table, the drill and the
 * quiz are all the same two rows.                                            */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Gare de Lyon, a Friday, and the departures board is showing about forty trains. Yours is one of them.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You know the word for the train and you know the word for the station. What you want to know is what time it goes.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The man at the information desk',
    fr: 'Bonjour ! Je vous écoute.',
    en: 'Hello! How can I help?',
    stage: 'He has done this four hundred times today and he is still pleasant about it.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You want the departure time. Both of these are real questions. Which one asks for it?',
    options: [
      {
        fr: frOf(SCENE_IDS[0]),
        respell: sub('où'),
        en: 'the first question word most people are sure of',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf(SCENE_IDS[1]),
        respell: sub('quand'),
        en: 'the one that asks about time',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Now watch what the other one does, because it is the one you reach for under pressure.',
      breaks: 'That is a real question and he will answer it properly. Watch what he answers.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: frOf(SCENE_IDS[0]),
    en: '(This asks where it leaves from, which is not what you wanted to know)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The man at the information desk',
    fr: 'Voie 7. Tout droit, puis à gauche.',
    en: 'Platform 7. Straight ahead, then left.',
    stage: 'He points. He is right, he is helpful, and he has answered exactly what he was asked.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'He answered the question you asked',
    // 33 words. The shipped scene breaks run 24 to 40 here.
    body: 'Nothing went wrong. Your sentence was correct, his answer was correct, and you now know something true that you did not need. The word at the front chose which fact you got.',
    wrong: {
      fr: frOf(SCENE_IDS[0]),
      ipa: '/u ɛs kə lə tʁɛ̃ paʁ/',
      respell: `[oo ehs-kuh luh trahⁿ PAR]`,
      en: 'Where does the train leave from',
    },
    right: {
      fr: frOf(SCENE_IDS[1]),
      ipa: '/kɑ̃ ɛs kə lə tʁɛ̃ paʁ/',
      respell: `[kahⁿ ehs-kuh luh trahⁿ PAR]`,
      en: 'When does the train leave',
    },
    coach: `${REFRAME} Four words of those two sentences are the same. The first one is not.`,
    // Audio-first: the ear gets the two lines before the eye can read the gloss.
    // `autoplay` is NOT set: it is declared in schema.ts and implemented in no
    // component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-20-pair' },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'On platform 7, at 14:14',
    fr: frOf(SCENE_IDS[1]),
    en: 'When does the train leave?',
    stage: 'One word different. It is the only word in either sentence that was ever carrying the question.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Seven words decide which answer you get. The next half hour is about which one to reach for, and about the frame that carries all seven.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: one slot, seven words ──────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Right Answer To The Wrong Question',
    frSub: 'Où ou quand ?',
    render: 'screens',
    layer: 'core',
    terms: ['firstWordCarries'],
    say: {
      text: 'One word wrong, a helpful and correct answer, and a train that leaves without you. Watch which word.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'The information desk at Gare de Lyon, under a departures board',
      city: 'Paris',
      time: 'Friday afternoon',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} Which word goes in front is the next half hour.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is a move rather than a list.',
    goals: [
      { t: 'Ask any question you can think of', s: 'One frame takes all seven words, and you already know the sentences that go behind it.' },
      { t: 'Pick the word that gets the answer you want', s: 'Seven words, seven different facts, and the rest of the sentence does not move.' },
      { t: 'Use quel in all four shapes', s: 'The one word here that is not like the others. It leans on a thing and takes that thing\'s shape.' },
      { t: 'Tell où from ou, and que from quoi', s: 'Two distinctions your ear cannot reach. One is an accent and the other is a position.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-frame',
    // FOUND ON A DEVICE, and by nothing else. When a1.19 landed mid-build the
    // card body, the term and grammarAssumed were all reconciled to credit it
    // rather than borrow from it, and this TITLE was missed. The mission list
    // and the act interstitial both draw it, so the learner met a mission called
    // "One Frame, And It Is Borrowed" whose first card says they already have
    // the frame. No test could see it: the assertion looks for the credit in the
    // section, and the body carried it.
    title: 'One Frame, And You Already Have It',
    frSub: 'Est-ce que',
    hint: 'Five cards before any of the seven words.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['frameYouAlreadyHave', 'firstWordCarries'],
    sheetId: 'sheet.a1.20.words',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-frame' },
    say: 'Five cards before any table, because this move is what the table is for.',
    cards: [
      {
        // THE CREDIT CARD, and it names the lesson by name the way a1.09 opens
        // by naming a1.08. a1.19 landed mid-build and SHIPPED the est-ce que
        // block, so this is no longer borrowed: it is the thing the learner
        // just spent a lesson on, doing a second job. Its own handover asks for
        // exactly this. The batch, the merge and the test all assert that this
        // is the only frame in the lesson and that this card credits a1.19.
        label: 'the frame',
        head: 'You already have this one',
        fr: BORROWED_FRAME,
        sub: `${sub('est-ce que')} · from the yes-no lesson`,
        body: 'The last lesson gave you this for yes and no questions. It has not changed. Put a word in front of it and the answer stops being yes or no, which is the whole of the next half hour.',
      },
      {
        label: 'with nothing in front',
        head: 'On its own it asks yes or no',
        fr: frOf(FRAME_ID),
        sub: `${enOf(FRAME_ID)} · the frame with nothing added`,
        body: `A whole question, and the answer is yes or no. ${frOf('fr.a1.questions.030')} is the same shape, published. Everything this lesson does is putting a word in front of it.`,
      },
      {
        label: 'the move',
        head: 'Put your word in front of it',
        fr: frOf(HERO_ROW_IDS[0]),
        sub: `${enOf(HERO_ROW_IDS[0])} · ${REFRAME}`,
        body: 'That is the whole lesson. The word says which fact you want and the frame carries it. Nothing behind the frame has to change when the word does.',
      },
      {
        // THE TWO ADJUSTMENTS, NAMED ON THE SAME SCREEN AS THE REFRAME. A rule a
        // learner disproves alone is a language they decide is arbitrary, and
        // both of these turn up within a week: every course opens with
        // « Qu'est-ce que c'est ? » and a1.12 has already shipped
        // « Quelle heure est-il ? ».
        label: 'the two adjustments',
        head: 'Two of the seven need one change',
        body: 'Que does not stand in front of the frame, it joins it, and the two run together. And quel brings a thing with it. Both still go in the same place. Only the size of what you put there changes.',
      },
      {
        label: 'in the wild',
        head: 'The corpus was doing this already',
        fr: frOf('fr.a1.questions.035'),
        sub: `${enOf('fr.a1.questions.035')} · nobody arranged this for you`,
        body: `${REFRAME} This sentence was published long before this lesson existed, and so was the one about being late. The move is not a teaching device.`,
      },
    ],
  },

  {
    // THE HERO. SEVEN ROWS, AND THE RIGHT-HAND COLUMN IS THE SAME FOUR WORDS
    // SEVEN TIMES. This is the screen the whole lesson is built to reach and the
    // one the test must assert: one section, all seven words, one identical
    // tail. Split across two missions it becomes two unremarkable tables.
    //
    // Every left cell is three words or fewer, because tapTable is not in
    // ownsLayout() and this renders inside a scrolling page. The teaching is in
    // the detail modal, which is a card and can hold prose.
    type: 'tapTable',
    id: 's04-hero',
    title: 'Seven Questions, One Sentence',
    frSub: 'Un seul cadre',
    layer: 'core',
    terms: ['firstWordCarries', 'frameYouAlreadyHave'],
    sheetId: 'sheet.a1.20.words',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-20-hero' },
    say: `${REFRAME} Read down the right-hand column. It never changes. Tap any row to hear the whole question.`,
    cols: ['what you put in front', 'and this never moves'],
    rows: HERO.map((h) => ({
      cells: [h.opener, HERO_TAIL],
      say: h.fr,
      detail: {
        title: `${h.word}: ${h.en.replace(/\?$/, '')}`,
        body: `${h.fr} ${h.en} ${h.notes}${
          h.needsPiece
            ? ` It brings ${h.needsPiece} with it, and the whole thing still goes in the same slot.`
            : ' Nothing but the word itself goes in front.'
        }`,
        say: h.fr,
      },
    })),
  },

  /* ── Act 2: the five that stand alone ──────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's05-five',
    title: 'Five That Never Change',
    frSub: 'où, quand, comment, pourquoi, qui',
    hint: 'Five cards, one per word, and none of them has a second shape.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['firstWordCarries'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-five' },
    say: 'Five words with no endings, no agreement and no second form. Two missions and they are yours.',
    cards: [
      {
        label: 'where',
        head: 'où',
        fr: frOf('fr.a1.questions.031'),
        sub: `${sub('où')} · ${enOf('fr.a1.questions.031')}`,
        body: 'The accent is not decoration. Without it the same three letters are the word for or, and the two sound identical. That is act two of this lesson and it is coming.',
      },
      {
        label: 'when',
        head: 'quand',
        fr: frOf('fr.a1.questions.022'),
        sub: `${sub('quand')} · ${enOf('fr.a1.questions.022')}`,
        body: 'The d on the end is silent and the vowel is nasal, so this is one sound rather than two. It is the word the man at the station was never asked.',
      },
      {
        // THE COMMENT CARD. The unit's canDo omits this word and this lesson
        // teaches it anyway. It is asserted by name in the batch, the merge and
        // the test precisely so a later reader cannot "correct" the lesson into
        // the unit string. See the corpus header.
        label: 'how',
        head: 'comment',
        fr: frOf('fr.a1.questions.050'),
        sub: `${sub('comment')} · ${enOf('fr.a1.questions.050')}`,
        body: 'You have been saying this since the very first lesson, inside a greeting nobody took apart. Here it is as a word you can use anywhere. The t on the end is silent.',
      },
      {
        label: 'why',
        head: 'pourquoi',
        fr: frOf('fr.a1.questions.042'),
        sub: `${sub('pourquoi')} · ${enOf('fr.a1.questions.042')}`,
        body: 'The only one of the seven whose answer has a word of its own. Ask with pourquoi and you get parce que back, which is act five.',
      },
      {
        label: 'who',
        head: 'qui',
        fr: `${frOf('fr.a1.questions.003')} · ${frOf('fr.a1.questions.016')}`,
        sub: `${sub('qui')} · ${enOf('fr.a1.questions.003')} · ${enOf('fr.a1.questions.016')}`,
        body: 'When the person is the one doing something, qui goes straight in front. When they are not, a small word goes in front of it: avec qui, à qui, pour qui.',
      },
      {
        label: 'all five at once',
        head: 'Nothing here has a second shape',
        fr: `${frOf('fr.a1.questions.001')}`,
        sub: `${enOf('fr.a1.questions.001')} · one form each, always`,
        body: `${REFRAME} No endings, no agreement, nothing to check before you say them. The word that does have a second shape is the next act, and it is only one word out of seven.`,
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06-choose',
    title: 'Which Word Gets The Answer?',
    frSub: 'Quel mot choisir ?',
    layer: 'core',
    terms: ['firstWordCarries'],
    say: 'Four decisions. Each one is about which fact you want rather than about how to build the sentence.',
    groups: [
      {
        label: 'A time',
        items: [
          { fr: frOf(HERO_ROW_IDS[1]), itemId: HERO_ROW_IDS[1], respell: heroSub('quand'), en: enOf(HERO_ROW_IDS[1]) },
          { fr: frOf('fr.a1.questions.022'), itemId: 'fr.a1.questions.022', en: enOf('fr.a1.questions.022') },
        ],
        check: {
          q: 'You are at a station and you want the departure time. Which word goes in front?',
          opts: ['où', 'quand', 'comment', 'combien'],
          correct: 1,
          why: 'quand. This is the exact decision from the opening scene and it is worth making twice on purpose. Où is a real question and gets a real answer, which is why nothing about saying it feels wrong.',
        },
      },
      {
        label: 'A place',
        items: [
          { fr: frOf(HERO_ROW_IDS[0]), itemId: HERO_ROW_IDS[0], respell: heroSub('où'), en: enOf(HERO_ROW_IDS[0]) },
          { fr: frOf('fr.a1.questions.031'), itemId: 'fr.a1.questions.031', en: enOf('fr.a1.questions.031') },
        ],
        check: {
          q: 'You are lost and you want to know where the station is. Which word?',
          opts: ['quand', 'comment', 'où', 'pourquoi'],
          correct: 2,
          why: 'où, with the accent. Without it the word means or, and the two are one sound, so nothing you can hear will ever tell you which one somebody said.',
        },
      },
      {
        label: 'A reason',
        items: [
          { fr: frOf(HERO_ROW_IDS[2]), itemId: HERO_ROW_IDS[2], respell: heroSub('pourquoi'), en: enOf(HERO_ROW_IDS[2]) },
          { fr: frOf('fr.a1.questions.042'), itemId: 'fr.a1.questions.042', en: enOf('fr.a1.questions.042') },
        ],
        check: {
          q: 'Somebody is late and you want to know the reason. Which word?',
          opts: ['pourquoi', 'comment', 'quand', 'qui'],
          correct: 0,
          why: 'pourquoi. It is the only one of the seven that comes back with a word of its own attached: the answer starts parce que, which is act five of this lesson.',
        },
      },
      {
        // A groupDrill control page carries items: [] explicitly and no size.
        label: 'The whole move',
        items: [],
        check: {
          q: 'You have a question word and a sentence you know. What goes between them?',
          opts: ['nothing at all', 'est-ce que', 'a small pause', 'the verb, moved to the front'],
          correct: 1,
          why: `est-ce que. ${REFRAME} The other answers describe ways of asking that exist and that a different lesson owns. This one takes all seven words with nothing to remember.`,
        },
      },
    ],
  },

  {
    // où AGAINST ou, TWO COLUMNS ON ONE SCREEN. The teaching is that the ear
    // cannot help and only the accent can, and that is invisible unless both are
    // on the same screen at the same moment. Both headwords are PUBLISHED with
    // byte-identical respellings in one theme, which is stronger evidence than
    // anything this lesson could have authored.
    type: 'tapTable',
    id: 's07-ouou',
    title: 'One Sound, Two Words',
    frSub: 'où · ou',
    layer: 'core',
    terms: ['onlyThePageKnows'],
    sheetId: 'sheet.a1.20.words',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-20-ouou' },
    say: 'Tap left, then tap right. They are the same recording of the same sound. Only the page separates them.',
    cols: ['où, with the accent', 'ou, without it'],
    rows: [
      {
        cells: ['where', 'or'],
        say: 'où, ou',
        detail: {
          title: 'Two words, one sound',
          body: `${frOf(OU_PAIR_IDS[0])} ${enOf(OU_PAIR_IDS[0])} ${frOf(OU_PAIR_IDS[1])} ${enOf(OU_PAIR_IDS[1])} Both are ${sub('où')} out loud. The accent is the whole difference and it is on the page only.`,
          say: `${frOf(OU_PAIR_IDS[0])} ${frOf(OU_PAIR_IDS[1])}`,
        },
      },
      {
        cells: ['asks something', 'offers a choice'],
        say: 'où, ou',
        detail: {
          title: 'What each one does',
          body: `${frOf('fr.a1.questions.077')} ${enOf('fr.a1.questions.077')} That ou is the choosing one and it was published with a note saying so. The accents lesson already taught you the mark itself.`,
          say: frOf('fr.a1.questions.077'),
        },
      },
      {
        cells: ['one is a question', 'one joins two things'],
        say: 'où, ou',
        detail: {
          title: 'How you will actually tell them apart',
          body: 'By where they sit. Où opens a question. Ou sits between two things you are choosing from. Nothing in the sound will ever help, so stop listening for it.',
          say: `${frOf('fr.a1.questions.031')} ${frOf(OU_PAIR_IDS[1])}`,
        },
      },
    ],
  },

  /* ── Act 3: quel takes a noun ──────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-quel',
    title: 'The One That Is Not Like The Others',
    frSub: 'quel',
    hint: 'Four cards on the only word here with more than one shape.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['quelTakesANoun', 'onlyThePageKnows'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-quel' },
    say: 'Six of the seven stand alone. This one has to lean on something, and it takes that thing\'s shape.',
    cards: [
      {
        label: 'it needs a thing',
        head: 'quel cannot stand alone',
        fr: frOf(QUEL_CELL_IDS[0]),
        sub: `${sub('quel')} · ${enOf(QUEL_CELL_IDS[0])}`,
        body: 'Où on its own is a question. Quel on its own is not. It has to have a thing straight behind it, and once it does, it copies that thing.',
      },
      {
        label: 'you have done this before',
        head: 'It agrees, the way a colour does',
        fr: `${frOf(QUEL_CELL_IDS[0])} · ${frOf(QUEL_CELL_IDS[1])}`,
        sub: `${sub('le train')} · ${sub('la valise')}`,
        body: 'A train is the un kind and a valise is the une kind, and you can check both on cards you already have. This is the fourth time you have met agreement and it is the easiest of the four.',
      },
      {
        // THE TWO CARDS a1.12 SHIPPED FROZEN. Its own grammarIntroduced says so
        // in as many words: "Quelle heure est-il and Vous avez l'heure, as fixed
        // question chunks". Both are already in the seed, so the learner has met
        // them in the flashcard hub without ever being told why the second word
        // carries an e. This card is that promise being kept.
        label: 'you have met it frozen',
        head: 'Two you already say',
        fr: `${frOf('fr.sons.questions.019')} · ${frOf('fr.sons.questions.020')}`,
        sub: `${enOf('fr.sons.questions.019')} · ${enOf('fr.sons.questions.020')}`,
        body: `The time lesson gave you these as lumps you did not take apart. ${frOf('fr.a1.questions.004')} is the same word in front of a different kind of thing. Now the spelling has a reason.`,
      },
      {
        label: 'and it is all silent',
        head: 'Four spellings, one sound',
        fr: QUEL_FORMS.join(' · '),
        sub: `${sub('quel')} · all four, every time`,
        body: 'The e and the s are written and never said. This is the same idea the colours lesson called endings you write and never say, arriving on a word where it opens the question.',
      },
    ],
  },

  {
    // THE quel TABLE. Four rows, and the third column is [KEHL] four times.
    // That repetition IS the teaching, so the audio is on every ROW rather than
    // on the section: a learner who does not believe it can tap all four and
    // hear the same word. The four shipped cards used to carry TWO respellings
    // (KEL, KEL, KEHL, KEHL), which told a learner the plural sounds different.
    // It does not. See RESPELL_REPAIRS.
    type: 'tapTable',
    id: 's09-quel-table',
    title: 'Four Shapes, One Sound',
    frSub: 'quel · quelle · quels · quelles',
    layer: 'core',
    terms: ['quelTakesANoun', 'onlyThePageKnows'],
    sheetId: 'sheet.a1.20.words',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-20-quel' },
    say: 'Read down the last column. It is the same word four times. Tap every row if you do not believe it.',
    cols: ['written', 'in front of', 'said'],
    rows: QUEL_CELL_IDS.map((id, i) => ({
      cells: [QUEL_FORMS[i], [ 'un train', 'une valise', 'des trains', 'des valises' ][i], sub('quel')],
      say: frOf(id),
      detail: {
        title: `${QUEL_FORMS[i]}: ${['one un thing', 'one une thing', 'several un things', 'several une things'][i]}`,
        body: `${frOf(id)} ${enOf(id)} ${[
          'A train is the un kind, so nothing is added.',
          'A valise is the une kind, so an e arrives. It is silent.',
          'More than one, so an s arrives. It is silent too.',
          'Both at once, and both endings are silent. Four spellings and one sound.',
        ][i]}`,
        say: frOf(id),
      },
    })),
  },

  {
    type: 'groupDrill',
    id: 's10-quel-sort',
    title: 'Which Shape Does It Take?',
    frSub: 'Accorder quel',
    layer: 'core',
    terms: ['quelTakesANoun'],
    say: 'Look at the thing behind it, not at the question. That is the only thing that decides.',
    groups: [
      {
        label: 'One un thing',
        items: [
          { fr: frOf(QUEL_CELL_IDS[0]), itemId: QUEL_CELL_IDS[0], en: enOf(QUEL_CELL_IDS[0]) },
          { fr: frOf('fr.a1.deplacements.001'), itemId: 'fr.a1.deplacements.001', respell: sub('le train'), en: enOf('fr.a1.deplacements.001') },
        ],
        check: {
          q: 'You want to ask which train. Which shape goes in front of it?',
          opts: ['quelle', 'quel', 'quels', 'quelles'],
          correct: 1,
          why: 'quel. Le train, so the un kind, so nothing on the end. Out loud all four options are the same word, which is why this question can only ever be answered by looking at the train.',
        },
      },
      {
        label: 'One une thing',
        items: [
          { fr: frOf(QUEL_CELL_IDS[1]), itemId: QUEL_CELL_IDS[1], en: enOf(QUEL_CELL_IDS[1]) },
          { fr: frOf('fr.a1.deplacements.055'), itemId: 'fr.a1.deplacements.055', respell: sub('la valise'), en: enOf('fr.a1.deplacements.055') },
        ],
        check: {
          q: 'You want to ask which suitcase. Which shape goes in front of it?',
          opts: ['quels', 'quel', 'quelle', 'quelles'],
          correct: 2,
          why: 'quelle. La valise, so the une kind, so an e on the end that you write and never say. A learner who tries to hear this difference will be listening for a very long time.',
        },
      },
      {
        label: 'Several things',
        items: [
          { fr: frOf(QUEL_CELL_IDS[2]), itemId: QUEL_CELL_IDS[2], en: enOf(QUEL_CELL_IDS[2]) },
          { fr: frOf(QUEL_CELL_IDS[3]), itemId: QUEL_CELL_IDS[3], en: enOf(QUEL_CELL_IDS[3]) },
        ],
        check: {
          q: 'You want to ask which suitcases, meaning more than one. Which shape?',
          opts: ['quelles', 'quels', 'quelle', 'quel'],
          correct: 0,
          why: 'quelles. Une valise is the une kind and there are several, so both endings arrive and both are silent. This is the cell most tables print and nobody reads.',
        },
      },
      {
        label: 'The shipped ones',
        items: [
          { fr: frOf('fr.a1.questions.021'), itemId: 'fr.a1.questions.021', en: enOf('fr.a1.questions.021') },
          { fr: frOf('fr.a1.questions.026'), itemId: 'fr.a1.questions.026', en: enOf('fr.a1.questions.026') },
          { fr: frOf('fr.a1.questions.076'), itemId: 'fr.a1.questions.076', en: enOf('fr.a1.questions.076') },
          { fr: frOf('fr.a1.questions.299'), itemId: 'fr.a1.questions.299', en: enOf('fr.a1.questions.299') },
        ],
        check: {
          q: 'Those four use all four shapes. What decides which one each sentence gets?',
          opts: [
            'How polite the question is',
            'Whether the answer is a number',
            'The thing straight after it',
            'Whether it opens the sentence',
          ],
          correct: 2,
          why: 'The thing straight after it. Heure is the une kind, jour is the un kind, vêtements and langues are plurals of each. Nothing about the question or the answer comes into it.',
        },
      },
    ],
  },

  /* ── Act 4: que, quoi, and where they sit ──────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's11-que',
    title: 'One Word, Three Places',
    frSub: 'que · quoi',
    hint: 'Four cards on the word that moves.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['firstWordCarries', 'frameYouAlreadyHave'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-que' },
    say: 'Three sentences, one meaning. The word for what is in a different place in each of them.',
    cards: [
      {
        label: 'in the frame',
        head: "qu'est-ce que",
        fr: frOf(QUE_POSITION_IDS[0]),
        sub: `${sub("qu'est-ce que")} · ${enOf(QUE_POSITION_IDS[0])}`,
        body: 'The block you already have, with the word for what bolted onto the front of it. Que joined the frame rather than standing in front, and the two ran together. This is the form to reach for.',
      },
      {
        label: 'at the end',
        head: 'quoi',
        fr: frOf(QUE_POSITION_IDS[1]),
        sub: `${sub('quoi')} · ${enOf(QUE_POSITION_IDS[1])}`,
        body: 'Same question, and the word has moved to the end and changed shape. Que never sits at the end of a sentence; quoi is what it becomes when it does.',
      },
      {
        label: 'in front of the verb',
        head: 'que',
        fr: frOf(QUE_POSITION_IDS[2]),
        sub: `${sub('que')} · ${enOf(QUE_POSITION_IDS[2])}`,
        body: 'The third place, with the verb pulled in front of the person. You will read this far more often than you say it, and it means exactly what the other two mean.',
      },
      {
        label: 'what changes and what does not',
        head: 'The meaning never moved',
        fr: `${frOf('fr.a1.questions.009')}`,
        sub: `${enOf('fr.a1.questions.009')} · one question, three shapes`,
        body: 'All three ask the same thing and all three are correct. Which one somebody picks is about how they are speaking rather than about what they want, and that choice belongs to another lesson.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's12-que-table',
    title: 'Where The Word Sits',
    frSub: 'Trois places',
    layer: 'core',
    terms: ['firstWordCarries'],
    sheetId: 'sheet.a1.20.words',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-20-que' },
    say: 'Three rows, one question. Tap each and listen to how little the meaning moves.',
    cols: ['the word', 'where it is'],
    rows: [
      {
        cells: ["qu'est-ce que", 'joined to the frame'],
        say: frOf(QUE_POSITION_IDS[0]),
        detail: {
          title: 'The one to reach for',
          body: `${frOf(QUE_POSITION_IDS[0])} ${enOf(QUE_POSITION_IDS[0])} Que and the frame ran together. There is always a person or a thing between this block and the verb.`,
          say: frOf(QUE_POSITION_IDS[0]),
        },
      },
      {
        cells: ['quoi', 'at the end'],
        say: frOf(QUE_POSITION_IDS[1]),
        detail: {
          title: 'The one you will hear',
          body: `${frOf(QUE_POSITION_IDS[1])} ${enOf(QUE_POSITION_IDS[1])} The same question with the word at the end. Que cannot sit there, so it becomes quoi. Also ${frOf('fr.sons.questions.048')}`,
          say: `${frOf(QUE_POSITION_IDS[1])} ${frOf('fr.sons.questions.048')}`,
        },
      },
      {
        cells: ['que', 'in front of the verb'],
        say: frOf(QUE_POSITION_IDS[2]),
        detail: {
          title: 'The one you will read',
          body: `${frOf(QUE_POSITION_IDS[2])} ${enOf(QUE_POSITION_IDS[2])} The verb has come in front of the person. ${frOf('fr.a1.questions.089')} is the same shape in a published sentence.`,
          say: `${frOf(QUE_POSITION_IDS[2])} ${frOf('fr.a1.questions.089')}`,
        },
      },
    ],
  },

  {
    // ONE RECOGNITION CARD AND NO DRILL. The brief asks for exactly that and it
    // is right: qu'est-ce qui against qu'est-ce que is a genuine distinction and
    // it sits at the edge of A1. Both example sentences are built on être and
    // avoir and share their noun phrase, so the only thing that moves is which
    // of the two blocks opens the sentence.
    type: 'cardDeck',
    id: 's13-quiqui',
    title: 'One More, To Recognise',
    frSub: "qu'est-ce qui",
    hint: 'Three cards, and nothing here is drilled.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['firstWordCarries'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-que' },
    say: 'Three cards to recognise rather than to produce. You will hear this constantly and it is not tested.',
    cards: [
      {
        label: 'the thing is doing it',
        head: "qu'est-ce qui",
        fr: frOf(SUBJECT_OBJECT_IDS[0]),
        sub: `${sub("qu'est-ce qui")} · ${enOf(SUBJECT_OBJECT_IDS[0])}`,
        body: 'The thing you are asking about is the one doing something, and nothing comes between the block and the verb. That is the whole test.',
      },
      {
        label: 'somebody is doing it to the thing',
        head: "qu'est-ce que",
        fr: frOf(SUBJECT_OBJECT_IDS[1]),
        sub: `${sub("qu'est-ce que")} · ${enOf(SUBJECT_OBJECT_IDS[1])}`,
        body: 'Here there is a person between the block and the verb. Same bag, same question about the bag, and the person is what changed the last word of the block.',
      },
      {
        label: 'the one you already hear',
        head: 'You have met this without noticing',
        fr: frOf('fr.a1.questions.209'),
        sub: `${enOf('fr.a1.questions.209')} · nothing between the block and the verb`,
        body: 'One of the most common questions in spoken French, and it is the qui shape because the thing is the one happening. Recognise it and move on. Nothing here is on the exam.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's14-listening',
    title: 'What Your Ear Can Do',
    frSub: 'À l\'oreille',
    layer: 'core',
    terms: ['onlyThePageKnows'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-20-ear' },
    // EXACTLY ONE REAL EAR CONTRAST EXISTS IN THIS LESSON: qui against que. The
    // other two lines are here to tell the learner, out loud, that their ears
    // are not the problem. No listenChoose question anywhere in the lesson tries
    // to separate où from ou or one quel form from another, and the batch, the
    // merge and the test all assert that.
    say: 'Three pairs. One of them your ear can do and two of them nobody\'s can, and saying so is the point.',
    lines: [
      { fr: 'qui · que', en: 'this pair is real: one is a clear ee sound and the other is not' },
      { fr: `${frOf(OU_PAIR_IDS[2])} · ${frOf(OU_PAIR_IDS[3])}`, en: 'these two are one sound, and only the accent on the page separates them' },
      { fr: QUEL_FORMS.join(' · '), en: 'all four of these are one sound as well. There is nothing to listen for' },
    ],
    questions: [
      {
        q: 'qui and que. How much of the difference can you hear?',
        opts: ['none of it', 'all of it: the vowels are completely different', 'only if the speaker slows down', 'only in writing'],
        correct: 1,
        why: 'All of it. Qui has a clear ee and que has the small unstressed vowel French uses everywhere. This is the one pair in the lesson worth practising, and it is a real difference in the signal.',
      },
      {
        q: 'où and ou, said out loud. What separates them?',
        opts: ['the accent', 'a small pause', 'nothing at all', 'the length of the vowel'],
        correct: 2,
        why: 'Nothing at all. Both published cards carry the same transcription and they are one sound. The accent is on the page and nowhere else, so a recording of one is a recording of the other.',
      },
      {
        q: 'quel, quelle, quels and quelles. How many sounds is that?',
        opts: ['four, one per spelling', 'two, singular and plural', 'one, said four times', 'three, because two are the same'],
        correct: 2,
        why: 'One, said four times. The e and the s are written and never pronounced. If you find yourself listening harder to catch the plural, stop: it is not in the recording and no practice will put it there.',
      },
    ],
  },

  /* ── Act 5: ask and answer ─────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's15-combien',
    title: 'The One That Brings A Word With It',
    frSub: 'combien de',
    hint: 'Four cards, and the idea in the last one is not new.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['deAfterCombien'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-20-combien' },
    say: 'One word, and a small one that comes with it as soon as you name what you are counting.',
    cards: [
      {
        label: 'with a thing',
        head: 'combien de',
        fr: frOf(DE_PAIR_IDS[0]),
        sub: `${sub('combien de')} · ${enOf(DE_PAIR_IDS[0])}`,
        body: 'Name the thing you are counting and de arrives between them. Every time, with no exceptions, and leaving it out is the single most common thing an English speaker does with this word.',
      },
      {
        label: 'in front of a vowel',
        head: "combien d'",
        fr: frOf(DE_PAIR_IDS[1]),
        sub: `${sub("combien d'")} · ${enOf(DE_PAIR_IDS[1])}`,
        body: 'The thing starts with a vowel, so de loses its own and an apostrophe takes the place. Only the first letter of the noun changed between this card and the one before it.',
      },
      {
        label: 'the fifth time',
        head: 'You have watched this four times already',
        fr: `${frOf('fr.a1.questions.018')}`,
        sub: `${enOf('fr.a1.questions.018')} · one pressure, five rules`,
        body: 'Le became l apostrophe. Ma became mon. Ne became n apostrophe. Est-ce que becomes est-ce qu. French will not let two vowel sounds meet, and this is the same refusal again.',
      },
      {
        label: 'in the wild',
        head: 'The corpus does both',
        fr: `${frOf('fr.a1.questions.011')} · ${frOf('fr.a1.questions.029')}`,
        sub: 'a consonant both times, so de keeps its vowel',
        body: `${REFRAME} Those two and the children one differ in exactly one thing: what letter the noun starts with. Nothing else in any of them chose between de and d apostrophe.`,
      },
    ],
  },

  {
    // THE MEANING DRILL, and nothing else in the lesson does this job. Every
    // other check gives a situation and asks for a word, which tests recall of a
    // list. This gives the ANSWER and asks which question produced it, which can
    // only be done by knowing what each word means. The brief is right that it
    // is the best material in the lesson.
    type: 'groupDrill',
    id: 's16-answers',
    title: 'Work Backwards From The Answer',
    frSub: 'Quelle question ?',
    layer: 'core',
    terms: ['firstWordCarries', 'deAfterCombien'],
    say: 'You get the answer and you work out the question. Only one of the seven words could have produced each of these.',
    groups: [
      {
        label: 'A person, a place, a time',
        items: [
          { fr: frOf(ANSWER_IDS[0]), itemId: ANSWER_IDS[0], en: enOf(ANSWER_IDS[0]) },
          { fr: frOf(ANSWER_IDS[1]), itemId: ANSWER_IDS[1], en: enOf(ANSWER_IDS[1]) },
          { fr: frOf(ANSWER_IDS[2]), itemId: ANSWER_IDS[2], en: enOf(ANSWER_IDS[2]) },
        ],
        check: {
          q: 'Somebody answers you: it is behind the station. Which word did you ask with?',
          opts: ['quand', 'où', 'comment', 'qui'],
          correct: 1,
          why: 'où. A place came back, so a place was asked for. This is the only kind of question in the lesson you can check after the fact, and it is why asking the wrong word is so hard to notice.',
        },
      },
      {
        label: 'A reason',
        items: [
          { fr: frOf(ANSWER_IDS[3]), itemId: ANSWER_IDS[3], en: enOf(ANSWER_IDS[3]) },
          { fr: frOf(PARCE_QUE_ID), itemId: PARCE_QUE_ID, respell: sub('parce que'), en: enOf(PARCE_QUE_ID) },
        ],
        check: {
          q: 'The answer starts parce que. Which word did you ask with?',
          opts: ['pourquoi', 'comment', 'combien', 'quel'],
          correct: 0,
          why: 'pourquoi. Parce que means because and it answers nothing else. This is the only one of the seven whose answer announces which question it came from before it says anything.',
        },
      },
      {
        label: 'A number and a description',
        items: [
          { fr: frOf(ANSWER_IDS[4]), itemId: ANSWER_IDS[4], en: enOf(ANSWER_IDS[4]) },
          { fr: frOf(ANSWER_IDS[5]), itemId: ANSWER_IDS[5], en: enOf(ANSWER_IDS[5]) },
        ],
        check: {
          q: 'Somebody answers you: there are three of us. Which word did you ask with?',
          opts: ['quel', 'qui', 'combien', 'quand'],
          correct: 2,
          why: 'combien. A number came back. If you had named the thing you were counting, de would have come with it: combien de personnes, and never combien personnes.',
        },
      },
      {
        label: 'The one from the station',
        items: [],
        check: {
          q: 'You asked where the train leaves from and you wanted the time. What was the cost?',
          opts: [
            'He corrected you and you learned something',
            'He did not understand and you asked again',
            'He gave you a true answer to a question you did not need',
            'Nothing, because both questions mean the same',
          ],
          correct: 2,
          why: 'A true answer you did not need. Nobody was wrong and nothing sounded odd, which is exactly why this error survives: there is no feedback anywhere in the exchange to tell you it happened.',
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's17-traps',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['deAfterCombien', 'quelTakesANoun', 'onlyThePageKnows'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-20-traps' },
    say: `${REFRAME} Five things an English speaker writes in their first month, one per screen.`,
    errors: [
      {
        wrong: 'Asking « Où est-ce que le train part ? » when you want the time.',
        right: 'Asking « Quand est-ce que le train part ? »',
        why: 'The highest-value one in the lesson, because it is the only error here that nobody will ever point out. Both sentences are correct French and both get a helpful answer. Only one of them is the answer you needed.',
      },
      {
        wrong: 'Writing « Combien enfants avez-vous ? » with no de.',
        right: 'Writing « Combien d\'enfants avez-vous ? »',
        why: 'Combien brings de with it the moment you name the thing being counted. Leaving it out is understood and simply marks a beginner, which is why it survives so long: nothing about it stops the conversation.',
      },
      {
        wrong: 'Writing « Quel heure est-il ? » with no agreement.',
        right: 'Writing « Quelle heure est-il ? »',
        why: 'Heure is the une kind, so quel takes an e. You cannot hear the difference and you never will, so this is a decision made with your eyes on the noun rather than your ear on the sentence.',
      },
      {
        wrong: 'Writing « Ou est le train ? » with no accent.',
        right: 'Writing « Où est le train ? »',
        why: 'Without the accent the word means or, and out loud the two are identical. This is the one error in the lesson that changes what you said rather than how well you said it, and no recording can catch it.',
      },
      {
        wrong: 'Saying « Tu fais que ? » with que at the end.',
        right: 'Saying « Tu fais quoi ? »',
        why: 'Que never sits at the end of a sentence. When the word for what lands there it becomes quoi, which is the same word standing somewhere else rather than a different one to learn.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's18-reading',
    title: 'The Information Desk',
    frSub: 'Au guichet',
    layer: 'core',
    terms: ['firstWordCarries', 'quelTakesANoun', 'deAfterCombien'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Four questions asked at one desk in five minutes, and each one gets a completely different answer.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'The queue at the information desk moves slowly and you can hear every question in it, which is the cheapest French lesson in the building. '
      + 'The woman in front of you wants a departure time and she asks for it directly. '
      + '« Quand est-ce que le train part ? » '
      + 'She gets a time, writes it on her hand and leaves, which is what happens when the word at the front matches the fact you wanted. '
      + 'The man behind her wants the platform and asks a question that differs from hers by exactly one word. '
      + '« Où est-ce que le train part ? » '
      + 'He gets a platform number, and neither he nor the man behind the desk has any reason to think anything unusual has happened. '
      + 'A third person is travelling with luggage and needs to know about a charge. '
      + '« Combien de valises est-ce que je peux prendre ? » '
      + 'The de is doing quiet work in that sentence and taking it out would not stop anybody understanding her, which is exactly why it is so easy to leave out for a year. '
      + 'The last one in the queue points at the board, where two trains are listed for the same city four minutes apart, and asks the question this lesson has been building towards. '
      + '« Quel train est à l\'heure ? »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything because
    // every occurrence sat inside a longer key. Checked here by running the real
    // segmentSentence in the test and comparing matched KEYS rather than text.
    //
    // No entry is a prefix or substring of another.
    glossary: [
      { word: 'Quand est-ce que', en: 'when', note: 'The word for when, with the borrowed frame behind it. Everything after this is a sentence she already knew.' },
      { word: 'Où est-ce que', en: 'where', note: 'One word different from hers, and the answer that comes back is a place rather than a time.' },
      { word: 'Combien de valises', en: 'how many suitcases', note: 'Combien brings de with it as soon as the thing being counted is named. Every time, with no exceptions.' },
      { word: 'Quel train', en: 'which train', note: 'Le train, so the un kind, so quel with nothing on the end. Out loud all four shapes of this word are identical.' },
    ],
    questions: [
      { q: 'The first two people in the queue asked sentences that differ by one word. Why did they get such different answers?', a: 'Because the word at the front is what chose which fact came back. Everything after it was the same in both sentences, so the whole difference in meaning was carried by a single word, and neither the questioner nor the man answering had any way of noticing if it was the wrong one.' },
      { q: 'What would have happened if the third person had left out the de?', a: 'She would have been understood perfectly and nobody would have corrected her. That is what makes it worth naming: combien de is not needed for comprehension, so nothing in the conversation will ever teach it to you. It has to be learned deliberately or not at all.' },
      { q: 'The last question uses quel rather than quelle. What decided that?', a: 'The train. Le train is the un kind, so quel takes nothing on the end. It has nothing to do with the question or with who is asking, and it cannot be heard: quel and quelle are one sound, so this is a decision made by looking at the noun.' },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'The Words, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['firstWordCarries', 'quelTakesANoun', 'deAfterCombien'],
    sheetId: 'sheet.a1.20.words',
    say: 'Three decks. The ones that stand alone, the one that agrees, and the frame that carries all of them.',
    themes: [
      {
        title: 'they stand alone',
        cards: [
          { fr: 'qui', sub: sub('qui'), en: 'who' },
          { fr: 'où', sub: sub('où'), en: 'where. The accent is the whole word' },
          { fr: 'quand', sub: sub('quand'), en: 'when' },
          { fr: 'comment', sub: sub('comment'), en: 'how' },
          { fr: 'pourquoi', sub: sub('pourquoi'), en: 'why. Answered with parce que' },
        ],
      },
      {
        title: 'they bring something with them',
        cards: [
          { fr: 'combien de', sub: sub('combien de'), en: 'how many of a thing' },
          { fr: "combien d'", sub: sub("combien d'"), en: 'the same, in front of a vowel' },
          { fr: 'quel', sub: sub('quel'), en: 'which, in front of an un word' },
          { fr: 'quelle', sub: sub('quelle'), en: 'in front of a une word. Same sound' },
          { fr: 'quels', sub: sub('quels'), en: 'several un words. Same sound again' },
          { fr: 'quelles', sub: sub('quelles'), en: 'several une words. Still the same sound' },
        ],
      },
      {
        title: 'the frame, and what rides on it',
        cards: [
          { fr: 'est-ce que', sub: sub('est-ce que'), en: 'the three words that make it a question' },
          { fr: "qu'est-ce que", sub: sub("qu'est-ce que"), en: 'what, with a person between it and the verb' },
          { fr: "qu'est-ce qui", sub: sub("qu'est-ce qui"), en: 'what, with nothing between it and the verb' },
          { fr: 'quoi', sub: sub('quoi'), en: 'what, at the end of a sentence' },
          { fr: 'que', sub: sub('que'), en: 'what, in front of a verb' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's20-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Every front names the fact you want, not the word. Say the French before you flip.',
    cards: [
      ...HERO.map((h) => ({ front: h.en, back: h.fr, say: h.fr })),
      ...[...SCENE_IDS, ...QUEL_CELL_IDS, ...roleIds('ou-pair'), ...roleIds('de-pair'),
        ...roleIds('que-position'), ...SUBJECT_OBJECT_IDS, FRAME_ID]
        .map((id) => ({ front: enOf(id), back: frOf(id), say: frOf(id) })),
    ],
  },

  {
    type: 'dictation',
    id: 's21-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Every target is short enough to stay in LETTERS mode, which is the only
    // mode where the learner writes the word rather than tapping it as a
    // pre-spelled tile. Measured through the real dicteeMode in the batch, the
    // merge and the test. Two obvious targets measured into word mode and were
    // withdrawn; see DICTATION_IDS in interrogatifs-corpus.ts.
    say: 'Five lines. On two of them the letter you write is one nobody can say out loud.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's22-speak',
    title: 'Ask It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately: sons.06 ships two
    // doing the same job and it reads as a repeat. `practice.skill` is authored
    // and read by no component: PracticeVFView takes itemIds and nothing else.
    // NOT ONE BARE QUESTION WORD IS IN HERE. See the note on SPEAK_IDS.
    say: 'Whole questions only. A question word on its own is not a question and cannot be right or wrong.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's23-scenario',
    title: 'The Same Desk, Going Better',
    frSub: 'Le même guichet',
    layer: 'core',
    terms: ['firstWordCarries', 'deAfterCombien'],
    say: 'One exchange and you hold up your half. Every turn is a question word in front of the frame.',
    setting: 'The same information desk, a week later. You have four things to find out and one frame to do it with.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no translation
    // shows the learner the one sentence comprehension matters on and asks them
    // to read it; a single accepted answer makes a conversation a cloze test.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Bonjour ! Je vous ecoute.',
        en: 'Hello! How can I help?',
        user: 'Quand est-ce que le train part ?',
        userEn: 'When does the train leave?',
        alts: [
          { fr: 'A quelle heure est-ce que le train part ?', en: 'What time does the train leave?' },
          { fr: 'Le train part quand ?', en: 'When does the train leave?' },
        ],
      },
      {
        ai: 'A quatorze heures douze. Vous avez le temps.',
        en: 'At 14:12. You have time.',
        user: 'Ou est-ce que le train part ?',
        userEn: 'Where does the train leave from?',
        alts: [
          { fr: 'Il part de quelle voie ?', en: 'Which platform does it leave from?' },
          { fr: 'Ou est le train ?', en: 'Where is the train?' },
        ],
      },
      {
        ai: 'Voie 7. Tout droit, puis a gauche.',
        en: 'Platform 7. Straight ahead, then left.',
        user: "Combien d'arrets est-ce qu'il y a ?",
        userEn: 'How many stops are there?',
        alts: [
          { fr: 'Combien de temps est-ce que ca dure ?', en: 'How long does it take?' },
          { fr: "Il y a combien d'arrets ?", en: 'How many stops are there?' },
        ],
      },
      {
        ai: 'Trois. Vous arrivez vers seize heures.',
        en: 'Three. You arrive around four.',
        user: 'Pourquoi est-ce que le train est en retard ?',
        userEn: 'Why is the train late?',
        alts: [
          { fr: 'Le train est en retard, pourquoi ?', en: 'The train is late, why?' },
          { fr: "Pourquoi est-ce qu'il est en retard ?", en: 'Why is it late?' },
        ],
      },
      {
        ai: "Parce qu'il y a des travaux. Bonne journee !",
        en: 'Because there are works on the line. Have a good day!',
        user: 'Merci. Quel quai, encore une fois ?',
        userEn: 'Thank you. Which platform, again?',
        alts: [
          { fr: 'Merci. Quelle voie, encore une fois ?', en: 'Thank you. Which platform, again?' },
          { fr: 'Merci beaucoup. Voie 7, alors ?', en: 'Thank you very much. Platform 7, then?' },
        ],
      },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's24-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['firstWordCarries', 'quelTakesANoun', 'onlyThePageKnows'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'You want a departure time.', back: `${frOf(SCENE_IDS[1])} The word for when.`, say: frOf(SCENE_IDS[1]) },
      { front: 'You want a platform number.', back: `${frOf(SCENE_IDS[0])} The word for where.`, say: frOf(SCENE_IDS[0]) },
      { front: 'What goes between your word and your sentence?', back: `est-ce que. ${REFRAME}`, say: 'est-ce que' },
      { front: 'You want to know who somebody is going with.', back: `${frOf(HERO_ROW_IDS[4])} Qui takes a small word in front when the person is not doing it.`, say: frOf(HERO_ROW_IDS[4]) },
      { front: 'You want a reason.', back: `${frOf(HERO_ROW_IDS[2])} And the answer comes back starting parce que.`, say: frOf(HERO_ROW_IDS[2]) },
      { front: 'Which train, when a train is the un kind?', back: `${frOf(QUEL_CELL_IDS[0])} quel, with nothing on the end.`, say: frOf(QUEL_CELL_IDS[0]) },
      { front: 'Which suitcase, when a valise is the une kind?', back: `${frOf(QUEL_CELL_IDS[1])} quelle. Out loud it is the same word.`, say: frOf(QUEL_CELL_IDS[1]) },
      { front: 'How many of the four quel shapes can you hear?', back: 'None of them. All four are one sound and the endings are written only.', say: QUEL_FORMS.join(', ') },
      { front: 'What separates où from ou out loud?', back: 'Nothing. Both are the same sound and only the accent tells you which was meant.', say: 'où, ou' },
      { front: 'How many suitcases do you have?', back: `${frOf(DE_PAIR_IDS[0])} combien brings de with it.`, say: frOf(DE_PAIR_IDS[0]) },
      { front: 'How many friends do you have?', back: `${frOf(DE_PAIR_IDS[1])} A vowel follows, so de loses its own.`, say: frOf(DE_PAIR_IDS[1]) },
      { front: 'What are you doing? Say it the safe way.', back: `${frOf(QUE_POSITION_IDS[0])} Que joined the frame.`, say: frOf(QUE_POSITION_IDS[0]) },
      { front: 'The same question, with the word at the end.', back: `${frOf(QUE_POSITION_IDS[1])} Que becomes quoi when it lands there.`, say: frOf(QUE_POSITION_IDS[1]) },
      { front: 'Which word does the unit description leave out?', back: 'comment. It is taught here anyway, and you have said it since the first lesson.', say: 'comment' },
      { front: 'What should you decide before you open your mouth?', back: `${REFRAME} Which fact do you want.`, say: 'où, quand, comment' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's25-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a train leave without somebody who asked a perfectly good question and got a perfectly good answer. Since then you have taken a frame that never changes and put seven different words in front of it, met the one word here that has to lean on a thing and copy its shape, and found two distinctions that live entirely on the page and are invisible to listening. Along the way you have worked backwards from an answer to the question that produced it, which is the only thing in this lesson that tests what the words mean rather than what they look like. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's26-quiz',
    title: 'The Exam',
    frSub: 'L\'examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    // EVERY STEM NAMES THE FACT THE LEARNER WANTS, IN ENGLISH. "où or quand?"
    // tests nothing, because both are real words and the question does not say
    // which answer is wanted. "You want to know what time the train leaves" has
    // exactly one answer. The batch, the merge and the test all check it.
    //
    // THE BEST ITEMS GIVE THE ANSWER AND ASK FOR THE WORD, because that tests
    // meaning rather than recall of a list, and nothing else in a closed format
    // can. Four of the questions below do that.
    //
    // QuizDeckView shuffles the options of every closed question per attempt, so
    // NO OPTION REFERS TO A POSITION and no two options within a question are
    // equal. The exposure here is unusual and doubled: the answer space is seven
    // short words that recur in every round, and quel/quelle/quels/quelles look
    // nearly identical as options. Every four-option agreement question below
    // was checked for duplicates character by character.
    //
    // `quiz-spread` still caps any authored `correct` slot at 40% of closed
    // questions, so the indices are spread deliberately.
    rounds: [
      {
        id: 'r1-one-slot',
        label: 'One slot, seven words',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-no-frame', 'err-wrong-word'],
        say: 'The move, five times.',
        questions: [
          {
            q: 'You know the sentence « tu pars ». You want to ask when. What goes between the word and the sentence?',
            format: 'mcq',
            opts: ['nothing', 'est-ce que', 'que', 'parce que'],
            correct: 1,
            why: `est-ce que. ${REFRAME} It never changes and it takes all seven words, which is why this lesson can teach seven words instead of seven grammars.`,
            ref: 's03-frame',
          },
          {
            // THE CLAUSE IS GIVEN. An earlier draft asked for the whole
            // sentence and so asked the learner to produce « part », which is
            // partir and which no A1 unit teaches. What this lesson owns is the
            // word and the frame, so that is all it asks for.
            q: 'You want to know what time the train leaves. Complete it: « ... le train part ? »',
            format: 'typeIn',
            accept: ['Quand est-ce que', 'quand est-ce que'],
            answer: 'Quand est-ce que',
            why: 'Quand est-ce que. The word for when, then the frame, and the sentence behind it does not move. Asking where instead gets a platform number, which is the whole opening scene.',
            ref: 's04-hero',
          },
          {
            q: 'In « Pourquoi est-ce que tu pars ? » and « Comment est-ce que tu pars ? », how much of the two sentences is identical?',
            format: 'mcq',
            opts: [
              'Nothing, they are different questions',
              'Everything except the first word',
              'Only the frame',
              'Only the last word',
            ],
            correct: 1,
            why: 'Everything except the first word. That is the point of the whole lesson: the word at the front carries the entire question and the rest of the sentence does not move when it changes.',
            ref: 's04-hero',
          },
          {
            // THE FRAME IS WHAT THIS QUESTION TESTS, and only the frame. An
            // earlier draft asked the learner to restore the accent as well and
            // it could not have worked: `errorSpot` runs the same
            // matchesAccept -> fold() path as typeIn, fold() strips accents, so
            // « ou » and « où » fold together and the answer would have been
            // accepted without it. The accent is tested by mcq in r6, which is
            // the only format that can. The `why` claims only what the format
            // can certify.
            q: 'Somebody writes « Où tu pars ? » meaning to ask where you are going. Fix it.',
            format: 'errorSpot',
            accept: ['Où est-ce que tu pars ?', 'Où est-ce que tu pars'],
            answer: 'Où est-ce que tu pars ?',
            why: 'Où est-ce que tu pars ? The word was right and the frame was missing, so what was there was a question word standing in front of a statement rather than a question.',
            ref: 's03-frame',
          },
          {
            q: 'You want to ask who somebody is travelling with. Say the whole question.',
            format: 'speak',
            target: 'Avec qui est-ce que tu pars ?',
            accept: ['Avec qui est-ce que tu pars ?', 'avec qui est-ce que tu pars'],
            answer: 'Avec qui est-ce que tu pars ?',
            why: 'Avec qui est-ce que tu pars ? Qui takes a small word in front of it when the person is not the one doing something, and the whole thing still goes in the same slot.',
            ref: 's04-hero',
          },
        ],
      },
      {
        id: 'r2-which-fact',
        label: 'Which fact do you want',
        targets: ['err-wrong-word', 'err-no-frame'],
        say: 'The answer comes first. You work out the question.',
        questions: [
          {
            q: 'Somebody answers you « Parce qu\'il pleut. » Which word did you ask with?',
            format: 'mcq',
            opts: ['comment', 'quand', 'pourquoi', 'combien'],
            correct: 2,
            why: 'pourquoi. Parce que means because and answers nothing else, so this is the one question in the seven whose answer tells you which word produced it before it says anything.',
            ref: 's16-answers',
          },
          {
            q: 'Somebody answers you « C\'est à huit heures. » Which word did you ask with?',
            format: 'mcq',
            opts: ['quand', 'où', 'qui', 'comment'],
            correct: 0,
            why: 'quand. A time came back, so a time was asked for. Working backwards like this is the only way to check a question word after the fact, and it is what the man at the station could not do for you.',
            ref: 's16-answers',
          },
          {
            q: 'You want to ask how somebody is, the way the very first lesson taught you. Complete it: « ... ça va ? »',
            format: 'typeIn',
            accept: ['comment', 'Comment'],
            answer: 'Comment',
            why: 'comment. The word for how, and the unit description for this lesson leaves it out. It is taught here anyway, because you have been saying it inside that greeting since the first lesson.',
            ref: 's05-five',
          },
          {
            q: 'Listen. Which word is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'qui' },
            opts: ['qui', 'que', 'quoi', 'quand'],
            correct: 0,
            why: 'qui. This is the one pair in the lesson your ear can genuinely do: qui has a clear ee and que has the small unstressed vowel. The accent on où and the endings on quel are not in the signal at all.',
            ref: 's14-listening',
          },
          {
            q: 'Somebody writes « Comment est-ce que le train part ? » wanting the departure time. Fix it.',
            format: 'errorSpot',
            accept: ['Quand est-ce que le train part ?', 'quand est-ce que le train part', 'Quand est-ce que le train part'],
            answer: 'Quand est-ce que le train part ?',
            why: 'Quand. Comment asks how it travels and would get a true answer about the train rather than about the time. Nothing in the frame was wrong; only the word at the front was.',
            ref: 's16-answers',
          },
        ],
      },
      {
        id: 'r3-quel-agrees',
        label: 'The one that agrees',
        targets: ['err-quel-agreement', 'err-wrong-word'],
        say: 'Look at the thing behind it. Your ear will not help.',
        questions: [
          {
            q: 'You want to ask which suitcase, and la valise is the une kind. Which shape?',
            format: 'mcq',
            opts: ['quel', 'quelle', 'quels', 'quelles'],
            correct: 1,
            why: 'quelle. The une kind and one of them, so an e on the end. All four of those options are the same sound, so this question can only be answered by looking at the valise.',
            ref: 's09-quel-table',
          },
          {
            q: 'You want to ask which trains, meaning several, and le train is the un kind. Write the two words.',
            format: 'typeIn',
            accept: ['quels trains', 'Quels trains'],
            answer: 'quels trains',
            why: 'quels trains. The un kind and more than one, so the s and nothing else. Writing is the only way this can be tested: out loud it is identical to quel train, quelle valise and quelles valises.',
            ref: 's09-quel-table',
          },
          {
            q: 'Somebody writes « Quel heure est-il ? » Fix it.',
            format: 'errorSpot',
            accept: ['Quelle heure est-il ?', 'quelle heure est-il', 'Quelle heure est-il'],
            answer: 'Quelle heure est-il ?',
            why: 'Quelle heure est-il ? Heure is the une kind. The time lesson gave you this sentence as one lump you did not take apart, and this is the e that was inside it all along.',
            ref: 's08-quel',
          },
          {
            q: 'Why can you not check quel against quelle by listening to a recording?',
            format: 'mcq',
            opts: [
              'Because recordings are too fast',
              'Because the two words mean different things',
              'Because both endings are written and never pronounced',
              'Because only native speakers make the difference',
            ],
            correct: 2,
            why: 'Because the endings are silent. All four shapes are one sound, so no recording can separate them and no amount of listening practice will produce the ability. This is a decision you make with your eyes.',
            ref: 's14-listening',
          },
        ],
      },
      {
        id: 'r4-que-and-quoi',
        label: 'que and quoi',
        targets: ['err-que-position', 'err-quel-agreement'],
        say: 'One word, and where it sits changes how it is spelled.',
        questions: [
          {
            q: 'You want to ask what somebody is doing. Complete it: « ... tu fais ? »',
            format: 'typeIn',
            accept: ["Qu'est-ce que", "qu'est-ce que"],
            answer: "Qu'est-ce que",
            why: "Qu'est-ce que. Que did not stand in front of the frame, it joined it, and the two ran together into one block. This is the form the corpus uses far more often than either of the others.",
            ref: 's11-que',
          },
          {
            q: 'Somebody writes « Tu fais que ? » Fix it.',
            format: 'errorSpot',
            accept: ['Tu fais quoi ?', 'tu fais quoi', 'Tu fais quoi'],
            answer: 'Tu fais quoi ?',
            why: 'Tu fais quoi ? Que never sits at the end of a sentence. When the word for what lands there it becomes quoi, which is the same word standing somewhere else rather than a second one to learn.',
            ref: 's12-que-table',
          },
          {
            q: 'In « Qu\'est-ce qui se passe ici ? » what decided the qui rather than que at the end of the block?',
            format: 'mcq',
            opts: [
              'The thing being asked about is the one doing something',
              'The question is about a person',
              'It is more polite',
              'There is no verb in the sentence',
            ],
            correct: 0,
            why: 'The thing is the one doing something, and nothing comes between the block and the verb. When a person sits in between, the block ends with que instead. Recognise this and move on: it is not drilled here.',
            ref: 's13-quiqui',
          },
          {
            q: 'Listen. Which word is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'que' },
            opts: ['que', 'qui', 'quoi', 'quel'],
            correct: 0,
            why: 'que. The vowel is the small unstressed one rather than the clear ee of qui. These two are a genuine pair for the ear, unlike où against ou or the four shapes of quel.',
            ref: 's14-listening',
          },
        ],
      },
      {
        id: 'r5-combien-de',
        label: 'combien, and the word it brings',
        targets: ['err-bare-combien', 'err-wrong-word'],
        say: 'Name the thing you are counting and something arrives with it.',
        questions: [
          {
            q: 'You want to ask how many suitcases somebody has. Write the first two words.',
            format: 'typeIn',
            accept: ['combien de', 'Combien de'],
            answer: 'combien de',
            why: 'combien de. Name the thing being counted and de arrives, every time and with no exceptions. Leaving it out is understood perfectly, which is exactly why nobody will ever correct it for you.',
            ref: 's15-combien',
          },
          {
            q: 'Somebody writes « Combien enfants avez-vous ? » Fix it.',
            format: 'errorSpot',
            accept: ["Combien d'enfants avez-vous ?", "combien d'enfants avez-vous", "Combien d'enfants avez-vous"],
            answer: "Combien d'enfants avez-vous ?",
            why: "Combien d'enfants. Two things at once: de was missing, and enfants starts with a vowel so de loses its own vowel. That is the same refusal to let two vowels meet that turned le into l apostrophe.",
            ref: 's15-combien',
          },
          {
            q: 'Why is it « combien de valises » but « combien d\'amis »?',
            format: 'mcq',
            opts: [
              'Because amis is plural',
              'Because amis starts with a vowel',
              'Because valise is the une kind',
              'Because amis is a person and valise is a thing',
            ],
            correct: 1,
            why: 'Because amis starts with a vowel. That is the only difference between the two, and it is the fifth time you have watched French refuse to let two vowel sounds run into each other.',
            ref: 's15-combien',
          },
          {
            q: 'Somebody answers you « Nous sommes trois. » Which word did you ask with?',
            format: 'mcq',
            opts: ['quel', 'qui', 'quand', 'combien'],
            correct: 3,
            why: 'combien. A number came back. If you had named what you were counting, de would have come with it, so the question would have been combien de personnes rather than combien personnes.',
            ref: 's16-answers',
          },
        ],
      },
      {
        id: 'r6-only-the-page',
        label: 'What only the page knows',
        targets: ['err-lost-accent', 'err-quel-agreement'],
        say: 'Two differences you can never hear, and one mark that changes the word.',
        questions: [
          {
            // mcq IS THE ONLY FORMAT THAT CAN TEST AN ACCENT, because fold()
            // strips accents and case before comparing, so où and ou fold
            // together and typeIn and errorSpot both certify nothing here. The
            // options are picked rather than typed, and quiz-duplicate-option
            // compares them exactly, so the accent survives.
            q: 'Which of these asks where the train is?',
            format: 'mcq',
            opts: ['Ou est le train ?', 'Où est le train ?', 'Ou est-ce le train ?', 'Où ou le train ?'],
            correct: 1,
            why: 'Où est le train ? with the accent. Without it the word means or. Out loud the two are identical, so this is the one thing in the lesson that can only ever be settled in writing.',
            ref: 's07-ouou',
          },
          {
            q: 'Somebody says « Le train ou le bus ? » out loud. How do you know which word they used?',
            format: 'mcq',
            opts: [
              'By the vowel, which is longer in one of them',
              'By the sound, if you listen carefully',
              'From where it sits in the sentence',
              'You cannot, ever',
            ],
            correct: 2,
            why: 'From where it sits. The two are one sound, so listening will not do it. Où opens a question and ou sits between two things you are choosing from, and that position is the only clue there is.',
            ref: 's07-ouou',
          },
          {
            q: 'You want to ask which suitcases, meaning several of them. Say it.',
            format: 'speak',
            target: 'Quelles valises sont là ?',
            accept: ['Quelles valises sont là ?', 'quelles valises sont la', 'Quelles valises sont la'],
            answer: 'Quelles valises sont là ?',
            why: 'Quelles valises sont là ? Both endings on quelles are silent, so what you say here is identical to quel, quelle and quels. The spelling is a decision you make before you open your mouth.',
            ref: 's09-quel-table',
          },
          {
            q: 'Which two things in this lesson are invisible to listening?',
            format: 'mcq',
            opts: [
              'The accent on où, and the endings on quel',
              'The frame, and the word at the front',
              'combien de, and parce que',
              'que and quoi, and qui and que',
            ],
            correct: 0,
            why: 'The accent and the endings. Both live entirely on the page. Everything else in this lesson is audible, including qui against que, which is a real pair worth practising.',
            ref: 's14-listening',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's27-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the rest of A1.',
    body: 'You can ask any question you can think of, by putting one of seven words in front of a frame that never changes and a sentence you already knew. You can pick the word by deciding which fact you want rather than by remembering a list. You can use quel in all four shapes by looking at the thing behind it, and you know that its endings and the accent on où live entirely on the page. What carries forward is smaller than it looks: one slot, and the habit of deciding what you want to know before you decide how to say it. There are two other ways of asking a question in French and they arrive in their own lesson. Nothing you have learned here has to be unlearned when they do.',
    points: [
      `${REFRAME} The word says which fact, and the frame carries it.`,
      'Five of the seven never change. quel agrees with its thing and combien brings de.',
      'où against ou, and all four shapes of quel, are differences you read and never hear.',
      'pourquoi is the only one whose answer has a word of its own: parce que.',
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
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's25-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.20.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Question words', v: String(THE_SEVEN.length) },
    { k: 'Shapes of quel', v: String(QUEL_FORMS.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit
 * that "the weight belongs on quel and on que/quoi, not on the five invariable
 * words, which a learner absorbs in two missions", and the count bears that
 * out: act 2 gives the five invariable words three missions between them, while
 * quel gets three of its own and que gets four.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'One slot, seven words',
    sections: ['s01-scene', 's02-goals', 's03-frame', 's04-hero'],
    milestone: 'You have watched a train leave without somebody who asked a perfectly good question.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The five that stand alone',
    sections: ['s05-five', 's06-choose', 's07-ouou'],
    milestone: 'Five words with no endings, no agreement and nothing to check before you say them.',
    estScreens: 21,
    restPoints: ['s06-choose/halfway'],
  },
  {
    id: 'act3',
    title: 'quel leans on a thing',
    sections: ['s08-quel', 's09-quel-table', 's10-quel-sort'],
    milestone: 'Four shapes, one sound, and the thing behind it decides which one you write.',
    estScreens: 22,
    restPoints: ['s10-quel-sort/halfway'],
  },
  {
    id: 'act4',
    title: 'que, quoi, and where they sit',
    sections: ['s11-que', 's12-que-table', 's13-quiqui', 's14-listening'],
    milestone: 'One word in three places, and the two pairs your ear can and cannot do.',
    estScreens: 24,
    restPoints: ['s11-que/halfway', 's14-listening/halfway'],
  },
  {
    id: 'act5',
    title: 'Ask, and get an answer',
    sections: ['s15-combien', 's16-answers', 's17-traps', 's18-reading'],
    milestone: 'Working backwards from an answer, which is the only thing here that tests meaning.',
    estScreens: 26,
    restPoints: ['s16-answers/halfway', 's17-traps/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's19-words', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario',
      's24-review', 's25-progress', 's26-quiz', 's27-roundup',
    ],
    milestone: 'Lesson complete. One slot and seven words carry straight into everything left in A1.',
    estScreens: 98,
    restPoints: [
      's20-flash/halfway', 's22-speak/halfway', 's24-review/halfway',
      's26-quiz/after-r2', 's26-quiz/after-r4',
    ],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new; it applies and tests what acts 1 to 5
 * handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: the scene's two sentences are also the where and when
 * rows of the hero table. The SRS keys on (itemId, modality), so releasing one
 * card from two tranches would take two ratings for one sentence. The first
 * tranche to name an id keeps it and the rest drop it, which is also the
 * pedagogically right answer: an item belongs to the act that taught it.     */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const id of ids) {
    if (released.has(id)) continue;
    released.add(id);
    out.push(id);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1: the frame, the seven hero rows, the scene's two questions and the
  // two published sentences s03-frame shows. NOT the eight headword cards: they
  // are taught in acts 2, 3 and 4, and a card released before its mission is a
  // card the learner is asked to rate before they have met it.
  once([
    ...FRAME_CARDS.slice(0, 1), FRAME_ID, ...HERO_ROW_IDS, ...SCENE_IDS,
    'fr.a1.questions.035', 'fr.a1.questions.030',
  ]),
  // Act 2: the five that stand alone, their headword cards, the où/ou pair with
  // both published headwords, and the five published sentences s05-five shows.
  once([
    'fr.sons.questions.001', 'fr.sons.questions.004', 'fr.sons.questions.005',
    'fr.sons.questions.006', 'fr.sons.questions.007',
    ...OU_PAIR_IDS,
    'fr.a1.questions.031', 'fr.a1.questions.022', 'fr.a1.questions.050',
    'fr.a1.questions.001', 'fr.a1.questions.003', 'fr.a1.questions.016',
    'fr.a1.questions.042', 'fr.a1.questions.077',
  ]),
  // Act 3: the four quel cells, the four headwords, the two nouns whose gender
  // the learner checks, and the four published sentences using all four shapes.
  once([
    ...QUEL_CELL_IDS, ...QUEL_HEADWORDS, ...QUEL_NOUN_IDS,
    'fr.a1.questions.004', 'fr.a1.questions.021', 'fr.a1.questions.026',
    'fr.a1.questions.076', 'fr.a1.questions.299',
    'fr.sons.questions.019', 'fr.sons.questions.020',
  ]),
  // Act 4: que and quoi in three positions, the two authored frame blocks, the
  // subject and object pair, and the published sentences that carry them.
  once([
    ...QUE_POSITION_IDS, ...SUBJECT_OBJECT_IDS, ...FRAME_CARDS,
    'fr.sons.questions.002', 'fr.sons.questions.003', 'fr.sons.questions.048',
    'fr.a1.questions.009', 'fr.a1.questions.089', 'fr.a1.questions.209',
  ]),
  // Act 5: combien with its de, the elision, the six answers, parce que, and
  // the three published combien sentences.
  once([
    ...DE_PAIR_IDS, 'fr.sons.questions.008', ...ANSWER_IDS, PARCE_QUE_ID,
    'fr.a1.questions.011', 'fr.a1.questions.018', 'fr.a1.questions.029',
  ]),
  // Act 6: nothing new. Act 6 tests what acts 1 to 5 handed over, which is why
  // this slice is empty rather than padded.
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in the
 *  test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.20.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.20.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round, which
 * is what makes all six reachable; the batch, the merge and the test all assert
 * it rather than trusting the ordering to survive an edit.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third. This lesson does not reopen it.
 *
 * `err-no-frame` and `err-wrong-word` look like one error and are two. The first
 * is building the question wrong, which produces « Où tu pars ? » and is
 * immediately visible. The second is building it perfectly and choosing the
 * wrong word, which produces a correct sentence and a useless answer and is
 * visible to nobody. A learner who has fixed the first still makes the second,
 * and merging them would remediate only one.                                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-no-frame',
    description: 'Puts the question word in front of a statement with nothing between them: « Où tu pars ? ». The word is right, the sentence is right, and there is no question in it.',
    detectOn: ['s03-frame', 's04-hero', 's06-choose', 's26-quiz/r1-one-slot'],
    drill: 'drill-frame',
    retest: 'retest-frame',
  },
  {
    id: 'err-wrong-word',
    description: 'Builds the question perfectly and reaches for the nearest word they are sure of, getting a correct sentence and a true answer to something they did not ask. The scene error, and the only one here nobody will ever point out.',
    detectOn: ['s01-scene', 's06-choose', 's16-answers', 's26-quiz/r2-which-fact'],
    drill: 'drill-meaning',
    retest: 'retest-meaning',
  },
  {
    id: 'err-quel-agreement',
    description: 'Writes quel in front of a une word or a plural: « Quel heure », « Quel valises ». Invisible to the ear in both directions, so no amount of listening or speaking practice touches it.',
    detectOn: ['s08-quel', 's09-quel-table', 's10-quel-sort', 's26-quiz/r3-quel-agrees'],
    drill: 'drill-quel',
    retest: 'retest-quel',
  },
  {
    id: 'err-que-position',
    description: 'Puts que where quoi belongs or the reverse: « Tu fais que ? », « Quoi est-ce que tu fais ? ». One word, and where it sits decides how it is spelled.',
    detectOn: ['s11-que', 's12-que-table', 's17-traps', 's26-quiz/r4-que-and-quoi'],
    drill: 'drill-que',
    retest: 'retest-que',
  },
  {
    id: 'err-bare-combien',
    description: 'Writes « Combien enfants ? » with no de. Understood perfectly every time, which is why it survives for a year: nothing in any conversation gives the learner a reason to fix it.',
    detectOn: ['s15-combien', 's16-answers', 's17-traps', 's26-quiz/r5-combien-de'],
    drill: 'drill-combien',
    retest: 'retest-combien',
  },
  {
    id: 'err-lost-accent',
    description: 'Writes « Ou est le train ? » without the accent, which turns the word for where into the word for or. The only error in the lesson that changes what was said rather than how well.',
    detectOn: ['s07-ouou', 's17-traps', 's26-quiz/r6-only-the-page'],
    drill: 'drill-accent',
    retest: 'retest-accent',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-frame',
    title: 'What is missing?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    buckets: ['asks yes or no', 'asks for a fact'],
    items: [
      'fr.a1.questions.401', // Est-ce que tu es prêt ?
      'fr.a1.questions.030', // Est-ce que le train part à midi ?
      'fr.a1.questions.374', // Où est-ce que tu pars ?
      'fr.a1.questions.375', // Quand est-ce que tu pars ?
      'fr.a1.questions.035', // Où est-ce que tu habites ?
    ],
    coach: 'Every one of these has the same frame in it. What separates the two piles is whether anything is standing in front of that frame, and that is the whole difference between a yes and a fact.',
  },
  {
    id: 'retest-frame',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to ask where somebody lives. What goes between où and « tu habites »?',
    opts: ['nothing', 'est-ce que', 'que'],
    correct: 1,
    why: 'est-ce que. Without it you have a question word standing in front of a statement, which is not yet a question.',
  },
  {
    id: 'drill-meaning',
    title: 'Which question produced this?',
    format: 'sort',
    // Sorted by WHAT KIND OF FACT CAME BACK, which is the only thing in the
    // lesson that tests meaning rather than form. A learner who has memorised
    // the list of seven words and does not know what they mean gets roughly
    // half of these wrong, which is the feedback the drill exists for.
    buckets: ['a place or a person', 'a time, a reason or a number'],
    items: [
      'fr.a1.questions.383', // C'est mon frère.
      'fr.a1.questions.384', // C'est derrière la gare.
      'fr.a1.questions.385', // C'est à huit heures.
      'fr.a1.questions.386', // C'est parce qu'il pleut.
      'fr.a1.questions.387', // Nous sommes trois.
    ],
    coach: 'Read the answer and ask yourself what kind of thing came back. A place, a person, a time, a reason, a number. Each one could only have come from one of the seven words, and that is how you check a question after you have asked it.',
  },
  {
    id: 'retest-meaning',
    title: 'One more time',
    format: 'mcq',
    q: 'Somebody answers « C\'est derrière la gare. » Which word did you ask with?',
    opts: ['quand', 'où', 'comment'],
    correct: 1,
    why: 'où. A place came back, so a place was asked for. That is the only check available, and it happens after the answer rather than before.',
  },
  {
    id: 'drill-quel',
    title: 'Which shape?',
    format: 'sort',
    // Both buckets are sorted by the NOUN, which is the only thing that decides,
    // and the learner cannot fall back on sound because all four items are the
    // same sound.
    buckets: ['the un kind', 'the une kind'],
    items: [
      'fr.a1.questions.397', // Quel train est là ?
      'fr.a1.questions.398', // Quelle valise est là ?
      'fr.a1.questions.399', // Quels trains sont là ?
      'fr.a1.questions.400', // Quelles valises sont là ?
      'fr.a1.questions.021', // Quelle heure est-il ?
      'fr.a1.questions.026', // Quel jour sommes-nous ?
    ],
    coach: 'Say all six out loud first. The first word is identical in every one of them, so listening will not sort this. Look at the noun instead and ask which kind it is, exactly as you did with le and la.',
  },
  {
    id: 'retest-quel',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to ask which suitcase, and la valise is the une kind. Which shape?',
    opts: ['quel', 'quelle', 'quels'],
    correct: 1,
    why: 'quelle. The une kind, one of them, so an e that you write and never say.',
  },
  {
    id: 'drill-que',
    title: 'Where does the word sit?',
    format: 'sort',
    buckets: ['at the front', 'at the end'],
    items: [
      'fr.a1.questions.389', // Qu'est-ce que tu fais ?
      'fr.a1.questions.390', // Tu fais quoi ?
      'fr.a1.questions.009', // Qu'est-ce que tu fais dans la vie ?
      'fr.sons.questions.048', // c'est quoi ?
      'fr.a1.questions.089', // Que fais-tu le matin ?
    ],
    coach: 'These all ask the same thing. What separates the piles is where the word for what has ended up, and the spelling follows from that: que and its block at the front, quoi at the end. It is one word in two places.',
  },
  {
    id: 'retest-que',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is French?',
    opts: ['Tu fais que ?', 'Tu fais quoi ?', 'Tu que fais ?'],
    correct: 1,
    why: 'Tu fais quoi ? Que cannot sit at the end of a sentence. When the word for what lands there, it is spelled quoi.',
  },
  {
    id: 'drill-combien',
    title: 'de, or d apostrophe?',
    format: 'sort',
    buckets: ['de keeps its vowel', 'de loses its vowel'],
    items: [
      'fr.a1.questions.395', // Combien de valises as-tu ?
      'fr.a1.questions.396', // Combien d'amis as-tu ?
      'fr.a1.questions.011', // Combien de frères et sœurs as-tu ?
      'fr.a1.questions.018', // Combien d'enfants avez-vous ?
      'fr.a1.questions.029', // Combien de temps dure le film ?
    ],
    coach: 'Every one of these has de in it, which is the first thing worth noticing: combien never appears without it in front of a thing. What decides the apostrophe is only ever the first letter of the noun behind it.',
  },
  {
    id: 'retest-combien',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to ask how many children somebody has. Which two words go first?',
    opts: ['combien enfants', "combien d'enfants", 'combien de enfants'],
    correct: 1,
    why: "combien d'enfants. De arrives because a thing is being counted, and it loses its vowel because enfants starts with one.",
  },
  {
    id: 'drill-accent',
    title: 'Which one is on the page?',
    format: 'sort',
    buckets: ['où, asking where', 'ou, offering a choice'],
    items: [
      'fr.a1.questions.393', // Où est le train ?
      'fr.a1.questions.394', // Le train ou le bus ?
      'fr.a1.questions.031', // Où est la gare ?
      'fr.a1.questions.077', // Est-ce que tu préfères le thé ou le café ?
      'fr.a1.questions.374', // Où est-ce que tu pars ?
    ],
    coach: 'Play every one of these and you will hear the same sound in all five, because that is what they are. Sort them by where the word sits instead: opening a question, or standing between two things you are choosing from.',
  },
  {
    id: 'retest-accent',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these asks where the station is?',
    opts: ['Ou est la gare ?', 'Où est la gare ?', 'Où ou la gare ?'],
    correct: 1,
    why: 'Où est la gare ? with the accent. Without it the word means or, and nothing in the sound will ever tell you which one was meant.',
  },
];

/* ─── Reference sheet ──────────────────────────────────────────────────────
 *
 * One, and the brief is right about why: "It is the sheet a learner returns to
 * for the rest of A1 and through A2." Seven words, one frame and a four-cell
 * paradigm is exactly the amount of material somebody wants on one screen at
 * eight in the morning three weeks from now.
 *
 * `table` and `teach` ONLY. ReferenceSheet.tsx renders exactly three section
 * types inside a sheet (`teach`, `letterGrid`, `table`) and its `default` branch
 * draws the section's TITLE and nothing else, deliberately, "so a mis-authored
 * sheet is visible instead of silently thin". a1.17 shipped two `cheatSheet`
 * sections here and they drew fourteen invisible rows; a1.13 has the same defect
 * shipped at two more. This sheet uses only what the component reads, and the
 * test parses the switch out of the component so the next one goes red.
 *
 * SHORT CELLS ONLY. SheetTable sizes a column at max(110, 320 / cols), so a
 * three-column table gives each cell about 110 points and a full sentence in one
 * can only be read by dragging the table sideways. a1.17 found that on a device.
 * The reasons live in the prose below, where they have the width.            */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.20.words',
    title: 'The seven words, and the frame',
    layer: 'deep',
    contains: ['All seven, and what each one asks for', 'The four shapes of quel', 'What the frame does'],
    sections: [
      {
        type: 'table',
        id: 'sheet-words-table',
        title: 'What each word asks for',
        layer: 'deep',
        cols: ['word', 'said', 'you get back'],
        rows: [
          ['qui', sub('qui'), 'a person'],
          ['où', sub('où'), 'a place'],
          ['quand', sub('quand'), 'a time'],
          ['comment', sub('comment'), 'a way, or what something is like'],
          ['pourquoi', sub('pourquoi'), 'a reason, starting parce que'],
          ['combien de', sub('combien de'), 'a number'],
          ['que', sub('que'), 'a thing'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-quel-table',
        title: 'quel, in all four shapes',
        layer: 'deep',
        cols: ['written', 'in front of', 'said'],
        rows: [
          ['quel', 'un train', sub('quel')],
          ['quelle', 'une valise', sub('quelle')],
          ['quels', 'des trains', sub('quels')],
          ['quelles', 'des valises', sub('quelles')],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-frame-rows',
        title: 'The frame, and the two adjustments',
        layer: 'deep',
        body:
          `${REFRAME} Est-ce que is three small words that never change and never move. Put your question word `
          + 'in front of them, then say a sentence you already know, and you have asked. Où est-ce que tu pars, '
          + 'quand est-ce que tu pars, pourquoi est-ce que tu pars: the last four words are identical every '
          + 'time and only the first one decides what comes back. Two of the seven need one adjustment and '
          + 'both are worth knowing before you meet them somewhere else. Que does not stand in front of the '
          + 'frame, it joins it, and the two run together into qu\'est-ce que: qu\'est-ce que tu fais. And quel '
          + 'cannot stand on its own at all, so what goes in front of the frame is quel plus its thing, which '
          + 'is why the question about the time is à quelle heure est-ce que tu pars rather than quel on its '
          + 'own. Neither of those is a different rule. Both are the same slot with something bigger in it. '
          + 'There are two other ways of asking a question in French, one of them without any frame at all and '
          + 'one with the verb moved in front of the person, and they arrive in their own lesson. This one '
          + 'works everywhere in the meantime and nothing about it has to be unlearned.',
      },
      {
        type: 'teach',
        id: 'sheet-page-only',
        title: 'What you read and never hear',
        layer: 'deep',
        body:
          'Two things in this lesson are invisible to listening, and knowing which is which stops you '
          + 'listening for something that was never recorded. Où and ou are ONE SOUND. One means where and one '
          + 'means or, and both published cards carry the same transcription, so no recording could separate '
          + 'them. What tells you which was meant is where the word sits: où opens a question, ou stands '
          + 'between two things somebody is choosing from. The four shapes of quel are the same situation. '
          + 'Quel, quelle, quels and quelles are all pronounced identically, because the e and the s on the '
          + 'end are written and never said, so the agreement is entirely a decision you make with your eyes '
          + 'on the noun. That is the same idea the colours lesson called endings you write and never say, '
          + 'arriving on a word where it opens the question rather than describing something. The one pair in '
          + 'this lesson your ear genuinely can do is qui against que: qui has a clear ee sound and que has '
          + 'the small unstressed vowel French uses everywhere. That one is worth practising. The other two '
          + 'are worth knowing about so that you stop trying.',
      },
      {
        type: 'teach',
        id: 'sheet-combien-de',
        title: 'combien, and the de that comes with it',
        layer: 'deep',
        body:
          'Combien on its own asks how much something costs, weighs or takes: combien ça coûte, combien de '
          + 'temps. The moment you name the thing you are counting, de arrives between the two: combien de '
          + 'valises, combien de frères, combien de personnes. There are no exceptions to this and leaving it '
          + 'out is the single most common thing an English speaker does with the word. It survives because '
          + 'nothing punishes it: combien valises is understood perfectly by everybody and simply marks a '
          + 'beginner, so no conversation you have will ever give you a reason to fix it. When the thing '
          + 'starts with a vowel, de loses its own vowel and an apostrophe takes the place: combien d\'amis, '
          + 'combien d\'enfants, combien d\'heures. That is not a new rule either. It is the fifth time you '
          + 'have watched French refuse to let two vowel sounds run into each other, after le becoming l '
          + 'apostrophe, ma becoming mon in front of a vowel, ne becoming n apostrophe, and est-ce que '
          + 'becoming est-ce qu. One pressure, five rules, and now there is only the pressure to remember.',
      },
    ],
  },
];

export const INTERROGATIFS_LESSON: Lesson = {
  id: 'a1.20.l1',
  unitId: 'a1.20',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Les mots interrogatifs',
  level: 'a1',
  // TWENTY-THREE, from unit.seq. missions.ts derives the eyebrow at render time
  // as `${level} · LEÇON ${unit.seq}`, and a1.20 sits at seq 23. The stored
  // value is a fallback and has to agree with what the renderer computes, or the
  // two disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 23',
  intro:
    'Seven words that decide which answer you get, and one frame that carries all of them. This is how to ask where, when, who, why, how and how many, put quel in front of a thing, and tell the two differences your ear can never reach.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  // v2 was found ON A DEVICE and by nothing else. a1.19 landed mid-build and
  // everything about the frame was reconciled from "borrowed" to "credited":
  // the card body, the term name, grammarAssumed, the corpus header and the
  // handover. The SECTION TITLE was missed, so the mission list and the act
  // interstitial both drew "One Frame, And It Is Borrowed" above a card saying
  // the learner already has it. Every test stayed green, because the assertion
  // looks for the credit anywhere in the section and the body carried it.
  version: 2,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    'le, la, l\' and les, and the elision of le and la in front of a vowel, introduced in a1.04',
    'The plural of a noun, introduced in a1.03',
    'Agreement on a describing word, introduced in a1.13 and extended in a1.14 and a1.16',
    'That some endings are written and never pronounced, introduced in a1.13 as writtenNotHeard',
    'The nine subject pronouns, introduced in a1.05',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'The acute, grave and circumflex accents, and that a grave can change a word, introduced in sons.05',
    'Elision as a repair for two vowels meeting, introduced in sons.07 and extended by a1.17 and a1.18',
    'est-ce que, that it goes on the front of a statement and moves nothing inside it, and that it elides to est-ce qu before a vowel, introduced in a1.19',
    'That est-ce que is correct in every register, which is a1.19\'s reframe and is not restated here',
    'Comment ça va and Comment vous appelez-vous as fixed greetings, shipped in a1.01 and taken apart here',
    'Quelle heure est-il and Quel temps fait-il as unanalysed blocks, shipped in a1.12 and a1.10 and taken apart here',
  ],
  grammarIntroduced: [
    'The interrogative words qui, que, quoi, où, quand, comment, pourquoi and combien',
    'comment specifically, which the unit canDo omits and which is taught here deliberately',
    'NOT the est-ce que frame, which a1.19 introduced and this lesson only reuses',
    'That a question word occupies a fixed pre-frame slot and that the clause behind it is invariant',
    'The interrogative adjective quel in all four forms, agreeing with its head noun in gender and number',
    'That the four forms of quel are homophonous, so the agreement is orthographic only',
    'que against quoi as one lexeme in complementary distribution by position',
    "qu'est-ce qui against qu'est-ce que as subject and object, for RECOGNITION ONLY and produced nowhere",
    'combien de, and the elision of de to d\' before a vowel, as a fifth instance of anti-hiatus',
    'The minimal pair où against ou, distinguished by the grave accent and homophonous in speech',
    'parce que as the answer form selected by pourquoi',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Question Words',
    subFr: 'Les mots interrogatifs',
    introFr: 'Sept mots qui décident de la réponse, et un seul cadre qui les porte tous.',
    minutes: 28,
    difficulty: 2,
    glyph: '❓',
    screens: 217,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: INTERROGATIFS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-20-interrogatifs.test.ts, because a
    // constraint on how something is recorded becomes invisible the moment the
    // clip is delivered. All six of the brief's lesson-specific notes are
    // written in explicitly.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-20-hero',
        desc:
          'THE MOST IMPORTANT CLIP IN THE LESSON. ONE SENTENCE ASKED WITH ALL SEVEN WORDS, IN ONE TAKE, ONE '
          + 'VOICE, read straight down the list with no gap and no reset between rows. « Où est-ce que tu '
          + 'pars ? Quand est-ce que tu pars ? Pourquoi est-ce que tu pars ? Comment est-ce que tu pars ? '
          + 'Avec qui est-ce que tu pars ? Combien de temps est-ce que tu pars ? À quelle heure est-ce que tu '
          + 'pars ? » '
          + 'THE LAST FOUR WORDS MUST BE ACOUSTICALLY IDENTICAL IN ALL SEVEN. That sameness IS the lesson. A '
          + 'reader who records these seven separately will vary the pace and the intonation of the tail, and '
          + 'the learner will hear that variation as something the question word did. It did not. Read the '
          + 'seven as one list at one pace with one contour. '
          + 'EST-CE QUE IS UNSTRESSED THROUGHOUT and runs together as a single block, ess-kuh. Do not give it '
          + 'three separate words and do not put a beat before it. The stress in every one of these seven '
          + 'sentences falls on PARS and nowhere else.',
        clipIds: [
          ...HERO.map((h) => h.fr),
          'seven-words-one-tail',
        ],
      },
      {
        id: 'rec-a1-20-pair',
        desc:
          'THE SCENE\'S CHOICE, AND THE TWO LINES MUST BE IDENTICAL FROM THE SECOND WORD ON. « Où est-ce que '
          + 'le train part ? » immediately followed by « Quand est-ce que le train part ? », ONE TAKE, one '
          + 'voice. The only difference the learner may hear is the first word. '
          + 'DO NOT MAKE THE WRONG ONE SOUND WRONG. It is correct French and it gets a correct answer, and '
          + 'the whole scene depends on it sounding completely ordinary. Any hesitation or emphasis on the '
          + 'first line turns a slip nobody catches into a mistake somebody signalled, which is the opposite '
          + 'of what happened.',
        clipIds: [
          'Où est-ce que le train part ?', 'Quand est-ce que le train part ?', 'ou-quand-pair',
        ],
      },
      {
        id: 'rec-a1-20-quel',
        desc:
          'ALL FOUR FORMS OF QUEL IN A SINGLE TAKE, CONSECUTIVELY, PRECISELY SO THE LEARNER HEARS THAT '
          + 'NOTHING CHANGES. « quel, quelle, quels, quelles », one after another, one voice, one pace, no '
          + 'gap. RECORDED APART, A SPEAKER WILL DRIFT AND INVENT A DIFFERENCE THAT DOES NOT EXIST, and a '
          + 'learner who hears an invented difference will spend a year listening for it. If a reader cannot '
          + 'resist marking the feminine or the plural, RECORD quel ONCE AND USE IT FOR ALL FOUR: that is a '
          + 'more truthful clip than a performed difference. '
          + 'Then, in the same take, the four sentences: « Quel train est là ? Quelle valise est là ? Quels '
          + 'trains sont là ? Quelles valises sont là ? » The first word of all four is the same word and '
          + 'must be read as the same word. The s of quels, valises and trains is SILENT in every one of '
          + 'these four lines. Do not sound any of them.',
        clipIds: [
          'quel', 'quelle', 'quels', 'quelles', 'quel-four-identical',
          'Quel train est là ?', 'Quelle valise est là ?', 'Quels trains sont là ?', 'Quelles valises sont là ?',
        ],
      },
      {
        id: 'rec-a1-20-ouou',
        desc:
          '« où » AND « ou » IN ONE TAKE, ADJACENT, AND THEY MUST BE THE SAME SOUND, because that is exactly '
          + 'what they are. Same reason and same risk as the quel group: two separate recordings are two '
          + 'performances, and a reader who knows one of them is a question word will lift it. Do not. If in '
          + 'doubt, record ou once and use it for both. '
          + 'Then in the same take: « Où est le train ? » and « Le train ou le bus ? », so the learner hears '
          + 'the same sound doing two different jobs in one situation. Read both plainly. The teaching is '
          + 'that the ear cannot help and only the position can, and a performed difference teaches the '
          + 'opposite of it.',
        clipIds: ['où', 'ou', 'ou-identical-pair', 'Où est le train ?', 'Le train ou le bus ?'],
      },
      {
        id: 'rec-a1-20-ear',
        desc:
          '« qui » AND « que » ADJACENT, ONE TAKE, and this is the one pair in the lesson that IS a real '
          + 'minimal pair. Read them at ordinary speed with no exaggeration: qui has a clear ee and que has '
          + 'the ordinary unstressed vowel. Do not lengthen either. The difference is genuinely there and '
          + 'does not need help. '
          + 'Also in this take, and separately from the pair: « quand » and « comment » adjacent, at '
          + 'CONVERSATIONAL SPEED rather than slowly. Both end in the same nasal and at speed they are '
          + 'closer than a learner expects, which is the point of the clip. A carefully slowed reading makes '
          + 'them trivially distinguishable and teaches nothing.',
        clipIds: ['qui', 'que', 'qui-que-pair', 'quand', 'comment', 'quand-comment-fast'],
      },
      {
        id: 'rec-a1-20-frame',
        desc:
          'NEVER RECORD « est-ce que » IN ISOLATION. It is an unstressed block that only exists in front of '
          + 'a sentence, and a clip of it alone would give it a stress pattern it never has in speech. If a '
          + 'request for one arrives, it is a mistake in the request. '
          + 'What IS recorded here is the frame IN PLACE: « Est-ce que tu es prêt ? » with nothing in front '
          + 'of it, then « Où est-ce que tu habites ? » and « Est-ce que le train part à midi ? ». In all '
          + 'three the frame runs together as one unstressed block, ess-kuh, and the stress falls at the end '
          + 'of the sentence. '
          + 'The two blocks built on it, « qu\'est-ce que » and « qu\'est-ce qui », ARE recorded on their '
          + 'own, because unlike the bare frame they are things a learner says as a unit. Read them '
          + 'adjacently so the learner hears that only the last syllable separates them.',
        clipIds: [
          'Est-ce que tu es prêt ?', 'Où est-ce que tu habites ?', 'Est-ce que le train part à midi ?',
          "qu'est-ce que", "qu'est-ce qui", 'quest-ce-pair',
        ],
      },
      {
        id: 'rec-a1-20-five',
        desc:
          'The five that stand alone, each on a published sentence: « Où est la gare ? Quand commence le '
          + 'cours ? Comment vas-tu ? Pourquoi est-ce que tu es en retard ? Qui es-tu ? » One take, one '
          + 'voice, ordinary pace. '
          + 'KEEP EVERY NASAL CLOSED AND UNRELEASED. quand, comment and combien are nasal vowels with NO n '
          + 'sound behind them at all, and the app respells them KAHⁿ, koh-MAHⁿ and kohⁿ-BYAⁿ deliberately. '
          + 'The shipped cards used to close all three with a plain n and this lesson repairs them, so a '
          + 'recording that sounds the n would put the error back where the transcription no longer has it. '
          + 'The d of quand and the t of comment are silent.',
        clipIds: [
          'Où est la gare ?', 'Quand commence le cours ?', 'Comment vas-tu ?',
          'Pourquoi est-ce que tu es en retard ?', 'Qui es-tu ?',
        ],
      },
      {
        id: 'rec-a1-20-combien',
        desc:
          '« Combien de valises as-tu ? » and « Combien d\'amis as-tu ? » ADJACENT, ONE TAKE, because the '
          + 'only difference between them is what happens to de and the learner has to hear that de is still '
          + 'there in both. In the second one the d attaches to the front of amis and comes out as one word, '
          + 'da-mee. Do not read it as combien, pause, d\'amis. '
          + 'BOTH NASALS IN COMBIEN ARE OPEN VOWELS WITH NO N BEHIND THEM. This is the word whose shipped '
          + 'respelling closed both of them with a plain n, and it is the worst row this lesson repairs. '
          + 'Also in this take: « Combien de temps dure le film ? », where de is in front of a consonant '
          + 'again.',
        clipIds: [
          'Combien de valises as-tu ?', "Combien d'amis as-tu ?", 'combien-de-delision-pair',
          'Combien de temps dure le film ?',
        ],
      },
      {
        id: 'rec-a1-20-que',
        desc:
          'One question in three positions, ONE TAKE, adjacent: « Qu\'est-ce que tu fais ? », « Tu fais '
          + 'quoi ? », « Que fais-tu ? ». The learner has to hear that these are the same question, so read '
          + 'all three at the same pace and with the same weight. Do NOT read the third one more formally '
          + 'than the others: register is a1.19\'s lesson and this one does not teach it, and a performed '
          + 'formality would teach it by accident. '
          + 'The subject and object pair, in the same take: « Qu\'est-ce qui est dans le sac ? » and '
          + '« Qu\'est-ce que tu as dans le sac ? ». Everything from dans onwards is identical and must '
          + 'sound identical.',
        clipIds: [
          "Qu'est-ce que tu fais ?", 'Tu fais quoi ?', 'que fais-tu ?', 'que-three-positions',
          "Qu'est-ce qui est dans le sac ?", "Qu'est-ce que tu as dans le sac ?",
        ],
      },
      {
        id: 'rec-a1-20-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. Read '
          + 'EVERY wrong version plainly and at ordinary pace rather than comically. '
          + 'THREE OF THE FIVE ARE ACOUSTICALLY IDENTICAL TO THEIR CORRECT VERSIONS and that is the point of '
          + 'recording them at all: « Ou est le train ? » against « Où est le train ? » is one sound twice, '
          + 'and « Quel heure est-il ? » against « Quelle heure est-il ? » is one sound twice. Record them '
          + 'as such. A reader who marks the wrong one destroys the lesson those two traps exist to teach. '
          + '« Combien enfants avez-vous ? » against « Combien d\'enfants avez-vous ? » DOES differ audibly. '
          + 'So does « Tu fais que ? » against « Tu fais quoi ? », and the first of those genuinely sounds '
          + 'wrong, which is correct: it is the one trap in the group a French ear rejects immediately.',
        clipIds: [
          'trap-ou-accent', 'trap-quel-heure', 'trap-combien-no-de', 'trap-tu-fais-que', 'trap-ou-vs-quand',
        ],
      },
      {
        id: 'rec-a1-20-scene',
        desc:
          'The opening scene, French bubbles only. The man at the information desk is in his fifties, has '
          + 'answered four hundred questions today and is STILL GENUINELY PLEASANT. His line « Voie 7. Tout '
          + 'droit, puis à gauche. » MUST BE HELPFUL AND COMPLETELY UNSUSPICIOUS. He has not noticed '
          + 'anything, because there is nothing to notice: the question he was asked was a good question and '
          + 'he answered it correctly. '
          + 'ANY HINT OF A QUESTION IN HIS VOICE TURNS THE SCENE INTO A CORRECTION and loses the whole point, '
          + 'which is that the error is invisible from both sides and costs a train anyway.',
        clipIds: [
          'Bonjour ! Je vous écoute.', 'Voie 7. Tout droit, puis à gauche.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const INTERROGATIFS_ITEM_IDS = ITEM_IDS;
export const INTERROGATIFS_SPEAK_IDS = SPEAK_IDS;
export const INTERROGATIFS_DICTATION_IDS = DICTATION_IDS;
export const INTERROGATIFS_TRANCHES = DECK_TRANCHE;
export const INTERROGATIFS_HEADWORD_IDS = [...HEADWORDS, ...QUEL_HEADWORDS];
export const INTERROGATIFS_HERO_IDS = HERO_ROW_IDS;
export const INTERROGATIFS_WILD_IDS = IN_THE_WILD;
export const INTERROGATIFS_ANSWER_IDS = ANSWER_IDS;
export const INTERROGATIFS_QUEL_CELL_IDS = QUEL_CELL_IDS;

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * The brief asks for this explicitly and names two readers: a1.19, which is this
 * lesson's declared prerequisite, and a1.30 "A1 Review", which declares a1.20 as
 * one of its four prerequisites.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  a1.19 LANDED MID-BUILD AND TOOK THIS LESSON'S ID RANGE. THREE LESSONS
 *  SHIPPED WHILE THIS ONE WAS BEING WRITTEN.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * a1.18 landed, then a1.22, then a1.19, and the seed went from 31 lessons and
 * 7,542 items to 33 and 7,638 in the time it took to author these files. The
 * brief says a1.19 "is your prerequisite and is NOT BUILT" and asks for both
 * orders to be planned for. Both orders happened: the lesson was written for the
 * absent branch and reconciled to the present one.
 *
 * THE ID COLLISION, WHICH IS THE PART WORTH READING TWICE.
 *
 *   The pre-flight probe reported fr.a1.questions.352-400 as EMPTY and
 *   NEXT FREE = .352. These 28 rows were authored there. a1.19 landed between
 *   that probe and the first dry run and took .352-.373. Every id here shifted
 *   by 22, to .374-.401, and nothing else about the content changed.
 *
 *   a1.17's collision guard DOES NOT CATCH THIS and the next author will inherit
 *   it. That check is `rowsInMyRange.filter(r => !myIds.includes(r.id))`, which
 *   works only when the other lesson takes ids ADJACENT to yours, as a1.15 did
 *   to a1.17. a1.19 took the SAME ids, so every one of its rows read as "mine"
 *   and the filter emptied. The dry run passed clean.
 *
 *   The tell was a row COUNT: the probe measured `questions` at 502 and the
 *   batch printed 524. author-interrogatifs-batch.ts now compares BY CONTENT,
 *   so a row at one of this batch's ids that says something else is foreign
 *   whoever owns it. Copy that version rather than a1.17's.
 *
 * WHAT WAS RECONCILED RATHER THAN DUPLICATED, on a1.19's own instructions:
 *
 *   `est-ce que` IS CREDITED, NOT BORROWED. It was `borrowedFrame` for most of
 *   this build. a1.19's handover says the block is built, that the learner has
 *   the elision to est-ce qu', and that a1.20 "can introduce « Qu'est-ce que tu
 *   fais ? » as the block you already have with a question word bolted in front
 *   of it rather than as a new four-word idiom". s03-frame and s11-que both do
 *   exactly that, and `grammarAssumed` names a1.19 twice.
 *
 * WHAT WAS DELIBERATELY NOT TAKEN:
 *
 *   THE REGISTER SYSTEM. a1.19's headline is "Est-ce que always works. The other
 *   two are choices." Not one card here teaches intonation, inversion, or which
 *   of the three to use when. REGISTER_TEACHING in the corpus file is the guard
 *   list and the test runs against it. The three positions of que in act 4 are
 *   taught as POSITIONS rather than as registers, and s11-que says explicitly
 *   that which one somebody picks "belongs to another lesson".
 *
 *   THE FREQUENCY COUNT IS NOT A REGISTER MEASUREMENT. The corpus holds
 *   qu'est-ce que 23 times, que fais-tu 4 and tu fais quoi 1. The brief says
 *   plainly that this is consistent with the register claim and is not evidence
 *   for it, and this lesson repeats that rather than quietly using the ratio as
 *   proof. It says only that the qu'est-ce que form is the most common.
 *
 * WHAT a1.19 MAY NOW ASSUME, since a later revision of it is the likeliest
 * thing to read this:
 *
 *   ITS FRAME IS REUSED AND ITS REFRAME IS UNCONTRADICTED. "Est-ce que always
 *   works" and this lesson's "Your word, then est-ce que. That always works."
 *   are the same claim one step apart, deliberately, so whichever a learner
 *   meets second finds the other already agreeing with it.
 *
 *   THE QUESTION WORDS ARE NOW TAUGHT, all eight of them plus the four shapes of
 *   quel. a1.19's QUESTION_WORD_TEACHING guard can stay exactly as it is: this
 *   lesson owns that material and a1.19 still names none of it.
 *
 *   « Qu'est-ce que » AND « qu'est-ce qui » NOW HAVE HEADWORD CARDS, at
 *   fr.sons.questions.174 and .175. a1.19's handover notes it authored nothing
 *   in that sequence; these two are the first rows in it since it was published.
 *
 *   INVERSION WITH A NOUN SUBJECT IS STILL NOBODY'S. a1.19 withdrew its only
 *   good corpus row for it (fr.a1.questions.086, which carries « le tien », a
 *   possessive pronoun a1.17 bans) and this lesson does not teach inversion at
 *   all, so « Ton frère est-il là ? » remains unbuilt and unclaimed.
 *
 *   « Pourquoi pas ? » IS STILL FREE. It exists published at
 *   fr.sons.questions.030 and this lesson does not import it, because negation
 *   is a1.18's and it landed during this build.
 *
 *   THE ID RANGE, for whoever authors into `questions` next:
 *
 *       fr.a1.questions.001-.351     published before this build
 *       fr.a1.questions.352-.373     a1.19. Twenty-two rows, landed mid-build.
 *       fr.a1.questions.374-.401     a1.20. Twenty-eight rows.
 *       fr.a1.questions.402+         FREE.
 *       fr.sons.questions.001-.173   published before this build
 *       fr.sons.questions.174-.175   a1.20. Two rows.
 *       fr.sons.questions.176+       FREE.
 *
 *   The gap list in fr.a1.questions (193, 195, 206-208, 250, 251, 256, 265,
 *   266, 279, 282, 284, 286, 288 and seven more) is UNTOUCHED. Gaps are gaps
 *   and not free slots; ids are the SRS key and renumbering breaks it.
 *
 *   RE-RUN `pnpm corpus:probe --theme questions` BEFORE AUTHORING rather than
 *   trusting that block. Two lessons landed during this build, the seed moved
 *   from 31 lessons and 7,542 items to 33 and 7,638 while this file was being
 *   written, and THIS lesson's range was taken out from under it by the third.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  FOR a1.30 "A1 REVIEW", WHICH DECLARES a1.20 AS A PREREQUISITE
 * ══════════════════════════════════════════════════════════════════════════
 *
 * WHAT THE LEARNER CAN DO AFTER THIS LESSON:
 *
 *   Ask a question with any of qui, que, où, quand, comment, pourquoi and
 *   combien, using est-ce que and a clause they already had. Choose the word by
 *   deciding which fact they want rather than by recalling a list.
 *
 *   Use quel in all four forms, agreeing with the noun behind it, and knows the
 *   agreement is inaudible.
 *
 *   Distinguish où from ou IN WRITING, and knows the two are one sound.
 *
 *   Produce combien de and combien d' correctly, and connects the elision to
 *   the four earlier instances they have met.
 *
 *   RECOGNISE qu'est-ce qui against qu'est-ce que. NOT produce it: it is one
 *   card, no drill, and one quiz question that asks what decided the form
 *   rather than asking the learner to build one.
 *
 * WHAT THE LEARNER STILL CANNOT DO, so a1.30 does not test it:
 *
 *   Ask a question by intonation or by inversion. Both are a1.19's and it is
 *   unbuilt. Every question this lesson produces uses est-ce que.
 *
 *   Conjugate any verb but être and avoir. There is no regular-verb unit in A1.
 *   This lesson DISPLAYS pars, fais, habites, dure, commence and préfères as
 *   reading exposure and asks the learner to produce none of them; every dictée
 *   target, speak target and free-text answer is built on être, avoir or the
 *   question word alone. PRODUCIBLE_VERBS in the corpus file is the list.
 *
 *   Use qui or que as a RELATIVE pronoun (« l'homme qui parle »). That is A2,
 *   the corpus is full of it, and RELATIVE_FRAMES guards every production
 *   surface here against it.
 *
 *   Ask an indirect question (« Je ne sais pas où il est »). B1, and it reuses
 *   every one of these words. INDIRECT_QUESTION_FRAMES is the guard.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  THINGS THIS BUILD FOUND AND DID NOT FIX, because none is its to fix
 * ══════════════════════════════════════════════════════════════════════════
 *
 *   THE UNIT canDo OMITS `comment`. It reads "Can ask who, what, where, when,
 *   why and how much questions". The build request asks for comment, the corpus
 *   has 34 published sentences using it in this theme alone, and a1.01 shipped
 *   « Comment ça va ? » as the first thing in the course. comment IS TAUGHT and
 *   THE UNIT WAS NOT REWRITTEN. Silently editing a unit to match a lesson is a
 *   curriculum decision. It is in the report and `comment` is asserted by name
 *   in the batch, the merge and the test so that a later reader who spots the
 *   mismatch cannot "correct" the lesson into the unit string.
 *
 *   FOUR MORE BROKEN OR DIVERGENT RESPELLINGS OF WORDS THIS LESSON TEACHES, all
 *   in themes it never opens: fr.sons.mots-essentiels.038 quand KAHN,
 *   fr.sons.consonnes.152 quel KEL, fr.a1.tourisme.056 le train TRAN and
 *   fr.a1.transports-quotidiens.004 le train luh TRAHN. See NOT_REPAIRED.
 *   Repairing a row this lesson does not display is reaching into somebody
 *   else's card.
 *
 *   fr.sons.questions.031 AND .032 STORE THEIR ipa WITH SLASHES while .010 and
 *   .011 do not. Reported and not changed: the density validator reads the
 *   lesson's strings rather than the corpus rows, and normalising a field
 *   nothing renders would be a tidy-up riding on a correctness repair.
 *
 *   THE `questions` THEME IS OUTSIDE `SEED_CUT.themes`. 502 rows are published
 *   and seven were in the seed before this build. Every imported row therefore
 *   had to be carried, which is why the import is forty rows rather than a
 *   handful. That is correct behaviour and not a failed merge.               */
export const HANDOVER_NEXT_FREE_IDS = {
  sentences: 'fr.a1.questions.402',
  words: 'fr.sons.questions.176',
};

/** The register system a1.19 owns, which this lesson must never teach. Exported
 *  so the batch, the merge and the test all run the same guard. */
export { REGISTER_TEACHING } from './interrogatifs-corpus.ts';
