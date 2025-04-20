import {test, expect} from '@playwright/test'
import {exerciseDirectory, prepareTest} from '@giltayar/ftgu/prepare-browser-test'

const {$} = prepareTest(exerciseDirectory(import.meta.url), test, expect)

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toContainText('at home tv 🏠at home tv 🏠at home tv 🏠')

  await $`pnpm run build:kitchen`

  await page.reload()

  await expect(page.locator('#root')).toContainText(
    'in the kitchen tv 🍴in the kitchen tv 🍴in the kitchen tv 🍴'
  )
})
