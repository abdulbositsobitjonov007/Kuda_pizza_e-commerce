import React, { createContext, useState } from 'react'
import languages from '../translation/languages';

// eslint-disable-next-line react-refresh/only-export-components
export const LanguagesContext = createContext();

function ChangeLang({ children }) {

    const [Language, setLanguage] = useState('ru');

    const currLanguage = languages[Language];

  return (

    <LanguagesContext.Provider value={{ Language, setLanguage, currLanguage }}>
      {children}
    </LanguagesContext.Provider>
  )
}

export default ChangeLang