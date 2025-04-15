import {test, expect} from '@playwright/test'
import {rejects} from 'assert'
import {$} from 'execa'

test('test cli in exercise dir', async () => {
  const {stdout} = await $({cwd: 'test/08'})`node ../../src/cli.js test`

  expect(stdout).toContain('dummy test run')
})

test('test cli in solution dir', async () => {
  const {stdout} = await $({cwd: 'test/08-solution'})`node ../../src/cli.js test`

  expect(stdout).toContain('dummy test run')
})

test('test help', async () => {
  const {stderr, failed} = await $({
    cwd: 'test/08-solution',
    reject: false,
  })`node ../../src/cli.js zest`

  expect(failed).toBe(true)
  expect(stderr).toMatch(/cli.js test\s+Run a test/)
  expect(stderr).toContain('Unknown argument: zest')
  expect(stderr).toMatch(/\-\-version\s+Show version number/)
})
