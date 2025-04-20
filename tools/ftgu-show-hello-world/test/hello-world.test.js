import {expect, test} from 'playwright/test'
import {readFile} from 'fs/promises'

test('hello', async () => {
  let consoleLogMessage = ''
  console.log = (...msg) => {
    consoleLogMessage = msg.join(' ') + '\n'
  }
  await import('ftgu-show-hello-world')

  expect(consoleLogMessage).toBe(
    await readFile(new URL('./hello-mundo.txt', import.meta.url), 'utf-8')
  )
})
