import {defineConfig} from '@playwright/test'

export default defineConfig({
  timeout: 10_000,
  testDir: 'test',
  testMatch: '*.test.js',
})
