import { createContext, useContext } from 'react';
import type { EnglishMode } from '@/content/english.logic';

/** The three-valued language mode for this screen. See content/english.logic.ts.
 *  Defaults to 'both': only the lesson screen provides a value, so every
 *  other screen renders its English exactly as before — 'both' is what "as
 *  before" means, since today's English always prints unasked outside a
 *  lesson (flashcards, roleplay, review, smartreview). */
export const GlossContext = createContext<EnglishMode>('both');

/** Derived boolean: false only for 'fr'. Both 'both' and 'onDemand' answer
 *  "the English exists on this screen" — 'onDemand' just gates HOW it is
 *  reached, which is Type.tsx's job, not this hook's. */
export function useShowEnglish(): boolean {
  return useContext(GlossContext) !== 'fr';
}

/** The raw three-valued mode, for a consumer that needs to tell 'both' and
 *  'onDemand' apart (Type.tsx's reveal affordance, MissionRich's group-drill
 *  cell). */
export function useEnglishMode(): EnglishMode {
  return useContext(GlossContext);
}
