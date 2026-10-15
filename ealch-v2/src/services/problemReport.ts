// Problem-report delivery (Phase 10 FEEDBACK-03). Never throws. A learner action never waits on a
// background retry, and nothing here shows UI or writes to the errors.ts ring.
//
// D-38: claim-then-send on one queue. A report is written to the outbox BEFORE it is sent, and every
// read-modify-write of the outbox (claim, settle, flush, clear) runs on one promise queue.
// D-35: a 429 holds the entry until the next UTC midnight; offline, 408 and 5xx keep it for the next
// launch/foreground; any other 4xx drops it.
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import { PixelRatio, Platform } from 'react-native';
import { supabase } from './supabase';
import { ENV } from './env';
import { installId, track } from './analytics';
import { recentErrors } from './errors';
import {
  REPORT_OUTBOX_KEY,
  buildReportPayload,
  claimReport,
  dueReports,
  outcomeFor,
  pruneReports,
  settleReport,
  validReportOutbox,
  type OutboxEntry,
  type ReportCategory,
  type ReportContext,
  type ReportPayload,
  type SendOutcome,
  type SendStatus,
} from './problemReport.logic';

export const SEND_TIMEOUT_MS = 15000;

export type ReportDraft = {
  category: ReportCategory;
  details?: string | null;
  contact?: boolean;
  screen?: string | null;
  lesson_id?: string | null;
  item_id?: string | null;
  theme?: 'light' | 'dark' | null;
};
export type SubmitOutcome = SendOutcome | 'save-failed';

let queue: Promise<unknown> = Promise.resolve();
function serial<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => {});
  return run;
}

// Reports whose first send is in flight in this process; a flush skips them.
const inFlight = new Set<string>();

async function readOutbox(): Promise<OutboxEntry[]> {
  try {
    return validReportOutbox(JSON.parse((await AsyncStorage.getItem(REPORT_OUTBOX_KEY)) ?? '[]'));
  } catch {
    return [];
  }
}

/** True when the write landed. */
async function writeOutbox(entries: OutboxEntry[]): Promise<boolean> {
  try {
    if (entries.length) await AsyncStorage.setItem(REPORT_OUTBOX_KEY, JSON.stringify(entries));
    else await AsyncStorage.removeItem(REPORT_OUTBOX_KEY);
    return true;
  } catch {
    return false;
  }
}

export function collectContext(theme: 'light' | 'dark' | null = null): ReportContext {
  let runtime_version: string | null = null;
  let update_id: string | null = null;
  try {
    runtime_version = (Updates as { runtimeVersion?: string | null }).runtimeVersion ?? null;
    update_id = (Updates as { updateId?: string | null }).updateId ?? null;
  } catch { /* expo-updates unavailable */ }
  let device_model: string | null = null;
  try {
    const model = (Platform as unknown as { constants?: { Model?: unknown } }).constants?.Model;
    device_model = Platform.OS === 'android' && typeof model === 'string' ? model : null;
  } catch { /* unknown model */ }
  let font_scale: number | null = null;
  try { font_scale = PixelRatio.getFontScale(); } catch { /* unknown scale */ }
  return {
    app_version: Constants.expoConfig?.version ?? null,
    runtime_version,
    update_id,
    platform: Platform.OS === 'android' || Platform.OS === 'ios' ? Platform.OS : 'web',
    os_version: String(Platform.Version),
    device_model,
    font_scale,
    theme,
    errors: recentErrors().map((e) => ({ scope: e.scope, message: e.message, stack: e.stack ?? null, at: e.at })),
  };
}

function statusOf(error: unknown): SendStatus {
  const status = (error as { context?: { status?: unknown } } | null)?.context?.status;
  return typeof status === 'number' ? status : 'offline';
}

/** 201 on success, the HTTP status on a server answer, 'offline' otherwise (including a 15 s silence). */
async function send(payload: ReportPayload): Promise<SendStatus> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const sb = supabase();
    if (!sb) return 'offline';
    const call = sb.functions
      .invoke(ENV.reportProblemFunction, { body: payload })
      .then(({ error }): SendStatus => (error ? statusOf(error) : 201))
      .catch((): SendStatus => 'offline');
    const timeout = new Promise<SendStatus>((resolve) => { timer = setTimeout(() => resolve('offline'), SEND_TIMEOUT_MS); });
    return await Promise.race([call, timeout]);
  } catch {
    return 'offline';
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function emit(outcome: SendOutcome, payload: ReportPayload): void {
  try {
    const props = { category: payload.category, entry_point: payload.screen ?? 'unknown' };
    if (outcome === 'sent') track('report_submitted', props);
    else if (outcome !== 'rejected') track('report_queued', props);
  } catch { /* analytics never interrupts delivery */ }
}

export async function submitProblemReport(draft: ReportDraft): Promise<SubmitOutcome> {
  let payload: ReportPayload | null = null;
  try {
    payload = buildReportPayload({
      report_id: Crypto.randomUUID(),
      install_id: await installId(),
      category: draft.category,
      details: draft.details ?? null,
      contact: draft.contact === true,
      screen: draft.screen ?? null,
      lesson_id: draft.lesson_id ?? null,
      item_id: draft.item_id ?? null,
      context: collectContext(draft.theme ?? null),
    });
  } catch {
    payload = null;
  }
  if (!payload) return 'rejected';
  const report = payload;

  // CLAIM FIRST: the report is in the outbox before any byte leaves the device.
  const claimed = await serial(async () => writeOutbox(claimReport(await readOutbox(), report, Date.now())));
  inFlight.add(report.report_id);
  let status: SendStatus;
  try {
    status = await send(report);
  } finally {
    inFlight.delete(report.report_id);
  }
  if (claimed) {
    await serial(async () => writeOutbox(settleReport(await readOutbox(), report.report_id, status, Date.now())));
  }
  const outcome = outcomeFor(status);
  if (!claimed && outcome !== 'sent') return 'save-failed';
  emit(outcome, report);
  return outcome;
}

/** Called on launch and on each return to foreground. Never awaited by a learner action. */
export function flushProblemReportOutbox(): Promise<void> {
  return serial(async () => {
    let outbox = pruneReports(await readOutbox(), Date.now());
    const due = dueReports(outbox, Date.now()).filter((e) => !inFlight.has(e.payload.report_id));
    for (const entry of due) {
      const status = await send(entry.payload);
      outbox = settleReport(outbox, entry.payload.report_id, status, Date.now());
      await writeOutbox(outbox);
      const outcome = outcomeFor(status);
      if (outcome === 'sent') emit(outcome, entry.payload);
      if (status === 'offline') break;
    }
  }).catch(() => {});
}

/** Account deletion drops queued reports first, so none can recreate a row afterwards (D-20). */
export function clearProblemReportOutbox(): Promise<void> {
  return serial(async () => {
    try { await AsyncStorage.removeItem(REPORT_OUTBOX_KEY); } catch { /* best effort */ }
  }).catch(() => {});
}
