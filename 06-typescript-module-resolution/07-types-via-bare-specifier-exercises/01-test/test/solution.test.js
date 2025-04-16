import {test, expect} from '@playwright/test'
import {exerciseDirectory, prepareTest} from '@giltayar/ftgu/prepare-browser-test'

prepareTest(exerciseDirectory(import.meta.url), test, expect)

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toHaveText(/hello worldello worldhllo worldhe/)
})
