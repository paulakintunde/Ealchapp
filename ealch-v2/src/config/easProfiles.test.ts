// The build profiles eas.json declares, pinned so the production profile stays
// ready for the day the Play Console account exists (PRODUCTION-BUILD.md).
// Source-text assertions: nothing here talks to EAS.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const eas = JSON.parse(readFileSync(resolve(appRoot, 'eas.json'), 'utf8'));

test('production builds a Play bundle on the production channel with a fresh versionCode', () => {
  const p = eas.build.production;
  strictEqual(p.android?.buildType, 'app-bundle', 'Play takes an .aab, never the preview .apk');
  strictEqual(p.channel, 'production', 'OTA updates for store installs publish to channel production');
  strictEqual(p.autoIncrement, true, 'Play refuses a reused versionCode');
  strictEqual(eas.cli.appVersionSource, 'remote', 'versionCode lives on EAS, so autoIncrement has one source');
  ok(!p.developmentClient && p.distribution !== 'internal', 'a store build is neither a dev client nor internal');
});

test('production never reports as a test build', () => {
  strictEqual(eas.build.production.env?.EXPO_PUBLIC_ANALYTICS_TEST_BUILD, 'false');
});

test('preview stays the internal APK the Pixel runs use', () => {
  const p = eas.build.preview;
  strictEqual(p.distribution, 'internal');
  strictEqual(p.channel, 'preview');
  strictEqual(p.android?.buildType, 'apk');
});

test('submit goes to the internal track first, and its key can never be committed or uploaded', () => {
  strictEqual(eas.submit.production.android.track, 'internal');
  strictEqual(eas.submit.production.android.serviceAccountKeyPath, './play-service-account.json');
  ok(readFileSync(resolve(appRoot, '.gitignore'), 'utf8').includes('play-service-account.json'), 'gitignored');
  ok(readFileSync(resolve(appRoot, '../.easignore'), 'utf8').includes('play-service-account.json'), 'kept out of the EAS upload');
});
