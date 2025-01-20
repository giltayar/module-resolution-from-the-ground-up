import {test, expect} from '@playwright/test'
import {prepareTest} from '../src/prepare-browser-test.js'
import {$} from 'execa'

// don't start server on port 3000 to ensure that `prepareTest` doesn't
// fail if no server is running (compare to what we do in `browser.test.js`)

prepareTest(new URL('./07-test', import.meta.url), test, expect)

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toHaveText('Hello')
})

test('prepare test fails on non-existing directory', () => {
  expect(() =>
    prepareTest(new URL('../non-existing-directory', import.meta.url), test, expect)
  ).toThrowError(/exercise directory .+ does not exist/)
})
