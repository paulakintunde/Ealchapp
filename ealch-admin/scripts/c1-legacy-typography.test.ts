// frTypography converts straight apostrophes to curly, but not blindly: some
// referenced-only rows are bilingual (fr.sons.faux-amis.* notes) and their
// English text scare-quotes a headword with a straight apostrophe. A blind
// ' -> ’ turns the OPENING mark into a second closing mark ('to realize' ->
// ’to realize’), which reads as a stray apostrophe. Found during the C1
// wave 4-6 typography pass (2026-10-08): 4 of 93 rows were this case.
import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { frTypography } from './c1-legacy-typography.ts';

test('a French elision becomes the closing curly mark', () => {
  strictEqual(frTypography("l'argent"), 'l’argent');
  strictEqual(frTypography("qu'elle n'a pas"), 'qu’elle n’a pas');
  strictEqual(frTypography("aujourd'hui"), 'aujourd’hui');
});

test('an English scare-quote around a word opens and closes correctly', () => {
  strictEqual(frTypography("Not 'to realize' (become aware)"), 'Not ‘to realize’ (become aware)');
  strictEqual(frTypography("'scrupule' keeps its silent e"), '‘scrupule’ keeps its silent e');
});

test('an English closing quote and a possessive both use the closing mark', () => {
  strictEqual(frTypography("Liaison links 'avons' and 'aucun'"), 'Liaison links ‘avons’ and ‘aucun’');
  strictEqual(frTypography("others' feelings"), 'others’ feelings');
});

test('an opening quote right after a parenthesis is recognised too', () => {
  strictEqual(frTypography("(say 'bonjour' first)"), '(say ‘bonjour’ first)');
});
