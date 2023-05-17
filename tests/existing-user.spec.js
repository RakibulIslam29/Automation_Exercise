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

        // Register User with existing email
        await page.getByRole('link', { name: ' Signup / Login' }).click(); // click login/signup button
        await page.getByRole('heading', { name: 'New User Signup!' }).isVisible();
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill('Rakibul Islam');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('rakibul.test@gmail.com');
        await page.getByRole('button', { name: 'Signup' }).click(); // submit
        await page.getByText('Email Address already exist!').isVisible(); // verify Email Already exist!

    });


});

