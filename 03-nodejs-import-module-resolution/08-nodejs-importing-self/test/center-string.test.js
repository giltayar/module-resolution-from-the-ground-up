import {test, expect} from '@playwright/test'
import {centerString} from 'center-string'

test('should center a string within specified width', () => {
  expect(centerString('hello', 15)).toBe('     hello     ')
})

test('should handle string wider than specified width', () => {
  expect(centerString('hello world', 5)).toBe('hello world')
})

test('should handle empty string', () => {
  expect(centerString('', 10)).toBe('          ')
})

test('should handle exact width', () => {
  expect(centerString('hello', 5)).toBe('hello')
})

test('should handle odd padding distribution', () => {
  expect(centerString('hi', 5)).toBe(' hi  ')
})
