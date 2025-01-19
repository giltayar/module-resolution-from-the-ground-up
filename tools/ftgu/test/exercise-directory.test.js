import {test, expect} from '@playwright/test'
import {exerciseDirectory} from '../src/exercise-directory.js'

test('exerciseDirectory', () => {
  const importMetaUrl = new URL('./07-test/test/test/dummy-test.js', import.meta.url).href

  process.env.SOLUTION = 'solution'
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution')

  delete process.env.SOLUTION
  expect(exerciseDirectory(importMetaUrl)).toBe('../07')

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '--solution']
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution')

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '--solution', '--index=2']
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution-2')

  process.argv = ['node', 'tools/ftgu/test/test.spec.js', '-s', '-i', '2']
  expect(exerciseDirectory(importMetaUrl)).toBe('../07-solution-2')
})
