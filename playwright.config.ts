/* eslint-disable import/no-default-export */
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "e2e",

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Configure the reporter to use, including specifying the output directory for the HTML report.
  reporter: [["html", { outputDir: "e2e/playwright-report" }]],

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    //TODO: Get from env?
    baseURL: "http://localhost:5173/",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry"
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: "chromium"
    }
  ],

  // Run your local dev server before starting the tests.
  webServer: {
    command: "pnpm run dev"
  }
});
