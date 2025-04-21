import {test, expect} from '@playwright/test'
import {prepareTest, exerciseDirectory} from '@giltayar/ftgu/prepare-nodejs-test'

const {$} = prepareTest(exerciseDirectory(import.meta.url), test)

test('test', async () => {
  const {stdout} = await $`node index.js`

  expect(stdout).toBe('hello\nworld\nwow!')
})
