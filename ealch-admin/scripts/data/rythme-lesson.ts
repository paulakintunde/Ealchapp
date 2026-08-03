// sons.08.l1 "Rythme & intonation" — the lesson body.
//
// Reads every French string, IPA and respelling from rythme-corpus.ts rather
// than restating them, for the reason muettes-lesson.ts gives: a sentence typed
// by hand into the drill, the dictée, the quiz and the roundup is four copies
// free to drift apart.
//
// ── The organising idea ────────────────────────────────────────────────────
//
// The unit's own `sub` is "the music of French, even syllables", and it is
// right, so it is kept. The reframe repeated verbatim across the lesson is:
//
//     Even syllables, then one push at the end.
//
// (The unit row's shipped `sub` writes that idea with an em dash. The lesson
// copy does not copy the punctuation: every authored string in this file is
// scanned for em dashes by the house-style guard, and legacy unit rows are the
// documented exception, not a licence for new copy.)
//
// ── Why this lesson is shaped differently from sons.06 ─────────────────────
//
// Three departures from the reference, each deliberate:
//
// 1. NO letterGrid. sons.06 used it for a grid of letters and there are no
//    letters here; rhythm has no orthography at all. Reaching for a section
//    type because the reference used it is how a lesson ends up with a screen
//    that teaches nothing.
//
// 2. listening and dictation carry far more weight. In sons.06 they are one
//    section each. Here they are the assessment: a learner can pass every
//    written question about rhythm and still sound English, because rhythm is
//    inaudible in text. Every act from 3 onward has an ear-first mission.
//
// 3. The acts follow the SYLLABLE RAMP, which is also the BeatRow cap.
//    act1-3 stay inside one-row phrases (<= 9 syllables per group, which is
//    what BeatRow can draw legibly). act4 introduces the phrase break, so a
//    long phrase becomes several short rows. act5-6 carry the 11-15 syllable
//    material, where the beat row is often absent by design and the skill is
//    purely auditory. `deckTranche` releases the SRS cards in the same order,
//    so a tranche never releases a phrase longer than its act has taught.
import type { Lesson } from '../../../ealch-v2/src/content/schema.ts';
import { BY_ID, MINIMAL_PAIRS, RYTHME, RYTHME_IDS } from './rythme-corpus.ts';
import { REFRAME, RYTHME_NARRATION, RYTHME_QUIZ_ROUNDS } from './rythme-quiz.ts';

/** Repeated verbatim across the lesson. A reframe reworded on each appearance
 *  is not a reframe, it is four sentences that happen to be about the same
 *  thing. The guard test pins the count. */
export { REFRAME };

const f = (id: string) => BY_ID[id].fr;
const en = (id: string) => BY_ID[id].en;
/** The corpus stores IPA bare, because that is what an Item.ipa field holds.
 *  A lesson SECTION has to slash-delimit it: density.logic's ipa-notation rule
 *  reads an undelimited transcription on a card as an authoring slip, and it is
 *  right to, because bare IPA beside French text is unreadable. The phrase-break
 *  mark travels inside the slashes. */
const ipa = (id: string) => `/${BY_ID[id].ipa}/`;
const rs = (id: string) => BY_ID[id].respell;

/** Items by tag, so a section names a BAND rather than a hand-typed id list.
 *  The whole point of tagging the corpus was that the ramp becomes queryable;
 *  a section that lists ids by hand is how the other lessons accumulated their
 *  debt. */
const byTag = (...tags: string[]) =>
  RYTHME.filter((r) => tags.every((t) => r.tags.includes(t)));
const ids = (rows: { id: string }[], n?: number) =>
  (n ? rows.slice(0, n) : rows).map((r) => r.id);

// Bands, in ramp order. `tappable` everywhere the learner will see a beat row.
const SHORT = byTag('short', 'tappable');
const MED = byTag('medium', 'tappable');
const LONG = byTag('long');
const RISING = byTag('rising', 'tappable');
const GROUPED = byTag('grouped', 'tappable');
const TRIPLES = byTag('multi-group');

export const RYTHME_LESSON: Lesson = {
  id: 'sons.08.l1',
  unitId: 'sons.08',
  seq: 1,
  level: 'sons',
  tag: 'SONS · LEÇON 08',
  title: 'Rythme & intonation',
  version: 1,
  reframe: REFRAME,
  intro:
    'You have spent this track getting individual sounds right. This lesson is about the shape they make together. French gives every syllable the same length and saves its one push for the end of the group, which is the opposite of what English does. Get this and sentences you already know start sounding French.',
  itemIds: RYTHME_IDS,
  features: ['narrated', 'minimalPairs'],
  grammarAssumed: ['present tense', 'question forms'],

  terms: {
    syllable: {
      term: 'syllable',
      title: 'Syllable',
      body: 'One beat of a word. French gives every one the same length, which is why nothing gets swallowed.',
    },
    group: {
      term: 'group',
      title: 'Rhythm group',
      body: 'A run of words said in one breath. The push lands at the end of each one, not once at the end of the sentence.',
    },
    push: {
      term: 'push',
      title: 'The push',
      body: 'The slight lengthening on the last syllable of a group. Nothing gets louder: it is held, not stressed.',
    },
    contour: {
      term: 'contour',
      title: 'Contour',
      body: 'Whether the voice rises or falls on that final syllable. Up is a question, down is a statement.',
    },
  },

  sheets: [
    {
      id: 'sheet-rhythm',
      title: 'How to read the beat',
      contains: ['the beat row', 'the respelling', 'the break mark'],
      sections: [
        {
          type: 'cheatSheet',
          title: 'How to read the beat',
          rows: [
            { k: 'Even chips', v: 'Even syllables. Nothing is swallowed and nothing is stretched.' },
            { k: 'The last chip', v: 'Bigger and outlined: this is the one that gets the push.' },
            { k: 'A new row', v: 'A new rhythm group. The phrase breathes here.' },
            { k: 'CAPS in [brackets]', v: 'The pushed syllable, in the respelling.' },
            { k: 'The | mark', v: 'Where one group ends and the next begins.' },
          ],
        },
      ],
    },
  ],

  audio: {
    speeds: [1, 0.65],
    recorded: [
      {
        id: 'rec-scene-rhythm',
        desc:
          'Two readings of "Je voudrais un café, s\'il vous plaît." First with ENGLISH rhythm: stress on VOU and CA, unstressed syllables reduced to schwa, uneven lengths. Second with French rhythm: every syllable equal length, one lengthening on PLAIT only. Same voice, same speed, back to back with a 600ms gap. The contrast IS the scene, so the two must be recorded in one take.',
        clipIds: ['scene-english-rhythm', 'scene-french-rhythm'],
      },
      {
        id: 'rec-even-short',
        desc:
          'Six short statements, 3 to 5 syllables, read with strictly even syllable lengths and a single final lengthening: ' +
          ids(SHORT, 6).map(f).join(' / ') +
          '. 900ms between items. Metronome-flat is the target, do not perform them.',
        clipIds: ids(SHORT, 6).map((i) => i.replace('fr.sons.rythme.', 'even-')),
      },
      {
        id: 'rec-push-pairs',
        desc:
          'Eight medium statements read TWICE each: first with the push on the correct group-final syllable, then with the push wrongly placed on the first content word (the English instinct). 400ms between the two readings, 900ms between pairs. Both readings must be the same speed and the same voice or the contrast is unreadable.',
        clipIds: ids(MED, 8).map((i) => i.replace('fr.sons.rythme.', 'push-')),
      },
      {
        id: 'rec-rising',
        desc:
          'Eight questions and eight statements, alternating, so the rise and the fall sit next to each other: ' +
          ids(RISING, 4).map(f).join(' / ') +
          '. The rise is on the final syllable only; the rest of the phrase stays flat and even.',
        clipIds: ids(RISING, 8).map((i) => i.replace('fr.sons.rythme.', 'rise-')),
      },
      {
        id: 'rec-minimal-pairs',
        desc:
          'THE MOST IMPORTANT BRIEF IN THIS LESSON. Eight pairs of sentences with identical words and different grouping. Each pair MUST be recorded in one take, back to back, 500ms apart, so the two readings are directly comparable. Pair 1 for example: "On mange, les enfants." said as TWO groups (break after mange, push on MANGE and on FANTS) then "On mange les enfants." said as ONE group (no break, single push on FANTS). If these are recorded separately or on different days the lesson loses its central argument.',
        clipIds: MINIMAL_PAIRS.flatMap(([a, b]) => [
          a.id.replace('fr.sons.rythme.', 'pair-a-'),
          b.id.replace('fr.sons.rythme.', 'pair-b-'),
        ]),
      },
      {
        id: 'rec-three-groups',
        desc:
          'The eight three-group phrases, each read with two clear breaks and three pushes, at conversational speed: ' +
          ids(TRIPLES, 3).map(f).join(' / ') +
          '. The breaks are short (roughly 200ms), not dramatic pauses.',
        clipIds: ids(TRIPLES, 8).map((i) => i.replace('fr.sons.rythme.', 'triple-')),
      },
      {
        id: 'rec-dictation-08',
        desc:
          'Ten phrases for the dictée, read once at natural speed with correct even rhythm. The learner writes the phrase AND marks where the break falls, so the break must be audible: a real 200ms group boundary, not a swallowed one.',
        clipIds: ids(GROUPED, 10).map((i) => i.replace('fr.sons.rythme.', 'dict-')),
      },
      {
        id: 'rec-listening-08',
        desc:
          'A 45-second monologue at natural conversational speed, using the long phrases (11 to 15 syllables). Rhythm fully natural, not slowed for teaching. This is the only place in the lesson where the learner hears French rhythm at real speed without a beat row on screen.',
        clipIds: ['listening-08-passage'],
      },
      {
        id: 'rec-layered',
        desc:
          'Six long phrases that stack the whole track: a silent letter, an elision, a liaison AND even rhythm in the same sentence. Read at natural speed. These are the "this is what French actually sounds like" clips and they close the lesson.',
        clipIds: ids(LONG, 6).map((i) => i.replace('fr.sons.rythme.', 'layer-')),
      },
    ],
  },

  acts: [
    {
      id: 'act1',
      title: 'Why this matters',
      sections: ['s01-scene', 's02-goals', 's03-anchors'],
      milestone: 'The problem, named.',
      estScreens: 24,
      restPoints: ['s01-scene/end'],
    },
    {
      id: 'act2',
      title: 'Even, all the way',
      sections: ['s04-even', 's04-check', 's05-english', 's06-tap'],
      milestone: 'The flat line, trained.',
      estScreens: 38,
      restPoints: ['s05-english'],
    },
    {
      id: 'act3',
      title: 'The push at the end',
      sections: ['s07-push', 's07-check', 's08-rising', 's09-contrast'],
      milestone: 'The push, placed.',
      estScreens: 40,
      restPoints: ['s08-rising/6'],
    },
    {
      id: 'act4',
      title: 'Where the phrase breaks',
      sections: ['s10-break', 's11-pairs', 's12-pairs-check', 's13-three'],
      milestone: 'The break, heard.',
      estScreens: 42,
      restPoints: ['s11-pairs/8'],
    },
    {
      id: 'act5',
      title: 'Put it together',
      sections: ['s14-examples', 's15-dictation', 's16-listening', 's17-speak'],
      milestone: 'The whole phrase, at speed.',
      estScreens: 44,
      restPoints: ['s15-dictation/1'],
    },
    {
      id: 'act6',
      title: 'Prove it',
      sections: ['s18-layered', 's19-review', 's20-errors', 's21-progress', 's22-quiz', 's23-roundup'],
      milestone: 'Lesson complete.',
      estScreens: 70,
      restPoints: ['s19-review', 's21-progress', 's22-quiz/round2', 's22-quiz/round4'],
    },
  ],

  // One slice per act, in ramp order. Monotonic by construction: each slice is
  // drawn from the band its act taught, so a tranche can never release a phrase
  // longer than the learner has seen. The guard test re-derives this rather
  // than trusting the comment.
  // Built by ASCENDING CEILING, not by convenience. Each slice is drawn from
  // items at or below that act's ceiling and at or above the previous act's
  // floor, so the longest phrase a learner has met only ever grows. The guard
  // test re-derives the ceilings from the items rather than trusting this
  // comment, because an "obvious" ordering is exactly what drifted before.
  deckTranche: (() => {
    const upTo = (n: number) => RYTHME.filter((r) => r.syll <= n && r.tags.includes('tappable'));
    const between = (lo: number, hi: number) =>
      RYTHME.filter((r) => r.syll >= lo && r.syll <= hi);
    const used = new Set<string>();
    const take = (rows: { id: string }[], n: number) => {
      const out: string[] = [];
      for (const r of rows) {
        if (out.length >= n) break;
        if (used.has(r.id)) continue;
        used.add(r.id);
        out.push(r.id);
      }
      return out;
    };
    return [
      take(upTo(4), 6),         // act1: 3-4, the shortest there is
      take(upTo(5), 8),         // act2: still short, everything tappable
      take(between(6, 8), 10),  // act3: medium, one group
      take(between(6, 10), 10), // act4: the grouped ones, up to 10
      take(between(9, 12), 10), // act5: longer, past what act4 reached
      take(between(11, 15), 8), // act6: the longest, taught by ear
    ];
  })(),

  errorTriggers: [
    {
      id: 'trig-flat',
      description: 'The push landed early, on the word carrying the meaning. That is the English instinct, and it needs the stop drill again.',
      detectOn: ['s07-push', 's07-check', 's09-contrast'],
      drill: 's05-english',
      retest: 's07-check',
    },
    {
      id: 'trig-break',
      description: 'The group boundary was missed, so a multi-group phrase came out as one long group.',
      detectOn: ['s11-pairs', 's12-pairs-check', 's15-dictation'],
      drill: 's10-break',
      retest: 's12-pairs-check',
    },
  ],

  sections: [
    // ── ACT 1 ───────────────────────────────────────────────────────────────
    {
      id: 's01-scene',
      type: 'scene',
      title: 'The sentence you already knew',
      layer: 'core',
      size: 'md',
      setting: { place: 'A café counter', city: 'Bordeaux', time: 'Morning' },
      say: {
        text: 'You know every word in this sentence. Watch what happens anyway.',
        voice: 'coach',
        timing: 'onFirstVisitOnly',
      },
      beats: [
        {
          kind: 'narration',
          size: 'md',
          text: 'Third day in Bordeaux. You have ordered coffee twice already and it went fine both times.',
          audio: { mode: 'tts', voice: 'coach' },
        },
        {
          kind: 'narration',
          size: 'md',
          text: 'You know all six words. You have said them before. You say them again.',
          audio: { mode: 'tts', voice: 'coach' },
        },
        {
          kind: 'choice',
          size: 'lg',
          prompt: 'Which one comes out of your mouth?',
          options: [
            {
              fr: 'Je voudrais un café, s\'il vous plaît.',
              en: 'pushing on VOU and CA, the way English would',
              respell: '[zhuh VOO-dreh uhⁿ KA-fay seel voo pleh]',
              audio: { mode: 'recorded', recordingId: 'rec-scene-rhythm' },
              outcome: 'breaks',
            },
            {
              fr: 'Je voudrais un café, s\'il vous plaît.',
              en: 'every syllable the same, one push at the very end',
              respell: '[zhuh voo-dreh uhⁿ ka-FAY | seel voo PLEH]',
              audio: { mode: 'recorded', recordingId: 'rec-scene-rhythm' },
              outcome: 'works',
            },
          ],
          followUp: {
            works:
              'That is the one. Same words, same speed, and it lands as French instead of as English with French vocabulary.',
            breaks:
              'That is what an English mouth does by default, and it is why a sentence you know perfectly can still get a blank look.',
          },
        },
        {
          kind: 'bubble',
          from: 'them',
          speaker: 'Le serveur',
          fr: 'Pardon ?',
          en: 'Sorry?',
          size: 'md',
          reveal: 'tap',
          audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
        },
        {
          kind: 'break',
          size: 'lg',
          heading: 'Nothing was mispronounced',
          body: 'Every sound was right. What went wrong is the shape. English stretches the syllables it cares about and swallows the rest, and French does neither, so the sentence arrived with its emphasis in a place French does not put it.',
          wrong: {
            fr: 'Je voudrais un café, s\'il vous plaît.',
            ipa: '/ʒə vu.dʁɛ œ̃ ka.fe | sil vu plɛ/',
            respell: '[zhuh VOO-dreh uhⁿ KA-fay seel voo pleh]',
            en: 'Two stretched syllables in the middle, the rest hurried.',
          },
          right: {
            fr: 'Je voudrais un café, s\'il vous plaît.',
            ipa: '/ʒə vu.dʁɛ œ̃ ka.fe | sil vu plɛ/',
            respell: '[zhuh voo-dreh uhⁿ ka-FAY | seel voo PLEH]',
            en: 'Every syllable equal, one hold at the end of each group.',
          },
          coach: REFRAME,
        },
        {
          kind: 'resolve',
          size: 'md',
          text: `That is what this lesson fixes, and it is the last rule in the sound track. ${REFRAME}`,
        },
      ],
    },
    {
      id: 's02-goals',
      type: 'goals',
      title: 'What you walk out with',
      frSub: 'Vos objectifs',
      layer: 'core',
      size: 'lg',
      render: 'screens',
      say: {
        text: 'Six things, and every one of them is something you do out loud, not something you know about.',
        voice: 'coach',
        timing: 'onFirstVisitOnly',
      },
      goals: [
        { t: 'Keep it even', s: 'Say a five-syllable phrase with all five syllables the same length, with nothing swallowed and nothing stretched.' },
        { t: 'Place the push', s: 'Put the one lengthening on the last syllable of the group, not on the word you think matters most.' },
        { t: 'Hear the break', s: 'Tell a two-group phrase from a one-group phrase by ear, with no comma on the page to help you.' },
        { t: 'Rise or fall', s: 'End a question upward and a statement downward without changing a single word.' },
        { t: 'Say a long one', s: 'Carry a twelve-syllable sentence without speeding up in the middle or trailing off at the end.' },
        { t: 'Stack it', s: 'Read a sentence with a silent letter, an elision, a liaison and even rhythm all at once, and sound like one person saying one thing.' },
      ],
    },
    {
      id: 's03-anchors',
      type: 'cardDeck',
      title: 'Five things to hold on to',
      layer: 'core',
      size: 'lg',
      swipe: true,
      hint: 'Swipe through. Five cards.',
      terms: ['syllable', 'group', 'push'],
      say: {
        text: 'Five cards. The whole lesson is in these, and the rest is practice.',
        voice: 'coach',
        timing: 'onEnter',
      },
      cards: [
        {
          label: 'THE RULE',
          head: REFRAME,
          body: 'That is the entire system. Everything else in this lesson is a consequence of it.',
        },
        {
          label: 'EVEN',
          head: 'No syllable is more important',
          body: 'English has strong and weak syllables: PHO-to-graph, pho-TO-gra-pher. The weak ones collapse to uh. French does not do this. Every syllable keeps its full value, which is why French can sound fast: nothing is being skipped.',
        },
        {
          label: 'THE PUSH',
          head: 'One lengthening, at the end of the group',
          body: 'It is not a stress in the English sense. Nothing gets louder. The final syllable of the group is simply held a little longer, and that is what marks the end.',
        },
        {
          label: 'THE GROUP',
          head: 'A group is a breath, not a word',
          body: 'The push lands at the end of the GROUP, not at the end of the sentence. A long sentence has several groups, and several pushes. This is the part learners get wrong.',
        },
        {
          label: 'READING IT',
          head: 'Chips, rows, and CAPS',
          body: 'Through this lesson: even chips are even syllables, the bigger outlined chip is the push, and a new row is a new group. In the respelling, the CAPS syllable is the pushed one and the | mark is the break.',
        },
      ],
    },

    // ── ACT 2 ───────────────────────────────────────────────────────────────
    {
      id: 's04-even',
      type: 'groupDrill',
      title: 'Every syllable the same length',
      frSub: 'Des syllabes égales',
      layer: 'core',
      size: 'xl',
      swipe: true,
      render: 'screens',
      terms: ['syllable'],
      say: {
        text: 'Six short ones, starting at three syllables where there is nowhere to hide. Say each one with every syllable the same length, then hold the last one slightly longer. Flat and even will feel robotic at first. That is correct.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-even-short', speeds: [1, 0.65] },
      groups: [
        {
          label: 'Three and four syllables',
          items: ids(SHORT, 6).map((id) => ({
            fr: f(id),
            ipa: ipa(id),
            respell: rs(id),
            en: en(id),
            itemId: id,
            note: `${BY_ID[id].syll} syllables, one group.`,
          })),
        },
      ],
    },
    {
      id: 's04-check',
      type: 'groupDrill',
      title: 'Check',
      frSub: 'Contrôle',
      layer: 'core',
      size: 'md',
      say: { text: 'One question before you move on.', voice: 'coach', timing: 'onEnter' },
      groups: [
        {
          label: 'Even or not',
          items: [],
          check: {
            q: 'In "Il fait froid", which syllable is longest?',
            opts: ['il', 'fait', 'froid', 'they are all the same'],
            correct: 2,
            why: 'The last one, and only slightly. The first two are exactly equal; froid is held a little longer because it ends the group. That single lengthening is the push, and it is the only thing marking the end of the phrase.',
          },
        },
      ],
    },
    {
      id: 's05-english',
      type: 'inhibitionDrill',
      title: 'Training the flat line',
      frSub: 'Ne pas accentuer',
      layer: 'core',
      size: 'md',
      swipe: true,
      render: 'screens',
      terms: ['push'],
      say: {
        text: 'This one is different. You are not learning to add something. You are learning to stop doing something you cannot hear yourself doing.',
        voice: 'coach',
        timing: 'onEnter',
      },
      intro:
        'English stress is automatic and it runs before you have decided anything. You do not choose to stretch the important word, you simply do, and you cannot hear it because it is what normal sounds like. So this cannot be fixed by knowing the rule. It has to become a reflex, and reflexes are built by doing.',
      closing: {
        text: `Do this on one French phrase a day, out loud, anywhere. ${REFRAME} Thirty seconds a day beats an hour once.`,
      },
      targets: [
        {
          label: 'The flat hand',
          sub: 'For any phrase you are about to say too English',
          mic: true,
          audio: { mode: 'recorded', recordingId: 'rec-even-short' },
          steps: [
            'Hold your hand flat, palm down, in front of you.',
            'Say the phrase while moving your hand straight sideways, at a constant speed.',
            'If your hand wants to bounce on a syllable, that is the English stress trying to get in.',
            'Say it again and keep the hand moving evenly all the way to the last syllable.',
            'On the last syllable only, let the hand slow down and stop. That is the push.',
          ],
          practiceOn: ids(SHORT, 4),
        },
        {
          label: 'The syllable count',
          sub: 'For when a phrase keeps collapsing in the middle',
          mic: true,
          audio: { mode: 'recorded', recordingId: 'rec-even-short' },
          steps: [
            'Count the syllables on your fingers before you speak.',
            'Say the phrase and put down one finger per syllable.',
            'If you run out of phrase before you run out of fingers, you swallowed one.',
            'Say it again slower, and make the swallowed syllable as long as the others.',
          ],
          practiceOn: ids(SHORT.slice(4), 4),
        },
      ],
    },
    {
      id: 's06-tap',
      type: 'practice',
      title: 'Tap the beat',
      frSub: 'Tapez le rythme',
      layer: 'core',
      size: 'xl',
      skill: 'listen',
      render: 'screens',
      questionsInModal: true,
      terms: ['syllable', 'group'],
      say: {
        text: 'Tap once per syllable as you say it. Keep the taps evenly spaced, and land the last one a little later than the rest.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-even-short', speeds: [1, 0.65], modelPlayback: true },
      itemIds: ids(SHORT, 10),
    },

    // ── ACT 3 ───────────────────────────────────────────────────────────────
    {
      id: 's07-push',
      type: 'groupDrill',
      title: 'The push lands at the end',
      frSub: 'L\'accent final',
      layer: 'core',
      size: 'xl',
      swipe: true,
      render: 'screens',
      terms: ['push', 'group'],
      say: {
        text: 'Longer phrases now, six to eight syllables, and each one is still a single group. So there is still exactly one push, on the final syllable. Notice it does not move to the word carrying the meaning: it does not care what the sentence is about.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-push-pairs', speeds: [1, 0.65] },
      groups: [
        {
          label: 'Six to eight syllables',
          items: ids(MED, 8).map((id) => ({
            fr: f(id),
            ipa: ipa(id),
            respell: rs(id),
            en: en(id),
            itemId: id,
          })),
        },
      ],
    },
    {
      id: 's07-check',
      type: 'groupDrill',
      title: 'Check',
      frSub: 'Contrôle',
      layer: 'core',
      size: 'md',
      say: { text: 'One question.', voice: 'coach', timing: 'onEnter' },
      groups: [
        {
          label: 'Where does it land',
          items: [],
          check: {
            q: 'An English speaker says a French sentence and pushes the most important word. What has gone wrong?',
            opts: [
              'Nothing, that is also correct in French',
              'The push belongs on the last syllable of the group, not on the important word',
              'French has no push at all',
              'The push should be on the first syllable',
            ],
            correct: 1,
            why: 'French places the push by POSITION, not by meaning. It goes at the end of the group no matter which word carries the sense. Pushing the important word is the single most recognisable English accent in French.',
          },
        },
      ],
    },
    {
      id: 's08-rising',
      type: 'cardDeck',
      title: 'Up for a question, down for a statement',
      layer: 'core',
      size: 'lg',
      swipe: true,
      hint: 'Six cards. Same words, different endings.',
      terms: ['contour'],
      say: {
        text: 'The push tells you where the group ends. The direction tells you what kind of sentence it was.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-rising', speeds: [1, 0.65] },
      cards: [
        {
          label: 'THE SECOND JOB',
          head: 'The last syllable does two things',
          body: 'It carries the push, and it carries the direction. Up means a question. Down means a statement. Everything before it stays flat and even either way.',
        },
        ...ids(RISING, 4).map((id) => ({
          label: 'RISING',
          head: f(id),
          sub: rs(id),
          body: `${en(id)} The voice goes up on the final syllable only. The rest of the phrase is as flat as a statement.`,
        })),
        {
          label: 'NO WORD CHANGES',
          head: 'This is the whole question form',
          body: 'French can turn a statement into a question with nothing but the direction of the last syllable. No inversion, no est-ce que, no extra word. If you keep the contour flat, a question lands as a statement and gets answered as one.',
        },
      ],
    },
    {
      id: 's09-contrast',
      type: 'trapDrill',
      title: 'Where an English speaker puts it',
      frSub: 'Le piège anglais',
      layer: 'core',
      size: 'md',
      swipe: true,
      render: 'screens',
      terms: ['push'],
      say: {
        text: 'Two readings of each phrase. One is French. One is what your mouth wants to do. They are recorded back to back so you can hear the difference rather than read about it.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-push-pairs', speeds: [1, 0.65], maxPlays: 4 },
      rule: {
        title: 'What English does to a French sentence',
        body: 'English marks the important word by stretching it and shortening everything around it. In French that stretches one syllable in the middle and collapses the rest, which is the one shape French never makes.',
      },
      steps: [
        { kind: 'rule', label: 'What English does', title: 'The instinct' },
        { kind: 'cards', label: 'Hear both readings', title: 'Wrong, then right' },
        { kind: 'audio', label: 'Listen straight through', title: 'Both, back to back' },
        { kind: 'drill', label: 'Which one was French?', title: 'Which one was French?', gate: true },
      ],
      cards: ids(MED, 6).map((id) => ({
        promptLabel: 'Where does the push go?',
        promptSound: rs(id),
        fr: f(id),
        ipa: ipa(id),
        tip: `The push is on the last syllable of the group, not on the word that carries the meaning. ${rs(id)}`,
      })),
      drill: ids(MED, 6).map((id) => ({
        promptSay: `Which reading of "${f(id)}" is the French one?`,
        opts: ['The one that pushes the important word', 'The one that pushes the last syllable'],
        correct: 1,
      })),
    },

    // ── ACT 4 ───────────────────────────────────────────────────────────────
    {
      id: 's10-break',
      type: 'cardDeck',
      title: 'A comma is a breath',
      layer: 'core',
      size: 'lg',
      swipe: true,
      hint: 'Swipe. This is where the push stops being simple.',
      terms: ['group', 'push'],
      say: {
        text: 'Everything so far has been one group and one push. Real sentences are longer than that.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-dictation-08', speeds: [1, 0.65] },
      cards: [
        {
          label: 'THE CORRECTION',
          head: 'The push is per GROUP, not per sentence',
          body: 'A long sentence does not get one push at the very end. It breaks into groups, and each group gets its own. This is the part that separates a learner who knows the rule from one who can use it.',
        },
        ...ids(GROUPED, 5).map((id) => ({
          label: `${BY_ID[id].groups} GROUPS`,
          head: f(id),
          sub: rs(id),
          body: `${en(id)} Two pushes, one at the end of each group. The break is where the phrase breathes.`,
        })),
        {
          label: 'ON THE PAGE',
          head: 'The comma is a clue, not the rule',
          body: 'A written comma usually marks a group boundary, which is why these are easy to see. But French breaks phrases where the sense breaks, and plenty of boundaries have no comma at all. The ear is the real guide.',
        },
      ],
    },
    {
      id: 's11-pairs',
      type: 'cardDeck',
      title: 'Same words, different meaning',
      layer: 'core',
      size: 'lg',
      swipe: true,
      hint: 'Eight pairs. Listen to both before you swipe on.',
      terms: ['group', 'push'],
      say: {
        text: 'This is the argument for the whole lesson. Identical words. The only difference is where the phrase breaks, and it changes what the sentence means.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', speeds: [1, 0.65], maxPlays: 5 },
      cards: [
        {
          label: 'WHY THIS MATTERS',
          head: 'Grouping is not decoration',
          body: 'If rhythm were only an accent thing, getting it wrong would make you sound foreign and nothing worse. It is not. Where you break a phrase can change what you said.',
        },
        ...MINIMAL_PAIRS.flatMap(([a, b]) => [
          {
            label: 'TWO GROUPS',
            head: a.fr,
            sub: a.respell,
            body: `${a.en} ${a.gloss ?? ''}`.trim(),
          },
          {
            label: 'ONE GROUP',
            head: b.fr,
            sub: b.respell,
            body: `${b.en} ${b.gloss ?? ''}`.trim(),
          },
        ]),
      ],
    },
    {
      id: 's12-pairs-check',
      type: 'groupDrill',
      title: 'Check',
      frSub: 'Contrôle',
      layer: 'core',
      size: 'md',
      say: { text: 'One question about the pairs.', voice: 'coach', timing: 'onEnter' },
      groups: [
        {
          label: 'The difference',
          items: [],
          check: {
            q: 'You say "On mange les enfants" as one group, with one push at the end. What have you just said?',
            opts: [
              'We are eating, children',
              'We are eating the children',
              'The children are eating',
              'Both readings mean the same thing',
            ],
            correct: 1,
            why: 'One group makes les enfants the object of mange: they are the meal. Breaking after mange makes it a separate group and turns les enfants into who you are talking TO. Same five syllables, and the break is the only thing carrying the difference.',
          },
        },
      ],
    },
    {
      id: 's13-three',
      type: 'practice',
      title: 'Three groups, three pushes',
      frSub: 'Trois groupes',
      layer: 'core',
      size: 'xl',
      skill: 'speak',
      render: 'screens',
      questionsInModal: true,
      terms: ['group', 'push'],
      say: {
        text: 'Three groups each. Say them with a short break between the groups, and a push at the end of every one. Not three separate sentences: one sentence that breathes twice.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'mic', speeds: [1, 0.65], scoreOn: 'targetSegment', modelPlayback: true },
      itemIds: ids(TRIPLES, 8),
    },

    // ── ACT 5 ───────────────────────────────────────────────────────────────
    {
      id: 's14-examples',
      type: 'examples',
      title: 'Sentences you can steal',
      layer: 'core',
      size: 'md',
      render: 'screens',
      say: {
        text: 'Twelve you can use as they are. Each one is marked with where it breaks and where the push lands.',
        voice: 'coach',
        timing: 'onEnter',
      },
      examples: ids(MED.slice(8), 12).map((id) => ({
        fr: f(id),
        en: en(id),
        note: `${rs(id)} · ${BY_ID[id].syll} syllables, ${BY_ID[id].groups === 1 ? 'one group' : `${BY_ID[id].groups} groups`}.`,
      })),
    },
    {
      id: 's15-dictation',
      type: 'dictation',
      title: 'Write what you hear',
      frSub: 'Dictée',
      layer: 'core',
      size: 'md',
      render: 'screens',
      questionsInModal: true,
      terms: ['group'],
      say: {
        text: 'Ten phrases. Write the words, and put the comma where you hear the phrase breathe. The break is audible even when you cannot see it.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-dictation-08', speeds: [1, 0.65], maxPlays: 3 },
      itemIds: ids(GROUPED, 10),
    },
    {
      id: 's16-listening',
      type: 'listening',
      title: 'A message, at speed',
      frSub: 'Compréhension orale',
      layer: 'core',
      size: 'md',
      render: 'screens',
      say: {
        text: 'Natural speed, no beat row, nothing on screen to help. This is the first time you hear the rhythm without a picture of it.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-listening-08', speeds: [1, 0.65] },
      lines: ids(LONG, 5).map((id) => ({ fr: f(id), en: en(id) })),
      questions: [
        {
          q: 'How many groups does the third sentence break into?',
          opts: ['One', 'Two', 'Three'],
          correct: 1,
          why: 'You can hear it without counting words: the voice holds a syllable, breathes, then starts flat again. Each of those holds is the end of a group.',
        },
        {
          q: 'Where did the speaker put the push in the last sentence?',
          opts: ['On the first word', 'On the longest word', 'On the last syllable of each group'],
          correct: 2,
          why: 'Position, not meaning. However long the sentence is and whatever it is about, the push lands at the end of each group.',
        },
      ],
    },
    {
      id: 's17-speak',
      type: 'practice',
      title: 'Say it out loud',
      frSub: 'À vous',
      layer: 'core',
      size: 'xl',
      skill: 'speak',
      render: 'screens',
      questionsInModal: true,
      terms: ['push', 'group'],
      say: {
        text: 'Ten of them, and they are long. Tap, speak, and a model plays straight after. If the middle sped up, say it again with the model.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'mic', speeds: [1, 0.65], scoreOn: 'targetSegment', modelPlayback: true },
      itemIds: ids(MED.slice(20), 10),
    },

    // ── ACT 6 ───────────────────────────────────────────────────────────────
    {
      id: 's18-layered',
      type: 'reading',
      title: 'Everything at once',
      layer: 'core',
      size: 'md',
      questionsInModal: true,
      render: 'screens',
      say: {
        text: 'These stack the whole track. A silent letter, an elision, a liaison and even rhythm, in the same sentence. This is what French actually sounds like.',
        voice: 'coach',
        timing: 'onEnter',
      },
      audio: { mode: 'recorded', recordingId: 'rec-layered', speeds: [1, 0.65] },
      text: ids(LONG, 6)
        .map((id) => `${f(id)}\n${rs(id)}`)
        .join('\n\n'),
      questions: [
        {
          q: 'Of everything this track has taught, which rule applies last, after all the others?',
          a: 'Rhythm. The other rules decide which sounds are there; rhythm decides how they are spaced once they are. That is why it is the last lesson before the Masterclass: it sits on top of everything else.',
        },
        {
          q: 'Read the last sentence aloud. How many pushes did you make?',
          a: 'One per group. Count the rows in the respelling: each | is a break, and each group ends on the CAPS syllable.',
        },
      ],
    },
    {
      id: 's19-review',
      type: 'reviewDeck',
      title: 'The system, not the sentences',
      layer: 'core',
      size: 'lg',
      swipe: true,
      say: {
        text: 'Not the sentences, the system. If you keep four things, keep these.',
        voice: 'coach',
        timing: 'onEnter',
      },
      cards: [
        { front: 'What is the rule, in one line?', back: REFRAME },
        {
          front: 'Where does the push go in a long sentence?',
          back: 'At the end of each GROUP, not once at the end of the sentence. A three-group sentence has three pushes.',
        },
        {
          front: 'What does English do that French does not?',
          back: 'Stretch the important syllable and collapse the rest to uh. French keeps every syllable at full value, which is why it can sound fast.',
        },
        {
          front: 'How do you turn a statement into a question?',
          back: 'Take the final syllable upward instead of downward. No word changes.',
        },
        {
          front: 'Can grouping change the meaning?',
          back: 'Yes. "On mange, les enfants" and "On mange les enfants" are the same five syllables and are not the same sentence.',
        },
      ],
    },
    {
      id: 's20-errors',
      type: 'commonErrors',
      title: 'What goes wrong',
      layer: 'core',
      size: 'md',
      render: 'screens',
      say: {
        text: 'Six things that go wrong, in the order you are likely to hit them.',
        voice: 'coach',
        timing: 'onEnter',
      },
      errors: [
        {
          wrong: 'JE voudrais un CA-fé',
          right: 'je vou-drais un ca-FÉ',
          why: 'The English instinct: push the words that carry meaning. French pushes by position, always at the end of the group.',
        },
        {
          wrong: 'Swallowing the middle: "s\'il vous plaît" as "svouplé"',
          right: 'seel voo PLEH, all three syllables at full value',
          why: 'English reduces unstressed syllables to uh and drops them. French does not reduce, so the syllables you would swallow in English have to stay.',
        },
        {
          wrong: 'One push at the very end of a long sentence',
          right: 'One push at the end of every group',
          why: 'This is the most common half-learned version of the rule. It makes a long sentence sound like one enormous word.',
        },
        {
          wrong: 'A dramatic pause at the comma',
          right: 'A short breath, about two tenths of a second',
          why: 'The break is a boundary, not a silence. Too long and the sentence sounds like two sentences.',
        },
        {
          wrong: 'Ending a question flat',
          right: 'Taking the last syllable upward',
          why: 'In French the contour can be the only thing marking a question. Flat means statement, and it gets answered as one.',
        },
        {
          wrong: 'Speeding up in the middle of a long phrase',
          right: 'The same syllable length from the first to the last',
          why: 'Rushing the middle is English rhythm reappearing under pressure. Even means even the whole way, including the boring parts.',
        },
      ],
    },
    {
      id: 's21-progress',
      type: 'progressCheck',
      title: 'Where you are',
      layer: 'core',
      size: 'md',
      say: { text: 'Before the quiz, a quick look at what you have covered.', voice: 'coach', timing: 'onEnter' },
      body: 'Five acts done. You have gone from three-syllable phrases to fifteen, and from one group to three. The quiz is mostly listening and speaking, because that is the only way to test something you cannot see.',
      stats: [
        { k: 'Even syllables', v: 'Short phrases, said flat, with nothing swallowed' },
        { k: 'The push', v: 'At the end of the group, not on the important word' },
        { k: 'The break', v: 'Heard by ear, and it can change the meaning' },
        { k: 'The contour', v: 'Up for a question, down for a statement' },
      ],
    },
    {
      id: 's22-quiz',
      type: 'quiz',
      title: 'Forty questions',
      layer: 'core',
      size: 'md',
      passMark: 0.75,
      adaptive: true,
      roundFailThreshold: 0.5,
      say: {
        text: 'Five rounds. Most of them ask you to listen or to speak, because rhythm is not something you can prove on paper.',
        voice: 'coach',
        timing: 'onEnter',
      },
      rounds: RYTHME_QUIZ_ROUNDS,
    },
    {
      id: 's23-roundup',
      type: 'roundup',
      title: 'What you take with you',
      layer: 'core',
      size: 'md',
      say: {
        text: 'That is the sound system finished. One idea to keep.',
        voice: 'coach',
        timing: 'onEnter',
      },
      body: `That is the last rule in the sound track, and it is the one that ties the others together. The silent letters, the elisions and the liaisons all decide which sounds are there. Rhythm decides how they are spaced. ${REFRAME} Say that to yourself before you speak and most of the English will fall out of your French on its own.`,
      points: [
        REFRAME,
        'The push is per group. A long sentence breathes several times, and each breath ends on a push.',
        'Nothing gets louder. The final syllable is simply held a little longer.',
        'Up is a question, down is a statement, and no word has to change.',
        'Where you break a phrase can change what you said.',
      ],
    },
  ],

  narration: RYTHME_NARRATION,
};
