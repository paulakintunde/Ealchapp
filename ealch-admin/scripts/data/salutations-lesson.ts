// a1.01.l1 "Les salutations" — the mission journey.
//
// ── What this rebuild is, and what it deliberately is not ──────────────────
//
// The shipped a1.01.l1 was a good 12-section lesson written before the v2
// architecture existed. It taught 25 items, opened on a `story`, and closed on
// a 12-question quiz. Everything it taught is still here. What changed is the
// SHAPE: acts and milestones, a scene the learner commits inside, a glossary
// surfaced at every point of use, a round-based exam with drills that fire on
// failure, and reference sheets for the material that does not belong in the
// flow.
//
// It is NOT a sons lesson wearing an A1 badge. The sons v2 lessons are built
// around a phonetic mechanism: letterGrid, groupDrill at xl, trapDrill,
// inhibitionDrill, dictation. Those sections exist because the thing being
// taught is a sound, and a sound is learned by contrast and repetition. This
// lesson teaches a SOCIAL RULE, and a social rule is learned by situation. So
// the section vocabulary is scene, tapTable, useCases, scenario, examples and
// vocabThemes, and the one drill-shaped mission (dictation) is here because
// spelling these phrases is genuinely hard, not because sons has one.
//
// The full argument, and the checklist the next A1 lesson should be held to,
// is in ealch-admin/A1-LESSON-STANDARD.md.
//
// ── The bug this rebuild fixes ─────────────────────────────────────────────
//
// The shipped lesson carried TWO quiz sections: a 3-question "Quick Check" at
// position 8 and the 12-question exam at position 12. buildPages() finds the
// quiz with `sections.find(s => s.type === 'quiz')` — the FIRST one — and
// app/lesson.tsx renders `sections.filter(...)` minus the quiz it already
// paged. The second quiz never became a page. Twelve authored questions,
// every one with a `why`, shipped and unreachable.
//
// It is fixed here by the fold: ONE quiz section, at the end, round-based. The
// early confidence check the Quick Check provided has not been dropped, it has
// moved to s06-earcheck, a `listening` mission whose questions carry `why` and
// which renders through its own view rather than through the quiz pager. That
// is a section the learner reaches, and it does the same pedagogical job at the
// same point in the journey.
//
// The alternative was to make the pager honour every quiz section. That is a
// real fix and a bigger one: buildPages, quizSection, app/lesson.tsx and the
// act mapping all key off "the quiz" being singular, and per-lesson quiz
// progress would have to become per-section. Worth doing when a lesson
// genuinely wants a mid-flow exam. This one does not.
//
// What now stops the bug returning is a TEST, not a code change:
// lesson-contract.test.ts fails any lesson in the seed whose authored quiz
// question count exceeds what the pager can reach. Run against the shipped
// lesson it reports 12 unreachable questions; against this one, none.
//
// lessonPager.logic.ts is deliberately UNCHANGED. It still resolves the quiz
// with `sections.find(s => s.type === 'quiz')`, and a lesson that genuinely
// wants a mid-flow exam will still have to teach buildPages, quizSection,
// app/lesson.tsx and the act mapping which quiz they mean. The test is what
// makes that a decision someone has to make on purpose rather than a silent
// loss of content.

import type { Lesson, LessonAct, LessonDrill, LessonSection, ErrorTrigger, ReferenceSheet, SceneBeat } from '../../../ealch-v2/src/content/schema.ts';
import { REFRAME, SALUTATIONS_TERMS } from './salutations-terms.ts';

export { REFRAME };

/* ─── The corpus this lesson draws on ──────────────────────────────────────
 *
 * Every id below already exists in the salutations theme (413 items). Nothing
 * is authored here: the lesson's job is to SEQUENCE the corpus, and a lesson
 * that invents its own words is a lesson whose words are not in the flashcard
 * hub, the SRS, or any other lesson. The shipped version touched 25 of these.
 * This one touches 50, which is the number the missions actually use rather
 * than a target.                                                            */

const id = (n: string) => `fr.a1.salutations.${n}`;

/** Hello, in its four settings. */
const GREETINGS = ['001', '002', '003', '026', '089'];
/** Goodbye, and the wish that follows it. */
const FAREWELLS = ['006', '007', '008', '009', '031', '035', '036', '037'];
/** Please, thank you, sorry — and the replies, which learners are never given. */
const POLITENESS = ['004', '012', '048', '013', '052', '053', '010', '011', '005', '014', '055'];
/** The register spine: five ideas, each in both forms. Index-aligned with TU. */
const VOUS = ['015', '018', '010', '086', '050'];
const TU = ['079', '067', '011', '087', '051'];
/** How are you, and the answers that are not "fine". */
const HOW_ARE_YOU = ['016', '081', '082', '083', '084', '088'];
/** Names and introductions. */
const MEETING = ['017', '068', '065', '066'];
/** The word that goes after bonjour. */
const TITLES = ['111', '112'];
/** Whole exchanges, for reading and speaking. */
const SENTENCES = ['019', '020'];
/** The four items that carry a `dictation` drill. */
const DICTATION = ['022', '023', '295', '360'];

/** Spoken practice draws only from items carrying `voiceflash`, because that
 *  is the drill the mic-scored deck runs. An item without it renders as a card
 *  the learner cannot be scored on, which looks like a broken mission rather
 *  than a missing tag. Asserted in salutations-a1.test.ts so a corpus edit
 *  that strips the tag fails here rather than on a device. */
const SPEAK_IDS = ['001', '002', '003', '006', '008', '004', '013', '010', '011', '014', '017', '065', '015', '016'].map(id);

/** Listening practice is the register spine plus two whole exchanges: the
 *  place where the ear, not the eye, has to make the call. */
const LISTEN_IDS = [...VOUS, ...TU, ...SENTENCES].map(id);

const ITEM_IDS = [
  ...new Set([
    ...GREETINGS, ...FAREWELLS, ...POLITENESS, ...VOUS, ...TU,
    ...HOW_ARE_YOU, ...MEETING, ...TITLES, ...SENTENCES, ...DICTATION,
  ]),
].map(id);

/* ─── Missions ─────────────────────────────────────────────────────────────
 *
 * One idea per mission, one mission per screenful. `frSub` is the French line
 * under the English title on the missions page, so the learner reads French
 * before they open anything. `say` is the narration script.                  */

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────
 *
 * Built in the shape sons.06 settled on, because that scene is the one the
 * house style was worked out on:
 *
 *   - beats extracted to a named const, not inline. The scene is the section
 *     whose copy gets rewritten most, and a const keeps the diff readable.
 *   - a `size` on every beat, so the player is told how much room to give a
 *     card instead of inferring it. Prose sits at md, the two beats that must
 *     land alone (the choice, the break) sit at lg.
 *   - `audio` named on the beat that speaks it rather than left to the section
 *     default, so the French bubbles carry a slow speed and the English
 *     narration carries the coach voice.
 *
 * The section itself no longer declares `size: 'xl'`. That was the bug behind
 * all six xl-words failures: `ownsLayout()` ignores section size, so the field
 * looked inert, but density.logic.ts reads an XL screen as one French unit at
 * 56pt and holds every string to 12 words. Prose cannot live there. No shipped
 * scene sets a section size except sons.08, at md.
 *
 * Person changed from third to second. sons.06 opens "You rehearsed this on the
 * tram", and the app's voice rule is second person, present tense, one learner.
 * It also fixes the choice beat: asking a learner to pick on Tom's behalf puts
 * them a seat away from the decision the mission exists to teach. The story is
 * otherwise untouched, including the beat where nothing is said.               */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Four days in Lyon. You have found a bakery you like.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The baker',
    fr: 'Bonjour monsieur.',
    en: 'Hello sir.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You rehearsed this. You know the word, and you remember the please.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'What comes out of your mouth first?',
    options: [
      {
        fr: 'Une baguette, s’il vous plaît.',
        en: 'the order, politely',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Bonjour madame.',
        en: 'the greeting, first',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. The order can wait three seconds. The greeting cannot.',
      breaks: 'That is the instinct every English speaker brings. Watch what it does.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Une baguette, s’il vous plaît.',
    en: '(the order, with no greeting in front of it)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  // The beat where nothing is said, and deliberately the one beat with no
  // audio. A TTS pass over an ellipsis reads as a bug on a device; the silence
  // is the teaching, so it is played by showing it and saying nothing.
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The baker',
    fr: '…',
    en: '(She reaches for the baguette without looking up.)',
    stage: 'The warmth goes out of the room.',
  },
  {
    kind: 'break',
    size: 'lg',
    // Kept on merit, NOT for layout. It was shortened from "You skipped the
    // greeting" to buy back a line, and on a Pixel 6 it did not: the display
    // role is large enough that three words still wrap to two. Continue stays
    // below the fold either way (see the note on `body`).
    //
    // It is better teaching regardless — it names the word the reframe is
    // about instead of the category.
    heading: 'You skipped bonjour',
    // 25 words, down from 36. The eight shipped scenes run 24 to 40 here and
    // sons.06, the tightest, is 24.
    //
    // MEASURED, and only a partial win: the trim took the body from five lines
    // to three, but on a Pixel 6 the break card is still taller than the
    // viewport and its Continue button still sits below the fold. The card
    // stacks a two-line heading, two reading rows of three lines each, this
    // body and the coach line, and no amount of copy trimming closes that gap.
    //
    // It is not broken — the page scrolls, a chevron marks it, and Continue is
    // reachable — and it is very likely the shipped behaviour for every scene
    // break rather than something this lesson introduced, since sons.06's
    // break carries MORE per row (respell as well as IPA). That was reasoned,
    // not verified on a device.
    //
    // The real fix is layout, not copy: `scene` is absent from ownsLayout() in
    // LessonPager.tsx, so it renders inside a scrolling page instead of owning
    // the viewport. Adding it there would let the break size itself, and would
    // touch all eight scene lessons, so it wants a deliberate decision.
    body: 'French does not work like English here. The greeting is what makes you a person in the room rather than a customer at a counter.',
    wrong: {
      fr: 'Une baguette, s’il vous plaît.',
      ipa: '/yn ba.ɡɛt sil vu plɛ/',
      en: 'the order, with no greeting',
    },
    right: {
      fr: 'Bonjour madame. Une baguette, s’il vous plaît.',
      ipa: '/bɔ̃.ʒuʁ ma.dam yn ba.ɡɛt sil vu plɛ/',
      en: 'the greeting, then the order',
    },
    coach: 'Same words, four syllables earlier. That is the whole difference.',
    // Audio-first: the ear answers before the eye can. `audioFirst` is what
    // does the work — ScenePlayer holds the text back and plays the right-hand
    // line on entry.
    //
    // `autoplay` is NOT set, though sons.06 sets it here and five other seed
    // sections do too. It is declared in schema.ts and implemented in no
    // component: grep the app and the only hits are the schema and the seed
    // data itself. Setting it would look like it did something. The six
    // existing instances are pre-existing and left alone; they are inert too.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'The next morning',
    fr: 'Bonjour madame.',
    en: 'Hello madam.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The baker',
    fr: 'Bonjour monsieur. Comme d’habitude ?',
    en: 'Hello sir. The usual?',
    stage: 'She is already reaching for your baguette.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Four days of being served. One word, and you are a regular.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the door you did not open ─────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Baker Who Went Quiet',
    frSub: 'La boulangère qui s’est tue',
    render: 'screens',
    layer: 'core',
    terms: ['titles'],
    say: {
      text: 'Watch what happens. You are polite by every rule you have been taught, and it still goes wrong.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A boulangerie on a corner',
      city: 'Lyon',
      time: 'Tuesday, ten past eight',
      // NO image, deliberately. sons.06's setting card carries one and this
      // scene wants one, but the only bakery asset we have,
      // lessons/salutations/story-bakery.jpg, contradicts the scene twice: the
      // baker in it is a man, and this scene turns on her being a woman (the
      // frSub is "La boulangère qui s'est tue", the learner says "Bonjour
      // madame", the stage direction is "She reaches for the baguette"). It
      // also frames the Eiffel Tower, and this is Lyon.
      //
      // The gendered pair is the teaching, not decoration: the baker greets
      // you with "monsieur" and you answer with "madame", so the learner meets
      // both titles in one exchange. Bending the story to fit the picture would
      // cost that. Restore this field when an asset exists that matches.
      ambience: 'room-tone-bakery',
    },
    beats: SCENE_BEATS,
    // The reframe is referenced, never retyped, so this appearance cannot drift
    // out of agreement with the seven others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} You pay it first, every time, and then the conversation can start.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Bonjour is the price of entry. By the end of this lesson you will pay it without thinking, and you will know which version to use.',
    goals: [
      { t: 'Open any door in France', s: 'Greet correctly on the way in, whatever time it is and whoever is behind the counter.' },
      { t: 'Choose tu or vous', s: 'Decide how close you are before you speak, and know why the safe answer is the safe answer.' },
      { t: 'Answer, not just ask', s: 'Reply to merci, to ça va, and to an introduction, without freezing.' },
      { t: 'Leave properly', s: 'Close a conversation the way French closes it, with a goodbye and a wish.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-choice',
    title: 'Before Any Word, a Choice',
    frSub: 'Tu ou vous ?',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['register', 'tu', 'vous'],
    say: 'French makes you decide something English lets you leave vague. Here is the decision.',
    cards: [
      {
        label: 'The fork',
        head: 'Two settings, one language',
        fr: 'tu · vous',
        sub: 'close · distant',
        body: 'English says "you" to a child and to a judge. French makes you pick. The choice happens before the sentence starts, and it shows in every word after it.',
      },
      {
        label: 'Distance',
        head: 'vous',
        fr: 'Bonjour ! Comment allez-vous ?',
        sub: 'Hello! How are you?',
        body: 'Strangers, anyone older, anyone serving you, anyone at work, and any group. This is the setting French leaves on by default.',
      },
      {
        label: 'Closeness',
        head: 'tu',
        fr: 'Salut ! Ça va ?',
        sub: 'Hi! How’s it going?',
        body: 'Friends, family, children, and people your own age once you have been invited. Until somebody offers it, staying on vous is not distant, it is correct.',
      },
    ],
  },

  /* ── Act 2: the word that opens the door ──────────────────────────────── */

  {
    type: 'tapTable',
    id: 's04-when',
    title: 'When to Say What',
    frSub: 'À quelle heure ?',
    layer: 'core',
    terms: ['titles', 'salut', 'bonsoir'],
    sheetId: 'sheet.a1.01.phrases',
    say: 'Bonjour is the price of entry. The only question is which version the clock is asking for. Tap any row.',
    cols: ['French', 'English', 'When'],
    rows: [
      {
        cells: ['Bonjour', 'Hello / Good day', 'Waking hours, until dark'],
        say: 'Bonjour',
        detail: {
          title: 'Bonjour',
          body: 'The default, and the one that is never wrong before evening. Say it to shopkeepers, neighbours, colleagues, strangers in a lift. Add madame or monsieur and it warms up further. There is no time of day too early for it.',
          say: 'Bonjour madame.',
        },
      },
      {
        cells: ['Bonsoir', 'Good evening', 'Arriving, after dark'],
        say: 'Bonsoir',
        detail: {
          title: 'Bonsoir',
          body: 'Swaps in for bonjour once the light has gone, roughly from six. It is a greeting for ARRIVING, not for leaving. Walking into a restaurant at eight, this is your word.',
          say: 'Bonsoir madame.',
        },
      },
      {
        cells: ['Salut', 'Hi / Bye', 'Friends only, either direction'],
        say: 'Salut',
        detail: {
          title: 'Salut',
          body: 'Works coming and going, which no other greeting here does. It belongs strictly to people you tutoie. Said to a shopkeeper it lands as over-familiar rather than friendly.',
          say: 'Salut !',
        },
      },
      {
        cells: ['Allô', 'Hello', 'On the phone, and nowhere else'],
        say: 'Allô',
        detail: {
          title: 'Allô',
          body: 'A telephone word only. It is how you answer a call and how you check the line is still alive. Say it face to face and it reads as a joke.',
          say: 'Allô ?',
        },
      },
      {
        cells: ['Bonne journée', 'Have a good day', 'Leaving, before evening'],
        say: 'Bonne journée',
        detail: {
          title: 'Bonne journée',
          body: 'A wish for the person LEAVING, so it closes a conversation rather than opening one. The standard sign-off from a shop before evening, usually straight after au revoir.',
          say: 'Au revoir, bonne journée !',
        },
      },
      {
        cells: ['Bonne soirée', 'Have a good evening', 'Leaving, after dark'],
        say: 'Bonne soirée',
        detail: {
          title: 'Bonne soirée',
          body: 'The evening version of bonne journée, and the one most often confused with bonsoir. Bonsoir is hello. Bonne soirée is goodbye. Same part of the day, opposite doors.',
          say: 'Au revoir, bonne soirée !',
        },
      },
      {
        cells: ['Bonne nuit', 'Good night', 'Someone is going to bed'],
        say: 'Bonne nuit',
        detail: {
          title: 'Bonne nuit',
          body: 'Only when sleep is next. It is what you say to a child at bedtime or to a housemate on the stairs, not what you say leaving a dinner. For that you want bonne soirée.',
          say: 'Bonne nuit !',
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's05-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set, and without
    // it this mission drew a blank screen on a device — reported on mission 5.
    // Every v2 lesson that ships this section sets both (sons.05, .06, .07,
    // .08, .09, .10); the ones that do not are the v1 lessons.
    //
    // The renderer no longer returns nothing in that case (MissionSection's
    // fallback moved out of `default:` so a `break` lands on it), so this is
    // now a choice of presentation rather than a crash guard: one trap per
    // screen, which is how a trap wants to be met.
    swipe: true,
    size: 'lg',
    title: 'Three Traps',
    frSub: 'Trois pièges',
    layer: 'core',
    terms: ['salut', 'bonsoir'],
    say: 'Three mistakes that every English speaker makes, in the same order, in their first week.',
    errors: [
      {
        wrong: 'Walking in and saying « Une baguette, s’il vous plaît. »',
        right: 'Walking in and saying « Bonjour madame. »',
        why: 'Bonjour is the price of entry. The please does not cover it, because please softens a request and the problem is that you made a request at all before saying hello.',
      },
      {
        wrong: 'Saying « Bonne nuit » as you leave a dinner party.',
        right: 'Saying « Bonne soirée » as you leave a dinner party.',
        why: 'Bonne nuit means sleep well. Used on the doorstep at ten it sounds like you are putting your hosts to bed. Bonne soirée is the one that wishes them a good rest of their evening.',
      },
      {
        wrong: 'Opening with « Salut ! » to the person behind a counter.',
        right: 'Opening with « Bonjour ! » to the person behind a counter.',
        why: 'Salut is reserved for people you tutoie. To a stranger it reads as over-familiar, which lands worse than being too formal ever does.',
      },
    ],
  },

  {
    type: 'listening',
    id: 's06-earcheck',
    title: 'Two Doors, Same Street',
    frSub: 'Deux portes, une rue',
    layer: 'core',
    questionsInModal: true,
    terms: ['register'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'Two exchanges, thirty seconds apart, on the same street. Listen for what changes.',
    lines: [
      { fr: 'Bonjour madame. Comment allez-vous ?', en: 'Hello madam. How are you?' },
      { fr: 'Très bien, merci. Et vous ?', en: 'Very well, thank you. And you?' },
      { fr: 'Salut Léa ! Ça va ?', en: 'Hi Léa! How’s it going?' },
      { fr: 'Ça va bien, merci, et toi ?', en: 'I’m good, thanks, and you?' },
    ],
    questions: [
      {
        q: 'You walk into a shop at ten in the morning. What is the first thing out of your mouth?',
        opts: ['Bonsoir', 'Bonjour', 'Bonne nuit', 'Allô'],
        correct: 1,
        why: 'Bonjour covers every waking hour until dark, and going in it is never the wrong choice.',
      },
      {
        q: 'In the first exchange, which word tells you they are on vous?',
        opts: ['madame', 'allez-vous', 'merci', 'bonjour'],
        correct: 1,
        why: 'Allez-vous is the vous form of the verb. Madame is a good clue but it is the verb that settles it.',
      },
      {
        q: 'Someone says merci to you. What do you say back?',
        opts: ['Merci', 'Pardon', 'De rien', 'Enchanté'],
        correct: 2,
        why: 'De rien is the everyday reply, literally "of nothing". Saying merci back leaves the thanks unanswered.',
      },
    ],
  },

  /* ── Act 3: how close are you? ────────────────────────────────────────── */

  {
    type: 'tapTable',
    id: 's07-pairs',
    title: 'The Same Thing, Twice',
    frSub: 'Deux façons de le dire',
    layer: 'core',
    terms: ['tu', 'vous', 'register'],
    sheetId: 'sheet.a1.01.register',
    say: 'Five ideas, each in both forms. The meaning does not change. The distance does.',
    cols: ['vous', 'tu', 'Meaning'],
    rows: [
      {
        cells: ['Comment allez-vous ?', 'Comment vas-tu ?', 'How are you?'],
        say: 'Comment allez-vous ? Comment vas-tu ?',
        detail: {
          title: 'How are you?',
          body: 'The vous form is what you say to anyone you have just met. The tu form is for friends. Both are more formal than ça va, which is the version you will hear most.',
          say: 'Comment allez-vous ?',
        },
      },
      {
        cells: ['Comment vous appelez-vous ?', 'Comment tu t’appelles ?', 'What is your name?'],
        say: 'Comment vous appelez-vous ? Comment tu t’appelles ?',
        detail: {
          title: 'What is your name?',
          body: 'The vous form sounds long because it is: the verb takes vous twice. Nobody shortens it. The tu form is what you will use with anyone your own age.',
          say: 'Comment vous appelez-vous ?',
        },
      },
      {
        cells: ['S’il vous plaît', 'S’il te plaît', 'Please'],
        say: 'S’il vous plaît. S’il te plaît.',
        detail: {
          title: 'Please',
          body: 'One word changes and the rest stays. This is the pair you will use most often, and the one where the wrong form is most noticeable, because please turns up in every transaction.',
          say: 'S’il vous plaît.',
        },
      },
      {
        cells: ['Et vous ?', 'Et toi ?', 'And you?'],
        say: 'Et vous ? Et toi ?',
        detail: {
          title: 'And you?',
          body: 'Two syllables that turn an answer back into a conversation. French expects it: answering ça va and stopping there reads as closing the exchange down.',
          say: 'Et vous ?',
        },
      },
      {
        cells: ['Je vous remercie', 'Je te remercie', 'I thank you'],
        say: 'Je vous remercie. Je te remercie.',
        detail: {
          title: 'I thank you',
          body: 'A step up from merci, for when someone has genuinely done something for you. The vous form is what you would write at the end of an email.',
          say: 'Je vous remercie.',
        },
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's08-cava',
    title: 'One Phrase, Three Jobs',
    frSub: 'Ça va',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    terms: ['caVa'],
    size: 'lg',
    say: 'Ça va is the most useful two words in the language, and it does three different jobs.',
    cards: [
      {
        label: 'Question',
        head: 'Asking',
        fr: 'Ça va ?',
        sub: 'How’s it going?',
        body: 'Rising tone at the end and it is a question. It works with anyone you would tutoie, and with almost anyone once the greeting is out of the way.',
      },
      {
        label: 'Answer',
        head: 'Answering',
        fr: 'Ça va bien, merci.',
        sub: 'I’m good, thanks.',
        body: 'Flat tone and it is an answer. Add merci and it is complete. Then hand it back with et toi, or et vous, or the exchange stops with you.',
      },
      {
        label: 'Frankly',
        head: 'Not great',
        fr: 'Comme ci, comme ça.',
        sub: 'So-so.',
        body: 'French does not require you to be fine. This is the accepted way of saying you are not, without making it a conversation.',
      },
    ],
  },

  {
    type: 'examples',
    id: 's09-names',
    title: 'Giving Your Name',
    frSub: 'Je m’appelle…',
    layer: 'core',
    terms: ['enchante'],
    say: 'Three ways to say who you are, and the one word you reply with when somebody tells you who they are.',
    examples: [
      { fr: 'Je m’appelle Claire.', en: 'My name is Claire.', note: 'Literally "I call myself". The standard, everywhere.' },
      { fr: 'Mon nom est Claire.', en: 'My name is Claire.', note: 'Stiffer. Fine on a form, rare out loud.' },
      { fr: 'Je m’appelle Claire, et vous ?', en: 'My name is Claire, and you?', note: 'The two-syllable ending that keeps it a conversation.' },
      { fr: 'Enchanté.', en: 'Pleased to meet you.', note: 'What a man says. A woman writes Enchantée, with a second e. Both sound identical.' },
    ],
  },

  {
    type: 'practice',
    id: 's10-listen',
    title: 'Formal or Casual?',
    frSub: 'Écoutez et décidez',
    layer: 'core',
    terms: ['register'],
    say: 'No text this time. The ear has to make the call.',
    skill: 'listen',
    itemIds: LISTEN_IDS,
  },

  /* ── Act 4: the words, banked ─────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's11-words',
    title: 'The Words Themselves',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['deRien', 'enchante', 'caVa'],
    sheetId: 'sheet.a1.01.phrases',
    say: 'Four decks. Open whichever you want first.',
    themes: [
      {
        title: 'Hello',
        cards: [
          { fr: 'Bonjour', sub: 'bohⁿ-ZHOOR', en: 'Hello, until dark' },
          { fr: 'Bonsoir', sub: 'bohⁿ-SWAHR', en: 'Good evening, arriving' },
          { fr: 'Salut', sub: 'sa-LÜ', en: 'Hi or bye, friends only' },
          { fr: 'Allô', sub: 'a-LOH', en: 'Hello, on the phone' },
          { fr: 'Bienvenue', sub: 'byaⁿ-vuh-NÜ', en: 'Welcome' },
        ],
      },
      {
        title: 'Goodbye',
        cards: [
          { fr: 'Au revoir', sub: 'oh ruh-VWAHR', en: 'Goodbye' },
          { fr: 'À bientôt', sub: 'a byaⁿ-TOH', en: 'See you soon' },
          { fr: 'À demain', sub: 'a duh-MAⁿ', en: 'See you tomorrow' },
          { fr: 'À plus tard', sub: 'a plü TAHR', en: 'See you later' },
          { fr: 'À la prochaine', sub: 'a la pro-SHEN', en: 'Until next time' },
          { fr: 'Bonne nuit', sub: 'bon NWEE', en: 'Good night, sleep next' },
        ],
      },
      {
        title: 'Please and thank you',
        cards: [
          { fr: 'Merci', sub: 'mehr-SEE', en: 'Thank you' },
          { fr: 'Merci beaucoup', sub: 'mehr-SEE boh-KOO', en: 'Thank you very much' },
          { fr: 'Merci infiniment', sub: 'mehr-SEE aⁿ-fee-nee-MAHⁿ', en: 'Thank you enormously' },
          { fr: 'S’il vous plaît', sub: 'seel voo PLEH', en: 'Please, to vous' },
          { fr: 'S’il te plaît', sub: 'seel tuh PLEH', en: 'Please, to tu' },
        ],
      },
      {
        title: 'The replies nobody teaches',
        cards: [
          { fr: 'De rien', sub: 'duh RYAⁿ', en: 'You’re welcome' },
          { fr: 'Je vous en prie', sub: 'zhuh voo zahⁿ PREE', en: 'You’re welcome, formal' },
          { fr: 'Avec plaisir', sub: 'a-vek pleh-ZEER', en: 'With pleasure' },
          { fr: 'Pardon', sub: 'par-DOHⁿ', en: 'Sorry, or excuse me' },
          { fr: 'Excusez-moi', sub: 'eks-kü-zay-MWAH', en: 'Excuse me, to vous' },
          { fr: 'Désolé', sub: 'day-zo-LAY', en: 'Sorry' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's12-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French before you flip.',
    cards: [
      { front: 'Hello (before dark)', back: 'Bonjour', say: 'Bonjour' },
      { front: 'Good evening, arriving', back: 'Bonsoir', say: 'Bonsoir' },
      { front: 'Hi / bye, to a friend', back: 'Salut', say: 'Salut' },
      { front: 'Goodbye', back: 'Au revoir', say: 'Au revoir' },
      { front: 'See you tomorrow', back: 'À demain', say: 'À demain' },
      { front: 'Please, to a stranger', back: 'S’il vous plaît', say: 'S’il vous plaît' },
      { front: 'Please, to a friend', back: 'S’il te plaît', say: 'S’il te plaît' },
      { front: 'Thank you very much', back: 'Merci beaucoup', say: 'Merci beaucoup' },
      { front: 'You’re welcome', back: 'De rien', say: 'De rien' },
      { front: 'Excuse me (to vous)', back: 'Excusez-moi', say: 'Excusez-moi' },
      { front: 'How are you? (to vous)', back: 'Comment allez-vous ?', say: 'Comment allez-vous ?' },
      { front: 'And you? (to tu)', back: 'Et toi ?', say: 'Et toi ?' },
      { front: 'Pleased to meet you', back: 'Enchanté', say: 'Enchanté' },
      { front: 'Have a good day', back: 'Bonne journée', say: 'Bonne journée' },
    ],
  },

  {
    type: 'dictation',
    id: 's13-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    say: 'Four sentences. Listen, then build them letter by letter. The accents count.',
    itemIds: DICTATION.map(id),
  },

  /* ── Act 5: out in the street ─────────────────────────────────────────── */

  {
    type: 'practice',
    id: 's14-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    say: 'Fourteen expressions. Say each one and the app scores what it hears.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's15-scenario',
    title: 'Your Turn at the Bakery',
    frSub: 'À la boulangerie',
    layer: 'core',
    terms: ['caVa', 'deRien', 'titles'],
    // The opening scene now puts the learner at the counter themselves, so this
    // can no longer introduce itself as the first time they stand there.
    say: 'The same bakery, a week on. This time you hold up the whole exchange.',
    setting: 'A boulangerie in Lyon, half past eight in the morning.',
    turns: [
      { ai: 'Bonjour monsieur !', en: 'Hello sir!', user: 'Bonjour madame.' },
      { ai: 'Comment allez-vous ?', en: 'How are you?', user: 'Ça va bien, merci. Et vous ?' },
      { ai: 'Très bien. Vous désirez ?', en: 'Very well. What would you like?', user: 'Une baguette, s’il vous plaît.' },
      { ai: 'Voilà. Un euro dix.', en: 'There you go. One euro ten.', user: 'Merci beaucoup.' },
      { ai: 'Je vous en prie. Bonne journée !', en: 'You’re welcome. Have a good day!', user: 'Au revoir, bonne journée !' },
    ],
  },

  {
    type: 'useCases',
    id: 's16-cases',
    title: 'Six Doors You Will Open This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['titles', 'bonsoir'],
    say: 'Every one of these is a real moment, and every one of them starts the same way.',
    cases: [
      { situation: 'Getting into a lift with a neighbour', fr: 'Bonjour.', en: 'Hello.' },
      { situation: 'Arriving at a restaurant at eight in the evening', fr: 'Bonsoir, une table pour deux, s’il vous plaît.', en: 'Good evening, a table for two, please.' },
      { situation: 'Stopping a stranger to ask the way', fr: 'Excusez-moi, madame…', en: 'Excuse me, madam…' },
      { situation: 'Being introduced to a colleague’s partner', fr: 'Enchanté. Je m’appelle Tom.', en: 'Pleased to meet you. My name is Tom.' },
      { situation: 'Leaving the pharmacy at midday', fr: 'Au revoir, bonne journée !', en: 'Goodbye, have a good day!' },
      { situation: 'Answering your phone', fr: 'Allô ?', en: 'Hello?' },
    ],
  },

  {
    type: 'reading',
    id: 's17-reading',
    title: 'A Morning in the Building',
    frSub: 'Un matin dans l’immeuble',
    layer: 'core',
    terms: ['tu', 'vous', 'caVa'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions; without it the section takes the fallback path, and
    // MissionRich contains no reference to `glossary` at all.
    //
    // Found on a device: the passage rendered, the questions rendered, and the
    // five glossary entries below rendered nowhere. Every other lesson that
    // authors a glossary sets this; the only two that do not (sons.02, sons.03)
    // author no glossary, so they lose nothing.
    //
    // It also earns the section the viewport — `reading` + `questionsInModal`
    // is one of ownsLayout()'s cases — which is what a full passage wants.
    questionsInModal: true,
    say: 'Read it once for the shape. Tap any word you do not know.',
    // THE A1 RULE FOR THIS PASSAGE: if a line does not open with «, it is in
    // English. The stage directions are context, and context is instruction —
    // an A1 learner should spend their reading effort on the exchange, not on
    // decoding "Elle rencontre madame Blanc" before they reach any of it. What
    // sits inside the guillemets is the French, and it is untouched.
    //
    // The narration used to be French, and it was carrying the passage's whole
    // vocabulary load: descend, l'escalier, rencontre, voit, une amie. None of
    // those is taught anywhere in this lesson, so a learner met five unknown
    // words before the first greeting.
    text:
      'It is eight in the morning. Claire goes down the stairs. She meets madame Blanc.\n\n' +
      '« Bonjour madame. Comment allez-vous ? »\n' +
      '« Très bien, merci. Et vous ? »\n' +
      '« Ça va bien, merci. »\n\n' +
      'Out in the street, Claire sees Léa, a friend.\n\n' +
      '« Salut Léa ! Ça va ? »\n' +
      '« Ça va bien, merci, et toi ? »\n' +
      '« Comme ci, comme ça. À demain ! »\n' +
      '« À demain. Bonne journée ! »',
    // Re-pointed at the dialogue, because that is where the French now lives.
    // Every entry is a single whitespace-delimited token that actually appears
    // between the guillemets: the reader strips [.,!?;:«»"'] and lowercases
    // before matching, so an entry that is not a bare token is an underline
    // that never appears.
    glossary: [
      { word: 'allez-vous', en: 'are you', note: 'The vous form. Comment allez-vous is the full, polite "how are you".' },
      { word: 'très', en: 'very', note: 'Très bien is the standard step up from plain bien.' },
      { word: 'toi', en: 'you', note: 'The tu form after et. Vous would give et vous instead.' },
      { word: 'demain', en: 'tomorrow', note: 'À demain names the day you will next meet.' },
      { word: 'journée', en: 'day', note: 'The stretch of daylight, not the date. Bonne journée wishes you the rest of it.' },
    ],
    questions: [
      { q: 'Why does Claire say vous to madame Blanc and tu to Léa?', a: 'Madame Blanc is a neighbour she does not know well; Léa is a friend.' },
      { q: 'Which greeting does Claire use twice, and which one only once?', a: 'She uses ça va with both. Bonjour is only for madame Blanc, and salut only for Léa.' },
      { q: 'What does Claire wish Léa at the end?', a: 'Bonne journée, a good day, because it is still morning.' },
    ],
  },

  /* ── Act 6: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's18-review',
    title: 'The Whole System, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['deRien', 'bonsoir', 'salut'],
    say: 'Rate each card objectively. Again, hard, or easy. The ones you mark again come back.',
    cards: [
      { front: 'What do you say before anything else, in any shop?', back: 'Bonjour is the price of entry. Greet first, ask second.' },
      { front: 'Bonsoir or bonne soirée, walking in at eight?', back: 'Bonsoir. Bonne soirée is for leaving.' },
      { front: 'Bonne nuit is for…', back: 'Sleep. Not for leaving a dinner.', say: 'Bonne nuit' },
      { front: 'You do not know them. tu or vous?', back: 'vous. Always, until you are invited to tu.' },
      { front: 'Please, to the person at the counter', back: 'S’il vous plaît', say: 'S’il vous plaît' },
      { front: 'They said merci. You say…', back: 'De rien. Or je vous en prie, if you want the formal one.', say: 'De rien' },
      { front: 'Salut goes…', back: 'Both ways, hello and goodbye, but only with people you tutoie.', say: 'Salut' },
      { front: 'You answered ça va. What have you forgotten?', back: 'Et vous ? or et toi ? Handing it back is expected.', say: 'Et vous ?' },
      { front: 'Leaving a shop at eleven in the morning', back: 'Au revoir, bonne journée !', say: 'Au revoir, bonne journée !' },
      { front: 'Answering the telephone', back: 'Allô ?', say: 'Allô ?' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's19-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    // The prose deliberately carries no counts. It used to open "You have met
    // fifty expressions ... spelled four sentences and said fourteen phrases",
    // and every one of those was a number typed by hand next to a `stats` block
    // that stated the same figures again. Saying a number twice on one card is
    // two chances to be wrong and one card that reads as padded.
    body: 'You have met the expressions, watched a scene, read a passage, spelled the sentences that are hard to spell and said the core phrases out loud. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    // See the note there.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's20-quiz',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Four rounds. Miss too many in a round and you get a drill before the next one.',
    rounds: [
      {
        id: 'r1-walking-in',
        label: 'Walking in',
        targets: ['err-no-greeting', 'err-time-of-day'],
        say: 'The first three seconds.',
        questions: [
          {
            q: 'You walk into a small shop in Lyon. What comes out of your mouth first?',
            format: 'mcq',
            opts: ['Bonjour madame.', 'Excusez-moi.', 'Une baguette, s’il vous plaît.', 'Salut !'],
            correct: 0,
            why: 'Bonjour is the price of entry. The other three all skip it, and the please in option three does not buy it back.',
            ref: 's01-scene',
          },
          {
            q: 'It is seven in the evening and you are arriving at a dinner. Which one?',
            format: 'mcq',
            opts: ['Bonne soirée', 'Bonne nuit', 'Bonsoir', 'Bonjour'],
            correct: 2,
            why: 'Bonsoir is the greeting for arriving after dark. Bonne soirée wishes someone a good evening as they leave.',
            ref: 's04-when',
          },
          {
            q: 'Bonne nuit belongs where?',
            format: 'mcq',
            opts: ['Arriving at a party after dark', 'Leaving someone who is going to bed', 'Answering the phone at night', 'Greeting a shopkeeper in the evening'],
            correct: 1,
            why: 'It means sleep well. Anywhere else it sounds like you are sending the other person to bed.',
            ref: 's04-when',
          },
          {
            q: 'Write the greeting you use on the phone, and only on the phone.',
            format: 'typeIn',
            accept: ['Allô', 'Allo'],
            answer: 'Allô',
            why: 'Allô is a telephone word. Face to face it reads as a joke.',
            ref: 's04-when',
          },
          {
            q: 'Listen. Which greeting is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'Bonsoir madame.' },
            opts: ['Bonne soirée madame.', 'Bonjour madame.', 'Bonne nuit madame.', 'Bonsoir madame.'],
            correct: 3,
            why: 'Bonsoir and bonne soirée sound close and mean opposite things. Bonsoir is hello, bonne soirée is goodbye.',
            ref: 's04-when',
          },
          {
            q: 'Fix this. It is eight in the evening and you are walking into a restaurant: « Bonne soirée ! »',
            format: 'errorSpot',
            accept: ['Bonsoir'],
            answer: 'Bonsoir',
            why: 'Bonne soirée is a wish for someone on their way out. Coming in, you want bonsoir.',
            ref: 's05-traps',
          },
        ],
      },
      {
        id: 'r2-how-close',
        label: 'How close are you?',
        targets: ['err-wrong-register'],
        say: 'The choice you make before you speak.',
        questions: [
          {
            q: 'The baker is about sixty and you have never met. Which?',
            format: 'mcq',
            opts: ['Comment vas-tu ?', 'Comment allez-vous ?', 'Comment tu t’appelles ?', 'Salut, ça va ?'],
            correct: 1,
            why: 'A stranger behind a counter takes vous, and allez-vous is the vous form.',
            ref: 's07-pairs',
          },
          {
            q: 'Your friend’s eight-year-old asks your name. You answer, then ask back. Which?',
            format: 'mcq',
            opts: ['Je vous remercie', 'Comment allez-vous ?', 'Et toi ?', 'Et vous ?'],
            correct: 2,
            why: 'A child takes tu, and et toi is the tu form of and you.',
            ref: 's07-pairs',
          },
          {
            q: 'Listen. Which form did you hear?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'S’il te plaît.' },
            opts: ['S’il te plaît', 'Je te remercie', 'S’il vous plaît', 'Je vous en prie'],
            correct: 0,
            why: 'Te against vous is the whole difference, and it is one syllable. This is the pair you will hear most often.',
            ref: 's07-pairs',
          },
          {
            q: 'You are not sure which form to use. What is the safe move?',
            format: 'mcq',
            opts: ['Use tu, it is friendlier', 'Avoid the question entirely', 'Ask them to choose', 'Use vous and wait to be invited to tu'],
            correct: 3,
            why: 'Being too formal is invisible. Being too familiar is not. The invitation to tu is a real moment and it will come.',
            ref: 's03-choice',
          },
          {
            q: 'Rewrite this for a friend: « S’il vous plaît »',
            format: 'typeIn',
            accept: ['S’il te plaît', 'Sil te plait'],
            answer: 'S’il te plaît',
            why: 'One word swaps and the rest holds. Vous becomes te, not toi, because it is the object of the verb.',
            ref: 's07-pairs',
          },
          {
            q: 'Salut works for…',
            format: 'mcq',
            opts: ['hello only', 'hello and goodbye, with people you tutoie', 'goodbye only', 'anyone, at any time'],
            correct: 1,
            why: 'It is the only greeting here that runs both ways, and the only one restricted by register rather than by the clock.',
            ref: 's04-when',
          },
        ],
      },
      {
        id: 'r3-please-thanks',
        label: 'Please, thank you, sorry',
        targets: ['err-thanks-reply'],
        say: 'The half of politeness that gets left out.',
        questions: [
          {
            // Was mcq, and its own distractors gave it away: Pardon, Merci and
            // Enchanté are not replies to thanks, so the answer survived by
            // elimination without the learner ever recalling it. This is the
            // reply the lesson claims nobody teaches, so it is asked cold.
            q: 'Someone thanks you. Write the everyday reply.',
            format: 'typeIn',
            accept: ['De rien', 'Je vous en prie'],
            answer: 'De rien',
            why: 'De rien is the everyday you are welcome. Je vous en prie is the same move one register up and is accepted here. Answering merci with merci leaves the thanks hanging.',
            ref: 's11-words',
          },
          {
            q: 'You want to interrupt a stranger to ask directions. You open with:',
            format: 'mcq',
            opts: ['Salut', 'Excusez-moi', 'De rien', 'Enchanté'],
            correct: 1,
            why: 'Excusez-moi is the vous form and the one for stopping someone you do not know. Pardon works too, and is shorter.',
            ref: 's11-words',
          },
          {
            q: 'Je vous en prie is…',
            format: 'mcq',
            opts: ['a more formal way of saying de rien', 'a way of saying thank you', 'a greeting', 'an apology'],
            correct: 0,
            why: 'It is you are welcome, one register up. You will hear it from anyone serving you.',
            ref: 's11-words',
          },
          {
            q: 'Say it out loud: thank you very much.',
            format: 'speak',
            target: 'Merci beaucoup.',
            ipa: '/mɛʁ.si bo.ku/',
            why: 'The final p of beaucoup is silent, and the word ends on an ou that stays rounded.',
            ref: 's14-speak',
          },
          {
            q: 'You have just been introduced to someone. One word.',
            format: 'typeIn',
            accept: ['Enchanté', 'Enchantée'],
            answer: 'Enchanté',
            why: 'Both spellings are accepted here because both are correct. Which one is yours depends on who is speaking.',
            ref: 's09-names',
          },
          {
            q: 'A woman is writing her own name card. Which spelling of "pleased to meet you" is hers?',
            format: 'mcq',
            opts: ['Enchante', 'Enchantée', 'Enchanté', 'Enchantés'],
            correct: 1,
            why: 'The extra e agrees with her. It changes nothing about how the word sounds.',
            ref: 's09-names',
          },
        ],
      },
      {
        id: 'r4-on-the-way-out',
        label: 'On the way out',
        targets: ['err-time-of-day'],
        say: 'Closing it properly.',
        questions: [
          {
            // Was mcq. Bonsoir and Allô are not sign-offs at all and Bonne nuit
            // is the one trap, so three of four options were free. Produced
            // rather than picked, because this is the phrase the learner will
            // say aloud on their way out of a shop this week.
            q: 'You are leaving a shop at eleven in the morning. Write what comes after au revoir.',
            format: 'typeIn',
            accept: ['Bonne journée'],
            answer: 'Bonne journée',
            why: 'Bonne journée wishes the rest of the day. It is the standard sign-off from any shop before evening.',
            ref: 's16-cases',
          },
          {
            q: 'You are leaving a restaurant at ten at night. After au revoir:',
            format: 'mcq',
            opts: ['Bonjour', 'Bonne journée', 'Allô', 'Bonne soirée'],
            correct: 3,
            why: 'Bonne soirée is the evening version. Bonne nuit would suggest they are going to bed.',
            ref: 's04-when',
          },
          {
            // Was mcq over four à- phrases that all mean roughly "see you".
            // Recognising the precise one among near-synonyms is a weaker test
            // than producing it, and the accent is part of getting it right.
            q: 'You will see this person tomorrow. Write the goodbye that says so.',
            format: 'typeIn',
            accept: ['À demain'],
            answer: 'À demain',
            why: 'À demain names the day. À bientôt, à plus tard and à la prochaine are all vaguer, and all correct when you do not know when.',
            ref: 's11-words',
          },
          {
            q: 'Listen. Which goodbye is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'À bientôt.' },
            opts: ['À demain', 'À plus tard', 'À bientôt', 'À la prochaine'],
            correct: 2,
            why: 'À bientôt is soon without saying when. À plus tard means later the same day.',
            ref: 's11-words',
          },
          {
            q: 'Say it out loud, the way you would leaving a bakery.',
            format: 'speak',
            target: 'Au revoir, bonne journée !',
            ipa: '/o ʁə.vwaʁ bɔn ʒuʁ.ne/',
            why: 'Said as one movement, not two sentences. The pause after au revoir is shorter than English wants it to be.',
            ref: 's14-speak',
          },
          {
            q: 'The single move that changes how a French shop treats you:',
            format: 'mcq',
            opts: ['Speaking louder', 'Greeting before you ask for anything', 'Using more please', 'Apologising first'],
            correct: 1,
            why: 'This is the whole lesson in one line, and it is the one thing you can test tomorrow morning.',
            ref: 's21-roundup',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's21-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Six things you did not have this morning.',
    body: 'You can walk into a shop in France and be treated as a person rather than a transaction. That is not a small thing, and it is almost entirely one word said at the right moment. Everything else in this lesson hangs off it.',
    points: [
      'Bonjour is the price of entry. Greet first, ask second, every single time.',
      'Bonjour until dark, bonsoir after it, salut only with people you tutoie.',
      'Bonsoir is hello and bonne soirée is goodbye, and they sound almost the same.',
      'vous with anyone you do not know, and wait to be invited to tu.',
      'When someone says merci, you say de rien. Half of politeness is the reply.',
      'Answer ça va and hand it straight back with et vous ? or et toi ?',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * These four figures were typed by hand: '50', '18 of 21', '4', '70%'. Every
 * one of them is a fact about the array directly above, and a display string is
 * validated against nothing, so the first mission added or quiz round dropped
 * would have left the card confidently wrong with the whole suite still green.
 *
 * Derived here instead. It throws rather than degrades: a progress card that
 * silently reports "0 of 0" is worse than a build that stops. */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's19-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.01.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Expressions met', v: String(ITEM_IDS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
    { k: 'Pass mark', v: `${quiz.passMark}%` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * `estScreens` is what the mission actually costs, not a guess rounded to a
 * nice number, because it is divided by the rest points to check no stretch
 * runs past the checkpoint-spacing limit. A flattering estimate here buys a
 * lesson that passes the validator and exhausts the learner.                */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The door you did not open',
    sections: ['s01-scene', 's02-goals', 's03-choice'],
    milestone: 'You have seen what the first word costs.',
    estScreens: 16,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'The word that opens it',
    sections: ['s04-when', 's05-traps', 's06-earcheck'],
    milestone: 'You know which greeting the clock is asking for.',
    estScreens: 12,
  },
  {
    id: 'act3',
    title: 'How close are you?',
    sections: ['s07-pairs', 's08-cava', 's09-names', 's10-listen'],
    milestone: 'You can choose tu or vous, and hear which one you were given.',
    estScreens: 20,
    restPoints: ['s08-cava/after-cards'],
  },
  {
    id: 'act4',
    title: 'The words, banked',
    sections: ['s11-words', 's12-flash', 's13-dictation'],
    milestone: 'Fifty expressions, and you can spell the hard ones.',
    estScreens: 22,
    restPoints: ['s12-flash/halfway'],
  },
  {
    id: 'act5',
    title: 'Out in the street',
    sections: ['s14-speak', 's15-scenario', 's16-cases', 's17-reading'],
    milestone: 'You have said all of it out loud, and read it back.',
    estScreens: 20,
    restPoints: ['s14-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s18-review', 's19-progress', 's20-quiz', 's21-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 40,
    restPoints: ['s18-review/halfway', 's20-quiz/after-r2'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole corpus at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Acts 5 and 6 release nothing because they teach nothing new,
 * they apply and test what acts 1 to 4 handed over.                          */

const DECK_TRANCHE: string[][] = [
  ['001', '003', '111', '112'].map(id),
  ['002', '006', '007', '026', '036', '037'].map(id),
  ['015', '079', '018', '067', '010', '011', '086', '087', '050', '051', '016', '065', '017', '068', '066', '019', '020', '081', '083'].map(id),
  ['004', '012', '048', '013', '052', '053', '005', '014', '055', '008', '009', '031', '035', '089', '082', '084', '088', '022', '023', '295', '360'].map(id),
  [],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * A trigger names a mistake, the places it is watched for, the drill that
 * fires when it trips, and the check that closes the loop. The round `targets`
 * above point at these ids, so a failed round runs the drill for the mistake
 * that round was built to catch rather than a generic retry.                */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-no-greeting',
    description: 'Opens with the request instead of the greeting, the way English allows.',
    detectOn: ['s01-scene', 's15-scenario', 's20-quiz/r1-walking-in'],
    drill: 'drill-open-first',
    retest: 'retest-open-first',
  },
  {
    id: 'err-time-of-day',
    description: 'Picks the wrong greeting for the clock, or uses an arriving word to leave.',
    detectOn: ['s04-when', 's20-quiz/r1-walking-in', 's20-quiz/r4-on-the-way-out'],
    drill: 'drill-clock',
    retest: 'retest-clock',
  },
  {
    id: 'err-wrong-register',
    description: 'Uses tu where vous is expected, usually by reaching for salut or ça va with a stranger.',
    detectOn: ['s03-choice', 's07-pairs', 's10-listen', 's20-quiz/r2-how-close'],
    drill: 'drill-register-sort',
    retest: 'retest-register',
  },
  {
    id: 'err-thanks-reply',
    description: 'Knows merci but has no reply to it, so the exchange stops on the thanks.',
    detectOn: ['s11-words', 's20-quiz/r3-please-thanks'],
    drill: 'drill-replies',
    retest: 'retest-replies',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-open-first',
    title: 'Greeting first, request second',
    format: 'flashcard',
    coach: 'Read the situation, say the greeting, then the request. In that order, out loud.',
    pairs: [
      ['You want a baguette', 'Bonjour madame. Une baguette, s’il vous plaît.'],
      ['You want to ask the way', 'Bonjour monsieur. Excusez-moi…'],
      ['You want a table for two, at eight in the evening', 'Bonsoir. Une table pour deux, s’il vous plaît.'],
      ['You want to pay', 'Bonjour. Je peux payer, s’il vous plaît ?'],
    ],
  },
  {
    id: 'retest-open-first',
    title: 'One more time',
    format: 'mcq',
    q: 'You need stamps. You reach the counter. First words?',
    opts: ['Des timbres, s’il vous plaît.', 'Bonjour madame.', 'Excusez-moi.'],
    correct: 1,
    why: 'Greeting, then request. The other two both start the transaction before you have said hello.',
  },
  {
    id: 'drill-clock',
    title: 'Sort by the clock',
    format: 'sort',
    buckets: ['Arriving', 'Leaving'],
    // Item ids, not the words: a drill scores against the corpus, so it plays
    // the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    items: ['001', '002', '089', '006', '036', '037', '007', '009'].map(id),
    coach: 'Arriving words greet. Leaving words wish. Bonsoir and bonne soirée are the pair that catches everyone.',
  },
  {
    id: 'retest-clock',
    title: 'One more time',
    format: 'mcq',
    q: 'Nine in the evening, walking into a friend’s flat for dinner.',
    opts: ['Bonne soirée', 'Bonne nuit', 'Bonsoir'],
    correct: 2,
    why: 'You are arriving, so you need a greeting. The other two are both wishes for someone leaving.',
  },
  {
    id: 'drill-register-sort',
    title: 'Which form is this?',
    format: 'sort',
    buckets: ['tu', 'vous'],
    items: ['079', '015', '011', '010', '087', '086', '003', '052'].map(id),
    coach: 'Look for the pronoun. Te, toi and tu on one side; vous on the other. Salut has no pronoun and belongs to tu anyway.',
  },
  {
    id: 'retest-register',
    title: 'One more time',
    format: 'mcq',
    q: 'A pharmacist you have never met asks how you are. You answer and ask back.',
    opts: ['Et toi ?', 'Et vous ?', 'Et tu ?'],
    correct: 1,
    why: 'A stranger serving you takes vous. Et tu is not a form anyone uses.',
  },
  {
    id: 'drill-replies',
    title: 'The other half of politeness',
    format: 'flashcard',
    coach: 'They say the left. You say the right. Say it before you flip.',
    pairs: [
      ['Merci', 'De rien'],
      ['Merci beaucoup', 'Je vous en prie'],
      ['Comment allez-vous ?', 'Très bien, merci. Et vous ?'],
      ['Enchanté', 'Enchantée'],
      ['Bonne journée !', 'Merci, vous aussi !'],
    ],
  },
  {
    id: 'retest-replies',
    title: 'One more time',
    format: 'mcq',
    q: 'You hold a door. They say merci. You say…',
    opts: ['Merci', 'De rien', 'Pardon'],
    correct: 1,
    why: 'De rien closes the exchange. Merci back leaves it open, and pardon apologises for something that did not happen.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson, not during it. Kept out of
 * the flow so a mission stays one idea, and reachable from the sections that
 * preview it via `sheetId`. Layer 'deep' exempts these from the core density
 * caps, which is the point: a sheet is allowed to be dense.                 */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.01.register',
    title: 'tu / vous, the full table',
    layer: 'deep',
    contains: ['Every paired form in this lesson', 'Who takes which', 'How the invitation to tu happens'],
    sections: [
      {
        type: 'table',
        id: 'sheet-register-table',
        title: 'The pairs',
        layer: 'deep',
        cols: ['vous', 'tu', 'English'],
        rows: [
          ['Comment allez-vous ?', 'Comment vas-tu ?', 'How are you?'],
          ['Comment vous appelez-vous ?', 'Comment tu t’appelles ?', 'What is your name?'],
          ['S’il vous plaît', 'S’il te plaît', 'Please'],
          ['Et vous ?', 'Et toi ?', 'And you?'],
          ['Je vous remercie', 'Je te remercie', 'I thank you'],
          ['Excusez-moi', 'Excuse-moi', 'Excuse me'],
          ['Je vous en prie', 'Je t’en prie', 'You’re welcome'],
        ],
      },
      {
        type: 'teach',
        id: 'sheet-register-who',
        title: 'Who takes which',
        layer: 'deep',
        body: 'vous: anyone you have not met, anyone older, anyone serving you, anyone at work above or beside you, teachers, officials, and every group of two or more people regardless of how well you know them. tu: friends, family, children, animals, and colleagues your own age once the offer has been made. The offer is a real moment with its own verb, on se tutoie, and it comes from the older or more senior person. Until then vous is not cold, it is simply correct, and nobody has ever been offended by it.',
      },
    ],
  },
  {
    id: 'sheet.a1.01.phrases',
    title: 'Every phrase, by moment',
    layer: 'deep',
    contains: ['Arriving', 'During', 'Leaving', 'On the phone'],
    sections: [
      {
        type: 'cheatSheet',
        id: 'sheet-phrases-all',
        title: 'The whole lesson on one screen',
        layer: 'deep',
        rows: [
          { k: 'Bonjour', v: 'Hello, until dark. Never wrong.', say: 'Bonjour' },
          { k: 'Bonsoir', v: 'Good evening, arriving only.', say: 'Bonsoir' },
          { k: 'Salut', v: 'Hi or bye, people you tutoie.', say: 'Salut' },
          { k: 'Allô', v: 'On the phone, nowhere else.', say: 'Allô' },
          { k: 'Bienvenue', v: 'Welcome.', say: 'Bienvenue' },
          { k: 'Au revoir', v: 'Goodbye, all registers.', say: 'Au revoir' },
          { k: 'À bientôt', v: 'See you soon, no date.', say: 'À bientôt' },
          { k: 'À demain', v: 'See you tomorrow.', say: 'À demain' },
          { k: 'À plus tard', v: 'See you later today.', say: 'À plus tard' },
          { k: 'À la prochaine', v: 'Until next time.', say: 'À la prochaine' },
          { k: 'Bonne journée', v: 'Have a good day. Leaving, before evening.', say: 'Bonne journée' },
          { k: 'Bonne soirée', v: 'Have a good evening. Leaving, after dark.', say: 'Bonne soirée' },
          { k: 'Bonne nuit', v: 'Good night. Sleep is next.', say: 'Bonne nuit' },
          { k: 'Merci', v: 'Thank you.', say: 'Merci' },
          { k: 'Merci beaucoup', v: 'Thank you very much.', say: 'Merci beaucoup' },
          { k: 'Merci infiniment', v: 'Thank you enormously. Rare and warm.', say: 'Merci infiniment' },
          { k: 'De rien', v: 'You’re welcome. The everyday one.', say: 'De rien' },
          { k: 'Je vous en prie', v: 'You’re welcome, formal.', say: 'Je vous en prie' },
          { k: 'Avec plaisir', v: 'With pleasure.', say: 'Avec plaisir' },
          { k: 'S’il vous plaît', v: 'Please, to vous.', say: 'S’il vous plaît' },
          { k: 'S’il te plaît', v: 'Please, to tu.', say: 'S’il te plaît' },
          { k: 'Pardon', v: 'Sorry, or excuse me getting past.', say: 'Pardon' },
          { k: 'Excusez-moi', v: 'Excuse me, to vous.', say: 'Excusez-moi' },
          { k: 'Désolé', v: 'Sorry. Désolée if you are a woman.', say: 'Désolé' },
          { k: 'Comment ça va ?', v: 'How’s it going?', say: 'Comment ça va ?' },
          { k: 'Ça va bien', v: 'I’m good.', say: 'Ça va bien' },
          { k: 'Comme ci, comme ça', v: 'So-so. The permitted answer.', say: 'Comme ci, comme ça' },
          { k: 'Enchanté', v: 'Pleased to meet you. Enchantée if you are a woman.', say: 'Enchanté' },
          { k: 'Je m’appelle…', v: 'My name is…', say: 'Je m’appelle Claire.' },
          { k: 'Madame / Monsieur', v: 'Goes after bonjour, more often than English does.', say: 'Bonjour madame.' },
        ],
      },
    ],
  },
];

export const SALUTATIONS_LESSON: Lesson = {
  id: 'a1.01.l1',
  unitId: 'a1.01',
  seq: 1,
  title: 'Les salutations',
  level: 'a1',
  tag: 'A1 · LEÇON 01',
  intro:
    'The first word you say in France decides how the rest of the conversation goes. This lesson is that word, the four versions of it, and everything that has to follow it.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The shipped lesson was v3. This rebuild replaces it, so the counter moves
  // forward rather than restarting at the rebuild's own second draft: the merge
  // script prints both sides, and "replacing v3 with v2" reads as a rollback.
  //
  // v5: the device pass. Dropped the scene's setting image (it contradicted the
  // story), trimmed the break body so its Continue stays above the fold, and
  // removed the inert `autoplay` flag.
  version: 9,

  grammarAssumed: [],
  grammarIntroduced: [
    'The tu / vous distinction and when each is required',
    'Gendered agreement on a bare adjective: enchanté / enchantée, désolé / désolée',
  ],

  features: ['roleplay', 'voiceflash'],
  scenarioId: undefined,

  overview: {
    titleEn: 'Greetings',
    subFr: 'Les salutations',
    introFr: 'Bonjour, bonsoir, salut : le premier mot décide de tout le reste.',
    minutes: 25,
    difficulty: 1,
    glyph: '👋',
    screens: 130,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: SALUTATIONS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the tests, so none
 *  of them restates a count that can drift out of agreement with the content. */
export const SALUTATIONS_ITEM_IDS = ITEM_IDS;
export const SALUTATIONS_SPEAK_IDS = SPEAK_IDS;
export const SALUTATIONS_LISTEN_IDS = LISTEN_IDS;
export const SALUTATIONS_DICTATION_IDS = DICTATION.map(id);
