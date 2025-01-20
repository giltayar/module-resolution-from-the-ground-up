import {test, expect} from '@playwright/test'
import {prepareTest} from '../src/prepare-nodejs-test.js'

const {$} = prepareTest(new URL('./08-test', import.meta.url), test)

test('test', async () => {
  const {stdout} = await $({lines: true})`node index.js`

  await expect(stdout).toStrictEqual([
    'hello world',
    'hello world',
    'hello world',
    'hello world',
    'hello world',
  ])
})

test('prepare test fails on non-existing directory', () => {
  expect(() =>
    prepareTest(new URL('../non-existing-directory', import.meta.url), test)
  ).toThrowError(/exercise directory .+ does not exist/)
})
