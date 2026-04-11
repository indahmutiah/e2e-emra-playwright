import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test.describe('TS001-login', () => {
  test('TC001-Positive-Login Success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto (process.env.BASE_URL || 'emra.chat/login');
    await loginPage.username.fill(process.env.EMAIL || 'email@gmail.com');
    await loginPage.password.fill(process.env.PASSWORD || 'password');
    await loginPage.loginButton.click();
    await expect(loginPage.welcomeMessage).toBeVisible();
  });

  test('TC002-Negative-Login Wrong Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto (process.env.BASE_URL || 'emra.chat/login');
    await loginPage.username.fill(process.env.EMAIL || 'email@gmail.com');
    await loginPage.password.fill('pass123');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC003-Negative-Login Wrong Username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto (process.env.BASE_URL || 'emra.chat/login');
    await loginPage.username.fill('wrong_user@gmail.com');
    await loginPage.password.fill(process.env.PASSWORD || 'password');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
