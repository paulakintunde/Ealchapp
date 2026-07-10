// Sound + haptics engine. Mirrors the prototype's synthesized cues.
// - On web: Web Audio oscillators reproduce the exact tap/flip/success/error/
//   ding/vowel tones from the prototype.
// - On native: each cue maps to an expo-haptics pattern (the app's haptic spec).
// Respects the user's Sound-effects toggle in the store.
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useStore } from '@/store/useStore';

export type Cue = 'tap' | 'flip' | 'success' | 'error' | 'ding' | 'vowel';

let ac: AudioContext | null = null;

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
    if (!ac) {
      const Ctor = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!Ctor) return;
      ac = new Ctor();
    }
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

function playNative(cue: Cue) {
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
};
