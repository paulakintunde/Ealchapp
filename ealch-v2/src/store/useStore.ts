import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ACCENTS, type Mode } from '@/theme/palette';
import { avatarName, DEFAULT_AVATAR_ID } from '@/content/avatars';
// Import the service module directly (not '@/services') — the barrel pulls in
// sound.ts, which imports this store back.
import { notifications } from '@/services/notifications';
import { supabase } from '@/services/supabase';
// strings.ts only type-imports this store, so this is not a runtime cycle.
import { T as STRINGS } from '@/i18n/strings';
// useProgress does not import this store back, so this is not a cycle either.
import { setSessionEndListener, useProgress } from './useProgress';
import { device24h, formatTime } from '@/utils/time';
import { formatNotifText } from '@/utils/notifText.logic';

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
  avatarId: string; // selected coach avatar (AvatarId from content/avatars.ts)

  // Lift a dim screen while reading. App-window brightness only, never the
  // system setting, and only on the lesson-style screens.
  brightBoost: boolean;

  // The swipeable "how lessons work" intro (LessonKeyIntro) auto-shows once,
  // ever, before the first lesson a user opens, then never again on its own —
  // a `?` in the lesson header reopens it afterward regardless of this flag.
  lessonKeySeen: boolean;

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
  /** The VERIFIED Supabase auth uid, or null. Set only by setSession, which is
   *  called only from src/services/session.ts's onAuthStateChange subscriber —
   *  never by signIn/completeOnboarding, which are UI-flow bookkeeping and
   *  cannot themselves prove a session exists. Distinct from `signedIn` on
   *  purpose: `signedIn` also covers guest accounts, which have no server
   *  session and never will. This is the identity Phase 9's sync (sync.ts) and
   *  Phase 10's RevenueCat `Purchases.logIn(userId)` key off. */
  userId: string | null;

  // billing
  currency: Currency;
  planPick: Plan;
  /** True once the USER picked a currency. While false, the paywall may
   *  re-derive `currency` from the device region on open, and its caption says
   *  "detected", not "chosen". The moment setCurrency runs, detection stops
   *  overriding and the caption flips — the old screen claimed "Detected from
   *  your region" over a hardcoded default; this bit is what makes the claim
   *  checkable. NOTE: `premium` used to live here. It is gone on purpose: a
   *  stored boolean is a mintable flag (Phase 0 deleted upgrade() for exactly
   *  that), so paid access is now DERIVED — see useEntitlement/isPremium,
   *  fed only by RevenueCat customerInfo. */
  currencyChosen: boolean;

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

  /** Epoch ms of Camille's last spoken home greeting, 0 = never. Persisted so
   *  the 2h cooldown (progress.logic GREET_COOLDOWN_MS) survives app restarts. */
  lastGreetAt: number;

  /** Epoch ms of the last upgrade nudge shown, 0 = never. Persisted so the
   *  24h cadence (entitlement.logic NUDGE_COOLDOWN_MS) survives app restarts.
   *  Written through the generic setField, like lastGreetAt — the cadence
   *  DECISION lives in the pure logic file, only the timestamp lives here. */
  lastNudgeAt: number;

  // actions
  setHydrated: () => void;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
  setAccent: (hex: string) => void;
  setAvatarId: (id: string) => void;
  setSound: (on: boolean) => void;
  setBrightBoost: (on: boolean) => void;
  setLessonKeySeen: (seen: boolean) => void;
  setAlarm: (t: string) => void;
  setClock24: (v: boolean) => void;
  setNotif: (k: keyof Notifs, v: boolean) => void;
  /** Request notification permission and arm ONE kind; on native denial flips that toggle back off. */
  enableNotifKind: (k: keyof Notifs) => Promise<boolean>;
  /** Request notification permission and schedule the daily reminder; on native denial flips notifs.daily off. */
  enableDailyReminder: () => Promise<boolean>;
  /** Re-arm every scheduled notification from the toggles as they actually are. Runs once after rehydration. */
  resyncNotifs: () => Promise<void>;
  setCurrency: (c: Currency) => void;
  setPlan: (p: Plan) => void;
  setRegion: (r: string) => void;
  setAppLang: (id: string) => void;
  setField: <K extends keyof AppState>(k: K, v: AppState[K]) => void;
  signIn: (email?: string, name?: string) => void;
  /** The single writer of `userId`. Called only from the auth-state subscriber
   *  in src/services/session.ts, never from a screen — a screen only knows
   *  what a form said, not what the backend verified. */
  setSession: (userId: string | null, email: string | null) => void;
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
  avatarId: DEFAULT_AVATAR_ID as string,

  brightBoost: true,
  lessonKeySeen: false,
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
  userId: null as string | null,

  currency: 'USD' as Currency,
  planPick: 'yr' as Plan,
  currencyChosen: false,

  // One freeze at day zero is a real starting grant, not a claim about past
  // activity — which is why it is the only progress field left in this store.
  freeze: 1,

  lastGreetAt: 0,
  lastNudgeAt: 0,
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
      setAvatarId: (avatarId) => set({ avatarId }),
      setSound: (sound) => set({ sound }),
      setBrightBoost: (brightBoost) => set({ brightBoost }),
      setLessonKeySeen: (lessonKeySeen) => set({ lessonKeySeen }),
      setAlarm: (alarmTime) => {
        set({ alarmTime });
        // scheduleDaily replaces the one 'daily-reminder' request, so at most
        // one is pending — and it no longer wipes the other kinds on its way in.
        if (get().notifs.daily) {
          const { lang, clock24, avatarId } = get();
          void notifications.scheduleDaily(
            alarmTime,
            formatNotifText(STRINGS[lang].bannerText, {
              t: formatTime(alarmTime, clock24),
              name: avatarName(avatarId),
            }),
          );
        }
      },
      setClock24: (clock24) => set({ clock24 }),
      setNotif: (k, v) => {
        set({ notifs: { ...get().notifs, [k]: v } });
        // Every kind takes the same path now. Turning one off cancels exactly
        // that kind's identifiers — NEVER cancelAll(), which has no filter and
        // would take the other two kinds' pending notifications with it.
        if (v) void get().enableNotifKind(k);
        else void notifications.cancelKind(k);
      },
      enableNotifKind: async (k) => {
        const granted = await notifications.requestPermissions();
        if (!granted) {
          if (Platform.OS !== 'web' && get().notifs[k]) {
            // Denied on native: the toggle must tell the truth. On web the
            // scheduler is a no-op and the in-app banner is the delivery path,
            // so the toggle stays on.
            set({ notifs: { ...get().notifs, [k]: false } });
          }
          return granted;
        }
        const { alarmTime, lang, clock24, avatarId } = get();
        const name = avatarName(avatarId);
        if (k === 'daily') {
          await notifications.scheduleDaily(
            alarmTime,
            formatNotifText(STRINGS[lang].bannerText, { t: formatTime(alarmTime, clock24), name }),
          );
        } else if (k === 'nudge') {
          await notifications.scheduleNudge(formatNotifText(STRINGS[lang].nudgeBody, { name }));
        }
        // 'report' schedules nothing here on purpose: it is armed per session,
        // from the session-end listener at the bottom of this file (D-04). The
        // permission request above is the whole job of turning it on.
        return granted;
      },
      /** Kept as its own action because app/onboarding.tsx's step-8 permission
       *  moment calls it by name. It is now one case of enableNotifKind. */
      enableDailyReminder: async () => get().enableNotifKind('daily'),
      resyncNotifs: async () => {
        // Builds before this phase scheduled the daily reminder with an
        // auto-generated id. No per-kind cancel can address it, so it has to be
        // found by enumeration and dropped, or an upgrader gets two evening
        // reminders. Safe to run every launch: fixed identifiers mean
        // rescheduling replaces rather than stacks, and nothing here asks for
        // permission — a cold launch is not a permission moment.
        await notifications.pruneUnknown();
        const { notifs, alarmTime, lang, clock24, avatarId } = get();
        const name = avatarName(avatarId);
        if (notifs.daily) {
          await notifications.scheduleDaily(
            alarmTime,
            formatNotifText(STRINGS[lang].bannerText, { t: formatTime(alarmTime, clock24), name }),
          );
        } else {
          await notifications.cancelKind('daily');
        }
        if (notifs.nudge) {
          await notifications.scheduleNudge(formatNotifText(STRINGS[lang].nudgeBody, { name }));
        } else {
          await notifications.cancelKind('nudge');
        }
        // A report armed before the toggle went off must not still be pending.
        if (!notifs.report) await notifications.cancelKind('report');
      },
      // The single writer of currencyChosen — a currency set any other way
      // (region detection) must go through setField('currency', …) and leave
      // the flag alone, or detection would masquerade as a user choice.
      setCurrency: (currency) => set({ currency, currencyChosen: true }),
      setPlan: (planPick) => set({ planPick }),
      // No upgrade(). It was `() => set({ premium: true })`: it minted the
      // premium flag with no payment, no receipt and no entitlement, from a
      // button in settings. Phase 10 went further and removed `premium` from
      // this store entirely — paid access is derived (useEntitlement), fed
      // only by RevenueCat customerInfo. Nothing else may claim a user paid.
      setRegion: (region) => set({ region }),
      // Non-FR/EN picks fall back to the declared default interface language (EN).
      setAppLang: (appLang) =>
        set({ appLang, lang: appLang === 'fr' ? 'fr' : 'en' }),
      setField: (k, v) => set({ [k]: v } as Partial<AppState>),
      signIn: (email, name) =>
        set({ signedIn: true, email: email ?? get().email, userName: name ?? get().userName }),
      setSession: (userId, email) =>
        set({ userId, email: email ?? get().email }),
      signOut: async () => {
        // Actually end the Supabase session. Before this fix, sign-out only
        // cleared local flags — the real session survived, so a device that
        // later gained a boot-time session check (src/services/session.ts)
        // would have silently signed the user back in.
        try {
          await supabase()?.auth.signOut();
        } catch {
          // Local sign-out still proceeds — see the comment on the next line.
        }
        set({ signedIn: false, onboarded: false, email: '', userName: '', accountType: 'guest', userId: null });
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
      version: 6,
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
      // v5 → v6: premium is gone — paid access is derived from the RevenueCat
      // entitlement (useEntitlement), never stored where local code could write
      // it. Every persisted value of it was false anyway: nothing ever set it.
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
        if (version <= 5) {
          delete s.premium;
        }
        return s as AppState;
      },
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        lang: s.lang,
        appLang: s.appLang,
        mode: s.mode,
        accent: s.accent,
        avatarId: s.avatarId,
        brightBoost: s.brightBoost,
        lessonKeySeen: s.lessonKeySeen,
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
        currencyChosen: s.currencyChosen,
        freeze: s.freeze,
        lastGreetAt: s.lastGreetAt,
        lastNudgeAt: s.lastNudgeAt,
      }),
      // Always flip `hydrated`, even when rehydration fails or yields no state —
      // a corrupt AsyncStorage entry must never brick startup.
      onRehydrateStorage: () => (state, error) => {
        if (state && !error) {
          state.setHydrated();
          // The toggles are persisted; the OS schedule is not. Re-arm one from
          // the other, so what Settings shows is what the device will do.
          void state.resyncNotifs();
        } else {
          useStore.setState({ hydrated: true });
        }
      },
    }
  )
);

// The post-session report (D-04). Registered from HERE, not imported by
// useProgress: useStore already imports useProgress (see the comment at the top
// of this file), so a module-level import pointing back would be a real cycle.
// A hook cannot own this either — the report must be armed when a session is
// logged, whatever screen logged it.
setSessionEndListener(() => {
  const { notifs, lang, avatarId } = useStore.getState();
  if (!notifs.report) return;
  void notifications.scheduleReport(
    formatNotifText(STRINGS[lang].reportBody, { name: avatarName(avatarId) }),
  );
});
