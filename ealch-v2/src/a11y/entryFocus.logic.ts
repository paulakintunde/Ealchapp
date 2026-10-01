// Pure scheduling for "move screen-reader focus to this screen's target once
// the screen has actually settled" (08.1 D-03). No react-native import: the
// hook (useEntryFocus.ts) supplies real timers and the real focus call, the
// node tests supply fakes.
//
// Why a scheduler and not a one-line call from onLayout: on a pushed
// native-stack screen onLayout fires DURING the transition, and when the
// transition ends Android TalkBack moves focus to the first focusable element
// of the new window (the Back / Close button), overriding anything sent
// earlier. Device-proven on the Pixel 9 preview build. So focus is sent AFTER
// the navigator's transitionEnd, with a timer fallback for screens that have
// no transition (animation 'none', the first route) and a single re-assert.

export const ENTRY_FALLBACK_MS = 700;
export const ENTRY_REASSERT_MS = 300;

export type EntryFocusDeps = {
  /** Send focus. `attempt` is 0 for the first send, 1 for the re-assert. */
  focus: (attempt: 0 | 1) => void;
  /** Re-assert only while the screen is still the focused route. */
  isFocused: () => boolean;
  setTimer: (fn: () => void, ms: number) => unknown;
  clearTimer: (handle: unknown) => void;
  fallbackMs?: number;
  reassertMs?: number;
};

export type EntryFocusController = {
  /** Arm: wait for transitionEnd, or fall back to a timer. Re-arms after a fire. */
  start: () => void;
  /** Feed the navigator's transitionEnd. A closing transition never focuses. */
  transitionEnd: (closing: boolean) => void;
  /** Cancel every pending timer (unmount / blur). */
  cancel: () => void;
};

export function createEntryFocus(deps: EntryFocusDeps): EntryFocusController {
  const fallbackMs = deps.fallbackMs ?? ENTRY_FALLBACK_MS;
  const reassertMs = deps.reassertMs ?? ENTRY_REASSERT_MS;
  let armed = false;
  let fallback: unknown = null;
  let reassert: unknown = null;

  const clearAll = () => {
    if (fallback != null) deps.clearTimer(fallback);
    if (reassert != null) deps.clearTimer(reassert);
    fallback = null;
    reassert = null;
  };

  const fire = () => {
    if (!armed) return;
    armed = false;
    if (fallback != null) deps.clearTimer(fallback);
    fallback = null;
    deps.focus(0);
    reassert = deps.setTimer(() => {
      reassert = null;
      if (deps.isFocused()) deps.focus(1);
    }, reassertMs);
  };

  return {
    start() {
      clearAll();
      armed = true;
      fallback = deps.setTimer(() => {
        fallback = null;
        fire();
      }, fallbackMs);
    },
    transitionEnd(closing) {
      if (closing) return;
      fire();
    },
    cancel() {
      armed = false;
      clearAll();
    },
  };
}
