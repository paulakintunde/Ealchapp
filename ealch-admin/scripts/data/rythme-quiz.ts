// sons.08.l1 quiz and narration.
//
// ── Why the format mix is a correctness issue, not a preference ────────────
//
// Rhythm is inaudible in text. A learner can know every rule in this lesson,
// answer every written question correctly, and still say "je VOUdrais un CAfé"
// out loud, because the error is motor rather than conceptual. So a quiz that
// is mostly `mcq` measures whether they read the lesson, not whether they can
// do the thing.
//
// The mix, and the argument for each (40 questions, 5 rounds of 8):
//
//   listenChoose  14  (35%)  Two readings, pick the French one. The only format
//                            that tests whether the learner can HEAR the
//                            difference, which is prerequisite to producing it.
//   mcq           10  (25%)  Reserved for the rule ITSELF, where a rule really
//                            is the thing being tested: what English does to an
//                            unstressed vowel, how many pushes a three-group
//                            sentence takes, how long a break lasts.
//   speak          9  (23%)  Say it, scored on the mic. The only format that
//                            tests production, which is the actual can-do.
//   errorSpot      5  (13%)  Find the wrongly placed push in a respelling.
//                            Tests the notation, which is how the lesson
//                            carries rhythm onto the page.
//   typeIn         2  ( 5%)  Write the phrase break in. Tests that the learner
//                            can locate a boundary they can only hear.
//   tapSilent      0  ( 0%)  Deliberately unused. It marks silent letters and
//                            has no meaning for rhythm; including it to hit a
//                            format count would be padding.
//
// speak + listenChoose = 23 of 40 = 58%. Those are the two formats that test
// the audible skill rather than knowledge about it, and they are the majority.
// mcq is 25%, well short of a majority, and every one of those ten asks about
// the RULE rather than about a sound.
//
// sons-08-rythme.test.ts pins all of this so the assessment cannot quietly
// regress into a written test of an audible skill.
import type { LessonNarration, QuizRound } from '../../../ealch-v2/src/content/schema.ts';
import { BY_ID, MINIMAL_PAIRS, RYTHME } from './rythme-corpus.ts';

/** Repeated verbatim across the lesson. Defined HERE rather than imported from
 *  rythme-lesson.ts because the lesson imports this file: the reframe is the
 *  one string both need, and a cycle for one constant is not worth it. The
 *  lesson re-exports it, and the guard test asserts the two agree. */
export const REFRAME = 'Even syllables, then one push at the end.';

/** The corpus stores IPA bare; anything shown on a card must be slash
 *  delimited, which is what density.logic's ipa-notation rule enforces. */
const slashed = (s: string) => `/${s}/`;

const byTag = (...tags: string[]) => RYTHME.filter((r) => tags.every((t) => r.tags.includes(t)));
const SHORT = byTag('short', 'tappable');
const MED = byTag('medium', 'tappable');
const GROUPED = byTag('grouped', 'tappable');
const RISING = byTag('rising', 'tappable');
const TRIPLES = byTag('multi-group');

/** The last word of a phrase group: the one that carries the push, and the one
 *  an errorSpot question asks the learner to name.
 *
 *  errorSpot is a FREE-TEXT card (SilentCards.ErrorSpotCard, string-matched
 *  through the typeIn branch of checkAnswer), so whatever it asks for has to be
 *  typeable. An earlier draft asked the learner to type a bracketed respelling
 *  like "[eel feh FRWA]", which is not a realistic thing to type and showed
 *  nothing about which reading was the mistake. A single French word is. */
function lastWord(fr: string): string {
  const firstGroup = fr.split(',')[0];
  const words = firstGroup.replace(/[.!?]/gu, '').trim().split(/\s+/u);
  return words[words.length - 1];
}

/** Move the CAPS to the wrong syllable, so errorSpot has a plausible decoy
 *  that is wrong in exactly the way an English speaker is wrong. */
function pushedEarly(respell: string): string {
  const inner = respell.replace(/^\[|\]$/gu, '');
  const groups = inner.split('|').map((g) => g.trim());
  const first = groups[0].split(/\s+/u);
  // Lower-case the real (final) push, upper-case an earlier syllable instead.
  const lowered = groups.map((g) =>
    g
      .split(/\s+/u)
      .map((w) =>
        w
          .split('-')
          .map((s) => (/[A-ZÜ]{2,}/u.test(s.replace(/ⁿ/gu, '')) ? s.toLowerCase() : s))
          .join('-')
      )
      .join(' ')
  );
  const target = first[0].split('-');
  target[target.length - 1] = target[target.length - 1].toUpperCase();
  const firstWords = lowered[0].split(/\s+/u);
  firstWords[0] = target.join('-');
  lowered[0] = firstWords.join(' ');
  return `[${lowered.join(' | ')}]`;
}

export const RYTHME_QUIZ_ROUNDS: QuizRound[] = [
  {
    id: 'round1',
    label: 'Even syllables',
    targets: ['trig-flat'],
    say: {
      text: 'Eight on the basic shape. Two of them ask you to speak, so find somewhere you can talk out loud.',
      voice: 'coach',
      timing: 'onEnter',
    },
    questions: [
      {
        q: 'What does French do to the syllables in a phrase?',
        opts: [
          'Gives every one the same length',
          'Stretches the important ones and shortens the rest',
          'Shortens every one equally',
          'Alternates long and short',
        ],
        correct: 0,
        format: 'mcq',
        why: 'Every syllable keeps its full value. That is why nothing gets reduced to uh the way it does in English, and it is why French can sound fast without anything being skipped.',
        ref: 's04-even',
      },
      {
        q: 'Listen. How many syllables did you hear?',
        opts: ['Two', 'Four', 'Five', 'Three'],
        correct: 3,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: SHORT[1].fr, speeds: [1, 0.65] },
        why: 'Three, and all three the same length. Counting them is the first skill: an English ear tends to hear the stretched one as "the" syllable and lose the others.',
        ref: 's04-even',
      },
      {
        q: `Say it: "${SHORT[0].fr}"`,
        format: 'speak',
        target: SHORT[0].fr,
        ipa: slashed(SHORT[0].ipa),
        why: `Three syllables, all the same length, and the last one held slightly longer. ${SHORT[0].respell}`,
        ref: 's04-even',
      },
      {
        q: 'In English, what happens to an unstressed syllable?',
        opts: [
          'It keeps its full vowel',
          'It gets louder',
          'It disappears entirely',
          'It reduces towards uh',
        ],
        correct: 3,
        format: 'mcq',
        why: 'English reduces unstressed vowels to schwa: the second syllable of photograph is not the vowel it is spelled with. French does not reduce, so every syllable you would swallow in English has to survive.',
        ref: 's03-anchors',
      },
      {
        q: 'Listen. Which syllable was held the longest?',
        opts: ['The opening syllable', 'The middle one', 'The last', 'None, they were equal'],
        correct: 2,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: SHORT[3].fr, speeds: [1, 0.65] },
        why: 'The last, and only slightly. If you heard a middle syllable stand out, that was an English ear supplying a stress the speaker did not make.',
        ref: 's04-even',
      },
      {
        q: `Say it: "${SHORT[2].fr}"`,
        format: 'speak',
        target: SHORT[2].fr,
        ipa: slashed(SHORT[2].ipa),
        why: `Flat and even, then hold the last one. ${SHORT[2].respell}`,
        ref: 's06-tap',
      },
      {
        q: 'Which of these is the rule, in one line?',
        opts: [
          REFRAME,
          'Stress the word that matters most',
          'Every syllable gets a push',
          'French has no rhythm rules',
        ],
        correct: 0,
        format: 'mcq',
        why: `${REFRAME} That is the whole system, and everything else in the lesson follows from it.`,
        ref: 's03-anchors',
      },
      {
        q: 'Listen to the four-syllable phrase. How many syllables were held longer than the others?',
        opts: ['None', 'Two', 'All four', 'One'],
        correct: 3,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: SHORT[4].fr, speeds: [1, 0.65] },
        why: 'Exactly one, the last. If you heard two, one of them was an English stress arriving early.',
        ref: 's04-check',
      },
    ],
  },
  {
    id: 'round2',
    label: 'Where the push lands',
    targets: ['trig-flat'],
    say: {
      text: 'Eight on placement. This is the round that catches the English instinct.',
      voice: 'coach',
      timing: 'onEnter',
    },
    questions: [
      {
        q: 'Where does the push go in a French rhythm group?',
        opts: [
          'On the word that carries the meaning',
          'On the first syllable',
          'On the last syllable of the group',
          'Wherever the speaker chooses',
        ],
        correct: 2,
        format: 'mcq',
        why: 'By position, never by meaning. French does not move the push to the important word, which is exactly what English does and why the English version is so recognisable.',
        ref: 's07-push',
      },
      {
        q: `This reading is WRONG: ${pushedEarly(MED[0].respell)}\n\n"${MED[0].fr}"\n\nType the word that should carry the push instead.`,
        format: 'errorSpot',
        accept: [lastWord(MED[0].fr)],
        answer: lastWord(MED[0].fr),
        why: `The push goes on the last word of the group, not on the word that carries the meaning. ${MED[0].respell}`,
        ref: 's07-push',
      },
      {
        q: 'Listen. Which word did the voice hold at the end?',
        opts: [lastWord(MED[0].fr), MED[0].fr.split(/\s+/u)[0], MED[0].fr.split(/\s+/u)[1]],
        correct: 0,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: MED[0].fr, speeds: [1, 0.65] },
        why: 'The last word of the group, every time. French marks the end by position and lets the words carry their own weight, where English would lean on whichever word it thought mattered.',
        ref: 's09-contrast',
      },
      {
        q: `Say it, with the push at the end: "${MED[1].fr}"`,
        format: 'speak',
        target: MED[1].fr,
        ipa: slashed(MED[1].ipa),
        why: `Everything even, then hold the final syllable only. ${MED[1].respell}`,
        ref: 's07-push',
      },
      {
        q: `This reading is WRONG: ${pushedEarly(MED[2].respell)}\n\n"${MED[2].fr}"\n\nType the word that should carry the push instead.`,
        format: 'errorSpot',
        accept: [lastWord(MED[2].fr)],
        answer: lastWord(MED[2].fr),
        why: `The push landed early, on the first content word. That is the English instinct. It belongs on the group-final syllable: ${MED[2].respell}`,
        ref: 's09-contrast',
      },
      {
        q: 'Does the push make the syllable louder?',
        opts: [
          'Yes, louder and higher',
          'Yes, and the others get quieter',
          'It depends on the sentence',
          'No, it is held slightly longer',
        ],
        correct: 3,
        format: 'mcq',
        why: 'It is a lengthening, not a stress. Nothing gets louder and nothing else gets quieter, which is why it sounds so different from English emphasis.',
        ref: 's03-anchors',
      },
      {
        q: 'Listen. Where did the push land?',
        opts: ['On the first word', 'On the middle word', 'On the last syllable'],
        correct: 2,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: MED[5].fr, speeds: [1, 0.65] },
        why: 'At the end of the group, as always. Whatever the sentence is about, the position does not move.',
        ref: 's07-push',
      },
      {
        q: `Say it: "${MED[3].fr}"`,
        format: 'speak',
        target: MED[3].fr,
        ipa: slashed(MED[3].ipa),
        why: `Resist the urge to lean on the word that matters. ${MED[3].respell}`,
        ref: 's17-speak',
      },
    ],
  },
  {
    id: 'round3',
    label: 'Rising and falling',
    say: {
      text: 'Eight on direction. Same words, different endings.',
      voice: 'coach',
      timing: 'onEnter',
    },
    questions: [
      {
        q: 'How does French mark a question with no extra word and no inversion?',
        opts: [
          'By speaking faster',
          'By stressing the first word',
          'By taking the final syllable upward',
          'It cannot be done',
        ],
        correct: 2,
        format: 'mcq',
        why: 'The contour alone can carry it. That is why a flat question gets answered as a statement: nothing else in the sentence marked it.',
        ref: 's08-rising',
      },
      {
        q: 'Listen. Was that a question or a statement?',
        opts: ['A question', 'A statement'],
        correct: 0,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: RISING[2].fr, speeds: [1, 0.65] },
        why: 'The final syllable went up. Everything before it was as flat as a statement, which is exactly the point: the direction is the only clue.',
        ref: 's08-rising',
      },
      {
        q: `Say it as a question: "${RISING[0].fr}"`,
        format: 'speak',
        target: RISING[0].fr,
        ipa: slashed(RISING[0].ipa),
        why: `Flat and even all the way, then up on the last syllable only. ${RISING[0].respell}`,
        ref: 's08-rising',
      },
      {
        q: 'Listen. Was that a question or a statement?',
        opts: ['A question', 'A statement'],
        correct: 1,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: SHORT[5].fr, speeds: [1, 0.65] },
        why: 'The final syllable fell. Same rhythm as the question, opposite direction on one syllable.',
        ref: 's08-rising',
      },
      {
        q: 'What happens to the syllables BEFORE the final one in a question?',
        opts: [
          'They rise gradually',
          'They stay flat and even, exactly as in a statement',
          'They get faster',
          'They get louder',
        ],
        correct: 1,
        format: 'mcq',
        why: 'The rise is on the last syllable only. Learners often ramp the whole phrase upward, which sounds like surprise rather than a question.',
        ref: 's08-rising',
      },
      {
        q: `Say it as a question: "${RISING[1].fr}"`,
        format: 'speak',
        target: RISING[1].fr,
        ipa: slashed(RISING[1].ipa),
        why: `Do not ramp the whole phrase. Flat, flat, flat, then up. ${RISING[1].respell}`,
        ref: 's08-rising',
      },
      {
        q: 'Listen. Does this want an answer, or agreement?',
        opts: ['An answer: it is a question', 'Agreement: it is a statement'],
        correct: 0,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: RISING[3].fr, speeds: [1, 0.65] },
        why: 'It rose on the last syllable, so it is a question and it wants an answer. A falling ending would be a statement, wanting agreement, with not one word changed.',
        ref: 's08-rising',
      },
      {
        q: 'Listen. The speaker meant it as a question. Did it land as one?',
        opts: ['Yes', 'No, the ending stayed flat'],
        correct: 1,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: RISING[4].fr, speeds: [1, 0.65] },
        why: 'A flat ending reads as a statement whatever the speaker intended. This is the single most common way a French question fails to be heard as one.',
        ref: 's20-errors',
      },
    ],
  },
  {
    id: 'round4',
    label: 'Where the phrase breaks',
    targets: ['trig-break'],
    say: {
      text: 'Eight on grouping. This is where the push stops being simple, and where it can change what you said.',
      voice: 'coach',
      timing: 'onEnter',
    },
    questions: [
      {
        q: 'A sentence breaks into three groups. How many pushes does it get?',
        opts: ['One, at the very end', 'Two', 'Three, one per group', 'None'],
        correct: 2,
        format: 'mcq',
        why: 'One per group. The half-learned version of this rule puts a single push at the end of the sentence, which makes a long sentence sound like one enormous word.',
        ref: 's10-break',
      },
      {
        q: `"${MINIMAL_PAIRS[1][1].fr}" said as ONE group. What does it mean?`,
        opts: [
          MINIMAL_PAIRS[1][0].en,
          MINIMAL_PAIRS[1][1].en,
          'The children are eating',
          'Both readings are identical',
        ],
        correct: 1,
        format: 'mcq',
        why: 'One group makes les enfants the object: they are the meal. Breaking after mange turns them into who you are speaking to. Five syllables either way, and the break is the only difference.',
        ref: 's11-pairs',
      },
      {
        q: 'Listen. How many groups did the voice break this into?',
        opts: ['One, straight through', 'Two, with a breath in the middle'],
        correct: 1,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: MINIMAL_PAIRS[1][0].fr, speeds: [1, 0.65] },
        why: 'Two, breaking after mange. That break is what turns les enfants into who you are speaking TO rather than what you are eating. One group would mean the other thing.',
        ref: 's11-pairs',
      },
      {
        q: `"${GROUPED[0].fr.replace(',', '')}"\n\nThe voice breathes once. Type the LAST WORD before the break.`,
        format: 'typeIn',
        accept: [lastWord(GROUPED[0].fr)],
        answer: lastWord(GROUPED[0].fr),
        why: `You can hear it without seeing it: the voice holds that syllable, breathes, then starts flat again. ${GROUPED[0].respell}`,
        ref: 's15-dictation',
      },
      {
        q: 'Listen. How many groups?',
        opts: ['One', 'Two', 'Three'],
        correct: 2,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: TRIPLES[4].fr, speeds: [1, 0.65] },
        why: 'Count the holds, not the words. Each lengthening followed by a short breath is the end of a group.',
        ref: 's13-three',
      },
      {
        q: `Say it with all three pushes: "${TRIPLES[0].fr}"`,
        format: 'speak',
        target: TRIPLES[0].fr,
        ipa: slashed(TRIPLES[0].ipa),
        why: `Not three separate sentences: one sentence that breathes twice. ${TRIPLES[0].respell}`,
        ref: 's13-three',
      },
      {
        q: 'How long is the break between groups?',
        opts: [
          'A full second, clearly audible',
          'There is no gap at all',
          'As long as the speaker likes',
          'About two tenths of a second',
        ],
        correct: 3,
        format: 'mcq',
        why: 'A boundary, not a silence. Stretch it and the sentence stops sounding like one sentence.',
        ref: 's20-errors',
      },
      {
        q: `"${GROUPED[2].fr.replace(',', '')}"\n\nType the LAST WORD before the break.`,
        format: 'typeIn',
        accept: [lastWord(GROUPED[2].fr)],
        answer: lastWord(GROUPED[2].fr),
        why: `The break follows the sense: the first group sets the scene and the second says what happened. ${GROUPED[2].respell}`,
        ref: 's15-dictation',
      },
    ],
  },
  {
    id: 'round5',
    label: 'All of it, at speed',
    targets: ['trig-flat', 'trig-break'],
    say: {
      text: 'The last eight. Long phrases, everything stacked, and mostly by ear.',
      voice: 'coach',
      timing: 'onEnter',
    },
    questions: [
      {
        q: 'Listen to the twelve-syllable sentence. What went wrong in the middle?',
        opts: ['Nothing', 'The speaker sped up', 'The speaker paused', 'The pitch rose'],
        correct: 1,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: GROUPED[4].fr, speeds: [1, 0.65] },
        why: 'Rushing the middle is English rhythm reappearing under pressure. Even means even the whole way, including the parts that feel like filler.',
        ref: 's20-errors',
      },
      {
        q: `This reading is WRONG: ${pushedEarly(GROUPED[1].respell)}\n\n"${GROUPED[1].fr}"\n\nType the word that should carry the push instead.`,
        format: 'errorSpot',
        accept: [lastWord(GROUPED[1].fr)],
        answer: lastWord(GROUPED[1].fr),
        why: `The first group lost its push and the sentence ran on as if it were one group. ${GROUPED[1].respell}`,
        ref: 's10-break',
      },
      {
        q: 'Listen. Where does the voice breathe in this one?',
        opts: ['It does not, it runs straight through', 'Once, part way', 'Twice'],
        correct: 1,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: GROUPED[5].fr, speeds: [1, 0.65] },
        why: 'Once. The other rules of this track decide which sounds exist; rhythm decides how they are spaced, and the breath is where the spacing shows.',
        ref: 's18-layered',
      },
      {
        q: `Say the whole thing: "${TRIPLES[1].fr}"`,
        format: 'speak',
        target: TRIPLES[1].fr,
        ipa: slashed(TRIPLES[1].ipa),
        why: `Three groups, three pushes, no speeding up in the middle. ${TRIPLES[1].respell}`,
        ref: 's17-speak',
      },
      {
        q: `This reading is WRONG: ${pushedEarly(MED[4].respell)}\n\n"${MED[4].fr}"\n\nType the word that should carry the push instead.`,
        format: 'errorSpot',
        accept: [lastWord(MED[4].fr)],
        answer: lastWord(MED[4].fr),
        why: `The push moved to the word carrying the meaning. French does not do that at any speed. ${MED[4].respell}`,
        ref: 's09-contrast',
      },
      {
        q: 'Listen to the long sentence. How many pushes did you hear?',
        opts: ['One', 'Two', 'Three', 'None'],
        correct: 1,
        format: 'listenChoose',
        audio: { mode: 'tts', lang: 'fr-FR', clip: GROUPED[6].fr, speeds: [1, 0.65] },
        why: 'Two groups, so two pushes. The number of pushes tells you how the speaker grouped it, which is information the written sentence does not always give you.',
        ref: 's16-listening',
      },
      {
        q: `Say it: "${TRIPLES[2].fr}"`,
        format: 'speak',
        target: TRIPLES[2].fr,
        ipa: slashed(TRIPLES[2].ipa),
        why: `Last one. Even all the way, a short breath at each break, and a hold at the end of every group. ${TRIPLES[2].respell}`,
        ref: 's13-three',
      },
      {
        q: `This reading is WRONG: ${pushedEarly(TRIPLES[3].respell)}\n\n"${TRIPLES[3].fr}"\n\nType the word that should carry the push instead.`,
        format: 'errorSpot',
        accept: [lastWord(TRIPLES[3].fr)],
        answer: lastWord(TRIPLES[3].fr),
        why: `A three-group sentence needs three pushes. This one front-loads the first group and lets the rest run flat. ${TRIPLES[3].respell}`,
        ref: 's13-three',
      },
    ],
  },
];

export const RYTHME_NARRATION: LessonNarration = {
  camilleVoiceId: 'camille-fr-ca-01',
  ratioEnFr: 0.7,
  stages: [
    {
      stage: 'warm',
      segments: [
        {
          voice: 'en',
          text: `Hi, I am Camille. This lesson is about the music of French, and the whole of it fits in one line. ${REFRAME}`,
        },
        {
          voice: 'en',
          text: 'You already know the sounds. What we are fixing today is the shape they make together, because that is the part that still says English.',
        },
        { voice: 'fr', text: 'Il fait froid.' },
        {
          voice: 'en',
          text: 'Three syllables, all the same length, and only the last one held. Say it with me.',
        },
        { kind: 'repeat', itemId: BY_ID['fr.sons.rythme.001'].id },
      ],
    },
    {
      stage: 'focus',
      segments: [
        {
          voice: 'en',
          text: `Here is the whole rule, and I am going to say it the same way every time. ${REFRAME}`,
        },
        {
          voice: 'en',
          text: 'English stretches the syllable it cares about and swallows the rest. French does neither. Nothing is swallowed, and the only thing marking the end is a slight hold.',
        },
        { voice: 'fr', text: 'Le chat dort.' },
        { kind: 'repeat', itemId: BY_ID['fr.sons.rythme.002'].id },
      ],
    },
    {
      stage: 'input',
      segments: [
        {
          voice: 'en',
          text: 'Now longer. Six to eight syllables, still one group, so still one push at the very end. Listen for how flat the middle stays.',
        },
        { voice: 'fr', text: MED[0].fr },
        { kind: 'repeat', itemId: MED[0].id },
        { voice: 'fr', text: MED[1].fr },
        { kind: 'repeat', itemId: MED[1].id },
        {
          voice: 'en',
          text: 'Notice the push did not move to the important word. It does not care what the sentence is about.',
        },
      ],
    },
    {
      stage: 'practice',
      segments: [
        {
          voice: 'en',
          text: 'Your turn without me leading. I will give you the English, you give me the French, and keep it flat until the last syllable.',
        },
        {
          kind: 'produce',
          itemId: SHORT[0].id,
          expected: SHORT[0].fr,
          gradeAs: 'produce',
        },
        {
          kind: 'produce',
          itemId: MED[2].id,
          expected: MED[2].fr,
          gradeAs: 'produce',
        },
      ],
    },
    {
      stage: 'produce',
      segments: [
        {
          voice: 'en',
          text: 'Now a sentence that breaks in two. Two groups means two pushes: one at the end of each. Do not run them together.',
        },
        { voice: 'fr', text: GROUPED[0].fr },
        {
          kind: 'produce',
          itemId: GROUPED[0].id,
          expected: GROUPED[0].fr,
          gradeAs: 'produce',
        },
        {
          voice: 'en',
          text: 'And one more, three groups this time. One sentence that breathes twice, not three sentences.',
        },
        {
          kind: 'produce',
          itemId: TRIPLES[0].id,
          expected: TRIPLES[0].fr,
          gradeAs: 'produce',
        },
      ],
    },
    {
      stage: 'check',
      segments: [
        {
          voice: 'en',
          text: 'One check. I am going to say this two ways, and only one of them is French.',
        },
        {
          kind: 'check',
          itemId: MINIMAL_PAIRS[1][0].id,
          expected: MINIMAL_PAIRS[1][0].fr,
          gradeAs: 'discriminate',
        },
        {
          voice: 'en',
          text: 'If you heard the break after mange, you heard someone calling the children to the table. Without it, the children are the meal.',
        },
      ],
    },
    {
      stage: 'cheat',
      segments: [
        { voice: 'en', text: `Three things to keep. ${REFRAME}` },
        {
          voice: 'en',
          text: 'The push is per group, not per sentence. A long sentence breathes several times and each breath ends on a hold.',
        },
        {
          voice: 'en',
          text: 'And up is a question, down is a statement, with no word changing.',
        },
        { voice: 'fr', text: 'À bientôt.' },
      ],
    },
  ],
};
