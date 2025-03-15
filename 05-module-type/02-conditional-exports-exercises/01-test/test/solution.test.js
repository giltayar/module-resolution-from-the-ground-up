import {test, expect} from '@playwright/test'
import {prepareTest, exerciseDirectory} from '@giltayar/ftgu/prepare-nodejs-test'

const {$} = prepareTest(exerciseDirectory(import.meta.url), test)

test('test', async () => {
  console.log('Running "node index.js"')
  const {stdout} = await $`node index.js`

  expect(stdout).toBe('hello hello world')
})
