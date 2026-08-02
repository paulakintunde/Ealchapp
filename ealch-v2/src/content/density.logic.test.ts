// Tests for the density validator itself.
//
// A validator that never fires is worse than no validator, because it reads as
// a passing gate. Every rule below is proven twice: once that it catches a real
// violation, once that it stays quiet on correct content. The lesson-level
// test (sons-06-muettes.test.ts) then runs the whole rule set against the real
// authored lesson.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  DENSITY_RULES,
  LIMITS,
  hasPlainNasal,
  hasPlainNasalFor,
  hasUndelimitedIpa,
  hasUndelimitedRespell,
  validateDensity,
  wordCount,
  type DensityRule,
} from './density.logic.ts';
import type { Lesson } from './schema.ts';

/** A minimal v2 lesson skeleton. Individual tests override one field to prove
 *  one rule, so a failure names exactly which rule broke. */
const base = (over: Partial<Lesson> & Record<string, unknown> = {}): Lesson =>
  ({
    id: 'test.01.l1',
    unitId: 'test.01',
    seq: 1,
    title: 'T',
    level: 'sons',
    tag: 'TEST',
    intro: 'x',
    itemIds: [],
    version: 1,
    acts: [{ id: 'a1', title: 'A', sections: ['s1'], milestone: 'm', estScreens: 10, restPoints: [] }],
    sections: [],
    ...over,
  }) as unknown as Lesson;

const rules = (l: Lesson, known = new Set<string>()): DensityRule[] => validateDensity(l, known).map((i) => i.rule);

test('a lesson without acts is not subject to v2 density rules', () => {
  // The six lessons shipped before this validator must not retro-fail.
  const preV2 = base({ acts: undefined, sections: [{ type: 'teach', title: 'T', body: 'word '.repeat(200), layer: 'core' }] });
  strictEqual(validateDensity(preV2).length, 0);
});

test('core-words fires over the word limit and not under it', () => {
  const over = base({ sections: [{ type: 'teach', id: 's1', title: 'T', body: 'mot '.repeat(LIMITS.coreWords + 5), layer: 'core' }] as never });
  ok(rules(over).includes('core-words'));
  const under = base({ sections: [{ type: 'teach', id: 's1', title: 'T', body: 'mot '.repeat(LIMITS.coreWords - 5), layer: 'core' }] as never });
  ok(!rules(under).includes('core-words'));
});

// A `focus` card shows its points together on one screen, which is what the
// rule governs. A `roundup` with render:'screens' walks them one at a time, so
// its points are a screen count and are deliberately exempt — see
// PASSAGE_SECTIONS and the note on the rule.
test('core-list-items fires on more than four bullets', () => {
  const over = base({ sections: [{ type: 'focus', id: 's1', title: 'R', points: ['a', 'b', 'c', 'd', 'e'], layer: 'core' }] as never });
  ok(rules(over).includes('core-list-items'));
  const under = base({ sections: [{ type: 'roundup', id: 's1', title: 'R', body: 'b', points: ['a', 'b', 'c', 'd'], layer: 'core' }] as never });
  ok(!rules(under).includes('core-list-items'));
});

test('xl-words holds the XL screen to one short French unit', () => {
  const over = base({ sections: [{ type: 'flashcards', id: 's1', title: 'F', size: 'xl', layer: 'core', cards: [{ front: 'un '.repeat(20), back: 'b' }] }] as never });
  ok(rules(over).includes('xl-words'));
  const under = base({ sections: [{ type: 'flashcards', id: 's1', title: 'F', size: 'xl', layer: 'core', cards: [{ front: 'petit', back: 'b' }] }] as never });
  ok(!rules(under).includes('xl-words'));
});

test('xl-single-unit refuses a contrast pair at xl unless declared', () => {
  const pairCard = (over: Record<string, unknown> = {}) =>
    base({ sections: [{ type: 'groupDrill', id: 's1', title: 'G', size: 'xl', layer: 'core', groups: [{ id: 'g', label: 'L', items: [{ fr: 'grand · grande', ...over }], check: { q: 'q', opts: ['a', 'b'], correct: 0 } }] }] as never });
  ok(rules(pairCard()).includes('xl-single-unit'));
  // The author declaring it a pair is an opt-in, not a violation.
  ok(!rules(pairCard({ pair: true })).includes('xl-single-unit'));
  // A single word is the normal case and never fires.
  const single = base({ sections: [{ type: 'groupDrill', id: 's1', title: 'G', size: 'xl', layer: 'core', groups: [{ id: 'g', label: 'L', items: [{ fr: 'grand' }], check: { q: 'q', opts: ['a', 'b'], correct: 0 } }] }] as never });
  ok(!rules(single).includes('xl-single-unit'));
});

test('table-in-core keeps tables out of the flow', () => {
  const bad = base({ sections: [{ type: 'table', id: 's1', title: 'T', cols: ['a'], rows: [['x']], layer: 'core' }] as never });
  ok(rules(bad).includes('table-in-core'));
  const okDeep = base({ sections: [{ type: 'table', id: 's1', title: 'T', cols: ['a'], rows: [['x']], layer: 'deep' }] as never });
  ok(!rules(okDeep).includes('table-in-core'));
});

test('activity-run fires past eight consecutive sections of one type', () => {
  // The limit moved 6 -> 8 for sons.06's split group drill (see LIMITS). The
  // test tracks the constant rather than restating a number, so the next
  // change to the threshold cannot leave this passing by accident.
  const over = Array.from({ length: LIMITS.activityRun + 1 }, (_, i) => ({
    type: 'teach', id: `s${i}`, title: 'T', body: 'x', layer: 'core',
  }));
  ok(rules(base({ sections: over as never })).includes('activity-run'));
  const atLimit = over.slice(0, LIMITS.activityRun);
  ok(!rules(base({ sections: atLimit as never })).includes('activity-run'));
});

test('checkpoint-spacing fires when an act runs long without a rest point', () => {
  const long = base({ acts: [{ id: 'a1', title: 'A', sections: [], milestone: 'm', estScreens: 40, restPoints: [] }] as never });
  ok(rules(long).includes('checkpoint-spacing'));
  // The same 40 screens with one rest point splits into two 20-screen halves.
  const split = base({ acts: [{ id: 'a1', title: 'A', sections: [], milestone: 'm', estScreens: 40, restPoints: ['s2/mid'] }] as never });
  ok(!rules(split).includes('checkpoint-spacing'));
});

test('ipa-notation requires slashes', () => {
  ok(hasUndelimitedIpa('the sound ɡʁɑ̃ is nasal'));
  ok(!hasUndelimitedIpa('grand /ɡʁɑ̃/ is nasal'));
  // Several transcriptions in one string all stay legal.
  ok(!hasUndelimitedIpa('/pə.ti/ · /pə.tit/'));
});

test('respell-notation requires brackets', () => {
  ok(hasUndelimitedRespell('say it GRAHⁿ now'));
  ok(!hasUndelimitedRespell('say it [GRAHⁿ] now'));
  // Ordinary prose and acronyms must not trip it.
  ok(!hasUndelimitedRespell('The IPA is shown below.'));
});

test('nasal-convention bans a plain n closing a nasal vowel, and only that', () => {
  // The error the lesson exists to kill: a nasal vowel written with the
  // consonant that is not pronounced.
  // A digraph vowel closed by a plain n is unambiguous and fires here.
  ok(hasPlainNasal('[GRAHN]'));
  ok(hasPlainNasal('[TAHN]'));
  // A LONE vowel closed by n or m ([BON], [OM]) is genuinely ambiguous from
  // the respelling alone and is hasPlainNasalFor's job, not this one's.
  ok(!hasPlainNasal('[bon-ZHOOR]'));
  ok(!hasPlainNasal('[OM]'));
  // The superscript form is the correct one.
  ok(!hasPlainNasal('[GRAHⁿ]'));
  ok(!hasPlainNasal('[TAHⁿ]'));
  ok(!hasPlainNasal('[SAHⁿS]'));
  ok(!hasPlainNasal('[LOHⁿG]'));
  // Real pronounced consonants must NOT fire. A blunt "contains n" rule would
  // flag every one of these, which is why the rule is vowel-anchored and
  // guarded on what follows.
  ok(!hasPlainNasal('[NAY]'));
  ok(!hasPlainNasal('[MEHR]'));
  ok(!hasPlainNasal('[NET]'));
  ok(!hasPlainNasal('[NEUF]'));
  ok(!hasPlainNasal('[MAL]'));
  ok(!hasPlainNasal('[PARL]'));
  ok(!hasPlainNasal('[el-za-BEET]'));
});

test('hasPlainNasalFor settles the [OM] ambiguity using the source spelling', () => {
  // [OM] is CORRECT for homme: the written mm is a real pronounced consonant.
  ok(!hasPlainNasalFor('homme', '[OM]'));
  ok(!hasPlainNasalFor('bonne', '[BON]'));
  // The same respelling is WRONG for bon, where the single n marks a nasal
  // vowel and the consonant is not pronounced at all.
  ok(hasPlainNasalFor('bon', '[BON]'));
  ok(hasPlainNasalFor('bonjour', '[bon-ZHOOR]'));
  ok(hasPlainNasalFor('vingt', '[VAN]'));
  ok(hasPlainNasalFor('grand', '[GRAHN]'));
  // The superscript form stays correct whatever the source spelling.
  ok(!hasPlainNasalFor('grand', '[GRAHⁿ]'));
  ok(!hasPlainNasalFor('vingt', '[VEHⁿ]'));
});

test('notation rules check transcription FIELDS, never prose', () => {
  const grid = (letter: Record<string, unknown>) =>
    base({ sections: [{ type: 'letterGrid', id: 's1', title: 'T', layer: 'core', letters: [{ ch: 'a', name: 'a', sound: 's', ex: 'grand', ...letter }] }] as never });

  // A bad ipa/respell field is caught.
  ok(rules(grid({ ipa: 'ɡʁɑ̃' })).includes('ipa-notation'));
  ok(rules(grid({ respell: 'GRAHN' })).includes('nasal-convention'));
  ok(rules(grid({ respell: 'GRAHⁿ' })).includes('respell-notation'), 'unbracketed respelling');
  // The correct forms pass.
  ok(!rules(grid({ ipa: '/ɡʁɑ̃/', respell: '[GRAHⁿ]' })).includes('ipa-notation'));
  ok(!rules(grid({ ipa: '/ɡʁɑ̃/', respell: '[GRAHⁿ]' })).includes('respell-notation'));
  ok(!rules(grid({ ipa: '/ɡʁɑ̃/', respell: '[GRAHⁿ]' })).includes('nasal-convention'));
  // A pair in one field is legal: « /ɡʁɑ̃/ · /ɡʁɑ̃d/ ».
  ok(!rules(grid({ ipa: '/ɡʁɑ̃/ · /ɡʁɑ̃d/', respell: '[GRAHⁿ] · [GRAHⁿD]' })).includes('ipa-notation'));

  // PROSE is not checked, because teaching copy quotes wrong readings on
  // purpose and names endings mid-sentence. Flagging these would train the
  // team to ignore the validator.
  const prose = (body: string) => rules(base({ sections: [{ type: 'teach', id: 's1', title: 'T', body, layer: 'core' }] as never }));
  ok(!prose('A job noun in -er keeps its ending.').includes('nasal-convention'));
  ok(!prose('not POR-tuh. The E adds no syllable.').includes('respell-notation'));
  ok(!prose('When -ent is NOT silent').includes('respell-notation'));
  ok(!prose('petit said as [pə-TEET]').includes('ipa-notation'));
});

test('item-resolution fires on a dangling itemId and passes on a known one', () => {
  const sec = [{ type: 'practice', id: 's1', title: 'P', skill: 'speak', itemIds: ['fr.sons.muettes.001'], layer: 'core' }];
  ok(rules(base({ sections: sec as never }), new Set(['fr.sons.muettes.999'])).includes('item-resolution'));
  ok(!rules(base({ sections: sec as never }), new Set(['fr.sons.muettes.001'])).includes('item-resolution'));
  // An empty known-set skips the rule rather than failing everything.
  ok(!rules(base({ sections: sec as never }), new Set()).includes('item-resolution'));
});

test('quiz integrity catches range, duplicates, and missing why or ref', () => {
  const q = (over: Record<string, unknown>) =>
    base({
      sections: [{ type: 'quiz', id: 'q', title: 'Q', layer: 'core', questions: [{ q: 'x', opts: ['a', 'b'], correct: 0, why: 'w', ref: 'r', ...over }] }] as never,
    });
  ok(rules(q({ correct: 5 })).includes('quiz-correct-range'));
  ok(rules(q({ opts: ['a', 'a'] })).includes('quiz-duplicate-option'));
  ok(rules(q({ why: undefined })).includes('quiz-why-ref'));
  ok(rules(q({ ref: undefined })).includes('quiz-why-ref'));
  strictEqual(rules(q({})).length, 0);
});

test('quiz-spread fires when correct answers cluster in one slot', () => {
  const clustered = Array.from({ length: 10 }, (_, i) => ({ q: `q${i}`, opts: ['a', 'b', 'c'], correct: 0, why: 'w', ref: 'r' }));
  ok(rules(base({ sections: [{ type: 'quiz', id: 'q', title: 'Q', layer: 'core', questions: clustered }] as never })).includes('quiz-spread'));
  const spread = Array.from({ length: 9 }, (_, i) => ({ q: `q${i}`, opts: ['a', 'b', 'c'], correct: i % 3, why: 'w', ref: 'r' }));
  ok(!rules(base({ sections: [{ type: 'quiz', id: 'q', title: 'Q', layer: 'core', questions: spread }] as never })).includes('quiz-spread'));
});

test('em-dash is banned anywhere in the lesson', () => {
  ok(rules(base({ intro: 'a sentence — with an em dash' })).includes('em-dash'));
  ok(!rules(base({ intro: 'a sentence, with a comma' })).includes('em-dash'));
});

test('reframe must appear verbatim in at least three sections', () => {
  const line = "Silent unless there's a reason.";
  const withN = (n: number) =>
    base({
      reframe: line,
      sections: Array.from({ length: 5 }, (_, i) => ({ type: 'teach', id: `s${i}`, title: 'T', body: i < n ? line : 'other', layer: 'core' })),
    });
  ok(rules(withN(2)).includes('reframe'));
  ok(!rules(withN(3)).includes('reframe'));
});

test('every declared rule id is reachable from the implementation', () => {
  // Guards against a rule being added to the union and never wired up.
  const wired = new Set<string>([
    ...rules(base({ intro: 'x — y' })),
    ...rules(base({ sections: [{ type: 'teach', id: 's1', title: 'T', body: 'mot '.repeat(60), layer: 'core' }] as never })),
    ...rules(base({ sections: [{ type: 'focus', id: 's1', title: 'R', points: ['a', 'b', 'c', 'd', 'e'], layer: 'core' }] as never })),
    ...rules(base({ sections: [{ type: 'flashcards', id: 's1', title: 'F', size: 'xl', layer: 'core', cards: [{ front: 'un '.repeat(20), back: 'b' }] }] as never })),
    ...rules(base({ sections: [{ type: 'flashcards', id: 's1', title: 'F', size: 'xl', layer: 'core', cards: [{ front: 'grand · grande', back: 'b' }] }] as never })),
    ...rules(base({ sections: [{ type: 'table', id: 's1', title: 'T', cols: ['a'], rows: [['x']], layer: 'core' }] as never })),
    ...rules(base({ sections: Array.from({ length: LIMITS.activityRun + 1 }, (_, i) => ({ type: 'teach', id: `s${i}`, title: 'T', body: 'x', layer: 'core' })) as never })),
    ...rules(base({ acts: [{ id: 'a1', title: 'A', sections: [], milestone: 'm', estScreens: 40, restPoints: [] }] as never })),
    // Notation rules fire on ipa/respell FIELDS, never on prose — see the
    // note at their call site on why running them over prose is worse than
    // not running them at all.
    ...rules(base({ sections: [{ type: 'letterGrid', id: 's1', title: 'T', layer: 'core', letters: [{ ch: 'a', name: 'a', sound: 's', ex: 'grand', ipa: 'ɡʁɑ̃' }] }] as never })),
    ...rules(base({ sections: [{ type: 'letterGrid', id: 's1', title: 'T', layer: 'core', letters: [{ ch: 'a', name: 'a', sound: 's', ex: 'grand', respell: 'GRAHN' }] }] as never })),
    ...rules(base({ sections: [{ type: 'letterGrid', id: 's1', title: 'T', layer: 'core', letters: [{ ch: 'a', name: 'a', sound: 's', ex: 'grand', respell: 'GRAHⁿ' }] }] as never })),
    ...rules(base({ sections: [{ type: 'practice', id: 's1', title: 'P', skill: 'speak', itemIds: ['fr.sons.muettes.001'], layer: 'core' }] as never }), new Set(['fr.x.y.001'])),
    ...rules(base({ sections: [{ type: 'quiz', id: 'q', title: 'Q', layer: 'core', questions: [{ q: 'x', opts: ['a', 'a'], correct: 9 }] }] as never })),
    ...rules(base({ sections: [{ type: 'quiz', id: 'q', title: 'Q', layer: 'core', questions: Array.from({ length: 10 }, (_, i) => ({ q: `q${i}`, opts: ['a', 'b'], correct: 0, why: 'w', ref: 'r' })) }] as never })),
    ...rules(base({ reframe: 'never said', sections: [] })),
  ]);
  const unreached = DENSITY_RULES.filter((r) => !wired.has(r));
  strictEqual(unreached.length, 0, `rules declared but never fired by any test: ${unreached.join(', ')}`);
});

test('wordCount ignores punctuation-only tokens', () => {
  strictEqual(wordCount('one two three'), 3);
  strictEqual(wordCount('one , two . three'), 3);
  strictEqual(wordCount('  '), 0);
});
