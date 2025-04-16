import {test, expect} from '@playwright/test'
import {prepareTest, exerciseDirectory} from '@giltayar/ftgu/prepare-nodejs-test'

const {$} = prepareTest(exerciseDirectory(import.meta.url), test)

test('test', async () => {
  await $`pnpm build`

  const {stdout} = await $`pnpm start`

  expect(stdout).toContain(
    'at home tv 🏠\nat home tv 🏠\nat home tv 🏠\nat home tv 🏠\nat home tv 🏠'
  )

  await $`pnpm build --customConditions kitchen`

  const {stdout: stdoutKitchen} = await $`pnpm run start:kitchen`

  expect(stdoutKitchen).toContain(
    'in the kitchen tv 🍴\nin the kitchen tv 🍴\nin the kitchen tv 🍴\nin the kitchen tv 🍴\nin the kitchen tv 🍴'
  )
})
