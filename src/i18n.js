import i18n from './i18n';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translation/en.json'; 
import esTranslation from './translation/es.json'; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
