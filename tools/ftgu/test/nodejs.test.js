import {rm} from 'node:fs/promises'
import {test, expect} from '@playwright/test'
import {prepareTest} from '../src/prepare-nodejs-test.js'

const testDir = new URL('./08-test', import.meta.url)

await rm(new URL('./dist', testDir), {recursive: true, force: true})

const {$} = prepareTest(testDir, test)

test('test', async () => {
  const {stdout} = await $({lines: true})`node ./dist/index.js`

  expect(stdout).toStrictEqual([
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
