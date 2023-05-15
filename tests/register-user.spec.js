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

test.describe('Register User', () => {

    test('Does Visible Home Page Everything?', async ({ page }) => {

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

        //Category
        await page.getByRole('heading', { name: 'Category' }).isVisible();
        await page.getByRole('heading', { name: ' Women' }).isVisible();
        await page.getByRole('heading', { name: ' Men' }).isVisible();
        await page.getByRole('heading', { name: ' Kids' }).isVisible();
        //Women
        await page.getByRole('link', { name: ' Women' }).click();
        await page
            .locator('#Women')
            .getByRole('listitem')
            .filter({ hasText: 'Dress' })
            .isVisible();
        await page.getByRole('listitem').filter({ hasText: 'Tops' }).isVisible();
        await page.getByRole('listitem').filter({ hasText: 'Saree' }).isVisible();
        //Men
        await page.getByRole('link', { name: ' Men' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Tshirts' }).isVisible();
        await page.getByRole('listitem').filter({ hasText: 'Jeans' }).isVisible();
        // Kids
        await page.getByRole('link', { name: ' Kids' }).click();
        await page
            .locator('#Kids')
            .getByRole('listitem')
            .filter({ hasText: 'Dress' })
            .isVisible();
        await page.getByRole('listitem').filter({ hasText: 'Tops & Shirts' }).isVisible();

        //Feature Items
        await page.getByRole('heading', { name: 'Features Items' }).isVisible();
        //Blue Top
        await page.locator('.product-overlay').first().isVisible();
        await page.getByText('Rs. 500 Blue Top Add to cart').nth(1).isVisible();
        await page.locator('.choose > .nav > li > a').first().isVisible();
        //Tshirt
        await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 400 Men Tshirt Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        //Sleeveless Dress
        await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 1000 Sleeveless Dress Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        //Stylish Dress
        await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 1500 Stylish Dress Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Winter Top
        await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 600 Winter Top Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(7) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Summer White Top
        await page.locator('div:nth-child(8) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 400 Summer White Top Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(8) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Madame Top
        await page.locator('div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 1000 Madame Top For Women Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(9) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Fancy Green Top
        await page.locator('div:nth-child(10) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 700 Fancy Green Top Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(10) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Sleeves Printed Top
        await page.locator('div:nth-child(11) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 499 Sleeves Printed Top - White Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(11) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Half Sleeves Top
        await page.locator('div:nth-child(12) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 359 Half Sleeves Top Schiffli Detailing - Pink Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(12) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Frozen Top
        await page.locator('div:nth-child(13) > .product-image-wrapper > .single-products > .product-overlay').isVisible();
        await page.getByText('Rs. 278 Frozen Tops For Kids Add to cart').nth(1).isVisible();
        await page.locator('div:nth-child(13) > .product-image-wrapper > .choose > .nav > li > a').isVisible();
        // Brands
        await page.getByRole('heading', { name: 'Brands' }).isVisible();

        // Subscription
        await page.getByRole('heading', { name: 'Subscription' }).isVisible();
        await page.getByPlaceholder('Your email address').click();
        await page.getByPlaceholder('Your email address').fill('rakibul.test@gmail.com');
        await page.getByText('You have been successfully subscribed!').isVisible();
        await page.getByText('Get the most recent updates from our site and be updated your self...').isVisible();
    });

    test('Does Signup working Properly?', async ({ page }) => {

        await page.getByRole('link', { name: ' Signup / Login' }).click(); // click login/signup button
        await page.getByRole('heading', { name: 'New User Signup!' }).isVisible();
        await page.getByPlaceholder('Name').click();
        await page.getByPlaceholder('Name').fill('Rakibul Islam');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('rakibul.test@gmail.com');
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
        // Delete Account
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await page.getByText('Account Deleted!').isVisible();
        await page.getByText('Your account has been permanently deleted!').isVisible();
        await page.getByText('You can create new account to take advantage of member privileges to enhance you').isVisible();
        await page.getByRole('link', { name: 'Continue' }).isVisible();
    });
});

