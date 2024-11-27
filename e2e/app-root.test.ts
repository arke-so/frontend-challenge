import { expect, test } from '@playwright/test'

test('home page has expected h2', async ({ page }) => {
  await page.goto('/app')
  await expect(page.locator('h2')).toBeVisible()
})
