import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  DEFAULT_APPEARANCE,
  normalizeAppearancePreference,
  resolveAppearance,
} from './appearance.logic.ts';

test('fresh installs follow either OS appearance; unknown OS appearance uses dark', () => {
  strictEqual(DEFAULT_APPEARANCE, 'automatic');
  strictEqual(resolveAppearance(DEFAULT_APPEARANCE, 'dark'), 'dark');
  strictEqual(resolveAppearance(DEFAULT_APPEARANCE, 'light'), 'light');
  strictEqual(resolveAppearance(DEFAULT_APPEARANCE, null), 'dark');
  strictEqual(resolveAppearance(DEFAULT_APPEARANCE, 'unspecified'), 'dark');
});

test('existing explicit choices survive normalization and ignore OS changes', () => {
  for (const saved of ['dark', 'light'] as const) {
    strictEqual(normalizeAppearancePreference(saved), saved);
    strictEqual(resolveAppearance(saved, 'dark'), saved);
    strictEqual(resolveAppearance(saved, 'light'), saved);
  }
});

test('Automatic re-resolves when the OS changes while the app is open', () => {
  const saved = normalizeAppearancePreference('automatic');
  strictEqual(resolveAppearance(saved, 'light'), 'light');
  strictEqual(resolveAppearance(saved, 'dark'), 'dark');
  strictEqual(resolveAppearance(saved, 'light'), 'light');
});

test('invalid persisted choices cannot reach the binary palette', () => {
  strictEqual(normalizeAppearancePreference('sepia'), 'automatic');
  strictEqual(resolveAppearance('sepia', 'light'), 'light');
  strictEqual(resolveAppearance(undefined, null), 'dark');
});
