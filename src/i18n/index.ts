import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../assets/locales/en/translation.json';

const resources = {
  en: {
    translation: translationEN
  }
};

const options = {
  order: ['querystring', 'navigator'],

  lookupQuerystring: 'lng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  nonExplicitSupportedLngs: true,
  detection: options
});

export default i18n;
