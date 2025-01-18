import {test, expect} from '@playwright/test'
import type {throttledShow} from '../src/throttled-show.js'

declare global {
  interface Window {
    throttledShow: typeof throttledShow
  }
}

test('should show message in interval', async ({page}) => {
  await page.goto('/test/index.html')

  await page.evaluate(() => {
    const show = window.throttledShow('hello', {interval: 1000})

    for (const i of [1, 2, 3]) {
      show()
    }
  })

  await expect(page.locator('#root')).toHaveText('hello')

  await page.waitForTimeout(1000)

  await expect(page.locator('#root')).toHaveText('hellohello')

  await page.waitForTimeout(1000)

  await expect(page.locator('#root')).toHaveText('hellohellohello')

  await page.waitForTimeout(1000)

  await expect(page.locator('#root')).toHaveText('hellohellohello')
})
