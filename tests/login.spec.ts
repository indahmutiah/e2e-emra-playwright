import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import dotenv from 'dotenv';
dotenv.config();

test.describe('TS001-login', () => {
  test('TC001-Positive-Login Success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto ("/login");
    await loginPage.email.fill(process.env.EMAIL!);
    await loginPage.password.fill(process.env.PASSWORD!);
    await loginPage.loginButton.click();
    await expect(loginPage.welcomeMessage).toBeVisible();
  });

  test('TC002-Negative-Login Wrong Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto ("/login");
    await loginPage.email.fill(process.env.EMAIL!);
    await loginPage.password.fill('pass123');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC003-Negative-Login Wrong email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto ("/login");
    await loginPage.email.fill('wrong_user@gmail.com');
    await loginPage.password.fill(process.env.PASSWORD!);
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
