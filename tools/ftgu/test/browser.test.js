import {test, expect} from '@playwright/test'
import {prepareTest} from '../src/prepare-browser-test.js'
import {$} from 'execa'

// start server on port 3000 to ensure that `prepareTest` kills it
$`serve . --no-port-switching -p 3000`.catch(() => {})
await expect(() => fetch('http://localhost:3000')).toPass()

prepareTest(new URL('./07-test', import.meta.url), test, expect)

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toHaveText('Hello')
})

test('prepare test fails on non-existing directory', () => {
  expect(() => prepareTest('../non-existing-directory', test, expect)).toThrowError(
    /exercise directory .+ does not exist/
  )
})
