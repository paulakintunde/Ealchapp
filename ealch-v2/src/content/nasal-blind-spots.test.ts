// `hasPlainNasalFor` has three measured blind spots, and this pins all three.
//
// The point of the file is that every A2 build since a2.11 has hand-rolled a
// plain/half/to table to work around the same checker, and each one rediscovered
// a different hole. These tests name them once, so a future fix goes RED here
// rather than quietly changing what nine lessons assert by hand.
//
// NOTHING HERE CHANGES BEHAVIOUR. `hasPlainNasalFor` is unchanged;
// `nasalBlindSpot` is a diagnosis added beside it.

import { test } from 'node:test';
import { ok, strictEqual } from 'node:assert';
import { hasPlainNasal, hasPlainNasalFor, nasalBlindSpot } from './density.logic.ts';

/* ═══════════════════════════════════════════════════════════════════════════
 *  WHAT THE CHECKER GETS RIGHT, so a future fix cannot regress it
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a plain n or m closing a nasal vowel is still flagged', () => {
  for (const [fr, respell] of [
    ['bon', 'BON'], ['grand', 'GRAHN'], ['temps', 'TAHN'], ['pain', 'PEHN'],
    ['vraiment', 'vreh-MAHN'], ['maintenant', 'mehn-tuh-NAHN'],
  ] as const) {
    ok(hasPlainNasalFor(fr, respell), `"${fr}" respelled "${respell}" should be flagged`);
  }
});

test('a genuinely pronounced consonant is not flagged', () => {
  for (const [fr, respell] of [
    ['aime', 'EM'], ["j'aime", 'ZHEM'], ['dame', 'DAM'], ['scène', 'SEN'], ['pleine', 'PLEN'],
    ['homme', 'OM'], ['bonne', 'BON'],
  ] as const) {
    ok(!hasPlainNasalFor(fr, respell), `"${fr}" respelled "${respell}" is a real consonant and should clear`);
  }
});

test('the superscript form is never flagged', () => {
  for (const r of ['BOHⁿ', 'grahⁿ', 'TAHⁿ', 'pehⁿ', 'ü-nop-SYOHⁿ', 'KOHⁿT']) {
    ok(!hasPlainNasal(r), `"${r}" uses the superscript and must not be flagged`);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  BLIND SPOT 1 — the digraph rule returns before the French is consulted
 *
 *  `hasPlainNasalFor` opens with `if (hasPlainNasal(respell)) return true`, and
 *  only after that does it consult the French to clear a consonant that is
 *  genuinely pronounced. Whenever the respelling uses one of the seven digraphs
 *  before a token-final N or M, the early return fires and the repair is
 *  unreachable.
 * ═══════════════════════════════════════════════════════════════════════════ */

test('BLIND 1: a real consonant behind a digraph cannot clear itself', () => {
  // `diplôme` is /di.plom/. The ô is a real /o/ and the m is a real /m/, the
  // French carries `ôme`, and the repair WOULD clear it. `PLOHM` matches the
  // digraph rule first and the function never gets there.
  ok(hasPlainNasalFor('diplôme', 'dee-PLOHM'), 'the false positive is still live; if this went green the checker was fixed');
  strictEqual(nasalBlindSpot('diplôme', 'dee-PLOHM'), 'digraph-early-return');

  ok(hasPlainNasalFor('jaune', 'ZHOHN'), 'jaune is /ʒon/, a real n, and is flagged anyway');
  strictEqual(nasalBlindSpot('jaune', 'ZHOHN'), 'digraph-early-return');

  // And the same shape WITHOUT a digraph clears correctly, which is what makes
  // this a hole in the early return rather than in the French repair.
  ok(!hasPlainNasalFor('dame', 'DAM'), 'a bare AM reaches the French repair and clears');
  strictEqual(nasalBlindSpot('dame', 'DAM'), null);
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  BLIND SPOT 2 — the clear is granted by a different word
 *
 *  Both clearing tests run against the WHOLE `fr` string rather than the word
 *  that produced the flag, so a doubled n several words away silences a nasal
 *  that belongs to another token. Found by the a2.32 build.
 * ═══════════════════════════════════════════════════════════════════════════ */

test('BLIND 2: one word\'s nn clears another word\'s nasal', () => {
  // The flagged token is `option`, which has ONE n. `Sélectionnez` carries the
  // `nn`, three words away, and it clears the whole string.
  const fr = 'Sélectionnez une option';
  ok(!hasPlainNasalFor(fr, 'say-lek-syo-NAY ü-nop-SYON'),
    'the checker CLEARS this, and the value is wrong: SYON closes a nasal with a plain n');
  strictEqual(nasalBlindSpot(fr, 'say-lek-syo-NAY ü-nop-SYON'), 'cross-word-clear');

  // Isolate the flagged word and the SAME respelling token is flagged, which
  // proves the clear came from elsewhere in the string and not from `option`.
  //
  // `une option` is NOT the minimal pair, and getting that wrong the first time
  // is itself worth recording: `une` is u-n-e, so it matches the vowel+n+e
  // clear on its own and grants the same cross-word rescue that `Sélectionnez`
  // does. Two different words in that phrase can each silence `option`.
  ok(hasPlainNasalFor('option', 'op-SYON'),
    'alone, the identical token IS flagged. That is the whole finding.');
  ok(!hasPlainNasalFor('une option', 'ü-nop-SYON'),
    '`une` alone also clears it, so the phrase has TWO independent cross-word rescues');
  strictEqual(nasalBlindSpot('une option', 'ü-nop-SYON'), 'cross-word-clear');
});

test('BLIND 2 also fires through the vowel+n/m+e clear', () => {
  // `connexion` supplies the `nn`; `Pour un problème de connexion` is the a2.32
  // row that took both holes at once.
  const fr = 'Pour un problème de connexion, tapez 1.';
  strictEqual(nasalBlindSpot(fr, 'poor uhⁿ pro-BLEM duh ko-nek-SYON ta-PAY UHⁿ'), 'cross-word-clear');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  BLIND SPOT 3 — a nasal followed by a consonant inside the token
 *
 *  Both patterns require the N or M to END the token, so a nasal with a
 *  consonant after it is invisible in both directions.
 * ═══════════════════════════════════════════════════════════════════════════ */

test('BLIND 3: a token-internal nasal is invisible to the checker', () => {
  // `compte` is /kɔ̃t/. `KOHNT` closes a nasal with a plain N and the checker
  // cannot see it, because the N is followed by T.
  ok(!hasPlainNasalFor('compte', 'KOHNT'), 'the checker cannot see it, which is the defect');
  strictEqual(nasalBlindSpot('compte', 'KOHNT'), 'token-internal');

  ok(!hasPlainNasalFor('licence', 'lee-SAHNSS'), 'same shape, and a2.31 met it on -ence');
  strictEqual(nasalBlindSpot('licence', 'lee-SAHNSS'), 'token-internal');
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  WHY THE OBVIOUS FIX IS NOT SHIPPED
 *
 *  Scoping the clears to the flagged word looks right and is not. These cases
 *  are the counterexamples, measured against the published corpus, and they are
 *  pinned so the next person does not spend the afternoon rediscovering them.
 * ═══════════════════════════════════════════════════════════════════════════ */

test('a word-scoped clear would break these, so the clear must be per-SYLLABLE', () => {
  // Each of these is ONE WORD holding BOTH a real consonant and a nasal vowel.
  // Any rule that clears per word clears the nasal too.
  const BOTH_IN_ONE_WORD: [string, string, string][] = [
    ['centième', 'sahn-TYEHM', 'ième is a real /m/; sahn is a nasal'],
    ['apparemment', 'a-pa-ra-MAHN', 'mm is real; MAHN is a nasal'],
    ['ennuyer', 'ahn-nwee-YAY', 'nn is real; ahn is a nasal'],
    ['immédiatement', 'ee-may-dyat-MAHN', 'mm is real; MAHN is a nasal'],
  ];
  for (const [fr, respell, why] of BOTH_IN_ONE_WORD) {
    ok(hasPlainNasalFor(fr, respell),
      `"${fr}" must STAY flagged (${why}). A word-scoped clear would silence it: `
      + 'that measured 68 wrongly-cleared rows across the published corpus.');
  }
  // And the trap that kills the naive version before it even gets here:
  // `vraiment` contains the letters `ime`, and `-ment` is a nasal ending.
  ok(hasPlainNasalFor('vraiment', 'vreh-MAHN'),
    'vraiment contains `ime` but -ment is a nasal. A bare vowel+m+e clear scoped to the word '
    + 'wrongly cleared 193 rows on this shape alone.');
});

test('nasalBlindSpot reports null when the verdict is trustworthy', () => {
  for (const [fr, respell] of [
    ['bon', 'BOHⁿ'], ['grand', 'grahⁿ'], ['dame', 'DAM'], ['aime', 'EM'],
  ] as const) {
    strictEqual(nasalBlindSpot(fr, respell), null, `"${fr}" / "${respell}" is a clean verdict`);
  }
});
