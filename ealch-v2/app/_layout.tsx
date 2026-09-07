import '../global.css';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import type { ErrorBoundaryProps } from 'expo-router';
import { useAppFonts } from '@/theme/fonts';
import { useStore } from '@/store/useStore';
import { useTheme } from '@/theme/useTheme';
import { useAlarmWatcher } from '@/hooks/useAlarmWatcher';
import { AppFrame } from '@/components/AppFrame';
import { PushBanner } from '@/components/PushBanner';
import { BottomSheet } from '@/components/BottomSheet';
import { DictionaryOverlay } from '@/components/DictionaryOverlay';
import { ErrorScreen } from '@/components/ErrorScreen';
import { refreshConfig, tts } from '@/services';
import { useProgress } from '@/store/useProgress';
import { useContent, initContent } from '@/services/content';
import { loadTimeFloor } from '@/services/serverClock';
import { installErrorHandlers, logError } from '@/services/errors';
import { useAuthSession } from '@/services/session';
import { useForegroundSync } from '@/services/sync';
import { useEntitlementSync } from '@/services/purchases';

SplashScreen.preventAutoHideAsync().catch(() => {});

// Installed at module scope so uncaught errors thrown *during* the first render
// are already being captured by the time React starts.
installErrorHandlers();

/**
 * expo-router renders this instead of the route tree when a descendant throws
 * during render. Without it, a single bad render is an unrecoverable white
 * screen with nothing logged — the worst possible failure to hand a tester.
 */
export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  useEffect(() => {
    logError('render', error);
    // The splash is still held up if the crash landed before hideAsync ran.
    SplashScreen.hideAsync().catch(() => {});
  }, [error]);
  return <ErrorScreen error={error} retry={() => void retry()} />;
}

// Scheduled practice reminders must be visible while the app is foregrounded.
if (Platform.OS !== 'web') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

// Android 8+ drops notifications that aren't attached to a channel.
if (Platform.OS === 'android') {
  Notifications.setNotificationChannelAsync('practice-reminders', {
    name: 'Practice reminders',
    importance: Notifications.AndroidImportance.DEFAULT,
  }).catch(() => {});
}

export default function RootLayout() {
  const fontsLoaded = useAppFonts();
  // Gate first paint on ALL THREE persisted stores, not just useStore. Before
  // this, home could paint a zero-streak, empty-corpus frame while useProgress
  // and content were still rehydrating, then snap to real data (review 2.11).
  const hydrated = useStore((s) => s.hydrated);
  const progressHydrated = useProgress((s) => s.hydrated);
  const contentHydrated = useContent((s) => s.hydrated);
  const ready = fontsLoaded && hydrated && progressHydrated && contentHydrated;
  const t = useTheme();
  useAlarmWatcher();
  useAuthSession();
  useForegroundSync();
  // Entitlement: cached copy first (offline honest), then RevenueCat
  // customerInfo reconciled on boot, on foreground and on sign-in/out.
  useEntitlementSync();

  useEffect(() => {
    // BEFORE the first gate is evaluated: the clock floor that stops a wound-back
    // device clock reviving an expired subscription offline. Until it resolves
    // guardedNow() is plain Date.now(), which is the old behaviour, never
    // stricter — a slow read cannot lock anyone out.
    void loadTimeFloor();
    refreshConfig();
    void initContent();
    // Warm the device voice list at launch so the home greeting (and the first
    // drill utterance) speak in the configured voice from the first word rather
    // than the language-only fallback. Fire-and-forget; home awaits it too.
    void tts.prime();
  }, []);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  if (!ready) {
    return <View style={{ flex: 1, backgroundColor: '#0B0C0E' }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppFrame>
          <View style={{ flex: 1, backgroundColor: t.bg }}>
            <StatusBar style={t.isDark ? 'light' : 'dark'} />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: t.bg },
                animation: 'fade',
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="splash" options={{ animation: 'none' }} />
              <Stack.Screen name="onboarding" />
              <Stack.Screen name="signin" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="reset" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="home" />
              <Stack.Screen name="den" />
              <Stack.Screen name="lesson" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="lessonoverview" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="missions" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="speakmap" />
              <Stack.Screen name="speak" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="player" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="playlists" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="feedback" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="chat" />
              <Stack.Screen name="profile" />
              <Stack.Screen name="settings" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="delete-account" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="themes" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="theme" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="flashcards" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="voiceflash" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="sentence" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="roleplay" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="dictation" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="smartreview" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="review" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="placement" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="downloads" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="paywall" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="exam" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="exam-paper" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="exam-section" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="exam-report" options={{ animation: 'slide_from_right' }} />
            </Stack>
            <PushBanner />
            <BottomSheet />
            <DictionaryOverlay />
          </View>
        </AppFrame>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
