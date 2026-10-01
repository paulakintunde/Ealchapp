import { AccessibilityInfo, InteractionManager, type View } from 'react-native';

// One place that sends screen-reader focus. setAccessibilityFocus(tag) is
// deprecated in RN 0.86 (AccessibilityInfo.js: "Use sendAccessibilityEvent
// with eventType focus instead"), and sendAccessibilityEvent takes the host
// instance, not a findNodeHandle tag.
export function focusNode(node: View | null | undefined): void {
  if (node == null) return;
  AccessibilityInfo.sendAccessibilityEvent(node as never, 'focus');
}

// In-screen overlays (LevelPanel, LanguagePanel, BottomSheet, LessonModal,
// DictionaryOverlay, ReferenceSheet) are not route transitions, so there is no
// transitionEnd to wait for. They open with an Animated slide, and focus sent
// while it runs is overridden (or lands on the half-offscreen sheet). Defer to
// after the animation: Animated.timing registers an interaction handle, and
// the 0ms hop lets the open effect start it before we ask InteractionManager.
export function focusAfterOpen(
  getNode: () => View | null | undefined,
  stillOpen: () => boolean = () => true,
): void {
  setTimeout(() => {
    InteractionManager.runAfterInteractions(() => {
      if (stillOpen()) focusNode(getNode());
    });
  }, 0);
}
