import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
    minify: false,
  },
  resolve: {
    // conditions: ['source'],
  }
})
