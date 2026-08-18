// a2.35 "Bilan A2": the two lessons.
//
//   a2.35.l1  Leçon par leçon   34 rounds, 170 questions, remediation on
//   a2.35.l2  L'examen A2        12 rounds,  60 questions, exam conditions
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY TWO LESSONS AND NOT ONE
// ══════════════════════════════════════════════════════════════════════════
//
// The pager resolves ONE quiz per lesson: contentSections() strips every
// section of type 'quiz' out of the flow and appends a single quiz page, found
// with sections.find(). A second quiz section in the same lesson is not an
// error, it is silently never rendered. So 170 + 60 in one lesson would have to
// be one 230-question run with no stopping place between the review and the
// exam, and no way to sit the exam again without re-answering the review first.
//
// Splitting them also lets the two halves behave differently, which is the
// point of having both: the review explains every answer as it happens and
// drills a failed round before the next one starts, and the exam does neither.
//
// a1.30 hit this first and split for the same reason. This is its A2
// equivalent and it matches its shape section for section, with three
// departures, all of them named here and in the build report:
//
//   1. THE FORMAT MIX IS A2'S, NOT a1.30'S. a1.30 runs 103 mcq out of 205,
//      which is 50%. The A2 band runs 37%, because most of what A2 teaches is
//      inaudible and is therefore assessed in writing. A 230-question capstone
//      at a1.30's mix would be materially easier than the units it reviews, so
//      this one runs mcq 37.4% and typeIn 33.0% against the band's 37.2% and
//      33.1%. bilan-a2-spread.ts holds the measurement and the tolerance.
//
//   2. NOT EVERY ROUND CARRIES AN EAR QUESTION. bilan-rounds.ts states the
//      rule that each of its rounds runs a recognition question, a production
//      question and at least one of listenChoose or speak. Nineteen of the
//      thirty-four A2 units teach a contrast that is SILENT BY CONSTRUCTION:
//      participle agreement, the -s of leurs, cet against cette, the -x of
//      nouveaux. An ear question on those has no correct answer. So sixteen
//      rounds carry a listenChoose and three carry a speak, chosen where the
//      contrast is genuinely audible, and the remaining fifteen do not.
//
//   3. THE ROUND IDS CARRY BOTH NUMBERS. A2's seq and its ids disagree far
//      harder than A1's did, so `r16-a2-05-passe-compose-avoir` says both which
//      round it is and which unit it belongs to, and the coverage check reads
//      the id rather than the label.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT DOES NOT CONTAIN
// ══════════════════════════════════════════════════════════════════════════
//
// No corpus. `itemIds` is empty on both lessons, there is no deckTranche and
// there are no sheets. A lesson that quotes thirty-four others owns none of
// their rows, and every one of those rows is already released by the lesson
// that taught it. Not one content_item is inserted, updated or deleted by this
// build, and no theme is created: `bilan` and `revision` both hold zero rows
// and neither should exist.
//
// No teaching. a1.30's previous version was a nineteen-section teaching lesson
// with 101 new corpus items, and all of it was deleted on instruction: an
// assessment that also teaches is not an assessment. Nothing new is introduced
// here, in any register. Where a round exposes a gap, the report names the unit
// and does not fill it.
//
// The practical consequence worth naming: this unit releases no SRS cards. The
// `lesson-has-practice` publish gate requires every lesson to release some, and
// `features: ['assessment']` is the flag that tells the gate a lesson examines
// rather than teaches. Without it neither of these two can be published at all.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection,
} from '../../../ealch-v2/src/content/schema.ts';
import { REVIEW_ROUNDS, REF } from './bilan-a2-rounds.ts';
import { EXAM_ROUNDS, REF_EXAM } from './bilan-a2-exam.ts';

/** The line the review lesson hangs on. Must appear VERBATIM in at least three
 *  sections or the density validator rejects it as a sentence that happened
 *  once. */
export const REFRAME = 'Every round is one unit, so a low score has an address.';

/** The exam's equivalent, and deliberately the same word turned round. The two
 *  sentences are the two lessons' whole design: the review tells you where the
 *  gap is, and the exam refuses to. */
export const REFRAME_EXAM = 'Nothing in here carries an address.';

/* ─── Remediation ───────────────────────────────────────────────────────────
 *
 * Twelve failure families rather than thirty-four drills. A round names a
 * family in `targets`, the family names a drill, and `drillForRound` joins the
 * two. Thirty-four drills would be one per round and mostly duplicates: the
 * auxiliary mistake that sinks the être round is the same mistake in the
 * reflexive-past round, and drilling it twice teaches it worse than drilling it
 * once.
 *
 * A drill fires only when a round scores under 60, and only once per round.
 */

const REPAIR_FAMILIES: { id: string; description: string; detectOn: string[] }[] = [
  { id: 'err-conjugation', description: 'Builds a form the verb does not have, or borrows one family’s endings for another.', detectOn: [REF] },
  { id: 'err-spelling', description: 'Loses the stem change: the e in mangeons, the doubled l, the accent that turns.', detectOn: [REF] },
  { id: 'err-tense', description: 'Conjugates the second verb, or puts the wrong one of the three tenses in the slot.', detectOn: [REF] },
  { id: 'err-auxiliary', description: 'Reaches for avoir where French wants être, or leaves the participle unagreed after it.', detectOn: [REF] },
  { id: 'err-participle', description: 'Builds a past form that has to be reached for, or drops the ending that agrees.', detectOn: [REF] },
  { id: 'err-negation', description: 'Wraps the wrong half of a two-word verb, or leaves an article the negative collapses.', detectOn: [REF] },
  { id: 'err-agreement', description: 'Leaves a describing word in its plain form, or agrees one that never moves.', detectOn: [REF] },
  { id: 'err-clitic', description: 'Puts the standing-in word behind the verb, or picks the direct one where French wants the other.', detectOn: [REF] },
  { id: 'err-yen', description: 'Says the preposition twice, or drops a word English lets you leave out.', detectOn: [REF] },
  { id: 'err-determiner', description: 'Picks the pointing or owning word off the owner rather than off the thing owned.', detectOn: [REF] },
  { id: 'err-preposition', description: 'Picks the wrong little word in front of a place, or in front of a length of time.', detectOn: [REF] },
  { id: 'err-register', description: 'Answers a script on the wrong rung, or starts a turn that was not theirs to start.', detectOn: [REF] },
];

export const REVIEW_TRIGGERS: ErrorTrigger[] = REPAIR_FAMILIES.map((f) => ({
  ...f,
  drill: `drill-${f.id.replace('err-', '')}`,
  retest: `retest-${f.id.replace('err-', '')}`,
}));

export const REVIEW_DRILLS: LessonDrill[] = [
  {
    id: 'drill-conjugation',
    title: 'One cell from each family',
    format: 'flashcard',
    pairs: [
      ['ils, parler', 'ils parlent'],
      ['ils, finir', 'ils finissent'],
      ['il, vendre', 'il vend'],
      ['ils, venir', 'ils viennent'],
      ['vous, faire', 'vous faites'],
      ['ils, prendre', 'ils prennent'],
    ],
    coach: 'Three regular families and the verbs that stand outside them. The plural is where they separate: one adds nothing, one adds a syllable, one wakes a consonant up.',
  },
  {
    id: 'retest-conjugation',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['ils finent', 'ils finissent', 'ils finit'],
    correct: 1,
    why: 'ils finissent. The regular -ir family puts -iss- in front of every plural ending.',
  },

  {
    id: 'drill-spelling',
    title: 'The spelling moves so the sound can stay',
    format: 'flashcard',
    pairs: [
      ['nous, manger', 'nous mangeons'],
      ['nous, commencer', 'nous commençons'],
      ['tu, appeler', 'tu appelles'],
      ['nous, appeler', 'nous appelons'],
      ['je, préférer', 'je préfère'],
      ['nous, préférer', 'nous préférons'],
    ],
    coach: 'Two different jobs. The e and the cedilla protect a soft consonant in front of a back vowel. The doubled l and the turned accent hold a vowel open in front of a silent ending.',
  },
  {
    id: 'retest-spelling',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['nous mangons', 'nous mangeons', 'nous mangions'],
    correct: 1,
    why: 'nous mangeons. Without the e the g would harden in front of the o.',
  },

  {
    id: 'drill-tense',
    title: 'Only the first verb moves',
    format: 'flashcard',
    pairs: [
      ['I am going to leave', 'Je vais partir'],
      ['I want to leave', 'Je veux partir'],
      ['I must leave', 'Je dois partir'],
      ['I have just left', 'Je viens de partir'],
      ['I left', 'Je suis parti'],
      ['I am not going to leave', 'Je ne vais pas partir'],
    ],
    coach: 'One frame, six meanings. The second verb never takes a person and never changes, whichever verb is in front of it.',
  },
  {
    id: 'retest-tense',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['Elle veut part.', 'Elle veut partir.', 'Elle veut parte.'],
    correct: 1,
    why: 'Elle veut partir. Conjugating the second verb as well is the reflex this frame exists to stop.',
  },

  {
    id: 'drill-auxiliary',
    title: 'Which first word, and what it does to the second',
    format: 'flashcard',
    pairs: [
      ['She ate', 'Elle a mangé'],
      ['She went out', 'Elle est sortie'],
      ['She got up', 'Elle s’est levée'],
      ['They arrived, two women', 'Elles sont arrivées'],
      ['They finished, two women', 'Elles ont fini'],
      ['He washed the car', 'Il a lavé la voiture'],
    ],
    coach: 'After avoir nothing agrees. After être everything does. The little word in front is the reliable signal: wherever it appears, the first word is être.',
  },
  {
    id: 'retest-auxiliary',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['Elle a allée au marché.', 'Elle est allée au marché.', 'Elle a allé au marché.'],
    correct: 1,
    why: 'Elle est allée. Two things move together: the first word becomes être and the second one then agrees.',
  },

  {
    id: 'drill-participle',
    title: 'The ones you reach for',
    format: 'flashcard',
    pairs: [
      ['prendre', 'pris'],
      ['mettre', 'mis'],
      ['ouvrir', 'ouvert'],
      ['voir', 'vu'],
      ['avoir', 'eu'],
      ['devoir', 'dû'],
    ],
    coach: 'The family ending does not predict these. An -re verb can give -is, an -ir verb can give -ert, and eu is said with none of the sounds its three letters suggest.',
  },
  {
    id: 'retest-participle',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['J’ai prendu le train.', 'J’ai pris le train.', 'J’ai prenu le train.'],
    correct: 1,
    why: 'J’ai pris. Cover the prefix and apprendre gives appris the same way.',
  },

  {
    id: 'drill-negation',
    title: 'What the two halves go round',
    format: 'flashcard',
    pairs: [
      ['I am not leaving', 'Je ne pars pas'],
      ['I am not going to leave', 'Je ne vais pas partir'],
      ['I did not leave', 'Je ne suis pas parti'],
      ['I do not get up early', 'Je ne me lève pas tôt'],
      ['I did not get up', 'Je ne me suis pas levé'],
      ['I have no bread', 'Je n’ai pas de pain'],
    ],
    coach: 'The wrap goes round the verb that changed, and takes any little words in front of it with it. The verb carrying the meaning stays outside.',
  },
  {
    id: 'retest-negation',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['Je vais ne pas sortir.', 'Je ne vais pas sortir.', 'Je ne sors pas sortir.'],
    correct: 1,
    why: 'Je ne vais pas sortir. The half that moved is aller, so that is the half that gets wrapped.',
  },

  {
    id: 'drill-agreement',
    title: 'What moves, and what you can hear',
    format: 'flashcard',
    pairs: [
      ['heureux, feminine', 'heureuse'],
      ['sportif, feminine', 'sportive'],
      ['beau, before a vowel', 'bel'],
      ['beau, masculine plural', 'beaux'],
      ['marron, any noun at all', 'marron'],
      ['lent, as an adverb', 'lentement'],
    ],
    coach: 'The plain form gives you the other three, and the feminine is usually audible where the plural never is. Two colours named after things never move at all.',
  },
  {
    id: 'retest-agreement',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['une fille sportif', 'une fille sportive', 'une fille sportife'],
    correct: 1,
    why: 'sportive. The -if class swaps its consonant rather than adding to it.',
  },

  {
    id: 'drill-clitic',
    title: 'Which one, and where it goes',
    format: 'flashcard',
    pairs: [
      ['I see it, le livre', 'Je le vois'],
      ['I see them, les livres', 'Je les vois'],
      ['I speak to him', 'Je lui parle'],
      ['I write to them', 'Je leur écris'],
      ['I saw them, les fleurs', 'Je les ai vues'],
      ['I gave her the book', 'Je lui ai donné le livre'],
    ],
    coach: 'In front of the verb, always. A person behind à takes lui or leur; anything else takes le, la or les. The past form agrees with the second kind and never with the first.',
  },
  {
    id: 'retest-clitic',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['Je vois le.', 'Je le vois.', 'Je vois lui.'],
    correct: 1,
    why: 'Je le vois. English word order survives the vocabulary, which is why this comes out wrong in the mouth.',
  },

  {
    id: 'drill-yen',
    title: 'The preposition is already inside',
    format: 'flashcard',
    pairs: [
      ['I am going there', 'J’y vais'],
      ['I am thinking about it', 'J’y pense'],
      ['I want some', 'J’en veux'],
      ['I have three of them', 'J’en ai trois'],
      ['I am talking about it', 'J’en parle'],
      ['There are three', 'Il y en a trois'],
    ],
    coach: 'Each of these two swallows a preposition as well as its noun, so saying à or de again after it doubles it. And English lets you stop at I do, where French will not.',
  },
  {
    id: 'retest-yen',
    title: 'One more time',
    format: 'mcq',
    q: 'Answer « Vous avez du pain ? » Which?',
    opts: ['Oui, j’ai.', 'Oui, j’en ai.', 'Oui, j’y ai.'],
    correct: 1,
    why: 'Oui, j’en ai. The pronoun is required rather than optional.',
  },

  {
    id: 'drill-determiner',
    title: 'The thing owned picks the word',
    format: 'flashcard',
    pairs: [
      ['this book', 'ce livre'],
      ['this man', 'cet homme'],
      ['this table', 'cette table'],
      ['mine, a car', 'la mienne'],
      ['mine, a book', 'le mien'],
      ['theirs, several things', 'les leurs'],
    ],
    coach: 'Neither series looks at the owner. Both look at the thing, and the pointing word also looks at whether a vowel is coming after it.',
  },
  {
    id: 'retest-determiner',
    title: 'One more time',
    format: 'mcq',
    q: 'Whose car? Which?',
    opts: ['C’est le mien.', 'C’est la mienne.', 'C’est mienne.'],
    correct: 1,
    why: 'C’est la mienne, because voiture is feminine, and the article in front is compulsory.',
  },

  {
    id: 'drill-preposition',
    title: 'Places, and lengths of time',
    format: 'flashcard',
    pairs: [
      ['to Japan', 'au Japon'],
      ['in France', 'en France'],
      ['at the doctor’s', 'chez le médecin'],
      ['for three years, still going', 'depuis trois ans'],
      ['for three years, finished', 'pendant trois ans'],
      ['in three days, from now', 'dans trois jours'],
    ],
    coach: 'The place words differ by what they do to the article: à folds it in, en throws it out, chez leaves it alone. The time words differ by whether the span is still open.',
  },
  {
    id: 'retest-preposition',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is right?',
    opts: ['Je vais à le marché.', 'Je vais au marché.', 'Je vais en marché.'],
    correct: 1,
    why: 'Je vais au marché. À le is never written; it is always au.',
  },

  {
    id: 'drill-register',
    title: 'The rung, and whose turn it is',
    format: 'flashcard',
    pairs: [
      ['ordering, to a server', 'Je voudrais le poisson'],
      ['you did not catch it', 'Pardon, vous pouvez répéter ?'],
      ['asking a price', 'Ça fait combien ?'],
      ['reporting a missing towel', 'Il manque une serviette'],
      ['naming your job', 'Je suis professeur'],
      ['handing the question back', 'Et vous ?'],
    ],
    coach: 'These are scripts and the other person usually starts. Your half is short, it reuses their frame, and the rung you pick costs you something or nothing.',
  },
  {
    id: 'retest-register',
    title: 'One more time',
    format: 'mcq',
    q: 'You are ordering. Which?',
    opts: ['Je veux le poisson.', 'Je voudrais le poisson.', 'Donnez-moi le poisson.'],
    correct: 1,
    why: 'Je voudrais. Je veux reads as an instruction rather than a request.',
  },
];

/* ─── a2.35.l1 sections ─────────────────────────────────────────────────────
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
    title: 'The Sentence That Did Not Stop',
    frSub: 'Trente-quatre leçons',
    render: 'screens',
    layer: 'core',
    say: { text: 'You have done the band. This asks whether it stayed.', voice: 'coach', timing: 'onFirstVisitOnly' },
    setting: {
      place: 'A kitchen, somebody else’s, after the plates have gone',
      city: 'Lyon',
      time: 'Late, and nobody is in a hurry',
      ambience: 'room-tone-lobby',
    },
    beats: [
      {
        kind: 'narration',
        size: 'md',
        text: 'She asked what you did today. You started answering, and somewhere in the middle of it you noticed that you were still going.',
        audio: { mode: 'tts', voice: 'coach' },
      },
      {
        kind: 'narration',
        size: 'md',
        text: 'A verb in the past. A word standing in for the shop so you did not have to name it twice. Then the present again, and nobody waited.',
        audio: { mode: 'tts', voice: 'coach' },
      },
      {
        kind: 'choice',
        size: 'lg',
        prompt: 'She asks where you went this morning. Which comes out?',
        options: [
          {
            fr: 'J’ai allé au marché.',
            en: 'the first word from the wrong half of the band',
            outcome: 'breaks',
            audio: { mode: 'tts', lang: 'fr-FR' },
          },
          {
            fr: 'Je suis allé au marché.',
            en: 'the one aller actually takes',
            outcome: 'works',
            audio: { mode: 'tts', lang: 'fr-FR' },
          },
        ],
        followUp: {
          works: 'Right, and that is unit 18. If it went the other way just now, that is the round to watch for.',
          breaks: 'That is the choice unit 18 exists to make, and it goes back the moment the sentence has to move quickly.',
        },
      },
      {
        kind: 'break',
        size: 'lg',
        heading: 'What a round finds',
        body: 'Not whether you know the verb. Whether the right first word arrived while you were busy with the rest of the sentence.',
        wrong: {
          fr: 'J’ai allé au marché.',
          ipa: '/ʒe a.le o maʁ.ʃe/',
          en: 'the first word that fits nine verbs in ten',
        },
        right: {
          fr: 'Je suis allé au marché.',
          ipa: '/ʒə sɥi a.le o maʁ.ʃe/',
          en: 'the one this verb is on the list for',
        },
        coach: 'Five questions from one unit, and the round says which unit it was. Thirty-four rounds of that is what this is.',
      },
      {
        kind: 'resolve',
        size: 'md',
        text: 'One round per unit, five questions each, in the order you walked them. Every round is one unit, so a low score has an address.',
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
        t: 'Thirty-four rounds, one per unit',
        s: 'Five questions each, in the order the band taught them rather than in id order. Every round is one unit, so a low score has an address.',
      },
      {
        t: 'A drill when a round goes badly',
        s: 'Score under sixty on a round and a short drill runs before the next one starts, while the mistake is still live rather than at the very end.',
      },
      {
        t: 'Then the exam, separately',
        s: 'Sixty mixed questions in a second sitting, grouped by what they ask you to do rather than by unit, with no explanations until you finish.',
      },
    ],
  },

  {
    type: 'progressCheck',
    id: 's03-progress',
    title: 'Before You Start',
    frSub: 'Avant de commencer',
    layer: 'core',
    say: 'A hundred and seventy questions. Stop wherever you like.',
    body: 'Nothing here is new. Every question quotes a unit you have already sat. Every round is one unit, so a low score has an address.',
    stats: [
      { k: 'Rounds', v: '34' },
      { k: 'Questions', v: '170' },
      { k: 'Pass mark', v: '70%' },
      { k: 'Drill fires under', v: '60%' },
    ],
  },

  {
    type: 'quiz',
    id: 's04-quiz',
    title: 'Unit By Unit',
    frSub: 'Leçon par leçon',
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Thirty-four rounds. Each one says which unit it is testing.',
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
    body: 'The percentage at the top is the least useful number on that screen. What is worth reading is the list underneath it, because a round is a unit and a low round is an afternoon of work rather than a verdict on your French. Three or four weak rounds after thirty-four units is an ordinary result, and the fix is specific: go back to those units, sit them again, and come back here. Watch in particular for a run of weak rounds rather than a scattering. Three low scores anywhere between rounds sixteen and twenty is the past tense rather than four separate problems, and it is one afternoon rather than four.',
    points: [
      'Every round is one unit, so a low score has an address.',
      'Read the round scores rather than the total. The total hides which unit went.',
      'A run of low rounds next to each other is usually one gap, not three.',
      'The exam is a separate sitting, and it is the one that answers whether you have A2.',
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
    title: 'Thirty-four rounds',
    sections: ['s04-quiz', 's05-roundup'],
    milestone: 'Every unit in the band, asked about by name.',
    estScreens: 177,
    // 177 screens across twelve stopping places. The checkpoint-spacing rule
    // caps any single stretch at 22, and a 170-question run with one stop at
    // the end is the exact shape that rule exists to catch. Every third round
    // is fifteen questions, which sits inside the cap with room for the round
    // cards themselves.
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
      's04-quiz/after-r30',
      's04-quiz/after-r33',
    ],
  },
];

export const REVIEW_LESSON: Lesson = {
  id: 'a2.35.l1',
  unitId: 'a2.35',
  seq: 1,
  title: 'Bilan A2 : leçon par leçon',
  level: 'a2',
  tag: 'A2 · LEÇON 35',
  intro: 'One round for each of the thirty-four A2 units, five questions each, in the order you walked them. Nothing new is taught. A round that goes badly names the unit to sit again, and drills it before the next round starts.',
  itemIds: [],
  version: 1,
  grammarAssumed: [
    'The whole A2 band, seq 1 to 34. Every question quotes a unit that has already been taught and none of them is taught again here',
  ],
  grammarIntroduced: [],
  // 'assessment' is not decoration. The `lesson-has-practice` publish gate
  // requires every lesson to release SRS cards, and this one deliberately
  // releases none: see the itemIds: [] above and the test that pins it. The
  // flag is how the gate tells a lesson that examines from one that teaches;
  // without it a2.35 cannot ship at all. `lesson-contract.test.ts` also holds
  // an explicit list of which lessons may carry it, and this build widened
  // that list from the two A1 capstone lessons to four.
  features: ['assessment'],
  overview: {
    titleEn: 'A2 Review, unit by unit',
    subFr: 'Bilan A2',
    introFr: 'Trente-quatre séries de cinq questions, une par leçon.',
    minutes: 45,
    difficulty: 3,
    glyph: '🏁',
    screens: 186,
  },
  acts: REVIEW_ACTS,
  reframe: REFRAME,
  errorTriggers: REVIEW_TRIGGERS,
  drills: REVIEW_DRILLS,
  sheets: [],
  sections: REVIEW_SECTIONS,
  audio: { defaultLang: 'fr-FR', speeds: [1, 0.65], coachVoice: 'coach' },
};

/* ─── a2.35.l2 sections ─────────────────────────────────────────────────── */

const EXAM_SECTIONS: LessonSection[] = [
  {
    type: 'goals',
    id: 's01-brief',
    title: 'The Exam',
    frSub: 'L’examen',
    layer: 'core',
    say: 'Sixty questions, and it will not help you while you answer.',
    goals: [
      {
        t: 'Sixty questions, twelve parts',
        s: 'Each part is a job rather than a unit, and every one of them crosses three or four units. Nothing in here carries an address.',
      },
      {
        t: 'Half of it is the verb',
        s: 'Six parts on the three tenses, three on the words that stand in for things, two on the everyday encounters and one on what modifies them.',
      },
      {
        t: 'No explanations until the end',
        s: 'Right or wrong, you get the next question. Everything you missed is collected and explained on the result card, with the unit to go back to.',
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
    body: 'Nothing in here carries an address. That is the only way this differs from the review, and it is the whole difficulty.',
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
    title: 'L’examen A2',
    frSub: 'Soixante questions',
    layer: 'core',
    passMark: 70,
    // Exam conditions. No explanation and no jump while answering; the result
    // card collects everything missed. No round declares `targets`, so no
    // drill fires between rounds either.
    exam: true,
    say: 'Twelve parts. Nothing is explained until you finish.',
    rounds: EXAM_ROUNDS,
  },

  {
    type: 'roundup',
    id: 's04-roundup',
    title: 'That Is A2',
    frSub: 'C’est fini',
    say: 'What the number means, and what comes after it.',
    body: 'Seventy percent across sixty mixed questions is a real A2, and it is worth being clear about what that means, because it is easy to undersell. It means you can talk about yesterday and about now in the same breath, plan tomorrow, say what you want and can and have to do, replace half the nouns in a sentence with the small words that stand in for them, describe and compare, and get through a restaurant, a till, a station, a surgery, a hotel desk and a first day at work without the sentence dying in the middle. Below seventy, the part scores tell you roughly where it went and the review lesson tells you exactly. There is no version of this where the answer is start over.',
    points: [
      'Nothing in here carries an address.',
      'A part is a job, not a unit, so a weak part usually means three units rather than one.',
      'The three past-tense parts are a quarter of the paper, because that is what A2 is judged on.',
      'Sit the review lesson for anything that went badly, then come back and sit this again.',
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
    milestone: 'A2 complete.',
    estScreens: 63,
    restPoints: ['s03-exam/after-x3', 's03-exam/after-x6', 's03-exam/after-x9'],
  },
];

export const EXAM_LESSON: Lesson = {
  id: 'a2.35.l2',
  unitId: 'a2.35',
  seq: 2,
  title: 'L’examen A2',
  level: 'a2',
  tag: 'A2 · EXAMEN',
  intro: 'Sixty questions across twelve parts, grouped by what they ask you to do rather than by unit, so that nothing tells you which lesson a question came from. Half of it is the verb. No explanations until the end, and no drills. Seventy percent is a pass.',
  itemIds: [],
  version: 1,
  grammarAssumed: [
    'The whole A2 band, seq 1 to 34, and the unit-by-unit review in a2.35.l1',
  ],
  grammarIntroduced: [],
  // See the note on the review lesson. Same flag, same reason.
  features: ['assessment'],
  overview: {
    titleEn: 'The A2 Exam',
    subFr: 'L’examen A2',
    introFr: 'Soixante questions, douze parties, aucune indication de leçon.',
    minutes: 25,
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

export const BILAN_A2_LESSONS: Lesson[] = [REVIEW_LESSON, EXAM_LESSON];
export { REF, REF_EXAM };
