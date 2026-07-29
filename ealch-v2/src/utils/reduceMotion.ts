import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

// No animation in the app checked this before Brix's Animated-based squash-
// and-stretch system (dictation.tsx's shake, speak.tsx's pulse ring, etc. all
// predate this and don't check it either — out of scope to retrofit here).
// The Accessibility Gate amendment makes this a hard always-on default for
// the mascot specifically, not a tier option, so it lives once in a shared
// hook rather than per animation call site.
export function useReduceMotion(): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled().then((v) => {
      if (mounted) setOn(v);
    });
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', (v) => setOn(v));
    return () => {
      mounted = false;
      sub.remove();
    };
  }, []);
  return on;
}
