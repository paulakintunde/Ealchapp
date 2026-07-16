import { useCallback, useEffect, useRef } from 'react';
import { AppState, Platform } from 'react-native';
import { useFocusEffect } from 'expo-router';
import * as Brightness from 'expo-brightness';
import { useStore } from '@/store/useStore';

/** Below this, a screen is hard to read in a dim room. */
const TRIGGER = 0.55;
/** What we lift it to. Comfortable, not a shock to the eyes at night. */
const TARGET = 0.6;

/**
 * Lifts a dim screen while a reading screen is in view, and puts it back.
 *
 * This sets the APP WINDOW brightness (`setBrightnessAsync`), never the system
 * setting (`setSystemBrightnessAsync`), which would need the WRITE_SETTINGS
 * special-access grant on Android and would outlive the app.
 *
 * Restoring is not symmetric across platforms:
 *   Android — the override is scoped to our activity and the OS drops it on its
 *             own when we background. restoreSystemBrightnessAsync() hands
 *             control back explicitly.
 *   iOS     — setBrightnessAsync moves the REAL screen brightness and it does
 *             NOT revert; it persists until the device is locked. So we have to
 *             put the original value back by hand, both on blur and whenever the
 *             app leaves the foreground.
 *
 * Every call is wrapped: a brightness failure must never take down a lesson.
 */
export function useReadingBrightness() {
  const enabled = useStore((s) => s.brightBoost);
  const original = useRef<number | null>(null);
  // Focus and AppState can both fire in the same tick. Without a synchronous
  // gate, two boosts race: the second reads the brightness the first just set
  // and records 0.6 as the "original", so restore would never give it back.
  const busy = useRef(false);

  const boost = useCallback(async () => {
    if (!enabled || original.current != null || busy.current) return;
    busy.current = true;
    try {
      if (!(await Brightness.isAvailableAsync())) return;
      const current = await Brightness.getBrightnessAsync();
      // Already bright enough. Leave the user alone.
      if (current >= TRIGGER) return;
      original.current = current;
      await Brightness.setBrightnessAsync(TARGET);
    } catch {
      original.current = null;
    } finally {
      busy.current = false;
    }
  }, [enabled]);

  const restore = useCallback(async () => {
    if (busy.current) return;
    const prev = original.current;
    if (prev == null) return;
    busy.current = true;
    original.current = null;
    try {
      if (Platform.OS === 'android') {
        await Brightness.restoreSystemBrightnessAsync();
      } else {
        await Brightness.setBrightnessAsync(prev);
      }
    } catch {
      // Nothing safe left to do. On Android the OS reverts for us anyway.
    } finally {
      busy.current = false;
    }
  }, []);

  // Boost while this screen has focus, restore when it loses it.
  useFocusEffect(
    useCallback(() => {
      void boost();
      return () => {
        void restore();
      };
    }, [boost, restore])
  );

  // iOS will happily keep our brightness after the user swipes away, so give it
  // back the moment we stop being the foreground app.
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') void boost();
      else void restore();
    });
    return () => sub.remove();
  }, [boost, restore]);

  // The user can turn the setting off mid-lesson.
  useEffect(() => {
    if (!enabled) void restore();
  }, [enabled, restore]);
}
