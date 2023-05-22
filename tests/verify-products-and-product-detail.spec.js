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

test.describe('Verify All Products and product detail page', () => {

    test('Does Verify All Products and product detail page properly?', async ({ page }) => {


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

        // Product List
        await page
            .locator('#accordian div')
            .filter({ hasText: 'Women' })
            .nth(1)
            .isVisible();
        await page
            .locator('#accordian div')
            .filter({ hasText: 'Men' })
            .nth(3)
            .isVisible();
        await page
            .locator('#accordian div')
            .filter({ hasText: 'Kids' })
            .nth(1)
            .isVisible();

        //View Product of first products
        await page
            .locator('.choose > .nav > li > a')
            .first()
            .click();
        await page
            .getByRole('img', { name: 'ecommerce website products' })
            .first()
            .isVisible();
        await page.getByRole('heading', { name: 'Blue Top' }).isVisible();
        await page.getByText('Category: Women > Tops').isVisible();

        await page
            .getByRole('img', { name: 'ecommerce website products' })
            .nth(2)
            .isVisible();
        await page.getByText('Rs. 500').isVisible();
        await page.getByText('Availability: In Stock').isVisible();
        await page.getByText('Condition: New').isVisible();
        await page.getByText('Brand: Polo').isVisible();

    });

});

