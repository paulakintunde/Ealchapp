import { create } from 'zustand';
import type { DictEntry } from '@/content/wordOfDay';
import type { Level } from '@/content/schema';

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
  /** Bumped on every showBanner() call. A caller that scheduled a delayed
   *  hideBanner() (or an auto-dismiss effect keyed only on `banner?.kind`)
   *  must re-read this before clearing, so a stale timer from an earlier
   *  banner can never wipe out a newer, unrelated one that overwrote it. */
  bannerGen: number;
  dictOpen: boolean;
  /** The entry the dictionary overlay is showing — set by openDict so the word
   *  of the day is no longer hardcoded in two places. */
  dictEntry: DictEntry | null;
  dictSaved: boolean;

  /** Phase 07.1 / D-06: the trail's band selector panel, open state. A
   *  panel that reopens after a relaunch is a bug — this store keeps no
   *  saved copy of it, unlike the language mode, which is a real
   *  preference (see useStore's v6-to-v7 migration for that one). */
  levelPanelOpen: boolean;
  setLevelPanelOpen: (open: boolean) => void;
  /** The trail's selected band, ephemeral by design (den.tsx used to keep
   *  this in local useState; it moves here only so the level panel and the
   *  trail screen can both read/write it without prop-drilling). Saving it
   *  across relaunches would be a deliberate, separate change — not made
   *  here. */
  trailBand: Level;
  setTrailBand: (band: Level) => void;
  /** D-41: the trail's scroll anchor, one stable row id per band, resolved
   *  to an index at restore time — never a pixel offset. Session-only: a
   *  scroll position surviving a two-week-old relaunch is noise, and
   *  within-session restoration is the whole requirement. */
  trailAnchor: Record<string, string | null>;
  setTrailAnchor: (band: string, rowId: string | null) => void;

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
  bannerGen: 0,
  dictOpen: false,
  dictEntry: null,
  dictSaved: false,
  levelPanelOpen: false,
  trailBand: 'sons',
  trailAnchor: {},

  setLevelPanelOpen: (levelPanelOpen) => set({ levelPanelOpen }),
  setTrailBand: (trailBand) => set({ trailBand }),
  setTrailAnchor: (band, rowId) => set((s) => ({ trailAnchor: { ...s.trailAnchor, [band]: rowId } })),

  openSheet: (sheet) => set({ sheet }),
  openVocabSheet: (vocabItems) => set({ sheet: 'vocab', vocabItems }),
  closeSheet: () => set({ sheet: null }),
  showBanner: (banner) => set((s) => ({ banner, bannerGen: s.bannerGen + 1 })),
  hideBanner: () => set({ banner: null }),
  openDict: (dictEntry) => set({ dictOpen: true, dictEntry }),
  closeDict: () => set({ dictOpen: false }),
  toggleDictSaved: () => set((s) => ({ dictSaved: !s.dictSaved })),
}));
