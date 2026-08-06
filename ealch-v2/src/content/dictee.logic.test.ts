// The dictée letters-vs-words rule, and its effect on every shipped lesson.
import { strictEqual, ok, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { DICTEE_LETTER_LIMIT, dicteeMode, dicteeTarget, dicteeWords, letterCount, wordDecoys } from './dictee.logic.ts';
import type { Item, Lesson } from './schema.ts';

const seed = JSON.parse(
  readFileSync(new URL('./seed.json', import.meta.url), 'utf8')
) as { items: Item[]; lessons: Lesson[] };

test('the threshold is the authored one and does not drift', () => {
  strictEqual(DICTEE_LETTER_LIMIT, 16);
});

test('a word spells, a sentence assembles', () => {
  // Single words, including the longest a dictée realistically drills. These
  // are spelling exercises and must NOT be demoted to word tiles.
  for (const w of ['temps', 'nez', 'beaucoup', 'appartement', 'tranquillement']) {
    strictEqual(dicteeMode(w), 'letters', `${w} (${letterCount(w)} letters) should still spell`);
  }
  // Sentences. Every one of these was 20+ loose letter tiles before the rule.
  for (const s of [
    'Il pleut beaucoup dehors.',
    'Le matin, je bois mon café tranquillement.',
    "J'ai trop froid ce matin, je reste sous les draps.",
  ]) {
    strictEqual(dicteeMode(s), 'words', `"${s}" should assemble from words`);
  }
});

test('a long hyphenated compound still SPELLS, however many letters it has', () => {
  // Found by the one-tile test below. These run past the letter threshold but
  // are one word, so switching them to word mode would offer a bank of a single
  // tile. They are also exactly the items where spelling is the point: the
  // hyphens are what a learner gets wrong.
  for (const w of [
    'quatre-vingt-quinze',
    'quatre-vingt-dix-neuf',
    'quatre-vingt-quatorze',
    "l'arrière-grand-père",
  ]) {
    ok(letterCount(w) > DICTEE_LETTER_LIMIT, `${w} should be over the letter limit for this test to mean anything`);
    strictEqual(dicteeMode(w), 'letters', `${w} is one word and must keep letter tiles`);
  }
});

test('the boundary is exact', () => {
  // 16 letters spells, 17 assembles. Pinned because an off-by-one here silently
  // changes the exercise for every item sitting on the line.
  const sixteen = 'Le soir, je lis un peu.'; // 16 letters
  strictEqual(letterCount(sixteen), 16);
  strictEqual(dicteeMode(sixteen), 'letters');
  strictEqual(dicteeMode(`${sixteen}x`), 'words');
});

test('word mode keeps an internal comma but drops the closing stop', () => {
  // In a rhythm lesson the comma IS the phrase boundary being taught, so it
  // stays attached to its word and the learner places it. A trailing full stop
  // is not something anyone is being tested on.
  deepStrictEqual(dicteeWords('Le soir, je lis un peu.'), ['Le', 'soir,', 'je', 'lis', 'un', 'peu']);
  strictEqual(dicteeTarget('Le soir, je lis un peu.'), 'Le soir, je lis un peu');
});

test('word mode never offers a one-tile answer', () => {
  // A bank of one tile is not an exercise. Anything long enough to switch modes
  // is long enough to have several words, but assert it rather than assume.
  for (const it of seed.items) {
    if (dicteeMode(it.fr) === 'words') {
      ok(dicteeWords(it.fr).length >= 2, `${it.id} assembles from a single tile: "${it.fr}"`);
    }
  }
});

test('the rule changes the right lessons and leaves the others alone', () => {
  const byLesson = new Map<string, { letters: number; words: number }>();
  for (const L of seed.lessons) {
    for (const s of L.sections) {
      if (s.type !== 'dictation') continue;
      for (const id of (s as { itemIds?: string[] }).itemIds ?? []) {
        const it = seed.items.find((x) => x.id === id);
        if (!it) continue;
        const rec = byLesson.get(L.id) ?? { letters: 0, words: 0 };
        rec[dicteeMode(it.fr)]++;
        byLesson.set(L.id, rec);
      }
    }
  }

  // sons.06 is the word-level dictée the letter bank was built for. If the
  // rule ever demotes it, the threshold has been lowered too far.
  const muettes = byLesson.get('sons.06.l1');
  ok(muettes, 'sons.06.l1 has no dictée');
  strictEqual(muettes!.words, 0, 'sons.06 spells words and must keep letter tiles');

  // sons.08 is the sentence dictée the rule exists for.
  const rythme = byLesson.get('sons.08.l1');
  ok(rythme, 'sons.08.l1 has no dictée');
  ok(
    rythme!.words > rythme!.letters,
    `sons.08 is a sentence dictée: expected mostly word mode, got ${rythme!.letters} letters / ${rythme!.words} words`
  );
});

test('a word-mode bank always offers more tiles than the answer needs', () => {
  // Without decoys every tile belonged to the answer, so "place all of them"
  // solved it and the learner never judged whether a word was in what they
  // heard. Checked on the real sentences a1.01's dictée drills.
  for (const fr of [
    'Bonjour madame, comment allez-vous ?',
    "Salut, ça va bien aujourd'hui ?",
    'On se dit bonjour avant de commencer la réunion.',
    'Bonne journée, à demain matin.',
  ]) {
    const decoys = wordDecoys(fr);
    ok(decoys.length > 0, `no decoy offered for "${fr}"`);
    const answer = dicteeWords(fr);
    for (const d of decoys) {
      ok(
        !answer.some((w) => w.normalize('NFD').replace(/[̀-ͯ]/gu, '').toLowerCase() === d.normalize('NFD').replace(/[̀-ͯ]/gu, '').toLowerCase()),
        `"${d}" is a decoy for "${fr}" but the answer already contains it`
      );
    }
  }
});

test('a decoy is never a word the sentence already uses, accents and case aside', () => {
  // "Très bien, merci" must not be offered "très", "bien" or "merci" back: a
  // decoy that belongs is not a decoy, it is a duplicate the learner can place
  // anywhere with no consequence.
  const decoys = wordDecoys('Très bien, merci et bonjour', 6);
  for (const d of decoys) {
    ok(!['tres', 'bien', 'merci', 'et', 'bonjour'].includes(d.normalize('NFD').replace(/[̀-ͯ]/gu, '').toLowerCase()), `"${d}" is already in the sentence`);
  }
  deepStrictEqual([...new Set(decoys)], decoys, 'the same decoy was offered twice');
});

test('the word bank actually includes the decoys', () => {
  // The old comment claimed a decoy the code never added. Read from source
  // because the runner cannot import the .tsx.
  const src = readFileSync(new URL('../components/MissionRich.tsx', import.meta.url), 'utf8');
  ok(/buildWordBank[\s\S]{0,400}wordDecoys\(fr\)/u.test(src), 'buildWordBank does not mix in wordDecoys');
});

test('MissionRich renders both modes, and does not draw a slot per character in word mode', () => {
  // A slot per character would put thirty boxes on screen for a sentence. The
  // word-mode answer renders as one growing line instead. Read from source
  // because the runner cannot import the .tsx.
  const src = readFileSync(new URL('../components/MissionRich.tsx', import.meta.url), 'utf8');
  ok(src.includes("from '@/content/dictee.logic'"), 'MissionRich no longer imports the rule');
  ok(src.includes('buildWordBank'), 'the word bank is gone');
  ok(
    /mode === 'words' \? \(/u.test(src),
    'MissionRich no longer branches on the mode when drawing the answer'
  );
});
