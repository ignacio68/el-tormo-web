import i18n from '@/i18n'
import { config } from '@vue/test-utils'

// @ts-expect-error type
if (!globalThis.defined) {
  config.global.plugins = [i18n]
  // @ts-expect-error type
  globalThis.defined = true
}
