import { test, expect } from '@playwright/test';

test.describe('TS001-login', () => {
  test('TC001-Positive-Login Success', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('TC002-Negative-Login Wrong Password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('pass123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('TC003-Negative-Login Wrong Username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('wrong_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
