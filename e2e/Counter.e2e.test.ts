import { test, expect } from "@playwright/test";

test.describe("Counter", async () => {
  test("Counter test scenarios", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("React + SWC + Vite + Radix");
  });
});
