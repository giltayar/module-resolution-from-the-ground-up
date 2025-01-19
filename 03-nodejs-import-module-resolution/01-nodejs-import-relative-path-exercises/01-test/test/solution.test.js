import {test, expect} from '@playwright/test'
import {prepareTest, exerciseDirectory} from '@giltayar/ftgu/prepare-nodejs-test'

const {$} = prepareTest(exerciseDirectory(import.meta.url), test)

test('test', async () => {
  const {stdout} = await $({lines: true})`node index.js`

  await expect(stdout).toStrictEqual([
    'Hello, World!',
    'Hello, World!',
    'Hello, World!',
    'Hello, World!',
    'Hello, World!',
  ])
})
