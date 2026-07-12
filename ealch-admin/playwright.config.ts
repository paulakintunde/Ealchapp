// Playwright E2E config — runs against the production server on :3100.
// PGlite is single-process, so we reuse an already-running server when there
// is one (reuseExistingServer) and force a single worker: the smoke tests
// mutate shared state (maintenance mode, flags, routing) and must not race.
// The chromium binary is preinstalled at /opt/pw-browsers — executablePath
// avoids any download attempt (never run `playwright install`).
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3100',
    trace: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: { executablePath: '/opt/pw-browsers/chromium' },
      },
    },
  ],
  webServer: {
    command: 'AUTH_URL=http://localhost:3100 pnpm exec next start -p 3100',
    url: 'http://localhost:3100/api/status',
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
