// Audio-session and store-permission guard. audioSession.ts, stt.ts and
// _layout.tsx import expo-audio / react-native and cannot run under
// `node --test`, so the rules are asserted against their SOURCE and app.json:
//
//   - iOS mutes every clip on the ringer switch unless playsInSilentMode is set
//     at launch AND re-set after each listen (the recognizer leaves the session
//     in playAndRecord + measurement and never restores it).
//   - Nothing plays in the background, so the store builds must not declare it:
//     UIBackgroundModes:audio is an App Review 2.5.4 reject, and an undeclared
//     mediaPlayback foreground service is a Play policy reject.
//   - SYSTEM_ALERT_WINDOW and WRITE_SETTINGS come from the prebuild template and
//     expo-brightness; the app needs neither (app-level brightness takes no
//     permission), and both read badly on the Play listing.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string): string => readFileSync(resolve(here, rel), 'utf8');

const session = read('./audioSession.ts');
const stt = read('./stt.ts');
const layout = read('../../app/_layout.tsx');
const expo = JSON.parse(read('../../app.json')).expo;

test('the playback mode plays through the silent switch and never in the background', () => {
  ok(/playsInSilentMode:\s*true/.test(session));
  ok(/shouldPlayInBackground:\s*false/.test(session));
  ok(/allowsRecording:\s*false/.test(session));
});

test('the root layout applies the playback session at launch', () => {
  ok(layout.includes("from '@/services/audioSession'"));
  ok(/void applyPlaybackSession\(\);/.test(layout));
});

test('every listen hands the session back to playback, whatever path it ends on', () => {
  const listen = stt.slice(stt.indexOf('async listen('), stt.indexOf('stop() {'));
  ok(/finally\s*\{\s*restorePlaybackSession\(\);\s*\}/.test(listen), 'restore must sit in a finally around captureOnce');
  const restore = stt.slice(stt.indexOf('function restorePlaybackSession'), stt.indexOf('function captureOnce'));
  ok(restore.includes("mode: 'default'"), 'the measurement mode must be reset on iOS');
  ok(restore.includes('applyPlaybackSession()'));
});

test('expo-audio is configured without background playback', () => {
  const entry = expo.plugins.find((p: unknown) => (Array.isArray(p) ? p[0] : p) === 'expo-audio');
  ok(Array.isArray(entry), 'expo-audio needs its options object');
  strictEqual(entry[1].enableBackgroundPlayback, false);
  strictEqual(entry[1].enableBackgroundRecording ?? false, false);
});

test('Android declares no foreground service and blocks the template permissions', () => {
  const perms: string[] = expo.android.permissions;
  deepStrictEqual(perms.filter((p) => p.includes('FOREGROUND_SERVICE')), []);
  // Blocked as well as undeclared: a stale local android/ or a library manifest
  // could still carry them, and tools:node="remove" strips them from the merge.
  ok(expo.android.blockedPermissions.includes('android.permission.FOREGROUND_SERVICE'));
  ok(expo.android.blockedPermissions.includes('android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK'));
  ok(expo.android.blockedPermissions.includes('android.permission.SYSTEM_ALERT_WINDOW'));
  ok(expo.android.blockedPermissions.includes('android.permission.WRITE_SETTINGS'));
});
