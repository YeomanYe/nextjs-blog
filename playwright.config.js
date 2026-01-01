import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotDir: './tests/snapshots',
  testMatch: /.*\.test\.js/,
  
  // Configure browser options
  use: {
    browserName: 'chromium',
    viewport: { width: 1280, height: 800 },
    headless: true,
    ignoreHTTPSErrors: true,
  },
  
  // Configure snapshot comparison
  expect: {
    toMatchSnapshot: {
      maxDiffPixels: 100,
      threshold: 0.2,
    },
  },
  
  // Run tests in parallel
  workers: 2,
});