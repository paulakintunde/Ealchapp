// Notification placeholder guard (06-CONTEXT.md D-07). The bug this phase fixes
// was not a broken formatter: it was a template declaring {name} that the
// SCHEDULER never passed a value for, so a real device notification read
// "…4 min avec {name}." while the in-app banner read correctly. A unit test on
// the formatter alone cannot catch that — the formatter substitutes whatever it
// is handed. So this file checks the templates and their CALL SITES together,
// and is written to fail on a FUTURE notification type that forgets the shared
// formatter, not just on today's known bug.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { T } from './strings.ts';
import { formatNotifText, placeholdersIn } from '../utils/notifText.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string): string => readFileSync(resolve(here, rel), 'utf8');
const countOf = (src: string, needle: string): number => src.split(needle).length - 1;

/** Notification body template → the values its call site actually supplies.
 *  Adding a notification template without adding it here (or supplying a value
 *  it declares) is what this file exists to fail on. */
const SUPPLIED: Record<string, string[]> = {
  bannerText: ['t', 'name'],
};

/** Every file allowed to turn a notification template into finished text. */
const CALL_SITES = ['../store/useStore.ts', '../components/PushBanner.tsx'];

test('fr and en declare the same placeholders for every notification template', () => {
  for (const key of Object.keys(SUPPLIED)) {
    const fr = (T.fr as Record<string, string>)[key];
    const en = (T.en as Record<string, string>)[key];
    deepStrictEqual(placeholdersIn(fr).sort(), placeholdersIn(en).sort(), key);
  }
});

test('every placeholder a notification template declares is supplied at its call site', () => {
  for (const key of Object.keys(SUPPLIED)) {
    for (const lang of ['fr', 'en'] as const) {
      const template = (T[lang] as Record<string, string>)[key];
      for (const token of placeholdersIn(template)) {
        ok(
          SUPPLIED[key].includes(token),
          `${key} (${lang}) declares {${token}} but SUPPLIED['${key}'] does not list it as a value the call site supplies`,
        );
      }
    }
  }
});

test('no literal brace survives once the call site values are applied', () => {
  for (const key of Object.keys(SUPPLIED)) {
    for (const lang of ['fr', 'en'] as const) {
      const template = (T[lang] as Record<string, string>)[key];
      const values = Object.fromEntries(SUPPLIED[key].map((k) => [k, 'X']));
      const result = formatNotifText(template, values);
      ok(
        !result.includes('{') && !result.includes('}'),
        `${key} (${lang}) left a literal brace once its declared call-site values were applied: "${result}"`,
      );
    }
  }
});

test('no notification call site hand-rolls its own substitution', () => {
  for (const file of CALL_SITES) {
    const src = read(file);
    strictEqual(countOf(src, ".replace('{"), 0, `${file} hand-rolls a .replace('{ substitution instead of using formatNotifText`);
    ok(src.includes('formatNotifText('), `${file} never calls the shared formatNotifText`);
  }
});

test('every scheduled body is built by the shared formatter', () => {
  for (const file of CALL_SITES) {
    const src = read(file);
    const scheduleCalls = (src.match(/notifications\.schedule[A-Za-z]*\(/g) ?? []).length;
    const formatCalls = countOf(src, 'formatNotifText(');
    ok(
      formatCalls >= scheduleCalls,
      `${file} schedules ${scheduleCalls} notification(s) but only calls formatNotifText ${formatCalls} time(s) — ` +
        `a new notification kind scheduled with a raw template instead of a formatted body is exactly the regression this assertion catches.`,
    );
  }
});
