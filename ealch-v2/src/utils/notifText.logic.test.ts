// Notification-body formatter guard. Runs on plain Node: node --test.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { formatNotifText, placeholdersIn } from './notifText.logic.ts';

test('formatNotifText fills EN template tokens and leaves no literal brace', () => {
  const out = formatNotifText('Your {t} session is waiting: Au Café, 4 min with {name}.', {
    t: '7:00 PM',
    name: 'Brix',
  });
  strictEqual(out, 'Your 7:00 PM session is waiting: Au Café, 4 min with Brix.');
  ok(!out.includes('{'));
});

test('formatNotifText fills FR template tokens and leaves no literal brace', () => {
  const out = formatNotifText('Votre séance de {t} vous attend : Au Café, 4 min avec {name}.', {
    t: '19:00',
    name: 'Brix',
  });
  strictEqual(out, 'Votre séance de 19:00 vous attend : Au Café, 4 min avec Brix.');
  ok(!out.includes('{'));
});

test('formatNotifText substitutes a repeated token every time', () => {
  strictEqual(formatNotifText('{name} et {name}', { name: 'Brix' }), 'Brix et Brix');
});

test('formatNotifText is single-pass: a value containing a brace is inert text', () => {
  strictEqual(formatNotifText('{a}-{b}', { a: '{b}', b: 'X' }), '{b}-X');
});

test('formatNotifText leaves an unsupplied token literal', () => {
  strictEqual(formatNotifText('hi {who}', {}), 'hi {who}');
});

test('formatNotifText returns a tokenless template unchanged', () => {
  strictEqual(formatNotifText('', { t: 'x' }), '');
});

test('formatNotifText ignores extra values with no matching token', () => {
  strictEqual(formatNotifText('plain', { t: 'x' }), 'plain');
});

test('placeholdersIn returns tokens in first-appearance order', () => {
  deepStrictEqual(
    placeholdersIn('Votre séance de {t} vous attend : Au Café, 4 min avec {name}.'),
    ['t', 'name'],
  );
});

test('placeholdersIn dedupes repeats and returns empty for a tokenless template', () => {
  deepStrictEqual(placeholdersIn('{name} et {name}'), ['name']);
  deepStrictEqual(placeholdersIn('plain'), []);
});
