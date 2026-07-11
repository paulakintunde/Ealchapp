// Spec §6 smoke tests — run against the seeded production server on :3100.
// Single worker (see playwright.config.ts): these tests mutate shared state
// and each one restores what it changed so the DB is left roughly as found.
import { test, expect } from '@playwright/test';
import { loginAs, totpFor, PASSWORD } from './helpers';

const MARC = 'marc@ealch.app';

test.describe('1. login + 2FA', () => {
  test('rejects wrong password, rejects wrong TOTP, accepts valid login', async ({ page }) => {
    // Wrong password (with an otherwise valid TOTP) → inline error.
    await page.goto('/login');
    await page.getByLabel('Email').fill(MARC);
    await page.getByLabel('Password').fill('definitely-wrong');
    await page.getByLabel('Two-factor code').fill(await totpFor(MARC));
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Scope to the form: Next's route announcer is also role="alert".
    const error = page.locator('form').getByRole('alert');
    await expect(error).toHaveText('Invalid credentials or code');
    await expect(page).toHaveURL(/\/login/);

    // Correct password, wrong TOTP → rejected too. (React 19 resets the
    // uncontrolled form after each action, so re-fill every field.)
    await page.getByLabel('Email').fill(MARC);
    await page.getByLabel('Password').fill(PASSWORD);
    await page.getByLabel('Two-factor code').fill('000000');
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Wait for the round-trip to finish (button leaves its pending state)
    // so the persisting error message is this attempt's, not the last one's.
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await expect(error).toHaveText('Invalid credentials or code');
    await expect(page).toHaveURL(/\/login/);

    // Correct email + password + live TOTP → /admin/overview with sidebar.
    await page.getByLabel('Email').fill(MARC);
    await page.getByLabel('Password').fill(PASSWORD);
    await page.getByLabel('Two-factor code').fill(await totpFor(MARC));
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForURL('**/admin/overview');
    await expect(page.getByText('OPS CONSOLE').first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'Overview' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Releases & flags' })).toBeVisible();
  });
});

test.describe('authenticated smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, MARC);
  });

  test('2. maintenance toggle round-trip', async ({ page }) => {
    const toggle = page.getByRole('switch', { name: 'Maintenance mode' });
    const banner = page.getByText(/Maintenance mode is ON/);
    await expect(toggle).toHaveAttribute('aria-checked', 'false');

    // ON: confirm modal → red banner + /api/status maintenance:true.
    await toggle.click();
    await expect(page.getByText('Turn on maintenance mode?')).toBeVisible();
    await page.getByRole('button', { name: 'Confirm' }).click();
    // exact:true → the toast only (the SSE live feed echoes a longer message).
    await expect(page.getByText('Maintenance mode enabled', { exact: true })).toBeVisible();
    await expect(banner).toBeVisible();
    await expect
      .poll(async () => (await (await page.request.get('/api/status')).json()).maintenance)
      .toBe(true);

    // OFF: banner gone, status back to false.
    await expect(toggle).toHaveAttribute('aria-checked', 'true');
    await toggle.click();
    await expect(page.getByText('Turn off maintenance mode?')).toBeVisible();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect(page.getByText('Maintenance mode disabled', { exact: true })).toBeVisible();
    await expect(banner).toBeHidden();
    await expect
      .poll(async () => (await (await page.request.get('/api/status')).json()).maintenance)
      .toBe(false);
  });

  test('3. user ban flow (ban, verify, unban)', async ({ page }) => {
    await page.goto('/admin/users');
    await page.locator('tbody tr').first().click();

    const drawer = page.locator('[role="dialog"]');
    await expect(drawer).toBeVisible();
    const banBtn = drawer.getByRole('button', { name: /^(Ban|Unban) user$/ });
    await expect(banBtn).toBeVisible();
    const wasBanned = (await banBtn.innerText()).trim() === 'Unban user';

    const toggleBan = async (ban: boolean) => {
      await drawer.getByRole('button', { name: ban ? 'Ban user' : 'Unban user' }).click();
      const confirmDialog = page.getByRole('alertdialog');
      await expect(confirmDialog).toBeVisible();
      await confirmDialog.getByRole('button', { name: ban ? 'Ban user' : 'Unban' }).click();
      await expect(page.getByText(ban ? 'User banned' : 'User unbanned', { exact: true })).toBeVisible();
      // Drawer refetches: status chip reflects the new state.
      const bannedChip = drawer.getByText('Banned', { exact: true });
      if (ban) await expect(bannedChip).toBeVisible();
      else await expect(bannedChip).toHaveCount(0);
    };

    // Toggle once, verify, then restore the original state.
    await toggleBan(!wasBanned);
    await toggleBan(wasBanned);
  });

  test('4. AI routing change persists and can be reverted', async ({ page }) => {
    await page.goto('/admin/ai');
    const general = page.getByRole('radiogroup', { name: 'General assistant model' });
    const sonnet = general.getByRole('radio', { name: /Claude Sonnet 4\.5/ });
    const gptMini = general.getByRole('radio', { name: /GPT-5 mini/ });

    // Seeded active model for the General assistant is Claude Sonnet 4.5.
    await expect(sonnet).toHaveAttribute('aria-checked', 'true');

    const applyVia = async (radio: typeof sonnet) => {
      await radio.click();
      await page.getByRole('button', { name: 'Apply changes' }).click();
      const modal = page.getByRole('dialog', { name: 'Confirm routing changes' });
      await expect(modal).toBeVisible();
      await modal.getByRole('button', { name: 'Apply changes' }).click();
      await expect(page.getByText(/Model routing saved/)).toBeVisible();
    };

    await applyVia(gptMini);
    await page.reload();
    await expect(gptMini).toHaveAttribute('aria-checked', 'true');
    await expect(sonnet).toHaveAttribute('aria-checked', 'false');

    // Revert to Claude Sonnet 4.5.
    await applyVia(sonnet);
    await page.reload();
    await expect(sonnet).toHaveAttribute('aria-checked', 'true');
  });

  test('5. flag rollout change persists and is restored', async ({ page }) => {
    await page.goto('/admin/releases');
    const slider = page.getByLabel('AI tutor v2 percentage (prod)');
    await expect(slider).toBeVisible();
    const before = Number(await slider.inputValue());
    // Nudge one step in whichever direction has room; keyup commits.
    const up = before < 100;
    const target = up ? before + 1 : before - 1;

    await slider.focus();
    await slider.press(up ? 'ArrowRight' : 'ArrowLeft');
    await expect(page.getByText(`AI tutor v2 → ${target}% (prod)`)).toBeVisible();

    await page.reload();
    await expect(page.getByLabel('AI tutor v2 percentage (prod)')).toHaveValue(String(target));

    // Restore the original rollout percentage.
    const sliderAfter = page.getByLabel('AI tutor v2 percentage (prod)');
    await sliderAfter.focus();
    await sliderAfter.press(up ? 'ArrowLeft' : 'ArrowRight');
    await expect(page.getByText(`AI tutor v2 → ${before}% (prod)`)).toBeVisible();
    await page.reload();
    await expect(page.getByLabel('AI tutor v2 percentage (prod)')).toHaveValue(String(before));
  });

  test('6. link create, redirect logging, archive', async ({ page }) => {
    const slug = `e2e-test-${Date.now()}`;
    const destination = 'https://ealch.app/test-e2e';

    await page.goto('/admin/links');
    await page.getByRole('button', { name: '+ New link' }).click();
    const modal = page.getByRole('dialog', { name: 'New tracked link' });
    await modal.getByLabel('Destination URL').fill(destination);
    await modal.getByLabel('Campaign').fill('E2E Test');
    await modal.getByLabel('Slug').fill(slug);
    await modal.getByRole('button', { name: 'Create link' }).click();
    await expect(page.getByText(`Link created — ealch.app/${slug}`)).toBeVisible();

    // Row appears in the table.
    const slugCell = page.getByText(`ealch.app/${slug}`, { exact: true });
    await expect(slugCell).toBeVisible();

    // /l/<slug> 302s to the destination (and logs the click).
    const res = await page.request.get(`/l/${slug}`, { maxRedirects: 0 });
    expect(res.status()).toBe(302);
    expect(res.headers()['location']).toBe(destination);

    // Click was logged — the clicks cell shows 1 after a reload.
    await page.reload();
    const row = page.getByText(`ealch.app/${slug}`, { exact: true }).locator('..');
    await expect(row.getByText('1', { exact: true })).toBeVisible();

    // Archive to clean up; archived links are hidden by default.
    await row.getByRole('button', { name: 'Archive' }).click();
    await expect(page.getByText(`Link ealch.app/${slug} archived`)).toBeVisible();
    await expect(page.getByText(`ealch.app/${slug}`, { exact: true })).toBeHidden();
  });
});
