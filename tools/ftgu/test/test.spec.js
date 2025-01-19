import {test, expect} from '@playwright/test'
import {prepareTest, exerciseDirectory} from '../src/prepare-browser-test.js'

prepareTest(new URL('./07-test', import.meta.url), test, expect)

test('exerciseDirectory', () => {
  const importMetaUrl = new URL('./07-test/dummy-test.js', import.meta.url).href

  process.env.SOLUTION = 'solution'
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution')

  delete process.env.SOLUTION
  expect(exerciseDirectory(importMetaUrl)).toBe('../07')

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '--solution']
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution')

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '--solution', '--index=2']
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution-2')

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '-s', '-i', '2']
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution-2')
})

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/')

  await expect(page.locator('#root')).toHaveText('Hello')
})

test('prepare test fails on non-existing directory', () => {
  expect(() => prepareTest('../non-existing-directory', test, expect)).toThrowError(
    /exercise directory .+ does not exist/
  )
})
