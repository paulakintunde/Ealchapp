import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  MIN_DURATION_FOR_WPM_MS,
  PAUSE_MS,
  computeDeliverySignals,
  countWords,
  deliveryNote,
  deliverySummary,
  pausesFrom,
} from './deliverySignals.logic.ts';

const base = { transcript: 'un deux trois', durationMs: 10_000, confidence: 0.8 };

test('a signal exists only if it was measured', () => {
  // THE rule of this module. No defaults, no zero-fill, no "assume average".
  const s = computeDeliverySignals({ transcript: '', durationMs: 0, confidence: -1 });
  strictEqual(s.wpm, undefined, 'no words and no duration is not 0 wpm');
  strictEqual(s.pauseCount, undefined, 'no samples is not "no pauses"');
  strictEqual(s.longestPauseMs, undefined);
  strictEqual(s.confidence, undefined, '-1 means unreported, not zero confidence');
  // The two things always known stay present.
  strictEqual(s.durationMs, 0);
  strictEqual(s.words, 0);
});

test('confidence is dropped unless the recogniser actually reported one', () => {
  // stt.ts uses -1 for "did not report". Substituting a plausible default would
  // invent evidence about a candidate's speech.
  strictEqual(computeDeliverySignals({ ...base, confidence: -1 }).confidence, undefined);
  strictEqual(computeDeliverySignals({ ...base, confidence: 0 }).confidence, 0, 'zero IS a measurement');
  strictEqual(computeDeliverySignals({ ...base, confidence: 0.8 }).confidence, 0.8);
  strictEqual(computeDeliverySignals({ ...base, confidence: 1 }).confidence, 1);
  // Out of range is not a confidence.
  strictEqual(computeDeliverySignals({ ...base, confidence: 1.4 }).confidence, undefined);
});

test('words per minute needs an answer long enough to mean anything', () => {
  // A five-word answer in 0.8 s reads as 375 wpm and measures nothing.
  strictEqual(computeDeliverySignals({ ...base, durationMs: 800 }).wpm, undefined);
  strictEqual(computeDeliverySignals({ ...base, durationMs: MIN_DURATION_FOR_WPM_MS - 1 }).wpm, undefined);
  // 3 words in 10 s = 18 wpm.
  strictEqual(computeDeliverySignals({ ...base, durationMs: 10_000 }).wpm, 18);
  // 150 words in 60 s = 150 wpm.
  const long = 'mot '.repeat(150).trim();
  strictEqual(computeDeliverySignals({ transcript: long, durationMs: 60_000, confidence: -1 }).wpm, 150);
  // Silence for a long time is not a wpm either.
  strictEqual(computeDeliverySignals({ transcript: '', durationMs: 60_000, confidence: -1 }).wpm, undefined);
});

test('countWords matches the writing tasks’ counter', () => {
  strictEqual(countWords(''), 0);
  strictEqual(countWords('   '), 0);
  strictEqual(countWords('un'), 1);
  strictEqual(countWords('  un   deux  '), 2);
  strictEqual(countWords('un\ndeux\ttrois'), 3);
});

/* ─── pauses ─────────────────────────────────────────────────────────────── */

test('a pause is a gap where the transcript did not grow', () => {
  // Speaking slowly is not pausing. If words appeared across the interval, the
  // candidate was producing speech however unhurried.
  const speaking = [
    { atMs: 0, words: 0 },
    { atMs: 3000, words: 4 },
    { atMs: 6000, words: 9 },
  ];
  deepStrictEqual(pausesFrom(speaking), { pauseCount: 0, longestPauseMs: 0 });

  const hesitating = [
    { atMs: 0, words: 0 },
    { atMs: 1000, words: 3 },
    { atMs: 5000, words: 3 }, // 4 s and nothing new
    { atMs: 6000, words: 6 },
  ];
  deepStrictEqual(pausesFrom(hesitating), { pauseCount: 1, longestPauseMs: 4000 });
});

test('a gap shorter than the threshold is not a pause', () => {
  const s = [
    { atMs: 0, words: 2 },
    { atMs: PAUSE_MS - 1, words: 2 },
  ];
  deepStrictEqual(pausesFrom(s), { pauseCount: 0, longestPauseMs: 0 });
  const t = [
    { atMs: 0, words: 2 },
    { atMs: PAUSE_MS, words: 2 },
  ];
  deepStrictEqual(pausesFrom(t), { pauseCount: 1, longestPauseMs: PAUSE_MS });
});

test('too few samples yields no pause signal at all, not zero', () => {
  // "We did not observe" and "there were none" are different claims.
  strictEqual(pausesFrom([]), undefined);
  strictEqual(pausesFrom([{ atMs: 0, words: 3 }]), undefined);
  const s = computeDeliverySignals({ ...base, samples: [{ atMs: 0, words: 1 }] });
  strictEqual(s.pauseCount, undefined);
});

test('samples arriving out of order are sorted, not misread as pauses', () => {
  const jumbled = [
    { atMs: 6000, words: 6 },
    { atMs: 0, words: 0 },
    { atMs: 5000, words: 3 },
    { atMs: 1000, words: 3 },
  ];
  deepStrictEqual(pausesFrom(jumbled), { pauseCount: 1, longestPauseMs: 4000 });
});

test('several pauses are counted and the longest reported', () => {
  const s = [
    { atMs: 0, words: 0 },
    { atMs: 1000, words: 5 },
    { atMs: 4000, words: 5 },   // 3 s pause
    { atMs: 5000, words: 9 },
    { atMs: 12000, words: 9 },  // 7 s pause
    { atMs: 13000, words: 14 },
  ];
  deepStrictEqual(pausesFrom(s), { pauseCount: 2, longestPauseMs: 7000 });
});

/* ─── what the grader is told ────────────────────────────────────────────── */

test('the grader is told what these are NOT, before it is told the numbers', () => {
  // The grader is a language model. Handed a bare {wpm: 92} it will reason
  // about pronunciation it cannot hear, so the framing is load-bearing.
  const s = computeDeliverySignals({ ...base, durationMs: 60_000, samples: [
    { atMs: 0, words: 0 }, { atMs: 3000, words: 3 },
  ] });
  const en = deliveryNote(s, 'en')!;
  ok(en.includes('NOT a pronunciation assessment'), 'must disclaim before it informs');
  ok(en.includes('nothing listened to the recording'));
  ok(/only for the fluency criterion/i.test(en), 'must scope which criterion it may touch');
  ok(!/accent/i.test(en.split('Use them')[0] ?? ''), 'the numbers must not precede the disclaimer');

  const fr = deliveryNote(s, 'fr')!;
  ok(fr.includes("PAS une évaluation de la prononciation"));
  ok(fr.includes('fluidité'));
});

test('nothing measured means no delivery line at all', () => {
  // An empty line would still invite the grader to reason about delivery.
  const nothing = computeDeliverySignals({ transcript: '', durationMs: 0, confidence: -1 });
  strictEqual(deliveryNote(nothing, 'en'), null);
  strictEqual(deliveryNote(nothing, 'fr'), null);
});

test('the note carries only the signals that exist', () => {
  const wpmOnly = computeDeliverySignals({ transcript: 'un deux trois', durationMs: 10_000, confidence: -1 });
  const note = deliveryNote(wpmOnly, 'en')!;
  ok(note.includes('words per minute'));
  ok(!note.includes('pause'), 'no samples means no pause claim');
  ok(!note.includes('confidence'), 'unreported confidence must not appear');
});

test('the candidate sees a measurement, never a verdict', () => {
  const s = computeDeliverySignals({ ...base, durationMs: 60_000, samples: [
    { atMs: 0, words: 0 }, { atMs: 5000, words: 0 },
  ] });
  const lines = deliverySummary(s, 'en');
  ok(lines.some((l) => /\d+s · \d+ words/.test(l)));
  // No adjectives anywhere: no "good", "slow", "hesitant".
  const joined = lines.join(' ');
  ok(!/(good|poor|slow|fast|hesitant|fluent|weak|strong)/i.test(joined), 'no judgement words');
});
