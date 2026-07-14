// Crash visibility. Before this existed a single render throw white-screened the
// app and the tester had nothing to report — you cannot fix what you cannot see.
//
// Three paths feed it:
//   • render errors  — expo-router's ErrorBoundary export in app/_layout.tsx
//   • thrown JS      — the React Native global handler (ErrorUtils)
//   • rejections     — `unhandledrejection` (web only; see the caveat below)
//
// Errors land in a small ring buffer so the fallback screen can show the user
// what broke and hand them something copyable. `report()` is the single seam a
// real crash reporter (Sentry et al.) plugs into later — one function, one call
// site, rather than instrumentation sprayed across screens.

export type ErrorScope = 'render' | 'fatal' | 'js' | 'promise';

export type LoggedError = {
  scope: ErrorScope;
  message: string;
  stack?: string;
  at: number;
};

const RING_SIZE = 10;
const ring: LoggedError[] = [];
let installed = false;

/** Normalise anything throwable — Error, string, or some rejected non-error value. */
export function describeError(e: unknown): { message: string; stack?: string } {
  if (e instanceof Error) return { message: e.message || e.name, stack: e.stack };
  if (typeof e === 'string') return { message: e };
  try {
    return { message: JSON.stringify(e) ?? String(e) };
  } catch {
    return { message: String(e) };
  }
}

/** Record an error and hand it to the reporter. Never throws. */
export function logError(scope: ErrorScope, e: unknown): LoggedError {
  const { message, stack } = describeError(e);
  const entry: LoggedError = { scope, message, stack, at: Date.now() };

  ring.push(entry);
  if (ring.length > RING_SIZE) ring.shift();

  // Keep the raw error in the console — Metro/logcat/Safari all surface it.
  console.error(`[ealch:${scope}]`, e);
  report(entry);

  return entry;
}

/**
 * Forward to a crash reporter. Deliberately a no-op today: shipping Sentry is a
 * Phase-3 decision, and a stub here means that decision is a one-file change
 * rather than a hunt through every screen.
 */
function report(_entry: LoggedError): void {
  // Sentry.captureException(...) goes here.
}

/** Most recent errors, oldest first. Read by the fallback screen. */
export function recentErrors(): readonly LoggedError[] {
  return ring;
}

/** A plain-text block a tester can screenshot or paste into a bug report. */
export function formatForReport(e?: LoggedError): string {
  const entries = e ? [e] : ring;
  if (entries.length === 0) return 'No errors recorded.';
  return entries
    .map((x) => {
      const when = new Date(x.at).toISOString();
      const stack = x.stack ? `\n${x.stack}` : '';
      return `[${x.scope}] ${when}\n${x.message}${stack}`;
    })
    .join('\n\n');
}

type GlobalErrorHandler = (error: unknown, isFatal?: boolean) => void;
type ErrorUtilsShape = {
  getGlobalHandler?: () => GlobalErrorHandler;
  setGlobalHandler?: (handler: GlobalErrorHandler) => void;
};

/**
 * Install the process-wide handlers. Idempotent, and safe to call at module
 * scope — every branch is feature-detected, so a missing global degrades to
 * "no extra logging" rather than a crash inside the crash handler.
 */
export function installErrorHandlers(): void {
  if (installed) return;
  installed = true;

  // React Native: ErrorUtils is the last stop for any uncaught JS error. Chain
  // rather than replace — the default handler is what shows the redbox in dev
  // and reports the fatal in release.
  const errorUtils = (globalThis as { ErrorUtils?: ErrorUtilsShape }).ErrorUtils;
  const previous = errorUtils?.getGlobalHandler?.();
  if (errorUtils?.setGlobalHandler) {
    errorUtils.setGlobalHandler((error, isFatal) => {
      logError(isFatal ? 'fatal' : 'js', error);
      previous?.(error, isFatal);
    });
  }

  // Unhandled promise rejections. `addEventListener` exists on web; on native,
  // ErrorUtils above does NOT see rejected promises — Hermes only tracks them
  // in dev. Closing that gap for release builds needs a real crash reporter,
  // which is exactly what `report()` is waiting for.
  const target = globalThis as typeof globalThis & {
    addEventListener?: (type: string, listener: (event: unknown) => void) => void;
  };
  target.addEventListener?.('unhandledrejection', (event: unknown) => {
    const reason = (event as { reason?: unknown } | undefined)?.reason ?? event;
    logError('promise', reason);
  });
}
