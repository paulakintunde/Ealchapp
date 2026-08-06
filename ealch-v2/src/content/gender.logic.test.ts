// gender.logic.ts, the module a1.03 stands on.
//
// a1.03 prints thirteen percentages on cards and every one of them comes out of
// measureEnding(). If the population it counts over is wrong, the lesson is
// wrong in a way that looks authoritative, so the population is pinned here
// rather than only exercised through the lesson's own test.
//
// The three exclusions are each a real row in this corpus, named, so a later
// change that widens the population has to explain what it does about them.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  bareNoun,
  carriesArticle,
  endingPopulation,
  isNotANoun,
  isPluralOnly,
  measureEnding,
  type GenderRow,
} from './gender.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { items: GenderRow[] };
const ITEMS = seed.items;

test('bareNoun strips every article form the corpus uses', () => {
  strictEqual(bareNoun('une baguette'), 'baguette');
  strictEqual(bareNoun('le fromage'), 'fromage');
  strictEqual(bareNoun("l'eau"), 'eau');
  // The typographic apostrophe as well as the straight one: passages are
  // authored with U+2019 and corpus rows with U+0027, and both reach here.
  strictEqual(bareNoun('l’armoire'), 'armoire');
  strictEqual(bareNoun('les ciseaux'), 'ciseaux');
  strictEqual(bareNoun('du pain'), 'pain');
  // Capitalised rows exist in the corpus (`Un invité`, `Une voisine`), and an
  // ending is not case-sensitive.
  strictEqual(bareNoun('Un invité'), 'invité');
  // A noun that merely STARTS with the letters of an article keeps them.
  strictEqual(bareNoun('lapin'), 'lapin');
  strictEqual(bareNoun('un lapin'), 'lapin');
});

test('carriesArticle is the reframe, expressed as a predicate', () => {
  ok(carriesArticle('une armoire'));
  ok(carriesArticle("l'eau"));
  ok(!carriesArticle('armoire'));
  ok(!carriesArticle('eau'));
  // And it is true of nearly the whole a1 corpus, which is why "learn the
  // article, not the noun" names a convention rather than proposing one.
  const a1 = ITEMS.filter((i) => (i as { level?: string }).level === 'a1' && i.kind === 'word' && i.gender);
  const withArticle = a1.filter((i) => carriesArticle(i.fr)).length;
  ok(a1.length > 1000, `expected a real a1 corpus, got ${a1.length} gendered words`);
  ok(
    withArticle / a1.length >= 0.95,
    `only ${withArticle}/${a1.length} a1 gendered nouns carry their article; the lesson's central claim has stopped being true`,
  );
});

test('the population excludes rows that cannot bear on an ending rule', () => {
  const pop = endingPopulation(ITEMS);
  ok(pop.length > 1500, `expected a real population, got ${pop.length}`);

  // 1. PHRASES. `une part de gâteau` is feminine because of `part`. Counted as
  //    an -eau row it reads as a counterexample to a rule it never touched.
  ok(!pop.some((i) => /\s/.test(bareNoun(i.fr))), 'a multi-word headword reached the population');

  // 2. PLURALS. `les ciseaux` shows the same article for both genders.
  ok(!pop.some((i) => isPluralOnly(i.fr)), 'a plural-only headword reached the population');
  ok(isPluralOnly('les ciseaux') && isPluralOnly('des lunettes') && !isPluralOnly('le ciseau'));

  // 3. NON-NOUNS. Twelve a1 rows carry a `gender` field on a verb or an
  //    adjective. They are excluded rather than routed around, and they are
  //    reported in the handover rather than silently fixed here.
  ok(!pop.some((i) => isNotANoun(i)), 'a verb or adjective reached the population');
  const strays = ITEMS.filter((i) => i.gender && isNotANoun(i));
  ok(
    strays.length >= 10,
    `expected the known non-noun rows to still be there (they are corpus debt, not this lesson's); found ${strays.length}`,
  );
  ok(strays.some((i) => i.id === 'fr.a1.ecole.048'), 'lire is still the canonical example of the problem');

  // Everything left is a single-word noun with a gender.
  ok(pop.every((i) => i.kind === 'word' && (i.gender === 'm' || i.gender === 'f')));
});

test('measureEnding matches the bare noun, so an elided article does not hide a row', () => {
  const eau = measureEnding(ITEMS, 'eau')!;
  ok(eau, '-eau is measurable');
  // l'eau is the single most useful counterexample in the lesson and it is
  // stored elided. A matcher that worked on `fr` unchanged would miss it.
  ok(eau.breaks.some((b) => bareNoun(b.fr) === 'eau'), "l'eau is not counted as an -eau exception");
  ok(eau.breaks.some((b) => bareNoun(b.fr) === 'peau'), 'la peau is not counted as an -eau exception');
  strictEqual(eau.predicts, 'm');
});

test('measureEnding reports the majority gender and the rows that break it', () => {
  const rows: GenderRow[] = [
    { id: 'a', kind: 'word', fr: 'le tableau', gender: 'm' },
    { id: 'b', kind: 'word', fr: 'le bureau', gender: 'm' },
    { id: 'c', kind: 'word', fr: 'le gâteau', gender: 'm' },
    { id: 'd', kind: 'word', fr: "l'eau", gender: 'f' },
  ];
  const m = measureEnding(rows, 'eau')!;
  strictEqual(m.n, 4);
  strictEqual(m.predicts, 'm');
  strictEqual(m.accuracy, 75);
  strictEqual(m.breaks.length, 1);
  strictEqual(m.breaks[0].id, 'd');
});

test('measureEnding returns null rather than a rule with no evidence', () => {
  strictEqual(measureEnding(ITEMS, 'zzzq'), null);
  // A caller that treated "no rows" as 100% would print a perfect rule about
  // nothing, which is the worst possible failure for this module.
});
