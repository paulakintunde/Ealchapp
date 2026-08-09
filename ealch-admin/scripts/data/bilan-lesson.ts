// a1.30 "Bilan A1": the two lessons.
//
//   a1.30.l1  Leçon par leçon   29 rounds, 145 questions, remediation on
//   a1.30.l2  L'examen A1       12 rounds,  60 questions, exam conditions
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY TWO LESSONS AND NOT ONE
// ══════════════════════════════════════════════════════════════════════════
//
// The pager resolves ONE quiz per lesson: contentSections() strips every
// section of type 'quiz' out of the flow and appends a single quiz page,
// found with sections.find(). A second quiz section in the same lesson is not
// an error, it is silently never rendered. So 145 + 60 in one lesson would
// have to be one 205-question run with no stopping place between the review
// and the exam, and no way to sit the exam again without re-answering the
// review first.
//
// Splitting them also lets the two halves behave differently, which is the
// point of having both: the review explains every answer as it happens and
// drills a failed round before the next one starts, and the exam does neither.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT NO LONGER CONTAINS
// ══════════════════════════════════════════════════════════════════════════
//
// The previous a1.30.l1 was a 19-section teaching lesson: a market scene, a
// six-question listening, three group drills, a speak section, a dictation, two
// trap drills, an eight-turn scenario and a 75-question quiz, plus 101 corpus
// items and a 13-phrase repair kit it introduced as new material.
//
// All of it is gone, on instruction. What replaces it is an assessment, and an
// assessment that also teaches conversational repair for the first time in the
// band is not an assessment. The two repair questions that survive sit in the
// exam's last round, where they test recognition of phrases rather than
// introduce them.
//
// The practical consequence worth naming: this unit no longer releases any SRS
// cards. `itemIds` is empty on both lessons and there is no deckTranche,
// because a lesson that quotes twenty-nine other lessons owns none of their
// corpus rows. Nothing is lost, since every one of those rows is already
// released by the lesson that taught it.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection,
} from '../../../ealch-v2/src/content/schema.ts';
import { REVIEW_ROUNDS, REF } from './bilan-rounds.ts';
import { EXAM_ROUNDS, REF_EXAM } from './bilan-exam.ts';

/** The line the review lesson hangs on. Must appear VERBATIM in at least
 *  three sections or the density validator rejects it as a sentence that
 *  happened once. */
export const REFRAME = 'A wrong answer names the half hour to sit again.';

/** The exam's equivalent. */
export const REFRAME_EXAM = 'Nothing here tells you which lesson it came from.';

/* ─── Remediation ───────────────────────────────────────────────────────────
 *
 * Twelve failure families rather than twenty-nine drills. A round names a
 * family in `targets`, the family names a drill, and `drillForRound` joins the
 * two. Twenty-nine drills would be one per round and mostly duplicates: the
 * article mistake that sinks the partitive round is the same mistake in the
 * definite, indefinite and food rounds, and drilling it four separate ways
 * teaches it worse than drilling it once.
 *
 * A drill fires only when a round scores under 60, and only once per round.
 */

const REPAIR_FAMILIES: { id: string; description: string; detectOn: string[] }[] = [
  { id: 'err-register', description: 'Opens with the wrong register, or answers a formula with the wrong formula.', detectOn: [REF] },
  { id: 'err-number', description: 'Loses a number to its shape: the et, the s on quatre-vingts, the comma in a price.', detectOn: [REF] },
  { id: 'err-article', description: 'Reaches for the wrong little word. Le for du, un after être, des where de was wanted.', detectOn: [REF] },
  { id: 'err-verb', description: 'Uses être where French uses avoir, or picks the wrong form for on, ils and vous.', detectOn: [REF] },
  { id: 'err-time', description: 'Drops the article that makes a day or a part of the day habitual, or mixes two clocks.', detectOn: [REF] },
  { id: 'err-weather', description: 'Puts the weather in the wrong frame: il est for il fait, or a person where the sky goes.', detectOn: [REF] },
  { id: 'err-agreement', description: 'Fails to agree an adjective, or agrees one that never moves.', detectOn: [REF] },
  { id: 'err-placement', description: 'Puts the describing word on the English side of the noun.', detectOn: [REF] },
  { id: 'err-possessive', description: 'Agrees the possessive with the owner rather than with the thing owned.', detectOn: [REF] },
  { id: 'err-negation', description: 'Collapses an article that does not collapse, or leaves one that does.', detectOn: [REF] },
  { id: 'err-question', description: 'Stacks two question methods, or drops the hyphen, the t or the elision.', detectOn: [REF] },
  { id: 'err-place', description: 'Omits the de a multi-word preposition needs, or picks the wrong contraction.', detectOn: [REF] },
];

export const REVIEW_TRIGGERS: ErrorTrigger[] = REPAIR_FAMILIES.map((f) => ({
  ...f,
  drill: `drill-${f.id.replace('err-', '')}`,
  retest: `retest-${f.id.replace('err-', '')}`,
}));

export const REVIEW_DRILLS: LessonDrill[] = [
  {
    id: 'drill-register',
    title: 'Which one, and when',
    format: 'flashcard',
    pairs: [
      ['arriving, any time before dark', 'bonjour'],
      ['arriving, after dark', 'bonsoir'],
      ['leaving, before evening', 'bonne journée'],
      ['leaving, after dark', 'bonne soirée'],
      ['answering merci', 'de rien'],
    ],
    coach: 'Arriving and leaving take different words, and bonsoir and bonne soirée are the pair that get swapped. One is hello, the other is goodbye.',
  },
  {
    id: 'retest-register',
    title: 'One more time',
    format: 'mcq',
    q: 'You are leaving a dinner at eleven at night. Which?',
    opts: ['Bonsoir', 'Bonne soirée', 'Bonne nuit'],
    correct: 1,
    why: 'Bonne soirée. Bonsoir is for arriving and bonne nuit says you are going to bed.',
  },

  {
    id: 'drill-number',
    title: 'The shapes that trip',
    format: 'flashcard',
    pairs: [
      ['71', 'soixante et onze'],
      ['80', 'quatre-vingts'],
      ['81', 'quatre-vingt-un'],
      ['91', 'quatre-vingt-onze'],
      ['200', 'deux cents'],
      ['250', 'deux cent cinquante'],
    ],
    coach: 'Two rules and both are about what follows. et on the six that end in one, and the s only when nothing comes after.',
  },
  {
    id: 'retest-number',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is 81?',
    opts: ['quatre-vingts-un', 'quatre-vingt-un', 'quatre-vingt-et-un'],
    correct: 1,
    why: 'quatre-vingt-un. The s goes the moment anything follows, and 81 never takes et.',
  },

  {
    id: 'drill-article',
    title: 'One of them, some of it, all of it',
    format: 'flashcard',
    pairs: [
      ['one cup', 'un café'],
      ['some coffee', 'du café'],
      ['coffee as a thing you like', 'le café'],
      ['a lot of coffee', 'beaucoup de café'],
      ['not any coffee, after avoir', 'pas de café'],
      ['not liking coffee', "pas le café, in J'aime pas le café"],
    ],
    coach: 'Three articles and they are not interchangeable. Ask what the verb points at: one of them, an amount, or the whole category.',
  },
  {
    id: 'retest-article',
    title: 'One more time',
    format: 'mcq',
    q: 'Which means: I eat bread',
    opts: ['Je mange le pain.', 'Je mange du pain.', 'Je mange pain.'],
    correct: 1,
    why: 'du pain, an amount. le pain would be the whole loaf on the table.',
  },

  {
    id: 'drill-verb',
    title: 'Has, not is',
    format: 'flashcard',
    pairs: [
      ['I am twenty', "J'ai vingt ans"],
      ['I am hungry', "J'ai faim"],
      ['I am hot', "J'ai chaud"],
      ['I am a teacher', 'Je suis professeur'],
      ['we are, out loud', 'on est'],
      ['they have', 'ils ont'],
    ],
    coach: 'English is it, French has it, and the list of states is short enough to learn whole. The one exception is a job, which takes être and no article.',
  },
  {
    id: 'retest-verb',
    title: 'One more time',
    format: 'mcq',
    q: 'Which means: I am thirty',
    opts: ['Je suis trente.', 'Je suis trente ans.', "J'ai trente ans."],
    correct: 2,
    why: "J'ai trente ans. French has its age, and ans is never dropped.",
  },

  {
    id: 'drill-time',
    title: 'Once, or every week',
    format: 'flashcard',
    pairs: [
      ['on Saturday, once', 'samedi'],
      ['on Saturdays, every week', 'le samedi'],
      ['in July', 'en juillet'],
      ['on the twelfth of July', 'le douze juillet'],
      ['at noon', 'à midi'],
      ['in the morning, as a habit', 'le matin'],
    ],
    coach: 'The little word is the whole meaning. le makes it a habit, en names a month, and a point on the clock takes nothing at all.',
  },
  {
    id: 'retest-time',
    title: 'One more time',
    format: 'mcq',
    q: 'You are free every Saturday. Which?',
    opts: ['Je suis libre samedi.', 'Je suis libre le samedi.', 'Je suis libre les samedis.'],
    correct: 1,
    why: 'le samedi. Without the le you have offered exactly one Saturday.',
  },

  {
    id: 'drill-weather',
    title: 'Makes, has, is',
    format: 'flashcard',
    pairs: [
      ['the sky is hot', 'il fait chaud'],
      ['I am hot', "j'ai chaud"],
      ['the coffee is hot', 'le café est chaud'],
      ['it is raining', 'il pleut'],
      ['it is windy', 'il fait du vent'],
      ['in spring', 'au printemps'],
    ],
    coach: 'Three frames and one adjective. The weather makes, a person has, a thing is. pleut and neige are already whole and take no il fait.',
  },
  {
    id: 'retest-weather',
    title: 'One more time',
    format: 'mcq',
    q: 'It is cold outside. Which?',
    opts: ['Il est froid.', 'Il fait froid.', "Il a froid."],
    correct: 1,
    why: 'Il fait froid. Il a froid is a person, and il est froid is an object.',
  },

  {
    id: 'drill-agreement',
    title: 'What moves, and what never does',
    format: 'flashcard',
    pairs: [
      ['green, feminine', 'verte'],
      ['white, feminine', 'blanche'],
      ['good, feminine', 'bonne'],
      ['beautiful, feminine', 'belle'],
      ['brown, any noun at all', 'marron'],
      ['orange, any noun at all', 'orange'],
    ],
    coach: 'Most adjectives agree and you can usually hear it. marron and orange never move, because both were things before they were colours.',
  },
  {
    id: 'retest-agreement',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right for brown shoes?',
    opts: ['des chaussures marrons', 'des chaussures marron', 'des chaussures marronnes'],
    correct: 1,
    why: 'marron never agrees. Des marrons would be a bag of chestnuts.',
  },

  {
    id: 'drill-placement',
    title: 'In front, or behind',
    format: 'flashcard',
    pairs: [
      ['a red car', 'une voiture rouge'],
      ['a big house', 'une grande maison'],
      ['a small white dog', 'un petit chien blanc'],
      ['beautiful paintings', 'de beaux tableaux'],
      ['a former hotel', 'un ancien hôtel'],
      ['an old hotel', 'un hôtel ancien'],
    ],
    coach: 'Ten words go in front and everything else goes behind. When in doubt, put it after: the group behind is the whole rest of the language.',
  },
  {
    id: 'retest-placement',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['une rouge voiture', 'une voiture rouge', 'une voiture rouges'],
    correct: 1,
    why: 'A colour goes behind the noun. English puts it first and French does not.',
  },

  {
    id: 'drill-possessive',
    title: 'What is owned, not who owns it',
    format: 'flashcard',
    pairs: [
      ['her father', 'son père'],
      ['his mother', 'sa mère'],
      ['my friend, a woman', 'mon amie'],
      ["Paul's sister", 'la sœur de Paul'],
      ['their child, one child', 'leur enfant'],
      ['their children', 'leurs enfants'],
    ],
    coach: 'The possessive agrees with the thing owned. Whether the owner is a man or a woman never enters into it, which is the opposite of English.',
  },
  {
    id: 'retest-possessive',
    title: 'One more time',
    format: 'mcq',
    q: 'Her father. Which?',
    opts: ['sa père', 'son père', 'ses père'],
    correct: 1,
    why: 'son père. père is masculine, so son, whoever the owner is.',
  },

  {
    id: 'drill-negation',
    title: 'What collapses, and what does not',
    format: 'flashcard',
    pairs: [
      ["J'ai un frère", "Je n'ai pas de frère"],
      ["J'ai du pain", "Je n'ai pas de pain"],
      ["C'est un livre", "Ce n'est pas un livre"],
      ["J'aime le café", "Je n'aime pas le café"],
      ["J'ai faim", "Je n'ai pas faim"],
      ['Il est là', "Il n'est pas là"],
    ],
    coach: 'Wrap the verb, then ask what the verb was. After avoir, un and du become de. After être, nothing moves, and le never moves at all.',
  },
  {
    id: 'retest-negation',
    title: 'One more time',
    format: 'mcq',
    q: "Turn « J'ai une voiture » negative.",
    opts: ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "Je n'ai pas la voiture."],
    correct: 1,
    why: 'After avoir, une collapses to de.',
  },

  {
    id: 'drill-question',
    title: 'Pick one method',
    format: 'flashcard',
    pairs: [
      ['out loud, to anybody', 'Tu es prêt ?'],
      ['anywhere, never wrong', 'Est-ce que tu es prêt ?'],
      ['careful writing', 'Es-tu prêt ?'],
      ['before a vowel', "Est-ce qu'il est prêt ?"],
      ['a has no t of its own', 'A-t-il faim ?'],
      ['how many, always with de', "Combien d'enfants ?"],
    ],
    coach: 'Three methods and you use one at a time. Est-ce que is the one that is never wrong, spoken or written.',
  },
  {
    id: 'retest-question',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is wrong?',
    opts: ['Es-tu prêt ?', 'Est-ce que tu es prêt ?', 'Est-ce que es-tu prêt ?'],
    correct: 2,
    why: 'The last one stacks two methods and asks the question twice.',
  },

  {
    id: 'drill-place',
    title: 'One word, or a phrase',
    format: 'flashcard',
    pairs: [
      ['on the table', 'sur la table'],
      ['under the bed', 'sous le lit'],
      ['next to the bank', 'à côté de la banque'],
      ['near the station', 'près de la gare'],
      ['to Canada', 'au Canada'],
      ['to the United States', 'aux États-Unis'],
    ],
    coach: 'A one-word preposition goes straight onto the noun. A phrase needs de first, and then de and à contract with le and les.',
  },
  {
    id: 'retest-place',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['à côté la banque', 'à côté de la banque', 'à côté du la banque'],
    correct: 1,
    why: 'à côté DE. A multi-word preposition always needs its de.',
  },
];

/* ─── a1.30.l1 sections ─────────────────────────────────────────────────────
 *
 * Five. A scene to set the sitting up, the goals card, a progress card, the
 * quiz, and the roundup. Every section carrying layer 'core' is inside the
 * 45-word-per-field cap; the roundup deliberately carries no layer, which is
 * how the shipped lessons let a closing paragraph run long.
 */

const REVIEW_SECTIONS: LessonSection[] = [
  {
    type: 'scene',
    id: 's01-scene',
    title: 'Twenty-Nine Half Hours',
    frSub: 'Vingt-neuf leçons',
    render: 'screens',
    layer: 'core',
    say: { text: 'You have done the band. This asks whether it stayed.', voice: 'coach', timing: 'onFirstVisitOnly' },
    setting: {
      place: 'A kitchen table, the phone propped against a cup',
      city: 'Anywhere',
      time: 'Whenever you got to the end',
      ambience: 'room-tone-lobby',
    },
    beats: [
      {
        kind: 'narration',
        size: 'md',
        text: 'Twenty-nine lessons. The first one was bonjour and the last one was a kitchen. Somewhere in the middle a few of them quietly stopped being yours.',
        audio: { mode: 'tts', voice: 'coach' },
      },
      {
        kind: 'narration',
        size: 'md',
        text: 'This is not a lesson. Nothing new is taught here and nothing is explained twice. It asks, lesson by lesson, which ones held.',
        audio: { mode: 'tts', voice: 'coach' },
      },
      {
        kind: 'choice',
        size: 'lg',
        prompt: 'Here is the shape of a question. Somebody asks your age. Which comes out?',
        options: [
          {
            fr: 'Je suis vingt ans.',
            en: 'the English shape, kept',
            outcome: 'breaks',
            audio: { mode: 'tts', lang: 'fr-FR' },
          },
          {
            fr: "J'ai vingt ans.",
            en: 'the French shape',
            outcome: 'works',
            audio: { mode: 'tts', lang: 'fr-FR' },
          },
        ],
        followUp: {
          works: 'Right, and lesson 11 is where that came from. If it went the other way just now, that is the round to watch for.',
          breaks: 'That is the one this band works hardest to replace, and it comes back the moment you stop thinking about it.',
        },
      },
      {
        kind: 'break',
        size: 'lg',
        heading: 'This is what a round finds',
        body: 'Not whether you know the word. Whether the English shape came back while you were busy answering.',
        wrong: {
          fr: 'Je suis vingt ans.',
          ipa: '/ʒə sɥi vɛ̃ ɑ̃/',
          en: 'the shape English gave you',
        },
        right: {
          fr: "J'ai vingt ans.",
          ipa: '/ʒe vɛ̃ tɑ̃/',
          en: 'the shape French wants',
        },
        coach: 'One question, from one lesson, and it names the lesson. Twenty-nine rounds of that is what this is.',
      },
      {
        kind: 'resolve',
        size: 'md',
        text: 'One round per lesson, five questions each. The round says which lesson it came from, on purpose, because the point is to find the gap rather than to hide it.',
      },
    ],
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What This Is',
    frSub: 'Ce que vous allez faire',
    layer: 'core',
    say: 'Three things, and the third one is a separate sitting.',
    goals: [
      {
        t: 'Twenty-nine rounds, one per lesson',
        s: 'Five questions each, in the order the band taught them. A round is named for its lesson, so a low score points somewhere specific.',
      },
      {
        t: 'A drill when a round goes badly',
        s: 'Score under sixty on a round and a short drill runs before the next one starts, while the mistake is still live rather than at the very end.',
      },
      {
        t: 'Then the exam, separately',
        s: 'Sixty mixed questions in a second sitting, with nothing naming a lesson and no explanations until you finish. A wrong answer names the half hour to sit again.',
      },
    ],
  },

  {
    type: 'progressCheck',
    id: 's03-progress',
    title: 'Before You Start',
    frSub: 'Avant de commencer',
    layer: 'core',
    say: 'A hundred and forty-five questions. Stop wherever you like.',
    body: 'Nothing here is new. Every question quotes a lesson you have already sat. A wrong answer names the half hour to sit again.',
    stats: [
      { k: 'Rounds', v: '29' },
      { k: 'Questions', v: '145' },
      { k: 'Pass mark', v: '70%' },
      { k: 'Drill fires under', v: '60%' },
    ],
  },

  {
    type: 'quiz',
    id: 's04-quiz',
    title: 'Lesson By Lesson',
    frSub: 'Leçon par leçon',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Twenty-nine rounds. Each one says which lesson it is testing.',
    rounds: REVIEW_ROUNDS,
  },

  {
    // No `layer`. A closing paragraph is the one place a long string belongs,
    // and layer 'core' would put it under the 45-word cap.
    type: 'roundup',
    id: 's05-roundup',
    title: 'Where You Are',
    frSub: 'Où vous en êtes',
    say: 'Read the round scores, not the total.',
    body: 'The percentage at the top is the least useful number on that screen. What is worth reading is the list underneath it, because a round is a lesson and a low round is an afternoon of work rather than a verdict on your French. Two or three weak rounds after twenty-nine lessons is an ordinary result and the fix is specific: go back to those units, sit them again, and come back here. When the rounds are level, the exam is the next thing, and it is deliberately harder in one way only, which is that it will not tell you what it is asking about.',
    points: [
      'A wrong answer names the half hour to sit again.',
      'Read the round scores rather than the total. The total hides which lesson went.',
      'A drill that fired is worth more than a round you passed. It caught something live.',
      'The exam is a separate sitting, and it is the one that answers whether you have A1.',
    ],
  },
];

const REVIEW_ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'What this is',
    sections: ['s01-scene', 's02-goals', 's03-progress'],
    milestone: 'You know what the next hour asks of you.',
    estScreens: 9,
  },
  {
    id: 'act2',
    title: 'Twenty-nine rounds',
    sections: ['s04-quiz', 's05-roundup'],
    milestone: 'Every lesson in the band, asked about by name.',
    estScreens: 152,
    // 152 screens across ten stopping places. The checkpoint-spacing rule caps
    // any single stretch at 22, and a 145-question run with one stop at the end
    // is the exact shape that rule exists to catch.
    restPoints: [
      's04-quiz/after-r3',
      's04-quiz/after-r6',
      's04-quiz/after-r9',
      's04-quiz/after-r12',
      's04-quiz/after-r15',
      's04-quiz/after-r18',
      's04-quiz/after-r21',
      's04-quiz/after-r24',
      's04-quiz/after-r27',
    ],
  },
];

export const REVIEW_LESSON: Lesson = {
  id: 'a1.30.l1',
  unitId: 'a1.30',
  seq: 1,
  title: 'Bilan A1 : leçon par leçon',
  level: 'a1',
  tag: 'A1 · LEÇON 30',
  intro: 'One round for each of the twenty-nine A1 lessons, five questions each. Nothing new is taught. A round that goes badly names the lesson to sit again, and drills it before the next round starts.',
  itemIds: [],
  version: 1,
  grammarAssumed: [
    'The whole A1 band, a1.01 to a1.29. Every question quotes a lesson that has already been taught and none of them is taught again here',
  ],
  grammarIntroduced: [],
  features: [],
  overview: {
    titleEn: 'A1 Review, lesson by lesson',
    subFr: 'Bilan A1',
    introFr: 'Vingt-neuf séries de cinq questions, une par leçon.',
    minutes: 40,
    difficulty: 3,
    glyph: '🏁',
    screens: 161,
  },
  acts: REVIEW_ACTS,
  reframe: REFRAME,
  errorTriggers: REVIEW_TRIGGERS,
  drills: REVIEW_DRILLS,
  sheets: [],
  sections: REVIEW_SECTIONS,
  audio: { defaultLang: 'fr-FR', speeds: [1, 0.65], coachVoice: 'coach' },
};

/* ─── a1.30.l2 sections ─────────────────────────────────────────────────── */

const EXAM_SECTIONS: LessonSection[] = [
  {
    type: 'goals',
    id: 's01-brief',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    say: 'Sixty questions, and it will not help you while you answer.',
    goals: [
      {
        t: 'Sixty questions, twelve parts',
        s: 'Each part is a situation rather than a lesson, and every one of them crosses three or four units. Nothing here tells you which lesson it came from.',
      },
      {
        t: 'No explanations until the end',
        s: 'Right or wrong, you get the next question. Everything you missed is collected and explained on the result card, with the lesson to go back to.',
      },
      {
        t: 'No drills, no jumping back',
        s: 'The review lesson does both of those. This one measures, which it cannot do while also teaching the thing it is about to ask about.',
      },
      {
        t: 'Seventy percent is a pass',
        s: 'Sit the review first if you have not. Coming here cold is allowed and it mostly tells you what you already suspected.',
      },
    ],
  },

  {
    type: 'progressCheck',
    id: 's02-progress',
    title: 'Before You Start',
    frSub: 'Avant de commencer',
    layer: 'core',
    say: 'Once you start, it does not stop to explain.',
    body: 'Nothing here tells you which lesson it came from. That is the only way this differs from the review, and it is the whole difficulty.',
    stats: [
      { k: 'Parts', v: '12' },
      { k: 'Questions', v: '60' },
      { k: 'Pass mark', v: '70%' },
      { k: 'Explanations', v: 'At the end' },
    ],
  },

  {
    type: 'quiz',
    id: 's03-exam',
    title: "L'examen A1",
    frSub: 'Soixante questions',
    layer: 'core',
    passMark: 70,
    // Exam conditions. No `why` and no jump while answering; the result card
    // collects everything missed. No round declares `targets`, so no drill
    // fires between rounds either.
    exam: true,
    say: 'Twelve parts. Nothing is explained until you finish.',
    rounds: EXAM_ROUNDS,
  },

  {
    type: 'roundup',
    id: 's04-roundup',
    title: 'That Is A1',
    frSub: "C'est fini",
    say: 'What the number means, and what comes after it.',
    body: 'Seventy percent across sixty mixed questions is a real A1, and it is worth being clear about what that means, because it is easy to undersell. It means you can meet somebody, say who you are and how old you are and where you are from, count and pay and tell the time, ask for what you want and say when you do not want it, describe a person and a room and a plate of food, and ask a question five different ways. Below seventy, the round scores tell you where it went, and the review lesson tells you which half hour to sit again. There is no version of this where the answer is start over.',
    points: [
      'Read the missed questions underneath the score. Each one names its lesson.',
      'A part is a situation, not a unit, so a weak part usually means two units rather than one.',
      'Sit the review lesson for anything that went badly, then come back and sit this again.',
      'Nothing here tells you which lesson it came from. That was the point, and you did it anyway.',
    ],
  },
];

const EXAM_ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The brief',
    sections: ['s01-brief', 's02-progress'],
    milestone: 'You know the rules of the sitting.',
    estScreens: 7,
  },
  {
    id: 'act2',
    title: 'Sixty questions',
    sections: ['s03-exam', 's04-roundup'],
    milestone: 'A1 complete.',
    estScreens: 63,
    restPoints: ['s03-exam/after-x3', 's03-exam/after-x6', 's03-exam/after-x9'],
  },
];

export const EXAM_LESSON: Lesson = {
  id: 'a1.30.l2',
  unitId: 'a1.30',
  seq: 2,
  title: "L'examen A1",
  level: 'a1',
  tag: 'A1 · EXAMEN',
  intro: 'Sixty questions across twelve situations, mixed so that nothing tells you which lesson it came from. No explanations until the end, and no drills. Seventy percent is a pass.',
  itemIds: [],
  version: 1,
  grammarAssumed: [
    'The whole A1 band, a1.01 to a1.29, and the lesson-by-lesson review in a1.30.l1',
  ],
  grammarIntroduced: [],
  features: [],
  overview: {
    titleEn: 'The A1 Exam',
    subFr: "L'examen A1",
    introFr: 'Soixante questions, douze situations, aucune indication de leçon.',
    minutes: 20,
    difficulty: 4,
    glyph: '🎓',
    screens: 70,
  },
  acts: EXAM_ACTS,
  reframe: REFRAME_EXAM,
  errorTriggers: [],
  drills: [],
  sheets: [],
  sections: EXAM_SECTIONS,
  audio: { defaultLang: 'fr-FR', speeds: [1, 0.65], coachVoice: 'coach' },
};

export const BILAN_LESSONS: Lesson[] = [REVIEW_LESSON, EXAM_LESSON];
export { REF, REF_EXAM };
