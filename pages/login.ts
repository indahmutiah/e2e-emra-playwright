import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly welcomeMessage: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password', exact: true });
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
        this.welcomeMessage = page.getByRole('heading', { name: 'Welcome to Emra! 🎉' });
        this.errorMessage = page.getByText('Invalid credentials');
    }
}