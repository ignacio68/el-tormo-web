import { createI18n } from 'vue-i18n'
import enMessages from './locales/en'
import esMessages from './locales/es'
import frMessages from './locales/fr'
import itMessages from './locales/it'
import ruMessages from './locales/ru'

const userLanguage = window.navigator.language.split('-')[0]

const i18n = createI18n({
  locale: userLanguage || import.meta.env.VITE_DEFAULT_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    en: enMessages,
    es: esMessages,
    fr: frMessages,
    it: itMessages,
    ru: ruMessages
  }
})

export default i18n
