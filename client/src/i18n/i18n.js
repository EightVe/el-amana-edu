import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from "./en.json"
import translationAR from "./ar.json"

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

const storedLanguage = localStorage.getItem("language");

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage || "ar", // Use stored language or default to 'en'
    interpolation: {
      escapeValue: false 
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;