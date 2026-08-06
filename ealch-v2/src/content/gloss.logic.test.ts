// Guards the reading-passage glossary matcher.
//
// The interesting cases are not invented: ten entries across four shipped
// lessons underlined nothing, and the last test here reads the seed and asserts
// that every glossary entry in every lesson now resolves. That is the one that
// would have caught the original bug, because it asks the question the old
// per-lesson tests never did — not "is this entry well-formed" but "does the
// renderer ever find it".
import { readFileSync } from 'node:fs';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { MAX_GLOSS_WORDS, deElide, glossKeys, segmentSentence, splitAffixes } from './gloss.logic.ts';
import type { Lesson } from './schema.ts';

const seed = JSON.parse(readFileSync(new URL('./seed.json', import.meta.url), 'utf8')) as {
  lessons: Lesson[];
};

/** The map PassagePage builds, in one line, so the tests exercise the real shape. */
const keysFor = (words: string[]) => new Set(words.flatMap(glossKeys).filter(Boolean));

const matched = (sentence: string, words: string[]) =>
  segmentSentence(sentence, keysFor(words)).filter((s) => s.key).map((s) => s.text);

test('a segmented sentence still reads exactly as authored', () => {
  // Whatever the matcher does, joining the pieces must reproduce the input.
  // A passage that silently loses a comma is worse than one that underlines
  // nothing.
  for (const sentence of [
    "Aujourd'hui, j'arrive à l'hôtel à neuf heures.",
    'Je n’aime pas beaucoup les haricots, mais j’ai faim.',
    '« Bonjour madame. Comment allez-vous ? »',
    'Il habite en face depuis deux ans.',
  ]) {
    const segs = segmentSentence(sentence, keysFor(['les haricots', 'en face', 'depuis deux ans', 'allez-vous']));
    strictEqual(segs.map((s) => s.text).join(''), sentence);
  }
});

test('an entry whose key carries punctuation the token loses still matches', () => {
  // Cause 1. "l'escalier" folded to "l'escalier" as a key but "lescalier" as a
  // token, so the two could never meet.
  deepStrictEqual(matched('je monte l’escalier jusqu’à la chambre.', ["l'escalier"]), ['l’escalier']);
  deepStrictEqual(matched('je monte l’escalier jusqu’à la chambre.', ["jusqu'à"]), ['jusqu’à']);
});

test('the typographic apostrophe is stripped, not just the straight one', () => {
  // Passages are authored with U+2019; the original punctuation class held only
  // the ASCII apostrophe, so those tokens kept a character no key ever had.
  deepStrictEqual(glossKeys('l’eau'), glossKeys("l'eau"));
});

test('an entry names the bare word and the passage elides an article onto it', () => {
  // Cause 2, all three shipped shapes. The span keeps its trailing punctuation
  // — splitAffixes peels that off at render time so the underline does not run
  // under the comma.
  deepStrictEqual(matched("En l'été, il fait chaud.", ['été']), ["l'été,"]);
  deepStrictEqual(matched("Je vais à l'hôpital.", ['hôpital']), ["l'hôpital."]);
  // The entry and the passage disagree on WHICH article, and agree on the noun.
  deepStrictEqual(matched("Il n'y a pas d'ascenseur, alors je monte.", ["l'ascenseur"]), ["d'ascenseur,"]);
});

test('"jusqu\'à" is not mistaken for an elided "qu\'"', () => {
  // The elision rule is anchored. If it were not, "jusqu'à" would reduce to
  // "à" and collide with every stray preposition in the passage.
  strictEqual(deElide("jusqu'à"), "jusqu'à");
  strictEqual(deElide("qu'il"), 'il');
});

test('a phrase entry matches across whitespace', () => {
  // Cause 3. The lookup was per token, so a two- or three-word gloss was
  // unreachable by construction.
  deepStrictEqual(matched('Je n’aime pas beaucoup les haricots, mais j’ai faim.', ['les haricots']), ['les haricots,']);
  deepStrictEqual(matched('Il habite en face depuis deux ans.', ['depuis deux ans']), ['depuis deux ans.']);
  deepStrictEqual(matched('Il habite en face.', ['en face']), ['en face.']);
});

test('the longest phrase wins over a word inside it', () => {
  // "les" and "les héros" both glossed: the phrase must not be shadowed by the
  // article, or the learner taps the wrong explanation.
  deepStrictEqual(matched('Ce sont les héros du village.', ['les', 'les héros']), ['les héros']);
});

test('a phrase longer than the window is not matched', () => {
  strictEqual(MAX_GLOSS_WORDS, 4);
  deepStrictEqual(matched('un deux trois quatre cinq', ['un deux trois quatre cinq']), []);
});

test('the underline sits under the word, not the punctuation around it', () => {
  deepStrictEqual(splitAffixes('« Bonjour.'), { lead: '« ', core: 'Bonjour', trail: '.' });
  deepStrictEqual(splitAffixes('haricots,'), { lead: '', core: 'haricots', trail: ',' });
  deepStrictEqual(splitAffixes('demain'), { lead: '', core: 'demain', trail: '' });
});

test('EVERY glossary entry in the seed resolves against its own passage', () => {
  // The regression guard. Ten entries across sons.05, sons.07 and sons.09 shipped
  // matching nothing at all, and no test noticed, because every one of them was
  // a perfectly valid object.
  const dead: string[] = [];
  for (const lesson of seed.lessons) {
    for (const sec of lesson.sections) {
      if (sec.type !== 'reading') continue;
      const gloss = (sec as { glossary?: { word: string }[] }).glossary ?? [];
      if (!gloss.length) continue;
      const keys = keysFor(gloss.map((g) => g.word));
      const hit = new Set(
        segmentSentence((sec as { text: string }).text, keys).filter((s) => s.key).map((s) => s.key!)
      );
      for (const g of gloss) {
        if (!glossKeys(g.word).some((k) => hit.has(k))) dead.push(`${lesson.id} "${g.word}"`);
      }
    }
  }
  deepStrictEqual(dead, [], `glossary entries that underline nothing:\n  ${dead.join('\n  ')}`);
});
