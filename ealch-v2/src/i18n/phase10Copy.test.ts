// D-36 / C1-C4 / C8 over the Phase 10 keys. Characters are built with fromCharCode so
// no editor can flatten them.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { T } from './strings.ts';

const NNBSP = String.fromCharCode(0x202f);
const NBSP = String.fromCharCode(0x00a0);
const ELL = String.fromCharCode(0x2026);
const EMDASH = String.fromCharCode(0x2014);

const NEW_KEYS = [
  'probTitle', 'probIntro', 'probIntroContent', 'probCatLabel', 'probCatGroupA11y', 'probCats',
  'probSelected', 'probCatHint', 'probDetailsLabel', 'probDetailsPh', 'probIncludedShort',
  'probIncludedList', 'probContact', 'probContactSub', 'probSend', 'probSending', 'probSentT',
  'probSentS', 'probQueuedT', 'probQueuedOffline', 'probQueuedLimited', 'probQueuedBusy',
  'probErr4xx', 'probSaveFailed', 'probRetry', 'probClose', 'probSettingsT', 'probSettingsSub',
  'storeSec', 'rateT', 'rateSub', 'rateA11y', 'rateOpenFail', 'probAction', 'probAudioA11y',
  'probGradingA11y', 'menuMoreA11y', 'probFlagA11y', 'profileReportT', 'profileReportSub',
  'reportRingA11y', 'reportWeakA11y',
] as const;

const flat = (lang: 'fr' | 'en'): [string, string][] =>
  NEW_KEYS.flatMap((k) => {
    const v = (T[lang] as Record<string, unknown>)[k];
    if (typeof v === 'string') return [[k, v] as [string, string]];
    if (Array.isArray(v)) return v.map((x, i) => [`${k}[${i}]`, String(x)] as [string, string]);
    ok(v && typeof v === 'object', `${lang}.${k} missing`);
    return Object.entries(v as Record<string, string>).map(([a, b]) => [`${k}.${a}`, b] as [string, string]);
  });

test('every new key exists in FR and EN and is non-empty', () => {
  for (const lang of ['fr', 'en'] as const) {
    const rows = flat(lang);
    ok(rows.length >= NEW_KEYS.length);
    for (const [k, v] of rows) ok(v.length > 0, `${lang}.${k} empty`);
  }
  strictEqual(flat('fr').length, flat('en').length);
});

test('FR: U+202F before ? ! ; and inside guillemets, U+00A0 before :', () => {
  for (const [k, v] of flat('fr')) {
    const s = v.replace(/\{[^}]*\}/g, '');
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '?' || c === '!' || c === ';') strictEqual(s[i - 1], NNBSP, `fr.${k}: "${c}" needs U+202F before it`);
      if (c === ':') strictEqual(s[i - 1], NBSP, `fr.${k}: ":" needs U+00A0 before it`);
      if (c === '\u00ab') strictEqual(s[i + 1], NNBSP, `fr.${k}: guillemet open needs U+202F inside`);
      if (c === '\u00bb') strictEqual(s[i - 1], NNBSP, `fr.${k}: guillemet close needs U+202F inside`);
    }
    ok(!/ [?!;:]/.test(s), `fr.${k}: plain space before punctuation`);
  }
});

test('no em dash, three-dot ellipsis or "honest" in any new value', () => {
  for (const lang of ['fr', 'en'] as const) {
    for (const [k, v] of flat(lang)) {
      ok(!v.includes(EMDASH), `${lang}.${k} has an em dash`);
      ok(!v.includes('...'), `${lang}.${k} has three dots`);
      ok(!/honest/i.test(v), `${lang}.${k} has "honest"`);
    }
  }
});

test('Sending values use the single ellipsis character', () => {
  strictEqual(T.fr.probSending, `Envoi en cours${ELL}`);
  strictEqual(T.en.probSending, `Sending${ELL}`);
});

test('report copy never mentions rating, review or the store (FEEDBACK-03)', () => {
  for (const lang of ['fr', 'en'] as const) {
    for (const [k, v] of flat(lang)) {
      if (!k.startsWith('prob')) continue;
      if (k === 'probSettingsT' || k === 'probAction') { /* still checked */ }
      ok(!/\b(rate|rating|review|noter|noté|avis)\b/i.test(v), `${lang}.${k} mentions rating`);
      ok(!/store|http/i.test(v), `${lang}.${k} mentions a store`);
    }
  }
});
