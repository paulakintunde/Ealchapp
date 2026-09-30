import { daysBetween, localDay } from '../store/progress.logic.ts';

export type FirstOpenRecord = { installId: string; at: string; localDay: string };
export type ReferrerLookup = { status: 'ok' | 'unsupported' | 'failed'; raw?: string };
export type Attribution = {
  status: 'campaign' | 'no_campaign' | 'lookup_failed' | 'unavailable';
  source?: string; medium?: string; campaign?: string;
};

export function firstOpenRecord(installId: string, now: Date): FirstOpenRecord {
  return { installId, at: now.toISOString(), localDay: localDay(now) };
}

/** D1 is the next local calendar day, irrespective of elapsed hours or DST. */
export function isD1Return(firstDay: string, now: Date, emittedDay: string | null): boolean {
  const today = localDay(now);
  return today !== emittedDay && daysBetween(firstDay, today) === 1;
}

/** Parse only recognized campaign fields; the raw Play string never leaves this boundary. */
export function parseReferrer(lookup: ReferrerLookup): Attribution {
  if (lookup.status === 'unsupported') return { status: 'unavailable' };
  if (lookup.status === 'failed') return { status: 'lookup_failed' };
  const raw = lookup.raw ?? '';
  if (raw.length > 4096) return { status: 'lookup_failed' };
  const found: Pick<Attribution, 'source' | 'medium' | 'campaign'> = {};
  for (const pair of raw.replace(/^.*\?/, '').split('&')) {
    if (!pair) continue;
    const separator = pair.indexOf('=');
    const keyRaw = separator < 0 ? pair : pair.slice(0, separator);
    const valueRaw = separator < 0 ? '' : pair.slice(separator + 1);
    let key: string;
    let value: string;
    try {
      key = decodeURIComponent(keyRaw.replace(/\+/g, ' '));
      value = decodeURIComponent(valueRaw.replace(/\+/g, ' ')).replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 100);
    } catch { return { status: 'lookup_failed' }; }
    if (!value) continue;
    if (key === 'utm_source') found.source = value;
    if (key === 'utm_medium') found.medium = value;
    if (key === 'utm_campaign') found.campaign = value;
  }
  return found.source || found.medium || found.campaign ? { status: 'campaign', ...found } : { status: 'no_campaign' };
}
