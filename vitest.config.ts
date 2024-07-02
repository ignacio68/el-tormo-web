import { defineConfig, mergeConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
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
    }
  })
)
