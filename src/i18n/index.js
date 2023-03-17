import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import ptBR from './translations/ptBR.json';

i18n.use(initReactI18next).init({
    fallbackLng: "ptBR",
    // fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en,
        ptBR
    }
})