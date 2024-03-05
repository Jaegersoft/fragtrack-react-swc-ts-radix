/* eslint-disable import/no-default-export */
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://localhost:5173/",
    // Collect trace when retrying the failed test.
    trace: "on-first-retry"
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "Chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] }
    },
    {
      name: "WebKit",
      use: { ...devices["Desktop Safari"] }
    }
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: "pnpm run dev"
  }
});
