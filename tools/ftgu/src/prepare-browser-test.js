import {exec} from 'node:child_process'

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
  test.beforeAll(async () => {
    exec(`pnpm install && pnpm start`, {cwd: exerciseDirectory})

    await expect(() => fetch('http://localhost:3000')).toPass()
  })
}
