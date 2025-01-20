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
  const imuSegments = new URL('.', importMetaUrl).href.split('/')
  const imuPackageSegment = imuSegments.findIndex((segment) => /\d+\-test$/.test(segment))
  const imuPackageDir = imuSegments.slice(0, imuPackageSegment + 1).join('/')

  const exerciseNumber = imuSegments[imuPackageSegment]?.replace('-test', '')

  const dir = solution ? `../${exerciseNumber}-${solution}` : `../${exerciseNumber}`

  return new URL(dir, imuPackageDir + '/')
}
