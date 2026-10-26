import { logError } from './errors';

// The app's one audio-session policy, applied at launch and again after every
// listen.
//
// iOS: expo-audio's native default is playsInSilentMode=false, and until
// setAudioModeAsync runs nothing sets a category at all, so the session is
// soloAmbient — every clip, every rendered line and the device voice went
// silent the moment the ringer switch was off. In a listening app that reads as
// "the audio is broken", and App Review tests with the switch on silent.
//
// mixWithOthers is expo-audio's existing default, kept on purpose: the only
// behaviour this changes is the silent switch. A learner's music keeps playing
// under a clip, exactly as it did before.
//
// Nothing here plays in the background — the app silences speech when it
// leaves the foreground (tts.ts), and the expo-audio plugin is configured with
// enableBackgroundPlayback:false to match.
export const PLAYBACK_MODE = {
  playsInSilentMode: true,
  interruptionMode: 'mixWithOthers',
  allowsRecording: false,
  shouldPlayInBackground: false,
} as const;

/** Put the session into playback mode. Never throws: a failure here must not
 *  take down a launch or a drill, it only means the OS default stays. */
export async function applyPlaybackSession(): Promise<void> {
  try {
    // Required lazily, like the recognizer in stt.ts: stt.ts imports this file
    // and is itself loaded by almost every screen, so a module-scope import
    // would bind expo-audio's native module during bundle evaluation.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { setAudioModeAsync } = require('expo-audio') as typeof import('expo-audio');
    await setAudioModeAsync(PLAYBACK_MODE);
  } catch (e) {
    logError('js', e);
  }
}
