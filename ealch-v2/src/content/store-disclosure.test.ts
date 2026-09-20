// The disclosures the stores require, pinned to the screens that carry them.
//
// These are review-blocking rather than cosmetic: Apple 3.1.2(a) and Google
// Play both require a subscription paywall to state the product, the billing
// period and the price, and to carry working links to the terms and the privacy
// policy. The SIL Open Font License separately requires the bundled fonts'
// copyright to be reachable.
//
// None of it was: the auto-renewal sentence was the whole disclosure, the two
// legal links existed only on the sign-up screen, and there was no notices
// screen at all.
//
// Shaped as a source grep on purpose. The standing house lesson is that a
// screen can be written, typechecked and device-proven while being reachable
// from nothing — so what is asserted here is the WIRING: registered as a route,
// pushed from settings, reading the real data. A test that imported the
// component and rendered it would pass on a screen no learner can open.
import { test } from 'node:test';
import { ok } from 'node:assert';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');
const read = (...p: string[]) => readFileSync(join(ROOT, ...p), 'utf8');

const PAYWALL = read('app', 'paywall.tsx');
const SETTINGS = read('app', 'settings.tsx');
const LAYOUT = read('app', '_layout.tsx');
const LICENCES = read('app', 'licences.tsx');

test('the paywall states the plan and the price it is about to charge', () => {
  ok(/T\.pwTermsPlan/.test(PAYWALL), 'the paywall names no plan or price in its disclosure');
  // The price must come from the SELECTED row, which is the same value the
  // button charges (live store quote included). A literal here would be both a
  // price outside pricing.ts and a lie the moment a store quote differs.
  ok(
    /planRows\.find\(\(r\) => r\.id === planPick\)/.test(PAYWALL),
    'the disclosed price is not read from the selected plan row, so it can drift from what is billed',
  );
  ok(/T\.pwTermsAuto/.test(PAYWALL), 'the paywall no longer discloses auto-renewal');
});

test('the paywall links the terms and the privacy policy', () => {
  // Sign-up carries these too, but a user who signed up months ago reaches the
  // paywall from settings and never sees that screen again.
  ok(/LEGAL\.termsUrl/.test(PAYWALL), 'the paywall does not link the terms of use');
  ok(/LEGAL\.privacyUrl/.test(PAYWALL), 'the paywall does not link the privacy policy');
  ok(/Linking\.openURL/.test(PAYWALL), 'the paywall legal links do not open anything');
});

test('the notices screen exists, is a route, and settings can reach it', () => {
  // Three separate ways this silently fails, so three assertions.
  ok(/export default function Licences/.test(LICENCES), 'app/licences.tsx exports no screen');
  ok(/name="licences"/.test(LAYOUT), 'the licences screen is not registered in the stack');
  ok(/router\.push\('\/licences'\)/.test(SETTINGS), 'nothing in settings opens the licences screen');
});

test('the notices screen renders the generated data rather than a typed list', () => {
  // The whole value of the screen is that licences.test.ts keeps it true. A
  // hand-typed list in the component would look identical and be unguarded.
  ok(/from '@\/content\/licences'/.test(LICENCES), 'the screen does not read the attribution data');
  for (const sym of ['RUNTIME_DEPS', 'FONTS', 'CONTENT_SOURCES']) {
    ok(new RegExp(`\\b${sym}\\b`).test(LICENCES), `the screen never renders ${sym}`);
  }
  ok(/LEGAL\.termsUrl/.test(LICENCES) && /LEGAL\.privacyUrl/.test(LICENCES), 'the notices screen drops the legal links');
});

test('account deletion is still last in settings', () => {
  // The About section was inserted above the danger zone deliberately. If a
  // later edit puts anything after deletion, the destructive action stops being
  // the end of the screen, which is the one thing its placement relies on.
  const about = SETTINGS.indexOf('T.aboutSec.toUpperCase()');
  const danger = SETTINGS.indexOf('T.dangerZone.toUpperCase()');
  ok(about > 0 && danger > 0, 'both sections must exist');
  ok(about < danger, 'About & legal must sit above the danger zone, not below it');
});
