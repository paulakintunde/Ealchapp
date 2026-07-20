// Greetings guard. Runs on plain Node: greetings.ts imports only a TYPE from
// the store (erased before node runs), so it is a pure island.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { SPOKEN_GREETINGS, pickGreeting } from './greetings.ts';

const STATES = ['new', 'recent', 'away'] as const;

test('every return-state has at least one non-empty greeting', () => {
  for (const state of STATES) {
    ok(SPOKEN_GREETINGS[state].length >= 1, `${state} has a greeting`);
    ok(SPOKEN_GREETINGS[state].every((g) => g.trim().length > 0), `${state} greetings are non-empty`);
  }
});

test('pickGreeting is deterministic and wraps the index', () => {
  for (const state of STATES) {
    const set = SPOKEN_GREETINGS[state];
    strictEqual(pickGreeting(state, 0), set[0]);
    strictEqual(pickGreeting(state, set.length), set[0], 'seed == length wraps to 0');
    strictEqual(pickGreeting(state, 1 % set.length), set[1 % set.length]);
    strictEqual(pickGreeting(state, 5), pickGreeting(state, 5), 'same seed, same line');
  }
});

test('pickGreeting tolerates a negative or fractional seed', () => {
  for (const state of STATES) {
    ok(SPOKEN_GREETINGS[state].includes(pickGreeting(state, -1)));
    ok(SPOKEN_GREETINGS[state].includes(pickGreeting(state, 2.9)));
  }
});
