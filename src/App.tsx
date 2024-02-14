import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import ReactDatePicker, {registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hy from "date-fns/locale/hy"; // the locale you want
import ru from "date-fns/locale/ru"; // the locale you want
import eng from "date-fns/locale/en-GB";
import {LanuagesEnum, StatusEnum} from "./enums/lanuages.enum"; // the locale you want
registerLocale("hy", hy);
registerLocale("ru", ru);
registerLocale("eng", eng);
/**
 *  TypeScript projkect@ install anelu hamar reacti mijocov  grum eqn hetevyal hraman@
 *
 *  npx create-react-app  <folderName> || .  --template typescript
 *  any -  da nshanakum e amen inch karox e @Nddunel mer parametr@
 * **/
function App() {
    const [language, setLanguage] = useState('eng')
    const {t, i18n} = useTranslation();

    const handleCLick = (value:string) => {
        i18n.changeLanguage(value)
        setLanguage(value)
        localStorage.setItem('language', value)
    }

    const changeLanguageDatePicker = ()=>{
        switch (language){
            case LanuagesEnum[LanuagesEnum.english]:{
                return eng
            }
            case LanuagesEnum[LanuagesEnum.armenian]:{
                return hy
            }
            case LanuagesEnum[LanuagesEnum.russian]:{
                return ru
            }
        }
    }

    useEffect(() => {
        let lang = localStorage.getItem('language')
        if(lang){
            i18n.changeLanguage(lang)
            setLanguage(lang)
        }
        console.log(LanuagesEnum[LanuagesEnum.english])
    }, []);


    return (
        <div>
            <ul>
                <li onClick={() => {
                    handleCLick('hy')
                }}>HY
                </li>
                <li
                    onClick={() => {
                        handleCLick('eng')
                    }}>ENG
                </li>
                <li
                    onClick={() => {
                        handleCLick('ru')
                    }}>RU
                </li>
            </ul>

            <p>{t('hello_world')}</p>
            <ReactDatePicker locale={changeLanguageDatePicker()} onChange={()=>{

            }}/>

            {/*{StatusEnum.pending===0?<p>pending</p>: null}*/}
        </div>
    );
}

export default App;
