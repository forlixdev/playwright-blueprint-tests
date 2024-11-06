import { test, expect, type Page } from '@playwright/test';
import { logger } from '../utils/utils-lib';

  test('type an email', async ({ page }) => {
    // Create 3 items.
    await page.goto("https://the-internet.herokuapp.com/forgot_password");
    await page.locator("#email").fill(`${process.env.EMAIL}`)
    logger.info(`Inputted email: ${process.env.EMAIL}`);
    await page.locator("#email").press("Enter");
    // Expect a title "to contain" a substring.
    await expect(page.locator("body > h1")).toContainText("Internal Server Error");
  });