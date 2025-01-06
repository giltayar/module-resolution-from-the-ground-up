import {exec} from 'node:child_process'
import fs from 'node:fs'

/**
 *
 * @param {string} importMetaUrl
 */
export function exerciseDirectory(importMetaUrl) {
  const solution = process.env.SOLUTION
  const exerciseNumber = new URL('.', importMetaUrl).href.split('/').at(-2)?.replace('-test', '')

  return solution ? `../${exerciseNumber}-${solution}` : `../${exerciseNumber}`
}

/**
 *
 * @param {string | URL} exerciseDirectory
 * @param {import('@playwright/test').TestType<{}, {}>} test
 * @param {import('@playwright/test').Expect} expect
 */
export function prepareTest(exerciseDirectory, test, expect) {
  const directoryAsString =
    typeof exerciseDirectory === 'string' ? exerciseDirectory : exerciseDirectory.href

  if (!fs.existsSync(exerciseDirectory)) {
    throw new Error(`exercise directory ${directoryAsString} does not exist`)
  }

  test.beforeAll(async () => {
    console.log('starting server in', directoryAsString)

    exec(`pnpm install && pnpm start`, {cwd: exerciseDirectory})

    await expect(() => fetch('http://localhost:3000')).toPass()
  })
}
