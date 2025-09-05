// src/i18n/index.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt.json'
import en from './locales/en.json'
import it from './locales/it.json'

const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
const fallbackLng = 'pt'
const lng = saved || fallbackLng

i18n
  .use(initReactI18next)
  .init({
    lng,
    fallbackLng,
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      it: { translation: it },
    },
    interpolation: { escapeValue: false },
  })

export default i18n
