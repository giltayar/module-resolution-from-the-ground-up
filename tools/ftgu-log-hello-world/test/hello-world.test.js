import {expect, test} from 'playwright/test'

test('hello', async () => {
  let consoleLogMessage = ''
  console.log = (...msg) => {
    consoleLogMessage = msg.join(' ') + '\n'
  }
  await import('ftgu-log-hello-world')

  expect(consoleLogMessage).toBe('Hello, Mondo\n')
})
