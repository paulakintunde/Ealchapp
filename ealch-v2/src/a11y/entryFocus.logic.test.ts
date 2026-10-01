import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createEntryFocus, ENTRY_FALLBACK_MS, ENTRY_REASSERT_MS } from './entryFocus.logic.ts';

// A manual clock: timers run only when the test advances it.
function harness(focused = true) {
  let now = 0;
  let nextId = 1;
  const timers = new Map<number, { at: number; fn: () => void }>();
  const sent: number[] = [];
  const state = { focused };
  const ctl = createEntryFocus({
    focus: (a) => sent.push(a),
    isFocused: () => state.focused,
    setTimer: (fn, ms) => {
      const id = nextId++;
      timers.set(id, { at: now + ms, fn });
      return id;
    },
    clearTimer: (h) => timers.delete(h as number),
  });
  const advance = (ms: number) => {
    const end = now + ms;
    for (;;) {
      const due = [...timers.entries()].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
      if (!due) break;
      now = due[1].at;
      timers.delete(due[0]);
      due[1].fn();
    }
    now = end;
  };
  return { ctl, sent, advance, state };
}

test('layout alone sends nothing: focus waits for transitionEnd', () => {
  const h = harness();
  h.ctl.start();
  h.advance(ENTRY_FALLBACK_MS - 1);
  assert.deepEqual(h.sent, []);
});

test('transitionEnd (not closing) focuses once, then re-asserts once while focused', () => {
  const h = harness();
  h.ctl.start();
  h.ctl.transitionEnd(false);
  assert.deepEqual(h.sent, [0]);
  h.advance(ENTRY_REASSERT_MS);
  assert.deepEqual(h.sent, [0, 1]);
  h.advance(5000);
  assert.deepEqual(h.sent, [0, 1]);
});

test('a closing transition never focuses', () => {
  const h = harness();
  h.ctl.start();
  h.ctl.transitionEnd(true);
  assert.deepEqual(h.sent, []);
});

test('no transitionEnd (animation none): the fallback timer focuses', () => {
  const h = harness();
  h.ctl.start();
  h.advance(ENTRY_FALLBACK_MS);
  assert.deepEqual(h.sent, [0]);
});

test('transitionEnd after the fallback already fired does not double-send', () => {
  const h = harness();
  h.ctl.start();
  h.advance(ENTRY_FALLBACK_MS);
  h.ctl.transitionEnd(false);
  assert.deepEqual(h.sent, [0]);
});

test('re-assert is skipped once the screen lost focus', () => {
  const h = harness();
  h.ctl.start();
  h.ctl.transitionEnd(false);
  h.state.focused = false;
  h.advance(ENTRY_REASSERT_MS);
  assert.deepEqual(h.sent, [0]);
});

test('cancel stops everything; start re-arms', () => {
  const h = harness();
  h.ctl.start();
  h.ctl.cancel();
  h.advance(5000);
  h.ctl.transitionEnd(false);
  assert.deepEqual(h.sent, []);
  h.ctl.start();
  h.ctl.transitionEnd(false);
  assert.deepEqual(h.sent, [0]);
});
