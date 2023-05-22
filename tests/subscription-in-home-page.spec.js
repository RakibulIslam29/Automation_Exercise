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

test.describe('Verify Subscription in home page', () => {

    test('Does Verify Subscription in home page properly?', async ({ page }) => {


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

        //Verify text SUBSCRIPTION
        await page.getByRole('heading', { name: 'Subscription' }).isVisible();
        await page.getByPlaceholder('Your email address').click();
        await page.getByPlaceholder('Your email address').fill('rakib.test@gmail.com');
        await page.getByRole('button', { name: '' }).click();

        await page.getByText('You have been successfully subscribed!').isVisible(); // Verify success message
        await page.getByText('Get the most recent updates from our site and be updated your self...').isVisible();

    });
});

