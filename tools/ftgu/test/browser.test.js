import {test, expect} from '@playwright/test'
import {prepareTest} from '../src/prepare-browser-test.js'
import {$ as standard$} from 'execa'

// start server on port 3000 to ensure that `prepareTest` kills it
standard$`serve . --no-port-switching -p 3000`.catch(() => {})
await expect(() => fetch('http://localhost:3000')).toPass()

const {$} = prepareTest(new URL('./07-test', import.meta.url), test, expect)

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toHaveText('Hello')
})

test('prepare test fails on non-existing directory', () => {
  expect(() =>
    prepareTest(new URL('../non-existing-directory', import.meta.url), test, expect)
  ).toThrowError(/exercise directory .+ does not exist/)
})

test('$ return value works', async () => {
  const {stdout} = await $({lines: true})`ls`

  expect(stdout).toEqual(expect.arrayContaining(['index.html', 'dist', 'package.json']))
})
