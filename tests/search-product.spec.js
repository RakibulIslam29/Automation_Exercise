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

test.describe('Search Product', () => {

    test('Does Search Product Working properly?', async ({ page }) => {


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

        // products
        await page.getByRole('link', { name: ' Products' }).click();
        await page.getByRole('img', { name: 'Website for practice' }).isVisible();
        await page.getByRole('heading', { name: 'Category' }).isVisible();
        await page.getByRole('heading', { name: 'All Products' }).isVisible();

        // Search Product
        await page.getByPlaceholder('Search Product').click();
        await page.getByPlaceholder('Search Product').fill('Men Tshirt');
        await page.getByRole('button', { name: '' }).click();

        // Verify 'SEARCHED PRODUCTS' is visible
        await page.getByRole('heading', { name: 'Searched Products' }).isVisible();
        await page.locator('.product-overlay').isVisible();
        await page
            .getByRole('heading', { name: 'Rs. 400' })
            .nth(1)
            .isVisible();
        await page
            .getByText('Men Tshirt')
            .nth(2)
            .isVisible();

    });
});

