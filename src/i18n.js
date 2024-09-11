// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Import the detector

import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";
import itTranslation from "./locales/it.json";
import frTranslation from "./locales/fr.json";

i18n
  .use(LanguageDetector) // Use the language detector plugin
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      it: { translation: itTranslation },
      fr: { translation: frTranslation },
    },
    fallbackLng: "de", // Fallback to German if the language is not detected
    detection: {
      // Configuration for language detection and caching
      order: ["localStorage", "cookie", "navigator"], // Priority order for language detection
      caches: ["localStorage", "cookie"], // Store the detected language in both localStorage and cookie
    },
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
