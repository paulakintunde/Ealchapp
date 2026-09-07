// a1.19.l1 "Questions oui / non": the lesson body.
//
// Reads every French string, respelling and gloss from questions-corpus.ts and
// restates none of them. Before that convention one word's transcription was
// typed by hand in five sections and the five copies were free to drift.
//
// ── The layout decisions, each of which is a rule from A1-BUILD-INVARIANTS ──
//
// THE HERO IS s04-triple AND IT IS A tapTable WITH TWO COLUMNS, NOT THREE.
//
// The brief asks for two things that pull against each other: "the three methods
// on one screen, asking one question... with a register label on each" and
// "register wants a tapTable with a third column, not prose. Method, example,
// and when to use it."
//
// A three-column table whose middle column holds « Est-ce que vous êtes prêts ? »
// does not fit a Pixel 6. `tapTable` is NOT in `ownsLayout()` (LessonPager.tsx:162)
// so it renders inside a scrolling page, and a full sentence in a third of the
// width wraps to four lines and takes the row height with it. So the in-flow
// table is TWO columns, the question and who you would say it to, and the third
// column the brief wants lives on sheet.a1.19.methods as a proper three-column
// `table`, where `layer: 'deep'` lifts the core density caps and a learner can
// scroll on purpose. The teaching that would have been the third column is in
// each row's detail modal, which is a card and can hold prose.
//
// The thing the brief is actually protecting is that ONE SECTION shows ONE
// question in ALL THREE FORMS, and that is what the batch, the merge and the
// test assert. Split across three missions the learner gets three unrelated
// forms and no basis for choosing, which is precisely the failure the canDo is
// written against.
//
// NO groupDrill CARRIES `size`. A groupDrill owns the viewport at `xl` and not
// otherwise, which is true, and `xl` is unusable here: `density.logic.ts` reads
// it as a TWELVE-WORD CAP ON EVERY STRING IN THE SECTION, and every check in
// this lesson carries a `why` that has to teach the register rather than name
// it. a1.13 and a1.17 made the same call for the same reason and both shipped.
//
// NO INTONATION CURVE IS DRAWN. The brief is explicit and it is right: no
// component draws one, `imageRef` resolves through a statically enumerated
// registry in `lessonImages.ts`, an unregistered ref renders a blank box, and
// `lesson-contract.test.ts` does NOT check it despite a comment in `schema.ts`
// claiming it does. Audio is the right medium for a contour anyway. The batch
// asserts no image is authored.
//
// ── The dictée, and why every target is short ──────────────────────────────
//
// `dicteeMode` switches to WORD mode above DICTEE_LETTER_LIMIT letters, and word
// mode hands the learner each whole word as a pre-spelled tile. For a lesson
// about WORD ORDER that is fatal: tapping a tile marked `es-tu` is not choosing
// to invert. Every target below is short enough to stay in LETTERS mode and each
// is checked through the real `dicteeMode` in the batch, the merge and the test.
//
// The measured boundary, worth recording because the next questions lesson will
// hit it: « Est-ce que tu es prêt ? » is SIXTEEN letters and stays in letters
// mode; « Est-ce qu'elle est ici ? » is seventeen and does not. So the est-ce
// que form is dictatable only on the shortest subjects, and « Non, je ne suis
// pas prêt. » at eighteen letters cannot be a target at all.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { QUESTIONS_TERMS, REFRAME } from './questions-terms.ts';
import {
  AUTHORED_IDS, AVOIR_INVERSIONS, ETRE_INVERSIONS, INVERSIONS, METHODS, THE_TWELVE, TRIPLES,
  enOf, frOf, roleIds, sub, subOf,
} from './questions-corpus.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * Grouped by the job the ids do, so a section names a GROUP and the tranche
 * slices read from the same groups rather than restating a list.
 *
 * Every id below is SHOWN on a screen, or named by a drill or a term. a1.08
 * shipped 43 itemIds named by nothing at all, released to spaced repetition and
 * drawn by no component, and it was invisible until a check asked "did the
 * learner see it" rather than "does this id resolve". The same check runs here,
 * in the batch, the merge and the test.                                      */

/** The four answers, as headword cards. Every one already existed. */
const ANSWER_WORDS = [
  'fr.sons.mots-essentiels.042',    // oui
  'fr.sons.mots-essentiels.043',    // non
  'fr.sons.expressions-utiles.051', // peut-être
  'fr.sons.argot-de-base.037',      // si   <- the brief says this row is not there
];

/** The est-ce que block and the two tags, all three already published in this
 *  lesson's own theme and none of them known to the brief. */
const BLOCK_AND_TAGS = [
  'fr.sons.questions.014', // est-ce que
  'fr.sons.questions.077', // n'est-ce pas ?   the formal tag
  'fr.sons.questions.169', // non ?            the casual tag, and the one repair
];

/** The nine cells of the three hero triples, in reading order: three questions
 *  by three methods. Two thirds of these were already published and the missing
 *  third is always the inversion. */
const TRIPLE_IDS = TRIPLES.flatMap((t) => t.cells.map((c) => c.id));

/** The twelve inversion forms, as full questions. */
const TWELVE_IDS = INVERSIONS.map((i) => i.id);

/** The elision, and the statement that is the question's twin. */
const ELISION_IDS = roleIds('elision');
const STATEMENT_IDS = roleIds('statement');
const ANSWER_IDS = roleIds('answer');
const NEGATIVE_IDS = roleIds('negative');

/** The three methods surviving in French nobody arranged for this lesson. Every
 *  one is a published sentence carrying a method the lesson teaches, on être or
 *  avoir, with NO question word in it. Filtering those out was the single
 *  largest curation cost of this build: 257 of the 329 rows in fr.a1.questions
 *  are question-word questions and belong to a1.20. */
const IN_THE_WILD = [
  'fr.a1.questions.008',                // Est-ce que tu es français ?
  'fr.a1.questions.038',                // Est-ce que c'est loin d'ici ?
  'fr.a1.questions.310',                // Est-ce qu'il y a un supermarché près d'ici ?
  'fr.a1.questions.116',                // Est-ce qu'il y a du vent aujourd'hui ?
  'fr.a1.questions.012',                // As-tu des enfants ?          the tu half
  'fr.a1.questions.329',                // Avez-vous des enfants ?      the vous half
  'fr.a1.questions.099',                // Avez-vous la taille en dessous ?
  'fr.a1.expressions-utiles.005',       // Es-tu d'accord avec cette décision ?
  'fr.a1.pays-et-nationalites.299',     // Sont-ils canadiens ?
  'fr.a1.questions.327',                // Avons-nous assez de temps pour visiter le musée ?
  'fr.a1.au-restaurant.186',            // Y a-t-il des noix dans ce plat ?
  'fr.a1.nombres.025',                  // Quel âge a-t-il ?   READING ONLY, a1.20's shape
  'fr.a1.expressions-frequentes.058',   // Tu as besoin d'aide ?
  'fr.a1.presentation-personnelle.087', // Tu es canadien ?
  'fr.a1.presentation-personnelle.091', // Vous êtes anglais ?
  'fr.a1.questions.340',                // Tu es prêt pour l'examen de demain ?
  'fr.a1.animaux-domestiques.027',      // Ton chat miaule toujours le soir, n'est-ce pas ?
];

const ITEM_IDS = [
  ...new Set([
    ...ANSWER_WORDS, ...BLOCK_AND_TAGS, ...TRIPLE_IDS, ...TWELVE_IDS,
    ...ELISION_IDS, ...STATEMENT_IDS, ...ANSWER_IDS, ...NEGATIVE_IDS, ...IN_THE_WILD,
  ]),
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag.
 *
 *  `est-ce que` IS DELIBERATELY NOT IN HERE, and that is a teaching decision as
 *  much as an audio one. The audio brief says never to record it in isolation:
 *  it is an unstressed block that only exists in front of a sentence, and a lone
 *  clip invites the learner to stress it. A speak card on the bare block would
 *  do exactly that, with a microphone listening. So the spoken mission is whole
 *  questions and whole answers, every one of which has a sentence behind the
 *  method. Same call a1.17 made about bare possessives, for the same reason.
 *
 *  AND IT IS RESTRICTED TO THIS LESSON'S OWN AUTHORED ROWS, which was found by
 *  the batch rather than decided in advance. Five of the nine hero-triple cells
 *  are published rows this lesson did not write, and NONE of the est-ce que or
 *  intonation cells carries `voiceflash`:
 *
 *      fr.a1.cafe.176                    Tu es prêt ?             sentence/flashcard/voiceflash/review
 *      fr.a1.questions.338               Tu as faim ?             sentence/flashcard/review      <- no voiceflash
 *      fr.a1.questions-du-quotidien.075  Est-ce que tu es prêt ?  dictation                      <- no voiceflash
 *      fr.a1.questions-du-quotidien.072  Est-ce que tu as faim ?  dictation                      <- no voiceflash
 *      fr.a1.cafe.178                    Vous êtes prêts ?        sentence/flashcard/review      <- no voiceflash
 *
 *  An item without `voiceflash` renders in the mic-scored deck as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag. The alternative was to ADD the drill to five rows belonging to
 *  three other lessons, which would put them in the café lesson's voice deck as
 *  a side effect. Not this lesson's call to make.
 *
 *  WHAT THAT COSTS, said plainly: the learner never speaks the rising-contour
 *  form in this mission, and that form is the one the contour matters on. It is
 *  covered instead by the quiz, whose r1 speak question targets « Tu es prêt ? »
 *  as a literal string rather than as an itemId and so is unaffected. If those
 *  five rows ever gain `voiceflash`, put them back. */
const SPEAK_IDS = [
  ...TWELVE_IDS, ...ELISION_IDS, ...STATEMENT_IDS,
  ...ANSWER_IDS, ...NEGATIVE_IDS, 'fr.a1.questions.367',
];

/** The dictée, and every target was chosen by MEASUREMENT rather than taste.
 *
 *  Letters mode makes the learner write the order themselves, which is the
 *  entire point of a dictée in a lesson about which word goes first. Word mode
 *  would hand them `es-tu` on a tile. Every id below is short enough to stay in
 *  letters mode, verified through the real `dicteeMode` in the batch, the merge
 *  and the test.
 *
 *  The five between them cover: the statement, the question that differs from it
 *  by nothing you can type, the inversion with its hyphen, the same on avoir,
 *  and `si`. Note the second and third are the whole lesson in two lines. */
const DICTATION_IDS = [
  'fr.a1.questions.368', // Tu es prêt.            the statement, 8 letters
  'fr.a1.questions.352', // Es-tu prêt ?           the hyphen, 8 letters
  'fr.a1.questions.358', // As-tu faim ?           the same on avoir, 8 letters
  // THE BOUNDARY CASE, and it was measured rather than guessed. The obvious
  // est-ce que target was the authored `Est-ce que vous êtes prêts ?`, which is
  // TWENTY-ONE letters and lands in word mode, where the learner taps `est-ce`
  // and `que` as pre-spelled tiles instead of writing them. The tu version is
  // sixteen and stays in letters mode, so it is the one used here. Both were run
  // through the real dicteeMode; neither was counted by eye.
  'fr.a1.questions-du-quotidien.075', // Est-ce que tu es prêt ?   16 letters, at the limit
  'fr.a1.questions.373', // Si, je suis prêt.      12 letters
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes is being MISREAD AS A PERSON rather than being
 * corrected, and the brief picks the right beat: the learner uses inversion with
 * a friend, the friend hears something stiff and formal, answers politely, and
 * the warmth drops a notch. Nobody says anything. The learner never learns why
 * the conversation cooled.
 *
 * That is sharper than the alternative the brief offers, a flat contour landing
 * as a statement, and for a precise reason: the flat contour is a mistake the
 * learner can eventually HEAR, and this one is not. It is also the only one of
 * the two that produces a perfectly correct sentence. « As-tu faim ? » is
 * textbook French. Nothing about it is wrong and nothing about it can be
 * corrected, which is what makes it worth a scene rather than a trap card.
 *
 * The choice beat is `As-tu faim ?` against `Tu as faim ?`, which is the
 * brief's own suggestion and is also this lesson's authored triple, so the beat,
 * the table, the drill and the dictée are all the same rows.                  */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Théo\'s kitchen in Lyon. You have known him a month, you are cooking together, and it is going well.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You want to ask whether he is hungry yet. You know how to do this. You learned the neat version, the one that looked most like proper French.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Théo',
    fr: 'Bon, on mange vers huit heures ?',
    en: 'Right, shall we eat around eight?',
    stage: 'He is chopping something and not looking up. Nothing rides on this at all.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You want to ask if he is hungry now. Which line do you say?',
    options: [
      {
        fr: frOf('fr.a1.questions.358'),
        respell: sub('As-tu faim ?'),
        en: 'the tidy one you learned from a book',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.questions.338'),
        respell: sub('Tu as faim ?'),
        en: 'the one you have heard people actually say',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Now watch the other one, because it is the one that looks more correct on paper.',
      breaks: 'Nothing about that is wrong. Watch what it does to the room.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: frOf('fr.a1.questions.358'),
    en: '(Perfect French. The kind that gets full marks)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Théo',
    fr: 'Oui, merci. Un peu.',
    en: 'Yes, thank you. A little.',
    stage: 'He looks up for a second. Then he says merci, which he has not said to you all evening, and goes back to the board.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Nothing you said was wrong',
    // 33 words. The shipped scene breaks run 24 to 40 here.
    body: 'As-tu faim ? is correct French and Théo understood it completely. That is the problem. It is the form you would use in a letter, and he heard you put a jacket on.',
    wrong: {
      fr: frOf('fr.a1.questions.358'),
      ipa: '/a ty fɛ̃/',
      respell: sub('As-tu faim ?'),
      en: 'Correct, careful, and aimed at somebody you are keeping at arm\'s length',
    },
    right: {
      fr: frOf('fr.a1.questions.338'),
      ipa: '/ty a fɛ̃/',
      respell: sub('Tu as faim ?'),
      en: 'The same question, asked of a friend',
    },
    coach: `${REFRAME} And a friend in a kitchen is one of the two places you would not choose the careful one.`,
    // Audio-first: the ear gets the two lines before the eye can read the gloss.
    // `autoplay` is NOT set: it is declared in schema.ts and implemented in no
    // component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-19-triple' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Théo, later, to somebody else',
    fr: 'Tu as faim ? On mange bientôt.',
    en: 'Are you hungry? We are eating soon.',
    stage: 'Said to his flatmate, three feet away, about the same food. Same question, and it sounds nothing like yours.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Both of you asked the same thing. One of you sounded like a friend. The next twenty-five minutes are about which one to reach for.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: three ways to ask ──────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Question That Put A Jacket On',
    frSub: 'As-tu faim ou tu as faim ?',
    render: 'screens',
    layer: 'core',
    terms: ['whoAreYouTalkingTo'],
    say: {
      text: 'Every word correct, nobody corrects anything, and the evening goes slightly cooler. Watch which form.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A narrow kitchen, two people cooking, a chopping board between them',
      city: 'Lyon',
      time: 'Saturday evening',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That is the next twenty-five minutes.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the first one is a habit rather than a list.',
    goals: [
      { t: 'Ask any yes-or-no question three ways', s: 'One question, three shapes, and all three mean exactly the same thing.' },
      { t: 'Pick the right one for the person in front of you', s: 'This is the part that is not in the grammar. It is the part the room notices.' },
      { t: 'Use all twelve swapped-round forms', s: 'A closed list rather than a pattern, because you can only conjugate two verbs so far.' },
      { t: 'Answer with oui, non, peut-être and si', s: 'Three of those are easy. The fourth only exists because of a question with a not in it.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-one-question',
    title: 'One Question, Three Shapes',
    frSub: 'Une question, trois formes',
    hint: 'Five cards before any table.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theSafeDefault', 'whoAreYouTalkingTo'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-triple' },
    say: 'Five cards, and the third one is the one to hold on to if you only keep one.',
    cards: [
      {
        label: 'the same question',
        head: 'Three ways to ask one thing',
        fr: `${frOf('fr.a1.cafe.176')} · ${frOf('fr.a1.questions-du-quotidien.075')} · ${frOf('fr.a1.questions.352')}`,
        sub: 'Are you ready? · Are you ready? · Are you ready?',
        body: 'Those three lines are the same question. Not similar, not roughly equivalent. Identical in meaning, and a French speaker hearing any of them would answer exactly the same way.',
      },
      {
        label: 'so what separates them',
        head: 'Who you are saying it to',
        body: 'The difference is not what you are asking. It is who is in front of you and how careful you are being with them. That is the whole lesson, and it is the part a table of three forms cannot tell you.',
      },
      {
        // THE CARD THE LESSON HANGS ON.
        label: 'the one that always works',
        head: 'Est-ce que is never wrong',
        fr: frOf('fr.a1.questions-du-quotidien.075'),
        sub: `${sub('Est-ce que tu es prêt ?')} · ${enOf('fr.a1.questions-du-quotidien.075')}`,
        body: `Three little words on the front and you have a question. It is correct with a friend, correct in a letter, correct in an exam. ${REFRAME}`,
      },
      {
        label: 'and the other two',
        head: 'Both of them say something extra',
        fr: `${frOf('fr.a1.cafe.176')} · ${frOf('fr.a1.questions.352')}`,
        sub: 'casual · careful',
        body: 'Letting your voice rise says you are relaxed. Swapping the words round says you are being careful. Neither is more correct than the other and neither is more correct than est-ce que. They are choices, and you make them on purpose.',
      },
      {
        label: 'what that gives you',
        head: 'A safe one and two you reach for',
        body: 'You never have to freeze. If you do not know what the situation wants, est-ce que covers it and nobody notices anything. When you do know what it wants, you have two ways to say so without changing a single word of the question itself.',
      },
    ],
  },

  {
    // THE HERO SCREEN. Three rows, one per method, ONE question in all three
    // forms, and a register label attached to each. Two columns rather than
    // three: tapTable is not in ownsLayout() so this renders inside a scrolling
    // page, and a sentence in a third of a Pixel 6's width wraps to four lines.
    // The third column the brief wants is on sheet.a1.19.methods.
    //
    // The batch, the merge and the test all assert that ONE SECTION carries all
    // three methods AND a register label on each. Split across missions the
    // learner gets three unrelated forms and no basis for choosing.
    type: 'tapTable',
    id: 's04-triple',
    title: 'The Same Question, Three Ways',
    frSub: 'Trois façons, une question',
    layer: 'core',
    terms: ['theSafeDefault', 'whoAreYouTalkingTo'],
    sheetId: 'sheet.a1.19.methods',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-triple' },
    say: `${REFRAME} Read down the first column. Same question every time, and only the shape moves.`,
    cols: ['the question', 'who you would say it to'],
    rows: [
      {
        cells: [frOf('fr.a1.cafe.176'), 'a friend'],
        say: frOf('fr.a1.cafe.176'),
        detail: {
          title: 'Just your voice',
          body: `${sub('Tu es prêt ?')} Nothing moves. This is a plain statement with your voice going up at the end, and it is how most yes-or-no questions get asked out loud. You have been reading these since your first lesson without anybody naming it.`,
          say: frOf('fr.a1.cafe.176'),
        },
      },
      {
        cells: [frOf('fr.a1.questions-du-quotidien.075'), 'anybody, any time'],
        say: frOf('fr.a1.questions-du-quotidien.075'),
        detail: {
          title: 'The est-ce que block',
          body: `${sub('Est-ce que tu es prêt ?')} Three words bolted on and nothing inside the sentence moves. Tu es prêt is still sitting there untouched behind them. This one is correct in every situation there is, which is why it is worth making your default.`,
          say: frOf('fr.a1.questions-du-quotidien.075'),
        },
      },
      {
        cells: [frOf('fr.a1.questions.352'), 'a form, or a stranger'],
        say: frOf('fr.a1.questions.352'),
        detail: {
          title: 'Swapped round',
          body: `${sub('Es-tu prêt ?')} The verb and the person change places and a hyphen holds them together. It reads as careful, which is right in a letter and slightly stiff across a kitchen table. This is the one from the scene.`,
          say: frOf('fr.a1.questions.352'),
        },
      },
    ],
  },

  /* ── Act 2: just your voice ────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's05-voice',
    title: 'The One You Already Use',
    frSub: 'Seulement la voix',
    hint: 'Five cards, and none of this is new.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['justTheVoice'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-contour' },
    say: 'You have been doing this since your very first lesson. Nobody told you it was a method.',
    cards: [
      {
        // OPENS BY NAMING WHAT THE LEARNER ALREADY HAS, the way a1.09 opens by
        // naming a1.08. Both prerequisites are full of these: the être lesson
        // carries nine intonation questions and the avoir lesson two, and
        // neither ever calls it a question form.
        label: 'you have met this',
        head: 'You have been reading these for eighteen lessons',
        fr: 'Vous êtes ici pour la conférence ?',
        sub: 'Are you here for the conference?',
        body: 'That line is from the être lesson, where it is asked four separate times. Nobody there called it a question form. It is one, it is this one, and you have been understanding it without being taught it.',
      },
      {
        label: 'what actually happens',
        head: 'Nothing moves',
        fr: `${frOf('fr.a1.questions.368')} · ${frOf('fr.a1.cafe.176')}`,
        sub: `${sub('Tu es prêt.')} · ${sub('Tu es prêt ?')}`,
        body: 'Same four words, same order, same sounds. Your voice goes down at the end of the first one and up at the end of the second one. That is the entire difference and there is nothing else to learn here.',
      },
      {
        label: 'where it lives',
        head: 'Out loud, with people you are relaxed with',
        body: 'This is the commonest way a yes-or-no question gets asked in real speech, and the most casual of the three. In writing it turns up in messages to friends and almost nowhere else, because writing is where people are careful.',
      },
      {
        // THE POINT ABOUT THE PAGE, and the reason no free-text question in this
        // lesson can test it. Said here so the learner knows, and said in the
        // quiz comment so no question ships certifying something it cannot.
        label: 'the catch, and it is on the page',
        head: 'Written down, one mark separates them',
        fr: `${frOf('fr.a1.questions.368')} · ${frOf('fr.a1.cafe.176')}`,
        sub: 'a full stop · a question mark',
        body: 'Out loud you can hear which is which. On the page the only thing between a statement and a question is the mark at the end, and French puts a space before it. Leave it off and you have written a statement.',
      },
      {
        label: 'so when not to',
        head: 'It is the one that can be missed',
        body: 'If your voice stays flat, the question lands as a statement and gets treated as one. That is the one risk this method carries, and it is why the other two exist: they put the question into the words, where it cannot be lost.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's06-updown',
    title: 'Up Or Down',
    frSub: 'La voix monte ou descend',
    layer: 'core',
    terms: ['justTheVoice'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-contour' },
    // THE SINGLE MOST IMPORTANT CLIP IN THE LESSON is the first line here: the
    // statement and the question adjacent, in one take, one voice. Two separate
    // recordings are two performances and the learner would hear the performance
    // rather than the contour. The audio brief says so at length.
    say: 'Three pairs. In every one, the words are identical and only the direction of your voice changes.',
    lines: [
      { fr: `${frOf('fr.a1.questions.368')} · ${frOf('fr.a1.cafe.176')}`, en: 'a statement, then a question, and the words never move' },
      { fr: `${frOf('fr.a1.questions.338')} · ${frOf('fr.a1.expressions-frequentes.058')}`, en: 'two real questions asked with nothing but the voice' },
      { fr: `${frOf('fr.a1.presentation-personnelle.087')} · ${frOf('fr.a1.presentation-personnelle.091')}`, en: 'the same, to one friend and then to somebody you are being polite with' },
    ],
    questions: [
      {
        q: 'What is the difference between « Tu es prêt. » and « Tu es prêt ? » out loud?',
        opts: [
          'The question is slower',
          'The direction of the voice on the last syllable',
          'The question stresses the first word',
          'Nothing, you can only tell in writing',
        ],
        correct: 1,
        why: 'The direction of the voice at the end. Up is a question, down is a statement. No word changes and no word moves, which is what makes this the only method that leaves no trace on the page except the mark at the end.',
      },
      {
        q: 'You say a question with a completely flat voice. What happens?',
        opts: [
          'It still works, French marks it another way',
          'It is heard as a statement',
          'It becomes more formal',
          'It sounds like a different question',
        ],
        correct: 1,
        why: 'It is heard as a statement, because here the contour is the only thing carrying the question. That is the one real risk it has, and it is why the other two methods exist: both put the question into the words themselves.',
      },
      {
        q: 'In writing, what separates a statement from this kind of question?',
        opts: [
          'The word order',
          'A question mark, with a space before it',
          'The verb changes',
          'Nothing at all',
        ],
        correct: 1,
        why: 'A question mark, and in French a space goes before it. That mark does all the work alone, which is why this method is common in speech and rare in writing, where people reach for a form that shows the question in the words.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's07-heard',
    title: 'Statement Or Question?',
    frSub: 'Phrase ou question ?',
    layer: 'core',
    terms: ['justTheVoice', 'whoAreYouTalkingTo'],
    say: 'Four decisions. The first three are about your ear and the last one is about the page.',
    groups: [
      {
        label: 'The pair that only your ear can split',
        items: [
          { fr: frOf('fr.a1.questions.368'), itemId: 'fr.a1.questions.368', respell: sub('Tu es prêt.'), en: enOf('fr.a1.questions.368') },
          { fr: frOf('fr.a1.cafe.176'), itemId: 'fr.a1.cafe.176', respell: sub('Tu es prêt ?'), en: enOf('fr.a1.cafe.176') },
        ],
        check: {
          q: 'Somebody says four words to you and their voice rises at the end. Are they telling you something or asking you something?',
          opts: ['Telling you', 'Asking you', 'You cannot tell without more words', 'It depends on the verb'],
          correct: 1,
          why: 'Asking you. A rising voice on the last syllable is a question and nothing else needs to happen. This is the whole of the first method, and it is the one French speakers use most in ordinary conversation.',
        },
      },
      {
        label: 'Questions in the wild, with no method bolted on',
        items: [
          { fr: frOf('fr.a1.expressions-frequentes.058'), itemId: 'fr.a1.expressions-frequentes.058', en: enOf('fr.a1.expressions-frequentes.058') },
          { fr: frOf('fr.a1.questions.340'), itemId: 'fr.a1.questions.340', en: enOf('fr.a1.questions.340') },
        ],
        check: {
          q: 'Neither of those has est-ce que and neither has swapped words. How do you know they are questions?',
          opts: [
            'The verb is in a special form',
            'The mark at the end, and out loud the voice going up',
            'They both start with tu',
            'They are not really questions',
          ],
          correct: 1,
          why: 'The mark at the end on the page, and the rising voice out loud. Both of these were published as ordinary French long before this lesson existed, which is the best evidence there is that this method is not a shortcut.',
        },
      },
      {
        label: 'The same question, two people',
        items: [
          { fr: frOf('fr.a1.presentation-personnelle.087'), itemId: 'fr.a1.presentation-personnelle.087', en: enOf('fr.a1.presentation-personnelle.087') },
          { fr: frOf('fr.a1.presentation-personnelle.091'), itemId: 'fr.a1.presentation-personnelle.091', en: enOf('fr.a1.presentation-personnelle.091') },
        ],
        check: {
          q: 'Both of those use the voice alone. What changed between them?',
          opts: [
            'The method changed',
            'Who is being spoken to',
            'One is a question and one is not',
            'The first is more formal',
          ],
          correct: 1,
          why: 'Who is being spoken to: tu for somebody you are close to, vous for somebody you are careful with. The method did not move. Choosing tu or vous and choosing a question shape are two separate decisions, and this lesson is about the second.',
        },
      },
      {
        // A groupDrill control page carries items: [] explicitly and no size.
        label: 'On the page',
        items: [],
        check: {
          q: 'You are writing to somebody and you want to ask a question. Why is the voice method a poor choice here?',
          opts: [
            'It is grammatically wrong in writing',
            'A reader has no voice to hear, so only the mark at the end carries it',
            'It only works with être',
            'It is too long',
          ],
          correct: 1,
          why: 'A reader has no voice to hear. Everything this method relies on happens in the air, so on paper one small mark does all of it. It is not wrong in writing, only weaker than a form that puts the question into the words.',
        },
      },
    ],
  },

  /* ── Act 3: the safe block ─────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's08-block',
    title: 'Three Words On The Front',
    frSub: 'Est-ce que',
    hint: 'Five cards on the one that always works.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theSafeDefault'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-block' },
    say: `${REFRAME} Five cards on why that is true.`,
    cards: [
      {
        label: 'what it is',
        head: 'A block, bolted on',
        fr: `${frOf('fr.a1.questions.368')} · ${frOf('fr.a1.questions-du-quotidien.075')}`,
        sub: 'a statement · the same statement, asked',
        body: 'Take any statement. Put est-ce que in front of it. That is a question now. The statement behind it does not change in any way: same words, same order, still sitting there.',
      },
      {
        label: 'nothing inside moves',
        head: 'This is why it is the safe one',
        fr: frOf('fr.a1.questions.367'),
        sub: `${sub('Est-ce que vous êtes prêts ?')} · ${enOf('fr.a1.questions.367')}`,
        body: 'The pronoun changed from tu to vous and the block did not care. You do not have to remember a form, work out where a hyphen goes, or decide whether a letter needs adding. You put three words on the front and stop.',
      },
      {
        label: 'where it works',
        head: 'Everywhere, and that is not an exaggeration',
        body: `Spoken, written, to a friend, to a stranger, in an exam, on a form. There is no situation where est-ce que is wrong, and no other question form in French can be described that way. ${REFRAME}`,
      },
      {
        label: 'in the wild',
        head: 'Ordinary French, nobody arranged it',
        fr: `${frOf('fr.a1.questions.008')} · ${frOf('fr.a1.questions.038')}`,
        sub: `${enOf('fr.a1.questions.008')} · ${enOf('fr.a1.questions.038')}`,
        body: 'Both of those were in the corpus long before this lesson was written. Neither is a teaching example. This is what the form looks like when somebody is simply asking a question and not thinking about which method they are using.',
      },
      {
        label: 'one small thing',
        head: 'Say it flat and fast',
        fr: frOf('fr.a1.questions-du-quotidien.075'),
        sub: sub('Est-ce que tu es prêt ?'),
        body: 'It is three unstressed syllables that run together into something like ess-kuh. Nobody leans on it and nobody pauses after it. It exists to get you into the question, and the weight of the sentence lands where it always would, on the end.',
      },
    ],
  },

  {
    // THE ELISION, and the connection is the point rather than the rule. This is
    // the FOURTH time the learner meets anti-hiatus pressure and the third
    // different repair. a1.18 landed during this build, so the ne -> n' row is
    // now real for this learner and is named as shipped rather than as coming.
    type: 'tapTable',
    id: 's09-elision',
    title: 'The Fourth Time You Have Seen This',
    frSub: "Est-ce qu'il, est-ce qu'elle, est-ce qu'on",
    layer: 'core',
    terms: ['theSameOldDodge', 'theSafeDefault'],
    sheetId: 'sheet.a1.19.methods',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-block' },
    say: 'Three words where the e gets cut. Tap any of them, and the reason is one you already have.',
    cols: ['what you write', 'why'],
    rows: [
      {
        cells: [frOf('fr.a1.questions.364'), 'que + il'],
        say: frOf('fr.a1.questions.364'),
        detail: {
          title: 'The e of que is gone',
          body: `${sub("Est-ce qu'il est prêt ?")} Est-ce que il would put two vowel sounds head to head, and French will not do it. So the e is cut and an apostrophe marks the place. Nothing else about the sentence moves.`,
          say: frOf('fr.a1.questions.364'),
        },
      },
      {
        cells: [frOf('fr.a1.questions.365'), 'que + elle'],
        say: frOf('fr.a1.questions.365'),
        detail: {
          title: 'The same cut, in front of elle',
          body: `${sub("Est-ce qu'elle est prête ?")} In fast speech ess-KEEL and ess-KEL sit very close together, and this is the one pair in the lesson your ear has genuine work to do on. Everything else here you can see.`,
          say: `${frOf('fr.a1.questions.364')} ${frOf('fr.a1.questions.365')}`,
        },
      },
      {
        cells: [frOf('fr.a1.questions.366'), 'que + on'],
        say: frOf('fr.a1.questions.366'),
        detail: {
          title: 'Two things happen at once',
          body: `${sub("Est-ce qu'on est prêt ?")} The e is cut, and then the n of on carries across onto est, so the middle comes out as kohⁿ-NEH. You met the second half of that in the liaison lesson.`,
          say: frOf('fr.a1.questions.366'),
        },
      },
      {
        cells: ['You have three of these already', 'one idea, four rules'],
        say: frOf('fr.a1.questions.310'),
        detail: {
          title: 'The same objection, four times over',
          body: 'la amie became l\'amie: the little word was cut. ma amie became mon amie: the word was swapped. ne ai became n\'ai, cut again. And est-ce que il becomes est-ce qu\'il, cut again. Four rules, one objection: two vowel sounds may not meet.',
          say: frOf('fr.a1.questions.310'),
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10-build',
    title: 'Build It From A Statement',
    frSub: 'À partir d\'une phrase',
    layer: 'core',
    terms: ['theSafeDefault', 'theSameOldDodge'],
    say: 'Four builds. Each one starts from a statement you can already say.',
    groups: [
      {
        label: 'Straight on the front',
        items: [
          { fr: frOf('fr.a1.questions.368'), itemId: 'fr.a1.questions.368', respell: sub('Tu es prêt.'), en: enOf('fr.a1.questions.368') },
          { fr: frOf('fr.a1.questions-du-quotidien.075'), itemId: 'fr.a1.questions-du-quotidien.075', respell: sub('Est-ce que tu es prêt ?'), en: enOf('fr.a1.questions-du-quotidien.075') },
        ],
        check: {
          q: 'You have the statement « Tu es prêt. » and you want the est-ce que question. What do you change inside the statement?',
          opts: ['The word order', 'Nothing at all', 'The verb', 'You add a hyphen'],
          correct: 1,
          why: 'Nothing at all. That is the whole appeal of this method: the statement goes in untouched and the three words sit in front of it. Every other question form in French asks you to move something.',
        },
      },
      {
        label: 'The vowel case',
        items: [
          { fr: frOf('fr.a1.questions.364'), itemId: 'fr.a1.questions.364', respell: sub("Est-ce qu'il est prêt ?"), en: enOf('fr.a1.questions.364') },
          { fr: frOf('fr.a1.questions.365'), itemId: 'fr.a1.questions.365', respell: sub("Est-ce qu'elle est prête ?"), en: enOf('fr.a1.questions.365') },
        ],
        check: {
          q: 'You want to ask whether he is ready. Which of these do you write?',
          opts: ["Est-ce que il est prêt ?", "Est-ce qu'il est prêt ?", "Est-ce que-il est prêt ?", "Est-ce qu il est prêt ?"],
          correct: 1,
          why: "Est-ce qu'il. The e of que is cut and an apostrophe stands where it was. This is the same repair that turned la amie into l'amie, and it happens for the same reason: two vowel sounds cannot sit against each other.",
        },
      },
      {
        label: 'In the wild',
        items: [
          { fr: frOf('fr.a1.questions.310'), itemId: 'fr.a1.questions.310', en: enOf('fr.a1.questions.310') },
          { fr: frOf('fr.a1.questions.116'), itemId: 'fr.a1.questions.116', en: enOf('fr.a1.questions.116') },
        ],
        check: {
          q: 'Both of those cut the e of que. What decided it?',
          opts: [
            'They are both questions about weather',
            'The next word starts with a vowel sound',
            'They are both long sentences',
            'They both use il',
          ],
          correct: 1,
          why: 'The next word starts with a vowel sound. It happens to be il in both, but the rule is about the sound rather than the word: anything starting with a vowel does the same, and nothing starting with a consonant does it.',
        },
      },
      {
        label: 'Which one is safe',
        items: [],
        check: {
          q: 'You are writing to a landlord you have never met and you want to ask whether the flat is available. Is est-ce que acceptable here?',
          opts: [
            'No, it is too casual for writing',
            'Yes. It is correct in every situation there is',
            'Only if you use vous as well',
            'No, writing needs the swapped-round form',
          ],
          correct: 1,
          why: `Yes. ${REFRAME} A landlord would not blink at it. The swapped-round form would also be fine and sound slightly more formal, which is a choice rather than a rule.`,
        },
      },
    ],
  },

  /* ── Act 4: flipping it round ──────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's11-flip',
    title: 'Swapping Them Round',
    frSub: 'On inverse',
    hint: 'Five cards on the careful one.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['flipIt', 'whoAreYouTalkingTo'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-inversion' },
    say: 'Five cards, and the last one is a fact about the corpus rather than about French.',
    cards: [
      {
        label: 'what happens',
        head: 'The two words change places',
        fr: `${frOf('fr.a1.cafe.176')} · ${frOf('fr.a1.questions.352')}`,
        sub: `${sub('Tu es prêt ?')} · ${sub('Es-tu prêt ?')}`,
        body: 'Tu es becomes Es-tu. The person and the verb swap, and a hyphen joins them into one unit. Everything after that stays exactly where it was.',
      },
      {
        label: 'the hyphen',
        head: 'It is not optional',
        fr: 'Es-tu prêt ?',
        sub: 'and never Es tu prêt ?',
        body: 'Without the hyphen this is not a question, it is a typo. The hyphen is what tells a reader that the two words have been deliberately swapped rather than accidentally jumbled, and it is the one part of this method you cannot hear.',
      },
      {
        label: 'where it belongs',
        head: 'Careful writing, and being formal out loud',
        fr: frOf('fr.a1.questions.099'),
        sub: enOf('fr.a1.questions.099'),
        body: 'A shop assistant to a customer, a letter, a form, an exam. It is the form that says you are taking care. Said to a friend in a kitchen it lands the way the scene landed it, which is not wrong and is very noticeable.',
      },
      {
        label: 'the closed list',
        head: 'Twelve forms, and you can learn all of them',
        body: 'You can conjugate two verbs so far, so there are exactly twelve of these. That is a list you finish rather than a pattern you extend, and the next screen has all of it. A third verb will swap the same way.',
      },
      {
        // THE MEASURED FACT, and it is the most persuasive thing in the lesson.
        label: 'and here is the evidence',
        head: 'The corpus has none of these',
        fr: `${frOf('fr.a1.questions.352')} · ${frOf('fr.a1.questions.358')}`,
        sub: 'both written for this lesson, because neither existed',
        body: 'This app holds twenty-seven thousand sentences of ordinary French, and not one inverts these everyday questions. Es-tu prêt ? and As-tu faim ? had to be written from scratch, while their voice-only twins were already there. That gap is the register, measured.',
      },
    ],
  },

  {
    // SIX ROWS, TWO COLUMNS, ONE SHORT TOKEN PER CELL. The teaching is in the
    // detail modal, which is a card and can hold prose. This is a1.17's s07
    // shape and it fits a Pixel 6 for the same reason: nothing in a cell wraps.
    type: 'tapTable',
    id: 's12-twelve',
    title: 'All Twelve',
    frSub: 'Les douze formes',
    layer: 'core',
    terms: ['flipIt'],
    sheetId: 'sheet.a1.19.inversion',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-inversion' },
    say: 'Six rows, two verbs. Read across and only the verb changes. Tap any cell to hear it.',
    cols: ['être', 'avoir'],
    rows: ETRE_INVERSIONS.map((e, i) => {
      const a = AVOIR_INVERSIONS[i];
      return {
        cells: [e.form, a.form],
        say: `${e.form}, ${a.form}`,
        detail: {
          title: `${e.who}: ${e.form} and ${a.form}`,
          body: `${frOf(e.id)} ${frOf(a.id)} ${
            a.insertsT
              ? 'The t in the avoir form means nothing. A ends in a vowel and il starts with one, so a t goes between them. There is no such word as a-il.'
              : e.who === 'ils'
                ? 'Both of these wake up a t that is silent in the statement. Ils sont is said eel-SOHⁿ and Sont-ils is said sohⁿ-TEEL, so the same two words rearrange completely.'
                : 'Neither of these needs anything added. The verb already ends in a consonant, so it runs straight into the pronoun.'
          }`,
          say: `${frOf(e.id)} ${frOf(a.id)}`,
        },
      };
    }),
  },

  {
    // THE -t- RULE AGAINST A CASE THAT DOES NOT TAKE ONE. The brief asks for
    // this by name and is right about why: `a-t-il` on its own looks like an
    // arbitrary spelling, and beside `est-il` it becomes a rule about sounds.
    type: 'tapTable',
    id: 's13-the-t',
    title: 'Why A-t-il And Not Est-t-il',
    frSub: 'Le t qui ne veut rien dire',
    layer: 'core',
    terms: ['flipIt'],
    sheetId: 'sheet.a1.19.inversion',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-inversion' },
    say: 'Two rows. One of them needs a t put in and the other already has one. Tap both.',
    cols: ['no t added', 'a t added'],
    rows: [
      {
        cells: [frOf('fr.a1.questions.353'), frOf('fr.a1.questions.359')],
        say: `${frOf('fr.a1.questions.353')} ${frOf('fr.a1.questions.359')}`,
        detail: {
          title: 'est already ends in a consonant. a does not.',
          body: `${sub('Est-il prêt ?')} against ${sub('A-t-il faim ?')}. Est ends in a t of its own, so nothing is added. A ends in a vowel and il begins with one, so a t goes in to keep them apart. It means nothing at all.`,
          say: `${frOf('fr.a1.questions.353')} ${frOf('fr.a1.questions.359')}`,
        },
      },
      {
        cells: [frOf('fr.a1.questions.361'), frOf('fr.a1.questions.360')],
        say: `${frOf('fr.a1.questions.361')} ${frOf('fr.a1.questions.360')}`,
        detail: {
          title: 'The same test, on the rest of the list',
          body: `${sub('Avons-nous faim ?')} needs nothing, because avons ends in a consonant and nous begins with one. ${sub('A-t-elle faim ?')} needs the t for the same reason A-t-il does. Those two are the only places in all twelve forms where anything is inserted.`,
          say: `${frOf('fr.a1.questions.361')} ${frOf('fr.a1.questions.360')}`,
        },
      },
      {
        cells: ['in the wild', frOf('fr.a1.au-restaurant.186')],
        say: frOf('fr.a1.au-restaurant.186'),
        detail: {
          title: 'Somebody asking about a menu',
          body: `${frOf('fr.a1.au-restaurant.186')} ${enOf('fr.a1.au-restaurant.186')} The same inserted t, in a sentence written for a restaurant lesson rather than for this one. It does exactly the job it does in A-t-il faim ?, and nobody arranged it.`,
          say: frOf('fr.a1.au-restaurant.186'),
        },
      },
      {
        // READING ONLY, and the one place this lesson shows a question word at
        // all. « Quel âge a-t-il ? » belongs to a1.20 and appears on no deck, no
        // drill, no dictée and in no quiz answer here. It earns this row because
        // it is the -t- doing its job in a sentence the learner has already met,
        // in the numbers lesson, long before this one existed.
        cells: ['already in your cards', frOf('fr.a1.nombres.025')],
        say: frOf('fr.a1.nombres.025'),
        detail: {
          title: 'You have had this one since the numbers lesson',
          body: `${frOf('fr.a1.nombres.025')} ${enOf('fr.a1.nombres.025')} The same inserted t again. The first two words of that question are somebody else's lesson and are coming next; the a-t-il in the middle of it is this one.`,
          say: frOf('fr.a1.nombres.025'),
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's14-traps',
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    swipe: true,
    size: 'lg',
    title: 'Five Traps',
    frSub: 'Cinq pièges',
    layer: 'core',
    terms: ['flipIt', 'theSameOldDodge', 'theSafeDefault'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-traps' },
    say: 'Five things people write in their first month with these forms, one per screen.',
    errors: [
      {
        wrong: 'Writing « Es tu prêt ? » with no hyphen.',
        right: 'Writing « Es-tu prêt ? ».',
        why: 'The hyphen is compulsory. Without it the two words look accidentally out of order rather than deliberately swapped, and the sentence reads as a typo. You cannot hear this one, which is why it survives so long in writing.',
      },
      {
        wrong: 'Writing « A-il faim ? » with no t.',
        right: 'Writing « A-t-il faim ? ».',
        why: 'A ends in a vowel and il begins with one, so a t goes between them. It means nothing and exists only to keep the two vowels apart. Est-il needs no such thing, because est already ends in a consonant.',
      },
      {
        wrong: 'Writing « Est-ce que il est prêt ? ».',
        right: "Writing « Est-ce qu'il est prêt ? ».",
        why: "The e of que is cut in front of a vowel and an apostrophe marks where it went. You have watched French dodge this collision three times before: l'amie, mon amie, n'ai. This is the fourth.",
      },
      {
        wrong: 'Writing « Est-ce que es-tu prêt ? », using two methods at once.',
        right: 'Writing « Est-ce que tu es prêt ? » or « Es-tu prêt ? ».',
        why: 'Pick one. Est-ce que already made it a question, so swapping the words as well is asking twice. This is the commonest thing that happens once all three methods are on the table, and it is the reason the safe default is worth naming.',
      },
      {
        wrong: 'Reaching for « Ai-je faim ? » to complete the list.',
        right: 'Saying « Est-ce que j\'ai faim ? ».',
        why: 'Nobody says ai-je. It is not in a single one of the twenty-seven thousand sentences this app holds, and drilling a form nobody uses builds an instinct you then have to unlearn. The je question goes through est-ce que, which is what it is for.',
      },
    ],
  },

  /* ── Act 5: choosing, and answering ────────────────────────────────────── */

  {
    // THE REGISTER DECISION, WHICH IS THE canDo. Every group gives a SITUATION
    // and makes the learner pick a method. The brief is explicit that "which is
    // more formal?" tests recall of a label while "you are writing to a landlord
    // you have never met" tests the thing itself.
    //
    // The correct answers here are deliberately NOT all est-ce que: two of the
    // four are the other methods, so the section cannot be passed by always
    // choosing the default. The quiz round does the same and the test asserts it.
    type: 'groupDrill',
    id: 's15-register',
    title: 'Who Is In Front Of You',
    frSub: 'À qui parlez-vous ?',
    layer: 'core',
    terms: ['whoAreYouTalkingTo', 'theSafeDefault'],
    say: 'Four situations. The question is the same every time and the right shape is not.',
    groups: [
      {
        label: 'A friend, across a table',
        items: [
          { fr: frOf('fr.a1.questions.338'), itemId: 'fr.a1.questions.338', respell: sub('Tu as faim ?'), en: enOf('fr.a1.questions.338') },
          { fr: frOf('fr.a1.questions.358'), itemId: 'fr.a1.questions.358', respell: sub('As-tu faim ?'), en: enOf('fr.a1.questions.358') },
        ],
        check: {
          q: 'You are cooking with a friend and you want to ask if they are hungry. Which do you say?',
          opts: ['As-tu faim ?', 'Tu as faim ?', 'Both sound the same to a friend', 'Neither, you need est-ce que here'],
          correct: 1,
          why: 'Tu as faim ? The swapped-round form is correct French and it is what the opening scene used. It sounds careful, and being careful with a close friend is itself a message. Est-ce que tu as faim ? would also be fine.',
        },
      },
      {
        label: 'A letter to somebody you have never met',
        items: [
          // The voice-only form FIRST, so the pair reads as one question in two
          // registers rather than as one form with a label. Both are vous, so
          // the tu/vous decision is held constant and only the method moves.
          { fr: frOf('fr.a1.cafe.178'), itemId: 'fr.a1.cafe.178', respell: sub('Vous êtes prêts ?'), en: enOf('fr.a1.cafe.178') },
          { fr: frOf('fr.a1.questions.356'), itemId: 'fr.a1.questions.356', respell: sub('Êtes-vous prêts ?'), en: enOf('fr.a1.questions.356') },
          { fr: frOf('fr.a1.questions.099'), itemId: 'fr.a1.questions.099', en: enOf('fr.a1.questions.099') },
        ],
        check: {
          q: 'You are writing to a landlord you have never met to ask whether the flat is still available. Which shape fits best?',
          opts: [
            'The voice-only one, with a question mark',
            'The swapped-round one',
            'It does not matter in writing',
            'Only est-ce que is allowed in letters',
          ],
          correct: 1,
          why: 'The swapped-round one. Writing is where care shows and this is the form that shows it. Est-ce que would be correct too, and plainer. The voice-only one is odd here: in writing there is no voice, and the question rests on one mark.',
        },
      },
      {
        label: 'You have no idea what the situation wants',
        items: [
          { fr: frOf('fr.a1.questions-du-quotidien.075'), itemId: 'fr.a1.questions-du-quotidien.075', respell: sub('Est-ce que tu es prêt ?'), en: enOf('fr.a1.questions-du-quotidien.075') },
          { fr: frOf('fr.a1.questions.008'), itemId: 'fr.a1.questions.008', en: enOf('fr.a1.questions.008') },
        ],
        check: {
          q: 'You are talking to somebody new and you cannot tell how formal to be. Which do you reach for?',
          opts: ['Est-ce que', 'The swapped-round one, to be safe', 'The voice-only one, to be friendly', 'Say nothing until you know'],
          correct: 0,
          why: `Est-ce que. ${REFRAME} It is the only one that says nothing about how close you are, so it cannot be the wrong temperature. The other two make a claim you are not yet able to make.`,
        },
      },
      {
        label: 'The same question, two registers',
        items: [
          { fr: frOf('fr.a1.questions.012'), itemId: 'fr.a1.questions.012', en: enOf('fr.a1.questions.012') },
          { fr: frOf('fr.a1.questions.329'), itemId: 'fr.a1.questions.329', en: enOf('fr.a1.questions.329') },
        ],
        check: {
          q: 'Those two sentences ask the identical thing and both swap the words round. What is different?',
          opts: [
            'One is a question and one is not',
            'Who is being asked: one person you know, or somebody you are being polite with',
            'One of them is wrong',
            'The first is more formal',
          ],
          correct: 1,
          why: 'Who is being asked. As-tu is the tu form and Avez-vous is the vous form, and both were published as ordinary French. The method did not change between them: choosing tu or vous and choosing a question shape are two separate decisions.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's16-answers',
    title: 'Answering',
    frSub: 'Oui, non, peut-être, si',
    hint: 'Five cards, and the fourth word is the interesting one.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theOtherSi'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-19-answers' },
    say: 'Three of these you already have. The fourth exists only because of questions with a not in them.',
    cards: [
      {
        label: 'the two easy ones',
        head: 'oui and non',
        fr: `${frOf('fr.a1.questions.369')} · ${frOf('fr.a1.questions.370')} · ${frOf('fr.a1.questions.371')}`,
        sub: `${sub('Oui, je suis prêt.')} · ${sub('Non, je suis fatigué.')}`,
        body: 'Either word is a complete answer on its own. Adding a reason is friendlier and is never required. Notice that neither answer needed a negative: saying why is easier than saying not.',
      },
      {
        label: 'the realistic third',
        head: 'peut-être',
        fr: 'peut-être',
        sub: `${sub('peut-être')} · maybe`,
        body: 'The answer people actually give most of the time. It is two words joined by a hyphen and it works as a complete reply on its own, exactly like oui and non.',
      },
      {
        // THE si CARD. a1.18 landed during this build, so the negative question
        // below is built from grammar the learner now has rather than borrowed
        // from a lesson that does not exist.
        label: 'the fourth word',
        head: 'si, when the question has a not in it',
        fr: `${frOf('fr.a1.questions.372')} · ${frOf('fr.a1.questions.373')}`,
        sub: `${sub("Tu n'es pas prêt ?")} · ${sub('Si, je suis prêt.')}`,
        body: 'Somebody asks you a question with a not in it and they have got it wrong. You want to push back. French does not use oui for that: it keeps a separate word, and si is it. Oui there would sound like agreement.',
      },
      {
        label: 'and the same three letters twice more',
        head: 'si is three different words',
        fr: 'si',
        sub: `${sub('si')} · yes-to-a-not · if · so`,
        body: 'This si has nothing to do with the si that means if, which you will meet properly later, and nothing to do with the si in si grand, meaning so big. Three separate words wearing the same two letters, with no rule connecting them.',
      },
      {
        label: 'the two tags',
        head: "n'est-ce pas ? and non ?",
        fr: `${frOf('fr.a1.animaux-domestiques.027')}`,
        sub: `${sub("n'est-ce pas ?")} · ${enOf('fr.a1.animaux-domestiques.027')}`,
        body: 'Stick either onto the end of a statement and you are asking the other person to agree. They are tags rather than a fourth method: the sentence in front is still a statement. n\'est-ce pas is careful and non ? is casual.',
      },
    ],
  },

  {
    type: 'tapTable',
    id: 's17-wild',
    title: 'All Three, In French Nobody Arranged',
    frSub: 'Dans la vraie langue',
    layer: 'core',
    terms: ['whoAreYouTalkingTo'],
    sheetId: 'sheet.a1.19.methods',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-19-wild' },
    say: 'Six sentences, none written for this lesson. Tap any of them to hear which method it chose.',
    cols: ['the sentence', 'which one'],
    rows: [
      {
        cells: [frOf('fr.a1.expressions-frequentes.058'), 'voice only'],
        say: frOf('fr.a1.expressions-frequentes.058'),
        detail: {
          title: 'The most ordinary question there is',
          body: `${frOf('fr.a1.expressions-frequentes.058')} ${enOf('fr.a1.expressions-frequentes.058')} Four words, nothing added, nothing moved. This is what a question looks like most of the time when nobody is being careful.`,
          say: frOf('fr.a1.expressions-frequentes.058'),
        },
      },
      {
        cells: [frOf('fr.a1.questions.038'), 'est-ce que'],
        say: frOf('fr.a1.questions.038'),
        detail: {
          title: 'The safe block, doing its job',
          body: `${frOf('fr.a1.questions.038')} ${enOf('fr.a1.questions.038')} Three words on the front of c'est loin d'ici, which is a statement you could say on its own.`,
          say: frOf('fr.a1.questions.038'),
        },
      },
      {
        cells: [frOf('fr.a1.questions.310'), "est-ce qu'"],
        say: frOf('fr.a1.questions.310'),
        detail: {
          title: 'And with the e cut',
          body: `${frOf('fr.a1.questions.310')} ${enOf('fr.a1.questions.310')} A vowel follows, so the e goes. Nobody wrote this sentence to demonstrate the rule; it is just what the rule looks like when it is not being taught.`,
          say: frOf('fr.a1.questions.310'),
        },
      },
      {
        cells: [frOf('fr.a1.questions.099'), 'swapped round'],
        say: frOf('fr.a1.questions.099'),
        detail: {
          title: 'A shop assistant to a customer',
          body: `${frOf('fr.a1.questions.099')} ${enOf('fr.a1.questions.099')} Avez-vous rather than Vous avez, because this is somebody being professionally careful with a stranger. That is exactly the situation the form is for.`,
          say: frOf('fr.a1.questions.099'),
        },
      },
      {
        cells: [frOf('fr.a1.pays-et-nationalites.299'), 'swapped round'],
        say: frOf('fr.a1.pays-et-nationalites.299'),
        detail: {
          title: 'The silent t waking up',
          body: `${frOf('fr.a1.pays-et-nationalites.299')} ${enOf('fr.a1.pays-et-nationalites.299')} Ils sont is said eel-SOHⁿ with the t silent. Swap them and the t arrives: sohⁿ-TEEL. The letters were there all along.`,
          say: frOf('fr.a1.pays-et-nationalites.299'),
        },
      },
      {
        cells: [frOf('fr.a1.expressions-utiles.005'), 'swapped round'],
        say: frOf('fr.a1.expressions-utiles.005'),
        detail: {
          title: 'es-tu, outside this lesson',
          body: `${frOf('fr.a1.expressions-utiles.005')} ${enOf('fr.a1.expressions-utiles.005')} One of the twelve, in a sentence nobody wrote for you. Note how much weight it carries: this is a question you would ask when the answer matters.`,
          say: frOf('fr.a1.expressions-utiles.005'),
        },
      },
      {
        cells: [frOf('fr.a1.questions.327'), 'swapped round'],
        say: frOf('fr.a1.questions.327'),
        detail: {
          title: 'avons-nous, and it is the rarest of the twelve',
          body: `${frOf('fr.a1.questions.327')} ${enOf('fr.a1.questions.327')} The nous form turns up least often of all twelve, and when it does it usually sounds like this: careful, and about a plan.`,
          say: frOf('fr.a1.questions.327'),
        },
      },
      {
        cells: [frOf('fr.a1.animaux-domestiques.027'), 'a tag'],
        say: frOf('fr.a1.animaux-domestiques.027'),
        detail: {
          title: 'Not a fourth method',
          body: `${frOf('fr.a1.animaux-domestiques.027')} ${enOf('fr.a1.animaux-domestiques.027')} The part before the comma is an ordinary statement. The tag on the end turns it into a request for agreement.`,
          say: frOf('fr.a1.animaux-domestiques.027'),
        },
      },
    ],
  },

  {
    type: 'reading',
    id: 's18-reading',
    title: 'The Viewing',
    frSub: 'La visite',
    layer: 'core',
    terms: ['whoAreYouTalkingTo', 'theSafeDefault', 'theOtherSi'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'One flat viewing, three people asking questions, and each of them picks a different shape.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'Three people are looking at the same small flat within an hour of each other, and the agent standing by the window hears the same handful of questions all morning. '
      + 'The first is a student who has come straight from a lecture and is already halfway through the kitchen before she asks anything. '
      + '« Est-ce que le chauffage est compris ? » '
      + 'It is the shape she uses for everything, and it does not tell the agent one thing about how she feels about the flat. '
      + 'The second is a man in his fifties who has brought a folder, and who waits until he is standing still to ask. '
      + '« Avez-vous une autre visite cet après-midi ? » '
      + 'Nothing about that is warmer or colder than the student, only more careful, and the agent answers it more carefully in turn. '
      + 'The third arrives with a friend and asks the friend rather than the agent, halfway down the corridor and without stopping. '
      + '« Tu es prêt ? » '
      + 'Later, at the door, the agent tells him the flat has been taken twice this month already and he does not believe it. '
      + '« Tu n\'es pas sérieux ? » '
      + 'And the agent, who is entirely serious, does not say oui. '
      + '« Si. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything because
    // every occurrence sat inside a longer key. Checked here by running the real
    // segmentSentence in the test and comparing matched KEYS rather than text.
    //
    // No entry is a prefix or substring of another, and none is five words or
    // more, which can never match at all.
    glossary: [
      { word: 'Est-ce que', en: 'the safe one', note: 'Three words on the front of a statement. Correct with anybody, which is why she uses it for everything.' },
      { word: 'Avez-vous', en: 'do you have', note: 'The swapped-round form, with vous. Careful rather than cold, and the agent matches it.' },
      { word: 'Tu es prêt', en: 'are you ready', note: 'Voice only, said to a friend on the move. Nothing added and nothing swapped.' },
      { word: 'Si', en: 'yes, actually', note: 'The question had a not in it and the agent is disagreeing with the not. Oui would have sounded like agreement.' },
    ],
    questions: [
      { q: 'Three people ask questions in three different shapes. What is that telling you about them?', a: 'How careful each one is being, and nothing else. All three questions are correct French and all three would be understood identically. The student uses the shape that fits any situation, the man with the folder uses the careful one, and the third uses the relaxed one because he is talking to a friend rather than to the agent. The shape reports on the relationship rather than on the question.' },
      { q: 'Why does the agent answer the man with the folder more carefully?', a: 'Because he asked carefully. Register tends to be matched: a swapped-round question invites a considered answer in the same way that a question asked on the move invites a quick one. Nothing obliges the agent to do this and it happens anyway, which is why choosing the wrong shape has an effect even though nobody comments on it.' },
      { q: 'The agent says si rather than oui at the end. What forced that?', a: 'The not in the question. « Tu n\'es pas sérieux ? » contains a negative, and the agent wants to contradict it. Oui would have read as agreeing that he was not serious. Si is the word French keeps for exactly this and it has no other job: it only appears when there is a negative to push back against.' },
    ],
  },

  /* ── Act 6: prove it ───────────────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's19-words',
    title: 'The Shapes, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['theSafeDefault', 'flipIt', 'theOtherSi'],
    sheetId: 'sheet.a1.19.inversion',
    say: 'Three decks. The blocks, the twelve swapped forms, and the four answers.',
    themes: [
      {
        title: 'the blocks and the tags',
        cards: [
          { fr: 'est-ce que', sub: sub('est-ce que'), en: 'put it on the front of anything and it is a question' },
          { fr: "est-ce qu'", sub: '[ess-K]', en: 'the same, in front of il, elle and on' },
          { fr: "n'est-ce pas ?", sub: sub("n'est-ce pas ?"), en: 'on the end of a statement: right? The careful tag' },
          { fr: 'non ?', sub: sub('non ?'), en: 'the same job, casual, and what people actually say' },
        ],
      },
      {
        title: 'the twelve swapped forms',
        cards: INVERSIONS.map((i) => ({
          fr: i.form,
          sub: subOf(i.id) ?? '',
          en: `${i.verb === 'être' ? 'are/is' : 'have/has'} ${i.who}${i.insertsT ? ', with the t that means nothing' : ''}`,
        })),
      },
      {
        title: 'the four answers',
        cards: [
          { fr: 'oui', sub: sub('oui'), en: 'yes' },
          { fr: 'non', sub: sub('non'), en: 'no' },
          { fr: 'peut-être', sub: sub('peut-être'), en: 'maybe, and the one people give most' },
          { fr: 'si', sub: sub('si'), en: 'yes, but only when the question had a not in it' },
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
    say: 'English on the front, and every front says which shape it wants. Say the French before you flip.',
    cards: [
      ...TRIPLES.flatMap((t) => t.cells.map((c) => ({
        front: `${t.en} (${METHODS.find((m) => m.key === c.method)!.name})`,
        back: frOf(c.id),
        say: frOf(c.id),
      }))),
      ...INVERSIONS.map((i) => ({
        front: `${enOf(i.id)} (swapped round)`,
        back: frOf(i.id),
        say: frOf(i.id),
      })),
      { front: 'Is he ready? (est-ce que, before a vowel)', back: frOf('fr.a1.questions.364'), say: frOf('fr.a1.questions.364') },
      { front: 'Is she ready? (est-ce que, before a vowel)', back: frOf('fr.a1.questions.365'), say: frOf('fr.a1.questions.365') },
      { front: 'Are we ready? (est-ce que, before a vowel)', back: frOf('fr.a1.questions.366'), say: frOf('fr.a1.questions.366') },
      { front: 'You are ready. (a statement, voice down)', back: frOf('fr.a1.questions.368'), say: frOf('fr.a1.questions.368') },
      { front: 'You are not ready? (a question with a not in it)', back: frOf('fr.a1.questions.372'), say: frOf('fr.a1.questions.372') },
      { front: 'Yes I am, actually. (answering a not)', back: frOf('fr.a1.questions.373'), say: frOf('fr.a1.questions.373') },
      { front: 'Yes, I am ready.', back: frOf('fr.a1.questions.369'), say: frOf('fr.a1.questions.369') },
      { front: 'No, I am tired.', back: frOf('fr.a1.questions.370'), say: frOf('fr.a1.questions.370') },
      { front: 'Yes, I am hungry.', back: frOf('fr.a1.questions.371'), say: frOf('fr.a1.questions.371') },
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
    // mode where the learner writes the word ORDER rather than tapping
    // pre-spelled tiles. Measured through the real dicteeMode in the batch, the
    // merge and the test. See the header.
    say: 'Five lines. The first two are the same four words, and one of them is a question.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's22-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // `practice.skill` is authored and read by no component: PracticeVFView takes
    // itemIds and nothing else. The bare block `est-ce que` is NOT in here. See
    // the note on SPEAK_IDS.
    say: 'Every line is a whole question or a whole answer. The rising voice on the short ones is half the mark.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's23-scenario',
    title: 'The Same Kitchen, Going Better',
    frSub: 'La même cuisine',
    layer: 'core',
    terms: ['whoAreYouTalkingTo', 'theSafeDefault'],
    say: 'One conversation and you hold up your half. Every turn is a question or an answer to one.',
    setting: 'Théo\'s kitchen again, a fortnight later. This time you are the one who arrives, and his flatmate is there too.',
    // Every turn carries `userEn` and at least two `alts`, which
    // scenario.logic.ts requires of the whole seed. A reveal with no translation
    // shows the learner the one sentence comprehension matters on and asks them
    // to read it; a single accepted answer makes a conversation a cloze test.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: 'Salut ! Entre. Tu as faim ?',
        en: 'Hi! Come in. Are you hungry?',
        user: 'Oui, un peu.',
        userEn: 'Yes, a little.',
        alts: [
          { fr: 'Oui, j\'ai faim.', en: 'Yes, I am hungry.' },
          { fr: 'Un peu, oui.', en: 'A little, yes.' },
        ],
      },
      {
        ai: 'Voici Camille, ma coloc. Vous vous connaissez ?',
        en: 'This is Camille, my flatmate. Do you two know each other?',
        user: 'Non. Est-ce que vous etes de Lyon ?',
        userEn: 'No. Are you from Lyon?',
        alts: [
          { fr: 'Non, pas encore. Est-ce que vous etes d\'ici ?', en: 'No, not yet. Are you from here?' },
          { fr: 'Non. Vous etes de Lyon ?', en: 'No. Are you from Lyon?' },
        ],
      },
      {
        ai: 'Non, je suis de Nantes. Et toi, tu es francais ?',
        en: 'No, I am from Nantes. And you, are you French?',
        user: 'Non, je suis anglais.',
        userEn: 'No, I am English.',
        alts: [
          { fr: 'Non, anglais.', en: 'No, English.' },
          { fr: 'Non. Et vous, vous etes francaise ?', en: 'No. And you, are you French?' },
        ],
      },
      {
        ai: 'Ah ! Theo dit que tu n\'es pas tres bavard.',
        en: 'Ah! Théo says you are not very talkative.',
        user: 'Si, je suis bavard !',
        userEn: 'Yes I am, actually!',
        alts: [
          { fr: 'Si ! Je suis tres bavard.', en: 'Yes I am! I am very talkative.' },
          { fr: 'Si, quand meme.', en: 'Yes I am, actually.' },
        ],
      },
      {
        ai: 'Bon. On mange dans dix minutes. Vous etes prets ?',
        en: 'Right. We are eating in ten minutes. Are you ready?',
        user: 'Oui, nous sommes prets.',
        userEn: 'Yes, we are ready.',
        alts: [
          { fr: 'Oui, prets !', en: 'Yes, ready!' },
          { fr: 'Peut-etre dans cinq minutes.', en: 'Maybe in five minutes.' },
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
    terms: ['theSafeDefault', 'flipIt', 'theOtherSi'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Which of the three is never the wrong choice?', back: `est-ce que. ${REFRAME}`, say: 'est-ce que' },
      { front: 'You want to ask a friend if they are hungry.', back: `${frOf('fr.a1.questions.338')} Voice up at the end, nothing else.`, say: frOf('fr.a1.questions.338') },
      { front: 'You are writing to a stranger and want to ask if they are ready.', back: `${frOf('fr.a1.questions.352')} The careful shape, and writing is where care shows.`, say: frOf('fr.a1.questions.352') },
      { front: 'How do you make a question out of « Tu es prêt. » without moving a word?', back: `${frOf('fr.a1.cafe.176')} Let your voice rise, and write a question mark.`, say: frOf('fr.a1.cafe.176') },
      { front: 'What happens inside the sentence when you add est-ce que?', back: 'Nothing at all. The statement goes in untouched.', say: frOf('fr.a1.questions-du-quotidien.075') },
      { front: 'Est-ce que, in front of il.', back: `${frOf('fr.a1.questions.364')} The e is cut and an apostrophe takes its place.`, say: frOf('fr.a1.questions.364') },
      { front: 'Why is there a t in A-t-il faim ?', back: 'A ends in a vowel and il starts with one. The t keeps them apart and means nothing.', say: frOf('fr.a1.questions.359') },
      { front: 'Why is there no t in Est-il prêt ?', back: 'Est already ends in a consonant, so nothing needs adding.', say: frOf('fr.a1.questions.353') },
      { front: 'Is the hyphen in Es-tu optional?', back: 'No. Without it the sentence reads as a typo rather than a question.', say: frOf('fr.a1.questions.352') },
      { front: 'The vous form of the swapped-round être question.', back: `${frOf('fr.a1.questions.356')} The one you will hear most, because vous and care travel together.`, say: frOf('fr.a1.questions.356') },
      { front: 'The nous form of the swapped-round avoir question.', back: `${frOf('fr.a1.questions.361')} No t needed: avons already ends in a consonant.`, say: frOf('fr.a1.questions.361') },
      { front: 'Should you say Ai-je faim ?', back: 'No. Nobody says it. Use est-ce que j\'ai faim.', say: frOf('fr.a1.questions.371') },
      { front: 'Somebody asks « Tu n\'es pas prêt ? » and you are ready. What do you say?', back: `${frOf('fr.a1.questions.373')} Not oui, because you are disagreeing with the not.`, say: frOf('fr.a1.questions.373') },
      { front: 'Can you use est-ce que and swap the words round in one question?', back: 'No. Est-ce que already asked it. Pick one.', say: frOf('fr.a1.questions-du-quotidien.075') },
      { front: 'What decides which of the three you use?', back: `Who is in front of you, and how careful you are being. ${REFRAME}`, say: frOf('fr.a1.questions-du-quotidien.075') },
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
    body: 'You have watched an evening cool by one degree because a question was asked too carefully, and nothing in that sentence was wrong. Since then you have taken one question apart into three shapes that mean exactly the same thing, found that the difference between a statement and a question can be nothing but the direction of your voice, learned a block you can bolt onto anything without moving a word, and closed a list of twelve swapped-round forms including two with a letter in the middle that means nothing at all. You also have a word for yes that only works when somebody has put a not in the question. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
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
    // ── What this quiz can and cannot test, said plainly ───────────────────
    //
    // `fold()` strips accents, case, punctuation and ALL whitespace, so:
    //
    //   NO FREE-TEXT FORMAT CAN TEST THE QUESTION MARK. `Tu es prêt` and
    //   `Tu es prêt ?` fold identically, so a typeIn or errorSpot asking the
    //   learner to add one accepts the answer without it.
    //
    //   NO FREE-TEXT FORMAT CAN TEST THE HYPHEN. `es-tu` and `es tu` fold to
    //   `estu` both ways, so the hyphen this lesson calls compulsory cannot be
    //   scored by anything the learner types.
    //
    // Both are therefore mcq-only, where options are PICKED rather than typed
    // and quiz-duplicate-option compares them character by character. This is
    // the same limitation the a1.08 and a1.09 briefs both got wrong about
    // capital letters. Invariant §4.
    //
    // QuizDeckView shuffles the options of every closed question per attempt, so
    // NO OPTION REFERS TO A POSITION. This lesson is unusually exposed: a
    // register question naturally wants "the first one is more formal", which is
    // meaningless once shuffled. Every option names its method instead.
    //
    // `quiz-spread` still caps any authored `correct` slot at 40% of closed
    // questions. With est-ce que as the recommended default it would be the
    // right answer far too often, so ROUND 1 CONTAINS NO QUESTION WHOSE ANSWER
    // IS est-ce que: its three closed answers are inversion, inversion and
    // intonation. The test asserts that by name, because a register round that
    // can be passed by always choosing the default tests nothing.
    rounds: [
      {
        id: 'r1-who-is-it-for',
        label: 'Who is it for',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-wrong-register', 'err-double-question'],
        say: 'The situation is in every question. The label is in none of them.',
        questions: [
          {
            q: 'You are writing to a landlord you have never met, asking whether the flat is still free. Which shape fits best?',
            format: 'mcq',
            opts: [
              'Swap the words round: Est-elle libre ?',
              'Let your voice rise: Elle est libre ?',
              'Say it twice to be safe',
              'Leave the question mark off',
            ],
            correct: 0,
            why: 'Swap the words round. Writing to a stranger is where the careful shape belongs, and a letter has no voice for a rising contour to live in. Est-ce que would also be correct here and read a shade plainer.',
            ref: 's15-register',
          },
          {
            q: 'You are cooking with a close friend and want to ask if they are hungry. Which of these would sound oddly formal?',
            format: 'mcq',
            opts: [
              'Tu as faim ?',
              'Est-ce que tu as faim ?',
              'None of them, they are identical in feel',
              'As-tu faim ?',
            ],
            correct: 3,
            why: 'As-tu faim ? is correct French and it is the one that lands as careful. That is the whole of the opening scene: nothing was wrong, and the room noticed anyway. The other two are both comfortable with a friend.',
            ref: 's01-scene',
          },
          {
            q: 'A shop assistant asks a customer whether they have a smaller size. Which shape are they most likely to use, and why?',
            format: 'mcq',
            opts: [
              'Voice only, because shops are informal',
              'Swapped round, because they are being professionally careful with a stranger',
              'Est-ce que, because shops require it',
              'Any of them, the situation does not matter',
            ],
            correct: 1,
            why: 'Swapped round. « Avez-vous la taille en dessous ? » is a published sentence doing exactly this: a stranger being served, by somebody whose job is to be careful. The corpus agrees: this shape is five times commoner in formal settings than casual ones.',
            ref: 's17-wild',
          },
          {
            q: 'Ask a friend, out loud, whether they are ready. Use the shape that suits a friend.',
            format: 'speak',
            target: 'Tu es prêt ?',
            accept: ['Tu es prêt ?', 'tu es pret', 'Tu es prêt'],
            answer: 'Tu es prêt ?',
            why: 'Tu es prêt ? with your voice rising at the end. No words moved and nothing was added. Half the mark here is the contour: said flat, this is a statement and it will be heard as one.',
            ref: 's04-triple',
          },
        ],
      },
      {
        id: 'r2-your-ear',
        label: 'What your ear does',
        targets: ['err-flat-question', 'err-wrong-register'],
        say: 'Four listens. This is the one method that exists only as a sound.',
        questions: [
          {
            q: 'Listen. Is this a statement or a question?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Tu es prêt ?' },
            opts: ['A question', 'A statement', 'Neither, it is an order', 'You cannot tell'],
            correct: 0,
            why: 'A question, and the voice rising on the last syllable is the only thing that says so. The words are identical to the statement « Tu es prêt. » This is the one contrast in A1 that nothing but your ear can settle.',
            ref: 's06-updown',
          },
          {
            q: 'Listen. Which shape is this?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Est-ce que tu es prêt ?' },
            opts: ['The est-ce que block', 'Voice only', 'Swapped round', 'A tag on the end'],
            correct: 0,
            why: 'The est-ce que block. It runs together into something like ess-kuh and nobody leans on it, which is why it can be easy to miss at speed: the sentence you are meant to hear starts after it.',
            ref: 's08-block',
          },
          {
            q: 'Listen. Is this asking about a man or a woman?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "Est-ce qu'elle est prête ?" },
            opts: ['A man', 'A woman', 'Either, you cannot tell', 'Several people'],
            correct: 1,
            why: "A woman: est-ce qu'elle. This is the one genuine ear question in the lesson, because ess-KEEL and ess-KEL sit very close together at speed. Everything else here you can see on the page.",
            ref: 's09-elision',
          },
          {
            q: 'Listen. Which shape is this?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Es-tu prêt ?' },
            opts: ['Voice only', 'The est-ce que block', 'Swapped round', 'A statement'],
            correct: 2,
            why: 'Swapped round: Es-tu. The verb came first. Out loud the two words run together as one, which is what the hyphen is showing you on the page, and it is why the hyphen is not optional.',
            ref: 's12-twelve',
          },
        ],
      },
      {
        id: 'r3-the-block',
        label: 'The safe block',
        targets: ['err-no-elision', 'err-wrong-register'],
        say: 'The one that always works, and the one place it changes shape.',
        questions: [
          {
            q: 'Turn « Tu es prêt. » into a question using est-ce que. Write the whole thing.',
            format: 'typeIn',
            accept: ['Est-ce que tu es prêt ?', 'est-ce que tu es pret', 'Est-ce que tu es pret ?'],
            answer: 'Est-ce que tu es prêt ?',
            why: 'Est-ce que tu es prêt ? The statement went in untouched: same words, same order, three more on the front. Nothing inside a sentence ever moves for this method, which is exactly why it is the safe one.',
            ref: 's10-build',
          },
          {
            q: 'You want to ask whether he is ready. Which is correct?',
            format: 'mcq',
            opts: [
              'Est-ce que il est prêt ?',
              'Est-ce que-il est prêt ?',
              "Est-ce qu il est prêt ?",
              "Est-ce qu'il est prêt ?",
            ],
            correct: 3,
            why: "Est-ce qu'il. The e of que is cut in front of a vowel and an apostrophe stands where it was. You have watched French refuse to let two vowels meet three times before this: l'amie, mon amie and n'ai.",
            ref: 's09-elision',
          },
          {
            q: 'Somebody writes « Est-ce que elle est prête ? ». Fix it.',
            format: 'errorSpot',
            accept: ["Est-ce qu'elle est prête ?", "est-ce qu'elle est prete", "Est-ce qu'elle est prete ?"],
            answer: "Est-ce qu'elle est prête ?",
            why: "Est-ce qu'elle. A vowel follows, so the e goes and an apostrophe replaces it. The rule is about the sound rather than the spelling: anything starting with a vowel sound does this, and nothing starting with a consonant does.",
            ref: 's09-elision',
          },
          {
            q: 'What changes inside the sentence when you put est-ce que on the front of it?',
            format: 'mcq',
            opts: [
              'The verb moves to the front',
              'A hyphen is added',
              'Nothing at all',
              'The pronoun changes',
            ],
            correct: 2,
            why: `Nothing at all. ${REFRAME} That is precisely why: there is no form to remember, no hyphen to place and no letter to insert, so it cannot go wrong under pressure the way the other two can.`,
            ref: 's08-block',
          },
        ],
      },
      {
        id: 'r4-swapping',
        label: 'Swapping them round',
        targets: ['err-hyphen-and-t', 'err-flat-question'],
        say: 'Twelve forms, one hyphen, and a letter that means nothing.',
        questions: [
          {
            q: 'You want to ask, carefully, whether he is hungry. Which is correct?',
            format: 'mcq',
            opts: ['A-t-il faim ?', 'A-il faim ?', 'At-il faim ?', 'A t il faim ?'],
            correct: 0,
            why: 'A-t-il faim ? A ends in a vowel and il begins with one, so a t goes between them. It means nothing and exists only to stop the two vowels colliding. This is one of two places in twelve forms where anything is inserted.',
            ref: 's13-the-t',
          },
          {
            q: 'You want to ask a group, carefully, whether they are ready. Write the two words that start the question.',
            format: 'typeIn',
            accept: ['Êtes-vous', 'etes-vous', 'Etes-vous', 'êtes-vous'],
            answer: 'Êtes-vous',
            why: 'Êtes-vous. The verb comes first and the pronoun second. Note that what you typed cannot show whether you used the hyphen, because the checker ignores punctuation: on paper it is compulsory, and « Etes vous » is a typo rather than a question.',
            ref: 's12-twelve',
          },
          {
            q: 'Somebody writes « Est-t-il prêt ? ». Fix it.',
            format: 'errorSpot',
            accept: ['Est-il prêt ?', 'est-il pret', 'Est-il pret ?'],
            answer: 'Est-il prêt ?',
            why: 'Est-il, with no extra t. Est already ends in one, so there is nothing to keep apart. The insertion only happens when the verb ends in a vowel, which is why a-t-il needs it and est-il does not.',
            ref: 's13-the-t',
          },
          {
            q: 'Why can you learn all of these as a list rather than working them out?',
            format: 'mcq',
            opts: [
              'Because French only has twelve verbs',
              'Because you can conjugate two verbs so far, so there are twelve forms',
              'Because the swapped forms are irregular',
              'Because only être can be swapped',
            ],
            correct: 1,
            why: 'Because you can conjugate two verbs so far. Six persons times two verbs is twelve, which is a list you finish rather than a pattern you extend. When a third verb arrives the same swap works on it in the same way.',
            ref: 's11-flip',
          },
        ],
      },
      {
        id: 'r5-one-at-a-time',
        label: 'One method at a time',
        targets: ['err-double-question', 'err-hyphen-and-t'],
        say: 'Three ways to ask, and you use exactly one of them.',
        questions: [
          {
            q: 'Which of these is correct French?',
            format: 'mcq',
            opts: [
              'Est-ce que es-tu prêt ?',
              "Est-ce qu'es-tu prêt ?",
              'Est-ce que tu es-tu prêt ?',
              'Est-ce que tu es prêt ?',
            ],
            correct: 3,
            why: 'Est-ce que tu es prêt ? The block already made it a question, so swapping the words as well asks twice. This is the commonest thing that goes wrong once all three methods are available, and the fix is to pick one and stop.',
            ref: 's14-traps',
          },
          {
            q: 'Somebody writes « Est-ce que as-tu faim ? ». Fix it.',
            format: 'errorSpot',
            accept: ['Est-ce que tu as faim ?', 'est-ce que tu as faim', 'As-tu faim ?', 'as-tu faim'],
            answer: 'Est-ce que tu as faim ?',
            why: 'Either « Est-ce que tu as faim ? » or « As-tu faim ? », and both are accepted here. What you cannot do is use both methods in one question. Est-ce que wants an ordinary statement behind it, with the words in their normal order.',
            ref: 's14-traps',
          },
          {
            q: 'You want to ask whether you yourself are hungry, out loud, without sounding strange. Write the question.',
            format: 'typeIn',
            accept: ["Est-ce que j'ai faim ?", "est-ce que j'ai faim", "Est-ce que j'ai faim"],
            answer: "Est-ce que j'ai faim ?",
            why: "Est-ce que j'ai faim ? The swapped-round je form is ai-je, and nobody says it: it appears in none of the twenty-seven thousand sentences this app holds. When the swap produces a form real speakers avoid, est-ce que covers it.",
            ref: 's14-traps',
          },
          {
            q: 'Which one of the three is correct in every situation there is?',
            format: 'mcq',
            opts: [
              'Letting your voice rise',
              'Swapping the words round',
              'The est-ce que block',
              'All three, equally, always',
            ],
            correct: 2,
            why: `Est-ce que. ${REFRAME} The other two are both correct French and both say something about how close you are, so either can be the wrong temperature. Est-ce que says nothing, which makes it safe.`,
            ref: 's03-one-question',
          },
        ],
      },
      {
        id: 'r6-answering',
        label: 'Answering',
        targets: ['err-oui-for-si', 'err-wrong-register'],
        say: 'Four answers, and one of them only exists because of a not.',
        questions: [
          {
            q: 'Somebody asks you « Tu n\'es pas prêt ? » and you are, in fact, ready. What do you say?',
            format: 'mcq',
            opts: ['Oui, je suis prêt.', 'Si, je suis prêt.', 'Non, je suis prêt.', 'Peut-être.'],
            correct: 1,
            why: 'Si, je suis prêt. The question has a not in it and you are disagreeing with the not, which is the one job si does. Answering oui there would sound like you were agreeing that you were not ready.',
            ref: 's16-answers',
          },
          {
            q: 'Somebody asks you « Tu es prêt ? » with no not in it, and you are ready. What do you say?',
            format: 'mcq',
            opts: ['Oui.', 'Si.', 'Non.', 'Either oui or si'],
            correct: 0,
            why: 'Oui. Si only turns up when there is a negative to push back against, so using it on an ordinary question is as odd as using oui on a negative one. No not in the question means no si in the answer.',
            ref: 's16-answers',
          },
          {
            q: 'Answer « Tu as faim ? » in the affirmative, saying more than one word. Write it.',
            format: 'typeIn',
            accept: ["Oui, j'ai faim.", "oui j'ai faim", "Oui, j'ai faim"],
            answer: "Oui, j'ai faim.",
            why: "Oui, j'ai faim. The word on its own would have been a complete answer, and adding the reason is friendlier. Note j'ai rather than je ai, for the same reason est-ce qu'il is not est-ce que il.",
            ref: 's16-answers',
          },
          {
            q: 'Say the answer you would give if you genuinely did not know yet.',
            format: 'speak',
            target: 'Peut-être.',
            accept: ['Peut-être.', 'peut-etre', 'Peut-être'],
            answer: 'Peut-être.',
            why: 'Peut-être. It works as a whole reply on its own, exactly like oui and non, and it is the answer people give most often in real conversation. Two words joined by a hyphen, said as one.',
            ref: 's16-answers',
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
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can ask any yes-or-no question three ways, choose between them by looking at who is in front of you rather than at the sentence, produce all twelve swapped-round forms including the two with an inserted letter, and answer with oui, non, peut-être or si. The habit underneath all of it is worth keeping: when you are unsure, the safe form exists and costs you nothing. The next unit is about asking for information rather than for a yes or a no, and it is built directly on the block you have just learned, so nothing here is going to be replaced.',
    points: [
      `${REFRAME} The safe one is a real thing and it is worth having.`,
      'A statement and a question can be four identical words, separated by your voice going up.',
      'Est-ce que never moves anything inside the sentence. That is the whole reason it is safe.',
      'The swapped-round forms are a closed list of twelve, and nobody says ai-je.',
      'Si is the answer to a question with a not in it, and it has no other job.',
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
    throw new Error('a1.19.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Ways to ask', v: String(METHODS.length) },
    { k: 'Swapped forms', v: String(THE_TWELVE.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit
 * that "the weight belongs on the register choice and on inversion's mechanics,
 * not on intonation, which a learner grasps in one mission", and the count bears
 * that out: act 2 is three sections and acts 4 and 5 are four each, with the
 * register decision getting a whole groupDrill of its own on top of the hero
 * table in act 1.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Three ways to ask',
    sections: ['s01-scene', 's02-goals', 's03-one-question', 's04-triple'],
    milestone: 'One question, three shapes, and a safe one to fall back on.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'Just your voice',
    sections: ['s05-voice', 's06-updown', 's07-heard'],
    milestone: 'The method you have been using since your first lesson, finally named.',
    estScreens: 20,
    restPoints: ['s07-heard/halfway'],
  },
  {
    id: 'act3',
    title: 'The safe block',
    sections: ['s08-block', 's09-elision', 's10-build'],
    milestone: 'Three words on the front of anything, and the one place they change shape.',
    estScreens: 21,
    restPoints: ['s10-build/halfway'],
  },
  {
    id: 'act4',
    title: 'Flipping it round',
    sections: ['s11-flip', 's12-twelve', 's13-the-t', 's14-traps'],
    milestone: 'All twelve forms, the compulsory hyphen, and a letter that means nothing.',
    estScreens: 26,
    restPoints: ['s12-twelve/halfway', 's14-traps/halfway'],
  },
  {
    id: 'act5',
    title: 'Choosing, and answering',
    sections: ['s15-register', 's16-answers', 's17-wild', 's18-reading'],
    milestone: 'The choice made on purpose, and four ways to answer.',
    estScreens: 24,
    restPoints: ['s15-register/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: [
      's19-words', 's20-flash', 's21-dictation', 's22-speak', 's23-scenario',
      's24-review', 's25-progress', 's26-quiz', 's27-roundup',
    ],
    milestone: 'Lesson complete. The block you learned is what question words are built on.',
    estScreens: 96,
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
 * legitimately overlap: the scene's two sentences are also cells of the hero
 * table, and the twelve inversion questions are also three cells of it. The SRS
 * keys on (itemId, modality), so releasing one card from two tranches would take
 * two ratings for one sentence. The first tranche to name an id keeps it and the
 * rest drop it, which is also the pedagogically right answer: an item belongs to
 * the act that taught it.                                                     */

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

/* EVERY SLICE BELOW WAS SET FROM WHAT ITS ACT ACTUALLY DRAWS, not from what its
 * act is about. The first version released all nine hero-triple cells in act 1
 * on the reasoning that they are the hero table's material, and a1-19-questions.
 * test.ts rejected it: s04-triple shows ONE of the three triples, so four of
 * those nine cells are not on any screen until act 3 or later.
 *
 * That is the same check that caught a1.17 at v1 and it is asking a different
 * question from the obvious one. Not "does this item belong to this idea" but
 * "has the learner SEEN it by the end of this act". A card released early is a
 * card the flashcard hub asks them to rate before they have met it. */
const DECK_TRANCHE: string[][] = [
  // Act 1: the FIVE cells the scene and s03/s04 actually put on a screen. Both
  // hero triples appear here only in part: s04-triple carries the prêt triple in
  // full and the scene carries two cells of the faim one.
  once([
    'fr.a1.cafe.176', 'fr.a1.questions-du-quotidien.075', 'fr.a1.questions.352',
    'fr.a1.questions.338', 'fr.a1.questions.358',
  ]),
  // Act 2: the statement, and the four published intonation questions s05 and
  // s07 display.
  once([
    ...STATEMENT_IDS,
    'fr.a1.expressions-frequentes.058', 'fr.a1.questions.340',
    'fr.a1.presentation-personnelle.087', 'fr.a1.presentation-personnelle.091',
  ]),
  // Act 3: the est-ce que headword, the vous cell of the third triple (which
  // s08-block shows), the three elisions, and the four published est-ce que
  // sentences act 3 displays.
  once([
    'fr.sons.questions.014', 'fr.a1.questions.367', ...ELISION_IDS,
    'fr.a1.questions.008', 'fr.a1.questions.038', 'fr.a1.questions.310', 'fr.a1.questions.116',
  ]),
  // Act 4: the twelve swapped questions, and the three published inversions act
  // 4 displays. `Êtes-vous prêts ?` is one of the twelve and lands here rather
  // than with the triple it completes, because s12-twelve is where it is drawn.
  once([
    ...TWELVE_IDS,
    'fr.a1.questions.099', 'fr.a1.au-restaurant.186', 'fr.a1.nombres.025',
  ]),
  // Act 5: the four answer headwords, the two tags, the answers themselves, the
  // negative question, and the published rows s15-register and s17-wild show.
  // The answer headwords are here rather than in act 1 because s16-answers is
  // the first screen that puts any of them in front of the learner.
  once([
    ...ANSWER_WORDS, ...ANSWER_IDS, ...NEGATIVE_IDS,
    'fr.sons.questions.077', 'fr.sons.questions.169',
    'fr.a1.questions-du-quotidien.072', 'fr.a1.cafe.178',
    'fr.a1.questions.012', 'fr.a1.questions.329',
    'fr.a1.expressions-utiles.005', 'fr.a1.pays-et-nationalites.299', 'fr.a1.questions.327',
    'fr.a1.animaux-domestiques.027',
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
    throw new Error(`a1.19.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.19.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
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
 * `err-wrong-register` and `err-double-question` look like one error and are
 * two. The first is choosing a correct form that fits the situation badly, which
 * produces « As-tu faim ? » to a friend and is invisible to the learner. The
 * second is using two methods at once, which produces « Est-ce que es-tu prêt ? »
 * and is not French at all. A learner who has fixed the second still makes the
 * first, and merging them would remediate only one.                          */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-wrong-register',
    description: 'Picks a question shape without reference to who is listening: uses the swapped-round form with a close friend, or the voice-only form in a letter. Produces perfectly correct French that lands at the wrong temperature, and nobody ever corrects it.',
    detectOn: ['s04-triple', 's15-register', 's17-wild', 's26-quiz/r1-who-is-it-for'],
    drill: 'drill-register',
    retest: 'retest-register',
  },
  {
    id: 'err-flat-question',
    description: 'Says a voice-only question with a flat contour, so it lands as a statement and is answered as one. The one failure mode the first method has, and the learner can eventually hear it, which is why it is a drill rather than a scene.',
    detectOn: ['s06-updown', 's07-heard', 's26-quiz/r2-your-ear'],
    drill: 'drill-contour',
    retest: 'retest-contour',
  },
  {
    id: 'err-no-elision',
    description: 'Writes « Est-ce que il » without cutting the e. The fourth appearance of one anti-hiatus rule, and the first three were all repaired differently, so the learner has three precedents and no reason to prefer this one.',
    detectOn: ['s09-elision', 's10-build', 's14-traps', 's26-quiz/r3-the-block'],
    drill: 'drill-elision',
    retest: 'retest-elision',
  },
  {
    id: 'err-hyphen-and-t',
    description: 'Drops the compulsory hyphen in « Es tu », or gets the inserted t wrong in either direction: « A-il faim ? » with none, « Est-t-il ? » with one it does not need.',
    detectOn: ['s12-twelve', 's13-the-t', 's14-traps', 's26-quiz/r4-swapping'],
    drill: 'drill-inversion',
    retest: 'retest-inversion',
  },
  {
    id: 'err-double-question',
    description: 'Asks the question twice in one sentence: « Est-ce que es-tu prêt ? ». The commonest thing that goes wrong once all three methods are on the table, and unlike the register error it produces something that is not French.',
    detectOn: ['s14-traps', 's03-one-question', 's26-quiz/r5-one-at-a-time'],
    drill: 'drill-pick-one',
    retest: 'retest-pick-one',
  },
  {
    id: 'err-oui-for-si',
    description: 'Answers a negative question with oui, which reads as agreeing with the negative rather than contradicting it. Also the reverse: reaching for si on an ordinary question that has no not in it.',
    detectOn: ['s16-answers', 's18-reading', 's26-quiz/r6-answering'],
    drill: 'drill-si',
    retest: 'retest-si',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-register',
    title: 'Who would you say it to?',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    //
    // Both buckets hold CORRECT FRENCH, which is the only arrangement that
    // teaches anything here. There is no wrong pile: the learner is sorting by
    // temperature rather than by grammar, which is the whole skill.
    buckets: ['a friend', 'a stranger, or in writing'],
    items: [
      'fr.a1.questions.338', // Tu as faim ?
      'fr.a1.questions.358', // As-tu faim ?
      'fr.a1.cafe.176',      // Tu es prêt ?
      'fr.a1.questions.352', // Es-tu prêt ?
      'fr.a1.questions.099', // Avez-vous la taille en dessous ?
      'fr.a1.expressions-frequentes.058', // Tu as besoin d'aide ?
    ],
    coach: 'Every sentence in this drill is correct French, so there is no wrong pile. Ask instead which one you could imagine saying across a kitchen table, and which one you could imagine writing down. The swapped-round ones go in the second pile every time.',
  },
  {
    id: 'retest-register',
    title: 'One more time',
    format: 'mcq',
    q: 'You are cooking with a close friend and want to ask if they are hungry. Which sounds oddly formal?',
    opts: ['Tu as faim ?', 'As-tu faim ?', 'Est-ce que tu as faim ?'],
    correct: 1,
    why: 'As-tu faim ? It is correct French and it is the one that puts a jacket on. Being careful with somebody close is itself a message.',
  },
  {
    id: 'drill-contour',
    title: 'Up or down?',
    format: 'sort',
    // Two buckets, and the pair at the top is the same four words twice. That is
    // the teaching: the learner has nothing to sort on except the mark at the
    // end, which is exactly the information their voice carries out loud.
    buckets: ['the voice goes down', 'the voice goes up'],
    items: [
      'fr.a1.questions.368', // Tu es prêt.
      'fr.a1.cafe.176',      // Tu es prêt ?
      'fr.a1.questions.338', // Tu as faim ?
      'fr.a1.questions.369', // Oui, je suis prêt.
      'fr.a1.questions.370', // Non, je suis fatigué.
      'fr.a1.expressions-frequentes.058', // Tu as besoin d'aide ?
    ],
    coach: 'The first two are the same four words and only the mark at the end separates them. Say each line out loud and let the end of it fall or rise. If a line is asking you something, it goes up.',
  },
  {
    id: 'retest-contour',
    title: 'One more time',
    format: 'mcq',
    q: 'You say « Tu es prêt ? » with a completely flat voice. What does the other person hear?',
    opts: ['A question', 'A statement', 'A more polite question'],
    correct: 1,
    why: 'A statement. With this method the contour is the only thing carrying the question, so a flat one carries nothing and the sentence lands as a piece of news.',
  },
  {
    id: 'drill-elision',
    title: 'Does the e get cut?',
    format: 'sort',
    buckets: ['est-ce que, unchanged', "est-ce qu', cut"],
    items: [
      'fr.a1.questions-du-quotidien.075', // Est-ce que tu es prêt ?
      'fr.a1.questions.364',              // Est-ce qu'il est prêt ?
      'fr.a1.questions.365',              // Est-ce qu'elle est prête ?
      'fr.a1.questions.366',              // Est-ce qu'on est prêt ?
      'fr.a1.questions.008',              // Est-ce que tu es français ?
      'fr.a1.questions.310',              // Est-ce qu'il y a un supermarché près d'ici ?
    ],
    coach: 'Look at the first letter of the word straight after the block, and ask whether it is a vowel sound. Tu is a consonant and nothing happens. Il, elle and on are all vowels and the e goes every time. It is about the sound rather than the spelling.',
  },
  {
    id: 'retest-elision',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to ask whether she is ready. Which do you write?',
    opts: ['Est-ce que elle est prête ?', "Est-ce qu'elle est prête ?", 'Est-ce que-elle est prête ?'],
    correct: 1,
    why: "Est-ce qu'elle. A vowel follows, so the e is cut and an apostrophe stands where it was. Same objection as l'amie and n'ai, repaired the same way.",
  },
  {
    id: 'drill-inversion',
    title: 'Does it need a t?',
    format: 'sort',
    // Every item is a swapped-round form, so the learner cannot sort by method.
    // The only thing separating the buckets is whether the verb ends in a vowel,
    // which is the rule.
    buckets: ['nothing added', 'a t goes in'],
    items: [
      'fr.a1.questions.353', // Est-il prêt ?
      'fr.a1.questions.359', // A-t-il faim ?
      'fr.a1.questions.354', // Est-elle prête ?
      'fr.a1.questions.360', // A-t-elle faim ?
      'fr.a1.questions.361', // Avons-nous faim ?
      'fr.a1.questions.356', // Êtes-vous prêts ?
    ],
    coach: 'Every one of these is already swapped round, so that will not sort them. Look at the last letter of the verb instead. If it is a vowel and the pronoun starts with one, a t goes in to keep them apart. Everything else takes nothing.',
  },
  {
    id: 'retest-inversion',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to ask, carefully, whether he is hungry. Which is correct?',
    opts: ['A-il faim ?', 'A-t-il faim ?', 'At-il faim ?'],
    correct: 1,
    why: 'A-t-il faim ? A ends in a vowel and il begins with one, so the t goes between them. It means nothing and is there only for the sound.',
  },
  {
    id: 'drill-pick-one',
    title: 'One method, or two?',
    format: 'sort',
    buckets: ['one method, correct', 'two methods, not French'],
    items: [
      'fr.a1.questions-du-quotidien.075', // Est-ce que tu es prêt ?
      'fr.a1.questions.352',              // Es-tu prêt ?
      'fr.a1.cafe.176',                   // Tu es prêt ?
      'fr.a1.questions.358',              // As-tu faim ?
      'fr.a1.questions.338',              // Tu as faim ?
      'fr.a1.questions-du-quotidien.072', // Est-ce que tu as faim ?
    ],
    coach: 'Read each one and count how many times it asks. The est-ce que block is one. Swapped words is one. A rising voice is one. Any sentence that does two of those at once is asking twice, and none of the six here does, which is the point: correct French never does.',
  },
  {
    id: 'retest-pick-one',
    title: 'One more time',
    format: 'mcq',
    q: 'Which of these is correct French?',
    opts: ['Est-ce que es-tu prêt ?', 'Est-ce que tu es prêt ?', "Est-ce qu'es-tu prêt ?"],
    correct: 1,
    why: 'Est-ce que tu es prêt ? The block wants an ordinary statement behind it, with the words in their normal order. Swapping them as well asks the question twice.',
  },
  {
    id: 'drill-si',
    title: 'Oui or si?',
    format: 'sort',
    buckets: ['the question has no not: oui', 'the question has a not: si'],
    items: [
      'fr.a1.cafe.176',      // Tu es prêt ?
      'fr.a1.questions.372', // Tu n'es pas prêt ?
      'fr.a1.questions.338', // Tu as faim ?
      'fr.a1.questions.369', // Oui, je suis prêt.
      'fr.a1.questions.373', // Si, je suis prêt.
      'fr.a1.questions-du-quotidien.075', // Est-ce que tu es prêt ?
    ],
    coach: 'Ignore the method entirely: est-ce que, swapped words and a rising voice all make no difference here. Look for a not in the question. If there is one and you want to disagree with it, the answer is si. If there is not, si has no job to do.',
  },
  {
    id: 'retest-si',
    title: 'One more time',
    format: 'mcq',
    q: 'Somebody asks « Tu n\'es pas prêt ? » and you are ready. What do you say?',
    opts: ['Oui, je suis prêt.', 'Si, je suis prêt.', 'Non, je suis prêt.'],
    correct: 1,
    why: 'Si. There is a not in the question and you are contradicting it. Oui would read as agreeing that you were not ready.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and each exists for a layout reason as much as a pedagogical one.
 * `tapTable` is not in ownsLayout(), so the in-flow tables render inside a
 * scrolling page and a three-column table holding whole sentences would run off
 * the fold and take its chrome with it. s04-triple carries two columns; the
 * THIRD COLUMN THE BRIEF ASKS FOR lives here, where `layer: 'deep'` exempts it
 * from the core density caps and a `table` section is only legal in the first
 * place.
 *
 * The brief asks for exactly this and is right about why: "A reference sheet
 * with the three methods, the register column and the inversion list. It is what
 * a learner returns to during a1.20, which is next and empty." Both sheetIds are
 * wired from three sections each.
 *
 * ONLY `teach`, `letterGrid` AND `table` ARE DRAWN INSIDE A SHEET.
 * ReferenceSheet.tsx renders exactly those three and its `default` branch draws
 * the section's TITLE and nothing else. a1.17 shipped two `cheatSheet` sections
 * here and they drew a heading with fourteen invisible rows under it; a1.13 has
 * the same defect still shipped. Nothing below is a `cheatSheet`.             */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.19.methods',
    title: 'The three ways, and when to use each',
    layer: 'deep',
    contains: ['All three methods on one question', 'Which situation each one fits', 'Where the e gets cut'],
    sections: [
      {
        // THE THREE-COLUMN TABLE THE BRIEF ASKS FOR. It is here rather than in
        // the flow because SheetTable is horizontally scrollable by design and
        // `layer: 'deep'` lifts the density caps, so three columns is legible
        // here and is not on an in-flow tapTable.
        //
        // SHORT CELLS ONLY. SheetTable sizes a column at max(110, 320 / cols),
        // so at three columns each is about 110 wide and a full sentence can
        // only be read by dragging the table sideways. a1.17 shipped that bug
        // and fixed it in v4. The reasons live in the prose below.
        type: 'table',
        id: 'sheet-methods-table',
        title: 'One question, three ways',
        layer: 'deep',
        cols: ['method', 'the question', 'who for'],
        rows: METHODS.map((m, i) => [m.name, frOf(TRIPLES[0].cells[i].id), m.when]),
      },
      {
        type: 'teach',
        id: 'sheet-methods-when',
        title: 'How to choose, in one paragraph',
        layer: 'deep',
        body:
          'All three ask exactly the same thing and all three are correct French, so nothing you choose here can '
          + 'be a grammatical mistake. What separates them is who is listening. Letting your voice rise is the '
          + 'relaxed one and belongs in speech with people you are comfortable with; it is the commonest form in '
          + 'real conversation and the rarest in careful writing, because on paper one small mark is carrying the '
          + 'whole question. Swapping the verb and the person round is the careful one and belongs in letters, on '
          + 'forms, in exams, and out loud when you are being formal with somebody; said to a close friend it is '
          + 'noticeable, and nobody will tell you. Est-ce que sits in neither camp: it is correct everywhere, it '
          + 'says nothing at all about how close you are to the person, and it is the only one of the three you '
          + 'can use without first deciding what the situation wants. That is why it is worth making your '
          + 'default. The measured picture backs this up. Across the questions in this app, swapping the words '
          + 'round is about five times commoner in formal settings than casual ones, and letting your voice rise '
          + 'runs the other way by roughly three to one. Est-ce que barely moves between the two, which is '
          + 'exactly what being unmarked looks like.',
      },
      {
        type: 'teach',
        id: 'sheet-methods-elision',
        title: 'Where the e gets cut, and why it is not new',
        layer: 'deep',
        body:
          'Est-ce que loses its e in front of il, elle and on, and writes an apostrophe where the e was: '
          + "est-ce qu'il, est-ce qu'elle, est-ce qu'on. It happens in front of a vowel SOUND rather than a "
          + 'vowel letter, which is the same test you already use for the articles. This is the fourth time you '
          + 'have met one standing objection: French will not let two vowel sounds run into each other with '
          + "nothing between them. The definite articles solved it by cutting: la amie became l'amie. The "
          + 'possessives solved it by swapping the word for another shape: ma amie became mon amie. The negation '
          + "lesson cut again: ne ai became n'ai. And this one cuts. Four rules, one objection, and only three "
          + 'different answers between them, so there is less here to remember than it looks. Note what does NOT '
          + 'happen: nothing is cut in front of tu, nous or vous, because those begin with consonants, and '
          + "nothing about the rest of the sentence changes in any case. Est-ce qu'on carries one extra thing "
          + 'worth knowing: after the e is cut, the n of on carries across onto the following word, so it comes '
          + 'out as kohⁿ-NEH rather than as two separate pieces.',
      },
    ],
  },
  {
    id: 'sheet.a1.19.inversion',
    title: 'All twelve swapped-round forms',
    layer: 'deep',
    contains: ['The closed list, être and avoir', 'Where the t goes in', 'The form nobody says'],
    sections: [
      {
        type: 'table',
        id: 'sheet-inversion-table',
        title: 'The twelve',
        layer: 'deep',
        cols: ['person', 'être', 'avoir'],
        rows: ETRE_INVERSIONS.map((e, i) => [e.who, e.form, AVOIR_INVERSIONS[i].form]),
      },
      {
        type: 'table',
        id: 'sheet-inversion-write',
        title: 'What to write, and what never to write',
        layer: 'deep',
        // TWO COLUMNS, SHORT CELLS. See the note on sheet-methods-table: at two
        // columns SheetTable gives each about 160 and these all fit.
        cols: ['write this', 'never this'],
        rows: [
          ['Es-tu prêt ?', 'Es tu prêt ?'],
          ['A-t-il faim ?', 'A-il faim ?'],
          ['Est-il prêt ?', 'Est-t-il prêt ?'],
          ["Est-ce qu'il est prêt ?", 'Est-ce que il est prêt ?'],
          ['Est-ce que tu es prêt ?', 'Est-ce que es-tu prêt ?'],
          ["Est-ce que j'ai faim ?", 'Ai-je faim ?'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-inversion-why',
        title: 'Why each of those is wrong',
        layer: 'deep',
        body:
          'Es tu prêt ? is missing the hyphen, which is compulsory: without it the two words look accidentally '
          + 'out of order rather than deliberately swapped, and you cannot hear the difference, so this one '
          + 'survives a long time in writing. A-il faim ? is missing the inserted t. A ends in a vowel and il '
          + 'begins with one, so a t goes between them purely to keep them apart; it carries no meaning at all '
          + 'and there is no such word as a-il. Est-t-il prêt ? has the opposite problem: est already ends in a '
          + 't of its own, so nothing needs adding, and the insertion only ever happens when the verb ends in a '
          + "vowel. That is why a-t-il and a-t-elle take one and the other ten forms do not. Est-ce que il est "
          + "prêt ? has not cut the e in front of a vowel. Est-ce que es-tu prêt ? asks the question twice: the "
          + 'block already made it a question, so the words behind it stay in their ordinary order. And Ai-je '
          + 'faim ? is the one that looks most like completing the set and is the one to avoid: it appears in '
          + 'none of the twenty-seven thousand sentences this app holds, because real speakers do not say it. '
          + 'The je question goes through est-ce que instead, which is one of the things est-ce que is for.',
      },
    ],
  },
];

export const QUESTIONS_LESSON: Lesson = {
  id: 'a1.19.l1',
  unitId: 'a1.19',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: 'Questions oui / non',
  level: 'a1',
  // TWENTY-TWO, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.19 sits at seq 22. The stored value is
  // a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 22',
  intro:
    'Three ways to ask the same yes-or-no question, and the choice between them is about the person in front of you rather than the sentence. This is how to ask with your voice, with a block on the front, and by swapping the words round, plus which one to reach for when you cannot tell.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  //
  // v1 was applied to Postgres and merged, and then a1-19-questions.test.ts
  // found THREE ITEMS DECLARED AND DRAWN BY NOTHING: fr.a1.expressions-utiles.005,
  // fr.a1.questions.327 and fr.a1.nombres.025. All three resolved perfectly, all
  // three were released by a tranche, and no section put any of them on a screen.
  // That is a1.08's failure exactly, where 43 itemIds reached spaced repetition
  // and were drawn by no component, and it is invisible to every check that asks
  // "does this id resolve" rather than "did the learner see it".
  //
  // v2 gives each of them a row: the two inversions join s17-wild and
  // « Quel âge a-t-il ? » joins s13-the-t, where it shows the inserted -t- in a
  // sentence the learner has had since the numbers lesson.
  //
  // v3 came from the SAME test asking its other question. Act 1's tranche
  // released all nine hero-triple cells, on the reasoning that they are the hero
  // table's material, and s04-triple shows ONE of the three triples: four of
  // those nine were not on any screen until act 3 or later. Every slice is now
  // set from what its act DRAWS rather than from what its act is about.
  //
  // Two content gaps surfaced while fixing it, and both are worth more than the
  // tranche was: « Vous êtes prêts ? » and « Oui, j'ai faim. » were reaching the
  // learner for the first time in act 6, among the review decks. The first now
  // opens s15-register's second group, where it makes the vous pair a contrast
  // between two methods rather than a single labelled form; the second joins the
  // answers card in s16-answers.
  version: 3,

  grammarAssumed: [
    'The nine subject pronouns, introduced in a1.05',
    'The full present of être, introduced in a1.06, which asked nine questions with the voice alone and named none of them as a method',
    'The full present of avoir, introduced in a1.07, including avoir faim',
    'ne… pas around a finite verb, and the elision of ne, introduced in a1.18',
    'non as a whole answer rather than a piece of a sentence, introduced in a1.18',
    'The rising contour on a final syllable, and that up is a question and down is a statement, introduced in sons.08',
    'Elision as a repair for two vowels meeting, introduced in sons.07',
    'Liaison, and that a silent final consonant attaches to a following vowel, introduced in sons.10',
    'tu against vous as a choice about the listener, introduced in a1.05 and used throughout',
  ],
  grammarIntroduced: [
    'The three yes-no interrogative strategies, and the register that selects between them',
    'Rising intonation named as an interrogative strategy for the first time, having been used since a1.01',
    'The est-ce que periphrasis, and that it leaves constituent order untouched',
    'The elision of est-ce que to est-ce qu\' before a vowel or mute h',
    'Subject-clitic inversion, restricted to être and avoir as a closed twelve-form paradigm',
    'The obligatory hyphen in an inverted verb-clitic group',
    'Epenthetic -t- between a vowel-final verb and a vowel-initial third-person clitic',
    'That ai-je and suis-je are avoided in real usage and are not taught as production',
    'si as the positive reply to a negative question, against oui after a positive one',
    'n\'est-ce pas and non as tag questions, for recognition only',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Yes/No Questions',
    subFr: 'Questions oui / non',
    introFr: 'Trois façons de poser la même question, et le choix dépend de la personne en face de vous.',
    minutes: 26,
    difficulty: 2,
    glyph: '❓',
    screens: 213,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: QUESTIONS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-19-questions.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered. All four of the brief's lesson-specific notes are written in
    // explicitly.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    recorded: [
      {
        id: 'rec-a1-19-contour',
        desc:
          'THE SINGLE MOST IMPORTANT CLIP IN THIS LESSON, and the only way to teach the first method at all. '
          + '« Tu es prêt. » AND « Tu es prêt ? » ARE ONE TAKE, one voice, one pace, statement first and question '
          + 'immediately after with no reset between them. The words are identical and the ONLY difference the '
          + 'learner may hear is the direction of the voice on the final syllable: down, then up. '
          + 'Two separate recordings are two performances. A reader who records the question in its own session '
          + 'will also make it faster, or lighter, or warmer, and the learner will hear THAT and conclude the '
          + 'contour is not the point. Do not lengthen the question. Do not add a pause before the rise. Do not '
          + 'stress any word differently between the two. '
          + 'Then, in the same take: « Tu as faim ? » and « Tu as besoin d\'aide ? », both plainly, both rising, '
          + 'so the learner hears the contour on sentences that are not the demonstration pair.',
        clipIds: [
          'Tu es prêt.', 'Tu es prêt ?', 'statement-question-pair',
          'Tu as faim ?', "Tu as besoin d'aide ?",
          'Tu es canadien ?', 'Vous êtes anglais ?',
        ],
      },
      {
        id: 'rec-a1-19-triple',
        desc:
          'THE HERO SCREEN, AND ALL THREE METHODS ARE ONE TAKE WITH ONE VOICE. « Tu es prêt ? » then « Est-ce '
          + 'que tu es prêt ? » then « Es-tu prêt ? », read straight through as one list with no gap and no '
          + 'reset. '
          + 'THE VARIABLE THE LEARNER IS JUDGING IS REGISTER, so three separate recordings would be fatal: a '
          + 'reader recording the inversion in its own session will make it crisper and more careful, which is '
          + 'precisely the difference the learner is supposed to be attributing to the FORM rather than to the '
          + 'performance. Read all three at the same pace, the same warmth and the same volume. The forms differ; '
          + 'the delivery must not. '
          + 'Also in this take, immediately after: « As-tu faim ? » followed by « Tu as faim ? », which is the '
          + 'scene\'s choice beat. Read the inversion PLAINLY and pleasantly. Do NOT make it sound wrong or '
          + 'stiff: it is correct French said by somebody being careful, and if it sounds like a mistake the '
          + 'whole scene stops working.',
        clipIds: [
          'Tu es prêt ?', 'Est-ce que tu es prêt ?', 'Es-tu prêt ?', 'three-methods-one-take',
          'As-tu faim ?', 'Tu as faim ?', 'scene-choice-pair',
        ],
      },
      {
        id: 'rec-a1-19-inversion',
        desc:
          'THE TWELVE FORMS, READ ONE VERB AT A TIME AND ONE TAKE PER VERB. The six être questions in order '
          + '(es-tu, est-il, est-elle, sommes-nous, êtes-vous, sont-ils), then the six avoir questions in the '
          + 'same order. Reading a verb\'s six in one take is the point: the learner has to hear that only the '
          + 'person moves down a column. '
          + '« Est-il prêt ? » AND « A-t-il faim ? » MUST ALSO BE RECORDED ADJACENT, in that order, in one take. '
          + 'That pair is a whole section: the inserted t is audible against a form that does not take one, and '
          + 'separated by so much as a breath the comparison is gone. '
          + 'THE INSERTED t IS AN ORDINARY t AND MUST NOT BE LEANED ON. a-t-il is three light syllables, '
          + 'ah-TEEL, with the t simply beginning the second one. A reader who emphasises it teaches that it '
          + 'means something, and it means nothing at all. '
          + 'THE SILENT t IN sont-ils AND ont-ils WAKES UP AND MUST BE FULLY PRONOUNCED: sohⁿ-TEEL and ohⁿ-TEEL, '
          + 'with the nasal vowel closed and NO n sound behind it. In the statements Ils sont and Ils ont that t '
          + 'is silent, and the contrast is worth a separate clip of each statement for the same take.',
        clipIds: [
          ...INVERSIONS.map((i) => i.form),
          'etre-six-in-one-take', 'avoir-six-in-one-take',
          'Est-il prêt ?', 'A-t-il faim ?', 'the-t-pair',
          'Ils sont prêts.', 'Ils ont faim.',
        ],
      },
      {
        id: 'rec-a1-19-block',
        desc:
          'EST-CE QUE IS NEVER RECORDED IN ISOLATION. It is an unstressed block that only exists in front of a '
          + 'sentence, and a lone clip invites the learner to stress it and to pause after it. There is no clip '
          + 'anywhere in this lesson of est-ce que on its own, and if a request for one arrives it is a mistake '
          + 'in the request. '
          + 'Every clip here is the block WITH its sentence: « Est-ce que tu es prêt ? », « Est-ce que vous êtes '
          + 'prêts ? », « Est-ce que tu es français ? ». Read the block flat, fast and light, three syllables '
          + 'running together into something like ess-kuh, with the weight of the sentence landing where it '
          + 'always would, at the end. '
          + 'THE THREE ELIDED FORMS ARE ONE TAKE: « Est-ce qu\'il est prêt ? », « Est-ce qu\'elle est prête ? », '
          + '« Est-ce qu\'on est prêt ? », adjacent and at the same pace. ess-KEEL against ess-KEL is the one '
          + 'genuine listening question in this lesson and it only works if the two are delivered identically '
          + 'apart from the vowel. Do not slow either one down to help. '
          + "In est-ce qu'on, the n carries across onto est: kohⁿ-NEH, not koh, pause, neh.",
        clipIds: [
          'Est-ce que tu es prêt ?', 'Est-ce que vous êtes prêts ?', 'Est-ce que tu es français ?',
          "Est-ce qu'il est prêt ?", "Est-ce qu'elle est prête ?", "Est-ce qu'on est prêt ?",
          'elision-three-in-one-take',
        ],
      },
      {
        id: 'rec-a1-19-answers',
        desc:
          'THE FOUR ANSWERS, and the si pair is the one that matters. « Tu n\'es pas prêt ? » IMMEDIATELY '
          + 'FOLLOWED BY « Si, je suis prêt. », ONE TAKE, because si only means anything as a reply to that '
          + 'question and a clip of it alone teaches nothing. The question rises. The answer is firm but not '
          + 'sharp: si is a correction, not a rebuke, and a reader who makes it sound annoyed teaches the wrong '
          + 'social fact about a very common word. '
          + 'Then, in the same take and for contrast: « Tu es prêt ? » followed by « Oui, je suis prêt. », so the '
          + 'learner hears the same answer shape after a question with no not in it. '
          + 'oui, non and peut-être are each recorded as WHOLE REPLIES rather than as bare words where possible: '
          + '« Oui, je suis prêt. », « Non, je suis fatigué. », « Oui, j\'ai faim. ». peut-être is the one '
          + 'exception and is recorded alone, because it genuinely is a complete reply on its own and is almost '
          + 'always said that way. Two syllables, puh-TEHTR, with no pause at the hyphen.',
        clipIds: [
          "Tu n'es pas prêt ?", 'Si, je suis prêt.', 'si-pair',
          'Tu es prêt ?', 'Oui, je suis prêt.', 'oui-pair',
          'Non, je suis fatigué.', "Oui, j'ai faim.", 'peut-être',
        ],
      },
      {
        id: 'rec-a1-19-wild',
        desc:
          'The six published sentences in s17-wild, read PLAINLY and with no teaching colour at all. These are '
          + 'the evidence that the three methods live in ordinary French rather than in a lesson, and the whole '
          + 'value of the screen is that nobody arranged them. A reader who marks the method in each one turns '
          + 'six pieces of evidence into six demonstrations. '
          + 'Read each at conversational pace, as if it were the only sentence in the room.',
        clipIds: [
          "Tu as besoin d'aide ?", "Est-ce que c'est loin d'ici ?",
          "Est-ce qu'il y a un supermarché près d'ici ?", 'Avez-vous la taille en dessous ?',
          'Sont-ils canadiens ?', 'Ton chat miaule toujours le soir, n\'est-ce pas ?',
        ],
      },
      {
        id: 'rec-a1-19-traps',
        desc:
          'The five written traps, wrong version then right version, with a clear beat between them. '
          + 'FOUR OF THE FIVE ARE INAUDIBLE and must be read as identical pairs, which is itself the teaching: '
          + '« Es tu prêt ? » and « Es-tu prêt ? » sound exactly the same, because the hyphen is a mark on the '
          + 'page and nothing else. So are « A-t-il faim ? » against a reader\'s attempt at « A-il faim ? », '
          + 'which is why the wrong one there should be read as written and will sound halting. Do not perform '
          + 'the difference on the hyphen pair. Read both the same and let the card say why. '
          + '« Est-ce que il est prêt ? » IS audible: read it with the two vowels genuinely colliding, slowly '
          + 'enough that the learner hears why the language refuses it. '
          + '« Est-ce que es-tu prêt ? » is audible too and should be read flatly and without hesitation, '
          + 'because a learner writing it does not hesitate either. '
          + '« Ai-je faim ? » should be read correctly and unremarkably. It is not a mispronunciation, it is a '
          + 'form nobody chooses, and making it sound odd would teach the wrong reason for avoiding it.',
        clipIds: [
          'trap-no-hyphen', 'trap-missing-t', 'trap-no-elision', 'trap-two-methods', 'trap-ai-je',
        ],
      },
      {
        id: 'rec-a1-19-scene',
        desc:
          'The opening scene, French bubbles only. Théo is a man in his late twenties, relaxed, cooking, half '
          + 'paying attention. His first line is thrown over a shoulder. '
          + 'HIS REPLY « Oui, merci. Un peu. » IS THE WHOLE SCENE AND MUST NOT SOUND OFFENDED. He is not '
          + 'annoyed, he has not noticed anything, and nothing has gone wrong that he could name. He simply '
          + 'matches the register he was handed: a shade more formal, a shade more distant, and the merci is a '
          + 'word he would not otherwise have used. Warmth drops by one degree and no more. Any hint of a '
          + 'question in his voice turns this into a correction and loses the point, which is that the error is '
          + 'undetectable from both sides. '
          + 'His last line, said to the flatmate rather than to the learner, is where the ordinary warmth comes '
          + 'back, and the contrast between that line and his reply is the only evidence the learner gets.',
        clipIds: [
          'Bon, on mange vers huit heures ?',
          'Oui, merci. Un peu.',
          'Tu as faim ? On mange bientôt.',
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const QUESTIONS_ITEM_IDS = ITEM_IDS;
export const QUESTIONS_SPEAK_IDS = SPEAK_IDS;
export const QUESTIONS_DICTATION_IDS = DICTATION_IDS;
export const QUESTIONS_TRANCHES = DECK_TRANCHE;
export const QUESTIONS_TRIPLE_IDS = TRIPLE_IDS;
export const QUESTIONS_TWELVE_IDS = TWELVE_IDS;
export const QUESTIONS_WILD_IDS = IN_THE_WILD;
export const QUESTIONS_ANSWER_WORD_IDS = ANSWER_WORDS;

/* ─── The handover ─────────────────────────────────────────────────────────
 *
 * The brief asks for this explicitly and names what a1.20 needs: "your est-ce
 * que block (because qu'est-ce que is built on it), your inversion mechanics,
 * and your register frame."
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  FIRST, THE ID COORDINATION, WHICH IS THE PART a1.20 CANNOT WORK AROUND.
 * ══════════════════════════════════════════════════════════════════════════
 *
 *     fr.a1.questions.001-.351    published before this build
 *     fr.a1.questions.352-.373    a1.19. Twenty-two rows.
 *     fr.a1.questions.374+        FREE.
 *
 *     fr.sons.questions.001-.173  published before this build
 *     fr.sons.questions.174+      FREE, AND ENTIRELY a1.20's.
 *
 * THIS LESSON AUTHORS NO HEADWORDS AT ALL and takes nothing in
 * fr.sons.questions. That was not planned: the brief says to author headwords
 * from .174, and the probe found that everything this lesson needed already
 * existed there. a1.20 inherits the whole sequence.
 *
 * WHAT a1.20 WILL FIND ALREADY PUBLISHED IN fr.sons.questions, which its brief
 * will probably not know:
 *
 *     .001-.013   qui, que, quoi, où, quand, comment, pourquoi, combien,
 *                 combien de, quel, quelle, lequel, laquelle
 *     .031-.034   quels, quelles, lesquels, lesquelles
 *     .081-.090   auquel, auxquels, auxquelles, duquel, desquels, desquelles,
 *                 quiconque, quelconque, d'où, jusqu'où
 *
 * ALL NINE OF a1.20'S CORE QUESTION WORDS ARE ALREADY HEADWORDS WITH
 * RESPELLINGS AND flashcard/voiceflash DRILLS. That is the a1.17 shape exactly,
 * where twelve of fifteen forms existed and the brief said three. Probe before
 * authoring a single one.
 *
 * `fr.a1.questions` gaps, which are gaps and NOT free slots, because ids are the
 * SRS key: 193, 195, 206, 207, 208, 250, 251, 256, 265, 266, 279, 282, 284, 286,
 * 288, 289, 292, 293, 294, 297, 298, 308. Never renumber.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  THE CURATION COST a1.20 IS ABOUT TO INHERIT, MEASURED RATHER THAN GUESSED.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * Of the 329 published rows in fr.a1.questions, 257 ARE QUESTION-WORD QUESTIONS.
 * That is 78% of the theme, and all of it is a1.20's material rather than this
 * lesson's. Broken down by the word that claims them:
 *
 *     où 37   comment 34   combien 34   quand 30   pourquoi 30   qui 27
 *     quel 22   quelle 19   qu'est-ce que 8   que 8   quels 4   quoi 1
 *     qu'est-ce qui 1   qu'est-ce qu' 1   quelles 1
 *
 * Only 72 rows in the entire theme are genuine yes/no questions: 31 est-ce que,
 * 29 intonation, 12 inversion. This lesson used a filtered subset of those and
 * left every question-word row untouched. a1.20 has a rich theme waiting and
 * does not need to author much at all.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  WHAT a1.20 INHERITS AND MUST NOT RETEACH.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * THE est-ce que BLOCK IS BUILT, and this is the piece a1.20 needs most, because
 * `qu'est-ce que` is literally a question word riding on it. The learner already
 * has:
 *
 *   - that est-ce que goes on the FRONT of an ordinary statement and moves
 *     nothing inside it;
 *   - that it is correct in every register, which is this lesson's reframe;
 *   - that it elides to est-ce qu' before il, elle and on, and WHY, connected to
 *     the three other anti-hiatus repairs they have met;
 *   - the headword card at fr.sons.questions.014.
 *
 *   So a1.20 can introduce « Qu'est-ce que tu fais ? » as "the block you already
 *   have, with a question word bolted in front of it" rather than as a new
 *   four-word idiom. It is worth doing that explicitly: the learner will
 *   otherwise memorise kess-kuh as a single unanalysed lump, which is what most
 *   courses leave them with.
 *
 * THE INVERSION MECHANICS ARE BUILT, as a CLOSED LIST OF TWELVE on être and
 * avoir only. a1.20 will want « Où es-tu ? » and « Quel âge a-t-il ? », and both
 * are covered by what this lesson taught:
 *
 *   - the swap itself, and that the hyphen is compulsory;
 *   - the inserted -t- with a-t-il and a-t-elle, taught AGAINST est-il, which
 *     takes none;
 *   - that ai-je and suis-je are avoided, with the escape through est-ce que.
 *
 *   WHAT IS NOT BUILT AND IS a1.20'S: inversion with a NOUN subject (« Ton frère
 *   est-il là ? »). This lesson deliberately withdrew its only good corpus row
 *   for it, fr.a1.questions.086 « Ce téléphone est-il le tien ? », because it
 *   carries « le tien », a possessive pronoun a1.17 bans from every surface.
 *   a1.20 will need to author or find another.
 *
 * THE REGISTER FRAME IS BUILT AND MEASURED. a1.20 inherits both the teaching and
 * the evidence: inversion is roughly five times commoner in formal themes than
 * casual ones, intonation runs the other way about three to one, and est-ce que
 * barely moves. Those figures are in questions-corpus.ts with the method that
 * produced them. a1.20 should reuse the frame rather than restate it, and should
 * be aware that question-word questions distribute DIFFERENTLY from yes/no ones:
 * these numbers were taken over yes/no questions only and do not transfer.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON LEFT ALONE ON PURPOSE.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * NO QUESTION WORD APPEARS ON ANY PRODUCTION SURFACE. The lesson displays
 * fr.a1.nombres.025 « Quel âge a-t-il ? » as READING ONLY, to show the inserted
 * -t- doing its job in French the learner has already met, and it appears on no
 * deck, no drill, no dictée and in no quiz answer. `qu'est-ce que` appears
 * nowhere at all. The batch, the merge and the test all check this against
 * production surfaces rather than against every string, because a guard that
 * fires on legitimate context gets deleted rather than fixed.
 *
 * NO VERB BUT être AND avoir IS ASKED FOR AS OUTPUT. Several imported sentences
 * carry others as reading exposure, which the brief allows explicitly.
 *
 * a1.18 IS SHIPPED AND IS CREDITED RATHER THAN DUPLICATED. Its ne… pas is used
 * to build the one negative question this lesson needs, in its own frame and
 * with its own adjective, and nothing here teaches negation. `grammarAssumed`
 * names it twice.                                                            */
export const HANDOVER_NEXT_FREE_ID = 'fr.a1.questions.374';
export const HANDOVER_SONS_NEXT_FREE_ID = 'fr.sons.questions.174';

/** The range this lesson owns, exported so the batch can check that nobody else
 *  has landed INSIDE it rather than only above it. That distinction is not
 *  theoretical: a1.15 landed inside a1.17's range mid-build and a highest-id
 *  check passed it, because eighteen rows below that batch's top do not move the
 *  maximum. a1.18 and a1.22 both landed during THIS build and neither touched
 *  this range, which was verified the same way rather than assumed. */
export const OWNED_ID_RANGE = { from: 'fr.a1.questions.352', to: 'fr.a1.questions.373' };

/** Question-word teaching this lesson must never put on a learner surface.
 *  a1.20 owns all of it.
 *
 *  MULTI-WORD PHRASES ONLY, and that is deliberate. a1.13's first draft listed
 *  its neighbour's mnemonics as single words and the guard fired immediately on
 *  one of its own glosses. `que` in particular is unusable as a single-word
 *  probe here, because `est-ce que` contains it and appears on almost every
 *  screen in this lesson. What a1.20 owns is TEACHING about question words, and
 *  these phrases are what that teaching sounds like. */
export const QUESTION_WORD_TEACHING = [
  'question word', 'question words', 'asking for information',
  'wh- question', 'open question', 'open questions',
  "qu'est-ce que", "qu'est-ce qui", 'qui est-ce',
  'ask which one', 'ask how many', 'ask what time',
];
