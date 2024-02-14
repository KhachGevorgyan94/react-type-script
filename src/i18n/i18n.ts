import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import languageEN from './locales/en/translations.json'
import languageHY from './locales/hy/translations.json'
import languageRU from './locales/ru/translations.json'
import {LanuagesEnum} from "../enums/lanuages.enum";

const resources = {
    eng: {
        translation: languageEN
    },
    hy: {
        translation: languageHY
    },
    ru: {
        translation: languageRU
    },

};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
//     keySeparator: false,

        lng: LanuagesEnum[LanuagesEnum.english], // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        fallbackLng: 'eng',

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;



// import i18n from 'i18next'
// import {initReactI18next} from 'react-i18next'
//
// import en_translation from './locales/en/translations.json'
// import ru_translation from './locales/ru/translations.json'
// import hy_translation from './locales/hy/translations.json'
//
// // const DEFAULT_LOCALE: string = LanguageEnum[LanguageEnum.armenian];
//
// i18n.use(initReactI18next).init({
//     // debug: global.isDev,
//     debug: false,
//     resources: {
//         en: {translation: en_translation},
//         ru: {translation: ru_translation},
//         hy: {translation: hy_translation},
//     },
//     lng: DEFAULT_LOCALE,
//     fallbackLng: 'en',
//     keySeparator: false,
//     interpolation: {
//         escapeValue: false,
//     },
// }).then()
//
// export default i18n
