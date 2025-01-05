import {test, expect} from '@playwright/test'
import {$} from 'execa'

const exerciseNumber = new URL('.', import.meta.url).href.split('/').at(-2)?.replace('-test', '')
const exerciseDirectory =
  process.env.SOLUTION !== undefined
    ? `../${exerciseNumber}-solution${process.env.SOLUTION && '-'}${process.env.SOLUTION}`
    : `../${exerciseNumber}`

test.beforeAll(async () => {
  await $({cwd: exerciseDirectory})`pnpm install`
  $({cwd: exerciseDirectory})`pnpm start`

  await expect(() => fetch('http://localhost:3000')).toPass()
})

test('01', async ({page}) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('#root')).toHaveText(/hello, world/)
})
