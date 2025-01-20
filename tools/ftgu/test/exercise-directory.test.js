import {test, expect} from '@playwright/test'
import {exerciseDirectory} from '../src/exercise-directory.js'
import {fileURLToPath} from 'node:url'

test('exerciseDirectory', () => {
  const importMetaUrl = new URL('./07-test/test/test/dummy-test.js', import.meta.url).href
  const testPackage = new URL('./07-test/test', import.meta.url).href

  process.env.SOLUTION = 'solution'
  expect(exerciseDirectory(importMetaUrl)).toStrictEqual(new URL('../07-solution', testPackage))

  delete process.env.SOLUTION
  expect(exerciseDirectory(importMetaUrl)).toStrictEqual(new URL('../07', testPackage))

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '--solution']
  expect(exerciseDirectory(importMetaUrl)).toStrictEqual(new URL('../07-solution', testPackage))

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '--solution', '--index=2']
  expect(exerciseDirectory(importMetaUrl)).toStrictEqual(new URL('../07-solution-2', testPackage))

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '-s', '-i', '2']
  expect(exerciseDirectory(importMetaUrl)).toStrictEqual(new URL('../07-solution-2', testPackage))
})
