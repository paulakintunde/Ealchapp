import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ACCENTS, type Mode } from '@/theme/palette';
// Import the service module directly (not '@/services') — the barrel pulls in
// sound.ts, which imports this store back.
import { notifications } from '@/services/notifications';
// strings.ts only type-imports this store, so this is not a runtime cycle.
import { T as STRINGS } from '@/i18n/strings';
// useProgress does not import this store back, so this is not a cycle either.
import { useProgress } from './useProgress';
import { device24h, formatTime } from '@/utils/time';

export type Lang = 'fr' | 'en';

/**
 * English is the primary interface language; devices set to French
 * (e.g. installs from a French store region) start in French.
 */
export function deviceLang(): Lang {
  try {
    const nav = typeof navigator !== 'undefined' ? (navigator as { language?: string; languages?: readonly string[] }) : undefined;
    const loc = nav?.language ?? nav?.languages?.[0] ?? Intl.DateTimeFormat().resolvedOptions().locale ?? '';
    return loc.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  } catch {
    return 'en';
  }
}
export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD';
export type Plan = 'yr' | 'mo';
export type AccountType = 'guest' | 'email';

export type Notifs = { daily: boolean; report: boolean; nudge: boolean };

export type AppState = {
  hydrated: boolean;

  // interface language (full FR/EN); appLang = onboarding 7-language pick
  lang: Lang;
  appLang: string;

  // appearance
  mode: Mode;
  accent: string; // active accent hex (accentPick)

  // Lift a dim screen while reading. App-window brightness only, never the
  // system setting, and only on the lesson-style screens.
  brightBoost: boolean;

  // home: whether the "Browse" fold is expanded — a UI preference that should
  // survive remounts, not reset to collapsed on every visit.
  browseOpen: boolean;

  // audio + reminders
  sound: boolean;
  alarmTime: string; // always 24h "HH:MM" internally
  clock24: boolean; // display preference: 24h vs 12h AM/PM
  notifs: Notifs;

  // learning prefs from onboarding
  goal: string;
  exp: string;
  pace: string;
  level: string;
  region: string;

  // account
  userName: string;
  email: string;
  accountType: AccountType;
  signedIn: boolean;
  onboarded: boolean;

  // billing
  currency: Currency;
  planPick: Plan;
  premium: boolean;

  // progress
  //
  // streak, reviewDue and weekDots used to live here as stored numbers that
  // nothing ever wrote. They are now derived from the session log — see
  // progress.logic.ts. `reviewCleared` joined them: it was a manual "I cleared
  // the queue" boolean, but the review queue is now derived from the attempt log
  // by the scheduler (dueCards), so there is nothing to flag. `freeze` stays: it
  // is a grant the app makes, not a measurement of anything the user did, so
  // there is nothing to derive it from.
  freeze: number; // streak freezes available

  // actions
  setHydrated: () => void;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
  setAccent: (hex: string) => void;
  setSound: (on: boolean) => void;
  setBrightBoost: (on: boolean) => void;
  setAlarm: (t: string) => void;
  setClock24: (v: boolean) => void;
  setNotif: (k: keyof Notifs, v: boolean) => void;
  /** Request notification permission and schedule the daily reminder; on native denial flips notifs.daily off. */
  enableDailyReminder: () => Promise<boolean>;
  setCurrency: (c: Currency) => void;
  setPlan: (p: Plan) => void;
  setRegion: (r: string) => void;
  setAppLang: (id: string) => void;
  setField: <K extends keyof AppState>(k: K, v: AppState[K]) => void;
  signIn: (email?: string, name?: string) => void;
  signOut: () => Promise<void>;
  /** Wipe every persisted field back to first-launch defaults. Used by account deletion. */
  eraseLocalData: () => Promise<void>;
  completeOnboarding: (level: string) => void;
};

/** Every data field at first-launch value. A function, not a constant, so that
 *  a reset re-reads the device locale and clock format rather than replaying
 *  whatever they were when the module first loaded. */
const initialData = () => ({
  lang: deviceLang(),
  appLang: deviceLang() as string,

  mode: 'dark' as Mode,
  accent: ACCENTS[0].c,

  brightBoost: true,
  browseOpen: false,

  sound: true,
  alarmTime: '19:00',
  clock24: device24h(),
  notifs: { daily: true, report: true, nudge: false } as Notifs,

  goal: 'survive',
  exp: 'zero',
  pace: '10 min',
  level: 'B1',
  region: 'Parisienne',

  userName: '', // optional display name — empty means "greet without a name"
  email: '',
  accountType: 'guest' as AccountType,
  signedIn: false,
  onboarded: false,

  currency: 'USD' as Currency,
  planPick: 'yr' as Plan,
  premium: false,

  // One freeze at day zero is a real starting grant, not a claim about past
  // activity — which is why it is the only progress field left in this store.
  freeze: 1,
});

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      hydrated: false,

      ...initialData(),

      setHydrated: () => set({ hydrated: true }),
      setLang: (lang) => set({ lang }),
      toggleLang: () => set({ lang: get().lang === 'fr' ? 'en' : 'fr' }),
      setMode: (mode) => set({ mode }),
      toggleMode: () => set({ mode: get().mode === 'dark' ? 'light' : 'dark' }),
      setAccent: (accent) => set({ accent }),
      setSound: (sound) => set({ sound }),
      setBrightBoost: (brightBoost) => set({ brightBoost }),
      setAlarm: (alarmTime) => {
        set({ alarmTime });
        // scheduleDaily cancels before scheduling, so at most one is pending.
        if (get().notifs.daily) {
          void notifications.scheduleDaily(
            alarmTime,
            STRINGS[get().lang].bannerText.replace('{t}', formatTime(alarmTime, get().clock24)),
          );
        }
      },
      setClock24: (clock24) => set({ clock24 }),
      setNotif: (k, v) => {
        set({ notifs: { ...get().notifs, [k]: v } });
        if (k === 'daily') {
          if (v) void get().enableDailyReminder();
          else void notifications.cancelAll();
        }
      },
      enableDailyReminder: async () => {
        const granted = await notifications.requestPermissions();
        if (granted) {
          const { alarmTime, lang, clock24 } = get();
          await notifications.scheduleDaily(
            alarmTime,
            STRINGS[lang].bannerText.replace('{t}', formatTime(alarmTime, clock24)),
          );
        } else if (Platform.OS !== 'web' && get().notifs.daily) {
          // Denied on native: the toggle must tell the truth. On web the
          // scheduler is a no-op and the in-app banner is the delivery path,
          // so the toggle stays on.
          set({ notifs: { ...get().notifs, daily: false } });
        }
        return granted;
      },
      setCurrency: (currency) => set({ currency }),
      setPlan: (planPick) => set({ planPick }),
      // No upgrade(). It was `() => set({ premium: true })`: it minted the
      // premium flag with no payment, no receipt and no entitlement, from a
      // button in settings. Phase 10 sets `premium` from RevenueCat's
      // customerInfo, which is the only authority that can honestly say a user
      // has paid. Nothing else may write it.
      setRegion: (region) => set({ region }),
      // Non-FR/EN picks fall back to the declared default interface language (EN).
      setAppLang: (appLang) =>
        set({ appLang, lang: appLang === 'fr' ? 'fr' : 'en' }),
      setField: (k, v) => set({ [k]: v } as Partial<AppState>),
      signIn: (email, name) =>
        set({ signedIn: true, email: email ?? get().email, userName: name ?? get().userName }),
      signOut: async () => {
        set({ signedIn: false, onboarded: false, email: '', userName: '', accountType: 'guest' });
        // The session, attempt and error logs live in their own store and are a
        // record of what THIS account did. Leaving them on the device would hand
        // the next person to sign in the previous user's streak, minutes and
        // weakness history. Account deletion already does this; sign-out must too.
        await useProgress.getState().eraseProgress();
      },
      eraseLocalData: async () => {
        // Pending reminders reference an account that is about to stop existing.
        try {
          await notifications.cancelAll();
        } catch {
          // A scheduler that refuses to cancel must not block the erase.
        }
        // Reset in memory first, then drop the persisted blob. Doing it in this
        // order means any write the persist middleware makes on the way out
        // writes defaults, never the data we are trying to destroy.
        set({ ...initialData() });
        try {
          await useStore.persist.clearStorage();
        } catch {
          // Storage is already unreadable — the in-memory reset still stands.
        }
        // The session log lives in its own persisted store. It is a record of
        // what this account did, so it dies with the account.
        await useProgress.getState().eraseProgress();
      },
      completeOnboarding: (level) => set({ level, onboarded: true, signedIn: true }),
    }),
    {
      name: 'ealch-store',
      version: 5,
      // v0 → v1: language used to be hardcoded French; re-derive from the device.
      // v1 → v2: 'Maya' was a hardcoded placeholder identity, never user-entered;
      // clear it so the no-name greeting applies until the user sets a real name.
      // v3 → v4: streak/reviewDue/weekDots are gone. They shipped seeded (14, 23,
      // five dots on), nothing ever wrote them, and every install carried the same
      // fabricated fortnight. They are now derived from the session log
      // (progress.logic.ts) and no longer belong in this store; drop the stale
      // keys rather than leave a fake streak sitting in the persisted blob.
      // v4 → v5: reviewCleared is gone too — the review queue is now derived from
      // the attempt log by the scheduler (dueCards), so the manual flag is dead.
      migrate: (persisted, version) => {
        const s = persisted as Partial<AppState> & Record<string, unknown>;
        if (version === 0) {
          s.lang = deviceLang();
          s.appLang = s.lang;
        }
        if (version <= 1 && s.userName === 'Maya') {
          s.userName = '';
        }
        if (version <= 3) {
          delete s.streak;
          delete s.reviewDue;
          delete s.weekDots;
        }
        if (version <= 4) {
          delete s.reviewCleared;
        }
        return s as AppState;
      },
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        lang: s.lang,
        appLang: s.appLang,
        mode: s.mode,
        accent: s.accent,
        brightBoost: s.brightBoost,
        browseOpen: s.browseOpen,
        sound: s.sound,
        alarmTime: s.alarmTime,
        clock24: s.clock24,
        notifs: s.notifs,
        goal: s.goal,
        exp: s.exp,
        pace: s.pace,
        level: s.level,
        region: s.region,
        userName: s.userName,
        email: s.email,
        accountType: s.accountType,
        signedIn: s.signedIn,
        onboarded: s.onboarded,
        currency: s.currency,
        planPick: s.planPick,
        premium: s.premium,
        freeze: s.freeze,
      }),
      // Always flip `hydrated`, even when rehydration fails or yields no state —
      // a corrupt AsyncStorage entry must never brick startup.
      onRehydrateStorage: () => (state, error) => {
        if (state && !error) state.setHydrated();
        else useStore.setState({ hydrated: true });
      },
    }
  )
);
