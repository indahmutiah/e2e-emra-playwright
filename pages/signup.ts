import { Locator, Page, expect } from '@playwright/test';

export class SignupPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly nextButton: Locator;
    readonly fullName: Locator;
    readonly phoneNumber: Locator;
    readonly companyName: Locator;
    readonly industry: Locator;
    readonly companySize: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Email' });
        this.password = page.getByRole('textbox', { name: 'Password', exact: true });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.fullName = page.getByRole('textbox', { name: 'Full Name' });
        this.phoneNumber = page.getByRole('textbox', { name: 'Phone Number' });
        this.companyName = page.getByRole('textbox', { name: 'Company Name' });
        this.industry = page.getByLabel('Industry');
        this.companySize = page.getByLabel('Company Size');
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    }
    
    async goto() {
        await this.page.goto('/signup');
    }

    async fillAccountCreationForm(email: string, password: string, confirmPassword: string) {
        await this.email.click();
        await this.email.fill(email);
        await this.password.click();
        await this.password.fill(password);
        await this.confirmPassword.click();
        await this.confirmPassword.fill(password);
        await this.nextButton.click();
    }

    async fillPersonalForm(fullName: string, phoneNumber: string) {
        await this.fullName.click();
        await this.fullName.fill(fullName);
        await this.phoneNumber.click();
        await this.phoneNumber.fill(phoneNumber);
        await this.nextButton.click();
    }
    async fillCompanyForm(companyName: string, industry: string, companySize: string) {
        await this.companyName.click();
        await this.companyName.fill(companyName);
        await this.industry.click();
        await this.industry.selectOption(industry);
        await this.companySize.click();
        await this.companySize.selectOption(companySize);
        await this.createAccountButton.click();
    }
    async checkWelcomeMessage(fullName: string) {
        await expect(this.page.getByRole('button', { name: fullName })).toBeVisible();
    }
}