// Shared E2E helpers — login with a live TOTP computed from the seeded
// secrets (scripts/seed.ts prints these after `pnpm db:seed`).
import { expect, type Page } from '@playwright/test';
import { generate } from 'otplib';

export const PASSWORD = 'admin1234';

/** Seeded admin accounts → TOTP secrets (see scripts/seed.ts ADMINS). */
export const ADMINS = {
  'marc@ealch.app': { secret: 'CT5H7H335HFZFMFB7NPEKH7RFP2PM3M7', role: 'super_admin' },
  'ops@ealch.app': { secret: '3HKLKJ2ZTWV5QWK4CK7Q6M5F4PVJZM7L', role: 'ops' },
  'support@ealch.app': { secret: 'SWU3POH5RZGMQMQJXLKA2FO4LAVSLA3G', role: 'support' },
  'editor@ealch.app': { secret: '3BWQGNJGBCDFP5VNNQ4L65FHM46OAAKD', role: 'content_editor' },
} as const;

export type AdminEmail = keyof typeof ADMINS;

/** Compute the current 6-digit TOTP code for a seeded admin. */
export async function totpFor(email: AdminEmail): Promise<string> {
  return generate({ secret: ADMINS[email].secret });
}

/**
 * Log in through the real login form (email + password + live TOTP) and wait
 * for the admin shell. Field names match src/app/login/page.tsx.
 */
export async function loginAs(page: Page, email: AdminEmail): Promise<void> {
  await page.goto('/login');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill(PASSWORD);
  await page.getByLabel('Two-factor code').fill(await totpFor(email));
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/admin/**');
  // Sidebar wordmark = shell is rendered.
  await expect(page.getByText('OPS CONSOLE').first()).toBeVisible();
}
