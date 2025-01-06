import {test, expect} from '@playwright/test'
import {exec} from 'node:child_process'

const solution = process.env.SOLUTION
const exerciseNumber = new URL('.', import.meta.url).href.split('/').at(-2)?.replace('-test', '')
const exerciseDirectory = solution ? `../${exerciseNumber}-${solution}` : `../${exerciseNumber}`

test.beforeAll(async () => {
  exec(`pnpm install && pnpm start`, {cwd: exerciseDirectory})

  await expect(() => fetch('http://localhost:3000')).toPass()
})

test('01', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toHaveText(/hello, world/)
})
