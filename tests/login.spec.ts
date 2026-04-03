import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test.describe('TS001-login', () => {
  test('TC001-Positive-Login Success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.username.fill('standard_user');
    await loginPage.password.fill('secret_sauce');
    await loginPage.loginButton.click();
    await expect(page).toHaveTitle('Swag Labs');
  });

  test('TC002-Negative-Login Wrong Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.username.fill('standard_user');
    await loginPage.password.fill('pass123');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC003-Negative-Login Wrong Username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.username.fill('wrong_user');
    await loginPage.password.fill('secret_sauce');
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
