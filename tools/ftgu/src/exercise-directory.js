import {parseArgs} from 'node:util'

/**
 *
 * @param {string} importMetaUrl
 */
export function exerciseDirectory(importMetaUrl) {
  const args = parseArgs({
    strict: false,
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
  const solutionIndex = parseInt(args.values.index.toString(), 10)
  const solution =
    process.env.SOLUTION ??
    (args.values.solution
      ? solutionIndex === 1
        ? 'solution'
        : `solution-${solutionIndex}`
      : undefined)
  const exerciseNumber = new URL('.', importMetaUrl).href
    .split('/')
    .find((segment) => /\d+\-test$/.test(segment))
    ?.replace('-test', '')

  return solution ? `../${exerciseNumber}-${solution}` : `../${exerciseNumber}`
}
