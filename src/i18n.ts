import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        'login': {
            'submit': 'Create account',
            'continue': 'Next',
            'back': 'Back',
        }
      }
    },
    fr: {
        translation: {
            'login': {
                'submit': 'Se connecter',
                'continue': 'Suivant',
                'back': 'Retour',
            }
          }
    }
  };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


export default i18n;