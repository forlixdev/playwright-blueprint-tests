import { defineConfig, devices } from '@playwright/test';


export default defineConfig({

  globalSetup: require.resolve('./tests/global-setup.ts'),
  //outputDir: '../test-results/',
  metadata: {
    title: 'Playwright Tests',
    description: 'Playwright Tests',
  },
  testDir: './tests',
  preserveOutput: "always",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 2,
  workers: process.env.PARALLEL ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ['html', { open: 'never', outputFolder: './test-report' }]],
  //snapshotDir: '../results/',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },
  grepInvert: new RegExp(".*@ignore.*"),
  /* Configure projects for major browsers */
  projects: [
    {
      name: "api",
      testDir: './tests/api'
    },
    {
      name: 'web',
      testDir: './tests/web',
      use: { ...devices['Desktop Chrome'] },

    }
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
