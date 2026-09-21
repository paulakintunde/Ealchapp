// Which local notifications each Settings toggle owns, and when they fire.
//
// Pure data and pure helpers on purpose: the expo-notifications calls live in
// services/notifications.ts, which imports react-native and therefore cannot
// load under `node --test`. Everything decidable WITHOUT a native runtime lives
// here so it can be asserted — above all the rule that each toggle owns its own
// identifiers, which is what stops "toggle nudge off" from also cancelling the
// daily reminder (the trap: cancelAllScheduledNotificationsAsync has no filter).
//
// No RN / zustand / expo import may ever enter this file.

export type NotifKind = 'daily' | 'report' | 'nudge';

/** The one Android channel every practice reminder is posted to. Registered at
 *  startup in app/_layout.tsx — Android 8+ silently drops a notification whose
 *  channelId was never registered, so do not invent a second channel here
 *  without adding its registration there too. */
export const NOTIF_CHANNEL_ID = 'practice-reminders';

/** Deterministic identifiers. Scheduling with a fixed id replaces that one
 *  pending request, and cancelling by id touches nothing else. */
export const DAILY_ID = 'daily-reminder';
export const REPORT_ID = 'report-session';

/** How long after a session ends the report notification fires (D-04: the
 *  report is about the session that just finished, not an evening digest).
 *  Far enough out that the user has left the screen, close enough that it is
 *  still about that session. */
export const REPORT_DELAY_SECONDS = 180;

/** A weekly nudge slot. `weekday` follows expo-notifications' WEEKLY trigger:
 *  1 = Sunday … 7 = Saturday. */
export type NudgeSlot = { id: string; weekday: number; hour: number; minute: number };

/** D-05/D-06: confidence nudges fire a few times a week on fixed named days
 *  with generic encouraging copy — no weak-spot pipeline exists to key them to,
 *  and building one is out of this phase's scope. Monday and Thursday evening. */
export const NUDGE_SLOTS: readonly NudgeSlot[] = [
  { id: 'nudge-mon', weekday: 2, hour: 18, minute: 30 },
  { id: 'nudge-thu', weekday: 5, hour: 18, minute: 30 },
];

/** Every scheduled-notification identifier ONE toggle owns. Toggling a kind off
 *  cancels exactly these and nothing else. */
export function notifIdsFor(kind: NotifKind): readonly string[] {
  if (kind === 'daily') return [DAILY_ID];
  if (kind === 'report') return [REPORT_ID];
  return NUDGE_SLOTS.map((s) => s.id);
}

/** Every identifier this build ever schedules. Anything else found pending was
 *  scheduled by an older build (before identifiers existed) and is an orphan
 *  no per-kind cancel can address — see notifications.pruneUnknown. */
export function allNotifIds(): readonly string[] {
  return [...notifIdsFor('daily'), ...notifIdsFor('report'), ...notifIdsFor('nudge')];
}
