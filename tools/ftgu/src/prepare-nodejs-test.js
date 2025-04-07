import {$} from 'execa'
import fs from 'node:fs'
import {fileURLToPath} from 'node:url'
import {relative} from 'node:path'
export {exerciseDirectory} from './exercise-directory.js'

/**
 *
 * @param {string | URL} exerciseDirectoryUrl
 * @param {import('@playwright/test').TestType<{}, {}>} test
 */
export function prepareTest(exerciseDirectoryUrl, test) {
  const $$ = $({cwd: exerciseDirectoryUrl})
  const exerciseDirectory = fileURLToPath(
    typeof exerciseDirectoryUrl === 'string' ? exerciseDirectoryUrl : exerciseDirectoryUrl
  )
  const excersiseDirectoryRelative = relative(process.cwd(), exerciseDirectory)

  if (!fs.existsSync(exerciseDirectory)) {
    throw new Error(`exercise directory ${excersiseDirectoryRelative} does not exist`)
  }

  test.beforeAll(async () => {
    console.log('"pnpm install" in', excersiseDirectoryRelative)

    await $$`pnpm install`
    await $$`pnpm run --if-present build`
  })

  return {$: $$}
}
