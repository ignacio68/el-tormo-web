import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    VueI18nPlugin({
      runtimeOnly: false, // <--- add this
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/i18n/locales/**'
      )
    })
  ],
  test: {
    // enable jest-like global test APIs
    globals: true,
    root: './src/',
    exclude: [...configDefaults.exclude, 'e2e/**'],
    environment: 'happy-dom',
    setupFiles: ['./src/tests/drivers/vitest/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: `./src/tests/drivers/vitest/coverage`
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
