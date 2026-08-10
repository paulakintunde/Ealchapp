// sons.05.l1 · Les accents — the lesson body.
//
// Built on Lesson Architecture v2, in the app's own schema, with sons.06.l1
// ("Les lettres muettes") as the structural reference.
//
// ── Why this lesson is NOT sons.06 with different letters ──────────────────
//
// sons.06 teaches a DEFAULT plus overrides: silent unless there is a reason.
// That frame is true of silent letters because one rule really does cover most
// of the material, and the value of that lesson is that its frame was TRUE,
// not that the frame is reusable.
//
// Accents have no default. é è ê change which vowel comes out; ë changes how
// many syllables there are; ç changes a consonant; and à, ù and most
// circumflexes change nothing you can hear at all. Forcing "default plus
// overrides" onto that would mean inventing a default that does not exist.
//
// What IS true of every mark in the set is this: the mark is not decoration
// sitting on top of a letter, it is part of the letter. e and é are as
// different as e and o. That is the reframe, and it is the thing an English
// reader gets wrong: English has no productive diacritics, so a mark reads as
// a flourish, an import, something you can safely ignore when typing. Reading
// « café » as if the é were an ordinary e is not a small error of polish, it
// produces a different word shape.
//
// The lesson is then organised by WHAT EACH MARK CHANGES rather than by which
// mark it is, because that is the question a reader actually has when they hit
// one:
//
//   Act 2  marks that change the vowel        é è ê
//   Act 3  the mark that changes nothing      à ù û, and the circumflex hats
//   Act 4  the mark that changes the syllable ë
//   Act 5  the mark that changes a consonant  ç
//
// Act 3 is load-bearing rather than a curiosity. Having just taught that marks
// change sounds, the lesson has to say out loud that some of them do not, or
// the learner over-applies the rule and starts hearing differences that are
// not there. That act exists because the reframe is "part of the letter", not
// "always changes the sound", and those are different claims.
//
// ── The one rule that governs this file ────────────────────────────────────
//
// No transcription is typed here. Every `fr`, `ipa`, `respell`, `en` and
// `markAt` comes from the accents corpus through `w()` and its helpers. To
// change how « café » is transcribed you edit one line in accents-corpus.ts
// and every screen in this lesson follows. Prose the lesson teaches WITH (the
// coach lines, the rules, the whys) is authored here, because it is lesson
// content rather than lexical data.

import {
  type ErrorTrigger,
  type GridLetter,
  type Lesson,
  type LessonDrill,
  type LessonSection,
  type QuizRound,
  type ReferenceSheet,
  type SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { ACCENTS_IDS, BY_ID, type AccentWord } from './accents-corpus.ts';
import { TERMS } from './accents-terms.ts';
import { withScenarioAlts } from '../scenario-alts.logic.ts';

/* ─── Corpus accessors ────────────────────────────────────────────────────── */

/** One word, by id. Throws on a typo rather than rendering a blank card. */
function w(id: string): AccentWord {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`accents-lesson: unknown corpus id "${id}"`);
  return found;
}

/** IPA as the renderer shows it: already slash-wrapped in the corpus. */
const ipa = (id: string): string => w(id).ipa ?? '';
/** Respelling in brackets. The brackets are added HERE, once, so the stored
 *  data stays clean and the notation rule is applied in exactly one place. */
const re = (id: string): string => (w(id).respell ? `[${w(id).respell}]` : '');
const fr = (id: string): string => w(id).fr;
const en = (id: string): string => w(id).en;
/** The marked-letter indices, which the XL card lights rather than greys. */
const at = (id: string): number[] => w(id).markAt;

/** The flashcard/review back: IPA, respelling and gloss on one line. Built
 *  from the corpus so a transcription change propagates here too. */
const back = (id: string): string => [ipa(id), re(id), en(id)].filter(Boolean).join(' · ');

/** A groupDrill / examples item, assembled from the corpus.
 *
 *  `silent` is the field the XL word card animates. This lesson has no silent
 *  letters to grey, so it passes the MARKED indices instead: the same
 *  highlight machinery, pointed at the letters that carry a diacritic. That is
 *  a deliberate reuse of a rendered field rather than a new one nothing draws,
 *  which is the "authored and rendered by nothing" failure the contract test
 *  exists to catch. */
const item = (id: string, note?: string) => ({
  itemId: id,
  fr: fr(id),
  ipa: ipa(id),
  respell: re(id),
  en: en(id),
  silent: at(id),
  ...(note ? { note } : {}),
});

/* ─── The reframe ─────────────────────────────────────────────────────────── */

/** The line the lesson hangs on. Referenced, never retyped, so every
 *  appearance is guaranteed identical: the density validator checks for it
 *  verbatim and a hand-typed copy is exactly how that check starts failing.
 *
 *  The claim is deliberately about IDENTITY, not about sound. "The mark always
 *  changes the sound" would be false (à, ù and the circumflex on a and i change
 *  nothing you can hear) and act 3 exists to teach that. "Part of the letter"
 *  stays true across all five marks, including the silent ones: à is a
 *  different letter from a even though it is the same sound, which is exactly
 *  why they are different words. */
export const REFRAME = 'The mark is part of the letter, not decoration on it.';

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────── */

// The lesson opens on a real moment going wrong, not on a paragraph about
// what accents are. The failing instinct is the English reader's: a mark is a
// flourish, so « où » and « ou » must be the same word wearing a hat.
const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Your train leaves in eleven minutes and you are not sure which platform. There is one person at the information desk.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Agent',
    fr: 'Bonjour, je peux vous aider ?',
    en: 'Hello, can I help you?',
    reveal: 'tap',
    size: 'md',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You want to ask where the train is. You know the word. You wrote it on your hand this morning.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'Which one did you write down?',
    options: [
      {
        fr: 'où',
        respell: '[OO]',
        en: 'where',
        outcome: 'works',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
      {
        fr: 'ou',
        respell: '[OO]',
        en: 'or',
        outcome: 'breaks',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
    ],
    followUp: {
      works: 'That is the one. Now look at what the other spelling actually means.',
      breaks: 'They sound identical, so the ear cannot save you here. Only the page can.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: 'Ou est le train ?',
    en: '(written without the mark)',
    reveal: 'auto',
    size: 'md',
    stage: 'You turn your notebook around and show her.',
    audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Agent',
    fr: 'Ou... est le train ? Or the train?',
    en: 'Or... is the train?',
    reveal: 'auto',
    size: 'md',
    stage: 'She reads it twice. It is a sentence, and it is not a question she can answer.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'One mark, two words',
    body: 'Both spellings are real French words. They sound exactly the same. The only thing telling them apart is the mark, and you left it off, so you wrote a different word.',
    wrong: { fr: 'ou', ipa: '/u/', respell: '[OO]', en: 'or' },
    right: { fr: 'où', ipa: '/u/', respell: '[OO]', en: 'where' },
    coach: REFRAME,
    audio: { mode: 'recorded', recordingId: 'rec-scene-break', autoplay: true, audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    fr: 'Où est le train ?',
    en: 'Where is the train?',
    ipa: '/u ɛ lə tʁɛ̃/',
    reveal: 'tap',
    size: 'md',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Agent',
    fr: 'Ah, où. Voie douze.',
    en: 'Ah, where. Platform twelve.',
    reveal: 'auto',
    size: 'md',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'That mark was not tidying up the spelling. It was the word.',
  },
];

const SCENE: LessonSection = {
  id: 's01-scene',
  type: 'scene',
  layer: 'core',
  render: 'screens',
  title: 'Platform twelve',
  frSub: 'Où est le train ?',
  say: {
    text: 'Eleven minutes to your train, and one word between you and the right platform.',
    voice: 'coach',
    timing: 'onFirstVisitOnly',
  },
  setting: {
    place: 'Gare de Lyon',
    city: 'Paris',
    time: '17:20, a Friday',
    image: 'lessons/accents/scene-gare.jpg',
    ambience: 'room-tone-station',
  },
  beats: SCENE_BEATS,
  closing: {
    size: 'md',
    text: 'This lesson is the five marks French uses, and what each one actually changes.',
  },
};

/* ─── Mission 2 · Goals ───────────────────────────────────────────────────── */

const GOALS: LessonSection = {
  id: 's02-goals',
  type: 'goals',
  layer: 'core',
  render: 'screens',
  size: 'lg',
  title: 'What you walk out with',
  frSub: 'Vos objectifs',
  say: {
    text: 'Six things. Every one of them is something you do, not something you know about.',
    voice: 'coach',
    timing: 'onFirstVisitOnly',
  },
  goals: [
    { t: 'Say é on sight', s: 'Read café, été and désolé with a clean /e/, the vowel in day, and no glide on the end of it.' },
    { t: 'Hear é against è', s: 'Tell des from dès and métro from mètre by ear alone, with nothing else in the sentence to help.' },
    { t: 'Read a circumflex', s: 'Meet hôpital and forêt cold, put the missing s back, and recognise the English word underneath.' },
    { t: 'Split on a tréma', s: 'Say maïs as two syllables and mais as one, and know which of them means corn.' },
    { t: 'Place the cédille', s: 'Say français and garçon with a soft c, and explain why ceci never needs the tail.' },
    { t: 'Know when it is silent', s: 'Say à, ou and sur without hunting for a sound that is not there, because some marks change nothing you can hear.' },
  ],
};

/* ─── Mission 3 · The anchors deck ────────────────────────────────────────── */

const ANCHORS: LessonSection = {
  id: 's03-anchors',
  type: 'cardDeck',
  layer: 'core',
  render: 'deck',
  size: 'md',
  title: 'Five things to hold on to',
  frSub: 'Les idées clés',
  hint: 'Swipe through. Nothing to answer yet.',
  terms: ['accentAigu', 'accentGrave', 'ipa'],
  say: {
    text: 'Five ideas. The rest of the lesson is these five, slowed down.',
    voice: 'coach',
    timing: 'onFirstVisitOnly',
  },
  cards: [
    {
      head: REFRAME,
      body: 'That is the whole lesson in one line. In English a mark is a flourish you can drop when typing. In French it is a letter, and dropping it can give you a different word.',
      imageRef: 'lessons/accents/anchor-marks.jpg',
    },
    {
      head: 'Ask what it changes, not what it is called',
      body: 'The names are useful later. What you need at reading speed is one question: does this mark change the vowel, the syllable, the consonant, or nothing at all? Four answers, and every mark in French is one of them.',
    },
    {
      head: 'é is the one you will meet most',
      body: 'It only ever sits on an e, it is always the same sound, and it is on the past participle of every regular verb in the language. One mark, no exceptions, enormous coverage.',
    },
    {
      head: 'Some marks are silent, and that is not a loophole',
      body: 'à sounds exactly like a. sûr sounds exactly like sur. The mark is still part of the letter: it is telling two words apart on the page rather than in the mouth.',
    },
    {
      head: 'Only one mark touches a consonant',
      body: 'Four of the five sit on vowels. The cédille is the odd one out, and it does one job: it keeps a c soft in front of a, o or u.',
    },
  ],
};

/* ─── Mission 4 · The reference grid ──────────────────────────────────────── */

// Every mark, one verdict each. Rendered as a sheet preview: the flow shows
// the marks a beginner meets, the full sheet holds the lot.
const GRID_LETTERS: GridLetter[] = [
  {
    ch: 'é',
    name: 'e accent aigu',
    ipa: '/e/',
    sound: 'the vowel in day, with no glide on the end',
    ex: fr('fr.sons.accents.001'),
    respell: re('fr.sons.accents.001'),
    en: en('fr.sons.accents.001'),
    verdict: 'sounded',
    rule: 'Changes the vowel. Only ever appears on an e, and always sounds the same.',
    memo: 'The rising stroke rises to the front of your mouth.',
    preview: true,
  },
  {
    ch: 'è',
    name: 'e accent grave',
    ipa: '/ɛ/',
    sound: 'the vowel in bed, wider and flatter than é',
    ex: fr('fr.sons.accents.019'),
    respell: re('fr.sons.accents.019'),
    en: en('fr.sons.accents.019'),
    verdict: 'sounded',
    rule: 'Changes the vowel. On an e only. On a or u the same mark is silent.',
    memo: 'The falling stroke drops your jaw.',
    preview: true,
  },
  {
    ch: 'ê',
    name: 'e accent circonflexe',
    ipa: '/ɛ/',
    sound: 'the same sound as è',
    ex: fr('fr.sons.accents.039'),
    respell: re('fr.sons.accents.039'),
    en: en('fr.sons.accents.039'),
    verdict: 'sounded',
    rule: 'Changes the vowel, and usually marks a lost s: fête was feste, and English kept feast.',
    exception: 'On a, i, o and u the hat changes nothing a beginner needs to hear.',
    memo: 'The hat is a headstone for a letter that died.',
    preview: true,
  },
  {
    ch: 'ë',
    name: 'e tréma',
    ipa: '/ɛ/',
    sound: 'forces its own syllable rather than fusing with the vowel before it',
    ex: fr('fr.sons.accents.048'),
    respell: re('fr.sons.accents.048'),
    en: en('fr.sons.accents.048'),
    verdict: 'sounded',
    rule: 'Changes the syllable count, not the vowel. Two dots mean say both vowels separately.',
    memo: 'Two dots, two syllables.',
    preview: true,
  },
  {
    ch: 'ç',
    name: 'c cédille',
    ipa: '/s/',
    sound: 'a soft c, an s sound',
    ex: fr('fr.sons.accents.054'),
    respell: re('fr.sons.accents.054'),
    en: en('fr.sons.accents.054'),
    verdict: 'sounded',
    rule: 'Changes the consonant. Appears only before a, o or u, where a bare c would be /k/.',
    exception: 'Never appears before e or i, where c is already soft.',
    memo: 'The tail hooks the hard sound out.',
    preview: true,
  },
  {
    ch: 'à',
    name: 'a accent grave',
    ipa: '/a/',
    sound: 'exactly the same as a plain a',
    ex: fr('fr.sons.accents.034'),
    respell: re('fr.sons.accents.034'),
    en: en('fr.sons.accents.034'),
    verdict: 'silent',
    rule: 'Changes nothing you can hear. It separates à (to) from a (has) on the page.',
    memo: 'Same sound, different word.',
    preview: true,
  },
  {
    ch: 'ù',
    name: 'u accent grave',
    ipa: '/u/',
    sound: 'exactly the same as a plain u in ou',
    ex: fr('fr.sons.accents.032'),
    respell: re('fr.sons.accents.032'),
    en: en('fr.sons.accents.032'),
    verdict: 'silent',
    rule: 'Changes nothing you can hear, and appears in exactly one French word: où.',
    memo: 'One word, one job.',
    preview: true,
  },
  {
    ch: 'â',
    name: 'a accent circonflexe',
    ipa: '/ɑ/',
    sound: 'a slightly darker a, and most speakers no longer distinguish it',
    ex: fr('fr.sons.accents.044'),
    respell: re('fr.sons.accents.044'),
    en: en('fr.sons.accents.044'),
    verdict: 'conditional',
    rule: 'Marks a lost s (gâteau, and English gateau kept the shape). The sound difference is not one to chase.',
  },
  {
    ch: 'î',
    name: 'i accent circonflexe',
    ipa: '/i/',
    sound: 'exactly the same as a plain i',
    ex: fr('fr.sons.accents.046'),
    respell: re('fr.sons.accents.046'),
    en: en('fr.sons.accents.046'),
    verdict: 'silent',
    rule: 'Marks a lost s and nothing else: île was isle.',
  },
  {
    ch: 'ô',
    name: 'o accent circonflexe',
    ipa: '/o/',
    sound: 'a closed o, the vowel in boat',
    ex: fr('fr.sons.accents.042'),
    respell: re('fr.sons.accents.042'),
    en: en('fr.sons.accents.042'),
    verdict: 'conditional',
    rule: 'Marks a lost s: hôpital was hospital. It also closes the o slightly.',
  },
  {
    ch: 'û',
    name: 'u accent circonflexe',
    ipa: '/y/',
    sound: 'exactly the same as a plain u',
    ex: fr('fr.sons.accents.036'),
    respell: re('fr.sons.accents.036'),
    en: en('fr.sons.accents.036'),
    verdict: 'silent',
    rule: 'Changes nothing you can hear. It separates sûr (sure) from sur (on).',
  },
  {
    ch: 'ï',
    name: 'i tréma',
    ipa: '/i/',
    sound: 'forces its own syllable',
    ex: fr('fr.sons.accents.049'),
    respell: re('fr.sons.accents.049'),
    en: en('fr.sons.accents.049'),
    verdict: 'sounded',
    rule: 'Splits ai apart: mais is one syllable, maïs is two.',
  },
];

const GRID: LessonSection = {
  id: 's04-grid',
  type: 'letterGrid',
  layer: 'core',
  render: 'sheet',
  size: 'lg',
  sheetId: 'sheet.sons.05.grid',
  previewCount: 7,
  title: 'Every mark, one verdict each',
  frSub: 'Tous les accents',
  terms: ['accentAigu', 'accentGrave', 'circonflexe'],
  say: {
    text: 'Tap any mark to open it. The full table is behind the button at the top.',
    voice: 'coach',
    timing: 'onEnter',
  },
  letters: GRID_LETTERS,
};

/* ─── Act 2 · Marks that change the vowel (missions 5-11) ─────────────────── */

// The XL group drill is the teaching engine: one word per swiped hero card, at
// display size, with the marked letters lit. Each family's word deck is
// followed by its own control page, which is the alternating shape sons.06
// settled on. The run is 7 sections of one TYPE, under the activity-run limit
// of 8, and it alternates between a word deck and a four-option control, so
// what the learner meets is not sameness.

const AIGU_DRILL: LessonSection = {
  id: 's05-aigu',
  type: 'groupDrill',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'é: the mark that makes /e/',
  frSub: "L'accent aigu",
  terms: ['accentAigu', 'ipa'],
  say: {
    text: 'Thirteen words. Every é in every one of them is the same sound. Hear it, then answer one question.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-aigu-nine', speeds: [1, 0.65] },
  groups: [
    {
      label: 'Always the same sound',
      items: [
        item('fr.sons.accents.001', 'the mark is why the final vowel sounds at all'),
        item('fr.sons.accents.002', 'two marks, one sound, twice'),
        item('fr.sons.accents.003', 'the word opens on the mark'),
        item('fr.sons.accents.005', 'the one on every metro map in Paris'),
        item('fr.sons.accents.006', 'the box in the corner of the room'),
        item('fr.sons.accents.007', 'three letters, and the mark carries the last one'),
        item('fr.sons.accents.008', 'the h does nothing, the é does everything'),
        item('fr.sons.accents.009', 'what you say when the glasses touch'),
        item('fr.sons.accents.011', 'the é sounds, the plain e after it does not'),
        item('fr.sons.accents.012', 'the word you will need most often on a bad day'),
        item('fr.sons.accents.013', 'three é, three identical sounds'),
        item('fr.sons.accents.014', 'where you are going on Friday'),
        item('fr.sons.accents.018', 'the mark opens the word and never changes'),
      ],
    },
  ],
};

const AIGU_CHECK: LessonSection = {
  id: 's05-check-aigu',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'é: the mark that makes /e/',
  // Every control page carries a `say`.
  //
  // Two reasons, and the second is the load-bearing one. It is the moment the
  // learner most wants the question read to them, since a check is where the
  // rule either lands or does not. And the Listen chip is conditionally
  // mounted on `say`, so a page without one used to collapse the header row:
  // the seven control pages in this lesson alternate with the seven drills,
  // which made the header jump on every other swipe. LessonPager now reserves
  // that height regardless, so this is no longer load-bearing for layout, but
  // a check that cannot be heard is still worse than one that can.
  say: {
    text: 'One question before you move on. The mark on an e, and which letter it can sit on.',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'é: the mark that makes /e/',
      items: [],
      check: {
        q: 'Which letter can carry an accent aigu?',
        opts: ['a', 'e', 'o', 'any vowel'],
        correct: 1,
        why: 'Only e. The accent aigu appears on no other letter in French, which is what makes it the easiest mark to read: é is always /e/, every time, with nothing to work out.',
      },
    },
  ],
};

const GRAVE_DRILL: LessonSection = {
  id: 's06-grave',
  type: 'groupDrill',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'è: the mark that makes /ɛ/',
  frSub: "L'accent grave",
  terms: ['accentGrave', 'ipa'],
  say: {
    text: 'Eleven words. This vowel is wider than the last one. Your jaw drops for it.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-grave-eight', speeds: [1, 0.65] },
  groups: [
    {
      label: 'Wider than é, and flatter',
      items: [
        item('fr.sons.accents.019', 'the vowel in the English word bed'),
        item('fr.sons.accents.020', 'same vowel, one letter apart from the last'),
        item('fr.sons.accents.021', 'the r at the end is fully alive'),
        item('fr.sons.accents.022', 'the è sounds and the s does not'),
        item('fr.sons.accents.023', 'the s is silent here too'),
        item('fr.sons.accents.024', 'both marks on an e, making two different vowels'),
        item('fr.sons.accents.025', 'the cheese is named after the animal'),
        item('fr.sons.accents.027', 'the one to get right before six in the evening'),
        item('fr.sons.accents.028', 'the ordinal you will need on every form'),
        item('fr.sons.accents.029', 'not college: this is secondary school'),
        item('fr.sons.accents.030', 'a nasal, then the wide è'),
      ],
    },
  ],
};

const GRAVE_CHECK: LessonSection = {
  id: 's06-check-grave',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'è: the mark that makes /ɛ/',
  say: {
    text: 'Four pairs. Only one of them is a real difference in sound. Take your time.',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'è: the mark that makes /ɛ/',
      items: [],
      check: {
        q: 'Which pair is a real difference in sound?',
        opts: ['a and à', 'ou and où', 'des and dès', 'sur and sûr'],
        correct: 2,
        why: 'des is /de/ and dès is /dɛ/, so the grave changes the vowel there. The other three sound identical: on an a or a u, the mark separates two words on the page and nothing more.',
      },
    },
  ],
};

const CIRCONFLEXE_DRILL: LessonSection = {
  id: 's07-circonflexe',
  type: 'groupDrill',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'ê: the hat that marks a missing s',
  frSub: "L'accent circonflexe",
  terms: ['circonflexe', 'ipa'],
  say: {
    text: 'Eight words. Put an s back after the marked vowel and watch the English word appear.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-circonflexe-six', speeds: [1, 0.65] },
  groups: [
    {
      label: 'Cover the hat, add an s',
      items: [
        item('fr.sons.accents.039', 'feste became fête. English kept feast'),
        item('fr.sons.accents.040', 'teste became tête, and the vowel is the è sound'),
        item('fr.sons.accents.041', 'forest, minus its s'),
        item('fr.sons.accents.042', 'hospital, minus its s'),
        item('fr.sons.accents.043', 'the most common verb in the language'),
        item('fr.sons.accents.045', 'chasteau became château. English took castle'),
        item('fr.sons.accents.046', 'isle, minus its s, and the hat is silent here'),
        item('fr.sons.accents.047', 'goust became goût, and English kept gusto'),
      ],
    },
  ],
};

const CIRCONFLEXE_CHECK: LessonSection = {
  id: 's07-check-circonflexe',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'ê: the hat that marks a missing s',
  say: {
    text: 'A word you have not met yet. Use the trick rather than guessing.',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'ê: the hat that marks a missing s',
      items: [],
      check: {
        q: 'You meet « côte » for the first time. What is the reading trick?',
        opts: [
          'say it with an é sound',
          'put an s back after the marked vowel',
          'split it into two syllables',
          'say the c as an s',
        ],
        correct: 1,
        why: 'A circumflex usually marks a lost s, so coste gives you coast. It works on hôpital, forêt and fête too. The trick is a reading aid rather than a sound rule: on an o the hat barely changes what you say.',
      },
    },
  ],
};


const PAIRS_LAB: LessonSection = {
  id: 's08-pairs',
  type: 'groupDrill',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'é against è, nothing else to go on',
  frSub: 'Paires minimales',
  terms: ['minimalPair', 'accentAigu', 'accentGrave'],
  say: {
    text: 'Two pairs. In each one the mark is the only difference, so your ear has nothing else to use.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', speeds: [1, 0.65], audioFirst: true },
  groups: [
    {
      label: 'The mark is the whole difference',
      items: [
        item('fr.sons.accents.037', 'DAY, and it means some'),
        item('fr.sons.accents.038', 'DEH, and it means from'),
        item('fr.sons.accents.005', 'may-TROH, the underground'),
        item('fr.sons.accents.026', 'MEHTR, the unit of length'),
      ],
    },
  ],
};

const PAIRS_CHECK: LessonSection = {
  id: 's08-check-pairs',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'é against è, nothing else to go on',
  say: {
    text: 'Listen to the vowel and nothing else. Narrow or wide.',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'é against è, nothing else to go on',
      items: [],
      check: {
        q: 'You hear /mɛtʁ/. Which word is it?',
        opts: ['métro', 'mètre'],
        correct: 1,
        why: 'The /ɛ/ is the wide, flat vowel of è, so this is mètre, the unit of length. métro opens on /e/, the narrower vowel of é, and closes on /o/.',
      },
    },
  ],
};

/* ─── Act 3 · The mark that changes nothing (missions 12-14) ──────────────── */

// This act exists because the reframe is about IDENTITY, not about sound. Two
// missions in, a learner has been told twice that a mark changes what comes out
// of their mouth, and the natural over-generalisation is that every mark must.
// It does not: à sounds exactly like a, sûr exactly like sur, and hunting for a
// difference that is not there is its own failure mode. So the silent marks get
// a rule, a drill and a check of their own rather than a footnote.

const SILENT_MARKS: LessonSection = {
  id: 's09-silent-marks',
  type: 'trapDrill',
  layer: 'core',
  render: 'screens',
  size: 'lg',
  title: 'The marks you cannot hear',
  frSub: 'Les accents muets',
  terms: ['accentGrave', 'circonflexe', 'minimalPair'],
  say: {
    text: 'Three steps. The rule first, then the pairs, then you prove it.',
    voice: 'coach',
    timing: 'onEnter',
  },
  // No section-level `audio` spec, because the schema ties one to an `audio`
  // STEP and this drill deliberately has none (see the note on `steps`). The
  // recording it would have named, rec-silent-pairs, is still requested and
  // still used: s09-silent-practice is the section that plays it, and that is
  // the mission where hearing the pairs actually matters, since its whole task
  // is reading two words the ear cannot separate.
  rule: {
    title: 'On a, u and i, the mark is doing grammar',
    body: 'A grave on an e changes the vowel. On an a or a u it changes nothing you can hear. Same mark, different letter, different job. ' + REFRAME,
  },
  // Three steps, deliberately not four.
  //
  // A stepped trapDrill can also carry an `audio` step, and this section's
  // material is a natural fit for one. It does not use it: TrapAudioStep opens
  // with a hardcoded French line about the letter R ("Écoutez la paire. Le R
  // sonne, puis le R se tait"), which is true of sons.06 and false here, and it
  // would land on a screen teaching marks that change no sound at all. That is
  // component debt rather than a content problem, and widening the component to
  // read a per-step title would print the same sentence twice, since the pager
  // already draws `step.title` as the heading.
  //
  // Nothing is lost by leaving it out: the `cards` step plays both halves of
  // every pair at both speeds, which is the whole job the audio step would do.
  steps: [
    { label: 'The rule', kind: 'rule' },
    { label: 'The pairs', kind: 'cards', title: 'Identical in the mouth, different on the page' },
    { label: 'Prove it', kind: 'drill', title: 'Which one belongs here?', gate: true },
  ],
  cards: [
    {
      promptLabel: 'a / à',
      promptSound: 'both /a/',
      fr: fr('fr.sons.accents.034'),
      ipa: ipa('fr.sons.accents.034'),
      tip: 'a is the verb, he has. à is the preposition, to or at. No sound tells them apart.',
    },
    {
      promptLabel: 'ou / où',
      promptSound: 'both /u/',
      fr: fr('fr.sons.accents.032'),
      ipa: ipa('fr.sons.accents.032'),
      tip: 'ou means or. où means where. The grave on a u appears in this one word and nowhere else.',
    },
    {
      promptLabel: 'sur / sûr',
      promptSound: 'both /syʁ/',
      fr: fr('fr.sons.accents.036'),
      ipa: ipa('fr.sons.accents.036'),
      tip: 'sur means on. sûr means sure. The hat marks the lost s of the old spelling seur.',
    },
    {
      promptLabel: 'gâteau',
      promptSound: '/ɡɑ.to/',
      fr: fr('fr.sons.accents.044'),
      ipa: ipa('fr.sons.accents.044'),
      tip: 'The hat on an a is a receipt for a lost s, not an instruction. Most speakers make no difference at all.',
    },
  ],
  drill: [
    { promptSay: 'Il ___ trente ans. (he is thirty)', opts: ['a', 'à'], correct: 0 },
    { promptSay: 'Je vais ___ Paris. (I am going to Paris)', opts: ['a', 'à'], correct: 1 },
    { promptSay: '___ est la gare ? (where is the station)', opts: ['Ou', 'Où'], correct: 1 },
    { promptSay: 'Du thé ___ du café ? (tea or coffee)', opts: ['ou', 'où'], correct: 0 },
    { promptSay: 'Le livre est ___ la table. (on the table)', opts: ['sur', 'sûr'], correct: 0 },
    { promptSay: 'Tu es ___ ? (are you sure)', opts: ['sur', 'sûr'], correct: 1 },
  ],
};

const SILENT_CHECK: LessonSection = {
  id: 's09-check-silent',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'The marks you cannot hear',
  say: {
    text: 'The one that matters most in this lesson. If the ear cannot separate two words, what is the mark for?',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'The marks you cannot hear',
      items: [],
      check: {
        q: 'If two spellings sound identical, what is the mark doing?',
        opts: [
          'nothing at all, it is decoration',
          'telling two different words apart on the page',
          'marking which syllable is stressed',
          'showing the word is borrowed',
        ],
        correct: 1,
        why: 'It carries meaning rather than sound. a and à are different words, and so are ou and où, which is why leaving the mark off writes a different word rather than a sloppier one.',
      },
    },
  ],
};

/* ─── Act 4 · The mark that changes the syllable (missions 15-16) ─────────── */

const TREMA_DRILL: LessonSection = {
  id: 's10-trema',
  type: 'groupDrill',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'ë: two dots, two syllables',
  frSub: 'Le tréma',
  terms: ['trema', 'minimalPair'],
  say: {
    text: 'Six words. The dots are not about the sound of one vowel, they are about how many vowels you say.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-trema-five', speeds: [1, 0.65] },
  groups: [
    {
      label: 'Pull the vowels apart',
      items: [
        item('fr.sons.accents.050', 'one syllable: ai fuses into a single sound'),
        item('fr.sons.accents.049', 'two syllables: the dots refuse the fusion'),
        item('fr.sons.accents.048', 'noh-EL, never NOEL as one sound'),
        item('fr.sons.accents.051', 'English borrowed the word and the dots'),
        item('fr.sons.accents.052', 'two marks, two different jobs, one word'),
        item('fr.sons.accents.053', 'the country, and the dots split ai apart again'),
      ],
    },
  ],
};

/** Act 3's reading drill.
 *
 *  The trapDrill above SHOWS the six silent-mark words, but `TrapCard` has no
 *  `itemId` field, so it cannot join them to the corpus: the words are on the
 *  screen and the SRS has no idea they were taught. Releasing them at the act
 *  boundary anyway would hand review a card the learner has never formally
 *  met, which is the failure the tranche test exists to catch. This section is
 *  the join, and it is a real drill rather than a formality: reading a pair
 *  whose halves are acoustically identical is exactly the skill act 3 teaches,
 *  and `read` is the only skill that can test it. */
const SILENT_PRACTICE: LessonSection = {
  id: 's09-silent-practice',
  type: 'practice',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  skill: 'read',
  title: 'Read the pair, not the sound',
  frSub: 'À la lecture',
  terms: ['minimalPair'],
  say: {
    text: 'Seven words. Your ear cannot separate these, so read them and let the page decide.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-silent-pairs', speeds: [1, 0.65] },
  itemIds: [
    'fr.sons.accents.033',
    'fr.sons.accents.034',
    'fr.sons.accents.031',
    'fr.sons.accents.032',
    'fr.sons.accents.035',
    'fr.sons.accents.036',
    'fr.sons.accents.044',
  ],
};

const TREMA_CHECK: LessonSection = {
  id: 's10-check-trema',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'ë: two dots, two syllables',
  say: {
    text: 'Count the syllables rather than the letters.',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'ë: two dots, two syllables',
      items: [],
      check: {
        q: 'How many syllables does « maïs » have?',
        opts: ['one', 'two', 'three'],
        correct: 1,
        why: 'Two. The tréma cancels the normal fusion of ai into one sound, so it is ma-EESS and it means corn. Without the dots, mais is one syllable and means but.',
      },
    },
  ],
};

/* ─── Act 5 · The mark that changes a consonant (missions 17-19) ──────────── */

const CEDILLE_DRILL: LessonSection = {
  id: 's11-cedille',
  type: 'groupDrill',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'ç: the tail that keeps a c soft',
  frSub: 'La cédille',
  terms: ['cedille', 'ipa'],
  say: {
    text: 'Eight words. This is the only mark in the lesson that touches a consonant.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-cedille-six', speeds: [1, 0.65] },
  groups: [
    {
      label: 'Soft c before a, o and u',
      items: [
        item('fr.sons.accents.054', 'without the tail this would be frankay'),
        item('fr.sons.accents.055', 'what you call a waiter, and never gar-KOHN'),
        item('fr.sons.accents.056', 'two letters, and one is doing all the work'),
        item('fr.sons.accents.057', 'what you are in the middle of right now'),
        item('fr.sons.accents.058', 'ask for one of these after you pay'),
        item('fr.sons.accents.059', 'two marks side by side, each with its own job'),
        item('fr.sons.accents.060', 'no tail, and the c is a hard K'),
        item('fr.sons.accents.061', 'no tail needed: the c is soft before an e already'),
      ],
    },
  ],
};

const CEDILLE_RULE: LessonSection = {
  id: 's11-cedille-rule',
  type: 'groupDrill',
  layer: 'core',
  size: 'xl',
  title: 'Contrôle',
  frSub: 'ç: the tail that keeps a c soft',
  say: {
    text: 'Think about which letter comes after the c, not about the word.',
    voice: 'coach',
    timing: 'onEnter',
  },
  groups: [
    {
      label: 'ç: the tail that keeps a c soft',
      items: [],
      check: {
        q: 'Why does « ceci » have no cédille?',
        opts: [
          'because it is a short word',
          'because c before e or i is already soft',
          'because the cédille only goes on a capital C',
          'because it is borrowed from Latin',
        ],
        correct: 1,
        why: 'The tail forces a soft c where a hard one would be, and that only happens before a, o or u. Before e or i the c is soft already, so a cédille there would have no work to do.',
      },
    },
  ],
};

const CEDILLE_ERRORS: LessonSection = {
  id: 's12-errors',
  type: 'commonErrors',
  layer: 'core',
  render: 'screens',
  size: 'lg',
  swipe: true,
  title: 'Six things everyone gets wrong',
  frSub: 'Les erreurs courantes',
  terms: ['accentAigu', 'accentGrave', 'cedille'],
  say: {
    text: 'Six mistakes, each one common enough that you will make at least two of them this week.',
    voice: 'coach',
    timing: 'onEnter',
  },
  errors: [
    {
      wrong: 'writing cafe, ecole, etudiant',
      right: 'café, école, étudiant',
      why: 'Leaving the mark off is not a typing shortcut. The mark is part of the letter, not decoration on it, and a French reader sees a misspelling exactly as you would see cafe written cofe.',
    },
    {
      wrong: 'reading é and è as the same vowel',
      right: '/e/ for é, /ɛ/ for è',
      why: 'é is narrow, the vowel in day with no glide. è is wide and flat, the vowel in bed. des and dès are different words and this is the only thing separating them.',
    },
    {
      wrong: 'saying an English hospital for hôpital',
      right: '/o.pi.tal/, oh-pee-TAL',
      why: 'The circumflex marks where the s used to be, so the s is gone from the mouth as well as the page. Put it back to recognise the word, never to pronounce it.',
    },
    {
      wrong: 'reading maïs as one syllable',
      right: 'ma-EESS, two syllables',
      why: 'The tréma is an instruction about syllables. It cancels the fusion of ai, which is why maïs is corn and mais is but.',
    },
    {
      wrong: 'garcon, francais',
      right: 'garçon, français',
      why: 'Without the tail the c sits before a or o, where French c is a hard /k/. You would be saying gar-KOHN and frankay.',
    },
    {
      wrong: 'hunting for a sound in à and où',
      right: 'they are identical to a and ou',
      why: 'Some marks change nothing you can hear. On an a or a u the grave separates two words on the page, and listening harder will never reveal a difference that is not there.',
    },
  ],
};

/* ─── Act 6 · Bank it (missions 20-24) ────────────────────────────────────── */

const FLASHCARDS: LessonSection = {
  id: 's13-flashcards',
  type: 'flashcards',
  layer: 'core',
  render: 'deck',
  size: 'xl',
  title: 'The words worth banking',
  frSub: 'À retenir',
  terms: ['accentAigu', 'accentGrave', 'cedille'],
  say: {
    text: 'Flip each one. Say it before you turn it over.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-flashcards-twelve', speeds: [1, 0.65] },
  cards: [
    { front: fr('fr.sons.accents.001'), back: back('fr.sons.accents.001') },
    { front: fr('fr.sons.accents.003'), back: back('fr.sons.accents.003') },
    { front: fr('fr.sons.accents.012'), back: back('fr.sons.accents.012') },
    { front: fr('fr.sons.accents.019'), back: back('fr.sons.accents.019') },
    { front: fr('fr.sons.accents.022'), back: back('fr.sons.accents.022') },
    { front: fr('fr.sons.accents.025'), back: back('fr.sons.accents.025') },
    { front: fr('fr.sons.accents.039'), back: back('fr.sons.accents.039') },
    { front: fr('fr.sons.accents.042'), back: back('fr.sons.accents.042') },
    { front: fr('fr.sons.accents.048'), back: back('fr.sons.accents.048') },
    { front: fr('fr.sons.accents.049'), back: back('fr.sons.accents.049') },
    { front: fr('fr.sons.accents.054'), back: back('fr.sons.accents.054') },
    { front: fr('fr.sons.accents.055'), back: back('fr.sons.accents.055') },
    // The words act 6 banks that no earlier drill met. A `flashcards` section
    // carries no itemId field (see the note on the dictation below), so these
    // are the display half only; the corpus JOIN for the same words is made in
    // s15-dictation, which is what the SRS tranche reads.
    { front: fr('fr.sons.accents.004'), back: back('fr.sons.accents.004') },
    { front: fr('fr.sons.accents.010'), back: back('fr.sons.accents.010') },
    { front: fr('fr.sons.accents.015'), back: back('fr.sons.accents.015') },
    { front: fr('fr.sons.accents.016'), back: back('fr.sons.accents.016') },
    { front: fr('fr.sons.accents.017'), back: back('fr.sons.accents.017') },
    { front: fr('fr.sons.accents.062'), back: back('fr.sons.accents.062') },
  ],
};

const EXAMPLES: LessonSection = {
  id: 's14-examples',
  type: 'examples',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  title: 'Ten sentences you can steal',
  frSub: 'Des phrases utiles',
  say: {
    text: 'Ten sentences. Every one of them is something you could say out loud today.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-examples-ten', speeds: [1, 0.65] },
  examples: [
    { fr: 'Un café, s\'il vous plaît.', en: 'A coffee, please.', note: 'The é is why the word does not end silently.' },
    { fr: 'Où est la gare ?', en: 'Where is the station?', note: 'The mark you cannot hear, doing all the work.' },
    { fr: 'Je suis désolé.', en: 'I am sorry.', note: 'Two é, two identical sounds.' },
    { fr: 'Mon frère est étudiant.', en: 'My brother is a student.', note: 'è then é, wide then narrow.' },
    { fr: 'C\'est très bien.', en: 'That is very good.', note: 'The è sounds, the s does not.' },
    { fr: 'Je parle français.', en: 'I speak French.', note: 'The tail keeps the c soft before the a.' },
    { fr: 'Joyeux Noël !', en: 'Merry Christmas!', note: 'Two dots, two syllables: noh-EL.' },
    { fr: 'La forêt est à côté.', en: 'The forest is next door.', note: 'A hat, then a silent grave, then an é.' },
    { fr: 'Où est l\'hôpital ?', en: 'Where is the hospital?', note: 'Put the s back and the English word appears.' },
    { fr: 'Le garçon a une clé.', en: 'The boy has a key.', note: 'A cédille, a bare a, and an é in one sentence.' },
  ],
};

const DICTATION: LessonSection = {
  id: 's15-dictation',
  type: 'dictation',
  layer: 'core',
  render: 'screens',
  size: 'md',
  title: 'Write the mark you hear',
  frSub: 'La dictée',
  terms: ['accentAigu', 'accentGrave'],
  say: {
    text: 'Sixteen words. You get three plays each, then the answer unlocks.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-dictation-ten', maxPlays: 3, speeds: [1, 0.65] },
  // `dictation` is one of the two section types that carry real `itemIds`
  // (the other is `practice`), which makes it the JOIN between this act and
  // the corpus. The flashcards above show six of the same words, but a
  // `flashcards` card is {front, back} strings with no id on it, so a word
  // that appeared ONLY there would be released to the SRS having never been
  // formally taught. Hearing a word and spelling it is the right introduction
  // for the six that had no earlier drill anyway.
  itemIds: [
    'fr.sons.accents.001',
    'fr.sons.accents.003',
    'fr.sons.accents.012',
    'fr.sons.accents.019',
    'fr.sons.accents.022',
    'fr.sons.accents.025',
    'fr.sons.accents.039',
    'fr.sons.accents.042',
    'fr.sons.accents.049',
    'fr.sons.accents.055',
    'fr.sons.accents.004',
    'fr.sons.accents.010',
    'fr.sons.accents.015',
    'fr.sons.accents.016',
    'fr.sons.accents.017',
    'fr.sons.accents.062',
  ],
};

const LISTENING: LessonSection = {
  id: 's16-listening',
  type: 'listening',
  layer: 'core',
  render: 'screens',
  size: 'md',
  questionsInModal: true,
  title: 'A message about the weekend',
  frSub: "À l'écoute",
  say: {
    text: 'Listen once before you read anything. The questions come after.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-listening-passage', speeds: [1, 0.65], audioFirst: true },
  lines: [
    { fr: "Salut ! C'est Émilie.", en: 'Hi! It is Émilie.' },
    { fr: 'Je suis à Paris pour le week-end.', en: 'I am in Paris for the weekend.' },
    { fr: 'On va au cinéma français près de la gare.', en: 'We are going to the French cinema near the station.' },
    { fr: 'Après, un café et un gâteau.', en: 'Afterwards, a coffee and a cake.' },
    { fr: 'Où es-tu ? Tu es libre ?', en: 'Where are you? Are you free?' },
  ],
  questions: [
    {
      q: 'Which word in the message carries a cédille?',
      opts: ['cinéma', 'français', 'café', 'gâteau'],
      correct: 1,
      why: 'français. The tail sits under the c before the a, keeping it soft. Without it the word would open frankay.',
    },
    {
      q: 'She says « Où es-tu ». What is the mark doing there?',
      opts: [
        'changing the vowel sound',
        'splitting two vowels apart',
        'separating où from ou on the page',
        'marking a lost s',
      ],
      correct: 2,
      why: 'Nothing you can hear. où and ou are identical in the mouth, so the grave is telling where apart from or, which the ear cannot do.',
    },
  ],
};

/* ─── Act 7 · Prove it (missions 25-29) ───────────────────────────────────── */

const SPEAK: LessonSection = {
  id: 's17-speak',
  type: 'practice',
  layer: 'core',
  render: 'screens',
  size: 'xl',
  skill: 'speak',
  questionsInModal: true,
  title: 'Say it out loud',
  frSub: 'À vous',
  terms: ['accentAigu', 'accentGrave'],
  say: {
    text: 'Eight words. Say each one and the app scores what it hears.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'mic', speeds: [1, 0.65] },
  itemIds: [
    'fr.sons.accents.001',
    'fr.sons.accents.005',
    'fr.sons.accents.019',
    'fr.sons.accents.026',
    'fr.sons.accents.039',
    'fr.sons.accents.048',
    'fr.sons.accents.054',
    'fr.sons.accents.055',
  ],
};

const SCENARIO: LessonSection = {
  id: 's18-scenario',
  type: 'scenario',
  layer: 'core',
  render: 'screens',
  size: 'md',
  title: 'Back at the station',
  frSub: 'Encore à la gare',
  say: {
    text: 'The same desk, the same question. This time you have the mark.',
    voice: 'coach',
    timing: 'onEnter',
  },
  setting: 'Gare de Lyon, the information desk, one week later',
  turns: [
    { ai: 'Bonjour, je peux vous aider ?', en: 'Hello, can I help you?', user: 'Où est le train pour Lyon ?' },
    { ai: 'Voie huit. Vous avez un billet ?', en: 'Platform eight. Do you have a ticket?', user: "Oui, et j'ai une réservation." },
    { ai: 'Parfait. Le train part à seize heures.', en: 'Perfect. The train leaves at four.', user: 'Merci, vous êtes très gentille.' },
    { ai: 'Je vous en prie. Bon voyage !', en: 'You are welcome. Have a good trip!', user: 'Bonne journée !' },
  ],
};

const READING: LessonSection = {
  id: 's19-reading',
  type: 'reading',
  layer: 'core',
  render: 'screens',
  size: 'md',
  title: 'Sixty words, nineteen marks',
  frSub: 'Lecture',
  terms: ['accentAigu', 'circonflexe', 'cedille'],
  // `questionsInModal` is what mounts ReadingMission instead of the plain
  // ReadingView, and the difference is not cosmetic: ReadingView renders the
  // passage as one block of text and IGNORES `glossary` entirely, so the eight
  // tappable words below would have been authored, schema-valid, and drawn by
  // nothing. ReadingMission highlights each glossed word in the passage, opens
  // its gloss on tap, and gives the questions their own swipeable cards after
  // the reading rather than stacked underneath it.
  questionsInModal: true,
  say: {
    text: 'Read it through once. Tap any highlighted word to unpack it, then answer three questions.',
    voice: 'coach',
    timing: 'onEnter',
  },
  audio: { mode: 'recorded', recordingId: 'rec-reading-passage', speeds: [1, 0.65], perSentenceReplay: true },
  text: "C'est l'été. Émilie est étudiante à Paris et elle adore le cinéma français. Après l'école, elle prend le métro et va au café près de la forêt. Elle commande un thé et un gâteau. Son frère arrive à côté d'elle. « Où est ta clé ? » demande-t-il. Elle est désolée : la clé est restée à l'hôpital.",
  glossary: [
    { word: 'été', en: 'summer', ipa: '/e.te/', note: 'Two marks, one sound, twice.' },
    { word: 'étudiante', en: 'student (f)', ipa: '/e.ty.djɑ̃t/', note: 'The é opens the word.' },
    { word: 'français', en: 'French', ipa: '/fʁɑ̃.sɛ/', note: 'The tail keeps the c soft before the a.' },
    { word: 'métro', en: 'metro', ipa: '/me.tʁo/', note: 'Compare mètre, which is /mɛtʁ/.' },
    { word: 'forêt', en: 'forest', ipa: '/fɔ.ʁɛ/', note: 'Put the s back: forest.' },
    { word: 'gâteau', en: 'cake', ipa: '/ɡɑ.to/', note: 'The hat on an a changes nothing you need to hear.' },
    { word: 'côté', en: 'side', ipa: '/ko.te/', note: 'Two different marks, and only the é changes a sound.' },
    { word: 'hôpital', en: 'hospital', ipa: '/o.pi.tal/', note: 'Another lost s.' },
    { word: 'frère', en: 'brother', ipa: '/fʁɛʁ/', note: 'The è is the wide vowel, the one in bed.' },
    { word: 'thé', en: 'tea', ipa: '/te/', note: 'The h does nothing. The é does everything.' },
    { word: 'clé', en: 'key', ipa: '/kle/', note: 'Three letters, and the mark carries the last one.' },
    { word: 'désolée', en: 'sorry (f)', ipa: '/de.zɔ.le/', note: 'Two é, two identical sounds. The final e is silent.' },
  ],
  // Three questions, asked AFTER the passage rather than beside it.
  //
  // Open questions with an authored answer, which is the shape `reading` takes
  // (the quiz is where multiple choice lives). Each one sends the learner back
  // into the text to find a mark and say what it is doing, so the passage is
  // read for its marks rather than skimmed for its story. That is the whole
  // reason this mission sits after the drills instead of before them.
  questions: [
    {
      q: 'Find the two words in the passage where a circumflex marks a lost s. What are the English words underneath them?',
      a: 'forêt and hôpital, which are forest and hospital. Put the s back after the marked vowel and the English word appears.',
    },
    {
      q: 'The passage has both métro and a word spelled with è. What would change if métro were written mètro?',
      a: 'It would become a different word. métro is /me.tʁo/, the underground. mètre is /mɛtʁ/, the unit of length. The é is narrow, the è is wide.',
    },
    {
      q: 'Only one word in the passage carries a cédille. Which is it, and what would happen without the tail?',
      a: 'français. Without the tail the c sits before an a, where a bare c is a hard /k/, so the word would read frankay.',
    },
  ],
};

const REVIEW: LessonSection = {
  id: 's20-review',
  type: 'reviewDeck',
  layer: 'core',
  render: 'deck',
  size: 'lg',
  title: 'The system, not the words',
  frSub: 'Le système',
  terms: ['accentAigu', 'trema', 'cedille'],
  say: {
    text: 'Six cards. These are rules rather than words, and they are what you keep.',
    voice: 'coach',
    timing: 'onEnter',
  },
  cards: [
    { front: 'What does é sound like?', back: '/e/, the vowel in day with no glide. Always, on every word, with no exceptions.' },
    { front: 'What does è sound like?', back: '/ɛ/, the vowel in bed. Wider and flatter than é, and your jaw drops for it.' },
    { front: 'What does a circumflex usually tell you?', back: 'That an s used to be there. hôpital was hospital, forêt was forest, fête was feast.' },
    { front: 'What does a tréma do?', back: 'It splits two vowels into two syllables. mais is one syllable, maïs is two.' },
    { front: 'When do you need a cédille?', back: 'Only before a, o or u, where a bare c would be a hard /k/. Never before e or i.' },
    { front: 'Which marks change nothing you can hear?', back: 'The grave on a and u, and the hat on a, i and u. They separate words on the page. ' + REFRAME },
  ],
};

const PROGRESS: LessonSection = {
  id: 's21-progress',
  type: 'progressCheck',
  layer: 'core',
  render: 'screens',
  size: 'md',
  title: 'Where you are',
  frSub: 'Votre progression',
  say: {
    text: 'One page before the test. This is what you have covered.',
    voice: 'coach',
    timing: 'onEnter',
  },
  body: 'You have met all five marks and the four jobs they do. The quiz ahead is thirty questions in four rounds, and a round you fail hands you its drill before the next one starts rather than a verdict at the very end.',
  stats: [
    { k: 'Marks covered', v: 'é è ê ë ç, plus à ù â î ô û ï' },
    { k: 'Words banked', v: '62' },
    { k: 'Minimal pairs', v: '5' },
    { k: 'Questions ahead', v: '30, in 4 rounds' },
  ],
};

/* ─── The quiz ────────────────────────────────────────────────────────────── */

// Thirty questions in four rounds, sized to the lesson rather than to a target.
// Each round is a themed pass tied to the error trigger it scores against, so a
// failed round fires that trigger's drill before the next round starts. Every
// question carries a `why` that teaches the RULE and a `ref` naming the mission
// that taught it: the density validator requires both, and sons.02, sons.03,
// a2.01 and a1.04 are on a documented waiver list for exactly this gap. This
// lesson does not join them.

const ROUND_VOWEL: QuizRound = {
  id: 'round1',
  label: 'Marks that change the vowel',
  targets: ['err-vowel'],
  say: { text: 'Round one. é against è, and the hat that sounds like è.', voice: 'coach', timing: 'onEnter' },
  questions: [
    {
      q: 'How is « café » pronounced?',
      opts: ['/ka.fe/', '/kaf/', '/ka.fɛ/'],
      correct: 0,
      format: 'mcq',
      why: 'The é is /e/, the vowel in day. Without the mark the final e would be silent and the word would be /kaf/.',
      ref: 's05-aigu',
    },
    {
      q: 'Which letter can carry an accent aigu?',
      opts: ['e only', 'a and e', 'every vowel', 'e and o'],
      correct: 0,
      format: 'mcq',
      why: 'e and nothing else. That is what makes é the most reliable mark in French: one letter, one sound, no exceptions to learn.',
      ref: 's05-aigu',
    },
    {
      q: 'Which word contains the /ɛ/ vowel, the one in bed?',
      opts: ['été', 'métro', 'père', 'clé'],
      correct: 2,
      format: 'mcq',
      why: 'père /pɛʁ/. The grave on an e opens the vowel wide. The other three all carry é, which is the narrower /e/.',
      ref: 's06-grave',
    },
    {
      q: 'Type the IPA vowel that « è » makes.',
      format: 'typeIn',
      accept: ['ɛ', '/ɛ/', 'eh'],
      answer: '/ɛ/',
      why: 'è is /ɛ/, wide and flat, the vowel in the English word bed. é is /e/, narrower, the vowel in day.',
      ref: 's06-grave',
    },
    {
      q: 'What does the circumflex in « forêt » tell you?',
      opts: [
        'the word is borrowed from English',
        'an s used to sit after the vowel',
        'the last syllable is stressed',
        'the t is pronounced',
      ],
      correct: 1,
      format: 'mcq',
      why: 'forest lost its s and gained a hat. The trick works on hôpital, fête and île too, which is why a circumflex is often a free translation.',
      ref: 's07-circonflexe',
    },
    {
      q: 'Which of these is NOT a lost-s circumflex?',
      opts: ['hôpital', 'forêt', 'être', 'fête'],
      correct: 2,
      format: 'mcq',
      why: 'être is simply spelled that way and has no English cousin with an s. hospital, forest and feast all kept theirs, which is what makes the trick worth trying first.',
      ref: 's07-circonflexe',
    },
    {
      q: 'You hear /de/. Which word is it?',
      format: 'listenChoose',
      opts: ['des', 'dès'],
      correct: 0,
      audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', clip: 'des' },
      why: 'des is /de/, the narrow vowel, and it means some. dès is /dɛ/, wide, and it means from. Here the grave really does change the sound.',
      ref: 's08-pairs',
    },
    {
      q: 'Spot the error: « Je prends le mètro. »',
      format: 'errorSpot',
      accept: ['mètro', 'metro', 'è', 'the è'],
      answer: 'mètro should be métro',
      why: 'The underground is métro, with an é: /me.tʁo/. mètre with a grave is the unit of length, /mɛtʁ/. One mark apart, two unrelated words.',
      ref: 's08-pairs',
    },
  ],
};

const ROUND_SILENT: QuizRound = {
  id: 'round2',
  label: 'Marks you cannot hear',
  targets: ['err-silent'],
  say: { text: 'Round two. The marks that change nothing in the mouth.', voice: 'coach', timing: 'onEnter' },
  questions: [
    {
      q: 'How does « où » sound compared to « ou »?',
      opts: ['longer', 'wider', 'exactly the same', 'with a w at the front'],
      correct: 2,
      format: 'mcq',
      why: 'Identical. The grave on a u changes nothing you can hear: it exists only to separate where from or on the page.',
      ref: 's09-silent-marks',
    },
    {
      q: 'Il ___ trente ans.',
      opts: ['a', 'à'],
      correct: 0,
      format: 'mcq',
      why: 'a with no mark is the verb, he has. à with the grave is the preposition, to or at. They sound the same, so only the grammar chooses.',
      ref: 's09-silent-marks',
    },
    {
      q: 'Je vais ___ Paris.',
      opts: ['a', 'à'],
      correct: 1,
      format: 'mcq',
      why: 'Going TO somewhere takes à. The bare a is the verb form of avoir, which would make this sentence say I go has Paris.',
      ref: 's09-silent-marks',
    },
    {
      q: 'What is the difference between « sur » and « sûr » when spoken?',
      opts: ['none at all', 'the vowel is longer', 'the r is silent', 'the u is nasal'],
      correct: 0,
      format: 'mcq',
      why: 'Nothing. Both are /syʁ/. The hat marks the s that dropped out of the old spelling, and it separates on from sure on the page only.',
      ref: 's09-silent-marks',
    },
    {
      q: 'Type the word that means where.',
      format: 'typeIn',
      accept: ['où'],
      answer: 'où',
      why: 'où, with the grave. It is the only French word that uses a grave on a u, and writing ou instead gives you the word for or.',
      ref: 's09-silent-marks',
    },
    {
      q: 'If two spellings sound identical, the mark is:',
      opts: [
        'optional in casual writing',
        'carrying meaning rather than sound',
        'marking the stressed syllable',
        'a printing convention',
      ],
      correct: 1,
      format: 'mcq',
      why: 'It is doing grammar. ' + REFRAME + ' Leaving it off does not write the word less carefully, it writes a different word.',
      ref: 's09-check-silent',
    },
    {
      q: 'Say the pair: « sur, sûr ».',
      format: 'speak',
      target: 'sur, sûr',
      ipa: '/syʁ syʁ/',
      scoreSegment: 'syʁ',
      why: 'Both halves must come out identical. Any audible difference means you are inventing a sound the mark does not make.',
      ref: 's09-silent-marks',
    },
    {
      q: 'Which mark does « gâteau » carry, and what does it change?',
      opts: [
        'a grave, and it changes the vowel',
        'a circumflex, and it changes almost nothing',
        'a tréma, and it splits the vowels',
        'a cédille, and it softens the g',
      ],
      correct: 1,
      format: 'mcq',
      why: 'A circumflex on an a. It marks a lost s, and most speakers make no audible difference at all. A cédille never goes on a g, and there is no tréma here.',
      ref: 's09-silent-marks',
    },
  ],
};

const ROUND_TREMA: QuizRound = {
  id: 'round3',
  label: 'The mark that splits',
  targets: ['err-trema'],
  say: { text: 'Round three. Two dots, and what they do to a syllable.', voice: 'coach', timing: 'onEnter' },
  questions: [
    {
      q: 'How many syllables in « maïs »?',
      opts: ['one', 'two', 'three'],
      correct: 1,
      format: 'mcq',
      why: 'Two: ma-EESS. The tréma cancels the fusion of ai into a single sound, which is the whole reason the dots are there.',
      ref: 's10-trema',
    },
    {
      q: 'How many syllables in « mais »?',
      opts: ['one', 'two', 'three'],
      correct: 0,
      format: 'mcq',
      why: 'One: /mɛ/. With no dots, ai behaves normally and fuses into a single vowel. This is the word that means but.',
      ref: 's10-trema',
    },
    {
      q: 'What is a tréma an instruction about?',
      opts: [
        'which syllable is stressed',
        'whether the consonant is soft',
        'the length of the vowel',
        'how many syllables there are',
      ],
      correct: 3,
      format: 'mcq',
      why: 'Syllable count. Every other mark in this lesson is about a sound or about telling words apart. The tréma alone is about how many vowels you actually say.',
      ref: 's10-trema',
    },
    {
      q: 'How is « Noël » said?',
      opts: ['/nɔɛl/ as one syllable', '/nwal/', '/nɔ.ɛl/, noh-EL'],
      correct: 2,
      format: 'mcq',
      why: 'Two syllables, noh-EL. Without the dots the oe would fuse, which is exactly what the tréma is there to prevent.',
      ref: 's10-trema',
    },
    {
      q: 'Type the French word for corn.',
      format: 'typeIn',
      accept: ['maïs'],
      answer: 'maïs',
      why: 'maïs, with the dots on the i. Spelling it mais gives you the word for but, and drops the word to one syllable.',
      ref: 's10-trema',
    },
    {
      q: 'Which word carries a tréma?',
      opts: ['forêt', 'garçon', 'préféré', 'égoïste'],
      correct: 3,
      format: 'mcq',
      why: 'égoïste, on the i: ay-goh-EEST. It carries two marks doing two different jobs, since the é makes a sound and the ï splits one.',
      ref: 's10-trema',
    },
    {
      q: 'Say it: « maïs ».',
      format: 'speak',
      target: 'maïs',
      ipa: '/ma.is/',
      scoreSegment: 'ma.is',
      why: 'Two clean syllables with a break between them. If it comes out as one, you have said but rather than corn.',
      ref: 's10-trema',
    },
    {
      q: 'Tap the letters in « Noël » that carry a mark.',
      format: 'tapSilent',
      word: 'Noël',
      correct: 'ë',
      why: 'Only the ë. The two dots sit on the e and force it into its own syllable, away from the o in front of it.',
      ref: 's10-trema',
    },
  ],
};

const ROUND_CEDILLE: QuizRound = {
  id: 'round4',
  label: 'The mark on a consonant',
  targets: ['err-cedille'],
  say: { text: 'Round four. The only mark in the lesson that is not on a vowel.', voice: 'coach', timing: 'onEnter' },
  questions: [
    {
      q: 'What does the cédille do in « français »?',
      opts: [
        'makes the c a soft s',
        'makes the c a hard k',
        'silences the c',
        'stresses the last syllable',
      ],
      correct: 0,
      format: 'mcq',
      why: 'It forces the soft /s/. The c sits before an a, where a bare c would be /k/, so without the tail the word would open frankay.',
      ref: 's11-cedille',
    },
    {
      q: 'Before which letters can a cédille appear?',
      opts: ['a, o, u', 'e, i, y', 'any vowel', 'only a'],
      correct: 0,
      format: 'mcq',
      why: 'a, o and u, the three that make a c hard. Before e or i the c is already soft, so the tail would have nothing to do.',
      ref: 's11-cedille-rule',
    },
    {
      q: 'Why does « ceci » never take a cédille?',
      opts: [
        'it is too short',
        'the c is already soft before e',
        'the cédille only goes on capitals',
        'it is a borrowed word',
      ],
      correct: 1,
      format: 'mcq',
      why: 'c before e or i is soft with no help. The cédille exists only to override a HARD c, and there is no hard c here to override.',
      ref: 's11-cedille-rule',
    },
    {
      q: 'How would « garcon », written without the tail, be read?',
      opts: ['gar-SOHⁿ', 'gar-KOHⁿ', 'gar-SHOHⁿ'],
      correct: 1,
      format: 'mcq',
      why: 'gar-KOHⁿ. The c sits before an o, so with no cédille it is a hard /k/. The tail is what makes the word sound like the one you say to a waiter.',
      ref: 's11-cedille',
    },
    {
      q: 'Type the French word for boy.',
      format: 'typeIn',
      accept: ['garçon'],
      answer: 'garçon',
      why: 'garçon, with the tail under the c. Writing garcon changes the consonant, not just the look of it.',
      ref: 's11-cedille',
    },
    {
      q: 'Which word does NOT need a cédille?',
      opts: ['franc_ais', 'gar_on', 'le_on', 'ceci'],
      correct: 3,
      format: 'mcq',
      why: 'ceci. Its c comes before an e, so it is soft already. The other three all have a c before a or o and would go hard without the tail.',
      ref: 's11-cedille-rule',
    },
    {
      q: 'Spot the error: « Je parle francais. »',
      format: 'errorSpot',
      accept: ['francais', 'français', 'ç', 'the c', 'the cedille'],
      answer: 'francais should be français',
      why: 'The c needs its tail before the a. Without it the word reads frankay, which is not a word in any language.',
      ref: 's12-errors',
    },
    {
      q: 'Say it: « Je parle français ».',
      format: 'speak',
      target: 'Je parle français',
      ipa: '/ʒə paʁl fʁɑ̃.sɛ/',
      scoreSegment: 'fʁɑ̃.sɛ',
      why: 'The last word must land on a soft /s/ and a wide /ɛ/. A hard k anywhere in it means the cédille did not reach your mouth.',
      ref: 's12-errors',
    },
  ],
};

const QUIZ: LessonSection = {
  id: 's22-quiz',
  type: 'quiz',
  layer: 'core',
  render: 'screens',
  size: 'lg',
  title: 'Thirty-two questions',
  frSub: 'Le test',
  passMark: 70,
  adaptive: true,
  roundFailThreshold: 60,
  say: {
    text: 'Four rounds. Fail one and you get its drill before the next round starts.',
    voice: 'coach',
    timing: 'onEnter',
  },
  rounds: [ROUND_VOWEL, ROUND_SILENT, ROUND_TREMA, ROUND_CEDILLE],
};

const ROUNDUP: LessonSection = {
  id: 's23-roundup',
  type: 'roundup',
  layer: 'core',
  render: 'screens',
  size: 'md',
  title: 'What you take with you',
  frSub: 'À retenir',
  terms: ['accentAigu', 'cedille', 'trema'],
  say: {
    text: 'One idea and four rules. That is the whole lesson.',
    voice: 'coach',
    timing: 'onEnter',
  },
  body:
    REFRAME +
    ' Every mark in French is answering one of four questions: does it change the vowel, the syllable, the consonant, or nothing at all? You now have all four answers, which means you can read a marked word you have never seen and get it close to right on the first attempt.',
  points: [
    'é is /e/, always. è and ê are /ɛ/, wider and flatter.',
    'A circumflex usually marks a lost s, so put one back and look for the English word.',
    'A tréma splits two vowels into two syllables: maïs is corn, mais is but.',
    'A cédille keeps a c soft before a, o or u, and is never needed before e or i.',
  ],
};

/* ─── Reference sheets ────────────────────────────────────────────────────── */

// Everything pulled out of the flow has to live somewhere findable, or it
// creeps back in. Sheets are layer 'deep': scrollable, and the one place in the
// product where a table is the right shape.

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.sons.05.grid',
    title: 'Every French mark, one table',
    layer: 'deep',
    contains: ['the full 12-row mark grid', 'what each mark changes', 'which letters each one can sit on'],
    sections: [
      {
        id: 'sheet-grid-full',
        type: 'letterGrid',
        layer: 'deep',
        title: 'All twelve marked letters',
        say: 'Tap any row to open it.',
        letters: GRID_LETTERS,
      },
      {
        id: 'sheet-grid-jobs',
        type: 'table',
        layer: 'deep',
        title: 'The four jobs a mark can do',
        cols: ['Job', 'Marks', 'Example', 'What changes'],
        rows: [
          ['Changes the vowel', 'é è ê', 'café, père, fête', 'which vowel comes out of your mouth'],
          ['Changes the syllable', 'ë ï', 'Noël, maïs', 'how many vowels you say'],
          ['Changes the consonant', 'ç', 'français', 'a hard /k/ becomes a soft /s/'],
          ['Changes nothing audible', 'à ù â î û', 'à, où, sûr, île', 'which word it is, on the page only'],
        ],
      },
    ],
  },
  {
    id: 'sheet.sons.05.pairs',
    title: 'Minimal pairs: the mark is the only difference',
    layer: 'deep',
    contains: ['pairs that sound the same', 'pairs that sound different', 'why both kinds matter'],
    sections: [
      {
        id: 'sheet-pairs-intro',
        type: 'teach',
        layer: 'deep',
        title: 'Two kinds of pair',
        say: 'There are two kinds, and they fail in different ways.',
        body: 'Some pairs sound identical and are told apart only on the page: a and à, ou and où, sur and sûr. Getting those wrong is a writing error, and no amount of listening will help you. Other pairs genuinely differ in sound: des and dès, métro and mètre, mais and maïs. Getting those wrong is a speaking error, and the fix is your ear. Knowing which kind you are looking at tells you which skill to use.',
      },
      {
        id: 'sheet-pairs-same',
        type: 'table',
        layer: 'deep',
        title: 'Identical in the mouth',
        cols: ['Without', 'With', 'Sound', 'Meanings'],
        rows: [
          ['a', 'à', '/a/', 'has  ·  to, at'],
          ['ou', 'où', '/u/', 'or  ·  where'],
          ['sur', 'sûr', '/syʁ/', 'on  ·  sure'],
        ],
      },
      {
        id: 'sheet-pairs-different',
        type: 'table',
        layer: 'deep',
        title: 'Different in the mouth',
        cols: ['Word', 'Sound', 'Word', 'Sound'],
        rows: [
          ['des', '/de/, some', 'dès', '/dɛ/, from'],
          ['métro', '/me.tʁo/, metro', 'mètre', '/mɛtʁ/, metre'],
          ['mais', '/mɛ/, but', 'maïs', '/ma.is/, corn'],
        ],
      },
    ],
  },
  {
    id: 'sheet.sons.05.circonflexe',
    title: 'The circumflex and the missing s',
    layer: 'deep',
    contains: ['the lost-s list', 'the English cousin of each', 'the ones that are not lost-s'],
    sections: [
      {
        id: 'sheet-circ-intro',
        type: 'teach',
        layer: 'deep',
        title: 'Why the hat is a gift to an English reader',
        say: 'This is the single most useful reading trick in the lesson.',
        body: 'French dropped an s from a large number of words between the eleventh and eighteenth centuries and marked the gap with a circumflex. English borrowed many of those same words from French BEFORE the s left, and kept it. So the hat is frequently a pointer at an English word you already know. Cover the mark, imagine an s directly after the vowel, and read what you get.',
      },
      {
        id: 'sheet-circ-list',
        type: 'table',
        layer: 'deep',
        title: 'Put the s back',
        cols: ['French', 'With the s', 'English', 'Sound'],
        rows: [
          ['hôpital', 'hospital', 'hospital', '/o.pi.tal/'],
          ['forêt', 'forest', 'forest', '/fɔ.ʁɛ/'],
          ['fête', 'feste', 'feast', '/fɛt/'],
          ['île', 'isle', 'isle, island', '/il/'],
          ['château', 'chasteau', 'castle', '/ʃɑ.to/'],
          ['goût', 'goust', 'gusto, taste', '/ɡu/'],
          ['tête', 'teste', 'test, tester', '/tɛt/'],
        ],
      },
      {
        id: 'sheet-circ-exceptions',
        type: 'teach',
        layer: 'deep',
        title: 'When the trick does not work',
        say: 'It is a strong pattern, not a law.',
        body: 'Some circumflexes mark a lost vowel rather than a lost s (âge was aage), and some simply distinguish two words (sûr from sur, dû from du). être has no s in its history at all. Try the s first, because it works far more often than not, and drop it when the result is not a word.',
      },
    ],
  },
  {
    id: 'sheet.sons.05.notation',
    title: 'How to read the sounds in this course',
    layer: 'deep',
    contains: ['IPA in slashes', 'respelling in brackets', 'the nasal superscript', 'the vowel key'],
    sections: [
      {
        id: 'sheet-notation-intro',
        type: 'teach',
        layer: 'deep',
        title: 'Two notations, two jobs',
        say: 'When the two disagree, trust the IPA.',
        body: TERMS.ipa.body,
      },
      {
        id: 'sheet-notation-vowels',
        type: 'table',
        layer: 'deep',
        title: 'The vowels in this lesson',
        cols: ['IPA', 'Respelling', 'English anchor', 'French example'],
        rows: [
          ['/e/', 'AY', 'day, with no glide at the end', 'café'],
          ['/ɛ/', 'EH', 'bed', 'père'],
          ['/a/', 'A', 'father, short', 'ça'],
          ['/i/', 'EE', 'see', 'île'],
          ['/o/', 'OH', 'boat', 'hôpital'],
          ['/u/', 'OO', 'food', 'où'],
          ['/y/', 'Ü', 'no English equivalent: say EE with rounded lips', 'sûr'],
        ],
      },
      {
        id: 'sheet-notation-nasal',
        type: 'table',
        layer: 'deep',
        title: 'The nasal superscript',
        cols: ['IPA', 'Respelling', 'Example', 'Warning'],
        rows: [
          ['/ɑ̃/', 'AHⁿ', 'français', 'the raised n means nasal, never say an N'],
          ['/ɔ̃/', 'OHⁿ', 'garçon', 'the same: the vowel goes through the nose'],
          ['/ɛ̃/', 'EHⁿ', 'américain', 'and again, no N sound at the end'],
        ],
      },
    ],
  },
];

/* ─── Error triggers and their drills ─────────────────────────────────────── */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-vowel',
    description: 'Reads é and è as the same vowel, or ignores the mark entirely: says /kaf/ for café, /me.tʁo/ for mètre.',
    detectOn: ['s05-aigu', 's06-grave', 's08-pairs', 's22-quiz'],
    drill: 'drill-vowel',
    retest: 'retest-vowel',
  },
  {
    id: 'err-silent',
    description: 'Hunts for a sound in à, où or sûr that is not there, or writes a where à is needed because they sound alike.',
    detectOn: ['s09-silent-marks', 's22-quiz'],
    drill: 'drill-silent',
    retest: 'retest-silent',
  },
  {
    id: 'err-trema',
    description: 'Fuses a tréma vowel into one syllable: reads maïs as mais, or Noël as a single sound.',
    detectOn: ['s10-trema', 's22-quiz'],
    drill: 'drill-trema',
    retest: 'retest-trema',
  },
  {
    id: 'err-cedille',
    description: 'Drops the cédille and hardens the c (frankay for français), or adds one before e or i where it can never appear.',
    detectOn: ['s11-cedille', 's12-errors', 's22-quiz'],
    drill: 'drill-cedille',
    retest: 'retest-cedille',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-vowel',
    title: 'Narrow or wide',
    size: 'lg',
    format: 'listenChoose',
    coach: 'Three pairs. In each one, only the mark is different. Pick the one you hear.',
    pairs: [
      ['des', 'dès'],
      ['métro', 'mètre'],
      ['été', 'êtes'],
    ],
    audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', audioFirst: true },
  },
  {
    id: 'retest-vowel',
    title: 'One more time',
    format: 'mcq',
    q: 'The é in « café » is:',
    opts: ['/e/, the vowel in day', '/ɛ/, the vowel in bed'],
    correct: 0,
    why: 'é is always /e/, narrow. è is the wide one.',
  },
  {
    id: 'drill-silent',
    title: 'Which one belongs here',
    size: 'lg',
    format: 'sort',
    coach: 'Six words. Sort them by whether the mark changes anything you can hear.',
    items: [
      'fr.sons.accents.034',
      'fr.sons.accents.032',
      'fr.sons.accents.036',
      'fr.sons.accents.019',
      'fr.sons.accents.038',
      'fr.sons.accents.001',
    ],
    buckets: ['changes the sound', 'changes nothing audible'],
  },
  {
    id: 'retest-silent',
    title: 'One more time',
    format: 'mcq',
    q: 'Compared to « ou », the word « où » sounds:',
    opts: ['longer', 'exactly the same'],
    correct: 1,
    why: 'A grave on a u changes nothing you can hear.',
  },
  {
    id: 'drill-trema',
    title: 'One syllable or two',
    size: 'xl',
    format: 'speak',
    coach: 'Say each pair. The first is one syllable, the second is two. Make the break audible.',
    pairs: [
      ['mais', 'maïs'],
      ['noel', 'Noël'],
      ['naif', 'naïf'],
    ],
    audio: { mode: 'recorded', recordingId: 'rec-trema-five' },
  },
  {
    id: 'retest-trema',
    title: 'One more time',
    format: 'mcq',
    q: 'How many syllables in « maïs »?',
    opts: ['one', 'two'],
    correct: 1,
    why: 'The tréma splits ai apart: ma-EESS.',
  },
  {
    id: 'drill-cedille',
    title: 'Tail or no tail',
    size: 'lg',
    format: 'sort',
    coach: 'Six words. Sort them by whether the c needs a cédille to stay soft.',
    items: [
      'fr.sons.accents.054',
      'fr.sons.accents.055',
      'fr.sons.accents.057',
      'fr.sons.accents.060',
      'fr.sons.accents.061',
      'fr.sons.accents.056',
    ],
    buckets: ['needs the tail', 'soft already'],
  },
  {
    id: 'retest-cedille',
    title: 'One more time',
    format: 'mcq',
    q: 'A cédille can appear before:',
    opts: ['e and i', 'a, o and u'],
    correct: 1,
    why: 'Only where a bare c would be hard.',
  },
];

/* ─── Audio: the studio brief ─────────────────────────────────────────────── */

// Every recordingId a card references is declared here with a brief the studio
// can act on. Until a clip is delivered, each one falls back to device TTS, so
// the lesson runs today and improves later with no content change. That is the
// correct shipping state: CLIP_MANIFEST is empty by design and a recordingId
// resolving to nothing is not a bug.

const AUDIO: Lesson['audio'] = {
  defaultLang: 'fr-FR',
  speeds: [1.0, 0.65],
  coachVoice: 'coach-en-warm',
  ambienceDefault: 'off',
  interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
  recorded: [
    {
      id: 'rec-scene-break',
      desc: 'The station break beat: « ou » read flat as an English reader writes it, then « où » in the agent\'s own delivery. Both must be acoustically identical, which is the point of the beat.',
      clipIds: ['ou', 'ou-grave'],
    },
    {
      id: 'rec-aigu-nine',
      desc: 'café, été, école, métro, télé, clé, thé, santé, idée, désolé, préféré, cinéma, étudiant. Isolated, 900ms gaps, the é clearly /e/ with no glide onto an English AY diphthong.',
      clipIds: ['cafe', 'ete', 'ecole', 'metro', 'tele', 'cle', 'the', 'sante', 'idee', 'desole', 'prefere', 'cinema', 'etudiant'],
    },
    {
      id: 'rec-grave-eight',
      desc: 'père, mère, frère, très, après, élève, chèvre, bière, première, collège, sincère. Isolated, 900ms gaps, the è audibly wider than the é set above. Record back to back with rec-aigu-nine in one session so the contrast is real.',
      clipIds: ['pere', 'mere', 'frere', 'tres', 'apres', 'eleve', 'chevre', 'biere', 'premiere', 'college', 'sincere'],
    },
    {
      id: 'rec-circonflexe-six',
      desc: 'fête, tête, forêt, hôpital, être, château, île, goût. Isolated, 900ms gaps. No trace of an s anywhere, which learners expect to hear once told the mark replaced one.',
      clipIds: ['fete', 'tete', 'foret', 'hopital', 'etre', 'chateau', 'ile', 'gout'],
    },
    {
      id: 'rec-minimal-pairs',
      desc: 'des/dès, métro/mètre, mais/maïs, a/à, ou/où, sur/sûr. Each pair twice: separately, then back to back with a 400ms gap. The last three pairs must be indistinguishable, and that is the take to keep.',
      clipIds: ['des', 'des-grave', 'metro', 'metre', 'mais', 'mais-trema', 'a', 'a-grave', 'ou', 'ou-grave', 'sur', 'sur-hat'],
    },
    {
      id: 'rec-silent-pairs',
      desc: 'a/à, ou/où, sur/sûr, gâteau. The three pairs must be identical takes in every measurable way. If the two halves differ the recording teaches the opposite of the mission.',
      clipIds: ['a', 'a-grave', 'ou', 'ou-grave', 'sur', 'sur-hat', 'gateau'],
    },
    {
      id: 'rec-trema-five',
      desc: 'mais, maïs, Noël, naïf, égoïste, Haïti. The split syllables audibly separated with a light glottal break, so ma-EESS never collapses into MEH.',
      clipIds: ['mais', 'mais-trema', 'noel', 'naif', 'egoiste', 'haiti'],
    },
    {
      id: 'rec-cedille-six',
      desc: 'français, garçon, ça, leçon, reçu, déçu, carte, ceci. The first six on a clean /s/, carte on a hard /k/ and ceci on a soft c with no tail, so the whole contrast is on one tape.',
      clipIds: ['francais', 'garcon', 'ca', 'lecon', 'recu', 'decu', 'carte', 'ceci'],
    },
    {
      id: 'rec-flashcards-twelve',
      desc: 'The eighteen flashcard words, normal speed and 0.65, isolated with 900ms gaps.',
    },
    {
      id: 'rec-examples-ten',
      desc: 'All 10 example sentences, normal and 0.65 speed, natural connected delivery rather than word by word.',
    },
    {
      id: 'rec-dictation-ten',
      desc: 'All 16 dictation words, normal speed only, one clean take each. No slow pass: the dictation caps replays at three and a slow version would defeat the exercise.',
    },
    {
      id: 'rec-listening-passage',
      desc: 'The 5-line weekend message, normal and slow, plus per-line stems. Read as a voice note from a friend, not as a newsreader.',
    },
    {
      id: 'rec-reading-passage',
      desc: 'The 60-word reading passage, one take at normal speed, plus per-sentence stems for tap-to-replay.',
    },
  ],
};

/* ─── Narration: the spoken lesson ────────────────────────────────────────── */

// The Phase-7 script. Stages must appear in NARRATION_STAGES order
// (warm, focus, input, practice, produce, check, cheat), and every itemId in an
// interaction resolves against this lesson's own corpus. ratioEnFr is 0.7, the
// authored target for the sons band: English scaffolding heavy, French content
// carried by the items.

const NARRATION: Lesson['narration'] = {
  camilleVoiceId: 'camille-fr-ca-01',
  ratioEnFr: 0.7,
  stages: [
    {
      stage: 'warm',
      segments: [
        { voice: 'en', text: 'I am Liam, and this lesson is the five accent marks French uses, and what each one actually changes.' },
        { voice: 'en', text: 'Here is the idea the whole lesson hangs on. ' + REFRAME },
        { voice: 'fr', text: 'café' },
        { voice: 'en', text: 'That mark is not a flourish on the e. It is the reason you hear the last syllable at all.' },
        { kind: 'repeat', itemId: 'fr.sons.accents.001' },
      ],
    },
    {
      stage: 'focus',
      segments: [
        { voice: 'en', text: 'Four questions cover every mark in the language. Does it change the vowel, the syllable, the consonant, or nothing at all?' },
        { voice: 'en', text: 'Start with the vowel. The rising stroke, on an e, is always the same sound.' },
        { voice: 'fr', text: 'été' },
        { voice: 'en', text: 'Two marks, one sound, twice. Now the falling stroke, which is wider and flatter.' },
        { voice: 'fr', text: 'père' },
      ],
    },
    {
      stage: 'input',
      segments: [
        { voice: 'en', text: 'Listen to the two of them side by side. Narrow first, then wide.' },
        { voice: 'fr', text: 'métro' },
        { voice: 'fr', text: 'mètre' },
        { voice: 'en', text: 'One mark apart, and two unrelated words: the underground, and the unit of length.' },
        { voice: 'en', text: 'The hat is different again. It usually marks an s that dropped out, and English often kept it.' },
        { voice: 'fr', text: 'hôpital' },
        { voice: 'en', text: 'Cover the hat, put an s back, and there is your English word.' },
      ],
    },
    {
      stage: 'practice',
      segments: [
        { voice: 'en', text: 'Your turn. Say each one after me.' },
        { kind: 'repeat', itemId: 'fr.sons.accents.003' },
        { kind: 'repeat', itemId: 'fr.sons.accents.019' },
        { kind: 'repeat', itemId: 'fr.sons.accents.039' },
        { voice: 'en', text: 'Two dots next. They are not about a sound, they are about how many syllables you say.' },
        { voice: 'fr', text: 'maïs' },
        { kind: 'repeat', itemId: 'fr.sons.accents.049' },
      ],
    },
    {
      stage: 'produce',
      segments: [
        { voice: 'en', text: 'Now without me. How do you say the word for boy, with the tail under the c?' },
        { kind: 'produce', itemId: 'fr.sons.accents.055', expected: 'garçon', gradeAs: 'produce' },
        { voice: 'en', text: 'And the word for school.' },
        { kind: 'produce', itemId: 'fr.sons.accents.003', expected: 'école', gradeAs: 'produce' },
        { voice: 'en', text: 'One more. The word for Christmas, and remember it is two syllables.' },
        { kind: 'produce', itemId: 'fr.sons.accents.048', expected: 'Noël', gradeAs: 'produce' },
      ],
    },
    {
      stage: 'check',
      segments: [
        { voice: 'en', text: 'Two checks. First, one of these two sounds different from the other. Say the one that means from, rather than some.' },
        { kind: 'check', itemId: 'fr.sons.accents.038', expected: 'dès', gradeAs: 'discriminate' },
        { voice: 'en', text: 'Now the harder kind. These two sound identical, so say the one that means where.' },
        { kind: 'check', itemId: 'fr.sons.accents.032', expected: 'où', gradeAs: 'discriminate' },
      ],
    },
    {
      stage: 'cheat',
      segments: [
        { voice: 'en', text: 'Four rules worth keeping. é is narrow, è and ê are wide.' },
        { voice: 'en', text: 'A hat usually means a lost s, so put one back and look for the English word.' },
        { voice: 'en', text: 'Two dots mean two syllables. A tail under a c keeps it soft before a, o or u.' },
        { voice: 'en', text: 'And when a mark changes nothing you can hear, it is still doing a job. ' + REFRAME },
        { voice: 'fr', text: 'À bientôt.' },
      ],
    },
  ],
};

/* ─── The section list ────────────────────────────────────────────────────── */

const SECTIONS: LessonSection[] = [
  // Act 1 · Why this matters
  SCENE,
  GOALS,
  ANCHORS,
  GRID,
  // Act 2 · Marks that change the vowel
  AIGU_DRILL,
  AIGU_CHECK,
  GRAVE_DRILL,
  GRAVE_CHECK,
  CIRCONFLEXE_DRILL,
  CIRCONFLEXE_CHECK,
  PAIRS_LAB,
  PAIRS_CHECK,
  // Act 3 · The mark that changes nothing
  SILENT_MARKS,
  SILENT_PRACTICE,
  SILENT_CHECK,
  // Act 4 · The mark that changes the syllable
  TREMA_DRILL,
  TREMA_CHECK,
  // Act 5 · The mark that changes a consonant
  CEDILLE_DRILL,
  CEDILLE_RULE,
  CEDILLE_ERRORS,
  // Act 6 · Bank it
  FLASHCARDS,
  EXAMPLES,
  DICTATION,
  LISTENING,
  // Act 7 · Prove it
  SPEAK,
  SCENARIO,
  READING,
  REVIEW,
  PROGRESS,
  QUIZ,
  ROUNDUP,
];

/* ─── Acts ────────────────────────────────────────────────────────────────── */

// Seven acts. An act boundary is what releases that act's SRS tranche, so the
// lesson does not dump sixty new cards into review at the end. `estScreens` is
// the screen count the pager actually walks for that act (a groupDrill at xl
// renders one screen per word, a deck one per card), and every act stays under
// the 22-screen checkpoint-spacing limit once its rest points are counted.

const ACTS: NonNullable<Lesson['acts']> = [
  {
    id: 'act1',
    title: 'Why this matters',
    sections: ['s01-scene', 's02-goals', 's03-anchors', 's04-grid'],
    milestone: 'The problem, named.',
    estScreens: 26,
    restPoints: ['s03-anchors/2'],
  },
  {
    id: 'act2',
    title: 'Marks that change the vowel',
    sections: ['s05-aigu', 's05-check-aigu', 's06-grave', 's06-check-grave', 's07-circonflexe', 's07-check-circonflexe', 's08-pairs', 's08-check-pairs'],
    milestone: 'Every vowel mark, heard.',
    estScreens: 35,
    restPoints: ['s06-check-grave/end'],
  },
  {
    id: 'act3',
    title: 'The mark that changes nothing',
    sections: ['s09-silent-marks', 's09-silent-practice', 's09-check-silent'],
    milestone: 'The silent marks, placed.',
    estScreens: 20,
  },
  {
    id: 'act4',
    title: 'The mark that splits',
    sections: ['s10-trema', 's10-check-trema'],
    milestone: 'Two dots, two syllables.',
    estScreens: 7,
  },
  {
    id: 'act5',
    title: 'The mark on a consonant',
    sections: ['s11-cedille', 's11-cedille-rule', 's12-errors'],
    milestone: 'The tail, understood.',
    estScreens: 14,
  },
  {
    id: 'act6',
    title: 'Bank it',
    sections: ['s13-flashcards', 's14-examples', 's15-dictation', 's16-listening'],
    milestone: 'The words, banked.',
    estScreens: 34,
    restPoints: ['s14-examples/end'],
  },
  {
    id: 'act7',
    title: 'Prove it',
    sections: ['s17-speak', 's18-scenario', 's19-reading', 's20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 60,
    restPoints: ['s19-reading/end', 's21-progress/end'],
  },
];

/* ─── SRS tranches ────────────────────────────────────────────────────────── */

// One slice per act, index-aligned with ACTS, released at that act's
// checkpoint. Act 1 teaches no words of its own (the scene and the goals name
// no corpus items), so it releases nothing, and act 7 is deliberately light:
// the final checkpoint must not be the one carrying the bulk.

// Each slice holds exactly the words that act's own sections TEACH, and a
// word is released by the first act that teaches it. That correspondence is
// checked by sons-05-accents.test.ts rather than trusted: an act releasing a
// word no section up to that point names would hand the review deck a card
// the learner has never seen, which is a cold quiz wearing revision's clothes.
const TRANCHES: string[][] = [
  // act1 · the scene and the grid teach the idea, not the words
  [],
  // act2 · every vowel-mark word met in the three family drills and the pairs
  [
    'fr.sons.accents.001', 'fr.sons.accents.002', 'fr.sons.accents.003', 'fr.sons.accents.005',
    'fr.sons.accents.006', 'fr.sons.accents.007', 'fr.sons.accents.008', 'fr.sons.accents.009',
    'fr.sons.accents.011', 'fr.sons.accents.012', 'fr.sons.accents.013', 'fr.sons.accents.014',
    'fr.sons.accents.018', 'fr.sons.accents.019', 'fr.sons.accents.020', 'fr.sons.accents.021',
    'fr.sons.accents.022', 'fr.sons.accents.023', 'fr.sons.accents.024', 'fr.sons.accents.025',
    'fr.sons.accents.026', 'fr.sons.accents.027', 'fr.sons.accents.028', 'fr.sons.accents.029',
    'fr.sons.accents.030', 'fr.sons.accents.037', 'fr.sons.accents.038', 'fr.sons.accents.039',
    'fr.sons.accents.040', 'fr.sons.accents.041', 'fr.sons.accents.042', 'fr.sons.accents.043',
    'fr.sons.accents.045', 'fr.sons.accents.046', 'fr.sons.accents.047',
  ],
  // act3 · the silent marks and their unmarked partners
  [
    'fr.sons.accents.031', 'fr.sons.accents.032', 'fr.sons.accents.033', 'fr.sons.accents.034',
    'fr.sons.accents.035', 'fr.sons.accents.036', 'fr.sons.accents.044',
  ],
  // act4 · the tréma set
  [
    'fr.sons.accents.048', 'fr.sons.accents.049', 'fr.sons.accents.050', 'fr.sons.accents.051',
    'fr.sons.accents.052', 'fr.sons.accents.053',
  ],
  // act5 · the cédille set and its two hard/soft c contrasts
  [
    'fr.sons.accents.054', 'fr.sons.accents.055', 'fr.sons.accents.056', 'fr.sons.accents.057',
    'fr.sons.accents.058', 'fr.sons.accents.059', 'fr.sons.accents.060', 'fr.sons.accents.061',
  ],
  // act6 · the six the dictation is the first to drill
  [
    'fr.sons.accents.004', 'fr.sons.accents.010', 'fr.sons.accents.015', 'fr.sons.accents.016',
    'fr.sons.accents.017', 'fr.sons.accents.062',
  ],
  // act7 · proves the lesson rather than adding to it, so the final
  // checkpoint releases nothing new
  [],
];

/* ─── The lesson ──────────────────────────────────────────────────────────── */

const ACCENTS_LESSON_AUTHORED: Lesson = {
  id: 'sons.05.l1',
  unitId: 'sons.05',
  seq: 1,
  title: 'Les accents',
  level: 'sons',
  tag: 'SONS · LEÇON 05',
  version: 1,
  intro:
    'French writes five marks over its letters, and none of them is decoration. Two change which vowel comes out of your mouth, one splits a syllable in two, one changes a consonant, and several change nothing you can hear at all while still deciding which word you have written. This lesson gives you the one question that sorts them, so a marked word you have never seen comes out close to right on the first try.',
  features: ['narrated', 'minimalPairs', 'voiceflash'],
  grammarIntroduced: ['written-accents', 'soft-c-hard-c'],
  reframe: REFRAME,
  sections: SECTIONS,
  acts: ACTS,
  deckTranche: TRANCHES,
  itemIds: ACCENTS_IDS,
  terms: TERMS,
  sheets: SHEETS,
  drills: DRILLS,
  errorTriggers: ERROR_TRIGGERS,
  audio: AUDIO,
  narration: NARRATION,
  overview: {
    titleEn: 'Accents: what each mark actually changes',
    subFr: 'Les accents',
    introFr:
      "En français, cinq accents peuvent se poser sur une lettre. Certains changent la voyelle, un sépare deux syllabes, un change une consonne, et d'autres ne changent rien à l'oral. Dans cette leçon, vous apprenez ce que chaque accent modifie.",
    minutes: 55,
    difficulty: 2,
    glyph: 'é',
    screens: 189,
  },
};

// The role-play alternatives are NOT authored in this file. `userEn` and the
// accepted `alts[]` for this lesson's scenario live in data/scenario-alts.ts,
// and withScenarioAlts attaches them here so that every consumer — the batch
// that writes Postgres, the merge script that writes seed.json, and the tests
// that compare the two — sees the same enriched lesson.
//
// Before 2026-08-09 they lived in seed.json ONLY. apply-scenario-alts.ts wrote
// the seed and said so; nobody updated the fourteen authored sources, so each
// of their batches held a poorer copy of its own lesson and would have written
// it straight back. That is not hypothetical: re-rendering a1.03 destroyed five
// turns exactly this way on 2026-08-07.
export const ACCENTS_LESSON: Lesson = withScenarioAlts(ACCENTS_LESSON_AUTHORED);
