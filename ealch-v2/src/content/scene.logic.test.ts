import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  advance,
  breakFraming,
  choose,
  choseCorrectly,
  followUpFor,
  initialSceneState,
  isBlocked,
  isComplete,
  sceneProgress,
} from './scene.logic.ts';
import type { SceneBeat } from './schema.ts';

/** The sons.06.l1 opening, in miniature: narration, a choice, the break that
 *  explains it, and a resolve. */
const beats: SceneBeat[] = [
  { kind: 'narration', text: 'You rehearsed this on the tram.' },
  { kind: 'bubble', from: 'them', fr: 'Bonjour, vous désirez ?', en: 'Morning, what would you like?' },
  {
    kind: 'choice',
    prompt: 'How do you say it?',
    options: [
      { fr: 'deux', respell: '[DEU]', en: 'two sounds', outcome: 'works' },
      { fr: 'deux', respell: '[DEUKS]', en: 'four sounds', outcome: 'breaks' },
    ],
    followUp: { works: 'That is the one.', breaks: 'That is the instinct almost every English reader has.' },
  },
  {
    kind: 'break',
    heading: 'The x is not there',
    body: 'You added a sound French does not have.',
    wrong: { fr: 'deuks', ipa: '/døks/', en: 'not a French word' },
    right: { fr: 'deux', ipa: '/dø/', en: 'two' },
  },
  { kind: 'resolve', text: 'One silent letter was the entire difference.' },
];

const CHOICE = 2;
const BREAK = 3;

test('a scene starts on its first beat with nothing chosen', () => {
  const s = initialSceneState();
  strictEqual(s.index, 0);
  ok(!isBlocked(beats, s));
});

test('ordinary beats advance on tap', () => {
  let s = initialSceneState();
  s = advance(beats, s);
  strictEqual(s.index, 1);
  s = advance(beats, s);
  strictEqual(s.index, CHOICE);
});

test('a choice beat blocks until the learner commits', () => {
  let s = { index: CHOICE, choices: {} };
  ok(isBlocked(beats, s), 'blocked before answering');
  // Tapping through does nothing: committing is the point.
  strictEqual(advance(beats, s).index, CHOICE);
  s = choose(s, CHOICE, 1);
  ok(!isBlocked(beats, s), 'unblocked once answered');
  strictEqual(advance(beats, s).index, BREAK);
});

test('the first answer stands — a second tap cannot change it', () => {
  let s = choose({ index: CHOICE, choices: {} }, CHOICE, 1);
  s = choose(s, CHOICE, 0);
  strictEqual(s.choices[CHOICE], 1);
});

test('choseCorrectly reads the outcome, not the index', () => {
  const right = choose({ index: CHOICE, choices: {} }, CHOICE, 0);
  const wrong = choose({ index: CHOICE, choices: {} }, CHOICE, 1);
  strictEqual(choseCorrectly(beats, right, CHOICE), true);
  strictEqual(choseCorrectly(beats, wrong, CHOICE), false);
  strictEqual(choseCorrectly(beats, initialSceneState(), CHOICE), null, 'null while unanswered');
});

test('the follow-up line matches the outcome', () => {
  const right = choose({ index: CHOICE, choices: {} }, CHOICE, 0);
  const wrong = choose({ index: CHOICE, choices: {} }, CHOICE, 1);
  strictEqual(followUpFor(beats, right, CHOICE), 'That is the one.');
  strictEqual(followUpFor(beats, wrong, CHOICE), 'That is the instinct almost every English reader has.');
});

test('THE BREAK PLAYS ON A CORRECT CHOICE AS WELL AS A WRONG ONE', () => {
  // The rule most likely to be "optimised" away by someone reading the break
  // as a penalty screen. It is the teaching, not a punishment for guessing.
  const right = choose({ index: BREAK, choices: {} }, CHOICE, 0);
  const wrong = choose({ index: BREAK, choices: {} }, CHOICE, 1);

  const afterRight = breakFraming(beats, right, BREAK);
  const afterWrong = breakFraming(beats, wrong, BREAK);

  ok(afterRight.shown, 'the break is shown after a CORRECT choice');
  ok(afterWrong.shown, 'the break is shown after a wrong choice');

  // Same screen, different lead-in.
  strictEqual(afterRight.mode, 'confirmation');
  strictEqual(afterWrong.mode, 'correction');
});

test('a break with no choice before it still shows', () => {
  const lone: SceneBeat[] = [
    { kind: 'narration', text: 'x' },
    { kind: 'break', heading: 'h', body: 'b', wrong: { fr: 'a', ipa: '/a/', en: 'a' }, right: { fr: 'b', ipa: '/b/', en: 'b' } },
  ];
  const f = breakFraming(lone, { index: 1, choices: {} }, 1);
  ok(f.shown);
  strictEqual(f.mode, 'correction');
});

test('the scene cannot advance past its last beat', () => {
  const s = { index: beats.length - 1, choices: { [CHOICE]: 0 } };
  strictEqual(advance(beats, s).index, beats.length - 1);
  ok(isComplete(beats, s));
});

test('an unanswered choice is not completion, even on the last beat', () => {
  const onlyChoice: SceneBeat[] = [beats[CHOICE]];
  ok(!isComplete(onlyChoice, { index: 0, choices: {} }));
  ok(isComplete(onlyChoice, { index: 0, choices: { 0: 0 } }));
});

test('progress runs from the first beat to the last', () => {
  ok(sceneProgress(beats, { index: 0, choices: {} }) < 1);
  strictEqual(sceneProgress(beats, { index: beats.length - 1, choices: {} }), 1);
});
