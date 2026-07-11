// Next.js instrumentation — runs once when a server instance starts.
// Boots the in-process background workers (anomaly rule + campaign queue).
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  if (process.env.NEXT_PHASE === 'phase-production-build') return;
  const { startWorkers } = await import('@/lib/workers');
  startWorkers();
}
