import {expect, test} from 'playwright/test'
import {hello, world} from 'ftgu-hello-world'

test('hello', () => {
  expect(hello('english')).toBe('Hello')
  expect(hello('spanish')).toBe('¡Hola')
  expect(hello('italian')).toBe('Ciao')
  expect(hello('chinese')).toBe('你好')
  expect(hello('????')).toBe('Hello')
})

test('world', () => {
  expect(world('english')).toBe('World')
  expect(world('spanish')).toBe('Mundo')
  expect(world('italian')).toBe('Mondo')
  expect(world('chinese')).toBe('世界')
  expect(world('????')).toBe('World')
})
