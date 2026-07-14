import '../global.css';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import { useAppFonts } from '@/theme/fonts';
import { useStore } from '@/store/useStore';
import { useTheme } from '@/theme/useTheme';
import { useAlarmWatcher } from '@/hooks/useAlarmWatcher';
import { AppFrame } from '@/components/AppFrame';
import { PushBanner } from '@/components/PushBanner';
import { BottomSheet } from '@/components/BottomSheet';
import { DictionaryOverlay } from '@/components/DictionaryOverlay';
import { refreshConfig } from '@/services';

SplashScreen.preventAutoHideAsync().catch(() => {});

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
  const hydrated = useStore((s) => s.hydrated);
  const t = useTheme();
  useAlarmWatcher();

  useEffect(() => {
    refreshConfig();
  }, []);

  useEffect(() => {
    if (fontsLoaded && hydrated) SplashScreen.hideAsync().catch(() => {});
  }, [fontsLoaded, hydrated]);

  if (!fontsLoaded || !hydrated) {
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
              <Stack.Screen name="home" />
              <Stack.Screen name="den" />
              <Stack.Screen name="lesson" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="speak" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="player" options={{ animation: 'slide_from_bottom' }} />
              <Stack.Screen name="feedback" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="chat" />
              <Stack.Screen name="profile" />
              <Stack.Screen name="settings" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="flashcards" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="voiceflash" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="sentence" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="roleplay" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="dictation" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="smartreview" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="review" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="placement" options={{ animation: 'slide_from_right' }} />
              <Stack.Screen name="downloads" options={{ animation: 'slide_from_right' }} />
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
