import {$} from 'execa'
import fs from 'node:fs'
export {exerciseDirectory} from './exercise-directory.js'

/**
 *
 * @param {string | URL} exerciseDirectory
 * @param {import('@playwright/test').TestType<{}, {}>} test
 */
export function prepareTest(exerciseDirectory, test) {
  const $$ = $({cwd: exerciseDirectory})
  const directoryAsString =
    typeof exerciseDirectory === 'string' ? exerciseDirectory : exerciseDirectory.href

  if (!fs.existsSync(exerciseDirectory)) {
    throw new Error(`exercise directory ${directoryAsString} does not exist`)
  }

  test.beforeAll(async () => {
    console.log('"pnpm install" in', directoryAsString)

    await $$({stdio: 'inherit'})`pnpm install`
  })

  return {$: $$}
}
