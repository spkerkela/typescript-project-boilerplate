import { test, expect } from "@playwright/test";

test("opens", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const title = page.locator("#title");
  await expect(title).toHaveText("Hello World");
});
