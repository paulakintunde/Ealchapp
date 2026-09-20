import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { shouldAttemptRemoteTts } from './tts.logic.ts';

test('a guest (no userId) never attempts remote TTS even when the config flag says elevenlabs — D-01', () => {
  strictEqual(
    shouldAttemptRemoteTts({ userId: null, ttsProvider: 'elevenlabs', textLength: 10, maxRemoteChars: 2400 }),
    false,
  );
});

test('a guest never attempts remote TTS on azure either — both remote providers, not just elevenlabs', () => {
  strictEqual(
    shouldAttemptRemoteTts({ userId: null, ttsProvider: 'azure', textLength: 10, maxRemoteChars: 2400 }),
    false,
  );
});

test("'device' always wins regardless of who is calling — unchanged existing behavior", () => {
  strictEqual(
    shouldAttemptRemoteTts({ userId: 'u1', ttsProvider: 'device', textLength: 10, maxRemoteChars: 2400 }),
    false,
  );
});

test('a signed-in user under the length cap is unaffected', () => {
  strictEqual(
    shouldAttemptRemoteTts({ userId: 'u1', ttsProvider: 'elevenlabs', textLength: 10, maxRemoteChars: 2400 }),
    true,
  );
});

test('over the length cap is rejected even for a signed-in user — existing MAX_REMOTE_CHARS behavior preserved', () => {
  strictEqual(
    shouldAttemptRemoteTts({ userId: 'u1', ttsProvider: 'elevenlabs', textLength: 2401, maxRemoteChars: 2400 }),
    false,
  );
});

test('the length boundary is inclusive, matching the existing <= in speak()', () => {
  strictEqual(
    shouldAttemptRemoteTts({ userId: 'u1', ttsProvider: 'elevenlabs', textLength: 2400, maxRemoteChars: 2400 }),
    true,
  );
});
