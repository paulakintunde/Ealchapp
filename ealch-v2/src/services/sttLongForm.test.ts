// Exam-length speech capture — the guard.
//
// ── WHY THIS FILE EXISTS ────────────────────────────────────────────────────
//
// On 2026-09-08 a candidate sat a full DELF B2 speaking paper, waited out the
// thirty-minute preparation, spoke, submitted, and was told the paper was
// ungraded. The grader was never asked: the daily counter did not move.
//
// Two defects, both from one capture function serving a drill and an exam:
//
//   1. THE ENDPOINTER ENDED THE ANSWER. `EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_
//      LENGTH_MILLIS: 1300` is right for "say this phrase" and fatal for a
//      five-to-seven-minute monologue: the first pause to think finished the
//      answer, and a pause before starting produced nothing at all.
//
//   2. ONLY THE FIRST SEGMENT SURVIVED. `consider()` keeps the best-scoring
//      transcript against the target phrase. The exam passes no target, and
//      `scoreUtterance('', x)` returns 1 for EVERY non-empty x — measured
//      below — so `s > bestScore` was false for everything after the first
//      result. A minute of speech was stored as its opening words.
//
// Both are now conditioned on `longForm`, so the drill keeps its tuning and
// the exam gets its own. Each assertion below was proven by reintroducing the
// defect it describes and watching this file go red.

import { test } from 'node:test';
import { ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { scoreUtterance, DEFAULT_BARS } from '../utils/score.ts';

const here = dirname(fileURLToPath(import.meta.url));
const src = () => readFileSync(resolve(here, 'stt.ts'), 'utf8');
const speak = () => readFileSync(resolve(here, '../components/ExamSpeakTask.tsx'), 'utf8');
const section = () => readFileSync(resolve(here, '../../app/exam-section.tsx'), 'utf8');

test('THE PREMISE: an empty target scores every transcript identically', () => {
  // This is the measurement the whole longForm branch of `consider` rests on.
  // If it ever stops being true, ranking by score becomes viable again and the
  // comment explaining why it is not becomes a lie.
  strictEqual(scoreUtterance('', 'bonjour', DEFAULT_BARS).score, 1);
  strictEqual(scoreUtterance('', 'bonjour je pense que le musée a raison', DEFAULT_BARS).score, 1);
  strictEqual(scoreUtterance('', '', DEFAULT_BARS).score, 0);
});

test('long-form accumulates by length instead of ranking by score', () => {
  const s = src();
  const from = s.indexOf('const consider =');
  const to = s.indexOf('};', s.indexOf('bestScore = s', from));
  ok(from > 0 && to > from, 'consider must exist');
  const body = s.slice(from, to);
  // The longForm arm returns BEFORE the scoring arm, and compares lengths.
  ok(/if \(opts\.longForm\)/.test(body), 'consider branches on longForm');
  ok(/transcript\.trim\(\)\.length > best\.trim\(\)\.length/.test(body), 'longForm keeps the longer transcript');
  const longIx = body.indexOf('opts.longForm');
  const scoreIx = body.indexOf('scoreUtterance(expected');
  ok(longIx < scoreIx, 'the longForm arm returns before the score is ever computed');
});

test('long-form does not endpoint at a drill pause', () => {
  const s = src();
  // The constant exists, is generous, and is what the intent options use.
  const m = s.match(/const LONG_FORM_SILENCE_MS = (\d+);/);
  ok(m, 'LONG_FORM_SILENCE_MS must be declared');
  const ms = Number(m![1]);
  ok(ms >= 3000, `a thinking pause needs seconds, got ${ms}ms`);
  ok(/EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: opts\.longForm \? LONG_FORM_SILENCE_MS : 1300/.test(s),
    'the complete-silence window is conditioned on longForm');
  ok(/EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS: opts\.longForm \? LONG_FORM_SILENCE_MS : 1300/.test(s),
    'the possibly-complete window is conditioned on longForm');
  // And the drill keeps its own tuning — this is not a global loosening.
  ok(s.includes(': 1300'), 'the drill still endpoints at 1300ms');
});

test('the recogniser is never asked for continuous mode', () => {
  // Measured on a Pixel 6, 2026-09-08: `continuous: true` makes the native
  // start() throw, the catch resolves `available: false`, and the exam reports
  // "Microphone unavailable" without ever opening a microphone session — while
  // the drill, four seconds either side, opens one and transcribes perfectly.
  //
  // The flag was never what made a pause survivable. The segment loop is. This
  // pins the lesson so nobody reaches for the obvious-looking option again.
  // Comments are stripped first: the note above deliberately QUOTES the option
  // it forbids, and a guard that cannot tell prose from code would fire on the
  // explanation of why it exists. It caught exactly that on its first run.
  const code = src().replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  ok(/continuous: false,/.test(code), 'continuous must be false');
  ok(!/continuous: (true|!!|opts\.)/.test(code), 'continuous must never be conditioned on long-form');
});

test('long-form drops the drill-only recogniser settings', () => {
  const s = src();
  ok(/maxAlternatives: opts\.longForm \? 1 : 5/.test(s), 'N-best is pointless without a target');
  ok(/\.\.\.\(opts\.longForm \? \{\} : \{ contextualStrings: contextFor\(expected\) \}\)/.test(s),
    'contextual biasing is omitted when there is no phrase to bias toward');
  ok(/iosTaskHint: opts\.longForm \? 'dictation' : 'confirmation'/.test(s),
    "'confirmation' is the hint for a short known utterance, not an exam answer");
});

test('a pause ends a SEGMENT, and only the candidate ends the answer', () => {
  const s = speak();
  ok(/while \(alive\.current && !stopRequested\.current && Date\.now\(\) < until\)/.test(s),
    'the recogniser is restarted until the candidate stops or the clock runs out');
  ok(/segments\.current\.push\(last\.transcript\.trim\(\)\)/.test(s), 'each segment is banked');
  ok(/segments\.current\.join\(' '\)/.test(s), 'segments are joined into one answer');
  // The stop button must set the flag. Releasing the recogniser alone would
  // just end a segment and the loop would start another one.
  ok(/stopRequested\.current = true;\s*\n\s*void stopRecogniser\(\);/.test(s),
    'the stop button sets the flag before releasing the microphone');
  ok(/longForm: true/.test(s), 'the exam asks for long-form capture');
});

test('the loop cannot spin on a refusing recogniser', () => {
  const s = speak();
  // A segment that returns instantly and empty means the recogniser is
  // refusing rather than waiting. Without this the loop would hold the
  // microphone and the CPU for the rest of the paper.
  ok(/Date\.now\(\) - segStart < 400/.test(s), 'an instant empty segment breaks the loop');
  ok(/if \(!last\.available\) break;/.test(s), 'an unreachable recogniser breaks the loop');
});

test('the microphone state is visible, in three colours', () => {
  const s = speak();
  ok(/'listening' \| 'pausing' \| 'stopped'/.test(s), 'three states, not two');
  ok(/mic === 'listening' \? t\.good : mic === 'pausing' \? t\.warn : t\.danger/.test(s),
    'green while heard, amber while paused, red once stopped');
  // The dot is driven by the microphone LEVEL, not by the transcript: the
  // transcript stops growing while the recogniser is still hearing fine.
  ok(/onVolume: \(v\) => \{/.test(s), 'the indicator reads the input level');
  ok(/if \(v < 0\) return;/.test(s), 'below zero is inaudible and must not count as a voice');
  ok(/setMic\('pausing'\);\s*\n\s*tick\(\);/.test(s), 'recording opens amber, before any voice has proved the mic works');
  // A palette token, not a literal: the accent is user-selectable and one of
  // the options is the same hue as danger.
  const palette = readFileSync(resolve(here, '../theme/palette.ts'), 'utf8');
  strictEqual((palette.match(/^\s+good: '#/gm) ?? []).length, 2, 'good is defined in both modes');
});

test('a pause visibly keeps what came before it', () => {
  const s = speak();
  ok(/\[banked, partial\]\.filter\(Boolean\)\.join\(' '\)/.test(s),
    'banked text and the live segment render together');
  ok(/examWordsSoFar/.test(s), 'a running word count tells the candidate it is working');
});

test('silence is recorded as silence, not as a grading failure', () => {
  const s = section();
  ok(/logExamResult\(\{ \.\.\.base, noAnswer: true \}, task\)/.test(s),
    'the empty-body branch sets noAnswer');
  // And the reporter's branch for it, which was unreachable until now, is
  // still there to receive it.
  const logic = readFileSync(resolve(here, '../store/progress.logic.ts'), 'utf8');
  ok(/if \(mine\.some\(\(r\) => r\.noAnswer\)\) return 'not-answered';/.test(logic),
    "the 'not-answered' status is reachable now that something sets the flag");
});

test('both languages carry the new indicator copy', () => {
  const strings = readFileSync(resolve(here, '../i18n/strings.ts'), 'utf8');
  for (const k of ['examMicHearing', 'examMicPaused', 'examMicStopped', 'examWordsSoFar']) {
    strictEqual((strings.match(new RegExp(`\\b${k}\\b`, 'g')) ?? []).length, 3, `${k} declared and translated twice`);
  }
  const lines = strings.split('\n').filter((l) => /examMic(Hearing|Paused|Stopped)\s*:|examWordsSoFar\s*:/.test(l));
  for (const l of lines) {
    ok(!l.includes('—'), `em dash in learner copy: ${l.trim()}`);
    ok(!/\bhonest/i.test(l), `banned word in learner copy: ${l.trim()}`);
  }
});
