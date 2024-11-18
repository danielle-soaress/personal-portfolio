import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../src/locales/en.json'
import ptTranslation from '../src/locales/pt.json'


i18n
    .use(initReactI18next)
    .init({
        debug: true,
        initImmediate: false,
        preload: ["pt"],
        fallbackLng: "pt",
        debug: true,
        lgn: "pt",
        resources: {
            en: {
                translation: enTranslation
            },

            pt: {
                translation: ptTranslation
            },
        },
        interpolation: {
            escapeValue: false
        },
    });


export default i18n
