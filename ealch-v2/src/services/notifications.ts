// Practice-alarm / reminder scheduling via expo-notifications, plus an in-app
// banner fired by the store when the chosen alarm time arrives (matches the
// prototype's clock watcher). On web, native scheduling is unavailable, so we
// rely purely on the in-app clock watcher.
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

export const notifications = {
  async requestPermissions(): Promise<boolean> {
    if (Platform.OS === 'web') return false;
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      return status === 'granted';
    } catch {
      return false;
    }
  },

  /** Schedule a daily repeating practice reminder at HH:MM. */
  async scheduleDaily(time: string, body: string): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      const [h, m] = time.split(':').map((n) => parseInt(n, 10));
      await Notifications.cancelAllScheduledNotificationsAsync();
      await Notifications.scheduleNotificationAsync({
        content: { title: 'Ealch', body },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: h,
          minute: m,
        },
      });
    } catch {
      // ignore — the in-app banner still fires
    }
  },

  async cancelAll(): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch {
      // ignore
    }
  },
};
