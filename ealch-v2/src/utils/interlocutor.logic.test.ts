import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  coverageNote,
  coverageOf,
  cueMatches,
  selectTurn,
  type ExamInterlocutor,
  type InterlocutorTurn,
} from './interlocutor.logic.ts';

const turn = (id: string, covers: string, cues: string[]): InterlocutorTurn =>
  ({ id, text: `réponse ${id}`, cues, covers });

const bank: ExamInterlocutor = {
  opening: turn('open', '', []),
  answers: [
    turn('a-prix', 'le prix', ['combien coute', 'quel prix', 'tarif']),
    turn('a-dates', 'les dates', ['quand commence', 'quelles dates', 'quel jour']),
    turn('a-niveau', 'le niveau requis', ['niveau', 'debutant']),
  ],
  catchAll: turn('catch', '', []),
  closing: turn('close', '', []),
};

/* ─── cue matching ───────────────────────────────────────────────────────── */

test('a cue matches on whole words, in any order, ignoring accents', () => {
  ok(cueMatches('Ça coûte combien exactement ?', 'combien coute'), 'order need not match');
  ok(cueMatches('COMBIEN ÇA COÛTE', 'combien coute'), 'case and accents are folded');
  ok(cueMatches("Quel est le tarif, s'il vous plaît ?", 'tarif'));
});

test('a cue does not match inside a longer word', () => {
  // Substring matching would let "prix" hit "surpris" and hand the candidate
  // an answer they never asked for.
  ok(!cueMatches('je suis surpris', 'prix'));
  ok(!cueMatches('un debutant', 'but'));
});

test('every word of a multi-word cue must be present', () => {
  // Multi-word cues are how a cue gets specific without demanding exact
  // phrasing. Half a cue is not a match.
  ok(!cueMatches('combien de personnes', 'combien coute'));
  ok(cueMatches('combien est-ce que ça coûte', 'combien coute'));
});

test('an empty cue matches nothing', () => {
  ok(!cueMatches('bonjour', ''));
  ok(!cueMatches('bonjour', '   '));
});

/* ─── selection ──────────────────────────────────────────────────────────── */

test('the question selects the answer, not the authoring order', () => {
  // The whole point of matching: a candidate who asks about the level gets the
  // level, even though price is authored first.
  const s = selectTurn('Il faut quel niveau ?', bank, []);
  strictEqual(s.kind, 'answer');
  if (s.kind === 'answer') strictEqual(s.turn.id, 'a-niveau');
});

test('a more specific question wins over a vaguer match', () => {
  // Two matched cues beats one: specificity should decide, not order.
  const b: ExamInterlocutor = {
    ...bank,
    answers: [
      turn('vague', 'x', ['cours']),
      turn('specific', 'y', ['cours', 'combien de seances']),
    ],
  };
  const s = selectTurn('Le cours, c’est combien de séances ?', b, []);
  strictEqual(s.kind, 'answer');
  if (s.kind === 'answer') strictEqual(s.turn.id, 'specific');
});

test('an unmatched question gets the catch-all, not a wrong answer', () => {
  // What a real examiner does when asked something off their sheet. A wrong
  // answer would read as the simulation being broken rather than their French.
  strictEqual(selectTurn('Vous avez un parking ?', bank, []).kind, 'catch-all');
});

test('an answer already given is never repeated', () => {
  // A real examiner does not state the price twice, and repeating would let a
  // candidate coast by rewording one question.
  const again = selectTurn('Ça coûte combien ?', bank, ['a-prix']);
  strictEqual(again.kind, 'catch-all', 'the same question a second time earns nothing new');
});

test('when the bank is exhausted the examiner closes rather than looping', () => {
  const s = selectTurn('Et les dates ?', bank, ['a-prix', 'a-dates', 'a-niveau']);
  strictEqual(s.kind, 'closing');
});

test('silence earns the catch-all, not a free answer', () => {
  strictEqual(selectTurn('', bank, []).kind, 'catch-all');
  strictEqual(selectTurn('   ', bank, []).kind, 'catch-all');
});

/* ─── coverage ───────────────────────────────────────────────────────────── */

test('coverage names what was asked and what was not', () => {
  // The blueprint judges Section A partly on whether the questions were
  // "appropriate and complete". The bank IS the definition of complete.
  const c = coverageOf(bank, ['a-prix', 'a-niveau']);
  deepStrictEqual(c.covered, ['le prix', 'le niveau requis']);
  deepStrictEqual(c.missed, ['les dates']);
  strictEqual(c.total, 3);
});

test('the grader is told coverage plainly, with none of delivery’s hedging', () => {
  // Unlike wpm and pauses, this is DIRECT evidence: the candidate either asked
  // about the price or did not.
  const note = coverageNote(coverageOf(bank, ['a-prix']), 'en');
  ok(note.includes('1/3'));
  ok(note.includes('Obtained: le prix'));
  ok(note.includes('Not asked: les dates, le niveau requis'));
  // No disclaimer language: deliveryNote has to warn the grader off
  // over-reading its proxies, and coverage does not. ("Not asked" is the
  // report itself, not a hedge.)
  ok(!/proxy|rough indicator|software-measured|do not use/i.test(note), 'coverage is a measurement, not a proxy');
});

test('a candidate who asked nothing is reported as such, not omitted', () => {
  const note = coverageNote(coverageOf(bank, []), 'fr');
  ok(note.includes('0/3'));
  ok(note.includes('Aucune information obtenue'));
});
