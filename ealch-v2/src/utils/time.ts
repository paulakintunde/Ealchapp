// Clock-format helpers. Times are STORED as 24h "HH:MM" everywhere (the
// scheduler contract); the 12h/24h preference only changes how they render.

/** True when the device locale prefers a 24-hour clock. */
export function device24h(): boolean {
  try {
    return !new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).resolvedOptions().hour12;
  } catch {
    return true;
  }
}

/** Render a 24h "HH:MM" string in the chosen clock format ("7:30 PM" / "19:30"). */
export function formatTime(hhmm: string, clock24: boolean): string {
  if (!/^\d{1,2}:\d{2}$/.test(hhmm)) return hhmm;
  if (clock24) return hhmm;
  const [h, m] = hhmm.split(':').map((n) => parseInt(n, 10));
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
}
