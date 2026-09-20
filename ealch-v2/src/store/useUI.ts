import { create } from 'zustand';
import type { DictEntry } from '@/content/wordOfDay';

export type SheetKind = 'vocab' | 'grammar' | null;

/** One row of the vocab-primer sheet: real corpus text, not the fixed café
 *  set the sheet used to render regardless of what the hero recommended. */
export type VocabPrimerItem = { fr: string; en: string };

/** The single ephemeral-banner slot. A tagged union in ONE nullable field, so
 *  "only one banner at a time" is a property of the type rather than something
 *  callers have to coordinate (D-14). Phase 10's rating prompt adds a fourth
 *  member here; nothing else needs to change when it does. */
export type BannerState =
  /** The daily practice reminder. `at` is the HH:MM the alarm was set for. */
  | { kind: 'speakReminder'; at: string }
  /** Phase 5 / D-11: a free user brushed a limit without being blocked yet. */
  | { kind: 'upgradeNudge'; trigger: 'roleplay' | 'coach'; copy: string }
  /** Phase 5 / D-15: a genuine entitlement downgrade was observed. */
  | { kind: 'reconciliation' };

type UIState = {
  sheet: SheetKind;
  /** The words the vocab sheet renders — set by openVocabSheet from the
   *  caller's actual session content (today's fresh items), never hardcoded
   *  here. Stale outside a 'vocab' sheet; ignore it otherwise. */
  vocabItems: VocabPrimerItem[];
  banner: BannerState | null;
  dictOpen: boolean;
  /** The entry the dictionary overlay is showing — set by openDict so the word
   *  of the day is no longer hardcoded in two places. */
  dictEntry: DictEntry | null;
  dictSaved: boolean;

  openSheet: (k: SheetKind) => void;
  openVocabSheet: (items: VocabPrimerItem[]) => void;
  closeSheet: () => void;
  showBanner: (b: BannerState) => void;
  hideBanner: () => void;
  openDict: (entry: DictEntry) => void;
  closeDict: () => void;
  toggleDictSaved: () => void;
};

export const useUI = create<UIState>((set) => ({
  sheet: null,
  vocabItems: [],
  banner: null,
  dictOpen: false,
  dictEntry: null,
  dictSaved: false,

  openSheet: (sheet) => set({ sheet }),
  openVocabSheet: (vocabItems) => set({ sheet: 'vocab', vocabItems }),
  closeSheet: () => set({ sheet: null }),
  showBanner: (banner) => set({ banner }),
  hideBanner: () => set({ banner: null }),
  openDict: (dictEntry) => set({ dictOpen: true, dictEntry }),
  closeDict: () => set({ dictOpen: false }),
  toggleDictSaved: () => set((s) => ({ dictSaved: !s.dictSaved })),
}));
