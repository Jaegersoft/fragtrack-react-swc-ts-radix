import { expect, test } from "@playwright/test";

test.describe("Counter", async () => {
  test("Counter test scenarios", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/FRAGTrack/);
  });
});
