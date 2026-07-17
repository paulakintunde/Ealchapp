// Word-of-the-day guard. Runs on plain Node: wordOfDay.ts imports nothing.
//
// The load-bearing contract (Phase 6b): the pool is picked by LEVEL, the word
// by DATE, so every learner at a given level sees the same word on a given
// date — and a beginner never opens the app to « la flânerie ».
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { dayOfYear, poolForLevel, wordOfDay, wordsOfDay } from './wordOfDay.ts';

test('every pool is non-empty and level-consistent', () => {
  for (const lv of ['A1', 'A2', 'B1'] as const) {
    const pool = poolForLevel(lv);
    ok(pool.length >= 8, `${lv} pool has at least 8 words`);
    ok(pool.every((e) => e.level === lv.toLowerCase()), `${lv} pool entries all carry level ${lv.toLowerCase()}`);
  }
});

test('level routing: beginners get a1, A2 gets a2, B1 and above get the literary pool', () => {
  strictEqual(poolForLevel('A0')[0].level, 'a1');
  strictEqual(poolForLevel('')[0].level, 'a1');
  strictEqual(poolForLevel('A1')[0].level, 'a1');
  strictEqual(poolForLevel('A2')[0].level, 'a2');
  strictEqual(poolForLevel('B1')[0].level, 'b1');
  strictEqual(poolForLevel('C1')[0].level, 'b1');
});

test('deterministic per level+date: same inputs, same word; levels differ', () => {
  const d = new Date(2026, 6, 17);
  strictEqual(wordOfDay('A1', d).word, wordOfDay('A1', d).word);
  strictEqual(wordOfDay('A1', d).level, 'a1');
  strictEqual(wordOfDay('B1', d).level, 'b1');
});

test('the word turns over with the date, cycling the whole pool', () => {
  const seen = new Set<string>();
  for (let day = 0; day < poolForLevel('A1').length; day++) {
    seen.add(wordOfDay('A1', new Date(2026, 0, 1 + day)).word);
  }
  strictEqual(seen.size, poolForLevel('A1').length, 'every pool entry gets its day');
});

test('every entry is dictionary-complete: ipa, both defs, both examples', () => {
  for (const e of wordsOfDay) {
    for (const k of ['word', 'speak', 'ipa', 'posFr', 'posEn', 'defFr', 'defEn', 'exampleFr', 'exampleEn'] as const) {
      ok(e[k].trim().length > 0, `${e.word} has ${k}`);
    }
    ok(e.ipa.startsWith('/') && e.ipa.endsWith('/'), `${e.word} ipa is slash-delimited`);
  }
});

test('dayOfYear is 0-based from Jan 1 local', () => {
  strictEqual(dayOfYear(new Date(2026, 0, 1)), 0);
  strictEqual(dayOfYear(new Date(2026, 1, 1)), 31);
});
