import { test, expect } from '@playwright/test';

test('get the complete', async ({ page }) => {
  await page.goto('https://github.com/pricing?ref_loc=search');
  await page.getByRole('heading', { name: 'Get the complete developer' }).click();
});

test('join for free', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Join for free' }).first().click();
});

test('continue with team', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Continue with Team' }).first().click();
});

test('start a free trial', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Start a free trial' }).first().click();
});

test('compare all features', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Compare all features' }).click();
});  
 
test('read the case study', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'Read the case study' }).click();
});

test('code workflow', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('heading', { name: 'Code workflow' }).click();
});  
 
test('github copilot', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');
 await page.getByRole('link', { name: 'GitHub Copilot Starting at $' }).click();
});

test('codespaces', async ({ page }) => {
 await page.goto('https://github.com/pricing?ref_loc=search');  
 await page.getByRole('link', { name: 'Codespaces Starting at $0.18' }).click();
});

test('large file', async ({ page }) => {
  await page.goto('https://github.com/pricing?ref_loc=search');  
  await page.getByRole('link', { name: 'Large File Storage $5 per' }).click();
});
 //