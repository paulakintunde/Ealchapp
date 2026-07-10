import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ACCENTS, type Mode } from '@/theme/palette';

export type Lang = 'fr' | 'en';
export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD';
export type Plan = 'yr' | 'mo';

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
  alarmTime: string;
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
  setNotif: (k: keyof Notifs, v: boolean) => void;
  setCurrency: (c: Currency) => void;
  setPlan: (p: Plan) => void;
  upgrade: () => void;
  setRegion: (r: string) => void;
  setAppLang: (id: string) => void;
  setField: <K extends keyof AppState>(k: K, v: AppState[K]) => void;
  signIn: (email?: string, name?: string) => void;
  signOut: () => void;
  completeOnboarding: (level: string) => void;
  clearReview: () => void;
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      hydrated: false,

      lang: 'fr',
      appLang: 'fr',

      mode: 'dark',
      accent: ACCENTS[0].c,

      sound: true,
      alarmTime: '19:00',
      notifs: { daily: true, report: true, nudge: false },

      goal: 'survive',
      exp: 'zero',
      pace: '10 min',
      level: 'B1',
      region: 'Parisienne',

      userName: 'Maya',
      email: '',
      signedIn: false,
      onboarded: false,

      currency: 'USD',
      planPick: 'yr',
      premium: false,

      streak: 14,
      reviewDue: 23,
      reviewCleared: false,
      weekDots: [true, true, false, true, true, true, false],
      freeze: 1,

      setHydrated: () => set({ hydrated: true }),
      setLang: (lang) => set({ lang }),
      toggleLang: () => set({ lang: get().lang === 'fr' ? 'en' : 'fr' }),
      setMode: (mode) => set({ mode }),
      toggleMode: () => set({ mode: get().mode === 'dark' ? 'light' : 'dark' }),
      setAccent: (accent) => set({ accent }),
      setSound: (sound) => set({ sound }),
      setAlarm: (alarmTime) => set({ alarmTime }),
      setNotif: (k, v) => set({ notifs: { ...get().notifs, [k]: v } }),
      setCurrency: (currency) => set({ currency }),
      setPlan: (planPick) => set({ planPick }),
      upgrade: () => set({ premium: true }),
      setRegion: (region) => set({ region }),
      setAppLang: (appLang) =>
        set({ appLang, lang: appLang === 'en' ? 'en' : appLang === 'fr' ? 'fr' : get().lang }),
      setField: (k, v) => set({ [k]: v } as Partial<AppState>),
      signIn: (email, name) =>
        set({ signedIn: true, email: email ?? get().email, userName: name ?? get().userName }),
      signOut: () =>
        set({ signedIn: false, onboarded: false }),
      completeOnboarding: (level) => set({ level, onboarded: true, signedIn: true }),
      clearReview: () => set({ reviewCleared: true, reviewDue: 0 }),
    }),
    {
      name: 'ealch-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        lang: s.lang,
        appLang: s.appLang,
        mode: s.mode,
        accent: s.accent,
        sound: s.sound,
        alarmTime: s.alarmTime,
        notifs: s.notifs,
        goal: s.goal,
        exp: s.exp,
        pace: s.pace,
        level: s.level,
        region: s.region,
        userName: s.userName,
        email: s.email,
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
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);
