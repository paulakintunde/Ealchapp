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
  streak: number;
  reviewDue: number;
  reviewCleared: boolean;
  weekDots: boolean[]; // 7 days, true = practiced
  freeze: number; // streak freezes available

  // actions
  setHydrated: () => void;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
  setAccent: (hex: string) => void;
  setSound: (on: boolean) => void;
  setAlarm: (t: string) => void;
  setClock24: (v: boolean) => void;
  setNotif: (k: keyof Notifs, v: boolean) => void;
  /** Request notification permission and schedule the daily reminder; on native denial flips notifs.daily off. */
  enableDailyReminder: () => Promise<boolean>;
  setCurrency: (c: Currency) => void;
  setPlan: (p: Plan) => void;
  upgrade: () => void;
  setRegion: (r: string) => void;
  setAppLang: (id: string) => void;
  setField: <K extends keyof AppState>(k: K, v: AppState[K]) => void;
  signIn: (email?: string, name?: string) => void;
  signOut: () => void;
  /** Wipe every persisted field back to first-launch defaults. Used by account deletion. */
  eraseLocalData: () => Promise<void>;
  completeOnboarding: (level: string) => void;
  clearReview: () => void;
};

/** Every data field at first-launch value. A function, not a constant, so that
 *  a reset re-reads the device locale and clock format rather than replaying
 *  whatever they were when the module first loaded. */
const initialData = () => ({
  lang: deviceLang(),
  appLang: deviceLang() as string,

  mode: 'dark' as Mode,
  accent: ACCENTS[0].c,

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

  // A fresh install has practised on exactly zero days. `freeze` is the one
  // number that survives: a single freeze at day zero is a real starting grant,
  // not a claim about past activity.
  streak: 0,
  reviewDue: 0,
  reviewCleared: false,
  weekDots: [false, false, false, false, false, false, false],
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
      upgrade: () => set({ premium: true }),
      setRegion: (region) => set({ region }),
      // Non-FR/EN picks fall back to the declared default interface language (EN).
      setAppLang: (appLang) =>
        set({ appLang, lang: appLang === 'fr' ? 'fr' : 'en' }),
      setField: (k, v) => set({ [k]: v } as Partial<AppState>),
      signIn: (email, name) =>
        set({ signedIn: true, email: email ?? get().email, userName: name ?? get().userName }),
      signOut: () =>
        set({ signedIn: false, onboarded: false, email: '', userName: '', accountType: 'guest' }),
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
      },
      completeOnboarding: (level) => set({ level, onboarded: true, signedIn: true }),
      clearReview: () => set({ reviewCleared: true, reviewDue: 0 }),
    }),
    {
      name: 'ealch-store',
      version: 3,
      // v0 → v1: language used to be hardcoded French; re-derive from the device.
      // v1 → v2: 'Maya' was a hardcoded placeholder identity, never user-entered;
      // clear it so the no-name greeting applies until the user sets a real name.
      // v2 → v3: streak/reviewDue/weekDots shipped seeded (14, 23, five dots on)
      // and nothing ever wrote them, so every install carried the same fabricated
      // fortnight. Clear them rather than let a fake streak persist forever.
      migrate: (persisted, version) => {
        const s = persisted as Partial<AppState>;
        if (version === 0) {
          s.lang = deviceLang();
          s.appLang = s.lang;
        }
        if (version <= 1 && s.userName === 'Maya') {
          s.userName = '';
        }
        if (version <= 2) {
          s.streak = 0;
          s.reviewDue = 0;
          s.weekDots = [false, false, false, false, false, false, false];
        }
        return s as AppState;
      },
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        lang: s.lang,
        appLang: s.appLang,
        mode: s.mode,
        accent: s.accent,
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
        streak: s.streak,
        reviewDue: s.reviewDue,
        reviewCleared: s.reviewCleared,
        weekDots: s.weekDots,
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
