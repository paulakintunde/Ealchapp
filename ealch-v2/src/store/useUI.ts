import { create } from 'zustand';
import type { DictEntry } from '@/content/wordOfDay';

export type SheetKind = 'vocab' | 'grammar' | null;

/** One row of the vocab-primer sheet: real corpus text, not the fixed café
 *  set the sheet used to render regardless of what the hero recommended. */
export type VocabPrimerItem = { fr: string; en: string };

type UIState = {
  sheet: SheetKind;
  /** The words the vocab sheet renders — set by openVocabSheet from the
   *  caller's actual session content (today's fresh items), never hardcoded
   *  here. Stale outside a 'vocab' sheet; ignore it otherwise. */
  vocabItems: VocabPrimerItem[];
  bannerVisible: boolean;
  bannerAt: string; // HH:MM shown in banner text
  dictOpen: boolean;
  /** The entry the dictionary overlay is showing — set by openDict so the word
   *  of the day is no longer hardcoded in two places. */
  dictEntry: DictEntry | null;
  dictSaved: boolean;

  openSheet: (k: SheetKind) => void;
  openVocabSheet: (items: VocabPrimerItem[]) => void;
  closeSheet: () => void;
  showBanner: (at: string) => void;
  hideBanner: () => void;
  openDict: (entry: DictEntry) => void;
  closeDict: () => void;
  toggleDictSaved: () => void;
};

export const useUI = create<UIState>((set) => ({
  sheet: null,
  vocabItems: [],
  bannerVisible: false,
  bannerAt: '19:00',
  dictOpen: false,
  dictEntry: null,
  dictSaved: false,

  openSheet: (sheet) => set({ sheet }),
  openVocabSheet: (vocabItems) => set({ sheet: 'vocab', vocabItems }),
  closeSheet: () => set({ sheet: null }),
  showBanner: (bannerAt) => set({ bannerVisible: true, bannerAt }),
  hideBanner: () => set({ bannerVisible: false }),
  openDict: (dictEntry) => set({ dictOpen: true, dictEntry }),
  closeDict: () => set({ dictOpen: false }),
  toggleDictSaved: () => set((s) => ({ dictSaved: !s.dictSaved })),
}));
