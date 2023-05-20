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

        // Contact Us Form
        await page.getByRole('link', { name: ' Contact us' }).click();
        await page.getByRole('heading', { name: 'Get In Touch' }).isVisible();
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill('Rakibul Islam');
        await page.getByPlaceholder('Email', { exact: true }).click();
        await page.getByPlaceholder('Email', { exact: true }).fill('rakib.test@gmail.com');
        await page.getByPlaceholder('Subject').click();
        await page.getByPlaceholder('Subject').fill('Test');
        await page.getByPlaceholder('Your Message Here').click();
        await page.getByPlaceholder('Your Message Here').fill('Welcome to Automation Exercise!');

        // Upload File
        await page.setInputFiles('input[name="upload_file"]', 'tests/request-masking-test.pdf');
        await page.getByRole('button', { name: 'Submit' }).click();
    });
});

