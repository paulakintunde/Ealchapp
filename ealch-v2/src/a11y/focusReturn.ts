import { useCallback, useEffect, type RefObject } from 'react';
import type { View } from 'react-native';
import { useNavSafe, useRouteKeySafe } from './safeNav';
import { createEntryFocus } from './entryFocus.logic';
import { focusNode } from './focusNode';

// 08.1 D-03 focus return: a control that opens the paywall (or any pushed
// screen) registers itself under the CURRENT route's key; when that route
// regains focus the screen sends screen-reader focus back to it and clears
// the entry. Without this TalkBack drops focus at the top of the previous
// screen, which is the Back-from-paywall finding on the Pixel 9.

const pending = new Map<string, RefObject<View | null>>();

export function registerFocusReturn(routeKey: string, ref: RefObject<View | null>): void {
  pending.set(routeKey, ref);
}
export function peekFocusReturn(routeKey: string): RefObject<View | null> | undefined {
  return pending.get(routeKey);
}
export function clearFocusReturn(routeKey: string): void {
  pending.delete(routeKey);
}

/** For the opening control: returns `(ref) => void`, call it right before navigating. */
export function useFocusReturnRegister(): (ref: RefObject<View | null>) => void {
  const key = useRouteKeySafe();
  return useCallback((ref) => {
    if (key != null) registerFocusReturn(key, ref);
  }, [key]);
}

/** For the screen that is returned to: restores focus to the registered opener. */
export function useFocusReturn(): void {
  const navigation = useNavSafe();
  const key = useRouteKeySafe();
  useEffect(() => {
    if (navigation == null || key == null) return undefined;
    const ctl = createEntryFocus({
      focus: (attempt) => {
        const ref = peekFocusReturn(key);
        if (!ref) return;
        focusNode(ref.current);
        if (attempt === 1) clearFocusReturn(key);
      },
      isFocused: () => navigation.isFocused(),
      setTimer: (fn, ms) => setTimeout(fn, ms),
      clearTimer: (h) => clearTimeout(h as ReturnType<typeof setTimeout>),
    });
    const offFocus = navigation.addListener('focus', () => {
      // The first focus event at mount has nothing registered: a no-op.
      if (peekFocusReturn(key)) ctl.start();
    });
    const offEnd = navigation.addListener('transitionEnd', (e) => ctl.transitionEnd(e.data?.closing === true));
    const offBlur = navigation.addListener('blur', () => ctl.cancel());
    return () => {
      offFocus();
      offEnd();
      offBlur();
      ctl.cancel();
    };
  }, [navigation, key]);
}
