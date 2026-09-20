// The attribution list is regenerated here and compared, so it cannot rot.
//
// A checked-in notices list is stale one `npm install` later, and the failure is
// silent: the screen keeps rendering, it is simply no longer true. This test is
// the thing that makes the file trustworthy — it reads package.json and
// node_modules and asserts the shipped list matches, rather than asserting the
// list against itself.
import { test } from 'node:test';
import { ok, deepStrictEqual, strictEqual } from 'node:assert';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { RUNTIME_DEPS, FONTS, CONTENT_SOURCES, licenceKinds } from './licences.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = resolve(HERE, '..', '..');
const MODULES = join(APP, 'node_modules');
const pkg = JSON.parse(readFileSync(join(APP, 'package.json'), 'utf8')) as {
  dependencies: Record<string, string>;
};

/** node_modules is not present in every environment this suite runs in. Skip
 *  the measured tests rather than pretend — but never skip the shape ones. */
const installed = existsSync(MODULES);

test('every bundled dependency is attributed, and nothing is attributed that is not bundled', () => {
  // The failure this catches: a dependency added, shipped, and never credited.
  const declared = Object.keys(pkg.dependencies).sort();
  const attributed = RUNTIME_DEPS.map((d) => d.name).sort();
  deepStrictEqual(
    attributed,
    declared,
    'src/content/licences.ts is out of step with package.json dependencies. Add or remove the entry.',
  );
});

test('each attributed licence is the one the package itself declares', { skip: !installed }, () => {
  // Quoted verbatim, never interpreted. If a package changes licence, that is a
  // decision for a human, and this is where it surfaces.
  const wrong: string[] = [];
  for (const { name, licence } of RUNTIME_DEPS) {
    const p = join(MODULES, ...name.split('/'), 'package.json');
    if (!existsSync(p)) { wrong.push(`${name}: not installed`); continue; }
    const actual = (JSON.parse(readFileSync(p, 'utf8')) as { license?: string }).license ?? '(none declared)';
    if (actual !== licence) wrong.push(`${name}: file says "${licence}", package says "${actual}"`);
  }
  deepStrictEqual(wrong, [], `licence drift:\n  ${wrong.join('\n  ')}`);
});

test('the fonts are attributed under the licence that requires it', () => {
  // The OFL is the one licence here with a live obligation: the copyright
  // notice must travel with software that bundles the font. Both typefaces are
  // bundled as binaries, so this is not optional.
  const ofl = RUNTIME_DEPS.filter((d) => d.licence.includes('OFL'));
  strictEqual(ofl.length, 2, 'expected the two @expo-google-fonts packages to carry OFL');
  strictEqual(FONTS.length, 2, 'both bundled typefaces need a credit');
  for (const f of FONTS) {
    ok(/Open Font License/i.test(f.note), `${f.name} does not name the licence it ships under`);
    ok(f.note.trim().length > 20, `${f.name} has no real attribution text`);
  }
});

test('a credit says what the thing was used for', () => {
  // A name and a URL is a link, not an attribution. Every credit has to say
  // what it actually did, or the screen is decorative.
  for (const c of [...FONTS, ...CONTENT_SOURCES]) {
    ok(c.name.trim(), 'a credit with no name');
    ok(c.note.trim().length > 20, `${c.name} has no note saying what it was used for`);
    if (c.url) ok(/^https?:\/\//.test(c.url), `${c.name} has a malformed url`);
  }
});

test('the content sources say plainly which of them ships', () => {
  // Lexique is a build-time gate in ealch-admin, not a runtime dependency, and
  // a notices screen that blurs that is worse than no screen. Pinned so the
  // distinction survives an edit.
  const lexique = CONTENT_SOURCES.find((c) => /Lexique/i.test(c.name));
  ok(lexique, 'Lexique is used to gate every authored gender; it belongs here');
  ok(/not shipped/i.test(lexique.note), 'the Lexique credit must say it does not ship with the app');
});

test('licenceKinds derives from the list rather than restating it', () => {
  const kinds = licenceKinds();
  deepStrictEqual(kinds, [...new Set(RUNTIME_DEPS.map((d) => d.licence))].sort());
  // A synthetic list proves it is really derived — the shipped one is almost
  // all MIT, so measuring only that would pass on a hardcoded return.
  deepStrictEqual(
    licenceKinds([{ name: 'x', licence: 'Apache-2.0' }, { name: 'y', licence: 'MIT' }, { name: 'z', licence: 'MIT' }]),
    ['Apache-2.0', 'MIT'],
  );
});
