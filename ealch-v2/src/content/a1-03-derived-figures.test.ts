// a1.03 states counted figures in prose, and for six re-renders they drifted.
//
// `a1-03-genre.test.ts` compares the CONSTANTS in `genre-endings.ts` to
// `seed.items`, and reads no rendered body. So a card could say "thirty-six
// nouns" while the pinned count said 45 and every gate stayed green. It did,
// for a week, in four places at once, and a2.32's merge is what surfaced it.
//
// The source fix is that the cards now INTERPOLATE the figure from the rule
// (`COUNT('tion')`), so the count and the prose are one value. This file is the
// guard that says nobody typed one back in.
//
// It reads the SEED, not the source, because the seed is what ships.

import { test } from 'node:test';
import { ok, strictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { measureEnding } from './gender.logic.ts';

const LESSON_ID = 'a1.03.l1';
type Lsn = { id: string; sections: unknown[]; [k: string]: unknown };
const L = (seed.lessons as unknown as Lsn[]).find((l) => l.id === LESSON_ID);

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/* Number words the cards actually use, mapped back to values. Only the range
 * these figures live in; anything outside it is not a counted figure. */
const WORD_TO_N: Record<string, number> = {
  seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
  twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};
const ONES: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
};

/** "fifty-eight" -> 58, "forty-five" -> 45, "thirty" -> 30. */
function parseSpelled(s: string): number | null {
  const t = s.toLowerCase();
  const hyph = /^(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)-(one|two|three|four|five|six|seven|eight|nine)$/.exec(t);
  if (hyph) return WORD_TO_N[hyph[1]] + ONES[hyph[2]];
  if (WORD_TO_N[t] !== undefined) return WORD_TO_N[t];
  return null;
}

/** THE REAL POPULATION, not a re-implementation of it.
 *
 *  The first version of this file filtered on `kind === 'word'` plus a gender
 *  and called that the population. `endingPopulation` is narrower: it also
 *  drops plural-only nouns, non-nouns and multi-word entries. Measuring it by
 *  hand reported -ier at 63 against a live 58, and -e at 1096 against 961, and
 *  would have failed every correct card in the lesson.
 *
 *  Use the function the constants are validated against, or the guard and the
 *  thing it guards are measuring two different sets. */
function measureEndingCount(ending: string): number {
  return measureEnding(seed.items as never, ending)?.n ?? 0;
}

test('a1.03 is in the seed', () => {
  ok(L, `${LESSON_ID} is not in seed.json`);
});

test('every spelled-out ending count in a1.03 matches what the seed actually holds', () => {
  /* The four endings whose figures were found stale, plus -ette and -age,
   * which move on the same carries. Each is checked by finding the sentences
   * that name the ending and reading the number word out of them.
   *
   * If this goes red, a card was hand-typed again. The fix is to interpolate
   * `COUNT('<ending>')` in `genre-lesson.ts`, not to retype the number. */
  /* THE ANCHOR IS THE CARD ITSELF, not an ending named in prose.
   *
   * Each ending card renders its population TWICE: once as authored words
   * ("Thirty-one nouns, no exception") and once as a derived digit string the
   * renderer appends ("31 nouns here end this way"). The digits are computed;
   * the words were typed. So the two disagreeing IS the defect, and the card
   * carries both halves, which means no attribution has to be guessed at.
   *
   * Two earlier versions of this test tried to attribute a figure to whichever
   * ending the sentence NAMED, and both went red on correct copy:
   *   - "-ier ... right ninety-seven times in a hundred" is an accuracy
   *   - "Wrong once in thirty-seven, on le squelette" is a ratio
   *   - "Thirty-one nouns ... -ette takes une" is the -et card, and -ette is
   *     the only ending it names by name
   * Hence: only a number followed by "nouns" or "of them", and only against
   * the digit figure on the same card. */
  const NUM = '(?:twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(?:-(?:one|two|three|four|five|six|seven|eight|nine))?';
  const COUNTING = new RegExp(`\\b(${NUM})\\s+(?:nouns|of them)\\b`, 'gi');
  const DERIVED = /\b(\d+)\s+nouns here end this way\b/;

  let checked = 0;
  for (const s of strs(L)) {
    const d = DERIVED.exec(s);
    if (!d) continue;
    const live = Number(d[1]);
    ok(live > 0, `a card states "${d[0]}", which is not a population`);

    for (const m of s.matchAll(COUNTING)) {
      const n = parseSpelled(m[1]);
      if (n === null) continue;
      checked++;
      // "Thirty of thirty-one" states a hit count and a total; both are
      // legitimate and only the total has to equal the population.
      if (n === live || n === live - 1) continue;
      ok(false,
        `a1.03 states its count twice on one card and the two disagree: the words say "${m[1]}" (${n}) `
        + `and the derived figure says ${live}.\n`
        + `      "${s.slice(0, 140)}"\n`
        + '      Interpolate the figure with COUNT() in genre-lesson.ts rather than typing it.');
    }
  }
  /* THREE, and three is the real number rather than a floor chosen to pass.
   * Most ending cards state their rule without stating a population at all
   * ("The weakest of the ten, and still nine in ten"), and only three spell a
   * count out in words next to the derived digits: -ier, -et and -ine. If this
   * drops, a card that used to state its figure has stopped, and the guard is
   * covering less than it was. */
  strictEqual(checked, 3,
    `${checked} spelled-out counts were checked, and this lesson has three. `
    + 'If a card gained or lost one, confirm it is still derived and update this number.');
});

test('the -e bucket is described at its real order of magnitude', () => {
  const live = measureEndingCount('e');
  ok(live > 800, `the -e population measures ${live}, which is not the bucket this test was written for`);

  // FLOOR, not round. The card reads "across nine hundred nouns" for a
  // population of 961, which is how a person says it. Rounding gives "ten
  // hundred", which is not English, and `spellNumber` floors for the same
  // reason.
  const hundreds = Math.floor(live / 100);
  const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][hundreds];
  for (const s of strs(L)) {
    const m = /\b(six|seven|eight|nine|ten)\s+hundred\s+nouns\b/i.exec(s);
    if (!m) continue;
    strictEqual(m[1].toLowerCase(), WORD,
      `a1.03 says "${m[1]} hundred nouns" and the seed holds ${live}, which rounds to ${WORD} hundred.\n`
      + `      "${s.slice(0, 120)}"\n`
      + "      Interpolate WORTHLESS_COUNT('e') rather than typing it.");
  }
});

test('the lesson version moved when the figures did', () => {
  // Two bodies under one version is the failure this whole family belongs to.
  // The version is bumped by hand, so the only thing assertable here is that
  // it has kept moving past the point where the drift was found.
  ok(typeof L!.version === 'number' && (L!.version as number) >= 14,
    `a1.03.l1 is at v${L!.version}. The derived-figures change shipped at v14; a lower version means `
    + 'the seed predates it and the prose in the binary may still be hand-typed.');
});
