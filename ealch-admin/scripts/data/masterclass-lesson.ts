// sons.09.l1 · Masterclass — the lesson body. The last lesson in the sons track.
//
// Built on Lesson Architecture v2, in the app's own schema, modelled on
// sons.07.l1 and sons.10.l1 for structure and voice. The content is its own.
//
// ── The one rule that governs this file ────────────────────────────────────
//
// No transcription is typed here. Every `fr`, `ipa`, `respell` and `en` comes
// from masterclass-corpus.ts through `w()` and its helpers. Prose the lesson
// teaches WITH is authored here, because that is lesson content rather than
// lexical data.
//
// ── Why this lesson is shaped unlike every other sons lesson ───────────────
//
// The nine lessons before this one each teach ONE rule and drill it alone.
// That is the right shape for learning a rule and the wrong shape here, for one
// reason: in real speech the rules fire together, on the same word, in a fixed
// order, and they interact. A learner who scores full marks on all five
// separately can still be unintelligible in a sentence, because nobody has ever
// made them run five processes at once under time pressure. Closing that gap is
// the entire reason this unit exists.
//
// Three consequences, and they are what every decision in this file follows
// from:
//
//   1. EVERY DRILL IS MULTI-RULE. A screen that tests only liaison is a screen
//      sons.10 already had. The unit of work here is a phrase where two rules
//      collide, and the collision is the content. So the corpus is a list of
//      collisions rather than a word list, and 56 of its 56 entries carry two
//      or more rule tags.
//
//   2. THE RULES HAVE AN ORDER, AND THE ORDER IS TEACHABLE. Group, then join,
//      then push. No previous lesson has ever stated it, because no previous
//      lesson had more than one rule to order. It is the spine of acts 2, 3
//      and 4, and it is what the reframe is about.
//
//   3. THE FAILURE MODE IS SPEED, NOT KNOWLEDGE. Recognition is nearly
//      worthless here: the learner already knows every rule. So production
//      carries the lesson (two speak missions, an inhibition drill, a scenario,
//      and 30 of 48 quiz questions asking the learner to produce), mcq survives
//      only for genuine judgement calls, and listenChoose carries the contrasts
//      that are invisible in text.
//
// ── Why 23 missions ────────────────────────────────────────────────────────
//
// sons.06 runs 27, sons.07 runs 19, sons.08 runs 25, sons.10 runs 27. This one
// runs 23 and it is not padded to look thorough. There is almost no NEW
// material to explain here: every rule arrives already learned, so there is no
// letter grid to walk, no closed list to bank and no notation to introduce.
// What there is instead is one new idea (the order) and a great deal of
// practice at speed. Four of the missions that a first-teaching lesson needs
// (a reference grid, a notation key, a vocabulary deck, a rule-by-rule tour)
// would each have been a screen restating a lesson the learner has finished.
//
// ── Route A on the quiz ────────────────────────────────────────────────────
//
// One quiz section, eight rounds. See the header of masterclass-quiz.ts for
// why, and for the renderer contract that makes several quiz SECTIONS a silent
// content-loss bug today.

import {
  type Lesson,
  type LessonSection,
  type ReferenceSheet,
  type SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  ALL_IDS,
  BY_ID,
  familyIds,
  MASTERCLASS,
  REUSED_IDS,
  ruleIds,
  type MasterclassItem,
} from './masterclass-corpus.ts';
import { QUIZ_ROUNDS, TRIGGERS, DRILLS } from './masterclass-quiz.ts';
import { TERMS } from './masterclass-terms.ts';

/* ─── Corpus accessors ────────────────────────────────────────────────────── */

/** One entry, by id. Throws on a typo rather than rendering a blank card. */
function w(id: string): MasterclassItem {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`masterclass-lesson: unknown corpus id "${id}"`);
  return found;
}

/** IPA as the renderer shows it: already slash-wrapped in the corpus. */
const ipa = (id: string): string => w(id).ipa ?? '';
/** Respelling in brackets. The brackets are added HERE, once, so the stored
 *  data stays clean and the notation rule is applied in exactly one place. */
const re = (id: string): string => (w(id).respell ? `[${w(id).respell}]` : '');
const fr = (id: string): string => w(id).fr;
const en = (id: string): string => w(id).en;

/** The flashcard/review back: IPA, respelling and gloss on one line. */
const back = (id: string): string => [ipa(id), re(id), en(id)].filter(Boolean).join(' · ');

/** A groupDrill / examples item, assembled from the corpus. */
const item = (id: string, note?: string) => ({
  itemId: id,
  fr: fr(id),
  ipa: ipa(id),
  respell: re(id),
  en: en(id),
  ...(note ? { note } : {}),
});

/** An id shorthand, so the section bodies read as sentences rather than as
 *  eighteen-character prefixes. */
const M = (n: number): string => `fr.sons.masterclass.${String(n).padStart(3, '0')}`;

/* ─── The reframe ─────────────────────────────────────────────────────────── */

/** The line the lesson hangs on. Referenced, never retyped, so every appearance
 *  is guaranteed identical.
 *
 *  ── Why this line and not another ────────────────────────────────────────
 *
 *  Five lessons already ship a reframe, and a learner has heard each of them
 *  between three and seven times:
 *
 *    sons.05  The mark is part of the letter, not decoration on it.
 *    sons.06  Silent unless there's a reason.
 *    sons.07  Two vowels collide, the little word gives way.
 *    sons.08  Even syllables, then one push at the end.
 *    sons.10  The letter was never gone. It was waiting for a vowel.
 *
 *  A masterclass reframe has to do a job none of those can: make them
 *  instances of one thing. A line that merely listed them would be a list, and
 *  a list is not a reframe.
 *
 *  What is actually true of all five is not a shared motive, it is a shared
 *  UNIT. French does not pronounce words and then put them in a row. It builds
 *  a phrase group and decides everything inside it afterwards. Every one of the
 *  five rules is a consequence:
 *
 *    a final consonant is silent because nothing in its group needed it
 *    that same consonant comes back when the next sound in the group does
 *    a vowel is deleted because the group will not carry two in a row
 *    the push lands at the end of the GROUP, not at the end of each word
 *    a nasal keeps its N inside the vowel until the group asks for it outside
 *
 *  That is one claim, it is literally true (the groupe rythmique is the
 *  phonological word in French, not the orthographic word), and it is directly
 *  actionable: stop deciding word by word. It is also what makes the ORDER
 *  teachable, which is the lesson's other new idea, since you cannot decide any
 *  join until you know which group you are in. */
export const REFRAME = 'French pronounces the phrase, not the word.';

/** The order the rules run in, as three words the learner can hold. Stated
 *  here once and referenced, for the same reason as the reframe. */
export const PIPELINE = 'Group, join, push.';

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────── */

// The failing instinct: five correct words, delivered as five words. Every
// previous scene in the track opened on a learner who did not know a rule.
// This one opens on a learner who knows all of them and is still too slow,
// because that is the only failure this lesson exists to fix.
//
// A phone call on purpose. There is no face to read, no menu to point at and no
// second attempt, so sound is the only channel and speed is not negotiable.
const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A phone call to a restaurant you have been to twenty times. No face to read, nothing to point at, and the other person is not slowing down for you.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Le Comptoir',
    fr: 'Le Comptoir, bonjour ?',
    en: 'Le Comptoir, good morning?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have one line to say and you have known every word in it for weeks. You have also learned every rule it needs. All five of them.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'How do you say it?',
    options: [
      {
        fr: fr(M(42)),
        respell: re(M(42)),
        en: 'two groups, one stop, everything inside each one joined',
        outcome: 'works',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
      {
        fr: 'On... arrive... à... l\'heure...',
        respell: '[ohⁿ a-REEV a LUHR]',
        en: 'five separate words, each one correct on its own',
        outcome: 'breaks',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
    ],
    followUp: {
      works: 'That is the one. Now hear what the careful version does to this call.',
      breaks: 'Every word in that was right. Listen to what it costs anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'On... arrive... à... l\'heure...',
    en: '(five words, each one correct, each one on its own)',
    audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Le Comptoir',
    fr: 'Pardon, vous... ?',
    en: 'Sorry, you...?',
    stage: 'A pause. They are waiting for the sentence to start.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You were not wrong. You were slow.',
    body: 'Nothing in that was a mistake. Every word was the right word and every sound was the right sound. What was missing is the thing that turns five words into a sentence: they were never grouped.',
    wrong: {
      fr: 'On... arrive... à... l\'heure...',
      ipa: '/ɔ̃ a.ʁiv a lœʁ/',
      respell: '[ohⁿ a-REEV a LUHR]',
      en: 'five correct words and no phrase',
    },
    right: {
      fr: fr(M(42)),
      ipa: ipa(M(42)),
      respell: re(M(42)),
      en: en(M(42)),
    },
    // Reframe appearance 1. It arrives at the exact moment the failure is
    // named, which is the only place a reframe is ever believed.
    coach: `${REFRAME} Two groups here, and inside each one everything runs together.`,
    // Audio-first: the whole contrast is timing, which is inaudible in text and
    // unmissable in speech.
    audio: { mode: 'recorded', recordingId: 'rec-scene-break', autoplay: true, audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: fr(M(42)),
    en: en(M(42)),
    ipa: ipa(M(42)),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Le Comptoir',
    fr: 'Ah, très bien. À ce soir.',
    en: 'Ah, very good. See you tonight.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Nine lessons taught you the five rules in that sentence. This one is about running all five at once, fast enough that nobody has to wait.',
  },
];

/* ─── Reference sheets ────────────────────────────────────────────────────── */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.sons.09.system',
    title: 'The whole sound system, on one page',
    layer: 'deep',
    contains: ['The three steps', 'What each rule decides', 'What blocks what'],
    sections: [
      {
        type: 'table',
        id: 'sheet-system-order',
        title: 'The order, and what each step decides',
        layer: 'deep',
        cols: ['Step', 'Question', 'What it settles'],
        rows: [
          ['1. Group', 'Where does the phrase break?', 'Which words are allowed to touch each other at all.'],
          ['2. Join', 'Does the next word start on a vowel sound?', 'Elision if a vowel would collide, liaison if a sleeping consonant can fill the gap.'],
          ['3. Push', 'Which syllable ends this group?', 'Where the one prominence lands, after the joining has moved things.'],
          ['Default', 'Did anything above touch this letter?', 'If not, it stays silent. Most letters at the ends of words never move.'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-system-blocks',
        title: 'What blocks a join',
        layer: 'deep',
        cols: ['Blocker', 'Blocks', 'Example'],
        rows: [
          ['A phrase break', 'both joins', 'On mange, les enfants.'],
          ['A noun subject before its verb', 'liaison', 'Les enfants arrivent.'],
          ['H aspiré', 'both joins', 'le héros, les héros, le hibou'],
          ['A consonant on the next word', 'both joins', 'un petit chien, je parle'],
          ['et', 'liaison, always', 'et un, never with a T'],
          ['Nothing following at all', 'both joins', 'Ils sont partis.'],
        ],
      },
      {
        type: 'table',
        id: 'sheet-system-consonants',
        title: 'Which letter wakes as which sound',
        layer: 'deep',
        cols: ['Written', 'Sounds as', 'Example'],
        rows: [
          ['s, x, z', '/z/', 'les amis, deux heures, chez elle'],
          ['t, d', '/t/', 'tout est, un grand arbre'],
          ['n', '/n/', 'un bon ami, on est'],
          ['r', '/ʁ/', 'le premier étage'],
          ['p', '/p/', 'trop aimable'],
          ['f (in neuf)', '/v/', 'neuf ans, neuf heures, and nowhere else'],
        ],
      },
    ],
  },
  {
    id: 'sheet.sons.09.pairs',
    title: 'The twelve pairs, in full',
    layer: 'deep',
    contains: ['Every minimal pair this lesson teaches', 'What differs in each', 'Which rule decides'],
    sections: [
      {
        type: 'table',
        id: 'sheet-pairs-table',
        title: 'Same letters, two behaviours',
        layer: 'deep',
        cols: ['Joins', 'Does not join', 'What decided it'],
        rows: [
          ['les amis', 'les copains', 'A vowel against a consonant.'],
          ['un petit ami', 'un petit chien', 'A vowel against a consonant.'],
          ['un grand arbre', 'un grand parc', 'A vowel against a consonant, and the D says T.'],
          ['un bon ami', 'un bon copain', 'A vowel against a consonant, and the vowel stays nasal in both.'],
          ['les hôtels', 'les héros', 'H muet against h aspiré. Nothing on the page shows it.'],
          ['deux heures', 'deux hiboux', 'H muet against h aspiré.'],
          ['ils ont', 'ils sont', 'A vowel against a consonant, and the Z is the only audible difference.'],
          ['Ils arrivent en retard.', 'Les enfants arrivent.', 'A pronoun subject against a noun subject.'],
          ['Le petit hôtel est ouvert.', 'Le petit héros est parti.', 'H muet against h aspiré, twice in one sentence.'],
          ["Il n'a pas encore mangé.", "Il n'a pas mangé.", 'One word removed, and the Z goes with it.'],
          ['Tout est prêt.', 'Tout va bien.', 'A vowel against a consonant.'],
          ['Ils sont partis très tôt, sans nous attendre.', 'Ils sont partis très tôt.', 'A sixth word arrives and one S wakes.'],
        ],
      },
      {
        type: 'focus',
        id: 'sheet-pairs-why',
        title: 'What every pair on this page has in common',
        layer: 'deep',
        points: [
          'The two halves are spelled the same up to the point where they differ.',
          'Nothing in the spelling of the differing word tells you which way it goes.',
          'The decision is always made by the first SOUND of the next word, or by a group edge.',
          'That is why the ear has to lead here, and why every one of these has a recording.',
        ],
      },
    ],
  },
];

/* ─── Sections ────────────────────────────────────────────────────────────── */

const SECTIONS: LessonSection[] = [
  // ── ACT I · FIVE RULES, ONE SENTENCE ──────────────────────────────────
  {
    type: 'scene',
    id: 's01-scene',
    title: 'Five words, one at a time',
    frSub: 'Au téléphone',
    render: 'screens',
    layer: 'core',
    say: {
      text: 'You know every word in this call and every rule it needs. Watch what happens anyway.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'Restaurant Le Comptoir',
      city: 'Bordeaux',
      time: '18:40, a Friday',
      image: 'lessons/masterclass/scene-phone.jpg',
      ambience: 'room-tone-street',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: 'This lesson is not five rules. It is the order they run in, and the speed they have to run at.',
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What you walk out with',
    frSub: 'Vos objectifs',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    say: {
      text: 'Five things. Every one is something you do out loud, at speed, on a sentence you have not seen.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    goals: [
      { t: 'Group before you decide', s: 'Find where a phrase breaks before you make a single decision about a letter, because nothing joins across a break.' },
      { t: 'Run the joins in one pass', s: 'Handle elision and liaison as one move rather than two, so an unseen phrase takes one scan instead of two.' },
      { t: 'Leave the rest alone', s: 'Say nothing at the end of a word unless something actually woke it, and stop overcorrecting the ones that stay silent.' },
      { t: 'Beat the blockers', s: 'Say les hôtels and les héros correctly first time, and know why the page could not have told you which was which.' },
      { t: 'Do all of it at speed', s: 'Apply five rules to a sentence you have never read, at conversation pace, without stopping to work any of them out.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-anchors',
    title: 'One idea, then three steps',
    frSub: 'Le système',
    render: 'deck',
    layer: 'core',
    size: 'md',
    hint: 'Swipe through. Nothing to answer yet.',
    terms: ['phraseGroup', 'pipeline', 'join'],
    say: {
      text: 'Six cards. The first one is the whole lesson and the other five are it slowed down.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    cards: [
      // Reframe appearance 2. The thesis card: it states the claim and stops.
      { head: REFRAME,
        body: 'French does not decide how a word sounds and then put words in a row. It builds a phrase group first, and decides what every letter inside it does afterwards.',
        imageRef: 'lessons/masterclass/phrase.jpg' },
      { head: PIPELINE,
        body: 'Three steps, always in that order. Each one depends on the answer to the one before it, so running them out of order gives the wrong answer even when you know all five rules.' },
      { head: 'Step one: group',
        body: 'Where does the phrase break? Nothing joins across a break, so this decides which words are even allowed to touch. Get it wrong and every later step is wrong too.',
        imageRef: 'lessons/masterclass/group.jpg' },
      { head: 'Step two: join',
        body: 'Inside a group, and only inside it: a vowel meeting a vowel deletes the small word\'s vowel, and a sleeping consonant meeting a vowel wakes up. One move, not two.' },
      { head: 'Step three: push',
        body: 'One prominence per group, on its last syllable, wherever the joining ended up putting it. Not one push per word. That is the single loudest giveaway of an English speaker.',
        imageRef: 'lessons/masterclass/push.jpg' },
      { head: 'And the rest stays silent',
        body: 'Anything the joining did not touch keeps doing what it always did, which is nothing. Most letters at the ends of French words never move at all.' },
    ],
  },

  // ── ACT II · GROUP IT ─────────────────────────────────────────────────
  {
    type: 'groupDrill',
    id: 's04-breaks',
    title: 'Where does it break?',
    frSub: 'Les groupes',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['phraseGroup', 'notation'],
    sheetId: 'sheet.sons.09.system',
    say: {
      text: 'One phrase per card. Say each one and ask a single question: did you have to stop anywhere inside it?',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-breaks', speeds: [1.0, 0.65], audioFirst: true },
    groups: [
      {
        label: 'One group, no stopping',
        items: [
          item(M(26), 'four words, five syllables, no stop'),
          item(M(25), 'four words, one unbroken run'),
          item(M(56), 'four words, six syllables'),
          item(M(32), 'three words, four syllables'),
          item(M(37), 'three words and no room to pause'),
        ],
      },
      {
        label: 'Two groups, one stop',
        items: [
          item(M(39), 'the comma is a real break'),
          item(M(41), 'nothing joins across the comma'),
          item(M(43), 'stop once, then run to the end'),
          item(M(45), 'a break with no join after it'),
          item(M(48), 'the same pattern on both sides'),
        ],
      },
      {
        label: 'Check',
        check: {
          q: 'Why can nothing join across the comma?',
          opts: [
            'commas are always pronounced',
            'the second group starts a new phrase',
            'French forbids joins in long sentences',
            'the first group used up its joins',
          ],
          correct: 1,
          why: 'A break ends a group, and a join only ever happens inside one. That is why finding the break has to come first: it decides what the joining is even allowed to look at.',
        },
      },
    ],
  },

  {
    type: 'trapDrill',
    id: 's05-across',
    title: 'The edge nobody prints',
    frSub: 'Le sujet et le verbe',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['phraseGroup', 'sleeping'],
    audio: { mode: 'recorded', recordingId: 'rec-subject-verb', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'A group can end where nothing on the page says so. This is the one place that catches everybody.',
      voice: 'coach',
      timing: 'onEnter',
    },
    // The rule folds INTO the drill rather than taking a screen of its own,
    // which is the shape sons.06 arrived at after its -er rule sat alone on an
    // otherwise empty card.
    rule: {
      title: 'A noun subject closes its group',
      body: 'A comma is not the only break. When a noun subject is followed by its verb, the group ends between them: les enfants arrivent has a Z at the front and silence in the middle. A pronoun subject does not, so ils arrivent joins.',
    },
    cards: [
      { promptLabel: 'Joins', promptSound: 'z', fr: fr(M(16)), ipa: ipa(M(16)),
        tip: 'Pronoun subject. It sits inside the same group as its verb, so the S wakes.' },
      { promptLabel: 'Blocks', promptSound: 'no z', fr: fr(M(15)), ipa: ipa(M(15)),
        tip: 'Noun subject. The group ends after enfants, and no join crosses the end of a group.' },
      { promptLabel: 'Joins', promptSound: 'z', fr: fr(M(1)), ipa: ipa(M(1)),
        tip: 'Determiner and noun, always one group. This join is never optional.' },
      { promptLabel: 'Blocks', promptSound: 'no z', fr: fr(M(17)), ipa: ipa(M(17)),
        tip: 'Two reasons at once: a group edge, and a consonant starting parlent.' },
      { promptLabel: 'Joins', promptSound: 'n', fr: fr(M(48)), ipa: ipa(M(48)),
        tip: 'Two joins made in front of each subject, two refused behind them.' },
      { promptLabel: 'Blocks', promptSound: 'no z', fr: 'On mange, les enfants.', ipa: '/ɔ̃ mɑ̃ʒ | le.z‿ɑ̃.fɑ̃/',
        tip: 'A printed break. Join across it and you have changed who is being eaten.' },
    ],
    // Four questions, not one: this is the gate on the act, and a single
    // four-option question is a one-in-four guess standing in for a reflex.
    drill: [
      { promptSay: 'Which one has NO join between the subject and the verb?',
        opts: ['Ils arrivent en retard.', 'Les enfants arrivent.', 'Ils ont un enfant.'], correct: 1 },
      { promptSay: 'Where does « Ce sont mes amis, ils habitent en ville. » break?',
        opts: ['after sont', 'after amis', 'after habitent', 'it does not break'], correct: 1 },
      { promptSay: 'A noun subject before its verb is:',
        opts: ['a place a group ends', 'a place a group starts', 'never a break'], correct: 0 },
      { promptSay: 'True or not: a break can exist where the page shows nothing.',
        opts: ['true', 'not true'], correct: 0 },
    ],
    steps: [
      { kind: 'rule', label: 'The rule', title: 'A noun subject closes its group' },
      { kind: 'cards', label: 'Six phrases', title: 'Three that join, three that do not' },
      { kind: 'audio', label: 'Listen', title: 'Hear the gap open' },
      // Gated: the reflex is the point of the mission, and a check the learner
      // can swipe past is not a check.
      { kind: 'drill', label: 'Reflex', title: 'Now decide without working it out', gate: true },
    ],
  },

  {
    type: 'listening',
    id: 's06-push',
    title: 'Where the push lands',
    frSub: "L'accent de groupe",
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['phraseGroup', 'notation'],
    // Questions open one at a time, after the audio: the eye must not answer
    // the question the ear was asked.
    questionsInModal: true,
    say: {
      text: 'One push per group, on its last syllable. Listen for how many pushes there are, not where the words end.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-push', speeds: [1.0, 0.65], audioFirst: true, maxPlays: 4 },
    lines: [
      { fr: fr(M(39)), en: en(M(39)) },
      { fr: fr(M(26)), en: en(M(26)) },
      { fr: fr(M(44)), en: en(M(44)) },
      { fr: fr(M(45)), en: en(M(45)) },
      { fr: fr(M(47)), en: en(M(47)) },
    ],
    questions: [
      { q: 'How many pushes were in the first line?', opts: ['one', 'two', 'four'], correct: 1,
        why: 'Two, because there are two groups. The push lands on matin and again on école, and nowhere in between.' },
      { q: 'In the second line, which syllable was pushed?', opts: ['the first', 'the last', 'every other one'], correct: 1,
        why: 'The last. One group means one push, and a French group always pushes its final syllable.' },
      { q: 'A join moved a consonant onto the next word. What happened to the push?', opts: ['it moved with the syllable', 'it stayed on the letter', 'it disappeared'], correct: 0,
        why: 'The push belongs to the last syllable of the group, and joining changes which syllable that is. It follows the sound, not the spelling.' },
    ],
  },

  // ── ACT III · JOIN IT ─────────────────────────────────────────────────
  {
    type: 'cardDeck',
    id: 's07-collide',
    title: 'What happens when they meet',
    frSub: 'La rencontre',
    render: 'deck',
    layer: 'core',
    size: 'md',
    hint: 'Five outcomes. Swipe through, then the drill.',
    terms: ['join', 'sleeping'],
    say: {
      text: 'Two words meet inside a group. There are only five things that can happen, and you know all five.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      { label: 'Vowel meets vowel', head: 'The small word loses its vowel',
        fr: fr(M(24)), sub: re(M(24)),
        body: 'Elision. ne and de both give way here, and neither is optional. This is the only one of the five that shows on the page.' },
      { label: 'Sleeping consonant meets vowel', head: 'The consonant wakes',
        fr: fr(M(1)), sub: re(M(1)),
        body: 'Liaison. The S of les says nothing in every other sentence you have ever read. Here it says Z, because a vowel needs it.' },
      { label: 'Anything meets consonant', head: 'Nothing happens at all',
        fr: fr(M(2)), sub: re(M(2)),
        body: 'The commonest outcome by a long way. No collision, nothing to fill, so every letter stays exactly as it was.' },
      { label: 'Vowel meets vowel, nothing to give', head: 'The gap simply stays',
        fr: fr(M(33)), sub: re(M(33)),
        body: 'a is not a small word that can drop a vowel and has no sleeping consonant to lend. So French leaves the two vowels side by side.' },
      // Reframe appearance 3.
      { label: 'And across a break', head: 'None of it applies',
        fr: fr(M(15)), sub: re(M(15)),
        body: `${REFRAME} A group is what all four outcomes above happen inside, so a group edge switches every one of them off.` },
    ],
  },

  {
    type: 'groupDrill',
    id: 's08-both',
    title: 'Two joins, one breath',
    frSub: 'Les enchaînements',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['join', 'nasalN'],
    say: {
      text: 'Each of these needs more than one join. Say the whole card as one word before you swipe.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-joins', speeds: [1.0, 0.65] },
    groups: [
      {
        label: 'An elision and a liaison',
        items: [
          item(M(25), 'one elision, two liaisons'),
          item(M(28), 'two elisions, then a link'),
          item(M(34), 'beau became bel to avoid the gap'),
          item(M(22), 'two links, and one S that makes none'),
          item(M(20), 'the S of pas wakes as a Z'),
        ],
      },
      {
        label: 'Three links running',
        items: [
          item(M(26), 'n, then t, then n'),
          item(M(27), 'z, then z, then n'),
          item(M(35), 'l, then t, then n'),
          item(M(56), 'z, then t, then n'),
          item(M(30), 'the X goes quiet at the end'),
        ],
      },
      {
        label: 'Check',
        check: {
          q: 'What do elision and liaison have in common?',
          opts: [
            'both add a consonant',
            'both are optional in speech',
            'both fire when a vowel sound follows',
            'both only happen after articles',
          ],
          correct: 2,
          why: 'They are one move with two outcomes. The trigger is identical: the next word starts on a vowel sound. Elision deletes a vowel, liaison wakes a consonant, and which one you get depends on what the first word ends in.',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's09-silence',
    title: 'The half that stays quiet',
    frSub: 'Le silence',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['sleeping', 'join'],
    sheetId: 'sheet.sons.09.pairs',
    say: {
      text: 'Same letters as the last mission and nothing wakes. Adding a join here is as wrong as missing one.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-pairs', speeds: [1.0, 0.65], audioFirst: true },
    groups: [
      {
        label: 'It wakes',
        items: [
          item(M(1), 'a vowel follows'),
          item(M(3), 'a vowel follows'),
          item(M(11), 'a vowel follows, and the D says T'),
          item(M(9), 'a vowel follows'),
          item(M(37), 'a vowel follows'),
        ],
      },
      {
        label: 'It stays down',
        items: [
          item(M(2), 'a consonant follows'),
          item(M(4), 'a consonant follows'),
          item(M(12), 'a consonant follows'),
          item(M(10), 'a consonant follows'),
          item(M(38), 'a consonant follows'),
        ],
      },
      {
        label: 'Check',
        check: {
          q: 'What decides whether a final consonant sounds?',
          opts: [
            'the word it belongs to',
            'the first sound of the next word',
            'whether the word is plural',
            'the speaker, freely',
          ],
          correct: 1,
          why: 'Never the word itself. The same S in les is silent before a consonant and a Z before a vowel, and nothing about les changed between the two. The decision is made by what comes next, inside the same group.',
        },
      },
    ],
  },

  {
    type: 'dictation',
    id: 's10-dictation',
    title: 'Write what you hear',
    frSub: 'La dictée',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['join', 'sleeping'],
    // Not swipe-flagged: dictation advances on a solved word, and claiming a
    // swipe would promise a gesture the section does not have and fight the one
    // that records the answer.
    say: {
      text: 'Ten sentences. You will hear joins that are not written and silence where letters are.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-dictation-10', maxPlays: 3 },
    itemIds: [M(1), M(15), M(20), M(22), M(25), M(29), M(39), M(42), M(45), M(56)],
  },

  // ── ACT IV · WHERE THE RULES FIGHT ────────────────────────────────────
  {
    type: 'trapDrill',
    id: 's11-h',
    title: 'The letter that blocks both',
    frSub: 'H muet ou H aspiré',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['hAspire', 'join'],
    sheetId: 'sheet.sons.09.pairs',
    audio: { mode: 'recorded', recordingId: 'rec-h-blocks', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'The hardest thing in the track, and nothing on the page will help you. Slow down here.',
      voice: 'coach',
      timing: 'onEnter',
    },
    rule: {
      title: 'One H does nothing, and one H stops everything',
      body: 'No H in French is pronounced, so neither kind makes a sound. What an h aspiré does is BLOCK, and it is the only thing in the language that stops both joins at once. les hôtels takes its Z and les héros does not.',
    },
    cards: [
      { promptLabel: 'Joins', promptSound: 'z', fr: fr(M(5)), ipa: ipa(M(5)),
        tip: 'H muet. The word opens on a vowel sound, so the plural S wakes as normal.' },
      { promptLabel: 'Blocks', promptSound: 'gap', fr: fr(M(6)), ipa: ipa(M(6)),
        tip: 'H aspiré. Same shape on the page, opposite behaviour, and a small gap instead of a Z.' },
      { promptLabel: 'Joins', promptSound: 'z', fr: fr(M(7)), ipa: ipa(M(7)),
        tip: 'H muet. An X wakes as a Z, exactly as an S would.' },
      { promptLabel: 'Blocks', promptSound: 'gap', fr: fr(M(8)), ipa: ipa(M(8)),
        tip: 'H aspiré. Both X stay silent and the gap is the only thing marking it.' },
      { promptLabel: 'Joins', promptSound: 't', fr: fr(M(18)), ipa: ipa(M(18)),
        tip: 'H muet, so both sleeping T in this sentence wake up.' },
      { promptLabel: 'Blocks', promptSound: 'gap', fr: fr(M(19)), ipa: ipa(M(19)),
        tip: 'H aspiré. The same two T, and now neither of them says anything.' },
    ],
    drill: [
      { promptSay: 'Which one blocks the join?',
        opts: ['les hôtels', 'les héros', 'deux heures', 'les amis'], correct: 1 },
      { promptSay: 'An h aspiré blocks:',
        opts: ['the liaison only', 'the elision only', 'both joins'], correct: 2 },
      { promptSay: 'How do you tell the two apart by looking at the word?',
        opts: ['aspiré words are longer', 'aspiré words start with ha-', 'you cannot, you learn each one'], correct: 2 },
      { promptSay: 'A new H word, and you have to guess. Which way?',
        opts: ['aspiré, block it', 'muet, let it through'], correct: 1 },
    ],
    steps: [
      { kind: 'rule', label: 'The rule', title: 'One H does nothing, and one H stops everything' },
      { kind: 'cards', label: 'Three pairs', title: 'Identical on the page, opposite out loud' },
      { kind: 'audio', label: 'Listen', title: 'Hear the gap that marks it' },
      { kind: 'drill', label: 'Reflex', title: 'Now decide without working it out', gate: true },
    ],
  },

  {
    type: 'groupDrill',
    id: 's12-nasal',
    title: 'The N that does two jobs',
    frSub: 'Les voyelles nasales',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['nasalN', 'join'],
    say: {
      text: 'A nasal vowel swallowed its N. Here you find out what happens when a vowel asks for it back.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-nasal-n', speeds: [1.0, 0.65], audioFirst: true },
    groups: [
      {
        label: 'The N surfaces',
        items: [
          item(M(13), 'the vowel stays nasal and an N appears'),
          item(M(31), 'four nasal vowels, two linking N'),
          item(M(32), 'two N, and neither belongs to the word before'),
          item(M(56), 'four nasal vowels, three joins'),
        ],
      },
      {
        label: 'It stays inside the vowel',
        items: [
          item(M(14), 'three nasal vowels, no audible N'),
          item(M(4), 'the N is part of the vowel'),
          item(M(38), 'nothing follows that needs it'),
          item(M(12), 'a consonant follows'),
        ],
      },
      {
        label: 'Check',
        check: {
          q: 'In « un bon ami », is the vowel of bon still nasal?',
          opts: ['no, the N took it back', 'yes, and an N is added as well', 'only in careful speech'],
          correct: 1,
          why: 'The N does both jobs at once and is not spent on either. bon ami and bon copain have three syllables each, and only the first has an N you can hear in the middle.',
        },
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's13-pairs',
    title: 'Twelve pairs to know cold',
    frSub: 'Les paires minimales',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['sleeping', 'hAspire'],
    sheetId: 'sheet.sons.09.pairs',
    say: {
      text: 'One card per phrase. Say what you think it sounds like before you flip, and be exact about the join.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-pairs' },
    cards: [M(1), M(2), M(3), M(4), M(5), M(6), M(7), M(8), M(9), M(10), M(11), M(12)].map((id) => ({
      front: fr(id),
      back: back(id),
      say: fr(id),
    })),
  },

  {
    type: 'commonErrors',
    id: 's14-errors',
    title: 'What goes wrong at speed',
    frSub: 'Les erreurs courantes',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    // Swipeable: seven errors stacked is a wall, and each one is a separate
    // habit the learner has to weigh against their own.
    swipe: true,
    terms: ['join', 'sleeping', 'phraseGroup'],
    say: {
      text: 'Seven ways this falls apart. Five of them are things you started doing because you learned a rule.',
      voice: 'coach',
      timing: 'onEnter',
    },
    errors: [
      { wrong: 'les enfants-z-arrivent', right: 'Les enfants arrivent.',
        why: 'Overcorrection. Learning liaison makes people link everything, and a noun subject before its verb is a group edge that nothing crosses.' },
      { wrong: "les-z-héros", right: 'les héros',
        why: 'H aspiré blocks it. The H is silent in both kinds, so nothing you can see distinguishes them and this one has to be learned as a word.' },
      { wrong: 'un bonn ami, with a hard N and a flat vowel', right: 'un bon ami',
        why: 'The vowel stays nasal AND the N links. Un-nasalising it to make room for the N gives away that you are working it out.' },
      { wrong: 'On... arrive... à... l\'heure.', right: "On arrive à l'heure.",
        why: 'Every word right and no phrase. Applying the rules one word at a time is correct and far too slow to be speech.' },
      { wrong: 'Le matin les enfants vont à l\'école, with no stop', right: 'Le matin, les enfants vont à l\'école.',
        why: 'One group where there should be two. Running a break over is the mirror of joining across one, and it costs the listener the structure.' },
      { wrong: 'toutt, with the T said', right: 'tout va bien',
        why: 'Nothing woke that T. A consonant follows it, so it goes on doing what it does everywhere else, which is nothing.' },
      { wrong: 'a push on every word', right: 'one push per group',
        why: 'English stresses words and French stresses groups. Pushing each word is the single loudest accent marker there is, more than any individual sound.' },
    ],
  },

  // ── ACT V · AT SPEED ──────────────────────────────────────────────────
  {
    type: 'inhibitionDrill',
    id: 's15-inhibition',
    title: 'Faster than you can decide',
    frSub: 'Automatiser',
    render: 'screens',
    layer: 'core',
    size: 'md',
    // Swipeable: three routines of four steps each is twelve instructions, and
    // stacked they read as a wall nobody performs.
    swipe: true,
    imageRef: 'lessons/masterclass/speed.jpg',
    terms: ['pipeline', 'phraseGroup'],
    say: {
      text: 'You know all of this. What is left is doing it in the time a conversation actually gives you.',
      voice: 'coach',
      timing: 'onEnter',
    },
    // Reframe appearance 4. inhibitionDrill prose is exempt from the per-screen
    // word cap (it is a routine the learner works through, not a card), which is
    // why the longest statement of the idea sits here.
    intro: `The five rules are not the problem any more. The problem is that you are applying them one at a time, in order, consciously, and a conversation does not wait for that. ${REFRAME} So the thing to train is not another rule. It is the habit of taking in a whole group before your mouth starts, which is physical rather than intellectual, and it comes from doing rather than knowing.`,
    targets: [
      {
        label: 'Read the group first',
        sub: 'For any phrase you have not seen',
        steps: [
          'Cover the sentence and uncover only as far as the first break.',
          'Read that group silently, all of it, before you make any sound.',
          'Now say it, in one run, with one push at the end.',
          'Uncover the next group and do the same. Never start a group you have not finished reading.',
        ],
        practiceOn: [M(39), M(41), M(43), M(44)],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-breaks' },
      },
      {
        label: 'The run-on',
        sub: 'For a group with several joins in it',
        steps: [
          'Say the group deliberately too fast, faster than you can hesitate.',
          'Notice that the joins survive and only the pauses die.',
          'Slow back down to normal speed while keeping every join closed.',
          'Repeat until the slow version has no more gaps than the fast one.',
        ],
        practiceOn: [M(25), M(26), M(27), M(56)],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-joins' },
      },
      {
        label: 'Leave it alone',
        sub: 'For the letters that must stay silent',
        steps: [
          'Say a phrase where nothing joins, and deliberately try to link it.',
          'Hear how wrong the extra consonant sounds.',
          'Say it correctly, and notice that correct feels like doing less.',
          'Alternate the two until leaving a letter alone feels like a decision rather than a lapse.',
        ],
        practiceOn: [M(2), M(6), M(15), M(50)],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-pairs' },
      },
    ],
    closing: { text: 'When you can read a group before your mouth starts, this lesson is done and so is the track.' },
  },

  {
    type: 'practice',
    id: 's16-speak',
    title: 'Say it at speed',
    frSub: 'À voix haute',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    skill: 'speak',
    terms: ['pipeline'],
    say: {
      text: 'Ten of them, scored on your voice. Conversation speed, and one stop only where there is a break.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'mic', scoreOn: 'fr' },
    itemIds: [M(25), M(26), M(29), M(32), M(39), M(42), M(44), M(47), M(51), M(56)],
  },

  {
    type: 'scenario',
    id: 's17-scenario',
    title: 'The same call, for real',
    frSub: 'Au téléphone',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['pipeline', 'join'],
    say: {
      text: 'Every line you say has at least two joins in it. Read your part out loud before you tap.',
      voice: 'coach',
      timing: 'onEnter',
    },
    setting: 'The restaurant from mission one, calling back the following week. Same voice, same speed, no allowances.',
    turns: [
      { ai: 'Le Comptoir, bonjour ?', en: 'Le Comptoir, good morning?', user: "Bonjour, c'est un ancien client." },
      { ai: 'Bien sûr. Vous êtes combien ?', en: 'Of course. How many of you?', user: 'Nous avons deux enfants, donc quatre.' },
      { ai: 'Parfait. Et à quelle heure ?', en: 'Perfect. And at what time?', user: "On arrive à l'heure, comme d'habitude." },
      { ai: 'Très bien. La même table ?', en: 'Very good. The same table?', user: "C'est un très bon choix, oui." },
      { ai: 'Alors à ce soir.', en: 'See you tonight then.', user: 'Tout est prêt, merci.' },
    ],
  },

  {
    type: 'practice',
    id: 's18-listen',
    title: 'Hear it in the wild',
    frSub: "À l'écoute",
    render: 'screens',
    layer: 'core',
    size: 'lg',
    skill: 'listen',
    terms: ['phraseGroup'],
    say: {
      text: 'Eight sentences you have not worked on, from earlier lessons. Count the groups before you look.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-reading-passage', speeds: [1.0, 0.65] },
    // Reused items, referenced by id. They already ship, and the point of this
    // mission is that the system works on material this lesson never authored.
    itemIds: [
      'fr.sons.rythme.132', 'fr.sons.rythme.136', 'fr.sons.rythme.141',
      'fr.sons.rythme.164', 'fr.sons.rythme.165', 'fr.sons.liaisons.016',
      'fr.sons.liaisons.039', 'fr.sons.nasales.158',
    ],
  },

  // ── ACT VI · PROVE IT ─────────────────────────────────────────────────
  {
    type: 'reading',
    id: 's19-reading',
    title: 'A paragraph of all of it',
    frSub: 'La lecture',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    questionsInModal: true,
    terms: ['pipeline', 'join', 'sleeping'],
    say: {
      text: 'Read it out loud, all the way through, before you look at a single question.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-reading-passage', speeds: [1.0, 0.65], perSentenceReplay: true },
    text: [
      "Le matin, les enfants vont à l'école.",
      "On arrive à l'heure, comme d'habitude, parce que c'est un très bon quartier et tout est à côté.",
      "Après le dîner, on prend un verre d'eau et les autres attendent dans le petit hôtel en face.",
      "Ce sont mes amis, ils habitent en Angleterre depuis deux ans.",
      "Ils sont partis très tôt, sans nous attendre, et il n'a pas encore mangé.",
      "Quand on est en retard, tout le monde attend, et les héros de cette histoire sont les enfants.",
    ].join(' '),
    glossary: [
      { word: 'les autres', en: 'the others', ipa: '/le.z‿otʁ/', note: 'The S wakes here and then goes straight back to sleep before attendent.' },
      { word: 'en face', en: 'opposite', ipa: '/ɑ̃ fas/', note: 'A consonant follows en, so the N stays inside the vowel.' },
      { word: 'depuis deux ans', en: 'for two years', ipa: '/də.pɥi dø.z‿ɑ̃/', note: 'The X of deux wakes as a Z. The S of depuis has a consonant after it and does not.' },
      { word: 'les héros', en: 'the heroes', ipa: '/le e.ʁo/', note: 'H aspiré, so no Z and a small gap, in a sentence with three other liaisons in it.' },
    ],
    questions: [
      { q: 'Find every group boundary in the second sentence and say what marks each one.',
        a: 'Two commas, and nothing else. Everything between them is one run: comme and habitude join, and c\'est un très bon carries a T and then nothing before bon.' },
      { q: 'The passage has « les autres attendent » and « les amis ». Why does one of them have two joins and the other one?',
        a: 'les autres joins on a Z because autres opens on a vowel. autres attendent does not join, because a noun subject closes its group before its verb.' },
      { q: 'Why is it « les héros » with a gap and « les enfants » with a Z, in the same sentence?',
        a: 'héros is h aspiré and blocks the join. enfants opens on a vowel sound with nothing blocking, so the S of les wakes. Neither H nor E is pronounced.' },
      { q: 'Count the silent final consonants in the last sentence, and say what would have woken any of them.',
        a: 'Six: the D of quand does wake, but retard, attend, sont and enfants do not, because each is followed by a consonant, a break, or nothing at all.' },
      { q: 'Read the third sentence aloud. How many times should you stop inside it?',
        a: 'Once, at the comma. Everything after it runs together, including prend un and petit hôtel, which are joins you cannot see on the page.' },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's20-review',
    title: 'The system, not the sentences',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['pipeline', 'phraseGroup', 'join'],
    say: {
      text: 'Twelve cards. Answer each one out loud before you rate it.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      // Reframe appearance 5.
      { front: 'The one thing all five rules have in common', back: REFRAME },
      { front: 'The order the rules run in', back: PIPELINE },
      { front: 'What you decide first, on any sentence', back: 'Where it breaks. Nothing joins across a break, so every other decision depends on this one.' },
      { front: 'What triggers a join', back: 'The next word starting on a vowel SOUND, inside the same group. Never a vowel letter.' },
      { front: 'The difference between elision and liaison', back: 'What the first word ends in. A vowel is deleted; a sleeping consonant is woken. Same trigger, two outcomes.' },
      { front: 'What happens to everything else', back: 'Nothing. Silence is the default, and most final consonants never move.' },
      { front: 'Where the push lands', back: 'On the last syllable of each group, after joining has decided which syllable that is.' },
      { front: 'Two things that block both joins', back: 'A phrase break, and an h aspiré. Nothing else blocks both.' },
      { front: 'What blocks a liaison but not an elision', back: 'A noun subject sitting in front of its verb. Les enfants arrivent, with silence in the middle.' },
      { front: 'What a nasal N does before a vowel', back: 'Both jobs at once. The vowel stays nasal and an N appears in front of the next word.' },
      { front: 'Your guess for an unknown H word', back: 'Muet. Most French H are, and nearly every aspiré one is a recent borrowing.' },
      { front: 'Why you are still slow, if you are', back: 'You are deciding word by word. Read the whole group before your mouth starts.' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's21-progress',
    title: 'Where you are',
    frSub: 'Votre progression',
    render: 'screens',
    layer: 'core',
    size: 'md',
    say: {
      text: 'Before the exam, a second to see what nine lessons have actually added up to.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'Nine lessons taught you five rules, one at a time, and each of them made sense on its own. What you did not have until today is the order they run in and the speed they have to run at. Those are the only two things this lesson added, and between them they are the difference between reading French correctly and speaking it.',
    stats: [
      { k: 'Rules running together', v: '5' },
      { k: 'Collisions drilled', v: '56' },
      { k: 'Sons track', v: 'Last lesson' },
      { k: 'Next up', v: 'A1, and none of this comes up again' },
    ],
  },

  {
    type: 'quiz',
    id: 's22-quiz',
    title: 'Forty-eight questions',
    frSub: "L'examen",
    render: 'screens',
    layer: 'core',
    size: 'lg',
    passMark: 70,
    adaptive: true,
    roundFailThreshold: 60,
    rounds: QUIZ_ROUNDS,
  },

  {
    type: 'roundup',
    id: 's23-roundup',
    title: 'What you take with you',
    frSub: "L'essentiel",
    render: 'screens',
    layer: 'core',
    size: 'md',
    imageRef: 'lessons/masterclass/roundup.jpg',
    terms: ['pipeline', 'phraseGroup'],
    say: {
      text: 'That is the track. Five things worth keeping, and the first one contains the other four.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago you knew five rules and a person on a telephone waited for you to finish a sentence you thought you had started. Nothing was wrong with the words. What was missing was the group, and the order, and the speed. You now read a phrase before you speak it, which is the only version of this that is any use in a conversation, and it is the last thing the sons track had to give you.',
    points: [
      // Reframe appearance 6, which is what makes this a spine rather than a
      // sentence that happened once.
      `${REFRAME} Every rule you have learned is a consequence of that, and none of them is a separate decision.`,
      `${PIPELINE} Group first, because nothing joins across a break. Then join, inside each group only. Then push, on the last syllable of each one.`,
      'A join fires on a vowel SOUND, not a vowel letter. Elision deletes a vowel and liaison wakes a consonant, and the trigger for both is identical.',
      'Everything the joining did not touch stays silent, which is most of it. Adding a link French does not make is as wrong as missing one it does.',
      'Two things block both joins: a phrase break and an h aspiré. A noun subject in front of its verb blocks the liaison alone, and nothing on the page shows any of them.',
    ],
  },
];

/* ─── Acts ────────────────────────────────────────────────────────────────── */

// Screen counts are estimates of the rendered flow (a deck card, a scene beat
// and a drill group are each one screen), kept so the checkpoint spacing rule is
// checked against the real shape rather than against the section count.
const ACTS = [
  { id: 'act1', title: 'Five rules, one sentence', sections: ['s01-scene', 's02-goals', 's03-anchors'],
    milestone: 'The gap, named.', estScreens: 20, restPoints: ['s01-scene/end'] },

  { id: 'act2', title: 'Group it', sections: ['s04-breaks', 's05-across', 's06-push'],
    milestone: 'Where the phrase ends.', estScreens: 20, restPoints: ['s04-breaks/6'] },

  { id: 'act3', title: 'Join it', sections: ['s07-collide', 's08-both', 's09-silence', 's10-dictation'],
    milestone: 'Both joins, one move.', estScreens: 38, restPoints: ['s08-both/6', 's10-dictation/5'] },

  { id: 'act4', title: 'Where the rules fight', sections: ['s11-h', 's12-nasal', 's13-pairs', 's14-errors'],
    milestone: 'The blockers, beaten.', estScreens: 32, restPoints: ['s13-pairs/6'] },

  { id: 'act5', title: 'At speed', sections: ['s15-inhibition', 's16-speak', 's17-scenario', 's18-listen'],
    milestone: 'Fast enough to be speech.', estScreens: 22, restPoints: ['s16-speak/5'] },

  { id: 'act6', title: 'Prove it', sections: ['s19-reading', 's20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: 'Sons track complete.', estScreens: 63, restPoints: ['s20-review', 's22-quiz/round3', 's22-quiz/round6'] },
];

/* ─── SRS tranches ────────────────────────────────────────────────────────── */

// One slice per act, released AT that act's checkpoint rather than all at once
// on completion.
//
// The tranches release the 56 AUTHORED items and none of the 22 reused ones.
// That is deliberate and it is the one place this lesson differs from every
// other: a reused item is already in the learner's deck, put there by the lesson
// that taught it, and releasing it a second time would reset a card the SRS has
// been scheduling for weeks. This lesson drills those items on screen and lets
// their existing schedule stand.
//
// Act 1 releases nothing: the scene teaches one phrase and the goals teach none.
// The final act releases nothing either, which is what stops an hour-long lesson
// dumping its whole deck into review at the end.
const DECK_TRANCHE: string[][] = [
  [],
  [...familyIds('pipeline')],
  [...familyIds('join')],
  [...familyIds('contrast')],
  [...familyIds('blocked'), ...familyIds('silence')],
  [],
];

/* ─── The lesson ──────────────────────────────────────────────────────────── */

export const MASTERCLASS_LESSON: Lesson = {
  id: 'sons.09.l1',
  unitId: 'sons.09',
  seq: 1,
  title: 'Masterclass',
  level: 'sons',
  tag: 'SONS · LEÇON 09',

  intro:
    "Nine lessons taught you five rules, one at a time. In real speech they fire together, on the same word, in a fixed order, and they interact: a letter one rule put to sleep is the letter another rule wakes. This lesson is the order they run in and the speed they have to run at, on sentences where two or three of them collide.",

  overview: {
    glyph: '‿',
    titleEn: 'Masterclass: the whole sound system at once',
    subFr: 'La masterclass',
    introFr:
      "Neuf leçons vous ont appris cinq règles, une par une. Dans la vraie parole, elles agissent ensemble, sur le même mot, dans un ordre fixe. Cette leçon vous donne cet ordre et la vitesse qu'il exige, sur des phrases où deux ou trois règles se rencontrent.",
    minutes: 60,
    screens: 195,
    difficulty: 4,
  },

  grammarAssumed: ['elision', 'h-aspire-vs-h-muet', 'liaison', 'nasal-vowels', 'silent-final-consonants'],
  grammarIntroduced: ['phrase-group', 'rule-ordering'],

  features: ['narrated', 'minimalPairs', 'voiceflash'],

  sections: SECTIONS,
  itemIds: ALL_IDS,

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      {
        id: 'rec-scene-break',
        desc: "The phone-call break beat. ONE VOICE, ONE SPEED, ONE TAKE, back to back: first the word-by-word reading with a real pause between each of the five words, then the correct reading with two groups and a single stop at the comma. The two takes must be the same speaker at the same tempo, because the ONLY difference being taught is where the stops are, and a listener cannot judge that across two recordings.",
        clipIds: ['broken', 'correct'],
      },
      {
        id: 'rec-breaks',
        desc: "The grouping contrast, and the recording this lesson depends on most after rec-pairs. Ten phrases: five that run as one group (On est en avance, C'est un ancien hôtel, Ils ont un enfant, en un instant, Tout est prêt) and five with one internal break. CRITICAL: the break must be a real pause of roughly 200ms plus a pitch reset, not merely a lengthened syllable, and every phrase must be one voice at one speed in one take. Include « On mange, les enfants » and « On mange les enfants » as an adjacent pair: the break is the only difference and device TTS renders it inconsistently, so this pair is unusable until it is recorded.",
        clipIds: ['one-group', 'two-groups', 'on-mange-comma', 'on-mange-no-comma'],
      },
      {
        id: 'rec-subject-verb',
        desc: 'The subject/verb block. Six phrases in three adjacent pairs: Ils arrivent en retard against Les enfants arrivent, les amis against Mes amis parlent bien, Un ami arrive against les autres attendent. CRITICAL: one voice, one speed, one take per pair. The blocked side needs a genuine small gap where the Z would have been, not a glottal stop and not a lengthened vowel.',
        clipIds: ['ils-arrivent', 'les-enfants-arrivent', 'mes-amis', 'un-ami-arrive'],
      },
      {
        id: 'rec-push',
        desc: 'Five sentences read for PROMINENCE rather than for words, at normal pace plus a 0.65 pass. One push per group, on its final syllable, and no secondary stress anywhere. At the slow speed the group structure must survive: slowing down is not permission to push every word, and a slow take with word-level stress teaches the exact error the lesson exists to remove.',
      },
      {
        id: 'rec-joins',
        desc: 'The ten multi-join phrases from mission 8, isolated, 900ms gaps, normal and 0.65. Each one must be a single unbroken run with no internal pause whatsoever: these are the reference for what a fully joined group sounds like, so they have to be flawless on that one point. At 0.65 the joins must STAY joined.',
        clipIds: ['ancien-hotel', 'quest-ce-quon-attend', 'bel-appartement', 'bon-exemple', 'pas-encore', 'on-est-en-avance', 'accent-charmant', 'elle-est-arrivee', 'ils-ont-un-enfant', 'nous-en-avons'],
      },
      {
        id: 'rec-pairs',
        desc: "The twelve minimal pairs, and the single most important recording in the lesson. les amis / les copains, un petit ami / un petit chien, un grand arbre / un grand parc, un bon ami / un bon copain, les hôtels / les héros, deux heures / deux hiboux, ils ont / ils sont, Tout est prêt / Tout va bien, and the four sentence pairs. CRITICAL: each pair must be the SAME voice at the SAME speed in ONE take. The difference inside a pair is a single consonant or a gap of about 120ms, and a listener cannot judge either across two takes. Two takes at different tempos makes the pair uncomparable and the mission teaches nothing.",
        clipIds: ['les-amis', 'les-copains', 'petit-ami', 'petit-chien', 'grand-arbre', 'grand-parc', 'bon-ami', 'bon-copain', 'les-hotels', 'les-heros', 'deux-heures', 'deux-hiboux', 'ils-ont', 'ils-sont', 'tout-est-pret', 'tout-va-bien'],
      },
      {
        id: 'rec-h-blocks',
        desc: 'The h muet against h aspiré contrast, in sentence frames rather than isolated words. les hôtels / les héros, deux heures / deux hiboux, Le petit hôtel est ouvert / Le petit héros est parti. CRITICAL: one voice, one speed, one take per pair. The aspiré side needs a real, audible, deliberate gap rather than a glottal stop, because that gap is the only signal the learner is ever given and a glottal stop is a different sound teaching a different thing.',
        clipIds: ['les-hotels', 'les-heros', 'deux-heures', 'deux-hiboux', 'petit-hotel', 'petit-heros'],
      },
      {
        id: 'rec-nasal-n',
        desc: 'The nasal N pairs: un bon ami / un bon copain, mon ancien appartement, en un instant, un petit chien, Ils ont un enfant. CRITICAL: one voice, one speed, one take per pair, and the vowel of bon must stay AUDIBLY nasal in both halves. A take that de-nasalises it before ami teaches the opposite of the mission, and it is the single easiest thing for a speaker to do by accident when concentrating on the N.',
        clipIds: ['bon-ami', 'bon-copain', 'mon-ancien-appartement', 'en-un-instant', 'ils-ont-un-enfant'],
      },
      {
        id: 'rec-dictation-10',
        desc: 'The ten dictation sentences, normal speed only, natural connected delivery. No exaggerated separation between words: the learner is being asked to hear a joined group and write it back as separate words with the right silent letters, and a hyper-articulated take does that job for them.',
        clipIds: ['les-amis', 'les-enfants-arrivent', 'pas-encore-mange', 'bon-exemple', 'ancien-hotel', 'nous-avons-deux-enfants', 'le-matin', 'on-arrive-a-lheure', 'il-est-tard', 'ils-ont-un-enfant'],
      },
      {
        id: 'rec-reading-passage',
        desc: 'The six-sentence reading passage, one take at natural conversational pace, plus per-sentence stems for tap-to-replay, plus the eight listening-mission sentences. The les héros instance must carry its blocked gap audibly, since a comprehension question turns on it, and the breaks must be real pauses because another question asks the learner to count them.',
      },
    ],
  },

  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'en', text: 'I am Camille. This is the last lesson in the sound track, and it does not teach you a new rule.' },
          { voice: 'en', text: 'You have five already. What you have never done is run all five at once, on a sentence you have not seen, at the speed a conversation actually goes.' },
          { voice: 'fr', text: "On commence." },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'en', text: 'One idea first, and everything else follows from it. French does not pronounce words. It pronounces phrases.' },
          { voice: 'fr', text: 'les copains' },
          { voice: 'fr', text: 'les amis' },
          { voice: 'en', text: 'Same S, same word. It is silent in the first and a Z in the second, and nothing about les changed. What changed is what came after it.' },
          { kind: 'repeat', itemId: 'fr.sons.masterclass.001' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'So there is an order. Group, join, push. Find where the phrase breaks first, because nothing joins across a break.' },
          { voice: 'fr', text: "Le matin, les enfants vont à l'école." },
          { voice: 'en', text: 'Two groups. Inside the second one, les and enfants join, enfants and vont do not, and vont and à join again.' },
          { kind: 'repeat', itemId: 'fr.sons.masterclass.039' },
          { voice: 'en', text: 'Then the push, once at the end of each group. Not once per word.' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Now the part that decides everything. Listen to these two and tell me which one has an N in the middle.' },
          { voice: 'fr', text: 'un bon ami' },
          { voice: 'fr', text: 'un bon copain' },
          { voice: 'en', text: 'The first one. And notice the vowel of bon stayed nasal in both: the N did two jobs at once rather than choosing one.' },
          { kind: 'repeat', itemId: 'fr.sons.masterclass.013' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn, and read the whole group before you start. Say: it is a former hotel.' },
          { kind: 'produce', itemId: 'fr.sons.masterclass.025', expected: "C'est un ancien hôtel.", gradeAs: 'produce' },
          { voice: 'en', text: 'Again, and this one has a break in it. When we are late, everyone waits.' },
          { kind: 'produce', itemId: 'fr.sons.masterclass.044', expected: 'Quand on est en retard, tout le monde attend.', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One trap before we finish. Two H words, both silent, and only one of them lets the join through. Which of these is correct?' },
          { voice: 'fr', text: 'les héros' },
          { kind: 'check', itemId: 'fr.sons.masterclass.006', expected: 'les héros', gradeAs: 'discriminate' },
          { voice: 'en', text: 'les héros, with a small gap and no Z. Compare les hôtels, which is spelled the same way and joins.' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. French pronounces the phrase, not the word. Group, join, push, always in that order.' },
          { voice: 'en', text: 'And everything the joining did not touch stays silent, which is most of it. That is the whole sound system, and that is the track.' },
          { voice: 'fr', text: 'Bravo, et à bientôt.' },
        ],
      },
    ],
  },

  version: 1,
};

/** The ids this lesson authored, as opposed to the ones it reuses. Exported for
 *  the batch, which inserts only the former. */
export const AUTHORED_IDS = MASTERCLASS.map((m) => m.id);
export { REUSED_IDS, ruleIds };

export default MASTERCLASS_LESSON;
