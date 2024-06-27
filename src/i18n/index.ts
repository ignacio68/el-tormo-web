import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'
import it from './locales/it'
import ru from './locales/ru'

const userLanguage = window.navigator.language.split('-')[0]

const i18n = createI18n({
  locale: userLanguage || import.meta.env.VITE_DEFAULT_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    es,
    fr,
    it,
    ru
  }
})

export default i18n
