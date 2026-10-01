import { useEffect, type RefObject } from 'react';
import type { View } from 'react-native';
import { useNavSafe } from './safeNav';
import { createEntryFocus } from './entryFocus.logic';
import { focusNode } from './focusNode';

// 08.1 D-03, for ROUTE screens: put screen-reader focus on `ref` (the
// screen's title) once the entry transition has ended. The native-stack
// event is `transitionEnd` with data.closing
// (node_modules/expo-router/build/react-navigation/native-stack/types.d.ts:17,
// emitted from NativeStackView.native.js onAppear/onDisappear). A screen with
// no transition never emits it, so the scheduler also falls back to a timer.
// See entryFocus.logic.ts for why onLayout-time focus does not survive.
export function useEntryFocus(ref: RefObject<View | null>, opts: { enabled?: boolean } = {}): void {
  const enabled = opts.enabled ?? true;
  const navigation = useNavSafe();
  useEffect(() => {
    if (!enabled) return;
    const ctl = createEntryFocus({
      focus: () => focusNode(ref.current),
      isFocused: () => navigation?.isFocused() ?? true,
      setTimer: (fn, ms) => setTimeout(fn, ms),
      clearTimer: (h) => clearTimeout(h as ReturnType<typeof setTimeout>),
    });
    ctl.start();
    const off = navigation?.addListener('transitionEnd', (e) => ctl.transitionEnd(e.data?.closing === true));
    return () => {
      off?.();
      ctl.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, navigation]);
}
