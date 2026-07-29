// The Speak path folds: stage/block clearing and avatar position as pure
// views over the attempt log. Same discipline as progress.logic.test.ts —
// node --test, no platform imports.
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SPEAK_BLOCK_PASS,
  SPEAK_CORE_BLOCKS,
  speakBlockCleared,
  speakNextBlock,
  speakPassedIds,
  speakPathPosition,
  speakStageState,
  type AttemptEntry,
  type SpeakStageLike,
} from './progress.logic.ts';

const attempt = (over: Partial<AttemptEntry>): AttemptEntry => ({
  id: over.id ?? `at-${Math.random()}`,
  date: '2026-07-28',
  activity: 'speak',
  itemId: 'fr.a1.cafe.001',
  expected: 'Bonjour.',
  heard: 'Bonjour.',
  score: 1,
  verdict: 'good',
  correct: true,
  modality: 'produce',
  ...over,
});

const stage = (id: string, blocks: string[][]): SpeakStageLike => ({
  id,
  blocks: blocks.map((itemIds) => ({ itemIds })),
});

const ids = (prefix: string, n: number) => Array.from({ length: n }, (_, i) => `${prefix}.${i}`);

test('speakPassedIds: only correct speak attempts pass; close and other drills do not', () => {
  const passed = speakPassedIds([
    attempt({ itemId: 'a' }),
    attempt({ itemId: 'b', verdict: 'close', correct: false }),
    attempt({ itemId: 'c', activity: 'sentence' }),
    attempt({ itemId: 'a', verdict: 'off', correct: false }), // any pass counts, later misses don't unpass
  ]);
  assert.deepEqual([...passed].sort(), ['a']);
});

test('a block clears at the pass fraction, not at 100%', () => {
  const block = { itemIds: ids('x', 10) };
  const passed = new Set(ids('x', 7)); // exactly 70%
  assert.equal(speakBlockCleared(block, passed), true);
  passed.delete('x.0');
  assert.equal(speakBlockCleared(block, passed), false);
  assert.equal(SPEAK_BLOCK_PASS, 0.7);
});

test('stage state: core is the first blocks; bonus blocks never gate clearing', () => {
  const s = stage('speak.2.1', [
    ids('b0', 10), ids('b1', 10), ids('b2', 10), ids('b3', 10), ids('b4', 10),
    ids('bonus', 10),
  ]);
  const passed = new Set([...ids('b0', 10), ...ids('b1', 10), ...ids('b2', 10), ...ids('b3', 10), ...ids('b4', 7)]);
  const st = speakStageState(s, passed);
  assert.equal(st.coreTotal, SPEAK_CORE_BLOCKS);
  assert.equal(st.cleared, true); // bonus block untouched, still cleared
  assert.equal(st.blocks[5], false);
  assert.equal(st.passedCount, 47);
  assert.equal(st.totalCount, 60);
});

test('a short station (fewer blocks than the core span) clears on all of them', () => {
  const s = stage('speak.6.2', [ids('a', 4), ids('b', 4)]);
  const st = speakStageState(s, new Set([...ids('a', 4), ...ids('b', 3)]));
  assert.equal(st.coreTotal, 2);
  assert.equal(st.cleared, true); // 3/4 = 75% ≥ 70%
});

test('path position: first uncleared station, clamped to the last when done', () => {
  const s1 = stage('speak.1.1', [ids('p', 2)]);
  const s2 = stage('speak.1.2', [ids('q', 2)]);
  assert.equal(speakPathPosition([s1, s2], new Set()), 0);
  assert.equal(speakPathPosition([s1, s2], new Set(ids('p', 2))), 1);
  assert.equal(speakPathPosition([s1, s2], new Set([...ids('p', 2), ...ids('q', 2)])), 1);
});

test('next block: first uncleared core block, then bonus, then clamp', () => {
  const s = stage('speak.2.2', [ids('a', 2), ids('b', 2), ids('c', 2)]);
  assert.equal(speakNextBlock(s, new Set()), 0);
  assert.equal(speakNextBlock(s, new Set(ids('a', 2))), 1);
  assert.equal(speakNextBlock(s, new Set([...ids('a', 2), ...ids('b', 2), ...ids('c', 2)])), 2);
});
