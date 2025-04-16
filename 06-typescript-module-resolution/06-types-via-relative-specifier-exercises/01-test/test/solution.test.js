import {test, expect} from '@playwright/test'
import {prepareTest, exerciseDirectory} from '@giltayar/ftgu/prepare-nodejs-test'

const {$} = prepareTest(exerciseDirectory(import.meta.url), test)

test('test', async () => {
  await $`pnpm build`

  const {stdout} = await $`pnpm start`

  expect(stdout).toContain('Hello world')
})
