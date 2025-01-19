import {$} from 'execa'
import fs from 'node:fs'
import killPort from 'kill-port'
export {exerciseDirectory} from './exercise-directory.js'

/**
 *
 * @param {string | URL} exerciseDirectory
 * @param {import('@playwright/test').TestType<{}, {}>} test
 * @param {import('@playwright/test').Expect} expect
 */
export function prepareTest(exerciseDirectory, test, expect) {
  const $$ = $({cwd: exerciseDirectory})

  const directoryAsString =
    typeof exerciseDirectory === 'string' ? exerciseDirectory : exerciseDirectory.href

  if (!fs.existsSync(exerciseDirectory)) {
    throw new Error(`exercise directory ${directoryAsString} does not exist`)
  }

  test.beforeAll(async () => {
    console.log('starting server in', directoryAsString)

    await Promise.all([$$({stdio: 'inherit'})`pnpm install`, killPort(3000)])
    void $$({stdio: 'inherit'})`pnpm start`

    await expect(() => fetch('http://localhost:3000')).toPass()

    return {$: $$}
  })
}
