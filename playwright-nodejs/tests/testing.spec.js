// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://google.com');
  await delay(1000);
  await page.locator('//input[@title="Search"]').fill('youtube');
  await delay(1000);
  await page.keyboard.press('Enter');
  await delay(1000);
  await page.locator("//a[@href='https://www.youtube.com/']//h3[@class='LC20lb MBeuO DKV0Md']").click();
  await delay(1000);
  await page.locator("(//input[@id='search'])[1]").click();
  await delay(1000);
  await page.locator("(//input[@id='search'])[1]").fill('Hello');
  await delay(1000);
  await page.keyboard.press('Enter');
  await delay(1000);
  await page.goto('https://google.com');
  await delay(1000);
});
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}