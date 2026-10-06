import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { parseVerdicts, shortPrompt, shortRequestProblem, SHORT_MAX_ITEMS } from './short.ts';

const item = { key: 'p0.i2', kind: 'short' as const, question: 'Pourquoi le bonheur est-il difficile à mesurer ?', expected: 'Il dépend des individus et de la culture.', answer: 'parce que chacun et chaque culture le voit autrement' };

test('a well-formed batch is accepted, a bad one names its problem', () => {
  strictEqual(shortRequestProblem({ items: [item] }), null);
  ok(shortRequestProblem({ items: [] }));
  ok(shortRequestProblem({ items: [item, item] })?.includes('unique key'));
  ok(shortRequestProblem({ items: [{ ...item, kind: 'mcq' }] })?.includes('kind'));
  ok(shortRequestProblem({ items: Array.from({ length: SHORT_MAX_ITEMS + 1 }, (_, i) => ({ ...item, key: `k${i}` })) }));
});

test('the prompt carries the official rule, the text and every item', () => {
  const { system, user } = shortPrompt({ items: [item], passage: 'Le texte.' });
  ok(/spelling and grammar do not count/.test(system));
  ok(/rewording/.test(system));
  ok(user.startsWith('TEXT:\nLe texte.'));
  ok(user.includes('"key": "p0.i2"'));
});

test('verdicts parse only when every key comes back as a boolean', () => {
  deepStrictEqual(parseVerdicts('{"verdicts":{"a":true,"b":false}}', ['a', 'b']), { a: true, b: false });
  deepStrictEqual(parseVerdicts('Voici : {"verdicts":{"a":true}}', ['a']), { a: true });
  strictEqual(parseVerdicts('{"verdicts":{"a":true}}', ['a', 'b']), null, 'a missing key fails the whole reply');
  strictEqual(parseVerdicts('{"verdicts":{"a":"yes"}}', ['a']), null);
  strictEqual(parseVerdicts('no json', ['a']), null);
});
