import { test, expect } from '@playwright/test';

//pagina principal
test('sign in', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign in' }).click();
});

test('sign up', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Sign up' }).click();

});

test('free enterprise', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Start a free enterprise trial' }).first().click();
});

test('sign up for github button', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('button', { name: 'Sign up for GitHub' }).first().click();
});

test('github actions', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Discover GitHub Actions' }).click();
});

test('github mobile', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Download GitHub Mobile' }).click();
});

test('discussions github', async ({ page }) => {   
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Jump into GitHub Discussions' }).click();
});

test('pull requests', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByRole('link', { name: 'Check out pull requests' }).click();
});

test('footer email', async ({ page }) => {   
   await page.goto('https://github.com/');
   await page.locator('#footer_user_email').click();
});


test('trusted', async ({ page }) => {
   await page.goto('https://github.com/');
   await page.getByText('Trusted by the world’s').click();
});
