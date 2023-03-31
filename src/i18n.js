import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
// load translation using http -> see /public/locales

  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;
