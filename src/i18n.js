
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ar from './locales/ar'

const savedLanguage = localStorage.getItem('honey-language')
const language = savedLanguage === 'ar' ? 'ar' : 'en'

document.documentElement.lang = language
document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'

const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: 'en',
  messages: {
    en,
    ar
  }
})

export default i18n
