import {expect, test} from 'playwright/test'
import {hello, world} from 'ftgu-hello-world'

test('hello', () => {
  expect(hello('english', {caseType: 'capitalize'})).toBe('Hello')
  expect(hello('english', {caseType: 'lower'})).toBe('hello')
  expect(hello('english', {caseType: 'upper'})).toBe('HELLO')
  expect(hello('spanish', {caseType: 'capitalize'})).toBe('¡Hola')
  expect(hello('italian', {caseType: 'capitalize'})).toBe('Ciao')
  expect(hello('????', {caseType: 'capitalize'})).toBe('Hello')
})

test('world', () => {
  expect(world('english', {caseType: 'capitalize'})).toBe('World')
  expect(world('english', {caseType: 'lower'})).toBe('world')
  expect(world('english', {caseType: 'upper'})).toBe('WORLD')
  expect(world('spanish', {caseType: 'capitalize'})).toBe('Mundo')
  expect(world('italian', {caseType: 'capitalize'})).toBe('Mondo')
  expect(world('????', {caseType: 'capitalize'})).toBe('World')
})

test('not backward compatible', () => {
  expect(() => hello('english')).toThrow()
  expect(() => world('english')).toThrow()
})
