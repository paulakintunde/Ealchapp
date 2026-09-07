// French number words <-> digits, for SPEECH scoring only.
//
// ── Why ─────────────────────────────────────────────────────────────────────
//
// The device recognizer writes numbers as digits. Measured on a Pixel 6: a
// learner said "cinquante" cleanly five times and the recognizer returned "50"
// every time. scoreUtterance compared "cinquante" with "50", found nothing in
// common, and scored 0% — verdict `off`, five times out of five.
//
// Being marked wrong is not the worst of it. gradeAttempt returns 0 for any
// incorrect attempt, and a corpus item id is schedulable, so each of those
// correct utterances was logged as an SM-2 lapse: ease down, card back sooner,
// forever. The learner is punished for being right, on the very items they are
// deliberately practising. 202 published items with a spoken drill contain a
// number word; 113 of them are two words or fewer, where the number IS most of
// the utterance and the score cannot recover.
//
// ── The design: fold BOTH sides, never one ──────────────────────────────────
//
// Expected and heard are folded with the same function before scoring. Three
// things follow, and they are the whole reason for this shape:
//
//   · The recognizer's threshold stops mattering. "trois" came back as a word
//     and "cinquante" as digits; under symmetric folding both land on the same
//     canonical token either way, so the boundary never has to be discovered.
//   · Idioms cannot break. "Mille excuses", "Merci mille fois", "le mange-mille"
//     and "le pour cent" all fold identically on both sides, so they still
//     match. Only an ASYMMETRIC transform could damage them.
//   · The nine published items that already carry digits are fixed by the same
//     code running the other way, for free.
//
// ── The one exclusion: a lone `un` / `une` ──────────────────────────────────
//
// 2,609 spoken items contain a small number word, overwhelmingly as the
// article. Folding a bare "un" would make "une café" and "un café" identical
// and hide a gender error — a real loss in French, and one the current scorer
// does catch (both are ≤3 chars, so the levenshtein-1 tolerance does not apply
// and they must match exactly). `un` therefore only counts inside a longer run:
// "vingt et un" is 21 and "un million" is 1000000, but "un" alone stays a word.

/** Words worth 0-16 and the plain tens. Additive inside a hundreds group. */
const SMALL: Record<string, number> = {
  zero: 0, un: 1, une: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6,
  sept: 7, huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13,
  quatorze: 14, quinze: 15, seize: 16,
  vingt: 20, vingts: 20, trente: 30, quarante: 40, cinquante: 50, soixante: 60,
};

const HUNDRED = new Set(['cent', 'cents']);
const SCALES: Record<string, number> = {
  mille: 1e3, milles: 1e3,
  million: 1e6, millions: 1e6,
  milliard: 1e9, milliards: 1e9,
};

/** `et` joins only in vingt-et-un … soixante-et-onze. Restricting it this way
 *  keeps "trois et quatre" as three words rather than folding it to 7. */
const ET_FOLLOWERS = new Set(['un', 'une', 'onze']);

function isNumberWord(t: string): boolean {
  return t in SMALL || HUNDRED.has(t) || t in SCALES || /^\d+$/.test(t);
}

/** Can a run start here? `et` never starts one. */
function startsRun(toks: string[], i: number): boolean {
  return isNumberWord(toks[i]);
}

/**
 * Read one maximal number run starting at `i`.
 * Returns the value and how many tokens it consumed, or null if `i` is not a
 * number, or if the whole run is a bare article-shaped `un`/`une`.
 */
function readRun(toks: string[], i: number): { value: number; len: number } | null {
  let total = 0;
  let cur = 0;
  let n = 0;
  let sawScaleOrHundred = false;

  while (i + n < toks.length) {
    const t = toks[i + n];

    // quatre-vingt(s) is 4×20, not 4+20. normalizeFr has already turned the
    // hyphens into spaces, so this arrives as two tokens.
    if (t === 'quatre' && (toks[i + n + 1] === 'vingt' || toks[i + n + 1] === 'vingts')) {
      cur += 80;
      n += 2;
      continue;
    }
    if (t === 'et' && ET_FOLLOWERS.has(toks[i + n + 1] ?? '')) {
      n += 1;
      continue;
    }
    if (t in SMALL) {
      cur += SMALL[t];
      n += 1;
      continue;
    }
    if (HUNDRED.has(t)) {
      cur = (cur || 1) * 100;
      sawScaleOrHundred = true;
      n += 1;
      continue;
    }
    if (t in SCALES) {
      total += (cur || 1) * SCALES[t];
      cur = 0;
      sawScaleOrHundred = true;
      n += 1;
      continue;
    }
    if (/^\d+$/.test(t)) {
      cur += Number(t);
      n += 1;
      continue;
    }
    break;
  }

  if (n === 0) return null;
  // A lone `un`/`une` is the indefinite article far more often than the number.
  if (n === 1 && (toks[i] === 'un' || toks[i] === 'une') && !sawScaleOrHundred) return null;
  return { value: total + cur, len: n };
}

/**
 * Replace every number run in the token stream with its value as digits.
 *
 * Operates on tokens, not raw text, because normalizeFr has already stripped
 * the hyphens: "soixante-dix" arrives as ["soixante","dix"] and
 * "quatre-vingt-dix-huit" as four tokens.
 *
 * Idempotent: folding an already-folded stream returns it unchanged, since a
 * bare digit run reads back as the same value.
 */
export function foldNumberTokens(toks: string[]): string[] {
  const out: string[] = [];
  let i = 0;
  for (const r of numberRuns(toks)) {
    while (i < r.start) out.push(toks[i++]);
    out.push(String(r.value));
    i = r.start + r.len;
  }
  while (i < toks.length) out.push(toks[i++]);
  return out;
}

/**
 * Where the number runs are, not just what they fold to.
 *
 * markWords marks DISPLAY words, and a number can span several of them
 * ("vingt et un" is three). Without the spans it could only fold each display
 * word alone, mark all three missed against a heard "21", and contradict a
 * score of 100% — the highlight and the score disagreeing is the exact defect
 * the markWords comment already warns about.
 */
export function numberRuns(toks: string[]): { start: number; len: number; value: number }[] {
  const runs: { start: number; len: number; value: number }[] = [];
  let i = 0;
  while (i < toks.length) {
    if (startsRun(toks, i)) {
      const run = readRun(toks, i);
      if (run) {
        runs.push({ start: i, len: run.len, value: run.value });
        i += run.len;
        continue;
      }
    }
    i += 1;
  }
  return runs;
}

/** Does this token stream contain anything a fold would touch? Used by the
 *  guard test that a number-free phrase is never altered. */
export function hasNumberToken(toks: string[]): boolean {
  return toks.some(isNumberWord);
}
