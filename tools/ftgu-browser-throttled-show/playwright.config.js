import {defineConfig} from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'kill-port 3000 ; serve .',
    port: 3000,
  },
})
