// Practice-alarm / reminder scheduling via expo-notifications, plus an in-app
// banner fired by the store when the chosen alarm time arrives (matches the
// prototype's clock watcher). On web, native scheduling is unavailable, so we
// rely purely on the in-app clock watcher.
//
// Three kinds are scheduled here (daily / report / nudge) and each owns its own
// deterministic identifiers, from utils/notifSchedule.logic.ts. That is not
// tidiness: the blanket-cancel API below has NO filter, so using it to
// turn one toggle off would silently cancel the other two kinds as well. It
// survives in exactly one place — cancelAll(), for the account-wide erase.
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import {
  DAILY_ID,
  NOTIF_CHANNEL_ID,
  NUDGE_SLOTS,
  REPORT_DELAY_SECONDS,
  REPORT_ID,
  allNotifIds,
  notifIdsFor,
  type NotifKind,
} from '@/utils/notifSchedule.logic';

/** Cancel one pending request by id. A missing id is not an error: the caller
 *  is expressing "this must not be pending", not "this is pending". */
async function cancelId(id: string): Promise<void> {
  try {
    await Notifications.cancelScheduledNotificationAsync(id);
  } catch {
    // ignore — nothing pending under that id
  }
}

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
      await cancelId(DAILY_ID);
      await Notifications.scheduleNotificationAsync({
        identifier: DAILY_ID,
        content: { title: 'Ealch', body },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: h,
          minute: m,
          // channel created at startup in app/_layout.tsx (required Android 8+)
          channelId: NOTIF_CHANNEL_ID,
        },
      });
    } catch {
      // ignore — the in-app banner still fires
    }
  },

  /** Schedule the confidence nudges: one WEEKLY request per slot (D-05/D-06).
   *  A native weekly trigger, not a JS interval, because a re-engagement nudge
   *  has to fire while the app is closed — which is when it is needed. */
  async scheduleNudge(body: string): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      for (const slot of NUDGE_SLOTS) {
        await cancelId(slot.id);
        await Notifications.scheduleNotificationAsync({
          identifier: slot.id,
          content: { title: 'Ealch', body },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
            weekday: slot.weekday,
            hour: slot.hour,
            minute: slot.minute,
            channelId: NOTIF_CHANNEL_ID,
          },
        });
      }
    } catch {
      // ignore — a nudge that cannot be scheduled is not worth a crash
    }
  },

  /** Arm the post-session report (D-04): one shot, REPORT_DELAY_SECONDS out.
   *  Re-armed from the same id each time, so a second session finishing before
   *  the first report fires replaces it instead of stacking a duplicate. */
  async scheduleReport(body: string): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      await cancelId(REPORT_ID);
      await Notifications.scheduleNotificationAsync({
        identifier: REPORT_ID,
        content: { title: 'Ealch', body },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: REPORT_DELAY_SECONDS,
          channelId: NOTIF_CHANNEL_ID,
        },
      });
    } catch {
      // ignore
    }
  },

  /** Cancel exactly what ONE toggle owns. This is what a toggle flipping off
   *  calls — never cancelAll(), which would take the other kinds with it. */
  async cancelKind(kind: NotifKind): Promise<void> {
    if (Platform.OS === 'web') return;
    for (const id of notifIdsFor(kind)) {
      await cancelId(id);
    }
  },

  /** Drop anything pending that this build did not schedule. Builds before this
   *  phase scheduled the daily reminder with an auto-generated id, which no
   *  per-kind cancel can address — without this, an upgrader keeps that orphan
   *  AND gets the new daily reminder too, i.e. two evening notifications. */
  async pruneUnknown(): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      const known = new Set(allNotifIds());
      const pending = await Notifications.getAllScheduledNotificationsAsync();
      for (const req of pending) {
        if (!known.has(req.identifier)) await cancelId(req.identifier);
      }
    } catch {
      // ignore — a scheduler that will not enumerate is not worth a crash
    }
  },

  /** Wipe EVERY pending notification, whatever kind. Account-wide resets only
   *  (eraseLocalData). A single toggle turning off must call cancelKind. */
  async cancelAll(): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch {
      // ignore
    }
  },
};
