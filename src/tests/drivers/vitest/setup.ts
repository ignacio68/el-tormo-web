import { config } from '@vue/test-utils'

// @ts-expect-error type
if (!globalThis.defined) {
  // config.global.plugins = [i18n]
  config.global.mocks = {
    $t: (text: string) => text
  }
  // @ts-expect-error type
  globalThis.defined = true
}
