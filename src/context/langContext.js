import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enText from './../lang/en.json'
import esText from './../lang/es.json'


const langContext = React.createContext();

const LangProvider = ({ children }) => {
    let messagesDefault;
    let localeDefault;
    const lang = localStorage.getItem('lang')
    if (lang) {
        localeDefault = lang
        if (lang === 'es') {
            messagesDefault = esText;
        }
        else if (lang === 'en') {
            messagesDefault = enText;
        }
    } else {
        localeDefault = 'es';
        messagesDefault = esText;
    }

    const [mensajes, setMensajes] = useState(messagesDefault);
    const [locale, setLocale] = useState(localeDefault);

    const setLanguage = (language) => {
        switch (language) {
            case 'es':
                setMensajes(esText);
                setLocale('es');
                localStorage.setItem('lang', 'es');
                break;
            case 'en':
                setMensajes(enText);
                setLocale('en');
                localStorage.setItem('lang', 'en');
                break;
            default:
                setMensajes(esText);
                setLocale('es');
                localStorage.setItem('lang', 'es');
        }
    }



    return (
        <langContext.Provider value={{ setLanguage: setLanguage }} >
            <IntlProvider locale={locale} messages={mensajes}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext }