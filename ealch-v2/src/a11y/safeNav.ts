import { useNavigation, useRoute } from 'expo-router';

// The navigation context is absent when a screen or row is rendered bare
// (component tests, storybook-style harnesses). The a11y hooks must degrade to
// "no navigation" there rather than throw: useNavigation / useRoute call
// useContext first and throw after it, so the hook order stays stable.

export type NavLike = {
  addListener: (type: 'focus' | 'blur' | 'transitionEnd', cb: (e: { data?: { closing?: boolean } }) => void) => () => void;
  isFocused: () => boolean;
};

export function useNavSafe(): NavLike | null {
  try {
    return useNavigation() as unknown as NavLike;
  } catch {
    return null;
  }
}

export function useRouteKeySafe(): string | null {
  try {
    return useRoute().key;
  } catch {
    return null;
  }
}
