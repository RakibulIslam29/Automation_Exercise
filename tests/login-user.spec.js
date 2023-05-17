// @ts-check
const { test, chromium } = require('@playwright/test');

let browser;

test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 100000);

        await page.goto('http://automationexercise.com');

});

test.beforeAll( async () =>{
    browser = await chromium.launch();
});

test.afterAll( async () =>{
    await browser.close();
});

test.describe('Login User', () => {

    test('Does Login User with correct email and password working properly?', async ({ page }) => {

        await page.getByRole('link', { name: 'Website for automation practice' }).isVisible();

        // Verify that home page is visible successfully
        await page.locator('#slider-carousel').getByRole('listitem').first().click();
        await page.getByRole('heading', { name: 'AutomationExercise' }).isVisible();
        await page.getByRole('heading', { name: 'Full-Fledged practice website for Automation Engineers' }).isVisible();
        await page
            .getByRole('paragraph')
            .filter({ hasText: 'All QA engineers can use this website for automation practice and API testing ei' })
            .isVisible();
        await page.getByRole('img', { name: 'demo website for practice' }).isVisible(); // banner img
        await page.getByRole('button', { name: 'Test Cases' }).isVisible();
        await page.getByRole('button', { name: 'APIs list for practice' }).isVisible();

        // signup
        await page.getByRole('link', { name: ' Signup / Login' }).click(); // click login/signup button
        await page.getByRole('heading', { name: 'New User Signup!' }).isVisible();
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill('Rakibul Islam');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('rakibul.islam.test@gmail.com');
        await page.getByRole('button', { name: 'Signup' }).click(); // submit

        // Account Info
        await page.getByText('Enter Account Information').isVisible();
        await page.getByText('Title').isVisible();
        await page.getByLabel('Mr.').check();

        //Name
        await page.getByText('Name *', { exact: true }).isVisible();
        await page.getByLabel('Name *', { exact: true }).click();
        await page.getByLabel('Name *', { exact: true }).fill('Rakibul Islam');

        // Password
        await page.getByLabel('Password *').isVisible();
        await page.getByLabel('Password *').fill('123456');

        // Date of Birth
        await page.getByText('Date of Birth').isVisible();
        await page.locator('#days').selectOption('21');
        await page.locator('#months').selectOption('5');
        await page.locator('#years').selectOption('1999');

        // Checkbox
        await page.getByLabel('Sign up for our newsletter!').check();
        await page.getByLabel('Receive special offers from our partners!').check();

        // Address Info
        await page.getByText('Address Information').isVisible();
        await page.getByText('First name *').click();
        await page.getByLabel('First name *').fill('Rakibul');
        await page.getByText('Last name *').click();
        await page.getByLabel('Last name *').fill('Islam');
        await page.getByText('Company', { exact: true }).click();
        await page.getByLabel('Company', { exact: true }).fill('Edutechs');
        await page.getByText('(Street address, P.O. Box, Company name, etc.)').click();
        await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('Concord Royal Court, House 40 Rd 27, Dhaka 1209');
        await page.getByText('Address 2').click();
        await page.getByLabel('Address 2').fill('Dhaka, Bangladesh');
        await page.getByLabel('State *').click();
        await page.getByLabel('State *').fill('Dhaka');
        await page.getByLabel('City *').click();
        await page.getByLabel('City *').fill('Dhaka');
        await page.locator('#zipcode').click();
        await page.locator('#zipcode').fill('1216');
        await page.getByLabel('Mobile Number *').click();
        await page.getByLabel('Mobile Number *').fill('01705139111');
        await page.getByRole('button', { name: 'Create Account' }).click();

        // After created account
        await page.getByText('Account Created!').isVisible();
        await page.getByText('Congratulations! Your new account has been successfully created!').isVisible();
        await page.getByText('You can now take advantage of member privileges to enhance your online shopping ').isVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
        await page.getByRole('link', { name: ' Logout' }).click();

        // login
        await page.getByRole('link', { name: ' Signup / Login' }).click(); // click login/signup button
        await page.getByRole('heading', { name: 'Login to your account' }).isVisible();
        await page
            .locator('form').filter({ hasText: 'Login' })
            .getByPlaceholder('Email Address')
            .click();
        await page
            .locator('form')
            .filter({ hasText: 'Login' })
            .getByPlaceholder('Email Address')
            .fill('rakibul.islam.test@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('123456');

        await page.getByRole('button', { name: 'Login' }).click(); // Login

        await page.getByText('Logged in as Rakibul Islam').isVisible(); // Verify Username

        // Delete Account
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await page.getByText('Account Deleted!').isVisible();
        await page.getByText('Your account has been permanently deleted!').isVisible();
        await page.getByText('You can create new account to take advantage of member privileges to enhance you').isVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
        
    });

    test('Does Login User with incorrect email and password Working Properly?', async ({ page }) => {

        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await page.getByRole('heading', { name: 'Login to your account' }).isVisible();

        await page
            .locator('form')
            .filter({ hasText: 'Login' })
            .getByPlaceholder('Email Address')
            .click();
        await page
            .locator('form')
            .filter({ hasText: 'Login' })
            .getByPlaceholder('Email Address')
            .fill('wrong.rakibul.test@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('123456');

        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByText('Your email or password is incorrect!').isVisible(); // visible incorrect
        
    });
});

