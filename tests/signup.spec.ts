import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signup';
import { faker } from '@faker-js/faker'; 

test.describe('TS002-signup', () => {
    let signupPage: SignupPage;

    test.beforeEach(async ({ page }) => {
        signupPage = new SignupPage(page);
        await signupPage.goto();
    });
    test("TC-004-Positive-Signup Success", async ({ page }) => {
        
        const email = faker.internet.email();
        const password = faker.internet.password();
        const fullName = faker.person.fullName();
        const phoneNumber = faker.string.numeric(10);
        const companyName = faker.company.name();
        const industry = 'Other';
        const companySize = '1-10';

        await signupPage.goto();
        await signupPage.fillAccountCreationForm(email, password, password);
        await signupPage.fillPersonalForm(fullName, phoneNumber);
        await signupPage.fillCompanyForm(companyName, industry, companySize);

        await signupPage.checkWelcomeMessage(fullName);
        
    });
});