import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageEN from "./locale/en/translate.json";

declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    languageEN: typeof languageEN.translations;
  }
}

// @ts-ignore
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
    },
    lng: "en",
    fallbackLng: "en",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false, // react already safes from xss
      formatSeparator: ","
    },
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default"
    }
  });


export default i18n;
