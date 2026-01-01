import { test, expect } from '@playwright/test';

test('Home page screenshot test', async ({ page }) => {
  // Set viewport size to match existing screenshots
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // Navigate to the home page
  await page.goto('http://localhost:3000');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot
  await page.screenshot({
    path: 'tests/screenshots/home-page-new.png',
    fullPage: true
  });
  
  // Compare with existing screenshot (if exists)
  // This will fail if the screenshot doesn't match
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('home-page.png');
});

test('About page screenshot test', async ({ page }) => {
  // Set viewport size to match existing screenshots
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // Navigate to the about page
  await page.goto('http://localhost:3000/about');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot
  await page.screenshot({
    path: 'tests/screenshots/about-page-new.png',
    fullPage: true
  });
  
  // Compare with existing screenshot (if exists)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('about-page.png');
});

test('Blog page screenshot test', async ({ page }) => {
  // Set viewport size to match existing screenshots
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // Navigate to the blog page
  await page.goto('http://localhost:3000/blog');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot
  await page.screenshot({
    path: 'tests/screenshots/blog-page-new.png',
    fullPage: true
  });
  
  // Compare with existing screenshot (if exists)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('blog-page.png');
});

test('Projects page screenshot test', async ({ page }) => {
  // Set viewport size to match existing screenshots
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // Navigate to the projects page
  await page.goto('http://localhost:3000/projects');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot
  await page.screenshot({
    path: 'tests/screenshots/projects-page-new.png',
    fullPage: true
  });
  
  // Compare with existing screenshot (if exists)
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('projects-page.png');
});