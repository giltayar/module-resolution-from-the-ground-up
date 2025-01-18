import {exec} from 'node:child_process'
import fs from 'node:fs'
import {parseArgs} from 'node:util'

/**
 *
 * @param {string} importMetaUrl
 */
export function exerciseDirectory(importMetaUrl) {
  const args = parseArgs({
    options: {
      solution: {
        type: 'boolean',
        short: 's',
        default: false,
      },
      index: {
        type: 'string',
        short: 'i',
        default: '1',
      },
    },
  })
  const solutionIndex = parseInt(args.values.index, 10)
  const solution =
    process.env.SOLUTION ??
    (args.values.solution
      ? solutionIndex === 1
        ? 'solution'
        : `solution-${solutionIndex}`
      : undefined)
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
