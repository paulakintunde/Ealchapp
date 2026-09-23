import { createContext, useContext } from 'react';

/** Whether English glosses are shown on this screen. See content/english.logic.ts.
 *  Defaults to TRUE: only the lesson screen provides a value, so every other
 *  screen renders its English exactly as before. */
export const GlossContext = createContext(true);

export function useShowEnglish(): boolean {
  return useContext(GlossContext);
}
