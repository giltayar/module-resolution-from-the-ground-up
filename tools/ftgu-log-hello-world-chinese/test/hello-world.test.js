import {expect, test} from 'playwright/test'

test('hello', async () => {
  let consoleLogMessage = ''
  console.log = (...msg) => {
    consoleLogMessage = msg.join(' ') + '\n'
  }
  await import('ftgu-log-hello-world-chinese')

  expect(consoleLogMessage).toBe('你好, 世界\n')
})
