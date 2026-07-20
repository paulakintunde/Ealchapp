// Phase 7 narration walker guard. Plain Node, no device/bundler — see the
// header of narration.logic.ts for why that's load-bearing.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { LessonNarration } from './schema.ts';
import { flattenNarration, interactionPauseMs, langForVoice, precedingSegmentText, stageRanges } from './narration.logic.ts';

const SAMPLE: LessonNarration = {
  camilleVoiceId: 'fr-ca-x-cab',
  ratioEnFr: 0.7,
  stages: [
    {
      stage: 'warm',
      segments: [
        { voice: 'en', text: "Let's warm up." },
        { voice: 'fr', text: 'Bonjour !' },
        { kind: 'repeat' },
      ],
    },
    {
      stage: 'produce',
      segments: [
        { voice: 'fr', text: 'Comment allez-vous ?' },
        { kind: 'produce', itemId: 'fr.a1.cafe.001', expected: 'Je vais bien', gradeAs: 'produce' },
      ],
    },
  ],
};

test('flattenNarration preserves order and tags each step with its stage', () => {
  const steps = flattenNarration(SAMPLE);
  strictEqual(steps.length, 5);
  deepStrictEqual(
    steps.map((s) => s.kind),
    ['segment', 'segment', 'interaction', 'segment', 'interaction']
  );
  strictEqual(steps[0].stage, 'warm');
  strictEqual(steps[3].stage, 'produce');
  strictEqual(steps[4].kind === 'interaction' && steps[4].interaction.itemId, 'fr.a1.cafe.001');
});

test('flattenNarration on an empty stage list is an empty walk', () => {
  deepStrictEqual(flattenNarration({ camilleVoiceId: 'x', ratioEnFr: 0, stages: [] }), []);
});

test('stageRanges groups the flattened steps back into their stage boundaries', () => {
  const ranges = stageRanges(flattenNarration(SAMPLE));
  deepStrictEqual(ranges, [
    { stage: 'warm', stageIndex: 0, startStep: 0, endStep: 2 },
    { stage: 'produce', stageIndex: 1, startStep: 3, endStep: 4 },
  ]);
});

test('langForVoice maps the authoring shorthand to a real BCP-47 tag', () => {
  strictEqual(langForVoice('fr'), 'fr-FR');
  strictEqual(langForVoice('en'), 'en-US');
});

test('interactionPauseMs floors on a missing or short preceding segment', () => {
  strictEqual(interactionPauseMs(undefined), 1500);
  strictEqual(interactionPauseMs('Oui'), 1500);
});

test('interactionPauseMs scales with word count between the floor and ceiling', () => {
  const short = interactionPauseMs('Bonjour');
  const long = interactionPauseMs('Comment allez-vous aujourd’hui, mon ami');
  strictEqual(short, 1500);
  strictEqual(long > short, true);
  strictEqual(long <= 8000, true);
});

test('interactionPauseMs never exceeds its ceiling on a very long segment', () => {
  const veryLong = Array.from({ length: 40 }, () => 'mot').join(' ');
  strictEqual(interactionPauseMs(veryLong), 8000);
});

test('precedingSegmentText walks backward to the nearest spoken segment', () => {
  const steps = flattenNarration(SAMPLE);
  // steps[2] is the 'repeat' interaction; the segment right before it is 'Bonjour !'.
  strictEqual(precedingSegmentText(steps, 2), 'Bonjour !');
  // steps[4] is 'produce'; immediately preceded by 'Comment allez-vous ?'.
  strictEqual(precedingSegmentText(steps, 4), 'Comment allez-vous ?');
});

test('precedingSegmentText is undefined when an interaction opens the walk', () => {
  const opensWithInteraction: LessonNarration = {
    camilleVoiceId: 'x',
    ratioEnFr: 0,
    stages: [{ stage: 'warm', segments: [{ kind: 'check' }] }],
  };
  const steps = flattenNarration(opensWithInteraction);
  strictEqual(precedingSegmentText(steps, 0), undefined);
});

test('precedingSegmentText is undefined between two back-to-back interactions', () => {
  const backToBack: LessonNarration = {
    camilleVoiceId: 'x',
    ratioEnFr: 0,
    stages: [
      {
        stage: 'check',
        segments: [{ voice: 'fr', text: 'Ça va ?' }, { kind: 'check' }, { kind: 'repeat' }],
      },
    ],
  };
  const steps = flattenNarration(backToBack);
  strictEqual(precedingSegmentText(steps, 2), undefined);
});
