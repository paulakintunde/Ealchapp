// Sound + haptics engine. Mirrors the prototype's synthesized cues.
// - On web: Web Audio oscillators reproduce the exact tap/flip/success/error/
//   ding/vowel tones from the prototype.
// - On native: bundled WAV renders of those same tones (assets/sounds/*.wav,
//   generated from the identical oscillator recipe) via expo-audio, alongside
//   the expo-haptics pattern. iOS silent switch is respected by default.
// Respects the user's Sound-effects toggle in the store.
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { useStore } from '@/store/useStore';

export type Cue = 'tap' | 'flip' | 'success' | 'error' | 'ding' | 'vowel';

let ac: AudioContext | null = null;

function ensureContext(): AudioContext | null {
  if (!ac) {
    const Ctor = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!Ctor) return null;
    ac = new Ctor();
  }
  return ac;
}

function webTone(f: number, t0: number, dur: number, vol: number, wave: OscillatorType = 'sine') {
  if (!ac) return;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = wave;
  o.frequency.value = f;
  g.gain.setValueAtTime(0, ac.currentTime + t0);
  g.gain.linearRampToValueAtTime(vol, ac.currentTime + t0 + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t0 + dur);
  o.connect(g);
  g.connect(ac.destination);
  o.start(ac.currentTime + t0);
  o.stop(ac.currentTime + t0 + dur + 0.05);
}

function playWeb(cue: Cue) {
  try {
    if (!ensureContext()) return;
    if (ac!.state === 'suspended') {
      // Autoplay policy: a context created outside a user gesture starts
      // suspended and its clock is frozen — schedule the tones after resume.
      ac!.resume().then(() => webTones(cue)).catch(() => {});
      return;
    }
    webTones(cue);
  } catch {
    // ignore
  }
}

function webTones(cue: Cue) {
  try {
    switch (cue) {
      case 'tap':
        webTone(660, 0, 0.08, 0.12);
        break;
      case 'flip':
        webTone(440, 0, 0.09, 0.1);
        webTone(660, 0.07, 0.1, 0.1);
        break;
      case 'success':
        webTone(523, 0, 0.14, 0.14);
        webTone(659, 0.1, 0.14, 0.14);
        webTone(784, 0.2, 0.3, 0.16);
        break;
      case 'error':
        webTone(196, 0, 0.25, 0.14, 'triangle');
        webTone(147, 0.12, 0.3, 0.12, 'triangle');
        break;
      case 'ding':
        webTone(1047, 0, 0.5, 0.14);
        webTone(1568, 0.06, 0.6, 0.08);
        break;
      case 'vowel':
        webTone(220, 0, 0.7, 0.14, 'sawtooth');
        webTone(440, 0, 0.7, 0.06);
        break;
    }
  } catch {
    // ignore
  }
}

const CUE_FILES: Record<Cue, number> = {
  tap: require('../../assets/sounds/tap.wav'),
  flip: require('../../assets/sounds/flip.wav'),
  success: require('../../assets/sounds/success.wav'),
  error: require('../../assets/sounds/error.wav'),
  ding: require('../../assets/sounds/ding.wav'),
  vowel: require('../../assets/sounds/vowel.wav'),
};

// One lazily-created player per cue, reused across plays (players are cheap
// but not free; six cues → at most six).
const players: Partial<Record<Cue, AudioPlayer>> = {};

function playNativeAudio(cue: Cue) {
  try {
    let p = players[cue];
    if (!p) {
      p = createAudioPlayer(CUE_FILES[cue]);
      players[cue] = p;
    }
    p.seekTo(0);
    p.play();
  } catch {
    // ignore — haptics still convey the cue
  }
}

function playNative(cue: Cue) {
  playNativeAudio(cue);
  try {
    switch (cue) {
      case 'tap':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case 'flip':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      case 'success':
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        break;
      case 'error':
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        break;
      case 'ding':
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        break;
      case 'vowel':
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
    }
  } catch {
    // ignore
  }
}

export const sound = {
  play(cue: Cue) {
    if (!useStore.getState().sound) return;
    if (Platform.OS === 'web') playWeb(cue);
    else playNative(cue);
  },

  /**
   * Web only: create/resume the AudioContext while inside a user gesture, so
   * later non-gesture playback (the alarm-banner ding) is audible. Called from
   * every Press — including muted or cue-less ones — and costs nothing once
   * the context is running.
   */
  unlock() {
    if (Platform.OS !== 'web') return;
    try {
      const ctx = ensureContext();
      if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
    } catch {
      // ignore
    }
  },
};
