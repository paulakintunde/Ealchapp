import { create } from 'zustand';

export type SheetKind = 'vocab' | 'grammar' | null;

type UIState = {
  sheet: SheetKind;
  bannerVisible: boolean;
  bannerAt: string; // HH:MM shown in banner text
  dictOpen: boolean;
  dictSaved: boolean;

  openSheet: (k: SheetKind) => void;
  closeSheet: () => void;
  showBanner: (at: string) => void;
  hideBanner: () => void;
  openDict: () => void;
  closeDict: () => void;
  toggleDictSaved: () => void;
};

export const useUI = create<UIState>((set) => ({
  sheet: null,
  bannerVisible: false,
  bannerAt: '19:00',
  dictOpen: false,
  dictSaved: false,

  openSheet: (sheet) => set({ sheet }),
  closeSheet: () => set({ sheet: null }),
  showBanner: (bannerAt) => set({ bannerVisible: true, bannerAt }),
  hideBanner: () => set({ bannerVisible: false }),
  openDict: () => set({ dictOpen: true }),
  closeDict: () => set({ dictOpen: false }),
  toggleDictSaved: () => set((s) => ({ dictSaved: !s.dictSaved })),
}));
