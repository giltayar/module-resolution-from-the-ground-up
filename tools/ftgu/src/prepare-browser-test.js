import {$} from 'execa'
import fs from 'node:fs'
import {relative} from 'node:path'
import killPort from 'kill-port'
import {fileURLToPath} from 'node:url'
export {exerciseDirectory} from './exercise-directory.js'

/**
 *
 * @param {string | URL} exerciseDirectoryUrl
 * @param {import('@playwright/test').TestType<{}, {}>} test
 * @param {import('@playwright/test').Expect} expect
 */
export function prepareTest(exerciseDirectoryUrl, test, expect) {
  const $$ = $({cwd: exerciseDirectoryUrl})
  const exerciseDirectory = fileURLToPath(
    typeof exerciseDirectoryUrl === 'string' ? exerciseDirectoryUrl : exerciseDirectoryUrl
  )
  const excersiseDirectoryRelative = relative(process.cwd(), exerciseDirectory)

  if (!fs.existsSync(exerciseDirectory)) {
    throw new Error(`exercise directory ${excersiseDirectoryRelative} does not exist`)
  }

  test.beforeAll(async () => {
    console.log('starting server in', excersiseDirectoryRelative)

    await Promise.all([$$`pnpm install`, killPort(3000).catch(() => 0)])
    await $$`pnpm run --if-present build`

    void $$`pnpm start`

    await expect(() => fetch('http://localhost:3000')).toPass()

    return {$: $$}
  })
}
