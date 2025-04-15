#!/usr/bin/env node

import {pathToFileURL} from 'node:url'
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import {$} from 'execa'

await yargs(hideBin(process.argv))
  .command(
    'test',
    'Run a test',
    () => {},
    async (argv) => {
      const dir = testDirectory(pathToFileURL(process.cwd()))
      const $$ = $({cwd: dir})

      await $$`pnpm install`
      await $$`pnpm run --if-present build`
      await $$({stdio: 'inherit'})`pnpm test`
    }
  )
  .demandCommand(1, 'You need to specify a command')
  .strict()
  .help()
  .parse()

/**
 *
 * @param {URL} currentDir
 * @returns
 */
function testDirectory(currentDir) {
  const [dirname] = currentDir.pathname.split('/').slice(-1)

  const dirnameBase = dirname.replace(/\-.*$/, '')
  const testDir = dirnameBase + '-test'

  return new URL(testDir, currentDir)
}
