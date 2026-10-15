import { useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { maybeRequestReview } from '@/services/reviewPrompt';

/** D-03: the review request fires only when a trail screen (act, den) takes focus. */
export function useReviewPromptOnFocus(): void {
  useFocusEffect(
    useCallback(() => {
      const t = setTimeout(() => { void maybeRequestReview(); }, 800);
      return () => clearTimeout(t);
    }, []),
  );
}
