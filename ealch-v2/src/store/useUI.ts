import { create } from 'zustand';
import type { DictEntry } from '@/content/wordOfDay';

export type SheetKind = 'vocab' | 'grammar' | null;

type UIState = {
  sheet: SheetKind;
  bannerVisible: boolean;
  bannerAt: string; // HH:MM shown in banner text
  dictOpen: boolean;
  /** The entry the dictionary overlay is showing — set by openDict so the word
   *  of the day is no longer hardcoded in two places. */
  dictEntry: DictEntry | null;
  dictSaved: boolean;

  openSheet: (k: SheetKind) => void;
  closeSheet: () => void;
  showBanner: (at: string) => void;
  hideBanner: () => void;
  openDict: (entry: DictEntry) => void;
  closeDict: () => void;
  toggleDictSaved: () => void;
};

export const useUI = create<UIState>((set) => ({
  sheet: null,
  bannerVisible: false,
  bannerAt: '19:00',
  dictOpen: false,
  dictEntry: null,
  dictSaved: false,

  openSheet: (sheet) => set({ sheet }),
  closeSheet: () => set({ sheet: null }),
  showBanner: (bannerAt) => set({ bannerVisible: true, bannerAt }),
  hideBanner: () => set({ bannerVisible: false }),
  openDict: (dictEntry) => set({ dictOpen: true, dictEntry }),
  closeDict: () => set({ dictOpen: false }),
  toggleDictSaved: () => set((s) => ({ dictSaved: !s.dictSaved })),
}));
